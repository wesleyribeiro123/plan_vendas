<template>
  <div class="sidebar">

  </div>
</template>

<script>
export default {
  computed: {
    isMobile() {
      return (this.$q.screen.xs || this.$q.screen.sm)
    }
  }
}
</script>

<style>

</style>