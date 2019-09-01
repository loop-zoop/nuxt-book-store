<template>
  <div>
    <Books/>
    <Alert v-show='this.$store.state.orders.showOrderAlert' />
  </div>
</template>

<script>
import Books from "~/components/Books";
import Alert from "~/components/Alert";

export default {
  layout: "store",
  components: {
    Books,
    Alert
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
