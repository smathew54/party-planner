
const displayComponents = (coreData) => {
    console.log("displayComponents")
    const $app = document.querySelector("#app");
    $h1 = document.createElement("h1")
    $h2 = document.createElement("h2")
    $h1.textContent = "Party Planner"
    $h2.textContent = "Upcoming Parties"
    $app.append($h1)
    $app.append($h2)
    for (const element of coreData) {
        $div = document.createElement("div");
    
        $h3 = document.createElement("h3");
        $button = document.createElement("button")
        $button.textContent = element.name;
        $h3.textContent = element.name;
        $button = document.createElement("button");
        $div.append($h3)
        $div.append($button)
        $app.append($div)


    }
}


const fetchData = async() => {
    console.log("fetch the data")
    try {
        const response = await fetch("https://fsa-crud-2aa9294fe819.herokuapp.com/api/2505-ftb-ct-web-pt/events");
        const data = await response.json();
        const coreData = (data.data)
        console.log(coreData)
        for (let value of coreData) {
            console.log(value.id)
        }
        displayComponents(coreData)
    }
    catch (error){
        console.error(error)
    }
}



const main = () => {
    console.log("here we go");
    fetchData()
}

main()
