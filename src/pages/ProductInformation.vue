<template>
  <div class="row">
    <div class="col-12">
      <card class="strpied-tabled-with-hover" body-classes="table-full-width table-responsive">
            <template slot="header">
              <h4 class="card-title">Product Information</h4>
              <p class="card-category">Here is a list of all the products in the database</p>
            </template>

              <table class="table-hover table-striped" style="padding: 15%; width: 100%; margin-left: 1%;">
                <thead>
                  <tr>
                    <th scoped="col"> Id</th>
                    <th scoped="col"> Name</th>
                    <th scoped="col"> Description</th>
                    <th scoped="col"> Category</th>
                    <th scoped="col"> Weight Class</th>
                    <th scoped="col"> Warranty Period</th>
                    <th scoped="col"> Supplier</th>
                    <th scoped="col"> Product Status</th>
                    <th scoped="col"> List Price</th>
                    <th scoped="col"> Minimum Price</th>
                    <th scoped="col"> Catalog URL</th>
                    <th scoped="col"> Edit</th>
                    <th scoped="col"> Delete</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="product in products" :key="product.product_id">
                    <td>{{ product.product_id }}</td>
                    <td>{{ product.product_name }}</td>
                    <td>{{ product.product_description }}</td>
                    <td>{{ product.category_id }}</td>
                    <td>{{ product.weight_class }}</td>
                    <td>{{ product.warranty_period }}</td>
                    <td>{{ product.supplier_id }}</td>
                    <td>{{ product.product_status }}</td>
                    <td>{{ product.list_price }}</td>
                    <td>{{ product.min_price }}</td>
                    <td>{{ product.catalog_url }}</td>
                    <td><router-link tag="button"
                                        class="btn btn-light btn-sm">Ir</router-link></td>
                    <td><button type="button" tag="button" class="btn btn-info btn-sm" @click="edit(product.product_id)">Edit</button></td>
                    <td><button type="button" tag="button" class="btn btn-danger btn-sm" @click="deleteP(product.product_id)">Delete</button></td>
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
      products: null,
    };
  },
  methods: {
    async list(){
      try{
      await axios.get('https://dv786379-3000.usw3.devtunnels.ms/products')
      .then(res => this.products = res.data);
      }catch(err){
        console.log(err)
      }
    },
    async edit(product_id){
      try{
            await axios.get(`https://dv786379-3000.usw3.devtunnels.ms/products/${product_id}`)
            .then(res => {
                console.log(res);
                this.$router.push(`/edit-product/${product_id}`)
            }).catch(err => {
                this.msg = err.response.data.message;
                console.log(err);
            });
          }catch(err){
            console.log(err)
          }
    },
    async deleteP(product_id){
      try{
        await axios.delete(`https://dv786379-3000.usw3.devtunnels.ms/products/${product_id}`)
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
