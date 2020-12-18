<template>
  <div class="detailsCard">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'DetailsCard'
}
</script>

<style lang="less" scoped>
.detailsCard {
  background-color: #fff;
  margin: 0.266667rem 0.426667rem 0.533333rem;
  padding: 0.266667rem;
  box-sizing: border-box;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}
</style>
