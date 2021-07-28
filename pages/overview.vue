<template>
  <section class="section">
    <h1 class="title is-3">Element overview</h1>
    <b-tabs v-model="activeTab">
      <b-tab-item label="Input box">
        <InputBox
          input-label="Text success"
          input-type="text"
          input-status="is-success"
          input-icon="check-circle"
        />
        <InputBox
          input-label="Text fail"
          input-type="text"
          input-status="is-danger"
          input-icon="exclamation-triangle"
        />
        <InputBox
          input-label="Email with validation (on blur)"
          input-type="email"
          input-icon="envelope-square"
        />
        <InputBox input-label="Text area" input-type="textarea" />
        <InputBox input-label="Password" input-type="password" />
      </b-tab-item>

      <b-tab-item label="Next tab">
        <div>Coming soon</div>
      </b-tab-item>
    </b-tabs>
  </section>
</template>

<script>
import InputBox from '~/components/InputBox'

export default {
  name: 'Overview',
  components: {
    InputBox,
  },
  data() {
    return {
      activeTab: 0,
    }
  },
}
</script>
