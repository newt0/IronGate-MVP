<template>
  <ul class="post-list">
    <li class="post-item card" v-for="post in posts" :key="post.sys.id">
      <!-- <img :src="post.fields.eyecatch.fields.file.url" alt=""> -->
      <nuxt-link :to="`/entry/${post.sys.id}/`" class="card_title">{{ post.fields.title }}</nuxt-link>
      <small class="readTime">{{ post.fields.readTime }}</small>
      <!-- <small>{{ post.fields.category.fields.name　}}</small> -->
      
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    posts: Array
  }
}
</script>

<style lang="scss" scoped>
.post {
  &-list {
  }
  &-item {
    font-size: 1.8rem;
    letter-spacing: 0.12em;
    @include min {
      font-size: 2.2rem;
    }
    &:nth-child(n + 2) {
      margin-top: 2rem;
      @include min {
        margin-top: 2.5rem;
      }
    }
    a {
      @include min {
        &:hover {
          color: $color-modest;
        }
      }
    }
  }
}
.card {
  background: $SecondaryLight;
  box-shadow: 0px (2 / 750 * 100vw) (6 / 750 * 100vw) rgba(0, 0, 0, 0.15);
  border-radius: (10 / 750 * 100vw);
  // font-family: $Noto;
  font-style: normal;
  color: $TextPrimary;
  align-items: center;
  margin: (30 / 750 * 100vw) 0 0 0;
  padding: (40 / 750 * 100vw) (30 / 750 * 100vw) (40 / 750 * 100vw);
  @include LScreen {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin: 30px 0 0 0;
    padding: 20px 20px 20px 20px;
  }
}
.card_title {
  font-size: 2.4rem;
  line-height: (24 / 24);
  margin-top: (22 / 750 * 100vw);
  @include LScreen {
    font-size: 1.2rem;
    line-height: (24 / 12);
    margin-top: 0;
  }
}
.readTime {
  font-size: 1.0rem;
  color: $SecondaryDark;
}
</style>
