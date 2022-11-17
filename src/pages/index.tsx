import { PageContainer } from '@/components/PageContainer/PageContainer';
import { Rectangle } from '@/components/Rectangle/Rectangle';
import { Toolbar } from '@/components/ToolBar/Tollbar';

export default function Home() {
  return (
    <PageContainer
      onClick={() => {
        console.log('Deselect all elements!');
      }}>
      <Toolbar />
      <Rectangle />
    </PageContainer>
  );
}
