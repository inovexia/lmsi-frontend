const render = () => {
  import(`src/assets/scss/lmsi.scss`).then(() => {
    require('src/AppRenderer')
  })
}
render()
