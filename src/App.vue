<template>
  <div id="app">
    <Navigation />
    <router-view class="router-view"/>
    <div id="footer">
      <a href="mailto:yparryphotography@gmail.com">yparryphotography@gmail.com</a>
      <a href="https://www.instagram.com/yparry.portraits/">@yparry.portraits</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navigation from './components/Navigation.vue';
@Component({
  components: { Navigation },
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
    height: 40px;
    background-color: $peach;
    padding: 30px 100px;
    display: grid;
    place-items: center;
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
  }

  @media screen and (max-width: $breakpoint-xlarge) {
    .photo-gallery {
      column-count: 2;
    }
  }

  @media screen and (max-width: $breakpoint-medium) {
    .photo-gallery {
      column-gap: 15px;
      img {
        margin: 5px 0;
      }
    }
  }
}
</style>
