<template>
  <div>
    <p>アルバムだぞ</p>
    <ul class="itemlist">
      <li class="item" v-for="i in 10">
        <img class="" src="/camaleao-blue.png" alt="" />
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'Hello this is あるばむ',
      };
    },
  };
</script>

<style scoped lang="scss">
  .itemlist {
    display: flex;
    flex-wrap: wrap;
  }
  .item {
    width: 200px;
    flex: 0 0 auto;
  }
  .item {
    img {
      width: 100%;
    }
  }
</style>
