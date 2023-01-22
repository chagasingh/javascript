function saveToLocalStorage(event){
    event.preventDefault();
    const amount=event.target.amount.value;
    const description=event.target.description.value;
    const category=event.target.category.value;
    let myObj={
        amount:amount,
        description:description,
        category:category,
    }
   var myObjnew=JSON.stringify(myObj);
    localStorage.setItem(category,myObjnew);
    showUserOnScreen(myObj)
}

    function showUserOnScreen(myObj){
        const parentEle=document.getElementById('listOfItems')
        const childEle =document.createElement('li')
        childEle.textContent=myObj.amount+'--'+myObj.description+'--'+myObj.category+'--'
        const deleteBtn =document.createElement('input')
        deleteBtn.type='button'
        deleteBtn.style.backgroundColor='red'
        deleteBtn.style.color='white'
        deleteBtn.value='X'
        deleteBtn.onclick=() => {
            localStorage.removeItem(myObj.category)
            parentEle.removeChild(childEle)
        }

        const editBtn =document.createElement('input')
        editBtn.type='button'
        editBtn.style.color='white'
        editBtn.style.backgroundColor='green'
        editBtn.value='Edit'
        editBtn.onclick=() => {
            localStorage.removeItem(myObj.category)
            parentEle.removeChild(childEle)

            document.getElementById('amount').value=myObj.amount
            document.getElementById('description').value=myObj.description
            document.getElementById('category').value=myObj.category

        }
        childEle.appendChild(editBtn)
        childEle.appendChild(deleteBtn)
        parentEle.appendChild(childEle) 
    }

    // two ways to acheive goal
//  WITH DOM CONENT LOADED
    window.addEventListener("DOMContentLoaded",()=>{
        console.log("success");
        var dom=localStorage;
        var domkey=Object.keys(dom);
        domkey.forEach((key)=>{
            var detailfordom=JSON.parse(dom.getItem(key));
            showUserOnScreen(detailfordom);
        })
    
    })

    // console.log("success");
    // var dom=localStorage;
    // var domkey=Object.keys(dom);
    // for(var i=0;i<dom.length;i++){
    //     var detailfordom=JSON.parse(dom.getItem(domkey[i]));
    //     showUserOnScreen(detailfordom);
    // }