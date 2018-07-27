<template>
  <div>
    <HeaderIndex></HeaderIndex>
    <section class="banner">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(item, index) in slides" :key="index">
          <img :src="item" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </section>
    <NavigationModule></NavigationModule>
    <RecommendModule></RecommendModule>
    <Footer></Footer>
  </div>
</template>
<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 14.6rem;
  .swiper-slide img {
    width: 26rem;
  }
  .swiper-pagination {
    .swiper-pagination-bullet-active {
      background: #008b8b !important;
    }
  }
}
</style>
<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import NavigationModule from "./companions/navigation.vue";
import RecommendModule from "./companions/recommend.vue";
export default {
  name: "carrousel",
  data() {
    return {
      slides: [
        "https://n3-q.mafengwo.net/s11/M00/F8/0B/wKgBEFsJEWyAQNe-AAeKNqERiPA24.jpeg?imageMogr2%2Fthumbnail%2F%21750x422r%2Fgravity%2FCenter%2Fcrop%2F%21750x422%2Fquality%2F90",
        "https://n3-q.mafengwo.net/s11/M00/26/CA/wKgBEFsJSDWAftW4AAeZxE6SZWE65.jpeg?imageMogr2%2Fthumbnail%2F%21750x422r%2Fgravity%2FCenter%2Fcrop%2F%21750x422%2Fquality%2F90",
        "https://b2-q.mafengwo.net/s11/M00/75/7B/wKgBEFsH-NKAUFP1AAbu-m34pJ017.jpeg?imageMogr2%2Fthumbnail%2F%21750x422r%2Fgravity%2FCenter%2Fcrop%2F%21750x422%2Fquality%2F90"
      ],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true, //循环播放
        speed: 500, //切换速度
        autoplay: {
          delay: 2000, //自动切换的时间间隔
          disableOnInteraction: false//用户操作swiper之后，是否禁止autoplay
        }
      }
    };
  },
  components: {
    swiper,
    swiperSlide,
    NavigationModule,
    RecommendModule
  },
  computed: {
  },
  mounted() {
  }
};
</script>