# bitcore Message Verification and Signing for btxcore




btxcore-message adds support for verifying and signing bitcore messages in [Node.js](http://nodejs.org/) and web browsers.

See [the main btxcore repo](https://github.com/BTXexplorer/btxcore) for more information.

## Getting Started

```sh
npm install btxcore-message
```

```sh
bower install btxcore-message
```

To sign a message:

```javascript
var btxcore = require('btxcore-lib');
var Message = require('btxcore-message');

var privateKey = btxcore.PrivateKey.fromWIF('5K2DxqJ9kLFL3hF3KEWDftAig3TyAXenDxpr27PaLBieuSFo5PQ');
var signature = Message('hello, world').sign(privateKey);
```

To verify a message:

```javascript
var address = 'RGRsG7UQc3AmvdrhPDngpPjvTNhJQFeHYj';
var signature = 'G5cFMHRysjcxkBJ7mol8l3cjPbFQFQ68fNqTGehTO9/cLNUaflt3gQT//yAUp5fqWF0snDlZYkXJoooazBicRTg=';
var verified = Message('hello, world').verify(address, signature);
```

## Contributing

See [CONTRIBUTING.md](https://github.com/BTXexplorer/btxcore/blob/master/CONTRIBUTING.md) on the main btxcore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/BTXexplorer/btxcore/blob/master/LICENSE).
