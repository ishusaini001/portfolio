/* ================= MOBILE VIEW UPDATE (real screenshots in phone mockup) =================
   Paste this block in script.js RIGHT BEFORE the line:
   $("#projects").innerHTML = P.map(
*/
const MOB = {
  gv: { src: "assets/mobile-gv.webp",        sb: "#ffffff", alt: "GrootVox mobile website" },
  ch: { src: "assets/mobile-aich.webp",      sb: "#ffffff", alt: "AI Cloud Health mobile website" },
  at: { src: "assets/mobile-atelise.webp",   sb: "#ffffff", alt: "Atelise mobile website" },
  gn: { src: "assets/mobile-grootnet.webp",  sb: "#ffffff", alt: "GrootNet Softwares mobile website" },
  tk: { src: "assets/mobile-ticketing.webp", sb: "#f4f6fb", alt: "Ticketing portal mobile sign-in" },
};
/* every project gets a "Mobile" tab in the case-study popup */
P.forEach((p) => {
  if (MOB[p.id] && !p.sc.includes("Mobile")) p.sc.push("Mobile");
});
/* full phone (case-study popup): status bar + notch, screenshot scrolls inside */
function phoneView(id) {
  const m = MOB[id];
  return `<div class="mv" style="--sbg:${m.sb}"><div class="dev"><div class="dev-bar"><i></i></div><div class="dev-vp" tabindex="0" role="region" aria-label="Scrollable mobile view: ${m.alt}"><img loading="lazy" decoding="async" src="${m.src}" alt="${m.alt}" width="349"></div></div><span class="mvh">Scroll inside the phone ↓</span></div>`;
}
/* small phone on each project card (top of the real mobile screenshot) */
function phoneMini(id) {
  const m = MOB[id];
  return m
    ? `<div class="pm" aria-hidden="true"><img loading="lazy" decoding="async" src="${m.src}" alt=""></div>`
    : "";
}

/* ---- 2 small edits elsewhere in script.js ----
 (a) first line inside function mock(i, s, m) { ... }  add:
       if (s === "Mobile" && MOB[P[i].id]) return phoneView(P[i].id);
 (b) in the $("#projects").innerHTML template, replace the whole
       <div class="pm" aria-hidden="true"> ... </div>
     with:
       ${phoneMini(p.id)}
*/
