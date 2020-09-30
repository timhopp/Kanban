<template>
  <div class="Comment p-2 row justify-content-between ml-2 mt-1 mr-3">
    <p class="text-white">{{ comment.content }}</p>
    <button @click="deleteComment(comment._id)" class="btn btn-outline-danger">
      Delete
    </button>
  </div>
</template>


<script>
export default {
  name: "Comment",
  props: ["comment"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    deleteComment(commentId) {
      // let task = this.$store.state.tasks.find(task => commentId == task.comments.includes(comment.commentId))
      this.$store.dispatch("deleteComment", {
        theCommentId: commentId,
        theTaskId: this.comment.taskId,
      });
    },
  },
  components: {},
};
</script>


<style scoped>
</style>