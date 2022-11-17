import { DraggableCore } from 'react-draggable';
import { ElementStyle } from '@/types/element';

interface DragProps {
  position: ElementStyle['position'];
  onDrag: (position: ElementStyle['position']) => void;
  children: React.ReactNode;
}

export function Drag({ position, onDrag, children }: DragProps) {
  return (
    <DraggableCore
      onDrag={(e: any) => {
        onDrag({
          left: e.movementX + position.left,
          top: e.movementY + position.top,
        });
      }}>
      {children}
    </DraggableCore>
  );
}
