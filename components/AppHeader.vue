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
                  <b-dropdown-item to="#"
                    >SAAS Application Development</b-dropdown-item
                  >
                  <b-dropdown-item to="#"
                    >Mobile App Developement</b-dropdown-item
                  >
                  <b-dropdown-item to="#"
                    >Web Apps & Website Developement</b-dropdown-item
                  >
                  <b-dropdown-item to="#"
                    >Full Stack Developement</b-dropdown-item
                  >
                  <b-dropdown-item to="#"
                    >Serverless Development</b-dropdown-item
                  >
                  <b-dropdown-item to="#">API development</b-dropdown-item>
                  <b-dropdown-item to="#">Devops Services</b-dropdown-item>
                  <b-dropdown-item to="#">UI/UX Design</b-dropdown-item>
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
}
</script>
