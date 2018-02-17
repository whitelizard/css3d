import Sprite3D from './sprite3d';
export Sprite3D from './sprite3d';

export function colProc(rgb, proc, noStr) {
  const newCol = [
    Math.min((rgb[0] * (100 + proc) / 100).toFixed(0), 255),
    Math.min((rgb[1] * (100 + proc) / 100).toFixed(0), 255),
    Math.min((rgb[2] * (100 + proc) / 100).toFixed(0), 255)
  ];
  if (rgb.length === 4) newCol.push(rgb[3]);
  if (noStr) return newCol;
  return `rgba(${newCol[0]}, ${newCol[1]}, ${newCol[2]}, ${newCol[3] || 1})`;
}

export function spriteBox({
  dim = [100, 100, 100],
  pos = [0, 0, 0],
  rot = [0, 0, 0],
  name = 'box',
  rgba = [90, 90, 110, 0.95],
  borderOffset = -20,
  colorDiffFactor = 1
}) {
  const [dx, dy, dz] = dim;
  const [px, py, pz] = pos;
  const [rx, ry, rz] = rot;
  const box = new Sprite3D()
    .className(name)
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
      .update()
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
      .update()
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
      .update()
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
      .update()
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
      .update()
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
      .update()
  );
  return box;
}
