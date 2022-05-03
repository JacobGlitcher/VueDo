<template>
  <h1>Recent Tasks:</h1>

  <Tasks :tasks="tasks" class="recent-tasks-list"/>

  <RecentTasksLink to="/" text="Go Back"/>
</template>

<script>
import Tasks from "../components/Tasks.vue";
import RecentTasksLink from "../components/RecentTasksLink.vue";

export default {
  name: 'RecentTasks',
  components: {
    Tasks,
    RecentTasksLink,
  },
  data() {
    return {
      tasks: [],
    }
  },
  props: {
    showForm: Boolean,
  },
  async created() {
    const fetchedTasks = await this.fetchTasks();

    if (fetchedTasks.length > 1) {
      this.tasks = fetchedTasks.filter((item, index) => {
        if (index > fetchedTasks.length * .4) {
          return item;
        }
      });
    } else {
      this.tasks = fetchedTasks;
    }
  },
  methods: {
    async fetchTasks() {
      const res = await fetch('api/tasks');

      return await res.json();
    }
  },
}
</script>

<style lang="scss" scoped>
  h1 {
    margin-bottom: 15px;
    font-size: 16px;
  }
</style>