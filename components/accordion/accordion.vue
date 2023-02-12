<template>
  <ul class="accordion">
    <slot />
  </ul>
</template>

<script>
export default {
  props: {},
  data () {
    return {
      Accordion: {
        count: 0,
        active: null
      }
    }
  },
  provide () {
    return { Accordion: this.Accordion }
  }
}
</script>

<style>
.accordion {
  list-style: none;
  margin: 0;
  padding: 0;
}
.accordion __item:last-child {
    border-bottom: none;
  }
</style>
