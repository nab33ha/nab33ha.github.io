let apiURL = "https://api.airtable.com/v0/appnAt7eTnowFP1rH/Sheet1?api_key=keyGa2TIHOmQxAXqJ";

let apiData;

let songGenre;

async function getData(url){
    //response I get from my client API
    let response = await fetch(url);
    let jsonData = await response.json()
    return jsonData;
   
}
async function main(){
    apiData = await getData(apiURL);
    console.log(apiData);
    
}

    // for(let i = 0; i < apiData.records.length; i++){
    //     let name = apiData.records[i].fields.FeelingLonelyinMyStudioApartment;
    //     console.log(name);
        
    //     let heading = document.createElement("h2");
    //     heading.innerHTML = name;
    //     document.body.appendChild(heading);
//     }
// }

let i = 0;
// let record = apiData.records[i].fields;


main();




        // let image = document.createElement("img");
        // image.src =  apiData.records[i].fields.Image[0].url;
        // image.className = "image" + i;


