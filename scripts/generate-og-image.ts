/**
 * Generate SAASpocolypse OG image (1200x630) in neobrutalist style.
 * Uses sharp + SVG overlay.
 *
 * Usage: npx tsx scripts/generate-og-image.ts
 */
import sharp from "sharp";
import path from "path";

const WIDTH = 1200;
const HEIGHT = 630;

const svg = `
<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&amp;display=swap');
    </style>
  </defs>

  <!-- Background -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="#FFFDF5"/>

  <!-- Top accent bar -->
  <rect width="${WIDTH}" height="8" fill="#FF3333"/>

  <!-- Left color blocks -->
  <rect x="0" y="8" width="40" height="${HEIGHT - 8}" fill="#000"/>

  <!-- Title block -->
  <rect x="60" y="40" width="700" height="90" fill="#FF3333" stroke="#000" stroke-width="4"/>
  <rect x="64" y="44" width="700" height="90" fill="#FF3333"/>
  <text x="90" y="105" font-family="'Archivo Black', Impact, sans-serif" font-size="52" fill="#FFF" font-weight="900">SAASpocolypse</text>

  <!-- Year badge -->
  <rect x="780" y="45" width="130" height="50" fill="#000" stroke="#000" stroke-width="3"/>
  <text x="845" y="80" font-family="'JetBrains Mono', monospace" font-size="26" fill="#C3F73A" text-anchor="middle" font-weight="700">2026</text>

  <!-- Subtitle -->
  <text x="70" y="175" font-family="'DM Sans', Helvetica, sans-serif" font-size="28" fill="#000" font-weight="700">20 Open-Source Enterprise SaaS Alternatives</text>
  <text x="70" y="210" font-family="'DM Sans', Helvetica, sans-serif" font-size="22" fill="#1a1a1a" font-weight="500">Built live on camera. One developer + Claude Code. All MIT licensed.</text>

  <!-- Stat cards row -->
  <!-- Card 1 -->
  <rect x="70" y="245" width="240" height="95" fill="#A6FAFF" stroke="#000" stroke-width="3"/>
  <rect x="74" y="249" width="240" height="95" fill="#A6FAFF"/>
  <text x="190" y="290" font-family="'JetBrains Mono', monospace" font-size="32" fill="#000" text-anchor="middle" font-weight="700">26 DAYS</text>
  <text x="190" y="320" font-family="'DM Sans', sans-serif" font-size="14" fill="#1a1a1a" text-anchor="middle" font-weight="600">Live Streamed</text>

  <!-- Card 2 -->
  <rect x="330" y="245" width="240" height="95" fill="#FFD166" stroke="#000" stroke-width="3"/>
  <rect x="334" y="249" width="240" height="95" fill="#FFD166"/>
  <text x="450" y="290" font-family="'JetBrains Mono', monospace" font-size="32" fill="#000" text-anchor="middle" font-weight="700">20 BUILDS</text>
  <text x="450" y="320" font-family="'DM Sans', sans-serif" font-size="14" fill="#1a1a1a" text-anchor="middle" font-weight="600">Enterprise Replacements</text>

  <!-- Card 3 -->
  <rect x="590" y="245" width="240" height="95" fill="#C3F73A" stroke="#000" stroke-width="3"/>
  <rect x="594" y="249" width="240" height="95" fill="#C3F73A"/>
  <text x="710" y="290" font-family="'JetBrains Mono', monospace" font-size="32" fill="#000" text-anchor="middle" font-weight="700">$4.7M+</text>
  <text x="710" y="320" font-family="'DM Sans', sans-serif" font-size="14" fill="#1a1a1a" text-anchor="middle" font-weight="600">Enterprise Value Replaced</text>

  <!-- Card 4 -->
  <rect x="850" y="245" width="240" height="95" fill="#B892FF" stroke="#000" stroke-width="3"/>
  <rect x="854" y="249" width="240" height="95" fill="#B892FF"/>
  <text x="970" y="290" font-family="'JetBrains Mono', monospace" font-size="32" fill="#000" text-anchor="middle" font-weight="700">MIT</text>
  <text x="970" y="320" font-family="'DM Sans', sans-serif" font-size="14" fill="#1a1a1a" text-anchor="middle" font-weight="600">Free Forever</text>

  <!-- Ticker-style project names -->
  <rect x="70" y="370" width="1060" height="45" fill="#000"/>
  <text x="85" y="400" font-family="'JetBrains Mono', monospace" font-size="13" fill="#FFF" font-weight="600">ServiceNow  &#x25BC;  Zendesk  &#x25BC;  Tableau  &#x25BC;  Vanta  &#x25BC;  Gong  &#x25BC;  Marketo  &#x25BC;  Ironclad  &#x25BC;  SAP Concur  &#x25BC;  Qualtrics  &#x25BC;  Coupa  &#x25BC;  PandaDoc</text>

  <!-- "Replaces" labels -->
  <rect x="70" y="415" width="1060" height="30" fill="#FFFDF5"/>
  <text x="600" y="438" font-family="'DM Sans', sans-serif" font-size="14" fill="#FF3333" text-anchor="middle" font-weight="700">REPLACING $4.7M+ IN ENTERPRISE SOFTWARE WITH OPEN SOURCE</text>

  <!-- Bottom section -->
  <rect x="70" y="470" width="520" height="130" fill="#FFF" stroke="#000" stroke-width="3" rx="0"/>
  <text x="90" y="505" font-family="'DM Sans', sans-serif" font-size="16" fill="#1a1a1a" font-weight="700">Starts July 3, 2026</text>
  <text x="90" y="535" font-family="'DM Sans', sans-serif" font-size="14" fill="#1a1a1a" font-weight="500">Live on YouTube, LinkedIn, X, Facebook, Instagram</text>
  <text x="90" y="565" font-family="'DM Sans', sans-serif" font-size="14" fill="#1a1a1a" font-weight="500">Over-the-shoulder builds. Every repo given away free.</text>
  <text x="90" y="590" font-family="'DM Sans', sans-serif" font-size="13" fill="#666" font-weight="500">stevekaplan.ai/saaspocolypse</text>

  <!-- Author block -->
  <rect x="610" y="470" width="520" height="130" fill="#000" stroke="#000" stroke-width="3"/>
  <text x="630" y="510" font-family="'Archivo Black', sans-serif" font-size="24" fill="#FFF" font-weight="900">Steve Kaplan</text>
  <text x="630" y="545" font-family="'DM Sans', sans-serif" font-size="15" fill="#A6FAFF" font-weight="600">Growth Marketer Who Writes Code</text>
  <text x="630" y="575" font-family="'DM Sans', sans-serif" font-size="14" fill="#999" font-weight="500">$50M+ ad spend managed | 200+ clients | Published author</text>
  <text x="630" y="595" font-family="'DM Sans', sans-serif" font-size="13" fill="#666" font-weight="500">stevekaplan.ai</text>

  <!-- Shadow accents on cards -->
  <rect x="74" y="249" width="240" height="95" fill="none" stroke="#000" stroke-width="3"/>
  <rect x="334" y="249" width="240" height="95" fill="none" stroke="#000" stroke-width="3"/>
  <rect x="594" y="249" width="240" height="95" fill="none" stroke="#000" stroke-width="3"/>
  <rect x="854" y="249" width="240" height="95" fill="none" stroke="#000" stroke-width="3"/>
</svg>`;

async function main() {
  const outputPath = path.join(
    process.cwd(),
    "public",
    "saaspocolypse",
    "og-image.png",
  );

  await sharp(Buffer.from(svg))
    .png({ quality: 95 })
    .toFile(outputPath);

  console.log(`Generated: ${outputPath} (1200x630)`);
}

main().catch(console.error);
