import { AppShell, Textarea, Button, Select } from '@mantine/core';

import { useEffect, useRef, useState } from 'react';
import cytoscape from 'cytoscape';
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
  const cyRef = useRef<cytoscape.Core | null>(null);

  const handleFetchData = () => {
    fetchGraphData(formData); // Pass the input string to the query
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      sqlString: event.target.value,
    }));
  };
  //
  // const layoutOptions = useCallback(() => {
  //   return {
  //     name: graphLayout,
  //     randomize: false,
  //     idealEdgeLength: 100,
  //     nodeOverlap: 20,
  //     refresh: 20,
  //     fit: true,
  //     padding: 30,
  //     animate: true,
  //     animationDuration: 1000,
  //     nodeDimensionsIncludeLabels: true,
  //     // Add more fcose-specific options here
  //   };
  // }, [graphLayout]);

  useEffect(() => {
    if (graphLayout === 'fcose') {
      cyRef.current?.layout({
        name: graphLayout,
        animate: false,
      });
    }
    if (graphLayout === 'elk') {
      cyRef.current?.layout({
        name: 'elk',
        elk: {
          algorithm: 'layered',
          'elk.hierarchyHandling': 'INCLUDE_CHILDREN',
        },
      }).run();
    }
  }, [graphLayout]);

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
              <Graph graphData={graphData} layout={graphLayout} cyRef={cyRef} />}
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
            data={['fcose', 'breadthfirst', 'random', 'elk']} // these suck (circle, avsdf, dagre). breadth first is kinda nice but too flat?
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
