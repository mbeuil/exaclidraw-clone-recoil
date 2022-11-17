import { Box } from '@chakra-ui/react';
import { ElementStyle } from '/types/element';

type RectangleContainerProps = {
  position: ElementStyle['position'];
  size: ElementStyle['size'];
  onSelect: () => void;
  children: React.ReactNode;
};

export function RectangleContainer({
  children,
  size,
  position,
  onSelect,
}: RectangleContainerProps) {
  return (
    <Box
      position="absolute"
      style={{ ...size, ...position }}
      onMouseDown={() => onSelect()}
      onClick={(e) => e.stopPropagation()}>
      {children}
    </Box>
  );
}
