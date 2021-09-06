<template>
  <section class="section">
    <div class="content">
      <h1 class="title is-1">Dynamic forms</h1>
      <InputBox v-for="inputBox in data.inputBoxes" :key="inputBox.alias"
        :input-label="inputBox.inputLabel"
        :input-type="inputBox.inputType"
        :input-status="inputStatus(inputBox.inputStatus)"
        :input-icon="
          inputBox.hasInputIcon
            ? inputBox.inputIcon
            : ''
        "
      />
    </div>
  </section>
</template>

<script>
import InputBox from '~/components/InputBox'

export default {
  name: 'HomePage',
  components: {
    InputBox,
  },
  async asyncData({ $axios }) {
    let config = {
      headers: {
        'Accept-Language': 'en-US'
      },
    }

    const data = await $axios.$get(
      `${$axios.defaults.baseURL}/form`,
      config
    )

    return { data }
  },

  methods: {
    inputStatus(statusString) {
      let status = ''
      switch (statusString) {
        case 'success':
          status = 'is-success'
          break
        case 'fail':
          status = 'is-danger'
          break
        default:
          status = ''
      };

      return status;
    },
  },
}
</script>
