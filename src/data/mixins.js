export const resultMixin = {
  data() {
    return {
      results: []
    }
  },
  mounted() {
    let i = 1
    while (i <= 10) {
      this.results.push(localStorage.getItem(parseInt(i)))
      i++;
    }
  }
}