import { motion, useMotionValue } from 'framer-motion';
import { useRecoilState } from 'recoil';

import { elementFamily, selectedElementAtom } from '_/store/atoms';

import { RectangleInner } from './RectangleInner';

interface RectangleProps {
  id: number;
}

export const Rectangle = ({ id }: RectangleProps) => {
  const [selectedElement, setSelectedElement] = useRecoilState(selectedElementAtom);
  const [element, setElement] = useRecoilState(elementFamily(id));
  const x = useMotionValue(element.style.position.x);
  const y = useMotionValue(element.style.position.y);
  const width = useMotionValue(element.style.size.width);
  const height = useMotionValue(element.style.size.height);

  return (
    <motion.div
      drag
      dragMomentum={false}
      style={{ x, y, width, height }}
      onMouseDown={() => setSelectedElement(id)}
      onClick={(e) => e.stopPropagation()}
      onDragEnd={() => {
        setElement({
          style: {
            ...element.style,
            position: { x: x.get(), y: y.get() },
          },
        });
      }}>
      <RectangleInner selected={id === selectedElement} />
    </motion.div>
  );
};
