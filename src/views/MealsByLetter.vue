<template>
  <div class="flex justify-center gap-2 mt-2">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter of letters"
      :key="letter"
      >{{ letter }}
    </router-link>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import MealItem from "../components/MealItem.vue";

const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPQRSTYUVXYZ".split("");
const meals = ref([]);

const fetchMealsByLetter = async (letter) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
    );
    const data = await response.json();
    meals.value = data.meals || [];
  } catch (error) {
    console.error("Error fetching meals:", error);
    meals.value = [];
  }
};

watch(route, () => {
  fetchMealsByLetter(route.params.letter);
});

onMounted(() => {
  fetchMealsByLetter(route.params.letter);
});
</script>