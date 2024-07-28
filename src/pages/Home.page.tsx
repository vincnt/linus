import { AppShell, Textarea, Button, Select } from '@mantine/core';

import { useState } from 'react';
import Graph from '../graph';
import { useLazyPostRawSqlWrappedQuery, SqlQueryInput } from '../queries/linette';

export function HomePage() {
  const [fetchGraphData, { data: graphData, isLoading, error }] =
  useLazyPostRawSqlWrappedQuery();

  const [formData, setFormData] = useState<SqlQueryInput>({
    sqlString: '',
    defaultSchema: 's',
    defaultServer: 'ss',
    defaultDatabase: 'dbo',
  });
  const [graphLayout, setGraphLayout] = useState<string>('fcose');

  const handleFetchData = () => {
    fetchGraphData(formData); // Pass the input string to the query
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      sqlString: event.target.value,
    }));
  };

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
        { error && 'status' in error && <div> Error!!! {error.status} {JSON.stringify(error.data)}</div>}
        { !isLoading && graphData && graphLayout &&
              <Graph graphData={graphData} layout={graphLayout} />}
      </AppShell.Main>
      <AppShell.Aside>
        <AppShell.Section style={{ padding: '10px' }}>
        <div>
            Paste your sql here
        </div>
          <div>
          <Textarea
            resize="both"
            placeholder="Your sql"
            value={formData.sqlString}
            onChange={handleInputChange} />
          </div>
          <Button style={{ margin: 20 }} variant="filled" onClick={handleFetchData}>Load graph</Button>
          <Select
            label="Graph Layout Algorithm"
            placeholder="Pick value"
            data={['fcose', 'circle', 'avsdf', 'dagre', 'breadthfirst', 'random']}
            value={graphLayout}
            onChange={(e) => setGraphLayout(e!)}
            allowDeselect={false}
            defaultValue="fcose"
          />
        </AppShell.Section>
      </AppShell.Aside>
    </AppShell>
  );
}
