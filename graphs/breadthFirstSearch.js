var d3 = require('d3-array');

// generate random graph object
var nodeTotal = 11;
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

  while (source == target) {
    target = Math.floor(Math.random() * nodeTotal);
  }

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


var BreadthFirstSearch = {
  marked: [],
  edgeTo: [],
  count: 0,
  bfs: function(graphObject, nodeIndex) {
    var self = BreadthFirstSearch;
    var queue = [];

    self.marked[nodeIndex] = true;
    queue.push(nodeIndex);

    while (queue.length > 0) {
      var v = queue.shift();
      graphObject.adjacent[v].forEach(markedAdjacent);
    }

    function markedAdjacent(d) {
      if (!self.marked[d]) {
        self.edgeTo[d] = v;
        self.marked[d] = true;
        queue.push(d);
      }
    }

  },
  hasPathTo: function(endIndex){
    var self = BreadthFirstSearch;
    return self.marked[endIndex];
  },
  pathTo: function(graphObject, startIndex, endIndex) {
    var self = BreadthFirstSearch;

    self.bfs(graphObject, startIndex);

    if (!self.hasPathTo(endIndex)) {
      return null;
    }
    var path = [];
    for (var i = endIndex; i != startIndex; i = self.edgeTo[i]) {
      path.push(i);
    }
    path.push(startIndex);
    return path.reverse();
  }
};

var test = BreadthFirstSearch.pathTo(graph, 0, 10);

console.log(test);
