'use strict';

window.onload = function () {
 const rdOutlineHeight = JSON.parse(window.localStorage.getItem('rdOutlineHeight'));
 document.querySelector('#rd-overall-height-ft').value = inchesToFt_Inches(rdOutlineHeight).ft;
 document.querySelector('#rd-overall-height-inch').value = inchesToFt_Inches(rdOutlineHeight).inch;
 // §
const exactEndplateSize = JSON.parse(window.localStorage.getItem('exactEndplateSize'));
 document.querySelector('#exact-endplate-size').value = exactEndplateSize;

 const rdClosedWeight = JSON.parse(window.localStorage.getItem('rdClosedWeight'));
 document.querySelector('#closed-weight').value = Math.ceil(rdClosedWeight);

 innerCalcDat.errorStack = JSON.parse(window.localStorage.getItem('errorStack'));
 // console.log('errorStack', innerCalcDat.errorStack);
 let errorStackExists = (innerCalcDat.errorStack === null||innerCalcDat.errorStack === undefined)? false: true;
 if (errorStackExists && innerCalcDat.errorStack.length !== 0) {
  
  document.querySelector('#exact-endplate-size').value = '0000';
  
  document.querySelector('#closed-weight').value = '0000';

  resultsVector[0].innerText = 'Data error. Press button for details.';
  resultsVector[0].style.color = 'magenta';
 }
 console.log(`Inherited values from RD numberCruncher:\n rdOutlineHeight: ${rdOutlineHeight} \nexactEndplateSize: ${exactEndplateSize}\n rdClosedWeight: ${rdClosedWeight}
 \n innerCalcDat.errorStack: ${innerCalcDat.errorStack}`);
};
/*
start of import bsNumCruncher from './appN.js';
*/

/*
end of import bsNumCruncher from './appN.js';
*/

/* Grab form output spans */
const resultingBandSpring0 = document.querySelector('#resulting-band-spring0');
const resultingBandSpring1 = document.querySelector('#resulting-band-spring1');
const resultingBandSpring2 = document.querySelector('#resulting-band-spring2');
const resultingBandSpring3 = document.querySelector('#resulting-band-spring3');
const resultingBandSpring4 = document.querySelector('#resulting-band-spring4');
const resultingBandSpring5 = document.querySelector('#resulting-band-spring5');
const resultingBandSpring6 = document.querySelector('#resulting-band-spring6');
const resultingBandSpring7 = document.querySelector('#resulting-band-spring7');

/* Output spans DOM Slots */
const resultsVector = [
 resultingBandSpring0,
 resultingBandSpring1,
 resultingBandSpring2,
 resultingBandSpring3,
 resultingBandSpring4,
 resultingBandSpring5,
 resultingBandSpring6,
 resultingBandSpring7
];

/* The 7 band springs data arrays */
const bSInv1 = [
 [98, '60 X 1.5', 1],
 [86, '60 X 1.4', 1],
 [77, '60 X 1.3', 1],
 [71, '60 X 1.2', 1],
 [59, '55 X 1.2', 1],
 [51, '50 X 1.2', 1],
 [42, '45 X 1.2', 1]
];
console.log('bSInv1', bSInv1);

/*
Build the baseline doubled strength version of the B.S. inventory
*/

function makeBsInv2 () {
 const bSInv2 = [];
 for (var i = 0; i < bSInv1.length; i++) {
  const ithInv2BsTrio = [];
  const ithInv2BsTrioStrength = 2*bSInv1[i][0];
  ithInv2BsTrio.push(ithInv2BsTrioStrength);
  const ithInv2BsTrioDescr = bSInv1[i][1];
  //(bSInv1[i][1]).replace('1X', '1X');
  ithInv2BsTrio.push(ithInv2BsTrioDescr);
  const ithInv2BsTrioMult = 2*bSInv1[i][2];
  ithInv2BsTrio.push(ithInv2BsTrioMult);
  bSInv2.push(ithInv2BsTrio);
 }
 return bSInv2;
}

const bSInv2 = makeBsInv2();
console.log('bSInv2', bSInv2.slice());

/*
const bSInv2 = [
 [196, '60 2X98 1.5', 2],
 [172, '60 2X86 1.4', 2],
 [154, '60 2X77 1.3', 2],
 [142, '60 2X71 1.2', 2],
 [118, '55 2X59 1.2', 2],
 [102, '50 2X51 1.2', 2],
 [84, '45 2X42 1.2', 2]
];
*/

const innerCalcDat = {
 /* User data */
 x: '#### USER DATA ####',
 rdOverallHeight: null,
 rdOverallHeightFt: null,
 rdOverallHeightInch: null,

 exactEndplateSize: null, 
 closedWeight: null,
 bSpringsForceBoost: null,
 maxAllowedOvershoot: null,
 operatorType: null,

 skinOfOptimizeBtnAtEndOfScript: 'SUCCESS!',
 errorStack: null,

 y: '#### CALCULATED DATA ####',
 compoundWeight: 0,
 bsLength: 0,

 accumulatorOfAllBsSetForces: [],
 accumulatorOfAllBsSetLengths: [],
 collectorOfAllBsSetsDeviations: [],
 // is never reset to empty
 totalAmountOfPossibleBsCombs: 0,
 rippleCarry: 0,

 //overshootCompliantsOfOneGroup: [],
 // is never reset to empty
 overflowCarry: false,

 cyclesCounter: 0,
 overshootCompliantsSetsOfAllGroups: [],
 collectorOfCompliantSetsDeviations: [],
 numOfYoyosForOvershootCompliantSets: [],

 setsWithYoyoQty: [],
 progressionOfYoyoQtytiesScanned: [],
 setsWithMinimalYoyoQty: [],

 progressionOfOvershootValuesScanned: [],
 setsWithMinimumOvershoot: [],
 //setsWithMinimalYoyoQty: []

 setsWithMinimumYoyos: [],
 //minimumOvershootSets: [],
 // counterString: '',
 // compliantFinalistSets: 0,
};

