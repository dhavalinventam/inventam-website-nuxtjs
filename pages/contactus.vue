<template>
  <div>
    <AppHeader />
    <InnerBanner
      :title="title"
      :deskbannerImg="deskbannerImg"
      :mobbannerImg="mobbannerImg"
    />
    <!-- Contact Us Section -->
    <div class="contact-us-main-div common-padding-div">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h3 class="contact-us-sub-heading">Contact Info:</h3>
            <div
              class="contact-info-main-div con-border-div mb-0"
              style="border-bottom: 0px"
            >
              <div class="row">
                <div class="col-md-12 col-lg-6">
                  <div class="contact-info-box-div">
                    <div class="contact-info-left-div">
                      <img
                        src="image/contact-email-icon.png"
                        class="img-fluid"
                      />
                    </div>
                    <div class="contact-info-right-div">
                      <h5>Mail Us:</h5>
                      <p class="common-para">hareen@inventam.com</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-12 col-lg-6">
                  <div class="contact-info-box-div mob-mb-remove">
                    <div class="contact-info-left-div">
                      <img
                        src="image/contact-calls-icon.png"
                        class="img-fluid"
                      />
                    </div>
                    <div class="contact-info-right-div">
                      <h5>Call Us:</h5>
                      <p class="common-para mb-0">+91 73839 21251</p>
                      <p class="common-para">+91 94297 96373</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="contact-info-main-div con-border-div mb-0">
              <div class="contact-info-box-div mob-mb-remove">
                <div class="contact-info-left-div">
                  <img src="image/contact-gps-icon.png" class="img-fluid" />
                </div>
                <div class="contact-info-right-div">
                  <h5>Address:</h5>
                  <p class="common-para">
                    803-Valentina Business Hub, Near Shell Petrol Pump, Adajan,
                    Surat / Gujarat / India
                  </p>
                </div>
              </div>
            </div>
            <div
              class="contact-info-main-div con-border-div Follow-div"
              style="border-top: 0px; border-bottom: 0px"
            >
              <div class="contact-info-box-div">
                <div class="contact-info-right-div">
                  <h5>Follow Us on social media:</h5>
                  <div class="contact-social-icon-main-div">
                    <div class="social-icon-box">
                      <a href="#">
                        <i class="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </div>
                    <div class="social-icon-box">
                      <a href="#">
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                      </a>
                    </div>
                    <div class="social-icon-box">
                      <a href="#">
                        <i class="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </div>
                    <div class="social-icon-box">
                      <a href="#">
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </div>
                    <div class="social-icon-box">
                      <a href="#">
                        <i class="fa fa-skype" aria-hidden="true"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="map-main-div">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3720.0901127203056!2d72.78809166493534!3d21.18857893591201!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04df9a1b09567%3A0x3a9d5b84187d50f2!2sInventam%20Tech%20Solution%20(%20OPC%20)%20PVT.%20LTD!5e0!3m2!1sen!2sin!4v1636354861746!5m2!1sen!2sin"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Inquiry -->
    <section class="inquiry-main-div common-padding-div bg-gray">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="inquiry-img-div padding-right-div">
              <img src="image/inquiry-img.png" class="img-fluid" />
            </div>
          </div>
          <div class="col-md-6">
            <InqueryForm />
          </div>
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script>
import InnerBanner from '../components/InnerBanner.vue'
import AppHeader from '../components/AppHeader.vue'
import DeskBanner from '../static/image/contact-us-desk-banner.jpg'
import MobBanner from '../static/image/contact-us-mob-banner.jpg'
import AppFooter from '../components/AppFooter.vue'
import InqueryForm from '../components/InqueryForm.vue'

export default {
  name: 'ConatctUs',
  components: { AppHeader, InnerBanner, AppFooter, InqueryForm },
  data() {
    return {
      title: 'Contact Us',
      deskbannerImg: DeskBanner,
      mobbannerImg: MobBanner,
    }
  },
}
</script>
