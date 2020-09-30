<template>
  <div>
    <div
      class="Task hover pointer"
      @click="setCurrentTask(task.id)"
      data-toggle="modal"
      data-target="#taskModal"
      @dragstart="moveTask()"
    >
      <div class="bg-secondary text-white rounded mt-2 p-2">
        <div class="row justify-content-between ml-2 mt-1 mr-3">
          <h5 class="text-left">{{ task.title }}</h5>
          <button @click="deleteTask(task._id)" class="btn btn-outline-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Comment from "../components/Comment";
export default {
  name: "Task",
  props: ["task", "comment"],
  data() {
    return {
      newComment: {},
    };
  },
  mounted() {},
  computed: {
    comments() {
      return this.task.comments;
    },
    currentTask() {
      return this.$store.state.currentTask;
    },
  },
  methods: {
    deleteTask(taskId) {
      // let task = this.$store.state.tasks.find(task => commentId == task.comments.includes(comment.commentId))
      this.$store.dispatch("deleteTask", taskId);
    },
    moveTask() {
      event.dataTransfer.setData("data", JSON.stringify(this.task));
      event.dataTransfer.setData("list", this.task.listId);
    },
    setCurrentTask(taskId) {
      this.$store.dispatch("currentTask", taskId);
      this.$router.push({
        name: "currentTask",
        params: { taskId: taskId },
      });
    },
  },
  components: {
    Comment,
  },
};
</script>


<style scoped>
.hover {
  transition: all 0.3s ease;
}
.hover:hover {
  box-shadow: 3px 10px #6e42c1 !important;
  transform: translateY(-3px);
}
.pointer {
  cursor: pointer;
}
</style>