<template>
  <div style="padding: 1rem">
    <div class="text-center">
      <h1>Your Results are here!</h1>
      <p class="score">70%</p>
      <p style="font-size: 1.2rem">You 7 out of 10 questions</p>
    </div>
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
.result {
  p:first-child {
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
  }
  span, p:last-child {
    font-size: 1.1rem;
    margin-top: 0.5rem;
  }
}

.score {
  padding: 2rem;
  font-size: 2rem;
  border: 1px solid #FBBB07;
  width: fit-content;
  border-radius: 50%;
  margin: auto;
}
</style>