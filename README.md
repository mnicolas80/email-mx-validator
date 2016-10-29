# Email-mx-validator
A email validation package for **NodeJS**

# Installation
```javascript
npm install -g email-mx-validator
```

# Usage
```javascript
var ev = require('email-mx-validator');

ev.validEmail('mnicolas80@gmail.com', function(valid) {
  // returns true, because the syntax of the given email address is correct and the email address has at least one DNS MX record.
});
```
