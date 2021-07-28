let objArray = [] 

const post = () => {
    let postsContents = document.getElementById("container-de-posts")
        postsContents.innerHTML = ""
        
    for (posts of objArray){

        postsContents.innerHTML += `<p>${posts.title}</p>
        <p>${posts.author}</p>
        <p>${posts.content}</p>`
      
        if (posts.image.includes("https") && (posts.image.includes(".png")) || posts.image.includes(".jpg")) {
        postsContents.innerHTML += `<img src="${image.value}">` 
        }
            
        postsContents.innerHTML += "=================="

    }
 }

 



const register = () =>{
        let title = document.getElementById("titulo-post")
        let author = document.getElementById("autor-post")
        let content = document.getElementById("conteudo-post")
        let image = document.getElementById("image")
            
    let pessoa = {
        title : title.value,
        author : author.value,
        content : content.value,
        image : image.value
    }
    title.value = ""
    author.value = ""
    content.value = ""
    objArray.push(pessoa)
    post()
    
    
    console.log(objArray)
    
}


