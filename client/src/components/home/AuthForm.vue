<template lang="html">
  <div class="formContainer">
    <vue-form class="formContainer_form" :state="formstate" @submit.prevent="onSubmit">

      <validate auto-label class="form-group required-field" :class="fieldClassName(formstate.name)">
        <label>Name</label>
        <input type="text" name="name" class="form-control" required v-model.lazy="model.name">

        <field-messages name="name" show="$touched || $submitted" class="form-control-feedback">
          <div>Success!</div>
          <div slot="required">Name is a required field</div>
        </field-messages>

      </validate>

      <validate auto-label class="form-group required-field" :class="fieldClassName(formstate.password)">
        <label>Password</label>
        <input type="password" password-strength name="password" class="form-control" required v-model.lazy="model.password">

        <field-messages auto-label name="password" show="$touched || $submitted" class="form-control-feedback">
          <div>Success!</div>
          <div slot="required">Password is a required field</div>
          <div slot="password-strength">Password requires UpperCase, LowerCase, Number/SpecialChar and min 8 Chars</div>
        </field-messages>

      </validate>

      <validate auto-label class="form-group required-field" :class="fieldClassName(formstate.confirmPassword)">
        <label>Confirm Password</label>
        <input type="password" :matches="model.password" name="confirmPassword" class="form-control" required v-model.lazy="model.confirmPassword">

        <field-messages auto-label name="confirmPassword" show="$touched || $submitted" class="form-control-feedback">
          <div>Success!</div>
          <div slot="required">Confirm password is a required field</div>
          <div slot="matches">Passwords do not match</div>
        </field-messages>

      </validate>

      <div class="py-2 text-center">
        <button class="btn btn-primary" type="submit">Submit</button>
      </div>
    </vue-form>
  </div>
</template>

<script>
import VueForm from 'vue-form';

export default {
  props: [
    'type'
  ],
  data: function() {
    return {
      formstate: {},
      model: {
        name: '',
        password: '',
        confirmPassword: '',
      }
    }
  },
  methods: {
    fieldClassName: function (field) {
    	// for bootstrap classes
      if(!field) {
        return '';
      }
      if((field.$touched || field.$submitted) && field.$valid) {
        return 'has-success';
      }
      if((field.$touched || field.$submitted) && field.$invalid) {
        return 'has-danger';
      }
    },
    onSubmit: function() {
      console.log(this.formstate.$valid);
    }
  }
}
</script>

<style lang="scss" scoped>
  .formContainer {
    width: 100%;
    height: 100%;
    @include flex-center;

    &_form {
      width: 100%;
      max-width: 35rem;
      height: auto;
      min-height: 30rem;
      @include flex-center(space-between, flex-start);
      flex-direction: column;
      padding: 2rem;
    }
  }
</style>
