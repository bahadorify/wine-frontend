<template>
  <div class="search">
    <input
      type="text"
      name="wine-search"
      id="wine-search"
      placeholder="search for wines..."
      v-model="searchTerm"
      @input="handleInput"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: '',
    }
  },
  methods: {
    handleInput() {
      this.$emit('searchInputChange', this.searchTerm)
    },
  },
}
</script>

<style lang="scss" scoped>
input {
  width: 500px;
  font-size: 20px;
}
</style>
