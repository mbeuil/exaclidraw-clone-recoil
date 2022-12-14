import { Icon, IconButton, VStack } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { Square } from 'react-feather';
import { useSetRecoilState } from 'recoil';

import { elementsAtom } from '_/store/atoms';

const ToolBarContainer = styled(VStack)`
  position: fixed;
`;

export const Toolbar = () => {
  const setElements = useSetRecoilState(elementsAtom);

  return (
    <ToolBarContainer
      position="absolute"
      top="20px"
      left="20px"
      backgroundColor="white"
      padding={2}
      boxShadow="md"
      borderRadius="md"
      spacing={2}
      objectPosition="fixed"
      zIndex={999}>
      <IconButton
        onClick={() => {
          setElements((elements) => [...elements, elements.length]);
        }}
        aria-label="Add rectangle"
        icon={<Icon style={{ width: 24, height: 24 }} as={Square} />}
      />
    </ToolBarContainer>
  );
};
