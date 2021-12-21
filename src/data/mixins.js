export const resultMixin = {
  data() {
    return {
      results: []
    }
  },
  methods: {
    submit() {
      // if (condition) {
        
      // }
      console.log('bro')
      this.getResult();
    },
    getResult() {
      let i = 1
      while (i <= 10) {
        this.results.push(localStorage.getItem(parseInt(i)))
        console.log(i, localStorage.getItem(parseInt(i)))
        i++;
      }
    }
  },
  mounted() {
    if (window.location.pathname === '/result') {
      this.getResult();
    }
  }
};