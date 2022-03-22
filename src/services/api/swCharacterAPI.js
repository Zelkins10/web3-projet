const getSWCharacterData = async function() {
    const response = await fetch("https://swapi-deno.azurewebsites.net/api/people") // ancienne API qui semble être down : https://swapi.dev/api/people
    console.log(await response.status)
    if(response.status == 200){
        let data = await response.json()
        console.log(await data)
        return data
    }
    else{
        new Error(response.statusText)
    }
}

export default getSWCharacterData