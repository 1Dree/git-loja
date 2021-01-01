const items = [
  {
    id: 0,
    type: "Hidratante",
    img:
      "https://w1.ezcdn.com.br/drogariaprimus/fotos/zoom/47900fz1/hidratante-paixao-seducao-200ml.jpg",
    quantity: 0,
  },
  {
    id: 1,
    type: "Tenis",
    img:
      "https://static.lojanba.com/produtos/tenis-nike-lebron-witness-iv-masculino/26/HZM-2140-026/HZM-2140-026_zoom1.jpg",
    quantity: 0,
  },
  {
    id: 2,
    type: "Maquiagem",
    img:
      "https://http2.mlstatic.com/paleta-base-corretivos-15-cores-kit-maquiagem-D_NQ_NP_669501-MLB20346912536_072015-F.jpg",
    quantity: 0,
  },
];

const $ = (el) => document.querySelector(el),
  products = $("#products");

items.forEach((item) => {
  products.innerHTML += `
    <div class="product">
        <div class="product-img">
            <img src="${item.img}" />

            <div class="img-overlay">
            <button data-key="${item.id}" class="cta" type="button">
                Por no carrinho
            </button>
            </div>
        </div>

        <div class="product-description">
            <h2>${item.type}</h2>
        </div>
    </div>
    `;
});

export { items, $, products };
