<template>
  <card class="card" title="Edit Customer">
    <div>
      <form @submit.prevent>
        <div class="row">
          <div class="col-md-4">
            <fg-input
              type="text"
              label="First Name"
              :disabled="false"
              placeholder="Enter name"
              v-model="customer.cust_first_name"
              :value="customer.cust_first_name"
            >
            </fg-input>
          </div>
          <div class="col-md-5">
            <fg-input
              type="text"
              label="Last Name"
              placeholder="Enter last name"
              v-model="customer.cust_last_name"
              :value="customer.cust_last_name"
            >
            </fg-input>
          </div>
          <div class="col-md-3">
              <fg-input
                type="text"
                label="Customer Id"
                placeholder="Enter a Id"
                v-model="customer.customer_id"
                :value="customer.customer_id"
                :disabled="true"
              >
              </fg-input>
            </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <fg-input
              type="text"
              label="Email"
              placeholder="Enter Email"
              v-model="customer.cust_email"
              :value="customer.cust_email"
            >
            </fg-input>
          </div>
        </div>
        
        <div class="row">
          <div class="col-md-4">
            <fg-input
              type="text"
              label="Credit Limit"
              placeholder="Enter a credit limit"
              v-model="customer.credit_limit"
              :value="customer.credit_limit"
            >
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input
              type="text"
              label="Income Level"
              placeholder="Enter income level"
              v-model="customer.income_level"
              :value="customer.income_level"
            >
            </fg-input>
          </div>
          <div class="col-md-4">
            <label for="region">Region</label>
            <select id="region" class="form-control" placeholder="Enter a Region" v-model="customer.region" :value="customer.region">
              <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
            </select>
          </div>
        </div>

        <div class="text-center">
          <button type="info" round @click.prevent="edit(id)">
            Edit Customer
          </button>
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
      customer: {
        cust_first_name: "",
        cust_last_name: "",
        customer_id: "",
        cust_email: "",
        credit_limit: "",
        income_level: "",
        region: "",
      },
      id: this.$route.params.id,
    };
  },
  methods: {
    updateProfile() {
      alert("Your data: " + JSON.stringify(this.user));
    },
    async list(){
      try{
      await axios.get('http://localhost:3000/customers/' + this.id)
      .then(res => this.customer = res.data);
      }catch(err){
        console.log(err)
      }
    },
    edit(id){
          axios.put(`http://localhost:3000/customers/${id}`, {
              cust_first_name: this.customer.cust_first_name,
              cust_last_name: this.customer.cust_last_name,
              customer_id: this.customer.customer_id,
              cust_email: this.customer.cust_email,
              credit_limit: this.customer.credit_limit,
              income_level: this.customer.income_level,
              region: this.customer.region,
          })
          .then(res => {
              console.log(res);
              this.$router.push('/table-list')
          }).catch(err => {
              this.msg = err.response.data.message;
              console.log(err);
          });
      }
  },
  mounted(){
    this.list();
  }
};
</script>
<style></style>
