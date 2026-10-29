(() => {
  const q = (x) => document.querySelector(x),
    qa = (x) => document.querySelectorAll(x);
  const HAS_IO = "IntersectionObserver" in window;
  window.io = HAS_IO
    ? new IntersectionObserver(
        (es) =>
          es.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("on");
              io.unobserve(e.target);
            }
          }),
        { threshold: 0.01, rootMargin: "0px 0px -40px 0px" },
      )
    : {
        observe: (el) => el.classList.add("on"),
        unobserve() {},
      };
  qa(".rv,.steps").forEach((el) => io.observe(el));
  const co = HAS_IO ? new IntersectionObserver(
    (es) =>
      es.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target,
          n = +el.dataset.n,
          t = performance.now();
        (function f(now) {
          const k = Math.min(1, (now - t) / 1000);
          el.textContent =
            (n % 1 ? (n * k).toFixed(1) : Math.round(n * k)) + el.dataset.s;
          if (k < 1) requestAnimationFrame(f);
        })(t);
        co.unobserve(el);
      }),
    { threshold: 0.3 },
  ) : { observe: (el) => (el.textContent = el.dataset.n + el.dataset.s) };
  qa("[data-n]").forEach((el) => co.observe(el));
  const hero = q(".hero"),
    st = q("#stage");
  if (matchMedia("(hover:hover)").matches)
    hero.addEventListener("pointermove", (e) => {
      const r = innerWidth / 2,
        y = innerHeight / 2;
      st.querySelectorAll(".fc").forEach((c) => {
        const d = +c.dataset.d;
        c.style.transform = `translate(${((e.clientX - r) / r) * d}px,${((e.clientY - y) / y) * d}px)`;
      });
    });
  const mb = q("#mb"),
    nl = q("#nl");
  const shut = (f) => {
    nl.classList.remove("open");
    mb.setAttribute("aria-expanded", "false");
    if (f) mb.focus();
  };
  mb.onclick = () => {
    const o = nl.classList.toggle("open");
    mb.setAttribute("aria-expanded", o);
  };
  nl.onclick = (e) => {
    if (e.target.closest("a")) shut();
  };
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nl.classList.contains("open")) shut(1);
  });
})();

