<template>
  <section class="section">
    <div class="content">
      <h1 class="title is-1">{{ data._embedded.content[0].name }}</h1>
      <InputBox v-for="inputBox in data._embedded.content[0].inputBoxes" :key="inputBox.alias"
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
        'Accept-Language': 'en-US',
        'umb-project-alias': 'gerts-versatile-gorilla',
      },
    }

    const data = await $axios.$get(
      `${$axios.defaults.baseURL}/content`,
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
