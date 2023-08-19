<template>
  <div id="ServiceSelectLarge">
    <div class="w-full rounded-2xl bg-custom-color custom-height">
      <div class="flex justify-between p-2">
        <div class="text-lg ml-2 text-gray-900 mt-14">Ride</div>
        <div class="mt-3 mr-1">
          <img
            width="70"
            src="img/uber/ride.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<!-- <script>
const props = defineProps({
  text:String,
  imgaWidth:String,
  image:String
})
</script> -->

<style lang="scss" scoped>
#ServiceSelectLarge {
  .bg-custom-color {
    background-color: rgb(237, 237, 237);
  }
  .custom-height {
    height: 100px;
  }
}
</style>
