<template>
  <ul class="tasks-list">
    <li :key="task.id" v-for="task in tasks"
        :class="[task.reminder && 'reminder', 'task-item']"
        @click="$emit('toggle-reminder', task.id)">
      <Task :task="task" @delete-task="$emit('delete-task', task.id)"/>
    </li>
  </ul>
</template>

<script>
  import Task from "./Task.vue";

  export default {
    name: 'Tasks',
    props: {
      tasks: Array,
    },
    components: {
      Task,
    },
  }
</script>

<style lang="scss" scoped>
  .tasks-list {
    .task-item {
      margin-bottom: 10px;
      background-color: #f3f3f3;
      padding: 10px;
      border-radius: 6px;
      display: flex;
      justify-content: space-between;
      cursor: pointer;
      user-select: none;
      &.reminder {
        border-left: 4px solid #7bd077;
        padding: 10px 10px 10px 6px;
      }
    }
  }
</style>