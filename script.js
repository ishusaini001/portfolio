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
    tags: [
      "UI/UX design",
      "Design system",
      "AI product experience",
      "HTML/CSS handoff",
    ],
    sc: ["Hero", "Solutions", "AI agent", "Analytics", "Pricing", "Industries"],
    f: [
      [
        "Challenge",
        "Explain a technical AI voice product clearly to business buyers across inbound and outbound calling, handoff, booking and industry use cases.",
      ],
      [
        "UX Thinking",
        "Structured the information architecture and visual hierarchy so each capability and industry solution is easy to scan and compare.",
      ],
      [
        "Interface",
        "Designed directly for the live product with reusable UI patterns and responsive layouts, then worked with developers through HTML/CSS implementation and handoff.",
      ],
      [
        "Outcome",
        "A live, responsive AI SaaS website with a consistent component language.",
      ],
    ],
  },
  {
    id: "at",
    c: "var(--purple)",
    tag: "E-commerce · Fashion · UX",
    t: "Atelise — Custom Fashion & E-commerce Experience",
    u: "https://www.wearatelise.com/",
    d: "A premium fashion and e-commerce experience focused on a refined customer journey, from product discovery to checkout.",
    tags: [
      "E-commerce UX",
      "Product discovery",
      "Responsive UI",
      "Visual storytelling",
    ],
    sc: ["Home", "Design Library", "Design Studio", "Fabrics"],
    f: [
      [
        "Challenge",
        "Make made-to-measure clothing as easy to browse and buy as ready-made, while explaining a multi-step journey: choose a design, pick a fabric, then add measurements.",
      ],
      [
        "UX Thinking",
        "Two clear ways to begin (browse the design library or design your own), a guided four-step studio — Design, Fabric, Checkout, Measurements — and a filterable fabric library.",
      ],
      [
        "Interface",
        "Editorial serif typography with a deep green accent, product cards with a clear Customize action, and a studio with live preview, fabric selection and a persistent add-to-bag bar.",
      ],
      [
        "Outcome",
        "A live e-commerce experience for made-to-measure clothing with a guided path from design to measurements.",
      ],
    ],
  },
  {
    id: "gn",
    c: "var(--royal)",
    tag: "Corporate · AI · SaaS · Technology",
    t: "GrootNet Softwares — Corporate Digital Experience",
    u: "https://grootsoftwares.com/",
    d: "A professional corporate website for an AI-powered software development and digital transformation company, covering custom software, mobile apps, AI & machine learning, SaaS product development and Cloud/DevOps. The website is built in Angular.",
    tags: [
      "Corporate UX",
      "Service discovery",
      "Component-based UI",
      "Built in Angular",
      "Developer collaboration",
    ],
    sc: ["Home", "Web Development", "AI & ML", "Case Study"],
    f: [
      [
        "Challenge",
        "Present a broad range of services, industries and proof of work clearly enough for visitors to find what they need quickly.",
      ],
      [
        "UX Thinking",
        "Organized services, industries, why-choose-us and social proof into a scannable content hierarchy, with conversion-focused calls to action throughout.",
      ],
      [
        "Interface",
        "A SaaS/AI visual language — purple-to-cyan gradients and card components reused across the home page, service pages and case studies. The website is built in Angular.",
      ],
      [
        "Outcome",
        "A live corporate website with dedicated service pages and detailed case studies.",
      ],
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
      [
        "Challenge",
        "Give users a clear, trustworthy entry point to a ticketing portal, with as little friction as possible.",
      ],
      [
        "UX Thinking",
        "One focused task: two fields, a visible forgot-password path and a password reveal toggle, so sign-in stays fast and forgiving.",
      ],
      [
        "Interface",
        "A split-screen layout: a dark branded panel with simple iconography on one side, and a clean form with icon-led inputs and a clear primary action on the other.",
      ],
      ["Outcome", "A live sign-in experience for the ticketing portal."],
    ],
  },
  {
    id: "ch",
    c: "var(--royal)",
    host: "AI Cloud Health · staging",
    tag: "Healthcare · SaaS · Management Platform",
    t: "AI Cloud Health — Clinic & Hospital Management Platform",
    u: "https://cloudhealth.grootsoftwares.com/",
    d: "An all-in-one platform for digital clinic and hospital management, connecting appointments, prescriptions and invoicing under one platform, with role-based dashboards for admins, doctors, nurses and front-desk staff.",
    tags: [
      "Healthcare SaaS",
      "Dashboard UI",
      "Landing page",
      "Content hierarchy",
    ],
    sc: ["Landing Page", "Product Dashboard"],
    f: [
      [
        "Challenge",
        "Explain a multi-role healthcare platform — dashboards, appointments, prescriptions and invoicing — clearly to clinics and hospitals.",
      ],
      [
        "UX Thinking",
        "Grouped capabilities into scannable feature blocks, followed by a product preview, FAQs and repeated demo calls to action.",
      ],
      [
        "Interface",
        "A calm teal-and-green healthcare palette, icon-led feature grids and a dashboard preview that shows the product early.",
      ],
      [
        "Outcome",
        "A product landing page and dashboard experience, currently in development and not yet publicly live.",
      ],
    ],
  },
];
const $ = (s) => document.querySelector(s);

