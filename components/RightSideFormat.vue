<template>
  <div>
    <div class="sasa-development-company common-padding-div">
      <div class="container">
        <div class="row flex-direction-div">
          <div class="col-md-6">
            <div class="common-contain-img-div padding-right-div mob-ts">
              <img
                :src="RightSectionImg"
                class="img-fluid"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="common-contains-div">
              <div class="sub-heading-div">
                <h4 class="sub-heading-text">{{ RightSectiontitle }}</h4>
              </div>
              <p class="common-para">
                {{ Rightparagraph1 }}
              </p>
              <p class="common-para">
                {{ Rightparagraph2 }}
              </p>
              <p class="common-para">
                {{ Rightparagraph3 }}
              </p>
              <p class="common-para">
                {{ Rightparagraph4 }}
              </p>
              <div class="common-btn-div mt-5" v-if="isButton">
                <a href="#" class="btn"
                  >{{ leftbutton }}
                  <i
                    class="fa fa-arrow-right left-right-move"
                    aria-hidden="true"
                  ></i
                ></a>
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
  name: 'RightSideFormat',
  props: {
    RightSectiontitle: {
      type: String,
      default: '',
    },
    Rightparagraph1: {
      type: String,
      default: '',
    },
    Rightparagraph2: {
      type: String,
      default: '',
    },
    Rightparagraph3: {
      type: String,
      default: '',
    },
    Rightparagraph4: {
      type: String,
      default: '',
    },
    RightSectionImg: {
      imgURL: String,
      default: '',
    },
    RightButton: {
      imgURL: String,
      default: '',
    },
    leftbutton: {
      imgURL: String,
      default: '',
    },
    isButton: {
      // Button hide in other page
      type: Boolean,
      default: true,
    },
  },
}
</script>
