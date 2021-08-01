<template>
  <section>
    <div class="tile">
      <b-field :label="inputLabel" :type="inputStatus">
        <b-input
          v-model="text"
          :type="inputType"
          :value="inputType == 'password' ? 'hunter2' : ''"
          :password-reveal="inputType == 'password' ? true : false"
          :use-html5-validation="inputType =='email' ? true : false"
          :icon="inputIcon"
        ></b-input>
      </b-field>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    inputLabel: {
      type: String,
      required: true,
      default: "Enter a label in umbraco"
    },
    inputType: {
      type: String,
      required: true,
      default: "text"
    },
    inputStatus: {
      type: String,
      required: false,
    },
    inputIcon: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      text: '',
    }
  },
  computed: {
  },
  mounted() {
    if (this.inputType == "password") {
      this.text = "hunter2"
    }
  }
}
</script>
