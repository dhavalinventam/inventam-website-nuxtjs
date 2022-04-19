<template>
  <div>
    <div class="inquiry-form-div">
      <h3 class="contact-us-sub-heading">Inquiry Now</h3>
      <div class="row">
        <div class="col-md-12">
          <div class="form-filed-div">
            <div class="form-group">
              <label class="field-title">Your Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Name"
                name="name"
              />
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-filed-div">
            <div class="form-group">
              <label class="field-title">Email</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Email"
                name="email"
              />
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-filed-div">
            <div class="form-group">
              <label class="field-title">Subject</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Subject"
                name="subject"
              />
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-filed-div">
            <div class="form-group">
              <label class="field-title">Message</label>
              <textarea
                class="form-control"
                rows="4"
                placeholder="Enter Message"
                name="message"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <div class="common-btn-div">
            <a href="#" class="btn"
              >Send
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
</template>

<script>
export default {
  name: 'InqueryForm',
}
</script>
