<template>
  <footer class="footer">
    <div class="container-fluid d-flex flex-wrap justify-content-between">
      <nav>
        <ul>
          <li>
            <router-link :to="{ path: '/admin' }">Computo Paralelo y Distribuido</router-link>
          </li>
        </ul>
      </nav>
      <div class="copyright d-flex flex-wrap">
        &copy; Coded with
        <i class="fa fa-heart heart"></i> by
        <a href="https://github.com/ManuelBalderramaCh" target="_blank">
          &nbsp; Miguel Cortinas | Eduardo Rodriguez.</a
        >&nbsp; Designed by
        <a href="https://github.com/Juan-Angel-Cepeda" target="_blank"
          >&nbsp; FING Team.</a
        >
      </div>
    </div>
  </footer>
</template>
<script>
export default {};  
</script>
<style>
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
  margin: 0;
}

.footer {
  margin-top: auto; 
  width: 100%;
  background-color: #f5f5f5; 
 
}
</style>
