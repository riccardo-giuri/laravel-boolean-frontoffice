<script>
  export default {

  }
</script>

<template>
  <div class="wrapper">
    <nav class="nav-bg mb-2">
      <div class="container">
        <div class="py-3 d-flex align-items-center justify-content-between">
          <RouterLink  :to="{name: 'home'}" class="text-decoration-none logo">Cocktail Bar</RouterLink>

          <ul class="d-flex list-unstyled gap-4 m-0">
            <li><RouterLink :to="{name: 'chi-siamo'}" class="text-decoration-none navLinks">Chi-siamo</RouterLink></li>
            <li><RouterLink :to="{name: 'contatti'}" class="text-decoration-none navLinks">Contatti</RouterLink></li>
          </ul>
        </div>
      </div>
    </nav>

    <RouterView></RouterView>
  </div>
  
</template>

<style>
  .logo{
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    text-transform: uppercase;
    font-size: 1rem;
    letter-spacing: 4px;
  }

  .navLinks{
    color: white;
    font-family: 'Karla', sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 1rem;
    letter-spacing: .8px;
  }

  body{
    width: 99vw;
    background-color: #0d0d0d;
  }
</style>
