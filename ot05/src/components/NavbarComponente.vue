<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">Trilha 05</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#menu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="menu">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Produtos</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Sobre</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComponente'
};
</script>