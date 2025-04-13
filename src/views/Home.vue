<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router"; // Added missing import

const menuitems = [
  {
    id: 1,
    name: "Seafood",
    icon: "prawn.svg",
  },
  {
    id: 2,
    name: "Chicken",
    icon: "roast.svg",
  },
  {
    id: 3,
    name: "Pork",
    icon: "ham.svg",
  },
  {
    id: 4,
    name: "Beef",
    icon: "beef.svg",
  },
  {
    id: 5,
    name: "Vegan",
    icon: "salad.svg",
  },
  {
    id: 6,
    name: "Lamb ",
    icon: "mutton.svg",
  },
];

const meals = ref([]);
const route = useRoute();

const feactMealByName = async (menuitems) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${menuitems}`
    );
    const data = await response.json();
    meals.value = data.meals || [];
  } catch (error) {
    console.error("Error fetching meals:", error);
    meals.value = [];
  }
};

watch(route, () => {
  feactMealByName(route.params.letter);
});

onMounted(() => {
  feactMealByName(route.params.letter);
});

// Debug method to log the current state
// const debug = () => {
//   console.log("Menu Items:", menuitems);
//   console.log("Meals:", meals.value);
// };
</script>

<template>
  <div class="flex flex-col p-8">
    <div class="items-center justify-center"></div>

    <pre>{{ ingredients }}</pre>
  </div>

  <div class="flex flex-col p-2">
    <div class="bg-white h-screen py-3">
      <div class="container mx-auto px-4">
        <h1 class="text-2xl font-semibold mb-4">All Menu</h1>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
          <router-link
            v-for="item in menuitems"
            :key="item.id"
            :to="{ name: 'MealCategory', params: { category: item.name } }"
            class="bg-white shadow rounded-xl p-4 block flex items-center"
          >
            <img :src="`/src/assets/svg/${item.icon}`" class="h-20" />
            <div>
              <h2 class="text-lg font-semibold mb-2">{{ item.name }}</h2>
              <p class="text-gray-600">Description of {{ item.name }}</p>
            </div>
          </router-link>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
      </div>
    </div>
  </div>
  <!-- <div>
    <img src="@/assets/svg/prawn.svg" alt="" />
  </div> -->
</template>
