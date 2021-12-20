<template>
  <div style="padding: 1rem">
    
    <div class="result" v-for="(result, i) in results" :key="result">
      <p>{{ i + 1 }}. {{ result.split(' -')[0] }}</p>
      <span>
        Your answer - <strong>{{ result.split(' -')[1] }}. </strong>
        <span>Correct!/Wrong</span>
      </span>
      <p>Correct Answer - </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      results: []
    }
  },
  mounted() {
    let i = 1
    while (i <= 10) {
      console.log(localStorage.getItem(parseInt(i)))
      this.results.push(localStorage.getItem(parseInt(i)))
      i++;
    }
  }
}
</script>

<style lang="scss" scoped>

</style>