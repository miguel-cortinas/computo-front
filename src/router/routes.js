import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

import LandingPage from "@/pages/LandingPage.vue";

// Lists
import TableList from "@/pages/TableList.vue";
import OrderList from '@/pages/OrderList.vue';
import OrderItems from '@/pages/OrderItems.vue';
import ProductInformation from '@/pages/ProductInformation.vue';
// Creates
import CreateOrder from '@/pages/CreateOrder.vue'
import CreateCustomer from '@/pages/CreateCustomer.vue';
import CreateProduct from '@/pages/CreateProduct.vue';
// Edits
import EditCustomer from "@/pages/EditCustomer.vue";
import EditProduct from "@/pages/EditProduct.vue";
import EditOrder from "@/pages/EditOrder.vue";
import EditOrderItems from "@/pages/EditOrderItems.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/landing-page",
    children: [
      {
        path: "landing-page",
        name: "landing-page",
        component: LandingPage,
      },
      // Edits
      {
        path: "edit-order-item/:id", // path: "edit-order-item/:id",
        name: "edit-order-item",
        component: EditOrderItems,
      },
      {
        path: "edit-order/:id", // path: "edit-order/:id",
        name: "edit-order",
        component: EditOrder,
      },
      {
        path: "edit-product/:id", // path: "edit-product/:id",
        name: "edit-product",
        component: EditProduct,
      },
      {
        path: "edit-customer/:id", // path: "edit-customer/:id",
        name: "edit-customer",
        component: EditCustomer,
      },
      // Lists
      {
        path: "product-information",
        name: "product-information",
        component: ProductInformation,
      },
      {
        path: "table-list",
        name: "table-list",
        component: TableList,
      },
      {
        path: 'order-list',
        name: 'order-lst',
        component: OrderList
      },
      {
        path: 'order-items',
        name: 'order-items',
        component: OrderItems
      },
      // Creates
      {
        path: 'create-order',
        name: 'create-order',
        component: CreateOrder
      },
      {
        path: 'create-customer',
        name: 'create-customer',
        component: CreateCustomer
      },
      {
        path: 'create-product',
        name: 'create-product',
        component: CreateProduct
      },
    ],
  },
  { path: "*", component: NotFound },
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
