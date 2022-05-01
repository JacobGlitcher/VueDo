<template>
  <div class="recent-tasks">
    <router-link :to="to" class="lnk">{{text}}</router-link>
  </div>
</template>

<script>
export default {
  name: 'RecentTasksLink',
  data() {
    return {
    }
  },
  props: {
    to: String,
    text: String,
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/styles/scss/components/links";

  .recent-tasks {
    margin-top: 15px;
    a {
      font-size: 18px;
    }
  }
</style>