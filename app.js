'use strict';
// ################################
// THE ROLLING DOOR OBJECT:
// §###############################
/* 
The RD measurements template properties object.
*/
let rd = {
  namesOfPagesThatContainData: ['wallCutout', 'barrel', 'slats', 'bottomBar', 'bottomBar', 'spring', 'misc', 'misc2'],
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
    ftPresets: [12, 10, 3, 2, 1],
    inchesPresets: [0, 0, 1, 2, 3],
    ftView: ['inline-block' , 'inline-block' , 'inline-block', 'inline-block', 'inline-block'],
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
    datumValues: [120, 120, 30, 20, 20],
    dataPoints: {
    width:120,
      height: 120,
      topClearance: 30,
      leftClearance: 18,
      rightClearance: 20
    },
    prevObjName: 'startPage',
    activeObjName: 'wallCutout',
    nextObjName: 'barrel'
  },

  barrel: {
    objNo: 2,
    pageHeader: 'Barrel:',
    sketchFileName: 'url(barrel.jpg)',
    noOfDataPoints: 3,
    ftPresets: [0,0,0],
    inchesPresets: [4.625, 1, 7.75],
    ftView: ['none' , 'none' , 'none'],
    labels: ['Tube Diameter',
      'Ring Style',
      'Rings Diameter'],
    datumKeys: ['tubeDiameter',
      'ringStyle',
      'ringsDiameter'],
    datumValues: [],
    dataPoints: {
     tubeDiameter: 7.75
     
    },
    prevObjName: 'wallCutout',
    activeObjName: 'barrel',
    nextObjName: 'slats'
  },

  slats: {
    objNo: 3,
    pageHeader: 'Slats:',
    sketchFileName: 'url(slats.jpg)',
    noOfDataPoints: 1,
    ftPresets: [0],
    inchesPresets: [20],
    ftView: ['none'],
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
    ftPresets: [0, 0, 0, 0],
    inchesPresets: [2, 2, 0.125, 2],
    ftView: ['none' , 'none' , 'none', 'none'],
    labels: ['Angle Width',
      'Angle Height',
      'Angle Thickness',
      'Angles Qty.'],
    datumKeys: ['bbAngleHorizontalSide',
      'bbAngleVerticalSide',
      'bbAngleThickness',
      'bbAnglesAmount'],
    datumValues: [],
    dataPoints: {
     bbAngleHorizontalSide:2,
     bbAngleVerticalSide:2,
     bbAngleThickness:0.1250,
     bbAnglesAmount: 2
    },
    prevObjName: 'slats',
    activeObjName: 'bottomBar',
    nextObjName: 'spring'
  },

  spring: {
    objNo: 5,
    pageHeader: 'Torsion Spring:',
    sketchFileName: 'url(spring.jpg)',
    noOfDataPoints: 1,
    ftPresets: [0],
    inchesPresets: [3.0625],
    ftView: ['none'],
    labels: ['Internal Diameter'],
    datumKeys: ['intDia'],
    datumValues: [],
    dataPoints: {
     intDia: 3.0635
     
    },
    prevObjName: 'bottomBar',
    activeObjName: 'spring',
    nextObjName: 'misc'
  },

  misc: {
    objNo: 6,
    pageHeader: 'Other Items:',
    sketchFileName: 'url(misc.jpg)',
    noOfDataPoints: 5,
    ftPresets: [0, 0, 0, 0, 0],
    inchesPresets: [1, 1, 0, 1, 1],
    ftView: ['none', 'none' , 'none', 'none', 'none'],
    labels: ['Slats Style',
      'Endlocks Style',
      'Windlocks',
      'Slide Bolts',
      'Astragal'],
    datumKeys: ['slatStyle',
      'endlockStyle',
      'useWindlocks',
      'useSlideBolts',
      'useAstragal'],
    datumValues: ['curvedSlat', 'metalEndlocks', false, true, true],
    dataPoints: {
     slatStyle: 1,
     endlockStyle: 1, 
     useWindlocks: 0,
     useSlideBolts: 1,
     useAstragal: 1
    },
    prevObjName: 'spring',
    activeObjName: 'misc',
    nextObjName: 'misc2'
  },

  misc2: {
    objNo: 7,
    pageHeader: 'Mounting Location:',
    sketchFileName: 'url(misc2.jpg)',
    noOfDataPoints: 1,
    ftPresets: [0],
    inchesPresets: [1],
    ftView: ['none'],
    labels: ['Location'],
    datumKeys: ['mounting'],
    datumValues: [true],
    dataPoints: {
     mounting: 1
    },
    prevObjName: 'misc',
    activeObjName: 'misc2',
    nextObjName: 'result'
  },

  result: {
    objNo: 8,
    pageHeader: 'Spring Parameters:',
    sketchFileName: 'url(result.jpg)',
    noOfDataPoints: 5,
    ftPresets: [0, 0, 0, 0, 0],
    inchesPresets: ['0', 3.0625, '0', '0', '0'],
    ftView: ['none' , 'none' , 'none', 'none', 'none'],
    labels: ['Wire Diameter',
      'Internal Diameter',
      'Length',
      'Amount of Turns',
      'Weight'],
    datumKeys: ['wireDiameter',
      'internalDiameter',
      'width',
      'amountOfTurns',
      'weight'],
    datumValues: [],
    dataPoints: {
     wireDiameter: 0.4062,
      internalDiameter: 0,
      width: 0,
      amountOfTurns: 0,
      weight: 0
    },
    prevObjName: 'startPage',
    activeObjName: 'result',
    nextObjName: 'result'
  }
};


//  Global variables
let activeObj; // global due to numerous times used

// Values for debugging purposes:

