import Component from "../core/Component.js"

export default class Equation extends Component {
  setup () {
    this.$state = {inline: false, equation: ""}
  }
  template () {
    let {inline, equation} = this.$state
    if (inline) return '$' + equation + '$'
    else return equation
  }
  render () {
    super.render()
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, this.$target])
  }
}
