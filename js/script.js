let divBuilder = (i) => {
  let square = document.createElement('div');

  square.className = 'square';

  square.id = i;

  document.getElementById('squares').appendChild(square);
}

let childDivBuilder = (i) => {
  let rectangle1 = document.createElement('div');
  let rectangle2 = document.createElement('div');

  rectangle1.className = 'rectangle';
  rectangle1.id = 'first';

  rectangle2.className = 'rectangle';
  rectangle2.id = 'second';

  document.getElementById(i + 1).appendChild(rectangle1);
  document.getElementById(i + 1).appendChild(rectangle2);
}

for(i=0;i<60;i++) {
  divBuilder(i+1)
  childDivBuilder(i)
}



