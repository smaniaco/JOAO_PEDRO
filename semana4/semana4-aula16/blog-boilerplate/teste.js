

const post =  window.location.search;
let sessao = document.getElementById("container-de-posts")
let postsplit = post.split(/&|=/)





sessao.innerHTML += `<p>Titulo: ${postsplit[1]}</p>`


sessao.innerHTML += `<p>Autor: ${postsplit[3]}</p>`


sessao.innerHTML += `<p>Mensagem: ${postsplit[5]}</p>`
console.log(postsplit[7])
if (postsplit[7].includes("https") && (postsplit[7].includes(".png")) || postsplit[7].includes(".jpg")) {
    

    sessao.innerHTML += `<img src="${postsplit[7]}">`
}




    







console.log(post)
console.log(postsplit)