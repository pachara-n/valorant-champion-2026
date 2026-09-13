const fs = require('fs');
const files = ['index.html', 'styles.css', 'script.js', 'data.js'];
const emojiRegex = /[\u{1F300}-\u{1F6FF}\u{1F900}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E6}-\u{1F1FF}\u{1FA70}-\u{1FAFF}\u{FE0F}\u{200D}]/u;

let found = false;
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const lines = content.split('\n');
  lines.forEach((line, idx) => {
    if (emojiRegex.test(line)) {
      console.log('Emoji in ' + f + ':' + (idx + 1) + ': ' + line.trim());
      found = true;
    }
  });
});
if (!found) {
  console.log('ALL CLEAR: Zero emojis found in web source files!');
}
