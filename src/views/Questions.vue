<template>
  <div>
    <form action="">
      <div
        class="question-group"
        v-for="(questionGroup, questionIndex) in data.questions"
        :key="questionGroup"
      >
        <p>{{ questionIndex + 1 }}. {{ questionGroup.question }}</p>
        <div
          v-for="(option, optionIndex) in questionGroup.options"
          :key="option"
          class="option"
        >
          <input
            type="radio"
            :name="'ques' + questionIndex"
            :id="'ques' + (questionIndex + 1).toString() + 'opt' + (optionIndex + 1)"
            
          />
          <label
            :for="'ques' + (questionIndex + 1).toString() + 'opt' + (optionIndex + 1)"
            >{{ option }}</label
          >
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  import data from './../data/data.json';
  export default {
    data() {
      return {
        data,
        value: '',
      };
    },
  };
</script>

<style lang="scss" scoped>
  .question-group {
    margin-bottom: 2rem;
    p {
      font-size: 1.7rem;
    }
    label {
      font-size: 1.2rem;
      padding: 0.5rem 1rem;
      cursor: pointer;
    }
  }
  .option {
    padding: 0.5rem;
    padding-left: 0;
  }
</style>
