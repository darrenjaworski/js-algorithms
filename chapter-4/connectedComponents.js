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

  var edge = {
    source: source,
    target: target
  };

  if (graph.adjacent[source] === undefined) {
    graph.adjacent[source] = [];
  }
  if (graph.adjacent[target] === undefined) {
    graph.adjacent[target] = [];
  }

  graph.adjacent[source].push(target);
  graph.adjacent[target].push(source);

  return edge;
});


var ConnectedComponents = {
  marked: [],
  count: 0,
  id: [],
  cc: function(graphObject) {
    var self = ConnectedComponents;

    for (var i = 0; i < graphObject.nodes.length; i++) {
      if (!self.marked[i]) {
        self.dfs(graphObject, i);
        self.count++;
      }
    }

    return;
  },
  dfs: function(graphObject, nodeIndex) {
    var self = ConnectedComponents;

    self.marked[nodeIndex] = true;
    self.id[nodeIndex] = self.count;

    graphObject.adjacent[nodeIndex].forEach(function(d){

      if (!self.marked[d]) {
        self.dfs(graphObject, d);
      }

    });

    return;
  },
  connected: function(v, w) {
    var self = ConnectedComponents;

    return self.id[v] == self.id[w];
  }
};

ConnectedComponents.cc(graph);
