import Component from "../core/Component.js"

export default class InputMatrix extends Component {
  setup () {
    this.$state = {title: '', data: [[1],[0]], callback: null}
  }
  template () {
    let {title, data} = this.$state

    let str = `
    <h2>${title}</h2>
    <div id="matrix">
      ${data.map((row) =>
      `<div>
        ${row.map((point) => `<input type="text" value="${point}">`).join("")}
      </div>`).join("")}
    </div>`
    return str
  }
  setEvent () {
    // TODO: querySelector -> getElementById
    this.$target.querySelector('#matrix').addEventListener('change', () => {
      const ncols = this.$state.data[0].length

      const children = Array.from(this.$target.getElementsByTagName('input'))
      let data_1d = children.map(c => c.value)
      let data_2d = []
      while(data_1d.length) data_2d.push(data_1d.splice(0,ncols));

      this.setState({data:data_2d})

      let {callback, data} = this.$state
      if (callback != null) callback(data)
    })
  }
}
