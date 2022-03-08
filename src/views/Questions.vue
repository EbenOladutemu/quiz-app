<template>
  <div>
    <Modal v-if="showModal"/>
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

        <!-- Iterate over each question and dynamically get ids and names -->
        <div
          v-for="(selectedOption, selectedOptionIndex) in questionGroup.options"
          :key="selectedOption"
          class="option"
        >
          <input
            type="radio"
            :name="'ques' + questionIndex"
            :id="'ques' + (questionIndex + 1).toString() + 'opt' + (selectedOptionIndex + 1)"
          />
          <label
            :for="'ques' + (questionIndex + 1).toString() + 'opt' + (selectedOptionIndex + 1)"
            @click="selectAnswer(questionIndex, questionGroup, selectedOption)"
            >{{ selectedOption }}
          </label
          >
        </div>
      </div>
      <button class="btn btn-result" type="submit" @click.prevent="submit" :disabled="loading">
        {{ loading ? 'Getting your result...' : 'Get result' }}
      </button>
    </form>
  </div>
</template>

<script>
  import data from './../data/data.json';
  import Modal from '@/components/Modal'
  export default {
    components:{
      Modal
    },
    data() {
      return {
        data,
        submitted: false,
        loading: false,
        showModal: false,
        results: []
      };
    },
    methods: {
      selectAnswer(i, questionGroup, selectedOption) {
        this.submitted = false;

        this.results = [];

        let questionNumber = i + 1;

        // Store each selected answer in local storage. If user selects another option,
        // selected answer is overriden in local storage
        localStorage.setItem(
          questionNumber,
          questionGroup.question +
          ' - ' + selectedOption +
          '. Answer ' +
          questionGroup.answer
        );
      },
      submit() {
        this.submitted = true

        let i = 1
        while (i <= 10) {
          this.results.push(localStorage.getItem(parseInt(i)))
          i++;
        }

        if (this.results.includes(null)) {
          this.showModal = !this.showModal;
        } else {
          this.loading = true;
          setTimeout(() => {
            this.$router.push({ name: 'Result' });
          }, 3000);
        }
      }
    },
    mounted() {
      document.title = 'Questions'

      window.addEventListener('beforeunload', (event) => {
        event.returnValue = 'You have not completed the quiz. Are you sure you want to leave?';
      });

      if (location.reload) {
        localStorage.clear();
      }
    }
  };
</script>

<style lang="scss" scoped>
  .question-group {
    margin-bottom: 2rem;
    border-bottom: 1px solid #ebe8e8;
    p {
      font-size: 1.5rem;
      font-weight: 600;
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
    &:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }
  }
</style>
