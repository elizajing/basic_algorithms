const graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E', 'F'],
    'C': ['G'],
    'D': [],
    'E': [],
    'F': ['H'],
    'G': ['I'],
    'H': [],
    'I': [],
}

const bfs = (graph, startNode) => {
    visited = [];
    queue = [];

    visited.push(node);
    queue.push(node);

    while(queue.length !== 0) {
        const s = queue.shift();
        console.log(s);
        for(const n in graph[s]) {
            if(!graph[s].include(n)){
                visited.push(n);
                queue.push(n);
            }
        }
    }
}
