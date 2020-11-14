<template>
  <div class="home">
    <div class="carousel">
      <transition name="fade" mode="out-in">
        <img class="carousel-image" :src="imageUrls[currentImage]" :key="currentImage">
      </transition>
      <div class="rotate-buttons">
        <button @click="automaticCarouselRotation = false; carouselLeft()">Left</button>
        <button @click="automaticCarouselRotation = false; carouselRight()">Right</button>
      </div>
      <div class="direct-buttons">
        <button v-for="(imageUrl, index) in imageUrls" :key="index" @click="gotoImage(index)" :class="{current: currentImage === index}">{{index}}</button>
      </div>
    </div>
    <div class="content">
      <h1>Information about me</h1>
      <p>Paragraph goes here</p>
      <h1>This is the home page</h1>
      <p>Tellus auctor habitasse lectus sit justo porta nascetur potenti. Tincidunt facilisi commodo lacus aptent. Purus mattis id platea molestie euismod interdum? Hac posuere primis eros hac nibh lacus. Consequat mi dui vitae libero ligula platea. Ligula odio donec dapibus pretium dis in cum dictumst. In hendrerit nulla magnis lacinia nisi aenean tempus mi, condimentum hac rutrum. Facilisis euismod ullamcorper cursus facilisis habitasse litora ornare facilisi. Nunc nibh purus natoque odio nunc.</p>
      <p>Potenti elit fringilla rutrum. Placerat ac congue sodales tempor nullam duis proin in vestibulum gravida mi. Integer penatibus conubia faucibus auctor congue velit morbi varius tempus. Nulla lacus massa lectus vestibulum phasellus euismod a magnis faucibus scelerisque non commodo. Sit quis class rutrum placerat morbi mi phasellus vehicula, mus ultricies aenean potenti. Odio ultrices ac ultrices ligula. Placerat in pulvinar vestibulum blandit auctor consectetur mus tempor. Mi ridiculus scelerisque sodales enim cum et vehicula.</p>
      <p>Porta sapien id fermentum rhoncus accumsan orci mauris taciti sociis. Pretium nec et volutpat mauris nibh massa lacinia. Ridiculus semper ligula vivamus est praesent porttitor consequat habitant. Nullam adipiscing, nec tincidunt elit aenean. Fermentum ad eu vestibulum; aenean aliquet cursus aliquet faucibus. Senectus eget, erat ligula justo? Ultricies auctor rhoncus urna, dignissim nostra scelerisque. Laoreet netus ornare semper donec sit. Sagittis magna sollicitudin senectus natoque quisque torquent.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
  slickOptions = {
    arrows: false,
    dots: false,
    infinite: true,
    fade: true,
    speed: 1000,
    autoplay: true,
  };
  imageUrls = [
    require("@/assets/portraits/IMG_7724-3.jpg"),
    require("@/assets/portraits/IMG_6024.jpg"),
    require("@/assets/portraits/IMG_7812.jpg"),
    require("@/assets/portraits/IMG_6024.jpg"),
    require("@/assets/portraits/IMG_7724-3.jpg"),
    require("@/assets/portraits/IMG_7812.jpg"),
    require("@/assets/portraits/IMG_7724-3.jpg"),
    require("@/assets/portraits/IMG_7812.jpg"),
    require("@/assets/portraits/IMG_6024.jpg"),
    require("@/assets/portraits/IMG_7812.jpg"),
    require("@/assets/portraits/IMG_7724-3.jpg"),
    require("@/assets/portraits/IMG_6024.jpg"),
  ];
  images = [];
  currentImage = 0;
  show = true;
  automaticCarouselRotation = true;
  carouselLeft() {
    this.currentImage = (this.currentImage - 1) % this.imageUrls.length;
  }
  carouselRight() {
    this.currentImage = (this.currentImage + 1) % this.imageUrls.length;
  }
  gotoImage(index: number) {
    this.automaticCarouselRotation = false;
    this.currentImage = index;
  }
  rotateCarousel() {
    setTimeout(() => {
      if (this.automaticCarouselRotation) {
        this.carouselRight();
        this.rotateCarousel();
      }
    }, 2000);
  }
  mounted() {
    this.rotateCarousel();
  }
}
</script>

<style lang="scss" scoped>
@import "@/variables.scss";

.carousel {
  position: relative;
  height: calc(100vh - 74px);
  .carousel-image {
    height: calc(100vh - 74px);
    width: 100%;
    object-fit: cover;
    position: fixed;
    top: 74;
    left: 0;
    z-index: -1;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .current {
    background-color: black;
  }
}
.content {
  padding: 50px;
  background-color: white;
}
@media screen and (min-width: $breakpoint-large) {
  .carousel {
    top: 188;
  }
}
</style>