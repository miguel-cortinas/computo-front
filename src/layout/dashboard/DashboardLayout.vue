<template>
  <div class="wrapper">
    <side-bar>
      <template slot="links">
        <sidebar-link to="/landing-page" name="Landing Page" icon="ti-desktop" />
        <sidebar-link to="/product-information" name="Product Information" icon="ti-shopping-cart" />
        <sidebar-link
          to="/table-list"
          name="Customers"
          icon="ti-user"
        />
        <sidebar-link to="/order-items" name="Order Items" icon="ti-view-list-alt" />
        <sidebar-link to="/order-list" name="Orders" icon="ti-bag" />
      </template>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar"> </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss"></style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu";
export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    MobileMenu,
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
  },
};
</script>
