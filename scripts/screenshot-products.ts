/**
 * Screenshot product preview images for the Products grid.
 *
 * Usage: npx tsx scripts/screenshot-products.ts
 *
 * Outputs to public/images/products/<slug>.jpg
 */

import { chromium } from "playwright";
import { mkdirSync } from "fs";
import { join } from "path";

interface Target {
  slug: string;
  url: string;
}

const targets: Target[] = [
  { slug: "gtmvp", url: "https://gtmvp.com" },
  { slug: "claudeskillshq", url: "https://claudeskillshq.com" },
  { slug: "docdoctor", url: "https://demo.docdoctor.ai" },
  { slug: "synapmarketing", url: "https://synapmarketing.com" },
  { slug: "aihomeworkhelp", url: "https://aihomeworkhelp.net" },
  { slug: "studentaidetector", url: "https://studentaidetector.com" },
  { slug: "venturevault", url: "https://venturevault.space" },
  { slug: "competitorintelligence", url: "https://competitorintelligence.co" },
];

const OUT_DIR = join(process.cwd(), "public", "images", "products");
const VIEWPORT = { width: 1440, height: 900 };

async function main() {
  mkdirSync(OUT_DIR, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: VIEWPORT,
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
  });

  for (const t of targets) {
    const page = await context.newPage();
    const out = join(OUT_DIR, `${t.slug}.jpg`);
    try {
      console.log(`→ ${t.url}`);
      // Try networkidle first; fall back to load if it doesn't settle
      try {
        await page.goto(t.url, { waitUntil: "networkidle", timeout: 20_000 });
      } catch {
        console.log(`  networkidle timed out, falling back to load`);
        await page.goto(t.url, { waitUntil: "load", timeout: 30_000 });
      }
      // Settle: wait briefly for any lazy hero content
      await page.waitForTimeout(3000);

      // Dismiss any common cookie/consent banners that might show in the screenshot
      const dismissSelectors = [
        'button:has-text("Accept")',
        'button:has-text("Agree")',
        'button:has-text("Got it")',
        'button:has-text("OK")',
        '[aria-label="Close"]',
      ];
      for (const sel of dismissSelectors) {
        try {
          const btn = page.locator(sel).first();
          if (await btn.isVisible({ timeout: 500 })) {
            await btn.click({ timeout: 1000 });
            await page.waitForTimeout(300);
          }
        } catch {
          /* ignore */
        }
      }

      // Capture viewport-only (top-of-fold) — matches the 16:10 card aspect
      await page.screenshot({
        path: out,
        type: "jpeg",
        quality: 88,
        fullPage: false,
        clip: { x: 0, y: 0, width: VIEWPORT.width, height: 900 },
      });
      console.log(`  saved: ${out}`);
    } catch (e) {
      console.error(`  FAILED: ${t.url} —`, e instanceof Error ? e.message : e);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  console.log(`\nDone. ${targets.length} screenshots into ${OUT_DIR}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
