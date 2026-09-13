import json
import sys

sys.stdout.reconfigure(encoding='utf-8')
with open('teams_full_research.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

for tid, tinfo in data.items():
    print(f"=== {tid.upper()} ({tinfo.get('name')}) ===")
    staff = [f"{s['role']}: {s['name']}" for s in tinfo.get('staff', [])]
    print('Staff:', ', '.join(staff) if staff else 'None found')
    roster = [f"{r['alias']} ({r['real']})" for r in tinfo.get('roster', [])]
    print('Roster:', ', '.join(roster))
    matches = [m.get('summary') for m in tinfo.get('recent_matches', [])[:3]]
    print('Recent:', matches)
