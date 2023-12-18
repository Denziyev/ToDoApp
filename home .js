const Btns=document.querySelectorAll(".Btn");
const noteboard=document.querySelector("#noteboard");
const titleinput=document.querySelector(".option1 input");
const priorityinput=document.querySelector(".option2 select");
const addNewBtn=document.querySelector(".addBtn");
const titleerror=document.querySelector(".titleerror");
const priorityerror=document.querySelector(".priorityerror");
let note={}

let arr=[];

if(!(JSON.parse(window.localStorage.getItem("Notes")))){
    window.localStorage.setItem("Notes",JSON.stringify(arr));
}
GetItems();

Btns.forEach((AnyBtn)=>{
    AnyBtn.addEventListener("click",(e)=>{
        e.preventDefault();
        GetItems();
    })
})

addNewBtn.addEventListener("click",()=>{
    SetNewItem();

});


function DeleteItem(itemm){
    
    var elements=Array.from(JSON.parse(window.localStorage.getItem("Notes")));
    elements.forEach(element => {
        if(element!=null){
      
            if(element.Title==itemm){
        
                delete elements[elements.indexOf(element)]
            }
        }
    });
    window.localStorage.setItem("Notes",JSON.stringify(elements));

}



function SetNewItem(){
   if(titleinput.value.trim() && priorityinput.value.trim()){
    arr=JSON.parse(window.localStorage.getItem("Notes"));
     note={
        Title: titleinput.value.trim(),
        Priority:priorityinput.value.trim()
    }
    arr.push(note);
    window.localStorage.setItem("Notes",JSON.stringify(arr));
    GetItems();
    titleinput.value='';
    priorityinput.value='';
   }
   else{
    if(!titleinput.value.trim()){
        titleerror.innerHTML="This field is required"
    }
    else{
        priorityerror.innerHTML="This field is required"
    }
   }

}

titleinput.addEventListener("keydown",()=>{
    if(titleinput.value){
        titleerror.innerHTML=""
    }
})
priorityinput.addEventListener("change",()=>{
    if(priorityinput.value){
        priorityerror.innerHTML=""
    }
})

function GetItems() {
    noteboard.innerHTML='';
    console.log('sjfu');
    var localstorageItems=[];
     localstorageItems=JSON.parse(window.localStorage.getItem("Notes"));
    localstorageItems.forEach((note)=>{
        if(note!=null){
            console.log("getitems isledi");
            noteboard.innerHTML+=`
            <div class="note">
                    <div class="noteleft">
                        <p class="notetitle">${note.Title}</p>
                        <div class="notepriority">${note.Priority}</div>
                    </div>
                    <div class="noteright">
                        <a data-Title="${note.Title}" data-priority="${note.Priority}" class="Btn editBtn" role="button" href="#"><img src="./assets/icons/Group 2.svg" alt="editBtn"></a>
                        <a data-Title="${note.Title}" data-priority="${note.Priority}" class="Btn deleteBtn" role="button" href="#"><img src="./assets/icons/Group 3.svg" alt="DeleteBtn"></a>
                    </div>
                </div>
            `
        }
    })
    const editBtns=Array.from(document.querySelectorAll(".editBtn"));
const deleteBtns=Array.from(document.querySelectorAll(".deleteBtn"));

     editBtns.forEach((Btn)=>{
        Btn.addEventListener("click",(e)=>{
            e.preventDefault();
           titleinput.value=  e.target.parentElement.getAttribute('data-Title');
           priorityinput.value=e.target.parentElement.getAttribute('data-priority');
                  DeleteItem(titleinput.value);
                  GetItems();
        })
    })


    deleteBtns.forEach((Btn)=>{
        Btn.addEventListener("click",(e)=>{
            e.preventDefault();
            console.log("jsdnjsjef")
            if(confirm("Are you sure?")==true){
                console.log("nnffnk");
                DeleteItem(e.target.parentElement.getAttribute('data-Title'));
                GetItems();
            }
        })
    })

}

// const editBtns=Array.from(document.querySelectorAll(".editBtn"));
// const deleteBtns=Array.from(document.querySelectorAll(".deleteBtn"));
const whiteboardd=document.querySelector("#whiteboard");


    // editBtns.forEach((Btn)=>{
    //     Btn.addEventListener("click",(e)=>{
    //         e.preventDefault();
    //        titleinput.value=  e.target.parentElement.getAttribute('data-Title');
    //        priorityinput.value=e.target.parentElement.getAttribute('data-priority');
    //               DeleteItem(titleinput.value);
    //               GetItems();
    //     })
    // })


    // deleteBtns.forEach((Btn)=>{
    //     Btn.addEventListener("click",(e)=>{
    //         e.preventDefault();
    //         console.log("jsdnjsjef")
    //         if(confirm("Are you sure?")==true){
    //             console.log("nnffnk");
    //             DeleteItem(e.target.parentElement.getAttribute('data-Title'));
    //             GetItems();
    //         }
    //     })
    // })








