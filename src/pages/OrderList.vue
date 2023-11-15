<template>
  <div class="row">
    <div class="col-12">
      <card class="strpied-tabled-with-hover" body-classes="table-full-width table-responsive">
            <template slot="header">
              <h4 class="card-title">Orders List</h4>
              <p class="card-category">Here is a list of all the orders list in the database</p>
            </template>

              <table class="table-hover table-striped" style="padding: 15%; width: 100%; margin-left: 1%;">
                <thead>
                  <tr>
                    <th scoped="col"> Id</th>
                    <th scoped="col"> Order Date</th>
                    <th scoped="col"> Order Mode</th>
                    <th scoped="col"> Customer Id</th>
                    <th scoped="col"> Order Status</th>
                    <th scoped="col"> Total Order</th>
                    <th scoped="col"> Sales Rep Id</th>
                    <th scoped="col"> Promotion Id</th>
                    <th scoped="col"> Edit</th>
                    <th scoped="col"> Delete</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="order in orders" :key="order.order_id">
                    <td>{{ order.order_id }}</td>
                    <td>{{ order.order_date }}</td>
                    <td>{{ order.order_mode }}</td>
                    <td>{{ order.customer_id }}</td>
                    <td>{{ order.order_status }}</td>
                    <td>{{ order.order_total }}</td>
                    <td>{{ order.sales_rep_id }}</td>
                    <td>{{ order.promotion_id }}</td>
                    <!-- <td><router-link tag="button"
                                        class="btn btn-light btn-sm">Ir</router-link></td> -->
                    <td><button type="button" tag="button" class="btn btn-info btn-sm" @click="edit(order.order_id)">Edit</button></td>
                    <td><button type="button" tag="button" class="btn btn-danger btn-sm" @click="deleteP(order.order_id)">Delete</button></td>
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
      orders: null,
    };
  },
  methods: {
    async list(){
      try{
      await axios.get('https://dv786379-3000.usw3.devtunnels.ms/orders')
      .then(res => this.orders = res.data);
      }catch(err){
        console.log(err)
      }
    },
    async edit(order_id){
          try{
            await axios.get(`https://dv786379-3000.usw3.devtunnels.ms/orders/${order_id}`)
            .then(res => {
                console.log(res);
                this.$router.push(`/edit-order/${order_id}`)
            }).catch(err => {
                this.msg = err.response.data.message;
                console.log(err);
            });
          }catch(err){
            console.log(err)
          }
    },
    async deleteP(order_id){
      try{
        await axios.delete(`https://dv786379-3000.usw3.devtunnels.ms/orders/${order_id}`)
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
