<template>
  <div>
    <div class="mb-4 pt-3">
      <n-link to="/" class="btn btn-warning">Go Back</n-link>
    </div>
    <Orders />
    <p class='text-center' v-show='!isCartEmpty'>Your cart is empty!</p>
    <p class="text-right"><strong>Total: {{totalOrdersPrice}} UAH</strong></p>
    <b-button to='/checkout' block variant="warning" class='mb-5 mt-3' :disabled='!isCartEmpty'>Confirm</b-button>
  </div>
</template>

<script>
import Orders from "~/components/Orders";
import { mapGetters } from 'vuex';

export default {
  head: {
    title: "Cart"
  },
  components: {
    Orders
  },
  computed: {
      ...mapGetters({
          totalOrdersPrice: 'orders/totalOrdersPrice',
          isCartEmpty: 'orders/orderCount'
      })
  }
};
</script>>