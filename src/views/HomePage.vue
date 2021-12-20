<template>
  <div class="home">
    <h1>
      Do you think you know about Venture Capital?<br>
      Do you want to know more?<br>
    </h1>
    <h2>
      Take this quick and simple quiz and test your knowledge on Venture Capital.<br>
      Click on the submit button at the bottom of the next page to get your results. Goodluck!
    </h2>
    <router-link to="questions">Start Quiz</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
}
</script>

<style scoped>
h1 {
  font-size: 1.5rem;
}

h2 {
  font-size: 1rem;
}

h1, h2 {
  font-weight: 400;
}

.home {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  text-align: center;
}

@media screen and (min-width: 991px) {
  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }
}
</style>
