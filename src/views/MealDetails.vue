<template>
  <div class="max-w-[800px] mx-auto p-8">
    <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" alt="meal.strMeal" class="max-w-[100%]" />

    <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
      <div>
        <strong class="font-bold">Category</strong> : {{ meal.strCategory }}
      </div>
      <div><strong class="font-bold">Area</strong> : {{ meal.strArea }}</div>
      <div><strong class="font-bold">Tags</strong> : {{ meal.strTags }}</div>
    </div>

    <div>
      {{ meal.strInstructions }}
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div>
        <h2 class="text-2px font-semibold mb-2">Ingridienst</h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)" :key="ind">
            <i v-if="meal[`strIngredient${ind + 1}`]">
              {{ ind + 1 }}. {{ meal[`strIngredient${ind + 1}`] }},
            </i>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="text-2px font-semibold mb-2">Measures</h2>
        <ul>
          <template v-for="(el, mea) of new Array(20)" :key="mea">
            <i v-if="meal[`strMeasure${mea + 1}`]">
              {{ mea + 1 }}. {{ meal[`strMeasure${mea + 1}`] }},
            </i>
          </template>
        </ul>
      </div>

      <div class="mt-4">
        <YoutubeButton :href="meal.strYoutube"> Youtube</YoutubeButton>
        <a
          :href="meal.strSource"
          target="_blank"
          class="ml-3 px-3 py-2 rounded border-2 border-transparent text-gray-700 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors"
        >
          View Original Source</a
        >
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";
import YoutubeButton from "../components/YoutubeButton.vue";

const route = useRoute();
const meal = ref({});

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    debugger;
    meal.value = data.meals[0] || {};
  });
});
</script>