import './style';
import { Component } from 'preact';
// import * as Sprite3D from './sprite3d';
import Sprite3D from './sprite3d';

// const obj3d = [{ rot: [0, 0, 0], pos: [0, 0, 0], w: 100, h: 100 }];

const sceneWidth = 300;
const sceneHeight = 320;

function colProc(rgb, proc, noStr) {
  const newCol = [
    Math.min((rgb[0] * (100 + proc) / 100).toFixed(0), 255),
    Math.min((rgb[1] * (100 + proc) / 100).toFixed(0), 255),
    Math.min((rgb[2] * (100 + proc) / 100).toFixed(0), 255),
  ];
  if (rgb.length === 4) newCol.push(rgb[3]);
  if (noStr) return newCol;
  return `rgba(${newCol[0]}, ${newCol[1]}, ${newCol[2]}, ${newCol[3] || 1})`;
}

function spriteBox({
  dim = [100, 100, 100],
  pos = [0, 0, 0],
  rot = [0, 0, 0],
  name = 'box',
  rgba = [90, 90, 110, 0.95],
  borderOffset = -20,
  colorDiffFactor = 1,
}) {
  const [dx, dy, dz] = dim;
  const [px, py, pz] = pos;
  const [rx, ry, rz] = rot;
  const box = new Sprite3D()
    .className(name)
    // .rotationX(rx)
    // .rotationY(ry)
    // .rotationZ(rz)
    .rotation(rx, ry, rz)
    .x(px)
    .y(py)
    .z(pz)
    .update();
  // create the box faces
  const boCol = colProc(rgba, borderOffset);
  const fCol = colProc(rgba, 25 * colorDiffFactor);
  const baCol = colProc(rgba, -20 * colorDiffFactor);
  const rCol = colProc(rgba, 10 * colorDiffFactor);
  const lCol = colProc(rgba, 5 * colorDiffFactor);
  const tCol = colProc(rgba, 45 * colorDiffFactor);
  const bCol = colProc(rgba, -45 * colorDiffFactor);
  console.log(rCol);
  box.addChild(
    new Sprite3D()
      .className('face frontface')
      .css('width', `${dx}px`)
      .css('height', `${dy}px`)
      .css('background', fCol)
      .css('border', `1px solid ${boCol}`)
      .position(-dx / 2, -dy / 2, dz / 2)
      .update(),
  );
  box.addChild(
    new Sprite3D()
      .className('face backface')
      .css('width', `${dx}px`)
      .css('height', `${dy}px`)
      .css('background', baCol)
      .css('border', `1px solid ${boCol}`)
      .position(-dx / 2, -dy / 2, -dz / 2)
      .rotationY(180)
      .update(),
  );
  box.addChild(
    new Sprite3D()
      .className('face rightface')
      .css('width', `${dz}px`)
      .css('height', `${dy}px`)
      .css('background', rCol)
      .css('border', `1px solid ${boCol}`)
      .position(-dz / 2 + dx / 2, -dy / 2, 0)
      .rotationY(-90)
      .update(),
  );
  box.addChild(
    new Sprite3D()
      .className('face leftface')
      .css('width', `${dz}px`)
      .css('height', `${dy}px`)
      .css('background', lCol)
      .css('border', `1px solid ${boCol}`)
      .position(-dz / 2 - dx / 2, -dy / 2, 0)
      .rotationY(90)
      .update(),
  );
  box.addChild(
    new Sprite3D()
      .className('face topface')
      .css('width', `${dx}px`)
      .css('height', `${dz}px`)
      .css('background', tCol)
      .css('border', `1px solid ${boCol}`)
      .position(-dx / 2, -dy / 2 - dz / 2, 0)
      .rotationX(-90)
      .update(),
  );
  box.addChild(
    new Sprite3D()
      .className('face bottomface')
      .css('width', `${dx}px`)
      .css('height', `${dz}px`)
      .css('background', bCol)
      .css('border', `1px solid ${boCol}`)
      .position(-dx / 2, dy / 2 - dz / 2, 0)
      .rotationX(90)
      .update(),
  );
  return box;
}

export class Tool3d extends Component {
  state = { running: false, cycle: false };
  stopping;
  goingDown;
  freq = 1000;
  lastPressTime = 0;
  stop = () => this.setState({ running: false });
  goDown = () => {
    this.upper
      .css('webkitTransition', 'all .3s ease-in-out')
      .y(180)
      .update();
    this.upper2
      .css('webkitTransition', 'all .3s ease-in-out')
      .y(210)
      .update();
    setTimeout(this.goUp, 300);
  };
  goUp = () => {
    this.upper
      .css('webkitTransition', 'all .3s ease-in-out')
      .y(-20)
      .update();
    this.upper2
      .css('webkitTransition', 'all .3s ease-in-out')
      .y(10)
      .update();
  };
  componentDidMount() {
    this.stage = Sprite3D.stage(this.area);
    this.upper = spriteBox({
      dim: [320, 30, 160],
      pos: [140, -20, -300],
      rot: [-12, -30, 0],
      name: 'upper',
      borderOffset: 40,
    });
    this.upper2 = spriteBox({
      dim: [300, 30, 140],
      pos: [140, 10, -300],
      rot: [-12, -30, 0],
      name: 'upper2',
      rgba: [150, 150, 165],
      borderOffset: 40,
    });
    this.stage.addChild(this.upper);
    this.stage.addChild(this.upper2);
    this.lower = spriteBox({
      dim: [320, 30, 160],
      pos: [140, 270, -300],
      rot: [-12, -30, 0],
      name: 'lower',
      borderOffset: 40,
    });
    this.lower2 = spriteBox({
      dim: [300, 30, 140],
      pos: [140, 240, -300],
      rot: [-12, -30, 0],
      name: 'lower2',
      rgba: [150, 150, 165],
      borderOffset: 40,
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
    return <div ref={c => (this.area = c)} style={{ width: sceneWidth, height: sceneHeight }} />;
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
