<template>
  <section class="section">
    <h1 class="title is-3">Element overview</h1>
    <h2 class="subtitle is-4 has-text-grey mb-1">Text input</h2>
    <InputBox input-label="Text success" input-type="text" input-status="is-success" />
    <InputBox input-label="Text fail" input-type="text" input-status="is-danger" />
    <InputBox input-label="Email with validation" input-type="email" />
    <InputBox input-label="Text area" input-type="textarea" />
    <InputBox input-label="Password" input-type="password" />
  </section>
</template>

<script>
import InputBox from '~/components/InputBox'

export default {
  name: 'Overview',

  components: {
    InputBox
  },
}
</script>
