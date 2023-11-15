<template>
  <div class="landing">
    <div class="content">
      <h1>Bases de Datos Distribuidas</h1>
      <h2>Proyecto Segundo Parcial</h2>
      <h4>Computo Paralelo y Distribuido</h4>
      <h5>Eduardo Rodriguez | Miguel Cortinas</h5>
      <p>Desarrollando un proyecto sobre una arquitectura de bases de datos distribuidas.</p>
      <p>¡Explora el mundo de la distribución de datos para una mayor escalabilidad y rendimiento!</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {},
};
</script>

<style scoped>
.landing {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh; 
  background-color: #f8f9fa; 
}

.content {
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
  background-color: #fff; 
  width: 80%;
}

h1 {
  font-size: 3.5em; 
  margin-bottom: 10px;
  color: rgb(1, 136, 71); 
}

h2 {
  font-size: 2.5em; 
  margin-bottom: 20px;
}

h4 {
  font-size: 1.5em; 
}

h5 {
  font-size: 1.2em; 
  margin-bottom: 20px;
}

p {
  font-size: 1.2em;
  color: #333; 
}
</style>