// ################################
// THE ON_PAGE_LOAD SCRIPT
// §###############################
/*
All pages derived from main Template require that data capture button is pressed before allowing switch to next page. On start page we have no capture button, but next button is same on all pages. This flag is to provide mechanism for switching to the next page without having a capture button on the start page. 
*/
let allowSwitchingToNextPage;
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
// function not used:
function ulShowHideCtrl () {
  if (activeObj.objNo === 8) {
  // Note: 8 is the result page. For result page, the std ul must be hidden in favor of the span ul. 
document.querySelector('#std-ul'). style.display='none';
document.querySelector('#span-ul').style.display='inline-block';
  }else{
document.querySelector('#std-ul').style.display='inline-block';
document.querySelector('#span-ul'). style.display='none';
  }
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

function ldFtDfaults () {
const ftValueFields=document.getElementsByClassName('feet-value');
const amountOfDataPoints = activeObj.noOfDataPoints;
for (var i = 0; i < amountOfDataPoints; i++) {
ftValueFields[i].value=activeObj.ftPresets[i];
}
}

function ldInchesDfaults () {
const inchesValueFields=document.getElementsByClassName('inches-value');
const amountOfDataPoints = activeObj.noOfDataPoints;
for (var i = 0; i < amountOfDataPoints; i++) {
inchesValueFields[i].value=activeObj.inchesPresets[i];
}
}

function setFtValsVisibility () {
const ftValueFields=document.getElementsByClassName('feet-value');
const amountOfDataPoints = activeObj.noOfDataPoints;
for (var i = 0; i < amountOfDataPoints; i++) {
const pointerToSketchName = activeObj.ftView[i];
ftValueFields[i].style.setProperty('--feet-view-style', `${pointerToSketchName}`);
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
  const startBtn = document.querySelector ('.start-rolling-btn');
  const readFormData = document.querySelector ('#load-measurements');
  const previousPageBtn = document.querySelector ('#previous-page');
  const nextPageBtn = document.querySelector ('#next-page');
  // Do on page load
  if (activeObj.objNo === 0) {
    startBtn.style.color = 'white';
  } else {
    readFormData.style.backgroundColor = ('lightgray');
    previousPageBtn.style.backgroundColor = ('lightgray');
    nextPageBtn.style.backgroundColor = ('lightgray');
    readFormData.style.color = ('darkblue');
    previousPageBtn.style.color = ('darkgreen');
    nextPageBtn.style.color = ('darkred');
  }
}

/*
 All above functions are called by the onload function. They are used to build the page for the active component object, by populating all page labels, pictures and styles. All this upon page load.
*/
window.onload = function () {
  allowSwitchingToNextPage = false;
  // Read Template ID of the Page, and simultaneously populate template id label:
  const templateId = returnTemplateId();
  // Chk if home template
  if (templateId === 'home') {
    // Initialize LocSt w/ home's Page Name:
    homePageNameToLocSto();
    allowSwitchingToNextPage = true;
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

  ulShowHideCtrl();

  updatePrevBtnLabel();

  // datum-labels
  populateDatumLabels();

  ldFtDfaults();

  ldInchesDfaults();

  setFtValsVisibility();

  hideEmptyDatums();

  initializeBtnsStyles();

  if (activeObj.objNo === 8) {
  /*
  Note: 8 is the result page.  Calc button is same capture button that takes on a "calc identity" on the result page. That's why a new button skin is required.
  */
    styleCaptureBtnAsCalcBtn();
    
  }
  
};

// ################################
// BELOW IS THE NAVIGATION OF THE APP:
// §###############################

// Styling of the buttons on mousedown:
function mousedownPreviousBtnAnimation () {
  const previousPageBtn = document.querySelector ('#previous-page');
  // Do on button actuation
  previousPageBtn.style.backgroundColor = ('black');
  previousPageBtn.style.color = ('white');
}
const previousPageBtn = document.querySelector ('#previous-page');
previousPageBtn.addEventListener('mousedown',
  mousedownPreviousBtnAnimation);

function mousedownNextBtnAnimation () {
  const nextPageBtn = document.querySelector ('#next-page');
  // Do on button actuation
  nextPageBtn.style.backgroundColor = ('black');
  nextPageBtn.style.color = ('white');
}
const nextPageBtn = document.querySelector ('#next-page');
nextPageBtn.addEventListener('mousedown',
  mousedownNextBtnAnimation);

// Page switching on mouseup:
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
    if (activeObj.objNo === 1 || activeObj.objNo === 8) {
      window.location = 'index.html';
     /*
    } else if(activeObj.objNo === 7) {
      window.location = 'radioTemplate.html';
    */  
    }else{
      window.location = 'mainTemplate.html';
    }
  },
    50);
}

const previousComponentBtn = document.querySelector ('#previous-page');
previousComponentBtn.addEventListener('mouseup', ()=> {
  stashPrevComponentName(); // LocalStorage previous component page relative to the current component page.
  switchToPrevComponent(); // Switch to the previous component page after a brief time delay.
});
/*
Actions of the Next Component navigation button:
*/

function stashNxtComponentName () {
  const nextObjName = activeObj.nextObjName;
  window.localStorage.setItem('nxtCompNamePassedOnByPrevCompPage',
    JSON.stringify(nextObjName));
}
/*
Switch to the next component page after a brief time delay. Delay allows time for current page to save next page name to localStorage before transferring control to next page.
*/

function switchToNxtComponent () {
  setTimeout(()=> {
    /*
Going forward from the last component page must load the result page.
*/
/*
    if (activeObj.objNo === 5 ||activeObj.objNo === 6 ) {
     window.location = 'radioTemplate.html';
     
    }else      */
    if (activeObj.objNo === 7) {
      window.location = 'resultTemplate.html';
    } else {
      window.location = 'mainTemplate.html';
    }
  },
    50);
}

document.querySelector('#next-page').addEventListener('mouseup', ()=> {
  if (allowSwitchingToNextPage === true) {
    stashNxtComponentName(); // LocalStorage next component page relative to the current component page.
    switchToNxtComponent(); // Switch to the next component page after a brief time delay.
  } else {
    document.querySelector('#load-measurements').style.color = 'darkred';
    document.querySelector('#load-measurements').value = 'CAPTURE REQUIRED';
    document.querySelector('#next-page').style.backgroundColor = 'darkred';
    return;
  }
});

// ################################
// BELOW IS THE DATA CAPTURE OF THE APP:
// §###############################

function mousedownCaptureBtnAnimation () {
  // Grab buttons
  const animateCaptureBtnColors = document.querySelector ('#load-measurements');
  // Do on button actuation
  animateCaptureBtnColors.style.backgroundColor = ('black');
  animateCaptureBtnColors.style.color = ('white');
}
const animateCaptureBtnColors = document.querySelector ('#load-measurements');
animateCaptureBtnColors.addEventListener('mousedown', mousedownCaptureBtnAnimation); 

