export const basket = {
  props: {
    index: Number,
    image: String,
    price: Number,
    title: String,
    quantity: Number,
    decrement: Function,
    increment: Function,
    remove: Function,
  },
  template: `
  <div
  class="basket-item">
  <div class="basket-leftPart">
  <img class="img-basket" :src="image"  alt="product" />
  </div>
    <div class="basket-rightPart">
<div class="info">
  <p class="title">{{ title }}</p>
  <p class="basket-price">{{ price }}$</p>
</div>
<div class="number">
<div class="quantity">
  <button @click="$emit('decrement',index)">-</button>
  <p>{{ quantity }}</p>
  <button @click="$emit('increment', index)">+</button>
</div>
<div class="remove">
  <button @click="$emit('remove', index)"><i class="fa-solid fa-trash"></i></button>
</div>
</div>
</div>
</div>
  
      `,
  methods: {},
};
