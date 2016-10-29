# Email-validator
A email validation package for **NodeJS**

# Installation
```javascript
npm install -g email-validator
```

# Usage
```javascript
var ev = require('email-validator');

ev.validEmail('mnicolas80@gmail.com', callback(valid) {
  // returns true, because the syntax of the given email address is correct and the email address has at least one DNS MX record.
});
```
