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
  },
  components: {
    comment,
  },
};
</script>


<style scoped>
</style>