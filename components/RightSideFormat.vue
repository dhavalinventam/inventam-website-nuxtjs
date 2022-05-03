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
              <div class="common-ul-li-div mt-3" v-if="isSubPoints">
                <ul>
                  <li>{{SubPoints1}}</li>
                  <li>{{SubPoints2}}</li>
                  <li>{{SubPoints3}}</li>
                  <li>{{SubPoints4}}</li>
                  <li>{{SubPoints5}}</li>
                </ul>
              </div>
              <div class="common-btn-div mt-5" v-if="isButton">
                <a :href="link" class="btn"
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
    link: {
      type: String,
      default: '',
    },
    isSubPoints: {
      type: Boolean,
      default: false,
    },
    SubPoints1: {
      type: String,
      default: '',
    },
    SubPoints2: {
      type: String,
      default: '',
    },
    SubPoints3: {
      type: String,
      default: '',
    },
    SubPoints4: {
      type: String,
      default: '',
    },
    SubPoints5: {
      type: String,
      default: '',
    },
  },
}
</script>
