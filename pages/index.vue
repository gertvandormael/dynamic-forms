<template>
  <section class="section">
    <div class="content">
      <h1 class="title is-1">{{ data._embedded.content[0].name }}</h1>
      <InputBox
        :input-label="data._embedded.content[0].inputLabel"
        :input-type="data._embedded.content[0].inputType"
        :input-status="inputStatus"
        :input-icon="
          data._embedded.content[0].hasInputIcon
            ? data._embedded.content[0]
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
        'Api-Key': process.env.API_KEY
      },
    }

    const data = await $axios.$get(
      `${$axios.defaults.baseURL}/content`,
      config
    )
    return { data }
  },

  computed: {
    inputStatus() {
      let status = ''
      switch (this.data._embedded.content[0].inputStatus) {
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
