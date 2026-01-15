let graph = {
  1: [2, 5, 9],
  2: [1, 3],
  3: [2, 4],
  4: [3],
  5: [1, 6, 8],
  6: [5, 7],
  7: [6],
  8: [5],
  9: [1, 10],
  10: [9],
};

function dfsStack(adjacent_graph, start_node) {
  let stack = [start_node];
  let visited = [];
  while (stack.length !== 0) {
    let item = stack.pop();
    visited.push(item);
    for (let node of adjacent_graph[item]) {
      if (!visited.includes(node)) {
        stack.push(node);
      }
    }
  }
  return visited;
}

console.log(dfsStack(graph, 1));
