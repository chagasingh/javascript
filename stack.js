const posts = [
    { title: 'post one', body: 'this is post one', createdAt: new Date().getTime() },
    { title: 'post two', body: 'this is post two', createdAt: new Date().getTime() }
];
let intervelId=0;
function getPosts() {
    clearInterval(intervelId)
    intervelId = setInterval(() => {
        let output = '';
        for(let i=0;i<posts.length;i++){
            output+=`<li>${posts[i].title}- last updated:   ${(new Date().getTime() - posts[i].createdAt)/1000} seconds ago</li>`
        }
        document.body.innerHTML=output;

    },1000)
}

// function createPost(post,callback){
//     setTimeout(() => {
//         posts.push({ ...post,createdAt: new Date().getTime() });
//         callback();

//     },2000)
// }

function createPost(post){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            posts.push({ ...post,createdAt: new Date().getTime() });
            const error = false;
            if(!error){
                resolve();
            }else{
                reject('Error: something went wrong')
            }
        },2000)
    });
    
}

function updateLastActivity(post){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            post.updateLastActivity =new Date().getTime();
            resolve(post.updateLastActivity)
        },1000)
    })
}

function deletePost(post){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(posts.length>0){
                const lastElement = posts.pop()
                resolve(lastElement);
            }else{
                reject('Array is empty now')
            }
        },1000)
    });
}

            //.then 

createPost({title:'post three',body:'this is a post three'})
createPost({title:'post four',body:'this is a post four'})
.then(() => {
    getPosts()
    deletePost().then(() =>{
        getPosts()
        deletePost().then(() =>{
            getPosts()
            deletePost().then(() => {
                getPosts()
                deletePost().then(() => {
                    getPosts()
                    deletePost().then(() =>{})
                    .catch((err) =>{
                        console.log('Inside catch block',err)
                })
            })
        })
    })
})
})
.catch(err => console.log(err))

        //promice.all

// const promice1 =Promise.resolve('hellow world')
// const promice2 =10; 
// const promice3 =new Promise((resolve,reject) =>{
//     setTimeout(resolve,2000,'Goodbye')
// });

// Promise.all([promice1,promice2,promice3]).then(values =>{
//     console.log(values)
// });

function postUpdate(){
    Promise.all([createPost,updateLastActivity])
    .then(([createPost,updateLastActivity]) =>{
        updateLastActivity()
    })
    .catch(err => console.log(err))
}