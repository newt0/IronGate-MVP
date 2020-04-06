<template>
  <section class="section section-2">
    <div class="works">
      <swiper class="works_slider">
        <swiper-slide class="work" v-for="post in posts" :key="post.sys.id">
          <nuxt-link :to="'/posts/' + post.fields.slug">
            <img
              :src="post.fields.mainImage.fields.file.url"
              :alt="post.fields.title"
              class="work_img"
            />
          </nuxt-link>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
export default {
  props: ["posts"],
  data: function() {
    return {
      works: [
        "epigno.png",
        "frieppy.png",
        "ooc.png",
        "dezabiyo_t.png",
        "vue_cleaner.png",
        "offcha_t.png",
        "dezabiyo.png",
        "dist28.png",
        "offcha.png",
        "umi_card.png",
        "nemy_logo.png",
        "isao_umi_card.jpg",
        "megurocss.png",
        "figma.png",
        "temple.png"
      ],
      translateX: -25,
      worksN: 0
    };
  }
};
</script>


<style lang="scss" scoped>
@import "./assets/scss/mixin";

.section {
  max-width: 100%;
  overflow: hidden;
  min-width: 1040px;
  margin: 160px auto 0;
  text-align: center;
  @include sm-screen {
    width: 100%;
    min-width: 320px;
    margin: ((160 / 2) / 375 * 100vw) auto 0;
  }
}

.works {
  max-height: 660px;
  height: (40vw / 3 * 2);
  @include sm-screen {
    height: (80vw / 3 * 2);
  }
}

.work {
  list-style: none;
  width: 40vw;
  margin: 0 5vw;
  @include sm-screen {
    width: 80vw;
    margin: 0 2vw;
  }
  &_img {
    width: 100%;
    max-width: 40vw;
    height: auto;
    margin: auto;
    @include sm-screen {
      max-width: 80vw;
    }
  }
}
// .swiper-slide {
//   width: 40vw;
//   height: (40vw / 3 * 2);
//   max-width: 990px;
//   max-height: 660px;
//   margin: 0 5vw;
//   @include sm-screen {
//     min-width: 80vw;
//     min-height: (80vw / 3 * 2);
//     margin: 0 2vw;
//   }
// }
</style>