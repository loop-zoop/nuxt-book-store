<template>
  <div>
    <b-row class='mt-4'>
      <b-col v-for="(book, index) in books" :key="index" lg="4" md="6">
        <b-card bg-variant="light" class="mb-4">
          <img :src="book.volumeInfo.imageLinks.smallThumbnail" alt="Book cover">
          <b-card-title class='mb-1'>{{book.volumeInfo.title}}</b-card-title>
          <b-card-text class='mb-1'>{{book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'unknown'}}</b-card-text>
          <b-card-text class="small text-muted mb-4">{{book.volumeInfo.publishedDate ? book.volumeInfo.publishedDate.split('-').reverse().join('.') : 'none'}}</b-card-text>
          <b-button @click.prevent='order(index)' href="#" variant="warning">Order</b-button>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters({
      books: "books/allBooks"
    })
  },
  methods: {
    ...mapActions({
      order: 'orders/order'
    })
  }
};
</script>
