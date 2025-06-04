const returnFirstTwoDrivers = (x => x.slice(0, 2));
const returnLastTwoDrivers = (x => x.slice(x.length -2));
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(multiplier) {
    return x => x * multiplier;
}
const fareDoubler = x => createFareMultiplier(2)(x);
const fareTripler = x => createFareMultiplier(3)(x);
function selectDifferentDrivers(arrayOfDrivers, f) {
    return f(arrayOfDrivers);
}
