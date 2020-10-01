<template>
  <div
    class="List"
    dropzone="zone"
    @dragover.prevent
    @drop.prevent="moveTask()"
  >
    <div class="bg-dark text-white rounded p-3">
      <div class="row ml-2 mt-1 mr-3">
        <div class="col">
          <h3 class="text-left">{{ list.title }}</h3>
        </div>
        <div class="col-1">
          <i @click="deleteList(list._id)">
            <svg
              width="1.5em"
              height="1.5em"
              viewBox="0 0 16 16"
              class="bi bi-trash pointer"
              fill="#d33682"
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
          </i>
        </div>
      </div>

      <form @submit.prevent="addTask(list.id)">
        <div class="form-group">
          <label for="exampleInputEmail1"></label>
          <input
            v-model="newTask.title"
            type="text"
            class="form-control"
            id="createtask"
            placeholder="Enter Task"
          />
        </div>
        <Button type="submit" class="btn btn-block btn-outline-success"
          >Add Task</Button
        >
      </form>
      <div>
        <task
          class="task rounded mb-3 square text-light"
          v-for="taskItem in tasks"
          :task="taskItem"
          :key="taskItem.id"
          draggable="true"
          @dragstart="reorderTask(task)"
        ></task>
      </div>
    </div>
  </div>
</template>


<script>
import Task from "../components/Task";
export default {
  name: "List",
  props: ["list", "task"],
  data() {
    return {
      newTask: {},
    };
  },
  mounted() {
    this.$store.dispatch("getAllTasks");
    // let x = this.$store.lists.forEach(list => list.boardId == this.$route.params.boardId)
    // this.$store.lists.forEach(list => this.$store.dispatch("getTasksByListId", list.boardId))

    //  this.$store.lists.map(this.$store.dispatch("getTasksByListId", list => list.boardId == this.$route.params.boardId ))
  },
  computed: {
    tasks() {
      return this.$store.state.tasks.filter(
        (task) => task.listId == this.list.id
      );
    },
  },
  methods: {
    addTask(currentListId) {
      // let currentList = this.$store.state.lists.find(list => list.id == currentListId)
      this.$store.dispatch("addTask", {
        title: this.newTask.title,
        listId: currentListId,
      });
    },
    deleteList(listId) {
      // let task = this.$store.state.tasks.find(task => commentId == task.comments.includes(comment.commentId))
      this.$store.dispatch("deleteList", {
        listId: listId,
        boardId: this.$route.params.boardId,
      });
      this.$store.dispatch("deleteTasksByListId", listId);
    },
    reorderTask(task, index) {
      // console.log(item, index);
      this.$store.dispatch("setTaskToMove", {
        task: task,
        oldList: this.list,
      });
    },
    moveTask() {
      //for first way
      // let moveData = {
      //   newRoomId: this.roomData.id,
      //   oldRoomId: this.tempItem.oldRoom.id,
      //   itemToMove: this.tempItem.item,
      // };

      let task = JSON.parse(event.dataTransfer.getData("data"));
      let moveData = {
        oldListId: event.dataTransfer.getData("list"),
        taskToMove: task,
        listId: this.list.id,
      };
      // console.log(moveData);
      this.$store.dispatch("moveTask", moveData);
    },
  },
  components: {
    Task,
  },
};
</script>


<style scoped>
.hover {
  transition: all 0.3s ease;
}
.hover:hover {
  box-shadow: 3px 10px #3b216b !important;
  transform: translateY(-3px);
}
.pointer {
  cursor: pointer;
}
</style>