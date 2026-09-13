/**
 * VALORANT Champions Shanghai 2026 — Official Pre-Tournament Editorial Guide Data
 * Data Cutoff: 13 September 2026 (12:00 GMT+7)
 * Sources: Riot Games Official (VALORANT Esports) & VLR.gg
 * Methodology: Strictly separates RAW FACT, DERIVED EVIDENCE, and EDITORIAL PREDICTION.
 * No fabricated 0-100 scores or unverified win probabilities.
 */

const SOURCES = [
  {
    id: "riot-overview",
    label: "VALORANT Esports — Champions Shanghai Overview",
    url: "https://valorantesports.com/en-US/tournament/115576361459045501/overview",
    use: "ข้อมูลทางการ: โครงสร้างทัวร์นาเมนต์, รูปแบบ GSL, 16 ทีมที่ผ่านคัดเลือก, สถานที่จัด (Jing'an Sports Center & Mercedes-Benz Arena) และเงินรางวัลรวม $2,250,000"
  },
  {
    id: "riot-handbook",
    label: "VALORANT Esports — 2026 VCT League Handbook",
    url: "https://valorantesports.com/en-US/season/115571062868511862/handbook",
    use: "กติกาและเส้นทางคัดเลือก: Stage 2 Top 2 (Direct Seed) และ Championship Points Top 2 ประจำแต่ละภูมิภาค"
  },
  {
    id: "vlr-event",
    label: "VLR.gg — Champions Shanghai 2026 Event Hub",
    url: "https://www.vlr.gg/event/2766/valorant-champions-2026",
    use: "ข้อมูลการจับสลากกลุ่ม A-D, ตารางเวลา Opening Matches (เวลาไทย GMT+7) และการยืนยัน Roster 16 ทีม"
  },
  {
    id: "vlr-draw",
    label: "VLR.gg — Group Draw & Opening Matchups",
    url: "https://www.vlr.gg/753439/champions-shanghai-groups-opening-matches-drawn/",
    use: "ผลการจับสลากแบ่งสายสด ณ เมืองเซาเปาโลหลังจบนัดชิง Americas Stage 2"
  },
  {
    id: "vlr-stage2-archives",
    label: "VLR.gg — VCT 2026 Stage 2 Regional Archives",
    url: "https://www.vlr.gg/vct-2026",
    use: "ผลการแข่งขันย้อนหลัง, สถิติแมตช์, ซีรีส์เพลย์ออฟ และ Map tendencies ใน 4 ภูมิภาค (Americas 2977, Pacific 2776, EMEA 2976, China 2978)"
  }
];

