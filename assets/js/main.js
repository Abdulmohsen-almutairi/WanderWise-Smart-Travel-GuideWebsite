const navToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

document.querySelectorAll(".nav-links a").forEach((link) => {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const linkPage = link.getAttribute("href");

  if (linkPage === currentPage) {
    link.classList.add("active");
  }
});

const yearElement = document.querySelector("#year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const members = [
  "Faisal Alshehri",
 "Abdulmohsen Almutairi", 
  "Abdullah Alqahtani ",
  "Fares Alqahtani"
];

function shuffleArray(items) {
  const shuffled = [...items];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }

  return shuffled;
}

function showMembers() {
  const memberList = document.querySelector("#memberList");

  if (!memberList) {
    return;
  }

  memberList.innerHTML = "";
  shuffleArray(members).forEach((member, index) => {
    const item = document.createElement("li");
    item.textContent = `${index + 1}. ${member}`;
    memberList.appendChild(item);
  });
}

showMembers();

const shuffleButton = document.querySelector("#shuffleMembers");

if (shuffleButton) {
  shuffleButton.addEventListener("click", showMembers);
}

const contactForm = document.querySelector("#contactForm");
const formStatus = document.querySelector("#formStatus");

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      formStatus.textContent = "Please complete the form using the required format.";
      contactForm.reportValidity();
      return;
    }

    formStatus.textContent = "Thank you. Your message is ready to send.";
    contactForm.reset();
  });
}
