<template>
  <div>
    <h1 class="mb-4">Log In</h1>
    <b-row>
      <b-form class="centered-form">
        <b-form-group label="Email" label-align="left">
          <b-input v-model="email" type="email"></b-input>
        </b-form-group>
        <b-form-group label="Password" label-align="left">
          <b-input v-model="password" type="password"></b-input>
        </b-form-group>
        <p v-if="error">{{error.message}}</p>
        <p>
          <nuxt-link to="/signup">Don't have an account? Sign Up here!</nuxt-link>
        </p>
        <b-button variant='warning' @click="logInUser">Log In</b-button>
      </b-form>
    </b-row>
  </div>
</template>

<script>
import firebase from "~/plugins/firebase";

export default {
  layout: 'centered-form',
  head: {
    title: "Log In"
  },
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    async logInUser() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$store.commit("user/signIn", firebase.auth().currentUser);
        })
        .then(() => {
          if (this.$store.state.orders.currentOrder) {
            this.$store.commit(
              "orders/addBookToOrders",
              this.$store.state.orders.currentOrder
            );
          }
        })
        .then(() => {
          this.$router.push("/");
        })
        .catch(error => {
          this.error = error;
        });
    }
  },
  beforeRouteLeave(to, from, next) {
    if (this.$store.state.orders.currentOrder) {
      this.$store.commit(
        "orders/removeCurrentOrder",
        this.$store.state.orders.currentOrder
      );
    }
    next();
  }
};
</script>