const snapshots = {
 inventoryGroup: [],
 modulosOfCounters: [],
 incrementedModCounters: {}
};

/* Grab Data from HTML Form */
function grabFormInputData () {
 innerCalcDat.rdOverallHeightFt = 1*document.querySelector('#rd-overall-height-ft').value;

 innerCalcDat.rdOverallHeightInch = 1*document.querySelector('#rd-overall-height-inch').value;

innerCalcDat.exactEndplateSize = 1*document.querySelector('#exact-endplate-size').value;

 innerCalcDat.closedWeight = 1*document.querySelector('#closed-weight').value;

 innerCalcDat.bSpringsForceBoost = 1*document.querySelector('#additional-force').value;

 innerCalcDat.maxAllowedOvershoot = 1*document.querySelector('#overshoot-tolerance').value;

 innerCalcDat.operatorType = 1*document.querySelector('#operator-type').value;

 const ft = innerCalcDat.rdOverallHeightFt;
 const inch = innerCalcDat.rdOverallHeightInch;

 const changedToInches = ft*12+inch;

 innerCalcDat.rdOverallHeight = changedToInches;
 // console.log('Grabbed input data: ', {innerCalcDat.);
}
/*
function ft_InchesToinches () {
console.log('innerCalcDat.rdOverallHeightFt', innerCalcDat.rdOverallHeightFt, 'innerCalcDat.rdOverallHeightInch', innerCalcDat.rdOverallHeightInch);

 const changedToInches = (innerCalcDat.overallHeightFt*12) + innerCalcDat.overallHeightInch;

console.log('changedToInches: ', changedToInches) ;

return changedToInches;}
*/
function buildCalcDat () {
 innerCalcDat.compoundWeight = innerCalcDat.closedWeight
 +
 innerCalcDat.bSpringsForceBoost;

 /*Note:
bsLength for plate size 14, yoyo diameter 8-1/4 and core tube diameter 2-1/2
*/
 innerCalcDat.bsLength = innerCalcDat.rdOverallHeight+innerCalcDat.exactEndplateSize+8.1875;

 console.log('innerCalcDat: ', innerCalcDat);

}

function defineModulosForModCounters () {
 const modulosOfCounters = [];
 const maxAllowedOvershoot = innerCalcDat.maxAllowedOvershoot;
 const iMax = snapshots.inventoryGroup.length;

 for (let i = 0; i < iMax; i++) {
  const ithBsStrength = snapshots.inventoryGroup[i][0];
  const compoundWeight = innerCalcDat.compoundWeight;

  const ratio = compoundWeight/ithBsStrength;
  const integer = Math.trunc(ratio);
  const fractional = ratio-integer;
  const overshoot2 = ithBsStrength-compoundWeight;
  const overshoot3 = ((integer+1)*ithBsStrength)-compoundWeight;
  if (fractional === 0) {
   // Case I: perfect balance
   modulosOfCounters.push(integer);
  } else if (ithBsStrength > compoundWeight) {
   // Case II overshoot
   /*if(ratio>0 && ratio<1){
    modulosOfCounters.push(1);
   }
   */
   if (overshoot2 <= maxAllowedOvershoot) {
    modulosOfCounters.push(1);
   } else {
    modulosOfCounters.push(0);
   }

  } else {
   // Case III: uncovered
   if (overshoot3 < maxAllowedOvershoot) {
    modulosOfCounters.push(integer+1);
    // console.log('ithBsStrength', ithBsStrength, 'integer+1', integer+1);
   } else {
    modulosOfCounters.push(integer);
    //console.log('ithBsStrength', ithBsStrength, 'integer', integer);
   }
  }
 }
 snapshots.modulosOfCounters = modulosOfCounters.slice();
 //console.log('Snapshot of Counter Modulo Values after loading each Inv Group: ', snapshots.modulosOfCounters);
}

function amountOfCombs () {
 // under development
}

// Build modulo counters and initialize them to zero
function buildModuloCounters () {
 const moduloCounters = {};
 const iMax = snapshots.inventoryGroup.length;
 /*
 for (let i = 0; i < iMax; i++) {
  delete moduloCounters[`ctr${i}`];
 }
 */
 for (let i = 0; i < iMax; i++) {
  moduloCounters[`ctr${i}`] = 0;
 }
 //just created cunters
 const initialModCounters = Object.assign({}, moduloCounters);
 //console.log('moduloCounters genesis state: ', initialModCounters);
 const bogusObjName = Object.assign({}, moduloCounters);
 snapshots.moduloCounters = bogusObjName;
}

function incrementToTheNextCombination () {
 //ctrn is the rightmost counter. Each increment just adds 1 to the rightmost counter
 const n = snapshots.inventoryGroup.length-1;
 // console.log ('n=snapshots.moduloCounters.length-1;', n);
 snapshots.moduloCounters[`ctr${n}`]++;
 if (snapshots.moduloCounters[`ctr${n}`] >
  snapshots.modulosOfCounters[n/*snapshots.modulosOfCounters.length-1*/]) {
  // reset to zero
  snapshots.moduloCounters[`ctr${n}`] = 0;
  innerCalcDat.rippleCarry = 1;
 } else {
  innerCalcDat.rippleCarry = 0;
 }
 //console.log ('rightmost counter count:', snapshots.moduloCounters[`ctr${n}`]);
}

