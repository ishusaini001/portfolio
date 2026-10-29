/* ===== script.js — 3 edits ===== */

/* EDIT A: right after the closing "];" of the const P = [ ... ] array, add this line.
   It moves project #5 (AI Cloud Health) to position #2. */
P.splice(1, 0, P.splice(4, 1)[0]);

/* EDIT B: replace the five "if (i === n) return ..." lines at the top of function mock(i, s, m)
   (they depended on array position, which would break after reordering) with: */
function mock(i, s, m) {
  const id = P[i].id;
  if (id === "ch") return ch(s, m);
  if (id === "tk") return tk(s);
  if (id === "gv") return gv(s);
  if (id === "at") return at(s, m);
  if (id === "gn") return gn(s, m);
  /* ...keep the rest of the original mock() body unchanged... */

/* EDIT C: add this AFTER the line  document.querySelectorAll("#projects .rv").forEach((e) => io.observe(e));  */
const PIMG = { gv: GVIMG, at: ATI.Home, gn: GNI.Home, tk: TKI, ch: CHF };
const KEY = {
  gv: ["Explained a technical AI product clearly to business buyers", "Reusable UI patterns and a consistent component language", "Responsive layouts with HTML/CSS handoff"],
  ch: ["Multi-role platform: admins, doctors, nurses, front desk", "Scannable feature blocks with an early dashboard preview", "Calm healthcare palette with icon-led grids"],
  at: ["Guided four-step studio: Design, Fabric, Checkout, Measurements", "Two clear ways to begin: browse or design your own", "Editorial typography with a clear Customize action"],
  gn: ["Services, industries and proof organized into a clear hierarchy", "Card components reused across home, services and case studies", "Built in Angular with developer collaboration"],
  tk: ["One focused task: two fields, forgot-password, password reveal", "Split-screen layout with a dark branded panel", "Clear primary action, low-friction sign-in"],
};
document.querySelectorAll("#projects .proj").forEach((a, i) => {
  const id = P[i].id;
  a.querySelector(".pv").insertAdjacentHTML("beforeend", `<div class="pph" aria-hidden="true" style="background-image:url(${PIMG[id]})"></div>`);
  a.querySelector(".tags").insertAdjacentHTML("beforebegin", `<ul class="kp">${KEY[id].map((t) => `<li>${t}</li>`).join("")}</ul>`);
});
