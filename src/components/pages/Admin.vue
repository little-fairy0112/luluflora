<template>
    <div>
        <Alert></Alert>

        <nav class="navbar navbar-dark bg-brown">
            <div class="container-fluid">
                <a class="navbar-brand padding-none" href="#">
                    <img src="@/assets/pic/luluflora.png" width="180">
                </a>
                <div>
                    <a href="#" class="btn btn-outline-style mr-1 text-lightbrown" @click.prevent="Logout">登出</a>
                </div>
            </div>
        </nav>
        <div class="container-fluid">
            <div class="row">
                <nav id="sidebarMenu" class="bg-lightbrown col-md-3 col-lg-2 d-md-block sidebar collapse padding-top-none">
                    <div class="position-sticky pt-3">
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <router-link to="/admin/product">
                                    商品列表
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <span data-feather="order"></span>
                                    <i class="fas fa-shopping-cart"></i>
                                    訂單列表
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <span data-feather="coupon"></span>
                                    <i class="fas fa-ticket-alt"></i>
                                    優惠券
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <main class="bg-lightbrown col-md-9 ml-sm-auto col-lg-10 px-md-4">
                    <router-view></router-view>
                </main>
            </div>
        </div>
    </div>
</template>

<script>
import Alert from '@/components/AlertMessage';


export default{
    components: {
        Alert,
    },
    methods: {
        Logout(){
            const api = `${process.env.VUE_APP_APIPATH}/logout`;
            const vm = this;
            this.$http.post(api).then((response) => {
                console.log(response.data);
                if (response.data.success) {
                    vm.$router.push('/login').catch(()=>{});
                }
            });
        },
    },
    created() {
        const cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith('hexToken='))
        .split('=')[1];
        this.$http.defaults.headers.common.Authorization = cookieValue;
    },
};
</script>

<style scoped>
.navbar .form-control {
    padding: .75rem 1rem;
    border-width: 0;
    border-radius: 0;
}

.form-control-dark {
    color: #fff;
    background-color: rgba(255, 255, 255, .1);
    border-color: rgba(255, 255, 255, .1);
}

.margin-none {
    margin-right: 0px !important;
}

.padding-top-none{
    padding-top: 0px !important;
}

.bg-brown{
    background-color: #42302d;
}


</style>

