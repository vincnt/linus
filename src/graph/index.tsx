import React, { memo, MutableRefObject } from 'react';
import cytoscape, { Core } from 'cytoscape';
import CytoscapeComponent from 'react-cytoscapejs';
import fcose from 'cytoscape-fcose';
import avsdf from 'cytoscape-avsdf';
import dagre from 'cytoscape-dagre';
import elk from 'cytoscape-elk';
import { TElements } from './elements';
import stylesheet from './stylesheet';

cytoscape.use(fcose);
cytoscape.use(avsdf);
cytoscape.use(dagre);
cytoscape.use(elk);

interface GraphProps {
  graphData: TElements;
  layout: string;
  cyRef: MutableRefObject<Core | null>
}

const Graph = memo(({ graphData, layout, cyRef }: GraphProps) => {
  const normalizedElements = graphData
    ? CytoscapeComponent.normalizeElements(graphData)
    : undefined;

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      {!normalizedElements && <div>Loading</div>}

      {normalizedElements && (
        <CytoscapeComponent
          elements={normalizedElements}
          layout={{ name: layout }}
          stylesheet={stylesheet}
          style={{ width: '100vw', height: '100vh' }}
          cy={(cy) => {
            cyRef.current = cy;
          }}
        />
      )}
    </div>
  );
});

// Export the memoized component
export default Graph;