const TEAM_DATA = [
  {
    id: "100t",
    name: "100 Thieves",
    short: "100T",
    region: "Americas",
    group: "A",
    seed: 1,
    seedLabel: "Americas #1 · Stage 2 Champion",
    color: "#e33b43",
    staff: [
      { name: "Nbs", real: "Laurynas Kisielius", role: "Head Coach" },
      { name: "d00mbr0s", real: "Carl Erik Victor Sandgren", role: "Assistant Coach" }
    ],
    roster: [
      { alias: "Cryocells", real: "Matthew Panganiban", role: "Duelist", agents: ["Jett", "Yoru", "Chamber"] },
      { alias: "Asuna", real: "Peter Mazuryk", role: "Initiator / Flex", agents: ["KAY/O", "Gekko", "Fade"] },
      { alias: "bang", real: "Sean Bezerra", role: "Controller", agents: ["Omen", "Viper", "Astra"] },
      { alias: "vora", real: "Jordan Pulwer", role: "Initiator", agents: ["Sova", "Fade", "Breach"] },
      { alias: "Timotino", real: "Timothée Lavigne Dupont", role: "Sentinel", agents: ["Cypher", "Killjoy", "Vyse"] }
    ],
    star: "Cryocells",
    starRole: "Duelist / Operator",
    roadToChampions: "แชมป์ Americas Stage 2 — เดินหน้าไร้พ่ายใน Upper Bracket ชนะ NRG 2-0 ใน Upper Final ก่อนเฉือน LOUD 3-2 ใน Grand Final สุดเดือด 5 แมพ (Sunset 13-11, Ascent 14-12, Haven 14-12)",
    recentForm: "ชนะ 5 แมตช์รวดใน Americas Stage 2 Playoffs คว้าแชมป์พร้อมโมเมนตัมสูงสุดของลีก Americas",
    tacticalIdentity: "Macro Discipline ผสานกับ Firepower ที่คมกริบ — มี Asuna และ vora เปิดวิชั่นและสร้าง Space ให้ Cryocells เก็บตกด้วย Operator ในจังหวะ Retake และ First Pick",
    strengths: "ความแม่นยำในการปิด Round ด้วยผู้เล่น Clutcher ชั้นยอดทั้ง bang และ Cryocells; ระบบ Retake ที่มี Utility Layering แน่นหนา",
    concerns: "ต้องพิสูจน์ความสม่ำเสมอในเวที International LAN โดยเฉพาะการรับมือกับทีมที่เล่นสไตล์ Chaos จังหวะเร็วจาก Pacific และ China",
    mapPool: {
      strong: ["Sunset", "Haven", "Abyss"],
      playable: ["Ascent", "Split"],
      banTendency: "มักแบน Lotus หรือ Split ตามคู่ต่อสู้"
    },
    playerToWatchRationale: "Cryocells คือหัวใจของเกมป้องกัน เมื่อใดที่เขาถือ Operator ในมือ 100T แทบจะการันตี First Blood และสามารถล็อกหนึ่ง Site ได้เบ็ดเสร็จ",
    sourceUrl: "https://www.vlr.gg/team/120/100-thieves"
  },
  {
    id: "t1",
    name: "T1",
    short: "T1",
    region: "Pacific",
    group: "A",
    seed: 4,
    seedLabel: "Pacific #4 · Championship Points #2",
    color: "#e4212e",
    staff: [
      { name: "KDG", real: "Kim Dae-gon", role: "Head Coach" },
      { name: "CheongGak", real: "Lee Sang-min", role: "Coach" }
    ],
    roster: [
      { alias: "stax", real: "Kim Gu-taek", role: "IGL / Initiator", agents: ["Breach", "KAY/O", "Fade"] },
      { alias: "BuZz", real: "Yu Byeong-cheol", role: "Duelist", agents: ["Jett", "Raze", "Yoru"] },
      { alias: "Meteor", real: "Kim Tae-oh", role: "Sentinel / Flex", agents: ["Cypher", "Killjoy", "Sova"] },
      { alias: "Munchkin", real: "Byeon Sang-beom", role: "Flex / Controller", agents: ["Viper", "Omen", "KAY/O"] },
      { alias: "iZu", real: "Ham Woo-ju", role: "Controller / Flex", agents: ["Omen", "Astra", "Clove"] }
    ],
    star: "Meteor",
    starRole: "Sentinel / Flex Anchor",
    roadToChampions: "คว้าตั๋วผ่าน Championship Points #2 ของ Pacific — ผ่านความกดดันในรอบ Lower Bracket ของ Stage 2 ชนะ RRQ 2-1 ก่อนพ่าย Global Esports ใน Lower Final 1-3",
    recentForm: "ฟอร์มแกว่งในช่วงท้าย Stage 2 แต่ชดเชยด้วยประสบการณ์ของแกนผู้เล่นเกาหลีที่ผ่านศึกระดับโลกมานับไม่ถ้วน",
    tacticalIdentity: "Structured Defense & Late-Round Composure — เน้นการเซ็ตอัปดักทางและคอลเกมแบบใจเย็นของ stax พร้อมให้ Meteor คุมเสาหลักของแนวรับ",
    strengths: "แกนผู้เล่นระดับตำนาน (stax, BuZz, Munchkin) ไม่ตื่นสนาม LAN ใหญ่; การเล่น Retake และวินัยในการสื่อสารช่วยให้เกมที่สูสีไม่หลุดมือง่าย",
    concerns: "BuZz มีช่วงเวลาฟอร์มสวิงอย่างเห็นได้ชัดในแมพที่ไม่ได้เล่น Jett; การบุกช่วงต้น Round บางครั้งขาดความหลากหลายจนโดน Anti-strat",
    mapPool: {
      strong: ["Haven", "Breeze"],
      playable: ["Lotus", "Ascent"],
      banTendency: "มักแบน Ascent หรือ Fracture เป็นประจำ"
    },
    playerToWatchRationale: "Meteor คือ Anchor ที่นิ่งและเหนียวแน่นที่สุดคนหนึ่งในเอเชีย สถิติ KAST และการเก็บ 2-3 Kills ใน Site ที่โดนบุกคือตัวชี้วัดผลงานของ T1",
    sourceUrl: "https://www.vlr.gg/team/14/t1"
  },
  {
    id: "jdg",
    name: "JD Gaming",
    short: "JDG",
    region: "China",
    group: "A",
    seed: 2,
    seedLabel: "China #2 · Stage 2 Finalist",
    color: "#c7142f",
    staff: [
      { name: "bail", real: "Lee Sung-jae", role: "Head Coach" },
      { name: "Desire", real: "Kim Jin-hyeok", role: "Assistant Coach" }
    ],
    roster: [
      { alias: "BerLIN", real: "Zhang Bolin", role: "IGL / Initiator", agents: ["Fade", "Sova", "Breach"] },
      { alias: "Yuicaw", real: "Huang Yung-chieh", role: "Duelist / OP", agents: ["Jett", "Yoru", "Chamber"] },
      { alias: "jkuro", real: "Yong Haochong", role: "Initiator / Flex", agents: ["Gekko", "KAY/O", "Skye"] },
      { alias: "zhe", real: "Niu Zhe", role: "Controller", agents: ["Omen", "Astra", "Viper"] },
      { alias: "crownfisher", real: "Li Ao", role: "Sentinel", agents: ["Cypher", "Killjoy"] }
    ],
    star: "Yuicaw",
    starRole: "Duelist / Operator",
    roadToChampions: "รองแชมป์ China Stage 2 — เดินหน้าชนะใน Upper Bracket รวด เอาชนะ Wolves และ Dragon Ranger Gaming ก่อนพ่าย TYLOO ในรอบ Grand Final",
    recentForm: "ผลงานในประเทศยอดเยี่ยมต่อเนื่อง เป็นหนึ่งในทีมที่พัฒนาแผนการเล่นเร็วที่สุดในลีกจีนปี 2026",
    tacticalIdentity: "Disruptive Aggression & Micro-flanks — BerLIN มีสไตล์การคอลเกมที่กล้าได้กล้าเสีย ชื่นชอบการส่งตัวป่วนตัดหลังและบีบให้คู่แข่งต้องหันมองรอบทิศ",
    strengths: "ความคมในการดวลปืนตรงๆ ของ Yuicaw และ jkuro; ความมั่นใจในการเล่นต่อหน้าแฟนคลับในเซี่ยงไฮ้",
    concerns: "ความอดทนในเกมช้า — หากเจอคู่แข่งที่ดักทางแบบ Default แน่นหนา JDG มักจะใจร้อนจนเสีย First Death ง่ายเกินไป",
    mapPool: {
      strong: ["Ascent", "Sunset"],
      playable: ["Haven", "Bind"],
      banTendency: "มักแบน Abyss หรือ Breeze"
    },
    playerToWatchRationale: "Yuicaw คือคีย์แมนของ JDG ในการชิง First Kill โดยเฉพาะจังหวะ Operator ที่สามารถเบรก Econ คู่แข่งและพลิกโมเมนตัมเกมได้ทันที",
    sourceUrl: "https://www.vlr.gg/team/13576/jd-gaming"
  },
  {
    id: "fut",
    name: "FUT Esports",
    short: "FUT",
    region: "EMEA",
    group: "A",
    seed: 3,
    seedLabel: "EMEA #3 · Championship Points #1",
    color: "#e55019",
    staff: [
      { name: "Vlad", real: "Eray Budak", role: "Head Coach" },
      { name: "Bambino", real: "Mert Karakaş", role: "Assistant Coach" }
    ],
    roster: [
      { alias: "xeus", real: "Doğan Gözgen", role: "Duelist", agents: ["Jett", "Raze", "Neon"] },
      { alias: "yetujey", real: "Eray Budak", role: "Sentinel / Anchor", agents: ["Cypher", "Killjoy"] },
      { alias: "sociablEE", real: "Volkan Yonal", role: "Initiator", agents: ["Sova", "Fade", "KAY/O"] },
      { alias: "KROSTALY", real: "Okan Alaçam", role: "Controller", agents: ["Omen", "Viper", "Brimstone"] },
      { alias: "s0pp", real: "Efe Tur", role: "Flex / Initiator", agents: ["Breach", "Gekko", "Flash"] }
    ],
    star: "xeus",
    starRole: "Duelist / Entry Fragger",
    roadToChampions: "คว้าตั๋วผ่านคะแนนสะสม Championship Points #1 ของ EMEA — แสดงผลงานคงเส้นคงวาตลอดฤดูกาล จบอันดับ 3 ใน Stage 2 Playoffs",
    recentForm: "ฟอร์มในยุโรปจัดว่าแข็งแกร่ง แม้จะสะดุดพ่าย Team Liquid 0-3 ใน Lower Final แต่ยังคงเป็นทีมที่มีคะแนนสะสมสูงสุดในกลุ่ม Points",
    tacticalIdentity: "Raw Aim Tempo & High-Pressure Executes — สไตล์บุกแบบตุรกีที่เน้นความมั่นใจในการเข้าปะทะ การใช้แฟลชเปิดทางแล้วบุกยึดพื้นที่อย่างดุดัน",
    strengths: "Aim Ceiling ของ xeus และ yetujey สูงติดอันดับท็อปของ EMEA; สามารถสโนว์บอลเกมได้รวดเร็วหากชนะ Pistol Round",
    concerns: "Mid-Round Calling ยังยืดหยุ่นน้อยเมื่อแผนหลักโดนแก้ทาง; เสีย Round ให้คู่แข่งบ่อยเกินไปในรอบ Anti-Eco",
    mapPool: {
      strong: ["Lotus", "Sunset"],
      playable: ["Haven", "Bind"],
      banTendency: "มักแบน Breeze หรือ Icebox เป็นประจำ"
    },
    playerToWatchRationale: "xeus คือหัวหอกที่ทีมฝากความหวัง หากเขาสามารถกดดันและชนะ Opening Duel ได้ FUT จะกลายเป็นทีมที่ไม่มีใครอยากต่อกรด้วย",
    sourceUrl: "https://www.vlr.gg/team/1184/fut-esports"
  },
  {
    id: "ge",
    name: "Global Esports",
    short: "GE",
    region: "Pacific",
    group: "B",
    seed: 1,
    seedLabel: "Pacific #1 · Stage 2 Champion",
    color: "#70c7a5",
    staff: [
      { name: "Platoon", real: "Austin Treble", role: "Head Coach" },
      { name: "Aimix Strange", real: "Subham Chhetri", role: "Assistant Coach" },
      { name: "Fields", real: "Jack Fields", role: "Analyst" }
    ],
    roster: [
      { alias: "Autumn", real: "Kale Dunne", role: "Duelist", agents: ["Jett", "Chamber", "Yoru"] },
      { alias: "PatMen", real: "Patrick Mendoza", role: "Sentinel / Utility Fragger", agents: ["Fade", "Cypher", "Killjoy"] },
      { alias: "Kr1stal", real: "Savva Fedorov", role: "IGL / Flex", agents: ["Sova", "KAY/O", "Breach"] },
      { alias: "xavi8k", real: "Xavier Juan", role: "Controller", agents: ["Omen", "Astra", "Viper"] },
      { alias: "UdoTan", real: "Go Kyung-won", role: "Initiator", agents: ["Gekko", "Skye", "Fade"] }
    ],
    star: "PatMen",
    starRole: "Ace / Utility Fragger",
    roadToChampions: "การสร้างประวัติศาสตร์ครั้งยิ่งใหญ่ของ Pacific — คว้าแชมป์ Stage 2 ด้วยการเอาชนะทั้ง RRQ, Paper Rex, T1 และปิดท้ายด้วยการโค่น Nongshim RedForce 3-2 ใน Grand Final",
    recentForm: "แชมป์ Pacific Stage 2 ที่มาพร้อมความมั่นใจเต็มเปี่ยมและระบบทีมเวิร์กที่ได้รับการยกย่องว่าดีที่สุดในภูมิภาค",
    tacticalIdentity: "Unorthodox Strategy & Step-Up Culture — โค้ช Platoon ออกแบบ Off-meta Comp (โดยเฉพาะ Sage บน Breeze) พร้อมระบบการคอลที่เปิดให้ผู้เล่นทุกคนมีจังหวะ Step-up แบกทีม",
    strengths: "ความสามารถในการแก้เกม Mid-Round และพลิกสถานการณ์จากช่วงที่ตามหลัง; PatMen ทำหน้าที่เป็น Ace ปิดเกมได้อย่างทรงพลัง",
    concerns: "เวทีระดับโลกครั้งแรกของแกนผู้เล่นหลายคน ความตื่นเต้นและแรงกดดันของทัวร์ระดับนานาชาติอาจส่งผลต่อความแม่นยำช่วงต้นแมตช์",
    mapPool: {
      strong: ["Breeze", "Pearl"],
      playable: ["Sunset", "Lotus"],
      banTendency: "มักแบน Fracture หรือ Haven สม่ำเสมอ"
    },
    playerToWatchRationale: "PatMen เล่นได้ทั้ง Initiator และ Sentinel ด้วยสถิติ ACS และ ADR สูงทะลุชาร์ตในรอบชิง Pacific เขาคือ X-Factor ที่คู่แข่งจับทางยากที่สุด",
    sourceUrl: "https://www.vlr.gg/team/918/global-esports"
  },
  {
    id: "vit",
    name: "Team Vitality",
    short: "VIT",
    region: "EMEA",
    group: "B",
    seed: 4,
    seedLabel: "EMEA #4 · Championship Points #2",
    color: "#ffce00",
    staff: [
      { name: "PAL", real: "Harry Naylor", role: "Coach" },
      { name: "Scuttt", real: "Luka Bolic", role: "Coach" },
      { name: "slk", real: "Lucas Ramos", role: "Analyst" }
    ],
    roster: [
      { alias: "Derke", real: "Nikita Niko Sirmitev", role: "Duelist", agents: ["Jett", "Raze", "Yoru"] },
      { alias: "Chronicle", real: "Timofey Khromov", role: "Initiator / Flex", agents: ["Breach", "Sova", "KAY/O"] },
      { alias: "Jamppi", real: "Elias Olkkonen", role: "Flex / Initiator", agents: ["Gekko", "Breach", "Sova"] },
      { alias: "PROFEK", real: "Dawid Święć", role: "Controller", agents: ["Omen", "Astra", "Viper"] },
      { alias: "Sayonara", real: "Ștefan Mîtcu", role: "Sentinel / Flex", agents: ["Cypher", "Killjoy", "Vyse"] }
    ],
    star: "Derke",
    starRole: "Duelist / Superstar Entry",
    roadToChampions: "ผ่านเข้ารอบด้วย Championship Points #2 ของ EMEA — สะสมแต้มจากรอบ Masters และการยืนระยะในลีก EMEA ตลอดทั้งปี",
    recentForm: "มีช่วงสะดุดตกรอบเร็วใน Stage 2 Playoffs ให้กับ Team Heretics แต่เพดานศักยภาพของ Lineup ยังคงอยู่ในระดับเวิลด์คลาส",
    tacticalIdentity: "Star-Powered Firepower & Veteran Micro-Picks — ทีมที่มี Derke และ Chronicle คอยสร้างช็อตมหัศจรรย์และพลิกชนะ Round เสียเปรียบด้วยความสามารถเฉพาะตัวล้วนๆ",
    strengths: "ประสบการณ์เกมระดับโลกและเพดานการยิงของตัวหลักสูงเกินกว่าจะมองเป็นเพียง Seed 4 ธรรมดา; ชนะสถานการณ์ Clutch ได้บ่อยครั้ง",
    concerns: "ความสม่ำเสมอใน Macro Play และการพึ่งพาจังหวะวันแมนโชว์มากเกินไป หากวันไหนตัวยิงหลักฟอร์มฝืด เกมจะตันทันที",
    mapPool: {
      strong: ["Sunset", "Bind"],
      playable: ["Lotus", "Haven"],
      banTendency: "มักแบน Ascent เป็นหลัก"
    },
    playerToWatchRationale: "Derke คือหนึ่งใน Duelist ที่ดีที่สุดในประวัติศาสตร์เกม VALORANT หากเขาจับทางจังหวะเกมในเซี่ยงไฮ้ได้ Vitality พร้อมที่จะล้มยักษ์ทุกทีม",
    sourceUrl: "https://www.vlr.gg/team/2059/team-vitality"
  },
  {
    id: "loud",
    name: "LOUD",
    short: "LOUD",
    region: "Americas",
    group: "B",
    seed: 2,
    seedLabel: "Americas #2 · Stage 2 Finalist",
    color: "#22d06d",
    staff: [
      { name: "Romanilly", real: "Pedro Romanilly", role: "Head Coach" },
      { name: "Bati", real: "Renan Rossi", role: "Assistant Coach" },
      { name: "bajerski", real: "Lucas Bajerski", role: "Performance Coach" }
    ],
    roster: [
      { alias: "Darker", real: "Sebastián Castro Cicuamia", role: "Duelist", agents: ["Jett", "Neon", "Raze"] },
      { alias: "DaviH", real: "David Cruz", role: "Initiator", agents: ["Sova", "Fade", "KAY/O"] },
      { alias: "lukxo", real: "Lucca Travaioli", role: "Controller", agents: ["Omen", "Astra", "Viper"] },
      { alias: "erde", real: "Roberto Lobos", role: "Sentinel", agents: ["Cypher", "Killjoy"] },
      { alias: "tkzin", real: "Enzo Zimiani", role: "Flex / Initiator", agents: ["Breach", "Gekko", "Flash"] }
    ],
    star: "Darker",
    starRole: "Duelist / Speed Entry",
    roadToChampions: "รองแชมป์ Americas Stage 2 — วิ่งทะลุ Lower Bracket สุดเดือด โค่นทั้ง Sentinels, G2 Esports และ NRG 3-2 ก่อนสู้กับ 100 Thieves ถึงแมพ 5 ในรอบ Grand Final",
    recentForm: "ร้อนแรงสุดขีดหลังผ่านซีรีส์ Bo5 สุดระทึกในรอบชิง Americas เข้าถึงรอบชิงด้วยฟอร์มของผู้ท้าชิงแถวหน้า",
    tacticalIdentity: "Fearless Aggression & Fast Trade Chains — ยุคใหม่ของ LOUD เล่นด้วยความเร็ว เข้าประชิดตัว และเทรดคิลในระยะเผาขนตามเอกลักษณ์บราซิลดั้งเดิม",
    strengths: "สปิริตนักสู้ที่ไม่ยอมแพ้แม้ตามหลังหลายรอบ; การเปิด Space ของ Darker และความแม่นยำในการคุมจังหวะของ DaviH",
    concerns: "การจัดการอารมณ์และสมาธิเมื่อเจอกับทีมที่ดักทางแบบใจเย็น การดวลปืนนอกแผนบางจังหวะเปิดช่องโหว่ให้ทีมคู่แข่งสวนกลับ",
    mapPool: {
      strong: ["Split", "Ascent"],
      playable: ["Sunset", "Haven"],
      banTendency: "มักแบน Abyss หรือ Lotus"
    },
    playerToWatchRationale: "Darker คือดาวรุ่ง Duelist ตัวจี๊ดของ Americas ความกล้าเล่นและอัตราการชนะ First Duel ของเขาสามารถพลิกกระดาน Econ และเบรก Buy Round ของคู่แข่งได้ในชั่วพริบตา",
    sourceUrl: "https://www.vlr.gg/team/6961/loud"
  },
  {
    id: "edg",
    name: "EDward Gaming",
    short: "EDG",
    region: "China",
    group: "B",
    seed: 3,
    seedLabel: "China #3 · Championship Points #1",
    color: "#d62939",
    staff: [
      { name: "Autumn", real: "Yoon Eu-ddeum", role: "Head Coach" },
      { name: "Indigo", real: "Xue Jian", role: "Coach" },
      { name: "signed", real: "Guo Yuhang", role: "Coach" }
    ],
    roster: [
      { alias: "ZmjjKK", real: "Zheng Yongkang", role: "Duelist / OP", agents: ["Jett", "Raze", "Yoru"] },
      { alias: "nobody", real: "Wang Senxu", role: "IGL / Initiator", agents: ["Sova", "Fade", "Gekko"] },
      { alias: "CHICHOO", real: "Wan Shunzhi", role: "Controller / Anchor", agents: ["Omen", "Viper", "Brimstone"] },
      { alias: "Smoggy", real: "Zhang Zhao", role: "Flex / Initiator", agents: ["KAY/O", "Breach", "Clove"] },
      { alias: "Jieni7", real: "Zhang Juntai", role: "Sentinel", agents: ["Cypher", "Killjoy"] }
    ],
    star: "ZmjjKK",
    starRole: "Duelist / The King of Shanghai",
    roadToChampions: "ตั๋วแต้มสะสม Championship Points #1 ของจีน — อดีตแชมป์โลก Champions 2024 ที่ยังคงเป็นสัญลักษณ์สูงสุดของวงการ VALORANT แดนมังกร",
    recentForm: "ใน Stage 2 มีฟอร์มแกว่งจนพลาดที่นั่งรอบชิง แต่ยังคงรักษาตั๋วผ่านคะแนนสะสมตลอดปี",
    tacticalIdentity: "Big-Stage Composure & Superstar Impact — สไตล์การเล่นที่เปลี่ยนเกียร์ได้เร็วเมื่อเข้าสู่ช่วงวิกฤต โดยมี KangKang เป็นศูนย์กลางในการทำลายจังหวะคู่แข่ง",
    strengths: "ความเก๋าเกมในทัวร์นาเมนต์ใหญ่ระดับโลก; Clutch IQ ของ CHICHOO และ Nobody ที่ไม่เคยตื่นตระหนก; แรงหนุนมหาศาลจากแฟนคลับในบ้านเกิด",
    concerns: "ความสม่ำเสมอของฟอร์มการเล่นใน Group Stage หาก KangKang โดนตัดไม่ให้หยิบ Operator เกมรุกของ EDG มักจะสะดุด",
    mapPool: {
      strong: ["Lotus", "Sunset"],
      playable: ["Haven", "Ascent"],
      banTendency: "มักแบน Icebox หรือ Abyss"
    },
    playerToWatchRationale: "ZmjjKK (KangKang) คือซูเปอร์สตาร์เบอร์หนึ่งของจีน การเล่นในบ้านเกิดเซี่ยงไฮ้คือเวทีที่เขาเคยชูถ้วย Champions มาแล้ว ทุกช็อตสะบัด Operator ของเขาพร้อมปลุกเสียงเชียร์ทั้งสนามให้ลุกเป็นไฟ",
    sourceUrl: "https://www.vlr.gg/team/1120/edward-gaming"
  },
  {
    id: "tyloo",
    name: "TYLOO",
    short: "TYL",
    region: "China",
    group: "C",
    seed: 1,
    seedLabel: "China #1 · Stage 2 Champion",
    color: "#e72b2b",
    staff: [
      { name: "hypnotizing", real: "Zhao Meng", role: "Head Coach" },
      { name: "Billyo", real: "Billy Chang", role: "Assistant Coach" },
      { name: "sword9", real: "Li Wei", role: "Assistant Coach" },
      { name: "Ominous", real: "Gao Peng", role: "Analyst" }
    ],
    roster: [
      { alias: "splash", real: "Moses Christophe Jonathan", role: "Duelist", agents: ["Jett", "Raze", "Neon"] },
      { alias: "SiuFatBB", real: "Pong Gaa Hei", role: "Initiator", agents: ["Fade", "Sova", "Gekko"] },
      { alias: "Scales", real: "Zhang Zhen", role: "Controller", agents: ["Omen", "Astra", "Viper"] },
      { alias: "slowly", real: "Kelun Sun", role: "Sentinel", agents: ["Cypher", "Killjoy"] },
      { alias: "Erv", real: "Shen Zhiwei", role: "Flex / Initiator", agents: ["Breach", "KAY/O", "Flash"] }
    ],
    star: "splash",
    starRole: "Duelist / Lethal Entry",
    roadToChampions: "แชมป์ China Stage 2 สมัยล่าสุด — คัมแบ็กจาก Lower Bracket ชนะรวด 3 ซีรีส์ติด ก่อนปราบ JD Gaming 3-1 ในรอบ Grand Final คว้าตั๋ว Seed 1 ของจีนอย่างสมศักดิ์ศรี",
    recentForm: "ฟอร์มพีคที่สุดในลีกจีน สถิติการ Execute ยึด Site และอัตราการชนะ Full Buy Round เหนือกว่าทุกทีมในลีก",
    tacticalIdentity: "Overwhelming Momentum & Site Swarming — เล่นด้วยความมั่นใจสูง กดดันตั้งแต่ต้น Round ด้วย Fast Execute บุก Site รวดเร็วและใช้ Utility Layering ถล่มอย่างหนักหน่วง",
    strengths: "ความแม่นยำในการยิงของ splash ที่พร้อมเทรดชนะทุกการดวล; ความฮึกเหิมและโมเมนตัมจากการเป็นแชมป์เจ้าบ้าน",
    concerns: "ตกอยู่ใน Group of Death (Group C) ร่วมกับ PRX, G2 และ TL ซึ่งล้วนเป็นทีมที่มี Tactical Depth สูงกว่าที่ TYLOO เคยเจอในลีก",
    mapPool: {
      strong: ["Haven", "Ascent"],
      playable: ["Sunset", "Lotus"],
      banTendency: "มักแบน Split หรือ Abyss"
    },
    playerToWatchRationale: "splash ทำผลงานสถิติคะแนนการต่อสู้ (ACS) สูงสุดในรอบ Playoffs ของจีน หากเขาเปิดเกมแรกได้สวย TYLOO จะกลายเป็นม้ามืดที่พร้อมล้มยักษ์",
    sourceUrl: "https://www.vlr.gg/team/731/tyloo"
  },
  {
    id: "g2",
    name: "G2 Esports",
    short: "G2",
    region: "Americas",
    group: "C",
    seed: 4,
    seedLabel: "Americas #4 · Championship Points #2",
    color: "#dedede",
    staff: [
      { name: "JoshRT", real: "Josh Lee", role: "Head Coach" },
      { name: "shhhack", real: "Maikil Yordanov", role: "Assistant Coach" },
      { name: "Robert", real: "Robert Dahlström", role: "Performance Coach" }
    ],
    roster: [
      { alias: "valyn", real: "Jacob Batio", role: "IGL / Controller", agents: ["Omen", "Astra", "Viper"] },
      { alias: "jawgemo", real: "Alexander Mor", role: "Duelist", agents: ["Neon", "Raze", "Jett"] },
      { alias: "trent", real: "Trent Cairns", role: "Initiator", agents: ["Sova", "Fade", "Gekko"] },
      { alias: "leaf", real: "Nathan Orf", role: "Sentinel / Anchor", agents: ["Killjoy", "Cypher", "Vyse"] },
      { alias: "BABYBAY", real: "Andrej Francisty", role: "Flex / Initiator", agents: ["Breach", "KAY/O", "Flash"] }
    ],
    star: "jawgemo",
    starRole: "Duelist / Movement King",
    roadToChampions: "คว้าตั๋วผ่าน Championship Points #2 ของ Americas — ผลงานเข้าลึกถึงรอบ Masters Shanghai และรักษามาตรฐานทีมระดับหัวแถวของโลกตลอดปี",
    recentForm: "แม้ใน Stage 2 Playoffs จะพ่าย LOUD 0-2 ใน Lower Bracket แต่โครงสร้างการเตรียมแผนของโค้ช JoshRT ยังคงเป็นหนึ่งในมาตรฐานที่ดีที่สุดในโลก",
    tacticalIdentity: "Methodical Anti-Stratting & Layered Calling — การคอลเกมแบบใจเย็นของ valyn ผสานกับการเจาะลึกจุดอ่อนคู่แข่ง ทำให้ G2 มักมีคำตอบสำหรับทุกแผนที่คู่แข่งเตรียมมา",
    strengths: "ความยืดหยุ่นของผู้เล่นระดับแชมป์โลกอย่าง jawgemo; ความนิ่งของ leaf ในการ Solo Anchor คุม Site; การสื่อสารที่แม่นยำในสถานการณ์ 3v3",
    concerns: "มักออกสตาร์ตทัวร์นาเมนต์ช้า (Slow Starters) หากโดนทีมความเร็วสูงอย่าง PRX หรือ TYLOO อัดในแมพแรกอาจตั้งตัวไม่ทัน",
    mapPool: {
      strong: ["Bind", "Abyss"],
      playable: ["Ascent", "Haven"],
      banTendency: "มักแบน Sunset เป็นประจำ"
    },
    playerToWatchRationale: "jawgemo อดีตแชมป์โลกผู้เชี่ยวชาญ Neon และ Raze สามารถแหวกแนวรับคู่แข่งและสร้างความได้เปรียบเรื่องความเร็วในการเข้าทำได้อย่างสมบูรณ์แบบ",
    sourceUrl: "https://www.vlr.gg/team/11058/g2-esports"
  },
  {
    id: "tl",
    name: "Team Liquid",
    short: "TL",
    region: "EMEA",
    group: "C",
    seed: 2,
    seedLabel: "EMEA #2 · Stage 2 Finalist",
    color: "#153a70",
    staff: [
      { name: "Coaching Division", real: "Team Liquid VALORANT Staff", role: "Strategic Staff" }
    ],
    roster: [
      { alias: "nAts", real: "Ayaz Akhmetshin", role: "Sentinel / Lurk Master", agents: ["Cypher", "Viper", "Killjoy"] },
      { alias: "trexx", real: "Nikita Cherednichenko", role: "Initiator / Flex", agents: ["Sova", "Fade", "KAY/O"] },
      { alias: "Kicks", real: "Kimmie Laasner", role: "Initiator", agents: ["Breach", "Gekko", "Skye"] },
      { alias: "kamo", real: "Kamil Frąckowiak", role: "Duelist", agents: ["Jett", "Raze", "Neon"] },
      { alias: "GSR", real: "Ognjen Bondžić", role: "Controller", agents: ["Omen", "Astra", "Viper"] }
    ],
    star: "nAts",
    starRole: "Sentinel / Information Genius",
    roadToChampions: "รองแชมป์ EMEA Stage 2 — ระเบิดฟอร์มใน Lower Bracket ชนะ BBL, Team Heretics และถล่ม FUT Esports 3-0 ใน Lower Final ก่อนเข้าไปชิงกับ Karmine Corp",
    recentForm: "โมเมนตัมกำลังกลับมาอย่างแข็งแกร่ง nAts นำทัพรุ่นใหม่เล่นได้อย่างมีวินัยและรัดกุมที่สุดทีมหนึ่งในยุโรป",
    tacticalIdentity: "Information Monopoly & Calculated Timing — ชนะด้วยข้อมูลและการควบคุมพื้นที่ nAts จะคอยตัดเส้นทางการหมุนเวียน (Rotation) ของคู่แข่งจนระบบของฝ่ายตรงข้ามพังทลาย",
    strengths: "ระเบียบวินัยในเกมรับสูงมาก การเล่นแบบตั้งรับและรอให้คู่แข่งพลาด; ความคมของ kamo ในการปิดสกอร์",
    concerns: "เมื่อเจอกับทีมที่บุกไม่เป็นไปตามแบบแผน (Unscripted Chaos) โครงสร้างการเล่นอาจถูกบีบให้ตัดสินใจเร็วกว่าคอมฟอร์ตโซน",
    mapPool: {
      strong: ["Ascent", "Haven"],
      playable: ["Split", "Bind"],
      banTendency: "มักแบน Lotus สม่ำเสมอ"
    },
    playerToWatchRationale: "nAts คือตำนานที่ยังมีลมหายใจของตำแหน่ง Sentinel การเล่น Lurk ของเขาสร้างแรงกดดันทางจิตวิทยาให้คู่แข่งทุกทีมจนไม่กล้าขยับตัว",
    sourceUrl: "https://www.vlr.gg/team/474/team-liquid"
  },
  {
    id: "prx",
    name: "Paper Rex",
    short: "PRX",
    region: "Pacific",
    group: "C",
    seed: 3,
    seedLabel: "Pacific #3 · Championship Points #1",
    color: "#df2051",
    staff: [
      { name: "alecks", real: "Alexandre Sallé", role: "Head Coach" },
      { name: "Wendler", real: "Joshua Wendler", role: "Assistant Coach" },
      { name: "Panda", real: "Dae-young Kim", role: "Performance Coach" }
    ],
    roster: [
      { alias: "f0rsakeN", real: "Jason Susanto", role: "Flex God / IGL", agents: ["Yoru", "Fade", "KAY/O", "Cypher"] },
      { alias: "something", real: "Ilya Petrov", role: "Duelist / OP", agents: ["Jett", "Reyna", "Gekko"] },
      { alias: "Jinggg", real: "Wang Jing Jie", role: "Duelist / Entry", agents: ["Raze", "Neon", "Phoenix"] },
      { alias: "d4v41", real: "Khalish Rusyaidee", role: "Initiator / Anchor", agents: ["Skye", "Fade", "Viper"] },
      { alias: "invy", real: "Adrian Jiggs Reyes", role: "Initiator / Flex", agents: ["Breach", "Sova", "KAY/O"] }
    ],
    star: "d4v41",
    starRole: "Support / Anchor (The Unshakable Pillar)",
    roadToChampions: "คว้าตั๋วผ่านคะแนนสะสม Championship Points #1 ของ Pacific — ขวัญใจแฟนคลับทั่วโลกที่เข้าสู่รอบชิงในศึกระดับนานาชาติมาตลอดทุกปี",
    recentForm: "ผลงานใน Pacific Stage 2 มีทั้งแมตช์ถล่มคู่แข่งแบบขาดลอย (เช่น ชนะ Split 13-1) และแมตช์ที่หลุดฟอร์ม แต่เพดานทีมยังคงน่ากลัวที่สุดในสาย",
    tacticalIdentity: "Unscripted W-Gaming & Instant Pace Shifts — ความเคออสที่ผ่านการฝึกฝนมาอย่างดี บุกทะลวงด้วยความเร็วที่ทำลาย Playbook ของคู่แข่งทิ้งตั้งแต่ 15 วินาทีแรกของ Round",
    strengths: "ความยืดหยุ่นของ f0rsakeN ที่เล่นได้ทุกตัวละครในเกม; ความดุดันของ Jinggg และ something; ความคงเส้นคงวาของ d4v41 ที่เรตติ้งไม่เคยตก",
    concerns: "Consistency เป็นปัญหาเรื้อรัง หากไฟต์แรกไม่สำเร็จ สไตล์การบุกที่ไม่หยุดอาจถูกทีมที่มีวินัยสูงอย่าง TL หรือ G2 ดักยิงสวนจนเสียเกม",
    mapPool: {
      strong: ["Split", "Lotus"],
      playable: ["Ascent", "Bind"],
      banTendency: "มักแบน Haven หรือ Breeze"
    },
    playerToWatchRationale: "แม้สปอตไลต์มักส่องไปที่ Duelist แต่ d4v41 คือผู้เล่นที่ทำเรตติ้ง ≥ 1.00 ครบทุก Map ในรอบ Playoffs เขาคือกระดูกสันหลังที่ทำให้ PRX ยืนหยัดได้อย่างมั่นคง",
    sourceUrl: "https://www.vlr.gg/team/624/paper-rex"
  },
  {
    id: "kc",
    name: "Karmine Corp",
    short: "KC",
    region: "EMEA",
    group: "D",
    seed: 1,
    seedLabel: "EMEA #1 · Stage 2 Champion",
    color: "#2b5cff",
    staff: [
      { name: "ZE1SH", real: "Ahmed El Sheikh", role: "Head Coach" },
      { name: "simoz", real: "Simon Bart", role: "Assistant Coach" }
    ],
    roster: [
      { alias: "N4RRATE", real: "Marshall Massey", role: "Initiator / Flex Superstar", agents: ["Fade", "Gekko", "Raze"] },
      { alias: "SUYGETSU", real: "Dmitry Ilyushin", role: "Sentinel / Site Anchor", agents: ["Cypher", "Killjoy", "Viper"] },
      { alias: "dos9", real: "Zhumagali Dastan", role: "Duelist", agents: ["Jett", "Yoru", "Neon"] },
      { alias: "LewN", real: "Burak Alkan", role: "Controller", agents: ["Omen", "Astra", "Viper"] },
      { alias: "Avez", real: "Hazem Khaled", role: "Initiator", agents: ["Breach", "Sova", "KAY/O"] }
    ],
    star: "N4RRATE",
    starRole: "Initiator / Flex Superstar",
    roadToChampions: "แชมป์ EMEA Stage 2 สมัยล่าสุด — ครองบัลลังก์ EMEA ด้วยการชนะรวดในรอบ Playoffs ปราบ FUT 2-0 และตอกย้ำด้วยการชนะ Team Liquid 3-1 ในรอบ Grand Final",
    recentForm: "ฟอร์มกำลังร้อนแรงและสมบูรณ์แบบที่สุดของ EMEA เป็นหนึ่งในตัวเต็งที่จะคว้าแชมป์โลก Champions Shanghai 2026",
    tacticalIdentity: "Total Tactical Harmony & Relentless Pressure — การผสมผสานที่ลงตัวระหว่าง Site Anchor ระดับเวิลด์คลาสของ SUYGETSU กับ Space Creation และ Entry ของ N4RRATE",
    strengths: "Map Pool กว้างและเล่นได้แข็งแกร่งแทบทุกแมพ; ผู้เล่นทุกคนมี Firepower สูงและสามารถสลับบทบาทในการปิดเกมได้อย่างไร้รอยต่อ",
    concerns: "ความคาดหวังในฐานะ Seed 1 และทีมเต็งของ EMEA อาจสร้างความกดดันหากถูกคู่แข่งชิงนำใน Map แรก",
    mapPool: {
      strong: ["Lotus", "Bind", "Ascent"],
      playable: ["Sunset", "Haven"],
      banTendency: "มักแบน Abyss หรือ Breeze"
    },
    playerToWatchRationale: "N4RRATE มีคะแนนสถิติรอบด้านสูงสุดใน EMEA Stage 2 เขาสามารถเปลี่ยนจังหวะเกมรุกและเก็บ First Kill ให้ทีมได้ในทุกสถานการณ์",
    sourceUrl: "https://www.vlr.gg/team/8877/karmine-corp"
  },
  {
    id: "xlg",
    name: "Xi Lai Gaming",
    short: "XLG",
    region: "China",
    group: "D",
    seed: 4,
    seedLabel: "China #4 · Championship Points #2",
    color: "#f0b429",
    staff: [
      { name: "hvoya", real: "Aleksandr Eremin", role: "Head Coach" },
      { name: "steady", real: "Dmitry Steady", role: "Assistant Coach" }
    ],
    roster: [
      { alias: "Rarga", real: "Arthur Churyumov", role: "Duelist", agents: ["Jett", "Reyna", "Yoru"] },
      { alias: "NoMan", real: "James Man", role: "IGL / Controller", agents: ["Omen", "Viper", "Astra"] },
      { alias: "WsLeo", real: "Huang Pinwei", role: "Initiator", agents: ["Fade", "Sova", "Gekko"] },
      { alias: "Lysoar", real: "Liang Youhao", role: "Flex / Initiator", agents: ["Breach", "KAY/O", "Flash"] },
      { alias: "happywei", real: "Deng Minwei", role: "Sentinel", agents: ["Cypher", "Killjoy"] }
    ],
    star: "Rarga",
    starRole: "Duelist / Chaos Maker",
    roadToChampions: "คว้าตั๋วผ่านคะแนนสะสม Championship Points #2 ของจีน — ทีมม้ามืดที่ผ่านเส้นทางอันทรหดในลีกจีนจนได้สิทธิ์เข้าร่วมทัวร์นาเมนต์ระดับโลก",
    recentForm: "แม้จะแพ้ JDG ในรอบเพลย์ออฟ แต่สไตล์การเล่นที่ไร้รูปแบบตายตัวทำให้พวกเขาเป็นทีมที่อันตรายสำหรับคู่แข่งที่ไม่คุ้นมือ",
    tacticalIdentity: "Unpredictable Pace & Aggressive Gambles — สไตล์การเล่นที่ชอบเดิมพันในจังหวะที่ไม่คาดคิด การบุกทะลวงแบบไม่รอเซ็ตอัปเพื่อสร้างความประหลาดใจ",
    strengths: "ความไม่คุ้นชินที่คู่แข่งต่าง Region มีต่อสไตล์ของพวกเขา; ความคมและความมั่นใจของ Rarga ในการชิง First Duel",
    concerns: "ความผิดพลาดในรายละเอียดเชิงโครงสร้าง (Macro Details) และการโดนลงโทษเมื่อแพ้ First Duel ในเกมระดับท็อป",
    mapPool: {
      strong: ["Sunset", "Lotus"],
      playable: ["Haven", "Ascent"],
      banTendency: "มักแบน Breeze หรือ Icebox"
    },
    playerToWatchRationale: "Rarga คือผู้เล่นที่ไม่อาจละสายตาได้ หากเขาสามารถหาจังหวะเก็บคิลเปิดเกมได้ต่อเนื่อง XLG ก็มีโอกาสสร้างการพลิกล็อกได้ทุกเมื่อ",
    sourceUrl: "https://www.vlr.gg/team/13581/xi-lai-gaming"
  },
  {
    id: "ns",
    name: "Nongshim RedForce",
    short: "NS",
    region: "Pacific",
    group: "D",
    seed: 2,
    seedLabel: "Pacific #2 · Stage 2 Finalist",
    color: "#de2027",
    staff: [
      { name: "SilKanoN", real: "Kim Jin-woo", role: "Head Coach" },
      { name: "yoman", real: "Chae Young-moon", role: "Coach" },
      { name: "Sungmin", real: "Lee Sung-min", role: "Coach" }
    ],
    roster: [
      { alias: "Dambi", real: "Lee Hyuk-kyu", role: "Duelist", agents: ["Jett", "Yoru", "Raze"] },
      { alias: "Rb", real: "Goo Sang-min", role: "Flex Veteran", agents: ["Sova", "Fade", "KAY/O", "Breach"] },
      { alias: "Francis", real: "Kim Mu-bin", role: "Controller", agents: ["Omen", "Astra", "Viper"] },
      { alias: "Ivy", real: "Park Sung-hyeon", role: "Initiator", agents: ["Gekko", "Breach", "Skye"] },
      { alias: "Xross", real: "Jeonghwan", role: "Sentinel", agents: ["Cypher", "Killjoy"] }
    ],
    star: "Dambi",
    starRole: "Duelist / Breakthrough Talent",
    roadToChampions: "รองแชมป์ Pacific Stage 2 — ฟอร์มระดับปรากฏการณ์ ชนะ DRX และชนะ Global Esports 2-1 ใน Upper Bracket ก่อนสู้กันอย่างสูสี 2-3 ในรอบ Grand Final",
    recentForm: "ฟอร์มสดและเปี่ยมไปด้วยวินัย เป็นหนึ่งในทีมที่พัฒนาโครงสร้างการเล่นได้เร็วที่สุดในเอเชีย",
    tacticalIdentity: "Flawless Trade Structure & Methodical Retakes — วินัยแบบเกาหลีขนานแท้ ทุกก้าวมีการระวังหลัง การเทรดคิลรวดเร็ว และมี Rb เป็นเสาหลักคอยประคองรุ่นน้อง",
    strengths: "วินัยการ Trade Kill ที่เฉียบคม; Dambi ฟอร์มกำลังขึ้นหม้อ ยิงดุทั้งปืน Rifle และ Operator",
    concerns: "ความกดดันในเวทีระดับโลกครั้งแรกของดาวรุ่งหลายคน อาจทำให้ความกล้าในการตัดสินใจลดลงเมื่อถูกคู่แข่งกดดัน",
    mapPool: {
      strong: ["Ascent", "Haven"],
      playable: ["Sunset", "Split"],
      banTendency: "มักแบน Lotus หรือ Pearl"
    },
    playerToWatchRationale: "Dambi คือดาวยิงที่ร้อนแรงที่สุดคนหนึ่งใน Pacific Stage 2 ความคล่องตัวในการเข้าทำของเขาสามารถฉีกแนวรับของทีมคู่แข่งได้อย่างหมดจด",
    sourceUrl: "https://www.vlr.gg/team/11060/nongshim-redforce"
  },
  {
    id: "nrg",
    name: "NRG",
    short: "NRG",
    region: "Americas",
    group: "D",
    seed: 3,
    seedLabel: "Americas #3 · Championship Points #1",
    color: "#ff6b21",
    staff: [
      { name: "bonkar", real: "Malkolm Rench", role: "Head Coach" },
      { name: "mitch", real: "Mitch Semelroth", role: "Assistant Coach" }
    ],
    roster: [
      { alias: "Ethan", real: "Ethan Arnold", role: "IGL / Initiator", agents: ["KAY/O", "Gekko", "Breach"] },
      { alias: "keiko", real: "Georgio Sanassy", role: "Duelist", agents: ["Jett", "Raze", "Yoru"] },
      { alias: "brawk", real: "Brock Somerhalder", role: "Initiator", agents: ["Sova", "Fade", "KAY/O"] },
      { alias: "mada", real: "Adam Pampuch", role: "Flex / Initiator", agents: ["Breach", "KAY/O", "Gekko"] },
      { alias: "skuba", real: "Logan Jenkins", role: "Controller", agents: ["Omen", "Astra", "Viper"] }
    ],
    star: "Ethan",
    starRole: "IGL / Utility Maestro",
    roadToChampions: "คว้าตั๋วผ่านคะแนนสะสม Championship Points #1 ของ Americas — แสดงความสม่ำเสมอตลอดทั้งปี จบอันดับ 3 ใน Stage 2 หลังต่อสู้กับ LOUD ถึงแมพ 5",
    recentForm: "เก๋าเกมและนิ่งมาก Ethan และโค้ช bonkar วางระบบทีมที่ยากจะถูกเคาน์เตอร์ได้ง่ายๆ",
    tacticalIdentity: "Utility Layering & Masterful Mid-Round Calling — ชนะด้วยการใช้สกิลสนับสนุนที่ประสานกันอย่างไร้รอยต่อ บีบคู่แข่งให้อยู่ในมุมอับแล้วใช้ข้อได้เปรียบทางตำแหน่งปิดเกม",
    strengths: "การคอลเกมของ Ethan ระดับแชมป์โลก; การประสานงานของสกิลแฟลชและสตันที่แม่นยำ; ประสบการณ์รับมือสถานการณ์บีบคั้น",
    concerns: "Firepower ในการดวลปืนตรงๆ อาจเป็นรองทีมอย่าง KC หรือ NS ในบางจังหวะ ต้องพึ่งพาการเซ็ตอัปสกิลอย่างมาก",
    mapPool: {
      strong: ["Sunset", "Haven", "Abyss"],
      playable: ["Ascent", "Split"],
      banTendency: "มักแบน Bind หรือ Lotus"
    },
    playerToWatchRationale: "Ethan คือผู้เล่น Initiator ที่ใช้ Utility ได้ฉลาดที่สุดในโลก การแฟลชนำทางและสตันของเขาสร้างคิลให้เพื่อนร่วมทีมได้อย่างสม่ำเสมอ",
    sourceUrl: "https://www.vlr.gg/team/1034/nrg"
  }
];

