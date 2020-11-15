<template>
  <div class="home">
    <Carousel :imageUrls="carouselImageUrls" />
    <div class="content">
      <h1>Portfolios</h1>
      <div class="portfolios">
        <div class="portfolio-link" :style="{backgroundImage: `url(${portraitsImageUrl})`}">
          <div class="link-text">Portraits</div>
        </div>
        <div class="portfolio-link" :style="{backgroundImage: `url(${couplesImageUrl})`}">
          <div class="link-text">Couples</div>
        </div>
        <div class="portfolio-link" :style="{backgroundImage: `url(${familiesImageUrl})`}">
          <div class="link-text">Families</div>
        </div>
      </div>
      <h1>Meet the Girl behind the Camera</h1>
      <img class="about-image" :src="aboutImageUrl">
      <p>Hi, I'm Yaret! I specialize in portraits of every-day life, and I'd love to see you on the other side of the camera!</p>
      <div class="links">
        <router-link to="/about"><button>More About Me</button></router-link>
        <router-link to="/prices"><button>My Prices</button></router-link>
        <router-link to="/contact"><button>Contact Me</button></router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Carousel from '../components/Carousel.vue';

@Component({
  components: {
    Carousel
  }
})
export default class Home extends Vue {
  carouselImageUrls = [
    require("@/assets/home/carousel-1.jpg"),
    require("@/assets/home/carousel-2.jpg"),
    require("@/assets/home/carousel-3.jpg"),
    require("@/assets/home/carousel-4.jpg"),
    require("@/assets/home/carousel-5.jpg"),
  ];
  portraitsImageUrl = require('@/assets/home/portraits.jpg');
  couplesImageUrl = require('@/assets/home/couples.jpg');
  familiesImageUrl = require('@/assets/home/families.jpg');
  aboutImageUrl = require('@/assets/home/about.jpg');
}
</script>

<style lang="scss" scoped>
@import "@/variables.scss";

.content {
  padding: 50px 0;
  background-color: white;
  h1, p {
    padding: 0 50px;
  }
  button {
    padding: 15px 20px;
    font-size: 20px;
    color: white;
    background-color: $blue;
    border: none;
    cursor: pointer;
    &:hover, &:active {
      background-color: $red;
    }
  }
  .portfolios {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    .portfolio-link {
      margin: 10px;
      border: 1px solid black;
      height: 20vw;
      width: 20vw;
      background-size: cover;
      cursor: pointer;
      .link-text {
        height: 100%;
        width: 100%;
        display: none;
        font-size: 2vw;
      }
      &:hover {
        .link-text {
          display: grid;
          place-items: center;
          color: black;
          background-color: rgba(255,255,255,.7);
        }
      }
    }
    @media screen and (max-width: $breakpoint-medium) {
      flex-direction: column;
      .portfolio-link {
        height: 70vw;
        width: 70vw;
        .link-text {
          display: grid !important;
          place-items: center;
          color: black;
          background-color: rgba(255,255,255,.7);
          font-size: 7vw;
        }
      }
    }
  }
  .about-image {
    max-width: 100vw;
    max-height: calc(100vh - 118px);
  }
  .links {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    button {
      margin: 20px;
    }
  }
}
</style>