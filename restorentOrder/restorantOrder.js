function saveToLocalStorage(event){
    event.preventDefault();
    const amount=event.target.amount.value;
    const description=event.target.description.value;
    const tableno=event.target.tableno.value;
    let myObj={
        amount:amount,
        description:description,
        tableno:tableno,
    }
   var myObjnew=JSON.stringify(myObj);

   axios.post("https://crudcrud.com/api/80f28492af484cf8aa9add11e580d3ec/restrodata",myObj)
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
        if(myObj.tableno==='TABLE 1'){
            const parentEle=document.getElementById('table 1')
            const childEle =document.createElement('li')
            childEle.textContent=myObj._id+'--'+myObj.amount+'--'+myObj.description+'--'+myObj.tableno+'--'
            const deleteBtn =document.createElement('input')
            deleteBtn.type='button'
            deleteBtn.style.backgroundColor='red'
            deleteBtn.style.color='white'
            deleteBtn.value='X'
            deleteBtn.onclick=() => {
                axios.delete(`https://crudcrud.com/api/80f28492af484cf8aa9add11e580d3ec/restrodata/${myObj._id}`)
                .then((respone) =>{
                    parentEle.removeChild(childEle)
                })
                .catch((err) => {
                    console.log(err)
                })

                //localStorage.removeItem(myObj.category)
                
            }
            childEle.appendChild(deleteBtn)
            parentEle.appendChild(childEle) 

        }else if(myObj.tableno==='TABLE 2'){
            const parentEle=document.getElementById('table 2')
            const childEle =document.createElement('li')
            childEle.textContent=myObj._id+'--'+myObj.amount+'--'+myObj.description+'--'+myObj.tableno+'--'
            const deleteBtn =document.createElement('input')
            deleteBtn.type='button'
            deleteBtn.style.backgroundColor='red'
            deleteBtn.style.color='white'
            deleteBtn.value='X'
            deleteBtn.onclick=() => {
                axios.delete(`https://crudcrud.com/api/80f28492af484cf8aa9add11e580d3ec/restrodata/${myObj._id}`)
                .then((respone) =>{
                    parentEle.removeChild(childEle)
                })
                .catch((err) => {
                    console.log(err)
                })

                //localStorage.removeItem(myObj.category)
                
            }
            childEle.appendChild(deleteBtn)
            parentEle.appendChild(childEle) 
        }
        else{
            const parentEle=document.getElementById('table 3')
            const childEle =document.createElement('li')
            childEle.textContent=myObj._id+'--'+myObj.amount+'--'+myObj.description+'--'+myObj.tableno+'--'
            const deleteBtn =document.createElement('input')
            deleteBtn.type='button'
            deleteBtn.style.backgroundColor='red'
            deleteBtn.style.color='white'
            deleteBtn.value='X'
            deleteBtn.onclick=() => {
                axios.delete(`https://crudcrud.com/api/80f28492af484cf8aa9add11e580d3ec/restrodata/${myObj._id}`)
                .then((respone) =>{
                    parentEle.removeChild(childEle)
                })
                .catch((err) => {
                    console.log(err)
                })

                //localStorage.removeItem(myObj.category)
                
            }
            childEle.appendChild(deleteBtn)
            parentEle.appendChild(childEle) 
        }
    }
    // two ways to acheive goal
//  WITH DOM CONENT LOADED
    window.addEventListener("DOMContentLoaded",()=>{

        axios.get("https://crudcrud.com/api/80f28492af484cf8aa9add11e580d3ec/restrodata")
        .then((respone) =>{
            console.log(respone)

            for(var i=0;i<respone.data.length;i++){
                showUserOnScreen(respone.data[i])
            }
        })
        .catch((err) =>{
            console.log(err)
        })

    })