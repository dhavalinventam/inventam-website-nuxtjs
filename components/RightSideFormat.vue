<template>
  <div>
    <div class="sasa-development-company common-padding-div bg-gray">
      <div class="container">
        <div class="row">
          <div class="col-md-6 align-flex-div">
            <div class="common-contains-div">
              <div class="sub-heading-div">
                <h4 class="sub-heading-text">{{RightSectiontitle}}</h4>
              </div>
              <p class="common-para">
                {{Rightparagraph1}}
              </p>
              <div class="common-btn-div mt-4">
                <a href="#" class="btn"
                  >{{RightButton}}
                  <i
                    class="fa fa-arrow-right left-right-move"
                    aria-hidden="true"
                  ></i
                ></a>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div
              class="common-contain-img-div padding-left-div mob-ts text-center"
            >
              <img
                :src="RightSectionImg"
                class="img-fluid wow zoomIn animated"
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
    RightSectionImg: {
      imgURL: String,
      default: '',
    },
    RightButton: {
      imgURL: String,
      default: '',
    },
  },
}
</script>
