// import './style';
import { Component } from 'preact';
// import * as Sprite3D from './sprite3d';
import { spriteBox, Sprite3D } from '../';

// We can "compile" a finished 3d world by copying the element html code from the browser
// and turning transforms into matrixes with https://meyerweb.com/eric/tools/matrix/
// Also, we can animate with css variables

const sceneWidth = 300;
const sceneHeight = 320;
const uPos = 130;

export class World3d extends Component {
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
    this.stage = Sprite3D.stage(this.area)
      .css('border', '1px solid blue')
      .rotationX(-20)
      .update();
    // let box;
    for (let i = 0; i < 8; ++i) {
      this.stage.addChild(
        spriteBox({
          dim: [39, 200, 140],
          pos: [150, 280, -250],
          rot: [0, 90 - i * 30, 0],
          name: 'upper',
          rgba: [60, 60, 60, 1],
          noBorder: true,
          colorDiffFactor: 0.5 + (i === 4 ? 0.5 : 0),
          antiAlias: 8 - (i === 3 ? 5 : 0)
        })
      );
    }
    this.upper = [];
    for (let i = 0; i < 8; ++i) {
      const box = spriteBox({
        dim: [23, 190, 80],
        pos: [150, uPos, -250],
        rot: [0, 90 - i * 30, 0],
        name: 'upper',
        rgba: [150, 150, 170, 1],
        noBorder: true,
        colorDiffFactor: 0.8 + (i === 4 ? 0.4 : 0),
        antiAlias: 3
      })
        .css('transition', 'all .3s ease-in-out')
        .update();
      this.upper.push(box);
      this.stage.addChild(box);
    }
    console.log(this.upper);
    setInterval(() => {
      this.t = !this.t;
      console.log(this.t);
      this.upper.forEach(b => b.y(uPos + this.t * 130).update());
    }, 1000);
  }
  shouldComponentUpdate({ pressed }) {
    const { running } = this.state;
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
        <World3d pressed={pressure > 200} />
      </div>
    );
  }
}
