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


function DepthFirstSearch(graphObject, nodeIndex) {
  var marked = [];
  var count = 0;

  dfs(graphObject, nodeIndex);

  function dfs(graphObject, nodeIndex) {

    marked[nodeIndex] = true;
    count++;

    graphObject.adjacent[nodeIndex].forEach(function(d){

      if (!marked[d]) {
        dfs(graph, d);
      }

    });

    return;

  }

  return { count: count, marked: marked };

}

var test = DepthFirstSearch(graph, 0);

console.log(test);
