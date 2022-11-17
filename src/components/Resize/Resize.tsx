import { Resizable, ResizeHandle } from 'react-resizable';
import { ElementStyle } from '@/types/element';
import { Handle } from './Handle';

const handlePlacements: ResizeHandle[] = ['n', 's', 'e', 'w', 'ne', 'nw', 'se', 'sw'];

type ResizeProps = {
  selected: boolean;
  onResize: (style: ElementStyle) => void;
  children: React.ReactNode;
} & ElementStyle;

export function Resize({ selected, children, position, size, onResize }: ResizeProps) {
  return (
    <Resizable
      width={size.width}
      height={size.height}
      onResize={(_, { size, handle }) => {
        let topDiff = 0;
        if (handle.includes('n')) {
          topDiff = size.height - size.height;
        }

        let leftDiff = 0;
        if (handle.includes('w')) {
          leftDiff = size.width - size.width;
        }

        onResize({
          size: {
            width: Math.round(size.width),
            height: Math.round(size.height),
          },
          position: {
            top: position.top + topDiff,
            left: position.left + leftDiff,
          },
        });
      }}
      resizeHandles={handlePlacements}
      handle={(placement) => (
        <div>
          <Handle placement={placement} visible={selected} />
        </div>
      )}>
      <div>{children}</div>
    </Resizable>
  );
}
