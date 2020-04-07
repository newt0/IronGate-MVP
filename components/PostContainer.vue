<template>
  <div class="page-container">
    <!-- <PostList :posts="posts" />
    <PostCardLists :posts="posts"/> -->
    <MyCard :posts="posts"/>
    <DummyPostList v-if="isFetching" />
    <ButtonMore v-if="hasMorePosts" :handle-click="handleClickMore" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PostList from '@/components/PostList'
import PostCardLists from '@/components/PostCardLists'
import MyCard from '@/components/MyCard'
import DummyPostList from '@/components/DummyPostList'
import ButtonMore from '@/components/ButtonMore'

export default {
  components: {
    PostList,
    DummyPostList,
    ButtonMore,
    PostCardLists,
    MyCard
  },
  props: {
    pageType: String,
    posts: Array,
    handleClickMore: Function
  },
  computed: {
    ...mapState(['index']),
    page() {
      return this.index[this.pageType].page
    },
    lastPage() {
      return this.index[this.pageType].lastPage
    },
    isFetching() {
      return this.index[this.pageType].isFetching
    },
    hasMorePosts() {
      return !this.isFetching && this.page < this.lastPage
    }
  }
}
</script>
