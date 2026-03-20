import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyBrL383wfZnjVKx5qckMZMotMb3vzgDue0",
  authDomain: "recenzii-2abd0.firebaseapp.com",
  projectId: "recenzii-2abd0",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("reviewForm");
  const b = form.querySelector("button");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    b.disabled = true;

    const name = document.getElementById("name").value;
    const text = document.getElementById("text").value;

    try {
      await addDoc(collection(db, "reviews"), {
        name: name,
        text: text,
        date: serverTimestamp()
      });

      alert("Recenzie trimisă!");
      form.reset();
    } catch (err) {
      console.error(err);
      alert("Eroare!");
    }
  });
  
  b.disabled = false;
});



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