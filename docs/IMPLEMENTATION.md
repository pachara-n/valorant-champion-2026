# Champions Shanghai editorial revision

## Brief and design

Thai pre-event editorial guide, cutoff 13 September 2026. The supplied brief authorizes implementation and browser review without an intermediate approval gate. Preserve HTML/CSS/Vanilla JS and the existing esports identity.

Palette: night `#070b10`, panel `#101923`, paper `#e9edf0`, muted `#a4b0ba`, red `#ff6571`, route cyan `#71dfeb`. Display: Chakra Petch for the English event title; Noto Sans Thai for Thai headings and prose; IBM Plex Mono for compact stage labels. Thai text needs generous line height rather than the existing compressed display treatment.

Signature: a connected GSL bracket, not a grid of unrelated match cards. Desktop reads Opening → Winners / Elimination → Decider → Qualified. On mobile it becomes a vertical route, preserving explicit match references and both outcomes. Every match is an editorial pick; only group navigation and explanatory details are interactive.

The alternatives were a horizontal overflow bracket (small text and hidden routes on phones), or a flat match list (easy to read but loses the tournament structure). Use the connected desktop bracket and a responsive vertical route. Keep the dramatic hero; reduce decorative headings and invented rating bars.

## Implementation and acceptance

- [ ] Audit all original files, qualify the field and draw against official/VLR sources, record research and uncertainty.
- [ ] Download sixteen actual local logos with provenance and a resilient accessible fallback.
- [ ] Replace unsupported numeric indices and rewrite Thai copy; add sourced team evidence, roster, results, and honest gaps.
- [ ] Build all four immutable five-match GSL trees with coherent downstream participants, winner routes, and qualification records.
- [ ] Support filter counts, complete keyboard tabs, profile focus restoration, team/group deep links and history.
- [ ] Verify all filters, sixteen profiles, four trees, invalid/valid deep links, logos, console/network errors, reduced motion, and desktop/mobile overflow in Chromium. Inspect screenshots.
- [ ] Update README, methodology and QA documentation to match actual implementation and evidence limits.

## Files and interfaces

`data.js` exports `window.CHAMPIONS_DATA` (teams, groups, stories, sources). Team evidence can be held in a separate static `profiles.js` export to keep provenance distinct from editorial predictions. `script.js` renders the field, native dialog and bracket. `styles.css` owns layout and accessible visual states. `index.html` contains the semantic editorial sections. `docs/RESEARCH.md`, source data and `docs/ASSETS.md` record source ownership and cutoff. Browser verification lives under `tests/` with screenshots and results under `docs/qa/`.
