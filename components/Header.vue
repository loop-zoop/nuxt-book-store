<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-nav-form>
        <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
      </b-nav-form>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-text class="mr-2">You added 0 items; total cost: 0</b-nav-text>
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
              <path d="M6 6 L30 6 27 19 9 19 M27 23 L10 23 5 2 2 2"></path>
              <circle cx="25" cy="27" r="2"></circle>
              <circle cx="12" cy="27" r="2"></circle>
            </svg>
          </b-nav-item>
          <b-nav-item href="#">
            <n-link to="/login">Log In</n-link>
          </b-nav-item>
          <b-nav-text>/</b-nav-text>
          <b-nav-item href="#">
            <n-link to="/signup">Sign Up</n-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>
