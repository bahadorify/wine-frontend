<template>
  <div class="container">
    <div class="filters">
      <search-bar @searchInputChange="doSearch($event)" />
    </div>
    <wine-table :wines="wines"></wine-table>
  </div>
</template>

<script>
import SearchBar from '~/components/common/SearchBar.vue'
import WineTable from '~/components/common/WineTable.vue'
const getWines = () =>
  import('~/data/winery_dump.json').then((m) => m.default || m)

export default {
  components: { WineTable, SearchBar },
  data() {
    return {
      wines: [],
    }
  },
  async asyncData({ req }) {
    const wines = await getWines()

    return { wines, winesAll: wines }
  },
  methods: {
    doSearch(searchTerm) {
      if (searchTerm.length >= 3) {
        this.wines = this.winesAll.filter((w) =>
          w.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      } else {
        this.wines = this.winesAll
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  margin: 10px;
}
.filters {
  padding: 20px 10px;
}
</style>
