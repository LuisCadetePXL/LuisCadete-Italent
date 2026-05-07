(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) a(o);
  new MutationObserver((o) => {
    for (const r of o)
      if (r.type === "childList")
        for (const n of r.addedNodes)
          n.tagName === "LINK" && n.rel === "modulepreload" && a(n);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(o) {
    const r = {};
    return (
      o.integrity && (r.integrity = o.integrity),
      o.referrerPolicy && (r.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (r.credentials = "include")
        : o.crossOrigin === "anonymous"
          ? (r.credentials = "omit")
          : (r.credentials = "same-origin"),
      r
    );
  }
  function a(o) {
    if (o.ep) return;
    o.ep = !0;
    const r = i(o);
    fetch(o.href, r);
  }
})();
const I = {
    owner: {
      name: "Luis Alberto Cadete Rosario",
      title: "AI Engineer",
      school: "PXL Hogeschool",
      year: "3e jaar Toegepaste Informatica — AI",
      origin: "Dom. Rep. → Spanje → België",
      sports: [
        "Honkbal — Precisie & Teamwork",
        "Brazilian Jiu-Jitsu — Discipline",
      ],
    },
    personalityStats: [
      { label: "KALMTE ONDER DRUK", pct: 92, color: "#00ffe7" },
      { label: "ANALYTISCH DENKEN", pct: 93, color: "#0088ff" },
      { label: "TEAMWORK", pct: 90, color: "#0011ff" },
      { label: "COMMUNICATIE", pct: 88, color: "#ffaa00" },
      { label: "CREATIVITEIT", pct: 89, color: "#00ff80" },
    ],
    skills: [
      { name: "Python", icon: "🐍" },
      { name: "Machine Learning", icon: "🧠" },
      { name: "Neural Networks", icon: "🔗" },
      { name: "SQL/Databases", icon: "🗄️" },
      { name: "Linux/Bash", icon: "🐧" },
      { name: "SAP BTP", icon: "☁️" },
      { name: "Prompt Engineering", icon: "✍️" },
      { name: "Git/VCS", icon: "🔀" },
      { name: "API Development", icon: "🔌" },
      { name: "Docker/K8s", icon: "🐳" },
      { name: "NiFi/Kafka", icon: "📊" },
      { name: "Spark/MLflow", icon: "⚡" },
      { name: "ROS/Gazebo", icon: "🤖" },
      { name: "Spring Boot", icon: "🍃" },
      { name: "TensorFlow/PyTorch", icon: "🧮" },
      { name: "OpenCV/MediaPipe", icon: "👁️" },
    ],
    softSkills: [
      "Kalmte onder druk",
      "Analytisch denken",
      "Flexibiliteit",
      "Nieuwsgierigheid",
      "Doorzettingsvermogen",
      "Teamwerk",
      "Communicatie",
      "Probleemoplossend denken",
      "Snelle leerling",
      "Adaptiviteit",
      "Kritisch evalueren",
    ],
    seminars: [
      {
        date: "14.10.2025",
        title: "AI & De Toekomst van IT",
        org: "Jackie Janssen",
        loc: "PXL-Next",
        dur: "3u",
        desc: "Nieuwste AI-ontwikkelingen en impact op de IT-professional.",
      },
      {
        date: "05.11.2025",
        title: "Quantum Machine Learning",
        org: "IBM",
        loc: "Corda 7",
        dur: "3u",
        desc: "Introductie in quantum-centric supercomputing, qubits en error mitigation.",
      },
      {
        date: "24.11.2025",
        title: "Een Bedrijf in Bijberoep",
        org: "Sarah Swaenepoel",
        loc: "PXL-Next",
        dur: "2u",
        desc: "Administratieve en strategische stappen voor het opstarten van een eigen zaak.",
      },
      {
        date: "17.12.2025",
        title: "Digital Forensics",
        org: "Politie",
        loc: "Corda 7",
        dur: "4u",
        desc: "Digitaal sporenonderzoek en data-analyse met Autopsy.",
      },
      {
        date: "04.03.2025",
        title: "Low Code / No Code",
        org: "Flexso",
        loc: "Corda 7",
        dur: "3u",
        desc: "Bedrijfsprocessen optimaliseren via visuele ontwikkelomgevingen.",
      },
      {
        date: "11.03.2025",
        title: "LLMs & Diffusiemodellen",
        org: "Uncanny",
        loc: "Corda 7",
        dur: "3u",
        desc: "Kritische analyse van generatieve AI-tools, bias in algoritmes.",
      },
      {
        date: "25.03.2025",
        title: "Pull Requests & Code Review",
        org: "BIQ",
        loc: "Corda 7",
        dur: "3u",
        desc: "Gestructureerde code-evaluaties voor softwarekwaliteit.",
      },
      {
        date: "22.04.2025",
        title: "Postman & AI-Testing",
        org: "Refleqt",
        loc: "Corda 7",
        dur: "2u",
        desc: "API-tests in Postman automatiseren met AI-gestuurde tools.",
      },
    ],
    zones: [
      {
        id: "UNIT_PROFILE",
        tile: [12, 34],
        accent: "#00ffe7",
        template: "profile",
        title: "CADETE_ROSARIO",
        order: 1,
      },
      {
        id: "TECH_SKILLS",
        tile: [16, 28],
        accent: "#0088ff",
        template: "skills",
        title: "TECHNICAL_CORE",
        order: 2,
      },
      {
        id: "KNOWLEDGE_LOG",
        tile: [26, 32],
        accent: "#ffaa00",
        template: "seminaries",
        title: "SEMINARIES",
        order: 3,
      },
      {
        id: "DEEP_DIVE",
        tile: [32, 22],
        accent: "#ff2d78",
        template: "hackathon",
        title: "HACK_THE_FUTURE",
        order: 4,
      },
      {
        id: "INT_MISSION",
        tile: [24, 14],
        accent: "#ffaa00",
        template: "hannover",
        title: "GERMANY_TRIP",
        order: 5,
      },
      {
        id: "AI_INNOVATION",
        tile: [34, 10],
        accent: "#0088ff",
        template: "sap",
        title: "SAP_LAB",
        order: 6,
      },
      {
        id: "PROJECT_VAULT",
        tile: [12, 10],
        accent: "#00ffe7",
        template: "projects",
        title: "SCHOOL_PROJECTS",
        order: 7,
      },
      {
        id: "REFLECTION_CORE",
        tile: [18, 18],
        accent: "#ff2d78",
        template: "reflection",
        title: "EINDREFLECTIE",
        order: 8,
      },
      {
        id: "CONNECT_HUB",
        tile: [6, 22],
        accent: "#00ffe7",
        template: "connect",
        title: "CONTACT",
        order: 9,
      },
    ],
  },
  m = {
    TILE_HALF_W: 32,
    TILE_HALF_H: 16,
    GRID: 40,
    CENTER: 20,
    ROBOT_SPEED: 2.5,
    ZOOM_MIN: 0.7,
    ZOOM_MAX: 2,
    ZOOM_DEFAULT: 1,
    ZOOM_BUILDING: 1.6,
    ZOOM_WELCOME: 2.5,
  },
  C = document.getElementById("gameCanvas"),
  s = C.getContext("2d"),
  Pe = s,
  _ = document.getElementById("minimapCanvas"),
  z = _.getContext("2d"),
  Fe = document.getElementById("welcome-robot-canvas"),
  Y = Fe.getContext("2d"),
  $e = document.getElementById("chat-robot-canvas"),
  B = $e.getContext("2d");
let k,
  w,
  be,
  Ie,
  l = { x: 0, y: 0, zoom: 1, targetX: 0, targetY: 0, targetZoom: 1 },
  c = {
    tileX: 6,
    tileY: 34,
    screenX: 0,
    screenY: 0,
    moving: !1,
    path: [],
    animFrame: 0,
    blinkTimer: 2e3,
    isScanning: !1,
    scanTimer: 0,
    attentionPose: !1,
  },
  Ee = !1,
  q = { x: 0, y: 0 },
  x = new Set(),
  X = -1,
  ke = !1,
  oe = !1,
  S = [],
  U = [],
  he = [],
  K = [],
  Z = [],
  L = !1,
  G = null,
  ee = !1,
  le = !1,
  V = [],
  de = "idle",
  Q = !0,
  re = [],
  ce = [];
function Xe() {
  re = [];
  const e = 2,
    t = (i, a) => {
      const o = Math.abs(i - m.CENTER),
        r = Math.abs(a - m.CENTER);
      return o + r <= 28 - e && o <= 18 - e && r <= 18 - e;
    };
  for (let i = 2; i < m.GRID - 2; i += 5)
    for (let a = 2; a < m.GRID - 2; a += 5) {
      const o = i + Math.floor(Math.random() * 3),
        r = a + Math.floor(Math.random() * 3),
        n = 1.2,
        g = 3 + Math.random() * 6;
      !t(o, r) ||
        !t(o + n, r + n) ||
        S.some((f) => {
          const u = Math.abs(o - r - (f.tx - f.ty)) < 8,
            b = o + r > f.tx + f.ty - 4,
            p = Math.abs(f.tx - o) < 6 && Math.abs(f.ty - r) < 6;
          return (u && b) || p;
        }) ||
        re.some((f) => Math.abs(f.tx - o) < 5 && Math.abs(f.ty - r) < 5) ||
        (Math.random() > 0.5 &&
          re.push({
            tx: o,
            ty: r,
            w: n,
            h: g,
            color: Math.random() > 0.5 ? "#0088ff" : "#ff2d78",
            opacity: 0.3,
          }));
    }
}
function Ye() {
  ce = [];
  for (let e = 0; e < 20; e++)
    ce.push({
      x: Math.random() * m.GRID,
      y: Math.random() * m.GRID,
      dir: Math.random() > 0.5 ? "x" : "y",
      speed: 0.05 + Math.random() * 0.1,
      color: Math.random() > 0.5 ? "#00ffe7" : "#ff2d78",
    });
}
function We(e) {
  ce.forEach((t) => {
    (t.dir === "x" ? (t.x += t.speed) : (t.y += t.speed),
      t.x >= m.GRID && (t.x = 0),
      t.y >= m.GRID && (t.y = 0));
  });
}
function Ue() {
  ce.forEach((e) => {
    const t = A(e.x, e.y);
    ((s.fillStyle = e.color),
      (s.shadowColor = e.color),
      (s.shadowBlur = 8 * l.zoom),
      s.fillRect(t.x - 2 * l.zoom, t.y - 2 * l.zoom, 4 * l.zoom, 2 * l.zoom),
      (s.shadowBlur = 0));
  });
}
function W(e, t) {
  const i = Math.abs(e - m.CENTER),
    a = Math.abs(t - m.CENTER);
  return i + a <= 28 && i <= 18 && a <= 18;
}
function A(e, t) {
  return {
    x: (e - t) * m.TILE_HALF_W * l.zoom + be + l.x,
    y: (e + t) * m.TILE_HALF_H * l.zoom + Ie + l.y,
  };
}
function Ke(e, t) {
  const i = e - be - l.x,
    a = t - Ie - l.y;
  return {
    tx: (i / (m.TILE_HALF_W * l.zoom) + a / (m.TILE_HALF_H * l.zoom)) / 2,
    ty: (a / (m.TILE_HALF_H * l.zoom) - i / (m.TILE_HALF_W * l.zoom)) / 2,
  };
}
function Te() {
  const e = A(c.tileX, c.tileY);
  ((l.targetX = k / 2 - e.x), (l.targetY = w / 2 - e.y));
}
function ae(e, t) {
  const i = parseInt(e.slice(1, 3), 16),
    a = parseInt(e.slice(3, 5), 16),
    o = parseInt(e.slice(5, 7), 16),
    r = 1 - t;
  return `rgb(${(i * r) | 0},${(a * r) | 0},${(o * r) | 0})`;
}
const Ze = [
  {
    id: "UNIT_PROFILE",
    tx: 12,
    ty: 34,
    w: 3.5,
    h: 2.5,
    color: "#00ffe7",
    type: "house",
  },
  {
    id: "TECH_SKILLS",
    tx: 16,
    ty: 28,
    w: 4.5,
    h: 2,
    color: "#0088ff",
    type: "house",
  },
  {
    id: "KNOWLEDGE_LOG",
    tx: 26,
    ty: 32,
    w: 2.5,
    h: 3,
    color: "#ffaa00",
    type: "tower",
  },
  {
    id: "DEEP_DIVE",
    tx: 32,
    ty: 22,
    w: 4,
    h: 1.8,
    color: "#ff2d78",
    type: "house",
  },
  {
    id: "INT_MISSION",
    tx: 24,
    ty: 14,
    w: 5,
    h: 2.5,
    color: "#ffaa00",
    type: "house",
  },
  {
    id: "AI_INNOVATION",
    tx: 34,
    ty: 10,
    w: 4,
    h: 2.5,
    color: "#0088ff",
    type: "tower",
  },
  {
    id: "PROJECT_VAULT",
    tx: 12,
    ty: 10,
    w: 4.5,
    h: 3,
    color: "#00ffe7",
    type: "house",
  },
  {
    id: "REFLECTION_CORE",
    tx: 18,
    ty: 18,
    w: 3.5,
    h: 2.2,
    color: "#ff2d78",
    type: "house",
  },
  {
    id: "CONNECT_HUB",
    tx: 6,
    ty: 22,
    w: 3,
    h: 2,
    color: "#00ffe7",
    type: "house",
  },
];
function Ve() {
  S = Ze.map((e, t) => {
    const i = I.zones[t];
    return {
      ...e,
      zone: i,
      entranceTileX: e.tx + Math.floor(e.w / 2),
      entranceTileY: e.ty + Math.ceil(e.h),
      hovered: !1,
      flickerPhase: Math.random() * Math.PI * 2,
    };
  });
}
function Je(e, t, i, a) {
  var f;
  const o = (u, b) => u + "," + b,
    r = m.GRID,
    n = m.GRID;
  let g = new Set(),
    d = [
      { x: e, y: t, g: 0, f: Math.abs(e - i) + Math.abs(t - a), parent: null },
    ];
  for (; d.length; ) {
    d.sort((b, p) => b.f - p.f);
    let u = d.shift();
    if (u.x === i && u.y === a) {
      let b = [],
        p = u;
      for (; p; ) (b.unshift({ x: p.x, y: p.y }), (p = p.parent));
      return b;
    }
    g.add(o(u.x, u.y));
    for (let [b, p] of [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ]) {
      let v = u.x + b,
        y = u.y + p;
      v < 0 ||
        v >= r ||
        y < 0 ||
        y >= n ||
        !((f = U[y]) != null && f[v]) ||
        g.has(o(v, y)) ||
        d.some((E) => E.x === v && E.y === y) ||
        d.push({
          x: v,
          y,
          g: u.g + 1,
          f: u.g + 1 + Math.abs(v - i) + Math.abs(y - a),
          parent: u,
        });
    }
  }
  return null;
}
function pe(e, t, i) {
  if (c.moving) return;
  let a = Je(
    Math.round(c.tileX),
    Math.round(c.tileY),
    Math.round(e),
    Math.round(t),
  );
  if (!a || a.length < 2) {
    i && i(!1);
    return;
  }
  (a[0].x === Math.round(c.tileX) &&
    a[0].y === Math.round(c.tileY) &&
    a.shift(),
    (c.path = a),
    (c.moving = !0),
    (c.moveCallback = i));
}
function qe(e) {
  if (!c.moving || !c.path.length) {
    c.moving &&
      ((c.moving = !1),
      (c.animFrame = 0),
      c.moveCallback && (c.moveCallback(!0), (c.moveCallback = null)));
    return;
  }
  let t = m.ROBOT_SPEED * e,
    i = c.path[0],
    a = i.x - c.tileX,
    o = i.y - c.tileY,
    r = Math.sqrt(a * a + o * o);
  if (r <= t) {
    ((c.tileX = i.x), (c.tileY = i.y), c.path.shift(), c.animFrame++);
    let n = A(c.tileX, c.tileY);
    (Z.push({ x: n.x, y: n.y + 14 * l.zoom, life: 1 }),
      Z.length > 20 && Z.shift(),
      K.push({ x: n.x, y: n.y, r: 2, maxR: 12, life: 1 }),
      c.path.length ||
        ((c.moving = !1),
        (c.animFrame = 0),
        c.moveCallback && (c.moveCallback(!0), (c.moveCallback = null))));
  } else
    ((c.tileX += (a / r) * t),
      (c.tileY += (o / r) * t),
      (c.animFrame += e * 4));
}
function Qe() {
  U = [];
  for (let e = 0; e < m.GRID; e++) {
    U[e] = [];
    for (let t = 0; t < m.GRID; t++) U[e][t] = W(t, e);
  }
  S.forEach((e) => {
    for (let t = 0; t < Math.ceil(e.h); t++)
      for (let i = 0; i < Math.ceil(e.w); i++) {
        const a = e.tx + i,
          o = e.ty + t;
        a >= 0 && a < m.GRID && o >= 0 && o < m.GRID && (U[o][a] = !1);
      }
  });
}
function xe(e, t, i, a, o, r, n, g) {
  const d = m.TILE_HALF_W * l.zoom,
    f = m.TILE_HALF_H * l.zoom,
    u = o * f * 2,
    b = a * d,
    p = a * f,
    v = n || 1;
  ((e.globalAlpha = v),
    v > 0.7 && ((e.shadowColor = r), (e.shadowBlur = 12 * l.zoom)));
  const y = { x: t, y: i },
    E = { x: t - b, y: i - p },
    H = { x: t + b, y: i - p },
    ne = { x: t, y: i - 2 * p },
    T = { x: y.x, y: y.y - u },
    h = { x: E.x, y: E.y - u },
    P = { x: H.x, y: H.y - u },
    R = { x: ne.x, y: ne.y - u };
  if (
    ((e.fillStyle = ae(r, 0.55)),
    e.beginPath(),
    e.moveTo(y.x, y.y),
    e.lineTo(E.x, E.y),
    e.lineTo(h.x, h.y),
    e.lineTo(T.x, T.y),
    e.closePath(),
    e.fill(),
    (e.fillStyle = ae(r, 0.35)),
    e.beginPath(),
    e.moveTo(y.x, y.y),
    e.lineTo(H.x, H.y),
    e.lineTo(P.x, P.y),
    e.lineTo(T.x, T.y),
    e.closePath(),
    e.fill(),
    g)
  ) {
    const F = 45 * l.zoom,
      M = { x: (h.x + T.x) / 2, y: (h.y + T.y) / 2 - F },
      ie = { x: (P.x + R.x) / 2, y: (P.y + R.y) / 2 - F };
    ((e.fillStyle = ae(r, 0.55)),
      e.beginPath(),
      e.moveTo(h.x, h.y),
      e.lineTo(T.x, T.y),
      e.lineTo(M.x, M.y),
      e.closePath(),
      e.fill(),
      (e.fillStyle = r),
      e.beginPath(),
      e.moveTo(T.x, T.y),
      e.lineTo(P.x, P.y),
      e.lineTo(ie.x, ie.y),
      e.lineTo(M.x, M.y),
      e.closePath(),
      e.fill(),
      (e.fillStyle = ae(r, 0.2)),
      e.beginPath(),
      e.moveTo(h.x, h.y),
      e.lineTo(R.x, R.y),
      e.lineTo(ie.x, ie.y),
      e.lineTo(M.x, M.y),
      e.closePath(),
      e.fill());
  } else
    ((e.fillStyle = r),
      e.beginPath(),
      e.moveTo(T.x, T.y),
      e.lineTo(P.x, P.y),
      e.lineTo(R.x, R.y),
      e.lineTo(h.x, h.y),
      e.closePath(),
      e.fill(),
      (e.strokeStyle = r),
      (e.lineWidth = 2 * l.zoom),
      e.beginPath(),
      e.moveTo(R.x, R.y),
      e.lineTo(R.x, R.y - 20 * l.zoom),
      e.stroke());
  e.fillStyle = "rgba(255,255,255,0.6)";
  const Me = 3 * l.zoom,
    Ce = 4 * l.zoom;
  for (let F = 1; F < 4; F++)
    for (let M = 1; M < Math.floor(o); M++)
      (e.fillRect(t - (b / 4) * F, i - u + M * f * 2 - p / 2, Me, Ce),
        e.fillRect(t + (b / 4) * F, i - u + M * f * 2 - p / 2, Me, Ce));
  ((e.shadowBlur = 0), (e.globalAlpha = 1));
}
function et(e, t) {
  const i = A(t.tile[0], t.tile[1]);
  ((e.fillStyle = t.accent),
    e.beginPath(),
    e.arc(i.x + 20, i.y - 30, 10, 0, Math.PI * 2),
    e.fill(),
    (e.fillStyle = "#050a0f"),
    (e.font = "bold 11px Orbitron,monospace"),
    (e.textAlign = "center"),
    (e.textBaseline = "middle"),
    e.fillText(t.order, i.x + 20, i.y - 30));
}
function tt() {
  s.fillStyle = "rgba(200,220,255,.15)";
  for (let r = 0; r < 300; r++) {
    const n = (r * 137.5 + 42) % k,
      g = (r * 191.7 + 13) % w;
    s.fillRect(n, g, 1, 1);
  }
  const e = A(m.CENTER, m.CENTER),
    t = s.createRadialGradient(
      e.x,
      e.y + 80 * l.zoom,
      0,
      e.x,
      e.y + 80 * l.zoom,
      300 * l.zoom,
    );
  (t.addColorStop(0, "rgba(0,255,231,.04)"),
    t.addColorStop(1, "rgba(0,255,231,0)"),
    (s.fillStyle = t),
    s.beginPath(),
    s.arc(e.x, e.y + 80 * l.zoom, 300 * l.zoom, 0, Math.PI * 2),
    s.fill());
  const i = m.TILE_HALF_W * l.zoom,
    a = m.TILE_HALF_H * l.zoom;
  for (let r = 0; r <= m.GRID * 2; r++)
    for (let n = 0; n < m.GRID; n++) {
      let g = r - n;
      if (g < 0 || g >= m.GRID) continue;
      let d = A(n, g),
        f = !W(n - 1, g) || !W(n + 1, g) || !W(n, g - 1) || !W(n, g + 1);
      if (!W(n, g)) {
        (n % 5 === 0 || g % 5 === 0) &&
          ((s.fillStyle = "rgba(10,20,30,.3)"),
          s.beginPath(),
          s.moveTo(d.x, d.y),
          s.lineTo(d.x + i, d.y + a),
          s.lineTo(d.x, d.y + 2 * a),
          s.lineTo(d.x - i, d.y + a),
          s.closePath(),
          s.fill());
        continue;
      }
      (s.beginPath(),
        s.moveTo(d.x + i, d.y + a),
        s.lineTo(d.x + i, d.y + a + 4),
        s.lineTo(d.x, d.y + 2 * a + 4),
        s.lineTo(d.x, d.y + 2 * a),
        s.closePath(),
        (s.fillStyle = "#071422"),
        s.fill(),
        s.beginPath(),
        s.moveTo(d.x - i, d.y + a),
        s.lineTo(d.x - i, d.y + a + 4),
        s.lineTo(d.x, d.y + 2 * a + 4),
        s.lineTo(d.x, d.y + 2 * a),
        s.closePath(),
        (s.fillStyle = "#091828"),
        s.fill(),
        s.beginPath(),
        s.moveTo(d.x, d.y),
        s.lineTo(d.x + i, d.y + a),
        s.lineTo(d.x, d.y + 2 * a),
        s.lineTo(d.x - i, d.y + a),
        s.closePath(),
        (s.fillStyle = f ? "#07131f" : "#0c1e2e"),
        s.fill(),
        (s.strokeStyle = `rgba(10,42,58,${0.6 * l.zoom})`),
        (s.lineWidth = 0.5),
        s.stroke(),
        (n + g) % 4 === 0 &&
          ((s.fillStyle = "rgba(0,255,231,.08)"),
          s.beginPath(),
          s.arc(d.x, d.y + a, 2 * l.zoom, 0, Math.PI * 2),
          s.fill()),
        (n * 7 + g * 13) % 4 === 0 &&
          n < m.GRID - 1 &&
          ((s.strokeStyle = "rgba(0,255,231,.07)"),
          (s.lineWidth = 0.8),
          s.beginPath(),
          s.moveTo(d.x, d.y + a),
          s.lineTo(d.x + i * 2, d.y + a),
          s.stroke()),
        (n * 5 + g * 11) % 6 === 0 &&
          g < m.GRID - 1 &&
          ((s.strokeStyle = "rgba(0,136,255,.06)"),
          (s.lineWidth = 0.8),
          s.beginPath(),
          s.moveTo(d.x, d.y + a),
          s.lineTo(d.x, d.y + 2 * a),
          s.stroke()),
        (n * 13 + g * 17) % 8 === 0 &&
          ((s.strokeStyle = "rgba(0,255,231,.07)"),
          (s.lineWidth = 0.5),
          s.beginPath(),
          s.arc(d.x, d.y + a, 3 * l.zoom, 0, Math.PI * 2),
          s.stroke(),
          (s.fillStyle = "rgba(0,255,231,.04)"),
          s.fill()),
        f &&
          ((s.strokeStyle = "rgba(0,255,231,.4)"),
          (s.lineWidth = 1.5 * l.zoom),
          s.beginPath(),
          s.moveTo(d.x - i, d.y + a),
          s.lineTo(d.x, d.y),
          s.lineTo(d.x + i, d.y + a),
          s.stroke(),
          (s.fillStyle = "#040d17"),
          s.beginPath(),
          s.moveTo(d.x - i, d.y + a + 4),
          s.lineTo(d.x, d.y + 2 * a + 4),
          s.lineTo(d.x + i, d.y + a + 4),
          s.lineTo(d.x, d.y + 2 * a + 8),
          s.lineTo(d.x - i, d.y + a + 8),
          s.closePath(),
          s.fill(),
          (s.strokeStyle = "rgba(0,255,231,.3)"),
          (s.lineWidth = 0.5),
          s.beginPath(),
          s.moveTo(d.x - i, d.y + a + 8),
          s.lineTo(d.x, d.y + 2 * a + 8),
          s.lineTo(d.x + i, d.y + a + 8),
          s.stroke()));
    }
  I.zones.forEach((r) => et(s, r));
  for (let r = Z.length - 1; r >= 0; r--) {
    const n = Z[r];
    if (((n.life -= 0.005), n.life <= 0)) {
      Z.splice(r, 1);
      continue;
    }
    ((s.fillStyle = `rgba(0,255,231,${n.life * 0.3})`),
      s.beginPath(),
      s.ellipse(
        n.x - 4 * l.zoom,
        n.y,
        3 * l.zoom,
        1.5 * l.zoom,
        0,
        0,
        Math.PI * 2,
      ),
      s.fill(),
      s.beginPath(),
      s.ellipse(
        n.x + 4 * l.zoom,
        n.y,
        3 * l.zoom,
        1.5 * l.zoom,
        0,
        0,
        Math.PI * 2,
      ),
      s.fill());
  }
  const o = s.createRadialGradient(
    k / 2,
    w / 2,
    w * 0.3,
    k / 2,
    w / 2,
    Math.max(k, w) * 0.7,
  );
  (o.addColorStop(0, "rgba(0,0,0,0)"),
    o.addColorStop(0.7, "rgba(0,0,0,0)"),
    o.addColorStop(1, "rgba(0,0,0,.55)"),
    (s.fillStyle = o),
    s.fillRect(0, 0, k, w));
}
function nt(e) {
  const {
      tx: t,
      ty: i,
      w: a,
      h: o,
      color: r,
      type: n,
      id: g,
      hovered: d,
      opacity: f,
    } = e,
    u = A(t + a / 2, i + a / 2),
    b = d || x.has(g) ? 1 : 0.7;
  if ((xe(Pe, u.x, u.y, a, o, r, f || b * 0.9, n === "house"), g)) {
    const p = 13 * l.zoom;
    (s.save(),
      (s.font = `bold ${p}px Orbitron,monospace`),
      (s.textAlign = "center"));
    const y = s.measureText(`[${g}]`).width + 16 * l.zoom,
      E = 22 * l.zoom;
    ((s.fillStyle = "rgba(5,10,15,0.85)"),
      s.fillRect(
        u.x - y / 2,
        u.y - o * m.TILE_HALF_H * 2 * l.zoom - 80 * l.zoom,
        y,
        E,
      ),
      (s.fillStyle = r),
      s.fillText(
        `[${g}]`,
        u.x,
        u.y - o * m.TILE_HALF_H * 2 * l.zoom - 64 * l.zoom,
      ),
      s.restore());
  }
}
function Le(e, t, i, a, o, r) {
  const n = a || l.zoom,
    g = t != null ? { x: t, y: i } : A(c.tileX, c.tileY),
    d = g.x,
    f = g.y;
  !t && !i && ((c.screenX = d), (c.screenY = f));
  const u = Date.now(),
    b = Math.sin(u * 0.003) * 2 * n,
    p = d,
    v = f - 10 * n + b,
    y = o || c.attentionPose;
  ((e.fillStyle = "rgba(0,255,231,.08)"),
    e.beginPath(),
    e.ellipse(d, f + 16 * n, 12 * n, 4 * n, 0, 0, Math.PI * 2),
    e.fill());
  const E = c.moving ? Math.sin(c.animFrame * 0.5) * 3 : 0,
    H = y ? 0 : c.moving ? Math.sin(c.animFrame * 0.5) * 4 : 0;
  ((e.fillStyle = "#0d2535"),
    (e.strokeStyle = "rgba(0,255,231,.7)"),
    (e.lineWidth = 1 * n),
    e.fillRect(p - 5 * n, v + 12 * n + E, 4 * n, 8 * n),
    e.strokeRect(p - 5 * n, v + 12 * n + E, 4 * n, 8 * n),
    e.fillRect(p + 1 * n, v + 12 * n - E, 4 * n, 8 * n),
    e.strokeRect(p + 1 * n, v + 12 * n - E, 4 * n, 8 * n),
    (e.fillStyle = "rgba(0,255,231,.7)"),
    e.fillRect(p - 6 * n, v + 20 * n + E, 6 * n, 2 * n),
    e.fillRect(p + 0 * n, v + 20 * n - E, 6 * n, 2 * n),
    (e.fillStyle = "#0d2535"),
    (e.strokeStyle = "rgba(0,255,231,.7)"),
    (e.lineWidth = 1 * n),
    e.fillRect(p - 7 * n, v + 0 * n, 14 * n, 14 * n),
    e.strokeRect(p - 7 * n, v + 0 * n, 14 * n, 14 * n),
    (e.fillStyle = "rgba(0,255,231,.15)"));
  for (let h = 0; h < 3; h++)
    e.fillRect(p - 4 * n, v + 4 * n + h * 3 * n, 8 * n, 1 * n);
  if (
    ((e.fillStyle = `rgba(0,136,255,${0.3 + Math.sin(u * 0.003) * 0.1})`),
    e.fillRect(p - 2 * n, v + 2 * n, 4 * n, 3 * n),
    r === "thinking")
  )
    for (let h = 0; h < 3; h++) {
      const P = (u + h * 300) % 900;
      ((e.fillStyle = `rgba(0,255,231,${P < 300 ? 0.9 : 0.2})`),
        e.beginPath(),
        e.arc(p - 8 + h * 10, v - 6 * n - 16, 3, 0, Math.PI * 2),
        e.fill());
    }
  if (r === "talking") {
    const h = 12 + Math.sin(u * 0.015) * 6;
    ((e.fillStyle = "rgba(0,255,231,.7)"),
      e.fillRect(p - h / 2, v - 6 * n + 2, h, 2),
      (e.fillStyle = `rgba(0,136,255,${0.4 + Math.sin(u * 0.01) * 0.3})`),
      e.fillRect(p - 6, v - 6 * n + 4, 12, 6));
  }
  if (r === "error") {
    ((e.fillStyle = "rgba(255,100,100,.9)"),
      e.fillRect(p - 9, v - 6 * n - 3, 5, 2),
      e.fillRect(p + 4, v - 6 * n - 3, 5, 2));
    return;
  }
  (e.beginPath(),
    e.moveTo(p - 7 * n, v + 2 * n),
    e.lineTo(p - 11 * n, v + 5 * n),
    e.lineTo(p - 11 * n, v + 9 * n),
    e.lineTo(p - 7 * n, v + 7 * n),
    e.closePath(),
    (e.fillStyle = "#0d2535"),
    (e.strokeStyle = "rgba(0,255,231,.5)"),
    (e.lineWidth = 1 * n),
    e.fill(),
    e.stroke(),
    e.beginPath(),
    e.moveTo(p + 7 * n, v + 2 * n),
    e.lineTo(p + 11 * n, v + 5 * n),
    e.lineTo(p + 11 * n, v + 9 * n),
    e.lineTo(p + 7 * n, v + 7 * n),
    e.closePath(),
    e.fill(),
    e.stroke(),
    (e.strokeStyle = "rgba(0,255,231,.5)"),
    (e.lineWidth = 2 * n),
    y
      ? (e.beginPath(),
        e.moveTo(p + 11 * n, v + 6 * n),
        e.lineTo(p + 16 * n, v - 4 * n),
        e.stroke(),
        e.beginPath(),
        e.moveTo(p - 11 * n, v + 6 * n),
        e.lineTo(p - 14 * n, v + 12 * n),
        e.stroke())
      : (e.beginPath(),
        e.moveTo(p - 11 * n, v + 6 * n),
        e.lineTo(p - 14 * n, v + 12 * n + H),
        e.stroke(),
        e.beginPath(),
        e.moveTo(p + 11 * n, v + 6 * n),
        e.lineTo(p + 14 * n, v + 12 * n - H),
        e.stroke()),
    (e.fillStyle = "#1a3a4a"),
    (e.strokeStyle = "rgba(0,255,231,.7)"),
    (e.lineWidth = 1 * n));
  const ne = y
    ? Math.sin(u * 0.003) * 5
    : c.moving
      ? Math.sin(c.animFrame * 0.3) * 3
      : 0;
  (e.save(),
    e.translate(p, v - 6 * n),
    e.rotate((ne * Math.PI) / 180),
    e.fillRect(-4 * n, -5 * n, 8 * n, 7 * n),
    e.strokeRect(-4 * n, -5 * n, 8 * n, 7 * n),
    c.blinkTimer--,
    c.blinkTimer <= 0 && (c.blinkTimer = 2e3 + Math.random() * 3e3));
  const T = c.blinkTimer > 80 ? 2 * n : 0.5 * n;
  if (
    ((e.fillStyle = y ? "#ffffff" : "#00ffe7"),
    e.fillRect(-3 * n, -3 * n, 2.5 * n, T),
    e.fillRect(0.5 * n, -3 * n, 2.5 * n, T),
    (e.strokeStyle = "rgba(0,255,231,.4)"),
    (e.lineWidth = 1 * n),
    e.beginPath(),
    e.moveTo(0, -5 * n),
    e.lineTo(0, -11 * n),
    e.stroke(),
    (e.fillStyle = `rgba(0,255,231,${0.4 + Math.sin(u * 0.005) * 0.2})`),
    e.beginPath(),
    e.arc(0, -11 * n, 1.5 * n, 0, Math.PI * 2),
    e.fill(),
    e.restore(),
    c.isScanning)
  ) {
    ((e.strokeStyle = `rgba(0,255,231,${0.3 + Math.sin(c.scanTimer * 0.1) * 0.2})`),
      (e.lineWidth = 1 * n));
    const h = v - 14 * n + Math.abs(Math.sin(c.scanTimer * 0.05)) * 28 * n;
    (e.beginPath(),
      e.moveTo(p - 18 * n, h),
      e.lineTo(p + 18 * n, h),
      e.stroke(),
      c.scanTimer++,
      c.scanTimer > 120 && ((c.isScanning = !1), (c.scanTimer = 0)));
  }
  Math.floor(Date.now() / 8e3) !== Math.floor((Date.now() - 16) / 8e3) &&
    K.push({ x: d, y: f, r: 2, maxR: 30 * n, life: 1 });
}
function it() {
  he = [];
  for (let e = 0; e < 200; e++)
    he.push({
      x: Math.random() * k,
      y: Math.random() * w,
      speed: 0.8 + Math.random() * 1.5,
      len: 6 + Math.random() * 10,
      opacity: 0.1 + Math.random() * 0.2,
    });
}
function at() {
  for (const e of he) {
    const t = Math.sin(e.y * 0.003 + e.x * 0.005) * 0.15;
    ((s.strokeStyle = `rgba(160,200,255,${e.opacity + t})`),
      (s.lineWidth = 0.8),
      s.beginPath(),
      s.moveTo(e.x, e.y),
      s.lineTo(e.x - 4, e.y + e.len),
      s.stroke(),
      Math.random() < 0.02 &&
        ((s.fillStyle = `rgba(0,255,231,${e.opacity * 0.3})`),
        s.beginPath(),
        s.arc(e.x, e.y + e.len * 0.5, 2, 0, Math.PI * 2),
        s.fill()),
      (e.y += e.speed * 0.8),
      (e.x -= 1.2),
      e.y > w + e.len && ((e.y = -e.len), (e.x = Math.random() * k)),
      e.x < -20 && (e.x = k + 10));
  }
}
function st() {
  for (let e = K.length - 1; e >= 0; e--) {
    const t = K[e];
    if (((t.r += 0.5), (t.life -= 0.02), t.life <= 0)) {
      K.splice(e, 1);
      continue;
    }
    ((s.strokeStyle = `rgba(0,255,231,${t.life * 0.4})`),
      (s.lineWidth = 0.5),
      s.beginPath(),
      s.arc(t.x, t.y, t.r, 0, Math.PI * 2),
      s.stroke());
  }
}
function Re(e, t) {
  for (let i = S.length - 1; i >= 0; i--) {
    const a = S[i],
      o = A(a.tx, a.ty),
      r = e - o.x,
      n =
        t -
        (o.y +
          (a.h * m.TILE_HALF_H * l.zoom) / 2 +
          (a.w * m.TILE_HALF_W * l.zoom) / 4);
    if (
      Math.abs(r) / ((a.w * m.TILE_HALF_W * l.zoom) / 2 + 4) +
        Math.abs(n) /
          ((a.h * m.TILE_HALF_H * l.zoom) / 2 +
            (a.w * m.TILE_HALF_W * l.zoom) / 4 +
            4) <=
      1.2
    )
      return a;
  }
  return null;
}
const O = {};
function ot(e) {
  return !e || !e.length
    ? ""
    : `<div class="popup-gallery-column"><div class="cyber-image-frame" onclick="document.getElementById('lightbox').classList.add('visible');document.getElementById('lightbox-img').src=document.getElementById('main-gallery-img').src"><img src="${e[0]}" alt="foto" id="main-gallery-img"><div class="cyber-scanline-overlay"></div></div><div class="cyber-gallery-thumbnails">${e.map((t, i) => `<img src="${t}" class="thumb${i === 0 ? " active" : ""}" onclick="document.getElementById('main-gallery-img').src='${t}';document.querySelectorAll('.thumb').forEach((t,j)=>t.className='thumb'+(j===${i}?' active':''))">`).join("")}</div></div>`;
}
const lt = {
  profile: ["/media/profile/Luis.JPG"],
  skills: ["/media/pop_sessies/team_1.jpg", "/media/pop_sessies/team_2.jpg"],
  hannover: [
    "/media/belefeld/IMG_2452.jpg",
    "/media/hannover/IMG_2483.jpg",
    "/media/hannover/IMG_2462.jpg",
    "/media/hannover/IMG_2469.jpg",
    "/media/Berlijn/IMG_2535.jpg",
    "/media/Berlijn/IMG_2545.jpg",
    "/media/chaos_computer_club/ccc.jpg",
  ],
  hackathon: [
    "/media/hackathon/IMG_1041.jpg",
    "/media/hackathon/IMG_1040.jpg",
    "/media/hackathon/IMG_1036.jpg",
  ],
  seminaries: ["/media/seminaries/jackie_jansens.jpg"],
};
function D(e, t) {
  const i = lt[e];
  return `<div class="popup-content-wrapper"><div class="popup-text-column">${t}</div>${i ? ot(i) : ""}</div>`;
}
O.profile = (e) =>
  D(
    e.template,
    `<div class="panel-section"><div class="panel-section-title">// IDENT_DATA</div><div class="panel-data-row"><span class="label">NAME:</span><span class="value">${I.owner.name}</span></div><div class="panel-data-row"><span class="label">ORIGIN:</span><span class="value">${I.owner.origin}</span></div><div class="panel-data-row"><span class="label">CLASS:</span><span class="value">${I.owner.title}</span></div><div class="panel-data-row"><span class="label">STATUS:</span><span class="value">${I.owner.school} · ${I.owner.year}</span></div></div><div class="panel-section"><div class="panel-section-title">// BIO_LOG</div><div class="panel-body-text">Geboren in de Dominicaanse Republiek, opgegroeid in Spanje waar ik als 4-jarige mijn vader al hielp met computers bouwen. Na een terugkeer naar DR verhuisde ik op mijn 13e naar België. Die mix van culturen heeft me flexibel en veerkrachtig gemaakt.</div><div class="panel-body-text" style="margin-top:8px;">Vandaag studeer ik Toegepaste Informatica met specialisatie AI aan PXL Hasselt. Mijn passie ligt bij het combineren van slimme code met fysieke hardware — robotica is mijn ultieme doel. Naast technologie breng ik tijd door op de BJJ-mat of het honkbalveld, waar discipline en teamwerk centraal staan.</div></div><div class="panel-section"><div class="panel-section-title">// PARAMETERS</div>${I.personalityStats.map((t) => `<div class="personality-bar"><span class="bar-label">${t.label}</span><div class="bar-track"><div class="bar-fill" style="background:linear-gradient(90deg, ${t.color}cc, ${t.color})" data-pct="${t.pct}"></div></div><span class="bar-pct">${t.pct}%</span></div>`).join("")}</div><div class="panel-section"><div class="panel-section-title">// AFFILIATIONS</div>${I.owner.sports.map((t) => `<span class="hex-badge">⬡ ${t}</span>`).join("")}</div>`,
  );
O.skills = (e) =>
  D(
    e.template,
    `<div class="panel-section"><div class="panel-section-title">// TECH_STACK</div><div style="display:flex;flex-wrap:wrap;gap:8px;">${I.skills.map((t) => `<div class="skill-chip" style="border-color:rgba(0,255,231,.12);background:rgba(0,255,231,.04);width:auto;padding:8px 14px;flex-direction:row;gap:8px;"><span style="font-size:16px">${t.icon}</span><span style="font-size:12px">${t.name}</span></div>`).join("")}</div></div><div class="panel-section"><div class="panel-section-title">// SOFT_SKILLS</div><div style="display:flex;flex-wrap:wrap;gap:6px;">${I.softSkills.map((t) => `<span class="hex-badge" style="background:rgba(0,255,231,.06);border-color:rgba(0,255,231,.12);clip-path:polygon(50% 0,100% 25%,100% 75%,50% 100%,0 75%,0 25%);padding:10px 16px;display:inline-block;">${t}</span>`).join("")}</div></div>`,
  );
O.hannover = (e) =>
  D(
    e.template,
    '<div class="panel-section"><div class="panel-section-title">// DEPLOYMENT_INFO</div><div class="panel-data-row"><span class="label">LOCATIE:</span><span class="value">Bielefeld · Hannover · Berlijn</span></div><div class="panel-data-row"><span class="label">DATUM:</span><span class="value">22–26 April 2026</span></div><div class="panel-data-row"><span class="label">TYPE:</span><span class="value">Internationale Studiereis (5 dagen)</span></div></div><div class="panel-section"><div class="panel-section-title">// CHRONOLOGY</div><div class="timeline"><div class="timeline-event"><div class="event-title">◈ BIELEFELD — Hochschule bezoek</div><div class="event-desc">Kennismaking met de Duitse academische aanpak. Studenten uit heel de wereld delen hun passie voor technologie. Een rustige start om te landen in een nieuwe omgeving.</div></div><div class="timeline-event"><div class="event-title">◈ HANNOVER MESSE — Beurs</div><div class="event-desc">Een van de grootste technologiebeurzen ter wereld. Autonome robots, neurale netwerken in actie. Het besef dat ik de technologie achter de machines begrijp was een enorme opsteker voor mijn zelfvertrouwen. Ik kon op gelijkwaardig niveau met experts communiceren.</div></div><div class="timeline-event"><div class="event-title">◈ BERLIJN — Chaos Computer Club</div><div class="event-desc">Diepgaand gesprek met security-experts over kwetsbaarheden en ethiek. Het zette me met beide voeten op de grond over hoe fragiel digitale systemen zijn. Berlijn zelf ontdekken was de kers op de taart.</div></div></div></div><div class="quote-box">"Waar ik drie jaar geleden naar een robot keek als magie, kon ik nu de neurale netwerken en de logica erachter herkennen."</div>',
  );
O.hackathon = (e) =>
  D(
    e.template,
    '<div class="panel-section"><div class="panel-section-title">// MISSION_SPECS</div><div class="panel-data-row"><span class="label">LOCATIE:</span><span class="value">Flanders Meeting Center, Antwerpen</span></div><div class="panel-data-row"><span class="label">DATUM:</span><span class="value">12 November 2025</span></div><div class="panel-data-row"><span class="label">CHALLENGE:</span><span class="value">Discoverers of the Great DBArrier Reef</span></div><div class="panel-data-row"><span class="label">TEAM:</span><span class="value">2 personen, 1 laptop</span></div><div class="panel-data-row"><span class="label">RESULT:</span><span class="value" style="color:var(--neon-cyan); font-weight: 700">✓ COMPLETED</span></div></div><div class="panel-section"><div class="panel-section-title">// LOG_OUTPUT</div><div class="terminal-line"><span class="prompt">></span> SSH verbinding — remote server <span class="status-ok">✓</span></div><div class="terminal-line"><span class="prompt">></span> Privilege escalatie via sudo script <span class="status-ok">ROOT ✓</span></div><div class="terminal-line"><span class="prompt">></span> SQL injection — kwetsbaarheden exploiten <span class="status-ok">EXPLOITED ✓</span></div><div class="terminal-line"><span class="prompt">></span> Database logs analyse — root cause found <span class="status-ok">✓</span></div><div class="terminal-line"><span class="prompt">></span> Alle challenges opgelost binnen tijdslimiet <span class="highlight">MISSION COMPLETE 100%</span></div></div><div class="panel-section"><div class="panel-section-title">// REFLECTION</div><div class="panel-body-text">Mijn eerste hackathon! Het werken op één laptop dwong ons tot pair programming. Mijn rustige houding was cruciaal toen de database bleef crashen — in plaats van in paniek te raken, bleef ik methodisch de mappenstructuur analyseren tot we de juiste ingang vonden.</div></div><div class="quote-box" style="border-left-color:var(--neon-pink);background:rgba(255,45,120,.06)">"Calm under pressure — methodisch blijven denken als de deadline dichtbij komt."</div>',
  );
O.sap = (e) =>
  D(
    e.template,
    `<div class="panel-section"><div class="panel-section-title">// LAB_INTEL</div><div class="panel-data-row"><span class="label">ORGANISATIE:</span><span class="value">Flexso (Chronos Group), Hasselt</span></div><div class="panel-data-row"><span class="label">DATUM:</span><span class="value">9–16 Oktober 2025</span></div><div class="panel-data-row"><span class="label">FOCUS:</span><span class="value">Generatieve AI · SAP BTP · Joule Agents</span></div></div><div class="panel-section"><div class="panel-section-title">// CONCEPTS_MASTERED</div><div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px;">${[
      { t: "MODEL DISTILLATIE", s: "Teacher→Student kennisoverdracht" },
      { t: "JOULE AGENTS", s: "AI-gestuurde assistenten" },
      { t: "TRANSFORMER ARCHITECTUUR", s: "LeNet tot GPT" },
      { t: "SAP BTP ECOSYSTEEM", s: "Enterprise AI platform" },
    ]
      .map(
        (t) =>
          `<div class="tech-card" style="width:100%; margin:0;"><div class="card-title">${t.t}</div><div class="card-sub">${t.s}</div></div>`,
      )
      .join(
        "",
      )}</div></div><div class="panel-section"><div class="panel-section-title">// REFLECTION</div><div class="panel-body-text">Ik had verwacht dat het bouwen van de festival-app via SAP BTP een vlot proces zou zijn. De realiteit: de omgeving correct configureren vereist nog steeds diepgaande technische kennis. Dit leerde me dat je als AI-specialist elke laag van het systeem moet begrijpen om de controle te behouden. Model distillatie opende mijn ogen — het slaat de brug tussen research en bruikbare software voor eindgebruikers.</div></div><div class="quote-box" style="border-left-color:var(--neon-cyan);background:rgba(0,255,231,.06)">"Een krachtige tool versnelt het proces, maar je moet weten wat er onder de motorkap gebeurt."</div>`,
  );
O.seminaries = (e) =>
  D(
    e.template,
    `<div class="panel-section"><div class="panel-section-title">// AGGREGATED_TIME</div><div style="font-family:'Orbitron',sans-serif;font-size:28px;color:var(--neon-amber);text-shadow: 0 0 20px var(--neon-amber)">TOTAL: 23u</div></div><div class="panel-section"><div class="panel-section-title">// ATTENDANCE_LOG</div>${I.seminars.map((t) => `<div class="seminar-entry"><span class="sem-date">[${t.date}]</span><span class="sem-title">${t.title}</span><span class="sem-org">· ${t.org} (${t.dur})</span><div style="font-size:13px;color:var(--text-secondary);margin-top:2px;padding-left:80px;">${t.desc}</div></div>`).join("")}</div>`,
  );
O.future = (e) =>
  D(
    e.template,
    `<div class="panel-section"><div class="panel-section-title">// STRATEGIC_GOAL</div><div class="panel-body-text">Slimme code + fysieke hardware = robots die verschil maken.</div></div><div class="panel-section"><div class="panel-section-title">// PROJECTION_ROADMAP</div><div class="roadmap-grid" style="display:grid; grid-template-columns: 1fr 1fr; gap:10px;">${[
      { y: "2022", d: "Gestart PXL — AI", f: 1 },
      { y: "2024", d: "Specialisatie AI", f: 1 },
      { y: "2026", d: "Afstuderen PXL", f: 0 },
      { y: "2028", d: "Senior AI/Robotics", f: 0 },
    ]
      .map(
        (t) =>
          `<div class="roadmap-item ${t.f ? "done" : ""}" style="background:rgba(255,255,255,0.03); padding:10px; border-radius:4px;"><span class="rm-year">${t.y}</span>: <span class="rm-desc">${t.d}</span></div>`,
      )
      .join(
        "",
      )}</div></div><div class="panel-section"><div class="panel-section-title">// COMM_CHANNELS</div><div style="display:flex; flex-wrap:wrap; gap:10px;"><a class="contact-btn" href="https://linkedin.com/in/luisalbertocadete" target="_blank">LINKEDIN</a><a class="contact-btn" href="mailto:lluisalberto24@gmail.com">EMAIL</a><a class="contact-btn contact-btn--cv" href="/Luis_Cadete_CV.pdf.pdf" download style="color:var(--neon-amber);border-color:var(--neon-amber)">↓ DOWNLOAD_CV</a></div></div>`,
  );
O.projects = (e) =>
  D(
    e.template,
    `<div class="panel-section"><div class="panel-section-title">// BIG_DATA & MLOPS</div><div class="panel-body-text">End-to-end CitiBike pipeline: NiFi ingestie, Kafka streaming, Spark batch/live naar HDFS en InfluxDB. DVC versionering, Jenkins CI/CD, MLflow tracking, Evidently drift detectie.</div><div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:6px;">${["NiFi", "Kafka", "Spark", "InfluxDB", "Grafana", "Jenkins", "DVC", "MLflow"].map((t) => `<span class="hex-badge" style="font-size:10px;padding:3px 8px;">${t}</span>`).join("")}</div></div><div class="panel-section"><div class="panel-section-title">// GESTURE DRONE CONTROL</div><div class="panel-body-text">AR.Drone besturing via handgebaren in Gazebo kantooromgeving. MediaPipe real-time gesture recognition, custom gesture classifier stuurt ROS-commands.</div><div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:6px;">${["ROS Noetic", "Gazebo", "MediaPipe", "OpenCV", "YOLO"].map((t) => `<span class="hex-badge" style="font-size:10px;padding:3px 8px;">${t}</span>`).join("")}</div></div><div class="panel-section"><div class="panel-section-title">// GLUE DETECTOR VISION</div><div class="panel-body-text">Industriele vision pipeline voor baksteen kwaliteitscontrole. Twee-traps deep learning: Mask2Former voor extractie, SegFormer voor lijm-detectie en ratio-berekening.</div><div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:6px;">${["Mask2Former", "SegFormer", "DVC", "Docker", "ROS 2"].map((t) => `<span class="hex-badge" style="font-size:10px;padding:3px 8px;">${t}</span>`).join("")}</div></div><div class="panel-section"><div class="panel-section-title">// OCR-MATCHING SYSTEM</div><div class="panel-body-text">Backend voor foto/tekst matching via OCR. Spring Boot microservices, PostgreSQL metadata, MinIO object storage voor 30MB+ images.</div><div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:6px;">${["Spring Boot 3", "Java 21", "PostgreSQL", "MinIO", "Swagger", "JaCoCo"].map((t) => `<span class="hex-badge" style="font-size:10px;padding:3px 8px;">${t}</span>`).join("")}</div></div><div class="panel-section"><div class="panel-section-title">// DEEP LEARNING & NLP</div><div class="panel-body-text">6 AI-projecten: Credit Card Fraud Detection, Buzzwatch (CNN+Transfer), NLP text classification (Reliable vs Fake). Focus op Explainable AI (LIME/SHAP).</div><div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:6px;">${["TensorFlow", "PyTorch", "Scikit-learn", "XAI", "Jupyter"].map((t) => `<span class="hex-badge" style="font-size:10px;padding:3px 8px;">${t}</span>`).join("")}</div></div>`,
  );
O.reflection = (e) =>
  D(
    e.template,
    '<div class="panel-section"><div class="panel-section-title">// TRANSFORMATIE</div><div class="panel-body-text">Als ik terugkijk naar de Luis van drie jaar geleden — die vaak lessen skipte, motivatie miste en midden in een les vertrok — zie ik een persoon die ik nauwelijks herken. Vandaag ben ik een gedreven professional die begrijpt dat succes niet vanzelf komt, maar het resultaat is van discipline, focus en hard werk. Die groei is niet alleen technisch, maar ook mentaal. POP-sessies over concentratie en groepsdynamiek hebben me geleerd hoe ik mijn focus kan bewaken in een wereld vol afleidingen.</div></div><div class="panel-section"><div class="panel-section-title">// X-FACTOR</div><div class="panel-body-text"><b>Passie & Empathie:</b> Van vaders computeratelier naar AI en robotica — technologie zit in mijn bloed.<br><b>Ondernemerschap:</b> Plannen voor eigen zaak in de toekomst, met de ambitie om een probleem te vinden waar ik een oplossing voor kan bouwen.<br><b>Innovatie:</b> Machine learning, neurale netwerken, generatieve AI — ik duik diep in de technologie.<br><b>Samenwerken:</b> Internationale beurzen, hackathons, team challenges, POP-sessies teambuilding en groepswerken — ik werk het best met mensen die kunnen meebewegen met verandering.<br><b>Multidisciplinair:</b> Software en hardware combineren om fysieke robots intelligentie te geven.</div></div><div class="panel-section"><div class="panel-section-title">// TOEKOMST</div><div class="panel-body-text">Eerst ervaring opdoen bij een innovatief roboticabedrijf met een warme sfeer, waar ik kan leren van de beste experts. Daarna de stap naar ondernemerschap — een specifiek probleem vinden waar ik een oplossing voor kan bouwen die echt een verschil maakt. De weg van DR via Spanje naar Belgie heeft me de flexibiliteit en veerkracht gegeven die ik nodig heb om te slagen.</div></div><div class="panel-section"><div class="panel-section-title">// MIJN BOODSCHAP</div><div class="panel-body-text" style="font-style:italic;color:var(--neon-cyan);">"Doe de moeite en lever het werk, want dat is de enige manier om je dromen waar te maken."</div></div>',
  );
O.connect = (e) =>
  D(
    e.template,
    '<div class="panel-section"><div class="panel-section-title">// DIRECTE_KANALEN</div><div class="panel-data-row"><span class="label">LINKEDIN:</span><span class="value"><a href="https://linkedin.com/in/luisalbertocadete" target="_blank" style="color:var(--neon-cyan)">/in/luisalbertocadete</a></span></div><div class="panel-data-row"><span class="label">GITHUB:</span><span class="value"><a href="https://github.com/LuisCadetePXL" target="_blank" style="color:var(--neon-cyan)">LuisCadetePXL</a></span></div><div class="panel-data-row"><span class="label">EMAIL:</span><span class="value">lluisalberto24@gmail.com</span></div><div class="panel-data-row"><span class="label">TEL:</span><span class="value">+32466252507</span></div><div class="panel-data-row"><span class="label">LOCATIE:</span><span class="value">Leopoldsburg, Belgie</span></div></div><div class="panel-section"><div class="panel-section-title">// DOWNLOADS</div><div style="display:flex;flex-wrap:wrap;gap:10px;"><a class="contact-btn" href="/Luis_Cadete_CV.pdf.pdf" download style="color:var(--neon-amber);border-color:var(--neon-amber)">↓ CV</a></div></div>',
  );
function $(e) {
  if (e < 0 || e >= I.zones.length) return;
  X = e;
  const t = I.zones[e],
    i = document.getElementById("zone-popup"),
    a = document.getElementById("popup-overlay");
  (i.classList.remove("is-open"),
    i.offsetWidth,
    x.add(t.id),
    (document.getElementById("zonesCount").textContent = x.size),
    (document.getElementById("popupZoneId").textContent = t.id),
    (document.getElementById("popupZoneTitle").textContent = t.title),
    (document.getElementById("popupCoords").textContent =
      `[${t.tile[0]},${t.tile[1]}]`),
    (document.getElementById("popupCounter").textContent =
      `${e + 1}/${I.zones.length}`),
    (document.getElementById("popupBody").innerHTML = (
      O[t.template] || (() => "")
    )(t)),
    (document.getElementById("popupPrev").disabled = e <= 0),
    (document.getElementById("popupNext").disabled = e >= I.zones.length - 1),
    a.classList.add("is-visible"),
    i.classList.add("is-open"),
    (i.style.borderColor = t.accent + "66"));
  const o = document.createElement("div");
  ((o.className = "popup-scan-line"),
    document.getElementById("popupBody").appendChild(o),
    setTimeout(() => o.remove(), 1500),
    setTimeout(
      () =>
        document
          .querySelectorAll(".bar-fill")
          .forEach((r) => (r.style.width = r.dataset.pct + "%")),
      400,
    ));
}
function we() {
  (document.getElementById("popup-overlay").classList.remove("is-visible"),
    document.getElementById("zone-popup").classList.remove("is-open"),
    (X = -1),
    setTimeout(() => {
      l.targetZoom = m.ZOOM_DEFAULT;
    }, 300));
}
document.getElementById("popupClose").addEventListener("click", we);
document.getElementById("popup-overlay").addEventListener("click", we);
document.getElementById("popupPrev").addEventListener("click", () => $(X - 1));
document.getElementById("popupNext").addEventListener("click", () => $(X + 1));
const me = document.getElementById("hamburger"),
  te = document.getElementById("menu-dropdown");
te.innerHTML = I.zones
  .map(
    (e, t) =>
      `<a href="#" data-zone="${t}"><span class="accent-dot" style="background:${e.accent}"></span>${e.id}</a>`,
  )
  .join("");
me.addEventListener("click", () => {
  (me.classList.toggle("active"), te.classList.toggle("open"));
});
te.addEventListener("click", (e) => {
  const t = e.target.closest("a");
  if (!t) return;
  e.preventDefault();
  const i = parseInt(t.dataset.zone);
  if (!isNaN(i) && S[i]) {
    const a = S[i];
    pe(a.entranceTileX, a.entranceTileY, (o) => {
      o && setTimeout(() => $(i), 600);
    });
  }
  (me.classList.remove("active"), te.classList.remove("open"));
});
document.addEventListener("click", (e) => {
  !e.target.closest("#hamburger") &&
    !e.target.closest("#menu-dropdown") &&
    (me.classList.remove("active"), te.classList.remove("open"));
});
function rt() {
  const e = _.width,
    t = _.height,
    i = e / m.GRID;
  ((z.fillStyle = "rgba(5,10,15,.95)"), z.fillRect(0, 0, e, t));
  for (const a of S) {
    const o = a.tx * i + i / 2,
      r = a.ty * i + i / 2;
    ((z.fillStyle = x.has(a.id) ? a.color : "rgba(42,85,112,.5)"),
      z.fillRect(o - (a.w * i) / 2, r - (a.h * i) / 2, a.w * i, a.h * i));
  }
  ((z.fillStyle = "#00ffe7"),
    z.beginPath(),
    z.arc(c.tileX * i, c.tileY * i, 2.5, 0, Math.PI * 2),
    z.fill());
}
_.addEventListener("click", (e) => {
  const t = _.getBoundingClientRect(),
    i = ((e.clientX - t.left) / t.width) * _.width,
    a = ((e.clientY - t.top) / t.height) * _.height,
    o = _.width / m.GRID,
    r = A(i / o, a / o);
  ((l.targetX = k / 2 - r.x), (l.targetY = w / 2 - r.y));
});
const Be = document.getElementById("boot"),
  se = document.getElementById("boot-text"),
  dt = document.getElementById("boot-skip"),
  ct = [
    "INITIALIZING PORTFOLIO_OS v4.0...",
    "LOADING CITY_MAP.............. OK",
    "DEPLOYING UNIT_LUIS........... OK",
    "ESTABLISHING HUD_INTERFACE.... OK",
    "CALIBRATING NEON_GRID......... OK",
    "",
    "WELCOME TO THE CITY.",
    "",
  ];
async function pt() {
  se.textContent = "";
  for (const e of ct) {
    if (oe) return;
    if (e === "") {
      se.textContent += `
`;
      continue;
    }
    for (let t = 0; t < e.length; t++) {
      if (oe) return;
      ((se.textContent += e[t]),
        await new Promise((i) => setTimeout(i, 20 + Math.random() * 20)));
    }
    ((se.textContent += `
`),
      await new Promise((t) => setTimeout(t, 150)));
  }
  (await new Promise((e) => setTimeout(e, 500)),
    oe || (Be.classList.add("hidden"), (ke = !0), Ne()));
}
function mt() {
  ((oe = !0), Be.classList.add("hidden"), (ke = !0), Ne());
}
dt.addEventListener("click", mt);
setTimeout(pt, 300);
function Ne() {
  ((l.targetZoom = m.ZOOM_WELCOME), Te(), setTimeout(() => vt(), 600));
}
function vt() {
  (document
    .getElementById("welcome-dialog-container")
    .classList.add("is-visible"),
    document.getElementById("screen-overlay").classList.add("visible"),
    (ee = !0),
    _e());
}
function _e() {
  if (!ee) return;
  Y.clearRect(0, 0, 160, 220);
  const e = Date.now(),
    t = Math.sin(e * 0.002) * 3,
    i = 0.06 + Math.sin(e * 0.003) * 0.03;
  ((Y.fillStyle = `rgba(0,255,231,${i})`),
    Y.beginPath(),
    Y.ellipse(80, 210 + t, 45, 12, 0, 0, Math.PI * 2),
    Y.fill(),
    Le(Y, 80, 105 + t, 3.2, !0),
    ee && requestAnimationFrame(_e));
}
document.getElementById("btn-explore").addEventListener("click", ut);
document.getElementById("btn-chat").addEventListener("click", gt);
function ut() {
  (document
    .getElementById("welcome-dialog-container")
    .classList.remove("is-visible"),
    document.getElementById("screen-overlay").classList.remove("visible"),
    (ee = !1),
    (c.attentionPose = !1),
    (l.targetZoom = m.ZOOM_DEFAULT),
    setTimeout(() => {
      (document.getElementById("hud-identity").classList.add("visible"),
        document.getElementById("hud-minimap").classList.add("visible"),
        document.getElementById("hud-zones").classList.add("visible"),
        document.getElementById("hamburger").classList.add("visible"),
        document.getElementById("hud-top-right").classList.add("visible"),
        document.getElementById("hud-instructions").classList.add("visible"),
        setTimeout(
          () =>
            document.getElementById("hud-instructions").classList.add("hidden"),
          8e3,
        ));
    }, 500),
    (document.getElementById("statusFill").style.width = "80%"));
}
function gt() {
  (document
    .getElementById("welcome-dialog-container")
    .classList.remove("is-visible"),
    document.getElementById("screen-overlay").classList.remove("visible"),
    (ee = !1),
    (c.attentionPose = !1),
    De());
}
const J = window.speechSynthesis;
function N(e) {
  de = e;
  const t = document.getElementById("status-dot"),
    i = document.getElementById("status-label"),
    a = document.getElementById("chat-thinking-bar");
  switch (((t.className = "status-dot"), e)) {
    case "idle":
      ((i.textContent = "STANDBY"), a.classList.remove("active"));
      break;
    case "listening":
      ((i.textContent = "🎤 LUISTERT..."), a.classList.remove("active"));
      break;
    case "thinking":
      (t.classList.add("thinking"),
        (i.textContent = "VERWERKT..."),
        a.classList.add("active"));
      break;
    case "talking":
      (t.classList.add("talking"),
        (i.textContent = "SPREEKT"),
        a.classList.remove("active"));
      break;
    case "error":
      (t.classList.add("error"),
        (i.textContent = "FOUT"),
        a.classList.remove("active"));
      break;
  }
}
function De() {
  ((L = !0),
    document.getElementById("chat-screen").classList.add("visible"),
    N("idle"),
    setTimeout(
      () =>
        ye(
          "Hey! Ik ben LUIS_BOT — de digitale versie van Luis, maar dan zonder de koffiepauzes. Stel gerust je vraag over mijn skills, ervaringen of ambitieuze plannen voor werelddominatie... via robotica dan, uiteraard. 🤖",
        ),
      400,
    ),
    le || ze());
}
function je() {
  ((L = !1),
    document.getElementById("chat-screen").classList.remove("visible"),
    document.getElementById("hud-identity").classList.add("visible"),
    document.getElementById("hud-minimap").classList.add("visible"),
    document.getElementById("hud-zones").classList.add("visible"),
    document.getElementById("hamburger").classList.add("visible"),
    document.getElementById("hud-top-right").classList.add("visible"));
}
document.getElementById("chat-back-btn").addEventListener("click", je);
function ye(e) {
  const t = document.getElementById("chat-messages"),
    i = document.createElement("div");
  ((i.className = "chat-msg chat-msg--robot"),
    (i.innerHTML = `<span class="chat-msg__label">UNIT_LUIS</span><div class="chat-msg__bubble">${e}</div>`),
    t.appendChild(i),
    (t.scrollTop = t.scrollHeight));
}
function ft(e) {
  const t = document.getElementById("chat-messages"),
    i = document.createElement("div");
  ((i.className = "chat-msg chat-msg--user"),
    (i.innerHTML = `<span class="chat-msg__label">VISITOR</span><div class="chat-msg__bubble">${e}</div>`),
    t.appendChild(i),
    (t.scrollTop = t.scrollHeight));
}
const ve = document.getElementById("chat-input"),
  ht = document.getElementById("btn-send"),
  ue = document.getElementById("btn-mic"),
  Ae = document.getElementById("btn-tts"),
  yt = [
    {
      match: (e) =>
        /wie|voorstellen|oud|leeftijd|jaar|parcours|afkomst/i.test(e),
      reply:
        "Ik ben Luis, 22 jaar, AI-student aan PXL. Geboren in Spanje, opgegroeid in de Dominicaanse Republiek, en nu woonachtig in België. Mijn passie ligt bij AI en robotica.",
    },
    {
      match: (e) =>
        /skill|kennis|programmeer|python|ml|ai|taal|ervaring/i.test(e),
      reply:
        "Mijn kernexpertise is Python en Machine Learning. Ik werk veel met neurale netwerken, SQL en Linux. Ik volg ook SAP BTP innovaties op de voet.",
    },
    {
      match: (e) => /kracht|kalm|pressure|sterk|eigenschap|sport/i.test(e),
      reply:
        "Mijn grootste kracht is kalmte onder druk. Dit heb ik ontwikkeld door Braziliaans Jiu-Jitsu en honkbal. Ik blijf methodisch, zelfs bij complexe technische uitdagingen.",
    },
    {
      match: (e) => /toekomst|plan|ambitie|doel|startup|afstuderen/i.test(e),
      reply:
        "In 2026 studeer ik af. Mijn doel is om als Junior in de robotica sector te starten en uiteindelijk mijn eigen tech-startup op te richten.",
    },
    {
      match: (e) => /hack|hackathon|challenge|antwerpen/i.test(e),
      reply:
        "Tijdens Hack The Future in Antwerpen kraakten we als team alle database en privilege escalation challenges. Kalm blijven was daar de sleutel tot succes.",
    },
    {
      match: (e) => /duitsland|hannover|berlijn|messe|studiereis/i.test(e),
      reply:
        "De Hannover Messe was indrukwekkend. Het herkennen van neurale netwerken in industriële robots gaf me veel vertrouwen in mijn eigen opleiding.",
    },
    {
      match: (e) => /sap|flexso|innovatie|btp/i.test(e),
      reply:
        "Bij Flexso heb ik gewerkt met model distillatie en Joule Agents. Het leerde me dat je elke laag van een AI-systeem moet begrijpen om het echt te beheersen.",
    },
    {
      match: (e) => /contact|email|linkedin|github|cv/i.test(e),
      reply:
        "Je kunt me bereiken via LinkedIn (luisalbertocadete) of e-mail (lluisalberto24@gmail.com). Mijn CV is ook direct downloadbaar in dit HUD.",
    },
    {
      match: (e) =>
        /project|school|big.data|mlops|drone|gesture|glue|detector|ocr|matching|deep.learning/i.test(
          e,
        ),
      reply:
        "Ik heb 5 grote projecten: Big Data/MLOps pipeline (NiFi/Kafka/Spark), Gesture Drone (ROS), Glue Detector (vision AI), OCR-Matching (Spring Boot), en Deep Learning/NLP (fraud detection). ZONE 7 voor details!",
    },
    {
      match: (e) => /reflectie|groei|transformatie|x-factor/i.test(e),
      reply:
        "Mijn grootste transformatie? Van student die lessen skipte naar een gedreven AI-professional. Discipline, focus en de ambitie om robots te bouwen die verschil maken. ZONE 8!",
    },
  ];
async function Se() {
  const e = ve.value.trim();
  if (!e) return;
  if (
    (ft(e),
    (ve.value = ""),
    N("thinking"),
    ![
      "luis",
      "pxl",
      "ai",
      "informatica",
      "tech",
      "robot",
      "python",
      "ml",
      "werk",
      "studie",
      "project",
      "skill",
      "ervaring",
      "hannover",
      "hackathon",
      "sap",
      "leer",
      "traject",
      "wie",
      "wat",
      "hoe",
    ].some((o) => e.toLowerCase().includes(o)) && e.length > 5)
  ) {
    const o =
      "Sorry, mijn databank is strikt beperkt tot informatie over Luis en zijn tech-expertise. Stel gerust een vraag over zijn parcours of AI!";
    if (
      (V.push({ role: "user", content: e }),
      V.push({ role: "assistant", content: o }),
      N("talking"),
      ye(o),
      Q && J)
    ) {
      const r = new SpeechSynthesisUtterance(o);
      ((r.lang = "nl-NL"), J.speak(r));
    }
    setTimeout(() => N("idle"), 500);
    return;
  }
  V.push({ role: "user", content: e });
  let a = await askOllama(e, V.slice(-10));
  if (!a) {
    for (const o of yt)
      if (o.match(e)) {
        a = o.reply;
        break;
      }
    a ||
      (a =
        "Interessante vraag over mijn parcours! Ik kan je alles vertellen over mijn studies AI @ PXL, mijn skills in Python/ML, of mijn ervaringen bij de Hannover Messe en SAP AI Lab. Waar wil je meer over weten?");
  }
  if (
    (V.push({ role: "assistant", content: a }), N("talking"), ye(a), Q && J)
  ) {
    J.cancel();
    const o = new SpeechSynthesisUtterance(a);
    ((o.lang = "nl-NL"),
      (o.rate = 0.9),
      (o.pitch = 0.95),
      (o.onstart = () => N("talking")),
      (o.onend = () => N("idle")),
      J.speak(o));
    return;
  }
  setTimeout(() => N("idle"), 500);
}
ht.addEventListener("click", Se);
ve.addEventListener("keydown", (e) => {
  e.key === "Enter" && Se();
});
Ae.addEventListener("click", () => {
  ((Q = !Q), (Ae.style.opacity = Q ? "1" : ".4"));
});
let j = null;
if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
  const e = window.SpeechRecognition || window.webkitSpeechRecognition;
  ((j = new e()),
    (j.lang = "nl-NL"),
    (j.interimResults = !1),
    (j.onresult = (t) => {
      ((ve.value = t.results[t.results.length - 1][0].transcript), Se());
    }),
    (j.onstart = () => {
      (ue.classList.add("is-active"), N("listening"));
    }),
    (j.onend = () => {
      (ue.classList.remove("is-active"), de === "listening" && N("idle"));
    }));
}
ue.addEventListener("click", () => {
  j && (ue.classList.contains("is-active") ? j.stop() : j.start());
});
function ze() {
  if (!L && !le) return;
  ((le = !0), (B.fillStyle = "#020609"), B.fillRect(0, 0, 200, 280));
  const e = B.createRadialGradient(100, 260, 0, 100, 260, 100);
  if (
    (e.addColorStop(0, "rgba(0,255,231,.05)"),
    e.addColorStop(1, "rgba(0,255,231,0)"),
    (B.fillStyle = e),
    B.beginPath(),
    B.arc(100, 260, 100, 0, Math.PI * 2),
    B.fill(),
    Le(B, 100, 140, 3.8, !1, de),
    de === "listening")
  )
    for (let t = 0; t < 3; t++) {
      const i = 4 + Math.sin(Date.now() * 0.01 + t * 1.2) * 8;
      ((B.fillStyle = "rgba(0,255,231,.8)"),
        B.fillRect(118 + t * 8, 140 - 6 * 3.8 - i / 2, 3, i));
    }
  L ? requestAnimationFrame(ze) : (le = !1);
}
document
  .getElementById("cv-download-btn")
  .addEventListener("click", function (e) {
    fetch(this.href, { method: "HEAD" })
      .then((t) => {
        t.ok ||
          (e.preventDefault(),
          alert("CV niet gevonden. Contacteer Luis via LinkedIn."));
      })
      .catch(() => {});
  });
