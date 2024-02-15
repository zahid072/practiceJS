const allCards = document.querySelectorAll(".card");
let titleCounter = 1;
let total = 0;

for (let product of allCards) {
  product.addEventListener("click", function () {
    const title = product.querySelector("h3").innerText;
    const price = product.querySelector("span");
    const priceNumber = parseInt(price.innerText.split(" ")[1]);
    total += priceNumber;
    document.getElementById("totalPrice").innerText = total;

    const titleContainer = document.getElementById("title-container");
    const p = document.createElement("p");
    p.innerText = `${titleCounter}. ${title}`;
    titleContainer.appendChild(p);
    titleCounter++;
  });
}
