<template>
  <div class="row">
    <h1 class="col-sm-12 text-center">Checkout</h1>
    <p class="col-sm-12 text-center">Fill in your deatils to complete order:</p>
    <form class="col-sm-7 centered-form">
      <div class="form-group">
        <label>Name</label>
        <input
          type="text"
          :class="['form-control']"
          placeholder="Enter name"
          v-model="form.name.value"
        />
        <small class="form-text" v-show="!form.name.isValid">Name should be at least 2 letters long</small>
      </div>
      <div class="form-group">
        <label>Email</label>
        <input
          type="email"
          :class="['form-control']"
          placeholder="Enter email"
          v-model="form.email.value"
        />
        <small class="form-text" v-show="!form.email.isValid">Your email is invalid</small>
      </div>
      <div class="form-group">
        <label>Phone</label>
        <input
          type="text"
          :class="['form-control']"
          placeholder="+380..."
          v-model="form.phone.value"
        />
        <small class="form-text" v-show="!form.phone.isValid">Your phone is invalid</small>
      </div>
    </form>
    <b-button @click.prevent='validate' block class="btn btn-warning form-button mt-4 col-sm-7">Order</b-button>
  </div>
</template>

<script>
export default {
  layout: "centered-form",
  head: {
    title: "Checkout"
  },
  data() {
    return {
      form: {
        name: {
          value: "",
          isValid: Boolean
        },
        email: {
          value: "",
          isValid: Boolean
        },
        phone: {
          value: "",
          isValid: Boolean
        }
      }
    };
  },
  methods: {
    validate() {
        const email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const phone_regex = /^\+380\d{9}$/

        this.form.name.value.length > 2 ? this.form.name.isValid = true : this.form.name.isValid = false
        email_regex.test(this.form.email.value) ? this.form.email.isValid = true : this.form.email.isValid = false
        phone_regex.test(this.form.phone.value) ? this.form.phone.isValid = true : this.form.phone.isValid = false

        if(this.form.name.isValid && this.form.email.isValid && this.form.phone.isValid) {
            this.$store.dispatch('orders/completeOrder')
        }
    }
  }
};
</script>