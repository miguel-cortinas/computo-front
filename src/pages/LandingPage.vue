<template>
  <div class="landing">
    <div class="content">
      <h1>Bases de datos distribuidas</h1>
      <h2>Proyecto segundo parcial</h2>
      <h4>Computo Paralelo y Distribuido</h4>
      <h5>Eduardo Rodriguez | Miguel Cortinas</h5>
      <p>Aplicación sobre una arquitectura de base de datos distribuidas.</p>
    </div>
  </div>
</template>
<script>

export default {
  data() {
  },
};
</script>
<style scoped>
.landing {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 78vh; 
}

.content {
  text-align: center;
}

h1 {
  font-size: 3em;
  margin-bottom: 10px;
}

h2 {
  font-size: 2em;
  margin-bottom: 20px;
}

p {
  font-size: 1.2em;
}
</style>