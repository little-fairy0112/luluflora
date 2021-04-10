<template>
  <div id="app">
  <div class="bg-lightbrown py-2">
      <div class="container text-end">
        <a href="#" style="color: #42302d;"><i class="fab fa-facebook"></i></a>
        <a href="#" style="color: #42302d;"><i class="fab fa-instagram"></i></a>
      </div>
    </div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-brown">
        <div class="container">
        <a class="navbar-brand" href="#"><img src="@/assets/pic/luluflora.png" width="180"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">首頁</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                經典款式
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a class="dropdown-item" href="#">花束款式</a></li>
                <li><a class="dropdown-item" href="#">植栽款式</a></li>
                <li><a class="dropdown-item" href="#">活動佈置樣式</a></li>
              </ul>
            </li>
          </ul>
          <form class="form-inline d-flex">
            <a href="#" class="btn btn-outline-style me-1 text-brown"  data-bs-toggle="modal" data-bs-target="#loginModal">登入</a>
            <a href="#" class="btn btn-outline-style text-brown"  data-bs-toggle="modal" data-bs-target="#registerModal">註冊</a>
          </form>
        </div>
      </div>
    </nav>

  <header>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item header-carousel-item active" :style="{backgroundImage: 'url(' + bg1 + ')'}">
        </div>
        <div class="carousel-item header-carousel-item" :style="{backgroundImage: 'url(' + bg2 + ')'}">
        </div>
        <div class="carousel-item header-carousel-item" :style="{backgroundImage: 'url(' + bg3 + ')'}">
        </div>
        <div class="carousel-item header-carousel-item" :style="{backgroundImage: 'url(' + bg4 + ')'}">
        </div>
        <div class="carousel-item header-carousel-item" :style="{backgroundImage: 'url(' + bg5 + ')'}">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </header>

  <section class="bg-lightbrown py-5 text-brown">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="mb-3"><i class="fas fa-hand-holding-heart fa-5x"></i></div>
          <h3>遇見花，找到愛</h3>
          <p>在特別的日子，用花語對心儀的她說出我愛妳，讓她感受到您真摯的情意，一起沉浸在浪漫氛圍。</p>
        </div>
        <div class="col-md-4">
          <div class="mb-3"><i class="far fa-smile fa-5x"></i></div>
          <h3>把繁忙放下，帶花回家</h3>
          <p>沈悶而快速的生活步調，讓您忘了微笑嗎？<br>帶一束鮮花回家，好心情與您相隨。</p>
        </div>
        <div class="col-md-4">
          <div class="mb-3"><i class="fas fa-seedling fa-5x"></i></div>
          <h3>浪漫生活，從花開始</h3>
          <p>不用百萬裝潢，一點點花藝的點綴，就能夠讓家裡看起來更不一樣！</p>
        </div>
      </div>
    </div>
  </section>

  </div>  
</template>

<script>
import BG1 from '@/assets/pic/flower1.jpg';
import BG2 from '@/assets/pic/flower2.jpg';
import BG3 from '@/assets/pic/flower3.jpg';
import BG4 from '@/assets/pic/flower4.jpg';
import BG5 from '@/assets/pic/flower5.jpg';

export default {
  name: "App",
  created() {
    const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_CUSTOMPATH}/products`;
    // API伺服器路徑
    // 所申請的API Path
    this.$http.get(api).then((response) => {
      console.log(response.data);
    });
  },
  data(){
    return {
      bg1: BG1,
      bg2: BG2,
      bg3: BG3,
      bg4: BG4,
      bg5: BG5,
    }
  },
  components: {
  },
};
</script>

<style lang="scss">
@import "./assets/all";
@import "~bootstrap/scss/bootstrap";

.btn{
  border: 2px solid #e1dbd1;
}

.form-control{
  border-width: 2px;
}


.header-carousel-item{
  height: 450px;
}

.bg-cover{
  background-size: cover;
  background-position: center center;
}

.bg-brown{
  background-color: #42302d;
}
      
.bg-lightbrown{
  background-color: #e1dbd1;
}

.text-brown{
  color: #42302d;
}

.text-lightbrown{
  color: #e1dbd1;
}

.text-md-brown{
  color: #42302d;
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
      
.position-relative{
  position:relative;
}

@media (min-width: 768px) {
  .text-md-dark{
  color: #42302d;
  }
}

</style>
