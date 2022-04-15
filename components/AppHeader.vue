<template>
  <div>
    <div class="header-section-main-div">
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
                  <b-dropdown-item href="#"
                    >SAAS Application Development</b-dropdown-item
                  >
                  <b-dropdown-item href="#"
                    >Mobile App Developement</b-dropdown-item
                  >
                  <b-dropdown-item href="#"
                    >Web Apps & Website Developement</b-dropdown-item
                  >
                  <b-dropdown-item href="#"
                    >Full Stack Developement</b-dropdown-item
                  >
                  <b-dropdown-item href="#"
                    >Serverless Development</b-dropdown-item
                  >
                  <b-dropdown-item href="#">API development</b-dropdown-item>
                  <b-dropdown-item href="#">Devops Services</b-dropdown-item>
                  <b-dropdown-item href="#">UI/UX Design</b-dropdown-item>
                </b-nav-item-dropdown>
              </div>
              <b-nav-item to="/aboutus">About Us</b-nav-item>
              <b-nav-item href="#">Career</b-nav-item>
              <b-nav-item href="#">Blog</b-nav-item>
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
}
</script>
