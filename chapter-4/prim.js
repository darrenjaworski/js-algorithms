// Minimal adjustment to the graph object.
// The weight is added to the adjacency and the edge.

var d3 = require('d3-array');

// generate random graph object
var nodeTotal = 50;
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

  var edge = {
    source: source,
    target: target,
    weight: weight
  };

  if (graph.adjacent[source] === undefined) {
    graph.adjacent[source] = [];
  }
  if (graph.adjacent[target] === undefined) {
    graph.adjacent[target] = [];
  }

  graph.adjacent[source].push([target, weight]);
  graph.adjacent[target].push([source, weight]);

  return edge;
});

console.log(graph);

// Prim's algorithm is a greedy algorithm that finds a
// minimum spanning tree for a weighted undirected graph.
// This means it finds a subset of the edges that forms a tree
// that includes every vertex, where the total weight
// of all the edges in the tree is minimized.
