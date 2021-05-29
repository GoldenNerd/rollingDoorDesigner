'use strict';
// ################################
// THE ROLLING DOOR OBJECT:
// §###############################
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
    nextObjName: 'misc'
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
    datumValues: [144, 120, 30, 18, 20],
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
    labels: ['Tube Diameter',
      'Ring Style',
      'Rings Diameter'],
    datumKeys: ['tubeDiameter',
      'ringStyle',
      'ringsDiameter'],
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
    datumKeys: ['angleWidth',
      'angleHeight',
      'bbAngleThickness',
      'anglesAmount'],
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
    labels: ['Slats',
      'Endlocks',
      'Windlocks',
      'Slide Bolts',
      'Astragal'],
    datumKeys: ['slatC_value',
      'endlockThickness',
      'useWindlocks',
      'useSlideBolt',
      'useAstragal'],
    datumValues: ['curvedSlat', 'plasticEndlocks', 'noWindlock', 'noSlideBolt', 'noAstragal'],
    dataPoints: {},
    prevObjName: 'startPage',
    activeObjName: 'misc',
    nextObjName: 'result'
  },

  result: {
    objNo: 7,
    pageHeader: 'Final Result:',
    sketchFileName: 'url(result.jpg)',
    noOfDataPoints: 5,
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
     wireDiameter: 0,
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
let requiredMaxInchPound;// = 4621;
let linearInchWeight = 0.0549;
let slatVerticalContribution = 2.75;
const endplateSize = 14;
const barrelDiameter = 7.75; // ring
const slatC_value = 0.5455;
const slatOverlapWithWallIntMount=5.25;
const slatOverlapWithWallExtMount=7.25;
const interiorMounting=true;

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

function ulShowHideCtrl () {
  if (activeObj.objNo === 6) {
  // Note: 6 is the misc page. the std ul must be hidden in favor of the misc ul. 
document.querySelector('#std-ul'). style.position='absolute';
document.querySelector('#std-ul').style.bottom='500%';
  }else{
document.querySelector('#misc-ul'). style.position='absolute';
document.querySelector('#misc-ul').style.bottom='500%';
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

  updatePrevBtnLabel();

  // datum-labels
  populateDatumLabels();

  hideEmptyDatums();

  initializeBtnsStyles();

  if (activeObj.objNo === 7) {
  // Note: 7 is the result page.  Calc button is same capture button that takes on a "calc identity" on the result page. That's why a new button skin is required.
    styleCaptureBtnAsCalcBtn();
  }
  
   // ulShowHideCtrl();
  
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
    if (activeObj.objNo === 6 || activeObj.objNo === 7) {
      window.location = 'index.html';
    } else {
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
    if (activeObj.objNo === 6) {
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
  console.log ('Captured Data: ', activeObj.dataPoints);
  // Note:  Once data is captured, update capture button appearance, and next button appearance
}

function updateBtnsStyles () {
  // This delay is to extend the time of the capture data btn animation. Otherwise animation won't be perceived.
  setTimeout(()=>afterDataCapturedBtnStyles(), 175);
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

function saveACompDataToActiveObj () {
  readDataFormValues();
  normalizeDataPointValuesToInches();
  saveDataPointInchesToActiveObj();
  buildDataPointObjIntoActiveObj();
  updateBtnsStyles();
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

function saveDataPointValuesToActiveObj () {
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

function saveMiscDataToActiveObj () {
  saveDataPointValuesToActiveObj();
buildDataPointObjIntoActiveObj();
/*
  normalizeDataPointValuesToInches();
  saveMiscPointValuesToActiveObj();
  buildDataPointObjIntoActiveObj();
  */
  updateBtnsStyles();
}

const captureDataBtn = document.querySelector('#load-measurements');
captureDataBtn.addEventListener('mouseup', function () {
  // The Misc Data Form format requires a handler taylored to its specific format (radio buttons.)
if (activeObj.objNo === 6) {
saveMiscDataToActiveObj();
}else{
saveACompDataToActiveObj();
}
});

// ################################
// BELOW IS APP NUMBER CRUNCHING
// §###############################

// mousedown calc spring btn animation
// Grab buttons
function styleCaptureBtnAsCalcBtn () {
document.querySelector('#calc-results').style.backgroundColor = ('lightgray');

document.querySelector('#calc-results').style.color = ('darkblue');
}

function mousedownCalcBtnAnimation () {
// Do on button actuation
document.querySelector ('#calc-results').style.backgroundColor = ('black');
document.querySelector ('#calc-results').style.color = ('white');
}
document.querySelector ('#calc-results').addEventListener('mousedown', mousedownCalcBtnAnimation);

/* CURTAIN GROUNDWORK CALCULATIONS */

// Weight of one slat
function slatAssemblyWidth () {
let slatAssemblyWidth;
if(interiorMounting) {
 const slatAssemblyWidth=rd.wallCutout.width+slatOverlapWithWallIntMount;
}else{
const slatAssemblyWidth=rd.wallCutout.width+slatOverlapWithWallExtMount;
}
return slatAssemblyWidth;}

function slatWidth () {
 const slatWidth=slatAssemblyWidth()-rd.misc.dataPoints.endlockThickness;
return slatWidth;}

function oneSlatWeight () {
const oneSlatPounds=linearInchWeight*slatWidth();
return oneSlatPounds;}

function closedLinearHeight () {
const linearHeight= 
 /*
 Math.PI()*(barrelDiameter + slatC_value/2)/2 + // Not used for closed hanging weight.
 */
Math.sqrt(
 (endplateSize/2)^2 + ((endplateSize/2) - 1.5)^2
 )
 +
 (rd.wallCutout.dataPoints.height + 2); //
return linearHeight;}

function closedHangingSlatCount () {
// Substract 1 that belongs to the BB
const slatCount=Math.round((closedLinearHeight()/slatVerticalContribution))-1;
return slatCount;}

const bbAngleThickness = 0.125;
const side1 = 2;
const side2 = 2;
const bbAnglesAmount = 2;
const lowCarbSteelSpecificWeight=0.284;
const astragalLinearInchWeight = 0.03;
const oneSlideBoltWeight = 5;
const oneEndlockWeight = 0.02;

function endlocksCount () {
let endlockCount;
 // If slat count even
if(closedHangingSlatCount() % 2===0) {
endlockCount = closedHangingSlatCount();
}else{ // If slat count odd
endlockCount = closedHangingSlatCount() + 1;
}
return endlockCount;}

function bbAnglesWeight () {
const oneAngleVolume=(side1*bbAngleThickness+(side2-bbAngleThickness)*bbAngleThickness) *slatWidth();
const bbAnglesWeight=oneAngleVolume*bbAnglesAmount*lowCarbSteelSpecificWeight;
return bbAnglesWeight;} 

function astragalWeight () {
const astragalWeight=astragalLinearInchWeight*slatWidth();
return astragalWeight;}

function slideboltsWeight () {
const slideBoltsWeight = oneSlideBoltWeight*2;
return slideBoltsWeight;}

// Weight of bottom Bar
function bottomBarWeight () {
const bbWeight=bbAnglesWeight() + oneSlatWeight() + astragalWeight() + slideboltsWeight();
}

// Weight of closed curtain assembly
function closedHangingWeight () {
const hangingWeight = closedHangingSlatCount()*oneSlatWeight() + endlocksCount()*oneEndlockWeight + bottomBarWeight();
return hangingWeight;}

function openLinearHeight () {
const linearHeight=Math.sqrt(
 (endplateSize/2)^2 + ((endplateSize/2) - 1.5)^2);
return linearHeight;}

function openHangingSlatCount () {
const slatCount=Math.round(openLinearHeight()/slatVerticalContribution);
}

function openHangingWeight () {
const hangingWeight = openHangingSlatCount()*oneSlatWeight() + openHangingSlatCount() *oneEndlockWeight + bottomBarWeight();
return hangingWeight;}

// Low moment arm rc (arm when door closed)
function lowMomentArm () {
const lMArm = (rd.barrel.dataPoints.tubeDiameter + rd.misc.slatC_value)/2;
return lMArm;}

function maxInchPound () {
const lbInch=lowMomentArm()*closedHangingWeight();
return lbInch;}

requiredMaxInchPound = maxInchPound();

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
const optimalMaxLbInch=[
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
const inventoryMaxLbInch=[
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
 const inventoryData=inventoryMaxLbInch;
 const optimalData=optimalMaxLbInch;
const inventorizedRadioBtn=document.querySelector('#spring-on-hand');
 const optimalRadioBtn=document.querySelector('#optimal-spring');
if(optimalRadioBtn.checked){
return optimalData;}
if(inventorizedRadioBtn.checked){
return inventoryData;}
}

let calcMIP_InRange;
function chooseSpringWireDiameter () {
let strongEnoughWireFound = false;
let chosenWireDiam = 0;
const springDataSetToUse=springDataSetChoice();
for (let i = 0; i < springDataSetToUse.length; i++) {
if (springDataSetToUse[i][0] >= requiredMaxInchPound) {
chosenWireDiam = springDataSetToUse[i][1];
strongEnoughWireFound = true;
}
if (strongEnoughWireFound) {
strongEnoughWireFound = 'optimalMaxLbInchFound';
break;
}
}
// Verify outcome
if (strongEnoughWireFound === false) {
// Error. Excessive load for existing wire diametere
calcMIP_InRange=false;
console.log (`requiredMaxInchPound (${requiredMaxInchPound}lb-ft) is too large for available wire diameters.`);

} else {
console.log('chosenWireDiam: ', {
chosenWireDiam
});
// Save result as (result page) datum value:
activeObj.datumValues[0] = chosenWireDiam; // `${chosenWireDiam}`
}
}

/*
function saveSpringInnerDia () {
// Save result as datum value:
activeObj.datumValues[1] = '3.0000';
}

function calcSpringTurns () {
// Save result as datum value:
activeObj.datumValues[3] = '92.0000';
}

function calcSpringLength () {
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
  if(calcMIP_InRange){//in range:
document.querySelector('#wire-diameter').textContent = activeObj.dataPoints.wireDiameter;
} else{ // out of range:
document.querySelector('#wire-diameter').style.color='magenta';
document.querySelector('#wire-diameter').innerText=`${Math.ceil(requiredMaxInchPound)}`;
} 
  
document.querySelector('#internal-diameter').textContent = activeObj. dataPoints.internalDiameter;

document.querySelector('#width').textContent = activeObj.dataPoints.width;

document.querySelector('#no-of-turns').textContent = activeObj.dataPoints.amountOfTurns;

document.querySelector('#weight').textContent = activeObj.dataPoints.weight;
}

/* Start CALCULATING SPRING LENGTH */
// Test Data;
const tubeDiam=7.5;
const hGoal=120.75;

// Initial values: 
let r0=tubeDiam/2;
const c=0.5455;
const a=c/(2*Math.PI);
const thetaInit=((2*r0 + c)*Math.PI)/c;
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

if(nthTableRow.h>=hGoal) {
 // Write out result
console.log('💪 Success!');
console.log ('nthTableRow after iteration: ', {nthTableRow});

 break;
}
}
}
}

function calcSpringLength () {
// Build required values into nthTableRow object
calcRoDrForHgoal(); 

// Now use values to determine spring length
 const ippt=(rO*closedHangingWeight()-nthTableRow.rO * openHangingWeight())/nthTableRow.dR;
 
 const springLength=3208909*(rd.result.datumValues[0]^5)/(ippt*(rd.spring.intDia+rd.result.datumValues[0]));
}
/* end CALCULATING SPRING LENGTH */

function updateCalcBtnStyle () {
if(calcMIP_InRange){
document.querySelector('#calc-results').style.backgroundColor = ('lightgray');
document.querySelector('#calc-results').style.color = ('darkgreen');
document.querySelector('#calc-results').value = 'SUCCESS!';
return;}
document.querySelector('#calc-results').style.backgroundColor = ('darkred');
document.querySelector('#calc-results').style.color = ('yellow');
document.querySelector('#calc-results').value = 'HUSTON, WE HAVE A PROBLEM!';

calcMIP_InRange=true;
return;}

function resultProcessing () {
// Save following results to activeObj.datumValues array.
chooseSpringWireDiameter();
calcSpringLength();
/*
saveSpringInnerDia();
calcSpringTurns();
calcSpringLength();
calcSpringWeight();
*/
// After saving as datum values then:
buildDataPointObjIntoActiveObj();
// And finally:
postWireDiaToResultsPage();
updateCalcBtnStyle();
}

// load-measurements is supplanted by calc-results on the resultTemplate
const calcResultsBtn = document.querySelector('#calc-results');
// Timeout for button animation
calcResultsBtn.addEventListener('mouseup', ()=> {
setTimeout(function () {
resultProcessing();
}, 250);
});
