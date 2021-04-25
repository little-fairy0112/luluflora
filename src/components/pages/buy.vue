<template>
    <a href="#" class="btn btn-outline-style mr-1 text-lightbrown" @click.prevent="signout">登出</a>
</template>

<script>
export default {
  name: 'Buy',
  props: {
    msg: String,
  },
  methods: {
    signout(){
      const api = `${process.env.VUE_APP_APIPATH}/logout`;
      const vm = this;
      //vm.user為使用者輸入的username與password
      this.$http.post(api).then((response) => {
        console.log(response.data);
        //如果登入狀態為success，則router路由的路徑回到首頁
        if (response.data.success) {
        vm.$router.push('/');
        alert('登出成功');
        }
      });
    },
  },
}
</script>

<style>
</style>