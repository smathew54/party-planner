//GLOBAL VARIABLES
const $fancyDiv = document.createElement("div")
const $app = document.querySelector("#app");


const displayMoreInfo = (moreInfo) => {
    const $partyDetails = document.createElement("div");
    $partyDetails.id = "details";

    if (!moreInfo) {
        const $initialScreen = document.createElement("p");
        $partyDetails.append($initialScreen)
        $app.append($partyDetails)
        return 
    }

    else {


    const $id = document.createElement("p")
    const $name = document.createElement("p")
    const $description = document.createElement("p")
    const $date = document.createElement("p")


    $id.textContent = moreInfo.id
    $name.textContent = moreInfo.name
    $description.textContent = moreInfo.description
    $date.textContent = moreInfo.date

    $partyDetails.append($id)
    $partyDetails.append($name)
    $partyDetails.append($description)

    //then add to the main app
    $fancyDiv.innerHTML = ""
    $fancyDiv.append($partyDetails)
    }

}


const getMoreInfo = async (id) => {
    console.log(id)
    try {
        const response = await fetch(
            `https://fsa-crud-2aa9294fe819.herokuapp.com/api/2505-ftb-ct-web-pt/events/${id}`
        );
        const data = await response.json();
        console.log(data);
        displayMoreInfo(data.data)
  } catch (error) {
    console.error(error);
  }
};

const displayComponents = (coreData) => {
  console.log("displayComponents");

  //makes the first outer elements of the visual
  const $app = document.querySelector("#app");
  $h1 = document.createElement("h1");
  $h2 = document.createElement("h2");
  $h1.textContent = "Party Planner";
  $h2.textContent = "Upcoming Parties";
  $app.append($h1);
  $app.append($h2);

  //now here we make the buttons
  for (const element of coreData) {
    $div = document.createElement("div");
    $h3 = document.createElement("h3");
    $button = document.createElement("button");
    $button.textContent = element.name;
    console.log(element.id)
    $button.addEventListener("click", () => getMoreInfo(element.id));
    $h3.textContent = element.name;
    //$div.append($h3);
    $div.append($button);
    $app.append($div);
  }
};

const fetchData = async () => {
  console.log("fetch the data");
  try {
    const response = await fetch(
      "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2505-ftb-ct-web-pt/events"
    );

    //this is the full json, with information that isn't needed
    const data = await response.json();

    //this is just the data we want for the part
    const coreData = data.data;
    console.log(coreData);
    displayComponents(coreData);
  } catch (error) {
    console.error(error);
  }
};

const main = () => {
  console.log("here we go");
  fetchData();
  $app.append($fancyDiv)
};

main();
