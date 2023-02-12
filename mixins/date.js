import moment from 'moment'

export default {
  methods: {
    dateFormat (date) {
      return moment(date).format('LL')
    },
    dateFormatFormat (date) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a')
    }
  }
}
