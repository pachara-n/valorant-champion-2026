/**
 * VALORANT Champions Shanghai 2026 — Client Application Logic
 * Pure Vanilla JS, Zero External Runtime Dependencies.
 * Features:
 * - Real local team logos with accessible alt text and fallback monogram
 * - Redesigned GSL Bracket Tree visualization (Opening -> Winners/Elimination -> Decider -> Qualified)
 * - Accessible ARIA tabs with keyboard arrow navigation
 * - Filterable team grid with real-time counts
 * - Deep-linked Team Dossier modal dialog with focus management and history sync
 * - Responsive layout supporting mobile/desktop and prefers-reduced-motion
 */

(function () {
  "use strict";

  const { teams, groups, playersToWatch, sources } = window.CHAMPIONS_DATA;
  const teamById = Object.fromEntries(teams.map((team) => [team.id, team]));
  const expandedMatches = new Set();

  const filterKeys = [
    "ALL",
    "AMERICAS",
    "EMEA",
    "PACIFIC",
    "CHINA",
    "GROUP A",
    "GROUP B",
    "GROUP C",
    "GROUP D"
  ];

  let activeFilter = "ALL";
  let activeGroup = "A";
  let lastFocusedTrigger = null;

  /**
   * Helper to generate team logo HTML with accessible alt text and local fallback.
   * @param {Object} team
   * @param {string} size - 'sm', 'md', 'lg', 'xl'
   */
  function renderTeamLogo(team, size = "md") {
    const sizeClasses = {
      sm: "logo-sm",
      md: "logo-md",
      lg: "logo-lg",
      xl: "logo-xl"
    };
    const cls = sizeClasses[size] || "logo-md";
    const logoSrc = `assets/team-logos/${team.id}.png`;

    return `
      <span class="team-logo-frame ${cls}" style="--team-accent:${team.color}">
        <img 
          src="${logoSrc}" 
          alt="โลโก้ ${team.name}" 
          class="team-logo-img" 
          loading="eager" 
          width="48" 
          height="48" 
          onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';"
        >
        <span class="team-fallback-mark" style="display:none;" aria-hidden="true">${team.short}</span>
      </span>
    `;
  }

  /**
   * Filter calculation helper
   */
  function getFilteredTeams(filter) {
    if (filter === "ALL") return teams;
    if (filter.startsWith("GROUP")) {
      const letter = filter.slice(-1);
      return teams.filter((t) => t.group === letter);
    }
    return teams.filter((t) => t.region.toUpperCase() === filter);
  }

  /**
   * Render Filter toolbar with dynamic team counts
   */
  function renderFilters() {
    const container = document.querySelector("#filters");
    if (!container) return;

    container.innerHTML = filterKeys
      .map((key) => {
        const count = getFilteredTeams(key).length;
        const isPressed = key === activeFilter;
        return `
          <button 
            type="button" 
            class="filter-btn" 
            aria-pressed="${isPressed}" 
            data-filter="${key}"
          >
            <span>${key}</span>
            <small class="filter-count">(${count})</small>
          </button>
        `;
      })
      .join("");
  }

  /**
   * Render 16 team cards in the Field grid
   */
  function renderTeams() {
    const container = document.querySelector("#team-grid");
    if (!container) return;

    const list = getFilteredTeams(activeFilter);

    if (list.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <p>ไม่พบทีมที่ตรงกับเงื่อนไข "${activeFilter}"</p>
        </div>
      `;
      return;
    }

    container.innerHTML = list
      .map((team) => {
        const coach = team.staff && team.staff[0] ? team.staff[0].name : "Coaching Staff";
        return `
          <button 
            type="button" 
            class="team-card" 
            data-team="${team.id}" 
            style="--team-accent:${team.color}"
            aria-label="เปิด Team Dossier ของ ${team.name} (${team.seedLabel})"
          >
            <div class="team-card-top">
              ${renderTeamLogo(team, "md")}
              <div class="team-card-seed-tag">${team.seedLabel}</div>
            </div>
            <div class="team-card-body">
              <h3 class="team-card-title">${team.name}</h3>
              <p class="team-card-meta">
                <span class="region-badge">${team.region}</span> · GROUP ${team.group}
              </p>
              <p class="team-card-summary">${team.tacticalIdentity}</p>
            </div>
            <div class="team-card-footer">
              <div class="card-footer-item">
                <span class="lbl">KEY PLAYER</span>
                <b>${team.star}</b>
              </div>
              <div class="card-footer-item">
                <span class="lbl">HEAD COACH</span>
                <b>${coach}</b>
              </div>
            </div>
            <span class="card-arrow-icon" aria-hidden="true">↗</span>
          </button>
        `;
      })
      .join("");
  }

  /**
   * Render Group Tabs with full ARIA semantics
   */
  function renderGroupTabs() {
    const container = document.querySelector("#group-tabs");
    if (!container) return;

    container.innerHTML = Object.keys(groups)
      .map((letter) => {
        const isSelected = letter === activeGroup;
        return `
          <button 
            type="button" 
            class="group-tab" 
            role="tab" 
            id="tab-${letter}" 
            aria-selected="${isSelected}" 
            aria-controls="group-analysis" 
            data-group="${letter}"
            tabindex="${isSelected ? "0" : "-1"}"
          >
            <span class="tab-sub">GROUP</span>
            <span class="tab-letter">${letter}</span>
          </button>
        `;
      })
      .join("");
  }

  /**
   * Render Match Card for GSL Tree
   */
  /**
   * Render Match Card for GSL Tree (Compact by default, Expandable on demand)
   */
  function renderMatchCard(match) {
    const teamA = teamById[match.teamA];
    const teamB = teamById[match.teamB];
    if (!teamA || !teamB) return "";

    const isWinnerA = match.predictedWinner === match.teamA;
    const isWinnerB = match.predictedWinner === match.teamB;

    const rawScores = (match.predictedScore || "2 - 0")
      .split("-")
      .map((s) => parseInt(s.trim(), 10) || 0);
    const winScore = Math.max(...rawScores);
    const loseScore = Math.min(...rawScores);
    const scoreA = isWinnerA ? winScore : loseScore;
    const scoreB = isWinnerB ? winScore : loseScore;

    const isExpanded = expandedMatches.has(match.id);
    const confidenceClass = match.confidence.toLowerCase().replace(/\s+/g, "-");

    return `
      <article class="bracket-match-card stage-${match.stageType} ${isExpanded ? "is-expanded" : "is-collapsed"}" id="match-${match.id}" data-match-id="${match.id}">
        <div class="match-card-header">
          <div class="match-header-left">
            <span class="match-stage-badge">${match.stageName}</span>
            <span class="match-schedule">${match.schedule.split("·")[0].trim()}</span>
          </div>
          <span class="confidence-tag ${confidenceClass}">${match.confidence}</span>
        </div>

        <div class="match-teams-block">
          <div 
            class="match-team-row ${isWinnerA ? "is-predicted-winner" : "is-predicted-loser"}" 
            data-team="${teamA.id}" 
            role="button" 
            tabindex="0" 
            title="คลิกดู Team Dossier: ${teamA.name}"
          >
            ${renderTeamLogo(teamA, "sm")}
            <div class="match-team-info">
              <span class="match-team-name">${teamA.name}</span>
              <span class="match-team-seed">${teamA.seedLabel.split("·")[0].trim()}</span>
            </div>
            <span class="match-team-score">${scoreA}</span>
            ${isWinnerA ? '<span class="pick-badge" aria-label="Editorial Pick">PICK</span>' : ""}
          </div>

          <div 
            class="match-team-row ${isWinnerB ? "is-predicted-winner" : "is-predicted-loser"}" 
            data-team="${teamB.id}" 
            role="button" 
            tabindex="0" 
            title="คลิกดู Team Dossier: ${teamB.name}"
          >
            ${renderTeamLogo(teamB, "sm")}
            <div class="match-team-info">
              <span class="match-team-name">${teamB.name}</span>
              <span class="match-team-seed">${teamB.seedLabel.split("·")[0].trim()}</span>
            </div>
            <span class="match-team-score">${scoreB}</span>
            ${isWinnerB ? '<span class="pick-badge" aria-label="Editorial Pick">PICK</span>' : ""}
          </div>
        </div>

        <button 
          type="button" 
          class="match-expand-btn ${isExpanded ? "expanded" : ""}" 
          data-toggle-match="${match.id}" 
          aria-expanded="${isExpanded ? "true" : "false"}" 
          aria-controls="details-${match.id}"
        >
          <span class="expand-btn-text">${isExpanded ? "ย่อบทวิเคราะห์" : "บทวิเคราะห์แมตช์"}</span>
          <svg class="expand-chevron ${isExpanded ? "rotated" : ""}" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>

        <div class="match-card-details ${isExpanded ? "is-open" : "is-hidden"}" id="details-${match.id}" ${isExpanded ? "" : "hidden"}>
          <div class="detail-block veto-block">
            <span class="detail-label">MAP VETO PREDICTION</span>
            <p class="detail-text">${match.veto}</p>
          </div>
          <div class="detail-block tactical-block">
            <span class="detail-label">TACTICAL MATCHUP KEY</span>
            <p class="detail-text">${match.tacticalKey}</p>
          </div>
          <div class="detail-block duel-block">
            <span class="detail-label">KEY PLAYER DUEL</span>
            <p class="detail-text"><b>${match.playerDuel}</b></p>
          </div>
          <div class="detail-block upset-block">
            <span class="detail-label upset-label">UPSET CONDITION</span>
            <p class="detail-text">${match.upsetCondition}</p>
          </div>
          <div class="match-dossier-links">
            <button type="button" class="match-dossier-link" data-team="${teamA.id}">ดู Dossier ${teamA.short} ↗</button>
            <button type="button" class="match-dossier-link" data-team="${teamB.id}">ดู Dossier ${teamB.short} ↗</button>
          </div>
        </div>
      </article>
    `;
  }

  /**
   * Render Redesigned GSL Bracket Tree for active group (Riot Games / VLR Layout)
   */
  function renderGroupAnalysis() {
    const container = document.querySelector("#group-analysis");
    if (!container) return;

    const group = groups[activeGroup];
    if (!group) return;

    container.setAttribute("aria-labelledby", `tab-${activeGroup}`);

    const [m1, m2, mWinners, mElim, mDecider] = group.matches;
    const qual1 = teamById[group.qualified[0].teamId];
    const qual2 = teamById[group.qualified[1].teamId];

    container.innerHTML = `
      <div class="group-overview-banner">
        <div class="group-big-letter" aria-hidden="true">${group.groupLetter}</div>
        <div class="group-overview-content">
          <div class="group-meta-row">
            <span class="group-pill">GROUP ${group.groupLetter}</span>
            <span class="group-theme-pill">${group.theme}</span>
          </div>
          <h3 class="group-headline">Group ${group.groupLetter} — Tactical Breakdown</h3>
          <p class="group-outlook-text">${group.outlook}</p>
        </div>
      </div>

      <!-- DESKTOP GSL BRACKET TREE (Riot / VLR Style) -->
      <div class="gsl-bracket-wrapper" aria-label="ผังสายการแข่งขัน GSL รอบแบ่งกลุ่ม ${group.groupLetter}">
        <!-- Column 1: Round 1 (Opening Matches) -->
        <div class="gsl-column col-round-1">
          <div class="column-header">
            <span class="col-step">ROUND 1</span>
            <h4>OPENING ROUND</h4>
            <small>Bo3 · 2 แมตช์เปิดสนาม</small>
          </div>
          <div class="bracket-cell-slot slot-opening-1">
            ${renderMatchCard(m1)}
          </div>
          <div class="bracket-cell-slot slot-opening-2">
            ${renderMatchCard(m2)}
          </div>
        </div>

        <!-- Column 2: Round 2 (Upper Final & Lower R1) -->
        <div class="gsl-column col-round-2">
          <!-- Upper Bracket - Finals -->
          <div class="bracket-sub-column sub-upper">
            <div class="column-header sub-header">
              <span class="col-step step-win">UPPER BRACKET - FINALS</span>
              <h4>WINNERS MATCH</h4>
              <small>ผู้ชนะเข้ารอบเพลย์ออฟทันที (Seed #1)</small>
            </div>
            <div class="bracket-cell-slot slot-winners">
              ${renderMatchCard(mWinners)}
            </div>
          </div>

          <!-- Lower Bracket - Round 1 -->
          <div class="bracket-sub-column sub-lower">
            <div class="column-header sub-header">
              <span class="col-step step-elim">LOWER BRACKET - ROUND 1</span>
              <h4>ELIMINATION MATCH</h4>
              <small>ผู้แพ้ตกรอบจากการแข่งขัน (0-2)</small>
            </div>
            <div class="bracket-cell-slot slot-elim">
              ${renderMatchCard(mElim)}
            </div>
          </div>
        </div>

        <!-- Column 3: Lower Bracket - Finals (Decider Match) -->
        <div class="gsl-column col-round-3">
          <div class="bracket-sub-column sub-decider-wrap">
            <div class="column-header">
              <span class="col-step step-dec">LOWER BRACKET - FINALS</span>
              <h4>DECIDER MATCH</h4>
              <small>นัดชิงตั๋วใบสุดท้าย (Seed #2)</small>
            </div>
            <div class="bracket-cell-slot slot-decider">
              ${renderMatchCard(mDecider)}
            </div>
          </div>
        </div>

        <!-- Column 4: Playoffs Qualified Spots -->
        <div class="gsl-column col-round-4">
          <div class="column-header qual-header">
            <span class="col-step step-qual">ADVANCED</span>
            <h4>PLAYOFFS QUALIFIED</h4>
            <small>2 ทีมที่ผ่านเข้าสู่รอบ 8 ทีม</small>
          </div>
          <div class="qualified-cards-wrap">
            <div class="qualified-card seed-1-card" data-team="${qual1.id}" role="button" tabindex="0" title="คลิกดู Team Dossier ของ ${qual1.name}">
              <div class="qual-badge">GROUP ${group.groupLetter} · SEED #1</div>
              <div class="qual-team-box">
                ${renderTeamLogo(qual1, "md")}
                <div class="qual-team-info">
                  <h5>${qual1.name}</h5>
                  <span>${qual1.region} · ผ่านจาก Upper Final (2-0)</span>
                </div>
              </div>
              <span class="qual-open-hint">ดู Team Dossier ↗</span>
            </div>

            <div class="qualified-card seed-2-card" data-team="${qual2.id}" role="button" tabindex="0" title="คลิกดู Team Dossier ของ ${qual2.name}">
              <div class="qual-badge">GROUP ${group.groupLetter} · SEED #2</div>
              <div class="qual-team-box">
                ${renderTeamLogo(qual2, "md")}
                <div class="qual-team-info">
                  <h5>${qual2.name}</h5>
                  <span>${qual2.region} · ผ่านจาก Decider Match (2-1)</span>
                </div>
              </div>
              <span class="qual-open-hint">ดู Team Dossier ↗</span>
            </div>
          </div>
        </div>
      </div>
    `;

    updateGlobalExpandButton();
  }

  /**
   * Helper to toggle single match details
   */
  function toggleMatchDetails(matchId) {
    const card = document.querySelector(`#match-${matchId}`);
    if (!card) return;
    const details = card.querySelector(".match-card-details");
    const btn = card.querySelector(".match-expand-btn");
    const text = btn ? btn.querySelector(".expand-btn-text") : null;
    const chevron = btn ? btn.querySelector(".expand-chevron") : null;

    const willExpand = !expandedMatches.has(matchId);
    if (willExpand) {
      expandedMatches.add(matchId);
      card.classList.add("is-expanded");
      card.classList.remove("is-collapsed");
      if (details) {
        details.hidden = false;
        details.classList.add("is-open");
      }
      if (btn) {
        btn.setAttribute("aria-expanded", "true");
        btn.classList.add("expanded");
      }
      if (text) text.textContent = "ย่อบทวิเคราะห์";
      if (chevron) chevron.classList.add("rotated");
    } else {
      expandedMatches.delete(matchId);
      card.classList.remove("is-expanded");
      card.classList.add("is-collapsed");
      if (details) {
        details.hidden = true;
        details.classList.remove("is-open");
      }
      if (btn) {
        btn.setAttribute("aria-expanded", "false");
        btn.classList.remove("expanded");
      }
      if (text) text.textContent = "บทวิเคราะห์แมตช์";
      if (chevron) chevron.classList.remove("rotated");
    }
    updateGlobalExpandButton();
  }

  /**
   * Helper to toggle all match details in active group
   */
  function toggleAllGroupDetails() {
    const group = groups[activeGroup];
    if (!group) return;
    const allMatchIds = group.matches.map((m) => m.id);
    const isAllExpanded = allMatchIds.every((id) => expandedMatches.has(id));

    allMatchIds.forEach((id) => {
      if (isAllExpanded) {
        expandedMatches.delete(id);
      } else {
        expandedMatches.add(id);
      }
      const card = document.querySelector(`#match-${id}`);
      if (card) {
        const details = card.querySelector(".match-card-details");
        const btn = card.querySelector(".match-expand-btn");
        const text = btn ? btn.querySelector(".expand-btn-text") : null;
        const chevron = btn ? btn.querySelector(".expand-chevron") : null;

        if (!isAllExpanded) {
          card.classList.add("is-expanded");
          card.classList.remove("is-collapsed");
          if (details) {
            details.hidden = false;
            details.classList.add("is-open");
          }
          if (btn) {
            btn.setAttribute("aria-expanded", "true");
            btn.classList.add("expanded");
          }
          if (text) text.textContent = "ย่อบทวิเคราะห์";
          if (chevron) chevron.classList.add("rotated");
        } else {
          card.classList.remove("is-expanded");
          card.classList.add("is-collapsed");
          if (details) {
            details.hidden = true;
            details.classList.remove("is-open");
          }
          if (btn) {
            btn.setAttribute("aria-expanded", "false");
            btn.classList.remove("expanded");
          }
          if (text) text.textContent = "บทวิเคราะห์แมตช์";
          if (chevron) chevron.classList.remove("rotated");
        }
      }
    });
    updateGlobalExpandButton();
  }

  /**
   * Update global expand/collapse toggle button label and state
   */
  function updateGlobalExpandButton() {
    const btn = document.querySelector("#toggle-all-details-btn");
    if (!btn) return;
    const group = groups[activeGroup];
    if (!group) return;
    const allMatchIds = group.matches.map((m) => m.id);
    const isAllExpanded = allMatchIds.every((id) => expandedMatches.has(id));

    btn.setAttribute("aria-expanded", isAllExpanded ? "true" : "false");
    const textEl = btn.querySelector(".toggle-text");
    if (textEl) {
      textEl.textContent = isAllExpanded ? "ย่อบทวิเคราะห์ทั้งหมด" : "ขยายบทวิเคราะห์ทั้งหมด";
    }
  }

  /**
   * Render Players to Watch
   */
  function renderPlayersToWatch() {
    const container = document.querySelector("#watch-list");
    if (!container) return;

    container.innerHTML = playersToWatch
      .map((p) => {
        const team = teamById[p.teamId];
        return `
          <button 
            type="button" 
            class="watch-card" 
            data-team="${p.teamId}" 
            aria-label="ดูข้อมูลทีมของ ${p.name} (${p.teamName})"
          >
            <div class="watch-card-top">
              <span class="watch-num">${p.num}</span>
              ${team ? renderTeamLogo(team, "sm") : ""}
              <span class="watch-badge">${p.statBadge}</span>
            </div>
            <div class="watch-card-header">
              <h3 class="watch-name">${p.name}</h3>
              <span class="watch-role">${p.role}</span>
            </div>
            <div class="watch-team-tag">${p.teamName} · <i>${p.agents}</i></div>
            <p class="watch-highlight">${p.highlight}</p>
            <span class="watch-more-link">เปิด Team Dossier ↗</span>
          </button>
        `;
      })
      .join("");
  }

  /**
   * Render Sources
   */
  function renderSources() {
    const container = document.querySelector("#sources-list");
    if (!container) return;

    container.innerHTML = sources
      .map(
        (src) => `
        <a class="source-item" href="${src.url}" target="_blank" rel="noopener noreferrer">
          <div class="source-header">
            <b>${src.label}</b>
            <span class="source-arrow">↗</span>
          </div>
          <p class="source-desc">${src.use}</p>
          <span class="source-url-text">${src.url}</span>
        </a>
      `
      )
      .join("");
  }

  /**
   * Open Team Dossier Dialog
   */
  function openTeamDossier(teamId, updateHash = true) {
    const team = teamById[teamId];
    if (!team) return;

    const dialog = document.querySelector("#team-dialog");
    const content = document.querySelector("#profile-content");
    const dialogInner = document.querySelector(".dialog-inner");
    if (!dialog || !content) return;

    const currentIndex = teams.findIndex((t) => t.id === teamId);
    const safeIndex = currentIndex >= 0 ? currentIndex : 0;
    const prevTeam = teams[(safeIndex - 1 + teams.length) % teams.length];
    const nextTeam = teams[(safeIndex + 1) % teams.length];

    const staffHtml = team.staff
      ? team.staff
          .map(
            (s) => `
          <li class="staff-item">
            <span class="staff-role">${s.role}</span>
            <b>${s.name}</b>
            <small class="staff-real">(${s.real})</small>
          </li>
        `
          )
          .join("")
      : "<li>ไม่มีข้อมูล</li>";

    const rosterHtml = team.roster
      .map((p) => {
        const isStar = p.alias === team.star;
        return `
          <li class="roster-item ${isStar ? "is-star-player" : ""}">
            <div class="roster-player-main">
              <b>${p.alias}</b>
              <span class="player-real-name">${p.real}</span>
            </div>
            <div class="roster-player-role">
              <span class="player-role-badge">${p.role}</span>
              <span class="player-agents">${p.agents.join(" · ")}</span>
            </div>
            ${isStar ? '<span class="star-badge">STAR</span>' : ""}
          </li>
        `;
      })
      .join("");

    content.innerHTML = `
      <article class="team-dossier" style="--team-accent:${team.color}">
        <header class="dossier-header">
          <div class="dossier-identity">
            ${renderTeamLogo(team, "xl")}
            <div class="dossier-title-block">
              <div class="dossier-meta-tags">
                <span class="pill-badge">${team.region.toUpperCase()}</span>
                <span class="pill-badge group-pill">GROUP ${team.group}</span>
                <span class="seed-badge">${team.seedLabel}</span>
              </div>
              <h2 id="profile-title" class="dossier-team-name">${team.name}</h2>
              <p class="dossier-headline">${team.tacticalIdentity}</p>
            </div>
          </div>
          <div class="dossier-top-controls">
            <nav class="dossier-nav-bar" aria-label="สลับดูข้อมูลทีมอื่น">
              <button 
                type="button" 
                class="dossier-nav-btn prev-team-btn" 
                data-nav-team="${prevTeam.id}" 
                title="ทีมก่อนหน้า: ${prevTeam.name}" 
                aria-label="ทีมก่อนหน้า: ${prevTeam.name}"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6"></polyline></svg>
                <span class="nav-team-label">${prevTeam.short || prevTeam.name}</span>
              </button>
              <span class="dossier-counter" aria-label="ทีมลำดับที่ ${safeIndex + 1} จากทั้งหมด ${teams.length} ทีม">${safeIndex + 1} / ${teams.length}</span>
              <button 
                type="button" 
                class="dossier-nav-btn next-team-btn" 
                data-nav-team="${nextTeam.id}" 
                title="ทีมถัดไป: ${nextTeam.name}" 
                aria-label="ทีมถัดไป: ${nextTeam.name}"
              >
                <span class="nav-team-label">${nextTeam.short || nextTeam.name}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
            </nav>
            <button type="button" class="dialog-close-btn" aria-label="ปิด Dossier ทีม ${team.name}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>
        </header>

        <div class="dossier-grid">
          <!-- Column 1: Confirmed Roster & Staff (RAW FACT) -->
          <div class="dossier-col col-facts">
            <div class="section-label-tag">
              <span class="tag-type fact-type">RAW FACT</span>
              <h3>CONFIRMED ROSTER & COACHES</h3>
            </div>
            <ul class="roster-list" aria-label="รายชื่อผู้เล่นตัวจริง">${rosterHtml}</ul>

            <div class="staff-section">
              <span class="sub-label">COACHING STAFF</span>
              <ul class="staff-list">${staffHtml}</ul>
            </div>

            <div class="road-section">
              <span class="sub-label">ROAD TO CHAMPIONS SHANGHAI</span>
              <p class="dossier-road-text">${team.roadToChampions}</p>
            </div>
          </div>

          <!-- Column 2: Tactical Analysis & Map Pool (DERIVED & EDITORIAL) -->
          <div class="dossier-col col-tactics">
            <div class="section-label-tag">
              <span class="tag-type derived-type">DERIVED EVIDENCE</span>
              <h3>MAP POOL & VETO TENDENCIES</h3>
            </div>
            <div class="map-pool-box">
              <div class="map-status-row">
                <span class="map-status-label strong-maps">STRONG PICKS</span>
                <div class="map-pill-list">
                  ${team.mapPool.strong.map((m) => `<span class="map-pill strong">${m}</span>`).join("")}
                </div>
              </div>
              <div class="map-status-row">
                <span class="map-status-label play-maps">PLAYABLE</span>
                <div class="map-pill-list">
                  ${team.mapPool.playable.map((m) => `<span class="map-pill playable">${m}</span>`).join("")}
                </div>
              </div>
              <div class="map-status-row">
                <span class="map-status-label ban-maps">VETO TENDENCY</span>
                <p class="map-ban-note">${team.mapPool.banTendency}</p>
              </div>
            </div>

            <div class="section-label-tag">
              <span class="tag-type editorial-type">EDITORIAL ANALYSIS</span>
              <h3>TACTICAL BREAKDOWN</h3>
            </div>

            <div class="analysis-box strength-box">
              <span class="analysis-box-title">STRENGTHS (จุดแข็งเชิงระบบ)</span>
              <p>${team.strengths}</p>
            </div>

            <div class="analysis-box concern-box">
              <span class="analysis-box-title">CONCERNS (จุดเปราะบางที่ต้องระวัง)</span>
              <p>${team.concerns}</p>
            </div>

            <div class="star-spotlight-box">
              <span class="spotlight-tag">PLAYER TO WATCH · ${team.starRole}</span>
              <h4 class="spotlight-player-name">${team.star}</h4>
              <p class="spotlight-rationale">${team.playerToWatchRationale}</p>
            </div>

            <div class="dossier-source-link">
              <span>ข้อมูลอ้างอิงทางการ:</span>
              <a href="${team.sourceUrl}" target="_blank" rel="noopener noreferrer">VLR.gg Team Profile ↗</a>
            </div>
          </div>
        </div>
      </article>
    `;

    if (!dialog.open) {
      dialog.showModal();
      const closeBtn = dialog.querySelector(".dialog-close-btn");
      if (closeBtn) closeBtn.focus();
    } else {
      const nextBtn = dialog.querySelector(".next-team-btn");
      if (nextBtn) nextBtn.focus();
    }

    if (dialogInner) {
      dialogInner.scrollTop = 0;
    }

    if (updateHash) {
      history.pushState(null, "", `#team/${teamId}`);
    }
  }

  /**
   * Close Team Dossier Dialog
   */
  function closeTeamDossier(updateHash = true) {
    const dialog = document.querySelector("#team-dialog");
    if (!dialog || !dialog.open) return;

    dialog.close();

    if (updateHash && location.hash.startsWith("#team/")) {
      history.pushState(null, "", "#field");
    }

    if (lastFocusedTrigger && typeof lastFocusedTrigger.focus === "function") {
      lastFocusedTrigger.focus();
    }
  }

  /**
   * Sync URL Hash state
   */
  function syncHashState() {
    const hash = window.location.hash;
    if (hash.startsWith("#team/")) {
      const teamId = hash.split("/")[1];
      openTeamDossier(teamId, false);
    } else if (hash.startsWith("#group/")) {
      const grp = hash.split("/")[1].toUpperCase();
      if (groups[grp]) {
        activeGroup = grp;
        renderGroupTabs();
        renderGroupAnalysis();
      }
    } else {
      closeTeamDossier(false);
    }
  }

  /**
   * Setup Event Listeners
   */
  function initEvents() {
    // Click delegations
    document.addEventListener("click", (e) => {
      // Toggle single match details
      const toggleMatchBtn = e.target.closest("[data-toggle-match]");
      if (toggleMatchBtn) {
        toggleMatchDetails(toggleMatchBtn.dataset.toggleMatch);
        return;
      }

      // Toggle all group matches details
      const toggleAllBtn = e.target.closest("#toggle-all-details-btn");
      if (toggleAllBtn) {
        toggleAllGroupDetails();
        return;
      }

      // Modal Prev/Next Navigation
      const navTeamBtn = e.target.closest("[data-nav-team]");
      if (navTeamBtn) {
        openTeamDossier(navTeamBtn.dataset.navTeam);
        return;
      }

      // Filter clicks
      const filterBtn = e.target.closest("[data-filter]");
      if (filterBtn) {
        activeFilter = filterBtn.dataset.filter;
        renderFilters();
        renderTeams();
        return;
      }

      // Group Tab clicks
      const tabBtn = e.target.closest("[data-group]");
      if (tabBtn) {
        activeGroup = tabBtn.dataset.group;
        renderGroupTabs();
        renderGroupAnalysis();
        history.replaceState(null, "", `#group/${activeGroup}`);
        return;
      }

      // Close button
      if (e.target.closest(".dialog-close-btn")) {
        closeTeamDossier();
        return;
      }

      // Team card clicks & Bracket Team / Qualified clicks
      const teamCard = e.target.closest("[data-team]");
      if (teamCard) {
        lastFocusedTrigger = teamCard;
        openTeamDossier(teamCard.dataset.team);
        return;
      }
    });

    // Keyboard support on document
    document.addEventListener("keydown", (e) => {
      const dialog = document.querySelector("#team-dialog");

      // ArrowLeft / ArrowRight to cycle teams when modal is open
      if (dialog && dialog.open) {
        if (e.key === "ArrowLeft") {
          const prevBtn = dialog.querySelector(".prev-team-btn");
          if (prevBtn && prevBtn.dataset.navTeam) {
            e.preventDefault();
            openTeamDossier(prevBtn.dataset.navTeam);
            return;
          }
        } else if (e.key === "ArrowRight") {
          const nextBtn = dialog.querySelector(".next-team-btn");
          if (nextBtn && nextBtn.dataset.navTeam) {
            e.preventDefault();
            openTeamDossier(nextBtn.dataset.navTeam);
            return;
          }
        }
      }

      // Enter or Space on role="button" elements (bracket team rows and qualified cards)
      if (e.key === "Enter" || e.key === " ") {
        const teamButton = e.target.closest('[role="button"][data-team]');
        if (teamButton && !e.target.closest("#team-dialog")) {
          e.preventDefault();
          lastFocusedTrigger = teamButton;
          openTeamDossier(teamButton.dataset.team);
        }
      }
    });

    // Keyboard navigation in Tablist
    const tabContainer = document.querySelector("#group-tabs");
    if (tabContainer) {
      tabContainer.addEventListener("keydown", (e) => {
        const tabs = Array.from(tabContainer.querySelectorAll(".group-tab"));
        const currentIndex = tabs.findIndex((tab) => tab.dataset.group === activeGroup);
        let nextIndex = -1;

        if (e.key === "ArrowRight") {
          nextIndex = (currentIndex + 1) % tabs.length;
        } else if (e.key === "ArrowLeft") {
          nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
        } else if (e.key === "Home") {
          nextIndex = 0;
        } else if (e.key === "End") {
          nextIndex = tabs.length - 1;
        }

        if (nextIndex !== -1) {
          e.preventDefault();
          const targetTab = tabs[nextIndex];
          targetTab.focus();
          activeGroup = targetTab.dataset.group;
          renderGroupTabs();
          renderGroupAnalysis();
          history.replaceState(null, "", `#group/${activeGroup}`);
        }
      });
    }

    // Modal dialog events
    const dialog = document.querySelector("#team-dialog");
    if (dialog) {
      dialog.addEventListener("click", (e) => {
        if (e.target === dialog) {
          closeTeamDossier();
        }
      });

      dialog.addEventListener("cancel", (e) => {
        e.preventDefault();
        closeTeamDossier();
      });
    }

    // History popstate
    window.addEventListener("popstate", syncHashState);
  }

  // Initial Run
  initEvents();
  renderFilters();
  renderTeams();
  renderGroupTabs();
  renderGroupAnalysis();
  renderPlayersToWatch();
  renderSources();
  syncHashState();
})();