// Function not used
function rdObjFromLocSto () {
let rd=JSON.parse(window.localStorage.getItem('rd'));
}

function readDataFormValues () {
  // Collect inches data
  const inchesTypedCollection = document.querySelectorAll('.inches-value');
  // Collect feet inchesData
  const feetTypedCollection = document.querySelectorAll('.feet-value');
  // Push values to create arrays
  let inchesValues = [];
  let feetValues = [];
  const amountOfDataPoints = activeObj.noOfDataPoints;
  for (let i = 0; i < amountOfDataPoints; i++) {
    inchesValues.push(inchesTypedCollection[i].value);
    feetValues.push(feetTypedCollection[i].value);
  }
  // Return both arrays inside an object
  const rawValues = {
    capturedFeet: feetValues,
    capturedInches: inchesValues
  };
  return rawValues;
}

function normalizeDataPointValuesToInches () {
  // load both arrays
  const rawValues = readDataFormValues();
  // Restrict iterations to valid values only
  const amountOfDataPoints = activeObj.noOfDataPoints;
  let formDataInInches = [];
  // Normalize to inches and totalize
  for (let i = 0; i < amountOfDataPoints; i++) {
    formDataInInches.push(12*rawValues.capturedFeet[i] + 1*rawValues.capturedInches[i]);
  }
  return  formDataInInches;
}

function saveDataPointInchesToActiveObj () {
  const formDataInInches = normalizeDataPointValuesToInches();
  const amountOfDataPoints = activeObj.noOfDataPoints;
  for (var i = 0; i < amountOfDataPoints; i++) {
    activeObj.datumValues[i] = formDataInInches[i];
  }}

function buildDataPointObjIntoActiveObj () {
  const amountOfDataPoints = activeObj.noOfDataPoints;
  for (var i = 0; i < amountOfDataPoints; i++) {
    activeObj.dataPoints[activeObj.datumKeys[i]] = activeObj.datumValues[i];
  }
  console.log (`${activeObj.activeObjName} dataPoints`, activeObj.dataPoints);
  // Note:  Once data is captured, update capture button appearance, and next button appearance
}

function vaultDataPointsToLocSto () {
 window.localStorage.setItem(`${activeObj.activeObjName}`, JSON.stringify(activeObj.dataPoints));
}

function afterDataCapturedBtnStyles () {
  const captureBtnLabel = document.querySelector('#load-measurements');
  captureBtnLabel.style.backgroundColor = ('lightgray');
  captureBtnLabel.style.color = ('darkgreen');
  captureBtnLabel.value = 'DATA WAS CAPTURED';

  allowSwitchingToNextPage = true;

  const nextPageBtn = document.querySelector ('#next-page');
  nextPageBtn.style.backgroundColor = ('lightgray');
  nextPageBtn.style.color = ('darkgreen');
}
function updateBtnsStyles () {
  // This delay is to extend the time of the capture data btn animation. Otherwise animation won't be perceived.
  setTimeout(()=>afterDataCapturedBtnStyles(), 175);
}
// Function not used:
function retrieveALocStoObj (objName) {
const retrievedObj=JSON.parse(window.localStorage.getItem(objName));
console.log(`Pulled ${objName}: `, retrievedObj);
}


function saveACompDataToActiveObj () {
  // rdObjFromLocSto();
  readDataFormValues();
  normalizeDataPointValuesToInches();
  saveDataPointInchesToActiveObj();
  buildDataPointObjIntoActiveObj();
  vaultDataPointsToLocSto();
  updateBtnsStyles();
  // retrieveALocStoObj(`${activeObj.activeObjName}`);
}

const miscPartsObj={
  curvedSlat: {curveC_Value: 0.505}, 
  flatSlat: {flatC_Value: 0.405},
  
  metalEndlock: {metalEndlockThickness: 0.25},
  plasticEndlock: {plasticEndlockThickness: 0.25},
  noneEndlock: {noneEndlockThickness: 0},
  
noWindlock: {useWindlocks: false}, 
yesWindlock: {useWindlocks: true},

noSlidebolt: {useSlidebolts: false}, 
yesSlidebolt: {useSlidebolts: true},

noAstragal: {useAstragal: false}, 
yesAstragal: {useAstragal: true},
};

function saveRadioDataToDatumValues () {
// Slat style data capture:
const curvedSlatRadioBtn=document.querySelector('#curved-slat');
const flatSlatRadioBtn=document.querySelector('#flat-slat');

if (curvedSlatRadioBtn.checked) {
activeObj.datumValues[0]=miscPartsObj.curvedSlat.curveC_Value;
}else if (flatSlatRadioBtn.checked) {
activeObj.datumValues[0]=miscPartsObj.flatSlat.flatC_Value;
}else{
// NOP
}

// Endlock style data capture:
const metalEndlockRadioBtn=document.querySelector('#metal-endlock');
const plasticEndlockRadioBtn=document.querySelector('#plastic-endlock');
const noneEndlockRadioBtn=document.querySelector('#none-endlock');

if (metalEndlockRadioBtn.checked) {
activeObj.datumValues[1]=miscPartsObj.metalEndlock.metalEndlockThickness;
} else if (plasticEndlockRadioBtn.checked) {
activeObj.datumValues[1]=miscPartsObj.plasticEndlock.plasticEndlockThickness;
}else if (noneEndlockRadioBtn.checked) {
activeObj.datumValues[1]=miscPartsObj.noneEndlock.noneEndlockThickness;
}else{
// NOP
}

// Windlock style data capture:
const yesWindlockRadioBtn=document.querySelector('#yes-windlock');
const noWindlockRadioBtn=document.querySelector('#no-windlock');

if (yesWindlockRadioBtn.checked) {
activeObj.datumValues[2]=miscPartsObj.yesWindlock.useWindlocks;
}else if (noWindlockRadioBtn.checked) {
activeObj.datumValues[2]=miscPartsObj.noWindlock.useWindlocks;
}else{
// NOP
}

// Slidebolt style data capture:
const yesSlideboltRadioBtn=document.querySelector('#yes-slidebolt');
const noSlideboltRadioBtn=document.querySelector('#no-slidebolt');

if (yesSlideboltRadioBtn.checked) {
activeObj.datumValues[3]=miscPartsObj.yesSlidebolt.useSlidebolts;
}else if (noSlideboltRadioBtn.checked) {
activeObj.datumValues[3]=miscPartsObj.noSlidebolt.useSlidebolts;
}else{
// NOP
}

// Astragal style data capture:
const yesAstragalRadioBtn=document.querySelector('#yes-astragal');
const noAstragalRadioBtn=document.querySelector('#no-astragal');

if (yesAstragalRadioBtn.checked) {
activeObj.datumValues[4]=miscPartsObj.yesAstragal.useAstragal;
}else if (noAstragalRadioBtn.checked) {
activeObj.datumValues[4]=miscPartsObj.noAstragal.useAstragal;
}else{
// NOP
}
console.log (activeObj.datumValues);

}
// function no longer used:
function saveMisc1DataToActiveObj () {
  saveRadioDataToDatumValues();
buildDataPointObjIntoActiveObj();
/*
  normalizeDataPointValuesToInches();
  saveMiscPointValuesToActiveObj();
  buildDataPointObjIntoActiveObj();
  */
  updateBtnsStyles();
}
// function no longer used:
function saveMisc2DataToActiveObj () {
// tbd
updateBtnsStyles();
}
const captureDataBtn = document.querySelector('#load-measurements');
captureDataBtn.addEventListener('mouseup', function () {
  // The Misc Data Form format requires a handler taylored to its specific format (radio buttons.)
  /*
if (activeObj.objNo === 6) {
saveMisc1DataToActiveObj();
}else if (activeObj.objNo === 7) {
saveMisc2DataToActiveObj();
}
else{
 */
saveACompDataToActiveObj();
//}
});