const P = [
  {
    id: "gv",
    c: "var(--royal)",
    tag: "AI · SaaS · Voice Technology",
    t: "GrootVox — AI Voice Agent Platform",
    u: "https://grootvox.ai/",
    d: "An AI Voice Agent platform designed for real business conversations, helping businesses automate calls, qualify leads, book appointments, answer customer questions and manage follow-ups.",
    tags: ["UI/UX design", "Design system", "AI product experience", "HTML/CSS handoff"],
    sc: ["Hero", "Solutions", "AI agent", "Analytics", "Pricing", "Industries"],
    f: [
      ["Challenge", "Explain a technical AI voice product clearly to business buyers across inbound and outbound calling, handoff, booking and industry use cases."],
      ["UX Thinking", "Structured the information architecture and visual hierarchy so each capability and industry solution is easy to scan and compare."],
      ["Interface", "Designed directly for the live product with reusable UI patterns and responsive layouts, then worked with developers through HTML/CSS implementation and handoff."],
      ["Outcome", "A live, responsive AI SaaS website with a consistent component language."],
    ],
  },
  {
    id: "at",
    c: "var(--purple)",
    tag: "E-commerce · Fashion · UX",
    t: "Atelise — Custom Fashion & E-commerce Experience",
    u: "https://www.wearatelise.com/",
    d: "A premium fashion and e-commerce experience focused on a refined customer journey, from product discovery to checkout.",
    tags: ["E-commerce UX", "Product discovery", "Responsive UI", "Visual storytelling"],
    sc: ["Home", "Design Library", "Design Studio", "Fabrics"],
    f: [
      ["Challenge", "Make made-to-measure clothing as easy to browse and buy as ready-made, while explaining a multi-step journey: choose a design, pick a fabric, then add measurements."],
      ["UX Thinking", "Two clear ways to begin (browse the design library or design your own), a guided four-step studio — Design, Fabric, Checkout, Measurements — and a filterable fabric library."],
      ["Interface", "Editorial serif typography with a deep green accent, product cards with a clear Customize action, and a studio with live preview, fabric selection and a persistent add-to-bag bar."],
      ["Outcome", "A live e-commerce experience for made-to-measure clothing with a guided path from design to measurements."],
    ],
  },
  {
    id: "gn",
    c: "var(--royal)",
    tag: "Corporate · AI · SaaS · Technology",
    t: "GrootNet Softwares — Corporate Digital Experience",
    u: "https://grootsoftwares.com/",
    d: "A professional corporate website for an AI-powered software development and digital transformation company, covering custom software, mobile apps, AI & machine learning, SaaS product development and Cloud/DevOps. The website is built in Angular.",
    tags: ["Corporate UX", "Service discovery", "Component-based UI", "Built in Angular", "Developer collaboration"],
    sc: ["Home", "Web Development", "AI & ML", "Case Study"],
    f: [
      ["Challenge", "Present a broad range of services, industries and proof of work clearly enough for visitors to find what they need quickly."],
      ["UX Thinking", "Organized services, industries, why-choose-us and social proof into a scannable content hierarchy, with conversion-focused calls to action throughout."],
      ["Interface", "A SaaS/AI visual language — purple-to-cyan gradients and card components reused across the home page, service pages and case studies. The website is built in Angular."],
      ["Outcome", "A live corporate website with dedicated service pages and detailed case studies."],
    ],
  },
  {
    id: "tk",
    c: "var(--purple)",
    tag: "Portal · Ticketing · Enterprise",
    t: "Ticketing Portal — IT Solutions Client App",
    u: "https://ticketing.grootsoftwares.com/",
    d: "A ticketing portal with a secure, focused sign-in experience, presented under the IT Solutions brand: empowering teams with secure, scalable and smart technology infrastructure.",
    tags: ["Portal UX", "Authentication flow", "Enterprise UI", "Form design"],
    sc: ["Sign In"],
    f: [
      ["Challenge", "Give users a clear, trustworthy entry point to a ticketing portal, with as little friction as possible."],
      ["UX Thinking", "One focused task: two fields, a visible forgot-password path and a password reveal toggle, so sign-in stays fast and forgiving."],
      ["Interface", "A split-screen layout: a dark branded panel with simple iconography on one side, and a clean form with icon-led inputs and a clear primary action on the other."],
      ["Outcome", "A live sign-in experience for the ticketing portal."],
    ],
  },
  {
    id: "ch",
    c: "var(--royal)",
    host: "AI Cloud Health · staging",
    tag: "Healthcare · SaaS · Management Platform",
    t: "AI Cloud Health — Clinic & Hospital Management Platform",
    // u: "https://cloudhealth.grootsoftwares.com/",
        u: "http://97.74.92.197:3001/",
    d: "An all-in-one platform for digital clinic and hospital management, connecting appointments, prescriptions and invoicing under one platform, with role-based dashboards for admins, doctors, nurses and front-desk staff.",
    tags: ["Healthcare SaaS", "Dashboard UI", "Landing page", "Content hierarchy"],
    sc: ["Landing Page", "Product Dashboard"],
    f: [
      ["Challenge", "Explain a multi-role healthcare platform — dashboards, appointments, prescriptions and invoicing — clearly to clinics and hospitals."],
      ["UX Thinking", "Grouped capabilities into scannable feature blocks, followed by a product preview, FAQs and repeated demo calls to action."],
      ["Interface", "A calm teal-and-green healthcare palette, icon-led feature grids and a dashboard preview that shows the product early."],
      ["Outcome", "A product landing page and dashboard experience, currently in development and not yet publicly live."],
    ],
  },
];

/* move AI Cloud Health (was #5) up to position 2 */
P.splice(1, 0, P.splice(4, 1)[0]);

