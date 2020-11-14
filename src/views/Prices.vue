<template>
  <div class="prices">
    <div class="row">
      <img src="@/assets/families/IMG_5005.jpg">
      <div class="content">
        <h1>Prices</h1>
        <h3>Single Family (up to 8 people) - $75</h3>
        <h3>Couples - $50</h3>
        <h3>Individual Portraits - $30</h3>
      </div>
    </div>
    <div class="row">
      <img src="@/assets/couples/IMG_5255.jpg">
      <div class="content">
        <h2>All Sessions Will Receive</h2>
        <p>Up to 1 hour coverage</p>
        <p>50+ images delivered in a beautiful digital gallery</p>
        <p>All photos professionally edited</p>
        <p>Incredibly fast turnaround</p>
      </div>
    </div>
    <div class="row">
      <img src="@/assets/portraits/IMG_6024.jpg">
      <div class="content">
        <h2>Notes</h2>
        <p>*50% deposit required at the time of booking to secure your session date</p>
        <p>Other custom packages are available to meet you and your loved ones' needs.<br>Please <router-link to="/contact">contact me</router-link> for details concerning your potential photo shoot.</p>
      </div>
    </div>
    </div>
</template>

<style lang="scss" scoped>
@import "@/variables.scss";
.prices {
  .row {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    img {
      width: 50vw;
    }
    .content {
      padding: 50px;
    }
  }
}
@media screen and (min-width: 1150px) {
  .prices {
    padding: 100px;
    .row {
      flex-direction: row;
      img {
        width: 30vw;
      }
    }
    .row:nth-child(odd) {
      flex-direction: row-reverse;
    }
  }
}
</style>