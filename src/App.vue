<template>
  <div class="all-wrapper">
    <div class="top-section">
      <Header msg="Task Tracker"/>

      <Button text="Add a Task"/>
    </div>

    <Tasks :tasks="tasks"/>
  </div>
</template>

<script>
  import Header from "./components/Header.vue";
  import Button from "./components/Button.vue";
  import Tasks from "./components/Tasks.vue";

  export default {
    name: 'App',
    components: {
      Header,
      Button,
      Tasks,
    },
    data() {
      return {
        tasks: []
      }
    },
    created() {
      this.tasks = [
        {
          id: 1,
          text: 'Doctor appointment',
          day: 'March 1st at 12:15',
          reminder: true,
        },
        {
          id: 2,
          text: 'Meeting at school',
          day: 'March 3rd at 10:30',
          reminder: true,
        },
        {
          id: 3,
          text: 'Food shopping',
          day: 'March 3rd at 15:00',
          reminder: false,
        },
      ]
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