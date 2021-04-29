let divBuilder = (node) => {
  let square = document.createElement('div');

  square.className = 'square';

  square.id = node;

  document.getElementById('squares').appendChild(square);
}

let nodes = [...Array(59)];

for(const index of nodes.keys()) {
  divBuilder(index + 1)
}

divBuilder()