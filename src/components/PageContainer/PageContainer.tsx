import { Box, Flex } from '@chakra-ui/react';

interface PageContainerProps {
  children: React.ReactNode;
  onClick: () => void;
}

export function PageContainer({ onClick, children }: PageContainerProps) {
  return (
    <Flex direction="column" width="100vw" height="100vh" onClick={onClick}>
      <Box flex={1} position="relative">
        {children}
      </Box>
    </Flex>
  );
}
