<template>
  <div>
    <h1 class="text-2xl font-semibold mb-4">Category: {{ category }}</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
      <MealItem v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import MealItem from "../components/MealItem.vue";

const route = useRoute();
const category = route.params.category;
const meals = ref([]);

const fetchMealsByCategory = async (category) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    );
    const data = await response.json();
    meals.value = data.meals || [];
  } catch (error) {
    console.error("Error fetching meals by category:", error);
    meals.value = [];
  }
};

onMounted(() => {
  fetchMealsByCategory(category);
});
</script>