/* For all counters, add the carry of the previous counter to the next counter, until all counters are processed. If after all that, there is a carry, that would be an overflowCarry
*/
function handlerOfIncrementerCarry () {
 //console.log('snapshots.modulosOfCounters.length-1', snapshots.modulosOfCounters.length-1);
 let pointerToCtrOfInterest = snapshots.inventoryGroup.length-1;
 for (var i = 0; i < snapshots.modulosOfCounters.length-1; i++) {
  pointerToCtrOfInterest = pointerToCtrOfInterest -
  1;
  // console.log('handlerOfIncrementerCarry pointerToCtrOfInterest: ', pointerToCtrOfInterest);

  snapshots.moduloCounters[`ctr${pointerToCtrOfInterest}`] = snapshots.moduloCounters[`ctr${pointerToCtrOfInterest}`]+innerCalcDat.rippleCarry;
  if (snapshots.moduloCounters[`ctr${pointerToCtrOfInterest}`] > snapshots.modulosOfCounters[pointerToCtrOfInterest]) {
   snapshots.moduloCounters[`ctr${pointerToCtrOfInterest}`] = 0;
   innerCalcDat.rippleCarry = 1;
  } else {
   innerCalcDat.rippleCarry = 0;
  }
 }
 // Save the overflowCarry
 innerCalcDat.overflowCarry = innerCalcDat.rippleCarry;
 // Snapshot counters states after each increment

 const incrementedModCounters = Object.assign({}, snapshots.moduloCounters);

 snapshots.incrementedModCounters = incrementedModCounters;

 // console.log('Modulo Counters after increment: ', snapshots.incrementedModCounters);
}
// Apply following function to the current bsSet:
function combinationProcessor () {
 const bsDataTrio = [];
 const bsSet = [];
 let bsSetStrength = 0;
 // Use the count to build a bsSet
 const iMax = snapshots.inventoryGroup.length;
 for (var i = 0; i < iMax; i++) {
  /* Compliant combs array structure:
  [
   [[aQ, aD, aM], [aQ, aD, aM], [aQ, aD, aM]],
  ...
   [[aQ, aD, aM], [aQ, aD, aM], [aQ, aD, aM]],
  ]
  */
  /* FOR EACH CTRi PUSH ITS B.S. QTY AND DESCR to form a B.S. data trio
  Structute:
  [bsQty, bsDescr]
  */

  /* STEP #1: BUILD A DATA TRIO */
  const bsQty = snapshots.incrementedModCounters[`ctr${i}`];
  //console.log('snapshots.incrementedModCounters[`ctr${i}`]', snapshots.incrementedModCounters[`ctr${i}`]);
  const bsDescr = snapshots.inventoryGroup[i][1];
  const bsMultiplier = snapshots.inventoryGroup[i][2];
  // PUSH B.S. QTY
  bsDataTrio.push(bsQty);
  //console.log('bsQty', bsQty);
  // PUSH B.S. DESCR
  bsDataTrio.push(bsDescr);
  //console.log('bsDescr', bsDescr);
  // PUSH B.S. MULTIPLIER
  bsDataTrio.push(bsMultiplier);
  //console.log('bsMultiplier', bsMultiplier);
  /* Set structure:
  [
   [[aQ, aD, aM], [aQ, aD, aM], [aQ, aD, aM]],
  ...
   [[aQ, aD, aM], [aQ, aD, aM], [aQ, aD, aM]],
  ]
  */

  /* STEP #2: APPEND EACH DATA TRIO TO BUILD ITS DATA SET*/
  // Keep in set only non zero qty B.S. data trios. Note: The if statement statement also filters empty data trios



  if (!bsDataTrio[0].NaN && bsDataTrio[0] !== 0) {
   /*
  bsSet.push(bsDataTrio);
   */
   const copyOfbsDataTrio = bsDataTrio.slice();
   bsSet.push(copyOfbsDataTrio);

  }

  // empty data trio container
  bsDataTrio.length = 0;

  /* AGREGATE EACH DATA TRIO FORCE TO OBTAIN THE FORCE FOR THE WHOLE SET */
  const strengthOfTheTrio = snapshots.inventoryGroup[i][0]*bsQty;
  /*
  Set structure:
   [[aQ, aD, aM], [aQ, aD, aM], [aQ, aD, aM]],
  F = SumationOf(QTYi * bsSTRENGTHi)
  */
  bsSetStrength = bsSetStrength + strengthOfTheTrio;
 } // End of for-loop. bsSet built

 // keep a record of all the set's forces of all inventory groups
 innerCalcDat.accumulatorOfAllBsSetForces.push(bsSetStrength);

 /* This doesn't serve any purpose:
 // keep a record of all the set's length of all inventory groups
 innerCalcDat.accumulatorOfAllBsSetLengths.push(bsSet.length);
 */
 // Here is were B.S. sets are filtered for overshoot compliance
 // example: d=42-40=2
 const BsSetStrengthDeviation = bsSetStrength-innerCalcDat.compoundWeight;

 // keep a record of all the set's deviations of all inventory groups
 innerCalcDat.collectorOfAllBsSetsDeviations.push(BsSetStrengthDeviation);

 if (BsSetStrengthDeviation >= 0 && BsSetStrengthDeviation <= innerCalcDat.maxAllowedOvershoot) {
  // append its overshoot to every overshoot compliant bs set
  bsSet.push(BsSetStrengthDeviation);
  //console.log('bsSet: ', bsSet);

  innerCalcDat.collectorOfCompliantSetsDeviations.push(BsSetStrengthDeviation);
  // accumulate overshoot appended  compliant B.S. sets
  innerCalcDat.overshootCompliantsSetsOfAllGroups.push(bsSet);
 }
}

