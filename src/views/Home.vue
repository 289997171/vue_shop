<template>
  <div>
    Home
    <el-button type="info" @click="logout">退出</el-button>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from "vue-property-decorator";

@Component({name: "Home"})
export default class extends Vue {

  private logout() {
    window.sessionStorage.clear();
    this.$router.push("/login");
  }
}
</script>

<style scoped>

</style>
