import { Stylesheet as CSStylesheet } from 'cytoscape';

export default [
  {
    selector: 'node',
    css: {
      'background-color': 'red',
      'font-size': 3,
      width: 5,
      height: 5,
      'text-valign': 'center',
      'text-halign': 'center',
    },
  },
  {
    selector: 'node[type="unknown"]',
    css: {
      'background-color': 'black',
      'border-color': 'red',
      shape: 'ellipse',
      'border-width': '3px',
      width: 10,
      height: 10,
      label: 'data(label)',
    },
  },
  {
    selector: 'node[type="proc"]',
    css: {
      'background-color': '#fafafa',
      'border-color': 'red',
      'border-width': '0.5px',
      shape: 'diamond',
      width: 40,
      height: 40,
      label: 'data(label)',
    },
  },
  {
    selector: 'node[type="view"]',
    css: {
      'background-color': '#fafafa',
      'border-color': '#76a1d6',
      'border-width': '0.5px',
      shape: 'diamond',
      width: 30,
      height: 30,
      label: 'data(label)',
    },
  },
  {
    selector: 'node[type="table"]',
    css: {
      'border-color': '#77d99d',
      'border-width': '0.5px',
      'background-color': '#fafafa',
      shape: 'rectangle',
      width: 30,
      height: 10,
      label: 'data(label)',
    },
  },
  {
    selector: 'node[type="temptable"]',
    css: {
      'border-color': 'yellow',
      'border-width': '0.5px',
      'background-color': '#fafafa',
      shape: 'rectangle',
      width: 30,
      height: 10,
      label: 'data(label)',
    },
  },
  {
    selector: 'node[type="entry"]',
    css: {
      'background-color': 'black',
      'border-color': 'red',
      shape: 'ellipse',
      'border-width': '0.5px',
      width: 10,
      height: 10,
      label: 'data(label)',
    },
  },
  {
    selector: 'node[type="exit2"]',
    css: {
      'background-color': 'black',
      'border-color': 'red',
      shape: 'ellipse',
      'border-width': '3px',
      width: 10,
      height: 10,
      label: 'data(label)',
    },
  },
  {
    selector: 'edge',
    css: {
      width: 2,
      'line-color': 'lightgray',
      'target-arrow-color': 'gray',
      'target-arrow-shape': 'vee',
      'curve-style': 'straight',
      'font-size': 3,
    },
  },
  {
    selector: 'edge[type="labeled"]',
    css: {
      label: 'data(label)',
      'font-size': 3,
    },
  },
  {
    selector: 'node[type="answer"]:selected',
    css: {
      'background-color': '#77d99d',
      'border-color': '#000000',
      'border-width': '1px',
    },
  },
  {
    selector: 'node[type="question"]:selected',
    css: {
      'background-color': '#76a1d6',
      'border-color': '#000000',
      'border-width': '1px',
    },
  },
  {
    selector: 'node[type="final-page"]:selected',
    css: {
      'background-color': '#76a1d6',
      'border-color': '#000000',
      'border-width': '1px',
    },
  },
  {
    selector: 'edge:selected',
    css: {
      width: 5,
      'line-color': 'lightblue',
      'target-arrow-color': 'gray',
      'target-arrow-shape': 'vee',
      'curve-style': 'straight',
      'font-size': 3,
    },
  },
] as CSStylesheet[];
