//exit button
function clearList(){
    var clear = document.querySelectorAll('.delete');
    for(let j = 0; j < clear.length; j++){
        clear[j].addEventListener('click', function(){
            clear[j].parentElement.remove();
        
    
        })
    }
}

clearList();

    
//adding a new list and creating error message
var error = document.querySelector('.error')
var myUl = document.getElementById('todos');
var btn = document.querySelector(".btn");
var inputItem = document.querySelector(".form-control");
var li = document.querySelector('li')
    function newList(){
        if(inputItem.value == 0){
            error.innerHTML = "Input a list";
    
    
        }
        else{
            var li = document.createElement("li");
            var txtNode = document.createTextNode(inputItem.value);
            li.appendChild(txtNode);
            li.classList.add('list-group-item');
            var i = document.createElement(i);
            i.classList.add('delete');
            i.classList.add('fa');
            i.classList.add('fa-trash-o');
            li.appendChild(i);
            myUl.appendChild(li);
            error.innerHTML = "";
            inputItem.value = "";
        clearList();
            
    
        }
        
        
    }


    
    //make the add button execute the addition of new list
    
    btn.addEventListener('click', newList);

    
    //make the enter key add a new list
    document.addEventListener('keydown', function(e){
    if(e.key == "Enter"){
        newList();
    }
    })










    
 