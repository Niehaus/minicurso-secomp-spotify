<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <CustomHeader></CustomHeader>
  <!-- Begin page content -->
  <main class="flex-shrink-0 pt-5">
    <div class="container">
      <RouterView />
    </div>
  </main>
  <!-- <CustomFooter></CustomFooter> -->
</template>

<style scoped></style>
