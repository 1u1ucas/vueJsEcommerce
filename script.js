import { product } from "../components/product.js";
import { basket } from "../components/basket.js";

const vm = Vue.createApp({
  components: {
    product: product,
    basket: basket,
  },
  data() {
    return {
      productData: [],
      basketData: [],
      credentialBasketData: {
        title: "",
        image: "",
        price: 0,
        quantity: 1,
      },
    };
  },
  created() {
    this.fetchProductData();
  },
  methods: {
    fetchProductData() {
      fetch("products.json")
        .then((response) => response.json())
        .then((data) => {
          this.productData = data;
        });
    },
    addToBasket(index) {
      this.productData[index].quantity++;
      if (this.productData[index].quantity < 2) {
        this.basketData.push(this.productData[index]);
      }
    },
    likeProduct(index) {
      this.productData[index].like = !this.productData[index].like;
    },
    increment(index) {
      this.basketData[index].quantity++;
    },
    decrement(index) {
      if (this.basketData[index].quantity > 1) {
        this.basketData[index].quantity--;
      } else {
        this.basketData[index].quantity = 0;
        this.basketData.splice(index, 1);
      }
    },
    remove(index) {
      this.basketData[index].quantity = 0;
      this.basketData.splice(index, 1);
    },
  },
  computed: {
    total() {
      return this.basketData.reduce(
        (sum, item) => sum + item.quantity * item.price,
        0
      );
    },
    isAnyProductLiked() {
      return this.productData.some((product) => product.like);
    },
    isAnyProductInBasket() {
      return this.basketData.length > 0;
    },
  },
}).mount("#app");
