<template>
  <div class="row">
    <div class="col-12">
      <card class="strpied-tabled-with-hover" body-classes="table-full-width table-responsive">
            <template slot="header">
              <h4 class="card-title">Order Items</h4>
              <p class="card-category">Here is a list of all the order items in the database</p>
            </template>

              <table class="table-hover table-striped" style="padding: 15%; width: 100%; margin-left: 1%;">
                <thead>
                  <tr>
                    <th scoped="col"> Id</th>
                    <th scoped="col"> Line Item Id</th>
                    <th scoped="col"> Product Id</th>
                    <th scoped="col"> Unit Price</th>
                    <th scoped="col"> Quantity</th>
                    <th scoped="col"> Edit</th>
                    <th scoped="col"> Delete</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="orderItem in orderItems" :key="orderItem.order_id">
                    <td>{{ orderItem.order_id }}</td>
                    <td>{{ orderItem.line_item_id }}</td>
                    <td>{{ orderItem.product_id  }}</td>
                    <td>{{ orderItem.unit_price }}</td>
                    <td>{{ orderItem.quantity }}</td>
                    <!-- <td><router-link tag="button"
                                        class="btn btn-light btn-sm">Ir</router-link></td> -->
                    <td><button type="button" tag="button" class="btn btn-info btn-sm" @click="edit(orderItem.order_id)">Edit</button></td>
                    <td><button type="button" tag="button" class="btn btn-danger btn-sm" @click="deleteP(orderItem.order_id, orderItem.line_item_id)">Delete</button></td>
                  </tr>
                </tbody>
              </table>
          </card>
    </div>
  </div>
</template>
<script>

import Card from "@/components/Cards/Card.vue";
import axios from 'axios';

export default {
  components: {
    Card,
  },
  data() {
    return {
      orderItems: null,
    };
  },
  methods: {
    async list(){
      try{
        await axios.get('https://dv786379-3000.usw3.devtunnels.ms/order_items')
        .then(res => this.orderItems = res.data);
      }catch(err){
        console.log(err);
      }
    },
    async edit(order_item_id) {
      try {
        await axios.get(`https://dv786379-3000.usw3.devtunnels.ms/order_items/${order_item_id}`)
          .then(res => {
            console.log(res);
            this.$router.push(`/order_item-edit/${order_item_id}`)
          }).catch(err => {
            this.msg = err.response.data.message;
            console.log(err);
          });
      } catch (err) {
        console.log(err)
      }
    },
    async deleteP(order_item_id,line_item_id){
      try{
        await axios.delete(`https://dv786379-3000.usw3.devtunnels.ms/order_items/${order_item_id}/${line_item_id}`)
        .then(res => {
            console.log(res);
            this.list();
        }).catch(err => {
            this.msg = err.response.data.message;
            console.log(err);
        });
      }catch(err){
        console.log(err)
      }
    },
  },
  mounted(){
    this.list();
  },
};
</script>
<style></style>
