// Minimal adjustment to the graph object.
// The weight is added to the adjacency and the edge.
// directed graph

var d3 = require('d3-array');

// generate random graph object
var nodeTotal = 10;
var edgeTotal = nodeTotal * 1.5;

var graph = {
  nodes: [],
  edges: [],
  adjacent: []
};

graph.nodes = d3.range(nodeTotal).map(function(i) {
  var node = { id : i };
  return node;
});

graph.edges = d3.range(edgeTotal).map(function(i) {
  var source = i < nodeTotal ? i : Math.floor(Math.random() * nodeTotal);
  var target = Math.floor(Math.random() * nodeTotal);
  var weight = Math.random();

  while (source == target) {
    target = Math.floor(Math.random() * nodeTotal);
  }

  var edge = {
    source: source,
    target: target,
    weight: weight
  };

  if (graph.adjacent[source] === undefined) {
    graph.adjacent[source] = [];
  }

  graph.adjacent[source].push(edge);

  graph.adjacent[source].forEach(function(d, i) {
    if (d.target == target) {
      console.log(d);
    }
    return d.target == target ? graph.adjacent[source].slice(i, 1) : null;
  });

  return edge;
});

console.log(graph.adjacent);
