document.addEventListener("DOMContentLoaded", () => {
  renderBracket();
  renderPlacements();
  setupInteractivity();
});

function createMatchCard(m) {
  const isGrandFinal = m.id === "gf";
  const team1Winner = m.team1.win;
  const team2Winner = m.team2.win;
  const isChampion1 = m.team1.isChampion;
  const isChampion2 = m.team2.isChampion;

  return `
    <article class="match-card ${isGrandFinal ? 'grand-final-card' : ''}" data-match-id="${m.id}" tabindex="0" role="button" aria-label="${m.round}: ${m.team1.name} vs ${m.team2.name}">
      <div class="match-header">
        <span class="match-time">${m.time}</span>
        <span class="match-format-tag">${m.format}</span>
      </div>

      <div class="team-row ${team1Winner ? 'winner' : ''} ${isChampion1 ? 'champion-winner' : ''}">
        <div class="team-meta-left">
          <img class="team-logo-small" src="${m.team1.logo}" alt="${m.team1.name} Logo" loading="lazy">
          <span class="team-name-text">${m.team1.name}</span>
        </div>
        <div class="team-score-right">
          ${isChampion1 ? '<span class="champion-pill">CHAMPION</span>' : (team1Winner ? '<span class="win-pill">WIN</span>' : '')}
          <span class="score-num">${m.team1.score}</span>
        </div>
      </div>

      <div class="team-row ${team2Winner ? 'winner' : ''} ${isChampion2 ? 'champion-winner' : ''}">
        <div class="team-meta-left">
          <img class="team-logo-small" src="${m.team2.logo}" alt="${m.team2.name} Logo" loading="lazy">
          <span class="team-name-text">${m.team2.name}</span>
        </div>
        <div class="team-score-right">
          ${isChampion2 ? '<span class="champion-pill">CHAMPION</span>' : (team2Winner ? '<span class="win-pill">WIN</span>' : '')}
          <span class="score-num">${m.team2.score}</span>
        </div>
      </div>

      <div class="match-footer">
        <span class="maps-preview">${m.maps.map(mp => mp.name).join(' · ')}</span>
        <span class="match-click-hint">ANALYSIS →</span>
      </div>
    </article>
  `;
}

function renderBracket() {
  const uqfEl = document.getElementById("col-uqf");
  const usfEl = document.getElementById("col-usf");
  const ufEl = document.getElementById("col-uf");
  const gfEl = document.getElementById("col-gf");

  const lr1El = document.getElementById("col-lr1");
  const lr2El = document.getElementById("col-lr2");
  const lr3El = document.getElementById("col-lr3");
  const lfEl = document.getElementById("col-lf");

  if (uqfEl) {
    uqfEl.innerHTML = PLAYOFFS_DATA.matches.filter(m => m.round === "Upper Quarterfinals").map(createMatchCard).join("");
  }
  if (usfEl) {
    usfEl.innerHTML = PLAYOFFS_DATA.matches.filter(m => m.round === "Upper Semifinals").map(createMatchCard).join("");
  }
  if (ufEl) {
    ufEl.innerHTML = PLAYOFFS_DATA.matches.filter(m => m.round === "Upper Final").map(createMatchCard).join("");
  }
  if (gfEl) {
    gfEl.innerHTML = PLAYOFFS_DATA.matches.filter(m => m.round === "Grand Final").map(createMatchCard).join("");
  }

  if (lr1El) {
    lr1El.innerHTML = PLAYOFFS_DATA.matches.filter(m => m.round === "Lower Round 1").map(createMatchCard).join("");
  }
  if (lr2El) {
    lr2El.innerHTML = PLAYOFFS_DATA.matches.filter(m => m.round === "Lower Round 2").map(createMatchCard).join("");
  }
  if (lr3El) {
    lr3El.innerHTML = PLAYOFFS_DATA.matches.filter(m => m.round === "Lower Round 3").map(createMatchCard).join("");
  }
  if (lfEl) {
    lfEl.innerHTML = PLAYOFFS_DATA.matches.filter(m => m.round === "Lower Final").map(createMatchCard).join("");
  }
}