// ################################
// BELOW IS APP NUMBER CRUNCHING
// §###############################

// mousedown calc spring btn animation
// Grab buttons:
function styleCaptureBtnAsCalcBtn () {
document.querySelector('#calc-results').style.backgroundColor = ('lightgray');
document.querySelector('#calc-results').style.color = ('darkblue');
}
// Do on mousedown actuation:
function mousedownCalcBtnAnimation () {
// Do on button actuation
document.querySelector ('#calc-results').style.backgroundColor = ('black');
document.querySelector ('#calc-results').style.color = ('white');
}
document.querySelector ('#calc-results').addEventListener('mousedown', mousedownCalcBtnAnimation);

// Update rd object dataPoints with all captured data vaulted to localStorage:
function updRdWithVaultedDataPoints () {
 rd.wallCutout.dataPoints=JSON.parse(window.localStorage.getItem('wallCutout'));

rd.barrel.dataPoints=JSON.parse(window.localStorage.getItem('barrel'));

rd.slats.dataPoints=JSON.parse(window.localStorage.getItem('slats'));

rd.bottomBar.dataPoints=JSON.parse(window.localStorage.getItem('bottomBar'));

rd.spring.dataPoints=JSON.parse(window.localStorage.getItem('spring'));

rd.misc.dataPoints=JSON.parse(window.localStorage.getItem('misc'));

rd.misc2.dataPoints=JSON.parse(window.localStorage.getItem('misc2'));
console.log('@@@@ Updated RD Obj: @@@@', {rd});

/*
const dataPagesKeys=rd.namesOfPagesThatContainData;
for (var i = 0; i < dataPagesKeys.length; i++) {
const source=dataPagesKeys[i];
let destination=eval("`${rd.".concat(source)  + ".dataPoints}`")
destination=JSON.parse(window.localStorage.getItem(`${source}`));
}
*/

}

/* Lookup Object for RD Invariant Data*/
const constDat={
slatOverlapWithWallBetweenJamb: -5.25, 
slatOverlapWithWallIntMount: 5.25,
slatOverlapWithWallExtMount: 7.25,

curvedWindlockThickness: 0.5000,

intertrackGap: 0.7500,

curvedStampedwindlockThickness: 0.02500,
curvedCastironWindlockThickness: 0.02500,

flatStampedWindlocklockThickness: 0.02500,
flatCastironWindlockThickness: 0.02500,

noEndlockThickness: 0,
curvedNylonEndlockThickness: 0.02500,
curvedStampedEndlockThickness: 0.02500,
curvedCastironEndlockThickness: 0.02500,

flatNylonEndlockThickness: 0.02500,
flatStampedEndlockThickness: 0.02500,
flatCastironEndlockThickness: 0.02500,
/*
curvedSlatThickness24G: 0.0028,
curvedSlatThickness22G: 0.0032,
curvedSlatThickness20G: 0.0036,
curvedSlatThickness18G: 0.0050,
flatSlatThickness24G:  0.0028,
flatSlatThickness22G: 0.0032,
flatSlatThickness20G: 0.0036,
flatSlatThickness18G: 0.0050,
*/
slatLinearInchWeight24G: 0.04430, 
slatLinearInchWeight22G: 0.04833, 
slatLinearInchWeight20G: 0.05316, 
slatLinearInchWeight18G: 0.05907, 

bbStopDistanceBelowEndPlate:1.5, 

endplateWallEdgeToTrackMiddle: 2, 

barrelTube4inchDia: 4.5,
barrelTube6inchDia: 6.5,
barrelTube8inchDia: 8.5,
barrelBigYoyo: 8.2,
barrelSmallYoyo: 4.3,
barrelSpiralRing: 7.75,

slatC_value4inchTubeCurvedSlat: 0.5455,
slatC_value6inchTubeCurvedSlat: 0.5455,
slatC_value8inchTubeCurvedSlat: 0.5455,
slatC_valueBigYoyoCurvedSlat: 0.5455, 
slatC_valueSmallYoyoCurvedSlat: 0.5455,
slatC_valueRimCurvedSlat: 0.5455, 

slatC_value4inchTubeFlatSlat: 0.5455,
slatC_value6inchTubeFlatSlat: 0.5455, 
slatC_value8inchTubeFlatSlat: 0.5455, 
slatC_valueBigYoyoFlatSlat: 0.5455,
slatC_valueSmallYoyoFlatSlat: 0.5455,
slatC_valueRimFlatSlat: 0.5455, 

lowCarbSteelSpecificWeight: 0.2836, 
highCarbSteelSpecificWeight: 0.284, 
oneSlideBoltWeight: 2.5,

bbBeyondWallCutoutHeight: 0.5, 
vinylAstragalLinearInchWeight: 0.02083,
rubberAstragalLinearInchWeight:0.02083,

bbStopFlagStyleVerticalToll: 0.0000,
bbStopFlatBarStyleVerticalToll: 1.5000,

endPlateSizes: {
endPlate12: 12,
endPlate14: 14,
endPlate15: 15.5,
endPlate16: 16,
endPlate18: 18
},

};

