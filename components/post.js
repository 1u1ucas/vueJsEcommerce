export const post = {
  props: {
    id: Number,
    name: String,
    imgSrc: String,
    like: Boolean,
    number: Number,
    price: Number,
  },
  template: `
  

    `,
  methods: {
    increaseLikes() {
      t;
      this.$emit("increaseLikes", this.index);
    },
  },
};
