<template>
  <div>
    <p>You searched for {{this.$route.params.index}}</p>
    <Books />
  </div>
</template>

<script>
import Books from '~/components/Books'
export default {
  layout: "store",
  components: {
      Books
  },
  fetch ({store, route}) {
    store.dispatch('books/fireBooksRequest', route.params.index)
  }
};
</script>