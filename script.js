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

let arrayOfDiv1Id = [];
let postion_record; //this is for record id for div so child element get position at parent id
let preview = document.getElementById('pre1'); //div in preview
function box1() {
  //// creating main editor div - div1\\\\\\\\\\\\\\
  let div1 = document.createElement('div');
  div1.style.width = '100%';
  div1.style.backgroundColor = 'red';
  div1.style.height = '100px';
  // addaing id by array index and store in array
  div1.id = 'div1_id' + arrayOfDiv1Id.length;
  arrayOfDiv1Id.push(div1.id);
  console.log(arrayOfDiv1Id, 'edit at line near 116');

  let preview = document.getElementById('pre1'); //div in preview
  console.log(preview.outerHTML,"id pre1")
  preview.appendChild(div1);
  // apply css on div1
  div1.style.display = 'flex';
  div1.style.padding = '20px';
  div1.style.margin = '5px';

  //// creating editor for div1  - div1\\\\\\\\\\\\\\
  let editor1 = document.createElement('div');
  let editorBox1 = document.getElementById('editorBox1');
  editorBox1.appendChild(editor1);
  editor1.style.width = '100%';
  editor1.style.backgroundColor = 'white';
  editor1.style.height = '100px';
  ///// creating properties of array like height width etc

  // div box width\\\\\\

  let div1_Width = document.createElement('input');
  editor1.appendChild(div1_Width);
  div1_Width.placeholder = 'width';
  div1_Width.addEventListener('input', () => {
    div1.style.width = div1_Width.value;
  });

  // div box height\\\\\\
  let div1_height = document.createElement('input');
  editor1.appendChild(div1_height);
  div1_height.placeholder = 'height';
  div1_height.addEventListener('input', () => {
    div1.style.height = div1_height.value;
  });

  // div box margin\\\\\\
  let div1_margin = document.createElement('input');
  editor1.appendChild(div1_margin);
  div1_margin.placeholder = 'margin';
  div1_margin.addEventListener('input', () => {
    div1.style.margin = div1_margin.value;
  });
  // div box padding\\\\\\
  let div1_padding = document.createElement('input');
  editor1.appendChild(div1_padding);
  div1_padding.placeholder = 'padding';
  div1_padding.addEventListener('input', () => {
    div1.style.padding = div1_padding.value;
  });

  // div box image\\\\\\
  let div1_background_image = document.createElement('input');
  editor1.appendChild(div1_background_image);
  div1_background_image.placeholder = 'image link';

  div1_background_image.addEventListener('input', () => {
    div1.style.backgroundImage = `url(${div1_background_image.value})`;
    console.log(div1_background_image.value, 'image linker');
  });
  div1_background_image.backgroundRepeat = 'no-repeat';

  //  let div1_background_image2 = document.createElement('input');
  //  let div1_background_image3 = document.createElement('input');
  //  editor1.appendChild(div1_background_image1)
  //  editor1.appendChild(div1_background_image2)
  //  editor1.appendChild(div1_background_image3)
  //  div1_background_image1.type="radio";
  //  div1_background_image2.type="radio";
  //  div1_background_image3.type="radio";

  /////// div box background color\\\\\\
  let div1_color_tab = document.createElement('span');
  editor1.appendChild(div1_color_tab);
  div1_color_tab.innerText = 'pick color';

  let div1_color = document.createElement('input');
  editor1.appendChild(div1_color);
  div1_color.type = 'color';

  // div1_color.placeholder="background color"
  div1_color.addEventListener('input', () => {
    div1.style.backgroundColor = div1_color.value;
  });
  /////// div box border radiue\\\\\\
  let div1_borderRadius_name = document.createElement('span');
  editor1.appendChild(div1_borderRadius_name);
  div1_borderRadius_name.innerText = 'radius';

  let div1_borderRadius = document.createElement('input');
  editor1.appendChild(div1_borderRadius);
  div1_borderRadius.type = 'range';
  div1_borderRadius.min = '1px';
  div1_borderRadius.max = '500px';
  // div1_color.placeholder="background color"
  div1_borderRadius.addEventListener('input', () => {
    div1.style.borderRadius = div1_borderRadius.value + 'px';
  });
  //////////adding delete button\\\\\\\\\\\\\
  let div1_and_editor_delete = document.createElement('button');
  editor1.appendChild(div1_and_editor_delete);
  div1_and_editor_delete.innerText = 'delete';
  div1_and_editor_delete.addEventListener('click', () => {
    editor1.remove();
    div1.remove();
  });
  ////////// adding hide button for editor1 - it mean this editor not active\\\\\\\\\\\\\
  let editor1_hide = document.createElement('button');
  editor1.appendChild(editor1_hide);
  editor1_hide.innerText = 'hide me';
  editor1_hide.addEventListener('click', () => {
    editor1.style.display = 'none';
    // use 0px border to show unactive or not editor1 and div1
    div1.style.border = '0px';
  });
  /////// adding function to hide  editor1 on double click on div1 \\\\\\\\\\\\\
  div1.addEventListener('dblclick', (e) => {
    editor1.style.display = 'none';
    // use dblclick=double click to show active editor1 and div1
    div1.style.border = '0px';
  });

  /////// adding function to  show the hideend editor1 for div1 \\\\\\\\\\\\\
  div1.addEventListener('click', (e) => {
    editor1.style.display = 'block';
    // use border to show active editor1 and div1
    div1.style.border = '2px solid black';
    console.log(e.target);
    console.log(postion_record, 'position');
    postion_record = e.target.id;
    console.log(postion_record, 'position udated');
  });
  ////

  /////// adding function to  show the hideend editor1 for div1 \\\\\\\\\\\\\
  let position1 = document.createElement('button');
  editor1.appendChild(position1);
  position1.innerText = 'click for pos';
  position1.addEventListener('click', () => {
    document.getElementById(postion_record).appendChild(div1);
  });
}

function abc(){
  // var preview1 = document.getElementById('pre1'); //div in preview
 
}
abc()
console.log(preview,"id pre1")
//////////////////////////////////////////////////////////
// copy the code of creted website
// let abc = document.getElementById("pre1");
// abc.style.backgroundColor="red"
// console.log(abc);

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <title>Home</title>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width" />
//     <!--
//       Need a visual blank slate?
//       Remove all code in `styles.css`!
//     -->
//     <link rel="stylesheet" href="styles.css" />
//     <script src="script.js"></script>
//   </head>
//   <body>
//   <div class="main">

//   <div class="edit">

//     <div>
//   <button onclick="head1()">add heading</button>
//   <button onclick="subhead1()">add subhead</button>
//   <div>
//     <div> <button onclick="box1()">add box</button></div>
//     <div id="editorBox1"></div>
//   </div>
//   <div id="editor-head"></div>
// </div>
//   </div>
//   <div class="preview" id="pre1"></div>

//   </body>
// </html>

// dragElement(document.getElementById("mydiv"));
