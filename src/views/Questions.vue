<template>
  <div>
    <h1>Questions</h1>
    <form action="">
      <div
        class="question-group"
        v-for="(questionGroup, questionIndex) in data.questions"
        :key="questionGroup"
      >
        <p :class="{'text-danger' : results[questionIndex] == null && submitted }">
          {{ questionIndex + 1 }}. {{ questionGroup.question }}
        </p>
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
            @click="selectAnswer(questionIndex, questionGroup, option)"
            >{{ option }}
          </label
          >
        </div>
      </div>
      <button class="btn btn-result" type="submit" @click.prevent="submit">
        Get Result
      </button>
    </form>
  </div>
</template>

<script>
  import data from './../data/data.json';
  import { resultMixin } from './../data/mixins';
  export default {
    mixins: [resultMixin],
    data() {
      return {
        data,
        submitted: false
      };
    },
    methods: {
      selectAnswer(i, questionGroup, option) {
        this.submitted = false;
        this.results = [];
        localStorage.setItem(i + 1, questionGroup.question + ' - ' + option);
      },
      submit() {
        this.submitted = true;
        this.$router.push({ name: 'Result' });
      }
    },
    mounted() {
      window.addEventListener('beforeunload', (event) => {
        event.returnValue = 'You have not completed the quiz. Are you sure you want to leave?';
      });
      if (location.reload) {
        localStorage.clear();
      }
    },
    updated() {
    }
  };
</script>

<style lang="scss" scoped>
  .question-group {
    margin-bottom: 2rem;
    border-bottom: 1px solid #ebe8e8;
    p {
      font-size: 1.5rem;
    }
    label {
      font-size: 1.2rem;
      padding: 0.5rem 1rem;
      cursor: pointer;
    }
  }
  input[type='radio' i] {
    display: none;
    width: fit-content;
    &:checked + label {
      background: #3CAC70;
      text-align: center;
      border-radius: 5px;
      padding: 0.5rem 1rem;
      color: white;
      font-size: 1.2rem;
      line-height: 2;
    }
  }
  .option {
    padding: 0.5rem;
    padding-left: 0;
    width: fit-content;
    &:last-child {
      margin-bottom: 1rem;
    }
  }

  .btn-result {
    font-size: 1rem;
    border: 1px solid #FBBB07;
    cursor: pointer;
  }
</style>
