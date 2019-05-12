window.addEventListerner("load", function(){
  function cat() {

      const tabStr = "current, complete, construction, development, commercial, multiFamily, singleFamily, available";

      let projectArray = [];
      let temp = tabStr.split(",").map(e =>

      projectArray.push(e + "Project")
      );

      return projectArray;
  }

  console.log(cat()); //currentProject, completeProject, constructionProject, developmentProject, commercialProject, multiFamilyProject, singleFamilyProject, availableProject


  let projectArray = [];

function cat() {
    let tabStr = "current, complete, construction, development, commercial, multiFamily, singleFamily, available";
    let temp = tabStr.split(",").map(e =>
    document.getElementById("e")
    );
    return temp;
}

console.log(cat());



function cat() {
    let tabStr = "current complete construction development commercial multiFamily singleFamily available";
    let temp = tabStr.split(" ").map(e => "project" + e.charAt(0).toUpperCase() + e.slice(1) + "Images")
    return temp;
}

console.log(cat()); //projectCurrentImages,projectCompleteImages,projectConstructionImages,projectDevelopmentImages,projectCommercialImages,projectMultiFamilyImages,projectSingleFamilyImages,projectAvailableImages


function imageDisplay {
  let tabs =

}

window.onload = 

function myFunction(x) { x.style.display = (x.style.display === "none" ? "block" : "none"); }
