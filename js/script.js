let divBuilder = (indexId) => {
  let square = document.createElement('div');

  square.className = 'square';

  square.id = indexId;

  document.getElementById('squares').appendChild(square);
}

// let nodes = [...Array(60)];

// for(const index of nodes.keys()) {
//   divBuilder(Number(index) + 1)

for(i=0;i<60;i++) {
  divBuilder(i+1)
}