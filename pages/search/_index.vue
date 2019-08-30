<template>
  <div>
    <p>You searched for {{this.$route.params.index}}</p>
    <Books />
  </div>
</template>

<script>
import Books from "~/components/Books";
export default {
  layout: "store",
  components: {
    Books
  },
  async fetch(context) {
    console.log(context.route.params.index)
    let { data } = await context.$axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${context.route.params.index}`
    );
    context.store.commit("books/setBooks", data.items);
  }
};
</script>