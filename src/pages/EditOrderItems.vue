<template>
  <card class="card" title="Edit Product">
    <div>
      <form @submit.prevent>
        <div class="row">
          <div class="col-md-5">
            <fg-input
              type="text"
              label="Order Id"
              :disabled="true"
              placeholder="Enter an order id"
              v-model="order_item.order_id"
              :value="order_item.order_id"
            >
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input
              type="text"
              label="Line Item Id"
              :disabled="true"
              placeholder="Enter an line item id"
              v-model="order_item.line_item_id"
              :value="order_item.line_item_id"
            >
            </fg-input>
            </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <fg-input
              type="text"
              label="Product Id"
              placeholder="Enter an product id"
              :disabled="true"
              v-model="order_item.product_id"
              :value="order_item.product_id"
            >
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input
              type="text"
              label="Unit Price"
              placeholder="Enter a unit price"
              v-model="order_item.unit_price"
              :value="order_item.unit_price"
              :disabled="false"
            >
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input
              type="text"
              label="Quantity"
              placeholder="Enter a quantity"
              v-model="order_item.quantity"
              :value="order_item.quantity"
            >
            </fg-input>
          </div>
        </div>

        <div class="text-center">
          <p-button type="info" round @click.prevent="edit">
            Edit Order Item
          </p-button>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </card>
</template>
<script>

import axios from 'axios';
import Card from "@/components/Cards/Card.vue";

export default {
  data() {
    return {
      order_item: {
        order_id: "",
        line_item_id: "",
        product_id: "",
        unit_price: "",
        quantity: "",
      },
      id: this.$route.params.id,
    };
  },
  methods: {
    updateProfile() {
      alert("Your data: " + JSON.stringify(this.user));
    },
    list(){
      axios.get('http://localhost:3000/order_items/' + this.id)
      .then(res => this.product = res.data.obj);
    },
    edit(order_item_id){
      axios.put(`http://localhost:3000/order_items/${order_item_id}`, {
        order_id: this.order_item.order_id,
        line_item_id: this.order_item.line_item_id,
        product_id: this.order_item.product_id,
        unit_price: this.order_item.unit_price,
        quantity: this.order_item.quantity,
      })
      .then(res => {
        console.log(res);
        this.$router.push('/order-items');
      }).catch(err => {
        this.msg = err.response.data.message;
        console.log(err);
      });
    }
  },
  mounted(){
    this.list();
  },
};
</script>
<style></style>
