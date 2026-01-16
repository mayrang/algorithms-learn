let graph = {
  1: [2, 3, 4],
  2: [1, 5],
  3: [1, 6, 7],
  4: [1, 8],
  5: [2, 9],
  6: [3, 10],
  7: [3],
  8: [4],
  9: [5],
  10: [6],
};

function bfsQueue(adj_graph, start_node) {
  let visited = [];
  let queue = [start_node];
  while (queue.length !== 0) {
    let curNode = queue.shift();
    visited.push(curNode);
    for (let node of adj_graph[curNode]) {
      if (!visited.includes(node)) {
        queue.push(node);
      }
    }
  }
  return visited;
}

console.log(bfsQueue(graph, 1));
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 이 출력되어야 합니다!