/* key highlights (bullet breakdown) per project */
const KEY = {
  gv: ["Live AI Voice Agent SaaS website", "Clear structure for inbound/outbound calling & industries", "Reusable UI patterns, HTML/CSS handoff"],
  ch: ["Role-based platform: admins, doctors, nurses, front desk", "Appointments, prescriptions & invoicing in one view", "Landing page + dashboard preview (in development)"],
  at: ["Made-to-measure fashion, easy to browse and buy", "Guided 4-step studio: Design, Fabric, Checkout, Measurements", "Filterable fabric library, editorial look"],
  gn: ["Corporate site for an AI-powered software company", "Scannable services, industries & social proof", "Built in Angular with dedicated service & case-study pages"],
  tk: ["Focused, low-friction sign-in", "Password reveal + forgot-password path", "Split-screen branded layout"],
};

const $ = (s) => document.querySelector(s);

/* ================= MOBILE VIEW: real screenshots in a phone mockup ================= */
const MOB = {
  gv: { src: "assets/mobile-gv.webp", sb: "#ffffff", alt: "GrootVox mobile website" },
  ch: { src: "assets/mobile-aich.webp", sb: "#ffffff", alt: "AI Cloud Health mobile website" },
  at: { src: "assets/mobile-atelise.webp", sb: "#ffffff", alt: "Atelise mobile website" },
  gn: { src: "assets/mobile-grootnet.webp", sb: "#ffffff", alt: "GrootNet Softwares mobile website" },
  tk: { src: "assets/mobile-ticketing.webp", sb: "#f4f6fb", alt: "Ticketing portal mobile sign-in" },
};
/* every project gets a "Mobile" tab in the case-study popup */
P.forEach((p) => {
  if (MOB[p.id] && !p.sc.includes("Mobile")) p.sc.push("Mobile");
});
/* full phone (popup): status bar + notch, screenshot scrolls inside */
function phoneView(id) {
  const m = MOB[id];
  return `<div class="mv" style="--sbg:${m.sb}"><div class="dev"><div class="dev-bar"><i></i></div><div class="dev-vp" tabindex="0" role="region" aria-label="Scrollable mobile view: ${m.alt}"><img loading="lazy" decoding="async" src="${m.src}" alt="${m.alt}" width="349"></div></div><span class="mvh">Scroll inside the phone ↓</span></div>`;
}
/* small phone on each project card (top of the real mobile screenshot) */
function phoneMini(id, i) {
  const m = MOB[id];
  return m
    ? `<div class="pm" data-i="${i}" data-m="1" style="--sbg:${m.sb}" title="Scroll the screen · click to open case study"><div class="pm-bar"><i></i></div><div class="pm-vp" tabindex="0" role="region" aria-label="Scrollable mobile screenshot: ${m.alt}"><img loading="lazy" decoding="async" src="${m.src}" alt="${m.alt}" width="349" draggable="false"></div></div>`
    : "";
}

/* ---------- desktop screenshots ---------- */
const GVIMG = "assets/gv-hero.webp";
const GVI = {
  Solutions: "assets/gv-solutions.webp",
  "AI agent": "assets/gv-ai-agent.webp",
  Analytics: "assets/gv-analytics.webp",
  Pricing: "assets/gv-pricing.webp",
  Industries: "assets/gv-industries.webp",
};
const GVBG = {
  Solutions: "linear-gradient(135deg,#2b6aa6,#6a55a7)",
  "AI agent": "#eef1f8",
  Analytics: "#eef1f8",
  Pricing: "#fff",
  Industries: "#fff",
};
function gv(s) {
  if (s == "Hero")
    return `<div role="img" aria-label="GrootVox live site: hero" style="position:absolute;inset:0;background:url(${GVIMG}) center top/cover no-repeat"></div>`;
  return `<div role="img" aria-label="GrootVox live site: ${s}" style="position:absolute;inset:0;background:url(${GVI[s]}) center/contain no-repeat,${GVBG[s]}"></div>`;
}

