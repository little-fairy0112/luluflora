<template>
    <div>

        <b-navbar class="bg-brown" toggleable="lg" type="dark">
            <b-navbar-brand class="padding-none" href="#"><img src="@/assets/pic/luluflora.png" width="180"></b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"> </b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto"> </b-navbar-nav>
            </b-collapse>
        </b-navbar>

        <div class="container main-content my-5">
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
        
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>


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