<template>
  <div class="p-8 pb-0">
    <input
      v-model="keyword"
      type="text"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Search for Meals.."
      @change="searchMeals"
    />
  </div>
  <!-- <pre>{{ meals }}</pre> -->
  <div class="grid grid-cols-3 md:grid-col-3 gap-5 p-8">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>
</template>

<script setup>
import { computed } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import YoutubeButton from "../components/YoutubeButton.vue";
import MealItem from "../components/MealItem.vue";

const route = useRoute();
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  store.dispatch("searchMeals", keyword.value);
}

onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>

      <!-- <a :href="meal.strSource" target="_blank">Source</a> -->

  <!-- <div>
        <p>{{ meal.strInstructions }}</p>
      </div> -->