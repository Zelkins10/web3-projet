const getSWData = async function() {
    const response = await fetch("https://swapi-deno.azurewebsites.net/api/people") // ancienne API qui semble être down : https://swapi.dev/api
    if(response.status == 200){
        return response.json()
    }
    else{
        new Error(response.statusText)
    }
}

export { getSWData } // export default plutôt

// @ dans chemin dans swAPI équivaut à mettre le dossier src