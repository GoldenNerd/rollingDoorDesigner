'use strict';

let permitNextPage;

// ################################
// THE ROLLING DOOR OBJECT:
// ################################
/*
The RD measurements template properties object.
*/
const rd = {
  startPage: {
    objNo: 0,
    pageHeader: '🤓 Welcome to RD Designer! 🤓',
    sketchFileName: 'url(startPage.jpg)',
    noOfDataPoints: 0,
    labels: [],
    datumKeys: [],
    datumValues: [],
    dataPoints: {},
    prevObjName: 'startPage',
    activeObjName: 'startPage',
    nextObjName: 'wallCutout'
  },

  wallCutout: {
    objNo: 1,
    pageHeader: 'Wall Cutout:',
    sketchFileName: 'url(wallCutout.jpg)',
    noOfDataPoints: 5,
    labels: ['Width',
      'Height',
      'Top Clearance',
      'Left Clearance',
      'Right Clearance'],
    datumKeys: ['width',
      'height',
      'topClearance',
      'leftClearance',
      'rightClearance'],
    datumValues: [],
    dataPoints: {},
    prevObjName: 'startPage',
    activeObjName: 'wallCutout',
    nextObjName: 'barrel'
  },

  barrel: {
    objNo: 2,
    pageHeader: 'Barrel:',
    sketchFileName: 'url(barrel.jpg)',
    noOfDataPoints: 3,
    labels: ['Tube Diameter', 'Ring Style', 'Rings Diameter'],
datumKeys: ['tubeDiameter', 'ringStyle', 'ringsDiameter'],
    datumValues: [],
    dataPoints: {},
    prevObjName: 'wallCutout',
    activeObjName: 'barrel',
    nextObjName: 'slats'
  },

  slats: {
    objNo: 3,
    pageHeader: 'Slats:',
    sketchFileName: 'url(slats.jpg)',
    noOfDataPoints: 1,
    labels: ['Gauge'],
    datumKeys: ['thickness'],
    datumValues: [],
    dataPoints: {},
    prevObjName: 'barrel',
    activeObjName: 'slats',
    nextObjName: 'bottomBar'
  },

  bottomBar: {
    objNo: 4,
    pageHeader: 'Bottom Bar:',
    sketchFileName: 'url(bottomBar.jpg)',
    noOfDataPoints: 4,
    labels: ['Angle Width',
      'Angle Height',
      'Angle Thickness',
      'Angles Qty.'],
    datumKeys: ['angleWidth', 'angleHeight', 'angleThickness', 'anglesAmount'],
    datumValues: [],
    dataPoints: {},
    prevObjName: 'slats',
    activeObjName: 'bottomBar',
    nextObjName: 'spring'
  },

  spring: {
    objNo: 5,
    pageHeader: 'Torsion Spring:',
    sketchFileName: 'url(spring.jpg)',
    noOfDataPoints: 1,
    labels: ['Internal Diameter'],
    datumKeys: ['intDia'],
    datumValues: [],
    dataPoints: {},
    prevObjName: 'bottomBar',
    activeObjName: 'spring',
    nextObjName: 'misc'
  },

  misc: {
    objNo: 6,
    pageHeader: 'Miscellaneous Components:',
    sketchFileName: 'url(misc.jpg)',
    noOfDataPoints: 5,
    labels: ['Slat Style', 'Endlock Style', 'Windlock Style', 'Slide Bolt Style','Astragal Style'],
    datumKeys: ['slatStyle', 'endlockStyle', 'windlockStyle', 'slideBoltStyle','astragalStyle'],
    datumValues: [],
    dataPoints: {},
    prevObjName: 'spring',
    activeObjName: 'misc',
    nextObjName: 'result'
  },
  
  result: {
    objNo: 7,
    pageHeader: 'Final Result:',
    sketchFileName: 'url(result.jpg)',
    noOfDataPoints: 4,
    labels: ['Wire Diameter', 'Internal Diameter', 'Length', 'Amount of Turns'],
    datumKeys: ['wireDiameter', 'internalDiameter', 'length', 'amountOfTurns'],
    datumValues: [],
    dataPoints: {},
    prevObjName: 'misc',
    activeObjName: 'result',
    nextObjName: 'startPage'
  }
};

