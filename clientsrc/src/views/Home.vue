<template>
  <div class="home">
    <h1>Welcome, {{user.name}}.</h1>
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