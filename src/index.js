const render = () => {
  import(`src/assets/scss/app.scss`).then(() => {
    require('src/AppRenderer')
  })
}
render()