//  Global variables
let activeObj;

/*
Note: The Template ID is hard coded in the page. Therefore it is a primary reference entry point.
*/
function returnTemplateId () {
  const templateIdAttr = document.querySelector('#template-id').getAttribute('class');
  return templateIdAttr;

}

// Initialize LocSt w/ home Page's Name
/*
Save the activeObjName of the home page to localStorage. This is necessarily for consistency. Because then I can use the same navigation rules, etc. for all pages.
*/
function homePageNameToLocSto () {
  window.localStorage.clear();
  const homePageName = 'startPage';
  window.localStorage.setItem('nxtCompNamePassedOnByPrevCompPage', JSON.stringify(homePageName));
}

/*
Retrieve from localStorage the component obj name that will be used to build the page:
*/
function activeCompObjNameFromLS () {
  const compObjNameNow = JSON.parse(window.localStorage.getItem('nxtCompNamePassedOnByPrevCompPage'));
  /* The reference frame for the naming convention (previous, now, next) is the page currently on display. What used to be nextObjName for previous page is compObjNameNow for current page, and so on.
    */
  return compObjNameNow;
}

function displayTemplateId () {
  const templateId = document.querySelector('#template-id');
  const templateIdAttr = document.querySelector('#template-id').getAttribute('class');
  templateId.innerHTML = `templateId is: ${templateIdAttr}`;
}

/*
Establish the component's object name of the page. In other words, embed the activeCompObjName into a span placeholder attribute in the DOM. This attribute will be used to build a pointer to the active component object that holds all active page properties. In turn, these properties will be use to build pages on the fly using a common document template. AGENIUS!!:
*/
function establishPageName () {
  const compObjNameNow = activeCompObjNameFromLS();
  const pageHeaderObj = document.querySelector('#name-of-component-obj');
  pageHeaderObj.setAttribute('class', `${compObjNameNow}`);
}

/*
Note: The term [document.querySelector('#name-of-component-obj').getAttribute('class')] is the active component object.
*/
function returnTheActiveObj () {
  const activeObject = rd[document.querySelector('#name-of-component-obj').getAttribute('class')];
  return activeObject;
}

function returnTheActivePageName () {
  const nameOfActivePage = activeObj.activeObjName;
  return `${nameOfActivePage}`;
}

function displayPageName () {
  const pageName = document.querySelector('#name-of-component-obj');
  pageName.innerHTML = `pageName is: ${returnTheActivePageName()}`;
}

/*
Populate the page's top heather:
*/
function populatePageTopHeather () {
  const topHeather = document.querySelector('#component-name-header');
  topHeather.innerHTML = activeObj.pageHeader;
}

//Display component sketch:
function PopulateCompSketchFrame () {
  const pointerToSketchName = activeObj.sketchFileName;
  document.querySelector(':root').style.setProperty('--component-sketch', `${pointerToSketchName}`);
}

/*
Back button label must show Start Page if first component page is on display
*/
function updatePrevBtnLabel () {
  if (activeObj.objNo === 1) {
    previousComponentBtn.value = 'Start Page';
  }
}

/*
On page load, populate all page labels according to its component obj name.
*/
function populateDatumLabels () {
  const datumLabelsPlaceholders = document.getElementsByClassName('datum-labels');
  const datumLabels = activeObj.labels;
  for (let i = 0; i < datumLabelsPlaceholders.length; i++) {
    datumLabelsPlaceholders[i].innerHTML = datumLabels[i];
  }
}

function hideEmptyDatums () {
// Grab li collection and convert to array
  const measurementsList = Array.from (document.getElementsByTagName('li')); 
const amountOfDataPoints = activeObj.noOfDataPoints;
  for (let i = 0; i < amountOfDataPoints; i++) {
      measurementsList[i].style.position = ('relative');
  }
}

