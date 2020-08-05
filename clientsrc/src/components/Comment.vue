<template>
  <div class="Comment">
    <p>{{comment.content}}</p>
  </div>
</template>


<script>
export default {
  name: 'Comment',
  props: [
    "comment"
  ],
  data(){
    return {}
  },
  computed:{},
  methods:{},
  components:{}
}
</script>


<style scoped>

</style>