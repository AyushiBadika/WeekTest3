const components = document.querySelectorAll(".component");
const minusAll = document.querySelectorAll(".minus");
const plusAll = document.querySelectorAll(".plus");
const countAll = document.querySelectorAll(".count");
const productAll = document.querySelectorAll(".product");
const qtyAll = document.querySelectorAll(".qty");
const cartPriceAll = document.querySelectorAll(".cartPrice");
const totalAmount = document.querySelector(".amount");
let totalAmt = 0;
console.log(components);

{
  /* <div class="product">
  <img class="productsImage" src="/Images/shopping (1).webp" alt="" />
  <div class="desc">
    <h4>Product 1</h4>
    <div class="totalProductValue">1 * 200</div>
  </div>
</div>; */
}
components.forEach((component, index) => {
  minusAll[index].addEventListener("click", () => {
    const count = countAll[index].innerHTML * 1;
    if (count > 0) {
      countAll[index].innerHTML = count - 1;
      if (count - 1 === 0) {
        productAll[index].style.display = "none";
        totalAmt -= cartPriceAll[index].innerHTML * 1;
        totalAmount.innerHTML = totalAmt;
      } else {
        productAll[index].style.display = "flex";
        qtyAll[index].innerHTML = count - 1;
        totalAmt -= cartPriceAll[index].innerHTML * 1;
        totalAmount.innerHTML = totalAmt;
      }
    }
  });

  plusAll[index].addEventListener("click", () => {
    const count = countAll[index].innerHTML * 1;
    if (count >= 0) {
      countAll[index].innerHTML = count + 1;
      productAll[index].style.display = "flex";
      qtyAll[index].innerHTML = count + 1;

      totalAmt += cartPriceAll[index].innerHTML * 1;
      totalAmount.innerHTML = totalAmt;
    }
  });
});
