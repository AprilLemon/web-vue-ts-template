<template>
  <div>
    login
    <div>{{ a }}</div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from "vue";

  const a = $ref('222')
  // const b = reactive({
  //   test: '12321'
  // })
</script>

<style scoped lang="scss">

</style>
