<template>
  <div id="Directions" class="flex flex-col h-screen">
    <div class="grid grid-cols-12 mt-4 shadow-md">
      <div class="cols-span-2 mx-auto">
        <div><ArrowIcon :size="35" /></div>
        <div class="h-16 mt-4 w-full">
          <div :class="[isPickupActive ? 'circle-black' : 'circle-grey']"></div>
          <div class="line"></div>
          <div
            :class="[!isPickupActive ? 'square-black' : 'square-grey']"
          ></div>
        </div>
      </div>
      <div class="col-span-10 pr-4">
        <div class="w-full h-5"></div>
        <div class="mb-2 mt-5">
          <AutoCompleteInput
            theId="firstInput"
            placeholder="Enter the pick-up location"
            @isActive="isPickupActive = true"
            v-model="pickup"
          />
        </div>
        <div class="mb-3">
          <AutoCompleteInput
            theId="SecondInput"
            placeholderEner="Where to ?"
            @isActive="isPickupActive = false"
            v-model="des"
          />
        </div>
      </div>
    </div>
    <div class="flex items-center custom-border-bottom">
      <div class="bg-gray-400 mx-5 my-3.5 p-1.5 rounded-full">
        <MapMakerIcon :size="30" fillcolor="#f5f5f5" />
      </div>
      <div>
        <div class="text-lg text-gray-600">London , Uk</div>
        <div class="text-lg text-gray-400">Uk</div>
      </div>
    </div>
      {{ addressData }}
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { debounce } from "lodash";
import AutoCompleteInput from "../components/AutoCompleteInput.vue";
import MapMakerIcon from "vue-material-design-icons/MapMarker.vue";
import ArrowIcon from "vue-material-design-icons/ArrowLeft.vue";
import axios from "axios";

let addressData = ref("");
let pickup = ref("");
let destination = ref("");
let isPickupActive = ref("");

onMounted(() => {
  document.getElementById("firstInput").focus();
});

const findAddress = debounce(async (address) => {
  try {
    let res = await axios.get("address/" + address);
    addressData.value = res.data;
    console.log("event")
  } catch (err) {
    console.log(err);
  }
}, 300);

watch(pickup, async (pickup) => await findAddress(pickup));
watch(destination, async (destination) => findAddress(destination));
</script>

<style lang="scss" scoped>
#Directions {
  .bg-custom-color {
    background-color: rgb(237, 237, 237);
  }
  .circle-black {
    margin: 0 auto;
    width: 9px;
    height: 9px;
    background-color: black;
    border-radius: 100%;
  }

  .circle-grey {
    margin: 0 auto;
    width: 9px;
    height: 9px;
    background-color: rgb(191, 191, 191);
    border-radius: 100%;
  }
  .square-black {
    margin: 0 auto;
    width: 9px;
    height: 9px;
    background-color: black;
  }

  .square-grey {
    margin: 0 auto;
    width: 9px;
    height: 9px;
    background-color: rgb(191, 191, 191);
  }
  .line {
    margin: 0 auto;
    width: 2px;
    height: 45px;
    background-color: rgb(191, 191, 191);
  }
  .custom-border-bottom {
    border-bottom: 1px solid rgb(230, 230, 230);
  }
}
</style>
