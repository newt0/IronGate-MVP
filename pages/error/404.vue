<template>
  <p class="oops">ナニカガオカシイデス</p>
</template>

<script>
export default {
  head() {
    return {
      title: `ナニカガオカシイデス | 医師のためのAIメディア`
    }
  }
}
</script>

<style lang="scss" scoped>
.oops {
  margin: 2rem 0 8rem;
  font-size: 2rem;
  @include min {
    font-size: 2.5rem;
  }
}
</style>