/* Lookup Object for RD derived Data*/
const calcDat={
slatOverlapWithWall: 0,

slatTerminationThickness: 0,

slatLinearInchWeight: 0, 

endplateSize: 14,

barrelDiameter: 7.75,

slatC_value: 0.5455,



slatVerticalContribution: 2.90, 
oneEndlockWeight: 0.0160, 


astragalLinearInchWeight: 0.02083, 
 mySpring: {
 wireDiameter: 0.4062,
 internalDiameter: 0,
 size: 0,
 amountOfTurns: 0,
 weight: 0
}
};

// Post data entry error message:
 function dataEntryError (errMssg='USER ENTERED ERRONEOUS DATA ON AN INPUT FORM!!') {
 // Display an error message
 console.log(`${errMssg}`);
 }
 
 // Use updated rd obj to generate calcDat obj:
 function buildCalcDat () {
// SLAT OVERLAP WITH WALL 
 if(rd.misc2.dataPoints.mounting===0) {
  calcDat.slatOverlapWithWall=constDat.slatOverlapWithWallBetweenJamb;
}else if(rd.misc2.dataPoints.mounting===1) {
 calcDat.slatOverlapWithWall=constDat.slatOverlapWithWallIntMount;
}else if(rd.misc2.dataPoints.mounting===2){
calcDat.slatOverlapWithWall=constDat.slatOverlapWithWallExtMount;
 }else{
 dataEntryError();
 }
// SLAT TERMINATION THICKNESS
// @@@@@@@@@@@@@@@@@@@@@@@@
if (rd.misc.dataPoints.slatStyle===1) {
// Using curved slat
// @@@@@@@@@@@@@@@@@@@@@@@@
if (rd.misc.dataPoints.useWindlocks===1) {
// Using windlock
calcDat.slatTerminationThickness=constDat.curvedCastironWindlockThickness;
}else if (rd.misc.dataPoints.useWindlocks===0) {
// Not using windlock
// @@@@@@@@@@@@@@@@@@@@@@@@
if (rd.misc.dataPoints.endlockStyle===0) {
 // Don't use endlocks
 calcDat.slatTerminationThickness=constDat.noEndlockThickness;
}else if (rd.misc.dataPoints.endlockStyle===1) {
 // Use nylon endlocks
calcDat.slatTerminationThickness=constDat.curvedNylonEndlockThickness;
}else if (rd.misc.dataPoints.endlockStyle===2) {
 // Use stamped endlocks
calcDat.slatTerminationThickness=constDat.curvedStampedEndlockThickness;
}else if (rd.misc.dataPoints.endlockStyle===3) {
 // Use iron endlocks
calcDat.slatTerminationThickness=constDat.curvedCastironEndlockThickness;
}else{
// Invalid endock style entry
dataEntryError('Invalid endock style entry'); 
}

} else {
// Invalid windlock style entry
dataEntryError('Invalid windlock style entry'); 
}

} else if (rd.misc.dataPoints.slatStyle===2) {
// Using flat slat
// @@@@@@@@@@@@@@@@@@@@@@@@
if (rd.misc.dataPoints.useWindlocks===1) {
// Using windlock
calcDat.slatTerminationThickness=constDat.flatCastironWindlockThickness;
}else if (rd.misc.dataPoints.useWindlocks===0) {
// Not using windlock
// @@@@@@@@@@@@@@@@@@@@@@@@
if (rd.misc.dataPoints.endlockStyle===0) {
 // Don't use endlocks
 calcDat.slatTerminationThickness=constDat.noEndlockThickness;
}else if (rd.misc.dataPoints.endlockStyle===1) {
 // Use nylon endlocks
calcDat.slatTerminationThickness=constDat.flatNylonEndlockThickness;
}else if (rd.misc.dataPoints.endlockStyle===2) {
 // Use stamped endlocks
calcDat.slatTerminationThickness=constDat.flatStampedEndlockThickness;
}else if (rd.misc.dataPoints.endlockStyle===3) {
 // Use iron endlocks
calcDat.slatTerminationThickness=constDat.flatCastironEndlockThickness;
}else{
// Invalid endock style entry
dataEntryError('Invalid endock style entry'); 
}

} else {
// Invalid windlock style entry
dataEntryError('Invalid windlock style entry'); 
}

}else{
// Invalid slat style entry
dataEntryError('Invalid slat style entry'); 
}
 // §
// SLAT LINEAR INCH WEIGHT
if (rd.slats.dataPoints.thickness===24) {
calcDat.slatLinearInchWeight=constDat.slatLinearInchWeight24G;
}else if (rd.slats.dataPoints.thickness===22) {
calcDat.slatLinearInchWeight=constDat.slatLinearInchWeight22G;
}else if (rd.slats.dataPoints.thickness===20) {
calcDat.slatLinearInchWeight=constDat.slatLinearInchWeight20G;
}else if (rd.slats.dataPoints.thickness===18) {
calcDat.slatLinearInchWeight18G;
} else {
// Invalid slat gauge entry
dataEntryError('Invalid slat gauge entry');
}
// SLAT "C" VALUE
if (true) {
 
}else if (true) {
 
}else if (true) {
 
}else if (true) {
 
}else if (true) {
 
}else if (true) {
 
}else if (true) {
 
}else if (true) {
 
}else if (true) {
 
}



slatC_valueRimCurvedSlat: 0.5455, 
slatC_value6inchTubeCurvedSlat: 0.5455,
slatC_value8inchTubeCurvedSlat: 0.5455,
slatC_valueYoyoCurvedSlat: 0.5455, 
slatC_valueRimFlatSlat: 0.5455, 
slatC_value6inchTubeFlatSlat: 0.5455, 
slatC_value8inchTubeFlatSlat: 0.5455, 
slatC_valueYoyoFlatSlat

}

