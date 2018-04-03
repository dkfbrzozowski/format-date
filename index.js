function formatDate (time) {
  if (arguments.length == 0 || time == 0) {
      return '0s';
  };    
  var Seconds = time % 60;
  var Minutes = ((time - Seconds)/60) % 60;
  var Hours = (((time - Seconds)/60) - Minutes) /60;

  
  if(Seconds && Minutes && Hours) {
      return `${Hours}h ${Minutes}m ${Seconds}s`;
  };

  if (Hours && Seconds){
      return `${Hours}h ${Seconds}s`;
  };

  if (Hours && Minutes) {
      return `${Hours}h ${Minutes}m`;
  };

  if (Hours) {
      return `${Hours}h`;
  };

  if (Minutes && Seconds) {
      return `${Minutes}m ${Seconds}s`;
  };

  if (Minutes) {
      return `${Minutes}m`;
  };

  return `${Seconds}s`;
};

module.exports = formatDate