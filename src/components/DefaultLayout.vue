<template>
  <div class="bg-grey-100 h-full">
    <Navbar />
    <main>
      <router-view />
    </main>
  </div>
</template>
<script setup>
import Navbar from "../components/Navbar.vue";
</script>