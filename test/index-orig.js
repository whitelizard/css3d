// import './style';
import { Component } from 'preact';
// import * as Sprite3D from './sprite3d';
import { spriteBox, Sprite3D } from '../';

const sceneWidth = 300;
const sceneHeight = 320;

export class Tool3d extends Component {
  state = { running: false, cycle: false };
  stopping;
  goingDown;
  freq = 1000;
  lastPressTime = 0;
  stop = () => this.setState({ running: false });
  goDown = () => {
    this.upper.y(180).update();
    this.upper2.y(210).update();
    setTimeout(this.goUp, 300);
  };
  goUp = () => {
    this.upper.y(-20).update();
    this.upper2.y(10).update();
  };
  componentDidMount() {
    this.stage = Sprite3D.stage(this.area);
    this.upper = spriteBox({
      dim: [320, 30, 160],
      pos: [140, -20, -300],
      rot: [-12, -30, 0],
      name: 'upper',
      borderOffset: 40
    }).css('webkitTransition', 'all .3s ease-in-out');
    this.upper2 = spriteBox({
      dim: [300, 30, 140],
      pos: [140, 10, -300],
      rot: [-12, -30, 0],
      name: 'upper2',
      rgba: [150, 150, 165],
      borderOffset: 40
    }).css('webkitTransition', 'all .3s ease-in-out');
    this.stage.addChild(this.upper);
    this.stage.addChild(this.upper2);
    this.lower = spriteBox({
      dim: [320, 30, 160],
      pos: [140, 270, -300],
      rot: [-12, -30, 0],
      name: 'lower',
      borderOffset: 40
    });
    this.lower2 = spriteBox({
      dim: [300, 30, 140],
      pos: [140, 240, -300],
      rot: [-12, -30, 0],
      name: 'lower2',
      rgba: [150, 150, 165],
      borderOffset: 40
    });
    this.stage.addChild(this.lower);
    this.stage.addChild(this.lower2);
    // this.stage.rotationY(70).update();
  }
  shouldComponentUpdate({ pressed, cycle }) {
    const { running } = this.state;
    // const { cycle: lastCycle } = this.props;
    console.log(running, pressed);
    if (pressed) {
      if (this.stopping) clearTimeout(this.stopping);
      if (running) {
        if (this.lastPressTime) {
          this.freq = (Date.now() - this.lastPressTime + this.freq) / 2;
        }
      } else {
        this.setState({ running: true });
      }
      this.stopping = setTimeout(this.stop, 2000);
      this.goingDown = setTimeout(this.goDown, this.freq * 0.8);
      this.lastPressTime = Date.now();
    }
  }
  render(props, { running }) {
    return (
      <div
        ref={c => (this.area = c)}
        style={{ width: sceneWidth, height: sceneHeight }}
      />
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
    setInterval(this.updatePressure, 230);
  }
  render({}, { pressure }) {
    return (
      <div style="padding: 0px">
        <Tool3d pressed={pressure > 200} />
      </div>
    );
  }
}
