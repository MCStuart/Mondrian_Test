const node = document.querySelector('.square');
[...Array(59)].forEach(_ => node.parentNode.insertBefore(node.cloneNode(true), node));