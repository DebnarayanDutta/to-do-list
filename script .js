const Input= document.getElementById('create-list')

//const todoArray = []
//let index = 0;

function btn(){
    
  
//   //console.log(Input.value)
//   const editbutton = document.createElement('button');
//  // console.log(editbutton)
//    editbutton.setAttribute('id', 'button_click');
//    const buttontext = document.createTextNode('Edit');
//    editbutton.appendChild(buttontext);
//    List.appendChild(editbutton)

   //const newTodo = {
   // title: Input.value,
   // id: index
   //}
  // index = index +1;
   //todoArray.push(newTodo)
  // Input.value = ''

  // todoArray.map(todo => {
    const list = document.createElement('li')
    list.setAttribute('id', 'list_value');
    const node = document.createTextNode(Input.value);
    list.appendChild(node)
    const Lists= document.getElementById('list-field')
    Lists.appendChild(list)

    const editbutton = document.createElement('button');
    //  // console.log(editbutton)
        editbutton.setAttribute('id', 'button_click');
        const buttontext = document.createTextNode('Edit');
        editbutton.appendChild(buttontext);
        Lists.appendChild(editbutton)
        editbutton.addEventListener("click", editing);
       // editbutton.addEventListener('click', () => list.remove());
       function editing(event){
        console.log('aa')
         let item=event.target.Lists;
         
        let itemInput = document.createElement('input');
        const node = document.createTextNode(item);
        itemInput.appendChild(node)
        const Lists= document.getElementById('list-field')
          Lists.appendChild(itemInput)
         itemInput.type='text'
         itemInput.value= list.innerText
        // itemInput.value= document.getElementById('list_value')
         let itemBtn = document.createElement('button');
         itemBtn.setAttribute('id', 'itemBtn_click');
        const Itembuttontext = document.createTextNode('Save');
          itemBtn.appendChild(Itembuttontext);
          Lists.appendChild(itemBtn)
          itemBtn.addEventListener('click',() =>list.innerText= itemInput.value);
          itemBtn.addEventListener('click',() =>itemInput.remove());
          itemBtn.addEventListener('click',() =>itemBtn.remove());
       }
      //  function saving(event){
      //   let item=event.target.Lists;
         
      //  }
      

        const deletebutton = document.createElement('button');
        //  // console.log(editbutton)
            deletebutton.setAttribute('id', 'deletebutton_click');
            const Debuttontext = document.createTextNode('Delete');
            deletebutton.appendChild(Debuttontext);
            Lists.appendChild(deletebutton)
  // })
  deletebutton.addEventListener('click', () => list.remove());
  deletebutton.addEventListener('click', () => editbutton.remove());
  deletebutton.addEventListener('click', () => deletebutton.remove());
      //deletebutton.onclick= function(){deleteFunction(list,this)}

  Input.value = ''

}

 
  //  itemInput.classList.add('edit');
  //  itemInput.addEventListener('keypress',saveItem);
  //  itemInput.addEventListener('click',saveItem);
  // event.target.parentNode.prepend(itemInput);
  //  event.target.remove();
  //  itemInput.select();
 

 //function saving(event){
   
 //}


//  function saveItem(event){
//    let inputValue = event.target.value;
//    if(event.target.value.length > 0 && (event.keyCode === 13 || event.type === 'click')){
//      let li = document.createElement('li');
//      li.addEventListener('click',toggleDone);
//      li.addEventListener('click',editItem);
//      li.textContent = event.target.value;
//      event.target.parentNode.prepend(inputValue);
//      event.target.remove();
//    }
//  }

//function deleteFunction(x,y) {
	  
  // let parent = document.getElementsByTagName("BODY")[0];
   //remove the div
  // parent.parentNode.parentNode. removeChild(x.parentNode);
   //remore the button
  // parent.parentNode.parentNode.removeChild(y.parentNode);
   
//}

// const arr = [{
//   title: 'grocery',
//   id: 1
// },{
//   title: 'car',
//   id: 2
// },{
//   title: 'study',
//   id: 3
// },{
//   title: 'sleep',
//   id: 4
// },]


// const newTodos = arr.filter(item => item.id === 3)
// console.log(newTodos)