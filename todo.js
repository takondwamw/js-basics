// create the do 
let id =  Math.round(Math.random()) ;
let task = []; 
removeEgg(['egg','apple','egg','egg','egg','ham']);
fisrtTwo(['egg','apple','egg','egg','egg','ham']); 


function $(elem){
    return document.querySelector(elem);
}
// store to localStorage
function toStorage(){
    let task_name = $('input.name').value;
    let taskDate = $('input.date').value;
    task.push({
        task_name,
        taskDate, 
    });
    // store to localstorage;
    localStorage.setItem( "task",JSON.stringify(task));
    fromStorage("task");

}
// fetch from localStorage and delete
function fromStorage (obj){
    // return console.log(typeof(obj));
    if( typeof(obj) === 'array'){
        console.log("not set in localstorage")
    }else{

        n = localStorage.getItem(obj);
        let m = JSON.parse(n);
        
        updatePage(m);
    }
}
// display on webpage
function updatePage(obj){

        let tag =$('.task');

        let pended = '';

        task = obj === 'object' ? task = obj : task ;

        const result = {};

        for(let i=0; i < obj.length;i++){
            const taskObject = obj[i];
            const {task_name,taskDate} = taskObject;
            const html =`<div>${ task_name }</div> <div>${taskDate}</div> <button onclick="${ obj.splice(i,0) }" class="btn danger">Delete</button></p>`;
            pended += html;

            
        }
        // console.log(pended)
        tag.innerHTML = pended;  
    }
// select element
function $(elm){
    return document.querySelector(elm);
}
// remove from web page
function del(id,arr){
    console.log(arr)
    arr.splice(id,1);
    console.log(arr)

}

function removeEgg(arr){
    let newArr = arr.filter(val => {
        return  val !== "egg";
    });
    return console.log( newArr );
}

function fisrtTwo (arr){
        let count = 0;
        
            let m = arr.filter(val => { 
                if(val == "egg" && count <= 2){
                    count++;
                    return false;
                }else{
                    return true;
                }
            
            })
        //    break;

        // }
        return console.log(m);
        
}