const GVIMG =
  "assets/gv-hero.webp";
const GVI = {
  Solutions:
    "assets/gv-solutions.webp",
  "AI agent":
    "assets/gv-ai-agent.webp",
  Analytics:
    "assets/gv-analytics.webp",
  Pricing:
    "assets/gv-pricing.webp",
  Industries:
    "assets/gv-industries.webp",
};
const GVFULL =
  "assets/gv-full.webp";
const GVBG = {
  Solutions: "linear-gradient(135deg,#2b6aa6,#6a55a7)",
  "AI agent": "#eef1f8",
  Analytics: "#eef1f8",
  Pricing: "#fff",
  Industries: "#fff",
};
const BUB =
  '<div class="bb">Hi, do you have anything open this Thursday afternoon?</div><div class="bb me">Yes — 2:15 or 3:45 both work. Which is better?</div><div class="bb">3:45 is perfect, thank you.</div><div class="bb me">Booked. You\'ll get a text confirmation now.</div>';
const NB =
  '<div class="nb"><b>GrootVox</b><span>Industries</span><span>Solutions</span><span>Pricing</span><u>Sign up</u></div>';
const IND = [
  "Real Estate",
  "Automotive Dealers",
  "Hotels",
  "Restaurants",
  "Education & EdTech",
  "Salons & Spas",
  "Gyms & Fitness",
  "Logistics",
  "Human Resources",
];
function gv(s) {
  let h = "";
  if (s == "Hero")
    return `<div role="img" aria-label="GrootVox live site: hero" style="position:absolute;inset:0;background:url(${GVIMG}) center top/cover no-repeat"></div>`;
  if (s == "Mobile")
    return `<div class="rs"><div class="dk"><div class="bh"><i></i><i></i><i></i><em>grootvox.ai</em></div><div class="sc" tabindex="0" aria-label="Scrollable full page of grootvox.ai"><img loading="lazy" decoding="async" src="${GVFULL}" alt="GrootVox full website page"></div></div><div class="ph2"><div class="sc" tabindex="0" aria-label="Scrollable mobile view of grootvox.ai"><img loading="lazy" decoding="async" src="${GVI.Mobile}" alt="GrootVox mobile website"></div></div><small>Full page (desktop) · Mobile — scroll inside each</small></div>`;
  if (GVI[s])
    return `<div role="img" aria-label="GrootVox live site: ${s}" style="position:absolute;inset:0;background:url(${GVI[s]}) center/contain no-repeat,${GVBG[s]}"></div>`;
  if (s == "Hero")
    h =
      NB +
      `<div class="two"><div><div style="color:var(--mute)">Your business, now with a</div><div class="big">VOICE AI</div><p style="margin:.8em 0 0;color:var(--mute)">AI Voice Agents That Handle Calls Like Your Best Team Member</p><span class="btn2">Start Free Trial →</span><span class="btn2 o">Book a Demo →</span><div style="color:var(--mute);margin-top:.8em">15 free minutes. No credit card required.</div></div><div class="cd"><div class="lab">front-desk-agent · call #4471</div>${BUB}<span class="ch">Sentiment: Positive</span><span class="ch">Intent: Book appointment</span></div></div>`;
  else if (s == "Solutions")
    h = `<div class="lab" style="font-size:1em;color:var(--ink)">Put a trusted voice at your front door</div><div style="margin-bottom:1em">${["Front Desk", "Sales", "Scheduling", "Support", "After Hours"].map((t, k) => `<span class="ch" style="${k ? "" : "background:var(--royal);color:#fff;border-color:var(--royal)"}">${t}</span>`).join("")}</div><div class="cd two"><div><div class="lab">front-desk</div><div style="font-size:1.6em;font-weight:700;letter-spacing:-.03em;line-height:1.15">Never send another caller to voicemail</div><ul style="padding-left:1.2em;color:var(--mute);margin:.8em 0 0"><li>24/7 inbound call handling</li><li>Smart routing to live agents</li><li>Brand-matched voice &amp; tone</li></ul></div><div style="text-align:center"><div class="big" style="font-size:4em">0%</div><div style="color:var(--mute)">missed calls</div></div></div>`;
  else if (s == "AI agent")
    h = `<div class="two"><div class="cd"><div class="lab">Natural Conversations</div><div class="wv">${"<i></i>".repeat(18).replace(/<i>/g, () => `<i style="animation-delay:${(Math.random() * 0.6).toFixed(2)}s">`)}</div><span class="ch">Listening</span><span class="ch">Understanding</span><span class="ch">Responding</span><p style="color:var(--mute);margin:.8em 0 0">Listens, understands the context and responds in real time.</p></div><div class="cd"><div class="lab">Human Handoff</div><div class="bb">Transferring you to our team…</div><div style="color:var(--mute)">Conversation context passed along, so customers don't repeat themselves.</div><div class="gr g3x" style="margin-top:.8em"><span class="ch">Inbound</span><span class="ch">Outbound</span><span class="ch">CRM</span></div></div></div>`;
  else if (s == "Analytics")
    h = `<div class="lab" style="font-size:1em;color:var(--ink)">Built for businesses that can't afford to miss a call</div><div class="gr g4 st2">${[
      ["10K+", "Conversations handled"],
      ["96%", "Customer satisfaction"],
      ["&lt;1 sec", "Average response time"],
      ["50+", "Businesses using GrootVox"],
    ]
      .map(
        ([a, b]) =>
          `<div class="cd"><b>${a}</b><span style="color:var(--mute)">${b}</span></div>`,
      )
      .join(
        "",
      )}</div><div class="cd" style="margin-top:.8em;display:flex;gap:1.4em;align-items:end"><div style="flex:1"><div class="lab">Call outcome</div>${[92, 64, 78].map((w) => `<div class="ln" style="width:${w}%;background:linear-gradient(90deg,var(--electric),var(--purple));height:10px"></div>`).join("")}</div><div><span class="ch">Sentiment: Positive</span><span class="ch">Resolution: Completed</span></div></div>`;
  else if (s == "Pricing")
    h = `<div style="text-align:center"><div class="lab" style="font-size:1.2em;color:var(--ink)">Choose the Right Plan for Your Business</div><span class="ch" style="background:var(--ink);color:var(--bg)">Monthly</span><span class="ch">Annual</span></div><div class="gr g5" style="margin-top:1em">${[
      ["Trial", "15 free minutes"],
      ["Starter", "Minutes, agents & numbers"],
      ["Growth", "Scale up volume"],
      ["Business", "Full call workflow"],
      ["Custom", "Contact us"],
    ]
      .map(
        ([a, b], k) =>
          `<div class="cd" style="${k == 2 ? "border-color:var(--royal);box-shadow:0 0 0 2px var(--royal)" : ""};min-height:8em"><b>${a}</b><div class="ln"></div><div style="color:var(--mute);font-size:.9em">${b}</div><span class="btn2" style="margin:.8em 0 0;padding:.4em .9em;font-size:.85em">${k == 4 ? "Contact" : "Choose"}</span></div>`,
      )
      .join("")}</div>`;
  else if (s == "Industries")
    h = `<div class="lab" style="font-size:1em;color:var(--ink)">One AI Voice Agent. Built for Different Business Needs.</div><div class="gr g3x">${IND.map((t) => `<div class="cd" style="padding:.8em"><b>${t}</b><div class="ln"></div><div class="ln" style="width:70%"></div></div>`).join("")}</div>`;
  else
    h = `<div class="ph"><div style="font-weight:700;margin-bottom:.8em">GrootVox</div><div style="color:var(--mute)">Your business, now with a</div><div class="big" style="font-size:2.4em">VOICE AI</div><p style="color:var(--mute);margin:.6em 0">AI Voice Agents That Handle Calls Like Your Best Team Member</p><span class="btn2" style="display:block;text-align:center;margin:.6em 0 0">Start Free Trial →</span><div class="bb" style="margin-top:1em">Booked. You'll get a text confirmation now.</div></div>`;
  return `<div class="gv">${h}</div>`;
}