/* CURTAIN ASSEMBLY CALCULATIONS */
// Slat width
function slatAssemblyWidth () {
const assembledSlatWidth=rd.wallCutout.dataPoints.width+calcDat.slatOverlapWithWall;
console.log('assembledSlatWidth: ', {assembledSlatWidth});
return assembledSlatWidth;}

function slatWidth () {
 const widthOfSlat=slatAssemblyWidth()-(2*calcDat.slatTerminationThickness) ;
console.log('widthOfSlat: ', {widthOfSlat});
return widthOfSlat;}

function oneSlatWeight () {
const oneSlatPounds=calcDat.slatLinearInchWeight*slatWidth();
console.log('oneSlatWeight: ', {oneSlatPounds});
return oneSlatPounds;}

function closedHangingHeight () {
 // Upper end of track to tube attachment
 const a=(constDat.bbStopDistanceBelowEndPlate + (0.5 * calcDat.endplateSize));
 const b=(0.5 * calcDat.endplateSize) - constDat.endplateWallEdgeToTrackMiddle - ((calcDat.slatC_value + rd.barrel.dataPoints.tubeDiameter)/2); 
 const d=(a*a) + (b*b);
 const c=Math.sqrt(d);
 
const linearHeight= 
 /*
 Math.PI()*(rd.barrel.dataPoints.tubeDiameter + slatC_value/2)/2 + // Not used for closed hanging weight.
 */
 c
 +
 (rd.wallCutout.dataPoints.height + constDat.bbBeyondWallCutoutHeight);
 
console.log('closedHangingHeight: ', {linearHeight});

return linearHeight;}

function closedHangingSlatCount () {
// Substract 1 that belongs to the BB
const slatCount=(closedHangingHeight()/calcDat.slatVerticalContribution)-1;
console.log('closedHangingSlatCount: ', {slatCount});
return slatCount;}

function closedEndlocksCount () {
let endlocksCount;
let roundedOffSlatCnt=Math.round(closedHangingSlatCount());
 // If slat count even
if(roundedOffSlatCnt % 2===0) {
endlocksCount = roundedOffSlatCnt;
}else{ // If slat count odd
endlocksCount = roundedOffSlatCnt + 1;
}
console.log('closedEndlocksCount: ', {endlocksCount});
return endlocksCount;}

function bbAnglesWeight () {
const oneAngleVolume=(rd.bottomBar.dataPoints.bbAngleVerticalSide*rd.bottomBar.dataPoints.bbAngleThickness+(rd.bottomBar.dataPoints.bbAngleHorizontalSide-rd.bottomBar.dataPoints.bbAngleThickness)*rd.bottomBar.dataPoints.bbAngleThickness) *slatWidth();
const bbAnglesWeight=oneAngleVolume*rd.bottomBar.dataPoints.bbAnglesAmount*constDat.lowCarbSteelSpecificWeight;
console.log('bbAnglesWeight: ', {bbAnglesWeight});
return bbAnglesWeight;} 

function astragalWeight () {
const astragalWeight=calcDat.astragalLinearInchWeight*slatWidth();
console.log('astragalWeight: ', {astragalWeight});
return astragalWeight;}

function slideboltsWeight () {
const slideBoltsWeight = constDat.oneSlideBoltWeight*2;
console.log('slideBoltsWeight: ', {slideBoltsWeight});
return slideBoltsWeight;}

// Weight of bottom Bar assembly:
function bbAssemblyWeight () {
const bbWeight=bbAnglesWeight() + oneSlatWeight() + astragalWeight() + slideboltsWeight();
console.log('bbWeight: ', {bbWeight});
return bbWeight;}

// Weight of closed curtain assembly
function closedHangingWeight () {
const hangingWeight =
(closedHangingSlatCount()*oneSlatWeight())
+ 
(closedEndlocksCount()*calcDat.oneEndlockWeight)
+ 
bbAssemblyWeight();

console.log('closedHangingWeight: ', {hangingWeight});

return hangingWeight;}

function openHangingHeight () {
 const a=(calcDat.bbStopDistanceBelowEndPlate + (0.5 * calcDat.endplateSize));
 
console.log('nthTableRow.rO for openHangingHeight: ', nthTableRow.rO);
 
 const b=(0.5 * calcDat.endplateSize) - constDat.endplateWallEdgeToTrackMiddle - nthTableRow.rO; 
 const d=(a*a) + (b*b);
 const linearHeight=Math.sqrt(d);
/*
const linearHeight=Math.sqrt(
 (calcDat.endplateSize/2)^2 + ((calcDat.endplateSize/2) - 1.5)^2
 );
 */
console.log('openHangingHeight: ', {linearHeight});
return linearHeight;}

function openHangingSlatCount () {
 // Substract 1 that belongs to the BB
const slatCount=(openHangingHeight()/(calcDat.slatVerticalContribution)) - 1;

console.log('openHangingSlatCount: ', {slatCount});

return slatCount;}

function openEndlocksCount () {
let endlocksCount;
let roundedOffSlatCnt=Math.round(openHangingSlatCount());
 // If slat count even
if(roundedOffSlatCnt % 2===0) {
endlocksCount = roundedOffSlatCnt;
}else{ // If slat count odd
endlocksCount = roundedOffSlatCnt + 1;
}
console.log('openEndlocksCount: ', {endlocksCount});
return endlocksCount;}

function openHangingWeight () {
const hangingWeight = (
 openHangingSlatCount()*oneSlatWeight())
 + 
 (openEndlocksCount()*calcDat.oneEndlockWeight) 
 + bbAssemblyWeight();
 
console.log('openHangingWeight: ', {hangingWeight});

return hangingWeight;}

// Low moment arm rc (arm when door closed)
function lowMomentArm () {
const lMArm = (rd.barrel.dataPoints.tubeDiameter + calcDat.slatC_value)/2;
console.log('lowMomentArm: ', {lMArm});
return lMArm;}

function requiredInchPound () {
const closedInchPounds=lowMomentArm()*closedHangingWeight();

console.log('requiredInchPound: ', {closedInchPounds});

return closedInchPounds;}

// Revolutions of barrel dR

// high moment arm 

