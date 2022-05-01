<template>
  <div class="all-wrapper">
    <div class="top-section">
      <Header msg="Task Tracker"/>

      <Button v-if="homePage" :text="showForm ? 'Close' : 'Add a Task'" @click="toggleForm"/>
    </div>

    <router-view :showForm="showForm"></router-view>

    <RecentTasksLink/>
  </div>
</template>

<script>
  import Header from "./components/Header.vue";
  import Button from "./components/Button.vue";
  import RecentTasksLink from "./components/RecentTasksLink.vue";

  export default {
    name: 'App',
    components: {
      Header,
      Button,
      RecentTasksLink,
    },
    data() {
      return {
        showForm: false,
      }
    },
    methods: {
      toggleForm() {
        this.showForm = !this.showForm;
      },
    },
    computed: {
      homePage() {
        return this.$route.path === '/';
      }
    }
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
    margin: 45px auto 20px;
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