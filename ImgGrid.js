window.onload = function start() {
  var offDisplay = document.querySelectorAll('div[id$="Images"]').forEach(e => e.style.display = "none");

  var displayAfter = -1;
  switch (displayAfter) {
    case 0:
      document.getElementById("projectsCurrentImages").style.display = "block";
      break;
    case 1:
      document.getElementById("projectsCompleteImages").style.display = "block";
      break;
    case 2:
      document.getElementById("projectsConstructionImages").style.display = "block";
      break;
    case 3:
      document.getElementById("projectsDevelopmentImages").style.display = "block";
      break;
    case 4:
      document.getElementById("projectsCommercialImages").style.display = "block";
      break;
    case 5:
      document.getElementById("projectsMultiFamilyImages").style.display = "block";
      break;
    case 6:
      document.getElementById("projectsSingleFamilyImages").style.display = "block";
      break;
    case 7:
      document.getElementById("projectsAvailableImages").style.display = "block";
      break;
    case 8:
      document.getElementById("projectsMapImages").style.display = "block";
      break;
    default:
      document.getElementById("projectsCurrentImages").style.display = "block";
  }

  var current = document.getElementById("current");
  var complete = document.getElementById("complete");
  var construction = document.getElementById("construction");
  var development = document.getElementById("development");
  var commercial = document.getElementById("commercial");
  var multiFamily = document.getElementById("multiFamily");
  var singleFamily = document.getElementById("singleFamily");
  var available = document.getElementById("available");
  var mapView = document.getElementById("map");

  current.addEventListener("click", function current(){
    var offDisplay = document.querySelectorAll('div[id$="Images"]').forEach(e => e.style.display = "none");
    var displayAfter = 0;
    switch (displayAfter) {
      case 0:
        document.getElementById("projectsCurrentImages").style.display = "block";
        break;
      case 1:
        document.getElementById("projectsCompleteImages").style.display = "block";
        break;
      case 2:
        document.getElementById("projectsConstructionImages").style.display = "block";
        break;
      case 3:
        document.getElementById("projectsDevelopmentImages").style.display = "block";
        break;
      case 4:
        document.getElementById("projectsCommercialImages").style.display = "block";
        break;
      case 5:
        document.getElementById("projectsMultiFamilyImages").style.display = "block";
        break;
      case 6:
        document.getElementById("projectsSingleFamilyImages").style.display = "block";
        break;
      case 7:
        document.getElementById("projectsAvailableImages").style.display = "block";
        break;
      case 8:
        document.getElementById("projectsMapImages").style.display = "block";
        break;
      default:
        document.getElementById("projectsCurrentImages").style.display = "block";
    }
  });

  complete.addEventListener("click", function complete(){
    var offDisplay = document.querySelectorAll('div[id$="Images"]').forEach(e => e.style.display = "none");
    var displayAfter = 1;
    switch (displayAfter) {
      case 0:
        document.getElementById("projectsCurrentImages").style.display = "block";
        break;
      case 1:
        document.getElementById("projectsCompleteImages").style.display = "block";
        break;
      case 2:
        document.getElementById("projectsConstructionImages").style.display = "block";
        break;
      case 3:
        document.getElementById("projectsDevelopmentImages").style.display = "block";
        break;
      case 4:
        document.getElementById("projectsCommercialImages").style.display = "block";
        break;
      case 5:
        document.getElementById("projectsMultiFamilyImages").style.display = "block";
        break;
      case 6:
        document.getElementById("projectsSingleFamilyImages").style.display = "block";
        break;
      case 7:
        document.getElementById("projectsAvailableImages").style.display = "block";
        break;
      case 8:
        document.getElementById("projectsMapImages").style.display = "block";
        break;
      default:
        document.getElementById("projectsCurrentImages").style.display = "block";
    }
  });

  construction.addEventListener("click", function construction(){
    var offDisplay = document.querySelectorAll('div[id$="Images"]').forEach(e => e.style.display = "none");
    var displayAfter = 2;
    switch (displayAfter) {
      case 0:
        document.getElementById("projectsCurrentImages").style.display = "block";
        break;
      case 1:
        document.getElementById("projectsCompleteImages").style.display = "block";
        break;
      case 2:
        document.getElementById("projectsConstructionImages").style.display = "block";
        break;
      case 3:
        document.getElementById("projectsDevelopmentImages").style.display = "block";
        break;
      case 4:
        document.getElementById("projectsCommercialImages").style.display = "block";
        break;
      case 5:
        document.getElementById("projectsMultiFamilyImages").style.display = "block";
        break;
      case 6:
        document.getElementById("projectsSingleFamilyImages").style.display = "block";
        break;
      case 7:
        document.getElementById("projectsAvailableImages").style.display = "block";
        break;
      case 8:
        document.getElementById("projectsMapImages").style.display = "block";
        break;
      default:
        document.getElementById("projectsCurrentImages").style.display = "block";
    }
  });

  development.addEventListener("click", function development(){
    var offDisplay = document.querySelectorAll('div[id$="Images"]').forEach(e => e.style.display = "none");
    var displayAfter = 3;
    switch (displayAfter) {
      case 0:
        document.getElementById("projectsCurrentImages").style.display = "block";
        break;
      case 1:
        document.getElementById("projectsCompleteImages").style.display = "block";
        break;
      case 2:
        document.getElementById("projectsConstructionImages").style.display = "block";
        break;
      case 3:
        document.getElementById("projectsDevelopmentImages").style.display = "block";
        break;
      case 4:
        document.getElementById("projectsCommercialImages").style.display = "block";
        break;
      case 5:
        document.getElementById("projectsMultiFamilyImages").style.display = "block";
        break;
      case 6:
        document.getElementById("projectsSingleFamilyImages").style.display = "block";
        break;
      case 7:
        document.getElementById("projectsAvailableImages").style.display = "block";
        break;
      case 8:
        document.getElementById("projectsMapImages").style.display = "block";
        break;
      default:
        document.getElementById("projectsCurrentImages").style.display = "block";
    }
  });

  commercial.addEventListener("click", function commercial(){
    var offDisplay = document.querySelectorAll('div[id$="Images"]').forEach(e => e.style.display = "none");
    var displayAfter = 4;
    switch (displayAfter) {
      case 0:
        document.getElementById("projectsCurrentImages").style.display = "block";
        break;
      case 1:
        document.getElementById("projectsCompleteImages").style.display = "block";
        break;
      case 2:
        document.getElementById("projectsConstructionImages").style.display = "block";
        break;
      case 3:
        document.getElementById("projectsDevelopmentImages").style.display = "block";
        break;
      case 4:
        document.getElementById("projectsCommercialImages").style.display = "block";
        break;
      case 5:
        document.getElementById("projectsMultiFamilyImages").style.display = "block";
        break;
      case 6:
        document.getElementById("projectsSingleFamilyImages").style.display = "block";
        break;
      case 7:
        document.getElementById("projectsAvailableImages").style.display = "block";
        break;
      case 8:
        document.getElementById("projectsMapImages").style.display = "block";
        break;
      default:
        document.getElementById("projectsCurrentImages").style.display = "block";
    }
  });

  multiFamily.addEventListener("click", function multiFamily(){
    var offDisplay = document.querySelectorAll('div[id$="Images"]').forEach(e => e.style.display = "none");
    var displayAfter = 5;
    switch (displayAfter) {
      case 0:
        document.getElementById("projectsCurrentImages").style.display = "block";
        break;
      case 1:
        document.getElementById("projectsCompleteImages").style.display = "block";
        break;
      case 2:
        document.getElementById("projectsConstructionImages").style.display = "block";
        break;
      case 3:
        document.getElementById("projectsDevelopmentImages").style.display = "block";
        break;
      case 4:
        document.getElementById("projectsCommercialImages").style.display = "block";
        break;
      case 5:
        document.getElementById("projectsMultiFamilyImages").style.display = "block";
        break;
      case 6:
        document.getElementById("projectsSingleFamilyImages").style.display = "block";
        break;
      case 7:
        document.getElementById("projectsAvailableImages").style.display = "block";
        break;
      case 8:
        document.getElementById("projectsMapImages").style.display = "block";
        break;
      default:
        document.getElementById("projectsCurrentImages").style.display = "block";
    }
  });

  singleFamily.addEventListener("click", function singleFamily(){
    var offDisplay = document.querySelectorAll('div[id$="Images"]').forEach(e => e.style.display = "none");
    var displayAfter = 6;
    switch (displayAfter) {
      case 0:
        document.getElementById("projectsCurrentImages").style.display = "block";
        break;
      case 1:
        document.getElementById("projectsCompleteImages").style.display = "block";
        break;
      case 2:
        document.getElementById("projectsConstructionImages").style.display = "block";
        break;
      case 3:
        document.getElementById("projectsDevelopmentImages").style.display = "block";
        break;
      case 4:
        document.getElementById("projectsCommercialImages").style.display = "block";
        break;
      case 5:
        document.getElementById("projectsMultiFamilyImages").style.display = "block";
        break;
      case 6:
        document.getElementById("projectsSingleFamilyImages").style.display = "block";
        break;
      case 7:
        document.getElementById("projectsAvailableImages").style.display = "block";
        break;
      case 8:
        document.getElementById("projectsMapImages").style.display = "block";
        break;
      default:
        document.getElementById("projectsCurrentImages").style.display = "block";
    }
  });

  available.addEventListener("click", function available(){
    var offDisplay = document.querySelectorAll('div[id$="Images"]').forEach(e => e.style.display = "none");
    var displayAfter = 7;
    switch (displayAfter) {
      case 0:
        document.getElementById("projectsCurrentImages").style.display = "block";
        break;
      case 1:
        document.getElementById("projectsCompleteImages").style.display = "block";
        break;
      case 2:
        document.getElementById("projectsConstructionImages").style.display = "block";
        break;
      case 3:
        document.getElementById("projectsDevelopmentImages").style.display = "block";
        break;
      case 4:
        document.getElementById("projectsCommercialImages").style.display = "block";
        break;
      case 5:
        document.getElementById("projectsMultiFamilyImages").style.display = "block";
        break;
      case 6:
        document.getElementById("projectsSingleFamilyImages").style.display = "block";
        break;
      case 7:
        document.getElementById("projectsAvailableImages").style.display = "block";
        break;
      case 8:
        document.getElementById("projectsMapImages").style.display = "block";
        break;
      default:
        document.getElementById("projectsCurrentImages").style.display = "block";
    }
  });

  mapView.addEventListener("click", function mapView(){
    var offDisplay = document.querySelectorAll('div[id$="Images"]').forEach(e => e.style.display = "none");
    var displayAfter = 8;
    switch (displayAfter) {
      case 0:
        document.getElementById("projectsCurrentImages").style.display = "block";
        break;
      case 1:
        document.getElementById("projectsCompleteImages").style.display = "block";
        break;
      case 2:
        document.getElementById("projectsConstructionImages").style.display = "block";
        break;
      case 3:
        document.getElementById("projectsDevelopmentImages").style.display = "block";
        break;
      case 4:
        document.getElementById("projectsCommercialImages").style.display = "block";
        break;
      case 5:
        document.getElementById("projectsMultiFamilyImages").style.display = "block";
        break;
      case 6:
        document.getElementById("projectsSingleFamilyImages").style.display = "block";
        break;
      case 7:
        document.getElementById("projectsAvailableImages").style.display = "block";
        break;
      case 8:
        document.getElementById("projectsMapImages").style.display = "block";
        var mapOption1 = document.getElementById("mapOption1");
        var mapOption2 = document.getElementById("mapOption2");
        var mapOption3 = document.getElementById("mapOption3");
        break;
      default:
        document.getElementById("projectsCurrentImages").style.display = "block";
    }
  });

  mapOption1.addEventListener("click", function mapToggle1() {
    var mapNumber = 1;
    switch (mapNumber) {
      case 1:
        var mapOne = document.getElementById("mapTarget").src = "https://www.google.com/maps/d/embed?mid=1oKhfBJ2N1wgJEakt-nTqzHhJiTiODfCV";
        mapOne.style.display = "block";
        break;
      case 2:
        var mapTwo = document.getElementById("mapTarget").src = "https://www.google.com/maps/d/u/0/embed?mid=1mVcypCHH6zgXxLSU6Mgw7tWoBR3Y7Tgc";
        mapTwo.style.display = "block";
        break;
      case 3:
        var mapThree = document.getElementById("mapTarget").src = "https://www.google.com/maps/d/u/0/embed?mid=1JnUEMuqSQ1BNI7WlOZ8MmeHOY6XXJFLY";
        mapThree.style.display = "block";
        break;
      }
  });

  mapOption2.addEventListener("click", function mapToggle2() {
    var mapNumber = 2;
    switch (mapNumber) {
      case 1:
        var mapOne = document.getElementById("mapTarget").src = "https://www.google.com/maps/d/embed?mid=1oKhfBJ2N1wgJEakt-nTqzHhJiTiODfCV";
        mapOne.style.display = "block";
        break;
      case 2:
        var mapTwo = document.getElementById("mapTarget").src = "https://www.google.com/maps/d/u/0/embed?mid=1mVcypCHH6zgXxLSU6Mgw7tWoBR3Y7Tgc";
        mapTwo.style.display = "block";
        break;
      case 3:
        var mapThree = document.getElementById("mapTarget").src = "https://www.google.com/maps/d/u/0/embed?mid=1JnUEMuqSQ1BNI7WlOZ8MmeHOY6XXJFLY";
        mapThree.style.display = "block";
        break;
    }
  });

  mapOption3.addEventListener("click", function mapToggle2() {
    var mapNumber = 3;
    switch (mapNumber) {
      case 1:
        var mapOne = document.getElementById("mapTarget").src = "https://www.google.com/maps/d/embed?mid=1oKhfBJ2N1wgJEakt-nTqzHhJiTiODfCV";
        mapOne.style.display = "block";
        break;
      case 2:
        var mapTwo = document.getElementById("mapTarget").src = "https://www.google.com/maps/d/u/0/embed?mid=1mVcypCHH6zgXxLSU6Mgw7tWoBR3Y7Tgc";
        mapTwo.style.display = "block";
        break;
      case 3:
        var mapThree = document.getElementById("mapTarget").src = "https://www.google.com/maps/d/u/0/embed?mid=1JnUEMuqSQ1BNI7WlOZ8MmeHOY6XXJFLY";
        mapThree.style.display = "block";
        break;
    }
  });

}
