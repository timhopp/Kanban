<template>
  <div class="currentTask">
    <!-- Modal -->
    <div class="modal fade" id="currentTaskModal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content bg-dark">
          <div class="modal-header text-center">
            <button type="button" class="close" data-dismiss="modal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row justify-content-right">
              <button
                @click="deleteTask(currentTask._id, currentTask.boardId)"
                class="btn btn-outline-danger"
                id="deleteTask"
              >
                Delete
              </button>
              <!-- <i @click="deleteTask(task._id)">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-trash"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                  />
                </svg>
              </i> -->
            </div>
            <h3 class="text-white">{{ currentTask.title }}</h3>
            <div>
              <comment
                class="task rounded mb-3 square bg-secondary text-light"
                v-for="commentItem in comments"
                :comment="commentItem"
                :key="commentItem.id"
              ></comment>
              <form
                @submit.prevent="
                  addComment(currentTask.id), clearCommentCreate()
                "
              >
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
                <Button
                  type="submit"
                  id="commentForm"
                  class="btn btn-block btn-outline-success"
                  >Add</Button
                >
              </form>
            </div>
            <form>
              <div class="form-group"></div>
              <button
                type="button"
                class="btn btn-block btn-outline-danger"
                data-dismiss="modal"
              >
                Close
              </button>
            </form>
          </div>
          <div class="modal-footer"></div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import comment from "../components/Comment";
export default {
  name: "currentTask",
  props: ["comment"],
  data() {
    return {
      newComment: {},
    };
  },
  mounted() {
    $(document).ready(() => {
      $("#currentTaskModal").modal("show");
    });
    $("#currentTaskModal").on("hidden.bs.modal", () => {
      this.$router.push({
        name: "board",
        params: { boardId: this.$store.state.currentTask.boardId },
      });
    });
    $("#commentForm").on("click", () => {
      return this.$store.state.currentTask.comments;
    });
    $("#deleteTask").on("click", () => {});
    // $("#closeBoardModal").on("click", () => {
    //   $("#boardModal").modal("hide");
    // });
  },
  computed: {
    currentTask() {
      return this.$store.state.currentTask;
    },
    comments() {
      return this.$store.state.currentTask.comments;
    },
  },
  methods: {
    addComment(currentTaskId) {
      this.$store.dispatch("addComment", {
        content: this.newComment.content,
        taskId: currentTaskId,
      });
      console.log("sent comment");
    },
    clearCommentCreate() {
      this.newComment = {};
    },
    deleteTask(taskId, boardId) {
      // let task = this.$store.state.tasks.find(task => commentId == task.comments.includes(comment.commentId))
      debugger;
      this.$router.push({
        name: "board",
        params: { boardId: boardId },
      });
      this.$store.dispatch("deleteTask", taskId);
    },
  },
  components: {
    comment,
  },
};
</script>


<style scoped>
</style>