<template>
  <div class="p-1">
    <div class="text-center heading">
      <h1>Your answers were submitted successfully</h1>
      <p class="score">{{ score }}%</p>
      <p>You got {{ score/10 }} out of 10 questions</p>
    </div>
    <div class="result" v-for="(result, i) in results" :key="result">
      <p>
        {{ i + 1 }}. {{ result.split(' -')[0] }}
      </p>
      <span>
        Your answer - <strong>{{ result.split(' -')[1] }}. </strong>
        <span>
          Correct!/Wrong
        </span>
      </span>
      <p>Correct Answer - </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      results: [],
      score: 0
    }
  },
  mounted() {
    document.title = 'Homepage'
    window.scrollTo(0, 0);
    let i = 1
    while (i <= 10) {
      this.results.push(localStorage.getItem(parseInt(i)))
      i++;
    }
    this.score = localStorage.getItem('score');
  }
}
</script>

<style lang="scss" scoped>
.heading {
  p:last-child {
    font-size: 1.2rem
  }
}
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