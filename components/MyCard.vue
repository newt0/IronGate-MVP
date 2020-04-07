<template>
  <div class="post"> 
    <ul class="post-list">
    <li v-for="post in posts" :key="post.sys.id" class="post_card">
      <nuxt-link :to="`/entry/${post.sys.id}/`">
        <span class="post_card_visual">
          <img :src="post.fields.eyecatch.fields.file.url" alt="test" />
        </span>
        <div class="post_card_info">
          <h1 class="post_card_title">{{ post.fields.title }}</h1>
          <p class="post_card_date">{{ post.fields.readTime }} / {{ post.fields.category.fields.name　}}</p>
        </div>
      </nuxt-link>
    </li>
    </ul>
  </div>
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
  padding: (60 / 750 * 100vw) (40 / 750 * 100vw) 0;
  @include LScreen {
    width: 700px;
    margin: 0 auto;
    padding: 60px 0 0;
  }
}
.post_card {
  margin-top: (16 / 750 * 100vw);
  background: $SecondaryLight;
  border-radius: (10 / 750 * 100vw);
  box-shadow: 0px (2 / 750 * 100vw) (6 / 750 * 100vw) rgba(0, 0, 0, 0.15);
  @include LScreen {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-top: 12px;
  }
  > a {
    display: flex;
    padding: (30 / 750 * 100vw);
    align-items: center;
    @include LScreen {
      padding: 20px;
    }
  }
}
.post_card_visual {
  display: block;
  width: (140 / 750 * 100vw);
  height: (140 / 750 * 100vw);
  border-radius: (10 / 750 * 100vw);
  background-size: cover;
  overflow: hidden;
  @include LScreen {
    width: 94px;
    height: 94px;
    border-radius: 3px;
  }
  img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    min-width: 100%;
    min-height: 100%;
    transition: $Easing;
    a:hover & {
      transform: scale(1.1);
    }
  }
}
.post_card_info {
  padding-left: (30 / 750 * 100vw);
  @include LScreen {
    padding-left: 20px;
  }
}
.post_card_title {
  color: $TextPrimary;
  font-size: 3rem;
  display: block;
  @include LScreen {
    font-size: 1.8rem;
  }
}
.post_card_date {
  color: $TextSecondary;
  font-size: 2rem;
  display: block;
  margin-top: (15 / 750 * 100vw);
  @include LScreen {
    font-size: 1.4rem;
    margin-top: 10px;
  }
}
</style>