const GROUP_PREDICTIONS = {
  A: {
    groupLetter: "A",
    name: "Group A",
    theme: "Momentum vs Veteran Pedigree",
    outlook: "100 Thieves ถือโมเมนตัมแชมป์ Americas และดูพร้อมที่สุดในสาย แต่ T1 พกพาประสบการณ์ระดับโลกมาเต็มกระเป๋า ขณะที่ JD Gaming ได้เสียงเชียร์เจ้าบ้าน และ FUT มี Aim Ceiling พร้อมพลิกกระดานทุกวินาที",
    matches: [
      {
        id: "A-M1",
        stageName: "OPENING MATCH 01",
        stageType: "opening",
        schedule: "27 ก.ย. 2026 · 16:00 น. (GMT+7)",
        teamA: "100t",
        teamB: "t1",
        predictedWinner: "100t",
        predictedScore: "2 - 1",
        confidence: "EDGE",
        confidenceNote: "โมเมนตัมแชมป์ Americas และความคมของ Cryocells ให้ความได้เปรียบในการคุมจังหวะเกม",
        veto: "100T แบน Lotus · T1 แบน Ascent · 100T เลือก Haven · T1 เลือก Breeze · Decider: Sunset",
        tacticalKey: "100T มีความเร็วและการเปิดพื้นที่ของ Asuna กับ vora ที่พร้อมลงโทษการตั้งรับแบบใจเย็นของ T1 แต่หาก T1 ยืดเกมเข้าสู่ Late-Round และ Meteor คุม Site ได้เหนียวแน่น ช่องว่างจะลดลงทันที",
        playerDuel: "Cryocells (Jett) vs BuZz (Jett/Raze) — การดวล Operator ชิง First Blood เพื่อคุมความได้เปรียบด้าน Econ",
        upsetCondition: "T1 ตัดจังหวะ First Blood ของ 100T ได้ต่อเนื่อง และดึงเกมเข้าสู่สถานการณ์ Retake 4v4 ที่ stax ถนัดคอลเกม"
      },
      {
        id: "A-M2",
        stageName: "OPENING MATCH 02",
        stageType: "opening",
        schedule: "27 ก.ย. 2026 · 19:00 น. (GMT+7)",
        teamA: "jdg",
        teamB: "fut",
        predictedWinner: "jdg",
        predictedScore: "2 - 1",
        confidence: "SLIGHT LEAN",
        confidenceNote: "JDG มาในฐานะรองแชมป์จีนที่มีความมั่นใจและได้เปรียบเรื่องการปรับตัวกับเวทีเซี่ยงไฮ้",
        veto: "JDG แบน Breeze · FUT แบน Sunset · JDG เลือก Ascent · FUT เลือก Lotus · Decider: Haven",
        tacticalKey: "การคอลเกมแบบกล้าได้กล้าเสียของ BerLIN จะสร้างความปั่นป่วนให้แนวรับของ FUT ขณะที่ FUT ต้องพึ่งพา Aim ของ xeus ในการเจาะ Site",
        playerDuel: "Yuicaw (Operator) vs xeus (Rifle Entry) — Op เจ้าถิ่นวัดกับ Entry Fragger สาย Aim โหดจากตุรกี",
        upsetCondition: "xeus และ yetujey ชนะ Pistol ทั้งสองครึ่งและ Snowball ปืน Rifle จน JDG ตั้ง Econ ไม่ได้และต้องเล่น Eco Round ติดต่อกัน"
      },
      {
        id: "A-WINNERS",
        stageName: "WINNERS MATCH",
        stageType: "winners",
        schedule: "30 ก.ย. 2026 · 16:00 น. (GMT+7)",
        teamA: "100t",
        teamB: "jdg",
        predictedWinner: "100t",
        predictedScore: "2 - 0",
        confidence: "STRONG EDGE",
        confidenceNote: "ความลึกของแผนและวินัย Macro ของ 100T เหนือกว่า JDG ในการเล่นระยะยาว",
        veto: "100T แบน Lotus · JDG แบน Abyss · 100T เลือก Sunset · JDG เลือก Ascent · Decider: Haven",
        tacticalKey: "100 Thieves มีประสบการณ์ในการรับมือกับความดุดันระดับภูมิภาค Americas มาแล้ว ทำให้สามารถรับมือกับการลอบโจมตีของ BerLIN ได้อย่างใจเย็น",
        playerDuel: "Cryocells vs Yuicaw — สงคราม Operator ตัดสินพื้นที่ A-Main",
        upsetCondition: "JDG ชนะ Opening Duels 70%+ และทำให้ 100T เสียการควบคุมพื้นที่กลางแมพ (Mid Control)",
        advancement: "ผู้ชนะผ่านเข้าสู่รอบ Playoffs ในฐานะ Seed #1 ของกลุ่ม A"
      },
      {
        id: "A-ELIM",
        stageName: "ELIMINATION MATCH",
        stageType: "elimination",
        schedule: "2 ต.ค. 2026 · 16:00 น. (GMT+7)",
        teamA: "t1",
        teamB: "fut",
        predictedWinner: "t1",
        predictedScore: "2 - 1",
        confidence: "SLIGHT LEAN",
        confidenceNote: "ในเกมเดิมพันสูงหลังพิงฝา เราให้น้ำหนักกับความเก๋าของแกนผู้เล่นระดับโลกของ T1",
        veto: "T1 แบน Sunset · FUT แบน Haven · T1 เลือก Breeze · FUT เลือก Lotus · Decider: Bind",
        tacticalKey: "FUT เล่นด้วยอารมณ์และจังหวะเร็ว หาก T1 ดึงจังหวะให้ช้าลงและใช้ประโยชน์จากสกิลของ stax กับ Meteor จะบีบให้ FUT เล่นผิดพลาดเอง",
        playerDuel: "stax (Breach/Fade) vs sociablEE (Sova) — การประชัน Utility เปิดวิชั่นและเคลียร์มุมอับ",
        upsetCondition: "FUT บุกทะลวงด้วยความเร็วสูงจน T1 ไม่มีเวลาเซ็ตอัปแนวรับ Retake",
        eliminationNote: "ผู้แพ้ตกรอบจากการแข่งขันทันที (0-2 ในกลุ่ม)"
      },
      {
        id: "A-DECIDER",
        stageName: "DECIDER MATCH",
        stageType: "decider",
        schedule: "4 ต.ค. 2026 · 16:00 น. (GMT+7)",
        teamA: "jdg",
        teamB: "t1",
        predictedWinner: "t1",
        predictedScore: "2 - 1",
        confidence: "SLIGHT LEAN",
        confidenceNote: "การเจอกันในนัดตัดสินเปิดโอกาสให้ทีมโค้ช KDG ทำการบ้านแก้ทางสไตล์ของ JDG ได้ละเอียดกว่า",
        veto: "JDG แบน Breeze · T1 แบน Ascent · JDG เลือก Sunset · T1 เลือก Haven · Decider: Lotus",
        tacticalKey: "T1 มีความยืดหยุ่นในการปรับตัวระหว่างซีรีส์สูงกว่า ประสบการณ์ของ Munchkin และ stax จะช่วยคุมความกดดันใน Decider Match",
        playerDuel: "Meteor vs crownfisher — การต่อสู้ของสอง Sentinel ในการปิดกั้นเส้นทางเดินของคู่แข่ง",
        upsetCondition: "JDG ได้แรงใจจากแฟนคลับเซี่ยงไฮ้และยิงนำห่างในครึ่งแรกจน T1 สูญเสียความมั่นใจ",
        advancement: "ผู้ชนะผ่านเข้าสู่รอบ Playoffs ในฐานะ Seed #2 ของกลุ่ม A"
      }
    ],
    qualified: [
      { seed: 1, teamId: "100t", status: "PLAYOFFS QUALIFIED · SEED #1 (2-0)" },
      { seed: 2, teamId: "t1", status: "PLAYOFFS QUALIFIED · SEED #2 (2-1)" }
    ]
  },
  B: {
    groupLetter: "B",
    name: "Group B",
    theme: "Contrast of Eras & Legacies",
    outlook: "กลุ่มแห่งความแตกต่างสุดขั้ว: GE มาพร้อมถ้วยแชมป์ประวัติศาสตร์ และ LOUD สายเลือดใหม่ที่ไร้ความกลัว ปะทะกับยักษ์ใหญ่อย่าง Vitality และแกนแชมป์โลกของ EDward Gaming",
    matches: [
      {
        id: "B-M1",
        stageName: "OPENING MATCH 01",
        stageType: "opening",
        schedule: "26 ก.ย. 2026 · 16:00 น. (GMT+7)",
        teamA: "ge",
        teamB: "vit",
        predictedWinner: "vit",
        predictedScore: "2 - 1",
        confidence: "SLIGHT LEAN",
        confidenceNote: "ประสบการณ์ในเวทีนานาชาติของ Derke และ Chronicle อาจช่วยรองรับแรงกระแทกในนัดเปิดสนามได้ดีกว่า",
        veto: "GE แบน Fracture/Haven · VIT แบน Ascent · GE เลือก Breeze · VIT เลือก Sunset · Decider: Pearl",
        tacticalKey: "GE มีระบบการเล่นเฉพาะทางที่โดดเด่น แต่ Vitality มีผู้เล่นที่สามารถฉีกแผนคู่แข่งด้วยการชนะการดวล 1v1",
        playerDuel: "Autumn (Jett/Chamber) vs Derke (Jett) — การดวล Entry Fragger ระดับท็อป ใครชิง First Blood ได้ก่อนกุมความได้เปรียบ",
        upsetCondition: "Off-meta Comp ของโค้ช Platoon ทำงานสมบูรณ์แบบ และ PatMen ระเบิดฟอร์มทำลาย Setup ของ Vitality ขาดลอย"
      },
      {
        id: "B-M2",
        stageName: "OPENING MATCH 02",
        stageType: "opening",
        schedule: "26 ก.ย. 2026 · 19:00 น. (GMT+7)",
        teamA: "loud",
        teamB: "edg",
        predictedWinner: "loud",
        predictedScore: "2 - 1",
        confidence: "SLIGHT LEAN",
        confidenceNote: "LOUD มาพร้อมฟอร์มล่าสุดที่ร้อนแรงจากการเข้าชิง Americas Stage 2 และจังหวะยิงที่ดุดันตั้งแต่ต้น Round",
        veto: "LOUD แบน Abyss · EDG แบน Icebox · LOUD เลือก Split · EDG เลือก Lotus · Decider: Sunset",
        tacticalKey: "Pace การบุกเร็วของ Darker จะกดดันแนวรับ EDG ขณะที่ EDG ต้องพึ่งพา KangKang ในการดัก Pick First Blood",
        playerDuel: "Darker (Neon/Jett) vs ZmjjKK (Jett/Operator) — Pace ความเร็วสูงของ Darker ปะทะ Operator ของ ZmjjKK",
        upsetCondition: "ZmjjKK ระเบิดฟอร์มเทพต่อหน้าแฟนเจ้าบ้าน และ CHICHOO โชว์ Clutch เก็บตกใน Round สำคัญ"
      },
      {
        id: "B-WINNERS",
        stageName: "WINNERS MATCH",
        stageType: "winners",
        schedule: "30 ก.ย. 2026 · 19:00 น. (GMT+7)",
        teamA: "vit",
        teamB: "loud",
        predictedWinner: "loud",
        predictedScore: "2 - 1",
        confidence: "EDGE",
        confidenceNote: "ความต่อเนื่องและวินัยในการเทรดคิลของ LOUD มีความสม่ำเสมอกว่าความแกว่งของ Vitality",
        veto: "LOUD แบน Lotus · VIT แบน Ascent · LOUD เลือก Split · VIT เลือก Sunset · Decider: Bind",
        tacticalKey: "LOUD มี Trade Chain ที่เหนียวแน่น เมื่อใดที่ Vitality พลาดการเช็กมุม LOUD จะลงโทษด้วยการบุกประชิดตัวทันที",
        playerDuel: "DaviH vs Chronicle — การชิงไหวชิงพริบของสองผู้เล่นสายสนับสนุนที่มีอิมแพกต์สูง",
        upsetCondition: "Derke และ Jamppi ยิงกดดันจน LOUD ไม่กล้าเปิดไฟต์ประชิดตัว",
        advancement: "ผู้ชนะผ่านเข้าสู่รอบ Playoffs ในฐานะ Seed #1 ของกลุ่ม B"
      },
      {
        id: "B-ELIM",
        stageName: "ELIMINATION MATCH",
        stageType: "elimination",
        schedule: "2 ต.ค. 2026 · 19:00 น. (GMT+7)",
        teamA: "ge",
        teamB: "edg",
        predictedWinner: "edg",
        predictedScore: "2 - 1",
        confidence: "EDGE",
        confidenceNote: "ในสถานการณ์หนีตาย เราให้น้ำหนักกับแกนผู้เล่นแชมป์โลกที่เคยผ่านแรงกดดันมหาศาลมาแล้ว",
        veto: "GE แบน Sunset · EDG แบน Breeze · GE เลือก Pearl · EDG เลือก Lotus · Decider: Haven",
        tacticalKey: "EDG มีความนิ่งในเกมยาว Nobody และ CHICHOO จะดักอ่านการหมุนเวียนตำแหน่งของ GE และปิดพื้นที่",
        playerDuel: "PatMen vs CHICHOO — สอง Clutch Specialist ระดับหัวแถวที่จะตัดสินวินาทีสุดท้ายของแต่ละ Round",
        upsetCondition: "GE คุม Pace ตั้งแต่ต้น Round และ Autumn ชิงตัด ZmjjKK ก่อนที่ EDG จะเซ็ตอัป Operator ได้",
        eliminationNote: "ผู้แพ้ตกรอบจากการแข่งขันทันที (0-2 ในกลุ่ม)"
      },
      {
        id: "B-DECIDER",
        stageName: "DECIDER MATCH",
        stageType: "decider",
        schedule: "4 ต.ค. 2026 · 19:00 น. (GMT+7)",
        teamA: "vit",
        teamB: "edg",
        predictedWinner: "edg",
        predictedScore: "2 - 1",
        confidence: "SLIGHT LEAN",
        confidenceNote: "ความคุ้นเคยกับสังเวียนเซี่ยงไฮ้และแกนหลักเดิมของ EDG มอบความนิ่งในแมตช์ 3 Map",
        veto: "VIT แบน Ascent · EDG แบน Bind · VIT เลือก Sunset · EDG เลือก Lotus · Decider: Haven",
        tacticalKey: "การดวลกันของสองทีมที่มีสตาร์ล้นมือ การตัดสินใจในช่วง Mid-Round ของ nobody จะช่วยให้ EDG เฉือนชนะ Vitality ไปได้",
        playerDuel: "Derke vs ZmjjKK — ซูเปอร์ไฟต์ระดับโลกที่แฟนๆ รอคอย",
        upsetCondition: "Derke ระเบิดฟอร์มบุกพัง Site เดี่ยว และ Sayonara ปิด Clutch สำคัญดับเสียงเชียร์เจ้าบ้าน",
        advancement: "ผู้ชนะผ่านเข้าสู่รอบ Playoffs ในฐานะ Seed #2 ของกลุ่ม B"
      }
    ],
    qualified: [
      { seed: 1, teamId: "loud", status: "PLAYOFFS QUALIFIED · SEED #1 (2-0)" },
      { seed: 2, teamId: "edg", status: "PLAYOFFS QUALIFIED · SEED #2 (2-1)" }
    ]
  },
  C: {
    groupLetter: "C",
    name: "Group C",
    theme: "The Group of Death",
    outlook: "กลุ่มที่หินและเดาทางยากที่สุดในประวัติศาสตร์ Champions: TYLOO แชมป์จีนไฟแรง ต้องเผชิญหน้ากับสามมหาอำนาจระดับโลกอย่าง G2, Team Liquid และ Paper Rex ที่มีสไตล์ต่างกันสุดขั้ว",
    matches: [
      {
        id: "C-M1",
        stageName: "OPENING MATCH 01",
        stageType: "opening",
        schedule: "24 ก.ย. 2026 · 19:00 น. (GMT+7)",
        teamA: "tyloo",
        teamB: "g2",
        predictedWinner: "g2",
        predictedScore: "2 - 1",
        confidence: "SLIGHT LEAN",
        confidenceNote: "G2 มีการเตรียมตัวและโครงสร้างการแก้เกมที่ลึกซึ้ง แม้จะต้องเผชิญหน้ากับเสียงเชียร์เจ้าบ้านของ TYLOO",
        veto: "TYLOO แบน Split · G2 แบน Sunset · TYLOO เลือก Haven · G2 เลือก Bind · Decider: Ascent",
        tacticalKey: "valyn จะใช้การคอลเกมแบบใจเย็นชะลอความเร็วดุดันของ splash และบีบให้ TYLOO ต้องเจอกับกับดักของ leaf",
        playerDuel: "splash (Jett/Raze) vs jawgemo (Neon/Raze) — วัด Pace ความเร็วของสอง Movement Duelist สาย Entry",
        upsetCondition: "TYLOO ยิงทะลุทุกแนวรับด้วยความมั่นใจจากแฟนเซี่ยงไฮ้ และไม่ปล่อยให้ G2 มีเวลาเซ็ตอัปแผนแก้ทาง"
      },
      {
        id: "C-M2",
        stageName: "OPENING MATCH 02",
        stageType: "opening",
        schedule: "24 ก.ย. 2026 · 16:00 น. (GMT+7)",
        teamA: "tl",
        teamB: "prx",
        predictedWinner: "prx",
        predictedScore: "2 - 1",
        confidence: "SLIGHT LEAN",
        confidenceNote: "ความยืดหยุ่นและความเร็วสไตล์ W-Gaming ของ PRX มักจะบีบให้ทีมที่เล่นเป็นระบบอย่าง Liquid ต้องหลุดจากคอมฟอร์ตโซน",
        veto: "TL แบน Lotus · PRX แบน Haven · TL เลือก Ascent · PRX เลือก Split · Decider: Bind",
        tacticalKey: "PRX จะเปิดฉากบุกทะลวงตั้งแต่ 10 วินาทีแรก ขณะที่ Liquid หวังให้ nAts รวบรวมข้อมูลและดักทางในช่วง Mid-Round",
        playerDuel: "nAts (Cypher) vs f0rsakeN (Flex/Yoru) — Mind Game ระหว่างเทพ Lurk กับตัวป่วน Flex Pick ที่เดาทางยากที่สุด",
        upsetCondition: "nAts ดักเก็บจังหวะ Trade Kill ของ PRX ได้หมดจด และบีบให้ W-Gaming ต้องเล่น Slow Pace ที่พวกเขาไม่ถนัด"
      },
      {
        id: "C-WINNERS",
        stageName: "WINNERS MATCH",
        stageType: "winners",
        schedule: "29 ก.ย. 2026 · 16:00 น. (GMT+7)",
        teamA: "g2",
        teamB: "prx",
        predictedWinner: "prx",
        predictedScore: "2 - 1",
        confidence: "SLIGHT LEAN",
        confidenceNote: "ความคุ้นเคยของแกนผู้เล่น PRX และการปรับเปลี่ยนตัวละครที่ไม่ซ้ำซากทำให้ anti-strat ของ G2 จับทางได้ยาก",
        veto: "G2 แบน Lotus · PRX แบน Breeze · G2 เลือก Abyss · PRX เลือก Split · Decider: Ascent",
        tacticalKey: "d4v41 จะเป็นตัวเชื่อมประสานที่ปิดจุดบกพร่องของ PRX ช่วยให้ทีมรับมือกับโครงสร้างอันแน่นหนาของ G2 ได้",
        playerDuel: "something vs leaf — Operator สายพริ้วของ PRX ดวลกับแนวรับ Anchor ที่แน่นหนาของ leaf",
        upsetCondition: "JoshRT และ valyn วางแผนดักทางลูกบุกของ PRX ได้สมบูรณ์แบบจน W-Gaming ไม่สามารถเปิด Site ได้",
        advancement: "ผู้ชนะผ่านเข้าสู่รอบ Playoffs ในฐานะ Seed #1 ของกลุ่ม C"
      },
      {
        id: "C-ELIM",
        stageName: "ELIMINATION MATCH",
        stageType: "elimination",
        schedule: "1 ต.ค. 2026 · 16:00 น. (GMT+7)",
        teamA: "tyloo",
        teamB: "tl",
        predictedWinner: "tl",
        predictedScore: "2 - 0",
        confidence: "EDGE",
        confidenceNote: "Liquid มีระบบและวินัยในการเล่นเกมหลังพิงฝาที่พิสูจน์แล้วใน Lower Bracket ของ EMEA",
        veto: "TYLOO แบน Ascent · TL แบน Lotus · TYLOO เลือก Haven · TL เลือก Split · Decider: Bind",
        tacticalKey: "nAts จะล็อกพื้นที่ไม่ให้ TYLOO เดินเกมบุกเร็วได้ตามใจชอบ และบีบให้ TYLOO ต้องตัดสินใจในสถานการณ์ที่ข้อมูลไม่สมบูรณ์",
        playerDuel: "kamo vs splash — สอง Duelist วัยรุ่นวัดความแม่นยำในการเปิด First Blood",
        upsetCondition: "TYLOO คว้าชัยชนะใน Pistol Round ทั้งหมด และใช้โมเมนตัมเสียงเชียร์เจ้าบ้านโถมบุก Site แบบต่อเนื่อง",
        eliminationNote: "ผู้แพ้ตกรอบจากการแข่งขันทันที (0-2 ในกลุ่ม)"
      },
      {
        id: "C-DECIDER",
        stageName: "DECIDER MATCH",
        stageType: "decider",
        schedule: "3 ต.ค. 2026 · 16:00 น. (GMT+7)",
        teamA: "g2",
        teamB: "tl",
        predictedWinner: "g2",
        predictedScore: "2 - 1",
        confidence: "SLIGHT LEAN",
        confidenceNote: "การเจอกันระหว่างสองทีมแท็กติกชั้นสูง G2 มีความหลากหลายในการบุกและทีเด็ดจาก jawgemo มากกว่าเล็กน้อย",
        veto: "G2 แบน Haven · TL แบน Sunset · G2 เลือก Bind · TL เลือก Ascent · Decider: Abyss",
        tacticalKey: "trent และ BABYBAY จะช่วยสร้างมิติการโจมตีเสริมให้ G2 ขณะที่ Liquid จะพยายามบีบให้เกมกลายเป็นหมากรุกแบบที่ nAts ถนัด",
        playerDuel: "valyn vs trexx — การดวลของสองมันสมองในจังหวะ Retake และการคอลเกม",
        upsetCondition: "nAts และ trexx คุมพื้นที่ Mid ได้เบ็ดเสร็จและไม่เปิดช่องว่างให้ G2 ได้เล่นแผน Flank",
        advancement: "ผู้ชนะผ่านเข้าสู่รอบ Playoffs ในฐานะ Seed #2 ของกลุ่ม C"
      }
    ],
    qualified: [
      { seed: 1, teamId: "prx", status: "PLAYOFFS QUALIFIED · SEED #1 (2-0)" },
      { seed: 2, teamId: "g2", status: "PLAYOFFS QUALIFIED · SEED #2 (2-1)" }
    ]
  },
  D: {
    groupLetter: "D",
    name: "Group D",
    theme: "The EMEA Giant & Tacticians' Gridlock",
    outlook: "Karmine Corp คือเต็งหนึ่งที่ฟอร์มครบเครื่องที่สุดของกลุ่ม แต่ Nongshim RedForce และ NRG แทบไม่มีระยะห่างทางแท็กติก ขณะที่ Xi Lai Gaming พร้อมทำหน้าที่เป็น Wildcard ที่พร้อมสร้างความปั่นป่วน",
    matches: [
      {
        id: "D-M1",
        stageName: "OPENING MATCH 01",
        stageType: "opening",
        schedule: "25 ก.ย. 2026 · 19:00 น. (GMT+7)",
        teamA: "kc",
        teamB: "xlg",
        predictedWinner: "kc",
        predictedScore: "2 - 0",
        confidence: "STRONG EDGE",
        confidenceNote: "สถานะแชมป์ EMEA, ความลึกของแผน และฟอร์มอันร้อนแรงของ N4RRATE เหนือกว่าในทุกมิติ",
        veto: "KC แบน Abyss · XLG แบน Breeze · KC เลือก Lotus · XLG เลือก Sunset · Decider: Bind",
        tacticalKey: "SUYGETSU จะเล่น Anchor ปิด Site อย่างเหนียวแน่น ขณะที่ N4RRATE และ dos9 จะบุกทะลวงทำลาย Off-meta Comp ของ XLG",
        playerDuel: "N4RRATE (Fade/Gekko) vs Rarga (Jett/Reyna) — World-class Utility ปะทะ Aggressive Entry Fragger",
        upsetCondition: "XLG เล่น Aggressive Push รวดเร็วไร้แบบแผน และ Rarga ชนะ First Duel แทบทุกรอบ"
      },
      {
        id: "D-M2",
        stageName: "OPENING MATCH 02",
        stageType: "opening",
        schedule: "25 ก.ย. 2026 · 16:00 น. (GMT+7)",
        teamA: "ns",
        teamB: "nrg",
        predictedWinner: "nrg",
        predictedScore: "2 - 1",
        confidence: "SLIGHT LEAN",
        confidenceNote: "ความเชี่ยวชาญในการเล่น Mid-Round และประสบการณ์คุมเกมของ Ethan ช่วยให้ NRG มีความได้เปรียบเล็กน้อย",
        veto: "NS แบน Lotus · NRG แบน Bind · NS เลือก Ascent · NRG เลือก Haven · Decider: Sunset",
        tacticalKey: "NS มี Trade Discipline และ Crossfire ที่เหนียวแน่น แต่ NRG โดดเด่นเรื่องการใช้ Utility Combo สลายแนวรับ",
        playerDuel: "Dambi vs keiko — ศึกวัดความคมของสอง Duelist ตัวความหวัง",
        upsetCondition: "Dambi ระเบิดฟอร์มยิงเปิด Site ขาด และ Rb เล่น Anchor คุมเกมรับเหนียวแน่นจน NRG บุกไม่เข้า"
      },
      {
        id: "D-WINNERS",
        stageName: "WINNERS MATCH",
        stageType: "winners",
        schedule: "29 ก.ย. 2026 · 19:00 น. (GMT+7)",
        teamA: "kc",
        teamB: "nrg",
        predictedWinner: "kc",
        predictedScore: "2 - 1",
        confidence: "EDGE",
        confidenceNote: "KC มีอาวุธการทำสกอร์หลากหลายกว่า และความต่อเนื่องของฟอร์มผู้เล่นชุดนี้กำลังอยู่ในจุดสูงสุด",
        veto: "KC แบน Sunset · NRG แบน Bind · KC เลือก Lotus · NRG เลือก Haven · Decider: Ascent",
        tacticalKey: "NRG จะพยายามดึง Tempo ให้ช้าลงเพื่อเล่น Utility Set แต่ N4RRATE มีความสามารถในการเปิด First Blood จากมุมที่คาดเดาไม่ได้",
        playerDuel: "N4RRATE vs Ethan — การปะทะกันของสองยอดผู้เล่น Initiator ที่ทรงอิทธิพลที่สุดในโลก",
        upsetCondition: "Ethan วาง Utility Combo ขวางจน KC บุกเข้า Site ไม่ได้ และเสีย Round บ่อยในจังหวะ Retake",
        advancement: "ผู้ชนะผ่านเข้าสู่รอบ Playoffs ในฐานะ Seed #1 ของกลุ่ม D"
      },
      {
        id: "D-ELIM",
        stageName: "ELIMINATION MATCH",
        stageType: "elimination",
        schedule: "1 ต.ค. 2026 · 19:00 น. (GMT+7)",
        teamA: "xlg",
        teamB: "ns",
        predictedWinner: "ns",
        predictedScore: "2 - 0",
        confidence: "EDGE",
        confidenceNote: "ความเป็นระบบและ Trade Discipline ของ Nongshim เหนือกว่าสไตล์ High-Risk Play ของ XLG ชัดเจน",
        veto: "XLG แบน Ascent · NS แบน Lotus · XLG เลือก Sunset · NS เลือก Haven · Decider: Split",
        tacticalKey: "วินัยของ NS จะลงโทษจังหวะ Over-peek ของ XLG และการ Anchor พื้นที่ของ Xross กับ Rb จะตัดบทบาทการป่วนของ Rarga",
        playerDuel: "Rb vs Lysoar — ศึกคุมจังหวะของสอง Support / Anchor ผู้ชี้ชะตาเกม",
        upsetCondition: "XLG ชนะ First Blood รวดเร็วต่อเนื่อง และบีบให้ NS ต้องเล่นตาม Fast Tempo ที่ไม่ถนัด",
        eliminationNote: "ผู้แพ้ตกรอบจากการแข่งขันทันที (0-2 ในกลุ่ม)"
      },
      {
        id: "D-DECIDER",
        stageName: "DECIDER MATCH",
        stageType: "decider",
        schedule: "3 ต.ค. 2026 · 19:00 น. (GMT+7)",
        teamA: "nrg",
        teamB: "ns",
        predictedWinner: "nrg",
        predictedScore: "2 - 1",
        confidence: "SLIGHT LEAN",
        confidenceNote: "ในการ Rematch เราให้น้ำหนักกับการแก้เกมของโค้ช bonkar และ Mid-round Calling ของ Ethan ในการเคาน์เตอร์แผนของ NS",
        veto: "NRG แบน Ascent · NS แบน Lotus · NRG เลือก Haven · NS เลือก Sunset · Decider: Bind",
        tacticalKey: "NRG จะทำการบ้านเรื่อง Positioning ของ Dambi มาเป็นอย่างดี และใช้ Utility บังคับให้ NS ต้อง Retake ในจังหวะเสียเปรียบ",
        playerDuel: "Ethan vs Rb — สองเสาหลักผู้ผ่านประสบการณ์ระดับแชมป์โลกและทัวร์นาเมนต์ใหญ่",
        upsetCondition: "Dambi และ Francis พาทีมกวาด Full Buy Round ได้อยู่หมัด และลงโทษจังหวะ Over-rotate ของ NRG ในช่วงท้ายรอบ",
        advancement: "ผู้ชนะผ่านเข้าสู่รอบ Playoffs ในฐานะ Seed #2 ของกลุ่ม D"
      }
    ],
    qualified: [
      { seed: 1, teamId: "kc", status: "PLAYOFFS QUALIFIED · SEED #1 (2-0)" },
      { seed: 2, teamId: "nrg", status: "PLAYOFFS QUALIFIED · SEED #2 (2-1)" }
    ]
  }
};

