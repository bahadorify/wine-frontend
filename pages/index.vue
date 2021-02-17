<template>
  <div>
    <wine-table :wines="wines"></wine-table>
  </div>
</template>

<script>
import WineTable from '~/components/common/WineTable.vue'
const getWines = () =>
  import('~/data/winery_dump.json').then((m) => m.default || m)

export default {
  components: { WineTable },
  async asyncData({ req }) {
    const wines = await getWines()

    return { wines }
  },
}
</script>

<style lang="scss" scoped></style>
