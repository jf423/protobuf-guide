/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/light"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/light"));

})(this, function($protobuf) {
    "use strict";

    var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
    .addJSON({
      Ecommerce: {
        nested: {
          Product: {
            fields: {
              available: {
                rule: "required",
                type: "bool",
                id: 1
              },
              name: {
                type: "string",
                id: 2
              },
              desc: {
                type: "string",
                id: 3
              },
              price: {
                type: "float",
                id: 4
              }
            }
          }
        }
      }
    });

    return $root;
});
