import { Box } from '@chakra-ui/react';

import { getBorderColor } from '_/helpers';

export const RectangleInner = ({ selected }: { selected: boolean }) => {
  return (
    <Box
      position="absolute"
      border={`1px solid ${getBorderColor(selected)}`}
      transition="0.1s border-color ease-in-out"
      width="inherit"
      height="inherit"
      display="flex"
      padding="2px">
      <Box
        flex="1"
        border="3px dashed #101010"
        borderRadius="255px 15px 225px 15px/15px 225px 15px 255px"
      />
    </Box>
  );
};
