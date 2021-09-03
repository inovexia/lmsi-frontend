const render = () => {
  import(`./assets/scss/app.scss`).then(() => {
    require('./AppRenderer')
  })
}
render()
