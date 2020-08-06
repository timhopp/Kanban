<template>
  <div class="home text-primary">
    <img class="rounded" :src="user.picture" alt />
    <h1>Welcome, {{user.name}}</h1>
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
  methods: {},
  components: {},
};
</script>


<style scoped>
</style>