const ATI = {
  Home: "assets/atelise-home.webp",
  "Design Library":
    "assets/atelise-library.webp",
  "Design Studio":
    "assets/atelise-studio.webp",
  Fabrics:
    "assets/atelise-fabrics.webp",
};

function at(s, m) {
  if (s == "Mobile")
    return `<div style="position:absolute;inset:0;display:grid;place-items:center;background:linear-gradient(135deg,#eef2ea,#d9e4d2)"><div style="width:min(230px,44%);height:calc(100% - 44px);margin-bottom:22px;border:6px solid #1f2a1d;border-radius:26px;overflow-y:auto;background:#fff;font-family:Inter,sans-serif;font-size:11px;color:#1f2a1d" tabindex="0" aria-label="Scrollable mobile view of Atelise (illustrative)"><div style="padding:6px 12px 0;text-align:center;font-size:7px;letter-spacing:.12em;color:#555">MADE TO YOUR MEASUREMENTS</div><div style="display:flex;justify-content:space-between;align-items:center;padding:8px 12px;border-bottom:1px solid #e5e5e5"><b style="font:400 15px Georgia,serif;letter-spacing:.06em">ATELISE .</b><span>☰</span></div><div style="padding:16px 14px;text-align:center"><div style="font-size:8px;letter-spacing:.14em;color:#4c7a3e">MADE TO ORDER, MADE FOR YOU</div><div style="font:400 21px/1.15 Georgia,serif;margin:8px 0">Custom clothing made to <i style="color:#4c7a3e">your measurements.</i></div><div style="color:#666;font-size:10px">Two ways to begin. Both are made to your measurements by an independent atelier.</div></div><div style="margin:0 12px 12px;border:1px solid #e5e5e5"><div style="padding:10px"><div style="font:400 14px Georgia,serif">Browse the Custom Design Library</div><div style="color:#666;font-size:10px;margin:4px 0 8px">Pick a design you love. Choose your fabric and color.</div><div style="background:#4c7a3e;color:#fff;text-align:center;padding:8px;font-size:9px;letter-spacing:.1em">BROWSE THE LIBRARY</div></div></div><div style="margin:0 12px 16px;border:1px solid #e5e5e5"><div style="padding:10px"><div style="font:400 14px Georgia,serif">Design Your Own</div><div style="color:#666;font-size:10px;margin:4px 0 8px">Bring your own idea, a screenshot, or a Pinterest board.</div><div style="background:#4c7a3e;color:#fff;text-align:center;padding:8px;font-size:9px;letter-spacing:.1em">DESIGN YOUR OWN</div></div></div><div style="padding:0 12px 18px"><div style="font:400 17px Georgia,serif;margin-bottom:8px">What's been made <i style="color:#4c7a3e">recently</i></div><img loading="lazy" decoding="async" src="${ATI.Dress}" alt="Silk Fringe Dress" style="width:100%;display:block;background:#f3f1ee"><div style="margin-top:6px">Silk Fringe Dress</div><div style="color:#666;font-size:10px">Made to order</div></div></div><span style="position:absolute;bottom:8px;left:0;right:0;text-align:center;font-size:11px;color:#3d5a34">Illustrative mobile layout · scroll inside the phone</span></div>`;
  const src = ATI[s];
  if (m)
    return `<div style="position:absolute;inset:0;overflow-y:auto;background:#fff" tabindex="0" aria-label="Scrollable full page of Atelise: ${s}"><img loading="lazy" decoding="async" src="${src}" alt="Atelise ${s} page" style="width:100%;display:block"></div><span style="position:absolute;right:16px;bottom:10px;font-size:11px;font-weight:600;padding:4px 10px;border-radius:99px;background:rgba(31,42,29,.85);color:#fff;pointer-events:none">Scroll to explore ↓</span>`;
  return `<div role="img" aria-label="Atelise live site: ${s}" style="position:absolute;inset:0;background:#fff url(${src}) center top/100% auto no-repeat"></div>`;
}
const GNI = {
  Home: "assets/grootnet-home.webp",
  "Web Development":
    "assets/grootnet-web.webp",
  "AI & ML":
    "assets/grootnet-ai.webp",
  "Case Study":
    "assets/grootnet-case.webp",
};

