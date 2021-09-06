export default function ({ query, enablePreview, $axios, $config: { apiKey } }) {
  if (query.preview) {
    // This is used for heartcore setup
    // Change base api to preview api and add api key header official umbraco api setup
    // $axios.defaults.baseURL = 'https://preview.umbraco.io'
    // $axios.defaults.headers.common = {
    //   'Accept-Language': 'en-US',
    //   'umb-project-alias': 'gerts-versatile-gorilla',
    //   'Api-Key': apiKey,
    // }
    
    enablePreview()
  }
}
