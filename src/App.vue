<template>
  <div class="all-wrapper">
    <div class="top-section">
      <Header msg="Task Tracker"/>

      <Button :text="showForm ? 'Close' : 'Add a Task'" @click="toggleForm"/>
    </div>

    <AddTask v-if="showForm" @add-task="addTask"/>

    <Tasks :tasks="tasks" @delete-task="deleteTask" @toggle-reminder="toggleReminder"/>
  </div>
</template>

<script>
  import Header from "./components/Header.vue";
  import Button from "./components/Button.vue";
  import Tasks from "./components/Tasks.vue";
  import AddTask from "./components/AddTask.vue";

  export default {
    name: 'App',
    components: {
      AddTask,
      Header,
      Button,
      Tasks,
    },
    data() {
      return {
        tasks: [],
        showForm: false,
      }
    },
    created() {
      this.tasks = [
        {
          id: 0,
          text: 'Doctor appointment',
          day: 'March 1st at 12:15',
          reminder: true,
        },
        {
          id: 1,
          text: 'Meeting at school',
          day: 'March 3rd at 10:30',
          reminder: true,
        },
        {
          id: 2,
          text: 'Food shopping',
          day: 'March 3rd at 15:00',
          reminder: false,
        },
      ]
    },
    methods: {
      deleteTask(id) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
      },
      toggleReminder(id) {
        this.tasks = this.tasks.map((task) => {
          return task.id === id ? {...task, reminder: !task.reminder} : task
        });
      },
      addTask(newTask) {
        this.tasks = [...this.tasks, newTask];

        this.tasks.forEach((task, index) => task.id = index);
      },
      toggleForm() {
        this.showForm = !this.showForm;
      }
    },
  }
</script>

<style lang="scss">
  @import "assets/styles/scss/base/reset";

  body {
    font-family: Calibri, sans-serif;
    padding: 15px;
  }

  .all-wrapper {
    border: 1px solid #3defb8;
    border-radius: 6px;
    padding: 15px;
    margin: 20px;
    max-width: 450px;
    font-size: 16px;
    .top-section {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 15px;
    }
  }
</style>