function gn(s, m) {
  if (s == "Mobile") {
    const st = [
      "Custom Software Development",
      "Mobile App Development",
      "AI & Machine Learning Solutions",
      "SaaS Product Development",
      "Cloud & DevOps Services",
    ];
    return `<div style="position:absolute;inset:0;display:grid;place-items:center;background:linear-gradient(135deg,#f3e6f0,#dfe6f7)"><div style="width:min(230px,44%);height:calc(100% - 44px);margin-bottom:22px;border:6px solid #1c1533;border-radius:26px;overflow-y:auto;background:#fff;font-family:Inter,sans-serif;font-size:11px;color:#2a2340" tabindex="0" aria-label="Scrollable mobile view of GrootNet (illustrative)"><div style="display:flex;justify-content:space-between;align-items:center;padding:10px 12px"><b style="background:linear-gradient(135deg,#c2277b,#6b4fb5);-webkit-background-clip:text;background-clip:text;color:transparent;font-size:14px">GrootNet</b><span>☰</span></div><div style="padding:14px 14px 18px;background:linear-gradient(180deg,#fbeef6,#fff)"><div style="font-size:23px;font-weight:800;line-height:1.1;letter-spacing:-.03em;background:linear-gradient(135deg,#c2277b,#6b4fb5);-webkit-background-clip:text;background-clip:text;color:transparent">Smart Software. Intelligent AI. Scalable Growth.</div><div style="color:#666;font-size:10px;margin:10px 0">AI-powered software development and digital transformation for startups, SMEs and enterprises worldwide.</div><div style="background:linear-gradient(135deg,#c2277b,#6b4fb5);color:#fff;text-align:center;padding:9px;border-radius:99px;font-size:10px;font-weight:600">Book Free Consultation</div><div style="border:1px solid #d8cfe6;text-align:center;padding:8px;border-radius:99px;font-size:10px;margin-top:6px">View Case Studies</div></div><div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;padding:0 12px;text-align:center"><div style="border:1px solid #eee;border-radius:10px;padding:8px 2px"><b style="font-size:15px;color:#6b4fb5">200+</b><div style="font-size:8px;color:#777">Projects</div></div><div style="border:1px solid #eee;border-radius:10px;padding:8px 2px"><b style="font-size:15px;color:#6b4fb5">150+</b><div style="font-size:8px;color:#777">Clients</div></div><div style="border:1px solid #eee;border-radius:10px;padding:8px 2px"><b style="font-size:15px;color:#6b4fb5">4.9/5</b><div style="font-size:8px;color:#777">Rating</div></div></div><div style="padding:18px 12px"><div style="font-size:16px;font-weight:800;color:#6b4fb5;text-align:center;margin-bottom:10px">Our Services</div>${st.map((t) => `<div style="padding:12px;border-radius:12px;color:#fff;font-weight:600;margin-bottom:8px;background:linear-gradient(135deg,#1c1533,#3a2a6b)">${t}</div>`).join("")}</div></div><span style="position:absolute;bottom:8px;left:0;right:0;text-align:center;font-size:11px;color:#4b3f75">Illustrative mobile layout · scroll inside the phone</span></div>`;
  }
  const src = GNI[s];
  if (m)
    return `<div style="position:absolute;inset:0;overflow-y:auto;background:#fff" tabindex="0" aria-label="Scrollable full page of GrootNet: ${s}"><img loading="lazy" decoding="async" src="${src}" alt="GrootNet ${s} page" style="width:100%;display:block"></div><span style="position:absolute;right:16px;bottom:10px;font-size:11px;font-weight:600;padding:4px 10px;border-radius:99px;background:rgba(28,21,51,.88);color:#fff;pointer-events:none">Scroll to explore ↓</span>`;
  return `<div role="img" aria-label="GrootNet live site: ${s}" style="position:absolute;inset:0;background:#fff url(${src}) center top/100% auto no-repeat"></div>`;
}
const TKI =
  "assets/ticketing-signin.webp";
