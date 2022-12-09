console.log('Hello!');
let arrayOfid = [];
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
  let mainDivid = (crt1.id = 'id' + arrayOfid.length);
  arrayOfid.push(mainDivid);
  console.log(mainDivid);
  console.log(arrayOfid);

  let input1 = document.createElement('input');
  let head1 = document.createElement('h5');

  //delete button
  let delet1 = document.createElement('button');
  delet1.innerHTML = 'delete';
  delet1.addEventListener('click', () => {
    crt1.remove();
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
function box1() {
  var arrayOfDiv1Id=[]
  //// creating main editor div - div1\\\\\\\\\\\\\\
  let div1 = document.createElement('div');
  div1.style.width="100%"
div1.style.backgroundColor="red";
  div1.style.height="100px"

  let preview=document.getElementById("pre1") //div in preview
  preview.appendChild(div1);
    //// creating editor for div1  - div1\\\\\\\\\\\\\\
  let editor1 = document.createElement('div');
  let editorBox1=document.getElementById("editorBox1")
  editorBox1.appendChild(editor1)
  editor1.style.width="100%"
  editor1.style.backgroundColor="white";
  editor1.style.height="100px"
  ///// creating properties of array like height width etc


   // div box width\\\\\\
 
  let div1_Width = document.createElement('input');
  editor1.appendChild(div1_Width)
  div1_Width.placeholder="width"
  div1_Width.addEventListener("input",()=>{
   div1.style.width=div1_Width.value;
  })
  
  // div box height\\\\\\
  let div1_height = document.createElement('input');
  editor1.appendChild(div1_height)
  div1_height.placeholder="height"
  div1_height.addEventListener("input",()=>{
   div1.style.height=div1_height.value;
  })
  
   // div box background color\\\\\\
   let div1_color_tab = document.createElement('h4');
   editor1.appendChild(div1_color_tab);
   div1_color_tab.innerText="pick color"



  let div1_color = document.createElement('input');
  editor1.appendChild(div1_color);
  div1_color.type="color";
 
  // div1_color.placeholder="background color"
  div1_color.addEventListener("input",()=>{
   div1.style.backgroundColor=div1_color.value;
  })
  
 
}


































// dragElement(document.getElementById("mydiv"));

