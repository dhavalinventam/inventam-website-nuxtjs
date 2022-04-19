<template>
  <div>
    <div class="sasa-development-company common-padding-div">
      <div class="container">
        <div class="row">
          <div class="col-md-6 align-flex-div">
            <div class="common-contains-div">
              <div class="sub-heading-div">
                <h4 class="sub-heading-text">{{lefttitle}}</h4>
              </div>
              <div class="common-sub-points-div">
                  <h4>{{subheading}}</h4>
              </div>
              <p class="common-para">
                {{leftpara1}}
              </p>
              <p class="common-para">
                {{leftpara2}}
              </p>
              <div class="common-btn-div mt-5">
                <a href="#" class="btn"
                  >{{leftbutton}}
                  <i
                    class="fa fa-arrow-right left-right-move"
                    aria-hidden="true"
                  ></i
                ></a>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="common-contain-img-div padding-left-div mob-ts">
              <img
                :src='leftimg'
                class="img-fluid"
                data-wow-delay="0.5s"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeftSideFormat',
  props: {
    lefttitle: {
      type: String,
      default:'',
    },
    subheading: {
      type: String,
      default:'',
    },
    leftpara1: {
      type: String,
      default:'',
    },
    leftpara2: {
      type: String,
      default:'',
    },
    leftimg: {
      imgURL: String,
      default:'',
    },
    leftbutton: {
      imgURL: String,
      default:'',
    },


  },
}
</script>
