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

   axios.post("https://crudcrud.com/api/649ba74b5d66483188c15f81988148a9/appointmentdata",myObj)
   .then((respone) =>{
        showUserOnScreen(respone.data)
        console.log(respone)
   })
   .catch((err) =>{
        console.log(err)
   })

    // localStorage.setItem(category,myObjnew);
    //showUserOnScreen(myObj)
}

    function showUserOnScreen(myObj){
        const parentEle=document.getElementById('listOfItems')
        const childEle =document.createElement('li')
        childEle.textContent=myObj._id+'--'+myObj.amount+'--'+myObj.description+'--'+myObj.category+'--'
        const deleteBtn =document.createElement('input')
        deleteBtn.type='button'
        deleteBtn.style.backgroundColor='red'
        deleteBtn.style.color='white'
        deleteBtn.value='X'
        deleteBtn.onclick=() => {
            axios.delete(`https://crudcrud.com/api/649ba74b5d66483188c15f81988148a9/appointmentdata/${myObj._id}`)
            .then((respone) =>{
                parentEle.removeChild(childEle)
            })
            .catch((err) => {
                console.log(err)
            })

            //localStorage.removeItem(myObj.category)
            
        }

        const editBtn =document.createElement('input')
        editBtn.type='button'
        editBtn.style.color='white'
        editBtn.style.backgroundColor='green'
        editBtn.value='Edit'
        editBtn.onclick=() => {
            axios.delete(`https://crudcrud.com/api/649ba74b5d66483188c15f81988148a9/appointmentdata/${myObj._id}`)
            .then((respone) =>{
                parentEle.removeChild(childEle)
            })
            .catch((err) => {
                console.log(err)
            })
            //localStorage.removeItem(myObj.category)
            //parentEle.removeChild(childEle)

            document.getElementById('amount').value=myObj.amount
            document.getElementById('description').value=myObj.description
            document.getElementById('category').value=myObj.category

        }
        childEle.appendChild(editBtn)
        childEle.appendChild(deleteBtn)
        parentEle.appendChild(childEle)??
    }

    // two ways to acheive goal
//  WITH DOM CONENT LOADED
    window.addEventListener("DOMContentLoaded",()=>{

        axios.get("https://crudcrud.com/api/649ba74b5d66483188c15f81988148a9/appointmentdata")
        .then((respone) =>{
            console.log(respone)

            for(var i=0;i<respone.data.length;i++){
                showUserOnScreen(respone.data[i])
            }
        })
        .catch((err) =>{
            console.log(err)
        })
    //     console.log("success");
    //     var dom=localStorage;
    //     var domkey=Object.keys(dom);
    //     domkey.forEach((key)=>{
    //         var detailfordom=JSON.parse(dom.getItem(key));
    //         showUserOnScreen(detailfordom);
    // ????????})
    
    })

    // console.log("success");
    // var dom=localStorage;
    // var domkey=Object.keys(dom);
    // for(var i=0;i<dom.length;i++){
    //     var detailfordom=JSON.parse(dom.getItem(domkey[i]));
    //     showUserOnScreen(detailfordom);
    // }