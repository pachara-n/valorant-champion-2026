# CHAMPIONS 26 — Shanghai Field Guide

คู่มือภาษาไทยเชิงลึกก่อนเปิดศึก **VALORANT Champions Shanghai 2026** (Data Cutoff: 13 กันยายน 2026) เจาะลึก 16 ยอดทีมจาก 4 ลีกใหญ่ (Americas, EMEA, Pacific, China) พร้อมบทวิเคราะห์สายการแข่งขันและเส้นทางทำนายรอบแบ่งกลุ่มแบบ GSL Bracket ทุกคู่ โดยนักวิเคราะห์และกองบรรณาธิการอีสปอร์ต (Editorial Prediction)

## วิธีเปิดใช้งาน (Run)

เปิดไฟล์ `index.html` ได้โดยตรงผ่านเว็บเบราว์เซอร์ หรือรัน Local Static Server:

```bash
python -m http.server 8000
```

แล้วเข้าไปที่ `http://localhost:8000`

## โครงสร้างโปรเจกต์ (Structure)

- `index.html` — โครงสร้าง Semantic HTML5 รองรับ Accessibility (WCAG 2.2 AA), Skip Link, ARIA Tabs และ Modal Dialog
- `styles.css` — ระบบสไตล์ Esports ระดับพรีเมียม, Chakra Petch + Noto Sans Thai + IBM Plex Mono, Responsive Layout (Desktop 4-Column GSL Tree & Mobile Vertical Route)
- `data.js` — ฐานข้อมูล 16 ทีม, ยืนยัน Roster 5 ตัวจริง, ทีมโค้ช, เส้นทาง Stage 2, Map Pool Tendencies, บทวิเคราะห์ GSL Bracket ทุกคู่, Players to Watch และแหล่งอ้างอิงทางการ
- `script.js` — Client Logic แบบ Pure Vanilla JS (Zero external runtime dependencies), จัดการตัวกรองทีม, แท็บกลุ่ม A-D, Deep Links (`#team/{id}`, `#group/{A|B|C|D}`), คีย์บอร์ดนำทาง และ Focus Management
- `assets/team-logos/` — ไฟล์โลโก้ทีมทางการทั้ง 16 ทีม บันทึกในเครื่อง (Local Assets) จาก Riot Official พร้อม `manifest.json` ระบุ SHA-256 Hashes และมิติพิกเซล
- `docs/` — เอกสารการสืบค้นข้อมูล, แหล่งที่มาของโลโก้ และบันทึกผลการทดสอบ QA

## ระเบียบวิธีวิเคราะห์ข้อมูล (Methodology & Data Integrity)

Data Cutoff: **13 September 2026 (12:00 GMT+7)**
เว็บไซต์นี้จำแนกประเภทข้อมูลออกเป็น 3 ระดับอย่างโปร่งใส และ**ไม่มีการประดิษฐ์ตัวเลขดัชนี 0–100 หรือเปอร์เซ็นต์โอกาสชนะที่ไม่มีสูตรคำนวณรองรับ**:

1. **RAW FACT (ข้อเท็จจริงปฐมภูมิ)**:
   - รายชื่อ 16 ทีม, กลุ่ม A-D, เมล็ดพันธุ์ (Seed 1-4)
   - ตารางเวลาและคู่เปิดสนาม Opening Matches อ้างอิง Riot Games และ VLR.gg
   - รายชื่อผู้เล่น 5 ตัวจริงและทีมงานโค้ชที่ยืนยันแล้ว
   - ผลการแข่งขันย้อนหลังจริงของ VCT 2026 Stage 2
2. **DERIVED EVIDENCE (หลักฐานอนุมาน)**:
   - แนวโน้มการเลือกและแบนแผนที่ (Map Tendencies & Veto Patterns)
   - เพลย์สไตล์เชิงยุทธวิธี (Macro Discipline vs Aggressive Pace) ที่วิเคราะห์จากผลแข่งจริง 2026
3. **EDITORIAL PREDICTION (บทวิเคราะห์ทำนายผล)**:
   - การคาดการณ์ผลแพ้ชนะในแต่ละแมตช์ของสาย GSL Bracket โดยกองบรรณาธิการ
   - ระดับความมั่นใจเชิงคุณภาพ: `Strong Edge`, `Edge`, หรือ `Slight Lean`
   - การแจกแจง Veto จำลอง, จุดชี้ขาดทางแท็กติก และ Upset Conditions ประจำแต่ละคู่

## คุณสมบัติเด่น (Key Features)

