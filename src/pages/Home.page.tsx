import { AppShell } from '@mantine/core';

import Graph from '../graph';
import { useGetLinetteElementsQuery } from '../queries/linette';

export function HomePage() {
  const { data: graphData, isLoading } = useGetLinetteElementsQuery(
    'unusedstringbutkeepingasanexample'
  );
  return (
    <AppShell
      header={{ height: 30 }}
      padding="md"
      aside={{
        width: 300,
        breakpoint: 'sm',
      }}
    >
      <AppShell.Header>
        <div>Linus!!</div>
      </AppShell.Header>

      <AppShell.Main>
        { isLoading && <div>Loading graph</div>}
        { !isLoading && graphData &&
              <Graph graphData={graphData} />}
      </AppShell.Main>
      <AppShell.Aside>
        <AppShell.Section>
          <div>
            test shell
          </div>
        </AppShell.Section>
      </AppShell.Aside>
    </AppShell>
  );
}
