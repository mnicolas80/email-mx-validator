// Regular expression source: http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
var dns = require('dns');
var valid = false;
var regEx = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";
var cbCalled = false;
var defaultTmo = 10000;

exports.validEmail = function validEmail(email, cb, tmo) {
  // Validate email syntax
  var timeout = typeof(tmo) === 'undefined' ? defaultTmo : tmo;
  if (!email.match(regEx)) {
    valid = false;
    cb(valid);
    return;
  }  

  var validationTmo = setTimeout(function(){
    valid = false;
    cb(valid);
    cbCalled = true;
  }, timeout);

  // Validate domain MX records
  var domain = email.split('@')[1];  
  dns.resolve(domain, 'MX', function(err, addresses) {  
    clearTimeout(validationTmo)
    if (cbCalled) return; 
    if (err) {
      valid = false;      
    } else if (addresses && addresses.length > 0) {      
      valid = true;
    } else {
      valid = false;
    }
    cb(valid);    
  });
}
