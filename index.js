document.addEventListener("DOMContentLoaded", function () {
  const hobbies = [
    "Reading Tech Blogs",
    "Programming",
    "Playing Video Games",
    "Cooking delicious meals",
    "Listenig to music",
  ];

  const cardContainer = document.getElementById("hobby-cards");

  hobbies.forEach(function (hobby) {
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h3");
    title.textContent = hobby;

    card.appendChild(title);
    cardContainer.appendChild(card);
  });
});
