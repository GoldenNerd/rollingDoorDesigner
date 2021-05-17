'use strict';

/*
The RD measurements template properties object.
*/
const rd = {
  startPage: {
    nameOfComponent: '🤓 Welcome to RD Designer! 🤓',
    componentSketchFileName: 'rdclipart.jpg',
    noOfMeasurements: 0,
    labelsOfMeasurements: ['',
      '',
      '',
      '',
      ''],
    prevComObjName: 'startPage',
    nextComponent: 'wallCutout'
  },

  wallCutout: {
    nameOfComponent: 'Wall Cutout:',
    componentSketchFileName: 'wallCutout.jpg',
    noOfMeasurements: 5,
    labelsOfMeasurements: ['Width',
      'Height',
      'Top Clearance',
      'Left Clearance',
      'Right Clearance'],
    prevComObjName: 'startPage',
    nextComponent: 'barrel'
  },

  barrel: {
    nameOfComponent: 'Barrel:',
    componentSketchFileName: 'barrel.jpg',
    noOfMeasurements: 1,
    labelsOfMeasurements: ['Rings Diameter'],
    prevComObjName: 'barrel',
    nextComponent: 'slats'
  },

  slats: {
    nameOfComponent: 'Slats:',
    componentSketchFileName: 'slat.jpg',
    noOfMeasurements: 2,
    labelsOfMeasurements: ['Gauge',
      'Width'],
    prevComObjName: 'barrel',
    nextComponent: 'bottomBar'
  },

  bottomBar: {
    nameOfComponent: 'Bottom Bar:',
    componentSketchFileName: 'bottomBar.jpg',
    noOfMeasurements: 4,
    labelsOfMeasurements: ['Angle Width',
      'Angle Height',
      'Angle Thickness',
      'Angles Qty.'],
    prevComObjName: 'bottomBar',
    nextComponent: 'spring'
  },

  spring: {
    nameOfComponent: 'Torsion Spring:',
    componentSketchFileName: 'spring.jpg',
    noOfMeasurements: 1,
    labelsOfMeasurements: ['Internal Diameter'],
    prevComObjName: 'bottomBar',
    nextComponent: 'misc'
  },

  misc: {
    nameOfComponent: 'Miscellaneous Components:',
    componentSketchFileName: 'misc.jpg',
    noOfMeasurements: 5,
    labelsOfMeasurements: ['Endlock Style',
      'Slide Bolt Style',
      'Astragal Style',
      'Windlock Style',
      'Slat Style'],
    prevComObjName: 'spring',
    nextComponent: 'misc'
  }
};

function displayAndReturnTemplateId () {
  const templateId = document.querySelector('#template-id');
  const templateIdAttr = document.querySelector('#template-id').getAttribute('class');
  templateId.innerHTML = `templateId is: ${templateIdAttr}`;
  return templateId;
}

/*
Retrieve from localStorage the component obj name that will be used to build the pagr:
*/
function retrieveCompObjNameNow () {
const ls_compObjNameNow=JSON.parse(window.localStorage.getItem('nxtCompNamePassedOnByPrevCompPage')) ; // §
/*
const compObjNameNow='wallCutout';
*/
console.log ('object in localStorage:', {ls_compObjNameNow});
    /* The reference frame for the naming convention (previous, now, next) is the page currently on display. What used to be nextComponentName for previous page is compObjNameNow for current page, and so on.
    */
return ls_compObjNameNow;
}

/*
Establish the component's object name of the page:
*/
function establishPageName () {
  let compObjNameNow=retrieveCompObjNameNow();
  if (compObjNameNow===null) {
compObjNameNow='startPage';
  }
const nameOfComponentObj=document.querySelector('#name-of-component-obj');
nameOfComponentObj.setAttribute('class', `${compObjNameNow}`);
console.log ('page name after set.Attribute: ', `${nameOfComponentObj.getAttribute('class')}`);
}

function displayAndReturnPageName () {
  const pageName = document.querySelector('#name-of-component-obj');
const pageNameAttr = document.querySelector('#name-of-component-obj').getAttribute('class');
  pageName.innerHTML =  `pageName is: ${pageNameAttr}`;
  return `${pageNameAttr}`;
}

/*
Populate the page's top heather:
*/
function populatePageTopHeather () {
  const heather = document.querySelector('#component-name-header');
heather.innerHTML=rd[document.querySelector('#name-of-component-obj').getAttribute('class')]. nameOfComponent;
}

/*
On page load, populate all page labels according to its component obj name.
*/
window.onload = function () {
const templateId = displayAndReturnTemplateId();
  establishPageName();
  //displayAndReturnPageName();
   /*
   populate page top heather
   */
  populatePageTopHeather();
};

// BELOW IS THE NAVIGATION OF THE APP: 

function stashNxtComponentName () {
let nextComponentName='';
  const templateId=displayAndReturnTemplateId();
  if (templateId==='home') {
nextComponentName=rd.home.nextComponent;
} // §
console.log ('nextComponentName: ' , `${nextComponentName}`);
window.localStorage.setItem('nxtCompNamePassedOnByPrevCompPage', JSON.stringify(nextComponentName));
}
/*
Switch to the next component page after a brief time delay. Delay allows time for current page to save next page name to localStorage before transferring control to next page. 
*/

function switchToNxtComponent () {
  setTimeout(function() {
    window.location = 'mainTemplate.html';
  }, 500);
}

/*
Actions of the Previous Component navigation button:
*/
const previousComponentBtn = document.querySelector ('#previous-page');
function previousComponentPage () {
window.localStorage.clear();
}
previousComponentBtn.addEventListener('click', previousComponentPage);

/*
Actions of the Next Component navigation button:
*/
const nextComponentBtn = document.querySelector ('#next-page');
nextComponentBtn.addEventListener('click', ()=> {
  stashNxtComponentName(); // LocalStorage next component page relative to the current component page.
  switchToNxtComponent(); // Switch to the next component page after a brief time delay.
});