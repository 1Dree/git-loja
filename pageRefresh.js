import { items, $, products } from "./pageRendering/index.js";

((doc) => {
  const homeBtn = $("button#home"),
    cartBtn = $("#cart-icon"),
    cart = $("#cart"),
    addCartBtn = doc.querySelectorAll(".product button.cta");

  const updateCart = (items, contentDiv) => ({ target }) => {
    let key = target.dataset.key;
    items[key].quantity++;
    cart.innerHTML = "";

    items.forEach((item) => {
      if (item.quantity > 0) {
        contentDiv.innerHTML += `
          <h1>${item.type}</h1>
          <p>Quantidade: ${item.quantity}</p>
        `;
      }
    });
  };

  const switchPage = (presentPage, recipientPage, propA, propB) => () => {
      presentPage.style.display = propA;
      recipientPage.style.display = propB;
    },
    toHome = switchPage(cart, products, "none", "flex"),
    toCart = switchPage(products, cart, "none", "block");

  homeBtn.addEventListener("click", toHome);
  cartBtn.addEventListener("click", toCart);

  addCartBtn.forEach((btn) =>
    btn.addEventListener("click", updateCart(items, cart))
  );
})(document);
