<template>
  <div
    class="w-full bg-gray-200 h-2 relative overflow-hidden"
    :class="[{'rounded-full': rounded}, { indeterminate: indeterminate}]"
  >
    <div
      class="h-full progressbar"
      :class="[`bg-${color}-500`, {'absolute top-0': indeterminate}, {'rounded-full': rounded}]"
      role="progressbar"
      :style="{width: `${percentage}%`}"
      :aria-valuenow="percentage"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <span class="flex items-center h-full">
        <slot />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'green'
    },
    percentage: {
      type: Number,
      default: 0
    },
    rounded: {
      type: Boolean,
      default: true
    },
    indeterminate: Boolean
  }
}
</script>
<style scoped>
.progressbar {
  transition: width 5s ease;
}
</style>
