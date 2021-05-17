'use strict';

let inches_a;
let inches_b;
let inches_c;
let inches_d;
let inches_e;

const inchesData=[inches_a, inches_b, inches_c, inches_d, inches_e];
console.log ('1st:', {inchesData});

let a;
let b;
let c;
let d;
let e;

const wallCutout={
  width: a,
  height: b,
  topClearance: c,
  leftClearance: d,
  rightClearance: e
};

function getMeasurements () {
// load inches data
const inchesValuesCollection=document.querySelectorAll('.inches-value');
for (let i = 0; i < inchesValuesCollection.length; i++) {
  inchesData[i]=inchesValuesCollection[i].value;
}
console.log ('Okay1:', {inchesData});
// load feet inchesData
const feetValuesCollection=document.querySelectorAll('.feet-value');
const dataConvertedToInches =[];
for (let i = 0; i < feetValuesCollection.length; i++) {
  // simultaneously loading of feetData, conversion of feet to inched, and adding inches data for each measurement. 
  dataConvertedToInches[i] = 12*feetValuesCollection[i].value + 1*inchesData[i];
}
console.log ('Okay3:', {dataConvertedToInches});

// loading values to measured object
 wallCutout.width=dataConvertedToInches[0];
  wallCutout.height= dataConvertedToInches[1];
  wallCutout.topClearance=dataConvertedToInches[2];
  wallCutout.leftClearance=dataConvertedToInches[3];
  wallCutout.rightClearance=dataConvertedToInches[4];
} 
console.log ({wallCutout});

const getMeasurementsBtn=document.querySelector('#load-measurements');
getMeasurementsBtn.addEventListener('click', getMeasurements);
