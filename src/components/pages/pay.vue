<template>
    <div class="bg-lightbrown">        
        <loading :active.sync="isLoading"></loading>
        <div class="container main-content py-5">
            <h1 class="text-center my-3 text-secondary">結帳流程</h1>
            <div class="my-5 form-row d-flex text-center">
                <div class="col-12 col-sm">
                    <div class="alert alert-light alert-rounded" role="alert">
                        1. 輸入訂購人資訊
                    </div>
                </div>
                <div class="col-12 col-sm">
                    <div class="alert alert-brown alert-rounded" role="alert">
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
        <div>
            <div class="py-5 row justify-content-center">
                <form class="col-md-6" @submit.prevent="payOrder">
                    <table class="table table-striped">
                        <thead>
                            <th>品名</th>
                            <th>數量</th>
                            <th>單價</th>
                        </thead>
                        <tbody>
                            <tr v-for="item in order.products" :key="item.id">
                                <td class="align-middle">{{ item.product.title }}</td>
                                <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
                                <td class="align-middle text-right">{{ item.final_total }}</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="2" class="text-right">總計</td>
                                <td class="text-right">{{ order.total }}</td>
                            </tr>
                        </tfoot>
                    </table>

                    <table class="table table-striped">
                        <tbody>
                            <tr>
                                <th width="100">Email</th>
                                <td>{{ order.user.email }}</td>
                            </tr>
                            <tr>
                                <th>姓名</th>
                                <td>{{ order.user.name }}</td>
                                </tr>
                            <tr>
                                <th>收件人電話</th>
                                <td>{{ order.user.tel }}</td>
                            </tr>
                            <tr>
                                <th>收件人地址</th>
                                <td>{{ order.user.address }}</td>
                            </tr>
                            <tr>
                                <th>付款狀態</th>
                                <td>
                                    <span v-if="!order.is_paid">尚未付款</span>
                                    <span v-else class="text-success">付款完成</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="text-right" v-if="order.is_paid === false">
                        <button class="btn btn-outline-style btn-danger">確認付款去</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';

export default {
    data(){
        return {
            isLoading: false,
            orderId: '',
            order:{
                user:{},

            },
        };
    },
    methods:{
        getOrder(){
            const vm = this;
            const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order/${vm.orderId}`;
            vm.isloading = true;
            this.$http.get(api).then((response) => { 
                vm.order = response.data.order;
                console.log(response);
                vm.isloading = false;
            });
        },
        payOrder(){
            const vm = this;
            const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/pay/${vm.orderId}`;
            vm.isloading = true;
            this.$http.post(api).then((response) => { 
                console.log(response);
                if(response.data.success){
                    vm.getOrder();
                    vm.$router.push('/order/finish');
                }
                vm.isloading = false;
            }); 
        },
    },
    created() {
        this.orderId = this.$route.params.orderId;
        console.log(this.orderId);
        this.getOrder();
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

</style>