function renderPlacements() {
  const tbody = document.getElementById("placements-tbody");
  if (!tbody) return;

  tbody.innerHTML = PLAYOFFS_DATA.placements.map(p => `
    <tr>
      <td><span class="${p.rankClass}">${p.place}</span></td>
      <td><strong>${p.team}</strong></td>
      <td>${p.region}</td>
      <td>${p.record}</td>
      <td>${p.prize}</td>
      <td><span style="color: ${p.place === '1st' ? 'var(--gold)' : (p.place === '2nd' ? 'var(--ink-bright)' : 'var(--muted)')}; font-weight: 600;">${p.status}</span></td>
    </tr>
  `).join("");
}

function setupInteractivity() {
  const modalBackdrop = document.getElementById("match-modal-backdrop");
  const closeBtn = document.getElementById("modal-close");

  document.addEventListener("click", e => {
    const card = e.target.closest(".match-card");
    if (card) {
      const matchId = card.getAttribute("data-match-id");
      openMatchModal(matchId);
    }
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Enter") {
      const card = document.activeElement.closest(".match-card");
      if (card) {
        const matchId = card.getAttribute("data-match-id");
        openMatchModal(matchId);
      }
    }
    if (e.key === "Escape" && modalBackdrop.classList.contains("open")) {
      closeMatchModal();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", closeMatchModal);
  }
  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", e => {
      if (e.target === modalBackdrop) closeMatchModal();
    });
  }

  // Filter tabs
  const tabBtns = document.querySelectorAll(".bracket-tab-btn");
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      tabBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");
      const upperTree = document.getElementById("upper-tree-section");
      const lowerTree = document.getElementById("lower-tree-section");

      if (filter === "all") {
        upperTree.style.display = "block";
        lowerTree.style.display = "block";
      } else if (filter === "upper") {
        upperTree.style.display = "block";
        lowerTree.style.display = "none";
      } else if (filter === "lower") {
        upperTree.style.display = "none";
        lowerTree.style.display = "block";
      }
    });
  });
}

function openMatchModal(matchId) {
  const match = PLAYOFFS_DATA.matches.find(m => m.id === matchId);
  if (!match) return;

  const modal = document.getElementById("match-modal-content");
  const backdrop = document.getElementById("match-modal-backdrop");

  modal.innerHTML = `
    <span class="modal-round-tag">${match.round} · ${match.format}</span>
    <h3 class="modal-match-title">${match.team1.name} vs ${match.team2.name}</h3>

    <div class="modal-teams-banner">
      <div class="modal-team-side">
        <img class="modal-team-logo" src="${match.team1.logo}" alt="${match.team1.name}">
        <div class="modal-team-info">
          <h4>${match.team1.name}</h4>
          <span>${match.team1.win ? 'WINNER · ADVANCES' : 'ELIMINATED / LOWER'}</span>
        </div>
      </div>
      <div class="modal-score-center">${match.team1.score} - ${match.team2.score}</div>
      <div class="modal-team-side right">
        <img class="modal-team-logo" src="${match.team2.logo}" alt="${match.team2.name}">
        <div class="modal-team-info">
          <h4>${match.team2.name}</h4>
          <span>${match.team2.win ? 'WINNER · ADVANCES' : 'ELIMINATED / LOWER'}</span>
        </div>
      </div>
    </div>

    <div class="modal-maps-flow">
      <h5>MAP-BY-MAP RESULTS</h5>
      <div class="map-pills-wrap">
        ${match.maps.map(mp => `
          <div class="map-score-pill">
            <strong>${mp.name}</strong>: <span>${mp.score} (${mp.winner})</span>
          </div>
        `).join("")}
      </div>
    </div>

    <div class="modal-analysis-grid">
      <div class="modal-analysis-box">
        <h5>MAP VETO PREDICTION</h5>
        <p>${match.veto}</p>
      </div>
      <div class="modal-analysis-box">
        <h5>KEY PLAYER DUEL</h5>
        <p>${match.keyDuel}</p>
      </div>
    </div>

    <div class="modal-analysis-grid">
      <div class="modal-analysis-box">
        <h5>TACTICAL BREAKDOWN</h5>
        <p>${match.tacticalKey}</p>
      </div>
      <div class="modal-analysis-box">
        <h5>UPSET CONDITION & RISK</h5>
        <p>${match.upsetFactor}</p>
      </div>
    </div>
  `;

  backdrop.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeMatchModal() {
  const backdrop = document.getElementById("match-modal-backdrop");
  if (backdrop) backdrop.classList.remove("open");
  document.body.style.overflow = "";
}
