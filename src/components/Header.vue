<template>
  <h1>{{msg}}</h1>
</template>

<script>
  export default {
    name: 'Header',
    props: {
      msg: String,
    }
  }
</script>

<style lang="scss" scoped>
  h1 {
    font-size: 24px;
    font-weight: 500;
  }
</style>