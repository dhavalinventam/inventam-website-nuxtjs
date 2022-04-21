<template>
  <div>
    <AppHeader />
    <CurrentOpeningsDetailsComp />
    
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
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import InqueryForm from '../components/InqueryForm.vue'
import CurrentOpeningsDetailsComp from '../components/CurrentOpeningsDetailsComp.vue'

export default {
  name: 'CurrentOpeningsDetails',
  components: {
    AppHeader,
    AppFooter,
    InqueryForm,
    CurrentOpeningsDetailsComp,
  },
}
</script>
