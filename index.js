const returnFirstTwoDrivers = function (drivers) {
    const ftdrivers = drivers.slice(0,2)
    return ftdrivers
}
const returnLastTwoDrivers = function (drivers) {
    const sfl = drivers.length-2
    const ltdrivers = drivers.slice(sfl)
    return ltdrivers
}
const selectingDrivers = [];
selectingDrivers[0] = returnFirstTwoDrivers;
selectingDrivers[1] = returnLastTwoDrivers;

const createFareMultiplier = function (multi) {
    const mp = multi
    return function (fare) {
        return (mp * fare)
    }
}

const fareDoubler = function (fare) {
    const fd = createFareMultiplier (2)
    return fd(fare)
}

const fareTripler = function (fare) {
    const ft = createFareMultiplier (3)
    return ft(fare)

}

const selectDifferentDrivers = function (arrayOfDrivers, func) {
    return func(arrayOfDrivers);
}