function tk(s) {
  return `<div role="img" aria-label="Ticketing portal sign-in screen" style="position:absolute;inset:0;background:url(${TKI}) center/cover no-repeat,#f4f6fb"></div>`;
}
const CHF =
    "assets/aich-landing.webp",
  CHD =
    "assets/aich-dashboard.webp";
function ch(s, m) {
  if (s == "Product Dashboard")
    return `<div role="img" aria-label="AI Cloud Health product dashboard preview" style="position:absolute;inset:0;background:url(${CHD}) center/contain no-repeat,#f2f7f6"></div>`;
  if (m)
    return `<div style="position:absolute;inset:0;overflow-y:auto;background:#fff" tabindex="0" aria-label="Scrollable AI Cloud Health landing page"><img loading="lazy" decoding="async" src="${CHF}" alt="AI Cloud Health landing page" style="width:100%;display:block"></div><span style="position:absolute;right:16px;bottom:10px;font-size:11px;font-weight:600;padding:4px 10px;border-radius:99px;background:rgba(4,60,45,.9);color:#fff;pointer-events:none">Scroll to explore ↓</span>`;
  return `<div role="img" aria-label="AI Cloud Health landing page" style="position:absolute;inset:0;background:#fff url(${CHF}) center top/100% auto no-repeat"></div>`;
}
function mock(i, s, m) {
  if (i === 4) return ch(s, m);
  if (i === 3) return tk(s);
  if (i === 0) return gv(s);
  if (i === 1) return at(s, m);
  if (i === 2) return gn(s, m);
  const n = P[i].sc.indexOf(s);
  const cols = [
    '<div class="g3"><div class="m"></div><div class="m"></div><div class="m"></div></div>',
    '<div class="g3" style="grid-template-columns:1fr 1fr"><div class="m" style="height:110px"></div><div class="m" style="height:110px"></div></div>',
    '<div class="m" style="height:110px;margin-top:14px;padding:12px"><div class="bar" style="width:70%"></div><div class="bar" style="width:45%"></div><div class="bar" style="width:85%"></div></div>',
  ];
  return `<div class="ln" style="width:22%;background:${P[i].c}"></div><div class="hd"></div><div class="ln" style="width:55%"></div>${cols[n % 3]}<div style="position:absolute;left:20px;bottom:14px;font-size:12px;font-weight:600;color:var(--mute)">${s}</div>${/Mobile/.test(s) ? '<div class="mob"><div class="hd" style="width:80%;height:10px"></div><div class="ln"></div><div class="m" style="height:40%;margin-top:8px"></div></div>' : ""}`;
}
$("#projects").innerHTML = P.map(
  (
    p,
    i,
  ) => `<article class="proj rv" style="--acc:${p.c}"><button class="pv" data-i="${i}" aria-label="Open ${p.t} case study"><div class="br"><div class="bh"><i></i><i></i><i></i><em>${p.u ? p.u.replace("https://", "").replace(/\/$/, "") : p.host}</em></div><div class="scr">${mock(i, p.sc[0])}<span class="hint">Open case study</span></div></div></button>
<div><div class="tag">${p.tag}</div><h3>${p.t}</h3><p>${p.d}</p><div class="tags">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div><div class="row">${p.u ? `<a class="btn live" href="${p.u}" target="_blank" rel="noopener">View Live Project <span aria-hidden="true">→</span><span class="sr">(opens in a new tab)</span></a>` : `<span class="btn ghost" style="cursor:default"><span style="color:#d97706">●</span> In development · not publicly live</span>`}<button class="btn ghost" data-i="${i}">Case study</button></div></div></article>`,
).join("");
document.querySelectorAll("#projects .rv").forEach((e) => io.observe(e));
const dlg = $("#dlg");
function show(i, s) {
  const p = P[i];
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
  $("#durl").textContent = p.u
    ? p.u.replace("https://", "").replace(/\/$/, "")
    : p.host;
  $("#dlive").style.display = p.u ? "" : "none";
  if (p.u) $("#dlive").href = p.u;
  $("#scrs").innerHTML = p.sc
    .map((s) => `<button aria-pressed="false">${s}</button>`)
    .join("");
  $("#scrs").onclick = (e) =>
    e.target.closest("button") && show(i, e.target.textContent);
  $("#dflow").innerHTML = p.f
    .map(([a, b], k) => `<div><b>${k + 1}. ${a}</b><p>${b}</p></div>`)
    .join("");
  show(i, p.sc[0]);
  dlg.showModal();
  document.body.classList.add("lock");
}
document.addEventListener("click", (e) => {
  const b = e.target.closest("[data-i]");
  if (b) open_(+b.dataset.i);
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
  const r = 1.05 / (L(h) + 0.05);
  return r;
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
