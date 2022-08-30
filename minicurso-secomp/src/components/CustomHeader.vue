<template>
  <header>
    <!-- Fixed navbar -->
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">SPOTIFY ANALISYS</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>              
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>              
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/randomtracker">Random Tracker</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/similartrack">Similar Tracks</router-link>
            </li> 
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.nav-scroller {
  position: relative;
  z-index: 2;
  height: 2.75rem;
  overflow-y: hidden;
}

.nav-scroller .nav {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}
</style>
