<template>
  <div class="form-wrapper">
    <form class="form">
      <div class="form-control input-field-wrapper">
        <label for="text-input">Task</label>
        <input type="text" class="form-input" id="text-input" name="text" placeholder="Add a task">
      </div>
      <div class="form-control input-field-wrapper">
        <label for="date-input">Date and Time</label>
        <input type="text" class="form-input" id="date-input" name="date" placeholder="Put in the date and time">
      </div>
      <div class="form-control reminder-check-wrapper">
        <input type="checkbox" class="add-task-reminder" id="reminder-check" name="reminder">
        <label for="reminder-check">Set reminder</label>
      </div>
      <div class="form-control">
        <input type="submit" class="btn" id="submit-input" value="Save">
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'AddTask'
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
        margin: 0 0 0 10px;
      }
    }

    .input-field-wrapper {
      display: flex;
      flex-direction: column;
    }
  }
</style>