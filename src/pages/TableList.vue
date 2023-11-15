<template>
  <div class="row">
    <div class="col-12">
      <card class="strpied-tabled-with-hover" body-classes="table-full-width table-responsive">
            <template slot="header">
              <h4 class="card-title">Customers</h4>
              <p class="card-category">Here is a list of all the customers in the database</p>
            </template>

              <table class="table-hover table-striped" style="padding: 15%; width: 100%; margin-left: 1%;">
                <thead>
                  <tr>
                    <th scoped="col"> Id</th>
                    <th scoped="col"> First Name</th>
                    <th scoped="col"> Last Name</th>
                    <th scoped="col"> Credit Limit</th>
                    <th scoped="col"> Email</th>
                    <th scoped="col"> Income Level</th>
                    <th scoped="col"> Region</th>
                    <th scoped="col"> Edit</th>
                    <th scoped="col"> Delete</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="customer in customers" :key="customer.customer_id">
                    <td>{{ customer.customer_id}}</td>
                    <td>{{ customer.cust_first_name }}</td>
                    <td>{{ customer.cust_last_name }}</td>
                    <td>{{ customer.credit_limit }}</td>
                    <td>{{ customer.cust_email }}</td>
                    <td>{{ customer.income_level }}</td>
                    <td>{{ customer.region }}</td>
                    <!-- <td><router-link tag="button"
                                        class="btn btn-light btn-sm">Ir</router-link></td> -->
                    <td><button type="button" tag="button" class="btn btn-info btn-sm" @click="edit(customer.customer_id)">Edit</button></td>
                    <td><button type="button" tag="button" class="btn btn-danger btn-sm" @click="deleteP(customer.customer_id, customer.region)">Delete</button></td>
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
      customers: [],
    };
  },
  methods: {
    async list(){ 
      try{
      await axios.get('https://dv786379-3000.usw3.devtunnels.ms/customers/')
      .then(res => {
        console.log(res)
        this.customers = res.data
        console.log(this.customers)
      });
      } catch(err){
        console.error(err)
      }
    },
    async edit(customer_id){
      try{
            await axios.get(`https://dv786379-3000.usw3.devtunnels.ms/customers/${customer_id}/`)
            .then(res => {
                console.log(res);
                this.$router.push(`/edit-customer/${customer_id}`)
            }).catch(err => {
                this.msg = err.response.data.message;
                console.log(err);
            });
          } catch(err){
            console.error(err)
          }
    },
    async deleteP(customer_id, region){
      try{
        await axios.delete(`https://dv786379-3000.usw3.devtunnels.ms/customers/${customer_id}/${region}`)
        .then(res => {
            console.log(res);
            this.list();
        }).catch(err => {
            this.msg = err.response.data.message;
            console.log(err);
        });
      } catch(err){
        console.error(err)
      }
    },
  },
  mounted(){
    this.list();
  },
};
</script>
<style></style>