const hr0 = '@@@@@@@@@@@@@@@@@@@@@@@@@@';

function amountOfBspringsInATrio(aTrio) {
 const qty = aTrio[0];
 const multiplier = aTrio[2];
 const amountOfBspringsInATrio = qty*multiplier;
 return amountOfBspringsInATrio;
}

function amountOfBspringsInASet (aBsSet) {
 let amountOfBspringsInASet = 0;
 const amountOfTriosInsideSet = aBsSet.length-1;
 // Do for each trio of a bsSet
 for (var i = 0; i < amountOfTriosInsideSet; i++) {
  const ithTrio = aBsSet[i];
  amountOfBspringsInASet = amountOfBspringsInASet + amountOfBspringsInATrio(ithTrio);
 }
 return amountOfBspringsInASet;
}

function appendToABsSetItsYoyoAmount (aBsSet) {
 const bsSetWithYoyoAmountAppended = aBsSet.slice();
 bsSetWithYoyoAmountAppended.push(amountOfBspringsInASet(aBsSet));
 return bsSetWithYoyoAmountAppended;
}

//const aBatchOfBsSets = innerCalcDat.overshootCompliantsSetsOfAllGroups;
function batchAppendYoyoAmount (aBatchOfBsSets) {
 let batchWithYoyoAmountAppended = [];
 const numOfSetsInBatch = aBatchOfBsSets.length;
 for (var i = 0; i < numOfSetsInBatch; i++) {
  batchWithYoyoAmountAppended.push(appendToABsSetItsYoyoAmount(aBatchOfBsSets[i]));
 }
 return batchWithYoyoAmountAppended;
}

function yoyoAppendedBsSetStrippedFromItsYoyoAmount (aYoyoAppendedBsSet) {
 const yoyoAppendedBsSetStrippedFromayoyoAmount = aYoyoAppendedBsSet.slice();
 yoyoAppendedBsSetStrippedFromayoyoAmount.splice(yoyoAppendedBsSetStrippedFromayoyoAmount.length-1, 1);
 return yoyoAppendedBsSetStrippedFromayoyoAmount;
}

function yoyoAmountOf_aYoyoAppendedBsSet (aYoyoAppendedBsSet) {
 const aYoyoAppendedBsSetClone = aYoyoAppendedBsSet.slice();
 const yoyoAmount = aYoyoAppendedBsSetClone.splice(aYoyoAppendedBsSet.length-1, 1)[0];
 return yoyoAmount;
}

function pickMinimumYoyos (overshootCompliantsSetsOfAllGroups = innerCalcDat.overshootCompliantsSetsOfAllGroups) {
 console.log(`${innerCalcDat.overshootCompliantsSetsOfAllGroups.length} Overshoot Compliant Sets Of All Groups:`, innerCalcDat.overshootCompliantsSetsOfAllGroups);
 console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@');

 // If there are no solutions, report error at end of script
 if (innerCalcDat.overshootCompliantsSetsOfAllGroups.length === 0) {
  innerCalcDat.skinOfOptimizeBtnAtEndOfScript = 'txtErrorAndBtnError';
  // §
  console.log (`Skipping the pickMinimumYoyos() function...\nskipping because no combination could satisfy the RD Closed Weight for the specified Allowed excess force  requirements. overshootCompliantsSetsOfAllGroups was empty.`);
  // skipping because no combination could satisfy the RD Closed Weight for the specified Allowed excess force  requirements. overshootCompliantsSetsOfAllGroups was empty.
  return;
 }

 innerCalcDat.setsWithYoyoQty =
 batchAppendYoyoAmount(overshootCompliantsSetsOfAllGroups);

console.log(`${innerCalcDat.setsWithYoyoQty.length} Overshoot Compliant Sets With Appended Yoyo Amount:`, innerCalcDat.setsWithYoyoQty);  

 // This is to shorten the variable Name
 const setsWithYoyoQty = innerCalcDat.setsWithYoyoQty.slice();

 let pointerToReferenceSet = 0;
 let pointerToNextSet = 1;

 const maxValueOfPointerToSet = setsWithYoyoQty.length;

 let potentialMinimalYoyoCompliants = [];
 // At 1st assume set0 is a solution
 potentialMinimalYoyoCompliants.push(setsWithYoyoQty[pointerToReferenceSet]);
 // record progression Of Yoyo Qtyties Scanned
 const leftmostSet = setsWithYoyoQty[0];
 innerCalcDat.progressionOfYoyoQtytiesScanned.push(yoyoAmountOf_aYoyoAppendedBsSet (leftmostSet));
 for (let i = 0; i < setsWithYoyoQty.length; i++) {

  // Execution controled by length of data array independently of for loop cycles:
  if (pointerToNextSet >= maxValueOfPointerToSet) {
   //NOP until for-loop exhausts
   // Here is were the Minimum Yoyos finalists are accumulated
   // Strip yoyo quantities from finalist bsSets
   //console.log('progression Of Yoyo Qtyties Scanned', innerCalcDat.progressionOfYoyoQtytiesScanned);

   const finalistsWithYoyoQty = potentialMinimalYoyoCompliants.slice();
   for (var j = 0; j < finalistsWithYoyoQty.length; j++) {
    const setToStrip = finalistsWithYoyoQty[j];
    const strippedSet = yoyoAppendedBsSetStrippedFromItsYoyoAmount (setToStrip);
    /* NOTE: innerCalcDat.setsWithMinimalYoyoQty IS THE OUTPUT ARRAY THAT WILL BE THE INPUT PARAMETER FOR THE NEXT FILTER STAGE*/
    innerCalcDat.setsWithMinimalYoyoQty.push(strippedSet);
   }

   console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@');
  } else {
   /*
  Set structure:
   [[aQ, aD, aM], [aQ, aD, aM], [aQ, aD, aM]],
  F = SumationOf(QTYi * bsSTRENGTHi)
  */
   // const yoyoQtyOfRefSet = setsWithYoyoQty[pointerToReferenceSet].length;

   /* Determine the yoyoQtyOfRefSet */
   const refSet = setsWithYoyoQty[pointerToReferenceSet];
   const yoyoQtyOfRefSet = yoyoAmountOf_aYoyoAppendedBsSet (refSet);
   // console.log('refSet', refSet, 'yoyoQtyOfRefSet', yoyoQtyOfRefSet);

   /* Determine the yoyoQtyOfNextSet */
   const nextSet = setsWithYoyoQty[pointerToNextSet];

   const yoyoQtyOfNextSet = yoyoAmountOf_aYoyoAppendedBsSet (nextSet);
   // console.log('nextSet', nextSet, 'yoyoQtyOfNextSet', yoyoQtyOfNextSet);

   // record progression Of Yoyo Qtyties Scanned
   innerCalcDat.progressionOfYoyoQtytiesScanned.push(yoyoQtyOfNextSet);
   //console.log('progressionOfYoyoQtytiesScanned', innerCalcDat.progressionOfYoyoQtytiesScanned);


   if (yoyoQtyOfNextSet < yoyoQtyOfRefSet) {
    // flush potentialMinimalYoyoCompliants
    potentialMinimalYoyoCompliants.length = 0;
    // save nextArraySize
    potentialMinimalYoyoCompliants.push(setsWithYoyoQty[pointerToNextSet]);
    // reference pointer always points to a smallest value
    pointerToReferenceSet = pointerToNextSet;
    // if not all items examined, increment pointerToNextSet
    if (pointerToNextSet < maxValueOfPointerToSet) {
     pointerToNextSet++;
    } else {
     // NOP
    }

   } else if (yoyoQtyOfNextSet > yoyoQtyOfRefSet) {
    // no change to solutions if not all items examined, increment reference index
    if (pointerToNextSet < maxValueOfPointerToSet) {
     pointerToNextSet++;
    } else {
     //NOP
    }

   } else {
    // yoyoQtyOfNextSet = yoyoQtyOfRefSet
    // save nextSet
    potentialMinimalYoyoCompliants.push(setsWithYoyoQty[pointerToNextSet]);
    // if not all items examined, increment reference pointesr
    if (pointerToNextSet < maxValueOfPointerToSet) {
     pointerToNextSet++;
    } else {
     //NOP
    }
   }
  }
 }
}

