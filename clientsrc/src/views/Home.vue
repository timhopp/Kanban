<template>
  <div class="home text-primary mt-5">
    <div v-if="!user.email">
      <h1>Please Log In</h1>
    </div>
    <div v-if="user.email">
      <h1>Thanks For Logging In,</h1>
      <button @click="goToBoards" class="btn btn-outline-warning">
        Go To Boards
      </button>
    </div>
  </div>
</template>


<script>
export default {
  name: "home",
  data() {
    return {};
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    goToBoards() {
      this.$router.push({ name: "boards", path: "/boards" });
    },
  },
  components: {},
};
</script>


<style scoped>
</style>