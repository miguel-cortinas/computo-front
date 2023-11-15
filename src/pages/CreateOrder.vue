<template>
    <card class="card" title="Create a New Order">
      <div>
        <form @submit.prevent="created">
          <div class="row">
            <div class="col-md-5">
              <fg-input
                type="text"
                label="Order Date"
                :disabled="false"
                placeholder="Enter the order date"
                v-model="order.order_date"
              >
              </fg-input>
            </div>
            <div class="col-md-4">
              <label for="region">Order Mode</label>
                <select id="order_mode" class="form-control" placeholder="Select a order mode" v-model="order.order_mode">
                  <option>Online</option>
                  <option>Direct</option>
                </select>
              </div>
            <div class="col-md-3">
              <fg-input
                type="text"
                label="Category"
                placeholder="Enter a number"
                v-model="order.category_id"
              >
              </fg-input>
            </div>
          </div>
  
          <div class="row">
            <div class="col-md-6">
              <label for="region">Customer Id</label>
              <select class="form-control" placeholder="Select customer id" v-model="order.customer_id">
                <option v-for="customer in customers" :value="customer.customer_id">{{ customer.customer_id }}</option>
              </select>
            </div>
            <div class="col-md-6">
              <fg-input
                type="text"
                label="Order Status"
                placeholder="Enter a order status"
                v-model="order.order_status"
              >
              </fg-input>
            </div>
          </div>
  
          <div class="row">
            <div class="col-md-4">
              <fg-input
                type="text"
                label="Total Order"
                placeholder="Enter total order"
                v-model="order.order_total"
              >
              </fg-input>
            </div>
            <div class="col-md-4">
              <fg-input
                type="text"
                label="Sales rep id"
                placeholder="Enter a list price"
                v-model="order.sales_rep_id"
              >
              </fg-input>
            </div>
            <div class="col-md-4">
              <fg-input
                type="text"
                label="Promotion id"
                placeholder="Enter a promotion code"
                v-model="order.promotion_id"
              >
              </fg-input>
            </div>
          </div>
  
          <div class="text-center">
            <p-button type="info" round @click.prevent="created">
              Create Order
            </p-button>
          </div>
          <div class="clearfix"></div>
        </form>
      </div>
    </card>
  </template>
  <script>
import axios from 'axios';

  export default {
    data() {
      return {
        order: {
          order_id: "",
          order_date: "",
          order_mode: "",
          customer_id: "",
          order_status: "",
          order_total: "",
          sales_rep_id: "",
          promotion_id: "",
        },
      };
    },
    methods: {
      updateProfile() {
        alert("Your data: " + JSON.stringify(this.user));
      },
      listCustomers(){
        axios.get('http://localhost:3000/customers')
             .then( res => this.customers = res.data.obj)
      },
      created(){
        axios.post('http://localhost:3000/orders', {
          order_id: this.order.order_id,
          order_date: this.order.order_date,
          order_mode: this.order.order_mode,
          customer_id: this.order.customer_id,
          order_status: this.order.order_status,
          order_total: this.order.order_total,
          sales_rep_id: this.order.sales_rep_id,
          promotion_id: this.order.promotion_id,
        }).then(res => {
          console.log(res);
          this.$router.push('/order-items');
        }).catch(err => {
          this.msg = err.response.data.message;
          console.log(err);
        });
      }
    },
    mounted(){
      this.listCustomers();
    },
  };
  </script>
  <style></style>
  