<template>
  <div class="container">
    <div class="filters">
      <search-bar @searchInputChange="doSearch($event)" />
      <div class="filter-year">
        <b>before year</b>
        <span>{{ minYear }}</span>
        <div class="slider-year">
          <span>{{ valueYear }}</span>
          <input
            type="range"
            :min="minYear"
            :max="maxYear"
            v-model="valueYear"
            step="1"
            @change="handleYearChange"
          />
        </div>
        <span>{{ maxYear }}</span>
      </div>
    </div>
    <wine-table :wines="resultWines"></wine-table>
  </div>
</template>

<script>
import SearchBar from '~/components/common/SearchBar.vue'
import WineTable from '~/components/common/WineTable.vue'
import _ from 'lodash'

const getWines = () =>
  import('~/data/winery_dump.json').then((m) => m.default || m)

export default {
  components: { WineTable, SearchBar },
  data() {
    return {
      resultWines: [],
      valueYear: 2020,
      searchTerm: '',
    }
  },
  async asyncData({ req }) {
    const wines = await getWines()

    const minYear = _.minBy(wines, (w) => w.year).year
    const maxYear = _.maxBy(wines, (w) => w.year).year

    return { wines, winesAll: wines, resultWines: wines, minYear, maxYear }
  },
  methods: {
    doSearch(searchTerm) {
      this.searchTerm = searchTerm
      if (searchTerm.length >= 3) {
        this.resultWines = this.filteredWines.filter((w) =>
          w.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      } else {
        this.resultWines = this.filteredWines
      }
    },
    handleYearChange() {
      this.doSearch(this.searchTerm)
    },
  },
  computed: {
    filteredWines() {
      return this.winesAll.filter((w) => w.year <= this.valueYear)
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
.filter-year {
  margin-top: 10px;
  display: flex;
}
.slider-year {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
