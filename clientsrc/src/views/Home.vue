<template>
  <div class="home">
    <img class="rounded" :src="user.picture" alt="" />
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
    user(){
      return this.$store.state.user
    }
  },
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>