window.onload = function start() {
  var error = document.querySelectorAll('div[id$="Images"]').forEach(e => e.style.display = "none");

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

  current.addEventListener("click", function current(){
    var error = document.querySelectorAll('div[id$="Images"]').forEach(e => e.style.display = "none");
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
      default:
        document.getElementById("projectsCurrentImages").style.display = "block";
    }
  });

  complete.addEventListener("click", function complete(){
    var error = document.querySelectorAll('div[id$="Images"]').forEach(e => e.style.display = "none");
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
      default:
        document.getElementById("projectsCurrentImages").style.display = "block";
    }
  });

  construction.addEventListener("click", function construction(){
    var error = document.querySelectorAll('div[id$="Images"]').forEach(e => e.style.display = "none");
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
      default:
        document.getElementById("projectsCurrentImages").style.display = "block";
    }
  });

  development.addEventListener("click", function development(){
    var error = document.querySelectorAll('div[id$="Images"]').forEach(e => e.style.display = "none");
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
      default:
        document.getElementById("projectsCurrentImages").style.display = "block";
    }
  });

  commercial.addEventListener("click", function commercial(){
    var error = document.querySelectorAll('div[id$="Images"]').forEach(e => e.style.display = "none");
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
      default:
        document.getElementById("projectsCurrentImages").style.display = "block";
    }
  });

  multiFamily.addEventListener("click", function multiFamily(){
    var error = document.querySelectorAll('div[id$="Images"]').forEach(e => e.style.display = "none");
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
      default:
        document.getElementById("projectsCurrentImages").style.display = "block";
    }
  });

  singleFamily.addEventListener("click", function singleFamily(){
    var error = document.querySelectorAll('div[id$="Images"]').forEach(e => e.style.display = "none");
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
      default:
        document.getElementById("projectsCurrentImages").style.display = "block";
    }
  });

  available.addEventListener("click", function available(){
    var error = document.querySelectorAll('div[id$="Images"]').forEach(e => e.style.display = "none");
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
      default:
        document.getElementById("projectsCurrentImages").style.display = "block";
    }
  });
}
