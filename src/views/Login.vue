<template>
  <div class="bg-gray-500 h-full flex justify-center">
    <div class="login_box">
      <div class="flex justify-center">
        <img class="avatar_box" src="@/assets/logo.png" alt="">
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import {Vue, Component} from "vue-property-decorator";

@Component({name: "Login"})
export default class extends Vue {

}
</script>

<style lang="less" scoped>
.login_box {
  width: 500px;
  height: 360px;
  @apply bg-white my-auto rounded;

  .avatar_box {
    width: 120px;
    height: 120px;
    transform: translateY(-80px);
    @apply bg-gray-50 rounded-full border-2 shadow-xl;
  }
}
</style>
