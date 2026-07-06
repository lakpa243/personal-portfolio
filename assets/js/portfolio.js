 function setFeatured(card) {

  // Get data from clicked card
  const title = card.getAttribute("data-title");
  const desc = card.getAttribute("data-desc");
  const img = card.getAttribute("data-img");
  const link = card.getAttribute("data-link");
  const tech = card.getAttribute("data-tech");

  // Update featured section
  document.getElementById("featured-title").innerText = title;
  document.getElementById("featured-desc").innerText = desc;
  document.getElementById("featured-img").src = img;
  document.getElementById("featured-link").href = link;

  // Update tech badges
  const techContainer = document.getElementById("featured-tech");
  techContainer.innerHTML = "";

  tech.split(",").forEach(item => {
    const span = document.createElement("span");
    span.className = "badge bg-light text-dark";
    span.innerText = item.trim();
    techContainer.appendChild(span);
  });

  // Optional smooth scroll to featured
  document.getElementById("featured").scrollIntoView({
    behavior: "smooth"
  });
}