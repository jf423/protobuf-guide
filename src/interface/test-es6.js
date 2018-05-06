/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const Ecommerce = $root.Ecommerce = (() => {

    /**
     * Namespace Ecommerce.
     * @exports Ecommerce
     * @namespace
     */
    const Ecommerce = {};

    Ecommerce.Product = (function() {

        /**
         * Properties of a Product.
         * @memberof Ecommerce
         * @interface IProduct
         * @property {boolean|null} [available] Product available
         * @property {string|null} [name] Product name
         * @property {string|null} [desc] Product desc
         * @property {number|null} [price] Product price
         * @property {Array.<Ecommerce.IItem>|null} [item] Product item
         */

        /**
         * Constructs a new Product.
         * @memberof Ecommerce
         * @classdesc Represents a Product.
         * @implements IProduct
         * @constructor
         * @param {Ecommerce.IProduct=} [properties] Properties to set
         */
        function Product(properties) {
            this.item = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Product available.
         * @member {boolean} available
         * @memberof Ecommerce.Product
         * @instance
         */
        Product.prototype.available = false;

        /**
         * Product name.
         * @member {string} name
         * @memberof Ecommerce.Product
         * @instance
         */
        Product.prototype.name = "";

        /**
         * Product desc.
         * @member {string} desc
         * @memberof Ecommerce.Product
         * @instance
         */
        Product.prototype.desc = "";

        /**
         * Product price.
         * @member {number} price
         * @memberof Ecommerce.Product
         * @instance
         */
        Product.prototype.price = 0;

        /**
         * Product item.
         * @member {Array.<Ecommerce.IItem>} item
         * @memberof Ecommerce.Product
         * @instance
         */
        Product.prototype.item = $util.emptyArray;

        /**
         * Creates a new Product instance using the specified properties.
         * @function create
         * @memberof Ecommerce.Product
         * @static
         * @param {Ecommerce.IProduct=} [properties] Properties to set
         * @returns {Ecommerce.Product} Product instance
         */
        Product.create = function create(properties) {
            return new Product(properties);
        };

        /**
         * Encodes the specified Product message. Does not implicitly {@link Ecommerce.Product.verify|verify} messages.
         * @function encode
         * @memberof Ecommerce.Product
         * @static
         * @param {Ecommerce.IProduct} message Product message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Product.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.available != null && message.hasOwnProperty("available"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.available);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.desc != null && message.hasOwnProperty("desc"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.desc);
            if (message.price != null && message.hasOwnProperty("price"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.price);
            if (message.item != null && message.item.length)
                for (let i = 0; i < message.item.length; ++i)
                    $root.Ecommerce.Item.encode(message.item[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Product message, length delimited. Does not implicitly {@link Ecommerce.Product.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Ecommerce.Product
         * @static
         * @param {Ecommerce.IProduct} message Product message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Product.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Product message from the specified reader or buffer.
         * @function decode
         * @memberof Ecommerce.Product
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Ecommerce.Product} Product
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Product.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Ecommerce.Product();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.available = reader.bool();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.desc = reader.string();
                    break;
                case 4:
                    message.price = reader.float();
                    break;
                case 5:
                    if (!(message.item && message.item.length))
                        message.item = [];
                    message.item.push($root.Ecommerce.Item.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Product message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Ecommerce.Product
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Ecommerce.Product} Product
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Product.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Product message.
         * @function verify
         * @memberof Ecommerce.Product
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Product.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.available != null && message.hasOwnProperty("available"))
                if (typeof message.available !== "boolean")
                    return "available: boolean expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.desc != null && message.hasOwnProperty("desc"))
                if (!$util.isString(message.desc))
                    return "desc: string expected";
            if (message.price != null && message.hasOwnProperty("price"))
                if (typeof message.price !== "number")
                    return "price: number expected";
            if (message.item != null && message.hasOwnProperty("item")) {
                if (!Array.isArray(message.item))
                    return "item: array expected";
                for (let i = 0; i < message.item.length; ++i) {
                    let error = $root.Ecommerce.Item.verify(message.item[i]);
                    if (error)
                        return "item." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Product message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Ecommerce.Product
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Ecommerce.Product} Product
         */
        Product.fromObject = function fromObject(object) {
            if (object instanceof $root.Ecommerce.Product)
                return object;
            let message = new $root.Ecommerce.Product();
            if (object.available != null)
                message.available = Boolean(object.available);
            if (object.name != null)
                message.name = String(object.name);
            if (object.desc != null)
                message.desc = String(object.desc);
            if (object.price != null)
                message.price = Number(object.price);
            if (object.item) {
                if (!Array.isArray(object.item))
                    throw TypeError(".Ecommerce.Product.item: array expected");
                message.item = [];
                for (let i = 0; i < object.item.length; ++i) {
                    if (typeof object.item[i] !== "object")
                        throw TypeError(".Ecommerce.Product.item: object expected");
                    message.item[i] = $root.Ecommerce.Item.fromObject(object.item[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Product message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Ecommerce.Product
         * @static
         * @param {Ecommerce.Product} message Product
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Product.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.item = [];
            if (options.defaults) {
                object.available = false;
                object.name = "";
                object.desc = "";
                object.price = 0;
            }
            if (message.available != null && message.hasOwnProperty("available"))
                object.available = message.available;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.desc != null && message.hasOwnProperty("desc"))
                object.desc = message.desc;
            if (message.price != null && message.hasOwnProperty("price"))
                object.price = options.json && !isFinite(message.price) ? String(message.price) : message.price;
            if (message.item && message.item.length) {
                object.item = [];
                for (let j = 0; j < message.item.length; ++j)
                    object.item[j] = $root.Ecommerce.Item.toObject(message.item[j], options);
            }
            return object;
        };

        /**
         * Converts this Product to JSON.
         * @function toJSON
         * @memberof Ecommerce.Product
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Product.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Product;
    })();

    Ecommerce.Item = (function() {

        /**
         * Properties of an Item.
         * @memberof Ecommerce
         * @interface IItem
         * @property {string|null} [title] Item title
         * @property {number|null} [number] Item number
         */

        /**
         * Constructs a new Item.
         * @memberof Ecommerce
         * @classdesc Represents an Item.
         * @implements IItem
         * @constructor
         * @param {Ecommerce.IItem=} [properties] Properties to set
         */
        function Item(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Item title.
         * @member {string} title
         * @memberof Ecommerce.Item
         * @instance
         */
        Item.prototype.title = "";

        /**
         * Item number.
         * @member {number} number
         * @memberof Ecommerce.Item
         * @instance
         */
        Item.prototype.number = 0;

        /**
         * Creates a new Item instance using the specified properties.
         * @function create
         * @memberof Ecommerce.Item
         * @static
         * @param {Ecommerce.IItem=} [properties] Properties to set
         * @returns {Ecommerce.Item} Item instance
         */
        Item.create = function create(properties) {
            return new Item(properties);
        };

        /**
         * Encodes the specified Item message. Does not implicitly {@link Ecommerce.Item.verify|verify} messages.
         * @function encode
         * @memberof Ecommerce.Item
         * @static
         * @param {Ecommerce.IItem} message Item message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Item.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.title != null && message.hasOwnProperty("title"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.title);
            if (message.number != null && message.hasOwnProperty("number"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.number);
            return writer;
        };

        /**
         * Encodes the specified Item message, length delimited. Does not implicitly {@link Ecommerce.Item.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Ecommerce.Item
         * @static
         * @param {Ecommerce.IItem} message Item message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Item.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Item message from the specified reader or buffer.
         * @function decode
         * @memberof Ecommerce.Item
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Ecommerce.Item} Item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Item.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Ecommerce.Item();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.number = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Item message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Ecommerce.Item
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Ecommerce.Item} Item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Item.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Item message.
         * @function verify
         * @memberof Ecommerce.Item
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Item.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.number != null && message.hasOwnProperty("number"))
                if (!$util.isInteger(message.number))
                    return "number: integer expected";
            return null;
        };

        /**
         * Creates an Item message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Ecommerce.Item
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Ecommerce.Item} Item
         */
        Item.fromObject = function fromObject(object) {
            if (object instanceof $root.Ecommerce.Item)
                return object;
            let message = new $root.Ecommerce.Item();
            if (object.title != null)
                message.title = String(object.title);
            if (object.number != null)
                message.number = object.number | 0;
            return message;
        };

        /**
         * Creates a plain object from an Item message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Ecommerce.Item
         * @static
         * @param {Ecommerce.Item} message Item
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Item.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.title = "";
                object.number = 0;
            }
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.number != null && message.hasOwnProperty("number"))
                object.number = message.number;
            return object;
        };

        /**
         * Converts this Item to JSON.
         * @function toJSON
         * @memberof Ecommerce.Item
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Item.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Item;
    })();

    return Ecommerce;
})();

export { $root as default };
