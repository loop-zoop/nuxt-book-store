<template>
  <b-container>
    <Header @search-redirect='searchRedirect' />
    <nuxt />
  </b-container>
</template>

<script>
import Header from "~/components/Header";

export default {
  components: {
    Header
  },
  methods: {
    searchRedirect(keyWord) {
      this.$router.push(`/search/${keyWord}`)
    }
  }
};
</script>