const hr1 = '@@@@@@@@@@@@@@@@@@@@@@@@@@';

function overshootAppendedBsSetStrippedFromItsOvershootAmount (anOvershootAppendedBsSet) {
 const overshootAppendedBsSetStrippedFromAnOvershootAmount = anOvershootAppendedBsSet.slice();
 overshootAppendedBsSetStrippedFromAnOvershootAmount.splice(overshootAppendedBsSetStrippedFromAnOvershootAmount.length-1, 1);
 return overshootAppendedBsSetStrippedFromAnOvershootAmount;
}

const hr2 = '@@@@@@@@@@@@@@@@@@@@@@@@@@';

function overshootValueOfAnOvershootValueAppendedBsSet (anOvershootValueAppendedBsSet) {
 const anOvershootValueAppendedBsSetClone = anOvershootValueAppendedBsSet.slice();
 const overshootValue = anOvershootValueAppendedBsSetClone.splice(anOvershootValueAppendedBsSet.length-1, 1)[0];
 return overshootValue;
}

function pickMinimumOvershoots (minimalYoyoQtySets = innerCalcDat.setsWithMinimalYoyoQty) {
 console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@');

console.log(`${innerCalcDat.setsWithMinimalYoyoQty.length} Sets with minimum qty of yoyos:`, innerCalcDat.setsWithMinimalYoyoQty);  

 // This is to shorten the variable Name
 const minYoyoQtySets = minimalYoyoQtySets.slice();

 let pointerToReferenceSet = 0;
 let pointerToNextSet = 1;

 const maxValueOfPointerToSet = minYoyoQtySets.length;

 let potentialMinimalOvershootCompliants = [];
 // At 1st assume set0 is a solution
 potentialMinimalOvershootCompliants.push(minYoyoQtySets[pointerToReferenceSet]);
 // record progression Of Overshoot Qtyties Scanned
 const leftmostSet = minYoyoQtySets[0];
 // §
 if (innerCalcDat.skinOfOptimizeBtnAtEndOfScript === 'txtErrorAndBtnError') {
  console.log (`Skipping the pickMinimumYoyos() function...\nskipping because no combination could satisfy the RD Closed Weight for the specified Allowed excess force  requirements. overshootCompliantsSetsOfAllGroups was empty.`);
  return;
 }

 innerCalcDat.progressionOfOvershootValuesScanned.push(leftmostSet[leftmostSet.length-1]);
 for (let i = 0; i < minYoyoQtySets.length; i++) {

  // Execution controled by length of data array independently of for loop cycles:
  if (pointerToNextSet >= maxValueOfPointerToSet) {
   //NOP until for-loop exhausts
   // Here is were the Minimum Overshoots finalists are accumulated
   // Strip yoyo quantities from finalist bsSets
   console.log('Progression Of deviations Scanned to Obtain Minimum Overshoot Finalists: ', innerCalcDat.progressionOfOvershootValuesScanned);

   const minOvershootFinalists = potentialMinimalOvershootCompliants.slice();

   for (var j = 0; j < minOvershootFinalists.length; j++) {
    const setToStrip = minOvershootFinalists[j];
    const strippedSet = overshootAppendedBsSetStrippedFromItsOvershootAmount(setToStrip);
    /* NOTE: innerCalcDat.setsWithMinimumOvershoot IS THE OUTPUT ARRAY THAT WILL BE THE INPUT PARAMETER FOR THE NEXT FILTER STAGE*/
    innerCalcDat.setsWithMinimumOvershoot.push(strippedSet);
   }
   console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@');
  } else {
   /*
  Set structure:
   [[aQ, aD, aM], [aQ, aD, aM], [aQ, aD, aM]],
  F = SumationOf(QTYi * bsSTRENGTHi)
  */
   // const overshootValueOfRefSet = minYoyoQtySets[pointerToReferenceSet].length;

   /* Determine the overshootValueOfRefSet */
   const refSet = minYoyoQtySets[pointerToReferenceSet];
   const overshootValueOfRefSet = overshootValueOfAnOvershootValueAppendedBsSet (refSet);
   // console.log('refSet', refSet, 'overshootValueOfRefSet', overshootValueOfRefSet);

   /* Determine the overshootValueOfNextSet */
   const nextSet = minYoyoQtySets[pointerToNextSet];

   const overshootValueOfNextSet = overshootValueOfAnOvershootValueAppendedBsSet (nextSet);
   // console.log('nextSet', nextSet, 'overshootValueOfNextSet', overshootValueOfNextSet);

   // record progression Of Overshoot Qtyties Scanned
   innerCalcDat.progressionOfOvershootValuesScanned.push(overshootValueOfNextSet);
   //console.log('progressionOfOvershootValuesScanned', innerCalcDat.progressionOfOvershootValuesScanned);


   if (overshootValueOfNextSet < overshootValueOfRefSet) {
    // flush potentialMinimalOvershootCompliants
    potentialMinimalOvershootCompliants.length = 0;
    // save nextArraySize
    potentialMinimalOvershootCompliants.push(minYoyoQtySets[pointerToNextSet]);
    // reference pointer always points to a smallest value
    pointerToReferenceSet = pointerToNextSet;
    // if not all items examined, increment pointerToNextSet
    if (pointerToNextSet < maxValueOfPointerToSet) {
     pointerToNextSet++;
    } else {
     // NOP
    }

   } else if (overshootValueOfNextSet > overshootValueOfRefSet) {
    // no change to solutions if not all items examined, increment reference index
    if (pointerToNextSet < maxValueOfPointerToSet) {
     pointerToNextSet++;
    } else {
     //NOP
    }

   } else {
    // overshootValueOfNextSet = overshootValueOfRefSet
    // save nextSet
    potentialMinimalOvershootCompliants.push(minYoyoQtySets[pointerToNextSet]);
    // if not all items examined, increment reference pointesr
    if (pointerToNextSet < maxValueOfPointerToSet) {
     pointerToNextSet++;
    } else {
     //NOP
    }
   }
  }
 }
}

