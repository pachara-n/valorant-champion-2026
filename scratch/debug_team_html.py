import urllib.request
from bs4 import BeautifulSoup
import sys

sys.stdout.reconfigure(encoding='utf-8')
headers = {'User-Agent': 'Mozilla/5.0'}
req = urllib.request.Request('https://www.vlr.gg/team/120/100-thieves', headers=headers)
with urllib.request.urlopen(req) as resp:
    html = resp.read().decode('utf-8', errors='ignore')

soup = BeautifulSoup(html, 'html.parser')
with open('sample_team_100t.txt', 'w', encoding='utf-8') as f:
    f.write(soup.get_text('\n', strip=True))

with open('sample_team_100t.html', 'w', encoding='utf-8') as f:
    f.write(html[:50000])

print('Saved sample team files, text length:', len(soup.get_text('\n', strip=True)))
