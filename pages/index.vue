<template>
  <div class="index">    
    <div class="swiper">
      <swiper ref="mySwiper" :options="swiperOption">
        <swiper-slide> <nuxt-link to="/"><img src="/image/IMG_2310.png" alt=test class="swiper_visual"></nuxt-link></swiper-slide>
        <swiper-slide> <img src="/image/IMG_2311.png" alt=test2 class="swiper_visual"></swiper-slide>
        <swiper-slide> <img src="/image/IMG_2313.png" alt=test3 class="swiper_visual"></swiper-slide>
        <div slot="pagination" class="swiper-pagination"></div>
        <div slot="button-prev" class="swiper-button-prev"></div>
        <div slot="button-next" class="swiper-button-next"></div>
      </swiper>
    </div>  
    <PostContainer
      page-type="post"
      :posts="posts"
      :handle-click-more="fetchMore"
    />
       
  </div>
  
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import PostContainer from '@/components/PostContainer'
import { CONTENT_TYPE_POST } from '@/config/constant'

export default {
  components: {
    PostContainer
  },
   data() {
    return {
      swiperOption: {
        speed: 150,
        loop: false,
        slidesPerView: 'auto',
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  computed: {
    ...mapGetters(['posts']),
    ...mapState({
      page: state => state.index.post.page
    })
  },
  async fetch({ store }) {
    if (!process.browser) {
      await store.dispatch('fetchPosts', { pageType: CONTENT_TYPE_POST, page: 1 })
    }
  },
  mounted() {
    if (!this.posts.length) {
      this.fetchPosts({ pageType: CONTENT_TYPE_POST, page: 1 })
    }
  },
  methods: {
    ...mapActions(['fetchPosts']),
    fetchMore() {
      this.fetchPosts({ pageType: CONTENT_TYPE_POST, page: this.page + 1 })
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper_visual {
  width: 700px;
  height: auto;
}
</style>