const hr3 = '@@@@@@@@@@@@@@@@@@@@@@@@@@';

function strengthForABsDescr (bsDescr) {
 let bsStrength = 0;
 for (var i = 0; i < bSInv1.length; i++) {
  const bSInv1ElementDescr = bSInv1[i][1];
  if (bsDescr === bSInv1ElementDescr) {
   bsStrength = bSInv1[i][0];
   break;

  }

 }
 return bsStrength;
}

function excessForce () {
 const winnerBsSet = innerCalcDat.setsWithMinimumOvershoot.slice()[0];
 console.log('winnerBsSet', winnerBsSet);
 let bsSetStrength = 0;

 const iMax = winnerBsSet.length;
 for (var i = 0; i < iMax; i++) {

  const bsQty = winnerBsSet[i][0];
  const bsMultiplier = winnerBsSet[i][2];
  const bsDescr = winnerBsSet[i][1];
  const bsStrength = strengthForABsDescr(bsDescr);
  //console.log('bsQty', bsQty, 'bsMultiplier', bsMultiplier, 'bsDescr', bsDescr, 'bsStrength', bsStrength);
  /* AGREGATE EACH DATA TRIO FORCE TO OBTAIN THE FORCE FOR THE WHOLE SET */
  const strengthOfTheTrio = bsQty*bsMultiplier*bsStrength;

  bsSetStrength = bsSetStrength + strengthOfTheTrio;
 } // End of for-loop. winnerBsSet built

 const BsSetStrengthDeviation = bsSetStrength-innerCalcDat.compoundWeight;

 //console.log('bsSetStrength', bsSetStrength, 'innerCalcDat.compoundWeight', innerCalcDat.compoundWeight, 'BsSetStrengthDeviation', BsSetStrengthDeviation);

 return BsSetStrengthDeviation;
 //return bsSetStrength;
}

function inchesToFt_Inches (inches) {
 const ft = Math.trunc(inches/12);
 const fract = (inches/12) - ft;
 const inch = Math.round(100*fract*12)/100;
 const ft_inch = {
  ft: null,
  inch: null
 };
 ft_inch.ft = ft;
 ft_inch.inch = inch;
 //console.log(`${ft_inch.ft} ft ${ft_inch.inch} inches`);
 return ft_inch;
}

function unspoolResults () {
 const errorStack = JSON.parse(window.localStorage.getItem('errorStack'));
 console.log('errorStack retrieved from localStorage: ', errorStack);
 // Output text to bulletin span
 resultsVector[0].innerText = `⚠️ ${errorStack[0]}`;
 resultsVector[0].style.color = "red";
 document.querySelector('#exact-endplate-size').value = '0000';
 document.querySelector('#exact-endplate-size').style.color = 'red';
 document.querySelector('#closed-weight').value = '0000';
 document.querySelector('#closed-weight').style.color = 'red';
 innerCalcDat.skinOfOptimizeBtnAtEndOfScript = 'btnOnlyError';
}

