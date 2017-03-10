var NotificationService = {
  state: {
    visible: false,
    text: '',
    type: '',
    timer: null
  },
  showMessage (text, type = 'info', timeout = true) {
    this.state.text = text
    this.state.type = type
    this.state.visible = true
    clearTimeout(this.state.timer)
    if (timeout) {
      this.state.timer = setTimeout(() => {
        this.state.visible = false
      }, 5000)
    }
  },
  hideMessage () {
    this.state.visible = false
    this.state.text = ''
  }
}

export default NotificationService
