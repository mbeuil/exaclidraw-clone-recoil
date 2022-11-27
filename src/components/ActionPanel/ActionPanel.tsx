import { Button, ButtonGroup } from '@chakra-ui/react';
import { MotionValue } from 'framer-motion';

interface ActionsPanelProps {
  scale: MotionValue<number>;
}

export function ActionPanel({ scale }: ActionsPanelProps) {
  return (
    <ButtonGroup size="sm" spacing="2" position="fixed" bottom="5" left="5">
      <Button onClick={() => scale.set(scale.get() + 0.3)}>+</Button>
      <Button onClick={() => scale.set(scale.get() - 0.3)}>-</Button>
      <Button onClick={() => scale.set(1)} colorScheme="blue">
        reset
      </Button>
    </ButtonGroup>
  );
}
