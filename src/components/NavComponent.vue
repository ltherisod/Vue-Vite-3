<template>
    <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand"  to="/">
        <img src="../assets/logo.png" alt="logo" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" to="/">Users</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="/add">Add Users</router-link>
          </li>
       
        </ul>
       
      </div>
    </div>
  </nav>
</template>

<script setup>

</script>

<style scoped>
nav a.router-link-exact-active {
  color: #ff0101 !important;
}
img {
  width: 10rem;
}
</style>