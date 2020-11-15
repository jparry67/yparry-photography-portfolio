<template>
  <div id="app">
    <Navigation />
    <router-view class="router-view"/>
    <div id="footer">
      <div class="links">
        <a href="https://www.instagram.com/yparry.portraits/"><instagram-icon/></a>
        <span class="spacer">|</span>
        <a href="mailto:yparryphotography@gmail.com">yparryphotography@gmail.com</a>
      </div>
      <div class="copyright">Copyright © 2020 Y Parry Photography. All rights reserved.<br>Site by Jacob Parry.</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navigation from './components/Navigation.vue';
import EmailOutlineIcon from 'vue-material-design-icons/EmailOutline.vue';
import InstagramIcon from 'vue-material-design-icons/Instagram.vue';
@Component({
  components: { Navigation, EmailOutlineIcon, InstagramIcon },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Playfair+Display&family=Sacramento&display=swap');
@import "variables.scss";

body {
  margin: 0;
}
#app {
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  #footer {
    height: max-content;
    background-color: lighten($peach, 10%);
    padding: 30px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: grey;
    .links {
      display: flex;
      align-items: center;
      font-size: 20px;
      .material-design-icon, .material-design-icon > .material-design-icon__svg {
        height: 36px;
        width: 36px;
        cursor: pointer;
      }
      .spacer {
        margin: 10px;
      }
      a {
        color: grey;
      }
    }
    @media screen and (max-width: $breakpoint-large) {
      flex-direction: column;
    }
  }
  p {
    font-size: 20px;
  }
  .photo-gallery {
    columns: auto 3;
    column-gap: 30px;
    padding: 15px 0;
    img {
      margin: 15px 0;
      width: 100%;
    }
    @media screen and (max-width: $breakpoint-xlarge) {
      column-count: 2;
    }
    @media screen and (max-width: $breakpoint-medium) {
      column-gap: 15px;
      img {
        margin: 5px 0;
      }
    }
  }
}
</style>
