import './style';
import { Component } from 'preact';
// import * as Sprite3D from './sprite3d';

export class Tool3d extends Component {
  state = { running: false };
  stopping;
  goingDown;
  halfDelay = 600;
  lastPressTime = 0;
  stop = () => this.setState({ running: false });
  goDown = () => {
    this.upper.style.setProperty(
      '--transition',
      `all ${this.halfDelay / 1000}s ease-in-out`
    );
    this.upper.style.setProperty(
      '--transform',
      'matrix3d( 0.866025, 0.103956, 0.489074, 0, 0, 0.978148, -0.207912, 0, -0.5, 0.180057, 0.847101, 0, 140, 180, -300, 1)'
    );
    this.upper2.style.setProperty(
      '--transition',
      `all ${this.halfDelay / 1000}s ease-in-out`
    );
    this.upper2.style.setProperty(
      '--transform',
      'matrix3d(0.866025,0.103956,0.489074,0,0,0.978148,-0.207912,0,-0.5,0.180057,0.847101,0,140,210,-300,1)'
    );
    console.log(this.halfDelay);
    setTimeout(this.goUp, this.halfDelay);
  };
  goUp = () => {
    this.upper.style.setProperty(
      '--transform',
      'matrix3d(0.866025, 0.103956, 0.489074, 0, 0, 0.978148, -0.207912, 0, -0.5, 0.180057, 0.847101, 0, 140, -20, -300, 1)'
    );
    this.upper2.style.setProperty(
      '--transform',
      'matrix3d(0.866025, 0.103956, 0.489074, 0, 0, 0.978148, -0.207912, 0, -0.5, 0.180057, 0.847101, 0, 140, 10, -300, 1)'
    );
  };
  shouldComponentUpdate({ pressed }) {
    const { running } = this.state;
    // const { cycle: lastCycle } = this.props;
    // console.log(running, pressed);
    if (pressed) {
      if (this.stopping) clearTimeout(this.stopping);
      if (running) {
        if (this.lastPressTime) {
          this.halfDelay =
            ((Date.now() - this.lastPressTime) / 2 + this.halfDelay) / 2;
        }
      } else {
        this.setState({ running: true });
      }
      this.stopping = setTimeout(this.stop, this.halfDelay * 4);
      this.goingDown = setTimeout(this.goDown, this.halfDelay);
      this.lastPressTime = Date.now();
      return false;
    }
  }
  render(props, { running }) {
    return (
      <div style="width: 300px; height: 320px; perspective: 800px; transform: translateZ(0px); transform-style: preserve-3d;">
        <div class="upper" ref={c => (this.upper = c)}>
          <div
            class="face frontface"
            style="margin: 0px; padding: 0px; position: absolute; transform-style: preserve-3d; transform: translate3d(-160px, -15px, 80px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale3d(1, 1, 1); width: 320px; height: 30px; background: rgba(113, 113, 138, 0.95); border: 1px solid rgba(126, 126, 154, 0.95);"
          />
          <div
            class="face backface"
            style="margin: 0px; padding: 0px; position: absolute; transform-style: preserve-3d; transform: translate3d(-160px, -15px, -80px) rotateX(0deg) rotateY(180deg) rotateZ(0deg) scale3d(1, 1, 1); width: 320px; height: 30px; background: rgba(72, 72, 88, 0.95); border: 1px solid rgba(126, 126, 154, 0.95);"
          />
          <div
            class="face rightface"
            style="margin: 0px; padding: 0px; position: absolute; transform-style: preserve-3d; transform: translate3d(80px, -15px, 0px) rotateX(0deg) rotateY(-90deg) rotateZ(0deg) scale3d(1, 1, 1); width: 160px; height: 30px; background: rgba(99, 99, 121, 0.95); border: 1px solid rgba(126, 126, 154, 0.95);"
          />
          <div
            class="face leftface"
            style="margin: 0px; padding: 0px; position: absolute; transform-style: preserve-3d; transform: translate3d(-240px, -15px, 0px) rotateX(0deg) rotateY(90deg) rotateZ(0deg) scale3d(1, 1, 1); width: 160px; height: 30px; background: rgba(95, 95, 116, 0.95); border: 1px solid rgba(126, 126, 154, 0.95);"
          />
          <div
            class="face topface"
            style="margin: 0px; padding: 0px; position: absolute; transform-style: preserve-3d; transform: translate3d(-160px, -95px, 0px) rotateX(-90deg) rotateY(0deg) rotateZ(0deg) scale3d(1, 1, 1); width: 320px; height: 160px; background: rgba(131, 131, 160, 0.95); border: 1px solid rgba(126, 126, 154, 0.95);"
          />
          <div
            class="face bottomface"
            style="margin: 0px; padding: 0px; position: absolute; transform-style: preserve-3d; transform: translate3d(-160px, -65px, 0px) rotateX(90deg) rotateY(0deg) rotateZ(0deg) scale3d(1, 1, 1); width: 320px; height: 160px; background: rgba(50, 50, 61, 0.95); border: 1px solid rgba(126, 126, 154, 0.95);"
          />
        </div>
        <div class="upper2" ref={c => (this.upper2 = c)}>
          <div
            class="face frontface"
            style="margin: 0px; padding: 0px; position: absolute; transform-style: preserve-3d; transform: translate3d(-150px, -15px, 70px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale3d(1, 1, 1); width: 300px; height: 30px; background: rgb(188, 188, 206); border: 1px solid rgb(210, 210, 231);"
          />
          <div
            class="face backface"
            style="margin: 0px; padding: 0px; position: absolute; transform-style: preserve-3d; transform: translate3d(-150px, -15px, -70px) rotateX(0deg) rotateY(180deg) rotateZ(0deg) scale3d(1, 1, 1); width: 300px; height: 30px; background: rgb(120, 120, 132); border: 1px solid rgb(210, 210, 231);"
          />
          <div
            class="face rightface"
            style="margin: 0px; padding: 0px; position: absolute; transform-style: preserve-3d; transform: translate3d(80px, -15px, 0px) rotateX(0deg) rotateY(-90deg) rotateZ(0deg) scale3d(1, 1, 1); width: 140px; height: 30px; background: rgb(165, 165, 182); border: 1px solid rgb(210, 210, 231);"
          />
          <div
            class="face leftface"
            style="margin: 0px; padding: 0px; position: absolute; transform-style: preserve-3d; transform: translate3d(-220px, -15px, 0px) rotateX(0deg) rotateY(90deg) rotateZ(0deg) scale3d(1, 1, 1); width: 140px; height: 30px; background: rgb(158, 158, 173); border: 1px solid rgb(210, 210, 231);"
          />
          <div
            class="face topface"
            style="margin: 0px; padding: 0px; position: absolute; transform-style: preserve-3d; transform: translate3d(-150px, -85px, 0px) rotateX(-90deg) rotateY(0deg) rotateZ(0deg) scale3d(1, 1, 1); width: 300px; height: 140px; background: rgb(218, 218, 239); border: 1px solid rgb(210, 210, 231);"
          />
          <div
            class="face bottomface"
            style="margin: 0px; padding: 0px; position: absolute; transform-style: preserve-3d; transform: translate3d(-150px, -55px, 0px) rotateX(90deg) rotateY(0deg) rotateZ(0deg) scale3d(1, 1, 1); width: 300px; height: 140px; background: rgb(83, 83, 91); border: 1px solid rgb(210, 210, 231);"
          />
        </div>
        <div class="lower" ref={c => (this.lower = c)}>
          <div
            class="face frontface"
            style="margin: 0px; padding: 0px; position: absolute; transform-style: preserve-3d; transform: translate3d(-160px, -15px, 80px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale3d(1, 1, 1); width: 320px; height: 30px; background: rgba(113, 113, 138, 0.95); border: 1px solid rgba(126, 126, 154, 0.95);"
          />
          <div
            class="face backface"
            style="margin: 0px; padding: 0px; position: absolute; transform-style: preserve-3d; transform: translate3d(-160px, -15px, -80px) rotateX(0deg) rotateY(180deg) rotateZ(0deg) scale3d(1, 1, 1); width: 320px; height: 30px; background: rgba(72, 72, 88, 0.95); border: 1px solid rgba(126, 126, 154, 0.95);"
          />
          <div
            class="face rightface"
            style="margin: 0px; padding: 0px; position: absolute; transform-style: preserve-3d; transform: translate3d(80px, -15px, 0px) rotateX(0deg) rotateY(-90deg) rotateZ(0deg) scale3d(1, 1, 1); width: 160px; height: 30px; background: rgba(99, 99, 121, 0.95); border: 1px solid rgba(126, 126, 154, 0.95);"
          />
          <div
            class="face leftface"
            style="margin: 0px; padding: 0px; position: absolute; transform-style: preserve-3d; transform: translate3d(-240px, -15px, 0px) rotateX(0deg) rotateY(90deg) rotateZ(0deg) scale3d(1, 1, 1); width: 160px; height: 30px; background: rgba(95, 95, 116, 0.95); border: 1px solid rgba(126, 126, 154, 0.95);"
          />
          <div
            class="face topface"
            style="margin: 0px; padding: 0px; position: absolute; transform-style: preserve-3d; transform: translate3d(-160px, -95px, 0px) rotateX(-90deg) rotateY(0deg) rotateZ(0deg) scale3d(1, 1, 1); width: 320px; height: 160px; background: rgba(131, 131, 160, 0.95); border: 1px solid rgba(126, 126, 154, 0.95);"
          />
          <div
            class="face bottomface"
            style="margin: 0px; padding: 0px; position: absolute; transform-style: preserve-3d; transform: translate3d(-160px, -65px, 0px) rotateX(90deg) rotateY(0deg) rotateZ(0deg) scale3d(1, 1, 1); width: 320px; height: 160px; background: rgba(50, 50, 61, 0.95); border: 1px solid rgba(126, 126, 154, 0.95);"
          />
        </div>
        <div class="lower2" ref={c => (this.lower2 = c)}>
          <div
            class="face frontface"
            style="margin: 0px; padding: 0px; position: absolute; transform-style: preserve-3d; transform: translate3d(-150px, -15px, 70px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale3d(1, 1, 1); width: 300px; height: 30px; background: rgb(188, 188, 206); border: 1px solid rgb(210, 210, 231);"
          />
          <div
            class="face backface"
            style="margin: 0px; padding: 0px; position: absolute; transform-style: preserve-3d; transform: translate3d(-150px, -15px, -70px) rotateX(0deg) rotateY(180deg) rotateZ(0deg) scale3d(1, 1, 1); width: 300px; height: 30px; background: rgb(120, 120, 132); border: 1px solid rgb(210, 210, 231);"
          />
          <div
            class="face rightface"
            style="margin: 0px; padding: 0px; position: absolute; transform-style: preserve-3d; transform: translate3d(80px, -15px, 0px) rotateX(0deg) rotateY(-90deg) rotateZ(0deg) scale3d(1, 1, 1); width: 140px; height: 30px; background: rgb(165, 165, 182); border: 1px solid rgb(210, 210, 231);"
          />
          <div
            class="face leftface"
            style="margin: 0px; padding: 0px; position: absolute; transform-style: preserve-3d; transform: translate3d(-220px, -15px, 0px) rotateX(0deg) rotateY(90deg) rotateZ(0deg) scale3d(1, 1, 1); width: 140px; height: 30px; background: rgb(158, 158, 173); border: 1px solid rgb(210, 210, 231);"
          />
          <div
            class="face topface"
            style="margin: 0px; padding: 0px; position: absolute; transform-style: preserve-3d; transform: translate3d(-150px, -85px, 0px) rotateX(-90deg) rotateY(0deg) rotateZ(0deg) scale3d(1, 1, 1); width: 300px; height: 140px; background: rgb(218, 218, 239); border: 1px solid rgb(210, 210, 231);"
          />
          <div
            class="face bottomface"
            style="margin: 0px; padding: 0px; position: absolute; transform-style: preserve-3d; transform: translate3d(-150px, -55px, 0px) rotateX(90deg) rotateY(0deg) rotateZ(0deg) scale3d(1, 1, 1); width: 300px; height: 140px; background: rgb(83, 83, 91); border: 1px solid rgb(210, 210, 231);"
          />
        </div>
      </div>
    );
  }
}

export default class App extends Component {
  state = { pressure: 140 };
  count = 0;
  updatePressure = () => {
    this.count += 1;
    if (this.count === 1) {
      this.setState({ pressure: 250 });
    } else if (this.count === 2) {
      this.setState({ pressure: 120 });
    } else if (this.count === 5) {
      this.count = 0;
    }
  };
  componentDidMount() {
    setInterval(this.updatePressure, 470);
  }
  render({}, { pressure }) {
    return (
      <div style="padding: 0px">
        <Tool3d pressed={pressure > 200} />
      </div>
    );
  }
}