const ATI = {
  Home: "assets/atelise-home.webp",
  "Design Library": "assets/atelise-library.webp",
  "Design Studio": "assets/atelise-studio.webp",
  Fabrics: "assets/atelise-fabrics.webp",
};
function at(s, m) {
  const src = ATI[s];
  if (m)
    return `<div style="position:absolute;inset:0;overflow-y:auto;background:#fff" tabindex="0" aria-label="Scrollable full page of Atelise: ${s}"><img loading="lazy" decoding="async" src="${src}" alt="Atelise ${s} page" style="width:100%;display:block"></div><span style="position:absolute;right:16px;bottom:10px;font-size:11px;font-weight:600;padding:4px 10px;border-radius:99px;background:rgba(31,42,29,.85);color:#fff;pointer-events:none">Scroll to explore ↓</span>`;
  return `<div role="img" aria-label="Atelise live site: ${s}" style="position:absolute;inset:0;background:#fff url(${src}) center top/100% auto no-repeat"></div>`;
}

const GNI = {
  Home: "assets/grootnet-home.webp",
  "Web Development": "assets/grootnet-web.webp",
  "AI & ML": "assets/grootnet-ai.webp",
  "Case Study": "assets/grootnet-case.webp",
};
function gn(s, m) {
  const src = GNI[s];
  if (m)
    return `<div style="position:absolute;inset:0;overflow-y:auto;background:#fff" tabindex="0" aria-label="Scrollable full page of GrootNet: ${s}"><img loading="lazy" decoding="async" src="${src}" alt="GrootNet ${s} page" style="width:100%;display:block"></div><span style="position:absolute;right:16px;bottom:10px;font-size:11px;font-weight:600;padding:4px 10px;border-radius:99px;background:rgba(28,21,51,.88);color:#fff;pointer-events:none">Scroll to explore ↓</span>`;
  return `<div role="img" aria-label="GrootNet live site: ${s}" style="position:absolute;inset:0;background:#fff url(${src}) center top/100% auto no-repeat"></div>`;
}

const TKI = "assets/ticketing-signin.webp";
function tk(s) {
  return `<div role="img" aria-label="Ticketing portal sign-in screen" style="position:absolute;inset:0;background:url(${TKI}) center/cover no-repeat,#f4f6fb"></div>`;
}

const CHF = "assets/aich-landing.webp",
  CHD = "assets/aich-dashboard.webp";
function ch(s, m) {
  if (s == "Product Dashboard")
    return `<div role="img" aria-label="AI Cloud Health product dashboard preview" style="position:absolute;inset:0;background:url(${CHD}) center/contain no-repeat,#f2f7f6"></div>`;
  if (m)
    return `<div style="position:absolute;inset:0;overflow-y:auto;background:#fff" tabindex="0" aria-label="Scrollable AI Cloud Health landing page"><img loading="lazy" decoding="async" src="${CHF}" alt="AI Cloud Health landing page" style="width:100%;display:block"></div><span style="position:absolute;right:16px;bottom:10px;font-size:11px;font-weight:600;padding:4px 10px;border-radius:99px;background:rgba(4,60,45,.9);color:#fff;pointer-events:none">Scroll to explore ↓</span>`;
  return `<div role="img" aria-label="AI Cloud Health landing page" style="position:absolute;inset:0;background:#fff url(${CHF}) center top/100% auto no-repeat"></div>`;
}

function mock(i, s, m) {
  /* look up by project id so reordering never mixes up screenshots */
  const id = P[i].id;
  if (s === "Mobile" && MOB[id]) return phoneView(id);
  if (id === "ch") return ch(s, m);
  if (id === "tk") return tk(s);
  if (id === "gv") return gv(s);
  if (id === "at") return at(s, m);
  if (id === "gn") return gn(s, m);
  return "";
}

