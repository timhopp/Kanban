<template>
  <div>
    <div
      class="Task hover pointer"
      @click="setCurrentTask(task.id)"
      data-toggle="modal"
      data-target="#taskModal"
      @dragstart="moveTask()"
    >
      <div class="bg-secondary text-white rounded mt-2">
        <div class="row justify-content-between ml-2 mt-1 mr-3 pt-2">
          <h5 class="text-left pl-2">{{ task.title }}</h5>
        </div>
        <div class="row justify-content-center">
          <p class="text-left">{{ task.comments.length }} Comments</p>
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
    moveTask() {
      event.dataTransfer.setData("data", JSON.stringify(this.task));
      event.dataTransfer.setData("list", this.task.listId);
    },
    setCurrentTask(taskId) {
      //Need to add boardId to currentTask
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