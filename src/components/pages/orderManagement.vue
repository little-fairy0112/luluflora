<template>
    <div>
        <loading :active.sync="isLoading"></loading>
    
        <div class="menu-size px-4 py-3">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col" width="250">訂單編號</th>
                        <th scope="col">訂購人姓名</th>
                        <th scope="col">訂購人電話</th>
                        <th scope="col">編輯</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item) in orders" :key="item.id">
                        <td>{{item.id}}</td>
                        <td>{{item.user.name}}</td>
                        <td>{{item.user.tel}}</td>
                        <td>
                            <button class="btn btn-outline-primary btn-sm" @click="openModal(item)">編輯</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <div class="modal fade" id="orderModal" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content border-0">
                    <div class="modal-header bg-dark text-white">
                        <h5 class="modal-title" id="exampleModalLabel">
                            <span>編輯訂單</span>
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-sm-8">
                                <div class="form-group">
                                    <label for="title">訂單編號</label>
                                    <input type="text" class="form-control" v-model="tempProduct.id" id="orderId">
                                </div>

                                <div class="form-row">
                                    <div class="form-group form-col-6">
                                        <label for="category">訂單內容</label>
                                        <div v-for="item in tempProduct.products" :key="item.id">
                                            <label>項目</label>
                                            <input type="text" class="form-control" v-model="tempProduct.products[item.id].product.title" id="orderItem">
                                        </div>
                                        <div>
                                            <label>數量</label>
                                            <input type="number" class="form-control" v-model=" tempProduct.products[item.id].qty" id="orderQty">
                                        </div>
                                    </div>
                                </div>
                                <hr>
                                <div class="form-group">
                                    <div v-for="(item, id) in tempProduct.user" :key="id" id="orderInformation">
                                        <label>{{id}}</label>
                                        <input type="text" class="form-control" v-model="tempProduct.user[id]">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" v-model="tempProduct.is_paid" id="is_paid">
                                        <label class="form-check-label" for="is_paid">
                                            是否付款
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-primary" @click="updateOrder">確認</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';

export default {
    data () {
        return {
            isLoading: false,
            orders:[],
            tempProduct:{},
        };
    },
    methods:{
        getOrders() {
            const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/orders`;
            const vm = this;
            vm.isLoading = true;
            this.$http.get(api).then((response) => {
                console.log(response.data);
                vm.orders = response.data.orders;
                vm.isLoading = false;
            });
        },
        openModal(item){
                this.tempProduct = Object.assign({},item);
            $('#orderModal').modal('show');
        },
        updateOrder(){
            const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/order/${vm.tempProduct.id}`;
            const vm = this;
            vm.isLoading = true;
            this.$http.put(api, { data: vm.tempProduct }).then((response) => {
                console.log(response.data);
                if(response.data.success){
                    $('#productModal').modal('hide');
                    vm.getOrders();
                }else{
                    $('#productModal').modal('hide');
                    vm.getOrders();
                    console.log('訂單修改失敗');
                }
            });
        },
    },
    created() {
        this.getOrders();
    },
};    
</script>

<style>
    table{
        border: 2px solid #42302d;
    }

    table thead th{
        border-bottom: 2px solid #42302d !important;
    }

</style>