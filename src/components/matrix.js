import Component from "../core/Component.js"

export default class InputMatrix extends Component {
  setup () {
    this.$state = {data: [[1],[0]]}
  }
  template () {
    let {data} = this.$state

    let str = `
    <div>
      ${data.map((row) =>
      `<div>
        ${row.map((point) => `<input type="text" value="${point}">`).join("")}
      </div>`).join("")}
    </div>`
    return str
  }
}
