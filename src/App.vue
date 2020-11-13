<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <div class="portfolio" @mouseover="showPortfolioMenu = true" @mouseleave="showPortfolioMenu = false">
        <div>Portfolio</div>
        <div class="portfolio-menu" v-if="showPortfolioMenu">
          <router-link to="/portraits">Portraits</router-link>
          <router-link to="/couples">Couples</router-link>
          <router-link to="/families">Families</router-link>
        </div>
      </div>
      <div id="logo">Y Parry Photography</div>
      <router-link to="/prices">Prices</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
    <router-view class="router-view"/>
    <div id="footer">
      <a href="mailto:yparryphotography@gmail.com">yparryphotography@gmail.com</a>
      <a href="https://www.instagram.com/yparry.portraits/">@yparry.portraits</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  data() {
    return {
      showPortfolioMenu: false,
    };
  }
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

  #nav {
    padding: 30px 100px;
    display: grid;
    place-items: center;
    grid-gap: 30px;
    grid-template-columns: 3fr 3fr 8fr repeat(3, 2fr);
    position: sticky;
    top: 0;
    background-color: white;
    box-shadow: 0 0 5px #cccccc;

    a, .portfolio {
      font-weight: bold;
      color: #2c3e50;
      text-decoration: none;
      text-transform: uppercase;
      font-family: 'Playfair Display', serif;

      &:hover {
        color: $peach;
      }

      &.router-link-exact-active {
        color: $grey;
      }
    }

    .portfolio {
      position: relative;
      height: 100%;
      display: grid;
      place-items: center;  

      .portfolio-menu {
        box-shadow: 0 0 3px #999999;
        position: absolute;
        left: -17px;
        top: 55px;
        padding: 20px;
        background-color: #fafafa;
        display: grid;
        gap: 20px;

      }
    }

    #logo {
      width: 100%;
      font-family: 'Sacramento', cursive;
      font-size: 40px;
      color: $red;
    }
  }

  .router-view {
    max-width: 1100px;
    padding: 0 100px;
    margin: 0 auto;
    min-height: calc(100vh - 239px);
  }

  #footer {
    height: 40px;
    background-color: $peach;
    padding: 30px 100px;
    display: grid;
    place-items: center;
  }
}
</style>
