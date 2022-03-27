<template>
  <button class="btn">{{text}}</button>
</template>

<script>
  export default {
    name: 'Button',
    props: {
      text: String
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/styles/scss/components/_buttons.scss";
</style>