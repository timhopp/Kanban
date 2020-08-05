<template>
  <div class="Task">
    <div class="bg-secondary text-white border rounded">
      <div>Task{{task.title}}</div>
      <form @submit.prevent="addComment(task.id)">
      <div  class="form-group">
        <label for="exampleInputEmail1">Add Comment</label>
        <input
          v-model="newComment.content"
          type="text"
          class="form-control"
          id="createcomment"
          placeholder="Enter Comment"
        />
      </div>
      <Button type="submit" class="btn btn-block btn-warning">Add</Button>
    </form>
    </div>
     <div>
      <comment
        class="task border rounded mb-3 square bg-info text-light"
        v-for="commentItem in comments"
        :comment="commentItem"
        :key="commentItem.id"
      ></comment>
    </div>
  </div>
</template>

<script>
import Comment from "../components/Comment"
export default {
  name: "Task",
  props: ["task",
  "comment"],
  data() {
    return {
      newComment: {
      },
    };
  },
   mounted() {
    // this.$store.dispatch("getComments", this.task.id);
  },
  computed: {
    comments(){
    return this.task.comments
    }
  },
  methods: {
    addComment(currentTaskId){
      // let currentList = this.$store.state.lists.find(list => list.id == currentListId)
      this.$store.dispatch('addComment', {
        content: this.newComment.content,
        taskId: currentTaskId,
      })
      console.log('sent comment')
    }

  },
  components: {
    Comment
  },
};
</script>


<style scoped>
</style>