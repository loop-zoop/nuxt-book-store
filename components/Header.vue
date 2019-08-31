<template>
  <div>
    <b-navbar toggleable="lg" class="header" type="dark">
      <b-nav-form>
        <b-form-input v-model="searchKeyWord" size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
        <b-button size="sm" class="my-2 my-sm-0" @click.prevent="search(searchKeyWord)">Search</b-button>
      </b-nav-form>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-text
            class="mr-2"
          >You added {{ orderCount }} items; total cost: {{totalOrdersPrice}}</b-nav-text>
          <b-nav-item class="cart mr-4">
            <svg
              id="i-cart"
              viewBox="0 0 32 32"
              width="1.7em"
              height="1.7em"
              fill="none"
              stroke="currentcolor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path d="M6 6 L30 6 27 19 9 19 M27 23 L10 23 5 2 2 2" />
              <circle cx="25" cy="27" r="2" />
              <circle cx="12" cy="27" r="2" />
            </svg>
          </b-nav-item>
          <n-link v-if="!isUserLoggedIn" class="nav-link" to="/login">Log In</n-link>
          <b-nav-text v-if="!isUserLoggedIn">/</b-nav-text>
          <n-link v-if="!isUserLoggedIn" class="nav-link" to="/signup">Sign Up</n-link>
          <b-nav-item @click="userSignOut" v-if="isUserLoggedIn">Log Out</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      searchKeyWord: ""
    };
  },
  computed: {
    ...mapGetters({
      isUserLoggedIn: "user/userLogInStatus",
      orderCount: "orders/orderCount"
    }),
    totalOrdersPrice() {
      let price = 0;
      this.$store.state.orders.orders.forEach(function(book) {
        book.saleInfo.retailPrice ? price += book.saleInfo.retailPrice.amount : price += 20
      });
      return price;
    } 
  },
  methods: {
    search(keyWord) {
      this.$emit("search-redirect", keyWord);
    },
    userSignOut() {
      this.$store.commit("orders/cleanOrders");
      this.$store.commit("user/signOut");
    }
  }
};
</script>
