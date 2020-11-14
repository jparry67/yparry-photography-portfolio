<template>
  <div class="carousel">
    <transition name="fade" mode="out-in">
      <img class="carousel-image" :src="imageUrls[currentImage]" :key="currentImage">
    </transition>
    <div class="rotate-buttons">
      <chevron-left-icon class="rotate-icon" @click="automaticCarouselRotation = false; carouselLeft()" />
      <chevron-right-icon class="rotate-icon" @click="automaticCarouselRotation = false; carouselRight()" />
    </div>
    <div class="direct-buttons">
      <div class="direct-button" v-for="(imageUrl, index) in imageUrls" :key="index" @click="gotoImage(index)" :class="{current: currentImage === index}"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ChevronLeftIcon from 'vue-material-design-icons/ChevronLeft.vue';
import ChevronRightIcon from 'vue-material-design-icons/ChevronRight.vue';

@Component({
  components: { ChevronLeftIcon, ChevronRightIcon }
})
export default class Carousel extends Vue {
  @Prop() private imageUrls!: string;
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
    }, 2800);
  }
  mounted() {
    this.rotateCarousel();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/variables.scss";
.carousel {
  position: relative;
  height: calc(100vh - 74px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  .rotate-buttons {
      margin: auto 20px;
      display: flex;
      justify-content: space-between;
      .rotate-icon {
        height: 48px;
        width: 48px;
        border-radius: 50%;
        color: #eeeeee;
        background-color: #777777;
      }
      .material-design-icon > .material-design-icon__svg {
        height: 50px;
        width: 50px;
        cursor: pointer;
      }
}
  .direct-buttons {
    margin: 40px;
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap-reverse;
    .direct-button {
      margin: 5px;
      height: 15px;
      width: 15px;
      border-radius: 50%;
      cursor: pointer;
      background-color: #dddddd;
      &.current {
        background-color: #333333;
      } 
    }
  }
  @media screen and (min-width: $breakpoint-large) {
    height: calc(100vh - 118px);
    .carousel-image {
      height: calc(100vh - 118px);
      top: 118;
    }
  }
}
</style>
