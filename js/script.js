let divBuilder = (i) => {
  let square = document.createElement('div');

  square.className = `square colorCombination${Math.floor(Math.random() * (7 - 1 + 1)) + 1}`;

  square.id = `s${i}`;

  document.getElementById('squares').appendChild(square);
}

let childDivBuilder = (i) => {
  let rectangle1 = document.createElement('div');
  let rectangle2 = document.createElement('div');

  rectangle1.className = 'rectangle';
  rectangle1.id = 'first';

  rectangle2.className = 'rectangle';
  rectangle2.id = 'second';

  document.getElementById(`s${i + 1}`).appendChild(rectangle1);
  document.getElementById(`s${i + 1}`).appendChild(rectangle2);
}

for (i = 0; i < 60; i++) {
  divBuilder(i + 1)
  childDivBuilder(i)
}

document.addEventListener('click', function (e) {
  let elementId = e.target.parentNode.id
  let currentColorCombo = e.target.parentNode.classList[1];

  document.querySelector(`#${elementId}`).classList.replace(currentColorCombo, `colorCombination${Math.floor(Math.random() * (7 - 1 + 1)) + 1}`)
});


