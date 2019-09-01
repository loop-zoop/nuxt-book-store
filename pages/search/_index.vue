<template>
  <div>
    <Books />
  </div>
</template>

<script>
import Books from "~/components/Books";
export default {
  layout: "store",
  data() {
    return {
      keyWord: `${this.$route.params.index}`
    }
  },
  head() {
    return {
      title: `Search - ${this.keyWord}`
    }
  },
  components: {
    Books
  },
  async fetch(context) {
    let { data } = await context.$axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${context.route.params.index}`
    );
    context.store.commit("books/setBooks", data.items);
  }
};
</script>