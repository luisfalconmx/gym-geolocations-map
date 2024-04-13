<script setup lang="ts">
import { onMounted } from "vue";
import { useQuery } from "@tanstack/vue-query";
import NavigationBar from "./components/NavigationBar.vue";
import { Loader } from "@googlemaps/js-api-loader";
import { mapConfig } from "./config/map.config";
import { getAllLands } from "./services";
import { VueQueryDevtools } from "@tanstack/vue-query-devtools";

const { isPending, isError, data } = useQuery({
  queryKey: ["lands"],
  queryFn: getAllLands,
});

onMounted(() => {
  const loader = new Loader({
    apiKey: "AIzaSyB8UgPxDNiVaeWEIJbRuC_6rvizKGqrrkA",
    version: "weekly",
  });

  let map = null;
  console.log(map);

  loader.importLibrary("maps").then(() => {
    const target = document.getElementById("map") as HTMLElement;
    map = new google.maps.Map(target, mapConfig);
  });
});
</script>

<template>
  <NavigationBar />

  <section v-if="isPending">
    <p>Loading...</p>
  </section>

  <section v-if="isError">
    <p>Error</p>
  </section>

  <section
    class="grid lg:grid-cols-[250px_1fr_400px]"
    v-if="!isPending && !isError"
  >
    <aside
      class="min-h-screen bg-clip-padding backdrop-filter backdrop-blur-2xl bg-gradient-to-b from-black/80 to-black/20 px-6 py-12"
    >
      <h2 class="text-white font-bold text-2xl">Regions</h2>
      <select>
        <option v-for="land in data" :key="land.id" :value="land.region">
          {{ land.region }}
        </option>
      </select>
    </aside>

    <div id="map" style="height: 100%; min-height: 500px" />

    <aside>
      <ul>
        <li v-for="land in data" :key="land.id">
          <h3>{{ land.region }}</h3>
          <p>{{ land.description }}</p>
        </li>
      </ul>
    </aside>
  </section>

  <VueQueryDevtools />
</template>
