<template>
  <div>
      <div class="our-service-sec-main-div stack-tech-main-div common-padding-div bg-gray">
    <div class="container">
        <div class="common-heading-div">
            <h2 class="common-heading-text mb-0">{{technologyBox.secTitle}}</h2>
        </div>
        <div class="our-service-sub-div">
            <div class="row">
                <div class="col-md-4" v-for="(item, index) of technologyBox.data" :key="index">
                    <div class="our-service-box-div">
                        <div class="service-img">
                            <img :src="item.icon" class="img-fluid" alt="icon">
                        </div>
                        <h6 class="service-heading">{{item.heading}}</h6>
                        <h6 class="service-para">{{item.description}}</h6>
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
    name: 'TechnologyBox',
    props: {
    technologyBox: {
      type: Array,
      default: () => []
    },
  },
}
</script>