function initializeBtnsStyles () {
  // Grab buttons
const startBtn=document.querySelector ('.start-rolling-btn');
const readFormData=document.querySelector ('#load-measurements');
const previousPageBtn=document.querySelector ('#previous-page');
const nextPageBtn=document.querySelector ('#next-page');
// Do on page load
if (activeObj.objNo===0) {
  startBtn.style.color='white';
}else{
readFormData.style.backgroundColor=('lightgray');
previousPageBtn.style.backgroundColor=('lightgray');
nextPageBtn.style.backgroundColor=('lightgray');
readFormData.style.color=('darkblue');
previousPageBtn.style.color=('darkgreen');
nextPageBtn.style.color=('darkred');
} 
}

// ################################
// THE ON PAGE LOAD SCRIPT
// ################################
/*
 All above functions are called by the onload function. They are used to build the page for the active component object, by populating all page labels, pictures and styles. All this upon page load.
*/

window.onload = function () {
permitNextPage=false;
  // Read Template ID of the Page and simultaneously populate template id label:
  const templateId = returnTemplateId();
  // Chk if home template
  if (templateId === 'home') {
    // Initialize LocSt w/ home's Page Name:
    homePageNameToLocSto();
permitNextPage=true;
  }
  // Now handle home page as any other component page...
  // Populate template ID label (debbugging only. Not needed):
  // displayTemplateId();
  // Determine Page Name:
  establishPageName();
  // Populate page name label (debbugging only. Not needed):
  // displayPageName();
  //displayAndReturnPageName();
  //populate page top heather:
activeObj = returnTheActiveObj();
  populatePageTopHeather();
  //Display component sketch:
  PopulateCompSketchFrame();

  updatePrevBtnLabel();

  // datum-labels
  populateDatumLabels();

  hideEmptyDatums();
  
 initializeBtnsStyles();
};
// ################################
// BELOW IS THE NAVIGATION OF THE APP:
// ################################
// Styling of the buttons on mousedown:
function mousedownPreviousBtnAnimation () {
const previousPageBtn=document.querySelector ('#previous-page');
// Do on button actuation
previousPageBtn.style.backgroundColor=('black');
previousPageBtn.style.color=('white');
}
const previousPageBtn=document.querySelector ('#previous-page');
previousPageBtn.addEventListener('mousedown',
  mousedownPreviousBtnAnimation);

function mousedownNextBtnAnimation () {
const nextPageBtn=document.querySelector ('#next-page');
// Do on button actuation
nextPageBtn.style.backgroundColor=('black');
nextPageBtn.style.color=('white');
}
const nextPageBtn=document.querySelector ('#next-page');
nextPageBtn.addEventListener('mousedown',
  mousedownNextBtnAnimation);

// Page switching on mouseup:
function stashNxtComponentName () {
  const nextObjName = activeObj.nextObjName;
  window.localStorage.setItem('nxtCompNamePassedOnByPrevCompPage', JSON.stringify(nextObjName));
}
/*
Switch to the next component page after a brief time delay. Delay allows time for current page to save next page name to localStorage before transferring control to next page.
*/

function disableNxtPageSwitch () {
document.querySelector('#next-page').addEventListener('mouseup',switchToNxtComponent);
}

function switchToNxtComponent () {
  setTimeout(()=>
    window.location='mainTemplate.html'
  ,50);}

/*
Actions of the Previous Component navigation button:
*/
function stashPrevComponentName () {
  const prevComponentName = activeObj.prevObjName;
  window.localStorage.setItem('nxtCompNamePassedOnByPrevCompPage', JSON.stringify(prevComponentName));
}
/*
Switch to the previous component page after a brief time delay. Delay allows time for current page to save previous page name to localStorage before transferring control to previous page.
*/

function switchToPrevComponent () {
  setTimeout(function() {
    /*
Going back from the first component page must load the start page.
*/
if (activeObj.objNo === 1 || activeObj.objNo===7) {
      window.location = 'home.html';
    } else {
      window.location = 'mainTemplate.html';
    }
  }
  ,50);}

const previousComponentBtn = document.querySelector ('#previous-page');
previousComponentBtn.addEventListener('mouseup', ()=> {
  stashPrevComponentName(); // LocalStorage previous component page relative to the current component page.
  switchToPrevComponent(); // Switch to the previous component page after a brief time delay.
});
/*
Actions of the Next Component navigation button:
*/

