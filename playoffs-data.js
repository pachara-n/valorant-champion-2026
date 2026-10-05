const PLAYOFFS_DATA = {
  champion: {
    name: "Paper Rex",
    id: "prx",
    logo: "assets/team-logos/prx.png",
    region: "PACIFIC",
    title: "WORLD CHAMPIONS 2026",
    trophyText: "VALORANT CHAMPIONS SHANGHAI 2026 CHAMPION",
    summary: "Paper Rex สถาปนาตัวเองขึ้นสู่จุดสูงสุดของวงการ VALORANT ด้วยการคว้าแชมป์โลก Champions 2026 ครั้งประวัติศาสตร์ ณ นครเซี่ยงไฮ้! การผสานสไตล์ W-Gaming ดุดันเข้ากับความนิ่งระดับมาสเตอร์คลาสของ d4v41 และ f0rsakeN ในแมตช์ตัดสิน Bo5 กับ Team Vitality คือข้อพิสูจน์แห่งยุคสมัยใหม่ของภูมิภาค Pacific",
    deciderClutch: "Map 5 Split (12-10): d4v41 โชว์ 1v2 Post-Plant Clutch ปิดแมตช์แห่งประวัติศาสตร์"
  },
  placements: [
    { place: "1st", rankClass: "place-1st", team: "Paper Rex", id: "prx", region: "Pacific", prize: "$1,000,000", record: "4-0 Series (9-3 Maps)", status: "WORLD CHAMPION" },
    { place: "2nd", rankClass: "place-2nd", team: "Team Vitality", id: "vit", region: "EMEA", prize: "$400,000", record: "3-2 Series (9-7 Maps)", status: "RUNNER-UP" },
    { place: "3rd", rankClass: "place-3rd", team: "G2 Esports", id: "g2", region: "Americas", prize: "$250,000", record: "3-2 Series (7-6 Maps)", status: "LOWER FINAL EXIT" },
    { place: "4th", rankClass: "place-badge", team: "100 Thieves", id: "100t", region: "Americas", prize: "$130,000", record: "2-2 Series (6-5 Maps)", status: "LOWER SEMIFINALS EXIT" },
    { place: "5-6th", rankClass: "place-badge", team: "T1", id: "t1", region: "Pacific", prize: "$85,000", record: "1-2 Series (4-5 Maps)", status: "LOWER ROUND 2 EXIT" },
    { place: "5-6th", rankClass: "place-badge", team: "NRG", id: "nrg", region: "Americas", prize: "$85,000", record: "1-2 Series (3-5 Maps)", status: "LOWER ROUND 2 EXIT" },
    { place: "7-8th", rankClass: "place-badge", team: "Nongshim RedForce", id: "ns", region: "Pacific", prize: "$50,000", record: "0-2 Series (0-4 Maps)", status: "LOWER ROUND 1 EXIT" },
    { place: "7-8th", rankClass: "place-badge", team: "LOUD", id: "loud", region: "Americas", prize: "$50,000", record: "0-2 Series (1-4 Maps)", status: "LOWER ROUND 1 EXIT" }
  ],
  matches: [
    {
      id: "uqf1",
      bracket: "upper",
      round: "Upper Quarterfinals",
      time: "- 4:00 pm +07, Oct 8",
      format: "Bo3",
      team1: { id: "100t", name: "100 Thieves", score: 2, win: true, logo: "assets/team-logos/100t.png" },
      team2: { id: "g2", name: "G2 Esports", score: 1, win: false, logo: "assets/team-logos/g2.png" },
      maps: [
        { name: "Sunset", score: "13-11", winner: "100T" },
        { name: "Split", score: "10-13", winner: "G2" },
        { name: "Haven", score: "13-9", winner: "100T" }
      ],
      veto: "G2 แบน Lotus · 100T แบน Abyss · G2 เลือก Sunset · 100T เลือก Split · Decider: Haven",
      keyDuel: "Cryocells (OP Sniper) vs jawgemo (Neon Movement)",
      tacticalKey: "100 Thieves ใช้จังหวะ First Pick ของ Cryocells ตรึงเลนกลาง ขณะที่ G2 พยายามใช้แผน Retake เร็วใน Split แต่ใน Haven จังหวะคุมพื้นที่ของ Asuna และ bang ปิดช่องทางตีเสมอของ G2 ได้หมดจด",
      upsetFactor: "หาก jawgemo ได้พื้นที่เปิดใน Split และ Sunset ต่อเนื่อง G2 มีโอกาสปิด 2-0 ได้ทันที"
    },
    {
      id: "uqf2",
      bracket: "upper",
      round: "Upper Quarterfinals",
      time: "- 7:00 pm +07, Oct 8",
      format: "Bo3",
      team1: { id: "vit", name: "Team Vitality", score: 2, win: true, logo: "assets/team-logos/vit.png" },
      team2: { id: "ns", name: "Nongshim RedForce", score: 0, win: false, logo: "assets/team-logos/ns.png" },
      maps: [
        { name: "Abyss", score: "13-8", winner: "VIT" },
        { name: "Lotus", score: "13-10", winner: "VIT" }
      ],
      veto: "NS แบน Ascent · VIT แบน Haven · VIT เลือก Abyss · NS เลือก Lotus · Decider: Sunset",
      keyDuel: "Derke (Jett / Neon) vs Dambi (Neon Entry)",
      tacticalKey: "ความนิ่งและการอ่านจังหวะ Rotation ของ Chronicle (Vyse/Chamber) สกัดกั้นจังหวะบุกความเร็วสูงของ NS ได้เด็ดขาด Derke เก็บ First Blood เฉลี่ย 0.28 ต่อรอบ พาทีมเก็บคลีนชีต 2-0",
      upsetFactor: "NS อาศัยคอมป์ไม่ตามตำราป่วนคู่แข่ง หาก VIT หลุดโฟกัสใน Abyss เกมอาจยืดเยื้อถึงแมพ 3"
    },
    {
      id: "uqf3",
      bracket: "upper",
      round: "Upper Quarterfinals",
      time: "- 4:00 pm +07, Oct 7",
      format: "Bo3",
      team1: { id: "nrg", name: "NRG", score: 1, win: false, logo: "assets/team-logos/nrg.png" },
      team2: { id: "t1", name: "T1", score: 2, win: true, logo: "assets/team-logos/t1.png" },
      maps: [
        { name: "Lotus", score: "11-13", winner: "T1" },
        { name: "Haven", score: "13-9", winner: "NRG" },
        { name: "Summit", score: "10-13", winner: "T1" }
      ],
      veto: "NRG แบน Abyss · T1 แบน Sunset · T1 เลือก Lotus · NRG เลือก Haven · Decider: Summit",
      keyDuel: "Ethan (KAY/O Flash) vs stax (Breach / Omen IGL)",
      tacticalKey: "การดวลกันของสอง IGL ชั้นครู stax ปลุกใจลูกทีมใน Decider Summit ด้วยการคุมพื้นที่ Vertical Angles และจังหวะ Multi-kill ของ BuZz และ Meteor ช่วยให้ T1 เฉือนชนะในแมพใหม่อย่าง Summit ไป 13-10",
      upsetFactor: "NRG ชนะ Pistol Rounds ได้ถึง 4 จาก 6 รอบ แต่เสียจังหวะในรอบ Bonus และ Anti-Eco บน Summit"
    },
    {
      id: "uqf4",
      bracket: "upper",
      round: "Upper Quarterfinals",
      time: "- 7:00 pm +07, Oct 7",
      format: "Bo3",
      team1: { id: "prx", name: "Paper Rex", score: 2, win: true, logo: "assets/team-logos/prx.png" },
      team2: { id: "loud", name: "LOUD", score: 0, win: false, logo: "assets/team-logos/loud.png" },
      maps: [
        { name: "Sunset", score: "13-9", winner: "PRX" },
        { name: "Lotus", score: "13-8", winner: "PRX" }
      ],
      veto: "LOUD แบน Split · PRX แบน Haven · PRX เลือก Sunset · LOUD เลือก Lotus · Decider: Abyss",
      keyDuel: "f0rsakeN (Yoru / Omen) vs Darker (Omen / Viper)",
      tacticalKey: "W-Gaming แสดงแสนยานุภาพเต็มพิกัด f0rsakeN และ something ฉีกแนวรับ LOUD ขาดวิ่น d4v41 ตอกย้ำเรตติ้ง 1.25 คุมจังหวะหลังไซต์ไม่เปิดโอกาสให้ LOUD ได้เซ็ตคอมโบสวนกลับ",
      upsetFactor: "LOUD เล่นเกมรับได้เหนียวแน่นช่วงต้นครึ่งแรก แต่ไม่สามารถทนทานต่อเพรสซิ่งสูงของ PRX ในครึ่งหลัง"
    },
    {
      id: "lr1_1",
      bracket: "lower",
      round: "Lower Round 1",
      time: "- 4:00 pm +07, Oct 9",
      format: "Bo3 (Elimination)",
      team1: { id: "g2", name: "G2 Esports", score: 2, win: true, logo: "assets/team-logos/g2.png" },
      team2: { id: "ns", name: "Nongshim RedForce", score: 0, win: false, logo: "assets/team-logos/ns.png" },
      maps: [
        { name: "Split", score: "13-7", winner: "G2" },
        { name: "Sunset", score: "13-9", winner: "G2" }
      ],
      veto: "NS แบน Lotus · G2 แบน Abyss · G2 เลือก Split · NS เลือก Sunset · Decider: Haven",
      keyDuel: "valyn (Omen IGL) vs Rb (Omen / Yoru Veteran)",
      tacticalKey: "G2 คืนฟอร์มแกร่งด้วยการเล่นเกมช้าดึงจังหวะ Macro Control ใน Split ตัดวงจรความเร็วของ NS ทำให้ Dambi ไม่สามารถเปิด First Kill ได้ตามถนัด ส่ง NS ยุติเส้นทางที่อันดับ 7-8th",
      upsetFactor: "NS พยายามเร่งจังหวะบุก B ใน Sunset แต่ติดกับดัก Utility ของ leaf และ trent"
    },
    {
      id: "lr1_2",
      bracket: "lower",
      round: "Lower Round 1",
      time: "- 7:00 pm +07, Oct 9",
      format: "Bo3 (Elimination)",
      team1: { id: "nrg", name: "NRG", score: 2, win: true, logo: "assets/team-logos/nrg.png" },
      team2: { id: "loud", name: "LOUD", score: 1, win: false, logo: "assets/team-logos/loud.png" },
      maps: [
        { name: "Haven", score: "13-10", winner: "NRG" },
        { name: "Lotus", score: "11-13", winner: "LOUD" },
        { name: "Ascent", score: "13-8", winner: "NRG" }
      ],
      veto: "LOUD แบน Sunset · NRG แบน Split · NRG เลือก Haven · LOUD เลือก Lotus · Decider: Ascent",
      keyDuel: "keiko (Jett / Chamber) vs DaviH (Sova / Fade)",
      tacticalKey: "แมตช์แห่งศักดิ์ศรี Americas ลีกเดียวกัน Ethan คอลแผนบุก Ascent ได้คมกริบ อาศัยจังหวะ Recon Arrow ของ brawk เจาะไซต์ A รัวๆ ส่ง LOUD ตกรอบอันดับ 7-8th",
      upsetFactor: "LOUD ดึงโมเมนตัมคืนมาได้ใน Lotus จากการบุกทะลวงของ tkzin แต่แผ่วปลายใน Decider Map Ascent"
    },
    {
      id: "usf1",
      bracket: "upper",
      round: "Upper Semifinals",
      time: "- 4:00 pm +07, Oct 10",
      format: "Bo3",
      team1: { id: "100t", name: "100 Thieves", score: 1, win: false, logo: "assets/team-logos/100t.png" },
      team2: { id: "vit", name: "Team Vitality", score: 2, win: true, logo: "assets/team-logos/vit.png" },
      maps: [
        { name: "Haven", score: "10-13", winner: "VIT" },
        { name: "Sunset", score: "13-11", winner: "100T" },
        { name: "Abyss", score: "9-13", winner: "VIT" }
      ],
      veto: "100T แบน Split · VIT แบน Lotus · VIT เลือก Haven · 100T เลือก Sunset · Decider: Abyss",
      keyDuel: "Derke (Entry Superstar) vs Cryocells (Clutch Fragger)",
      tacticalKey: "การต่อสู้ระดับเวิลด์คลาส Derke และ Jamppi โชว์ความเฉียบคมใน Haven แต่ 100T สู้ยิบตาคว้า Sunset คืนได้ ใน Decider Abyss ความเข้าใจแผนการกระโดดและการคุม Space ของ Vitality ส่งพวกเขาเข้าชิงสายบน",
      upsetFactor: "Cryocells กด Operator ระดับ 18 คิลใน Sunset หากเขาได้ช็อตเปิดใน Abyss เร็วกว่านี้ 100T อาจปิดเกมได้"
    },
    {
      id: "usf2",
      bracket: "upper",
      round: "Upper Semifinals",
      time: "- 7:00 pm +07, Oct 10",
      format: "Bo3",
      team1: { id: "t1", name: "T1", score: 1, win: false, logo: "assets/team-logos/t1.png" },
      team2: { id: "prx", name: "Paper Rex", score: 2, win: true, logo: "assets/team-logos/prx.png" },
      maps: [
        { name: "Sunset", score: "8-13", winner: "PRX" },
        { name: "Ascent", score: "13-10", winner: "T1" },
        { name: "Split", score: "11-13", winner: "PRX" }
      ],
      veto: "T1 แบน Haven · PRX แบน Abyss · PRX เลือก Sunset · T1 เลือก Ascent · Decider: Split",
      keyDuel: "something (Yoru / Sage) vs Meteor (Jett / Chamber)",
      tacticalKey: "Pacific Derby สุดมันส์ T1 แสดงความนิ่งในแมพ Ascent แต่ใน Decider Split สไตล์ Teleport หลอกล่อของ something และจังหวะ Engage ของ Jinggg เจาะ A Heaven พลิกเกมให้ PRX ชนะ 13-11",
      upsetFactor: "T1 นำ 11-10 ใน Split แต่ถูก PRX เซ็ต Force Buy ชนะ 3 รอบรวดปิดแมตช์"
    },
    {
      id: "lr2_1",
      bracket: "lower",
      round: "Lower Round 2",
      time: "- 4:00 pm +07, Oct 11",
      format: "Bo3 (Elimination)",
      team1: { id: "t1", name: "T1", score: 1, win: false, logo: "assets/team-logos/t1.png" },
      team2: { id: "g2", name: "G2 Esports", score: 2, win: true, logo: "assets/team-logos/g2.png" },
      maps: [
        { name: "Lotus", score: "13-9", winner: "T1" },
        { name: "Split", score: "8-13", winner: "G2" },
        { name: "Haven", score: "10-13", winner: "G2" }
      ],
      veto: "G2 แบน Sunset · T1 แบน Abyss · T1 เลือก Lotus · G2 เลือก Split · Decider: Haven",
      keyDuel: "jawgemo (Neon Entry) vs BuZz (Neon / Raze Duelist)",
      tacticalKey: "G2 แสดงความอึดในสายล่าง jawgemo เล่น Neon ได้อย่างไร้เทียมทานใน Haven เจาะไซต์ C รัวๆ บังคับให้ T1 ต้องเล่นเกม Retake เสียเปรียบตลอดเวลา ส่ง T1 ตกรอบอันดับ 5-6th",
      upsetFactor: "stax เล่นได้อย่างดุดันใน Lotus พาทีมขึ้นนำก่อน แต่ G2 ปรับแผนดัก Flash ใน Haven ได้อยู่หมัด"
    },
    {
      id: "lr2_2",
      bracket: "lower",
      round: "Lower Round 2",
      time: "- 7:00 pm +07, Oct 11",
      format: "Bo3 (Elimination)",
      team1: { id: "100t", name: "100 Thieves", score: 2, win: true, logo: "assets/team-logos/100t.png" },
      team2: { id: "nrg", name: "NRG", score: 0, win: false, logo: "assets/team-logos/nrg.png" },
      maps: [
        { name: "Sunset", score: "13-8", winner: "100T" },
        { name: "Haven", score: "13-10", winner: "100T" }
      ],
      veto: "NRG แบน Abyss · 100T แบน Split · 100T เลือก Sunset · NRG เลือก Haven · Decider: Lotus",
      keyDuel: "Cryocells (Flex Fragger) vs Ethan (IGL Leader)",
      tacticalKey: "Cryocells สวมบทบาทเดอะแบกด้วยเรตติ้ง 1.34 ชัตดาวน์การบุกของ NRG ทั้งใน Sunset และ Haven จังหวะคุมพื้นที่ของ bang (Controller) ตัดขาดการเคลื่อนที่ของ NRG ส่ง 100T เข้าสู่รอบรองสายล่าง",
      upsetFactor: "NRG พยายามดันไซต์ C ใน Haven ช่วงท้าย แต่ติดแนวสไนเปอร์ของ Cryocells 3 รอบติด"
    },
    {
      id: "uf",
      bracket: "upper",
      round: "Upper Final",
      time: "- 1:00 pm +07, Oct 16",
      format: "Bo3 (Grand Final Qualifier)",
      team1: { id: "vit", name: "Team Vitality", score: 1, win: false, logo: "assets/team-logos/vit.png" },
      team2: { id: "prx", name: "Paper Rex", score: 2, win: true, logo: "assets/team-logos/prx.png" },
      maps: [
        { name: "Lotus", score: "11-13", winner: "PRX" },
        { name: "Abyss", score: "13-9", winner: "VIT" },
        { name: "Sunset", score: "10-13", winner: "PRX" }
      ],
      veto: "PRX แบน Haven · VIT แบน Split · PRX เลือก Lotus · VIT เลือก Abyss · Decider: Sunset",
      keyDuel: "f0rsakeN (Flex God) vs Chronicle (Sentinel Maestro)",
      tacticalKey: "Paper Rex ตีตั๋วเข้าสู่ Grand Final ใบแรกสำเร็จ! หลังจากการต่อสู้สุดดุเดือดใน Lotus และ Abyss ใน Decider Sunset จังหวะ Lurk ของ f0rsakeN ผสานกับการบุกความเร็วสูงของ Jinggg ทลายการตั้งรับของ Vitality ส่ง PRX ลอยลำเข้านัดชิง",
      upsetFactor: "Vitality แสดงวินัยใน Abyss ยอดเยี่ยม แต่ใน Sunset ไม่สามารถหยุดจังหวะ W-Gaming Tempo ได้ทัน"
    },
    {
      id: "lr3",
      bracket: "lower",
      round: "Lower Round 3",
      time: "- 4:00 pm +07, Oct 16",
      format: "Bo3 (Elimination)",
      team1: { id: "g2", name: "G2 Esports", score: 2, win: true, logo: "assets/team-logos/g2.png" },
      team2: { id: "100t", name: "100 Thieves", score: 1, win: false, logo: "assets/team-logos/100t.png" },
      maps: [
        { name: "Split", score: "13-9", winner: "G2" },
        { name: "Sunset", score: "11-13", winner: "100T" },
        { name: "Lotus", score: "13-10", winner: "G2" }
      ],
      veto: "100T แบน Abyss · G2 แบน Haven · G2 เลือก Split · 100T เลือก Sunset · Decider: Lotus",
      keyDuel: "trent (Sova / Fade) vs Asuna (KAY/O / Phoenix)",
      tacticalKey: "รีแมตช์คู่เปิดสนาม คราวนี้ G2 แก้แค้นได้สำเร็จ valyn คอลเกมแก้ทาง Veto ของ 100T ได้อย่างแยบยล trent เก็บคลัตช์ 1v2 สำคัญในรอบที่ 21 ของ Lotus ส่ง G2 ทะลุเข้าสู่ Lower Final ยุติเส้นทางของ 100T ในอันดับ 4",
      upsetFactor: "100T สู้สุดใจใน Sunset แต่ความล้าจากการเล่นสายล่างทำให้การสื่อสารใน Lotus ผิดพลาดช่วงท้าย"
    },
    {
      id: "lf",
      bracket: "lower",
      round: "Lower Final",
      time: "- 2:00 pm +07, Oct 17",
      format: "Bo5 (Grand Final Qualifier)",
      team1: { id: "vit", name: "Team Vitality", score: 3, win: true, logo: "assets/team-logos/vit.png" },
      team2: { id: "g2", name: "G2 Esports", score: 2, win: false, logo: "assets/team-logos/g2.png" },
      maps: [
        { name: "Haven", score: "13-9", winner: "VIT" },
        { name: "Sunset", score: "11-13", winner: "G2" },
        { name: "Abyss", score: "13-7", winner: "VIT" },
        { name: "Split", score: "10-13", winner: "G2" },
        { name: "Lotus", score: "13-8", winner: "VIT" }
      ],
      veto: "VIT แบน Summit · G2 แบน Haven · VIT เลือก Haven · G2 เลือก Sunset · VIT เลือก Abyss · G2 เลือก Split · Decider: Lotus",
      keyDuel: "Derke (Lethal Entry) vs jawgemo (Movement Entry)",
      tacticalKey: "มหากาพย์ 5 แมพเต็มสุดระทึก! สองทีมผลัดกันคว้าชัยคนละแมพจนต้องตัดสินในแมพที่ 5 Lotus ความเก๋าของ Chronicle และความคมในจังหวะ Eco Break ของ Derke เป็นตัวชี้ขาด ส่ง Vitality รีแมตช์ชิงแชมป์โลกกับ Paper Rex จบการผจญภัยของ G2 ที่อันดับ 3",
      upsetFactor: "G2 ตามหลัง 1-2 ก่อนฮึดสู้เก็บ Split แต่ใน Lotus สภาพร่างกายและสมาธิของ Vitality ยังคงนิ่งกว่า"
    },
    {
      id: "gf",
      bracket: "grand-final",
      round: "Grand Final",
      time: "- 1:00 pm +07, Oct 18",
      format: "Bo5 (World Championship Match)",
      team1: { id: "prx", name: "Paper Rex", score: 3, win: true, logo: "assets/team-logos/prx.png", isChampion: true },
      team2: { id: "vit", name: "Team Vitality", score: 2, win: false, logo: "assets/team-logos/vit.png" },
      maps: [
        { name: "Sunset", score: "13-9", winner: "PRX" },
        { name: "Lotus", score: "13-11", winner: "PRX" },
        { name: "Abyss", score: "8-13", winner: "VIT" },
        { name: "Summit", score: "10-13", winner: "VIT" },
        { name: "Split", score: "13-10", winner: "PRX" }
      ],
      veto: "Upper Seed Advantage: PRX แบน Haven และ Ascent · PRX เลือก Sunset · VIT เลือก Lotus · PRX เลือก Abyss · VIT เลือก Summit · Decider: Split",
      keyDuel: "something & f0rsakeN (Pacific Dual Ace) vs Derke & Chronicle (EMEA LAN Titans)",
      tacticalKey: "รอบชิงชนะเลิศในฝันที่ดุเดือดที่สุดในประวัติศาสตร์! PRX ออกนำก่อน 2-0 บน Sunset และ Lotus ก่อนที่ Vitality จะฮึดสู้ทวงคืนบน Abyss และ Summit ในแมพตัดสิน Split สกอร์ 12-10 d4v41 (Viper) โชว์จังหวะ 1v2 Post-Plant Clutch อันเยือกเย็น ดับฝัน Vitality และนำถ้วยแชมป์โลก Champions สู่ภูมิภาค Pacific เป็นครั้งแรกในประวัติศาสตร์!",
      upsetFactor: "Vitality เกือบสร้างปาฏิหาริย์ Reverse Sweep หลังตีเสมอ 2-2 แต่การตัดสินใจเร็วของ f0rsakeN ใน Split รอบตัดสินพลิกโมเมนตัมกลับมาให้ PRX ได้สำเร็จ"
    }
  ]
};
