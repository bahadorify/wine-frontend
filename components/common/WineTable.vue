<template>
  <table class="wine-table">
    <thead>
      <tr>
        <th>Wine Name</th>
        <th>Producer</th>
        <th data-sortable="true" data-field="year" data-filter-control="select">
          Year
        </th>
        <th data-field="country" data-filter-control="select">Country</th>
        <th data-field="area" data-filter-control="select">Area</th>
        <th>Volume</th>
        <th data-sortable="true" data-field="price">Price</th>
        <th data-sortable="true" data-field="price_l">1L Price</th>
        <!-- <th data-sortable="true" data-field="price_075">0.75L Price</th>
        <th data-sortable="true" data-field="ct">CT Score</th>
        <th data-sortable="true" data-field="bbs_l">BBS Score/Liter</th>
        <th data-sortable="true" data-field="bbs_a">BBS Score/Adjusted</th>
        <th data-field="store" data-filter-control="select">Store?</th>
        <th data-field="home" data-filter-control="select">Home?</th> -->
      </tr>
    </thead>
    <tbody>
      <tr v-for="(wine, idx) in wines" :key="idx">
        <td>{{ wine['name'] }}</td>
        <td>{{ wine['main_producer']['name'] }}</td>
        <td>{{ wine['year'] }}</td>
        <td>{{ wine['main_country']['name'] }}</td>
        <td>{{ wine['district']['name'] }}</td>
        <td>{{ wine['volume']['value'] }}</td>
        <td>{{ format_price(wine['price']['value']) }}</td>
        <td>{{ format_price(wine['litrePrice']['value']) }}</td>
        <!-- <td>{{ format_price(wine['price_adj']) }}</td>
        <td>{{ wine['ct'].get('score', 'N/A') }}</td>
        <td>{{ wine['bbs'] }}</td>
        <td>{{ wine['bbs_adj'] }}</td>
        <td>{{ wine['availability']['storeAvailability']['available'] }}</td>
        <td>{{ wine['availability']['deliveryAvailability']['available'] }}</td> -->
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ['wines'],
  methods: {
    format_price(amount) {
      return amount.toFixed(2)
    },
  },
}
</script>

<style lang="scss" scoped>
.wine-table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

.wine-table td,
.wine-table th {
  border: 1px solid #ddd;
  padding: 8px;
}

.wine-table tr:nth-child(even) {
  background-color: #f2f2f2;
}

.wine-table tr:hover {
  background-color: #ddd;
}

.wine-table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4caf50;
  color: white;
}
</style>
