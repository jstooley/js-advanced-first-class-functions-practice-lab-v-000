const logDriverNames = function (driver) {
  for (i = 0 ; i < driver.length ; i++){
    console.log(driver[i].name)
  }
}
function logDriversByHometown(drivers, location){
  let matches = drivers.filter(driver => Object.is(driver.hometown, location))
  logDriverNames(matches)
}
const driversByRevenue = (driver) => {
  return driver.slice().sort(function (a,b) {
    return a.revenue - b.revenue
  })
}
const driversByName = (drivers) => {
  return drivers.slice().sort(function(a,b){
    return a.name.localeCompare(b.name)
  })
}
function totalRevenue (drivers) {
  return drivers.reduce(function (total, driver) {
    return driver.revenue + total;
  }, 0);
}
function averageRevenue (drivers) {
  return totalRevenue(drivers) / drivers.length;
}
