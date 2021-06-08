<template>
    <div  class="bg-lightbrown">        
        <div class="container main-content py-5">
            <h1 class="text-center my-3 text-secondary">結帳流程</h1>
            <div class="my-5 form-row d-flex text-center">
                <div class="col-12 col-sm">
                    <div class="alert alert-light alert-rounded" role="alert">
                        1. 輸入訂購人資訊
                    </div>
                </div>
                <div class="col-12 col-sm">
                    <div class="alert alert-light alert-rounded" role="alert">
                        2. 金流付款
                    </div>
                </div>
                <div class="col-12 col-sm">
                    <div class="alert alert-brown alert-rounded" role="alert">
                        3. 完成
                    </div>
                </div>
            </div>
        </div>

        <div class="container py-4">
            <div class="row d-flex ">
                <div class="col-4"></div>
                <div class="col-4 text-center">
                    <i class="far font-size-80 fa-check-circle pt-5"></i>
                    <h1 class="pt-3">訂購成功</h1>
                </div>
                <div class="col-4"></div>
            </div>
        </div>
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

    .font-size-80{
        font-size: 80px;
    }
</style>