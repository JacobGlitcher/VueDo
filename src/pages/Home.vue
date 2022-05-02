<template>
  <AddTask v-if="showForm" @add-task="addTask"/>

  <Tasks :tasks="tasks" @delete-task="deleteTask" @toggle-reminder="toggleReminder"/>

  <RecentTasksLink v-if="tasks.length" :to="to" :text="text"/>
</template>

<script>
  import Tasks from "../components/Tasks.vue";
  import AddTask from "../components/AddTask.vue";
  import RecentTasksLink from "../components/RecentTasksLink.vue";

  export default {
    name: 'Home',
    components: {
      AddTask,
      Tasks,
      RecentTasksLink,
    },
    props: {
      showForm: Boolean,
      to: String,
      text: String,
    },
    data() {
      return {
        tasks: [],
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