<template>
  <div>
    <form action="">
      <div
        class="question-group"
        v-for="(questionGroup, questionIndex) in data.questions"
        :key="questionGroup"
      >
        <p :class="{'text-danger' : submitted && value == '' }">
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
      <button type="submit" @click.prevent="submit">Submit</button>
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
        submitted: false
      };
    },
    methods: {
      selectAnswer(i, questionGroup, option) {
        localStorage.setItem(i + 1, questionGroup.question + ' - ' + option);
        console.log([i + 1, questionGroup.question, option]);
        this.value = option;
      },
      submit() {
        this.submitted = true
        this.$router.push('/result');
      }
    },
    mounted() {
      window.addEventListener('beforeunload', (event) => {
        event.returnValue = 'You have not completed the quiz. Are you sure you want to leave?';
      });
    },
    updated() {
      console.log(this.value);
    }
  };
</script>

<style lang="scss" scoped>
  .question-group {
    margin-bottom: 2rem;
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
  }
  .text-danger {
    color: red;
  }
</style>
