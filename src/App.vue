<template>
  
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  created() {
    const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_CUSTOMPATH}/products`;
    // API伺服器路徑
    // 所申請的API Path
    this.$http.get(api).then((response) => {
      console.log(response.data);
    });
  },
  components: {
    HelloWorld,
  },
};
</script>

<style lang="scss">
@import "./assets/all";
</style>
