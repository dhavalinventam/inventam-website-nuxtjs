<template>
  <div>
    <!-- Inner Banner -->
    <div
      class="inner-banner-main-div">
      <div class="banner-overlay-div"></div>
      <picture>
        <source
          media="(min-width:768px)"
          :srcset='deskbannerImg'
        />
        <img
          :src='mobbannerImg'
          class="img-fluid"
          alt="Banner"
        />
      </picture>
      <div class="inner-banners-texts-div">
        <div class="common-main-heading-div">
          <h2>{{title}}</h2>
          <div class="divider-line">
            <div class="round-div"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InnerBanner',
//   props: ['title'],
  props: {
    title: {
      type: String,
      default:'',
    },
     deskbannerImg: {
      imgURL: String,
      default:'',
    },
    mobbannerImg: {
      imgURL: String,
      default:'',
    },
  },
}
</script>
