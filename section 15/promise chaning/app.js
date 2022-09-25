const fakeRequest =(url)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const pages={
                '/users'   :[
                    {id:1, username:'Bil'},
                    {id:5, username:"El"}
                ],
                '/users/1'  :{
                    id:1,
                    username:"Bil",
                    upvotes:360,
                    city:'Lisbon',
                    topPostId:4543
                },
                '/users/5'  :{
                    id:5,
                    username:"El",
                    upvotes:517,
                    city:'Jai',
                   
                },
                '/posts/4543' :{
                    id:4543,
                    title:'hi i am rahul'
                },
                '/about' :'this is about page'
            };
            const data =pages[url];
            if(data){
                resolve({status:200,data});
            }else{
                reject({status:404});
            }
        },1000)
    })



    
};

fakeRequest('/users')
.then((res)=>{
    // console.log(res.data);
    const id=res.data[0].id;
    fakeRequest(`/users/${id}`)
})
.then((res)=>{
    // console.log(res);
    const postId=res.data.topPostId
    return fakeRequest(`/posts/${postId}`)
})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log('Oh No!',err);
})