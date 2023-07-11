const container = document.getElementById("container");

const itemsData = [
  {
    id: "01",
    name: "Casual Shirt",
    price: 45,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    imageId: "images/img-1.jpg",
  },
  {
    id: "02",
    name: "Office Shirt",
    price: 100,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    imageId: "images/img-2.jpg",
  },
  {
    id: "03",
    name: "T Shirt",
    price: 25,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    imageId: "images/img-3.jpg",
  },
  {
    id: "04",
    name: "Mens Suit",
    price: 200,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    imageId: "images/img-4.jpg",
  },
];

const generateCards = () => {
  return (container.innerHTML = itemsData
    .map((item) => {
      const { id, name, price, description, imageId } = item;
      return `
    <div  id=product-id-${id} class="item">
    <img width="220" src=${imageId} alt="card" />
    <div class="details">
      <h3>${name}</h3>
      <p>${description}</p>
      <div class="price-quantity">
        <h2>$ ${price}</h2>
        <div class="quantity-btn">
          <i class="bi bi-dash-lg"></i>
          <div id=${id} class="quantity">0</div>
          <i class="bi bi-plus-lg"></i>
        </div>
      </div>
    </div>
  </div>`;
    })
    .join(""));
};

generateCards();
