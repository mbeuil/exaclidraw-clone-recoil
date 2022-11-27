import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { MotionValue, motion } from 'framer-motion';

interface PageContainerProps {
  x: MotionValue<number>;
  y: MotionValue<number>;
  scale: MotionValue<number>;
  children: React.ReactNode;
}

const Canvas = styled(motion.div)`
  display: flex;
  flexdirection: column;
  width: 100vw;
  height: 100vh;
`;

export function PageContainer({ x, y, scale, children }: PageContainerProps) {
  return (
    // <Canvas style={{ x, y, scale, transformOrigin: `${x.get() * -1} ${y.get() * -1}` }}>
    <Canvas style={{ x, y, scale, transformOrigin: '50% 50%' }}>
      <Box flex={1} position="relative">
        {children}
      </Box>
    </Canvas>
  );
}
