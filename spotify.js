const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  const playIcon = card.querySelector(".play img");

  if (!playIcon) return;
  card.addEventListener("mouseover", () => {
    playIcon.style.opacity = "1";
    playIcon.style.transform = "translateY(0%)";
    card.style.backgroundColor = "rgb(31, 31, 31)";
  });

  card.addEventListener("mouseout", () => {
    playIcon.style.opacity = "0";
    playIcon.style.transform = "translateY(50%)";
    card.style.backgroundColor = "rgb(18, 18, 18)";
  });
});

let anchor = document.querySelectorAll("a");

anchor.forEach((atag) => {
  atag.addEventListener("mouseover", () => {
    atag.style.textDecoration = "underline";
  });
});
anchor.forEach((atag) => {
  atag.addEventListener("mouseout", () => {
    atag.style.textDecoration = "none";
  });
});

let socialmedia = document.querySelectorAll(".social-media a");
socialmedia.forEach((sm) => {
  sm.addEventListener("mouseover", () => {
    sm.style.backgroundColor = "rgb(115, 115, 115)";
  });
  sm.addEventListener("mouseout", () => {
    sm.style.backgroundColor = "rgb(41, 41, 41)";
  });
});

let navlinks = document.querySelectorAll("nav a");
navlinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    link.style.color = "white";
  });
  link.addEventListener("mouseout", () => {
    link.style.color = "rgb(179, 179, 179)";
  });
});
