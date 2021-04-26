<template>
  <div class="hello">
    <div class="bg-lightbrown d-flex justify-content-end">
      <div class="pr-3">
        <router-link to="/login" class="mr-1 text-brown font-size-small">Admin</router-link>
      </div>
    </div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-brown">
      <div class="container">
        <a class="navbar-brand padding-none" href="#">
          <img src="@/assets/pic/luluflora.png" width="180">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon">
          </span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                經典款式
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li>
                  <a class="dropdown-item" href="#">花束款式
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">植栽款式
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">活動佈置樣式
                  </a>
                </li>
              </ul>
            </li>
          </ul>  
        </div>
      </div>
    </nav>
    <div>
      <b-carousel
        id="carousel-1"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
      >

        <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="@/assets/pic/flower1x.jpg"
              alt="image slot"
            >
          </template>
        </b-carousel-slide>

        <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="@/assets/pic/flower2x.jpg"
              alt="image slot"
            >
          </template>
        </b-carousel-slide>

        <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="@/assets/pic/flower3x.jpg"
              alt="image slot"
            >
          </template>
        </b-carousel-slide>

        <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="@/assets/pic/flower4x.jpg"
              alt="image slot"
            >
          </template>
        </b-carousel-slide>

        <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="@/assets/pic/flower5x.jpg"
              alt="image slot"
            >
          </template>
        </b-carousel-slide>
      </b-carousel>

    </div>

    <section class="bg-lightbrown py-5 text-brown">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="mb-3">
              <font-awesome-icon :icon="['fas', 'hand-holding-heart']" size="5x" />
            </div>
            <h3>遇見花，找到愛</h3>
            <p>在特別的日子，用花語對心儀的她說出我愛妳，讓她感受到您真摯的情意，一起沉浸在浪漫氛圍。</p>
          </div>
          <div class="col-md-4">
            <div class="mb-3">
              <font-awesome-icon :icon="['fas', 'smile']" size="5x" />
            </div>
            <h3>把繁忙放下，帶花回家</h3>
            <p>沈悶而快速的生活步調，讓您忘了微笑嗎？<br>帶一束鮮花回家，好心情與您相隨。</p>
          </div>
          <div class="col-md-4">
            <div class="mb-3">
              <font-awesome-icon :icon="['fas', 'seedling']" size="5x" />
            </div>
            <h3>浪漫生活，從花開始</h3>
            <p>不用百萬裝潢，一點點花藝的點綴，就能夠讓家裡看起來更不一樣！</p>
          </div>
        </div>
      </div>
    </section>

    <section class="container-fluid py-5 bg-light text-lightbrown position-relative">
      <div class="row">
        <div class="col-md-5 bg-cover position-absolute nopadding">
          <img
            class="d-block img-fluid w-100"
            width="537"
            height="466"
            src="@/assets/pic/girlnflowerx.jpg"
            alt="image slot"
          >
        </div>
      </div>
      <div class="container">
        <div class="row justify-content-end text-md-dark">
          <div class="col-md-7" style="z-index:999;">
            <h3>來到LuLu花藝</h3>
            <p>
              <br>
              我們對花藝極緻優雅的追求，建立雋永的生活美學。<br>
              <br>
              將歐式花藝設計融入生活美學、結合創意，<br>
              <br>
              賦予不同的美學觀點，帶給大家新的生活響宴。
            </p>
            <button class="btn btn-outline-style mr-1 text-brown">Buy Now...</button>

            <div class="row mt-4">
              <div class="col-md-6">
                <h3>花藝設計 Floral Design</h3>
                <p>花束｜盆花｜花禮盒｜植栽｜乾燥花｜客製化花禮</p>
              </div>
              <div class="col-md-6">
                <h3>活動 Event</h3>
                <p>活動場地佈置｜開幕喬遷｜新娘捧花｜花藝佈置</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="py-5 bg-light">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.274905273171!2d121.55765031433127!3d25.05866998396082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDAzJzMxLjIiTiAxMjHCsDMzJzM1LjQiRQ!5e0!3m2!1szh-TW!2stw!4v1616406120080!5m2!1szh-TW!2stw" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy">
            </iframe>
          </div>

          <div class="col-md-6 d-flex flex-column justify-content-between LeftSize">
            <div class="FBsize">
              <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FLuLu-Flora-102837471934455&tabs&width=500&height=250&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=false&appId" width="500" height="250" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture;"></iframe>
            </div>
            <div class="QRcodeSize d-flex flex-row">
              <div class="pt-100">
                <img
                  class="d-block img-fluid w-100"
                  src="@/assets/pic/qr-code.jpg"
                  alt="QRcode"
                >
              </div>
              <div class="font-20 text-brown d-flex align-items-end">
                <p class="">LINE QR Code</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

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
  name: "HelloWorld",
};
</script>

<style lang="scss">
@import "@/assets/all";
@import "~bootstrap/scss/bootstrap";
@import "~bootstrap/dist/css/bootstrap.css";
@import "~bootstrap-vue/dist/bootstrap-vue.css";


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

.position-absolute{
  position:absolute;
  top:0; 
  bottom: 0;
}

.nopadding {
  padding: 0 !important;
  margin: 0 !important;
}

.nondot {
  list-style-type: none;
}

.LeftSize{
  height:400px;
}

.FBsize{
  height:130px;
}

.QRcodeSize{
  height:250px;
}

.font-20{
  font-size:20px;
}

.font-size-small{
  font-size: 8px;
}

.padding-none{
  padding-top: 0px;
  padding-bottom: 0px;
}

@media (min-width: 768px) {
  .text-md-dark{
  color: #42302d;
  }
}

</style>