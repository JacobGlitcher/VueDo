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
    async created() {
      this.tasks = await this.fetchTasks();
    },
    methods: {
      async deleteTask(id) {
        const res = await fetch(`api/tasks/${id}`, {
          method: 'DELETE',
        });

        if (res.status === 200) {
          this.tasks = this.tasks.filter((task) => task.id !== id);
        } else {
          console.log(res.status);
        }
      },
      async toggleReminder(id) {
        const toggleTask = await this.fetchTask(id);
        const updatedTask = {...toggleTask, reminder: !toggleTask.reminder}

        const res = await fetch(`api/tasks/${id}`, {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(updatedTask)
        });

        const data = await res.json();

        this.tasks = this.tasks.map((task) => {
          return task.id === id ? {...task, reminder: data.reminder} : task
        });
      },
      async addTask(newTask) {
        const res = await fetch('api/tasks', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(newTask)
        });

        const data = await res.json();

        this.tasks = [...this.tasks, data];

        this.tasks.forEach((task, index) => task.id = index);
      },
      toggleForm() {
        this.showForm = !this.showForm;
      },
      async fetchTasks() {
        const res = await fetch('api/tasks');

        return await res.json();
      },
      async fetchTask(id) {
        const res = await fetch(`api/tasks/${id}`);

        return await res.json();
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