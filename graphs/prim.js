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

// Prim's algorithm is a greedy algorithm that finds a
// minimum spanning tree for a weighted undirected graph.
// This means it finds a subset of the edges that forms a tree
// that includes every vertex, where the total weight
// of all the edges in the tree is minimized.

var prim = {
  edgeTo: [],
  distTo: [],
  marked: [],
  queue: [],
  indexMinPQ: [],
  minPQ: [],
  mst: [],
  lazyPrimMST: function(graph) {
    var self = prim;

    self.visit(graph, 0);
    while(self.minPQ.length > 0) {
      var edge = self.delMin(self.minPQ);
      var v = self.either(edge);
      var w = self.other(edge, v);

      if (self.marked[v] && self.marked[w]) {
        continue;
      }

      self.mst.push(edge);

      if (!self.marked[v]) {
        self.visit(graph, v);
      }
      if (!self.marked[w]) {
        self.visit(graph, w);
      }
    }
    return self.mst;
  },
  eagerPrimMST: function(graph) {
    var self = prim;

    for (var v = 0; v < graph.nodes.length; v++) {
      self.distTo[v] = 0;
    }

    self.distTo[0] = 0;
    self.minPQ.push([0]);

    while(self.minPQ.length > 0) {
      self.eagerVisit(graph, self.delMin(self.minPQ));
    }

    return self.mst;

  },
  eagerVisit: function(graph, node) {
    var self = prim;

    self.marked[node] = true;
    graph.adjacent[node].forEach(function(d){
      var w = self.other(d, node);
      if (self.marked[w]) {
        continue;
      }
      if (d.weight < self.distTo[w]) {
        self.edgeTo[w] = d;
        self.distTo[w] = d.weight;
        if (self.minPQ.contains(w)) {
          self.change(self.minPQ, w, self.distTo[w]);
        } else {
          self.insert(self.minPQ, w, self.distTo[w]);
        }
      }
    });

  },
  visit: function(graph, node) {
    var self = prim;

    self.marked[node] = true;

    graph.adjacent[node].forEach(function(d){
        if ( !self.marked[self.other(d, node)] ) {
          self.minPQ.push(d);
        }
    });
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

var lazy = prim.lazyPrimMST(graph);
var eager = prim.eagerPrimMST(graph);

console.log(lazy);
console.log(eager);
