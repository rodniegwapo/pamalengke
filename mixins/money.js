export default {
  methods: {
    moneyFormat (amount, symbol = '') {
      return (
        symbol +
        parseFloat(amount)
          .toFixed(2)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      )
    }
  }
}
