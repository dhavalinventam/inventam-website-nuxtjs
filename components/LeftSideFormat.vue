<template>
  <div>
    <div class="sasa-development-company common-padding-div">
      <div class="container">
        <div class="row">
          <div class="col-md-6 align-flex-div">
            <div class="common-contains-div">
              <div class="sub-heading-div">
                <h4 class="sub-heading-text">{{ lefttitle }}</h4>
              </div>
              <div class="common-sub-points-div">
                <h4>{{ subheading }}</h4>
              </div>
              <p class="common-para">
                {{ leftpara1 }}
              </p>
              <p class="common-para">
                {{ leftpara2 }}
              </p>
              <div v-if="isSubHeading">
                <div class="common-sub-points-div">
                  <h4>
                    <a href="#" class="links">{{ subheadingtitle1 }}</a>
                  </h4>
                  <p class="common-para">{{ subheadingpara1 }}</p>
                </div>
                <div class="common-sub-points-div">
                  <h4>
                    <a href="#" class="links">{{ subheadingtitle2 }}</a>
                  </h4>
                  <p class="common-para">{{ subheadingpara2 }}</p>
                </div>
              </div>

              <div class="common-ul-li-div" v-if="isLeftSubPoints">
                <ul>
                  <li>
                    {{ LeftSubPoints1 }}
                  </li>
                  <li>
                    {{ LeftSubPoints2 }}
                  </li>
                  <li>
                    {{ LeftSubPoints3 }}
                  </li>
                  <li>
                    {{ LeftSubPoints4 }}
                  </li>
                  <li>
                    {{ LeftSubPoints5 }}
                  </li>
                </ul>
              </div>

              <div class="common-btn-div mt-5" v-if="isButton">
                <a :href="link" class="btn">{{ leftbutton }} </a>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div
              class="common-contain-img-div padding-left-div mob-ts text-center"
            >
              <img
                :src="leftimg"
                class="img-fluid"
                data-aos="zoom-in"
                data-aos-delay="100"
                data-aos-duration="2000"
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
      default: '',
    },
    subheading: {
      type: String,
      default: '',
    },
    leftpara1: {
      type: String,
      default: '',
    },
    leftpara2: {
      type: String,
      default: '',
    },
    leftimg: {
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
    isSubHeading: {
      type: Boolean,
      default: false,
    },
    subheadingtitle1: {
      type: String,
      default: '',
    },
    subheadingpara1: {
      type: String,
      default: '',
    },
    subheadingtitle2: {
      type: String,
      default: '',
    },
    subheadingpara2: {
      type: String,
      default: '',
    },
    isLeftSubPoints: {
      type: Boolean,
      default: false,
    },
    LeftSubPoints1: {
      type: String,
      default: '',
    },
    LeftSubPoints2: {
      type: String,
      default: '',
    },
    LeftSubPoints3: {
      type: String,
      default: '',
    },
    LeftSubPoints4: {
      type: String,
      default: '',
    },
    LeftSubPoints5: {
      type: String,
      default: '',
    },
  },
}
</script>
