<template>
  <div class="index">
    <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
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
