import * as React from 'react';

import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useGesture } from '@use-gesture/react';
import { motion, useMotionValue } from 'framer-motion';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { elementsAtom, selectedElementAtom } from '_/store/atoms';

import { ActionPanel } from '../ActionPanel/ActionPanel';
import { Rectangle } from '../Rectangle/Rectangle';
import { Toolbar } from '../ToolBar/Tollbar';

const ControlSection = styled(motion.div)`
  display: flex;
  flexdirection: column;
  width: 100vw;
  height: 100vh;
`;
const ZoomSection = styled(motion.div)`
  display: flex;
  flexdirection: column;
  width: 100vw;
  height: 100vh;
`;
const ScrollSection = styled(motion.div)`
  display: flex;
  flexdirection: column;
  width: 100vw;
  height: 100vh;
`;

export function Canvas() {
  const elements = useRecoilValue(elementsAtom);
  const setSelectedElement = useSetRecoilState(selectedElementAtom);
  const ref = React.useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useMotionValue(1);

  const bind = useGesture({
    onDrag: ({ delta }) => {
      x.set(x.get() + delta[0] / scale.get());
      y.set(y.get() + delta[1] / scale.get());
    },
    onWheel: ({ delta }) => {
      const newValue = scale.get() + delta[1] * 0.03;
      scale.set(newValue > 0 ? newValue : 0);
    },
  });

  return (
    <>
      <Toolbar />
      <ControlSection {...bind()}>
        <ZoomSection
          style={{ scale, transformOrigin: '50% 50%' }}
          onClick={() => setSelectedElement(null)}>
          <ScrollSection style={{ x, y }}>
            <Box flex={1} position="relative">
              {elements.map((id) => (
                <Rectangle key={id} id={id} scale={scale} />
              ))}
            </Box>
          </ScrollSection>
        </ZoomSection>
      </ControlSection>
      <ActionPanel scale={scale} />
    </>
  );
}
