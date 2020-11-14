<template>
  <div class="contact">
    <img src="@/assets/contact.jpg">
    <div class="content">
      <h1>Contact Info</h1>
      <p>Thank you so much for your interest in my work! The individuals in my photo are what make my photos come to life. I can't wait to meet you and to learn a little about you.</p>
      <p>I'd love to be your photographer. Feel free to call me at <strong>(123) 456-7890</strong> or email me at <strong>yparryphotography@gmail.com</strong> and we can book a session!</p>
      <p>I do my best to respond to every inquiry within 48 hours. If for some reason you do not get a response back please send me a follow up email or text.</p>
      <h3>Located in Provo, UT | Serving the Utah County Area</h3>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/variables.scss";
.contact {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 100px;
  img {
    width: 30%;
  }
  .content {
    max-width: 800px;
    padding: 30px;
  }
  @media screen and (max-width: $breakpoint-large) {
    flex-direction: column;
    padding: 40px;
    img {
      width: 50%;
    }
  }
}
</style>
