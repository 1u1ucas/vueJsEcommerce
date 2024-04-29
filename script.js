import { post } from "../components/post.js";
export const Post = {
  emits: ["increaseLikes"],
};

const vm = Vue.createApp({
  components: {
    post: post,
  },
  methods: {},
}).mount("#app");
