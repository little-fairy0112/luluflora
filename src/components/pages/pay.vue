<template>
    <div>
        <loading :active.sync="isLoading"></loading>

        <b-navbar class="bg-brown" toggleable="lg" type="dark">
            <b-navbar-brand class="padding-none" href="#"><img src="@/assets/pic/luluflora.png" width="180"></b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"> </b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto"> </b-navbar-nav>
            </b-collapse>
        </b-navbar>

        <div class="my-5 row justify-content-center">
            <form class="col-md-6" @submit.prevent="createOrder">
                <div class="form-group">
                    <label for="useremail">Email</label>
                    <input type="email" class="form-control" name="email" id="useremail"
                    v-model="form.user.email" placeholder="請輸入 Email" required>
                    <span class="text-danger"></span>
                </div>
  
                <div class="form-group">
                    <label for="username">收件人姓名</label>
                    <input type="text" class="form-control" name="name" id="username"
                    v-model="form.user.name"  v-validate="'required'" placeholder="輸入姓名">
                    <span class="text-danger" v-if= "errors.has('name')">此欄位不得為空</span>
                </div>
  
                <div class="form-group">
                    <label for="usertel">收件人電話</label>
                    <input type="tel" class="form-control" id="usertel" v-model="form.user.tel" placeholder="請輸入電話">
                </div>
  
                <div class="form-group">
                    <label for="useraddress">收件人地址</label>
                    <input type="text" class="form-control" name="address" id="useraddress" v-model="form.user.address"
                        placeholder="請輸入地址">
                    <span class="text-danger">地址欄位不得留空</span>
                </div>
  
                <div class="form-group">
                    <label for="comment">留言</label>
                    <textarea name="" id="comment" class="form-control" cols="30" rows="10" v-model="form.message"></textarea>
                </div>
                <div class="text-right">
                    <button class="btn btn-danger">送出訂單</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery';

    export default {
        data(){
            return {
                isLoading: false,
                form: {
                    user:{
                        name:'',
                        email:'',
                        tel:'',
                        address:'',
                    },
                    message:'',
                },
            };
        },
        methods:{
            createOrder(){
                const vm = this;
                const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order`;
                const order = vm.form;
                vm.isloading = true;
                this.$http.post(api, { data:order }).then((response) => { 
                    console.log('訂單建立成功',response);
                    vm.isloading = false;
                });
            }
        }
    }
</script>

<style>

</style>