const PLAYERS_TO_WATCH = [
  {
    num: "01",
    name: "Cryocells",
    teamId: "100t",
    teamName: "100 Thieves",
    role: "Duelist / Operator",
    agents: "Jett · Yoru · Chamber",
    highlight: "แชมป์ Americas Stage 2 จอมแม่น Operator มือหนึ่ง สถิติ First Blood และการปิด Clutch ในรอบชิงคือข้อพิสูจน์ว่าเขาพร้อมพา 100T ขึ้นสู่จุดสูงสุด",
    statBadge: "AMER CHAMPION · TOP OP IMPACT"
  },
  {
    num: "02",
    name: "ZmjjKK",
    teamId: "edg",
    teamName: "EDward Gaming",
    role: "Duelist / Operator",
    agents: "Jett · Raze · Yoru",
    highlight: "มหาอุปราชแห่งเซี่ยงไฮ้และอดีตแชมป์โลก Champions 2024 กลับมาลงแข่งต่อหน้าแฟนคลับในบ้านเกิด ช็อตสะบัด Operator ของเขาสามารถเบรก Econ และเซ็ตโมเมนตัมของทั้งเกมได้ในนัดเดียว",
    statBadge: "WORLD CHAMPION · HOME PHENOM"
  },
  {
    num: "03",
    name: "N4RRATE",
    teamId: "kc",
    teamName: "Karmine Corp",
    role: "Initiator / Flex Superstar",
    agents: "Fade · Gekko · Raze",
    highlight: "ซูเปอร์สตาร์ผู้เล่นตำแหน่ง Initiator ที่มีอิมแพกต์สูงที่สุดของ EMEA ทั้งการเปิด Vision, Mid-round Calling และการดวลปืนที่คมกริบจนพา KC ครองแชมป์ EMEA Stage 2",
    statBadge: "EMEA MVP CALIBER · DUAL THREAT"
  },
  {
    num: "04",
    name: "PatMen",
    teamId: "ge",
    teamName: "Global Esports",
    role: "Sentinel / Utility Fragger",
    agents: "Fade · Cypher · Killjoy",
    highlight: "Ace คนสำคัญที่พา GE สร้างประวัติศาสตร์คว้าแชมป์ Pacific Stage 2 ด้วยสถิติ ACS 302 และ ADR 208 ใน Map ตัดสินกับ PRX เขาคือผู้เล่นที่ยกระดับบทบาท Support สู่ระดับ Fragger แถวหน้า",
    statBadge: "PACIFIC BREAKTHROUGH · PEAK ACS 302"
  },
  {
    num: "05",
    name: "d4v41",
    teamId: "prx",
    teamName: "Paper Rex",
    role: "Support / Anchor",
    agents: "Skye · Fade · Viper",
    highlight: "ขั้วเดียวของ Paper Rex ที่ฟอร์มเสถียรที่สุด สถิติ Rating ≥ 1.00 ครบทุก Map ใน Playoffs เขาคือกระดูกสันหลังที่ทำให้สไตล์ W-Gaming เล่นได้อย่างมั่นใจ",
    statBadge: "THE UNSHAKABLE PILLAR · 100% ≥ 1.00 R"
  },
  {
    num: "06",
    name: "nAts",
    teamId: "tl",
    teamName: "Team Liquid",
    role: "Sentinel / Lurk Master",
    agents: "Cypher · Viper · Killjoy",
    highlight: "ปรมาจารย์ด้าน Map Control และ Mind Game จังหวะ Lurk ของเขาสามารถตรึงคู่แข่งทั้งทีมให้อยู่กับที่ และเป็นหัวใจสำคัญที่พา Liquid ทะลุเข้าสู่รอบชิง EMEA",
    statBadge: "TACTICAL MASTERMIND · INFORMATION GOD"
  },
  {
    num: "07",
    name: "Derke",
    teamId: "vit",
    teamName: "Team Vitality",
    role: "Duelist / Superstar Entry",
    agents: "Jett · Raze · Yoru",
    highlight: "ตำนาน Entry Fragger ระดับเวิลด์คลาสที่ผ่านสังเวียนสากลมาโชกโชน แม้ Vitality จะเข้ามาด้วย Seed 4 แต่ความเฉียบคมของ Derke พร้อมระเบิดฟอร์มทะลวงแนวรับของทุกทีม",
    statBadge: "LAN VETERAN · HISTORIC FIREPOWER"
  },
  {
    num: "08",
    name: "Ethan",
    teamId: "nrg",
    teamName: "NRG",
    role: "IGL / Utility Maestro",
    agents: "KAY/O · Gekko · Breach",
    highlight: "อดีตแชมป์โลกและ IGL ผู้คอมโบ Utility ร่วมกับเพื่อนร่วมทีมได้อย่างสมบูรณ์แบบ เข็มทิศของ NRG ที่พร้อมลากทุกคู่แข่งเข้าสู่เกม Mid-Round อันละเอียดอ่อน",
    statBadge: "CHAMPION IGL · UTILITY MASTER"
  }
];

window.CHAMPIONS_DATA = {
  teams: TEAM_DATA,
  groups: GROUP_PREDICTIONS,
  playersToWatch: PLAYERS_TO_WATCH,
  sources: SOURCES
};
