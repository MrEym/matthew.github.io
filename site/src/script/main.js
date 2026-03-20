import { collection, getDocs, query, orderBy, limit } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";

window.addEventListener("load", () => {
  const content = document.getElementById("hcontent");
  content.classList.add("show");
});

const mb = document.getElementById("mb");
const sb = document.getElementById("sb");


mb.addEventListener("click", () => {
  sb.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if(!sb.contains(e.target) && !mb.contains(e.target)) {
    sb.classList.remove("active");
  }
});



const modal = document.getElementById("modal");
const reviewsModal = document.getElementById("reviews-modal");
const modals = document.querySelectorAll(".modal");

const reviewsContainer = document.getElementById("rc");


document.getElementById("date").addEventListener("click", () => {
  modal.classList.add("active");
});

document.querySelector("#cb .btn:nth-child(2)").addEventListener("click", async () => {
  reviewsModal.classList.add("active");
  await loadReviews();
});


document.querySelectorAll(".modal .close").forEach(btn => {
  btn.addEventListener("click", () => {
    const parentModal = btn.closest(".modal");
    parentModal.classList.remove("active");

    const rc = parentModal.querySelector("#rc");
    if (rc) rc.innerHTML = "";
  });
});

modals.forEach(m => {
  m.addEventListener("click", (e) => {
    if (e.target === m) {
      m.classList.remove("active");

      const rc = m.querySelector("#rc");
      if (rc) rc.innerHTML = "";
    }
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modals.forEach(modal => {
      modal.classList.remove("active");

      const rc = modal.querySelector("#rc");
      if (rc) rc.innerHTML = "";
    });
  }
});


async function loadReviews() {
  reviewsContainer.innerHTML = "";
  try {
    const q = query(
      collection(window.db, "reviews"),
      orderBy("date", "desc"),
      limit(5)
    );
    const snapshot = await getDocs(q);
    snapshot.forEach(doc => {
      const data = doc.data();
      const reviewEl = document.createElement("div");
      reviewEl.classList.add("review");
      reviewEl.innerHTML = `
        <p class="review-name">${data.name}</p>
        <p class="review-date">${new Date(data.date.seconds * 1000).toLocaleDateString()}</p>
        <p class="review-text">${data.text}</p>
      `;
      
      reviewsContainer.appendChild(reviewEl);
    });
  } catch (err) {
    console.error("Ошибка при загрузке отзывов:", err);
  }
}