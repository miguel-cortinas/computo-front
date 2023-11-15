<template>
  <card class="custom-card" title="Create a New Customer">
    <div>
      <form @submit.prevent="created" class="custom-form">
        <!-- Nombre -->
        <div class="row">
          <div class="col-md-4">
            <fg-input
              type="text"
              label="First Name"
              :disabled="false"
              placeholder="Enter name"
              v-model="customer.cust_first_name"
            >
            </fg-input>
          </div>
          <!-- Apellidos -->
          <div class="col-md-5">
            <fg-input
              type="text"
              label="Last Name"
              placeholder="Enter last name"
              v-model="customer.cust_last_name"
            >
            </fg-input>
          </div>
          <div class="col-md-3">
            <fg-input
              type="text"
              label="Customer Id"
              placeholder="Enter an Id"
              v-model="customer.customer_id"
            >
            </fg-input>
          </div>
        </div>
        <!-- Email -->
        <div class="row">
          <div class="col-md-12">
            <fg-input
              type="text"
              label="Email"
              placeholder="Enter Email"
              v-model="customer.cust_email"
            >
            </fg-input>
          </div>
        </div>

        <div class="row">
          <!-- Limite de crédito -->
          <div class="col-md-4">
            <fg-input
              type="text"
              label="Credit Limit"
              placeholder="Enter a credit limit"
              v-model="customer.credit_limit"
            >
            </fg-input>
          </div>
          <!-- Nivel de ingresos -->
          <div class="col-md-4">
            <fg-input
              type="text"
              label="Income Level"
              placeholder="Enter income level"
              v-model="customer.income_level"
            >
            </fg-input>
          </div>
          
        </div>

        <div class="row">
          <!-- Región -->
          <div class="col-md-4">
            <label for="region">Region</label>
            <select id="region" class="form-control" placeholder="Enter a Region" v-model="customer.region">
              <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
            </select>
          </div>
        </div>

        <div class="text-center">
          <button type="submit" round @click.prevent="created" class="custom-button">
            Create Customer
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
    };
  },
  methods: {
    updateProfile() {
      alert("Your data: " + JSON.stringify(this.user));
    },
    listCustomers() {
      axios.get(' http://localhost:3000/customers')
        .then(res => this.customers = res.data.obj);
    },
    created() {
      axios.post(' http://localhost:3000/customers', {
        cust_first_name: this.customer.cust_first_name,
        cust_last_name: this.customer.cust_last_name,
        customer_id: this.customer.customer_id,
        cust_email: this.customer.cust_email,
        credit_limit: this.customer.credit_limit,
        income_level: this.customer.income_level,
        region: this.customer.region,
      }).then(res => {
        console.log(res);
        this.$router.push('/table-list');
      }).catch(err => {
        this.msg = err.response.data.message;
        console.log(err);
      });
    },
  },
};
</script>

<style scoped>

.custom-card {
  background-color: rgba(5, 113, 12, 0.118); 
  border: 1px solid #035c12; 
  padding: 20px;
  color: #000; 
}

.custom-form {
  max-width: 800px;
  margin: 0 auto;
}

.custom-button {
  background-color: #93f1ce; 
  color: rgb(10, 1, 1); 
  border: 1px solid #035c12; 
  padding: 10px 20px; 
  cursor: pointer; 
}
</style>
