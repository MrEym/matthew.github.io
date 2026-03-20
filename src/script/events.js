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



const postsData = [
  {
    title: 'Sărbătoarea Raională a Cântecului Patriotic „Pace, Pace Lumii”',
    img: "res/img/events/1.jpg",
    text: "Este un eveniment tradițional cu o istorie de peste 20 de ani, organizat în preajma Zilei comemorării celor căzuți în războiul din Afganistan. Ediția actuală a reunit peste 200 de participanți din 14 instituții de învățământ, alături de veterani de război. Scopul festivalului este promovarea valorilor patriotice, a păcii și a repertoriului muzical dedicat eroilor, contribuind la educația civică a copiilor și tinerilor din raionul Fălești."
  },
  {
    title: 'EXPOZIȚIA RAIONALĂ de ARTĂ PLASTICĂ / ARTIZANAT cu genericul: „FII DÂRZ și LUPTĂ, NICOLAE!"',
    img: "res/img/events/2.jpg",
    text: 'Evenimentul a fost dedicat omagierii poetului român Nicolae Labiș, cu ocazia împlinirii a 90 de ani de la nașterea sa. Expoziția a reunit peste 150 de elevi din ciclurile gimnazial și liceal, reprezentând 15 instituții de învățământ din raionul Fălești. Inspirate de versurile poetului, lucrările elevilor au fost realizate printr-o varietate impresionantă de tehnici și materiale.'
  },
  {
    title: 'Campionatul raional deschis la șah „AMATEUR CHESS OPEN, 2025"',
    img: "res/img/events/3.jpg",
    text: 'Membrii cercului „ȘAH și DAME” de la CCACT Fălești au participat la o competiție de anvergură alături de 156 de șahiști din 11 echipe din diverse raioane. Reprezentanții din Fălești au obținut rezultate remarcabile, printre premianți numărându-se Chiril Burunciuc, Nicolai Bortă și Elena Popa.'
  },
  {
    title: 'Poveștile care ne ajută să creștem',
    img: "res/img/events/4.jpg",
    text: ' Această sărbătoare a fost dedicată marilor scriitori pentru copii: Hans Christian Andersen, Mark Twain, Rudyard Kipling și Alexandr Grin. La eveniment au participat tineri actori din 12 instituții de învățământ (ciclul preșcolar și primar), iar scriitorul Iulian Filip a fost prezent prin intervenție telefonică pentru a încuraja micii artiști.'
  }
];

const container = document.getElementById("posts");
const fragment = document.createDocumentFragment();
postsData.forEach(post => {

  const el = document.createElement("div");
  el.className = "post";

  el.innerHTML = `
  <h2>${post.title}</h2>
  <div class="post-content">
    <img src="${post.img}" alt="${post.title}">
    <p>${post.text}</p>
  </div>
  `;

  fragment.appendChild(el);

});

container.appendChild(fragment);



const modal = document.getElementById("img-modal");
const modalImg = document.getElementById("img-view");
const close = document.getElementById("img-close");
const caption = document.getElementById("img-caption");

document.addEventListener("click", (e) => {
  if(e.target.matches(".post img")) {
    modal.classList.add("active");
    modalImg.src = e.target.src;
    caption.innerText = e.target.alt;
  }
});

close.onclick = () => modal.classList.remove("active");

modal.onclick = (e) => {
  if(e.target === modal) {
    modal.classList.remove("active");
  }
};