import { useRecoilValue, useSetRecoilState } from 'recoil';

import { elementsAtom, selectedElementAtom } from '_/store/atoms';

import { PageContainer } from '../PageContainer/PageContainer';
import { Rectangle } from '../Rectangle/Rectangle';
import { Toolbar } from '../ToolBar/Tollbar';

export function Canvas() {
  const setSelectedElement = useSetRecoilState(selectedElementAtom);
  const elements = useRecoilValue(elementsAtom);

  return (
    <PageContainer
      onClick={() => {
        setSelectedElement(null);
      }}>
      <Toolbar />
      {elements.map((id) => (
        <Rectangle key={id} id={id} />
      ))}
    </PageContainer>
  );
}