document.querySelector('#next-page').addEventListener('mouseup',()=>{
  console.log (permitNextPage);
 if (permitNextPage===true) {
stashNxtComponentName(); // LocalStorage next component page relative to the current component page.
  switchToNxtComponent(); // Switch to the next component page after a brief time delay.
 }else{
   document.querySelector('#load-measurements').style.color='darkred';
document.querySelector('#load-measurements').value='CAPTURE REQUIRED';
   document.querySelector('#next-page').style.backgroundColor='darkred';
return;
 }
});

// ################################
// BELOW IS THE DATA CAPTURE OF THE APP:
// ################################
function mousedownCaptureBtnAnimation () {
  // Grab buttons
const animateCaptureBtnColors=document.querySelector ('#load-measurements');
// Do on button actuation
animateCaptureBtnColors.style.backgroundColor=('black');
animateCaptureBtnColors.style.color=('white');
}
 const animateCaptureBtnColors=document.querySelector ('#load-measurements');
animateCaptureBtnColors.addEventListener('mousedown', mousedownCaptureBtnAnimation);

function readDataFormValues () {
// Collect inches data
  const inchesTypedCollection = document.querySelectorAll('.inches-value');
  // Collect feet inchesData
  const feetTypedCollection = document.querySelectorAll('.feet-value');
// Push values to create arrays
let inchesValues=[];
let feetValues=[];
const amountOfDataPoints = activeObj.noOfDataPoints;
for (let i = 0; i < amountOfDataPoints; i++) {
 inchesValues.push(inchesTypedCollection[i].value);
feetValues.push(feetTypedCollection[i].value);
}
  // Return both arrays inside an object
  const rawValues={capturedFeet: feetValues, capturedInches: inchesValues};
  return rawValues;
  }
  
function normalizeDataPointValuesToInches () {
// load both arrays
const rawValues=readDataFormValues();
// Restrict iterations to valid values only
const amountOfDataPoints = activeObj.noOfDataPoints;
let formDataInInches=[];
// Normalize to inches and totalize
  for (let i = 0; i < amountOfDataPoints; i++) {
    formDataInInches.push(12*rawValues.capturedFeet[i] + 1*rawValues.capturedInches[i]);
  }
  return  formDataInInches;
  }
  
function saveDataPointInchesToActiveObj () {
 const formDataInInches=normalizeDataPointValuesToInches();
const amountOfDataPoints = activeObj.noOfDataPoints;
for (var i = 0; i < amountOfDataPoints; i++) {
    activeObj.datumValues[i]=formDataInInches[i];
   }} 

 function buildDataPointObjIntoActiveObj () {
const amountOfDataPoints = activeObj.noOfDataPoints;
for (var i = 0; i < amountOfDataPoints; i++) {
    activeObj.dataPoints[activeObj.datumKeys[i]] = activeObj.datumValues[i];
  }
// Once data is captured, update capture button appearance, and next button appearance

  console.log (activeObj.dataPoints);
  }
  
function updateBtnsStyles () {
// This delay is to extend the time of the capture data btn animation. Otherwise animation won't be perceived.
setTimeout(()=>afterDataCapturedBtnStyles(), 175);
}
  
function afterDataCapturedBtnStyles () {
const captureBtnLabel=document.querySelector('#load-measurements');
captureBtnLabel.style.backgroundColor=('lightgray');
captureBtnLabel.style.color=('darkgreen');
captureBtnLabel.value='DATA WAS CAPTURED';

permitNextPage=true;

const nextPageBtn=document.querySelector ('#next-page');
nextPageBtn.style.backgroundColor=('lightgray');
nextPageBtn.style.color=('darkgreen');
} 

function saveFormDataToActiveObj () {
  readDataFormValues();
  normalizeDataPointValuesToInches();
  saveDataPointInchesToActiveObj();
  buildDataPointObjIntoActiveObj();
  updateBtnsStyles();
}
const captureDataBtn=document.querySelector('#load-measurements');
captureDataBtn.addEventListener('mouseup', saveFormDataToActiveObj);