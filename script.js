/*
const sortContainer = document.getElementById('sort-container');
const inputContainer = document.getElementById('input-container');
const sortButton = document.getElementById('sort-button');
const mergesortButton = document.getElementById('mergesort-button');
const submitButton = document.getElementById('value-submit');
const inputs = inputContainer.getElementsByTagName('input');
//const inp_sortBars = [];
const sortBars = [];

for (let i = 0; i < 10; i++) {
  let inp = document.createElement("input")
  inp.style.width = `30px`;
  //inp_sortBars.push(inp);
  inputContainer.appendChild(inp)

}

async function submitvalues() {
  
  for (let i = 0; i < inputs.length; i++) {
     let inputValue = parseInt(inputs[i].value);
     let bar = document.createElement('div');
     bar.classList.add('sort-bar');
     bar.style.height = `${inputValue}px`;
     bar.style.width=`35.5px`;
     sortBars.push(bar);
     sortContainer.appendChild(bar);
     
     

  }
  
}
async function bubbleSort() {
  for (let i = 0; i < sortBars.length; i++) {
    for (let j = 0; j < sortBars.length - i - 1; j++) {
      let bar1 = sortBars[j];
      let bar2 = sortBars[j + 1];
      let bar1Height = parseInt(bar1.style.height.slice(0, -2));
      let bar2Height = parseInt(bar2.style.height.slice(0, -2));
      if (bar1Height > bar2Height) {
        bar1.style.backgroundColor = 'red';
        bar2.style.backgroundColor = 'red';
        await sleep(500);
        let temp = bar1.style.height;
        bar1.style.height = bar2.style.height;
        bar2.style.height = temp;
        bar1.style.backgroundColor = '';
        bar2.style.backgroundColor = '';
      }
    }
  }
  //inp_sortBars='';
  //sortBars=''

}

/*
async function mergeSort(array, l, r) {
  if (l < r) {
    let m = Math.floor((l + r) / 2);
    await mergeSort(array, l, m);
    await mergeSort(array, m + 1, r);
    await merge(array, l, m, r);
  }
}

async function merge(array, l, m, r) {
  let i, j, k;
  let n1 = m - l + 1;
  let n2 = r - m;
  let L = [];
  let R = [];
  for (i = 0; i < n1; i++) {
    L[i] = array[l + i];
  }
  for (j = 0; j < n2; j++) {
    R[j] = array[m + 1 + j];
  }
  i = 0;
  j = 0;
  k = l;
  while (i < n1 && j < n2) {
    let bar1 = L[i];
    let bar2 = R[j];
    let bar3 = array[k];                                     
    let bar1Height = parseInt(bar1.style.height.slice(0, -2));
    let bar2Height = parseInt(bar2.style.height.slice(0, -2));
    let bar3Height = parseInt(bar3.style.height.slice(0, -2));
    if (bar1Height <= bar2Height) {
     
      bar1.style.backgroundColor = 'red';
      bar3.style.backgroundColor = 'red';
      await sleep(5000);
      bar3.style.height = bar1.style.height;
      bar1.style.backgroundColor = '';
      bar3.style.backgroundColor = '';
      i++;
    } else {
      let bar3 = array[k]; 
      bar3.style.backgroundColor = 'red';
      bar2.style.backgroundColor = 'red';
      await sleep(5000);
      bar3.style.height = bar2.style.height;
      bar3.style.backgroundColor = '';
      bar2.style.backgroundColor = '';
      j++;
    }
    k++;
  }
  while (i < n1) {
    let bar3 = array[k]; 
    let bar3Height = parseInt(bar3.style.height.slice(0, -2));
    let bar1 = L[i];
    let bar1Height = parseInt(bar1.style.height.slice(0, -2));
    bar3.style.backgroundColor = 'red';
    bar1.style.backgroundColor = 'red';
    await sleep(5000);
    bar3.style.height = bar1.style.height;
    bar3.style.backgroundColor = '';
    bar1.style.backgroundColor = '';
    i++;
    k++;
  }
  while (j < n2) {
    let bar3 = array[k]; 
    let bar3Height = parseInt(bar3.style.height.slice(0, -2));
    let bar2 = R[j];
    let bar2Height = parseInt(bar2.style.height.slice(0, -2));
    bar3.style.backgroundColor = 'red';
    bar2.style.backgroundColor = 'red';
    await sleep(5000);
    bar3.style.height = bar2.style.height;
    bar3.style.backgroundColor = '';
    bar2.style.backgroundColor = '';
    j++;
    k++;
  }
}

mergesortButton.addEventListener('click', function() {
  mergeSort(sortBars, 0, sortBars.length - 1);
});
*/
/*
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
submitButton.addEventListener('click', function () {
  submitvalues();
});


sortButton.addEventListener('click', function () {
  bubbleSort();
});
*/


//oop paradim

