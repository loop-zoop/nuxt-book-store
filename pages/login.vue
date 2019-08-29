<template>
  <div>
    <h1 class="mb-4">Log In</h1>
    <b-row>
      <b-form class="login-signup-form">
        <b-form-group label="Email" label-align="left">
          <b-input v-model="email" type="email"></b-input>
        </b-form-group>
        <b-form-group label="Password" label-align="left">
          <b-input v-model="password" type="password"></b-input>
        </b-form-group>
        <p>
          <nuxt-link to="/signup">Don't have an account? Sign Up here!</nuxt-link>
        </p>
        <b-button @click="logInUser">Log In</b-button>
      </b-form>
    </b-row>
  </div>
</template>

<script>
import firebase from "~/plugins/firebase";

export default {
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
    logInUser() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .catch(error => {
          this.error = error;
        });
      this.$store.commit('user/signIn', firebase.auth().currentUser)
      this.$router.replace("/");
    }
  }
};
</script>
