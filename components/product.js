export const product = {
  props: {
    index: Number,
    image: String,
    price: Number,
    title: String,
    like: Boolean,
    quantity: Number,
    addToBasket: Function,
    likeProduct: Function,
  },
  template: `
  <div class="product">
  <div
    class="img"
    :style="{ backgroundImage: 'url(' + image + ')' }"
  >
    <div class="top">
      <p class="price">{{ price }}$</p>
    </div>
    <div class="bottom">

      <button  @click="$emit('likeProduct', index)"  class="like">
        <i :class="{'fa-regular fa-heart': !like, 'fa-solid fa-heart': like}"></i>
      </button>

      <button @click="$emit('addToBasket', index)" class="buy">
        <i class="fa-solid fa-cart-shopping"></i>
      </button>
    </div>
  </div>
</div>

    `,
  methods: {},
};
