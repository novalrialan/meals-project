<template>
  <div class="bg-white shadow rounded-xl">
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-xl object-cover h-45"
      />
    </router-link>

    <div class="p-3">
      <h3 class="font-bold">{{ meal.strMeal }}</h3>
      <p class="mb-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni minima
        ipsa veritatis accusantium illum nulla temporibus similique omnis, error
        repellendus, cupiditate velit quaerat ab exercitationem ut provident
        voluptatibus dolorem excepturi. Quisquam nisi omnis distinctio vero
        doloribus adipisci officiis corrupti aliquid.
      </p>
      <div class="flex items-center justify-between">
        <YoutubeButton :href="meal.strYoutube">Youtube</YoutubeButton>
        <router-link
          to="/"
          class="px-3 py-2 rounded border-2 border-blue-600 hover:bg-blue-500 hover:text-white transition-colors"
          >View</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import YoutubeButton from "./YoutubeButton.vue";
const { meal } = defineProps({
  meal: {
    required: true,
    type: Object,
  },
});
</script>