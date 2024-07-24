import React, { memo } from 'react';
import cytoscape from 'cytoscape';
import CytoscapeComponent from 'react-cytoscapejs';
import fcose from 'cytoscape-fcose';
import { TElements } from './elements';
import stylesheet from './stylesheet';

cytoscape.use(fcose);

interface GraphProps {
  graphData: TElements; // Wrap TElements inside a 'data' property
}

const Graph = memo(({ graphData }: GraphProps) => {
  const normalizedElements = graphData
    ? CytoscapeComponent.normalizeElements(graphData)
    : undefined;

  const layout = { name: 'fcose' };

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      {!normalizedElements && <div>Loading</div>}

      {normalizedElements && (
        <CytoscapeComponent
          elements={normalizedElements}
          layout={layout}
          stylesheet={stylesheet}
          style={{ width: '100vw', height: '100vh' }}
        />
      )}
    </div>
  );
});

// Export the memoized component
export default Graph;
