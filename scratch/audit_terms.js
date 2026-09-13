const fs = require('fs');

const suspiciousTerms = [
  'เศรษฐกิจ',
  'สไนเปอร์',
  'ปืนใหญ่',
  'ปืนสั้น',
  'รอบซื้อ',
  'สายบน',
  'สายล่าง',
  'ปิดทองหลังพระ',
  'ฉีกตำรา',
  'บ็อตเทรด',
  'ตัวเปิดสกอร์',
  'ตัวเปิดเกม',
  'รีเทก',
  'ไซต์'
];

const files = ['index.html', 'script.js', 'data.js'];
let foundAny = false;

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  lines.forEach((line, idx) => {
    suspiciousTerms.forEach(term => {
      if (line.includes(term)) {
        console.log(`[${term}] in ${file}:${idx + 1} -> ${line.trim()}`);
        foundAny = true;
      }
    });
  });
});

if (!foundAny) {
  console.log('No suspicious slop terms found!');
}
