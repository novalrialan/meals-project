<template>
  <div class="p-8">
    <!-- <pre>{{ ingredients }}</pre> -->
    <h1 class="text-4xl font-bold mb-4">Ingredients</h1>
    <router-link
      :to="{
        name: 'ingredients',
        param: { ingredient: ingredient.idIngredient },
      }"
      v-for="ingredient of ingredients"
      :key="ingredient.id"
      class="block bg-white rounded p-3 mb-3 shadow"
    >
      <!-- <pre>{{ ingredient }}</pre> -->
      <h3 class="text-2xl font-bold">{{ ingredient.strIngredient }}</h3>
      <p>{{ ingredient.strDescription }}</p>
    </router-link>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axiosClient from "../axiosClient";

const ingredients = ref([]);

onMounted(() => {
  axiosClient.get("list.php?i=list").then(({ data }) => {
    // debugger;
    ingredients.value = data.meals;
  });
});
</script>