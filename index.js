// Regular expression source: http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
var dns = require('dns');
var valid = false;
var regEx = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";

exports.validEmail = function validEmail(email, cb) {
  // Validate email syntax
  if (!email.match(regEx)) {
    valid = false;
    cb(valid);
    return;
  }  

  // Validate domain MX records
  var domain = email.split('@')[1];  
  dns.resolve(domain, 'MX', function(err, addresses) {    
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
