<template>
  <div id="map">
    <div id="map"></div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  setTimeout(() => {
    initMap();
  }, 50);
});

const initMap = () => {
    // eslint-disable-next-line no-undef
    const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
  console.log(map)
}
</script>

<style lang="scss" scoped>
#Mapview {
  #map {
    width:100%;
    height:45vh;
    top:0px;
    left:0px;
  }
  .bg-custom-color {
    background-color: rgb(237, 237, 237);
  }
}
</style>
