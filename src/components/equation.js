import Component from "../core/Component.js"

export default class Equation extends Component {
  setup () {
    this.$state = {equation: ""}
  }
  template () {
    let {equation} = this.$state
    return "$" + equation + "$"
  }
  render () {
    super.render()
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, this.$target])
  }
}
