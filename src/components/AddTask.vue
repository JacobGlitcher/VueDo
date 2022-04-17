<template>
  <div class="form-wrapper">
    <form class="form" @submit="onSubmit">
      <div class="form-control input-field-wrapper">
        <label for="text-input">Task</label>
        <input type="text" class="form-input" id="text-input" v-model="text" name="text"
               placeholder="Add a task" autocomplete="off">
        <span v-if="v$.text.$error" class="error-msg">
          {{v$.text.$errors[0].$message}}
        </span>
      </div>
      <div class="form-control input-field-wrapper">
        <label for="date-input">Date and Time</label>
        <input type="text" class="form-input" id="date-input" v-model="day" name="date"
               placeholder="Put in the date and time" autocomplete="off">
        <span v-if="v$.day.$error" class="error-msg">
          {{v$.day.$errors[0].$message}}
        </span>
      </div>
      <div class="form-control reminder-check-wrapper">
        <input type="checkbox" class="add-task-reminder" id="reminder-check" v-model="reminder" name="reminder">
        <label for="reminder-check">Set reminder</label>
      </div>
      <div class="form-control">
        <input type="submit" class="btn" id="submit-input" value="Save">
      </div>
    </form>
  </div>
</template>

<script>
  import useVuelidate from '@vuelidate/core';
  import {required, maxLength} from '@vuelidate/validators';

  export default {
    name: 'AddTask',
    data() {
      return {
        v$: useVuelidate(),
        text: '',
        day: '',
        reminder: false,
      }
    },
    validations() {
      return {
        text: {required, maxLength: maxLength(50)},
        day: {required, maxLength: maxLength(50)},
      }
    },
    methods: {
      onSubmit(e) {
        e.preventDefault();

        this.v$.$validate();

        if(this.v$.$error) {
          return;
        }

        const newTask = {
          text: this.text,
          day: this.day,
          reminder: this.reminder,
        }

        this.$emit('add-task', newTask);

        this.text = '';
        this.day = '';
        this.reminder = false;

        this.v$.$reset();
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "src/assets/styles/scss/components/buttons";
  @import "src/assets/styles/scss/components/inputs";

  .form-wrapper {
    margin-bottom: 20px;
    .form-control {
      margin-bottom: 10px;
      label {
        font-size: 18px;
        margin-bottom: 5px;
      }

      .btn {
        width: 100%;
        cursor: pointer;
        font-size: 20px;
        height: auto
      }

      .error-msg {
        margin-top: 7px;
        color: red;
      }

      &:last-child {
        margin: 0;
      }
    }

    .reminder-check-wrapper {
      display: flex;
      align-items: center;
      margin-bottom: 13px;
      input, label {
        cursor: pointer;
      }

      label {
        margin: 0;
        padding: 0 0 0 10px;
        user-select: none;
      }
    }

    .input-field-wrapper {
      display: flex;
      flex-direction: column;
    }
  }
</style>