/* THE SPRING WIRE DIA SELECTOR */
/*
For the mainTemplate pages, the behavior of the capture Btn is to:
1) read inputs,
2) normalize to inches,
3) save array of inches as dstumValues to the activeObject
4) combine datumKeys with datum values to build the dataPoints object in the activeObj.
This will change for the resultTemplate. The procedure will be to only perform 4th step, and last step (5) will be to write dataPoints values to the active page.
*/
// Spring data; [inch-pound, wire-diameter]
const optimalMaxInchPound=[
[52,0.125],
[65,0.135],
[75,0.142],
[93,0.1562],
[107,0.162],
[119,0.17],
[137,0.177],
[161,0.1875],
[172,0.192],
[212,0.207],
[246.8,0.2187],
[268,0.2253],
[298,0.2343],
[334,0.2437],
[358,0.25],
[410.9,0.2625],
[458,0.273],
[505.9,0.283],
[536.9,0.289],
[568.9,0.295],
[632.9,0.3065],
[668,0.3125],
[709.8,0.3195],
[784,0.331],
[870.9,0.3437],
[1011,0.3625],
[1110.8,0.375],
[1272.9,0.3938],
[1387.6,0.4062],
[1542,0.4218],
[1632.8,0.4305],
[1707.6,0.4375],
[1882.8,0.4531],
[1981.9,0.4615],
[2069.3,0.4687],
[2342.4,0.49],
[2478.9,0.5],
[2934.8,0.5312],
[3442.7,0.5625],
[4620,0.625]
];
const inventoryMaxInchPound=[
[52,0.125],
[65,0.135],
[75,0.142],
[93,0.1562],
[107,0.162],
[119,0.17],
[137,0.177],
[161,0.1875],
[172,0.192],
[212,0.207],
[246.8,0.2187],
[268,0.2253],
[298,0.2343],
[334,0.2437],
[358,0.25],
[410.9,0.2625],
[458,0.273],
[505.9,0.283],
[536.9,0.289],
[568.9,0.295],
[632.9,0.3065],
[668,0.3125],
[709.8,0.3195],
[784,0.331],
[870.9,0.3437],
[1110.8,0.375],
[1272.9,0.3938],
[1387.6,0.4062],
[1542,0.4218],
[1632.8,0.4305],
[1707.6,0.4375],
[1882.8,0.4531],
[1981.9,0.4615],
[2069.3,0.4687],
[2342.4,0.49],
[2478.9,0.5],
[2934.8,0.5312],
[3442.7,0.5625],
[4620,0.625]
];

// Select data set to use
function springDataSetChoice () {
 const inventoryData = inventoryMaxInchPound;
 const optimalData=optimalMaxInchPound;
const inventorizedRadioBtn=document.querySelector('#spring-on-hand');
 const optimalRadioBtn=document.querySelector('#optimal-spring');
 
  // § set to true for debugging purposes:
//if(true){
if(optimalRadioBtn.checked){
return optimalData;}
if(inventorizedRadioBtn.checked){
return inventoryData;}
}

let requiredInchPoundsInRange;
function selectSpringWireDiameter () {
let strongEnoughWireFound = false;
let selectedWireDiam = 0;
const springDataSetToUse=springDataSetChoice();
for (let i = 0; i < springDataSetToUse.length; i++) {
if (springDataSetToUse[i][0] >= requiredInchPound()) {
selectedWireDiam = springDataSetToUse[i][1];
strongEnoughWireFound = true;
}
if (strongEnoughWireFound) {
 // On match, exit for-loop. 
// strongEnoughWireFound = 'optimalMaxInchPoundFound';
break;
}
}
// Check if exit for-loop was due to match or was exhausted due to match not found.
if (strongEnoughWireFound === false) {
// Error. Excessive load for existing wire diametere
requiredInchPoundsInRange=false;
console.log (`Sorry. The ${requiredInchPound()} InchPound value required is too large for existing wire diameters.`);

} else {
// Save selectedWireDiam to result object as a datum value:
activeObj.datumValues[0] = selectedWireDiam;

console.log('selectedWireDiam: ', {selectedWireDiam});
}
return selectedWireDiam;}
 // § continue verification from this point on

/*
function saveSpringInnerDia () {
// Save result as datum value:
activeObj.datumValues[1] = '3.0000';
}

function springTurns () {
// Save result as datum value:
activeObj.datumValues[3] = '92.0000';
}

function springLength () {
// Save result as datum value:
activeObj.datumValues[2] = '36.0000';
}

function calcSpringWeight () {
// Save result as datum value:
activeObj.datumValues[4] = '32.6754';
}
*/

// Post to DOM (results Template doc)
function postWireDiaToResultsPage () {
  if(requiredInchPoundsInRange){//in range:
document.querySelector('#wire-diameter').textContent = activeObj.dataPoints.wireDiameter;
} else{ // out of range:
document.querySelector('#wire-diameter').style.color='magenta';
document.querySelector('#wire-diameter').innerText=`${Math.ceil(requiredInchPound())}`;
} 
  
document.querySelector('#internal-diameter').textContent = activeObj. dataPoints.internalDiameter;

document.querySelector('#width').textContent = activeObj.dataPoints.width;

document.querySelector('#no-of-turns').textContent = activeObj.dataPoints.amountOfTurns;

document.querySelector('#weight').textContent = activeObj.dataPoints.weight;
}

/* Start of CALCULATING SPRING LENGTH */
// Test Data;

// Initial values: 
let barrelRadius=rd.barrel.dataPoints.tubeDiameter/2;
// const c=0.5455;

const a=calcDat.slatC_value/(2*Math.PI);
const thetaInit=((2*barrelRadius + calcDat.slatC_value)*Math.PI)/calcDat.slatC_value;
const sigmaInit=Math.sqrt(1 + (thetaInit*thetaInit));
const arcInit=(a*((thetaInit*sigmaInit)
+ Math.log(thetaInit+sigmaInit)))/2;

// Implementation of nth row of lookup table:
const nthTableRow={
 iterationNo:0,
  theta:0,
  sigma:0,
  rO:0,
  deltaTheta:0,
  sArc:0,
  degr:0,
  dR:0,
  h:0
 };
 
// Global table row variables
 let theta;
 let sigma;
 let rO;
 let deltaTheta;
 let sArc;
 let degr;
 let dR;
 let h;
 
function iteration () {
 if (nthTableRow.iterationNo===0) {
nthTableRow.iterationNo=1;
 }else{
nthTableRow.iterationNo++;
 }
} 

