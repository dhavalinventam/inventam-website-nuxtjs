<template>
  <div>
    <div class="core-values-main-div inner-core-div common-padding-div">
      <div class="container">
        <div class="common-heading-div">
          <h2 class="common-heading-text mb-0">{{coreValue.secTitle}}</h2>
        </div>
        <div class="how-we-do-sub-div">
          <div class="row">
            <div class="col-md-6 col-lg-3"  v-for="(item, index) of coreValue.data"
              :key="index">
              <div class="how-we-do-box-div">
                <div class="how-we-do-icon-div">
                  <img
                    :src="item.icon"
                    class="img-fluid"
                    data-aos="flip-left" data-aos-delay="50" data-aos-duration="1500"
                  />
                </div>
                <h5>{{item.heading}}</h5>
                <p class="common-para">
                  {{item.description}}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CoreValue',
  props: {
    coreValue: {
      type: Array,
      default: () => []
    },
    
  },
//   mounted(){
//       console.log("coreValue", this.coreValue);
//   }
}
</script>
