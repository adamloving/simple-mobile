var simple = {};
simple.lib = {};

simple.lib.MobileInstaller = function() {

}

simple.lib.MobileInstaller.prototype.isAndroid = function() {
  return (navigator.userAgent.indexOf('Android') > -1);
}

simple.lib.MobileInstaller.prototype.isIos = function() {
  return (navigator.userAgent.indexOf('iPhone') > -1 ||
    navigator.userAgent.indexOf('iPod') > -1 ||
    navigator.userAgent.indexOf('iPad') > -1);
}

simple.lib.MobileInstaller.prototype.isMobile = function() {
  return (this.isIos() || this.isAndroid());
}

simple.MobileInstaller = new simple.lib.MobileInstaller();

if (simple.MobileInstaller.isMobile()) {
  // window.location.href = 'index_mobile.html';
}