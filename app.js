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
    pageHeader: '🦉 Welcome to RD Designer! 🐝',
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
    ftPresets: [11, 9, 3, 2, 1],
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
    noOfDataPoints: 1,
    ftPresets: [0],
    inchesPresets: [2],
    ftView: ['none'],
    labels: ['Barrel Style'],
    datumKeys: ['barrelStyle'],
    datumValues: [],
    dataPoints: {
     /*
     barrelStyle: 4
     */
    },
    prevObjName: 'wallCutout',
    activeObjName: 'barrel',
    nextObjName: 'slats'
  },

  slats: {
    objNo: 3,
    pageHeader: 'Slats:',
    sketchFileName: 'url(slats.jpg)',
    noOfDataPoints: 2,
    ftPresets: [0, 0],
    inchesPresets: [1, 22],
    ftView: ['none', 'none'],
    labels: ['Slats Style', 'Gauge'],
    datumKeys: ['slatStyle', 'thickness'],
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
    labels: [
     'Angle Height',
     'Angle Width',
     'Angle Thickness',
     'Angles Qty.'],
    datumKeys: [
     'bbAngleVerticalSide',
     'bbAngleHorizontalSide',
     'bbAngleThickness',
     'bbAnglesAmount'],
    datumValues: [],
    dataPoints: {
     bbAngleVerticalSide: 0,
     bbAngleHorizontalSide: 0,
     bbAngleThickness: 0,
     bbAnglesAmount: 0
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
    inchesPresets: [3.0000],
    ftView: ['none'],
    labels: ['Internal Diameter'],
    datumKeys: ['intDia'],
    datumValues: [],
    dataPoints: {
     /*
     intDia: 3.0635
     */
    },
    prevObjName: 'bottomBar',
    activeObjName: 'spring',
    nextObjName: 'misc'
  },

  misc: {
    objNo: 6,
    pageHeader: 'Other Items:',
    sketchFileName: 'url(misc.jpg)',
    noOfDataPoints: 4,
    ftPresets: [0, 0, 0, 0],
    inchesPresets: [3, 0, 1, 1],
    ftView: ['none' , 'none', 'none', 'none'],
    labels: [
      'Endlocks Style',
      'Windlocks',
      'Slidebolts',
      'Bottom Bar Rubber'],
    datumKeys: [
      'endlockStyle',
      'useWindlocks',
      'slideBoltsStyle',
      'astragalStyle'],
    datumValues: [],
    dataPoints: {
     /*
     endlockStyle: 0, 
     useWindlocks: 0,
     slideBoltsStyle: 0,
     astragalStyle: 0
     */
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
    labels: [' Wire Diameter',
      ' Internal Diameter',
      ' Length',
      ' Amount of Coils',
      ' Weight'],
    datumKeys: ['selectedWireDiam',
      'internalDiameter',
      'width',
      'amountOfCoils',
      'weight'],
    datumValues: [],
    dataPoints: {
     selectedWireDiam: 0,
      internalDiameter: 0,
      width: 0,
      amountOfCoils: 0,
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

// ulShowHideCtrl() no longer used:

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
let dataEntryErrorFlag=false;
window.onload = function () {
  allowSwitchingToNextPage = false;
  // Read Template ID of the Page, and simultaneously populate template id label:
  const templateId = returnTemplateId();
  // Chk if home template
  if (templateId === 'home') {
   // Clear localStorage
   window.localStorage.clear();
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

  //ulShowHideCtrl();

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
    // Reset flag before user captures any data 
    dataEntryErrorFlag=false;
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

// rdObjFromLocSto() no longer used:

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

// retrieveALocStoObj() no longer used:

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

//miscPartsObj no longer used

// saveRadioDataToDatumValues() no longer used

// saveMisc1DataToActiveObj() no longer used

// saveMisc2DataToActiveObj() no longer used

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

// EXTRACTION LIBRARY:
//####################################
/* signifFigCounter v2.0.js */
//####################################
var xtract = {

  functionNameLocked: false,

  numericPart: function (aNum) {
    this.functionNameLocked = true;
    let userEntryAbsVal;
    if (aNum.slice(0, 1) === '-' || aNum.slice(0, 1) === '+') {
      userEntryAbsVal = aNum.slice(1);
    } else {
      userEntryAbsVal = aNum.slice(0);
    }
    let wholeNumStr;
    if (this.hasAnE(aNum)) {
      wholeNumStr = userEntryAbsVal;
      const sliceStop = wholeNumStr.indexOf('e');
      const numPortion = wholeNumStr.slice(0, sliceStop);
      this.functionNameLocked = false;
      return numPortion; // a string.
    }
    const numPortion = userEntryAbsVal;
    this.functionNameLocked = false;
    return numPortion;
  },

  integerPart: function (aNum) {
    const numbStr = this.numericPart(aNum);
    if (this.hasADot(aNum)) {
      const sliceStop = numbStr.indexOf('.');
      const integerPortion = numbStr.slice(0, sliceStop);
      return integerPortion;
    }
    const integerPortion = numbStr;
    return integerPortion;
  },


  hasAnE: function (aNum) {
    this.functionNameLocked = true;
    if (aNum.includes('e')) {
      // yes
      const hasExp = true;
      this.functionNameLocked = false;
      return hasExp;
    }
    //no
    const hasExp = false;
    this.functionNameLocked = false;
    return hasExp;
  },


  hasADot: function (aNum) {
    if (aNum.includes('.')) {
      // yes
      const hasDot = true;
      return hasDot;
    }
    //no
    const hasDot = false;
    return hasDot;
  },
  sigFiguresCount: function (aNum) {
    this.functionNameLocked = true;
    const sigDigCnt = this.significantFigures(aNum).length;
    this.functionNameLocked = false;
    return sigDigCnt;
  },
  significantFigures: function (aNum) {
    this.functionNameLocked = true;
    const alphamericCoreStr = this.numericPart(aNum);
    // Any number of only zeroes with a dot somewhere:
    if (1*alphamericCoreStr === 0 && alphamericCoreStr.includes('.')) {
      const signifFigs = '0'+this.fractionalPart(aNum); // Leftmost 0 is implied. Therefore, correct the original user entry adding a Leftmost 0.
      this.functionNameLocked = false;
      return signifFigs;
    }
    // Any number of only zeroes with no dot anywhere:
    if (1*alphamericCoreStr === 0 && !alphamericCoreStr.includes('.')) {
      const signifFigs = '0';
      this.functionNameLocked = false;
      return signifFigs;
    }
    // Non-zero valued numeric part that starts with a dot:
    if (alphamericCoreStr.slice(0, 1) === '.') {
      const signifFigs = '0'+this.fractionalPart(aNum);
      this.functionNameLocked = false;
      return signifFigs;
    }
    this.functionNameLocked = true;
    let non0ClusterStr = this.zeroTrimmedCore(aNum);
    this.functionNameLocked = false;
    // Any other except previous "returns", that contain a dot somewhere:
    if (non0ClusterStr.includes('.')) {
      const indexOfDot = non0ClusterStr.indexOf('.');
      const jointString = non0ClusterStr.slice(0, indexOfDot) + non0ClusterStr.slice(1+indexOfDot);
      const signifFigs = jointString;
      this.functionNameLocked = false;
      return signifFigs;
    }
    // Any numeric part that doesn't contain a dot:
    // +011e-2
    const signifFigs = this.zeroTrimmedCore(aNum);
    this.functionNameLocked = false;
    return signifFigs;
  },

  zeroTrimmedCore: function (aNum) {
    this.functionNameLocked = true;
    // Zero valueds with or without dot somewhere:
    if (1*aNum === 0 && this.hasADot()) {
      const non0Cluster = '.';
      this.functionNameLocked = false;
      return non0Cluster;
    }
    if (1*aNum === 0 && !this.hasADot(aNum)) {
      const non0Cluster = '';
      this.functionNameLocked = false;
      return non0Cluster;
    }
    let numbStr = this.numericPart(aNum);
    let absNumbStr;
    //numbers that have the form ".x"
    if (numbStr.slice(0, 1) === '.') {
      numbStr = (1*numbStr).toString(); // trim leading zeroes
      const non0Cluster = numbStr.slice(0); // trim trailing 0 introduced by 1* operation
      this.functionNameLocked = false;
      return non0Cluster;
    }
    if (numbStr.slice(-1) === '.') {
      // x. case
      numbStr = (1*numbStr).toString(); // trim trailing zeroes
      const non0Cluster = numbStr.concat('.'); // append '.' trimmed by 1* operation
      this.functionNameLocked = false;
      return non0Cluster;
    }
    // For all other cases not covered above:
    const non0Cluster = (1*numbStr).toString();
    this.functionNameLocked = false;
    return non0Cluster;
  },
};
/*
  Note:
  Input data must be a string.
  Example how to use:
  const data='-012.3000e-5';
  let outcome;
  outcome=xtract.numericPart(data);
  console.log(outcome); // '012.3000'
  */

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
document.querySelector ('#calc-results').addEventListener('mousedown',()=>{ 
 if (blockMultipleCalcResults) {
 return;
 }
 mousedownCalcBtnAnimation();
});

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
slatOverlapWithWallBetweenJamb: -8.75, 
slatOverlapWithWallIntMount: 5.25,
slatOverlapWithWallExtMount: 7.25,

curvedCastironWindlockThickness: 0.2500,
flatCastironWindlockThickness: 0.5000,

noEndlockThickness: 0.0000,
curvedNylonEndlockThickness: 0.3125,
curvedStampedEndlockThickness: 0.46875,
curvedCastironEndlockThickness: 0.2500,

flatNylonEndlockThickness: 0.3125,
flatStampedEndlockThickness: 0.5000,
flatCastironEndlockThickness: 0.5000,

noEndlockUnitWeight: 0.0000,
curvedNylonEndlockUnitWeight: 0.0400,
curvedStampedEndlockUnitWeight: 0.1800,
curvedCastironEndlockUnitWeight: 0.1600,
flatNylonEndlockUnitWeight: 0.3125,
flatStampedEndlockUnitWeight: 0.1406,
flatCastironEndlockUnitWeight: 0.2130,
intertrackGap: 0.7500,

// Slat material thicknesses:
/*
curvedSlatThickness24G: 0.0028,
curvedSlatThickness22G: 0.0032,
curvedSlatThickness20G: 0.0038,
curvedSlatThickness18G: 0.0050,
flatSlatThickness24G:  0.0028,
flatSlatThickness22G: 0.0032,
flatSlatThickness20G: 0.0036,
flatSlatThickness18G: 0.0050,
*/
slatLinearInchWeight24G: 0.042285, 
slatLinearInchWeight22G: 0.048325, 
slatLinearInchWeight20G: 0.057386, 
slatLinearInchWeight18G: 0.075508, 

bbStopDistanceBelowEndPlate:1.5, 

endplateWallEdgeToTrackMiddle: 2, 
 /* Tube Diameter size order:
 Smaller is 1. Larger is 6. */
barrelTube4inchDia: 4.5000,
barrelTube6inchDia: 6.5000,
barrelSmallYoyo: 6.7000,
barrelSpiralRing: 7.7500,
barrelBigYoyo: 8.1875,
barrelTube8inchDia: 8.6250,

slatC_value4inchTubeCurvedSlat: 0.5357,
slatC_value6inchTubeCurvedSlat: 0.5455,
slatC_valueSmallYoyoCurvedSlat: 0.5455,
slatC_valueRimCurvedSlat: 0.5455, 
slatC_valueBigYoyoCurvedSlat: 0.5417,
slatC_value8inchTubeCurvedSlat: 0.5455,

slatC_value4inchTubeFlatSlat: 0.5714,
slatC_value6inchTubeFlatSlat: 0.7500, 
slatC_valueSmallYoyoFlatSlat: 0.7500,
slatC_valueRimFlatSlat: 0.7000, 
slatC_valueBigYoyoFlatSlat: 0.5455,
slatC_value8inchTubeFlatSlat: 0.5455,

curvedSlatVerticalContribution: 2.9000,
flatSlatVerticalContribution: 2.6000,

noAstragalInchLinearWeight: 0,
vinylAstragalLinearInchWeight: 0.02083,
rubberAstragalLinearInchWeight:0.02310,

doNotUseSlidebolts: 0,
useSlidebolts: 2.5000,//1 slidebolt lb

lowCarbSteelSpecificWeight: 0.2836, 
highCarbSteelSpecificWeight: 0.284, 

bbBeyondWallCutoutHeight: 0.5, 

bbStopFlagStyleVerticalToll: 0.0000,
bbStopFlatBarStyleVerticalToll: 1.5000,

endPlate12: 12,
endPlate14: 14,
endPlate15: 15.5,
endPlate16: 16,
endPlate18: 18

};

/* Lookup Object for RD derived Data*/
const calcDat={
slatOverlapWithWall: 0,

slatTerminationThickness: 0,

slatLinearInchWeight: 0, 

endplateSize: 14,

barrelDiameter: 0,

slatC_value: 0,

slatVerticalContribution: 0,

oneEndlockWeight: 0, 

oneSlideBoltWeight: 0,

astragalLinearInchWeight: 0,

// Evaluation of functions:
slatAssemblyWidth: 0,
slatWidth: 0,
oneSlatWeight: 0,
closedHangingHeight: 0,
closedHangingSlatCount: 0,
closedEndlocksCount: 0,
bbAnglesWeight: 0,
astragalWeight: 0,
slideboltsWeight: 0,
bbAssemblyWeight: 0,
closedHangingWeight: 0,
lowMomentArm: 0,
requiredInchPound: 0,

hGoal: 0, 
/* Hardcoded value for debugging. RD curved slats, iron endlocks, no windlocks, 11x9, 6" tube, with slidebolts and astragal.
*/
rO: 0, // 5.5833
dR: 0, // 4.0278
openHangingHeight: 0,
openHangingSlatCount: 0,
openEndlocksCount: 0,
openHangingWeight: 0,

ippt: 0,

springLength: 0,
selectedWireDiam: 0,
amountOfCoils: 0,
internalDiameter: 0,
springWeight: 0, 

dataEntryErrorFlag: false
};

// Post data entry error message:
 let errorStack=[];
 function dataEntryError (errMssg='ERROR! WRONG DATA ENTERED ON AN INPUT FORM!!') {
  
  errorStack.push(errMssg);
 // Display an error message
 document.querySelector('#bullet-text').textContent=errorStack[0];
 console.log(`${errMssg}`, 'errorStack: ', {errorStack});
 
 dataEntryErrorFlag=true;
 }
 
 // Use updated rd obj to generate calcDat obj:
 function buildCalcDat () {
// SLAT OVERLAP WITH WALL 
 if(rd.misc2.dataPoints.mounting===0) {
// BJ mount
  calcDat.slatOverlapWithWall=constDat.slatOverlapWithWallBetweenJamb;
}else if(rd.misc2.dataPoints.mounting===1) {
 // Interior mount
 calcDat.slatOverlapWithWall=constDat.slatOverlapWithWallIntMount;
}else if(rd.misc2.dataPoints.mounting===2){
 // Exterior mount
calcDat.slatOverlapWithWall=constDat.slatOverlapWithWallExtMount;
 }else{
// Invalid slat mounting entry
dataEntryError('Invalid mounting style entry'); 
 }
 
// SLAT TERMINATION THICKNESS
// @@@@@@@@@@@@@@@@@@@@@@@@
if (rd.slats.dataPoints.slatStyle===1) {
// Using curved slat
// @@@@@@@@@@@@@@@@@@@@@@@@
if (rd.misc.dataPoints.useWindlocks===1) {
// Using windlock1
calcDat.slatTerminationThickness=constDat.curvedCastironWindlockThickness;
}else if (rd.misc.dataPoints.useWindlocks===0) {
// Not using windlock
// @@@@@@@@@@@@@@@@@@@@@@@@
if (rd.misc.dataPoints.endlockStyle===0) {
 // Don't use endlocks
 calcDat.slatTerminationThickness=constDat.noEndlockThickness;
}else if (rd.misc.dataPoints.endlockStyle===1) {
 // Use nylon endlocks1
calcDat.slatTerminationThickness=constDat.curvedNylonEndlockThickness;
}else if (rd.misc.dataPoints.endlockStyle===2) {
 // Use stamped endlocks1
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
// @@@@@@@@@@@@@@@@@@@@@@@@
} else if (rd.slats.dataPoints.slatStyle===2) {
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

// ONE ENDLOCK WEIGHT
// @@@@@@@@@@@@@@@@@@@@@@@@
if (rd.slats.dataPoints.slatStyle===1) {
// Using curved slat
// @@@@@@@@@@@@@@@@@@@@@@@@
// Not using windlock
// @@@@@@@@@@@@@@@@@@@@@@@@
if (rd.misc.dataPoints.endlockStyle===0) {
 // Don't use endlocks
 calcDat.oneEndlockWeight=constDat.noEndlockUnitWeight;
}else if (rd.misc.dataPoints.endlockStyle===1) {
 // Use nylon endlocks1
calcDat.oneEndlockWeight=constDat.curvedNylonEndlockUnitWeight;
}else if (rd.misc.dataPoints.endlockStyle===2) {
 // Use stamped endlocks1
calcDat.oneEndlockWeight=constDat.curvedStampedEndlockUnitWeight;
}else if (rd.misc.dataPoints.endlockStyle===3) {
 // Use iron endlocks
calcDat.oneEndlockWeight=constDat.curvedCastironEndlockUnitWeight;
}else{
// Invalid endock style entry
dataEntryError('Invalid endock style entry'); 
}

// @@@@@@@@@@@@@@@@@@@@@@@@
} else if (rd.slats.dataPoints.slatStyle===2) {
// Using flat slat
// @@@@@@@@@@@@@@@@@@@@@@@@
// Not using windlock
// @@@@@@@@@@@@@@@@@@@@@@@@
if (rd.misc.dataPoints.endlockStyle===0) {
 // Don't use endlocks
 calcDat.oneEndlockWeight=constDat.noEndlockUnitWeight;
}else if (rd.misc.dataPoints.endlockStyle===1) {
 // Use nylon endlocks
calcDat.oneEndlockWeight=constDat.flatNylonEndlockUnitWeight;
}else if (rd.misc.dataPoints.endlockStyle===2) {
 // Use stamped endlocks
calcDat.oneEndlockWeight=constDat.flatStampedEndlockUnitWeight;
}else if (rd.misc.dataPoints.endlockStyle===3) {
 // Use iron endlocks
calcDat.oneEndlockWeight=constDat.flatCastironEndlockUnitWeight;
}else{
// Invalid endock style entry
dataEntryError('Invalid endock style entry'); 
}

}else{
// Invalid slat style entry
dataEntryError('Invalid slat style entry'); 
}

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

// BARREL DIAMETER
 // Tube Diameter size order: Smaller is 1. Larger is 6.
if (rd.barrel.dataPoints.barrelStyle===1) {
 // 4 inch tube diameter choice
calcDat.barrelDiameter=constDat.barrelTube4inchDia;

}else if (rd.barrel.dataPoints.barrelStyle===2) {
 // 6 inch tube diameter choice
 calcDat.barrelDiameter=constDat.barrelTube6inchDia;
 
}else if (rd.barrel.dataPoints.barrelStyle===3) {
 // Small yoyo tube diameter choice
 calcDat.barrelDiameter=constDat.barrelSmallYoyo;
 
}else if (rd.barrel.dataPoints.barrelStyle===4) {
 // Spiral ring choice
 calcDat.barrelDiameter=constDat.barrelSpiralRing;
 
}else if (rd.barrel.dataPoints.barrelStyle===5) {
 // Big yoyo tube diameter choice
 calcDat.barrelDiameter=constDat.barrelBigYoyo;
 
}else if (rd.barrel.dataPoints.barrelStyle===6) {
 // 8 inch tube diameter choice
 calcDat.barrelDiameter=constDat.barrelTube8inchDia;
}else{
// Invalid barrel style
dataEntryError('Invalid barrel style');
}

// SLAT "C" VALUE
if (rd.slats.dataPoints.slatStyle===1 && rd.barrel.dataPoints.barrelStyle===1) {
calcDat.slatC_value=constDat.slatC_value4inchTubeCurvedSlat;

}else if (rd.slats.dataPoints.slatStyle===1 && rd.barrel.dataPoints.barrelStyle===2) {
calcDat.slatC_value=constDat.slatC_value6inchTubeCurvedSlat;

}else if (rd.slats.dataPoints.slatStyle===1 && rd.barrel.dataPoints.barrelStyle===3) {
calcDat.slatC_value=constDat.slatC_valueSmallYoyoCurvedSlat;

}else if (rd.slats.dataPoints.slatStyle===1 && rd.barrel.dataPoints.barrelStyle===4) {
calcDat.slatC_value=constDat.slatC_valueRimCurvedSlat;

}else if (rd.slats.dataPoints.slatStyle===1 && rd.barrel.dataPoints.barrelStyle===5) {
calcDat.slatC_value=constDat.slatC_valueBigYoyoCurvedSlat;

}else if (rd.slats.dataPoints.slatStyle===1 && rd.barrel.dataPoints.barrelStyle===6) {
calcDat.slatC_value=constDat.slatC_value8inchTubeCurvedSlat;

}else if (rd.slats.dataPoints.slatStyle===2 && rd.barrel.dataPoints.barrelStyle===1) {
calcDat.slatC_value=constDat.slatC_value4inchTubeFlatSlat;

}else if (rd.slats.dataPoints.slatStyle===2 && rd.barrel.dataPoints.barrelStyle===2) {
calcDat.slatC_value=constDat.slatC_value6inchTubeFlatSlat;

}else if (rd.slats.dataPoints.slatStyle===2 && rd.barrel.dataPoints.barrelStyle===3) {
calcDat.slatC_value=constDat.slatC_valueSmallYoyoFlatSlat;

}else if (rd.slats.dataPoints.slatStyle===2 && rd.barrel.dataPoints.barrelStyle===4) {
calcDat.slatC_value=constDat.slatC_valueRimFlatSlat;

}else if (rd.slats.dataPoints.slatStyle===2 && rd.barrel.dataPoints.barrelStyle===5) {
calcDat.slatC_value=constDat.slatC_valueBigYoyoFlatSlat;

}else if (rd.slats.dataPoints.slatStyle===2 && rd.barrel.dataPoints.barrelStyle===6) {
calcDat.slatC_value=constDat.slatC_value8inchTubeFlatSlat;

}else{
// Invalid slat, or barrel style
dataEntryError('Either, invalid slat or barrel style');
}

// SLAT VERTICAL CONTRIBUTION
if (rd.slats.dataPoints.slatStyle===1) {
calcDat.slatVerticalContribution=constDat.curvedSlatVerticalContribution;
} else if (rd.slats.dataPoints.slatStyle===2) {
 calcDat.slatVerticalContribution=constDat.flatSlatVerticalContribution;
}else{
// Invalid slat style
dataEntryError('Invalid slat style');
}

// ASTRAGAL LINEAR INCH WEIGHT 
if (rd.misc.dataPoints.astragalStyle===0) {
calcDat.astragalLinearInchWeight=constDat.noAstragalInchLinearWeight;
}else if (rd.misc.dataPoints.astragalStyle===1) {
calcDat.astragalLinearInchWeight=constDat.vinylAstragalLinearInchWeight;
}else if (rd.misc.dataPoints.astragalStyle===2) {
calcDat.astragalLinearInchWeight=constDat.rubberAstragalLinearInchWeight;
}else{
// Invalid astragal style
dataEntryError('Invalid astragal style');
}

// ONE SLIDEBOLT WEIGHT
if (rd.misc.dataPoints.slideBoltsStyle===0) {
 calcDat.oneSlideBoltWeight=constDat.doNotUseSlidebolts;
}else if (rd.misc.dataPoints.slideBoltsStyle===1) {
calcDat.oneSlideBoltWeight=constDat.useSlidebolts;
} else {
// Invalid slidebolts style
dataEntryError('Invalid slidebolts style');
}

// BOTTOM BAR VERTICAL TRAVEL (hGoal)
calcDat.hGoal=rd.wallCutout.dataPoints.height + constDat.bbBeyondWallCutoutHeight;

// SPRING INTERNAL DIAMETER 
calcDat.internalDiameter=rd.spring.dataPoints.intDia;

console.log('buildCalcDat(): ', {calcDat});
}

/* CLOSED ASSEMBLY CALCULATIONS */
// Slat width
function slatAssemblyWidth () {
const assembledSlatWidth=rd.wallCutout.dataPoints.width+calcDat.slatOverlapWithWall;
calcDat.slatAssemblyWidth=assembledSlatWidth;
console.log('slatAssemblyWidth(): ', {assembledSlatWidth});
return assembledSlatWidth;}

function slatWidth () {
 const widthOfSlat=calcDat.slatAssemblyWidth-(2*calcDat.slatTerminationThickness);
calcDat.slatWidth=widthOfSlat;
console.log('slatWidth(): ', {widthOfSlat});
return widthOfSlat;}

function oneSlatWeight () {
const oneSlatPounds=calcDat.slatLinearInchWeight*calcDat.slatWidth;
calcDat.oneSlatWeight=oneSlatPounds;
console.log('oneSlatWeight(): ', {oneSlatPounds});
return oneSlatPounds;}

function closedHangingHeight () {
 // Upper end of track to tube attachment
 const a=(constDat.bbStopDistanceBelowEndPlate + (0.5 * calcDat.endplateSize));
 const b=(0.5 * calcDat.endplateSize) - constDat.endplateWallEdgeToTrackMiddle - ((calcDat.slatC_value + calcDat.barrelDiameter)/2); 
 const d=(a*a) + (b*b);
 const c=Math.sqrt(d);
 
const linearHeight= 
 /*
 Math.PI()*(calcDat.barrelDiameter + slatC_value/2)/2 + // Not used for closed hanging weight.
 */
 c
 +
 (rd.wallCutout.dataPoints.height + constDat.bbBeyondWallCutoutHeight);
 
 calcDat.closedHangingHeight=linearHeight;
console.log('closedHangingHeight(): ', {linearHeight});

return linearHeight;}

function closedHangingSlatCount () {
// Substract 1 that belongs to the BB
const slatCount=(calcDat.closedHangingHeight/calcDat.slatVerticalContribution)-1;

calcDat.closedHangingSlatCount=slatCount;
console.log('closedHangingSlatCount(): ', {slatCount});
return slatCount;}

function closedEndlocksCount () {
let endlocksCount;
let roundedOffSlatCnt=Math.round(calcDat.closedHangingSlatCount);
 // If slat count even
if(roundedOffSlatCnt % 2===0) {
endlocksCount = roundedOffSlatCnt;
}else{ // If slat count odd
endlocksCount = roundedOffSlatCnt + 1;
}

calcDat.closedEndlocksCount=endlocksCount;
console.log('closedEndlocksCount(): ', {endlocksCount});
return endlocksCount;}

function bbAnglesWeight () {
 /*
 console.log('bbAngleVerticalSide', `${rd.bottomBar.dataPoints.bbAngleVerticalSide}`,'bbAngleHorizontalSide', `${rd.bottomBar.dataPoints.bbAngleHorizontalSide}`,'bbAngleThickness', `${rd.bottomBar.dataPoints.bbAngleThickness}`,'bbAnglesAmount', `${rd.bottomBar.dataPoints.bbAnglesAmount}`,'slatWidth', `${calcDat.slatWidth}`);
 */
const oneAngleVolume=(rd.bottomBar.dataPoints.bbAngleVerticalSide*rd.bottomBar.dataPoints.bbAngleThickness+(rd.bottomBar.dataPoints.bbAngleHorizontalSide-rd.bottomBar.dataPoints.bbAngleThickness)*rd.bottomBar.dataPoints.bbAngleThickness)*(calcDat.slatWidth);
const bbAnglesWeight=oneAngleVolume*rd.bottomBar.dataPoints.bbAnglesAmount*constDat.lowCarbSteelSpecificWeight;

calcDat.bbAnglesWeight=bbAnglesWeight;
console.log('bbAnglesWeight(): ', {bbAnglesWeight});
return bbAnglesWeight;} 

function astragalWeight () {
const astragalWeight=calcDat.astragalLinearInchWeight*calcDat.slatWidth;

calcDat.astragalWeight=astragalWeight;
console.log('astragalWeight(): ', {astragalWeight});
return astragalWeight;}

function slideboltsWeight () {
const slideboltsWeight = calcDat.oneSlideBoltWeight*2;

calcDat.slideboltsWeight=slideboltsWeight;
console.log('slideBoltsWeight(): ', {slideboltsWeight});
return slideboltsWeight;}

// Weight of bottom Bar assembly:
function bbAssemblyWeight () {
const bbWeight=calcDat.bbAnglesWeight + calcDat.oneSlatWeight + calcDat.astragalWeight + calcDat.slideboltsWeight;

calcDat.bbAssemblyWeight=bbWeight;
console.log('bbAssemblyWeight(): ', {bbWeight});
return bbWeight;}

// Weight of closed curtain assembly
function closedHangingWeight () {
const hangingWeight =
(calcDat.closedHangingSlatCount*calcDat.oneSlatWeight)
+ 
(calcDat.closedEndlocksCount*calcDat.oneEndlockWeight)
+ 
calcDat.bbAssemblyWeight;

calcDat.closedHangingWeight=hangingWeight;
console.log('closedHangingWeight(): ', {hangingWeight});

return hangingWeight;}

// Low moment arm rc (arm when door closed)
function lowMomentArm () {
const lMArm = (calcDat.barrelDiameter + calcDat.slatC_value)/2;

calcDat.lowMomentArm=lMArm;
console.log('lowMomentArm(): ', {lMArm});
return lMArm;}

function requiredInchPound () {

const closedInchPounds=calcDat.lowMomentArm*calcDat.closedHangingWeight;

calcDat.requiredInchPound=closedInchPounds;
console.log('requiredInchPound(): ', {closedInchPounds});

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
function setSpringsBasquetToChooseFrom () {
 const inventoryData = inventoryMaxInchPound;
 const optimalData=optimalMaxInchPound;
const inventorizedRadioBtn=document.querySelector('#spring-on-hand');
 const optimalRadioBtn=document.querySelector('#optimal-spring');
 
if(optimalRadioBtn.checked){
return optimalData;}
if(inventorizedRadioBtn.checked){
return inventoryData;}
}

let requiredInchPoundsInRange;
function selectSpringWireDiameter () {
let strongEnoughWireFound = false;
let selectedWireDiam = 0;
const springDataSetToUse=setSpringsBasquetToChooseFrom();
for (let i = 0; i < springDataSetToUse.length; i++) {
if (springDataSetToUse[i][0] >= calcDat.requiredInchPound) {
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
// Error. Excessive load for existing wire diameter
dataEntryError(`The ${Math.round(calcDat.requiredInchPound)} InchPound required is too large for existing wire diameters.`);
/*
`Sorry. The ${Math.round(calcDat.requiredInchPound)} InchPound required is too large for existing wire diameters.`
*/
requiredInchPoundsInRange=false;

console.log (`Sorry. The ${Math.round(calcDat.requiredInchPound)} InchPound value required is too large for existing wire diameters.`);

} else {
// Save selectedWireDiam to result object as a datum value:
calcDat.selectedWireDiam=selectedWireDiam;

requiredInchPoundsInRange=true;

console.log('selectSpringWireDiameter(): ', {selectedWireDiam});
}
return selectedWireDiam;}

// postWireDiaToResultsPage() no longer used:

/* Start of CALCULATING SPRING LENGTH */
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

// Initial values: 
let r0=calcDat.barrelDiameter/2;

const a=calcDat.slatC_value/(2*Math.PI);
const thetaInit=((2*r0 + calcDat.slatC_value)*Math.PI)/calcDat.slatC_value;
const sigmaInit=Math.sqrt(1 + (thetaInit*thetaInit));
const arcInit=(a*((thetaInit*sigmaInit)
+ Math.log(thetaInit+sigmaInit)))/2;


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

if(nthTableRow.h>=calcDat.hGoal) {
 // Write out result
calcDat.rO=nthTableRow.rO;
calcDat.dR=nthTableRow.dR;

console.log(`💪 Success! Found rO ${Math.round(10000*nthTableRow.rO)/10000}  For hGoal ${Math.round(10000*calcDat.hGoal)/10000}`);

console.log ('calcRoDrForHgoal(): ', {nthTableRow});
 break;
}
}
}
}

// start of CALCS FOR OPEN CURTAIN:
function openHangingHeight () {
 const a=(constDat.bbStopDistanceBelowEndPlate + (0.5 * calcDat.endplateSize));
console.log(`For hGoal ${calcDat.hGoal}, rO is ${calcDat.rO} and dR is ${calcDat.dR}`);
 
 const b=(0.5 * calcDat.endplateSize) - constDat.endplateWallEdgeToTrackMiddle - calcDat.rO;
 const d=(a*a) + (b*b);
 const linearHeight=Math.sqrt(d);
/*
const linearHeight=Math.sqrt(
 (calcDat.endplateSize/2)^2 + ((calcDat.endplateSize/2) - 1.5)^2
 );
 */
calcDat.openHangingHeight=linearHeight;
console.log('openHangingHeight(): ', {linearHeight});
return linearHeight;}

function openHangingSlatCount () {

 // Substract 1 that belongs to the BB
const slatCount=(calcDat.openHangingHeight/(calcDat.slatVerticalContribution)) - 1;

calcDat.openHangingSlatCount=slatCount;
console.log('openHangingSlatCount(): ', {slatCount});

return slatCount;}

function openEndlocksCount () {
let endlocksCount;

let roundedOffSlatCnt=Math.round(calcDat.openHangingSlatCount);
 // If slat count even
if(roundedOffSlatCnt % 2===0) {
endlocksCount = roundedOffSlatCnt;
}else{ // If slat count odd
endlocksCount = roundedOffSlatCnt + 1;
}

calcDat.openEndlocksCount=endlocksCount;
console.log('openEndlocksCount(): ', {endlocksCount});
return endlocksCount;}

function openHangingWeight () {

const hangingWeight = (
 calcDat.openHangingSlatCount*calcDat.oneSlatWeight)
 + 
 (calcDat.openEndlocksCount*calcDat.oneEndlockWeight) 
 + calcDat.bbAssemblyWeight;
 
 calcDat.openHangingWeight=hangingWeight;
console.log('openHangingWeight(): ', {hangingWeight});

return hangingWeight;}
// end of CALCS FOR OPEN CURTAIN:

function springLength () {
 const ippt=(
  (calcDat.lowMomentArm * calcDat.closedHangingWeight) 
  - (calcDat.rO * calcDat.openHangingWeight))/calcDat.dR;
  
  calcDat.ippt=ippt;
 console.log('ippt: ', {ippt});

const fifthPowerOfWireDiam=calcDat.selectedWireDiam*calcDat.selectedWireDiam*calcDat.selectedWireDiam*calcDat.selectedWireDiam*calcDat.selectedWireDiam;
const springLength=(3208909*(fifthPowerOfWireDiam))/(calcDat.ippt*(rd.spring.dataPoints.intDia+calcDat.selectedWireDiam));

 calcDat.springLength=springLength;
console.log('springLength(): ', {springLength});

return springLength;}

function springTurns () {
const n=calcDat.springLength/calcDat.selectedWireDiam;
 
calcDat.amountOfCoils=n;
console.log ('springTurns', {n});

return n;}

function springWeight () {
 const wireRadius=0.5 * calcDat.selectedWireDiam;
console.log('wire Radius: ', {wireRadius});

const wireCrossSectionArea=Math.PI*wireRadius*wireRadius;
console.log('wire Cross Section Area: ', {wireCrossSectionArea});

const springMeanDiam=rd.spring.dataPoints.intDia+ calcDat.selectedWireDiam;
console.log('spring Mean Diam: ', {springMeanDiam});

const oneCoilVolume=Math.PI *springMeanDiam*wireCrossSectionArea;
console.log ('one Coil Volume: ', {oneCoilVolume});

const springCoilsCount=springTurns();
console.log ('spring Coils Count: ', {springCoilsCount});

const allCoilsVolume=oneCoilVolume*springCoilsCount;
console.log ('all Coils Volume', {allCoilsVolume});

const springWeight=allCoilsVolume*(constDat.highCarbSteelSpecificWeight);

calcDat.springWeight=springWeight;
console.log ('spring Weight(): ', {springWeight});

return springWeight;}


// This function adjusts 'number' to a desired 'length'
function numMolder (number, lengthSpec=5) {
// Convert number to string
const numStr=number.toString();

//Extract integer part
const integerSlice= xtract.integerPart(`${numStr}`);

// Significant figures count of integer part
const integerSliceDigitsCount=xtract.sigFiguresCount(integerSlice) ;

// Compute necessary number of decimal places to make the number string a desired number length 
const necessaryDecimalPlaces= lengthSpec - integerSliceDigitsCount;

const adjustedLengthNum=number.toFixed(necessaryDecimalPlaces);

//const adjustedLengthNum=Math.round(number*decimalShifter)/decimalShifter;
return adjustedLengthNum;}

function spoolSpringSpecs () {
 
document.querySelector('#inches-a').textContent=numMolder(calcDat.selectedWireDiam, 5)
;
document.querySelector('#inches-a').style.color='white';

document.querySelector('#inches-b').textContent=numMolder(calcDat.internalDiameter, 4);
document.querySelector('#inches-b').style.color='white';

document.querySelector('#inches-c').textContent=numMolder(calcDat.springLength, 4);
document.querySelector('#inches-c').style.color='white';

document.querySelector('#inches-d').textContent=numMolder(calcDat.amountOfCoils, 4);
document.querySelector('#inches-d').style.color='white';

document.querySelector('#inches-e').textContent=numMolder(calcDat.springWeight, 4);
document.querySelector('#inches-e').style.color='white';

console.log("MY WHOLE APP CALC'd SPECS: ", {calcDat});
}
/* end CALCULATING SPRING LENGTH */
function unspoolSpringSpecs () {
 
document.querySelector('#inches-a').textContent='******';
document.querySelector('#inches-a').style.color='black';

document.querySelector('#inches-b').textContent='******';
document.querySelector('#inches-b').style.color='black';

document.querySelector('#inches-c').textContent='******';
document.querySelector('#inches-c').style.color='black';

document.querySelector('#inches-d').textContent='******';
document.querySelector('#inches-d').style.color='black';

document.querySelector('#inches-e').textContent='******';
document.querySelector('#inches-e').style.color='black';

document.querySelector('#inches-a').style.backgroundColor ='darkred';

document.querySelector('#inches-b').style.backgroundColor ='darkred';

document.querySelector('#inches-c').style.backgroundColor ='darkred';

document.querySelector('#inches-d').style.backgroundColor ='darkred';

document.querySelector('#inches-e').style.backgroundColor ='darkred';
}

// oldResultProcessing() no longer used

function updateCalcBtnStyle () {
if(requiredInchPoundsInRange===true && dataEntryErrorFlag===false){
document.querySelector('#calc-results').style.backgroundColor = ('lightgray');
document.querySelector('#calc-results').style.color = ('darkgreen');
document.querySelector('#calc-results').value = 'SUCCESS!';
}else{
document.querySelector('#calc-results').style.backgroundColor = ('lightgray');
document.querySelector('#calc-results').style.color = ('darkred');
document.querySelector('#calc-results').value = 'HUSTON, WE HAVE A PROBLEM!';
document.querySelector(':root').style.setProperty('--blink-color', '#0c0c48'); // #151530 #291609 

unspoolSpringSpecs();
requiredInchPoundsInRange=true;
}
return;}

function updateAfterNumCrunching () {
  // This delay is to extend the time of the capture data btn animation. Otherwise animation won't be perceived.
  setTimeout(()=>updateCalcBtnStyle(), 175);
}

function determineAllSpringSpecs () {
updRdWithVaultedDataPoints();
buildCalcDat();
slatAssemblyWidth();
slatWidth();
oneSlatWeight();
closedHangingHeight();
closedHangingSlatCount();
closedEndlocksCount();
bbAnglesWeight();
astragalWeight();
slideboltsWeight();
bbAssemblyWeight();
closedHangingWeight();
lowMomentArm();
requiredInchPound();
selectSpringWireDiameter();
calcRoDrForHgoal();
openHangingHeight();
openHangingSlatCount();
openEndlocksCount();
openHangingWeight();
springLength();
springTurns();
springWeight();
spoolSpringSpecs();
updateAfterNumCrunching();
}

// load-measurements is supplanted by calc-results on the resultTemplate
const calcResultsBtn = document.querySelector('#calc-results');
// Timeout for button animation
let blockMultipleCalcResults;
calcResultsBtn.addEventListener('mouseup', ()=> {
 if (blockMultipleCalcResults) {
  return;
 }
setTimeout(function () {
determineAllSpringSpecs();
blockMultipleCalcResults=true;
}, 250);
});
