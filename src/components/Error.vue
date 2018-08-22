<template>
  <p>Component <strong>{{name}}</strong> is missing from your components library</p>
</template>

<script lang="ts">
export default {
  props: {
    name: String,
  },
};
</script>


<style scoped>
p {
  color: red;
}
</style>

