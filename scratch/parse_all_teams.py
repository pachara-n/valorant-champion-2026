import urllib.request
from bs4 import BeautifulSoup
import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

team_urls = {
    '100t': ('100 Thieves', 'https://www.vlr.gg/team/120/100-thieves'),
    'loud': ('LOUD', 'https://www.vlr.gg/team/6961/loud'),
    'nrg': ('NRG', 'https://www.vlr.gg/team/1034/nrg'),
    'g2': ('G2 Esports', 'https://www.vlr.gg/team/11058/g2-esports'),
    'tyloo': ('TYLOO', 'https://www.vlr.gg/team/731/tyloo'),
    'jdg': ('JD Gaming', 'https://www.vlr.gg/team/13576/jd-gaming'),
    'edg': ('EDward Gaming', 'https://www.vlr.gg/team/1120/edward-gaming'),
    'xlg': ('Xi Lai Gaming', 'https://www.vlr.gg/team/13581/xi-lai-gaming'),
    'kc': ('Karmine Corp', 'https://www.vlr.gg/team/8877/karmine-corp'),
    'tl': ('Team Liquid', 'https://www.vlr.gg/team/474/team-liquid'),
    'fut': ('FUT Esports', 'https://www.vlr.gg/team/1184/fut-esports'),
    'vit': ('Team Vitality', 'https://www.vlr.gg/team/2059/team-vitality'),
    'ge': ('Global Esports', 'https://www.vlr.gg/team/918/global-esports'),
    'ns': ('Nongshim RedForce', 'https://www.vlr.gg/team/11060/nongshim-redforce'),
    'prx': ('Paper Rex', 'https://www.vlr.gg/team/624/paper-rex'),
    't1': ('T1', 'https://www.vlr.gg/team/14/t1')
}

headers = {'User-Agent': 'Mozilla/5.0'}

def parse_team_page(text):
    lines = [l.strip() for l in text.splitlines() if l.strip()]
    
    # 1. Roster and Staff
    roster = []
    staff = []
    try:
        # find "Current Roster"
        idx = -1
        for i, l in enumerate(lines):
            if 'Current' in l and 'Roster' in l:
                idx = i
                break
        if idx != -1:
            curr = idx + 1
            mode = 'none'
            while curr < len(lines) and curr < idx + 40:
                l = lines[curr]
                if l.lower() == 'players':
                    mode = 'players'
                    curr += 1
                    continue
                elif l.lower() == 'staff':
                    mode = 'staff'
                    curr += 1
                    continue
                elif 'Rating history' in l or 'Core ID:' in l or 'Inactive' in l or 'Past Rosters' in l:
                    break
                
                if mode == 'players':
                    # usually alias then real name
                    alias = l
                    real = ''
                    if curr + 1 < len(lines) and lines[curr+1].lower() != 'staff' and not lines[curr+1].endswith('coach'):
                        real = lines[curr+1]
                        curr += 1
                    roster.append({'alias': alias, 'real': real})
                elif mode == 'staff':
                    alias = l
                    real = ''
                    role = 'Staff'
                    if curr + 1 < len(lines) and not ('coach' in lines[curr+1].lower() or 'analyst' in lines[curr+1].lower()):
                        real = lines[curr+1]
                        curr += 1
                    if curr + 1 < len(lines) and ('coach' in lines[curr+1].lower() or 'analyst' in lines[curr+1].lower() or 'manager' in lines[curr+1].lower()):
                        role = lines[curr+1]
                        curr += 1
                    staff.append({'alias': alias, 'real': real, 'role': role})
                curr += 1
    except Exception as e:
        print('Error parsing roster/staff:', e)

    # 2. Recent Results
    recent_matches = []
    try:
        idx_res = -1
        for i, l in enumerate(lines):
            if l == 'Recent Results':
                idx_res = i
                break
        if idx_res != -1:
            curr = idx_res + 1
            while curr < len(lines) and len(recent_matches) < 8:
                l = lines[curr]
                if 'Current' in l and 'Roster' in l:
                    break
                # matches usually start with event name like "VCT 26" or "Champions"
                if l.startswith('VCT 26') or l.startswith('VCT 2026') or l.startswith('Champions Tour 2026'):
                    event = l
                    stage = lines[curr+1] if curr+1 < len(lines) else ''
                    # find team names, scores, date
                    # let's collect next 20 lines
                    chunk = lines[curr:curr+25]
                    recent_matches.append({'event': event, 'stage': stage, 'raw': chunk[:15]})
                    curr += 10
                curr += 1
    except Exception as e:
        print('Error parsing recent results:', e)

    return {'roster': roster, 'staff': staff, 'recent_matches': recent_matches}

all_data = {}
for tid, (name, url) in team_urls.items():
    print(f'Fetching {tid}: {name}...')
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=10) as resp:
            text = BeautifulSoup(resp.read().decode('utf-8', errors='ignore'), 'html.parser').get_text('\n', strip=True)
        parsed = parse_team_page(text)
        all_data[tid] = {'name': name, 'url': url, **parsed}
        print(f"  -> Roster: {[p['alias'] for p in parsed['roster']]}")
        print(f"  -> Staff: {[(s['alias'], s['role']) for s in parsed['staff']]}")
    except Exception as e:
        print(f'  -> Failed {tid}: {e}')

with open('all_teams_detailed.json', 'w', encoding='utf-8') as f:
    json.dump(all_data, f, ensure_ascii=False, indent=2)
print('Wrote all_teams_detailed.json')
