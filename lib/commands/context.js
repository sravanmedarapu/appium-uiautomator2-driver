let helpers = {};

helpers.shouldUseChromeRunningApp = function shouldUseChromeRunningApp () {
  return !!this.noReset;
};

export default helpers;
