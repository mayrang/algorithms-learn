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
let visited = [];

function dfsRecursion(adjacent_graph, cur_node, visited_array) {
  visited_array.push(cur_node);
  for (let node of graph[cur_node]) {
    let item = visited.find((val) => val === node);
    console.log(cur_node, item);

    if (item) {
      continue;
    } else {
      dfsRecursion(adjacent_graph, node, visited_array);
    }
  }
  return;
}

dfsRecursion(graph, 1, visited);
console.log(visited);
