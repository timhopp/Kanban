<template>
  <div class="Comment">
    <p>{{comment.content}}</p>
    <button @click="deleteComment(comment._id)" class="btn btn-block btn-danger">Delete</button>
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
  methods:{
    deleteComment(commentId){
      debugger
      // let task = this.$store.state.tasks.find(task => commentId == task.comments.includes(comment.commentId))
      this.$store.dispatch('deleteComment', {
        theCommentId: commentId,
        theTaskId: this.comment.taskId,
      })
    }
  },
  components:{}
}
</script>


<style scoped>

</style>