function buildNthRowOfLukUpTable () {
iteration();

theta=thetaInit + ((5*Math.PI*(nthTableRow.iterationNo-1))/180);
nthTableRow.theta=theta;

sigma=Math.sqrt(1 + (nthTableRow.theta)*(nthTableRow.theta));
nthTableRow.sigma=sigma;

rO=a*(nthTableRow.theta);
nthTableRow.rO=rO;

deltaTheta=(nthTableRow.theta) - thetaInit;
nthTableRow.deltaTheta=deltaTheta;

sArc=(a*(((nthTableRow.theta)*(nthTableRow.sigma) ) + Math.log((nthTableRow.theta) + (nthTableRow.sigma))))/2;
nthTableRow.sArc=sArc;

degr=(180*(nthTableRow.deltaTheta))/Math.PI;
nthTableRow.degr=degr;

dR=(nthTableRow.deltaTheta)/(2*Math.PI);
nthTableRow.dR=dR;

h=(nthTableRow.sArc)-arcInit;
nthTableRow.h=h;

return;}

function calcRoDrForHgoal () {
 
let nthIteration;
if (isNaN(nthIteration)) {
nthIteration=0;
}

while(nthIteration<1051) {
nthIteration++;
if(nthIteration>=1050) {
console.log('Error: Too many iterations.');
break;
}else{
// Run row generator to produce an nth table row
buildNthRowOfLukUpTable();
const hGoal=rd.wallCutout.dataPoints.height + constDat.bbBeyondWallCutoutHeight;

if(nthTableRow.h>=hGoal) {
 // Write out result
console.log('💪 Success! For hGoal = ', Math.round(10000*hGoal)/10000);
console.log ('nthTableRow after iteration: ', {nthTableRow});
 break;
}
}
}
}

function springLength () {
// Build required values into nthTableRow object
calcRoDrForHgoal(); 
// Now use values to determine spring length

const lowMomentArm = barrelRadius + (calcDat.slatC_value/2);

 const ippt=(
  (lowMomentArm * closedHangingWeight()) 
  -
  (nthTableRow.rO * openHangingWeight()) 
  
  )/nthTableRow.dR;
 console.log('ippt: ', {ippt});
 
console.log('Spring wire diameter: ', rd.result.dataPoints.wireDiameter);
console.log('Spring internal diameter: ', rd.spring.dataPoints.intDia);

const fifthPowerOfWireDiam=rd.result.dataPoints.wireDiameter*rd.result.dataPoints.wireDiameter*rd.result.dataPoints.wireDiameter*rd.result.dataPoints.wireDiameter*rd.result.dataPoints.wireDiameter;
const springLength=(3208909*(fifthPowerOfWireDiam))/(ippt*(rd.spring.dataPoints.intDia+rd.result.dataPoints.wireDiameter));
 
console.log('Spring length: ', {springLength});

return springLength;}

function springTurns () {
const n=springLength()/rd.result.dataPoints.wireDiameter;
console.log ('wireDiameter', rd.result.dataPoints.wireDiameter);
console.log ('springTurns', {n});

return n;}

function springWeight () {
 const wireRadius=0.5 * selectSpringWireDiameter();
console.log('wire Radius: ', {wireRadius});

const wireCrossSectionArea=Math.PI*wireRadius*wireRadius;
console.log('wire Cross Section Area: ', {wireCrossSectionArea});

const springMeanDiam=rd.spring.dataPoints.intDia+ rd.result.dataPoints.wireDiameter;
console.log('spring Mean Diam: ', {springMeanDiam});

const oneCoilVolume=Math.PI *springMeanDiam*wireCrossSectionArea;
console.log ('one Coil Volume: ', {oneCoilVolume});

const springCoilsCount=springTurns();
console.log ('spring Coils Count: ', {springCoilsCount});

const allCoilsVolume=oneCoilVolume*springCoilsCount;
console.log ('all Coils Volume', {allCoilsVolume});

const springWeight=allCoilsVolume*(constDat.highCarbSteelSpecificWeight);
console.log ('spring Weight: ', {springWeight});

return springWeight;}

/*
document.querySelector('#test').addEventListener('click', spoolSpringSpecs);
*/
function spoolSpringSpecs () {
calcDat.mySpring.wireDiameter=selectSpringWireDiameter();
document.querySelector('#inches-a').value=calcDat.mySpring.wireDiameter;

calcDat.mySpring.internalDiameter=rd.spring.dataPoints.intDia;

calcDat.mySpring.size=springLength();
document.querySelector('#inches-c').value=calcDat.mySpring.size;

calcDat.mySpring.amountOfTurns=springTurns();
document.querySelector('#inches-d').value=calcDat.mySpring.amountOfTurns;

calcDat.mySpring.weight=springWeight();
document.querySelector('#inches-e').value=calcDat.mySpring.weight;

console.log('my spring specs: ', calcDat.mySpring);
}

/* end CALCULATING SPRING LENGTH */

function updateCalcBtnStyle () {
if(requiredInchPoundsInRange){
document.querySelector('#calc-results').style.backgroundColor = ('lightgray');
document.querySelector('#calc-results').style.color = ('darkgreen');
document.querySelector('#calc-results').value = 'SUCCESS!';
return;}
document.querySelector('#calc-results').style.backgroundColor = ('darkred');
document.querySelector('#calc-results').style.color = ('yellow');
document.querySelector('#calc-results').value = 'HUSTON, WE HAVE A PROBLEM!';

requiredInchPoundsInRange=true;
return;}
// Function no longer used:
function oldResultProcessing () {
// Save following results to activeObj.datumValues array.
selectSpringWireDiameter();
springLength();
/*
saveSpringInnerDia();
springTurns();
springLength();
calcSpringWeight();
*/
// After saving as datum values then:
buildDataPointObjIntoActiveObj();
// And finally:
postWireDiaToResultsPage();
updateCalcBtnStyle();
}

function newResultProcessing () {
updRdWithVaultedDataPoints();
//spoolSpringSpecs();
updateCalcBtnStyle();
}

// load-measurements is supplanted by calc-results on the resultTemplate
const calcResultsBtn = document.querySelector('#calc-results');
// Timeout for button animation
calcResultsBtn.addEventListener('mouseup', ()=> {
setTimeout(function () {
newResultProcessing();
}, 250);
});
