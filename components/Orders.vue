<template>
  <table class="table table-striped table-dark">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Book cover</th>
        <th scope="col">Description</th>
        <th scope="col">Price</th>
      </tr>
    </thead>
    <tbody v-for="(order, index) in this.$store.state.orders.orders" :key="index">
      <tr>
        <th scope="row">{{index}}</th>
        <td><img :src="order.volumeInfo.imageLinks.smallThumbnail" alt=""></td>
        <td>{{order.volumeInfo.description || 'none'}}</td>
        <td>{{order.saleInfo.retailPrice ? `${order.saleInfo.retailPrice.amount} UAH` : '20 UAH'}}</td>
      </tr>
    </tbody>
  </table>
</template>