var NotificationStore = {
  state: {
    visible: false,
    text: '',
    type: '',
    timer: null
  },
  showMessage: function (text, type = 'info') {
    this.state.text = text
    this.state.type = type
    this.state.visible = true
    clearTimeout(this.state.timer)
    let that = this
    this.state.timer = setTimeout(function () {
      that.state.visible = false
    }, 7000)
  },
  hideMessage: function () {
    this.state.visible = false
    this.state.text = ''
  }
}

export default NotificationStore
