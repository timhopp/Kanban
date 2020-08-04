<template>
  <div class="List">
    <div class="bg-dark text-white border rounded">
      <div>hello{{list.title}}</div>
    </div>
  </div>
</template>


<script>
export default {
  name: "List",
  props: ["list"],
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {},
};
</script>


<style scoped>
</style>