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

const applyBtn = document.getElementById("apply-btn");

applyBtn.addEventListener("click", function () {
  const totalPrice = document.getElementById("totalPrice");
  const totalPriceNumber = parseInt(totalPrice.innerText);
  const discountPrice = document.getElementById("discountPrice");
  const total = document.getElementById("total");
  const inputValue = document.getElementById("input-field").value;

  if (totalPriceNumber >= 200 && inputValue.toLowerCase() === "sell 200") {
    const discount = (totalPriceNumber * 20) / 100;
    const totalDiscountPrice = totalPriceNumber - discount;
    discountPrice.innerText = discount;
    total.innerText = totalDiscountPrice;
  } else if (inputValue.toLowerCase() !== "sell 200") {
    alert("invalid code");
  } else {
    alert("For discount minimum purchase $200");
  }
  document.getElementById("input-field").value = "";
});

const modal = document.getElementById("modal");
document.getElementById("purchaseBtn").addEventListener("click", function () {
  const totalPrice = document.getElementById("totalPrice");
  const totalPriceNumber = parseInt(totalPrice.innerText);
  if (totalPriceNumber > 0) {
    modal.style.display = "block";
  } else {
    alert("Please select product for purchase");
  }
});

document.getElementById("goHomeBtn").addEventListener("click", function () {
  modal.style.display = "none";
});
