<template>
  <nav v-if="isGlobalMenuOpen" class="nav">
    <ul class="nav_main">
      <li
        v-for="(item, index) in navigationItems"
        :key="index"
        class="nav_main_item"
      >
        <nuxt-link @click.native="toggleNavi()" :to="item.to">
          {{ item.title }}
        </nuxt-link>
      </li>
    </ul>
    <ul class="nav_sub">
      <li v-for="(item, index) in subItems" :key="index" class="nav_sub_item">
        <a
          v-if="item.isExternal"
          :href="item.to"
          @click.native="toggleNavi()"
          >{{ item.title }}</a
        >
        <nuxt-link v-else @click.native="toggleNavi()" :to="item.to">
          {{ item.title }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import { ContactFormUrl } from '@/plugins/constants'

export default {
  data() {
    return {
      guestItems: [
        { title: "top", to: '/' },
        // { title: this.$t('login'), to: '/login' },
        // { title: this.$t('signup'), to: '/signup' },
        { title: "information", to: '/information' },
        { title: "about", to: '/about' }
      ],
      // authItems: [
      //   { title: this.$t('top'), to: '/' },
      //   { title: this.$t('mypage'), to: '/mypage' },
      //   { title: this.$t('information'), to: '/information' },
      //   { title: this.$t('about'), to: '/about' },
      //   { title: this.$t('logout'), to: '/logout' }
      // ],
      subItems: [
        {
          title: "company",
          to: 'https://ragna-rock.com/',
          isExternal: true
        },
        {
          title: "terms",
          to: '/terms',
          isExternal: false
        },
        {
          title: "privacy",
          to: '/privacy',
          isExternal: false
        },
        {
          title: "contact",
          to: ContactFormUrl,
          isExternal: true
        }
      ]
    }
  },
  computed: {
    ...mapGetters({
      isGlobalMenuOpen: 'isGlobalMenuOpen',
      currentUser: 'auth/currentUser',
      isAnonymous: 'auth/isAnonymous'
    }),
    navigationItems() {
      return this.currentUser && !this.isAnonymous
        ? this.authItems
        : this.guestItems
    }
  },
  methods: {
    toggleNavi() {
      this.$store.dispatch('toggleGlobalMenuOpen')
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  background: #f6f6f6;
  padding: (100 / 750 * 100vw) (40 / 750 * 100vw) 0;
  z-index: index($Z, nav);
  width: 100%;
  height: 100vh;
  position: fixed;
  @include LScreen {
    padding: 79px 0 0;
  }
}
.nav_main {
  padding-top: (80 / 750 * 100vw);
  @include LScreen {
    padding-top: 80px;
    display: block;
    width: 500px;
    margin: 0 auto;
  }
}
.nav_main_item {
  > a {
    font-size: 3rem;
    line-height: (90 / 750 * 100vw);
    color: $TextPrimary;
    @include LScreen {
      font-size: 1.5rem;
      line-height: (45 / 15);
      margin: 0 20px;
    }
  }
}
.nav_sub {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: (154 / 750 * 100vw);
  @include LScreen {
    padding-top: 80px;
    width: 500px;
    margin: 0 auto;
  }
}
.nav_sub_item {
  > a {
    font-size: 2.4rem;
    line-height: (90 / 750 * 100vw);
    color: $TextSecondary;
    @include LScreen {
      font-size: 1.2rem;
      line-height: (45 / 12);
      margin: 0 20px;
    }
  }
}
</style>
