export default function ({ query, enablePreview, $axios }) {
  if (query.preview) {
    // Change base api to preview api and add api key header
    $axios.defaults.baseURL = 'https://preview.umbraco.io'
    $axios.defaults.headers.common = {
      'Accept-Language': 'en-US',
      'umb-project-alias': 'gerts-versatile-gorilla',
      'Api-Key': process.env.API_KEY,
    }
    
    enablePreview()
  }
}
