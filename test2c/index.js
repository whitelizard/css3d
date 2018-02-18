import './style';
import { Component } from 'preact';

// We can "compile" a finished 3d world by copying the element html code from the browser
// and turning transforms into matrixes with https://meyerweb.com/eric/tools/matrix/
// Also, we can animate with css variables

export class World3d extends Component {
  goDown = () => {
    this.moving.style.transform = 'translate3d(0px, 130px, 0px)';
  };
  goUp = () => {
    this.moving.style.transform = 'translate3d(0px, 0px, 0px)';
  };
  componentDidMount() {}
  shouldComponentUpdate({ pressed }) {
    if (pressed) this.goDown();
    else this.goUp();
    return false;
  }
  render(props, { running }) {
    return (
      <div
        class="area"
        style="transform: translate3d(0px, 0px, 0px) rotateX(-20deg) rotateY(0deg) rotateZ(0deg)"
      >
        <div
          class="box"
          style="transform: translate3d(150px, 280px, -250px) rotateX(0deg) rotateY(90deg) rotateZ(0deg)"
        >
          <div
            class="face frontface"
            style="transform: translate3d(-19.5px, -100px, 70px) rotateX(0deg) rotateY(0deg) rotateZ(0deg); width: 39px; height: 200px; background: rgb(68, 68, 68);"
          />
          <div
            class="face backface"
            style="transform: translate3d(-19.5px, -100px, -70px) rotateX(0deg) rotateY(180deg) rotateZ(0deg); width: 39px; height: 200px; background: rgb(54, 54, 54);"
          />
          <div
            class="face topface"
            style="transform: translate3d(-19.5px, -170px, 0px) rotateX(-90deg) rotateY(0deg) rotateZ(0deg); width: 39px; height: 140px; background: rgb(74, 74, 74);"
          />
        </div>
        <div
          class="box"
          style="transform: translate3d(150px, 280px, -250px) rotateX(0deg) rotateY(60deg) rotateZ(0deg)"
        >
          <div
            class="face frontface"
            style="transform: translate3d(-19.5px, -100px, 70px) rotateX(0deg) rotateY(0deg) rotateZ(0deg); width: 39px; height: 200px; background: rgb(68, 68, 68);"
          />
          {/*<div
            class="face backface"
            style="transform: translate3d(-19.5px, -100px, -70px) rotateX(0deg) rotateY(180deg) rotateZ(0deg); width: 39px; height: 200px; background: rgb(54, 54, 54);"
          />
          <div
            class="face rightface"
            style="transform: translate3d(-50.5px, -100px, 0px) rotateX(0deg) rotateY(-90deg) rotateZ(0deg); width: 140px; height: 200px; background: rgb(63, 63, 63);"
          />
          <div
            class="face leftface"
            style="transform: translate3d(-89.5px, -100px, 0px) rotateX(0deg) rotateY(90deg) rotateZ(0deg); width: 140px; height: 200px; background: rgb(62, 62, 62);"
          />*/}
          <div
            class="face topface"
            style="transform: translate3d(-19.5px, -170px, 0px) rotateX(-90deg) rotateY(0deg) rotateZ(0deg); width: 39px; height: 140px; background: rgb(74, 74, 74);"
          />
          <div
            class="face bottomface"
            style="transform: translate3d(-19.5px, 30px, 0px) rotateX(90deg) rotateY(0deg) rotateZ(0deg); width: 39px; height: 140px; background: rgb(47, 47, 47);"
          />
        </div>
        <div
          class="box"
          style="transform: translate3d(150px, 280px, -250px) rotateX(0deg) rotateY(30deg) rotateZ(0deg)"
        >
          <div
            class="face frontface"
            style="transform: translate3d(-19.5px, -100px, 70px) rotateX(0deg) rotateY(0deg) rotateZ(0deg); width: 39px; height: 200px; background: rgb(68, 68, 68);"
          />
          {/*<div
            class="face backface"
            style="transform: translate3d(-19.5px, -100px, -70px) rotateX(0deg) rotateY(180deg) rotateZ(0deg); width: 39px; height: 200px; background: rgb(54, 54, 54);"
          />
          <div
            class="face rightface"
            style="transform: translate3d(-50.5px, -100px, 0px) rotateX(0deg) rotateY(-90deg) rotateZ(0deg); width: 140px; height: 200px; background: rgb(63, 63, 63);"
          />*/}
          <div
            class="face leftface"
            style="transform: translate3d(-89.5px, -100px, 0px) rotateX(0deg) rotateY(90deg) rotateZ(0deg); width: 140px; height: 200px; background: rgb(62, 62, 62);"
          />
          <div
            class="face topface"
            style="transform: translate3d(-19.5px, -170px, 0px) rotateX(-90deg) rotateY(0deg) rotateZ(0deg); width: 39px; height: 140px; background: rgb(74, 74, 74);"
          />
          <div
            class="face bottomface"
            style="transform: translate3d(-19.5px, 30px, 0px) rotateX(90deg) rotateY(0deg) rotateZ(0deg); width: 39px; height: 140px; background: rgb(47, 47, 47);"
          />
        </div>
        <div
          class="box"
          style="transform: translate3d(150px, 280px, -250px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)"
        >
          <div
            class="face frontface"
            style="transform: translate3d(-19.5px, -100px, 70px) rotateX(0deg) rotateY(0deg) rotateZ(0deg); width: 39px; height: 200px; background: rgb(68, 68, 68); border-radius: 2px"
          />
          {/*<div
            class="face backface"
            style="transform: translate3d(-19.5px, -100px, -70px) rotateX(0deg) rotateY(180deg) rotateZ(0deg); width: 39px; height: 200px; background: rgb(54, 54, 54);"
          />*/}
          <div
            class="face rightface"
            style="transform: translate3d(-50.5px, -100px, 0px) rotateX(0deg) rotateY(-90deg) rotateZ(0deg); width: 140px; height: 200px; background: rgb(63, 63, 63);"
          />
          <div
            class="face leftface"
            style="transform: translate3d(-89.5px, -100px, 0px) rotateX(0deg) rotateY(90deg) rotateZ(0deg); width: 140px; height: 200px; background: rgb(62, 62, 62);"
          />
          <div
            class="face topface"
            style="transform: translate3d(-19.5px, -170px, 0px) rotateX(-90deg) rotateY(0deg) rotateZ(0deg); width: 39px; height: 140px; background: rgb(74, 74, 74); border-radius: 2px"
          />
          {/*<div
            class="face bottomface"
            style="transform: translate3d(-19.5px, 30px, 0px) rotateX(90deg) rotateY(0deg) rotateZ(0deg); width: 39px; height: 140px; background: rgb(47, 47, 47);"
          />*/}
        </div>
        <div
          class="box"
          style="transform: translate3d(150px, 280px, -250px) rotateX(0deg) rotateY(-30deg) rotateZ(0deg)"
        >
          <div
            class="face frontface"
            style="transform: translate3d(-19.5px, -100px, 70px) rotateX(0deg) rotateY(0deg) rotateZ(0deg); width: 39px; height: 200px; background: rgb(75, 75, 75);"
          />
          {/*<div
            class="face backface"
            style="transform: translate3d(-19.5px, -100px, -70px) rotateX(0deg) rotateY(180deg) rotateZ(0deg); width: 39px; height: 200px; background: rgb(48, 48, 48);"
          />*/}
          <div
            class="face rightface"
            style="transform: translate3d(-50.5px, -100px, 0px) rotateX(0deg) rotateY(-90deg) rotateZ(0deg); width: 140px; height: 200px; background: rgb(66, 66, 66);"
          />
          {/*<div
            class="face leftface"
            style="transform: translate3d(-89.5px, -100px, 0px) rotateX(0deg) rotateY(90deg) rotateZ(0deg); width: 140px; height: 200px; background: rgb(63, 63, 63);"
          />*/}
          <div
            class="face topface"
            style="transform: translate3d(-19.5px, -170px, 0px) rotateX(-90deg) rotateY(0deg) rotateZ(0deg); width: 39px; height: 140px; background: rgb(87, 87, 87);"
          />
          <div
            class="face bottomface"
            style="transform: translate3d(-19.5px, 30px, 0px) rotateX(90deg) rotateY(0deg) rotateZ(0deg); width: 39px; height: 140px; background: rgb(33, 33, 33);"
          />
        </div>
        <div
          class="box"
          style="transform: translate3d(150px, 280px, -250px) rotateX(0deg) rotateY(-60deg) rotateZ(0deg)"
        >
          <div
            class="face frontface"
            style="transform: translate3d(-19.5px, -100px, 70px) rotateX(0deg) rotateY(0deg) rotateZ(0deg); width: 39px; height: 200px; background: rgb(68, 68, 68);"
          />
          {/*<div
            class="face backface"
            style="transform: translate3d(-19.5px, -100px, -70px) rotateX(0deg) rotateY(180deg) rotateZ(0deg); width: 39px; height: 200px; background: rgb(54, 54, 54);"
          />*/}
          <div
            class="face rightface"
            style="transform: translate3d(-50.5px, -100px, 0px) rotateX(0deg) rotateY(-90deg) rotateZ(0deg); width: 140px; height: 200px; background: rgb(63, 63, 63);"
          />
          {/*<div
            class="face leftface"
            style="transform: translate3d(-89.5px, -100px, 0px) rotateX(0deg) rotateY(90deg) rotateZ(0deg); width: 140px; height: 200px; background: rgb(62, 62, 62);"
          />*/}
          <div
            class="face topface"
            style="transform: translate3d(-19.5px, -170px, 0px) rotateX(-90deg) rotateY(0deg) rotateZ(0deg); width: 39px; height: 140px; background: rgb(74, 74, 74);"
          />
          <div
            class="face bottomface"
            style="transform: translate3d(-19.5px, 30px, 0px) rotateX(90deg) rotateY(0deg) rotateZ(0deg); width: 39px; height: 140px; background: rgb(47, 47, 47);"
          />
        </div>
        <div
          class="box"
          style="transform: translate3d(150px, 280px, -250px) rotateX(0deg) rotateY(-90deg) rotateZ(0deg)"
        >
          {/*<div
            class="face frontface"
            style="transform: translate3d(-19.5px, -100px, 70px) rotateX(0deg) rotateY(0deg) rotateZ(0deg); width: 39px; height: 200px; background: rgb(68, 68, 68);"
          />
          <div
            class="face backface"
            style="transform: translate3d(-19.5px, -100px, -70px) rotateX(0deg) rotateY(180deg) rotateZ(0deg); width: 39px; height: 200px; background: rgb(54, 54, 54);"
          />
          <div
            class="face rightface"
            style="transform: translate3d(-50.5px, -100px, 0px) rotateX(0deg) rotateY(-90deg) rotateZ(0deg); width: 140px; height: 200px; background: rgb(63, 63, 63);"
          />
          <div
            class="face leftface"
            style="transform: translate3d(-89.5px, -100px, 0px) rotateX(0deg) rotateY(90deg) rotateZ(0deg); width: 140px; height: 200px; background: rgb(62, 62, 62);"
          />*/}
          <div
            class="face topface"
            style="transform: translate3d(-19.5px, -170px, 0px) rotateX(-90deg) rotateY(0deg) rotateZ(0deg); width: 39px; height: 140px; background: rgb(74, 74, 74);"
          />
          {/*<div
            class="face bottomface"
            style="transform: translate3d(-19.5px, 30px, 0px) rotateX(90deg) rotateY(0deg) rotateZ(0deg); width: 39px; height: 140px; background: rgb(47, 47, 47);"
          />*/}
        </div>
        <div
          class="box"
          style="transform: translate3d(150px, 280px, -250px) rotateX(0deg) rotateY(-120deg) rotateZ(0deg)"
        >
          {/*<div
            class="face frontface"
            style="transform: translate3d(-19.5px, -100px, 70px) rotateX(0deg) rotateY(0deg) rotateZ(0deg); width: 39px; height: 200px; background: rgb(68, 68, 68);"
          />*/}
          <div
            class="face backface"
            style="transform: translate3d(-19.5px, -100px, -70px) rotateX(0deg) rotateY(180deg) rotateZ(0deg); width: 39px; height: 200px; background: rgb(54, 54, 54);"
          />
          <div
            class="face rightface"
            style="transform: translate3d(-50.5px, -100px, 0px) rotateX(0deg) rotateY(-90deg) rotateZ(0deg); width: 140px; height: 200px; background: rgb(63, 63, 63);"
          />
          {/*<div
            class="face leftface"
            style="transform: translate3d(-89.5px, -100px, 0px) rotateX(0deg) rotateY(90deg) rotateZ(0deg); width: 140px; height: 200px; background: rgb(62, 62, 62);"
          />*/}
          <div
            class="face topface"
            style="transform: translate3d(-19.5px, -170px, 0px) rotateX(-90deg) rotateY(0deg) rotateZ(0deg); width: 39px; height: 140px; background: rgb(74, 74, 74);"
          />
          <div
            class="face bottomface"
            style="transform: translate3d(-19.5px, 30px, 0px) rotateX(90deg) rotateY(0deg) rotateZ(0deg); width: 39px; height: 140px; background: rgb(47, 47, 47);"
          />
        </div>
        <div class="to-move" ref={c => (this.moving = c)}>
          <div
            class="box moving"
            style="transform: translate3d(150px, 130px, -250px) rotateX(0deg) rotateY(90deg) rotateZ(0deg)"
          >
            <div
              class="face frontface"
              style="transform: translate3d(-11.5px, -95px, 40px) rotateX(0deg) rotateY(0deg) rotateZ(0deg); width: 23px; height: 190px; background: rgb(180, 180, 204);"
            />
            <div
              class="face backface"
              style="transform: translate3d(-11.5px, -95px, -40px) rotateX(0deg) rotateY(180deg) rotateZ(0deg); width: 23px; height: 190px; background: rgb(126, 126, 143);"
            />
            <div
              class="face rightface"
              style="transform: translate3d(-28.5px, -95px, 0px) rotateX(0deg) rotateY(-90deg) rotateZ(0deg); width: 80px; height: 190px; background: rgb(162, 162, 184);"
            />
            <div
              class="face leftface"
              style="transform: translate3d(-51.5px, -95px, 0px) rotateX(0deg) rotateY(90deg) rotateZ(0deg); width: 80px; height: 190px; background: rgb(156, 156, 177);"
            />
            <div
              class="face topface"
              style="transform: translate3d(-11.5px, -135px, 0px) rotateX(-90deg) rotateY(0deg) rotateZ(0deg); width: 23px; height: 80px; background: rgb(204, 204, 231);"
            />
            {/*<div
              class="face bottomface"
              style="transform: translate3d(-11.5px, 55px, 0px) rotateX(90deg) rotateY(0deg) rotateZ(0deg); width: 23px; height: 80px; background: rgb(96, 96, 109);"
            />*/}
          </div>
          <div
            class="box moving"
            style="transform: translate3d(150px, 130px, -250px) rotateX(0deg) rotateY(60deg) rotateZ(0deg)"
          >
            <div
              class="face frontface"
              style="transform: translate3d(-11.5px, -95px, 40px) rotateX(0deg) rotateY(0deg) rotateZ(0deg); width: 23px; height: 190px; background: rgb(180, 180, 204);"
            />
            <div
              class="face backface"
              style="transform: translate3d(-11.5px, -95px, -40px) rotateX(0deg) rotateY(180deg) rotateZ(0deg); width: 23px; height: 190px; background: rgb(126, 126, 143);"
            />
            <div
              class="face rightface"
              style="transform: translate3d(-28.5px, -95px, 0px) rotateX(0deg) rotateY(-90deg) rotateZ(0deg); width: 80px; height: 190px; background: rgb(162, 162, 184);"
            />
            <div
              class="face leftface"
              style="transform: translate3d(-51.5px, -95px, 0px) rotateX(0deg) rotateY(90deg) rotateZ(0deg); width: 80px; height: 190px; background: rgb(156, 156, 177);"
            />
            <div
              class="face topface"
              style="transform: translate3d(-11.5px, -135px, 0px) rotateX(-90deg) rotateY(0deg) rotateZ(0deg); width: 23px; height: 80px; background: rgb(204, 204, 231);"
            />
            {/*<div
              class="face bottomface"
              style="transform: translate3d(-11.5px, 55px, 0px) rotateX(90deg) rotateY(0deg) rotateZ(0deg); width: 23px; height: 80px; background: rgb(96, 96, 109);"
            />*/}
          </div>
          <div
            class="box moving"
            style="transform: translate3d(150px, 130px, -250px) rotateX(0deg) rotateY(30deg) rotateZ(0deg)"
          >
            <div
              class="face frontface"
              style="transform: translate3d(-11.5px, -95px, 40px) rotateX(0deg) rotateY(0deg) rotateZ(0deg); width: 23px; height: 190px; background: rgb(180, 180, 204);"
            />
            <div
              class="face backface"
              style="transform: translate3d(-11.5px, -95px, -40px) rotateX(0deg) rotateY(180deg) rotateZ(0deg); width: 23px; height: 190px; background: rgb(126, 126, 143);"
            />
            <div
              class="face rightface"
              style="transform: translate3d(-28.5px, -95px, 0px) rotateX(0deg) rotateY(-90deg) rotateZ(0deg); width: 80px; height: 190px; background: rgb(162, 162, 184);"
            />
            <div
              class="face leftface"
              style="transform: translate3d(-51.5px, -95px, 0px) rotateX(0deg) rotateY(90deg) rotateZ(0deg); width: 80px; height: 190px; background: rgb(156, 156, 177);"
            />
            <div
              class="face topface"
              style="transform: translate3d(-11.5px, -135px, 0px) rotateX(-90deg) rotateY(0deg) rotateZ(0deg); width: 23px; height: 80px; background: rgb(204, 204, 231);"
            />
            {/*<div
              class="face bottomface"
              style="transform: translate3d(-11.5px, 55px, 0px) rotateX(90deg) rotateY(0deg) rotateZ(0deg); width: 23px; height: 80px; background: rgb(96, 96, 109);"
            />*/}
          </div>
          <div
            class="box moving"
            style="transform: translate3d(150px, 130px, -250px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)"
          >
            <div
              class="face frontface"
              style="transform: translate3d(-11.5px, -95px, 40px) rotateX(0deg) rotateY(0deg) rotateZ(0deg); width: 23px; height: 190px; background: rgb(180, 180, 204);"
            />
            <div
              class="face backface"
              style="transform: translate3d(-11.5px, -95px, -40px) rotateX(0deg) rotateY(180deg) rotateZ(0deg); width: 23px; height: 190px; background: rgb(126, 126, 143);"
            />
            <div
              class="face rightface"
              style="transform: translate3d(-28.5px, -95px, 0px) rotateX(0deg) rotateY(-90deg) rotateZ(0deg); width: 80px; height: 190px; background: rgb(162, 162, 184);"
            />
            <div
              class="face leftface"
              style="transform: translate3d(-51.5px, -95px, 0px) rotateX(0deg) rotateY(90deg) rotateZ(0deg); width: 80px; height: 190px; background: rgb(156, 156, 177);"
            />
            <div
              class="face topface"
              style="transform: translate3d(-11.5px, -135px, 0px) rotateX(-90deg) rotateY(0deg) rotateZ(0deg); width: 23px; height: 80px; background: rgb(204, 204, 231);"
            />
            {/*<div
              class="face bottomface"
              style="transform: translate3d(-11.5px, 55px, 0px) rotateX(90deg) rotateY(0deg) rotateZ(0deg); width: 23px; height: 80px; background: rgb(96, 96, 109);"
            />*/}
          </div>
          <div
            class="box moving"
            style="transform: translate3d(150px, 130px, -250px) rotateX(0deg) rotateY(-30deg) rotateZ(0deg)"
          >
            <div
              class="face frontface"
              style="transform: translate3d(-11.5px, -95px, 40px) rotateX(0deg) rotateY(0deg) rotateZ(0deg); width: 23px; height: 190px; background: rgb(195, 195, 221);"
            />
            <div
              class="face backface"
              style="transform: translate3d(-11.5px, -95px, -40px) rotateX(0deg) rotateY(180deg) rotateZ(0deg); width: 23px; height: 190px; background: rgb(114, 114, 129);"
            />
            <div
              class="face rightface"
              style="transform: translate3d(-28.5px, -95px, 0px) rotateX(0deg) rotateY(-90deg) rotateZ(0deg); width: 80px; height: 190px; background: rgb(168, 168, 190);"
            />
            <div
              class="face leftface"
              style="transform: translate3d(-51.5px, -95px, 0px) rotateX(0deg) rotateY(90deg) rotateZ(0deg); width: 80px; height: 190px; background: rgb(159, 159, 180);"
            />
            <div
              class="face topface"
              style="transform: translate3d(-11.5px, -135px, 0px) rotateX(-90deg) rotateY(0deg) rotateZ(0deg); width: 23px; height: 80px; background: rgb(231, 231, 255);"
            />
            {/*<div
              class="face bottomface"
              style="transform: translate3d(-11.5px, 55px, 0px) rotateX(90deg) rotateY(0deg) rotateZ(0deg); width: 23px; height: 80px; background: rgb(69, 69, 78);"
            />*/}
          </div>
          <div
            class="box moving"
            style="transform: translate3d(150px, 130px, -250px) rotateX(0deg) rotateY(-60deg) rotateZ(0deg)"
          >
            <div
              class="face frontface"
              style="transform: translate3d(-11.5px, -95px, 40px) rotateX(0deg) rotateY(0deg) rotateZ(0deg); width: 23px; height: 190px; background: rgb(180, 180, 204);"
            />
            <div
              class="face backface"
              style="transform: translate3d(-11.5px, -95px, -40px) rotateX(0deg) rotateY(180deg) rotateZ(0deg); width: 23px; height: 190px; background: rgb(126, 126, 143);"
            />
            <div
              class="face rightface"
              style="transform: translate3d(-28.5px, -95px, 0px) rotateX(0deg) rotateY(-90deg) rotateZ(0deg); width: 80px; height: 190px; background: rgb(162, 162, 184);"
            />
            <div
              class="face leftface"
              style="transform: translate3d(-51.5px, -95px, 0px) rotateX(0deg) rotateY(90deg) rotateZ(0deg); width: 80px; height: 190px; background: rgb(156, 156, 177);"
            />
            <div
              class="face topface"
              style="transform: translate3d(-11.5px, -135px, 0px) rotateX(-90deg) rotateY(0deg) rotateZ(0deg); width: 23px; height: 80px; background: rgb(204, 204, 231);"
            />
            {/*<div
              class="face bottomface"
              style="transform: translate3d(-11.5px, 55px, 0px) rotateX(90deg) rotateY(0deg) rotateZ(0deg); width: 23px; height: 80px; background: rgb(96, 96, 109);"
            />*/}
          </div>
          <div
            class="box moving"
            style="transform: translate3d(150px, 130px, -250px) rotateX(0deg) rotateY(-90deg) rotateZ(0deg)"
          >
            <div
              class="face frontface"
              style="transform: translate3d(-11.5px, -95px, 40px) rotateX(0deg) rotateY(0deg) rotateZ(0deg); width: 23px; height: 190px; background: rgb(180, 180, 204);"
            />
            <div
              class="face backface"
              style="transform: translate3d(-11.5px, -95px, -40px) rotateX(0deg) rotateY(180deg) rotateZ(0deg); width: 23px; height: 190px; background: rgb(126, 126, 143);"
            />
            <div
              class="face rightface"
              style="transform: translate3d(-28.5px, -95px, 0px) rotateX(0deg) rotateY(-90deg) rotateZ(0deg); width: 80px; height: 190px; background: rgb(162, 162, 184);"
            />
            <div
              class="face leftface"
              style="transform: translate3d(-51.5px, -95px, 0px) rotateX(0deg) rotateY(90deg) rotateZ(0deg); width: 80px; height: 190px; background: rgb(156, 156, 177);"
            />
            <div
              class="face topface"
              style="transform: translate3d(-11.5px, -135px, 0px) rotateX(-90deg) rotateY(0deg) rotateZ(0deg); width: 23px; height: 80px; background: rgb(204, 204, 231);"
            />
            {/*<div
              class="face bottomface"
              style="transform: translate3d(-11.5px, 55px, 0px) rotateX(90deg) rotateY(0deg) rotateZ(0deg); width: 23px; height: 80px; background: rgb(96, 96, 109);"
            />*/}
          </div>
          <div
            class="box moving"
            style="transform: translate3d(150px, 130px, -250px) rotateX(0deg) rotateY(-120deg) rotateZ(0deg)"
          >
            <div
              class="face frontface"
              style="transform: translate3d(-11.5px, -95px, 40px) rotateX(0deg) rotateY(0deg) rotateZ(0deg); width: 23px; height: 190px; background: rgb(180, 180, 204);"
            />
            <div
              class="face backface"
              style="transform: translate3d(-11.5px, -95px, -40px) rotateX(0deg) rotateY(180deg) rotateZ(0deg); width: 23px; height: 190px; background: rgb(126, 126, 143);"
            />
            <div
              class="face rightface"
              style="transform: translate3d(-28.5px, -95px, 0px) rotateX(0deg) rotateY(-90deg) rotateZ(0deg); width: 80px; height: 190px; background: rgb(162, 162, 184);"
            />
            <div
              class="face leftface"
              style="transform: translate3d(-51.5px, -95px, 0px) rotateX(0deg) rotateY(90deg) rotateZ(0deg); width: 80px; height: 190px; background: rgb(156, 156, 177);"
            />
            <div
              class="face topface"
              style="transform: translate3d(-11.5px, -135px, 0px) rotateX(-90deg) rotateY(0deg) rotateZ(0deg); width: 23px; height: 80px; background: rgb(204, 204, 231);"
            />
            {/*<div
              class="face bottomface"
              style="transform: translate3d(-11.5px, 55px, 0px) rotateX(90deg) rotateY(0deg) rotateZ(0deg); width: 23px; height: 80px; background: rgb(96, 96, 109);"
            />*/}
          </div>
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
