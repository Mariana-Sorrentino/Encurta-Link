
// Buscar os links salvos.
export async function getLinksSaves(key){
    const myLinks = await localStorage.getItem(key)

    let linkSaves = JSON.parse(myLinks) || [];

    return linkSaves;
}



// Salvar um link no localStorage.
export async function saveLink (key, newLink){
    let linksStored = await getLinksSaves(key);

    // Se já tiver um link salvo com algum ID eu não vou deixar duplicar
    const hasLink = linksStored.some( link => link.id === newLink.id)

    if(hasLink){
        console.log('ESSE LINK JÁ EXISTE EM SUA LISTA!')
        return;
    }

    // Adicionar esse novo link na lista.
    linksStored.push(newLink)
    await localStorage.setItem(key, JSON.stringify(linksStored))
    console.log( 'LINK SALVO COM SUCESSO!')

}


// Deletar um link salvo.
export function deleteLink(links, id){

    let myLinks = links.filter( item => {
        return(item.id !==id)
    })

    localStorage.setItem('@encurtaLink', JSON.stringify(myLinks));
    console.log("LINK DELETADO COM SUCESSO!")

    return myLinks;
}
