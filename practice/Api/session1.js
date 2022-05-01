let apiURL = " https://api.airtable.com/v0/appZZgYQQmOHsgaMx/Table%201?api_key=keyGa2TIHOmQxAXqJ";

let apiData;


//this is where you 'call' your data
//asynchronous
async function getData(url){
    //response I get from my client API
    let response = await fetch(url);
    let jsonData = await response.json()
    return jsonData;
   
}
async function main(){
    apiData = await getData(apiURL);
    console.log(apiData);
    for(let i = 0; i < apiData.records.length; i++){
        let name = apiData.records[i].fields.Name;
        console.log(name);
        let heading = document.createElement("h2");
        heading.innerHTML = name;
        document.body.appendChild(heading);

        let image = document.createElement("img");
        image.src =  apiData.records[i].fields.Image[0].url;
        image.className = "image" + i;


    }
}
main();





