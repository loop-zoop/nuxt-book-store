<template>
  <div>
    <h1 class="mb-4">Sign Up</h1>
    <b-row>
      <b-form class="centered-form">
        <b-form-group label="Email" label-align="left">
          <b-input v-model='email' type="email"></b-input>
        </b-form-group>
        <b-form-group label="Password" label-align="left">
          <b-input v-model='password' type="password"></b-input>
        </b-form-group>
        <p v-if='error'> {{error.message}} </p>
        <p><nuxt-link to='/login'>Already have an account? Log In here!</nuxt-link></p>
        <b-button variant='warning' @click="registerUser">Sign Up</b-button>
      </b-form>
    </b-row>
  </div>
</template>

<script>
import firebase from "~/plugins/firebase";

export default {
  layout: 'centered-form',
  head: {
    title: "Sign Up"
  },
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    registerUser() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .catch(error => {
          this.error = error;
        });
    }
  }
};
</script>