- **Editorial Bracket Predictions (ไม่ใช่ระบบ Pick'em ให้กดเลือกเอง)**: เว็บไซต์ทำหน้าที่เป็น Analyst Desk ทำนายเส้นทางและผลแพ้ชนะตั้งแต่ Opening Matches จนถึงได้ 2 ทีมผ่านเข้าสู่รอบ Playoffs พร้อมสกอร์คาดการณ์และป้าย `PICK` ที่คำนวณสอดคล้องกันทุกแมตช์
- **ผังสายแข่ง GSL Bracket สไตล์ Riot & VLR**: มุมมองเดสก์ท็อป 4 คอลัมน์สมมาตรแบบ Compact ไม่บิดเบี้ยว พร้อมปุ่ม Expand ดู Veto Prediction, Tactical Key, Key Player Duel และ Upset Condition ย่อยได้ทุกคู่ หรือสั่งขยาย/ย่อพร้อมกันทั้งกลุ่ม
- **Bracket Cross-linking & Team Dossier Navigation**: คลิกที่แถวทีมใน Match Card เพื่อเปิด Team Dossier ได้ทันที พร้อมแถบควบคุม Prev/Next (`< Prev Team  X / 16  Next Team >`) และคีย์ลัดลูกศรซ้าย/ขวาบนคีย์บอร์ด
- **โลโก้ทางการครบทั้ง 16 ทีม**: เก็บไฟล์ Local PNG คุณภาพสูง พร้อมระบบ Accessible Alt Text และ Fallback Monogram ป้องกันรูปภาพโหลดไม่ขึ้น
- **Team Dossier แบบลึก**: เจาะลึกทั้ง Roster, โค้ช, ผลงาน Stage 2, Map Pool, จุดแข็ง, จุดเปราะ และผู้เล่น X-Factor ประจำทีม
- **ภาษาและการวิเคราะห์ระดับ Broadcast Analyst**: ปราศจาก Emoji 100% และใช้ศัพท์เฉพาะทางอีสปอร์ตระดับสากล (Econ, Site, Retake, Operator, Full Buy, Pistol, Entry Fragger, Anchor, Clutch)

## วิธีนำโปรเจกต์ขึ้น GitHub (Push to GitHub)

โปรเจกต์นี้ได้รับการทำ `git init` และมี `.gitignore` ตั้งค่าเรียบร้อยแล้ว หากต้องการนำขึ้น GitHub Repository ของคุณ สามารถรันคำสั่งต่อไปนี้ใน Terminal:

```bash
# 1. เชื่อมต่อกับ GitHub Repository ของคุณ (สร้าง repo เปล่าบน GitHub ก่อน)
git remote add origin https://github.com/<your-username>/<your-repo-name>.git

# 2. ตรวจสอบ branch เริ่มต้นว่าเป็น main
git branch -M main

# 3. Push ขึ้น GitHub
git push -u origin main
```

### การเปิดใช้งาน GitHub Pages (Instant Live Demo)
เนื่องจากโปรเจกต์นี้เป็น Pure Vanilla Web (HTML5, CSS3, JS) โดยไม่ต้องผ่าน Build Tool:
1. ไปที่แท็บ **Settings** ของ Repository บน GitHub
2. ไปที่เมนู **Pages** (แถบซ้ายมือ)
3. ใต้หัวข้อ **Build and deployment > Source** ให้เลือก **Deploy from a branch**
4. เลือก Branch: `main` และโฟลเดอร์: `/(root)` แล้วกด **Save**
5. เว็บไซต์จะออนไลน์ทันทีที่ `https://<your-username>.github.io/<your-repo-name>/`

## ข้อจำกัด (Limitations)

- ข้อมูลเป็นภาพสะท้อนก่อนเปิดศึก (Pre-Tournament Snapshot ณ วันที่ 13 กันยายน 2026) ผลการย้ายตัวหรือผลการแข่งหลังจากนี้จะไม่ถูกนำมารวม
- สถิติของแต่ละภูมิภาคไม่สามารถนำมาเปรียบเทียบเป็นสเกลตัวเลขตรงๆ ได้ จึงใช้การประเมินเชิงคุณภาพร่วมกับบริบท Matchup
- เว็บไซต์นี้ไม่มีราคาต่อรองการพนัน และไม่มีวัตถุประสงค์เพื่อชี้ชวนการเล่นพนันใดๆ

VALORANT และเครื่องหมายการค้าที่เกี่ยวข้องทั้งหมดเป็นทรัพย์สินของ Riot Games, Inc. โปรเจกต์นี้จัดทำขึ้นโดยอิสระเพื่อเป็นคู่มือสำหรับแฟนอีสปอร์ต ไม่ได้มีส่วนเกี่ยวข้องหรือได้รับการรับรองอย่างเป็นทางการจาก Riot Games

