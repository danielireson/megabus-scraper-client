export default function () {
  var state = {
    message: {
      visible: false,
      text: ''
    },
    timer: null
  }

  function showMessage (text) {
    state.message.text = text
    state.message.visible = true
    clearTimeout(this.state.timer)
    state.timer = setTimeout(function () {
      state.message.visible = false
    }, 5000)
  }

  function hideMessage () {
    state.message.visible = false
    state.message.text = ''
  }

  return {
    showMessage: showMessage,
    hideMessage: hideMessage
  }
}
