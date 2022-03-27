<template>
  <div class="text-section">
    <p class="task-list__inner-title">{{task.text}}</p>
    <p class="task-list__inner-day">{{task.day}}</p>
  </div>

  <Button text="Delete"/>
</template>

<script>
  import Button from "./Button.vue";

  export default {
    name: 'Task',
    props: {
      task: Object
    },
    components: {
      Button,
    }
  }
</script>

<style lang="scss" scoped>
  p {
    font-size: 18px;
  }

  .task-list__inner-title {
    font-weight: 500;
    margin-bottom: 5px;
  }

  .task-list__inner-day {
    font-size: 16px;
    font-style: italic;
  }
</style>