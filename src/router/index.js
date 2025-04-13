import { createRouter, createWebHistory } from "vue-router";
import MealList from "../views/MealList.vue";
import Home from "../views/Home.vue";
import MealsByName from "../views/MealsByName.vue";
import MealDetails from "../views/MealDetails.vue";
import MealsByLetter from "../views/MealsByLetter.vue";
import MealsByIngredients from "../views/MealsByIngredients.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import GuestLayout from "../components/GuestLayout.vue";
import Ingredients from "../views/Ingredients.vue";
import MealCategory from "../views/MealCategory.vue";





const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/home",
        name: "home",
        component: Home,
      },
      {
        path: "/by-name/:name?",
        name: "byName",
        component: MealsByName,
      },
      {
        path: "/by-letter/:letter?",
        name: "byLetter",
        component: MealsByLetter,
      },
      {
        path: "/ingredients",
        name: "ingredients",
        component: Ingredients,
      },
      {
        path: "/by-ingredient/:ingredient?",
        name: "byIngredients",
        component: MealsByIngredients,
      },
      {
        path: '/meal/:id',
        name: 'mealDetails',
        component: MealDetails
      },
      {
        path: "/category/:category?",
        name: "MealCategory",
        component: MealCategory, // Ensure this file exists
      },

    ]
  },

  {
    path: "/guest",
    component: GuestLayout,
    children: [
      // {
      //   path: "/by-name/:name?",
      //   name: "byName",
      //   component: MealsByName,
      // },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
