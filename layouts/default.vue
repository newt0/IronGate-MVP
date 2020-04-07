<template>
  <div class="container">
    <CommonHeader />
    <GlobalNavigation />
    <TheMain />
    <CommonFooter />
    <TheError v-if="error" :message="error" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TheHeader from '@/layouts/partial/TheHeader'
import TheMain from '@/layouts/partial/TheMain'
import TheFooter from '@/layouts/partial/TheFooter'
import TheError from '@/layouts/partial/TheError'
import CommonFooter from '@/layouts/partial/CommonFooter'
import CommonHeader from '@/layouts/partial/CommonHeader'
import GlobalNavigation from '~/components/GlobalNavigation.vue'

export default {
  components: {
    TheHeader,
    TheMain,
    TheFooter,
    TheError,
    CommonFooter,
    CommonHeader,
    GlobalNavigation
  },
  computed: {
    ...mapState(['error'])
  }
}
</script>

<style lang="scss">
// ==========================================================================
// !!!グローバル!!!
// ==========================================================================
html {
  font-size: (10 / 750 * 100vw);
  background: $Secondary;
  position: relative;
  @include LScreen {
    font-size: 10px;
  }
}
body {
  font-weight: normal;
  line-height: 1.6;
  letter-spacing: 0.14em;
  color: $color-font;
  @include font-serif;
}
a {
  text-decoration: none;
}
ul,
ol {
  list-style: none;
}
</style>
