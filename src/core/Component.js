import {merge} from 'lodash'

export default class Component {
  $target
  $state

  constructor ($target) {
    this.$target = $target
    this.setup()
    this.setEvent()
    this.render()
  }
  /* 처음 상태를 관리한다. */
  setup () {}
  
  /* innerHTML에 넣을 코드를 의미함 */
  template () { return ''}

  /* rendering 함수. setState 시 무조건 불려야한다. */
  render () {
    this.$target.innerHTML = this.template()
  }
  /* state를 새로 바꾸면 꼭 이 함수를 통해서 바뀌어야한다. */
  setState (newState) {
    this.$state = merge(this.$state, newState)
    this.render()
  }

  /* event를 세팅한다. 가능하면 event bubbling을 통해서 처리할 수 있도록 하자.
   * src/components/matrix.js 를 참조..
   */
  setEvent () {}
  /*
  addEvent (eventType, selector, callback) {
    const children = [ ...this.$target.querySelectorAll(selector) ]; 
    // selector에 명시한 것 보다 더 하위 요소가 선택되는 경우가 있을 땐
    // closest를 이용하여 처리한다.
    const isTarget = (target) => children.includes(target)
                                 || target.closest(selector);
    this.$target.addEventListener(eventType, event => {
      if (!isTarget(event.target)) return false;
      callback(event);
    })
  }
  */
}