class SortVisualizer {
  constructor() {
    this.sortContainer = document.getElementById('sort-bars-containers');
    this.inputContainer = document.getElementById('input-container');
    this.sortButton = document.getElementById('sort-button');
    this.submitButton = document.getElementById('value-submit');
    this.inputs = this.inputContainer.getElementsByTagName('input');
    this.sortBars = [];
  }

  clearInputs() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
      input.value = '';
    });
  }
  
   /*createArrow() {
    const arrow = document.createElement('div');
    arrow.classList.add('arrow');
    document.body.appendChild(arrow);
    return arrow;
  }*/
  /*
  animateArrow(arrow, bar) {
    arrow.style.left = bar.x + 'px';
    arrow.style.top = bar.y - 30 + 'px';
    arrow.style.opacity = '0';
    arrow.animate([
      {opacity: '0'},
      {opacity: '1'},
      {opacity: '0'}
    ], {
      duration: 1000,
      easing: 'ease-in-out',
      iterations: 1
    });
  }
  */

  createInputs() {
    for (let i = 0; i < 10; i++) {
      let inp = document.createElement("input");
      inp.style.width = `30px`;
      inp.style.borderRadius=`5px`;
      inp.style.textAlign=`center`;
      //inp.max = "50";
      inp.addEventListener('input', function(event) {
        const value = event.target.value;
        if(value >200){
          event.target.value='';
        }
        if (!/^\d+$/.test(value) ) {
  
          const newValue = value.replace(/\D/g, '');  
          event.target.value = newValue;   
  
  }
      });
      this.inputContainer.appendChild(inp);
    }
  }

  async submitvalues() {
    while(this.sortContainer.firstChild){
      this.sortContainer.removeChild(this.sortContainer.firstChild);
    }
    for (let i = 0; i < this.inputs.length; i++) {
      let inputValue = parseInt(this.inputs[i].value);
      let bar = document.createElement('div');
      bar.classList.add('sort-bar');
      bar.style.height = `${inputValue}px`;
      bar.style.width = `55.5px`;
      bar.style.alignSelf = "flex-end"; 
      
      this.sortBars.push(bar);
      this.sortContainer.appendChild(bar);
    }
  }

  async bubbleSort() {
    
    for (let i = 0; i < this.sortBars.length; i++) {
      for (let j = 0; j < this.sortBars.length - i - 1; j++) {
        let bar1 = this.sortBars[j];
        let bar2 = this.sortBars[j + 1];
        let bar1Height = parseInt(bar1.style.height.slice(0, -2));
        let bar2Height = parseInt(bar2.style.height.slice(0, -2));
        const existingArrows = document.querySelectorAll('.arrow');
        if (existingArrows.length > 0) {
             existingArrows.forEach(arrow => arrow.remove());
                 }
        const bar1Rect = bar1.getBoundingClientRect();
        const bar2Rect = bar2.getBoundingClientRect();
        const arrow1 = document.createElement('div');
        arrow1.classList.add('arrow');
        document.body.appendChild(arrow1);
        const arrow2 =document.createElement('div');
        arrow2.classList.add('arrow');
        document.body.appendChild(arrow2);
        
        arrow1.style.top = `${bar1Rect.top - 50}px`;
       arrow1.style.left = `${bar1Rect.left + bar1Rect.width / 2 - 10}px`;


        arrow1.style.color='white'

       arrow1.style.opacity = '0';
      arrow1.animate([
      {opacity: '0'},
      {opacity: '1'},
      {opacity: '0'}
    ], {
      duration: 1000,
      easing: 'ease-in-out',
      iterations: 1
    });
    arrow2.style.top = `${bar2Rect.top - 50}px`;
    arrow2.style.left = `${bar2Rect.left + bar2Rect.width / 2 - 10}px`;
    arrow2.style.opacity = '0';
 
   arrow2.animate([
   {opacity: '0'},
   {opacity: '1'},
   {opacity: '0'}
 ], {
   duration: 1000,
   easing: 'ease-in-out',
   iterations: 1
 });
 console.log(arrow1);
 console.log(arrow2);
 

        
        if (bar1Height > bar2Height) {
          bar1.style.backgroundColor = 'red';
          bar2.style.backgroundColor = 'red';
          await sleep(2000);
          let temp = bar1.style.height;
          bar1.style.height = bar2.style.height;
          bar2.style.height = temp;
          bar1.style.backgroundColor = '';
          bar2.style.backgroundColor = '';
        }
  

      }

    }
    //clearInputs();
  
  }


}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const sortVisualizer = new SortVisualizer();
sortVisualizer.createInputs();
sortVisualizer.submitButton.addEventListener('click', () => sortVisualizer.submitvalues());
sortVisualizer.sortButton.addEventListener('click', () => {sortVisualizer.bubbleSort()
  const sortDescription = document.createElement("div");
  sortDescription.id = "sort-description";
  document.getElementById("input-container2").appendChild(sortDescription);

  // Add text and animation to the sort description element
  sortDescription.innerText = "This is the bubble sort algorithm.";
  sortDescription.classList.add("animate__animated", "animate__bounceInDown");
});
