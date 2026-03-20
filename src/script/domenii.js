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



const modal = document.getElementById("modal");
const mt = document.getElementById("mt");
const md = document.getElementById("md");
const close = document.getElementById("close");

document.querySelectorAll(".info").forEach(btn => {
    btn.onclick = () => {
      const title = btn.dataset.title;
      const text = btn.dataset.text;
      
      mt.innerText = title;
      md.innerText = text;
      
      modal.classList.add("active");
    }
});

close.onclick = () => {
  modal.classList.remove("active");
};

window.onclick = (e) => {
  if (e.target == modal) {
    modal.classList.remove("active");
  }
};


document.querySelectorAll(".track").forEach((track, i) => {
  track.innerHTML += track.innerHTML;
  
  if (i % 2 === 0) {
    track.classList.add("left");
  } else {
    track.classList.add("right");
  }
});


const im = document.getElementById("img-modal");
const iv = document.getElementById("img-view");
const ic = document.getElementById("img-close");

document.addEventListener("click", (e) => {
  if(e.target.matches(".ph img")) {
    im.classList.add("active");
    iv.src = e.target.src;
  }
});

ic.addEventListener("click", () => {
  im.classList.remove("active");
});

im.addEventListener("click", (e) => {
  if (e.target === im) {
    im.classList.remove("active");
  }
});



const prev = document.getElementById("prev");
const next = document.getElementById("next");
let currentImages = [];
let currentIndex = 0;

document.querySelectorAll(".ph img").forEach((img) => {
  img.addEventListener("click", () => {
    const track = img.closest(".track");
    currentImages = Array.from(track.querySelectorAll("img"));
    currentIndex = currentImages.indexOf(img);

    showImage();
    im.classList.add("active");
  });
});

function showImage() {
  iv.classList.add("fade-out");

  setTimeout(() => {
    iv.src = currentImages[currentIndex].src;
    iv.classList.remove("fade-out");
  }, 200);
}


next.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % currentImages.length;
  showImage();
});

prev.addEventListener("click", () => {
  currentIndex =
    (currentIndex - 1 + currentImages.length) % currentImages.length;
  showImage();
});

ic.addEventListener("click", () => {
  im.classList.remove("active");
});

im.addEventListener("click", (e) => {
  if (e.target === im) {
    im.classList.remove("active");
  }
});


document.addEventListener("keydown", (e) => {
  if (!im.classList.contains("active")) return;

  if (e.key === "ArrowRight") next.click();
  if (e.key === "ArrowLeft") prev.click();
  if (e.key === "Escape") im.classList.remove("active");
});