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
  goDown = () => {
    this.upper.forEach(b => b.y(uPos + 130).update());
    // setTimeout(this.goUp, 200);
  };
  goUp = () => {
    this.upper.forEach(b => b.y(uPos).update());
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
        .css('transition', 'all .2s ease-in-out')
        .update();
      this.upper.push(box);
      this.stage.addChild(box);
    }
  }
  shouldComponentUpdate({ pressed }) {
    if (pressed) this.goDown();
    else this.goUp();
    return false;
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
    setInterval(this.updatePressure, 430);
  }
  render({}, { pressure }) {
    return (
      <div style="padding: 0px">
        <World3d pressed={pressure > 200} />
      </div>
    );
  }
}
