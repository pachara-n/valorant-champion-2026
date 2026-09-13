# Team logo provenance

Retrieved on **13 September 2026** from the named team images in Riot's [official Champions Shanghai overview](https://valorantesports.com/en-US/tournament/115576361459045501/overview).

All 16 PNG files are local originals from `https://static.lolesports.com/teams/`. Riot's overview wraps these same original URLs in an Akamai image proxy; the originals were downloaded over HTTPS to avoid runtime hotlinks and proxy dependencies. No logo was recreated, recolored, or substituted with a generated mark.

The machine-readable [manifest](../assets/team-logos/manifest.json) records each team's name, intended Thai alt text, exact original URL, local path, pixel dimensions, file size, and SHA-256 digest. The 16 files total **1,711,420 bytes**.

## Display and fallback

Use `assets/team-logos/{team.id}.png`, `object-fit: contain`, and a dark neutral background. Preserve the original proportions and colors. Explicit dimensions should reserve space before loading. Use descriptive `alt="โลโก้ {team.name}"` where the mark needs an accessible name; use empty alt when an adjacent team name already labels the same link or button, avoiding duplicate announcements. A load failure should leave the readable team name or short name available, not a broken-image icon or an empty control.

## Rights

The artwork and team trademarks belong to their respective owners. These are publicly served official event assets, **not assets confirmed to have an open redistribution license**. Their inclusion is for team identification in this independent editorial guide. No team or Riot affiliation, ownership, or endorsement is claimed. Source availability should not be described as a blanket license grant.

## Verification

- All 16 downloads decoded successfully as PNG images with positive dimensions using `System.Drawing.Image.FromFile`.
- The [contact sheet](qa/logo-contact-sheet.png) was visually inspected: each file shows the corresponding team's actual mark, with no HTML error documents or placeholders.
- Source file hashes and dimensions are preserved in the manifest so subsequent changes can be audited.
- Browser rendering, alt text, and UI fallback verification belong to the integrated website QA pass.
