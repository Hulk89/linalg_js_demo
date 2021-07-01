import Component from "../core/Component.js"

export default class Equation extends Component {
  setup () {
    this.$state = ""
  }
  setState (newState) {
    this.$state = newState
    this.render()
  }
  template () { return this.$state }
  render () {
    super.render()
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, this.$target])
  }
}
