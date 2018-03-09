window.app = new Vue({
  el: '#app',
  mounted: function() {
  },
  data: function() {
    return {
      pythonResponse: null,
      message: null,
      responseList: []
    }
  },
  watch: {
  },
  methods: {
    msgHandler: function($event, value) {
      var self = this

      axios.get(
        location.href+'get_message',
        { params: {message: this.message} })
        .then(function(res) {
          self.pythonResponse = res.data.inverted
          self.responseList.push(res.data)
        })
      ;
    }
  },
  computed: {
  },
  delimiters: ['[[',']]']
})
