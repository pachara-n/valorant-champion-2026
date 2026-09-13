import os
import json

manifest_path = 'assets/team-logos/manifest.json'
with open(manifest_path, 'r', encoding='utf-8') as f:
    manifest = json.load(f)

for item in manifest['logos']:
    path = item['path']
    exists = os.path.exists(path)
    size = os.path.getsize(path) if exists else 0
    print(f"{item['id']}: exists={exists}, size={size}, match_manifest={size == item['bytes']}")