function winnerSetCapacity (winnerBsSet=innerCalcDat.setsWithMinimumOvershoot) {
 const winnerClone = winnerBsSet.slice()[0];
 let winnerSetCapacity = 0;

 const iMax = winnerClone.length;
 for (var i = 0; i < iMax; i++) {

  const bsQty = winnerClone[i][0];
  const bsMultiplier = winnerClone[i][2];
  const bsDescr = winnerClone[i][1];
  const bsStrength = strengthForABsDescr(bsDescr);
  //console.log('bsQty', bsQty, 'bsMultiplier', bsMultiplier, 'bsDescr', bsDescr, 'bsStrength', bsStrength);
  /* AGREGATE EACH DATA TRIO FORCE TO OBTAIN THE FORCE FOR THE WHOLE SET */
  const strengthOfTheTrio = bsQty*bsMultiplier*bsStrength;

  winnerSetCapacity = winnerSetCapacity + strengthOfTheTrio;
 }
return winnerSetCapacity;
}

function postResults () {
 const resultsArea = document.getElementsByClassName('bs-result-spans');
 for (let k = 0; k < resultsArea.length; k++) {
  resultsArea[k].innerText = ' ';
 }
 // Check for errors coming from the number cruncher (from errorStack )
 // No errorStack in localStorage (errorStack=null), means script is being used standalone

 let errorStackExists = (innerCalcDat.errorStack === undefined || innerCalcDat.errorStack === null)? false: true;
 if (errorStackExists && innerCalcDat.errorStack.length !== 0) {
  unspoolResults();
  innerCalcDat.skinOfOptimizeBtnAtEndOfScript = 'btnOnlyError';
  return;
 }

console.log(`${innerCalcDat.setsWithMinimumOvershoot.length} Minimum Overshoot Finalists Sets (The resultsStack):`, innerCalcDat.setsWithMinimumOvershoot);  


 // Now check for errors coming from the resultsStack Inherited from the RD number cruncher)
 if (innerCalcDat.setsWithMinimumOvershoot === undefined || innerCalcDat.setsWithMinimumOvershoot === null) {
  innerCalcDat.skinOfOptimizeBtnAtEndOfScript = 'txtErrorAndBtnError';
  //On any of the above true, skip next procedure
 } else if (innerCalcDat.setsWithMinimumOvershoot.length === 0) {
  innerCalcDat.skinOfOptimizeBtnAtEndOfScript = 'txtErrorAndBtnError';
  //On any of the above true, skip next procedure
 } else {
  //NOP
 }

 const winnerBsSet = innerCalcDat.setsWithMinimumOvershoot.slice()[0];
 let i;
 // §
 if (innerCalcDat.skinOfOptimizeBtnAtEndOfScript === 'txtErrorAndBtnError') {
  console.log (`Skipping the pickMinimumYoyos() function...\nskipping because no combination could satisfy the RD Closed Weight for the specified Allowed excess force  requirements. overshootCompliantsSetsOfAllGroups was empty.`);
  return;
 }
  // compliantFinalistSets=[ [1,0], [1,5], [1,6] ]
 let iMax = winnerBsSet.length;
 for (i = 0; i < iMax; i++) {
  const ithTrioOfTheFinalSolutionSet = winnerBsSet[i];
  //console.log ('indexd Stack Slice', ithTrioOfTheFinalSolutionSet);
  resultsVector[i].innerText = `Band Spring  ${ithTrioOfTheFinalSolutionSet[1]}    Qty ${ithTrioOfTheFinalSolutionSet[2] *ithTrioOfTheFinalSolutionSet[0]}`;
 }
 
 resultsVector[iMax].innerText = `Band springs length ${inchesToFt_Inches(innerCalcDat.bsLength).ft} ft ${Math. ceil(inchesToFt_Inches(innerCalcDat.bsLength).inch)} inches`;
 
 resultsVector[iMax+1].innerText = `For P${innerCalcDat.exactEndplateSize}, large yoyo, and core tube 2.50 diameter`;

 // winnerSetCapacity();
 resultsVector[iMax+3].innerText = `Capacity of the band springs set is ${winnerSetCapacity()} lb`;
 
resultsVector[iMax+4].innerText = `Force differential of the band springs set is ${winnerSetCapacity()-innerCalcDat. closedWeight} lb`;
}

function updateSkinOfOptimizeBtn(signal = innerCalcDat.skinOfOptimizeBtnAtEndOfScript) {
 if (signal === 'PleaseWait') {
  iteratorBtn.value = '⏳ PLEASE WAIT...';
  iteratorBtn.style.color = 'white';
  iteratorBtn.style.fontWeight = 'bold';
  iteratorBtn.style.backgroundColor = 'darkgreen';
  iteratorBtn.style.border = '1px solid white';
 } else if (signal === 'SUCCESS!') {
  iteratorBtn.value = 'SUCCESS!';
  iteratorBtn.style.color = 'darkgreen';
  iteratorBtn.style.backgroundColor = 'white';
  iteratorBtn.style.border = '1px solid transparent';
 } else if (signal === 'txtErrorAndBtnError') {
  // error
  iteratorBtn.value = 'ERROR!';
  iteratorBtn.style.color = 'darkred';
  iteratorBtn.style.backgroundColor = 'yellow';
  iteratorBtn.style.border = '1px solid red';
  iteratorBtn.style.fontWeight = 'bold';
  resultsVector[0].innerText = `☹️ Not possible! ☹️\nTry increasing the Allowed excess force.`;
 } else if (signal === 'btnOnlyError') {
  iteratorBtn.value = 'ERROR!';
  iteratorBtn.style.color = 'white';
  iteratorBtn.style.backgroundColor = 'darkred';
  iteratorBtn.style.border = '1px solid yellow';
  iteratorBtn.style.fontWeight = 'bold';
 } else {
  /* NOP */
 }
}
 // §
