<template>
  <div>
    <div class="bg-lightbrown py-2">
    </div>

    <nav class="navbar navbar-dark bg-brown">
      <div class="container-fluid">
        <a class="navbar-brand padding-none" href="#">
          <img src="@/assets/pic/luluflora.png" width="180">
        </a>
        <div>
          <router-link to="/" class="btn btn-outline-style mr-1 text-lightbrown">回首頁</router-link>
        </div>
      </div>
    </nav>


    <div class="body flowerbg">
      <div class="formsize bg-lightbrown p-5">
        <form class="flex flex-column center" @submit.prevent="signin">
          <img class="my-5 padding-left" src="@/assets/pic/circlelogo.png" alt="" width="150" height="120">
          <h1 class="h3 mb-3 fw-normal text-brown">登入 sign in</h1>

          <div class="form-floating">
            <label for="floatingInput" class="text-brown">Email</label>
            <input type="email" class="form-control mb-3" v-model="user.username" id="floatingInput" placeholder="name@example.com">
          </div>
          <div class="form-floating">
            <label for="floatingPassword" class="text-brown">密碼</label>
            <input type="password" class="form-control mb-4" v-model="user.password" id="floatingPassword" placeholder="Password">
          </div>

          <button class="w-100 btn btn-lg btn-outline-style text-lightbrown" type="submit">登入</button>
        </form>
      </div>
    </div>

    <footer class="bg-brown text-lightbrown py-3">
        <div class="text-center px-3 " style="list-style: none;">
          <h4>LuLu Flora</h4>
          <ul class="nondot">
            <li><font-awesome-icon :icon="['fas', 'clock']" />週一至週六，10：00 am - 18：00 pm</li>
            <li><font-awesome-icon :icon="['fas', 'map-marker-alt']" />台北市松山區民生東路五段117-85</li>
            <li><font-awesome-icon :icon="['fas', 'phone']" />(02) 2323-1234</li>
          </ul>
        </div>
    </footer>
  </div> 
</template>

<script>
export default {
  name: 'login',
  props: {
    msg: String,
  },
  data() {
    return {
      user:{
        username: '',
        password: '',
      },
    };
  },
  methods: {
    signin(){
      const api = `${process.env.VUE_APP_APIPATH}/admin/signin`;
      const vm = this;
      //vm.user為使用者輸入的username與password
      this.$http.post(api, vm.user).then((response) => {
        console.log(response.data);
        //如果登入狀態為success，則router路由的路徑回到首頁
        if (response.data.success) {
          const token = response.data.token;
          const expired = response.data.expired;
          console.log(token,expired);
          document.cookie = `hexToken=${token}; expires=${ new Date(expired)};`;
          vm.$router.push('/admin').catch(()=>{});
        }
      });
    },
  },
}
</script>


<style scoped>

.body {
  height: 100%;
  align-items: center;
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
  
}


.flowerbg{
  background: url('~@/assets/pic/flowerbg.jpg') center center no-repeat;
  background-size: 100%;
}

.center{
  margin: 0 auto;
}

.padding-left{
  margin: 130px;
}

.formsize{
  width:500px;
  height:700px;
  margin: 0 auto;
}

.text-lightbrown{
  color: #e1dbd1;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.btn-outline-style{
  color: #e1dbd1;
  background-color: #42302d;
}

.btn-outline-style:hover{
  color: #42302d;
  background-color: #e1dbd1;
  border-color: #42302d;
}

.text-brown{
  color: #42302d;
}

.text-lightbrown{
  color: #e1dbd1;
}

.padding-none{
  padding-top: 0px;
  padding-bottom: 0px;
}
</style>
