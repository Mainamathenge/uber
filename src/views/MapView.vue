<template>
  <div id="MapView">
    <div id="map"></div>
    <div id="VehicleSelection" class="w-full">
      <div class="w-full h-2 border-t"></div>
      <div class="w-full text-center border-t-2 p-1.5 text-gray font-semi-bold">
        Distance-50
      </div>
      <div class="scrollSection">
        <div class="bg-custom-gray">
          <div class="flex items-center px-4 py-5">
            <img width="75" src="img/uber/ride.png" alt="Car-image" />
            <div class="w-full ml-3">
              <div class="flex items-center justify-between">
                <div class="text=2xl mb-1">UberX</div>
                <div class="text-xl">$50</div>
              </div>
              <div class="text-gray-500">7 hours</div>
            </div>
          </div>
        </div>
        <div>
          <div class="flex items-center px-4 py-5">
            <img width="75" src="img/uber/uberxl.png" alt="Car-image" />
            <div class="w-full ml-3">
              <div class="flex items-center justify-between">
                <div class="text=2xl mb-1">UberX</div>
                <div class="text-xl">$50</div>
              </div>
              <div class="text-gray-500">7 hours</div>
            </div>
          </div>
        </div>
        <div>
          <div class="flex items-center px-4 py-5">
            <img width="75" src="img/uber/comfort.png" alt="Car-image" />
            <div class="w-full ml-3">
              <div class="flex items-center justify-between">
                <div class="text=2xl mb-1">UberX</div>
                <div class="text-xl">$50</div>
              </div>
              <div class="text-gray-500">7 hours</div>
            </div>
          </div>
          <div
            class="flex items-center bg-white py-6 px-4 w-full absolute bottom-0 shadow-inner"
          >
            <button
              class="bg-black text-2xl text-white py-4 px-4 rounded-sm w-full"
            >
              Confirm UberX
            </button>
          </div>
        </div>
      </div>
    </div>
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
  const map = new window.google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
    fullscreenControl: false,
    zoomControl: false,
    streetViewControl: false,
    mapTypeControl: false,
  });
  console.log(map);
};
</script>

<style lang="scss">
#MapView {
  #map {
    width: 100%;
    height: 45vh;
    top: 0px;
    left: 0px;
  }
  .gm-style-cc {
    display: none;
  }
  .bg-custom-color {
    background-color: rgb(237, 237, 237);
  }
  #vehicleSelection {
    .scrollSection {
      height: calc(50vh - 120px);
      position: absolute;
      overflow-y: auto;
      width: 100%;
    }
  }
}
</style>
