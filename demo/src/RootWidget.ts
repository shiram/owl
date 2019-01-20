import Widget from "../../src/core/widget";
import Counter from "./Counter";

const template = `
    <div t-debug="1">
        <span>Root Widget</span>
        <button t-on-click="resetCounter">Reset</button>
        <button t-on-click="toggle">Toggle  Counter</button>
        <input/>
        <t t-if="state.validcounter">
            <t t-widget="Counter" t-ref="counter" t-props="{initialState:4}"/>
        </t>
    </div>
`;

export default class RootWidget extends Widget {
  name = "root";
  template = template;
  widgets = { Counter };
  state = { validcounter: true};

  resetCounter(ev: MouseEvent) {
      this.refs.counter.updateState({counter: 3})
  }

  toggle() {
      this.updateState({validcounter: !this.state.validcounter});
  }
}