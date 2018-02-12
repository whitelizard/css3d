import './style';
import { Component } from 'preact';
// import * as Sprite3D from './sprite3d';
import Sprite3D from './sprite3d';

// const obj3d = [{ rot: [0, 0, 0], pos: [0, 0, 0], w: 100, h: 100 }];

// move alone
function moveAgain(event) {
	this.css('webkitTransition', 'all ' + (Math.random() + 0.3) + 's ease-in-out')
		.rotation((Math.random() - 0.5) * -150, (Math.random() - 0.5) * 150, 0)
		.z(Math.random() * -800)
		.update();
}

export default class App extends Component {
	componentDidMount() {
		let stage = Sprite3D.stage(document.getElementById('center'));

		// create the container for the box
		let box = stage.addChild(
			new Sprite3D()
				.id('box')
				.rotation(20, 30, 0)
				.update()
		);

		// create the box faces
		box.addChild(
			new Sprite3D()
				.className('face')
				.position(-80, -80, 80)
				.update()
		);
		box.addChild(
			new Sprite3D()
				.className('face')
				.position(-80, -80, -80)
				.rotationY(180)
				.update()
		);
		box.addChild(
			new Sprite3D()
				.className('face')
				.position(-160, -80, 0)
				.rotationY(-90)
				.update()
		);
		box.addChild(
			new Sprite3D()
				.className('face')
				.position(0, -80, 0)
				.rotationY(90)
				.update()
		);
		box.addChild(
			new Sprite3D()
				.className('top')
				.position(-80, 0, 0)
				.rotationX(90)
				.update()
		);
		box.addChild(
			new Sprite3D()
				.className('top')
				.position(-80, -160, 0)
				.rotationX(-90)
				.update()
		);
		box.addEventListener('webkitTransitionEnd', moveAgain.bind(box));

		setInterval(moveAgain.bind(box), 300);
	}
	render() {
		return <div ref={c => (this.area = c)} />;
	}
}
