<template>
  <div>
    <loading :active.sync="isLoading"></loading>

    <b-navbar class="bg-brown" toggleable="lg" type="dark">
      <b-navbar-brand to="/"><img src="@/assets/pic/luluflora.png" width="180"></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <template slot="button-content">
              <i class="fas fa-shopping-cart" style="color: #fbd191; font-size: 20px;"></i>
            </template>
            <b-form href="#">
              <div class="menu-size px-4 py-3">
                <h6>購物車內的商品</h6>
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col" width="30">#</th>
                      <th scope="col" width="180">項目</th>
                      <th scope="col" width>數量</th>
                      <th scope="col" class="text-end">金額</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in carts" :key="item.id">
                      <td>{{index+1}}</td>
                      <td>{{item.product.title}}</td>
                      <td>{{item.qty}}</td>
                      <td>{{item.final_total | currency}}</td>
                      <td><button type="button" class="btn btn-outline-danger" @click="removeCartItem(item.id)"><i class="far fa-trash-alt"></i></button></td>
                    </tr>
                  </tbody>
                </table>
                <div class="text-end font-size-20 pb-3">小計 <strong class="text-danger">{{final_total | currency}}</strong> 元</div>
                <router-link to="/order" class="btn btn-brown w-100">結帳</router-link>
              </div>
            </b-form>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <div class = "row pt-4 px-4 bg-lightbrown">
      <div class="col-md-4 mb-4" v-for="item in products" :key="item.id">
        <div class="card border-0 shadow-sm">
          <div style="height: 150px; background-size: cover; background-position: center" :style="{backgroundImage: `url(${item.imageUrl})`}">
          </div>
          <div class="card-body">
            <span class="badge badge-secondary float-right ml-2">{{item.category}}</span>
            <h5 class="card-title">
              <a href="#" class="text-dark">{{item.title}}</a>
            </h5>
            <p class="card-text">{{item.content}}</p>
            <div class="d-flex justify-content-between align-items-baseline">
              <div class="h5" v-if="(item.price == item.origin_price)"> $ {{item.price}}</div>
              <del class="h6" v-if="!(item.price == item.origin_price)">原價 $ {{item.origin_price}}</del>
              <div class="h5" v-if="!(item.price == item.origin_price)">現在只要 $ {{item.price}}</div>
            </div>
          </div>
          <div class="card-footer d-flex">
            <button type="button" class="btn btn-outline-secondary btn-sm"
            @click="get_single_Product(item.id)">
              <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
              查看更多
            </button>
            <button type="button" class="btn btn-outline-style btn-sm ml-auto"
            @click="addtoCart(item.id)">
              <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
              加到購物車
            </button>
          </div>
        </div>
      </div>
    </div> 

    <div class="modal fade" id="productModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden = "true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{ product.title }}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img :src="product.imageUrl" class="img-fluid" alt="">
            <blockquote class="blockquote mt-3">
              <p class="mb-0">{{product.content}}</p>
              <footer class="blockquote-footer text-right">{{product.description}}</footer>
            </blockquote>  
            <div class="d-flex justify-content-between align-items-baseline">
              <div class="h4" v-if="(product.price == product.origin_price)"> $ {{product.price}} </div>
              <del class="h6" v-if="!(product.price == product.origin_price)">原價 $ {{product.origin_price}} 元</del>
              <div class="h4" v-if="!(product.price == product.origin_price)"> 現在只要 $ {{product.price}} 元</div>
            </div>
            <select name="" class="form-control mt-3" v-model="product.num">
              <option :value="num" v-for="num in 10" :key="num">
                選購 {{num}} {{product.unit}}
              </option>  
            </select>
            <div class="modal-footer">
              <div class="text-muted text-nowrap mr-3">
                小計 <strong>{{product.num * product.price}}</strong> 元
              </div>
            </div>
            <button type="button" class="btn btn-primary" @click="addtoCart(product.id, product.num)">
              加到購物車
            </button>
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
      products: [],
      product: {},
      carts:[],
      final_total: NaN,
      status: {
        loadingItem: '',  //判斷目前畫面上是哪一個元素正在讀取中
      },
      isLoading: false,
    };
  },
  methods:{
    getProducts(id) {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
      vm.isloading = true;
      this.$http.get(api).then((response) => { 
        console.log(response);
        vm.products = response.data.products;
        vm.isloading = false;
      });
    },
    get_single_Product(id) {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`;
      vm.status.loadingItem = id;
      this.$http.get(api).then((response) => {
        vm.product = response.data.product;
        $('#productModal').modal('show');
        vm.status.loadingItem = '';
      });
    },
    addtoCart(id, qty = 1){ //如果沒有帶入qty，就會使qty預設值為1
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      vm.status.loadingItem = id;
      const cart ={
        product_id: id,
        qty,
      };
      this.$http.post(api,{ data: cart}).then((response) => {
        vm.status.loadingItem = '';
        vm.getCart();
        $('#productModal').modal('hide');
      });
    },
    getCart(){
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      vm.isloading = true;
      this.$http.get(api).then((response) => { 
        console.log(response);
        vm.isloading = false;
        vm.carts = response.data.data.carts;
        vm.final_total = response.data.data.final_total;
      });
    },
    removeCartItem(id){
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`;
      vm.isloading = true;
      this.$http.delete(api).then(() => { 
        vm.getCart();//刪除該筆資料後，重新取得更新後的購物車內容
        vm.isloading = false;
      });
    },
  },
  created() {
    this.getProducts();
    this.getCart();
  },
};    
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/bootstrap";
@import "~bootstrap/dist/css/bootstrap.css";
@import "~bootstrap-vue/dist/bootstrap-vue.css";

  .menu-size{
    width: 500px;
  }

  .btn-brown{
    color: #e1dbd1;
    background-color: #42302d;
  }

  .btn-brown:hover{
    color: #42302d;
    background-color: #e1dbd1;
    border-color: #42302d;
  }

  .font-size-20{
    font-size: 20px;
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
</style>