<template>
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

      <!-- Modal -->
      <!-- NOTE How to get modal working with scroll? V-if wont work.. -->
      <!-- <div
        class="modal fade"
        id="taskModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content bg-dark">
            <div class="modal-header text-center">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <h3 class="">Create A List</h3>
              <form @submit.prevent="addList">
                <div class="form-group"></div>
                <button
                  id="closeListModal"
                  type="submit"
                  class="btn btn-block btn-outline-success"
                >
                  Submit List
                </button>
                <button
                  type="button"
                  class="btn btn-block btn-outline-danger"
                  data-dismiss="modal"
                  @click="clearListCreate()"
                >
                  Close
                </button>
              </form>
            </div>
            <div class="modal-footer"></div>
          </div>
        </div>
      </div> -->

      <form @submit.prevent="addComment(task.id)">
        <div class="form-group">
          <label for="exampleInputEmail1"></label>
          <input
            v-model="newComment.content"
            type="text"
            class="form-control"
            id="createcomment"
            placeholder="Enter Comment"
          />
        </div>
        <Button type="submit" class="btn btn-block btn-outline-success"
          >Add</Button
        >
      </form>
    </div>
    <div>
      <comment
        class="task rounded mb-3 square bg-secondary text-light"
        v-for="commentItem in comments"
        :comment="commentItem"
        :key="commentItem.id"
      ></comment>
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
  mounted() {
    // this.$store.dispatch("getComments", this.task.id);
  },
  computed: {
    comments() {
      return this.task.comments;
    },
  },
  methods: {
    addComment(currentTaskId) {
      // let currentList = this.$store.state.lists.find(list => list.id == currentListId)
      this.$store.dispatch("addComment", {
        content: this.newComment.content,
        taskId: currentTaskId,
      });
      console.log("sent comment");
    },
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