document.getElementById("lightbox").addEventListener("click", function () {
  this.classList.remove("visible");
});
document.getElementById("chat-mode-btn").addEventListener("click", () => {
  L ||
    ([
      "hud-identity",
      "hud-minimap",
      "hud-zones",
      "hamburger",
      "hud-top-right",
      "hud-instructions",
    ].forEach((e) => document.getElementById(e).classList.remove("visible")),
    De());
});
let Oe = 0;
function Ge() {
  ((k = window.innerWidth),
    (w = window.innerHeight),
    (C.width = k),
    (C.height = w),
    (_.width = 130),
    (_.height = 130),
    (be = k / 2),
    (Ie = w / 2 - 100),
    it());
}
function He(e) {
  const t = Math.min((e - Oe) / 1e3, 0.05);
  ((Oe = e),
    X < 0 && !L && (Te(), qe(t), We()),
    (l.x += (l.targetX - l.x) * 0.08),
    (l.y += (l.targetY - l.y) * 0.08),
    (l.zoom += (l.targetZoom - l.zoom) * 0.08),
    Pe.clearRect(0, 0, k, w),
    tt(),
    [...S, ...re]
      .sort((a, o) => a.tx + a.ty - (o.tx + o.ty))
      .forEach((a) => nt(a)),
    Ue(),
    st(),
    Le(s),
    window.matchMedia("(prefers-reduced-motion:reduce)").matches || at(),
    rt(),
    requestAnimationFrame(He));
}
C.addEventListener("click", (e) => {
  var g;
  if (
    !ke ||
    document.getElementById("zone-popup").classList.contains("is-open") ||
    L
  )
    return;
  const t = e.clientX,
    i = e.clientY,
    a = Re(t, i);
  if (a) {
    const d = S.indexOf(a);
    d >= 0 &&
      pe(a.entranceTileX, a.entranceTileY, (f) => {
        f &&
          ((l.targetZoom = m.ZOOM_BUILDING),
          (c.isScanning = !0),
          (c.scanTimer = 0),
          setTimeout(() => $(d), 800));
      });
    return;
  }
  const o = Ke(t, i),
    r = Math.round(o.tx),
    n = Math.round(o.ty);
  r >= 0 &&
    r < m.GRID &&
    n >= 0 &&
    n < m.GRID &&
    (g = U[n]) != null &&
    g[r] &&
    (K.push({ x: t, y: i, r: 2, maxR: 20, life: 1 }),
    (l.targetZoom = m.ZOOM_DEFAULT),
    pe(r, n));
});
C.addEventListener("mousemove", (e) => {
  const t = Re(e.clientX, e.clientY);
  ((G = t), S.forEach((a) => (a.hovered = a === t)));
  const i = document.getElementById("tooltip");
  t &&
  !document.getElementById("zone-popup").classList.contains("is-open") &&
  !L
    ? ((i.textContent = `[ CLICK TO ENTER ] ${t.id}`),
      (i.style.left = e.clientX + 16 + "px"),
      (i.style.top = e.clientY - 30 + "px"),
      i.classList.add("visible"))
    : i.classList.remove("visible");
});
C.addEventListener("mousedown", (e) => {
  L ||
    ((Ee = !0),
    (q = { x: l.targetX, y: l.targetY, startX: e.clientX, startY: e.clientY }));
});
window.addEventListener("mousemove", (e) => {
  Ee &&
    !L &&
    ((l.targetX = q.x + (e.clientX - q.startX) * 1.5),
    (l.targetY = q.y + (e.clientY - q.startY) * 1.5));
});
window.addEventListener("mouseup", () => {
  Ee = !1;
});
C.addEventListener(
  "wheel",
  (e) => {
    (e.preventDefault(),
      L ||
        (l.targetZoom = Math.max(
          m.ZOOM_MIN,
          Math.min(m.ZOOM_MAX, l.targetZoom - e.deltaY * 0.001),
        )));
  },
  { passive: !1 },
);
document.addEventListener("keydown", (e) => {
  if (
    (e.key === "Escape" &&
      (document.getElementById("zone-popup").classList.contains("is-open")
        ? we()
        : L && je()),
    e.key === "Tab" &&
      !document.getElementById("zone-popup").classList.contains("is-open") &&
      !L)
  ) {
    e.preventDefault();
    const t = S.filter((o) => !x.has(o.id));
    if (!t.length) return;
    const i = G ? t.indexOf(G) : -1,
      a = t[(i + 1) % t.length];
    if (a) {
      const o = A(a.tx, a.ty);
      ((l.targetX = k / 2 - o.x),
        (l.targetY = k / 2 - o.y),
        (G = a),
        S.forEach((r) => (r.hovered = r === a)));
    }
  }
  if (
    e.key === "Enter" &&
    G &&
    !document.getElementById("zone-popup").classList.contains("is-open") &&
    !L
  ) {
    const t = S.indexOf(G);
    t >= 0 &&
      pe(G.entranceTileX, G.entranceTileY, (i) => {
        i &&
          ((l.targetZoom = m.ZOOM_BUILDING),
          (c.isScanning = !0),
          (c.scanTimer = 0),
          setTimeout(() => $(t), 800));
      });
  }
  (e.key === "ArrowLeft" &&
    document.getElementById("zone-popup").classList.contains("is-open") &&
    $(X - 1),
    e.key === "ArrowRight" &&
      document.getElementById("zone-popup").classList.contains("is-open") &&
      $(X + 1));
});
let ge, fe;
C.addEventListener("touchstart", (e) => {
  const t = e.touches[0];
  ((ge = t.clientX), (fe = t.clientY));
});
C.addEventListener(
  "touchmove",
  (e) => {
    if (
      (e.preventDefault(),
      !L &&
        e.touches.length === 1 &&
        !document.getElementById("zone-popup").classList.contains("is-open"))
    ) {
      const t = e.touches[0].clientX - ge,
        i = e.touches[0].clientY - fe;
      (Math.abs(t) > 10 || Math.abs(i) > 10) &&
        ((l.targetX += t * 1.5),
        (l.targetY += i * 1.5),
        (ge = e.touches[0].clientX),
        (fe = e.touches[0].clientY));
    }
  },
  { passive: !1 },
);
C.addEventListener("touchend", (e) => {
  if (e.changedTouches.length === 1) {
    const t = e.changedTouches[0];
    Math.abs(t.clientX - ge) < 8 &&
      Math.abs(t.clientY - fe) < 8 &&
      C.dispatchEvent(
        new MouseEvent("click", { clientX: t.clientX, clientY: t.clientY }),
      );
  }
});
window.addEventListener("resize", Ge);
Ge();
Ve();
Qe();
Xe();
Ye();
requestAnimationFrame(He);
Te();
l.x = l.targetX;
l.y = l.targetY;
window.innerWidth < 768 && ((l.targetZoom = 0.85), (l.zoom = 0.85));
console.log("🤖 v4.0 Portfolio — Vite + 40×40 + Ollama + Gallery");
