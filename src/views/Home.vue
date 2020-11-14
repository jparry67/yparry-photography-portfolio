<template>
  <div class="home">
    <Carousel :imageUrls="carouselImageUrls" />
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
import Carousel from '../components/Carousel.vue';

@Component({
  components: {
    Carousel
  }
})
export default class Home extends Vue {
  carouselImageUrls = [
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
}
</script>

<style lang="scss" scoped>
@import "@/variables.scss";

.content {
  padding: 50px;
  background-color: white;
}
</style>