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


var DepthFirstSearch = {
  marked: [],
  edgeTo: [],
  source: 0,
  count: 0,
  dfs: function(graphObject, nodeIndex) {

    var self = DepthFirstSearch;

    dfs(graphObject, nodeIndex);

    function dfs(graphObject, nodeIndex) {

      self.marked[nodeIndex] = true;
      self.count++;

      graphObject.adjacent[nodeIndex].forEach(function(d){

        if (!self.marked[d]) {
          self.edgeTo[d] = nodeIndex;
          dfs(graphObject, d);
        }

      });

      return;

    }

    return;
  },
  hasPathTo: function(endIndex) {
    var self = DepthFirstSearch;

    return self.marked[endIndex];
  },
  pathTo: function(graphObject, startIndex, endIndex) {
    var self = DepthFirstSearch;

    self.dfs(graphObject, startIndex);

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

var test = DepthFirstSearch.pathTo(graph, 0, 10);

console.log(test);
