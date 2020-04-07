<template>
  <div class="index">   
    <PostContainer
      page-type="post"
      :posts="posts"
      :handle-click-more="fetchMore"
    />
       <div class="walkthrough">
        <swiper ref="mySwiper" :options="swiperOption">
          <swiper-slide> <nuxt-link to="/"><img src="/image/IMG_2310.png" alt=test class="walkthrough_visual"></nuxt-link></swiper-slide>
          <swiper-slide> <img src="/image/IMG_2311.png" alt=test2 class="walkthrough_visual"></swiper-slide>
          <swiper-slide> <img src="/image/IMG_2313.png" alt=test3 class="walkthrough_visual"></swiper-slide>
          <div slot="pagination" class="swiper-pagination"></div>
          <div slot="button-prev" class="swiper-button-prev"></div>
          <div slot="button-next" class="swiper-button-next"></div>
        </swiper>
      </div>  
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
        loop: true,
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
.walkthrough {
  position: relative;
  background-color: $SecondaryLight;
  // padding-bottom: (50 / 750 * 100vw);
  margin-top: (30 / 750 * 100vw);
  text-align: center;
  @include LScreen {
    // padding-bottom: 30px;
    margin: 50px 0 0 0;
  }
}
.walkthrough_visual {
  // padding-top: (70 / 750 * 100vw);
  width: 100%;
  height: auto;
  @include LScreen {
    // padding-top: 80px;
    // width: 350px;
  }
}
</style>