function eraseRdNumCruncherInheritedData () {
 window.localStorage.setItem('rdOutlineHeight',JSON.stringify(0));
window.localStorage.setItem('exactEndplateSize',JSON.stringify(0));
window.localStorage.setItem('rdClosedWeight',JSON.stringify(0));
window.localStorage.setItem('errorStack',JSON.stringify([]));
}

function inventoryGroupIterator () {
 // inventoryGroupIterator - cycle through all possible combinations of an injected B.S. inventory
 incrementToTheNextCombination();
 handlerOfIncrementerCarry();
 combinationProcessor();
}

function useAGroupOfBsElementsToFindCompliantCombinations () {

 defineModulosForModCounters();
 // amountOfCombs();
 buildModuloCounters();
 while (!innerCalcDat.overflowCarry) {
  inventoryGroupIterator();
  innerCalcDat.cyclesCounter++;
 }
 //console.log('Overflow carry true: All possible B.S. combinations exhausted!');
 // reset the overflowCarry
 innerCalcDat.overflowCarry = false;
 // reset the cyclesCounter
 innerCalcDat.cyclesCounter = 0;

 bSInv2.pop();
 const bSInv2Snapshot2 = bSInv2.slice();
 //console.log('bSInv2 after pop: ', bSInv2Snapshot2);
}
console.log('@@@@   END OF PROCESSING OF ONE inventoryGroup SET   @@@@');
console.log('@@@@@@@@@@@@@@@@@@@@@@@@');

//console.log(`${innerCalcDat.overshootCompliantsOfOneGroup.length} Overshoot Compliant B. S. Combinations(from ONE injected inventory of B.S.'s ): `, innerCalcDat.overshootCompliantsOfOneGroup);

/*
groupElementsOfBsSetsAsPrecursorsOfBsCombinations() function - inject a mono B.S. value from the mono B.S. values set, to the dual B.S. values set. Then use the augmented set to find potential solutions. Do this for all mono values and  one at a time, to consolidate all potential solutions. */

let indexOfTheBsInv1ItemToBeInjected = bSInv1.length-1;
function groupElementsOfBsSetsAsPrecursorsOfBsCombinations () {
 grabFormInputData();
 buildCalcDat();
 // Save snapshot of injected inventory. Note: since nothing has been injected, it will use the bare bSInv2.
 snapshots.inventoryGroup = bSInv2.slice();
 //console.log('bSInv2 after push: ', snapshots.inventoryGroup);

 if (innerCalcDat.operatorType === 1) {
  // 1 Means design is operated by electrical motor
  useAGroupOfBsElementsToFindCompliantCombinations();

 } else {
  // 0 RD operated manually (no motor)
  // next line to ensure the bare bSInv2 is also included as one of the source inventories along with the injected bSInv2's.
  useAGroupOfBsElementsToFindCompliantCombinations();
  // Now use all injected variants of bSInv2's
  for (let i = 0; i < indexOfTheBsInv1ItemToBeInjected; i++) {
   //('index Of The BsInv1 Item To Be Injected: ', indexOfTheBsInv1ItemToBeInjected, 'Item to push: ', bSInv1[indexOfTheBsInv1ItemToBeInjected]);

   bSInv2.push(bSInv1[indexOfTheBsInv1ItemToBeInjected]);
   // Save snapshot of injected inventory
   snapshots.inventoryGroup = bSInv2.slice();

   //console.log('bSInv2 after push: ', snapshots.inventoryGroup);

   useAGroupOfBsElementsToFindCompliantCombinations();

   indexOfTheBsInv1ItemToBeInjected--;
   // innerCalcDat.overshootCompliantsSetsOfAllGroups.push(innerCalcDat.overshootCompliantsOfOneGroup);
  }
  // reset to preset the index
  indexOfTheBsInv1ItemToBeInjected = bSInv1.length-1;
 }

 console.log(`Collection of Forces for ALL ${innerCalcDat.accumulatorOfAllBsSetForces.length} B.S. Sets: `, innerCalcDat.accumulatorOfAllBsSetForces);

 //console.log(`Collection of the yoyo amounts for All ${innerCalcDat.accumulatorOfAllBsSetLengths.length} B.S. Sets: `, innerCalcDat.accumulatorOfAllBsSetLengths);

 console.log(`Record of all ${innerCalcDat.collectorOfAllBsSetsDeviations.length} deviations for all sets and inventory groups: `, innerCalcDat.collectorOfAllBsSetsDeviations);

 pickMinimumYoyos();

 pickMinimumOvershoots();

 postResults();

 updateSkinOfOptimizeBtn(innerCalcDat.skinOfOptimizeBtnAtEndOfScript);
  // §
 eraseRdNumCruncherInheritedData();
}

const iteratorBtn = document.querySelector('#optimize-btn');
iteratorBtn.addEventListener('mousedown', function() {
 updateSkinOfOptimizeBtn('PleaseWait');
 setTimeout(function() {
  groupElementsOfBsSetsAsPrecursorsOfBsCombinations();
 }, 250);
});

const backToHomeBtn = document.querySelector('#previous-page');
backToHomeBtn.addEventListener('click', ()=>window.location = 'index.html');