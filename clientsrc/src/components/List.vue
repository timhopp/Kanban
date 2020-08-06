<template>
  <div class="List" dropzone="zone" @dragover.prevent @drop.prevent="moveTask()">
    <div class="bg-light text-success border rounded p-3">
      <div class="row justify-content-between ml-2 mt-1 mr-3">
        <h3>{{list.title}}</h3>
        <button @click="deleteList(list._id)" class="btn btn-danger">Delete</button>
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
        <Button type="submit" class="btn btn-block btn-warning">Add Task</Button>
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
      console.log("sent talks", this.title, this.listId);
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
</style>