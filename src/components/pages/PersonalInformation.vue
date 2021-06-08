<template>
    <div class="bg-lightbrown">        
        <loading :active.sync="isLoading"></loading>
        <div class="container main-content py-5">
            <h1 class="text-center my-3 text-secondary">結帳流程</h1>
            <div class="my-5 form-row d-flex text-center">
                <div class="col-12 col-sm">
                    <div class="alert alert-brown alert-rounded" role="alert">
                        1. 輸入訂購人資訊
                    </div>
                </div>
                <div class="col-12 col-sm">
                    <div class="alert alert-light alert-rounded" role="alert">
                        2. 金流付款
                    </div>
                </div>
                <div class="col-12 col-sm">
                    <div class="alert alert-light alert-rounded" role="alert">
                        3. 完成
                    </div>
                </div>
            </div>
        </div>

        <div class="accordion" role="tablist">
            <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-1>查看訂單內容</b-button>
                </b-card-header>
                <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                        <b-card-text>
                            <div class="menu-size px-4 py-3">
                                <h6>購物車內的商品</h6>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col" width="80">#</th>
                                            <th scope="col" width="500">項目</th>
                                            <th scope="col" width="300">數量</th>
                                            <th scope="col">金額</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(item, index) in carts" :key="item.id">
                                            <td>{{index+1}}</td>
                                            <td>{{item.product.title}}</td>
                                            <td>{{item.qty}}</td>
                                            <td>{{item.final_total | currency}}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div class="text-end font-size-20 pb-3">小計 <strong class="text-danger">{{final_total | currency}}</strong> 元</div>
                            </div>
                        </b-card-text>
                    </b-card-body>
                </b-collapse>
            </b-card>
        </div>

        <div class="pb-5 row justify-content-center">
            <form class="col-md-6" @submit.prevent="createOrder">
                <div class="form-group">
                    <label for="useremail">Email</label>
                    <input type="email" class="form-control" :class="{ 'is-invalid': errors.has('email') }" name="email" placeholder="請輸入 Email"
                    v-model="form.user.email" v-validate="'required|email'" required>
                    <span class="text-danger" v-if="errors.has('email')">{{errors.first('email')}}</span>
                </div>
  
                <div class="form-group">
                    <label for="username">收件人姓名</label>
                    <input type="text" class="form-control" name="name" placeholder="輸入姓名"
                    v-model="form.user.name" v-validate="'required'" :class="{ 'is-invalid': errors.has('name') }" required>
                    <span class="text-danger" v-if= "errors.has('name')">{{errors.first('name')}}</span>
                </div>
  
                <div class="form-group">
                    <label for="usertel">收件人電話</label>
                    <input type="tel" class="form-control" name="usertel" placeholder="請輸入電話"
                    v-model="form.user.tel" v-validate="'required'" :class="{ 'is-invalid': errors.has('usertel') }" required>
                    <span class="text-danger" v-if= "errors.has('usertel')">{{errors.first('usertel')}}</span>
                </div>
  
                <div class="form-group">
                    <label for="useraddress">收件人地址</label>
                    <input type="text" class="form-control" name="address" placeholder="請輸入地址"
                    v-model="form.user.address" v-validate="'required'" :class="{ 'is-invalid': errors.has('address') }" required>
                    <span class="text-danger" v-if= "errors.has('address')">{{errors.first('address')}}</span>
                </div>
  
                <div class="form-group">
                    <label for="comment">留言</label>
                    <textarea name="" id="comment" class="form-control" cols="30" rows="10" v-model="form.message"></textarea>
                </div>
                <div class="text-right">
                    <button class="btn btn-outline-style" to="/order/pay">下一步</button>
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
            carts:[],
            final_total: NaN,
        };
    },
    methods:{
        getCart(){
            const vm = this;
            const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
            this.$http.get(api).then((response) => { 
                console.log(response);
                vm.carts = response.data.data.carts;
                vm.final_total = response.data.data.final_total;
            });
        },
        createOrder(){
            const vm = this;
            const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order`;
            const order = vm.form;
            //vm.isloading = true;
            this.$validator.validate().then((result) => {
                if (result) {
                    this.$http.post(api, { data:order }).then((response) => { 
                        console.log('訂單建立成功',response);
                        if(response.data.success){
                            vm.$router.push(`/order/pay/${response.data.orderId}`); //用vue router轉換頁面
                        }
                        vm.isloading = false;
                    });
                } else {
                    console.log('必填欄位未完全填寫 訂單建立失敗');
                }
            });
        },
    },
    created() {
        this.getCart();
    },
}
</script>

<style scoped>
    .bg-brown{
        background-color: #42302d;
    }

    .btn-cart{
        background-color: transparent;
        position: relative;
    }

    .btn-cart .badge{
        position: absolute;
        top: -5px;
        right: -1px;
    }

    .btn-brown{
        color:  #e1dbd1;
        background-color: #42302d;
    }

    .dropdown-menu-end{
        right:0;
        left: auto;
    }

    .bg-cover{
        height: 400px;
        width: 100%;
        background-size: cover;
        background-position: center center;
    }

    .alert-rounded{
        border-radius: 50px;
    }

    .alert-brown{
        background-color: #A39480;
    }

    button {
        padding: none !important;
        color: #e1dbd1;
        background-color: #42302d;
    }

</style>