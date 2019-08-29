<template>
  <div>
    <Books/>
  </div>
</template>

<script>
import Books from "~/components/Books";

export default {
  layout: "store",
  components: {
    Books
  },
  head: {
    title: "Home"
  },
  async fetch ({ app, store }) {
    let { data } = await app.$axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=javascript"
    );
    store.commit('books/setBooks', data.items);
  }
};
</script>
