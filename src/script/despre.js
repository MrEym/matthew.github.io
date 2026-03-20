const mb = document.getElementById("mb");
const sb = document.getElementById("sb");
const sbClose = document.getElementById("sb-close");
const sbOverlay = document.getElementById("sb-overlay");


mb.addEventListener("click", () => {
  sb.classList.add("active");
  sbOverlay.classList.add("active");
});

sbClose.addEventListener("click", () => {
  sb.classList.remove("active");
  sbOverlay.classList.remove("active");
});

document.addEventListener("click", (e) => {
  if(!sb.contains(e.target) && !mb.contains(e.target)) {
    sb.classList.remove("active");
    sbOverlay.classList.remove("active");
  }
});



const t = document.getElementById("text");
t.innerText = 'Centrul de Creație și Agrement pentru Copii și Tineret „Eleonora Găină” din Fălești este un spațiu al imaginației, unde pasiunea întâlnește educația, iar talentul prinde aripi. Parte a sistemului educațional din Republica Moldova, oferim copiilor și tinerilor un mediu prietenos și stimulant, în care pot învăța și crește prin activități nonformale variate. Prin ateliere creative, cercuri tematice și proiecte educative, încurajăm dezvoltarea armonioasă a fiecărui copil. Fie că este vorba despre artă, muzică, dans sau tehnologie, fiecare participant are ocazia să-și descopere pasiunile și să-și dezvolte abilitățile. Punem accent pe încrederea în sine, spiritul de echipă și gândirea critică, transformând timpul liber într-o experiență valoroasă. Fiecare reușită este susținută și încurajată cu răbdare. Echipa noastră dedicată crede în potențialul fiecărui tânăr și contribuie la formarea unei generații creative și implicate. Centrul „Eleonora Găină” este mai mult decât un loc de activități – este o comunitate în care creștem viitorul prin educație, creativitate și inspirație.';

const im = document.getElementById("img-modal");
const iv = document.getElementById("img-view");
const ic = document.getElementById("img-close");


document.addEventListener("click", (e) => {
  if(e.target.matches(".ci")) {
    im.classList.add("active");
    iv.src = e.target.src;
  }
});


ic.addEventListener("click", () => {
  im.classList.remove("active");
});

im.addEventListener("click", (e) => {
  if(e.target === im) {
    im.classList.remove("active");
  }
});



const images = Array.from(document.querySelectorAll(".ci"));
let order = [0, 1, 2, 3];

function shiftCarousel() {
  images.forEach(img => img.classList.add("fade-out"));
  setTimeout(() => {
    order.unshift(order.pop());
    images.forEach((img, i) => {
      img.style.order = order[i];
      img.classList.remove("fade-out");
    });
  }, 1600);
}

setInterval(shiftCarousel, 4500);