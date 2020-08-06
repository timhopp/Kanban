<template>
  <div class="List">
    <div class="bg-light text-white border rounded p-3">
      <div><h5>List{{list.title}}</h5></div>
      <form @submit.prevent="addTask(list.id)">
      <div  class="form-group">
        <label for="exampleInputEmail1"></label>
        <input
          v-model="newTask.title"
          type="text"
          class="form-control"
          id="createtask"
          placeholder="Enter Task"
        />
      </div>
      <Button type="submit" class="btn btn-block btn-warning">Add</Button>
    </form>
     <div>
      <task
        class="task border rounded mb-3 square bg-info text-light"
        v-for="taskItem in tasks"
        :task="taskItem"
        :key="taskItem.id"
      ></task>
    </div>
    </div>
  </div>
</template>


<script>
import Task from "../components/Task"
export default {
  name: "List",
  props: ["list",
  "task"
  ],
  data() {
    return {
      newTask: {
      },
    };
  },
  mounted() {
   this.$store.dispatch("getAllTasks")
    // let x = this.$store.lists.forEach(list => list.boardId == this.$route.params.boardId)
    // this.$store.lists.forEach(list => this.$store.dispatch("getTasksByListId", list.boardId))
    
  //  this.$store.lists.map(this.$store.dispatch("getTasksByListId", list => list.boardId == this.$route.params.boardId ))

  },
  computed: {
     tasks() {
      return this.$store.state.tasks.filter(task => task.listId == this.list.id);
    },
  },
  methods: {
    addTask(currentListId){
      // let currentList = this.$store.state.lists.find(list => list.id == currentListId)
      this.$store.dispatch('addTask', {
        title: this.newTask.title,
        listId: currentListId,
      })
      console.log('sent talks', this.title, this.listId)
    }

  },
  components: {
    Task
  },
};
</script>


<style scoped>
</style>