/* project cards: browser preview + real mobile screenshot phone + bullets */
$("#projects").innerHTML = P.map(
  (p, i) => `<article class="proj rv" style="--acc:${p.c}"><div class="pvw"><button class="pv" data-i="${i}" aria-label="Open ${p.t} case study"><div class="br"><div class="bh"><i></i><i></i><i></i><em>${p.u ? p.u.replace("https://", "").replace(/\/$/, "") : p.host}</em></div><div class="scr">${mock(i, p.sc[0])}<span class="hint">Open case study</span></div></div></button>${phoneMini(p.id,i)}</div>
<div><div class="tag">${p.tag}</div><h3>${p.t}</h3><p>${p.d}</p><ul class="kp">${(KEY[p.id] || []).map((k) => `<li>${k}</li>`).join("")}</ul><div class="tags">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div><div class="row">${p.u ? `<a class="btn live" href="${p.u}" target="_blank" rel="noopener">View Live Project <span aria-hidden="true">→</span><span class="sr">(opens in a new tab)</span></a>` : `<span class="btn ghost" style="cursor:default"><span style="color:#d97706">●</span> In development · not publicly live</span>`}<button class="btn ghost" data-i="${i}">Case study</button></div></div></article>`,
).join("");
document.querySelectorAll("#projects .rv").forEach((e) => io.observe(e));

const dlg = $("#dlg");
function show(i, s) {
  $("#dscr").innerHTML = mock(i, s, 1);
  $("#scrs")
    .querySelectorAll("button")
    .forEach((b) => b.setAttribute("aria-pressed", b.textContent === s));
}
function open_(i) {
  const p = P[i];
  dlg.style.setProperty("--acc", p.c);
  $("#dtag").textContent = p.tag;
  $("#dt").textContent = p.t;
  $("#durl").textContent = p.u ? p.u.replace("https://", "").replace(/\/$/, "") : p.host;
  $("#dlive").style.display = p.u ? "" : "none";
  if (p.u) $("#dlive").href = p.u;
  $("#scrs").innerHTML = p.sc.map((s) => `<button aria-pressed="false">${s}</button>`).join("");
  $("#scrs").onclick = (e) => e.target.closest("button") && show(i, e.target.textContent);
  $("#dflow").innerHTML = p.f.map(([a, b], k) => `<div><b>${k + 1}. ${a}</b><p>${b}</p></div>`).join("");
  show(i, p.sc[0]);
  dlg.showModal();
  document.body.classList.add("lock");
}
document.addEventListener("click", (e) => {
  const b = e.target.closest("[data-i]");
  if (b) {
    open_(+b.dataset.i);
    if (b.dataset.m) show(+b.dataset.i, "Mobile");
  }
});
$("#cl").onclick = () => dlg.close();
dlg.onclick = (e) => {
  if (e.target === dlg) dlg.close();
};

/* playground */
const pg = $("#pg");
$("#sw").onclick = (e) => {
  const b = e.target.closest("button");
  if (!b) return;
  $("#sw")
    .querySelectorAll("button")
    .forEach((x) => x.setAttribute("aria-pressed", x === b));
  pg.style.setProperty("--acc", b.dataset.c);
  showCR(b.dataset.c);
};
function L(h) {
  const c = [1, 3, 5]
    .map((i) => parseInt(h.slice(i, i + 2), 16) / 255)
    .map((x) => (x <= 0.03928 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4));
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
}
function cr(h) {
  return 1.05 / (L(h) + 0.05);
}
function showCR(h) {
  const r = cr(h);
  $("#cr").innerHTML =
    `White text on this color: <b>${r.toFixed(1)}:1</b><br>${r >= 4.5 ? "✓" : "✗"} AA text (4.5) · ${r >= 3 ? "✓" : "✗"} AA large (3) · ${r >= 7 ? "✓" : "✗"} AAA (7)`;
}
let opener = null;
document.addEventListener(
  "click",
  (e) => {
    const b = e.target.closest("[data-i]");
    if (b) opener = b;
  },
  true,
);
dlg.addEventListener("close", () => {
  document.body.classList.remove("lock");
  if (opener) opener.focus();
});
$("#rad").oninput = (e) => {
  pg.style.setProperty("--r", e.target.value + "px");
  $("#radv").textContent = "--radius: " + e.target.value + "px";
};
$("#sp").oninput = (e) => {
  $("#pcard").style.padding = e.target.value + "px";
  $("#sv").textContent = "--space: " + e.target.value + "px";
};
/* placeholders the owner should replace */
document.querySelectorAll("[data-li]").forEach(
  (a) =>
    (a.onclick = (e) => {
      if (a.getAttribute("href") === "#") e.preventDefault();
    }),
);
