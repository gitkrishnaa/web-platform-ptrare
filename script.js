console.log('Hello!');
let arrayOfid=[];
function head1() {
  let crt1 = document.createElement('div');
  let input1 = document.createElement('input');
  let head1 = document.createElement('h1');
  let btn1 = document.createElement('button');
  let delet1 = document.createElement('button');

  //delete button

  delet1.innerHTML = 'delete';
  delet1.addEventListener('click', () => {
    crt1.remove();
  });

  ////////////////////////////////////
  head1.innerText = 'heading1';
  head1.style.display = 'none';
  let input2 = document.createElement('input');

  btn1.innerText = 'done';
  btn1.addEventListener('click', () => {
    if (input1.value == '') {
      alert('fill the input');
    } else {
      input1.style.display = 'none';
      btn1.style.display = 'none';
      delet1.style.display = 'none';
      head1.style.display = 'block';
      head1.innerText = input1.value;
    }
  });
  head1.addEventListener('click', () => {
    input1.style.display = 'block';
    btn1.style.display = 'block';
    delet1.style.display = 'block';

    head1.style.display = 'none';
  });

  let body1 = document.getElementById('pre1');
  body1.appendChild(crt1);
  crt1.appendChild(input1);
  crt1.appendChild(btn1);
  crt1.appendChild(head1);
  crt1.appendChild(delet1);
}
function subhead1() {
  let crt1 = document.createElement('div');
  let mainDivid=crt1.id="id"+arrayOfid.length;
  arrayOfid.push(mainDivid)
  console.log(mainDivid);
  console.log(arrayOfid);

  let input1 = document.createElement('input');
  let head1 = document.createElement('h5');

//delete button 
let delet1 = document.createElement('button');
delet1.innerHTML="delete";
delet1.addEventListener('click', () => {
  crt1.remove()
});

///////////





  //applying main css on created subhead
  // head1.innerText = 'heading1';
  head1.style.display = 'none';
  // head1.style.height = "10px";

  let input2 = document.createElement('input');

  let btn1 = document.createElement('button');
  btn1.innerText = 'done';
  btn1.addEventListener('click', () => {
    if (input1.value == '') {
      alert('fill the input');
    } else {
      input1.style.display = 'none';
      btn1.style.display = 'none';
      delet1.style.display = 'none';

      head1.style.display = 'block';
      head1.innerText = input1.value;
    }
  });
  head1.addEventListener('click', () => {
    input1.style.display = 'block';
    btn1.style.display = 'block';
    delet1.style.display = 'block';

    head1.style.display = 'none';
  });

  let body1 = document.getElementById('pre1');
  body1.appendChild(crt1);
  crt1.appendChild(input1);
  crt1.appendChild(btn1);
  crt1.appendChild(delet1);
  crt1.appendChild(head1);

 

 
}

// dragElement(document.getElementById("mydiv"));
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
