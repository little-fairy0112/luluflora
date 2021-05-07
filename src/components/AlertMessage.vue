<template>
  <div class="message-alert">
    <div class="alert alert-dismissible"
      :class="'alert-' + item.status"
      v-for="(item, i) in messages" :key="i">
      {{ item.message }}
      <button type="button" class="close" @click="removeMessage(i)" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      messages: [],  //將messages一個一個陳列出來
    };
  },
  methods: {
    updateMessage(message, status) {
      const timestamp = Math.floor(new Date() / 1000);
      this.messages.push({
        message, //文字內容
        status, //樣式
        timestamp, //id
      });
      this.removeMessageWithTiming(timestamp);
    },
    removeMessage(num) {  //按叉叉可以移除訊息
      this.messages.splice(num, 1);
    },
    removeMessageWithTiming(timestamp) { //五秒一到會移除跳出來的訊息
      const vm = this;
      setTimeout(() => {
        vm.messages.forEach((item, i) => {
          if (item.timestamp === timestamp) {
            vm.messages.splice(i, 1);
          }
        });
      }, 5000);
    },
  },
  created() {
     const vm = this;

    // 自定義名稱 'messsage:push'
    // message: 傳入參數
    // status: 樣式，預設值為 warning
     vm.$bus.$on('message:push', (message, status = 'warning') => {  //呼叫bus，並且用on的方式註冊一個message:push的方法，message是參數，status是狀態值
       vm.updateMessage(message, status);
     });
    // vm.$bus.$emit('message:push');
  },
};
</script>

<style scope>

.message-alert {
  position: fixed;
  max-width: 50%;
  top: 56px;
  right: 20px;
  z-index: 1100;
}
</style>