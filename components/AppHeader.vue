<template>
  <div>
    <div class="header-section-main-div" >  <!-- id="header-section-main-div" v-on:scroll="shrinkNav" -->
      <b-container>
        <b-navbar toggleable="lg">
          <div class="header-logo">
            <b-navbar-brand to="/">
              <img src="image/main-logo.png" class="img-fluid" />
            </b-navbar-brand>
          </div>
          <b-navbar-toggle target="nav-collapse"
            ><i class="fa fa-bars" aria-hidden="true"></i
          ></b-navbar-toggle>
          <b-collapse id="nav-collapse" class="navbar-menu-div" is-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-item to="/">Home</b-nav-item>
              <div class="single-dropdownmenu-div">
                <b-nav-item-dropdown text="What We Do" right>
                  <b-dropdown-item to="/saas-application-development-company"
                    >SAAS Application Development</b-dropdown-item
                  >
                  <b-dropdown-item to="/hybrid-mobile-apps-development-company"
                    >Mobile App Developement</b-dropdown-item
                  >
                  <b-dropdown-item to="/web-application-development-company"
                    >Web Apps & Website Developement</b-dropdown-item
                  >
                  <b-dropdown-item to="/full-stack-development-company"
                    >Full Stack Developement</b-dropdown-item
                  >
                  <b-dropdown-item to="/serverless-application-development-company"
                    >Serverless Development</b-dropdown-item
                  >
                  <b-dropdown-item to="/custom-api-development-company">API development</b-dropdown-item>
                  <b-dropdown-item to="/devops-services-and-solutions">Devops Services</b-dropdown-item>
                  <b-dropdown-item to="/ui-ux-design-company">UI/UX Design</b-dropdown-item>
                </b-nav-item-dropdown>
              </div>
              <b-nav-item to="/aboutus">About Us</b-nav-item>
              <b-nav-item to="/career">Career</b-nav-item>
              <b-nav-item to="/bloglisting">Blog</b-nav-item>
              <b-nav-item to="/contactus">Contact Us</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',

  //  methods: {
  //   shrinkNav() {
  //     console.log('calllled');
  //     const scrollPosition =
  //       document.documentElement.scrollTop || document.body.scrollTop
  //     const nav = document.getElementsByClassName('header-section-main-div')
  //     console.log('nav 11111', nav);
  //     if (scrollPosition >= 100) {
  //       nav.classList.add('sticky-header')
  //     } else {
  //       nav.classList.remove('sticky-header')
  //     }
  //   },
  //  }
}
</script>
