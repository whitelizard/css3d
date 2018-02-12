import './style';
import { Component } from 'preact';
// import * as Sprite3D from './sprite3d';
import Sprite3D from './sprite3d';

// const obj3d = [{ rot: [0, 0, 0], pos: [0, 0, 0], w: 100, h: 100 }];

const sceneWidth = 300;
const sceneHeight = 320;

// move alone
function moveAgain(event) {
  this.css('webkitTransition', 'all ' + (Math.random() + 0.3) + 's ease-in-out')
    .rotation((Math.random() - 0.5) * -150, (Math.random() - 0.5) * 150, 0)
    .y(Math.random() * -800)
    .update();
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
      // .rotation((Math.random() - 0.5) * -150, (Math.random() - 0.5) * 150, 0)
      .y(300)
      .update();
    setTimeout(this.goUp, 300);
  };
  goUp = () => {
    this.upper
      .css('webkitTransition', 'all .3s ease-in-out')
      // .rotation((Math.random() - 0.5) * -150, (Math.random() - 0.5) * 150, 0)
      .y(0)
      .update();
  };
  componentDidMount() {
    // this.stage = Sprite3D.stage();
    // this.upper = Sprite3D.box(100, 100, 100, '.cube');
    //
    // this.stage.appendChild(this.upper);

    let stage = Sprite3D.stage(this.area);
    this.upper = stage.addChild(
      new Sprite3D()
        .position(150, 160)
        .z(-400)
        // .rotation(20, 30, 0)
        .update()
    );
    // create the box faces
    this.upper.addChild(
      new Sprite3D()
        .className('face')
        .position(-80, -80, 80)
        .update()
    );
    this.upper.addChild(
      new Sprite3D()
        .className('face')
        .position(-80, -80, -80)
        .rotationY(180)
        .update()
    );
    this.upper.addChild(
      new Sprite3D()
        .className('face')
        .position(-160, -80, 0)
        .rotationY(-90)
        .update()
    );
    this.upper.addChild(
      new Sprite3D()
        .className('face')
        .position(0, -80, 0)
        .rotationY(90)
        .update()
    );
    this.upper.addChild(
      new Sprite3D()
        .className('top')
        .position(-80, 0, 0)
        .rotationX(90)
        .update()
    );
    this.upper.addChild(
      new Sprite3D()
        .className('top')
        .position(-80, -160, 0)
        .rotationX(-90)
        .update()
    );
    // this.upper.addEventListener('webkitTransitionEnd', this.goUp);
    // setInterval(moveAgain.bind(upper), 1000);
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
    return <Tool3d pressed={pressure > 200} />;
  }
}
