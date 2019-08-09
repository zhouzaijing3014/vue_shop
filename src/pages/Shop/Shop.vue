<template>
  <div>
      <ShopHeader/>
      <div class="Table">
        <div class="Table_Item">
          <router-link to="/shop/goods">点餐</router-link>
        </div>
        <div class="Table_Item">
          <router-link to="/shop/ratings">评价</router-link>
        </div>
        <div class="Table_Item">
          <router-link to="/shop/info">商家</router-link>
        </div>
        <router-view></router-view>
      </div>

  </div>
</template>

<script type="text/ecmascript-6">
  import ShopHeader from '../../components/ShopHeader/ShopHeader.vue'
  export default {
    components:{
      ShopHeader
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

 
</style>
