<template>
  <header
    :class="[
      'header',
      { 'header-minimal': isMinimalHeader },
      { 'is-open': isGlobalMenuOpen }
    ]"
  >
    <h1 v-if="this.$route.path === '/'" class="header_logo">
      <nuxt-link @click.native="closeGlobalMenu" to="/">
        <p>Iron Gate</p>
      </nuxt-link>
    </h1>
    <p v-else class="header_logo">
      <nuxt-link @click.native="closeGlobalMenu" to="/">
        <p>Iron Gate</p>
      </nuxt-link>
    </p>
    <p class="header_disc">医師のためのAIメディア</p>
    <button v-if="!isMinimalHeader" @click="toggleNavi" class="header_toggle">
      <span :class="['header_toggle_item', { 'is-open': isGlobalMenuOpen }]" />
      <span :class="['header_toggle_item', { 'is-open': isGlobalMenuOpen }]" />
      <span :class="['header_toggle_item', { 'is-open': isGlobalMenuOpen }]" />
    </button>
  </header>
</template>

<script>
export default {
  methods: {
    toggleNavi() {
      this.$store.dispatch('toggleGlobalMenuOpen')
    },
    closeGlobalMenu() {
      if (this.isGlobalMenuOpen) {
        this.toggleNavi()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  display: grid;
  grid-template-columns: 1fr (156 / 750 * 100vw) ((40 + 40 + 32) / 750 * 100vw);
  background: $SecondaryLight;
  left: 0;
  top: 0;
  width: 100%;
  padding: 0 0 0 (40 / 750 * 100vw);
  align-items: center;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.3);
  z-index: index($Z, header);
  height: (100 / 750 * 100vw);
  @include LScreen {
    grid-template-columns: 1fr 94px ((40 + 40 + 21) * 1px);
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
    padding: 0 0 0 40px;
    height: 79px;
  }
}
.header.is-open {
  box-shadow: none;
  background: $Secondary;
}
.header-minimal {
  display: flex;
  justify-content: center;
  padding: 0;
}
.header_logo {
  width: (180 / 750 * 100vw);
  font-size: 2rem;
  @include LScreen {
    width: 150px;
  }
  img {
    width: 100%;
    height: auto;
    vertical-align: middle;
  }
}
.header_toggle {
  background: none;
  border: none;
  padding: (35 / 750 * 100vw) (40 / 750 * 100vw);
  outline: none;
  @include LScreen {
    padding: 30px 40px;
  }
}
.header_toggle_item {
  display: block;
  height: (2 / 750 * 100vw);
  width: (32/ 750 * 100vw);
  background: $PrimaryDark;
  margin-bottom: (13 / 750 * 100vw);
  transition: $Easing;
  transform-origin: center;
  @include LScreen {
    height: 1px;
    width: 21px;
    margin-bottom: 8px;
  }
  &:nth-child(3) {
    margin-bottom: 0;
  }
  &.is-open {
    position: absolute;
    &:nth-child(1) {
      transform: rotate(45deg);
      transform-origin: center;
      margin-bottom: 0;
    }
    &:nth-child(2) {
      width: 0;
    }
    &:nth-child(3) {
      transform: rotate(-45deg);
      transform-origin: center;
    }
  }
}
</style>
