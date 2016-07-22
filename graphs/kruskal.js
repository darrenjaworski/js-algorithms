// Minimal adjustment to the graph object.
// The weight is added to the adjacency and the edge.

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
  if (graph.adjacent[target] === undefined) {
    graph.adjacent[target] = [];
  }

  graph.adjacent[source].push(edge);
  graph.adjacent[target].push(edge);

  return edge;
});



var kruskal = {
  mst: [],
  minPQ: [],
  kruskalMST: function(graph) {
    var self = kruskal;

    while (self.minPQ.length > 0 && self.mst.length < graph.nodes.length) {

      var edge = self.delMin(self.minPQ);
      var v = self.either(edge);
      var w = self.other(edge, v);
      if (self.connected(v, w)) {
        continue;
      }
      self.union(v, w);
      self.mst.push(edge);

    }

    return self.mst;

  },
  connected: function(p, q) {
    var self = kruskal;

    return self.find(p) == self.find(q);
  },
  find: function() {

  },
  union: function() {

  },
  other: function(edge, node) {
    if (node == edge.source) {
      return edge.target;
    } else if (node == edge.target) {
      return edge.source;
    } else {
      throw "Inconsistent edge";
    }
  },
  either: function(edge) {
    return edge.source;
  },
  delMin: function(priorityQueue) {
    var lowestWeightEdge = priorityQueue[0];
    var lowestWeightEdgeIndex = 0;

    priorityQueue.forEach(function(d, i){
      if (lowestWeightEdge.weight < d.weight) {
        lowestWeightEdge = d;
        lowestWeightEdgeIndex = i;
      }
    });

    priorityQueue.splice(lowestWeightEdgeIndex, 1);

    return lowestWeightEdge;
  }
};
