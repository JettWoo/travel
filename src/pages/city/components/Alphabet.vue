<template>
  <ul class="list">
    <li class="item" v-for="(item, key) of cities" :key="key">
      {{key}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.list
  position: fixed;
  right: 0;
  top: 1.68rem;
  width: .4rem;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-item: center;
  justify-content: center;
  .item
    text-align: center;
    line-height: .4rem
    color: $bgColor;
</style>
