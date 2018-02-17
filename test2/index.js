// import './style';
import { Component } from 'preact';
// import * as Sprite3D from './sprite3d';
import { spriteBox, Sprite3D } from '../';

// We can "compile" a finished 3d world by copying the element html code from the browser
// and turning transforms into matrixes with https://meyerweb.com/eric/tools/matrix/
// Also, we can animate with css variables

const sceneWidth = 600;
const sceneHeight = 320;

export class World3d extends Component {
  componentDidMount() {
    this.stage = Sprite3D.stage(this.area).css('border', '1px solid blue');
    let box;
    box = spriteBox({
      dim: [600, 5, 300],
      pos: [20, 210, -250],
      rot: [-55, 0, 0],
      name: 'upper',
      rgba: [150, 150, 170, 0.75],
      borderOffset: -30
    });
    this.stage.addChild(box);
    box = spriteBox({
      dim: [90, 70, 150],
      pos: [20, 210, -200],
      rot: [-55, 0, 0],
      name: 'upper',
      rgba: [150, 150, 170, 0.75],
      borderOffset: -30
    });
    this.stage.addChild(box);
    box = spriteBox({
      dim: [220, 90, 160],
      pos: [240, 210, -200],
      rot: [-55, 0, 0],
      name: 'upper',
      rgba: [150, 150, 170, 0.75],
      borderOffset: -30
    });
    this.stage.addChild(box);
    box = spriteBox({
      dim: [70, 20, 40],
      pos: [100, 210, -200],
      rot: [-55, 0, 0],
      name: 'upper',
      rgba: [150, 150, 170, 0.75],
      borderOffset: -30
    });
    this.stage.addChild(box);
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
  render({}, { pressure }) {
    return (
      <div style="padding: 0px">
        <World3d />
      </div>
    );
  }
}
