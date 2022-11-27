import * as React from 'react';

import { useDrag } from '@use-gesture/react';
import { MotionValue, motion, useMotionValue } from 'framer-motion';
import { useRecoilState, useRecoilValue } from 'recoil';

import { elementFamily, selectedElementAtom } from '_/store/atoms';

import { RectangleInner } from './RectangleInner';

interface RectangleProps {
  id: number;
  scale: MotionValue<number>;
}

export const Rectangle = ({ id, scale }: RectangleProps) => {
  const [selectedElement, setSelectedElement] = useRecoilState(selectedElementAtom);
  const element = useRecoilValue(elementFamily(id));
  const ref = React.useRef(null);
  const x = useMotionValue(element.style.position.x);
  const y = useMotionValue(element.style.position.y);
  const width = useMotionValue(element.style.size.width);
  const height = useMotionValue(element.style.size.height);

  useDrag(
    ({ delta }) => {
      // console.log('%cold x', 'color:ligthgreen', x.get(), 'new x', x.get() + delta[0]);
      // console.log('%cold y', 'color:ligthgreen', y.get(), 'new y', y.get() + delta[1]);
      console.log(scale.get());
      // x.set(x.get() + delta[0]);
      // y.set(y.get() + delta[1]);
      x.set(x.get() + delta[0] / scale.get());
      y.set(y.get() + delta[1] / scale.get());
    },
    { target: ref },
  );

  return (
    <motion.div
      ref={ref}
      // drag
      // dragMomentum={false}
      // {...bindScroll()}
      style={{ x, y, width, height }}
      onMouseDown={() => setSelectedElement(id)}
      onPointerDown={(e) => {
        e.stopPropagation();
      }}
      onClick={(e) => {
        e.stopPropagation();
      }}
      // onDragEnd={() => {
      //   setElement({
      //     style: {
      //       ...element.style,
      //       position: { x: x.get(), y: y.get() },
      //     },
      //   });
      // }}
    >
      <RectangleInner selected={id === selectedElement} />
    </motion.div>
  );
};
