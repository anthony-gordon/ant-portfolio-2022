var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};

// node_modules/shopify-buy/index.js
var require_shopify_buy = __commonJS({
  "node_modules/shopify-buy/index.js"(exports2, module2) {
    "use strict";
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    var classCallCheck$1 = function(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    };
    var createClass$1 = function() {
      function defineProperties(target, props) {
        for (var i2 = 0; i2 < props.length; i2++) {
          var descriptor = props[i2];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var inherits$1 = function(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    };
    var possibleConstructorReturn$1 = function(self2, call) {
      if (!self2) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self2;
    };
    function join() {
      for (var _len = arguments.length, fields = Array(_len), _key = 0; _key < _len; _key++) {
        fields[_key] = arguments[_key];
      }
      return fields.join(" ");
    }
    function isObject(value) {
      return Boolean(value) && Object.prototype.toString.call(value.valueOf()) === "[object Object]";
    }
    function deepFreezeCopyExcept(predicate, structure) {
      if (predicate(structure)) {
        return structure;
      } else if (isObject(structure)) {
        return Object.freeze(Object.keys(structure).reduce(function(copy, key) {
          copy[key] = deepFreezeCopyExcept(predicate, structure[key]);
          return copy;
        }, {}));
      } else if (Array.isArray(structure)) {
        return Object.freeze(structure.map(function(item) {
          return deepFreezeCopyExcept(predicate, item);
        }));
      } else {
        return structure;
      }
    }
    function schemaForType(typeBundle, typeName) {
      var typeSchema = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      var type = typeBundle.types[typeName];
      if (type) {
        return type;
      } else if (typeSchema && typeSchema.kind === "INTERFACE") {
        return typeSchema;
      }
      throw new Error("No type of " + typeName + " found in schema");
    }
    var classCallCheck = function classCallCheck2(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    };
    var createClass = function() {
      function defineProperties(target, props) {
        for (var i2 = 0; i2 < props.length; i2++) {
          var descriptor = props[i2];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _extends = Object.assign || function(target) {
      for (var i2 = 1; i2 < arguments.length; i2++) {
        var source = arguments[i2];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    var inherits = function inherits2(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    };
    var possibleConstructorReturn = function possibleConstructorReturn2(self2, call) {
      if (!self2) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self2;
    };
    var slicedToArray = function() {
      function sliceIterator(arr, i2) {
        var _arr = [];
        var _n = true;
        var _d2 = false;
        var _e = void 0;
        try {
          for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i2 && _arr.length === i2)
              break;
          }
        } catch (err) {
          _d2 = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"])
              _i["return"]();
          } finally {
            if (_d2)
              throw _e;
          }
        }
        return _arr;
      }
      return function(arr, i2) {
        if (Array.isArray(arr)) {
          return arr;
        } else if (Symbol.iterator in Object(arr)) {
          return sliceIterator(arr, i2);
        } else {
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
      };
    }();
    var toConsumableArray = function toConsumableArray2(arr) {
      if (Array.isArray(arr)) {
        for (var i2 = 0, arr2 = Array(arr.length); i2 < arr.length; i2++) {
          arr2[i2] = arr[i2];
        }
        return arr2;
      } else {
        return Array.from(arr);
      }
    };
    var VariableDefinition = function() {
      function VariableDefinition2(name, type, defaultValue) {
        classCallCheck(this, VariableDefinition2);
        this.name = name;
        this.type = type;
        this.defaultValue = defaultValue;
        Object.freeze(this);
      }
      createClass(VariableDefinition2, [{
        key: "toInputValueString",
        value: function toInputValueString() {
          return "$" + this.name;
        }
      }, {
        key: "toString",
        value: function toString() {
          var defaultValueString = this.defaultValue ? " = " + formatInputValue(this.defaultValue) : "";
          return "$" + this.name + ":" + this.type + defaultValueString;
        }
      }]);
      return VariableDefinition2;
    }();
    function isVariable(value) {
      return VariableDefinition.prototype.isPrototypeOf(value);
    }
    function variable(name, type, defaultValue) {
      return new VariableDefinition(name, type, defaultValue);
    }
    var Enum = function() {
      function Enum2(key) {
        classCallCheck(this, Enum2);
        this.key = key;
      }
      createClass(Enum2, [{
        key: "toString",
        value: function toString() {
          return this.key;
        }
      }, {
        key: "valueOf",
        value: function valueOf() {
          return this.key.valueOf();
        }
      }]);
      return Enum2;
    }();
    var enumFunction = function enumFunction2(key) {
      return new Enum(key);
    };
    var Scalar = function() {
      function Scalar2(value) {
        classCallCheck(this, Scalar2);
        this.value = value;
      }
      createClass(Scalar2, [{
        key: "toString",
        value: function toString() {
          return this.value.toString();
        }
      }, {
        key: "valueOf",
        value: function valueOf() {
          return this.value.valueOf();
        }
      }, {
        key: "unwrapped",
        get: function get$$1() {
          return this.value;
        }
      }]);
      return Scalar2;
    }();
    function formatInputValue(value) {
      if (VariableDefinition.prototype.isPrototypeOf(value)) {
        return value.toInputValueString();
      } else if (Enum.prototype.isPrototypeOf(value)) {
        return String(value);
      } else if (Scalar.prototype.isPrototypeOf(value)) {
        return JSON.stringify(value.valueOf());
      } else if (Array.isArray(value)) {
        return "[" + join.apply(void 0, toConsumableArray(value.map(formatInputValue))) + "]";
      } else if (isObject(value)) {
        return formatObject(value, "{", "}");
      } else {
        return JSON.stringify(value);
      }
    }
    function formatObject(value) {
      var openChar = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      var closeChar = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
      var argPairs = Object.keys(value).map(function(key) {
        return key + ": " + formatInputValue(value[key]);
      });
      return "" + openChar + join.apply(void 0, toConsumableArray(argPairs)) + closeChar;
    }
    function formatArgs(args) {
      if (!Object.keys(args).length) {
        return "";
      }
      return " (" + formatObject(args) + ")";
    }
    function formatDirectives(directives) {
      if (!Object.keys(directives).length) {
        return "";
      }
      var directiveStrings = Object.keys(directives).map(function(key) {
        var directiveArgs = directives[key];
        var arg = directiveArgs && Object.keys(directiveArgs).length ? "(" + formatObject(directiveArgs) + ")" : "";
        return "@" + key + arg;
      });
      return " " + join.apply(void 0, toConsumableArray(directiveStrings));
    }
    var noop2 = function noop3() {
    };
    var Profiler = {
      trackTypeDependency: noop2,
      trackFieldDependency: noop2
    };
    var trackTypeDependency = Profiler.trackTypeDependency;
    var trackFieldDependency = Profiler.trackFieldDependency;
    function parseFieldCreationArgs(creationArgs) {
      var callback = noop2;
      var options = {};
      var selectionSet = null;
      if (creationArgs.length === 2) {
        if (typeof creationArgs[1] === "function") {
          var _creationArgs = slicedToArray(creationArgs, 2);
          options = _creationArgs[0];
          callback = _creationArgs[1];
        } else {
          var _creationArgs2 = slicedToArray(creationArgs, 2);
          options = _creationArgs2[0];
          selectionSet = _creationArgs2[1];
        }
      } else if (creationArgs.length === 1) {
        if (SelectionSet.prototype.isPrototypeOf(creationArgs[0])) {
          selectionSet = creationArgs[0];
        } else if (typeof creationArgs[0] === "function") {
          callback = creationArgs[0];
        } else {
          options = creationArgs[0];
        }
      }
      return { options, selectionSet, callback };
    }
    var emptyArgs = Object.freeze({});
    var emptyDirectives = Object.freeze({});
    var Field = function() {
      function Field2(name, options, selectionSet) {
        classCallCheck(this, Field2);
        this.name = name;
        this.alias = options.alias || null;
        this.responseKey = this.alias || this.name;
        this.args = options.args ? deepFreezeCopyExcept(isVariable, options.args) : emptyArgs;
        this.directives = options.directives ? deepFreezeCopyExcept(isVariable, options.directives) : emptyDirectives;
        this.selectionSet = selectionSet;
        Object.freeze(this);
      }
      createClass(Field2, [{
        key: "toString",
        value: function toString() {
          var aliasPrefix = this.alias ? this.alias + ": " : "";
          return "" + aliasPrefix + this.name + formatArgs(this.args) + formatDirectives(this.directives) + this.selectionSet;
        }
      }]);
      return Field2;
    }();
    var Spread = function Spread2() {
      classCallCheck(this, Spread2);
    };
    var InlineFragment = function(_Spread) {
      inherits(InlineFragment2, _Spread);
      function InlineFragment2(typeName, selectionSet) {
        classCallCheck(this, InlineFragment2);
        var _this = possibleConstructorReturn(this, (InlineFragment2.__proto__ || Object.getPrototypeOf(InlineFragment2)).call(this));
        _this.typeName = typeName;
        _this.selectionSet = selectionSet;
        Object.freeze(_this);
        return _this;
      }
      createClass(InlineFragment2, [{
        key: "toString",
        value: function toString() {
          return "... on " + this.typeName + this.selectionSet;
        }
      }]);
      return InlineFragment2;
    }(Spread);
    var FragmentSpread = function(_Spread2) {
      inherits(FragmentSpread2, _Spread2);
      function FragmentSpread2(fragmentDefinition) {
        classCallCheck(this, FragmentSpread2);
        var _this2 = possibleConstructorReturn(this, (FragmentSpread2.__proto__ || Object.getPrototypeOf(FragmentSpread2)).call(this));
        _this2.name = fragmentDefinition.name;
        _this2.selectionSet = fragmentDefinition.selectionSet;
        Object.freeze(_this2);
        return _this2;
      }
      createClass(FragmentSpread2, [{
        key: "toString",
        value: function toString() {
          return "..." + this.name;
        }
      }, {
        key: "toDefinition",
        value: function toDefinition() {
          return new FragmentDefinition(this.name, this.selectionSet.typeSchema.name, this.selectionSet);
        }
      }]);
      return FragmentSpread2;
    }(Spread);
    var FragmentDefinition = function() {
      function FragmentDefinition2(name, typeName, selectionSet) {
        classCallCheck(this, FragmentDefinition2);
        this.name = name;
        this.typeName = typeName;
        this.selectionSet = selectionSet;
        this.spread = new FragmentSpread(this);
        Object.freeze(this);
      }
      createClass(FragmentDefinition2, [{
        key: "toString",
        value: function toString() {
          return "fragment " + this.name + " on " + this.typeName + " " + this.selectionSet;
        }
      }]);
      return FragmentDefinition2;
    }();
    function selectionsHaveIdField(selections) {
      return selections.some(function(fieldOrFragment) {
        if (Field.prototype.isPrototypeOf(fieldOrFragment)) {
          return fieldOrFragment.name === "id";
        } else if (Spread.prototype.isPrototypeOf(fieldOrFragment) && fieldOrFragment.selectionSet.typeSchema.implementsNode) {
          return selectionsHaveIdField(fieldOrFragment.selectionSet.selections);
        }
        return false;
      });
    }
    function selectionsHaveTypenameField(selections) {
      return selections.some(function(fieldOrFragment) {
        if (Field.prototype.isPrototypeOf(fieldOrFragment)) {
          return fieldOrFragment.name === "__typename";
        } else if (Spread.prototype.isPrototypeOf(fieldOrFragment) && fieldOrFragment.selectionSet.typeSchema.implementsNode) {
          return selectionsHaveTypenameField(fieldOrFragment.selectionSet.selections);
        }
        return false;
      });
    }
    function indexSelectionsByResponseKey(selections) {
      function assignOrPush(obj, key, value) {
        if (Array.isArray(obj[key])) {
          obj[key].push(value);
        } else {
          obj[key] = [value];
        }
      }
      var unfrozenObject = selections.reduce(function(acc, selection) {
        if (selection.responseKey) {
          assignOrPush(acc, selection.responseKey, selection);
        } else {
          var responseKeys = Object.keys(selection.selectionSet.selectionsByResponseKey);
          responseKeys.forEach(function(responseKey) {
            assignOrPush(acc, responseKey, selection);
          });
        }
        return acc;
      }, {});
      Object.keys(unfrozenObject).forEach(function(key) {
        Object.freeze(unfrozenObject[key]);
      });
      return Object.freeze(unfrozenObject);
    }
    var SelectionSet = function() {
      function SelectionSet2(typeBundle, type, builderFunction) {
        classCallCheck(this, SelectionSet2);
        if (typeof type === "string") {
          this.typeSchema = schemaForType(typeBundle, type);
        } else {
          this.typeSchema = type;
        }
        trackTypeDependency(this.typeSchema.name);
        this.typeBundle = typeBundle;
        this.selections = [];
        if (builderFunction) {
          builderFunction(new SelectionSetBuilder(this.typeBundle, this.typeSchema, this.selections));
        }
        if (this.typeSchema.implementsNode || this.typeSchema.name === "Node") {
          if (!selectionsHaveIdField(this.selections)) {
            this.selections.unshift(new Field("id", {}, new SelectionSet2(typeBundle, "ID")));
          }
        }
        if (this.typeSchema.kind === "INTERFACE") {
          if (!selectionsHaveTypenameField(this.selections)) {
            this.selections.unshift(new Field("__typename", {}, new SelectionSet2(typeBundle, "String")));
          }
        }
        this.selectionsByResponseKey = indexSelectionsByResponseKey(this.selections);
        Object.freeze(this.selections);
        Object.freeze(this);
      }
      createClass(SelectionSet2, [{
        key: "toString",
        value: function toString() {
          if (this.typeSchema.kind === "SCALAR" || this.typeSchema.kind === "ENUM") {
            return "";
          } else {
            return " { " + join(this.selections) + " }";
          }
        }
      }]);
      return SelectionSet2;
    }();
    var SelectionSetBuilder = function() {
      function SelectionSetBuilder2(typeBundle, typeSchema, selections) {
        classCallCheck(this, SelectionSetBuilder2);
        this.typeBundle = typeBundle;
        this.typeSchema = typeSchema;
        this.selections = selections;
      }
      createClass(SelectionSetBuilder2, [{
        key: "hasSelectionWithResponseKey",
        value: function hasSelectionWithResponseKey(responseKey) {
          return this.selections.some(function(field) {
            return field.responseKey === responseKey;
          });
        }
      }, {
        key: "add",
        value: function add(selectionOrFieldName) {
          var selection = void 0;
          if (Object.prototype.toString.call(selectionOrFieldName) === "[object String]") {
            trackFieldDependency(this.typeSchema.name, selectionOrFieldName);
            for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              rest[_key - 1] = arguments[_key];
            }
            selection = this.field.apply(this, [selectionOrFieldName].concat(rest));
          } else {
            if (Field.prototype.isPrototypeOf(selectionOrFieldName)) {
              trackFieldDependency(this.typeSchema.name, selectionOrFieldName.name);
            }
            selection = selectionOrFieldName;
          }
          if (selection.responseKey && this.hasSelectionWithResponseKey(selection.responseKey)) {
            throw new Error("The field name or alias '" + selection.responseKey + "' has already been added.");
          }
          this.selections.push(selection);
        }
      }, {
        key: "field",
        value: function field(name) {
          for (var _len2 = arguments.length, creationArgs = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            creationArgs[_key2 - 1] = arguments[_key2];
          }
          var parsedArgs = parseFieldCreationArgs(creationArgs);
          var options = parsedArgs.options, callback = parsedArgs.callback;
          var selectionSet = parsedArgs.selectionSet;
          if (!selectionSet) {
            if (!this.typeSchema.fieldBaseTypes[name]) {
              throw new Error('No field of name "' + name + '" found on type "' + this.typeSchema.name + '" in schema');
            }
            var fieldBaseType = schemaForType(this.typeBundle, this.typeSchema.fieldBaseTypes[name]);
            selectionSet = new SelectionSet(this.typeBundle, fieldBaseType, callback);
          }
          return new Field(name, options, selectionSet);
        }
      }, {
        key: "inlineFragmentOn",
        value: function inlineFragmentOn(typeName) {
          var builderFunctionOrSelectionSet = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop2;
          var selectionSet = void 0;
          if (SelectionSet.prototype.isPrototypeOf(builderFunctionOrSelectionSet)) {
            selectionSet = builderFunctionOrSelectionSet;
          } else {
            selectionSet = new SelectionSet(this.typeBundle, schemaForType(this.typeBundle, typeName), builderFunctionOrSelectionSet);
          }
          return new InlineFragment(typeName, selectionSet);
        }
      }, {
        key: "addField",
        value: function addField(name) {
          for (var _len3 = arguments.length, creationArgs = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
            creationArgs[_key3 - 1] = arguments[_key3];
          }
          this.add.apply(this, [name].concat(creationArgs));
        }
      }, {
        key: "addConnection",
        value: function addConnection(name) {
          for (var _len4 = arguments.length, creationArgs = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
            creationArgs[_key4 - 1] = arguments[_key4];
          }
          var _parseFieldCreationAr = parseFieldCreationArgs(creationArgs), options = _parseFieldCreationAr.options, callback = _parseFieldCreationAr.callback, selectionSet = _parseFieldCreationAr.selectionSet;
          this.add(name, options, function(connection) {
            connection.add("pageInfo", {}, function(pageInfo) {
              pageInfo.add("hasNextPage");
              pageInfo.add("hasPreviousPage");
            });
            connection.add("edges", {}, function(edges) {
              edges.add("cursor");
              edges.addField("node", {}, selectionSet || callback);
            });
          });
        }
      }, {
        key: "addInlineFragmentOn",
        value: function addInlineFragmentOn(typeName) {
          var fieldTypeCb = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop2;
          this.add(this.inlineFragmentOn(typeName, fieldTypeCb));
        }
      }, {
        key: "addFragment",
        value: function addFragment(fragmentSpread) {
          this.add(fragmentSpread);
        }
      }]);
      return SelectionSetBuilder2;
    }();
    function parseArgs(args) {
      var name = void 0;
      var variables = void 0;
      var selectionSetCallback = void 0;
      if (args.length === 3) {
        var _args = slicedToArray(args, 3);
        name = _args[0];
        variables = _args[1];
        selectionSetCallback = _args[2];
      } else if (args.length === 2) {
        if (Object.prototype.toString.call(args[0]) === "[object String]") {
          name = args[0];
          variables = null;
        } else if (Array.isArray(args[0])) {
          variables = args[0];
          name = null;
        }
        selectionSetCallback = args[1];
      } else {
        selectionSetCallback = args[0];
        name = null;
      }
      return { name, variables, selectionSetCallback };
    }
    var VariableDefinitions = function() {
      function VariableDefinitions2(variableDefinitions) {
        classCallCheck(this, VariableDefinitions2);
        this.variableDefinitions = variableDefinitions ? [].concat(toConsumableArray(variableDefinitions)) : [];
        Object.freeze(this.variableDefinitions);
        Object.freeze(this);
      }
      createClass(VariableDefinitions2, [{
        key: "toString",
        value: function toString() {
          if (this.variableDefinitions.length === 0) {
            return "";
          }
          return " (" + join(this.variableDefinitions) + ") ";
        }
      }]);
      return VariableDefinitions2;
    }();
    var Operation = function() {
      function Operation2(typeBundle, operationType) {
        classCallCheck(this, Operation2);
        for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          args[_key - 2] = arguments[_key];
        }
        var _parseArgs = parseArgs(args), name = _parseArgs.name, variables = _parseArgs.variables, selectionSetCallback = _parseArgs.selectionSetCallback;
        this.typeBundle = typeBundle;
        this.name = name;
        this.variableDefinitions = new VariableDefinitions(variables);
        this.operationType = operationType;
        if (operationType === "query") {
          this.selectionSet = new SelectionSet(typeBundle, typeBundle.queryType, selectionSetCallback);
          this.typeSchema = schemaForType(typeBundle, typeBundle.queryType);
        } else {
          this.selectionSet = new SelectionSet(typeBundle, typeBundle.mutationType, selectionSetCallback);
          this.typeSchema = schemaForType(typeBundle, typeBundle.mutationType);
        }
        Object.freeze(this);
      }
      createClass(Operation2, [{
        key: "toString",
        value: function toString() {
          var nameString = this.name ? " " + this.name : "";
          return "" + this.operationType + nameString + this.variableDefinitions + this.selectionSet;
        }
      }, {
        key: "isAnonymous",
        get: function get$$1() {
          return !this.name;
        }
      }]);
      return Operation2;
    }();
    var Query = function(_Operation) {
      inherits(Query2, _Operation);
      function Query2(typeBundle) {
        var _ref;
        classCallCheck(this, Query2);
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        return possibleConstructorReturn(this, (_ref = Query2.__proto__ || Object.getPrototypeOf(Query2)).call.apply(_ref, [this, typeBundle, "query"].concat(args)));
      }
      return Query2;
    }(Operation);
    var Mutation = function(_Operation) {
      inherits(Mutation2, _Operation);
      function Mutation2(typeBundle) {
        var _ref;
        classCallCheck(this, Mutation2);
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        return possibleConstructorReturn(this, (_ref = Mutation2.__proto__ || Object.getPrototypeOf(Mutation2)).call.apply(_ref, [this, typeBundle, "mutation"].concat(args)));
      }
      return Mutation2;
    }(Operation);
    function isAnonymous(operation) {
      return operation.isAnonymous;
    }
    function hasAnonymousOperations(operations) {
      return operations.some(isAnonymous);
    }
    function hasDuplicateOperationNames(operations) {
      var names = operations.map(function(operation) {
        return operation.name;
      });
      return names.reduce(function(hasDuplicates, name, index) {
        return hasDuplicates || names.indexOf(name) !== index;
      }, false);
    }
    function extractOperation(typeBundle, operationType) {
      for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }
      if (Operation.prototype.isPrototypeOf(args[0])) {
        return args[0];
      }
      if (operationType === "query") {
        return new (Function.prototype.bind.apply(Query, [null].concat([typeBundle], args)))();
      } else {
        return new (Function.prototype.bind.apply(Mutation, [null].concat([typeBundle], args)))();
      }
    }
    function isInvalidOperationCombination(operations) {
      if (operations.length === 1) {
        return false;
      }
      return hasAnonymousOperations(operations) || hasDuplicateOperationNames(operations);
    }
    function fragmentNameIsNotUnique(existingDefinitions, name) {
      return existingDefinitions.some(function(definition) {
        return definition.name === name;
      });
    }
    var Document = function() {
      function Document2(typeBundle) {
        classCallCheck(this, Document2);
        this.typeBundle = typeBundle;
        this.definitions = [];
      }
      createClass(Document2, [{
        key: "toString",
        value: function toString() {
          return join(this.definitions);
        }
      }, {
        key: "addOperation",
        value: function addOperation(operationType) {
          for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }
          var operation = extractOperation.apply(void 0, [this.typeBundle, operationType].concat(args));
          if (isInvalidOperationCombination(this.operations.concat(operation))) {
            throw new Error("All operations must be uniquely named on a multi-operation document");
          }
          this.definitions.push(operation);
        }
      }, {
        key: "addQuery",
        value: function addQuery() {
          for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }
          this.addOperation.apply(this, ["query"].concat(args));
        }
      }, {
        key: "addMutation",
        value: function addMutation() {
          for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }
          this.addOperation.apply(this, ["mutation"].concat(args));
        }
      }, {
        key: "defineFragment",
        value: function defineFragment(name, onType, builderFunction) {
          if (fragmentNameIsNotUnique(this.fragmentDefinitions, name)) {
            throw new Error("All fragments must be uniquely named on a multi-fragment document");
          }
          var selectionSet = new SelectionSet(this.typeBundle, onType, builderFunction);
          var fragment = new FragmentDefinition(name, onType, selectionSet);
          this.definitions.push(fragment);
          return fragment.spread;
        }
      }, {
        key: "operations",
        get: function get$$1() {
          return this.definitions.filter(function(definition) {
            return Operation.prototype.isPrototypeOf(definition);
          });
        }
      }, {
        key: "fragmentDefinitions",
        get: function get$$1() {
          return this.definitions.filter(function(definition) {
            return FragmentDefinition.prototype.isPrototypeOf(definition);
          });
        }
      }]);
      return Document2;
    }();
    var GraphModel = function GraphModel2(attrs) {
      var _this = this;
      classCallCheck(this, GraphModel2);
      Object.defineProperty(this, "attrs", { value: attrs, enumerable: false });
      Object.keys(this.attrs).filter(function(key) {
        return !(key in _this);
      }).forEach(function(key) {
        var descriptor = void 0;
        if (attrs[key] === null) {
          descriptor = {
            enumerable: true,
            get: function get$$1() {
              return null;
            }
          };
        } else {
          descriptor = {
            enumerable: true,
            get: function get$$1() {
              return this.attrs[key].valueOf();
            }
          };
        }
        Object.defineProperty(_this, key, descriptor);
      });
    };
    var ClassRegistry = function() {
      function ClassRegistry2() {
        classCallCheck(this, ClassRegistry2);
        this.classStore = {};
      }
      createClass(ClassRegistry2, [{
        key: "registerClassForType",
        value: function registerClassForType(constructor, type) {
          this.classStore[type] = constructor;
        }
      }, {
        key: "unregisterClassForType",
        value: function unregisterClassForType(type) {
          delete this.classStore[type];
        }
      }, {
        key: "classForType",
        value: function classForType(type) {
          return this.classStore[type] || GraphModel;
        }
      }]);
      return ClassRegistry2;
    }();
    function isValue(arg) {
      return Object.prototype.toString.call(arg) !== "[object Null]" && Object.prototype.toString.call(arg) !== "[object Undefined]";
    }
    function isNodeContext(context) {
      return context.selection.selectionSet.typeSchema.implementsNode;
    }
    function isConnection(context) {
      return context.selection.selectionSet.typeSchema.name.endsWith("Connection");
    }
    function nearestNode(context) {
      if (context == null) {
        return null;
      } else if (isNodeContext(context)) {
        return context;
      } else {
        return nearestNode(context.parent);
      }
    }
    function contextsFromRoot(context) {
      if (context.parent) {
        return contextsFromRoot(context.parent).concat(context);
      } else {
        return [context];
      }
    }
    function contextsFromNearestNode(context) {
      if (context.selection.selectionSet.typeSchema.implementsNode) {
        return [context];
      } else {
        return contextsFromNearestNode(context.parent).concat(context);
      }
    }
    function initializeDocumentAndVars(currentContext, contextChain) {
      var lastInChain = contextChain[contextChain.length - 1];
      var first = lastInChain.selection.args.first;
      var variableDefinitions = Object.keys(lastInChain.selection.args).filter(function(key) {
        return isVariable(lastInChain.selection.args[key]);
      }).map(function(key) {
        return lastInChain.selection.args[key];
      });
      var firstVar = variableDefinitions.find(function(definition) {
        return definition.name === "first";
      });
      if (!firstVar) {
        if (isVariable(first)) {
          firstVar = first;
        } else {
          firstVar = variable("first", "Int", first);
          variableDefinitions.push(firstVar);
        }
      }
      var document = new Document(currentContext.selection.selectionSet.typeBundle);
      return [document, variableDefinitions, firstVar];
    }
    function addNextFieldTo(currentSelection, contextChain, path, cursor) {
      var nextContext = contextChain.shift();
      path.push(nextContext.selection.responseKey);
      if (contextChain.length) {
        currentSelection.add(nextContext.selection.name, { alias: nextContext.selection.alias, args: nextContext.selection.args }, function(newSelection) {
          addNextFieldTo(newSelection, contextChain, path, cursor);
        });
      } else {
        var edgesField = nextContext.selection.selectionSet.selections.find(function(field) {
          return field.name === "edges";
        });
        var nodeField = edgesField.selectionSet.selections.find(function(field) {
          return field.name === "node";
        });
        var first = void 0;
        if (isVariable(nextContext.selection.args.first)) {
          first = nextContext.selection.args.first;
        } else {
          first = variable("first", "Int", nextContext.selection.args.first);
        }
        var options = {
          alias: nextContext.selection.alias,
          args: Object.assign({}, nextContext.selection.args, { after: cursor, first })
        };
        currentSelection.addConnection(nextContext.selection.name, options, nodeField.selectionSet);
      }
    }
    function collectFragments(selections) {
      return selections.reduce(function(fragmentDefinitions, field) {
        if (FragmentSpread.prototype.isPrototypeOf(field)) {
          fragmentDefinitions.push(field.toDefinition());
        }
        fragmentDefinitions.push.apply(fragmentDefinitions, toConsumableArray(collectFragments(field.selectionSet.selections)));
        return fragmentDefinitions;
      }, []);
    }
    function nextPageQueryAndPath(context, cursor) {
      var nearestNodeContext = nearestNode(context);
      if (nearestNodeContext) {
        return function() {
          var _document$definitions;
          var path = [];
          var nodeType = nearestNodeContext.selection.selectionSet.typeSchema;
          var nodeId = nearestNodeContext.responseData.id;
          var contextChain = contextsFromNearestNode(context);
          var _initializeDocumentAn = initializeDocumentAndVars(context, contextChain), _initializeDocumentAn2 = slicedToArray(_initializeDocumentAn, 2), document = _initializeDocumentAn2[0], variableDefinitions = _initializeDocumentAn2[1];
          document.addQuery(variableDefinitions, function(root) {
            path.push("node");
            root.add("node", { args: { id: nodeId } }, function(node) {
              node.addInlineFragmentOn(nodeType.name, function(fragment) {
                addNextFieldTo(fragment, contextChain.slice(1), path, cursor);
              });
            });
          });
          var fragments = collectFragments(document.operations[0].selectionSet.selections);
          (_document$definitions = document.definitions).unshift.apply(_document$definitions, toConsumableArray(fragments));
          return [document, path];
        };
      } else {
        return function() {
          var _document$definitions2;
          var path = [];
          var contextChain = contextsFromRoot(context);
          var _initializeDocumentAn3 = initializeDocumentAndVars(context, contextChain), _initializeDocumentAn4 = slicedToArray(_initializeDocumentAn3, 2), document = _initializeDocumentAn4[0], variableDefinitions = _initializeDocumentAn4[1];
          document.addQuery(variableDefinitions, function(root) {
            addNextFieldTo(root, contextChain.slice(1), path, cursor);
          });
          var fragments = collectFragments(document.operations[0].selectionSet.selections);
          (_document$definitions2 = document.definitions).unshift.apply(_document$definitions2, toConsumableArray(fragments));
          return [document, path];
        };
      }
    }
    function hasNextPage$1(connection, edge) {
      if (edge !== connection.edges[connection.edges.length - 1]) {
        return new Scalar(true);
      }
      return connection.pageInfo.hasNextPage;
    }
    function hasPreviousPage(connection, edge) {
      if (edge !== connection.edges[0]) {
        return new Scalar(true);
      }
      return connection.pageInfo.hasPreviousPage;
    }
    function transformConnections(variableValues) {
      return function(context, value) {
        if (isConnection(context)) {
          if (!(value.pageInfo && value.pageInfo.hasOwnProperty("hasNextPage") && value.pageInfo.hasOwnProperty("hasPreviousPage"))) {
            throw new Error('Connections must include the selections "pageInfo { hasNextPage, hasPreviousPage }".');
          }
          return value.edges.map(function(edge) {
            return Object.assign(edge.node, {
              nextPageQueryAndPath: nextPageQueryAndPath(context, edge.cursor),
              hasNextPage: hasNextPage$1(value, edge),
              hasPreviousPage: hasPreviousPage(value, edge),
              variableValues
            });
          });
        } else {
          return value;
        }
      };
    }
    var DecodingContext = function() {
      function DecodingContext2(selection, responseData) {
        var parent = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
        classCallCheck(this, DecodingContext2);
        this.selection = selection;
        this.responseData = responseData;
        this.parent = parent;
        Object.freeze(this);
      }
      createClass(DecodingContext2, [{
        key: "contextForObjectProperty",
        value: function contextForObjectProperty(responseKey) {
          var nestedSelections = this.selection.selectionSet.selectionsByResponseKey[responseKey];
          var nextSelection = nestedSelections && nestedSelections[0];
          var nextContext = void 0;
          if (Spread.prototype.isPrototypeOf(nextSelection)) {
            nextContext = new DecodingContext2(nextSelection, this.responseData, this.parent);
          } else {
            nextContext = new DecodingContext2(nextSelection, this.responseData[responseKey], this);
          }
          if (!nextSelection) {
            throw new Error('Unexpected response key "' + responseKey + '", not found in selection set: ' + this.selection.selectionSet);
          }
          if (Field.prototype.isPrototypeOf(nextSelection)) {
            return nextContext;
          } else {
            return nextContext.contextForObjectProperty(responseKey);
          }
        }
      }, {
        key: "contextForArrayItem",
        value: function contextForArrayItem(item) {
          return new DecodingContext2(this.selection, item, this.parent);
        }
      }]);
      return DecodingContext2;
    }();
    function decodeArrayItems(context, transformers) {
      return context.responseData.map(function(item) {
        return decodeContext(context.contextForArrayItem(item), transformers);
      });
    }
    function decodeObjectValues(context, transformers) {
      return Object.keys(context.responseData).reduce(function(acc, responseKey) {
        acc[responseKey] = decodeContext(context.contextForObjectProperty(responseKey), transformers);
        return acc;
      }, {});
    }
    function runTransformers(transformers, context, value) {
      return transformers.reduce(function(acc, transformer) {
        return transformer(context, acc);
      }, value);
    }
    function decodeContext(context, transformers) {
      var value = context.responseData;
      if (Array.isArray(value)) {
        value = decodeArrayItems(context, transformers);
      } else if (isObject(value)) {
        value = decodeObjectValues(context, transformers);
      }
      return runTransformers(transformers, context, value);
    }
    function generateRefetchQueries(context, value) {
      if (isValue(value) && isNodeContext(context)) {
        value.refetchQuery = function() {
          return new Query(context.selection.selectionSet.typeBundle, function(root) {
            root.add("node", { args: { id: context.responseData.id } }, function(node) {
              node.addInlineFragmentOn(context.selection.selectionSet.typeSchema.name, context.selection.selectionSet);
            });
          });
        };
      }
      return value;
    }
    function transformPojosToClassesWithRegistry(classRegistry) {
      return function transformPojosToClasses(context, value) {
        if (isObject(value)) {
          var Klass = classRegistry.classForType(context.selection.selectionSet.typeSchema.name);
          return new Klass(value);
        } else {
          return value;
        }
      };
    }
    function transformScalars(context, value) {
      if (isValue(value)) {
        if (context.selection.selectionSet.typeSchema.kind === "SCALAR") {
          return new Scalar(value);
        } else if (context.selection.selectionSet.typeSchema.kind === "ENUM") {
          return new Enum(value);
        }
      }
      return value;
    }
    function recordTypeInformation(context, value) {
      var _context$selection$se = context.selection.selectionSet, typeBundle = _context$selection$se.typeBundle, typeSchema = _context$selection$se.typeSchema;
      if (isValue(value)) {
        if (value.__typename) {
          value.type = schemaForType(typeBundle, value.__typename, typeSchema);
        } else {
          value.type = typeSchema;
        }
      }
      return value;
    }
    function defaultTransformers(_ref) {
      var _ref$classRegistry = _ref.classRegistry, classRegistry = _ref$classRegistry === void 0 ? new ClassRegistry() : _ref$classRegistry, variableValues = _ref.variableValues;
      return [transformScalars, generateRefetchQueries, transformConnections(variableValues), recordTypeInformation, transformPojosToClassesWithRegistry(classRegistry)];
    }
    function decode(selection, responseData) {
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var transformers = options.transformers || defaultTransformers(options);
      var context = new DecodingContext(selection, responseData);
      return decodeContext(context, transformers);
    }
    function httpFetcher(url) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return function fetcher(graphQLParams, headers) {
        return fetch(url, _extends({
          body: JSON.stringify(graphQLParams),
          method: "POST",
          mode: "cors"
        }, options, {
          headers: _extends({
            "Content-Type": "application/json",
            Accept: "application/json"
          }, options.headers, headers)
        })).then(function(response) {
          var contentType = response.headers.get("content-type");
          if (contentType.indexOf("application/json") > -1) {
            return response.json();
          }
          return response.text().then(function(text) {
            return { text };
          });
        });
      };
    }
    function hasNextPage(paginatedModels) {
      return paginatedModels && paginatedModels.length && paginatedModels[paginatedModels.length - 1].hasNextPage;
    }
    var Client$2 = function() {
      function Client3(typeBundle, _ref) {
        var url = _ref.url, fetcherOptions = _ref.fetcherOptions, fetcher = _ref.fetcher, _ref$registry = _ref.registry, registry = _ref$registry === void 0 ? new ClassRegistry() : _ref$registry;
        classCallCheck(this, Client3);
        this.typeBundle = typeBundle;
        this.classRegistry = registry;
        if (url && fetcher) {
          throw new Error("Arguments not supported: supply either `url` and optional `fetcherOptions` OR use a `fetcher` function for further customization.");
        }
        if (url) {
          this.fetcher = httpFetcher(url, fetcherOptions);
        } else if (fetcher) {
          if (fetcherOptions) {
            throw new Error("Arguments not supported: when specifying your own `fetcher`, set options through it and not with `fetcherOptions`");
          }
          this.fetcher = fetcher;
        } else {
          throw new Error("Invalid arguments: one of `url` or `fetcher` is needed.");
        }
      }
      createClass(Client3, [{
        key: "document",
        value: function document() {
          return new Document(this.typeBundle);
        }
      }, {
        key: "query",
        value: function query2() {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return new (Function.prototype.bind.apply(Query, [null].concat([this.typeBundle], args)))();
        }
      }, {
        key: "mutation",
        value: function mutation() {
          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          return new (Function.prototype.bind.apply(Mutation, [null].concat([this.typeBundle], args)))();
        }
      }, {
        key: "send",
        value: function send(request) {
          var variableValues = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
          var _this = this;
          var otherProperties = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
          var headers = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
          var operationOrDocument = void 0;
          if (Function.prototype.isPrototypeOf(request)) {
            operationOrDocument = request(this);
          } else {
            operationOrDocument = request;
          }
          var graphQLParams = { query: operationOrDocument.toString() };
          if (variableValues) {
            graphQLParams.variables = variableValues;
          }
          Object.assign(graphQLParams, otherProperties);
          var operation = void 0;
          if (Operation.prototype.isPrototypeOf(operationOrDocument)) {
            operation = operationOrDocument;
          } else {
            var document = operationOrDocument;
            if (document.operations.length === 1) {
              operation = document.operations[0];
            } else if (otherProperties.operationName) {
              operation = document.operations.find(function(documentOperation) {
                return documentOperation.name === otherProperties.operationName;
              });
            } else {
              throw new Error("\n          A document must contain exactly one operation, or an operationName\n          must be specified. Example:\n\n            client.send(document, null, {operationName: 'myFancyQuery'});\n        ");
            }
          }
          return this.fetcher(graphQLParams, headers).then(function(response) {
            if (response.data) {
              response.model = decode(operation, response.data, {
                classRegistry: _this.classRegistry,
                variableValues
              });
            }
            return response;
          });
        }
      }, {
        key: "fetchNextPage",
        value: function fetchNextPage(nodeOrNodes, options) {
          var node = void 0;
          if (Array.isArray(nodeOrNodes)) {
            node = nodeOrNodes[nodeOrNodes.length - 1];
          } else {
            node = nodeOrNodes;
          }
          var _node$nextPageQueryAn = node.nextPageQueryAndPath(), _node$nextPageQueryAn2 = slicedToArray(_node$nextPageQueryAn, 2), query2 = _node$nextPageQueryAn2[0], path = _node$nextPageQueryAn2[1];
          var variableValues = void 0;
          if (node.variableValues || options) {
            variableValues = Object.assign({}, node.variableValues, options);
          }
          return this.send(query2, variableValues).then(function(response) {
            response.model = path.reduce(function(object2, key) {
              return object2[key];
            }, response.model);
            return response;
          });
        }
      }, {
        key: "fetchAllPages",
        value: function fetchAllPages(paginatedModels, _ref2) {
          var _this2 = this;
          var pageSize = _ref2.pageSize;
          if (hasNextPage(paginatedModels)) {
            return this.fetchNextPage(paginatedModels, { first: pageSize }).then(function(_ref3) {
              var model = _ref3.model;
              var pages = paginatedModels.concat(model);
              return _this2.fetchAllPages(pages, { pageSize });
            });
          }
          return Promise.resolve(paginatedModels);
        }
      }, {
        key: "refetch",
        value: function refetch(nodeType) {
          if (!nodeType) {
            throw new Error("'client#refetch' must be called with a non-null instance of a Node.");
          } else if (!nodeType.type.implementsNode) {
            throw new Error("'client#refetch' must be called with a type that implements Node. Received " + nodeType.type.name + ".");
          }
          return this.send(nodeType.refetchQuery()).then(function(_ref4) {
            var model = _ref4.model;
            return model.node;
          });
        }
      }, {
        key: "variable",
        value: function variable$$1(name, type, defaultValue) {
          return variable(name, type, defaultValue);
        }
      }, {
        key: "enum",
        value: function _enum(key) {
          return enumFunction(key);
        }
      }]);
      return Client3;
    }();
    var Config = function() {
      createClass$1(Config2, [{
        key: "requiredProperties",
        get: function get$$1() {
          return ["storefrontAccessToken", "domain"];
        }
      }, {
        key: "deprecatedProperties",
        get: function get$$1() {
          return {
            accessToken: "storefrontAccessToken",
            apiKey: "storefrontAccessToken"
          };
        }
      }]);
      function Config2(attrs) {
        var _this = this;
        classCallCheck$1(this, Config2);
        Object.keys(this.deprecatedProperties).forEach(function(key) {
          if (!attrs.hasOwnProperty(key)) {
            return;
          }
          console.warn("[ShopifyBuy] Config property " + key + " is deprecated as of v1.0, please use " + _this.deprecatedProperties[key] + " instead.");
          attrs[_this.deprecatedProperties[key]] = attrs[key];
        });
        this.requiredProperties.forEach(function(key) {
          if (attrs.hasOwnProperty(key)) {
            _this[key] = attrs[key];
          } else {
            throw new Error("new Config() requires the option '" + key + "'");
          }
        });
        if (attrs.hasOwnProperty("apiVersion")) {
          this.apiVersion = attrs.apiVersion;
        } else {
          this.apiVersion = "2022-01";
        }
        if (attrs.hasOwnProperty("source")) {
          this.source = attrs.source;
        }
        if (attrs.hasOwnProperty("language")) {
          this.language = attrs.language;
        }
      }
      return Config2;
    }();
    var Resource = function Resource2(client) {
      classCallCheck$1(this, Resource2);
      this.graphQLClient = client;
    };
    var defaultErrors = [{ message: "an unknown error has occurred." }];
    function defaultResolver(path) {
      var keys = path.split(".");
      return function(_ref) {
        var model = _ref.model, errors = _ref.errors;
        return new Promise(function(resolve, reject) {
          try {
            var result = keys.reduce(function(ref, key) {
              return ref[key];
            }, model);
            resolve(result);
          } catch (_) {
            if (errors) {
              reject(errors);
            } else {
              reject(defaultErrors);
            }
          }
        });
      };
    }
    function fetchResourcesForProducts(productOrProduct, client) {
      var products = [].concat(productOrProduct);
      return Promise.all(products.reduce(function(promiseAcc, product) {
        if (product === null) {
          return promiseAcc;
        }
        promiseAcc.push(client.fetchAllPages(product.images, { pageSize: 250 }).then(function(images) {
          product.attrs.images = images;
        }));
        promiseAcc.push(client.fetchAllPages(product.variants, { pageSize: 250 }).then(function(variants) {
          product.attrs.variants = variants;
        }));
        return promiseAcc;
      }, []));
    }
    function paginateProductConnectionsAndResolve(client) {
      return function(products) {
        return fetchResourcesForProducts(products, client).then(function() {
          return products;
        });
      };
    }
    function paginateCollectionsProductConnectionsAndResolve(client) {
      return function(collectionOrCollections) {
        var collections = [].concat(collectionOrCollections);
        return Promise.all(collections.reduce(function(promiseAcc, collection) {
          return promiseAcc.concat(fetchResourcesForProducts(collection.products, client));
        }, [])).then(function() {
          return collectionOrCollections;
        });
      };
    }
    var productHelpers = {
      variantForOptions: function variantForOptions(product, options) {
        return product.variants.find(function(variant) {
          return variant.selectedOptions.every(function(selectedOption) {
            return options[selectedOption.name] === selectedOption.value.valueOf();
          });
        });
      }
    };
    function query(client) {
      var document = client.document();
      var spreads = {};
      var variables = {};
      variables.__defaultOperation__ = {};
      variables.__defaultOperation__.id = client.variable("id", "ID!");
      spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function(root) {
        root.add("id");
        root.add("title");
        root.add("price");
        root.add("priceV2", function(priceV2) {
          priceV2.add("amount");
          priceV2.add("currencyCode");
        });
        root.add("weight");
        root.add("availableForSale", {
          alias: "available"
        });
        root.add("sku");
        root.add("compareAtPrice");
        root.add("compareAtPriceV2", function(compareAtPriceV2) {
          compareAtPriceV2.add("amount");
          compareAtPriceV2.add("currencyCode");
        });
        root.add("image", function(image) {
          image.add("id");
          image.add("originalSrc", {
            alias: "src"
          });
          image.add("altText");
          image.add("width");
          image.add("height");
        });
        root.add("selectedOptions", function(selectedOptions) {
          selectedOptions.add("name");
          selectedOptions.add("value");
        });
        root.add("unitPrice", function(unitPrice) {
          unitPrice.add("amount");
          unitPrice.add("currencyCode");
        });
        root.add("unitPriceMeasurement", function(unitPriceMeasurement) {
          unitPriceMeasurement.add("measuredType");
          unitPriceMeasurement.add("quantityUnit");
          unitPriceMeasurement.add("quantityValue");
          unitPriceMeasurement.add("referenceUnit");
          unitPriceMeasurement.add("referenceValue");
        });
      });
      spreads.ProductFragment = document.defineFragment("ProductFragment", "Product", function(root) {
        root.add("id");
        root.add("availableForSale");
        root.add("createdAt");
        root.add("updatedAt");
        root.add("descriptionHtml");
        root.add("description");
        root.add("handle");
        root.add("productType");
        root.add("title");
        root.add("vendor");
        root.add("publishedAt");
        root.add("onlineStoreUrl");
        root.add("options", function(options) {
          options.add("name");
          options.add("values");
        });
        root.add("images", {
          args: {
            first: 250
          }
        }, function(images) {
          images.add("pageInfo", function(pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          images.add("edges", function(edges) {
            edges.add("cursor");
            edges.add("node", function(node) {
              node.add("id");
              node.add("src");
              node.add("altText");
              node.add("width");
              node.add("height");
            });
          });
        });
        root.add("variants", {
          args: {
            first: 250
          }
        }, function(variants) {
          variants.add("pageInfo", function(pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          variants.add("edges", function(edges) {
            edges.add("cursor");
            edges.add("node", function(node) {
              node.addFragment(spreads.VariantFragment);
            });
          });
        });
      });
      document.addQuery([variables.__defaultOperation__.id], function(root) {
        root.add("node", {
          args: {
            id: variables.__defaultOperation__.id
          }
        }, function(node) {
          node.addFragment(spreads.ProductFragment);
        });
      });
      return document;
    }
    function query$1(client) {
      var document = client.document();
      var spreads = {};
      var variables = {};
      variables.__defaultOperation__ = {};
      variables.__defaultOperation__.ids = client.variable("ids", "[ID!]!");
      spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function(root) {
        root.add("id");
        root.add("title");
        root.add("price");
        root.add("priceV2", function(priceV2) {
          priceV2.add("amount");
          priceV2.add("currencyCode");
        });
        root.add("weight");
        root.add("availableForSale", {
          alias: "available"
        });
        root.add("sku");
        root.add("compareAtPrice");
        root.add("compareAtPriceV2", function(compareAtPriceV2) {
          compareAtPriceV2.add("amount");
          compareAtPriceV2.add("currencyCode");
        });
        root.add("image", function(image) {
          image.add("id");
          image.add("originalSrc", {
            alias: "src"
          });
          image.add("altText");
          image.add("width");
          image.add("height");
        });
        root.add("selectedOptions", function(selectedOptions) {
          selectedOptions.add("name");
          selectedOptions.add("value");
        });
        root.add("unitPrice", function(unitPrice) {
          unitPrice.add("amount");
          unitPrice.add("currencyCode");
        });
        root.add("unitPriceMeasurement", function(unitPriceMeasurement) {
          unitPriceMeasurement.add("measuredType");
          unitPriceMeasurement.add("quantityUnit");
          unitPriceMeasurement.add("quantityValue");
          unitPriceMeasurement.add("referenceUnit");
          unitPriceMeasurement.add("referenceValue");
        });
      });
      spreads.ProductFragment = document.defineFragment("ProductFragment", "Product", function(root) {
        root.add("id");
        root.add("availableForSale");
        root.add("createdAt");
        root.add("updatedAt");
        root.add("descriptionHtml");
        root.add("description");
        root.add("handle");
        root.add("productType");
        root.add("title");
        root.add("vendor");
        root.add("publishedAt");
        root.add("onlineStoreUrl");
        root.add("options", function(options) {
          options.add("name");
          options.add("values");
        });
        root.add("images", {
          args: {
            first: 250
          }
        }, function(images) {
          images.add("pageInfo", function(pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          images.add("edges", function(edges) {
            edges.add("cursor");
            edges.add("node", function(node) {
              node.add("id");
              node.add("src");
              node.add("altText");
              node.add("width");
              node.add("height");
            });
          });
        });
        root.add("variants", {
          args: {
            first: 250
          }
        }, function(variants) {
          variants.add("pageInfo", function(pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          variants.add("edges", function(edges) {
            edges.add("cursor");
            edges.add("node", function(node) {
              node.addFragment(spreads.VariantFragment);
            });
          });
        });
      });
      document.addQuery([variables.__defaultOperation__.ids], function(root) {
        root.add("nodes", {
          args: {
            ids: variables.__defaultOperation__.ids
          }
        }, function(nodes) {
          nodes.addFragment(spreads.ProductFragment);
        });
      });
      return document;
    }
    function query$2(client) {
      var document = client.document();
      var spreads = {};
      var variables = {};
      variables.__defaultOperation__ = {};
      variables.__defaultOperation__.first = client.variable("first", "Int!");
      variables.__defaultOperation__.query = client.variable("query", "String");
      variables.__defaultOperation__.sortKey = client.variable("sortKey", "ProductSortKeys");
      variables.__defaultOperation__.reverse = client.variable("reverse", "Boolean");
      spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function(root) {
        root.add("id");
        root.add("title");
        root.add("price");
        root.add("priceV2", function(priceV2) {
          priceV2.add("amount");
          priceV2.add("currencyCode");
        });
        root.add("weight");
        root.add("availableForSale", {
          alias: "available"
        });
        root.add("sku");
        root.add("compareAtPrice");
        root.add("compareAtPriceV2", function(compareAtPriceV2) {
          compareAtPriceV2.add("amount");
          compareAtPriceV2.add("currencyCode");
        });
        root.add("image", function(image) {
          image.add("id");
          image.add("originalSrc", {
            alias: "src"
          });
          image.add("altText");
          image.add("width");
          image.add("height");
        });
        root.add("selectedOptions", function(selectedOptions) {
          selectedOptions.add("name");
          selectedOptions.add("value");
        });
        root.add("unitPrice", function(unitPrice) {
          unitPrice.add("amount");
          unitPrice.add("currencyCode");
        });
        root.add("unitPriceMeasurement", function(unitPriceMeasurement) {
          unitPriceMeasurement.add("measuredType");
          unitPriceMeasurement.add("quantityUnit");
          unitPriceMeasurement.add("quantityValue");
          unitPriceMeasurement.add("referenceUnit");
          unitPriceMeasurement.add("referenceValue");
        });
      });
      spreads.ProductFragment = document.defineFragment("ProductFragment", "Product", function(root) {
        root.add("id");
        root.add("availableForSale");
        root.add("createdAt");
        root.add("updatedAt");
        root.add("descriptionHtml");
        root.add("description");
        root.add("handle");
        root.add("productType");
        root.add("title");
        root.add("vendor");
        root.add("publishedAt");
        root.add("onlineStoreUrl");
        root.add("options", function(options) {
          options.add("name");
          options.add("values");
        });
        root.add("images", {
          args: {
            first: 250
          }
        }, function(images) {
          images.add("pageInfo", function(pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          images.add("edges", function(edges) {
            edges.add("cursor");
            edges.add("node", function(node) {
              node.add("id");
              node.add("src");
              node.add("altText");
              node.add("width");
              node.add("height");
            });
          });
        });
        root.add("variants", {
          args: {
            first: 250
          }
        }, function(variants) {
          variants.add("pageInfo", function(pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          variants.add("edges", function(edges) {
            edges.add("cursor");
            edges.add("node", function(node) {
              node.addFragment(spreads.VariantFragment);
            });
          });
        });
      });
      document.addQuery([variables.__defaultOperation__.first, variables.__defaultOperation__.query, variables.__defaultOperation__.sortKey, variables.__defaultOperation__.reverse], function(root) {
        root.add("products", {
          args: {
            first: variables.__defaultOperation__.first,
            query: variables.__defaultOperation__.query,
            sortKey: variables.__defaultOperation__.sortKey,
            reverse: variables.__defaultOperation__.reverse
          }
        }, function(products) {
          products.add("pageInfo", function(pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          products.add("edges", function(edges) {
            edges.add("cursor");
            edges.add("node", function(node) {
              node.addFragment(spreads.ProductFragment);
            });
          });
        });
      });
      return document;
    }
    function query$3(client) {
      var document = client.document();
      var spreads = {};
      var variables = {};
      variables.__defaultOperation__ = {};
      variables.__defaultOperation__.handle = client.variable("handle", "String!");
      spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function(root) {
        root.add("id");
        root.add("title");
        root.add("price");
        root.add("priceV2", function(priceV2) {
          priceV2.add("amount");
          priceV2.add("currencyCode");
        });
        root.add("weight");
        root.add("availableForSale", {
          alias: "available"
        });
        root.add("sku");
        root.add("compareAtPrice");
        root.add("compareAtPriceV2", function(compareAtPriceV2) {
          compareAtPriceV2.add("amount");
          compareAtPriceV2.add("currencyCode");
        });
        root.add("image", function(image) {
          image.add("id");
          image.add("originalSrc", {
            alias: "src"
          });
          image.add("altText");
          image.add("width");
          image.add("height");
        });
        root.add("selectedOptions", function(selectedOptions) {
          selectedOptions.add("name");
          selectedOptions.add("value");
        });
        root.add("unitPrice", function(unitPrice) {
          unitPrice.add("amount");
          unitPrice.add("currencyCode");
        });
        root.add("unitPriceMeasurement", function(unitPriceMeasurement) {
          unitPriceMeasurement.add("measuredType");
          unitPriceMeasurement.add("quantityUnit");
          unitPriceMeasurement.add("quantityValue");
          unitPriceMeasurement.add("referenceUnit");
          unitPriceMeasurement.add("referenceValue");
        });
      });
      spreads.ProductFragment = document.defineFragment("ProductFragment", "Product", function(root) {
        root.add("id");
        root.add("availableForSale");
        root.add("createdAt");
        root.add("updatedAt");
        root.add("descriptionHtml");
        root.add("description");
        root.add("handle");
        root.add("productType");
        root.add("title");
        root.add("vendor");
        root.add("publishedAt");
        root.add("onlineStoreUrl");
        root.add("options", function(options) {
          options.add("name");
          options.add("values");
        });
        root.add("images", {
          args: {
            first: 250
          }
        }, function(images) {
          images.add("pageInfo", function(pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          images.add("edges", function(edges) {
            edges.add("cursor");
            edges.add("node", function(node) {
              node.add("id");
              node.add("src");
              node.add("altText");
              node.add("width");
              node.add("height");
            });
          });
        });
        root.add("variants", {
          args: {
            first: 250
          }
        }, function(variants) {
          variants.add("pageInfo", function(pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          variants.add("edges", function(edges) {
            edges.add("cursor");
            edges.add("node", function(node) {
              node.addFragment(spreads.VariantFragment);
            });
          });
        });
      });
      document.addQuery([variables.__defaultOperation__.handle], function(root) {
        root.add("productByHandle", {
          args: {
            handle: variables.__defaultOperation__.handle
          }
        }, function(productByHandle) {
          productByHandle.addFragment(spreads.ProductFragment);
        });
      });
      return document;
    }
    var ProductResource = function(_Resource) {
      inherits$1(ProductResource2, _Resource);
      function ProductResource2() {
        classCallCheck$1(this, ProductResource2);
        return possibleConstructorReturn$1(this, (ProductResource2.__proto__ || Object.getPrototypeOf(ProductResource2)).apply(this, arguments));
      }
      createClass$1(ProductResource2, [{
        key: "fetchAll",
        value: function fetchAll() {
          var first = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 20;
          return this.graphQLClient.send(query$2, { first }).then(defaultResolver("products")).then(paginateProductConnectionsAndResolve(this.graphQLClient));
        }
      }, {
        key: "fetch",
        value: function fetch3(id) {
          return this.graphQLClient.send(query, { id }).then(defaultResolver("node")).then(paginateProductConnectionsAndResolve(this.graphQLClient));
        }
      }, {
        key: "fetchMultiple",
        value: function fetchMultiple(ids) {
          return this.graphQLClient.send(query$1, { ids }).then(defaultResolver("nodes")).then(paginateProductConnectionsAndResolve(this.graphQLClient));
        }
      }, {
        key: "fetchByHandle",
        value: function fetchByHandle(handle) {
          return this.graphQLClient.send(query$3, { handle }).then(defaultResolver("productByHandle")).then(paginateProductConnectionsAndResolve(this.graphQLClient));
        }
      }, {
        key: "fetchQuery",
        value: function fetchQuery() {
          var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref$first = _ref.first, first = _ref$first === void 0 ? 20 : _ref$first, _ref$sortKey = _ref.sortKey, sortKey = _ref$sortKey === void 0 ? "ID" : _ref$sortKey, query$$1 = _ref.query, reverse = _ref.reverse;
          return this.graphQLClient.send(query$2, {
            first,
            sortKey,
            query: query$$1,
            reverse
          }).then(defaultResolver("products")).then(paginateProductConnectionsAndResolve(this.graphQLClient));
        }
      }, {
        key: "helpers",
        get: function get$$1() {
          return productHelpers;
        }
      }]);
      return ProductResource2;
    }(Resource);
    function query$4(client) {
      var document = client.document();
      var spreads = {};
      var variables = {};
      variables.__defaultOperation__ = {};
      variables.__defaultOperation__.id = client.variable("id", "ID!");
      spreads.CollectionFragment = document.defineFragment("CollectionFragment", "Collection", function(root) {
        root.add("id");
        root.add("handle");
        root.add("description");
        root.add("descriptionHtml");
        root.add("updatedAt");
        root.add("title");
        root.add("image", function(image) {
          image.add("id");
          image.add("originalSrc", {
            alias: "src"
          });
          image.add("altText");
        });
      });
      document.addQuery([variables.__defaultOperation__.id], function(root) {
        root.add("node", {
          args: {
            id: variables.__defaultOperation__.id
          }
        }, function(node) {
          node.addFragment(spreads.CollectionFragment);
        });
      });
      return document;
    }
    function query$5(client) {
      var document = client.document();
      var spreads = {};
      var variables = {};
      variables.__defaultOperation__ = {};
      variables.__defaultOperation__.id = client.variable("id", "ID!");
      variables.__defaultOperation__.productsFirst = client.variable("productsFirst", "Int!");
      spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function(root) {
        root.add("id");
        root.add("title");
        root.add("price");
        root.add("priceV2", function(priceV2) {
          priceV2.add("amount");
          priceV2.add("currencyCode");
        });
        root.add("weight");
        root.add("availableForSale", {
          alias: "available"
        });
        root.add("sku");
        root.add("compareAtPrice");
        root.add("compareAtPriceV2", function(compareAtPriceV2) {
          compareAtPriceV2.add("amount");
          compareAtPriceV2.add("currencyCode");
        });
        root.add("image", function(image) {
          image.add("id");
          image.add("originalSrc", {
            alias: "src"
          });
          image.add("altText");
          image.add("width");
          image.add("height");
        });
        root.add("selectedOptions", function(selectedOptions) {
          selectedOptions.add("name");
          selectedOptions.add("value");
        });
        root.add("unitPrice", function(unitPrice) {
          unitPrice.add("amount");
          unitPrice.add("currencyCode");
        });
        root.add("unitPriceMeasurement", function(unitPriceMeasurement) {
          unitPriceMeasurement.add("measuredType");
          unitPriceMeasurement.add("quantityUnit");
          unitPriceMeasurement.add("quantityValue");
          unitPriceMeasurement.add("referenceUnit");
          unitPriceMeasurement.add("referenceValue");
        });
      });
      spreads.CollectionFragment = document.defineFragment("CollectionFragment", "Collection", function(root) {
        root.add("id");
        root.add("handle");
        root.add("description");
        root.add("descriptionHtml");
        root.add("updatedAt");
        root.add("title");
        root.add("image", function(image) {
          image.add("id");
          image.add("originalSrc", {
            alias: "src"
          });
          image.add("altText");
        });
      });
      spreads.ProductFragment = document.defineFragment("ProductFragment", "Product", function(root) {
        root.add("id");
        root.add("availableForSale");
        root.add("createdAt");
        root.add("updatedAt");
        root.add("descriptionHtml");
        root.add("description");
        root.add("handle");
        root.add("productType");
        root.add("title");
        root.add("vendor");
        root.add("publishedAt");
        root.add("onlineStoreUrl");
        root.add("options", function(options) {
          options.add("name");
          options.add("values");
        });
        root.add("images", {
          args: {
            first: 250
          }
        }, function(images) {
          images.add("pageInfo", function(pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          images.add("edges", function(edges) {
            edges.add("cursor");
            edges.add("node", function(node) {
              node.add("id");
              node.add("src");
              node.add("altText");
              node.add("width");
              node.add("height");
            });
          });
        });
        root.add("variants", {
          args: {
            first: 250
          }
        }, function(variants) {
          variants.add("pageInfo", function(pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          variants.add("edges", function(edges) {
            edges.add("cursor");
            edges.add("node", function(node) {
              node.addFragment(spreads.VariantFragment);
            });
          });
        });
      });
      document.addQuery([variables.__defaultOperation__.id, variables.__defaultOperation__.productsFirst], function(root) {
        root.add("node", {
          args: {
            id: variables.__defaultOperation__.id
          }
        }, function(node) {
          node.addFragment(spreads.CollectionFragment);
          node.addInlineFragmentOn("Collection", function(Collection2) {
            Collection2.add("products", {
              args: {
                first: variables.__defaultOperation__.productsFirst
              }
            }, function(products) {
              products.add("pageInfo", function(pageInfo) {
                pageInfo.add("hasNextPage");
                pageInfo.add("hasPreviousPage");
              });
              products.add("edges", function(edges) {
                edges.add("cursor");
                edges.add("node", function(node2) {
                  node2.addFragment(spreads.ProductFragment);
                });
              });
            });
          });
        });
      });
      return document;
    }
    function query$6(client) {
      var document = client.document();
      var spreads = {};
      var variables = {};
      variables.__defaultOperation__ = {};
      variables.__defaultOperation__.first = client.variable("first", "Int!");
      variables.__defaultOperation__.query = client.variable("query", "String");
      variables.__defaultOperation__.sortKey = client.variable("sortKey", "CollectionSortKeys");
      variables.__defaultOperation__.reverse = client.variable("reverse", "Boolean");
      spreads.CollectionFragment = document.defineFragment("CollectionFragment", "Collection", function(root) {
        root.add("id");
        root.add("handle");
        root.add("description");
        root.add("descriptionHtml");
        root.add("updatedAt");
        root.add("title");
        root.add("image", function(image) {
          image.add("id");
          image.add("originalSrc", {
            alias: "src"
          });
          image.add("altText");
        });
      });
      document.addQuery([variables.__defaultOperation__.first, variables.__defaultOperation__.query, variables.__defaultOperation__.sortKey, variables.__defaultOperation__.reverse], function(root) {
        root.add("collections", {
          args: {
            first: variables.__defaultOperation__.first,
            query: variables.__defaultOperation__.query,
            sortKey: variables.__defaultOperation__.sortKey,
            reverse: variables.__defaultOperation__.reverse
          }
        }, function(collections) {
          collections.add("pageInfo", function(pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          collections.add("edges", function(edges) {
            edges.add("cursor");
            edges.add("node", function(node) {
              node.addFragment(spreads.CollectionFragment);
            });
          });
        });
      });
      return document;
    }
    function query$7(client) {
      var document = client.document();
      var spreads = {};
      var variables = {};
      variables.__defaultOperation__ = {};
      variables.__defaultOperation__.first = client.variable("first", "Int!");
      variables.__defaultOperation__.query = client.variable("query", "String");
      variables.__defaultOperation__.sortKey = client.variable("sortKey", "CollectionSortKeys");
      variables.__defaultOperation__.reverse = client.variable("reverse", "Boolean");
      variables.__defaultOperation__.productsFirst = client.variable("productsFirst", "Int!");
      spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function(root) {
        root.add("id");
        root.add("title");
        root.add("price");
        root.add("priceV2", function(priceV2) {
          priceV2.add("amount");
          priceV2.add("currencyCode");
        });
        root.add("weight");
        root.add("availableForSale", {
          alias: "available"
        });
        root.add("sku");
        root.add("compareAtPrice");
        root.add("compareAtPriceV2", function(compareAtPriceV2) {
          compareAtPriceV2.add("amount");
          compareAtPriceV2.add("currencyCode");
        });
        root.add("image", function(image) {
          image.add("id");
          image.add("originalSrc", {
            alias: "src"
          });
          image.add("altText");
          image.add("width");
          image.add("height");
        });
        root.add("selectedOptions", function(selectedOptions) {
          selectedOptions.add("name");
          selectedOptions.add("value");
        });
        root.add("unitPrice", function(unitPrice) {
          unitPrice.add("amount");
          unitPrice.add("currencyCode");
        });
        root.add("unitPriceMeasurement", function(unitPriceMeasurement) {
          unitPriceMeasurement.add("measuredType");
          unitPriceMeasurement.add("quantityUnit");
          unitPriceMeasurement.add("quantityValue");
          unitPriceMeasurement.add("referenceUnit");
          unitPriceMeasurement.add("referenceValue");
        });
      });
      spreads.CollectionFragment = document.defineFragment("CollectionFragment", "Collection", function(root) {
        root.add("id");
        root.add("handle");
        root.add("description");
        root.add("descriptionHtml");
        root.add("updatedAt");
        root.add("title");
        root.add("image", function(image) {
          image.add("id");
          image.add("originalSrc", {
            alias: "src"
          });
          image.add("altText");
        });
      });
      spreads.ProductFragment = document.defineFragment("ProductFragment", "Product", function(root) {
        root.add("id");
        root.add("availableForSale");
        root.add("createdAt");
        root.add("updatedAt");
        root.add("descriptionHtml");
        root.add("description");
        root.add("handle");
        root.add("productType");
        root.add("title");
        root.add("vendor");
        root.add("publishedAt");
        root.add("onlineStoreUrl");
        root.add("options", function(options) {
          options.add("name");
          options.add("values");
        });
        root.add("images", {
          args: {
            first: 250
          }
        }, function(images) {
          images.add("pageInfo", function(pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          images.add("edges", function(edges) {
            edges.add("cursor");
            edges.add("node", function(node) {
              node.add("id");
              node.add("src");
              node.add("altText");
              node.add("width");
              node.add("height");
            });
          });
        });
        root.add("variants", {
          args: {
            first: 250
          }
        }, function(variants) {
          variants.add("pageInfo", function(pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          variants.add("edges", function(edges) {
            edges.add("cursor");
            edges.add("node", function(node) {
              node.addFragment(spreads.VariantFragment);
            });
          });
        });
      });
      document.addQuery([variables.__defaultOperation__.first, variables.__defaultOperation__.query, variables.__defaultOperation__.sortKey, variables.__defaultOperation__.reverse, variables.__defaultOperation__.productsFirst], function(root) {
        root.add("collections", {
          args: {
            first: variables.__defaultOperation__.first,
            query: variables.__defaultOperation__.query,
            sortKey: variables.__defaultOperation__.sortKey,
            reverse: variables.__defaultOperation__.reverse
          }
        }, function(collections) {
          collections.add("pageInfo", function(pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          collections.add("edges", function(edges) {
            edges.add("cursor");
            edges.add("node", function(node) {
              node.addFragment(spreads.CollectionFragment);
              node.add("products", {
                args: {
                  first: variables.__defaultOperation__.productsFirst
                }
              }, function(products) {
                products.add("pageInfo", function(pageInfo) {
                  pageInfo.add("hasNextPage");
                  pageInfo.add("hasPreviousPage");
                });
                products.add("edges", function(edges2) {
                  edges2.add("cursor");
                  edges2.add("node", function(node2) {
                    node2.addFragment(spreads.ProductFragment);
                  });
                });
              });
            });
          });
        });
      });
      return document;
    }
    function query$8(client) {
      var document = client.document();
      var spreads = {};
      var variables = {};
      variables.__defaultOperation__ = {};
      variables.__defaultOperation__.handle = client.variable("handle", "String!");
      spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function(root) {
        root.add("id");
        root.add("title");
        root.add("price");
        root.add("priceV2", function(priceV2) {
          priceV2.add("amount");
          priceV2.add("currencyCode");
        });
        root.add("weight");
        root.add("availableForSale", {
          alias: "available"
        });
        root.add("sku");
        root.add("compareAtPrice");
        root.add("compareAtPriceV2", function(compareAtPriceV2) {
          compareAtPriceV2.add("amount");
          compareAtPriceV2.add("currencyCode");
        });
        root.add("image", function(image) {
          image.add("id");
          image.add("originalSrc", {
            alias: "src"
          });
          image.add("altText");
          image.add("width");
          image.add("height");
        });
        root.add("selectedOptions", function(selectedOptions) {
          selectedOptions.add("name");
          selectedOptions.add("value");
        });
        root.add("unitPrice", function(unitPrice) {
          unitPrice.add("amount");
          unitPrice.add("currencyCode");
        });
        root.add("unitPriceMeasurement", function(unitPriceMeasurement) {
          unitPriceMeasurement.add("measuredType");
          unitPriceMeasurement.add("quantityUnit");
          unitPriceMeasurement.add("quantityValue");
          unitPriceMeasurement.add("referenceUnit");
          unitPriceMeasurement.add("referenceValue");
        });
      });
      spreads.ProductFragment = document.defineFragment("ProductFragment", "Product", function(root) {
        root.add("id");
        root.add("availableForSale");
        root.add("createdAt");
        root.add("updatedAt");
        root.add("descriptionHtml");
        root.add("description");
        root.add("handle");
        root.add("productType");
        root.add("title");
        root.add("vendor");
        root.add("publishedAt");
        root.add("onlineStoreUrl");
        root.add("options", function(options) {
          options.add("name");
          options.add("values");
        });
        root.add("images", {
          args: {
            first: 250
          }
        }, function(images) {
          images.add("pageInfo", function(pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          images.add("edges", function(edges) {
            edges.add("cursor");
            edges.add("node", function(node) {
              node.add("id");
              node.add("src");
              node.add("altText");
              node.add("width");
              node.add("height");
            });
          });
        });
        root.add("variants", {
          args: {
            first: 250
          }
        }, function(variants) {
          variants.add("pageInfo", function(pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          variants.add("edges", function(edges) {
            edges.add("cursor");
            edges.add("node", function(node) {
              node.addFragment(spreads.VariantFragment);
            });
          });
        });
      });
      spreads.CollectionFragment = document.defineFragment("CollectionFragment", "Collection", function(root) {
        root.add("id");
        root.add("handle");
        root.add("description");
        root.add("descriptionHtml");
        root.add("updatedAt");
        root.add("title");
        root.add("image", function(image) {
          image.add("id");
          image.add("originalSrc", {
            alias: "src"
          });
          image.add("altText");
        });
      });
      spreads.CollectionsProductsFragment = document.defineFragment("CollectionsProductsFragment", "Collection", function(root) {
        root.add("products", {
          args: {
            first: 20
          }
        }, function(products) {
          products.add("pageInfo", function(pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          products.add("edges", function(edges) {
            edges.add("cursor");
            edges.add("node", function(node) {
              node.addFragment(spreads.ProductFragment);
            });
          });
        });
      });
      document.addQuery([variables.__defaultOperation__.handle], function(root) {
        root.add("collectionByHandle", {
          args: {
            handle: variables.__defaultOperation__.handle
          }
        }, function(collectionByHandle) {
          collectionByHandle.addFragment(spreads.CollectionFragment);
          collectionByHandle.addFragment(spreads.CollectionsProductsFragment);
        });
      });
      return document;
    }
    var CollectionResource = function(_Resource) {
      inherits$1(CollectionResource2, _Resource);
      function CollectionResource2() {
        classCallCheck$1(this, CollectionResource2);
        return possibleConstructorReturn$1(this, (CollectionResource2.__proto__ || Object.getPrototypeOf(CollectionResource2)).apply(this, arguments));
      }
      createClass$1(CollectionResource2, [{
        key: "fetchAll",
        value: function fetchAll() {
          var first = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 20;
          return this.graphQLClient.send(query$6, { first }).then(defaultResolver("collections"));
        }
      }, {
        key: "fetchAllWithProducts",
        value: function fetchAllWithProducts() {
          var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref$first = _ref.first, first = _ref$first === void 0 ? 20 : _ref$first, _ref$productsFirst = _ref.productsFirst, productsFirst = _ref$productsFirst === void 0 ? 20 : _ref$productsFirst;
          return this.graphQLClient.send(query$7, { first, productsFirst }).then(defaultResolver("collections")).then(paginateCollectionsProductConnectionsAndResolve(this.graphQLClient));
        }
      }, {
        key: "fetch",
        value: function fetch3(id) {
          return this.graphQLClient.send(query$4, { id }).then(defaultResolver("node"));
        }
      }, {
        key: "fetchWithProducts",
        value: function fetchWithProducts(id) {
          var _ref2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref2$productsFirst = _ref2.productsFirst, productsFirst = _ref2$productsFirst === void 0 ? 20 : _ref2$productsFirst;
          return this.graphQLClient.send(query$5, { id, productsFirst }).then(defaultResolver("node")).then(paginateCollectionsProductConnectionsAndResolve(this.graphQLClient));
        }
      }, {
        key: "fetchByHandle",
        value: function fetchByHandle(handle) {
          return this.graphQLClient.send(query$8, { handle }).then(defaultResolver("collectionByHandle"));
        }
      }, {
        key: "fetchQuery",
        value: function fetchQuery() {
          var _ref3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref3$first = _ref3.first, first = _ref3$first === void 0 ? 20 : _ref3$first, _ref3$sortKey = _ref3.sortKey, sortKey = _ref3$sortKey === void 0 ? "ID" : _ref3$sortKey, query2 = _ref3.query, reverse = _ref3.reverse;
          return this.graphQLClient.send(query$6, {
            first,
            sortKey,
            query: query2,
            reverse
          }).then(defaultResolver("collections"));
        }
      }]);
      return CollectionResource2;
    }(Resource);
    function query$9(client) {
      var document = client.document();
      document.addQuery(function(root) {
        root.add("shop", function(shop) {
          shop.add("paymentSettings", function(paymentSettings) {
            paymentSettings.add("enabledPresentmentCurrencies");
          });
          shop.add("description");
          shop.add("moneyFormat");
          shop.add("name");
          shop.add("primaryDomain", function(primaryDomain) {
            primaryDomain.add("host");
            primaryDomain.add("sslEnabled");
            primaryDomain.add("url");
          });
        });
      });
      return document;
    }
    function query$10(client) {
      var document = client.document();
      var spreads = {};
      spreads.PolicyFragment = document.defineFragment("PolicyFragment", "ShopPolicy", function(root) {
        root.add("id");
        root.add("title");
        root.add("url");
        root.add("body");
      });
      document.addQuery(function(root) {
        root.add("shop", function(shop) {
          shop.add("privacyPolicy", function(privacyPolicy) {
            privacyPolicy.addFragment(spreads.PolicyFragment);
          });
          shop.add("termsOfService", function(termsOfService) {
            termsOfService.addFragment(spreads.PolicyFragment);
          });
          shop.add("refundPolicy", function(refundPolicy) {
            refundPolicy.addFragment(spreads.PolicyFragment);
          });
        });
      });
      return document;
    }
    var ShopResource = function(_Resource) {
      inherits$1(ShopResource2, _Resource);
      function ShopResource2() {
        classCallCheck$1(this, ShopResource2);
        return possibleConstructorReturn$1(this, (ShopResource2.__proto__ || Object.getPrototypeOf(ShopResource2)).apply(this, arguments));
      }
      createClass$1(ShopResource2, [{
        key: "fetchInfo",
        value: function fetchInfo() {
          return this.graphQLClient.send(query$9).then(defaultResolver("shop"));
        }
      }, {
        key: "fetchPolicies",
        value: function fetchPolicies() {
          return this.graphQLClient.send(query$10).then(defaultResolver("shop"));
        }
      }]);
      return ShopResource2;
    }(Resource);
    function handleCheckoutMutation(mutationRootKey, client) {
      return function(_ref) {
        var _ref$data = _ref.data, data = _ref$data === void 0 ? {} : _ref$data, errors = _ref.errors, _ref$model = _ref.model, model = _ref$model === void 0 ? {} : _ref$model;
        var rootData = data[mutationRootKey];
        var rootModel = model[mutationRootKey];
        if (rootData && rootData.checkout) {
          return client.fetchAllPages(rootModel.checkout.lineItems, { pageSize: 250 }).then(function(lineItems) {
            rootModel.checkout.attrs.lineItems = lineItems;
            rootModel.checkout.errors = errors;
            rootModel.checkout.userErrors = rootModel.userErrors;
            return rootModel.checkout;
          });
        }
        if (errors && errors.length) {
          return Promise.reject(new Error(JSON.stringify(errors)));
        }
        if (rootData && rootData.checkoutUserErrors && rootData.checkoutUserErrors.length) {
          return Promise.reject(new Error(JSON.stringify(rootData.checkoutUserErrors)));
        }
        if (rootData && rootData.userErrors && rootData.userErrors.length) {
          return Promise.reject(new Error(JSON.stringify(rootData.userErrors)));
        }
        return Promise.reject(new Error("The " + mutationRootKey + " mutation failed due to an unknown error."));
      };
    }
    function query$11(client) {
      var document = client.document();
      var spreads = {};
      var variables = {};
      variables.__defaultOperation__ = {};
      variables.__defaultOperation__.id = client.variable("id", "ID!");
      spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function(root) {
        root.add("id");
        root.add("title");
        root.add("price");
        root.add("priceV2", function(priceV2) {
          priceV2.add("amount");
          priceV2.add("currencyCode");
        });
        root.add("weight");
        root.add("availableForSale", {
          alias: "available"
        });
        root.add("sku");
        root.add("compareAtPrice");
        root.add("compareAtPriceV2", function(compareAtPriceV2) {
          compareAtPriceV2.add("amount");
          compareAtPriceV2.add("currencyCode");
        });
        root.add("image", function(image) {
          image.add("id");
          image.add("originalSrc", {
            alias: "src"
          });
          image.add("altText");
          image.add("width");
          image.add("height");
        });
        root.add("selectedOptions", function(selectedOptions) {
          selectedOptions.add("name");
          selectedOptions.add("value");
        });
        root.add("unitPrice", function(unitPrice) {
          unitPrice.add("amount");
          unitPrice.add("currencyCode");
        });
        root.add("unitPriceMeasurement", function(unitPriceMeasurement) {
          unitPriceMeasurement.add("measuredType");
          unitPriceMeasurement.add("quantityUnit");
          unitPriceMeasurement.add("quantityValue");
          unitPriceMeasurement.add("referenceUnit");
          unitPriceMeasurement.add("referenceValue");
        });
      });
      spreads.DiscountApplicationFragment = document.defineFragment("DiscountApplicationFragment", "DiscountApplication", function(root) {
        root.add("targetSelection");
        root.add("allocationMethod");
        root.add("targetType");
        root.add("value", function(value) {
          value.addInlineFragmentOn("MoneyV2", function(MoneyV22) {
            MoneyV22.add("amount");
            MoneyV22.add("currencyCode");
          });
          value.addInlineFragmentOn("PricingPercentageValue", function(PricingPercentageValue2) {
            PricingPercentageValue2.add("percentage");
          });
        });
        root.addInlineFragmentOn("ManualDiscountApplication", function(ManualDiscountApplication2) {
          ManualDiscountApplication2.add("title");
          ManualDiscountApplication2.add("description");
        });
        root.addInlineFragmentOn("DiscountCodeApplication", function(DiscountCodeApplication2) {
          DiscountCodeApplication2.add("code");
          DiscountCodeApplication2.add("applicable");
        });
        root.addInlineFragmentOn("ScriptDiscountApplication", function(ScriptDiscountApplication2) {
          ScriptDiscountApplication2.add("title");
        });
        root.addInlineFragmentOn("AutomaticDiscountApplication", function(AutomaticDiscountApplication2) {
          AutomaticDiscountApplication2.add("title");
        });
      });
      spreads.AppliedGiftCardFragment = document.defineFragment("AppliedGiftCardFragment", "AppliedGiftCard", function(root) {
        root.add("amountUsedV2", function(amountUsedV2) {
          amountUsedV2.add("amount");
          amountUsedV2.add("currencyCode");
        });
        root.add("balanceV2", function(balanceV2) {
          balanceV2.add("amount");
          balanceV2.add("currencyCode");
        });
        root.add("presentmentAmountUsed", function(presentmentAmountUsed) {
          presentmentAmountUsed.add("amount");
          presentmentAmountUsed.add("currencyCode");
        });
        root.add("id");
        root.add("lastCharacters");
      });
      spreads.VariantWithProductFragment = document.defineFragment("VariantWithProductFragment", "ProductVariant", function(root) {
        root.addFragment(spreads.VariantFragment);
        root.add("product", function(product) {
          product.add("id");
          product.add("handle");
        });
      });
      spreads.MailingAddressFragment = document.defineFragment("MailingAddressFragment", "MailingAddress", function(root) {
        root.add("id");
        root.add("address1");
        root.add("address2");
        root.add("city");
        root.add("company");
        root.add("country");
        root.add("firstName");
        root.add("formatted");
        root.add("lastName");
        root.add("latitude");
        root.add("longitude");
        root.add("phone");
        root.add("province");
        root.add("zip");
        root.add("name");
        root.add("countryCodeV2", {
          alias: "countryCode"
        });
        root.add("provinceCode");
      });
      spreads.CheckoutFragment = document.defineFragment("CheckoutFragment", "Checkout", function(root) {
        root.add("id");
        root.add("ready");
        root.add("requiresShipping");
        root.add("note");
        root.add("paymentDue");
        root.add("paymentDueV2", function(paymentDueV2) {
          paymentDueV2.add("amount");
          paymentDueV2.add("currencyCode");
        });
        root.add("webUrl");
        root.add("orderStatusUrl");
        root.add("taxExempt");
        root.add("taxesIncluded");
        root.add("currencyCode");
        root.add("totalTax");
        root.add("totalTaxV2", function(totalTaxV2) {
          totalTaxV2.add("amount");
          totalTaxV2.add("currencyCode");
        });
        root.add("lineItemsSubtotalPrice", function(lineItemsSubtotalPrice) {
          lineItemsSubtotalPrice.add("amount");
          lineItemsSubtotalPrice.add("currencyCode");
        });
        root.add("subtotalPrice");
        root.add("subtotalPriceV2", function(subtotalPriceV2) {
          subtotalPriceV2.add("amount");
          subtotalPriceV2.add("currencyCode");
        });
        root.add("totalPrice");
        root.add("totalPriceV2", function(totalPriceV2) {
          totalPriceV2.add("amount");
          totalPriceV2.add("currencyCode");
        });
        root.add("completedAt");
        root.add("createdAt");
        root.add("updatedAt");
        root.add("email");
        root.add("discountApplications", {
          args: {
            first: 10
          }
        }, function(discountApplications) {
          discountApplications.add("pageInfo", function(pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          discountApplications.add("edges", function(edges) {
            edges.add("node", function(node) {
              node.addFragment(spreads.DiscountApplicationFragment);
            });
          });
        });
        root.add("appliedGiftCards", function(appliedGiftCards) {
          appliedGiftCards.addFragment(spreads.AppliedGiftCardFragment);
        });
        root.add("shippingAddress", function(shippingAddress) {
          shippingAddress.addFragment(spreads.MailingAddressFragment);
        });
        root.add("shippingLine", function(shippingLine) {
          shippingLine.add("handle");
          shippingLine.add("price");
          shippingLine.add("priceV2", function(priceV2) {
            priceV2.add("amount");
            priceV2.add("currencyCode");
          });
          shippingLine.add("title");
        });
        root.add("customAttributes", function(customAttributes) {
          customAttributes.add("key");
          customAttributes.add("value");
        });
        root.add("order", function(order) {
          order.add("id");
          order.add("processedAt");
          order.add("orderNumber");
          order.add("subtotalPrice");
          order.add("subtotalPriceV2", function(subtotalPriceV2) {
            subtotalPriceV2.add("amount");
            subtotalPriceV2.add("currencyCode");
          });
          order.add("totalShippingPrice");
          order.add("totalShippingPriceV2", function(totalShippingPriceV2) {
            totalShippingPriceV2.add("amount");
            totalShippingPriceV2.add("currencyCode");
          });
          order.add("totalTax");
          order.add("totalTaxV2", function(totalTaxV2) {
            totalTaxV2.add("amount");
            totalTaxV2.add("currencyCode");
          });
          order.add("totalPrice");
          order.add("totalPriceV2", function(totalPriceV2) {
            totalPriceV2.add("amount");
            totalPriceV2.add("currencyCode");
          });
          order.add("currencyCode");
          order.add("totalRefunded");
          order.add("totalRefundedV2", function(totalRefundedV2) {
            totalRefundedV2.add("amount");
            totalRefundedV2.add("currencyCode");
          });
          order.add("customerUrl");
          order.add("shippingAddress", function(shippingAddress) {
            shippingAddress.addFragment(spreads.MailingAddressFragment);
          });
          order.add("lineItems", {
            args: {
              first: 250
            }
          }, function(lineItems) {
            lineItems.add("pageInfo", function(pageInfo) {
              pageInfo.add("hasNextPage");
              pageInfo.add("hasPreviousPage");
            });
            lineItems.add("edges", function(edges) {
              edges.add("cursor");
              edges.add("node", function(node) {
                node.add("title");
                node.add("variant", function(variant) {
                  variant.addFragment(spreads.VariantWithProductFragment);
                });
                node.add("quantity");
                node.add("customAttributes", function(customAttributes) {
                  customAttributes.add("key");
                  customAttributes.add("value");
                });
              });
            });
          });
        });
        root.add("lineItems", {
          args: {
            first: 250
          }
        }, function(lineItems) {
          lineItems.add("pageInfo", function(pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          lineItems.add("edges", function(edges) {
            edges.add("cursor");
            edges.add("node", function(node) {
              node.add("id");
              node.add("title");
              node.add("variant", function(variant) {
                variant.addFragment(spreads.VariantWithProductFragment);
              });
              node.add("quantity");
              node.add("customAttributes", function(customAttributes) {
                customAttributes.add("key");
                customAttributes.add("value");
              });
              node.add("discountAllocations", function(discountAllocations) {
                discountAllocations.add("allocatedAmount", function(allocatedAmount) {
                  allocatedAmount.add("amount");
                  allocatedAmount.add("currencyCode");
                });
                discountAllocations.add("discountApplication", function(discountApplication) {
                  discountApplication.addFragment(spreads.DiscountApplicationFragment);
                });
              });
            });
          });
        });
      });
      document.addQuery([variables.__defaultOperation__.id], function(root) {
        root.add("node", {
          args: {
            id: variables.__defaultOperation__.id
          }
        }, function(node) {
          node.addFragment(spreads.CheckoutFragment);
        });
      });
      return document;
    }
    function query$12(client) {
      var document = client.document();
      var spreads = {};
      var variables = {};
      variables.__defaultOperation__ = {};
      variables.__defaultOperation__.input = client.variable("input", "CheckoutCreateInput!");
      spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function(root) {
        root.add("id");
        root.add("title");
        root.add("price");
        root.add("priceV2", function(priceV2) {
          priceV2.add("amount");
          priceV2.add("currencyCode");
        });
        root.add("weight");
        root.add("availableForSale", {
          alias: "available"
        });
        root.add("sku");
        root.add("compareAtPrice");
        root.add("compareAtPriceV2", function(compareAtPriceV2) {
          compareAtPriceV2.add("amount");
          compareAtPriceV2.add("currencyCode");
        });
        root.add("image", function(image) {
          image.add("id");
          image.add("originalSrc", {
            alias: "src"
          });
          image.add("altText");
          image.add("width");
          image.add("height");
        });
        root.add("selectedOptions", function(selectedOptions) {
          selectedOptions.add("name");
          selectedOptions.add("value");
        });
        root.add("unitPrice", function(unitPrice) {
          unitPrice.add("amount");
          unitPrice.add("currencyCode");
        });
        root.add("unitPriceMeasurement", function(unitPriceMeasurement) {
          unitPriceMeasurement.add("measuredType");
          unitPriceMeasurement.add("quantityUnit");
          unitPriceMeasurement.add("quantityValue");
          unitPriceMeasurement.add("referenceUnit");
          unitPriceMeasurement.add("referenceValue");
        });
      });
      spreads.DiscountApplicationFragment = document.defineFragment("DiscountApplicationFragment", "DiscountApplication", function(root) {
        root.add("targetSelection");
        root.add("allocationMethod");
        root.add("targetType");
        root.add("value", function(value) {
          value.addInlineFragmentOn("MoneyV2", function(MoneyV22) {
            MoneyV22.add("amount");
            MoneyV22.add("currencyCode");
          });
          value.addInlineFragmentOn("PricingPercentageValue", function(PricingPercentageValue2) {
            PricingPercentageValue2.add("percentage");
          });
        });
        root.addInlineFragmentOn("ManualDiscountApplication", function(ManualDiscountApplication2) {
          ManualDiscountApplication2.add("title");
          ManualDiscountApplication2.add("description");
        });
        root.addInlineFragmentOn("DiscountCodeApplication", function(DiscountCodeApplication2) {
          DiscountCodeApplication2.add("code");
          DiscountCodeApplication2.add("applicable");
        });
        root.addInlineFragmentOn("ScriptDiscountApplication", function(ScriptDiscountApplication2) {
          ScriptDiscountApplication2.add("title");
        });
        root.addInlineFragmentOn("AutomaticDiscountApplication", function(AutomaticDiscountApplication2) {
          AutomaticDiscountApplication2.add("title");
        });
      });
      spreads.AppliedGiftCardFragment = document.defineFragment("AppliedGiftCardFragment", "AppliedGiftCard", function(root) {
        root.add("amountUsedV2", function(amountUsedV2) {
          amountUsedV2.add("amount");
          amountUsedV2.add("currencyCode");
        });
        root.add("balanceV2", function(balanceV2) {
          balanceV2.add("amount");
          balanceV2.add("currencyCode");
        });
        root.add("presentmentAmountUsed", function(presentmentAmountUsed) {
          presentmentAmountUsed.add("amount");
          presentmentAmountUsed.add("currencyCode");
        });
        root.add("id");
        root.add("lastCharacters");
      });
      spreads.VariantWithProductFragment = document.defineFragment("VariantWithProductFragment", "ProductVariant", function(root) {
        root.addFragment(spreads.VariantFragment);
        root.add("product", function(product) {
          product.add("id");
          product.add("handle");
        });
      });
      spreads.UserErrorFragment = document.defineFragment("UserErrorFragment", "UserError", function(root) {
        root.add("field");
        root.add("message");
      });
      spreads.CheckoutUserErrorFragment = document.defineFragment("CheckoutUserErrorFragment", "CheckoutUserError", function(root) {
        root.add("field");
        root.add("message");
        root.add("code");
      });
      spreads.MailingAddressFragment = document.defineFragment("MailingAddressFragment", "MailingAddress", function(root) {
        root.add("id");
        root.add("address1");
        root.add("address2");
        root.add("city");
        root.add("company");
        root.add("country");
        root.add("firstName");
        root.add("formatted");
        root.add("lastName");
        root.add("latitude");
        root.add("longitude");
        root.add("phone");
        root.add("province");
        root.add("zip");
        root.add("name");
        root.add("countryCodeV2", {
          alias: "countryCode"
        });
        root.add("provinceCode");
      });
      spreads.CheckoutFragment = document.defineFragment("CheckoutFragment", "Checkout", function(root) {
        root.add("id");
        root.add("ready");
        root.add("requiresShipping");
        root.add("note");
        root.add("paymentDue");
        root.add("paymentDueV2", function(paymentDueV2) {
          paymentDueV2.add("amount");
          paymentDueV2.add("currencyCode");
        });
        root.add("webUrl");
        root.add("orderStatusUrl");
        root.add("taxExempt");
        root.add("taxesIncluded");
        root.add("currencyCode");
        root.add("totalTax");
        root.add("totalTaxV2", function(totalTaxV2) {
          totalTaxV2.add("amount");
          totalTaxV2.add("currencyCode");
        });
        root.add("lineItemsSubtotalPrice", function(lineItemsSubtotalPrice) {
          lineItemsSubtotalPrice.add("amount");
          lineItemsSubtotalPrice.add("currencyCode");
        });
        root.add("subtotalPrice");
        root.add("subtotalPriceV2", function(subtotalPriceV2) {
          subtotalPriceV2.add("amount");
          subtotalPriceV2.add("currencyCode");
        });
        root.add("totalPrice");
        root.add("totalPriceV2", function(totalPriceV2) {
          totalPriceV2.add("amount");
          totalPriceV2.add("currencyCode");
        });
        root.add("completedAt");
        root.add("createdAt");
        root.add("updatedAt");
        root.add("email");
        root.add("discountApplications", {
          args: {
            first: 10
          }
        }, function(discountApplications) {
          discountApplications.add("pageInfo", function(pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          discountApplications.add("edges", function(edges) {
            edges.add("node", function(node) {
              node.addFragment(spreads.DiscountApplicationFragment);
            });
          });
        });
        root.add("appliedGiftCards", function(appliedGiftCards) {
          appliedGiftCards.addFragment(spreads.AppliedGiftCardFragment);
        });
        root.add("shippingAddress", function(shippingAddress) {
          shippingAddress.addFragment(spreads.MailingAddressFragment);
        });
        root.add("shippingLine", function(shippingLine) {
          shippingLine.add("handle");
          shippingLine.add("price");
          shippingLine.add("priceV2", function(priceV2) {
            priceV2.add("amount");
            priceV2.add("currencyCode");
          });
          shippingLine.add("title");
        });
        root.add("customAttributes", function(customAttributes) {
          customAttributes.add("key");
          customAttributes.add("value");
        });
        root.add("order", function(order) {
          order.add("id");
          order.add("processedAt");
          order.add("orderNumber");
          order.add("subtotalPrice");
          order.add("subtotalPriceV2", function(subtotalPriceV2) {
            subtotalPriceV2.add("amount");
            subtotalPriceV2.add("currencyCode");
          });
          order.add("totalShippingPrice");
          order.add("totalShippingPriceV2", function(totalShippingPriceV2) {
            totalShippingPriceV2.add("amount");
            totalShippingPriceV2.add("currencyCode");
          });
          order.add("totalTax");
          order.add("totalTaxV2", function(totalTaxV2) {
            totalTaxV2.add("amount");
            totalTaxV2.add("currencyCode");
          });
          order.add("totalPrice");
          order.add("totalPriceV2", function(totalPriceV2) {
            totalPriceV2.add("amount");
            totalPriceV2.add("currencyCode");
          });
          order.add("currencyCode");
          order.add("totalRefunded");
          order.add("totalRefundedV2", function(totalRefundedV2) {
            totalRefundedV2.add("amount");
            totalRefundedV2.add("currencyCode");
          });
          order.add("customerUrl");
          order.add("shippingAddress", function(shippingAddress) {
            shippingAddress.addFragment(spreads.MailingAddressFragment);
          });
          order.add("lineItems", {
            args: {
              first: 250
            }
          }, function(lineItems) {
            lineItems.add("pageInfo", function(pageInfo) {
              pageInfo.add("hasNextPage");
              pageInfo.add("hasPreviousPage");
            });
            lineItems.add("edges", function(edges) {
              edges.add("cursor");
              edges.add("node", function(node) {
                node.add("title");
                node.add("variant", function(variant) {
                  variant.addFragment(spreads.VariantWithProductFragment);
                });
                node.add("quantity");
                node.add("customAttributes", function(customAttributes) {
                  customAttributes.add("key");
                  customAttributes.add("value");
                });
              });
            });
          });
        });
        root.add("lineItems", {
          args: {
            first: 250
          }
        }, function(lineItems) {
          lineItems.add("pageInfo", function(pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          lineItems.add("edges", function(edges) {
            edges.add("cursor");
            edges.add("node", function(node) {
              node.add("id");
              node.add("title");
              node.add("variant", function(variant) {
                variant.addFragment(spreads.VariantWithProductFragment);
              });
              node.add("quantity");
              node.add("customAttributes", function(customAttributes) {
                customAttributes.add("key");
                customAttributes.add("value");
              });
              node.add("discountAllocations", function(discountAllocations) {
                discountAllocations.add("allocatedAmount", function(allocatedAmount) {
                  allocatedAmount.add("amount");
                  allocatedAmount.add("currencyCode");
                });
                discountAllocations.add("discountApplication", function(discountApplication) {
                  discountApplication.addFragment(spreads.DiscountApplicationFragment);
                });
              });
            });
          });
        });
      });
      document.addMutation([variables.__defaultOperation__.input], function(root) {
        root.add("checkoutCreate", {
          args: {
            input: variables.__defaultOperation__.input
          }
        }, function(checkoutCreate) {
          checkoutCreate.add("userErrors", function(userErrors) {
            userErrors.addFragment(spreads.UserErrorFragment);
          });
          checkoutCreate.add("checkoutUserErrors", function(checkoutUserErrors) {
            checkoutUserErrors.addFragment(spreads.CheckoutUserErrorFragment);
          });
          checkoutCreate.add("checkout", function(checkout) {
            checkout.addFragment(spreads.CheckoutFragment);
          });
        });
      });
      return document;
    }
    function query$13(client) {
      var document = client.document();
      var spreads = {};
      var variables = {};
      variables.__defaultOperation__ = {};
      variables.__defaultOperation__.checkoutId = client.variable("checkoutId", "ID!");
      variables.__defaultOperation__.lineItems = client.variable("lineItems", "[CheckoutLineItemInput!]!");
      spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function(root) {
        root.add("id");
        root.add("title");
        root.add("price");
        root.add("priceV2", function(priceV2) {
          priceV2.add("amount");
          priceV2.add("currencyCode");
        });
        root.add("weight");
        root.add("availableForSale", {
          alias: "available"
        });
        root.add("sku");
        root.add("compareAtPrice");
        root.add("compareAtPriceV2", function(compareAtPriceV2) {
          compareAtPriceV2.add("amount");
          compareAtPriceV2.add("currencyCode");
        });
        root.add("image", function(image) {
          image.add("id");
          image.add("originalSrc", {
            alias: "src"
          });
          image.add("altText");
          image.add("width");
          image.add("height");
        });
        root.add("selectedOptions", function(selectedOptions) {
          selectedOptions.add("name");
          selectedOptions.add("value");
        });
        root.add("unitPrice", function(unitPrice) {
          unitPrice.add("amount");
          unitPrice.add("currencyCode");
        });
        root.add("unitPriceMeasurement", function(unitPriceMeasurement) {
          unitPriceMeasurement.add("measuredType");
          unitPriceMeasurement.add("quantityUnit");
          unitPriceMeasurement.add("quantityValue");
          unitPriceMeasurement.add("referenceUnit");
          unitPriceMeasurement.add("referenceValue");
        });
      });
      spreads.DiscountApplicationFragment = document.defineFragment("DiscountApplicationFragment", "DiscountApplication", function(root) {
        root.add("targetSelection");
        root.add("allocationMethod");
        root.add("targetType");
        root.add("value", function(value) {
          value.addInlineFragmentOn("MoneyV2", function(MoneyV22) {
            MoneyV22.add("amount");
            MoneyV22.add("currencyCode");
          });
          value.addInlineFragmentOn("PricingPercentageValue", function(PricingPercentageValue2) {
            PricingPercentageValue2.add("percentage");
          });
        });
        root.addInlineFragmentOn("ManualDiscountApplication", function(ManualDiscountApplication2) {
          ManualDiscountApplication2.add("title");
          ManualDiscountApplication2.add("description");
        });
        root.addInlineFragmentOn("DiscountCodeApplication", function(DiscountCodeApplication2) {
          DiscountCodeApplication2.add("code");
          DiscountCodeApplication2.add("applicable");
        });
        root.addInlineFragmentOn("ScriptDiscountApplication", function(ScriptDiscountApplication2) {
          ScriptDiscountApplication2.add("title");
        });
        root.addInlineFragmentOn("AutomaticDiscountApplication", function(AutomaticDiscountApplication2) {
          AutomaticDiscountApplication2.add("title");
        });
      });
      spreads.AppliedGiftCardFragment = document.defineFragment("AppliedGiftCardFragment", "AppliedGiftCard", function(root) {
        root.add("amountUsedV2", function(amountUsedV2) {
          amountUsedV2.add("amount");
          amountUsedV2.add("currencyCode");
        });
        root.add("balanceV2", function(balanceV2) {
          balanceV2.add("amount");
          balanceV2.add("currencyCode");
        });
        root.add("presentmentAmountUsed", function(presentmentAmountUsed) {
          presentmentAmountUsed.add("amount");
          presentmentAmountUsed.add("currencyCode");
        });
        root.add("id");
        root.add("lastCharacters");
      });
      spreads.VariantWithProductFragment = document.defineFragment("VariantWithProductFragment", "ProductVariant", function(root) {
        root.addFragment(spreads.VariantFragment);
        root.add("product", function(product) {
          product.add("id");
          product.add("handle");
        });
      });
      spreads.UserErrorFragment = document.defineFragment("UserErrorFragment", "UserError", function(root) {
        root.add("field");
        root.add("message");
      });
      spreads.CheckoutUserErrorFragment = document.defineFragment("CheckoutUserErrorFragment", "CheckoutUserError", function(root) {
        root.add("field");
        root.add("message");
        root.add("code");
      });
      spreads.MailingAddressFragment = document.defineFragment("MailingAddressFragment", "MailingAddress", function(root) {
        root.add("id");
        root.add("address1");
        root.add("address2");
        root.add("city");
        root.add("company");
        root.add("country");
        root.add("firstName");
        root.add("formatted");
        root.add("lastName");
        root.add("latitude");
        root.add("longitude");
        root.add("phone");
        root.add("province");
        root.add("zip");
        root.add("name");
        root.add("countryCodeV2", {
          alias: "countryCode"
        });
        root.add("provinceCode");
      });
      spreads.CheckoutFragment = document.defineFragment("CheckoutFragment", "Checkout", function(root) {
        root.add("id");
        root.add("ready");
        root.add("requiresShipping");
        root.add("note");
        root.add("paymentDue");
        root.add("paymentDueV2", function(paymentDueV2) {
          paymentDueV2.add("amount");
          paymentDueV2.add("currencyCode");
        });
        root.add("webUrl");
        root.add("orderStatusUrl");
        root.add("taxExempt");
        root.add("taxesIncluded");
        root.add("currencyCode");
        root.add("totalTax");
        root.add("totalTaxV2", function(totalTaxV2) {
          totalTaxV2.add("amount");
          totalTaxV2.add("currencyCode");
        });
        root.add("lineItemsSubtotalPrice", function(lineItemsSubtotalPrice) {
          lineItemsSubtotalPrice.add("amount");
          lineItemsSubtotalPrice.add("currencyCode");
        });
        root.add("subtotalPrice");
        root.add("subtotalPriceV2", function(subtotalPriceV2) {
          subtotalPriceV2.add("amount");
          subtotalPriceV2.add("currencyCode");
        });
        root.add("totalPrice");
        root.add("totalPriceV2", function(totalPriceV2) {
          totalPriceV2.add("amount");
          totalPriceV2.add("currencyCode");
        });
        root.add("completedAt");
        root.add("createdAt");
        root.add("updatedAt");
        root.add("email");
        root.add("discountApplications", {
          args: {
            first: 10
          }
        }, function(discountApplications) {
          discountApplications.add("pageInfo", function(pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          discountApplications.add("edges", function(edges) {
            edges.add("node", function(node) {
              node.addFragment(spreads.DiscountApplicationFragment);
            });
          });
        });
        root.add("appliedGiftCards", function(appliedGiftCards) {
          appliedGiftCards.addFragment(spreads.AppliedGiftCardFragment);
        });
        root.add("shippingAddress", function(shippingAddress) {
          shippingAddress.addFragment(spreads.MailingAddressFragment);
        });
        root.add("shippingLine", function(shippingLine) {
          shippingLine.add("handle");
          shippingLine.add("price");
          shippingLine.add("priceV2", function(priceV2) {
            priceV2.add("amount");
            priceV2.add("currencyCode");
          });
          shippingLine.add("title");
        });
        root.add("customAttributes", function(customAttributes) {
          customAttributes.add("key");
          customAttributes.add("value");
        });
        root.add("order", function(order) {
          order.add("id");
          order.add("processedAt");
          order.add("orderNumber");
          order.add("subtotalPrice");
          order.add("subtotalPriceV2", function(subtotalPriceV2) {
            subtotalPriceV2.add("amount");
            subtotalPriceV2.add("currencyCode");
          });
          order.add("totalShippingPrice");
          order.add("totalShippingPriceV2", function(totalShippingPriceV2) {
            totalShippingPriceV2.add("amount");
            totalShippingPriceV2.add("currencyCode");
          });
          order.add("totalTax");
          order.add("totalTaxV2", function(totalTaxV2) {
            totalTaxV2.add("amount");
            totalTaxV2.add("currencyCode");
          });
          order.add("totalPrice");
          order.add("totalPriceV2", function(totalPriceV2) {
            totalPriceV2.add("amount");
            totalPriceV2.add("currencyCode");
          });
          order.add("currencyCode");
          order.add("totalRefunded");
          order.add("totalRefundedV2", function(totalRefundedV2) {
            totalRefundedV2.add("amount");
            totalRefundedV2.add("currencyCode");
          });
          order.add("customerUrl");
          order.add("shippingAddress", function(shippingAddress) {
            shippingAddress.addFragment(spreads.MailingAddressFragment);
          });
          order.add("lineItems", {
            args: {
              first: 250
            }
          }, function(lineItems) {
            lineItems.add("pageInfo", function(pageInfo) {
              pageInfo.add("hasNextPage");
              pageInfo.add("hasPreviousPage");
            });
            lineItems.add("edges", function(edges) {
              edges.add("cursor");
              edges.add("node", function(node) {
                node.add("title");
                node.add("variant", function(variant) {
                  variant.addFragment(spreads.VariantWithProductFragment);
                });
                node.add("quantity");
                node.add("customAttributes", function(customAttributes) {
                  customAttributes.add("key");
                  customAttributes.add("value");
                });
              });
            });
          });
        });
        root.add("lineItems", {
          args: {
            first: 250
          }
        }, function(lineItems) {
          lineItems.add("pageInfo", function(pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          lineItems.add("edges", function(edges) {
            edges.add("cursor");
            edges.add("node", function(node) {
              node.add("id");
              node.add("title");
              node.add("variant", function(variant) {
                variant.addFragment(spreads.VariantWithProductFragment);
              });
              node.add("quantity");
              node.add("customAttributes", function(customAttributes) {
                customAttributes.add("key");
                customAttributes.add("value");
              });
              node.add("discountAllocations", function(discountAllocations) {
                discountAllocations.add("allocatedAmount", function(allocatedAmount) {
                  allocatedAmount.add("amount");
                  allocatedAmount.add("currencyCode");
                });
                discountAllocations.add("discountApplication", function(discountApplication) {
                  discountApplication.addFragment(spreads.DiscountApplicationFragment);
                });
              });
            });
          });
        });
      });
      document.addMutation([variables.__defaultOperation__.checkoutId, variables.__defaultOperation__.lineItems], function(root) {
        root.add("checkoutLineItemsAdd", {
          args: {
            checkoutId: variables.__defaultOperation__.checkoutId,
            lineItems: variables.__defaultOperation__.lineItems
          }
        }, function(checkoutLineItemsAdd) {
          checkoutLineItemsAdd.add("userErrors", function(userErrors) {
            userErrors.addFragment(spreads.UserErrorFragment);
          });
          checkoutLineItemsAdd.add("checkoutUserErrors", function(checkoutUserErrors) {
            checkoutUserErrors.addFragment(spreads.CheckoutUserErrorFragment);
          });
          checkoutLineItemsAdd.add("checkout", function(checkout) {
            checkout.addFragment(spreads.CheckoutFragment);
          });
        });
      });
      return document;
    }
    function query$14(client) {
      var document = client.document();
      var spreads = {};
      var variables = {};
      variables.__defaultOperation__ = {};
      variables.__defaultOperation__.checkoutId = client.variable("checkoutId", "ID!");
      variables.__defaultOperation__.lineItemIds = client.variable("lineItemIds", "[ID!]!");
      spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function(root) {
        root.add("id");
        root.add("title");
        root.add("price");
        root.add("priceV2", function(priceV2) {
          priceV2.add("amount");
          priceV2.add("currencyCode");
        });
        root.add("weight");
        root.add("availableForSale", {
          alias: "available"
        });
        root.add("sku");
        root.add("compareAtPrice");
        root.add("compareAtPriceV2", function(compareAtPriceV2) {
          compareAtPriceV2.add("amount");
          compareAtPriceV2.add("currencyCode");
        });
        root.add("image", function(image) {
          image.add("id");
          image.add("originalSrc", {
            alias: "src"
          });
          image.add("altText");
          image.add("width");
          image.add("height");
        });
        root.add("selectedOptions", function(selectedOptions) {
          selectedOptions.add("name");
          selectedOptions.add("value");
        });
        root.add("unitPrice", function(unitPrice) {
          unitPrice.add("amount");
          unitPrice.add("currencyCode");
        });
        root.add("unitPriceMeasurement", function(unitPriceMeasurement) {
          unitPriceMeasurement.add("measuredType");
          unitPriceMeasurement.add("quantityUnit");
          unitPriceMeasurement.add("quantityValue");
          unitPriceMeasurement.add("referenceUnit");
          unitPriceMeasurement.add("referenceValue");
        });
      });
      spreads.DiscountApplicationFragment = document.defineFragment("DiscountApplicationFragment", "DiscountApplication", function(root) {
        root.add("targetSelection");
        root.add("allocationMethod");
        root.add("targetType");
        root.add("value", function(value) {
          value.addInlineFragmentOn("MoneyV2", function(MoneyV22) {
            MoneyV22.add("amount");
            MoneyV22.add("currencyCode");
          });
          value.addInlineFragmentOn("PricingPercentageValue", function(PricingPercentageValue2) {
            PricingPercentageValue2.add("percentage");
          });
        });
        root.addInlineFragmentOn("ManualDiscountApplication", function(ManualDiscountApplication2) {
          ManualDiscountApplication2.add("title");
          ManualDiscountApplication2.add("description");
        });
        root.addInlineFragmentOn("DiscountCodeApplication", function(DiscountCodeApplication2) {
          DiscountCodeApplication2.add("code");
          DiscountCodeApplication2.add("applicable");
        });
        root.addInlineFragmentOn("ScriptDiscountApplication", function(ScriptDiscountApplication2) {
          ScriptDiscountApplication2.add("title");
        });
        root.addInlineFragmentOn("AutomaticDiscountApplication", function(AutomaticDiscountApplication2) {
          AutomaticDiscountApplication2.add("title");
        });
      });
      spreads.AppliedGiftCardFragment = document.defineFragment("AppliedGiftCardFragment", "AppliedGiftCard", function(root) {
        root.add("amountUsedV2", function(amountUsedV2) {
          amountUsedV2.add("amount");
          amountUsedV2.add("currencyCode");
        });
        root.add("balanceV2", function(balanceV2) {
          balanceV2.add("amount");
          balanceV2.add("currencyCode");
        });
        root.add("presentmentAmountUsed", function(presentmentAmountUsed) {
          presentmentAmountUsed.add("amount");
          presentmentAmountUsed.add("currencyCode");
        });
        root.add("id");
        root.add("lastCharacters");
      });
      spreads.VariantWithProductFragment = document.defineFragment("VariantWithProductFragment", "ProductVariant", function(root) {
        root.addFragment(spreads.VariantFragment);
        root.add("product", function(product) {
          product.add("id");
          product.add("handle");
        });
      });
      spreads.UserErrorFragment = document.defineFragment("UserErrorFragment", "UserError", function(root) {
        root.add("field");
        root.add("message");
      });
      spreads.CheckoutUserErrorFragment = document.defineFragment("CheckoutUserErrorFragment", "CheckoutUserError", function(root) {
        root.add("field");
        root.add("message");
        root.add("code");
      });
      spreads.MailingAddressFragment = document.defineFragment("MailingAddressFragment", "MailingAddress", function(root) {
        root.add("id");
        root.add("address1");
        root.add("address2");
        root.add("city");
        root.add("company");
        root.add("country");
        root.add("firstName");
        root.add("formatted");
        root.add("lastName");
        root.add("latitude");
        root.add("longitude");
        root.add("phone");
        root.add("province");
        root.add("zip");
        root.add("name");
        root.add("countryCodeV2", {
          alias: "countryCode"
        });
        root.add("provinceCode");
      });
      spreads.CheckoutFragment = document.defineFragment("CheckoutFragment", "Checkout", function(root) {
        root.add("id");
        root.add("ready");
        root.add("requiresShipping");
        root.add("note");
        root.add("paymentDue");
        root.add("paymentDueV2", function(paymentDueV2) {
          paymentDueV2.add("amount");
          paymentDueV2.add("currencyCode");
        });
        root.add("webUrl");
        root.add("orderStatusUrl");
        root.add("taxExempt");
        root.add("taxesIncluded");
        root.add("currencyCode");
        root.add("totalTax");
        root.add("totalTaxV2", function(totalTaxV2) {
          totalTaxV2.add("amount");
          totalTaxV2.add("currencyCode");
        });
        root.add("lineItemsSubtotalPrice", function(lineItemsSubtotalPrice) {
          lineItemsSubtotalPrice.add("amount");
          lineItemsSubtotalPrice.add("currencyCode");
        });
        root.add("subtotalPrice");
        root.add("subtotalPriceV2", function(subtotalPriceV2) {
          subtotalPriceV2.add("amount");
          subtotalPriceV2.add("currencyCode");
        });
        root.add("totalPrice");
        root.add("totalPriceV2", function(totalPriceV2) {
          totalPriceV2.add("amount");
          totalPriceV2.add("currencyCode");
        });
        root.add("completedAt");
        root.add("createdAt");
        root.add("updatedAt");
        root.add("email");
        root.add("discountApplications", {
          args: {
            first: 10
          }
        }, function(discountApplications) {
          discountApplications.add("pageInfo", function(pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          discountApplications.add("edges", function(edges) {
            edges.add("node", function(node) {
              node.addFragment(spreads.DiscountApplicationFragment);
            });
          });
        });
        root.add("appliedGiftCards", function(appliedGiftCards) {
          appliedGiftCards.addFragment(spreads.AppliedGiftCardFragment);
        });
        root.add("shippingAddress", function(shippingAddress) {
          shippingAddress.addFragment(spreads.MailingAddressFragment);
        });
        root.add("shippingLine", function(shippingLine) {
          shippingLine.add("handle");
          shippingLine.add("price");
          shippingLine.add("priceV2", function(priceV2) {
            priceV2.add("amount");
            priceV2.add("currencyCode");
          });
          shippingLine.add("title");
        });
        root.add("customAttributes", function(customAttributes) {
          customAttributes.add("key");
          customAttributes.add("value");
        });
        root.add("order", function(order) {
          order.add("id");
          order.add("processedAt");
          order.add("orderNumber");
          order.add("subtotalPrice");
          order.add("subtotalPriceV2", function(subtotalPriceV2) {
            subtotalPriceV2.add("amount");
            subtotalPriceV2.add("currencyCode");
          });
          order.add("totalShippingPrice");
          order.add("totalShippingPriceV2", function(totalShippingPriceV2) {
            totalShippingPriceV2.add("amount");
            totalShippingPriceV2.add("currencyCode");
          });
          order.add("totalTax");
          order.add("totalTaxV2", function(totalTaxV2) {
            totalTaxV2.add("amount");
            totalTaxV2.add("currencyCode");
          });
          order.add("totalPrice");
          order.add("totalPriceV2", function(totalPriceV2) {
            totalPriceV2.add("amount");
            totalPriceV2.add("currencyCode");
          });
          order.add("currencyCode");
          order.add("totalRefunded");
          order.add("totalRefundedV2", function(totalRefundedV2) {
            totalRefundedV2.add("amount");
            totalRefundedV2.add("currencyCode");
          });
          order.add("customerUrl");
          order.add("shippingAddress", function(shippingAddress) {
            shippingAddress.addFragment(spreads.MailingAddressFragment);
          });
          order.add("lineItems", {
            args: {
              first: 250
            }
          }, function(lineItems) {
            lineItems.add("pageInfo", function(pageInfo) {
              pageInfo.add("hasNextPage");
              pageInfo.add("hasPreviousPage");
            });
            lineItems.add("edges", function(edges) {
              edges.add("cursor");
              edges.add("node", function(node) {
                node.add("title");
                node.add("variant", function(variant) {
                  variant.addFragment(spreads.VariantWithProductFragment);
                });
                node.add("quantity");
                node.add("customAttributes", function(customAttributes) {
                  customAttributes.add("key");
                  customAttributes.add("value");
                });
              });
            });
          });
        });
        root.add("lineItems", {
          args: {
            first: 250
          }
        }, function(lineItems) {
          lineItems.add("pageInfo", function(pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          lineItems.add("edges", function(edges) {
            edges.add("cursor");
            edges.add("node", function(node) {
              node.add("id");
              node.add("title");
              node.add("variant", function(variant) {
                variant.addFragment(spreads.VariantWithProductFragment);
              });
              node.add("quantity");
              node.add("customAttributes", function(customAttributes) {
                customAttributes.add("key");
                customAttributes.add("value");
              });
              node.add("discountAllocations", function(discountAllocations) {
                discountAllocations.add("allocatedAmount", function(allocatedAmount) {
                  allocatedAmount.add("amount");
                  allocatedAmount.add("currencyCode");
                });
                discountAllocations.add("discountApplication", function(discountApplication) {
                  discountApplication.addFragment(spreads.DiscountApplicationFragment);
                });
              });
            });
          });
        });
      });
      document.addMutation([variables.__defaultOperation__.checkoutId, variables.__defaultOperation__.lineItemIds], function(root) {
        root.add("checkoutLineItemsRemove", {
          args: {
            checkoutId: variables.__defaultOperation__.checkoutId,
            lineItemIds: variables.__defaultOperation__.lineItemIds
          }
        }, function(checkoutLineItemsRemove) {
          checkoutLineItemsRemove.add("userErrors", function(userErrors) {
            userErrors.addFragment(spreads.UserErrorFragment);
          });
          checkoutLineItemsRemove.add("checkoutUserErrors", function(checkoutUserErrors) {
            checkoutUserErrors.addFragment(spreads.CheckoutUserErrorFragment);
          });
          checkoutLineItemsRemove.add("checkout", function(checkout) {
            checkout.addFragment(spreads.CheckoutFragment);
          });
        });
      });
      return document;
    }
    function query$15(client) {
      var document = client.document();
      var spreads = {};
      var variables = {};
      variables.__defaultOperation__ = {};
      variables.__defaultOperation__.checkoutId = client.variable("checkoutId", "ID!");
      variables.__defaultOperation__.lineItems = client.variable("lineItems", "[CheckoutLineItemInput!]!");
      spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function(root) {
        root.add("id");
        root.add("title");
        root.add("price");
        root.add("priceV2", function(priceV2) {
          priceV2.add("amount");
          priceV2.add("currencyCode");
        });
        root.add("weight");
        root.add("availableForSale", {
          alias: "available"
        });
        root.add("sku");
        root.add("compareAtPrice");
        root.add("compareAtPriceV2", function(compareAtPriceV2) {
          compareAtPriceV2.add("amount");
          compareAtPriceV2.add("currencyCode");
        });
        root.add("image", function(image) {
          image.add("id");
          image.add("originalSrc", {
            alias: "src"
          });
          image.add("altText");
          image.add("width");
          image.add("height");
        });
        root.add("selectedOptions", function(selectedOptions) {
          selectedOptions.add("name");
          selectedOptions.add("value");
        });
        root.add("unitPrice", function(unitPrice) {
          unitPrice.add("amount");
          unitPrice.add("currencyCode");
        });
        root.add("unitPriceMeasurement", function(unitPriceMeasurement) {
          unitPriceMeasurement.add("measuredType");
          unitPriceMeasurement.add("quantityUnit");
          unitPriceMeasurement.add("quantityValue");
          unitPriceMeasurement.add("referenceUnit");
          unitPriceMeasurement.add("referenceValue");
        });
      });
      spreads.DiscountApplicationFragment = document.defineFragment("DiscountApplicationFragment", "DiscountApplication", function(root) {
        root.add("targetSelection");
        root.add("allocationMethod");
        root.add("targetType");
        root.add("value", function(value) {
          value.addInlineFragmentOn("MoneyV2", function(MoneyV22) {
            MoneyV22.add("amount");
            MoneyV22.add("currencyCode");
          });
          value.addInlineFragmentOn("PricingPercentageValue", function(PricingPercentageValue2) {
            PricingPercentageValue2.add("percentage");
          });
        });
        root.addInlineFragmentOn("ManualDiscountApplication", function(ManualDiscountApplication2) {
          ManualDiscountApplication2.add("title");
          ManualDiscountApplication2.add("description");
        });
        root.addInlineFragmentOn("DiscountCodeApplication", function(DiscountCodeApplication2) {
          DiscountCodeApplication2.add("code");
          DiscountCodeApplication2.add("applicable");
        });
        root.addInlineFragmentOn("ScriptDiscountApplication", function(ScriptDiscountApplication2) {
          ScriptDiscountApplication2.add("title");
        });
        root.addInlineFragmentOn("AutomaticDiscountApplication", function(AutomaticDiscountApplication2) {
          AutomaticDiscountApplication2.add("title");
        });
      });
      spreads.AppliedGiftCardFragment = document.defineFragment("AppliedGiftCardFragment", "AppliedGiftCard", function(root) {
        root.add("amountUsedV2", function(amountUsedV2) {
          amountUsedV2.add("amount");
          amountUsedV2.add("currencyCode");
        });
        root.add("balanceV2", function(balanceV2) {
          balanceV2.add("amount");
          balanceV2.add("currencyCode");
        });
        root.add("presentmentAmountUsed", function(presentmentAmountUsed) {
          presentmentAmountUsed.add("amount");
          presentmentAmountUsed.add("currencyCode");
        });
        root.add("id");
        root.add("lastCharacters");
      });
      spreads.VariantWithProductFragment = document.defineFragment("VariantWithProductFragment", "ProductVariant", function(root) {
        root.addFragment(spreads.VariantFragment);
        root.add("product", function(product) {
          product.add("id");
          product.add("handle");
        });
      });
      spreads.CheckoutUserErrorFragment = document.defineFragment("CheckoutUserErrorFragment", "CheckoutUserError", function(root) {
        root.add("field");
        root.add("message");
        root.add("code");
      });
      spreads.MailingAddressFragment = document.defineFragment("MailingAddressFragment", "MailingAddress", function(root) {
        root.add("id");
        root.add("address1");
        root.add("address2");
        root.add("city");
        root.add("company");
        root.add("country");
        root.add("firstName");
        root.add("formatted");
        root.add("lastName");
        root.add("latitude");
        root.add("longitude");
        root.add("phone");
        root.add("province");
        root.add("zip");
        root.add("name");
        root.add("countryCodeV2", {
          alias: "countryCode"
        });
        root.add("provinceCode");
      });
      spreads.CheckoutFragment = document.defineFragment("CheckoutFragment", "Checkout", function(root) {
        root.add("id");
        root.add("ready");
        root.add("requiresShipping");
        root.add("note");
        root.add("paymentDue");
        root.add("paymentDueV2", function(paymentDueV2) {
          paymentDueV2.add("amount");
          paymentDueV2.add("currencyCode");
        });
        root.add("webUrl");
        root.add("orderStatusUrl");
        root.add("taxExempt");
        root.add("taxesIncluded");
        root.add("currencyCode");
        root.add("totalTax");
        root.add("totalTaxV2", function(totalTaxV2) {
          totalTaxV2.add("amount");
          totalTaxV2.add("currencyCode");
        });
        root.add("lineItemsSubtotalPrice", function(lineItemsSubtotalPrice) {
          lineItemsSubtotalPrice.add("amount");
          lineItemsSubtotalPrice.add("currencyCode");
        });
        root.add("subtotalPrice");
        root.add("subtotalPriceV2", function(subtotalPriceV2) {
          subtotalPriceV2.add("amount");
          subtotalPriceV2.add("currencyCode");
        });
        root.add("totalPrice");
        root.add("totalPriceV2", function(totalPriceV2) {
          totalPriceV2.add("amount");
          totalPriceV2.add("currencyCode");
        });
        root.add("completedAt");
        root.add("createdAt");
        root.add("updatedAt");
        root.add("email");
        root.add("discountApplications", {
          args: {
            first: 10
          }
        }, function(discountApplications) {
          discountApplications.add("pageInfo", function(pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          discountApplications.add("edges", function(edges) {
            edges.add("node", function(node) {
              node.addFragment(spreads.DiscountApplicationFragment);
            });
          });
        });
        root.add("appliedGiftCards", function(appliedGiftCards) {
          appliedGiftCards.addFragment(spreads.AppliedGiftCardFragment);
        });
        root.add("shippingAddress", function(shippingAddress) {
          shippingAddress.addFragment(spreads.MailingAddressFragment);
        });
        root.add("shippingLine", function(shippingLine) {
          shippingLine.add("handle");
          shippingLine.add("price");
          shippingLine.add("priceV2", function(priceV2) {
            priceV2.add("amount");
            priceV2.add("currencyCode");
          });
          shippingLine.add("title");
        });
        root.add("customAttributes", function(customAttributes) {
          customAttributes.add("key");
          customAttributes.add("value");
        });
        root.add("order", function(order) {
          order.add("id");
          order.add("processedAt");
          order.add("orderNumber");
          order.add("subtotalPrice");
          order.add("subtotalPriceV2", function(subtotalPriceV2) {
            subtotalPriceV2.add("amount");
            subtotalPriceV2.add("currencyCode");
          });
          order.add("totalShippingPrice");
          order.add("totalShippingPriceV2", function(totalShippingPriceV2) {
            totalShippingPriceV2.add("amount");
            totalShippingPriceV2.add("currencyCode");
          });
          order.add("totalTax");
          order.add("totalTaxV2", function(totalTaxV2) {
            totalTaxV2.add("amount");
            totalTaxV2.add("currencyCode");
          });
          order.add("totalPrice");
          order.add("totalPriceV2", function(totalPriceV2) {
            totalPriceV2.add("amount");
            totalPriceV2.add("currencyCode");
          });
          order.add("currencyCode");
          order.add("totalRefunded");
          order.add("totalRefundedV2", function(totalRefundedV2) {
            totalRefundedV2.add("amount");
            totalRefundedV2.add("currencyCode");
          });
          order.add("customerUrl");
          order.add("shippingAddress", function(shippingAddress) {
            shippingAddress.addFragment(spreads.MailingAddressFragment);
          });
          order.add("lineItems", {
            args: {
              first: 250
            }
          }, function(lineItems) {
            lineItems.add("pageInfo", function(pageInfo) {
              pageInfo.add("hasNextPage");
              pageInfo.add("hasPreviousPage");
            });
            lineItems.add("edges", function(edges) {
              edges.add("cursor");
              edges.add("node", function(node) {
                node.add("title");
                node.add("variant", function(variant) {
                  variant.addFragment(spreads.VariantWithProductFragment);
                });
                node.add("quantity");
                node.add("customAttributes", function(customAttributes) {
                  customAttributes.add("key");
                  customAttributes.add("value");
                });
              });
            });
          });
        });
        root.add("lineItems", {
          args: {
            first: 250
          }
        }, function(lineItems) {
          lineItems.add("pageInfo", function(pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          lineItems.add("edges", function(edges) {
            edges.add("cursor");
            edges.add("node", function(node) {
              node.add("id");
              node.add("title");
              node.add("variant", function(variant) {
                variant.addFragment(spreads.VariantWithProductFragment);
              });
              node.add("quantity");
              node.add("customAttributes", function(customAttributes) {
                customAttributes.add("key");
                customAttributes.add("value");
              });
              node.add("discountAllocations", function(discountAllocations) {
                discountAllocations.add("allocatedAmount", function(allocatedAmount) {
                  allocatedAmount.add("amount");
                  allocatedAmount.add("currencyCode");
                });
                discountAllocations.add("discountApplication", function(discountApplication) {
                  discountApplication.addFragment(spreads.DiscountApplicationFragment);
                });
              });
            });
          });
        });
      });
      document.addMutation([variables.__defaultOperation__.checkoutId, variables.__defaultOperation__.lineItems], function(root) {
        root.add("checkoutLineItemsReplace", {
          args: {
            checkoutId: variables.__defaultOperation__.checkoutId,
            lineItems: variables.__defaultOperation__.lineItems
          }
        }, function(checkoutLineItemsReplace) {
          checkoutLineItemsReplace.add("userErrors", function(userErrors) {
            userErrors.addFragment(spreads.CheckoutUserErrorFragment);
          });
          checkoutLineItemsReplace.add("checkout", function(checkout) {
            checkout.addFragment(spreads.CheckoutFragment);
          });
        });
      });
      return document;
    }
    function query$16(client) {
      var document = client.document();
      var spreads = {};
      var variables = {};
      variables.__defaultOperation__ = {};
      variables.__defaultOperation__.checkoutId = client.variable("checkoutId", "ID!");
      variables.__defaultOperation__.lineItems = client.variable("lineItems", "[CheckoutLineItemUpdateInput!]!");
      spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function(root) {
        root.add("id");
        root.add("title");
        root.add("price");
        root.add("priceV2", function(priceV2) {
          priceV2.add("amount");
          priceV2.add("currencyCode");
        });
        root.add("weight");
        root.add("availableForSale", {
          alias: "available"
        });
        root.add("sku");
        root.add("compareAtPrice");
        root.add("compareAtPriceV2", function(compareAtPriceV2) {
          compareAtPriceV2.add("amount");
          compareAtPriceV2.add("currencyCode");
        });
        root.add("image", function(image) {
          image.add("id");
          image.add("originalSrc", {
            alias: "src"
          });
          image.add("altText");
          image.add("width");
          image.add("height");
        });
        root.add("selectedOptions", function(selectedOptions) {
          selectedOptions.add("name");
          selectedOptions.add("value");
        });
        root.add("unitPrice", function(unitPrice) {
          unitPrice.add("amount");
          unitPrice.add("currencyCode");
        });
        root.add("unitPriceMeasurement", function(unitPriceMeasurement) {
          unitPriceMeasurement.add("measuredType");
          unitPriceMeasurement.add("quantityUnit");
          unitPriceMeasurement.add("quantityValue");
          unitPriceMeasurement.add("referenceUnit");
          unitPriceMeasurement.add("referenceValue");
        });
      });
      spreads.DiscountApplicationFragment = document.defineFragment("DiscountApplicationFragment", "DiscountApplication", function(root) {
        root.add("targetSelection");
        root.add("allocationMethod");
        root.add("targetType");
        root.add("value", function(value) {
          value.addInlineFragmentOn("MoneyV2", function(MoneyV22) {
            MoneyV22.add("amount");
            MoneyV22.add("currencyCode");
          });
          value.addInlineFragmentOn("PricingPercentageValue", function(PricingPercentageValue2) {
            PricingPercentageValue2.add("percentage");
          });
        });
        root.addInlineFragmentOn("ManualDiscountApplication", function(ManualDiscountApplication2) {
          ManualDiscountApplication2.add("title");
          ManualDiscountApplication2.add("description");
        });
        root.addInlineFragmentOn("DiscountCodeApplication", function(DiscountCodeApplication2) {
          DiscountCodeApplication2.add("code");
          DiscountCodeApplication2.add("applicable");
        });
        root.addInlineFragmentOn("ScriptDiscountApplication", function(ScriptDiscountApplication2) {
          ScriptDiscountApplication2.add("title");
        });
        root.addInlineFragmentOn("AutomaticDiscountApplication", function(AutomaticDiscountApplication2) {
          AutomaticDiscountApplication2.add("title");
        });
      });
      spreads.AppliedGiftCardFragment = document.defineFragment("AppliedGiftCardFragment", "AppliedGiftCard", function(root) {
        root.add("amountUsedV2", function(amountUsedV2) {
          amountUsedV2.add("amount");
          amountUsedV2.add("currencyCode");
        });
        root.add("balanceV2", function(balanceV2) {
          balanceV2.add("amount");
          balanceV2.add("currencyCode");
        });
        root.add("presentmentAmountUsed", function(presentmentAmountUsed) {
          presentmentAmountUsed.add("amount");
          presentmentAmountUsed.add("currencyCode");
        });
        root.add("id");
        root.add("lastCharacters");
      });
      spreads.VariantWithProductFragment = document.defineFragment("VariantWithProductFragment", "ProductVariant", function(root) {
        root.addFragment(spreads.VariantFragment);
        root.add("product", function(product) {
          product.add("id");
          product.add("handle");
        });
      });
      spreads.UserErrorFragment = document.defineFragment("UserErrorFragment", "UserError", function(root) {
        root.add("field");
        root.add("message");
      });
      spreads.CheckoutUserErrorFragment = document.defineFragment("CheckoutUserErrorFragment", "CheckoutUserError", function(root) {
        root.add("field");
        root.add("message");
        root.add("code");
      });
      spreads.MailingAddressFragment = document.defineFragment("MailingAddressFragment", "MailingAddress", function(root) {
        root.add("id");
        root.add("address1");
        root.add("address2");
        root.add("city");
        root.add("company");
        root.add("country");
        root.add("firstName");
        root.add("formatted");
        root.add("lastName");
        root.add("latitude");
        root.add("longitude");
        root.add("phone");
        root.add("province");
        root.add("zip");
        root.add("name");
        root.add("countryCodeV2", {
          alias: "countryCode"
        });
        root.add("provinceCode");
      });
      spreads.CheckoutFragment = document.defineFragment("CheckoutFragment", "Checkout", function(root) {
        root.add("id");
        root.add("ready");
        root.add("requiresShipping");
        root.add("note");
        root.add("paymentDue");
        root.add("paymentDueV2", function(paymentDueV2) {
          paymentDueV2.add("amount");
          paymentDueV2.add("currencyCode");
        });
        root.add("webUrl");
        root.add("orderStatusUrl");
        root.add("taxExempt");
        root.add("taxesIncluded");
        root.add("currencyCode");
        root.add("totalTax");
        root.add("totalTaxV2", function(totalTaxV2) {
          totalTaxV2.add("amount");
          totalTaxV2.add("currencyCode");
        });
        root.add("lineItemsSubtotalPrice", function(lineItemsSubtotalPrice) {
          lineItemsSubtotalPrice.add("amount");
          lineItemsSubtotalPrice.add("currencyCode");
        });
        root.add("subtotalPrice");
        root.add("subtotalPriceV2", function(subtotalPriceV2) {
          subtotalPriceV2.add("amount");
          subtotalPriceV2.add("currencyCode");
        });
        root.add("totalPrice");
        root.add("totalPriceV2", function(totalPriceV2) {
          totalPriceV2.add("amount");
          totalPriceV2.add("currencyCode");
        });
        root.add("completedAt");
        root.add("createdAt");
        root.add("updatedAt");
        root.add("email");
        root.add("discountApplications", {
          args: {
            first: 10
          }
        }, function(discountApplications) {
          discountApplications.add("pageInfo", function(pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          discountApplications.add("edges", function(edges) {
            edges.add("node", function(node) {
              node.addFragment(spreads.DiscountApplicationFragment);
            });
          });
        });
        root.add("appliedGiftCards", function(appliedGiftCards) {
          appliedGiftCards.addFragment(spreads.AppliedGiftCardFragment);
        });
        root.add("shippingAddress", function(shippingAddress) {
          shippingAddress.addFragment(spreads.MailingAddressFragment);
        });
        root.add("shippingLine", function(shippingLine) {
          shippingLine.add("handle");
          shippingLine.add("price");
          shippingLine.add("priceV2", function(priceV2) {
            priceV2.add("amount");
            priceV2.add("currencyCode");
          });
          shippingLine.add("title");
        });
        root.add("customAttributes", function(customAttributes) {
          customAttributes.add("key");
          customAttributes.add("value");
        });
        root.add("order", function(order) {
          order.add("id");
          order.add("processedAt");
          order.add("orderNumber");
          order.add("subtotalPrice");
          order.add("subtotalPriceV2", function(subtotalPriceV2) {
            subtotalPriceV2.add("amount");
            subtotalPriceV2.add("currencyCode");
          });
          order.add("totalShippingPrice");
          order.add("totalShippingPriceV2", function(totalShippingPriceV2) {
            totalShippingPriceV2.add("amount");
            totalShippingPriceV2.add("currencyCode");
          });
          order.add("totalTax");
          order.add("totalTaxV2", function(totalTaxV2) {
            totalTaxV2.add("amount");
            totalTaxV2.add("currencyCode");
          });
          order.add("totalPrice");
          order.add("totalPriceV2", function(totalPriceV2) {
            totalPriceV2.add("amount");
            totalPriceV2.add("currencyCode");
          });
          order.add("currencyCode");
          order.add("totalRefunded");
          order.add("totalRefundedV2", function(totalRefundedV2) {
            totalRefundedV2.add("amount");
            totalRefundedV2.add("currencyCode");
          });
          order.add("customerUrl");
          order.add("shippingAddress", function(shippingAddress) {
            shippingAddress.addFragment(spreads.MailingAddressFragment);
          });
          order.add("lineItems", {
            args: {
              first: 250
            }
          }, function(lineItems) {
            lineItems.add("pageInfo", function(pageInfo) {
              pageInfo.add("hasNextPage");
              pageInfo.add("hasPreviousPage");
            });
            lineItems.add("edges", function(edges) {
              edges.add("cursor");
              edges.add("node", function(node) {
                node.add("title");
                node.add("variant", function(variant) {
                  variant.addFragment(spreads.VariantWithProductFragment);
                });
                node.add("quantity");
                node.add("customAttributes", function(customAttributes) {
                  customAttributes.add("key");
                  customAttributes.add("value");
                });
              });
            });
          });
        });
        root.add("lineItems", {
          args: {
            first: 250
          }
        }, function(lineItems) {
          lineItems.add("pageInfo", function(pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          lineItems.add("edges", function(edges) {
            edges.add("cursor");
            edges.add("node", function(node) {
              node.add("id");
              node.add("title");
              node.add("variant", function(variant) {
                variant.addFragment(spreads.VariantWithProductFragment);
              });
              node.add("quantity");
              node.add("customAttributes", function(customAttributes) {
                customAttributes.add("key");
                customAttributes.add("value");
              });
              node.add("discountAllocations", function(discountAllocations) {
                discountAllocations.add("allocatedAmount", function(allocatedAmount) {
                  allocatedAmount.add("amount");
                  allocatedAmount.add("currencyCode");
                });
                discountAllocations.add("discountApplication", function(discountApplication) {
                  discountApplication.addFragment(spreads.DiscountApplicationFragment);
                });
              });
            });
          });
        });
      });
      document.addMutation([variables.__defaultOperation__.checkoutId, variables.__defaultOperation__.lineItems], function(root) {
        root.add("checkoutLineItemsUpdate", {
          args: {
            checkoutId: variables.__defaultOperation__.checkoutId,
            lineItems: variables.__defaultOperation__.lineItems
          }
        }, function(checkoutLineItemsUpdate) {
          checkoutLineItemsUpdate.add("userErrors", function(userErrors) {
            userErrors.addFragment(spreads.UserErrorFragment);
          });
          checkoutLineItemsUpdate.add("checkoutUserErrors", function(checkoutUserErrors) {
            checkoutUserErrors.addFragment(spreads.CheckoutUserErrorFragment);
          });
          checkoutLineItemsUpdate.add("checkout", function(checkout) {
            checkout.addFragment(spreads.CheckoutFragment);
          });
        });
      });
      return document;
    }
    function query$17(client) {
      var document = client.document();
      var spreads = {};
      var variables = {};
      variables.checkoutAttributesUpdateV2 = {};
      variables.checkoutAttributesUpdateV2.checkoutId = client.variable("checkoutId", "ID!");
      variables.checkoutAttributesUpdateV2.input = client.variable("input", "CheckoutAttributesUpdateV2Input!");
      spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function(root) {
        root.add("id");
        root.add("title");
        root.add("price");
        root.add("priceV2", function(priceV2) {
          priceV2.add("amount");
          priceV2.add("currencyCode");
        });
        root.add("weight");
        root.add("availableForSale", {
          alias: "available"
        });
        root.add("sku");
        root.add("compareAtPrice");
        root.add("compareAtPriceV2", function(compareAtPriceV2) {
          compareAtPriceV2.add("amount");
          compareAtPriceV2.add("currencyCode");
        });
        root.add("image", function(image) {
          image.add("id");
          image.add("originalSrc", {
            alias: "src"
          });
          image.add("altText");
          image.add("width");
          image.add("height");
        });
        root.add("selectedOptions", function(selectedOptions) {
          selectedOptions.add("name");
          selectedOptions.add("value");
        });
        root.add("unitPrice", function(unitPrice) {
          unitPrice.add("amount");
          unitPrice.add("currencyCode");
        });
        root.add("unitPriceMeasurement", function(unitPriceMeasurement) {
          unitPriceMeasurement.add("measuredType");
          unitPriceMeasurement.add("quantityUnit");
          unitPriceMeasurement.add("quantityValue");
          unitPriceMeasurement.add("referenceUnit");
          unitPriceMeasurement.add("referenceValue");
        });
      });
      spreads.DiscountApplicationFragment = document.defineFragment("DiscountApplicationFragment", "DiscountApplication", function(root) {
        root.add("targetSelection");
        root.add("allocationMethod");
        root.add("targetType");
        root.add("value", function(value) {
          value.addInlineFragmentOn("MoneyV2", function(MoneyV22) {
            MoneyV22.add("amount");
            MoneyV22.add("currencyCode");
          });
          value.addInlineFragmentOn("PricingPercentageValue", function(PricingPercentageValue2) {
            PricingPercentageValue2.add("percentage");
          });
        });
        root.addInlineFragmentOn("ManualDiscountApplication", function(ManualDiscountApplication2) {
          ManualDiscountApplication2.add("title");
          ManualDiscountApplication2.add("description");
        });
        root.addInlineFragmentOn("DiscountCodeApplication", function(DiscountCodeApplication2) {
          DiscountCodeApplication2.add("code");
          DiscountCodeApplication2.add("applicable");
        });
        root.addInlineFragmentOn("ScriptDiscountApplication", function(ScriptDiscountApplication2) {
          ScriptDiscountApplication2.add("title");
        });
        root.addInlineFragmentOn("AutomaticDiscountApplication", function(AutomaticDiscountApplication2) {
          AutomaticDiscountApplication2.add("title");
        });
      });
      spreads.AppliedGiftCardFragment = document.defineFragment("AppliedGiftCardFragment", "AppliedGiftCard", function(root) {
        root.add("amountUsedV2", function(amountUsedV2) {
          amountUsedV2.add("amount");
          amountUsedV2.add("currencyCode");
        });
        root.add("balanceV2", function(balanceV2) {
          balanceV2.add("amount");
          balanceV2.add("currencyCode");
        });
        root.add("presentmentAmountUsed", function(presentmentAmountUsed) {
          presentmentAmountUsed.add("amount");
          presentmentAmountUsed.add("currencyCode");
        });
        root.add("id");
        root.add("lastCharacters");
      });
      spreads.VariantWithProductFragment = document.defineFragment("VariantWithProductFragment", "ProductVariant", function(root) {
        root.addFragment(spreads.VariantFragment);
        root.add("product", function(product) {
          product.add("id");
          product.add("handle");
        });
      });
      spreads.UserErrorFragment = document.defineFragment("UserErrorFragment", "UserError", function(root) {
        root.add("field");
        root.add("message");
      });
      spreads.CheckoutUserErrorFragment = document.defineFragment("CheckoutUserErrorFragment", "CheckoutUserError", function(root) {
        root.add("field");
        root.add("message");
        root.add("code");
      });
      spreads.MailingAddressFragment = document.defineFragment("MailingAddressFragment", "MailingAddress", function(root) {
        root.add("id");
        root.add("address1");
        root.add("address2");
        root.add("city");
        root.add("company");
        root.add("country");
        root.add("firstName");
        root.add("formatted");
        root.add("lastName");
        root.add("latitude");
        root.add("longitude");
        root.add("phone");
        root.add("province");
        root.add("zip");
        root.add("name");
        root.add("countryCodeV2", {
          alias: "countryCode"
        });
        root.add("provinceCode");
      });
      spreads.CheckoutFragment = document.defineFragment("CheckoutFragment", "Checkout", function(root) {
        root.add("id");
        root.add("ready");
        root.add("requiresShipping");
        root.add("note");
        root.add("paymentDue");
        root.add("paymentDueV2", function(paymentDueV2) {
          paymentDueV2.add("amount");
          paymentDueV2.add("currencyCode");
        });
        root.add("webUrl");
        root.add("orderStatusUrl");
        root.add("taxExempt");
        root.add("taxesIncluded");
        root.add("currencyCode");
        root.add("totalTax");
        root.add("totalTaxV2", function(totalTaxV2) {
          totalTaxV2.add("amount");
          totalTaxV2.add("currencyCode");
        });
        root.add("lineItemsSubtotalPrice", function(lineItemsSubtotalPrice) {
          lineItemsSubtotalPrice.add("amount");
          lineItemsSubtotalPrice.add("currencyCode");
        });
        root.add("subtotalPrice");
        root.add("subtotalPriceV2", function(subtotalPriceV2) {
          subtotalPriceV2.add("amount");
          subtotalPriceV2.add("currencyCode");
        });
        root.add("totalPrice");
        root.add("totalPriceV2", function(totalPriceV2) {
          totalPriceV2.add("amount");
          totalPriceV2.add("currencyCode");
        });
        root.add("completedAt");
        root.add("createdAt");
        root.add("updatedAt");
        root.add("email");
        root.add("discountApplications", {
          args: {
            first: 10
          }
        }, function(discountApplications) {
          discountApplications.add("pageInfo", function(pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          discountApplications.add("edges", function(edges) {
            edges.add("node", function(node) {
              node.addFragment(spreads.DiscountApplicationFragment);
            });
          });
        });
        root.add("appliedGiftCards", function(appliedGiftCards) {
          appliedGiftCards.addFragment(spreads.AppliedGiftCardFragment);
        });
        root.add("shippingAddress", function(shippingAddress) {
          shippingAddress.addFragment(spreads.MailingAddressFragment);
        });
        root.add("shippingLine", function(shippingLine) {
          shippingLine.add("handle");
          shippingLine.add("price");
          shippingLine.add("priceV2", function(priceV2) {
            priceV2.add("amount");
            priceV2.add("currencyCode");
          });
          shippingLine.add("title");
        });
        root.add("customAttributes", function(customAttributes) {
          customAttributes.add("key");
          customAttributes.add("value");
        });
        root.add("order", function(order) {
          order.add("id");
          order.add("processedAt");
          order.add("orderNumber");
          order.add("subtotalPrice");
          order.add("subtotalPriceV2", function(subtotalPriceV2) {
            subtotalPriceV2.add("amount");
            subtotalPriceV2.add("currencyCode");
          });
          order.add("totalShippingPrice");
          order.add("totalShippingPriceV2", function(totalShippingPriceV2) {
            totalShippingPriceV2.add("amount");
            totalShippingPriceV2.add("currencyCode");
          });
          order.add("totalTax");
          order.add("totalTaxV2", function(totalTaxV2) {
            totalTaxV2.add("amount");
            totalTaxV2.add("currencyCode");
          });
          order.add("totalPrice");
          order.add("totalPriceV2", function(totalPriceV2) {
            totalPriceV2.add("amount");
            totalPriceV2.add("currencyCode");
          });
          order.add("currencyCode");
          order.add("totalRefunded");
          order.add("totalRefundedV2", function(totalRefundedV2) {
            totalRefundedV2.add("amount");
            totalRefundedV2.add("currencyCode");
          });
          order.add("customerUrl");
          order.add("shippingAddress", function(shippingAddress) {
            shippingAddress.addFragment(spreads.MailingAddressFragment);
          });
          order.add("lineItems", {
            args: {
              first: 250
            }
          }, function(lineItems) {
            lineItems.add("pageInfo", function(pageInfo) {
              pageInfo.add("hasNextPage");
              pageInfo.add("hasPreviousPage");
            });
            lineItems.add("edges", function(edges) {
              edges.add("cursor");
              edges.add("node", function(node) {
                node.add("title");
                node.add("variant", function(variant) {
                  variant.addFragment(spreads.VariantWithProductFragment);
                });
                node.add("quantity");
                node.add("customAttributes", function(customAttributes) {
                  customAttributes.add("key");
                  customAttributes.add("value");
                });
              });
            });
          });
        });
        root.add("lineItems", {
          args: {
            first: 250
          }
        }, function(lineItems) {
          lineItems.add("pageInfo", function(pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          lineItems.add("edges", function(edges) {
            edges.add("cursor");
            edges.add("node", function(node) {
              node.add("id");
              node.add("title");
              node.add("variant", function(variant) {
                variant.addFragment(spreads.VariantWithProductFragment);
              });
              node.add("quantity");
              node.add("customAttributes", function(customAttributes) {
                customAttributes.add("key");
                customAttributes.add("value");
              });
              node.add("discountAllocations", function(discountAllocations) {
                discountAllocations.add("allocatedAmount", function(allocatedAmount) {
                  allocatedAmount.add("amount");
                  allocatedAmount.add("currencyCode");
                });
                discountAllocations.add("discountApplication", function(discountApplication) {
                  discountApplication.addFragment(spreads.DiscountApplicationFragment);
                });
              });
            });
          });
        });
      });
      document.addMutation("checkoutAttributesUpdateV2", [variables.checkoutAttributesUpdateV2.checkoutId, variables.checkoutAttributesUpdateV2.input], function(root) {
        root.add("checkoutAttributesUpdateV2", {
          args: {
            checkoutId: variables.checkoutAttributesUpdateV2.checkoutId,
            input: variables.checkoutAttributesUpdateV2.input
          }
        }, function(checkoutAttributesUpdateV2) {
          checkoutAttributesUpdateV2.add("userErrors", function(userErrors) {
            userErrors.addFragment(spreads.UserErrorFragment);
          });
          checkoutAttributesUpdateV2.add("checkoutUserErrors", function(checkoutUserErrors) {
            checkoutUserErrors.addFragment(spreads.CheckoutUserErrorFragment);
          });
          checkoutAttributesUpdateV2.add("checkout", function(checkout) {
            checkout.addFragment(spreads.CheckoutFragment);
          });
        });
      });
      return document;
    }
    function query$18(client) {
      var document = client.document();
      var spreads = {};
      var variables = {};
      variables.checkoutDiscountCodeApplyV2 = {};
      variables.checkoutDiscountCodeApplyV2.discountCode = client.variable("discountCode", "String!");
      variables.checkoutDiscountCodeApplyV2.checkoutId = client.variable("checkoutId", "ID!");
      spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function(root) {
        root.add("id");
        root.add("title");
        root.add("price");
        root.add("priceV2", function(priceV2) {
          priceV2.add("amount");
          priceV2.add("currencyCode");
        });
        root.add("weight");
        root.add("availableForSale", {
          alias: "available"
        });
        root.add("sku");
        root.add("compareAtPrice");
        root.add("compareAtPriceV2", function(compareAtPriceV2) {
          compareAtPriceV2.add("amount");
          compareAtPriceV2.add("currencyCode");
        });
        root.add("image", function(image) {
          image.add("id");
          image.add("originalSrc", {
            alias: "src"
          });
          image.add("altText");
          image.add("width");
          image.add("height");
        });
        root.add("selectedOptions", function(selectedOptions) {
          selectedOptions.add("name");
          selectedOptions.add("value");
        });
        root.add("unitPrice", function(unitPrice) {
          unitPrice.add("amount");
          unitPrice.add("currencyCode");
        });
        root.add("unitPriceMeasurement", function(unitPriceMeasurement) {
          unitPriceMeasurement.add("measuredType");
          unitPriceMeasurement.add("quantityUnit");
          unitPriceMeasurement.add("quantityValue");
          unitPriceMeasurement.add("referenceUnit");
          unitPriceMeasurement.add("referenceValue");
        });
      });
      spreads.DiscountApplicationFragment = document.defineFragment("DiscountApplicationFragment", "DiscountApplication", function(root) {
        root.add("targetSelection");
        root.add("allocationMethod");
        root.add("targetType");
        root.add("value", function(value) {
          value.addInlineFragmentOn("MoneyV2", function(MoneyV22) {
            MoneyV22.add("amount");
            MoneyV22.add("currencyCode");
          });
          value.addInlineFragmentOn("PricingPercentageValue", function(PricingPercentageValue2) {
            PricingPercentageValue2.add("percentage");
          });
        });
        root.addInlineFragmentOn("ManualDiscountApplication", function(ManualDiscountApplication2) {
          ManualDiscountApplication2.add("title");
          ManualDiscountApplication2.add("description");
        });
        root.addInlineFragmentOn("DiscountCodeApplication", function(DiscountCodeApplication2) {
          DiscountCodeApplication2.add("code");
          DiscountCodeApplication2.add("applicable");
        });
        root.addInlineFragmentOn("ScriptDiscountApplication", function(ScriptDiscountApplication2) {
          ScriptDiscountApplication2.add("title");
        });
        root.addInlineFragmentOn("AutomaticDiscountApplication", function(AutomaticDiscountApplication2) {
          AutomaticDiscountApplication2.add("title");
        });
      });
      spreads.AppliedGiftCardFragment = document.defineFragment("AppliedGiftCardFragment", "AppliedGiftCard", function(root) {
        root.add("amountUsedV2", function(amountUsedV2) {
          amountUsedV2.add("amount");
          amountUsedV2.add("currencyCode");
        });
        root.add("balanceV2", function(balanceV2) {
          balanceV2.add("amount");
          balanceV2.add("currencyCode");
        });
        root.add("presentmentAmountUsed", function(presentmentAmountUsed) {
          presentmentAmountUsed.add("amount");
          presentmentAmountUsed.add("currencyCode");
        });
        root.add("id");
        root.add("lastCharacters");
      });
      spreads.VariantWithProductFragment = document.defineFragment("VariantWithProductFragment", "ProductVariant", function(root) {
        root.addFragment(spreads.VariantFragment);
        root.add("product", function(product) {
          product.add("id");
          product.add("handle");
        });
      });
      spreads.UserErrorFragment = document.defineFragment("UserErrorFragment", "UserError", function(root) {
        root.add("field");
        root.add("message");
      });
      spreads.CheckoutUserErrorFragment = document.defineFragment("CheckoutUserErrorFragment", "CheckoutUserError", function(root) {
        root.add("field");
        root.add("message");
        root.add("code");
      });
      spreads.MailingAddressFragment = document.defineFragment("MailingAddressFragment", "MailingAddress", function(root) {
        root.add("id");
        root.add("address1");
        root.add("address2");
        root.add("city");
        root.add("company");
        root.add("country");
        root.add("firstName");
        root.add("formatted");
        root.add("lastName");
        root.add("latitude");
        root.add("longitude");
        root.add("phone");
        root.add("province");
        root.add("zip");
        root.add("name");
        root.add("countryCodeV2", {
          alias: "countryCode"
        });
        root.add("provinceCode");
      });
      spreads.CheckoutFragment = document.defineFragment("CheckoutFragment", "Checkout", function(root) {
        root.add("id");
        root.add("ready");
        root.add("requiresShipping");
        root.add("note");
        root.add("paymentDue");
        root.add("paymentDueV2", function(paymentDueV2) {
          paymentDueV2.add("amount");
          paymentDueV2.add("currencyCode");
        });
        root.add("webUrl");
        root.add("orderStatusUrl");
        root.add("taxExempt");
        root.add("taxesIncluded");
        root.add("currencyCode");
        root.add("totalTax");
        root.add("totalTaxV2", function(totalTaxV2) {
          totalTaxV2.add("amount");
          totalTaxV2.add("currencyCode");
        });
        root.add("lineItemsSubtotalPrice", function(lineItemsSubtotalPrice) {
          lineItemsSubtotalPrice.add("amount");
          lineItemsSubtotalPrice.add("currencyCode");
        });
        root.add("subtotalPrice");
        root.add("subtotalPriceV2", function(subtotalPriceV2) {
          subtotalPriceV2.add("amount");
          subtotalPriceV2.add("currencyCode");
        });
        root.add("totalPrice");
        root.add("totalPriceV2", function(totalPriceV2) {
          totalPriceV2.add("amount");
          totalPriceV2.add("currencyCode");
        });
        root.add("completedAt");
        root.add("createdAt");
        root.add("updatedAt");
        root.add("email");
        root.add("discountApplications", {
          args: {
            first: 10
          }
        }, function(discountApplications) {
          discountApplications.add("pageInfo", function(pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          discountApplications.add("edges", function(edges) {
            edges.add("node", function(node) {
              node.addFragment(spreads.DiscountApplicationFragment);
            });
          });
        });
        root.add("appliedGiftCards", function(appliedGiftCards) {
          appliedGiftCards.addFragment(spreads.AppliedGiftCardFragment);
        });
        root.add("shippingAddress", function(shippingAddress) {
          shippingAddress.addFragment(spreads.MailingAddressFragment);
        });
        root.add("shippingLine", function(shippingLine) {
          shippingLine.add("handle");
          shippingLine.add("price");
          shippingLine.add("priceV2", function(priceV2) {
            priceV2.add("amount");
            priceV2.add("currencyCode");
          });
          shippingLine.add("title");
        });
        root.add("customAttributes", function(customAttributes) {
          customAttributes.add("key");
          customAttributes.add("value");
        });
        root.add("order", function(order) {
          order.add("id");
          order.add("processedAt");
          order.add("orderNumber");
          order.add("subtotalPrice");
          order.add("subtotalPriceV2", function(subtotalPriceV2) {
            subtotalPriceV2.add("amount");
            subtotalPriceV2.add("currencyCode");
          });
          order.add("totalShippingPrice");
          order.add("totalShippingPriceV2", function(totalShippingPriceV2) {
            totalShippingPriceV2.add("amount");
            totalShippingPriceV2.add("currencyCode");
          });
          order.add("totalTax");
          order.add("totalTaxV2", function(totalTaxV2) {
            totalTaxV2.add("amount");
            totalTaxV2.add("currencyCode");
          });
          order.add("totalPrice");
          order.add("totalPriceV2", function(totalPriceV2) {
            totalPriceV2.add("amount");
            totalPriceV2.add("currencyCode");
          });
          order.add("currencyCode");
          order.add("totalRefunded");
          order.add("totalRefundedV2", function(totalRefundedV2) {
            totalRefundedV2.add("amount");
            totalRefundedV2.add("currencyCode");
          });
          order.add("customerUrl");
          order.add("shippingAddress", function(shippingAddress) {
            shippingAddress.addFragment(spreads.MailingAddressFragment);
          });
          order.add("lineItems", {
            args: {
              first: 250
            }
          }, function(lineItems) {
            lineItems.add("pageInfo", function(pageInfo) {
              pageInfo.add("hasNextPage");
              pageInfo.add("hasPreviousPage");
            });
            lineItems.add("edges", function(edges) {
              edges.add("cursor");
              edges.add("node", function(node) {
                node.add("title");
                node.add("variant", function(variant) {
                  variant.addFragment(spreads.VariantWithProductFragment);
                });
                node.add("quantity");
                node.add("customAttributes", function(customAttributes) {
                  customAttributes.add("key");
                  customAttributes.add("value");
                });
              });
            });
          });
        });
        root.add("lineItems", {
          args: {
            first: 250
          }
        }, function(lineItems) {
          lineItems.add("pageInfo", function(pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          lineItems.add("edges", function(edges) {
            edges.add("cursor");
            edges.add("node", function(node) {
              node.add("id");
              node.add("title");
              node.add("variant", function(variant) {
                variant.addFragment(spreads.VariantWithProductFragment);
              });
              node.add("quantity");
              node.add("customAttributes", function(customAttributes) {
                customAttributes.add("key");
                customAttributes.add("value");
              });
              node.add("discountAllocations", function(discountAllocations) {
                discountAllocations.add("allocatedAmount", function(allocatedAmount) {
                  allocatedAmount.add("amount");
                  allocatedAmount.add("currencyCode");
                });
                discountAllocations.add("discountApplication", function(discountApplication) {
                  discountApplication.addFragment(spreads.DiscountApplicationFragment);
                });
              });
            });
          });
        });
      });
      document.addMutation("checkoutDiscountCodeApplyV2", [variables.checkoutDiscountCodeApplyV2.discountCode, variables.checkoutDiscountCodeApplyV2.checkoutId], function(root) {
        root.add("checkoutDiscountCodeApplyV2", {
          args: {
            discountCode: variables.checkoutDiscountCodeApplyV2.discountCode,
            checkoutId: variables.checkoutDiscountCodeApplyV2.checkoutId
          }
        }, function(checkoutDiscountCodeApplyV2) {
          checkoutDiscountCodeApplyV2.add("userErrors", function(userErrors) {
            userErrors.addFragment(spreads.UserErrorFragment);
          });
          checkoutDiscountCodeApplyV2.add("checkoutUserErrors", function(checkoutUserErrors) {
            checkoutUserErrors.addFragment(spreads.CheckoutUserErrorFragment);
          });
          checkoutDiscountCodeApplyV2.add("checkout", function(checkout) {
            checkout.addFragment(spreads.CheckoutFragment);
          });
        });
      });
      return document;
    }
    function query$19(client) {
      var document = client.document();
      var spreads = {};
      var variables = {};
      variables.checkoutDiscountCodeRemove = {};
      variables.checkoutDiscountCodeRemove.checkoutId = client.variable("checkoutId", "ID!");
      spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function(root) {
        root.add("id");
        root.add("title");
        root.add("price");
        root.add("priceV2", function(priceV2) {
          priceV2.add("amount");
          priceV2.add("currencyCode");
        });
        root.add("weight");
        root.add("availableForSale", {
          alias: "available"
        });
        root.add("sku");
        root.add("compareAtPrice");
        root.add("compareAtPriceV2", function(compareAtPriceV2) {
          compareAtPriceV2.add("amount");
          compareAtPriceV2.add("currencyCode");
        });
        root.add("image", function(image) {
          image.add("id");
          image.add("originalSrc", {
            alias: "src"
          });
          image.add("altText");
          image.add("width");
          image.add("height");
        });
        root.add("selectedOptions", function(selectedOptions) {
          selectedOptions.add("name");
          selectedOptions.add("value");
        });
        root.add("unitPrice", function(unitPrice) {
          unitPrice.add("amount");
          unitPrice.add("currencyCode");
        });
        root.add("unitPriceMeasurement", function(unitPriceMeasurement) {
          unitPriceMeasurement.add("measuredType");
          unitPriceMeasurement.add("quantityUnit");
          unitPriceMeasurement.add("quantityValue");
          unitPriceMeasurement.add("referenceUnit");
          unitPriceMeasurement.add("referenceValue");
        });
      });
      spreads.DiscountApplicationFragment = document.defineFragment("DiscountApplicationFragment", "DiscountApplication", function(root) {
        root.add("targetSelection");
        root.add("allocationMethod");
        root.add("targetType");
        root.add("value", function(value) {
          value.addInlineFragmentOn("MoneyV2", function(MoneyV22) {
            MoneyV22.add("amount");
            MoneyV22.add("currencyCode");
          });
          value.addInlineFragmentOn("PricingPercentageValue", function(PricingPercentageValue2) {
            PricingPercentageValue2.add("percentage");
          });
        });
        root.addInlineFragmentOn("ManualDiscountApplication", function(ManualDiscountApplication2) {
          ManualDiscountApplication2.add("title");
          ManualDiscountApplication2.add("description");
        });
        root.addInlineFragmentOn("DiscountCodeApplication", function(DiscountCodeApplication2) {
          DiscountCodeApplication2.add("code");
          DiscountCodeApplication2.add("applicable");
        });
        root.addInlineFragmentOn("ScriptDiscountApplication", function(ScriptDiscountApplication2) {
          ScriptDiscountApplication2.add("title");
        });
        root.addInlineFragmentOn("AutomaticDiscountApplication", function(AutomaticDiscountApplication2) {
          AutomaticDiscountApplication2.add("title");
        });
      });
      spreads.AppliedGiftCardFragment = document.defineFragment("AppliedGiftCardFragment", "AppliedGiftCard", function(root) {
        root.add("amountUsedV2", function(amountUsedV2) {
          amountUsedV2.add("amount");
          amountUsedV2.add("currencyCode");
        });
        root.add("balanceV2", function(balanceV2) {
          balanceV2.add("amount");
          balanceV2.add("currencyCode");
        });
        root.add("presentmentAmountUsed", function(presentmentAmountUsed) {
          presentmentAmountUsed.add("amount");
          presentmentAmountUsed.add("currencyCode");
        });
        root.add("id");
        root.add("lastCharacters");
      });
      spreads.VariantWithProductFragment = document.defineFragment("VariantWithProductFragment", "ProductVariant", function(root) {
        root.addFragment(spreads.VariantFragment);
        root.add("product", function(product) {
          product.add("id");
          product.add("handle");
        });
      });
      spreads.UserErrorFragment = document.defineFragment("UserErrorFragment", "UserError", function(root) {
        root.add("field");
        root.add("message");
      });
      spreads.CheckoutUserErrorFragment = document.defineFragment("CheckoutUserErrorFragment", "CheckoutUserError", function(root) {
        root.add("field");
        root.add("message");
        root.add("code");
      });
      spreads.MailingAddressFragment = document.defineFragment("MailingAddressFragment", "MailingAddress", function(root) {
        root.add("id");
        root.add("address1");
        root.add("address2");
        root.add("city");
        root.add("company");
        root.add("country");
        root.add("firstName");
        root.add("formatted");
        root.add("lastName");
        root.add("latitude");
        root.add("longitude");
        root.add("phone");
        root.add("province");
        root.add("zip");
        root.add("name");
        root.add("countryCodeV2", {
          alias: "countryCode"
        });
        root.add("provinceCode");
      });
      spreads.CheckoutFragment = document.defineFragment("CheckoutFragment", "Checkout", function(root) {
        root.add("id");
        root.add("ready");
        root.add("requiresShipping");
        root.add("note");
        root.add("paymentDue");
        root.add("paymentDueV2", function(paymentDueV2) {
          paymentDueV2.add("amount");
          paymentDueV2.add("currencyCode");
        });
        root.add("webUrl");
        root.add("orderStatusUrl");
        root.add("taxExempt");
        root.add("taxesIncluded");
        root.add("currencyCode");
        root.add("totalTax");
        root.add("totalTaxV2", function(totalTaxV2) {
          totalTaxV2.add("amount");
          totalTaxV2.add("currencyCode");
        });
        root.add("lineItemsSubtotalPrice", function(lineItemsSubtotalPrice) {
          lineItemsSubtotalPrice.add("amount");
          lineItemsSubtotalPrice.add("currencyCode");
        });
        root.add("subtotalPrice");
        root.add("subtotalPriceV2", function(subtotalPriceV2) {
          subtotalPriceV2.add("amount");
          subtotalPriceV2.add("currencyCode");
        });
        root.add("totalPrice");
        root.add("totalPriceV2", function(totalPriceV2) {
          totalPriceV2.add("amount");
          totalPriceV2.add("currencyCode");
        });
        root.add("completedAt");
        root.add("createdAt");
        root.add("updatedAt");
        root.add("email");
        root.add("discountApplications", {
          args: {
            first: 10
          }
        }, function(discountApplications) {
          discountApplications.add("pageInfo", function(pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          discountApplications.add("edges", function(edges) {
            edges.add("node", function(node) {
              node.addFragment(spreads.DiscountApplicationFragment);
            });
          });
        });
        root.add("appliedGiftCards", function(appliedGiftCards) {
          appliedGiftCards.addFragment(spreads.AppliedGiftCardFragment);
        });
        root.add("shippingAddress", function(shippingAddress) {
          shippingAddress.addFragment(spreads.MailingAddressFragment);
        });
        root.add("shippingLine", function(shippingLine) {
          shippingLine.add("handle");
          shippingLine.add("price");
          shippingLine.add("priceV2", function(priceV2) {
            priceV2.add("amount");
            priceV2.add("currencyCode");
          });
          shippingLine.add("title");
        });
        root.add("customAttributes", function(customAttributes) {
          customAttributes.add("key");
          customAttributes.add("value");
        });
        root.add("order", function(order) {
          order.add("id");
          order.add("processedAt");
          order.add("orderNumber");
          order.add("subtotalPrice");
          order.add("subtotalPriceV2", function(subtotalPriceV2) {
            subtotalPriceV2.add("amount");
            subtotalPriceV2.add("currencyCode");
          });
          order.add("totalShippingPrice");
          order.add("totalShippingPriceV2", function(totalShippingPriceV2) {
            totalShippingPriceV2.add("amount");
            totalShippingPriceV2.add("currencyCode");
          });
          order.add("totalTax");
          order.add("totalTaxV2", function(totalTaxV2) {
            totalTaxV2.add("amount");
            totalTaxV2.add("currencyCode");
          });
          order.add("totalPrice");
          order.add("totalPriceV2", function(totalPriceV2) {
            totalPriceV2.add("amount");
            totalPriceV2.add("currencyCode");
          });
          order.add("currencyCode");
          order.add("totalRefunded");
          order.add("totalRefundedV2", function(totalRefundedV2) {
            totalRefundedV2.add("amount");
            totalRefundedV2.add("currencyCode");
          });
          order.add("customerUrl");
          order.add("shippingAddress", function(shippingAddress) {
            shippingAddress.addFragment(spreads.MailingAddressFragment);
          });
          order.add("lineItems", {
            args: {
              first: 250
            }
          }, function(lineItems) {
            lineItems.add("pageInfo", function(pageInfo) {
              pageInfo.add("hasNextPage");
              pageInfo.add("hasPreviousPage");
            });
            lineItems.add("edges", function(edges) {
              edges.add("cursor");
              edges.add("node", function(node) {
                node.add("title");
                node.add("variant", function(variant) {
                  variant.addFragment(spreads.VariantWithProductFragment);
                });
                node.add("quantity");
                node.add("customAttributes", function(customAttributes) {
                  customAttributes.add("key");
                  customAttributes.add("value");
                });
              });
            });
          });
        });
        root.add("lineItems", {
          args: {
            first: 250
          }
        }, function(lineItems) {
          lineItems.add("pageInfo", function(pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          lineItems.add("edges", function(edges) {
            edges.add("cursor");
            edges.add("node", function(node) {
              node.add("id");
              node.add("title");
              node.add("variant", function(variant) {
                variant.addFragment(spreads.VariantWithProductFragment);
              });
              node.add("quantity");
              node.add("customAttributes", function(customAttributes) {
                customAttributes.add("key");
                customAttributes.add("value");
              });
              node.add("discountAllocations", function(discountAllocations) {
                discountAllocations.add("allocatedAmount", function(allocatedAmount) {
                  allocatedAmount.add("amount");
                  allocatedAmount.add("currencyCode");
                });
                discountAllocations.add("discountApplication", function(discountApplication) {
                  discountApplication.addFragment(spreads.DiscountApplicationFragment);
                });
              });
            });
          });
        });
      });
      document.addMutation("checkoutDiscountCodeRemove", [variables.checkoutDiscountCodeRemove.checkoutId], function(root) {
        root.add("checkoutDiscountCodeRemove", {
          args: {
            checkoutId: variables.checkoutDiscountCodeRemove.checkoutId
          }
        }, function(checkoutDiscountCodeRemove) {
          checkoutDiscountCodeRemove.add("userErrors", function(userErrors) {
            userErrors.addFragment(spreads.UserErrorFragment);
          });
          checkoutDiscountCodeRemove.add("checkoutUserErrors", function(checkoutUserErrors) {
            checkoutUserErrors.addFragment(spreads.CheckoutUserErrorFragment);
          });
          checkoutDiscountCodeRemove.add("checkout", function(checkout) {
            checkout.addFragment(spreads.CheckoutFragment);
          });
        });
      });
      return document;
    }
    function query$20(client) {
      var document = client.document();
      var spreads = {};
      var variables = {};
      variables.checkoutGiftCardsAppend = {};
      variables.checkoutGiftCardsAppend.giftCardCodes = client.variable("giftCardCodes", "[String!]!");
      variables.checkoutGiftCardsAppend.checkoutId = client.variable("checkoutId", "ID!");
      spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function(root) {
        root.add("id");
        root.add("title");
        root.add("price");
        root.add("priceV2", function(priceV2) {
          priceV2.add("amount");
          priceV2.add("currencyCode");
        });
        root.add("weight");
        root.add("availableForSale", {
          alias: "available"
        });
        root.add("sku");
        root.add("compareAtPrice");
        root.add("compareAtPriceV2", function(compareAtPriceV2) {
          compareAtPriceV2.add("amount");
          compareAtPriceV2.add("currencyCode");
        });
        root.add("image", function(image) {
          image.add("id");
          image.add("originalSrc", {
            alias: "src"
          });
          image.add("altText");
          image.add("width");
          image.add("height");
        });
        root.add("selectedOptions", function(selectedOptions) {
          selectedOptions.add("name");
          selectedOptions.add("value");
        });
        root.add("unitPrice", function(unitPrice) {
          unitPrice.add("amount");
          unitPrice.add("currencyCode");
        });
        root.add("unitPriceMeasurement", function(unitPriceMeasurement) {
          unitPriceMeasurement.add("measuredType");
          unitPriceMeasurement.add("quantityUnit");
          unitPriceMeasurement.add("quantityValue");
          unitPriceMeasurement.add("referenceUnit");
          unitPriceMeasurement.add("referenceValue");
        });
      });
      spreads.DiscountApplicationFragment = document.defineFragment("DiscountApplicationFragment", "DiscountApplication", function(root) {
        root.add("targetSelection");
        root.add("allocationMethod");
        root.add("targetType");
        root.add("value", function(value) {
          value.addInlineFragmentOn("MoneyV2", function(MoneyV22) {
            MoneyV22.add("amount");
            MoneyV22.add("currencyCode");
          });
          value.addInlineFragmentOn("PricingPercentageValue", function(PricingPercentageValue2) {
            PricingPercentageValue2.add("percentage");
          });
        });
        root.addInlineFragmentOn("ManualDiscountApplication", function(ManualDiscountApplication2) {
          ManualDiscountApplication2.add("title");
          ManualDiscountApplication2.add("description");
        });
        root.addInlineFragmentOn("DiscountCodeApplication", function(DiscountCodeApplication2) {
          DiscountCodeApplication2.add("code");
          DiscountCodeApplication2.add("applicable");
        });
        root.addInlineFragmentOn("ScriptDiscountApplication", function(ScriptDiscountApplication2) {
          ScriptDiscountApplication2.add("title");
        });
        root.addInlineFragmentOn("AutomaticDiscountApplication", function(AutomaticDiscountApplication2) {
          AutomaticDiscountApplication2.add("title");
        });
      });
      spreads.AppliedGiftCardFragment = document.defineFragment("AppliedGiftCardFragment", "AppliedGiftCard", function(root) {
        root.add("amountUsedV2", function(amountUsedV2) {
          amountUsedV2.add("amount");
          amountUsedV2.add("currencyCode");
        });
        root.add("balanceV2", function(balanceV2) {
          balanceV2.add("amount");
          balanceV2.add("currencyCode");
        });
        root.add("presentmentAmountUsed", function(presentmentAmountUsed) {
          presentmentAmountUsed.add("amount");
          presentmentAmountUsed.add("currencyCode");
        });
        root.add("id");
        root.add("lastCharacters");
      });
      spreads.VariantWithProductFragment = document.defineFragment("VariantWithProductFragment", "ProductVariant", function(root) {
        root.addFragment(spreads.VariantFragment);
        root.add("product", function(product) {
          product.add("id");
          product.add("handle");
        });
      });
      spreads.UserErrorFragment = document.defineFragment("UserErrorFragment", "UserError", function(root) {
        root.add("field");
        root.add("message");
      });
      spreads.CheckoutUserErrorFragment = document.defineFragment("CheckoutUserErrorFragment", "CheckoutUserError", function(root) {
        root.add("field");
        root.add("message");
        root.add("code");
      });
      spreads.MailingAddressFragment = document.defineFragment("MailingAddressFragment", "MailingAddress", function(root) {
        root.add("id");
        root.add("address1");
        root.add("address2");
        root.add("city");
        root.add("company");
        root.add("country");
        root.add("firstName");
        root.add("formatted");
        root.add("lastName");
        root.add("latitude");
        root.add("longitude");
        root.add("phone");
        root.add("province");
        root.add("zip");
        root.add("name");
        root.add("countryCodeV2", {
          alias: "countryCode"
        });
        root.add("provinceCode");
      });
      spreads.CheckoutFragment = document.defineFragment("CheckoutFragment", "Checkout", function(root) {
        root.add("id");
        root.add("ready");
        root.add("requiresShipping");
        root.add("note");
        root.add("paymentDue");
        root.add("paymentDueV2", function(paymentDueV2) {
          paymentDueV2.add("amount");
          paymentDueV2.add("currencyCode");
        });
        root.add("webUrl");
        root.add("orderStatusUrl");
        root.add("taxExempt");
        root.add("taxesIncluded");
        root.add("currencyCode");
        root.add("totalTax");
        root.add("totalTaxV2", function(totalTaxV2) {
          totalTaxV2.add("amount");
          totalTaxV2.add("currencyCode");
        });
        root.add("lineItemsSubtotalPrice", function(lineItemsSubtotalPrice) {
          lineItemsSubtotalPrice.add("amount");
          lineItemsSubtotalPrice.add("currencyCode");
        });
        root.add("subtotalPrice");
        root.add("subtotalPriceV2", function(subtotalPriceV2) {
          subtotalPriceV2.add("amount");
          subtotalPriceV2.add("currencyCode");
        });
        root.add("totalPrice");
        root.add("totalPriceV2", function(totalPriceV2) {
          totalPriceV2.add("amount");
          totalPriceV2.add("currencyCode");
        });
        root.add("completedAt");
        root.add("createdAt");
        root.add("updatedAt");
        root.add("email");
        root.add("discountApplications", {
          args: {
            first: 10
          }
        }, function(discountApplications) {
          discountApplications.add("pageInfo", function(pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          discountApplications.add("edges", function(edges) {
            edges.add("node", function(node) {
              node.addFragment(spreads.DiscountApplicationFragment);
            });
          });
        });
        root.add("appliedGiftCards", function(appliedGiftCards) {
          appliedGiftCards.addFragment(spreads.AppliedGiftCardFragment);
        });
        root.add("shippingAddress", function(shippingAddress) {
          shippingAddress.addFragment(spreads.MailingAddressFragment);
        });
        root.add("shippingLine", function(shippingLine) {
          shippingLine.add("handle");
          shippingLine.add("price");
          shippingLine.add("priceV2", function(priceV2) {
            priceV2.add("amount");
            priceV2.add("currencyCode");
          });
          shippingLine.add("title");
        });
        root.add("customAttributes", function(customAttributes) {
          customAttributes.add("key");
          customAttributes.add("value");
        });
        root.add("order", function(order) {
          order.add("id");
          order.add("processedAt");
          order.add("orderNumber");
          order.add("subtotalPrice");
          order.add("subtotalPriceV2", function(subtotalPriceV2) {
            subtotalPriceV2.add("amount");
            subtotalPriceV2.add("currencyCode");
          });
          order.add("totalShippingPrice");
          order.add("totalShippingPriceV2", function(totalShippingPriceV2) {
            totalShippingPriceV2.add("amount");
            totalShippingPriceV2.add("currencyCode");
          });
          order.add("totalTax");
          order.add("totalTaxV2", function(totalTaxV2) {
            totalTaxV2.add("amount");
            totalTaxV2.add("currencyCode");
          });
          order.add("totalPrice");
          order.add("totalPriceV2", function(totalPriceV2) {
            totalPriceV2.add("amount");
            totalPriceV2.add("currencyCode");
          });
          order.add("currencyCode");
          order.add("totalRefunded");
          order.add("totalRefundedV2", function(totalRefundedV2) {
            totalRefundedV2.add("amount");
            totalRefundedV2.add("currencyCode");
          });
          order.add("customerUrl");
          order.add("shippingAddress", function(shippingAddress) {
            shippingAddress.addFragment(spreads.MailingAddressFragment);
          });
          order.add("lineItems", {
            args: {
              first: 250
            }
          }, function(lineItems) {
            lineItems.add("pageInfo", function(pageInfo) {
              pageInfo.add("hasNextPage");
              pageInfo.add("hasPreviousPage");
            });
            lineItems.add("edges", function(edges) {
              edges.add("cursor");
              edges.add("node", function(node) {
                node.add("title");
                node.add("variant", function(variant) {
                  variant.addFragment(spreads.VariantWithProductFragment);
                });
                node.add("quantity");
                node.add("customAttributes", function(customAttributes) {
                  customAttributes.add("key");
                  customAttributes.add("value");
                });
              });
            });
          });
        });
        root.add("lineItems", {
          args: {
            first: 250
          }
        }, function(lineItems) {
          lineItems.add("pageInfo", function(pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          lineItems.add("edges", function(edges) {
            edges.add("cursor");
            edges.add("node", function(node) {
              node.add("id");
              node.add("title");
              node.add("variant", function(variant) {
                variant.addFragment(spreads.VariantWithProductFragment);
              });
              node.add("quantity");
              node.add("customAttributes", function(customAttributes) {
                customAttributes.add("key");
                customAttributes.add("value");
              });
              node.add("discountAllocations", function(discountAllocations) {
                discountAllocations.add("allocatedAmount", function(allocatedAmount) {
                  allocatedAmount.add("amount");
                  allocatedAmount.add("currencyCode");
                });
                discountAllocations.add("discountApplication", function(discountApplication) {
                  discountApplication.addFragment(spreads.DiscountApplicationFragment);
                });
              });
            });
          });
        });
      });
      document.addMutation("checkoutGiftCardsAppend", [variables.checkoutGiftCardsAppend.giftCardCodes, variables.checkoutGiftCardsAppend.checkoutId], function(root) {
        root.add("checkoutGiftCardsAppend", {
          args: {
            giftCardCodes: variables.checkoutGiftCardsAppend.giftCardCodes,
            checkoutId: variables.checkoutGiftCardsAppend.checkoutId
          }
        }, function(checkoutGiftCardsAppend) {
          checkoutGiftCardsAppend.add("userErrors", function(userErrors) {
            userErrors.addFragment(spreads.UserErrorFragment);
          });
          checkoutGiftCardsAppend.add("checkoutUserErrors", function(checkoutUserErrors) {
            checkoutUserErrors.addFragment(spreads.CheckoutUserErrorFragment);
          });
          checkoutGiftCardsAppend.add("checkout", function(checkout) {
            checkout.addFragment(spreads.CheckoutFragment);
          });
        });
      });
      return document;
    }
    function query$21(client) {
      var document = client.document();
      var spreads = {};
      var variables = {};
      variables.checkoutGiftCardRemoveV2 = {};
      variables.checkoutGiftCardRemoveV2.appliedGiftCardId = client.variable("appliedGiftCardId", "ID!");
      variables.checkoutGiftCardRemoveV2.checkoutId = client.variable("checkoutId", "ID!");
      spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function(root) {
        root.add("id");
        root.add("title");
        root.add("price");
        root.add("priceV2", function(priceV2) {
          priceV2.add("amount");
          priceV2.add("currencyCode");
        });
        root.add("weight");
        root.add("availableForSale", {
          alias: "available"
        });
        root.add("sku");
        root.add("compareAtPrice");
        root.add("compareAtPriceV2", function(compareAtPriceV2) {
          compareAtPriceV2.add("amount");
          compareAtPriceV2.add("currencyCode");
        });
        root.add("image", function(image) {
          image.add("id");
          image.add("originalSrc", {
            alias: "src"
          });
          image.add("altText");
          image.add("width");
          image.add("height");
        });
        root.add("selectedOptions", function(selectedOptions) {
          selectedOptions.add("name");
          selectedOptions.add("value");
        });
        root.add("unitPrice", function(unitPrice) {
          unitPrice.add("amount");
          unitPrice.add("currencyCode");
        });
        root.add("unitPriceMeasurement", function(unitPriceMeasurement) {
          unitPriceMeasurement.add("measuredType");
          unitPriceMeasurement.add("quantityUnit");
          unitPriceMeasurement.add("quantityValue");
          unitPriceMeasurement.add("referenceUnit");
          unitPriceMeasurement.add("referenceValue");
        });
      });
      spreads.DiscountApplicationFragment = document.defineFragment("DiscountApplicationFragment", "DiscountApplication", function(root) {
        root.add("targetSelection");
        root.add("allocationMethod");
        root.add("targetType");
        root.add("value", function(value) {
          value.addInlineFragmentOn("MoneyV2", function(MoneyV22) {
            MoneyV22.add("amount");
            MoneyV22.add("currencyCode");
          });
          value.addInlineFragmentOn("PricingPercentageValue", function(PricingPercentageValue2) {
            PricingPercentageValue2.add("percentage");
          });
        });
        root.addInlineFragmentOn("ManualDiscountApplication", function(ManualDiscountApplication2) {
          ManualDiscountApplication2.add("title");
          ManualDiscountApplication2.add("description");
        });
        root.addInlineFragmentOn("DiscountCodeApplication", function(DiscountCodeApplication2) {
          DiscountCodeApplication2.add("code");
          DiscountCodeApplication2.add("applicable");
        });
        root.addInlineFragmentOn("ScriptDiscountApplication", function(ScriptDiscountApplication2) {
          ScriptDiscountApplication2.add("title");
        });
        root.addInlineFragmentOn("AutomaticDiscountApplication", function(AutomaticDiscountApplication2) {
          AutomaticDiscountApplication2.add("title");
        });
      });
      spreads.AppliedGiftCardFragment = document.defineFragment("AppliedGiftCardFragment", "AppliedGiftCard", function(root) {
        root.add("amountUsedV2", function(amountUsedV2) {
          amountUsedV2.add("amount");
          amountUsedV2.add("currencyCode");
        });
        root.add("balanceV2", function(balanceV2) {
          balanceV2.add("amount");
          balanceV2.add("currencyCode");
        });
        root.add("presentmentAmountUsed", function(presentmentAmountUsed) {
          presentmentAmountUsed.add("amount");
          presentmentAmountUsed.add("currencyCode");
        });
        root.add("id");
        root.add("lastCharacters");
      });
      spreads.VariantWithProductFragment = document.defineFragment("VariantWithProductFragment", "ProductVariant", function(root) {
        root.addFragment(spreads.VariantFragment);
        root.add("product", function(product) {
          product.add("id");
          product.add("handle");
        });
      });
      spreads.UserErrorFragment = document.defineFragment("UserErrorFragment", "UserError", function(root) {
        root.add("field");
        root.add("message");
      });
      spreads.CheckoutUserErrorFragment = document.defineFragment("CheckoutUserErrorFragment", "CheckoutUserError", function(root) {
        root.add("field");
        root.add("message");
        root.add("code");
      });
      spreads.MailingAddressFragment = document.defineFragment("MailingAddressFragment", "MailingAddress", function(root) {
        root.add("id");
        root.add("address1");
        root.add("address2");
        root.add("city");
        root.add("company");
        root.add("country");
        root.add("firstName");
        root.add("formatted");
        root.add("lastName");
        root.add("latitude");
        root.add("longitude");
        root.add("phone");
        root.add("province");
        root.add("zip");
        root.add("name");
        root.add("countryCodeV2", {
          alias: "countryCode"
        });
        root.add("provinceCode");
      });
      spreads.CheckoutFragment = document.defineFragment("CheckoutFragment", "Checkout", function(root) {
        root.add("id");
        root.add("ready");
        root.add("requiresShipping");
        root.add("note");
        root.add("paymentDue");
        root.add("paymentDueV2", function(paymentDueV2) {
          paymentDueV2.add("amount");
          paymentDueV2.add("currencyCode");
        });
        root.add("webUrl");
        root.add("orderStatusUrl");
        root.add("taxExempt");
        root.add("taxesIncluded");
        root.add("currencyCode");
        root.add("totalTax");
        root.add("totalTaxV2", function(totalTaxV2) {
          totalTaxV2.add("amount");
          totalTaxV2.add("currencyCode");
        });
        root.add("lineItemsSubtotalPrice", function(lineItemsSubtotalPrice) {
          lineItemsSubtotalPrice.add("amount");
          lineItemsSubtotalPrice.add("currencyCode");
        });
        root.add("subtotalPrice");
        root.add("subtotalPriceV2", function(subtotalPriceV2) {
          subtotalPriceV2.add("amount");
          subtotalPriceV2.add("currencyCode");
        });
        root.add("totalPrice");
        root.add("totalPriceV2", function(totalPriceV2) {
          totalPriceV2.add("amount");
          totalPriceV2.add("currencyCode");
        });
        root.add("completedAt");
        root.add("createdAt");
        root.add("updatedAt");
        root.add("email");
        root.add("discountApplications", {
          args: {
            first: 10
          }
        }, function(discountApplications) {
          discountApplications.add("pageInfo", function(pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          discountApplications.add("edges", function(edges) {
            edges.add("node", function(node) {
              node.addFragment(spreads.DiscountApplicationFragment);
            });
          });
        });
        root.add("appliedGiftCards", function(appliedGiftCards) {
          appliedGiftCards.addFragment(spreads.AppliedGiftCardFragment);
        });
        root.add("shippingAddress", function(shippingAddress) {
          shippingAddress.addFragment(spreads.MailingAddressFragment);
        });
        root.add("shippingLine", function(shippingLine) {
          shippingLine.add("handle");
          shippingLine.add("price");
          shippingLine.add("priceV2", function(priceV2) {
            priceV2.add("amount");
            priceV2.add("currencyCode");
          });
          shippingLine.add("title");
        });
        root.add("customAttributes", function(customAttributes) {
          customAttributes.add("key");
          customAttributes.add("value");
        });
        root.add("order", function(order) {
          order.add("id");
          order.add("processedAt");
          order.add("orderNumber");
          order.add("subtotalPrice");
          order.add("subtotalPriceV2", function(subtotalPriceV2) {
            subtotalPriceV2.add("amount");
            subtotalPriceV2.add("currencyCode");
          });
          order.add("totalShippingPrice");
          order.add("totalShippingPriceV2", function(totalShippingPriceV2) {
            totalShippingPriceV2.add("amount");
            totalShippingPriceV2.add("currencyCode");
          });
          order.add("totalTax");
          order.add("totalTaxV2", function(totalTaxV2) {
            totalTaxV2.add("amount");
            totalTaxV2.add("currencyCode");
          });
          order.add("totalPrice");
          order.add("totalPriceV2", function(totalPriceV2) {
            totalPriceV2.add("amount");
            totalPriceV2.add("currencyCode");
          });
          order.add("currencyCode");
          order.add("totalRefunded");
          order.add("totalRefundedV2", function(totalRefundedV2) {
            totalRefundedV2.add("amount");
            totalRefundedV2.add("currencyCode");
          });
          order.add("customerUrl");
          order.add("shippingAddress", function(shippingAddress) {
            shippingAddress.addFragment(spreads.MailingAddressFragment);
          });
          order.add("lineItems", {
            args: {
              first: 250
            }
          }, function(lineItems) {
            lineItems.add("pageInfo", function(pageInfo) {
              pageInfo.add("hasNextPage");
              pageInfo.add("hasPreviousPage");
            });
            lineItems.add("edges", function(edges) {
              edges.add("cursor");
              edges.add("node", function(node) {
                node.add("title");
                node.add("variant", function(variant) {
                  variant.addFragment(spreads.VariantWithProductFragment);
                });
                node.add("quantity");
                node.add("customAttributes", function(customAttributes) {
                  customAttributes.add("key");
                  customAttributes.add("value");
                });
              });
            });
          });
        });
        root.add("lineItems", {
          args: {
            first: 250
          }
        }, function(lineItems) {
          lineItems.add("pageInfo", function(pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          lineItems.add("edges", function(edges) {
            edges.add("cursor");
            edges.add("node", function(node) {
              node.add("id");
              node.add("title");
              node.add("variant", function(variant) {
                variant.addFragment(spreads.VariantWithProductFragment);
              });
              node.add("quantity");
              node.add("customAttributes", function(customAttributes) {
                customAttributes.add("key");
                customAttributes.add("value");
              });
              node.add("discountAllocations", function(discountAllocations) {
                discountAllocations.add("allocatedAmount", function(allocatedAmount) {
                  allocatedAmount.add("amount");
                  allocatedAmount.add("currencyCode");
                });
                discountAllocations.add("discountApplication", function(discountApplication) {
                  discountApplication.addFragment(spreads.DiscountApplicationFragment);
                });
              });
            });
          });
        });
      });
      document.addMutation("checkoutGiftCardRemoveV2", [variables.checkoutGiftCardRemoveV2.appliedGiftCardId, variables.checkoutGiftCardRemoveV2.checkoutId], function(root) {
        root.add("checkoutGiftCardRemoveV2", {
          args: {
            appliedGiftCardId: variables.checkoutGiftCardRemoveV2.appliedGiftCardId,
            checkoutId: variables.checkoutGiftCardRemoveV2.checkoutId
          }
        }, function(checkoutGiftCardRemoveV2) {
          checkoutGiftCardRemoveV2.add("userErrors", function(userErrors) {
            userErrors.addFragment(spreads.UserErrorFragment);
          });
          checkoutGiftCardRemoveV2.add("checkoutUserErrors", function(checkoutUserErrors) {
            checkoutUserErrors.addFragment(spreads.CheckoutUserErrorFragment);
          });
          checkoutGiftCardRemoveV2.add("checkout", function(checkout) {
            checkout.addFragment(spreads.CheckoutFragment);
          });
        });
      });
      return document;
    }
    function query$22(client) {
      var document = client.document();
      var spreads = {};
      var variables = {};
      variables.checkoutEmailUpdateV2 = {};
      variables.checkoutEmailUpdateV2.checkoutId = client.variable("checkoutId", "ID!");
      variables.checkoutEmailUpdateV2.email = client.variable("email", "String!");
      spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function(root) {
        root.add("id");
        root.add("title");
        root.add("price");
        root.add("priceV2", function(priceV2) {
          priceV2.add("amount");
          priceV2.add("currencyCode");
        });
        root.add("weight");
        root.add("availableForSale", {
          alias: "available"
        });
        root.add("sku");
        root.add("compareAtPrice");
        root.add("compareAtPriceV2", function(compareAtPriceV2) {
          compareAtPriceV2.add("amount");
          compareAtPriceV2.add("currencyCode");
        });
        root.add("image", function(image) {
          image.add("id");
          image.add("originalSrc", {
            alias: "src"
          });
          image.add("altText");
          image.add("width");
          image.add("height");
        });
        root.add("selectedOptions", function(selectedOptions) {
          selectedOptions.add("name");
          selectedOptions.add("value");
        });
        root.add("unitPrice", function(unitPrice) {
          unitPrice.add("amount");
          unitPrice.add("currencyCode");
        });
        root.add("unitPriceMeasurement", function(unitPriceMeasurement) {
          unitPriceMeasurement.add("measuredType");
          unitPriceMeasurement.add("quantityUnit");
          unitPriceMeasurement.add("quantityValue");
          unitPriceMeasurement.add("referenceUnit");
          unitPriceMeasurement.add("referenceValue");
        });
      });
      spreads.DiscountApplicationFragment = document.defineFragment("DiscountApplicationFragment", "DiscountApplication", function(root) {
        root.add("targetSelection");
        root.add("allocationMethod");
        root.add("targetType");
        root.add("value", function(value) {
          value.addInlineFragmentOn("MoneyV2", function(MoneyV22) {
            MoneyV22.add("amount");
            MoneyV22.add("currencyCode");
          });
          value.addInlineFragmentOn("PricingPercentageValue", function(PricingPercentageValue2) {
            PricingPercentageValue2.add("percentage");
          });
        });
        root.addInlineFragmentOn("ManualDiscountApplication", function(ManualDiscountApplication2) {
          ManualDiscountApplication2.add("title");
          ManualDiscountApplication2.add("description");
        });
        root.addInlineFragmentOn("DiscountCodeApplication", function(DiscountCodeApplication2) {
          DiscountCodeApplication2.add("code");
          DiscountCodeApplication2.add("applicable");
        });
        root.addInlineFragmentOn("ScriptDiscountApplication", function(ScriptDiscountApplication2) {
          ScriptDiscountApplication2.add("title");
        });
        root.addInlineFragmentOn("AutomaticDiscountApplication", function(AutomaticDiscountApplication2) {
          AutomaticDiscountApplication2.add("title");
        });
      });
      spreads.AppliedGiftCardFragment = document.defineFragment("AppliedGiftCardFragment", "AppliedGiftCard", function(root) {
        root.add("amountUsedV2", function(amountUsedV2) {
          amountUsedV2.add("amount");
          amountUsedV2.add("currencyCode");
        });
        root.add("balanceV2", function(balanceV2) {
          balanceV2.add("amount");
          balanceV2.add("currencyCode");
        });
        root.add("presentmentAmountUsed", function(presentmentAmountUsed) {
          presentmentAmountUsed.add("amount");
          presentmentAmountUsed.add("currencyCode");
        });
        root.add("id");
        root.add("lastCharacters");
      });
      spreads.VariantWithProductFragment = document.defineFragment("VariantWithProductFragment", "ProductVariant", function(root) {
        root.addFragment(spreads.VariantFragment);
        root.add("product", function(product) {
          product.add("id");
          product.add("handle");
        });
      });
      spreads.UserErrorFragment = document.defineFragment("UserErrorFragment", "UserError", function(root) {
        root.add("field");
        root.add("message");
      });
      spreads.CheckoutUserErrorFragment = document.defineFragment("CheckoutUserErrorFragment", "CheckoutUserError", function(root) {
        root.add("field");
        root.add("message");
        root.add("code");
      });
      spreads.MailingAddressFragment = document.defineFragment("MailingAddressFragment", "MailingAddress", function(root) {
        root.add("id");
        root.add("address1");
        root.add("address2");
        root.add("city");
        root.add("company");
        root.add("country");
        root.add("firstName");
        root.add("formatted");
        root.add("lastName");
        root.add("latitude");
        root.add("longitude");
        root.add("phone");
        root.add("province");
        root.add("zip");
        root.add("name");
        root.add("countryCodeV2", {
          alias: "countryCode"
        });
        root.add("provinceCode");
      });
      spreads.CheckoutFragment = document.defineFragment("CheckoutFragment", "Checkout", function(root) {
        root.add("id");
        root.add("ready");
        root.add("requiresShipping");
        root.add("note");
        root.add("paymentDue");
        root.add("paymentDueV2", function(paymentDueV2) {
          paymentDueV2.add("amount");
          paymentDueV2.add("currencyCode");
        });
        root.add("webUrl");
        root.add("orderStatusUrl");
        root.add("taxExempt");
        root.add("taxesIncluded");
        root.add("currencyCode");
        root.add("totalTax");
        root.add("totalTaxV2", function(totalTaxV2) {
          totalTaxV2.add("amount");
          totalTaxV2.add("currencyCode");
        });
        root.add("lineItemsSubtotalPrice", function(lineItemsSubtotalPrice) {
          lineItemsSubtotalPrice.add("amount");
          lineItemsSubtotalPrice.add("currencyCode");
        });
        root.add("subtotalPrice");
        root.add("subtotalPriceV2", function(subtotalPriceV2) {
          subtotalPriceV2.add("amount");
          subtotalPriceV2.add("currencyCode");
        });
        root.add("totalPrice");
        root.add("totalPriceV2", function(totalPriceV2) {
          totalPriceV2.add("amount");
          totalPriceV2.add("currencyCode");
        });
        root.add("completedAt");
        root.add("createdAt");
        root.add("updatedAt");
        root.add("email");
        root.add("discountApplications", {
          args: {
            first: 10
          }
        }, function(discountApplications) {
          discountApplications.add("pageInfo", function(pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          discountApplications.add("edges", function(edges) {
            edges.add("node", function(node) {
              node.addFragment(spreads.DiscountApplicationFragment);
            });
          });
        });
        root.add("appliedGiftCards", function(appliedGiftCards) {
          appliedGiftCards.addFragment(spreads.AppliedGiftCardFragment);
        });
        root.add("shippingAddress", function(shippingAddress) {
          shippingAddress.addFragment(spreads.MailingAddressFragment);
        });
        root.add("shippingLine", function(shippingLine) {
          shippingLine.add("handle");
          shippingLine.add("price");
          shippingLine.add("priceV2", function(priceV2) {
            priceV2.add("amount");
            priceV2.add("currencyCode");
          });
          shippingLine.add("title");
        });
        root.add("customAttributes", function(customAttributes) {
          customAttributes.add("key");
          customAttributes.add("value");
        });
        root.add("order", function(order) {
          order.add("id");
          order.add("processedAt");
          order.add("orderNumber");
          order.add("subtotalPrice");
          order.add("subtotalPriceV2", function(subtotalPriceV2) {
            subtotalPriceV2.add("amount");
            subtotalPriceV2.add("currencyCode");
          });
          order.add("totalShippingPrice");
          order.add("totalShippingPriceV2", function(totalShippingPriceV2) {
            totalShippingPriceV2.add("amount");
            totalShippingPriceV2.add("currencyCode");
          });
          order.add("totalTax");
          order.add("totalTaxV2", function(totalTaxV2) {
            totalTaxV2.add("amount");
            totalTaxV2.add("currencyCode");
          });
          order.add("totalPrice");
          order.add("totalPriceV2", function(totalPriceV2) {
            totalPriceV2.add("amount");
            totalPriceV2.add("currencyCode");
          });
          order.add("currencyCode");
          order.add("totalRefunded");
          order.add("totalRefundedV2", function(totalRefundedV2) {
            totalRefundedV2.add("amount");
            totalRefundedV2.add("currencyCode");
          });
          order.add("customerUrl");
          order.add("shippingAddress", function(shippingAddress) {
            shippingAddress.addFragment(spreads.MailingAddressFragment);
          });
          order.add("lineItems", {
            args: {
              first: 250
            }
          }, function(lineItems) {
            lineItems.add("pageInfo", function(pageInfo) {
              pageInfo.add("hasNextPage");
              pageInfo.add("hasPreviousPage");
            });
            lineItems.add("edges", function(edges) {
              edges.add("cursor");
              edges.add("node", function(node) {
                node.add("title");
                node.add("variant", function(variant) {
                  variant.addFragment(spreads.VariantWithProductFragment);
                });
                node.add("quantity");
                node.add("customAttributes", function(customAttributes) {
                  customAttributes.add("key");
                  customAttributes.add("value");
                });
              });
            });
          });
        });
        root.add("lineItems", {
          args: {
            first: 250
          }
        }, function(lineItems) {
          lineItems.add("pageInfo", function(pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          lineItems.add("edges", function(edges) {
            edges.add("cursor");
            edges.add("node", function(node) {
              node.add("id");
              node.add("title");
              node.add("variant", function(variant) {
                variant.addFragment(spreads.VariantWithProductFragment);
              });
              node.add("quantity");
              node.add("customAttributes", function(customAttributes) {
                customAttributes.add("key");
                customAttributes.add("value");
              });
              node.add("discountAllocations", function(discountAllocations) {
                discountAllocations.add("allocatedAmount", function(allocatedAmount) {
                  allocatedAmount.add("amount");
                  allocatedAmount.add("currencyCode");
                });
                discountAllocations.add("discountApplication", function(discountApplication) {
                  discountApplication.addFragment(spreads.DiscountApplicationFragment);
                });
              });
            });
          });
        });
      });
      document.addMutation("checkoutEmailUpdateV2", [variables.checkoutEmailUpdateV2.checkoutId, variables.checkoutEmailUpdateV2.email], function(root) {
        root.add("checkoutEmailUpdateV2", {
          args: {
            checkoutId: variables.checkoutEmailUpdateV2.checkoutId,
            email: variables.checkoutEmailUpdateV2.email
          }
        }, function(checkoutEmailUpdateV2) {
          checkoutEmailUpdateV2.add("userErrors", function(userErrors) {
            userErrors.addFragment(spreads.UserErrorFragment);
          });
          checkoutEmailUpdateV2.add("checkoutUserErrors", function(checkoutUserErrors) {
            checkoutUserErrors.addFragment(spreads.CheckoutUserErrorFragment);
          });
          checkoutEmailUpdateV2.add("checkout", function(checkout) {
            checkout.addFragment(spreads.CheckoutFragment);
          });
        });
      });
      return document;
    }
    function query$23(client) {
      var document = client.document();
      var spreads = {};
      var variables = {};
      variables.checkoutShippingAddressUpdateV2 = {};
      variables.checkoutShippingAddressUpdateV2.shippingAddress = client.variable("shippingAddress", "MailingAddressInput!");
      variables.checkoutShippingAddressUpdateV2.checkoutId = client.variable("checkoutId", "ID!");
      spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function(root) {
        root.add("id");
        root.add("title");
        root.add("price");
        root.add("priceV2", function(priceV2) {
          priceV2.add("amount");
          priceV2.add("currencyCode");
        });
        root.add("weight");
        root.add("availableForSale", {
          alias: "available"
        });
        root.add("sku");
        root.add("compareAtPrice");
        root.add("compareAtPriceV2", function(compareAtPriceV2) {
          compareAtPriceV2.add("amount");
          compareAtPriceV2.add("currencyCode");
        });
        root.add("image", function(image) {
          image.add("id");
          image.add("originalSrc", {
            alias: "src"
          });
          image.add("altText");
          image.add("width");
          image.add("height");
        });
        root.add("selectedOptions", function(selectedOptions) {
          selectedOptions.add("name");
          selectedOptions.add("value");
        });
        root.add("unitPrice", function(unitPrice) {
          unitPrice.add("amount");
          unitPrice.add("currencyCode");
        });
        root.add("unitPriceMeasurement", function(unitPriceMeasurement) {
          unitPriceMeasurement.add("measuredType");
          unitPriceMeasurement.add("quantityUnit");
          unitPriceMeasurement.add("quantityValue");
          unitPriceMeasurement.add("referenceUnit");
          unitPriceMeasurement.add("referenceValue");
        });
      });
      spreads.DiscountApplicationFragment = document.defineFragment("DiscountApplicationFragment", "DiscountApplication", function(root) {
        root.add("targetSelection");
        root.add("allocationMethod");
        root.add("targetType");
        root.add("value", function(value) {
          value.addInlineFragmentOn("MoneyV2", function(MoneyV22) {
            MoneyV22.add("amount");
            MoneyV22.add("currencyCode");
          });
          value.addInlineFragmentOn("PricingPercentageValue", function(PricingPercentageValue2) {
            PricingPercentageValue2.add("percentage");
          });
        });
        root.addInlineFragmentOn("ManualDiscountApplication", function(ManualDiscountApplication2) {
          ManualDiscountApplication2.add("title");
          ManualDiscountApplication2.add("description");
        });
        root.addInlineFragmentOn("DiscountCodeApplication", function(DiscountCodeApplication2) {
          DiscountCodeApplication2.add("code");
          DiscountCodeApplication2.add("applicable");
        });
        root.addInlineFragmentOn("ScriptDiscountApplication", function(ScriptDiscountApplication2) {
          ScriptDiscountApplication2.add("title");
        });
        root.addInlineFragmentOn("AutomaticDiscountApplication", function(AutomaticDiscountApplication2) {
          AutomaticDiscountApplication2.add("title");
        });
      });
      spreads.AppliedGiftCardFragment = document.defineFragment("AppliedGiftCardFragment", "AppliedGiftCard", function(root) {
        root.add("amountUsedV2", function(amountUsedV2) {
          amountUsedV2.add("amount");
          amountUsedV2.add("currencyCode");
        });
        root.add("balanceV2", function(balanceV2) {
          balanceV2.add("amount");
          balanceV2.add("currencyCode");
        });
        root.add("presentmentAmountUsed", function(presentmentAmountUsed) {
          presentmentAmountUsed.add("amount");
          presentmentAmountUsed.add("currencyCode");
        });
        root.add("id");
        root.add("lastCharacters");
      });
      spreads.VariantWithProductFragment = document.defineFragment("VariantWithProductFragment", "ProductVariant", function(root) {
        root.addFragment(spreads.VariantFragment);
        root.add("product", function(product) {
          product.add("id");
          product.add("handle");
        });
      });
      spreads.UserErrorFragment = document.defineFragment("UserErrorFragment", "UserError", function(root) {
        root.add("field");
        root.add("message");
      });
      spreads.CheckoutUserErrorFragment = document.defineFragment("CheckoutUserErrorFragment", "CheckoutUserError", function(root) {
        root.add("field");
        root.add("message");
        root.add("code");
      });
      spreads.MailingAddressFragment = document.defineFragment("MailingAddressFragment", "MailingAddress", function(root) {
        root.add("id");
        root.add("address1");
        root.add("address2");
        root.add("city");
        root.add("company");
        root.add("country");
        root.add("firstName");
        root.add("formatted");
        root.add("lastName");
        root.add("latitude");
        root.add("longitude");
        root.add("phone");
        root.add("province");
        root.add("zip");
        root.add("name");
        root.add("countryCodeV2", {
          alias: "countryCode"
        });
        root.add("provinceCode");
      });
      spreads.CheckoutFragment = document.defineFragment("CheckoutFragment", "Checkout", function(root) {
        root.add("id");
        root.add("ready");
        root.add("requiresShipping");
        root.add("note");
        root.add("paymentDue");
        root.add("paymentDueV2", function(paymentDueV2) {
          paymentDueV2.add("amount");
          paymentDueV2.add("currencyCode");
        });
        root.add("webUrl");
        root.add("orderStatusUrl");
        root.add("taxExempt");
        root.add("taxesIncluded");
        root.add("currencyCode");
        root.add("totalTax");
        root.add("totalTaxV2", function(totalTaxV2) {
          totalTaxV2.add("amount");
          totalTaxV2.add("currencyCode");
        });
        root.add("lineItemsSubtotalPrice", function(lineItemsSubtotalPrice) {
          lineItemsSubtotalPrice.add("amount");
          lineItemsSubtotalPrice.add("currencyCode");
        });
        root.add("subtotalPrice");
        root.add("subtotalPriceV2", function(subtotalPriceV2) {
          subtotalPriceV2.add("amount");
          subtotalPriceV2.add("currencyCode");
        });
        root.add("totalPrice");
        root.add("totalPriceV2", function(totalPriceV2) {
          totalPriceV2.add("amount");
          totalPriceV2.add("currencyCode");
        });
        root.add("completedAt");
        root.add("createdAt");
        root.add("updatedAt");
        root.add("email");
        root.add("discountApplications", {
          args: {
            first: 10
          }
        }, function(discountApplications) {
          discountApplications.add("pageInfo", function(pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          discountApplications.add("edges", function(edges) {
            edges.add("node", function(node) {
              node.addFragment(spreads.DiscountApplicationFragment);
            });
          });
        });
        root.add("appliedGiftCards", function(appliedGiftCards) {
          appliedGiftCards.addFragment(spreads.AppliedGiftCardFragment);
        });
        root.add("shippingAddress", function(shippingAddress) {
          shippingAddress.addFragment(spreads.MailingAddressFragment);
        });
        root.add("shippingLine", function(shippingLine) {
          shippingLine.add("handle");
          shippingLine.add("price");
          shippingLine.add("priceV2", function(priceV2) {
            priceV2.add("amount");
            priceV2.add("currencyCode");
          });
          shippingLine.add("title");
        });
        root.add("customAttributes", function(customAttributes) {
          customAttributes.add("key");
          customAttributes.add("value");
        });
        root.add("order", function(order) {
          order.add("id");
          order.add("processedAt");
          order.add("orderNumber");
          order.add("subtotalPrice");
          order.add("subtotalPriceV2", function(subtotalPriceV2) {
            subtotalPriceV2.add("amount");
            subtotalPriceV2.add("currencyCode");
          });
          order.add("totalShippingPrice");
          order.add("totalShippingPriceV2", function(totalShippingPriceV2) {
            totalShippingPriceV2.add("amount");
            totalShippingPriceV2.add("currencyCode");
          });
          order.add("totalTax");
          order.add("totalTaxV2", function(totalTaxV2) {
            totalTaxV2.add("amount");
            totalTaxV2.add("currencyCode");
          });
          order.add("totalPrice");
          order.add("totalPriceV2", function(totalPriceV2) {
            totalPriceV2.add("amount");
            totalPriceV2.add("currencyCode");
          });
          order.add("currencyCode");
          order.add("totalRefunded");
          order.add("totalRefundedV2", function(totalRefundedV2) {
            totalRefundedV2.add("amount");
            totalRefundedV2.add("currencyCode");
          });
          order.add("customerUrl");
          order.add("shippingAddress", function(shippingAddress) {
            shippingAddress.addFragment(spreads.MailingAddressFragment);
          });
          order.add("lineItems", {
            args: {
              first: 250
            }
          }, function(lineItems) {
            lineItems.add("pageInfo", function(pageInfo) {
              pageInfo.add("hasNextPage");
              pageInfo.add("hasPreviousPage");
            });
            lineItems.add("edges", function(edges) {
              edges.add("cursor");
              edges.add("node", function(node) {
                node.add("title");
                node.add("variant", function(variant) {
                  variant.addFragment(spreads.VariantWithProductFragment);
                });
                node.add("quantity");
                node.add("customAttributes", function(customAttributes) {
                  customAttributes.add("key");
                  customAttributes.add("value");
                });
              });
            });
          });
        });
        root.add("lineItems", {
          args: {
            first: 250
          }
        }, function(lineItems) {
          lineItems.add("pageInfo", function(pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          lineItems.add("edges", function(edges) {
            edges.add("cursor");
            edges.add("node", function(node) {
              node.add("id");
              node.add("title");
              node.add("variant", function(variant) {
                variant.addFragment(spreads.VariantWithProductFragment);
              });
              node.add("quantity");
              node.add("customAttributes", function(customAttributes) {
                customAttributes.add("key");
                customAttributes.add("value");
              });
              node.add("discountAllocations", function(discountAllocations) {
                discountAllocations.add("allocatedAmount", function(allocatedAmount) {
                  allocatedAmount.add("amount");
                  allocatedAmount.add("currencyCode");
                });
                discountAllocations.add("discountApplication", function(discountApplication) {
                  discountApplication.addFragment(spreads.DiscountApplicationFragment);
                });
              });
            });
          });
        });
      });
      document.addMutation("checkoutShippingAddressUpdateV2", [variables.checkoutShippingAddressUpdateV2.shippingAddress, variables.checkoutShippingAddressUpdateV2.checkoutId], function(root) {
        root.add("checkoutShippingAddressUpdateV2", {
          args: {
            shippingAddress: variables.checkoutShippingAddressUpdateV2.shippingAddress,
            checkoutId: variables.checkoutShippingAddressUpdateV2.checkoutId
          }
        }, function(checkoutShippingAddressUpdateV2) {
          checkoutShippingAddressUpdateV2.add("userErrors", function(userErrors) {
            userErrors.addFragment(spreads.UserErrorFragment);
          });
          checkoutShippingAddressUpdateV2.add("checkoutUserErrors", function(checkoutUserErrors) {
            checkoutUserErrors.addFragment(spreads.CheckoutUserErrorFragment);
          });
          checkoutShippingAddressUpdateV2.add("checkout", function(checkout) {
            checkout.addFragment(spreads.CheckoutFragment);
          });
        });
      });
      return document;
    }
    var CheckoutResource = function(_Resource) {
      inherits$1(CheckoutResource2, _Resource);
      function CheckoutResource2() {
        classCallCheck$1(this, CheckoutResource2);
        return possibleConstructorReturn$1(this, (CheckoutResource2.__proto__ || Object.getPrototypeOf(CheckoutResource2)).apply(this, arguments));
      }
      createClass$1(CheckoutResource2, [{
        key: "fetch",
        value: function fetch3(id) {
          var _this2 = this;
          return this.graphQLClient.send(query$11, { id }).then(defaultResolver("node")).then(function(checkout) {
            if (!checkout) {
              return null;
            }
            return _this2.graphQLClient.fetchAllPages(checkout.lineItems, { pageSize: 250 }).then(function(lineItems) {
              checkout.attrs.lineItems = lineItems;
              return checkout;
            });
          });
        }
      }, {
        key: "create",
        value: function create() {
          var input = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          return this.graphQLClient.send(query$12, { input }).then(handleCheckoutMutation("checkoutCreate", this.graphQLClient));
        }
      }, {
        key: "updateAttributes",
        value: function updateAttributes(checkoutId) {
          var input = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return this.graphQLClient.send(query$17, { checkoutId, input }).then(handleCheckoutMutation("checkoutAttributesUpdateV2", this.graphQLClient));
        }
      }, {
        key: "updateEmail",
        value: function updateEmail(checkoutId, email) {
          return this.graphQLClient.send(query$22, { checkoutId, email }).then(handleCheckoutMutation("checkoutEmailUpdateV2", this.graphQLClient));
        }
      }, {
        key: "addLineItems",
        value: function addLineItems(checkoutId, lineItems) {
          return this.graphQLClient.send(query$13, { checkoutId, lineItems }).then(handleCheckoutMutation("checkoutLineItemsAdd", this.graphQLClient));
        }
      }, {
        key: "addDiscount",
        value: function addDiscount(checkoutId, discountCode) {
          return this.graphQLClient.send(query$18, { checkoutId, discountCode }).then(handleCheckoutMutation("checkoutDiscountCodeApplyV2", this.graphQLClient));
        }
      }, {
        key: "removeDiscount",
        value: function removeDiscount(checkoutId) {
          return this.graphQLClient.send(query$19, { checkoutId }).then(handleCheckoutMutation("checkoutDiscountCodeRemove", this.graphQLClient));
        }
      }, {
        key: "addGiftCards",
        value: function addGiftCards(checkoutId, giftCardCodes) {
          return this.graphQLClient.send(query$20, { checkoutId, giftCardCodes }).then(handleCheckoutMutation("checkoutGiftCardsAppend", this.graphQLClient));
        }
      }, {
        key: "removeGiftCard",
        value: function removeGiftCard(checkoutId, appliedGiftCardId) {
          return this.graphQLClient.send(query$21, { checkoutId, appliedGiftCardId }).then(handleCheckoutMutation("checkoutGiftCardRemoveV2", this.graphQLClient));
        }
      }, {
        key: "removeLineItems",
        value: function removeLineItems(checkoutId, lineItemIds) {
          return this.graphQLClient.send(query$14, { checkoutId, lineItemIds }).then(handleCheckoutMutation("checkoutLineItemsRemove", this.graphQLClient));
        }
      }, {
        key: "replaceLineItems",
        value: function replaceLineItems(checkoutId, lineItems) {
          return this.graphQLClient.send(query$15, { checkoutId, lineItems }).then(handleCheckoutMutation("checkoutLineItemsReplace", this.graphQLClient));
        }
      }, {
        key: "updateLineItems",
        value: function updateLineItems(checkoutId, lineItems) {
          return this.graphQLClient.send(query$16, { checkoutId, lineItems }).then(handleCheckoutMutation("checkoutLineItemsUpdate", this.graphQLClient));
        }
      }, {
        key: "updateShippingAddress",
        value: function updateShippingAddress(checkoutId, shippingAddress) {
          return this.graphQLClient.send(query$23, { checkoutId, shippingAddress }).then(handleCheckoutMutation("checkoutShippingAddressUpdateV2", this.graphQLClient));
        }
      }]);
      return CheckoutResource2;
    }(Resource);
    var imageHelpers = {
      imageForSize: function imageForSize(image, _ref) {
        var maxWidth = _ref.maxWidth, maxHeight = _ref.maxHeight;
        var splitUrl = image.src.split("?");
        var notQuery = splitUrl[0];
        var query2 = splitUrl[1] ? "?" + splitUrl[1] : "";
        var imageTokens = notQuery.split(".");
        var imagePathIndex = imageTokens.length - 2;
        imageTokens[imagePathIndex] = imageTokens[imagePathIndex] + "_" + maxWidth + "x" + maxHeight;
        return "" + imageTokens.join(".") + query2;
      }
    };
    var ImageResource = function(_Resource) {
      inherits$1(ImageResource2, _Resource);
      function ImageResource2() {
        classCallCheck$1(this, ImageResource2);
        return possibleConstructorReturn$1(this, (ImageResource2.__proto__ || Object.getPrototypeOf(ImageResource2)).apply(this, arguments));
      }
      createClass$1(ImageResource2, [{
        key: "helpers",
        get: function get$$1() {
          return imageHelpers;
        }
      }]);
      return ImageResource2;
    }(Resource);
    var version = "2.14.0";
    var AppliedGiftCard = {
      "name": "AppliedGiftCard",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "amountUsedV2": "MoneyV2",
        "balanceV2": "MoneyV2",
        "id": "ID",
        "lastCharacters": "String",
        "presentmentAmountUsed": "MoneyV2"
      },
      "implementsNode": true
    };
    var Attribute = {
      "name": "Attribute",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "key": "String",
        "value": "String"
      },
      "implementsNode": false
    };
    var AutomaticDiscountApplication = {
      "name": "AutomaticDiscountApplication",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "title": "String"
      },
      "implementsNode": false
    };
    var Boolean$1 = {
      "name": "Boolean",
      "kind": "SCALAR"
    };
    var Checkout = {
      "name": "Checkout",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "appliedGiftCards": "AppliedGiftCard",
        "completedAt": "DateTime",
        "createdAt": "DateTime",
        "currencyCode": "CurrencyCode",
        "customAttributes": "Attribute",
        "discountApplications": "DiscountApplicationConnection",
        "email": "String",
        "id": "ID",
        "lineItems": "CheckoutLineItemConnection",
        "lineItemsSubtotalPrice": "MoneyV2",
        "note": "String",
        "order": "Order",
        "orderStatusUrl": "URL",
        "paymentDue": "Money",
        "paymentDueV2": "MoneyV2",
        "ready": "Boolean",
        "requiresShipping": "Boolean",
        "shippingAddress": "MailingAddress",
        "shippingLine": "ShippingRate",
        "subtotalPrice": "Money",
        "subtotalPriceV2": "MoneyV2",
        "taxExempt": "Boolean",
        "taxesIncluded": "Boolean",
        "totalPrice": "Money",
        "totalPriceV2": "MoneyV2",
        "totalTax": "Money",
        "totalTaxV2": "MoneyV2",
        "updatedAt": "DateTime",
        "webUrl": "URL"
      },
      "implementsNode": true
    };
    var CheckoutAttributesUpdateV2Payload = {
      "name": "CheckoutAttributesUpdateV2Payload",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "checkout": "Checkout",
        "checkoutUserErrors": "CheckoutUserError",
        "userErrors": "UserError"
      },
      "implementsNode": false
    };
    var CheckoutCreatePayload = {
      "name": "CheckoutCreatePayload",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "checkout": "Checkout",
        "checkoutUserErrors": "CheckoutUserError",
        "userErrors": "UserError"
      },
      "implementsNode": false
    };
    var CheckoutDiscountCodeApplyV2Payload = {
      "name": "CheckoutDiscountCodeApplyV2Payload",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "checkout": "Checkout",
        "checkoutUserErrors": "CheckoutUserError",
        "userErrors": "UserError"
      },
      "implementsNode": false
    };
    var CheckoutDiscountCodeRemovePayload = {
      "name": "CheckoutDiscountCodeRemovePayload",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "checkout": "Checkout",
        "checkoutUserErrors": "CheckoutUserError",
        "userErrors": "UserError"
      },
      "implementsNode": false
    };
    var CheckoutEmailUpdateV2Payload = {
      "name": "CheckoutEmailUpdateV2Payload",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "checkout": "Checkout",
        "checkoutUserErrors": "CheckoutUserError",
        "userErrors": "UserError"
      },
      "implementsNode": false
    };
    var CheckoutErrorCode = {
      "name": "CheckoutErrorCode",
      "kind": "ENUM"
    };
    var CheckoutGiftCardRemoveV2Payload = {
      "name": "CheckoutGiftCardRemoveV2Payload",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "checkout": "Checkout",
        "checkoutUserErrors": "CheckoutUserError",
        "userErrors": "UserError"
      },
      "implementsNode": false
    };
    var CheckoutGiftCardsAppendPayload = {
      "name": "CheckoutGiftCardsAppendPayload",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "checkout": "Checkout",
        "checkoutUserErrors": "CheckoutUserError",
        "userErrors": "UserError"
      },
      "implementsNode": false
    };
    var CheckoutLineItem = {
      "name": "CheckoutLineItem",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "customAttributes": "Attribute",
        "discountAllocations": "DiscountAllocation",
        "id": "ID",
        "quantity": "Int",
        "title": "String",
        "variant": "ProductVariant"
      },
      "implementsNode": true
    };
    var CheckoutLineItemConnection = {
      "name": "CheckoutLineItemConnection",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "edges": "CheckoutLineItemEdge",
        "pageInfo": "PageInfo"
      },
      "implementsNode": false
    };
    var CheckoutLineItemEdge = {
      "name": "CheckoutLineItemEdge",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "cursor": "String",
        "node": "CheckoutLineItem"
      },
      "implementsNode": false
    };
    var CheckoutLineItemsAddPayload = {
      "name": "CheckoutLineItemsAddPayload",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "checkout": "Checkout",
        "checkoutUserErrors": "CheckoutUserError",
        "userErrors": "UserError"
      },
      "implementsNode": false
    };
    var CheckoutLineItemsRemovePayload = {
      "name": "CheckoutLineItemsRemovePayload",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "checkout": "Checkout",
        "checkoutUserErrors": "CheckoutUserError",
        "userErrors": "UserError"
      },
      "implementsNode": false
    };
    var CheckoutLineItemsReplacePayload = {
      "name": "CheckoutLineItemsReplacePayload",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "checkout": "Checkout",
        "userErrors": "CheckoutUserError"
      },
      "implementsNode": false
    };
    var CheckoutLineItemsUpdatePayload = {
      "name": "CheckoutLineItemsUpdatePayload",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "checkout": "Checkout",
        "checkoutUserErrors": "CheckoutUserError",
        "userErrors": "UserError"
      },
      "implementsNode": false
    };
    var CheckoutShippingAddressUpdateV2Payload = {
      "name": "CheckoutShippingAddressUpdateV2Payload",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "checkout": "Checkout",
        "checkoutUserErrors": "CheckoutUserError",
        "userErrors": "UserError"
      },
      "implementsNode": false
    };
    var CheckoutUserError = {
      "name": "CheckoutUserError",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "code": "CheckoutErrorCode",
        "field": "String",
        "message": "String"
      },
      "implementsNode": false
    };
    var Collection = {
      "name": "Collection",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "description": "String",
        "descriptionHtml": "HTML",
        "handle": "String",
        "id": "ID",
        "image": "Image",
        "products": "ProductConnection",
        "title": "String",
        "updatedAt": "DateTime"
      },
      "implementsNode": true
    };
    var CollectionConnection = {
      "name": "CollectionConnection",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "edges": "CollectionEdge",
        "pageInfo": "PageInfo"
      },
      "implementsNode": false
    };
    var CollectionEdge = {
      "name": "CollectionEdge",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "cursor": "String",
        "node": "Collection"
      },
      "implementsNode": false
    };
    var CountryCode = {
      "name": "CountryCode",
      "kind": "ENUM"
    };
    var CurrencyCode = {
      "name": "CurrencyCode",
      "kind": "ENUM"
    };
    var DateTime = {
      "name": "DateTime",
      "kind": "SCALAR"
    };
    var Decimal = {
      "name": "Decimal",
      "kind": "SCALAR"
    };
    var DiscountAllocation = {
      "name": "DiscountAllocation",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "allocatedAmount": "MoneyV2",
        "discountApplication": "DiscountApplication"
      },
      "implementsNode": false
    };
    var DiscountApplication = {
      "name": "DiscountApplication",
      "kind": "INTERFACE",
      "fieldBaseTypes": {
        "allocationMethod": "DiscountApplicationAllocationMethod",
        "targetSelection": "DiscountApplicationTargetSelection",
        "targetType": "DiscountApplicationTargetType",
        "value": "PricingValue"
      },
      "possibleTypes": ["AutomaticDiscountApplication", "DiscountCodeApplication", "ManualDiscountApplication", "ScriptDiscountApplication"]
    };
    var DiscountApplicationAllocationMethod = {
      "name": "DiscountApplicationAllocationMethod",
      "kind": "ENUM"
    };
    var DiscountApplicationConnection = {
      "name": "DiscountApplicationConnection",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "edges": "DiscountApplicationEdge",
        "pageInfo": "PageInfo"
      },
      "implementsNode": false
    };
    var DiscountApplicationEdge = {
      "name": "DiscountApplicationEdge",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "node": "DiscountApplication"
      },
      "implementsNode": false
    };
    var DiscountApplicationTargetSelection = {
      "name": "DiscountApplicationTargetSelection",
      "kind": "ENUM"
    };
    var DiscountApplicationTargetType = {
      "name": "DiscountApplicationTargetType",
      "kind": "ENUM"
    };
    var DiscountCodeApplication = {
      "name": "DiscountCodeApplication",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "applicable": "Boolean",
        "code": "String"
      },
      "implementsNode": false
    };
    var Domain = {
      "name": "Domain",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "host": "String",
        "sslEnabled": "Boolean",
        "url": "URL"
      },
      "implementsNode": false
    };
    var Float = {
      "name": "Float",
      "kind": "SCALAR"
    };
    var HTML = {
      "name": "HTML",
      "kind": "SCALAR"
    };
    var ID = {
      "name": "ID",
      "kind": "SCALAR"
    };
    var Image = {
      "name": "Image",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "altText": "String",
        "height": "Int",
        "id": "ID",
        "originalSrc": "URL",
        "src": "URL",
        "width": "Int"
      },
      "implementsNode": false
    };
    var ImageConnection = {
      "name": "ImageConnection",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "edges": "ImageEdge",
        "pageInfo": "PageInfo"
      },
      "implementsNode": false
    };
    var ImageEdge = {
      "name": "ImageEdge",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "cursor": "String",
        "node": "Image"
      },
      "implementsNode": false
    };
    var Int = {
      "name": "Int",
      "kind": "SCALAR"
    };
    var MailingAddress = {
      "name": "MailingAddress",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "address1": "String",
        "address2": "String",
        "city": "String",
        "company": "String",
        "country": "String",
        "countryCodeV2": "CountryCode",
        "firstName": "String",
        "formatted": "String",
        "id": "ID",
        "lastName": "String",
        "latitude": "Float",
        "longitude": "Float",
        "name": "String",
        "phone": "String",
        "province": "String",
        "provinceCode": "String",
        "zip": "String"
      },
      "implementsNode": true
    };
    var ManualDiscountApplication = {
      "name": "ManualDiscountApplication",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "description": "String",
        "title": "String"
      },
      "implementsNode": false
    };
    var Money = {
      "name": "Money",
      "kind": "SCALAR"
    };
    var MoneyV2 = {
      "name": "MoneyV2",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "amount": "Decimal",
        "currencyCode": "CurrencyCode"
      },
      "implementsNode": false
    };
    var Mutation$1 = {
      "name": "Mutation",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "checkoutAttributesUpdateV2": "CheckoutAttributesUpdateV2Payload",
        "checkoutCreate": "CheckoutCreatePayload",
        "checkoutDiscountCodeApplyV2": "CheckoutDiscountCodeApplyV2Payload",
        "checkoutDiscountCodeRemove": "CheckoutDiscountCodeRemovePayload",
        "checkoutEmailUpdateV2": "CheckoutEmailUpdateV2Payload",
        "checkoutGiftCardRemoveV2": "CheckoutGiftCardRemoveV2Payload",
        "checkoutGiftCardsAppend": "CheckoutGiftCardsAppendPayload",
        "checkoutLineItemsAdd": "CheckoutLineItemsAddPayload",
        "checkoutLineItemsRemove": "CheckoutLineItemsRemovePayload",
        "checkoutLineItemsReplace": "CheckoutLineItemsReplacePayload",
        "checkoutLineItemsUpdate": "CheckoutLineItemsUpdatePayload",
        "checkoutShippingAddressUpdateV2": "CheckoutShippingAddressUpdateV2Payload"
      },
      "implementsNode": false,
      "relayInputObjectBaseTypes": {
        "cartCreate": "CartInput",
        "checkoutAttributesUpdate": "CheckoutAttributesUpdateInput",
        "checkoutAttributesUpdateV2": "CheckoutAttributesUpdateV2Input",
        "checkoutCreate": "CheckoutCreateInput",
        "customerAccessTokenCreate": "CustomerAccessTokenCreateInput",
        "customerActivate": "CustomerActivateInput",
        "customerCreate": "CustomerCreateInput",
        "customerReset": "CustomerResetInput"
      }
    };
    var Node = {
      "name": "Node",
      "kind": "INTERFACE",
      "fieldBaseTypes": {},
      "possibleTypes": ["AppliedGiftCard", "Article", "Blog", "Cart", "CartLine", "Checkout", "CheckoutLineItem", "Collection", "Comment", "ExternalVideo", "Location", "MailingAddress", "MediaImage", "Metafield", "Model3d", "Order", "Page", "Payment", "Product", "ProductOption", "ProductVariant", "ShopPolicy", "Video"]
    };
    var Order = {
      "name": "Order",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "currencyCode": "CurrencyCode",
        "customerUrl": "URL",
        "id": "ID",
        "lineItems": "OrderLineItemConnection",
        "orderNumber": "Int",
        "processedAt": "DateTime",
        "shippingAddress": "MailingAddress",
        "subtotalPrice": "Money",
        "subtotalPriceV2": "MoneyV2",
        "totalPrice": "Money",
        "totalPriceV2": "MoneyV2",
        "totalRefunded": "Money",
        "totalRefundedV2": "MoneyV2",
        "totalShippingPrice": "Money",
        "totalShippingPriceV2": "MoneyV2",
        "totalTax": "Money",
        "totalTaxV2": "MoneyV2"
      },
      "implementsNode": true
    };
    var OrderLineItem = {
      "name": "OrderLineItem",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "customAttributes": "Attribute",
        "quantity": "Int",
        "title": "String",
        "variant": "ProductVariant"
      },
      "implementsNode": false
    };
    var OrderLineItemConnection = {
      "name": "OrderLineItemConnection",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "edges": "OrderLineItemEdge",
        "pageInfo": "PageInfo"
      },
      "implementsNode": false
    };
    var OrderLineItemEdge = {
      "name": "OrderLineItemEdge",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "cursor": "String",
        "node": "OrderLineItem"
      },
      "implementsNode": false
    };
    var PageInfo = {
      "name": "PageInfo",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "hasNextPage": "Boolean",
        "hasPreviousPage": "Boolean"
      },
      "implementsNode": false
    };
    var PaymentSettings = {
      "name": "PaymentSettings",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "enabledPresentmentCurrencies": "CurrencyCode"
      },
      "implementsNode": false
    };
    var PricingPercentageValue = {
      "name": "PricingPercentageValue",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "percentage": "Float"
      },
      "implementsNode": false
    };
    var PricingValue = {
      "name": "PricingValue",
      "kind": "UNION"
    };
    var Product = {
      "name": "Product",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "availableForSale": "Boolean",
        "createdAt": "DateTime",
        "description": "String",
        "descriptionHtml": "HTML",
        "handle": "String",
        "id": "ID",
        "images": "ImageConnection",
        "onlineStoreUrl": "URL",
        "options": "ProductOption",
        "productType": "String",
        "publishedAt": "DateTime",
        "title": "String",
        "updatedAt": "DateTime",
        "variants": "ProductVariantConnection",
        "vendor": "String"
      },
      "implementsNode": true
    };
    var ProductConnection = {
      "name": "ProductConnection",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "edges": "ProductEdge",
        "pageInfo": "PageInfo"
      },
      "implementsNode": false
    };
    var ProductEdge = {
      "name": "ProductEdge",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "cursor": "String",
        "node": "Product"
      },
      "implementsNode": false
    };
    var ProductOption = {
      "name": "ProductOption",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "name": "String",
        "values": "String"
      },
      "implementsNode": true
    };
    var ProductVariant = {
      "name": "ProductVariant",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "availableForSale": "Boolean",
        "compareAtPrice": "Money",
        "compareAtPriceV2": "MoneyV2",
        "id": "ID",
        "image": "Image",
        "price": "Money",
        "priceV2": "MoneyV2",
        "product": "Product",
        "selectedOptions": "SelectedOption",
        "sku": "String",
        "title": "String",
        "unitPrice": "MoneyV2",
        "unitPriceMeasurement": "UnitPriceMeasurement",
        "weight": "Float"
      },
      "implementsNode": true
    };
    var ProductVariantConnection = {
      "name": "ProductVariantConnection",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "edges": "ProductVariantEdge",
        "pageInfo": "PageInfo"
      },
      "implementsNode": false
    };
    var ProductVariantEdge = {
      "name": "ProductVariantEdge",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "cursor": "String",
        "node": "ProductVariant"
      },
      "implementsNode": false
    };
    var QueryRoot = {
      "name": "QueryRoot",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "collectionByHandle": "Collection",
        "collections": "CollectionConnection",
        "node": "Node",
        "nodes": "Node",
        "productByHandle": "Product",
        "products": "ProductConnection",
        "shop": "Shop"
      },
      "implementsNode": false
    };
    var ScriptDiscountApplication = {
      "name": "ScriptDiscountApplication",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "title": "String"
      },
      "implementsNode": false
    };
    var SelectedOption = {
      "name": "SelectedOption",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "name": "String",
        "value": "String"
      },
      "implementsNode": false
    };
    var ShippingRate = {
      "name": "ShippingRate",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "handle": "String",
        "price": "Money",
        "priceV2": "MoneyV2",
        "title": "String"
      },
      "implementsNode": false
    };
    var Shop = {
      "name": "Shop",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "description": "String",
        "moneyFormat": "String",
        "name": "String",
        "paymentSettings": "PaymentSettings",
        "primaryDomain": "Domain",
        "privacyPolicy": "ShopPolicy",
        "refundPolicy": "ShopPolicy",
        "termsOfService": "ShopPolicy"
      },
      "implementsNode": false
    };
    var ShopPolicy = {
      "name": "ShopPolicy",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "body": "String",
        "id": "ID",
        "title": "String",
        "url": "URL"
      },
      "implementsNode": true
    };
    var String$1 = {
      "name": "String",
      "kind": "SCALAR"
    };
    var URL2 = {
      "name": "URL",
      "kind": "SCALAR"
    };
    var UnitPriceMeasurement = {
      "name": "UnitPriceMeasurement",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "measuredType": "UnitPriceMeasurementMeasuredType",
        "quantityUnit": "UnitPriceMeasurementMeasuredUnit",
        "quantityValue": "Float",
        "referenceUnit": "UnitPriceMeasurementMeasuredUnit",
        "referenceValue": "Int"
      },
      "implementsNode": false
    };
    var UnitPriceMeasurementMeasuredType = {
      "name": "UnitPriceMeasurementMeasuredType",
      "kind": "ENUM"
    };
    var UnitPriceMeasurementMeasuredUnit = {
      "name": "UnitPriceMeasurementMeasuredUnit",
      "kind": "ENUM"
    };
    var UserError = {
      "name": "UserError",
      "kind": "OBJECT",
      "fieldBaseTypes": {
        "field": "String",
        "message": "String"
      },
      "implementsNode": false
    };
    var Types = {
      types: {}
    };
    Types.types["AppliedGiftCard"] = AppliedGiftCard;
    Types.types["Attribute"] = Attribute;
    Types.types["AutomaticDiscountApplication"] = AutomaticDiscountApplication;
    Types.types["Boolean"] = Boolean$1;
    Types.types["Checkout"] = Checkout;
    Types.types["CheckoutAttributesUpdateV2Payload"] = CheckoutAttributesUpdateV2Payload;
    Types.types["CheckoutCreatePayload"] = CheckoutCreatePayload;
    Types.types["CheckoutDiscountCodeApplyV2Payload"] = CheckoutDiscountCodeApplyV2Payload;
    Types.types["CheckoutDiscountCodeRemovePayload"] = CheckoutDiscountCodeRemovePayload;
    Types.types["CheckoutEmailUpdateV2Payload"] = CheckoutEmailUpdateV2Payload;
    Types.types["CheckoutErrorCode"] = CheckoutErrorCode;
    Types.types["CheckoutGiftCardRemoveV2Payload"] = CheckoutGiftCardRemoveV2Payload;
    Types.types["CheckoutGiftCardsAppendPayload"] = CheckoutGiftCardsAppendPayload;
    Types.types["CheckoutLineItem"] = CheckoutLineItem;
    Types.types["CheckoutLineItemConnection"] = CheckoutLineItemConnection;
    Types.types["CheckoutLineItemEdge"] = CheckoutLineItemEdge;
    Types.types["CheckoutLineItemsAddPayload"] = CheckoutLineItemsAddPayload;
    Types.types["CheckoutLineItemsRemovePayload"] = CheckoutLineItemsRemovePayload;
    Types.types["CheckoutLineItemsReplacePayload"] = CheckoutLineItemsReplacePayload;
    Types.types["CheckoutLineItemsUpdatePayload"] = CheckoutLineItemsUpdatePayload;
    Types.types["CheckoutShippingAddressUpdateV2Payload"] = CheckoutShippingAddressUpdateV2Payload;
    Types.types["CheckoutUserError"] = CheckoutUserError;
    Types.types["Collection"] = Collection;
    Types.types["CollectionConnection"] = CollectionConnection;
    Types.types["CollectionEdge"] = CollectionEdge;
    Types.types["CountryCode"] = CountryCode;
    Types.types["CurrencyCode"] = CurrencyCode;
    Types.types["DateTime"] = DateTime;
    Types.types["Decimal"] = Decimal;
    Types.types["DiscountAllocation"] = DiscountAllocation;
    Types.types["DiscountApplication"] = DiscountApplication;
    Types.types["DiscountApplicationAllocationMethod"] = DiscountApplicationAllocationMethod;
    Types.types["DiscountApplicationConnection"] = DiscountApplicationConnection;
    Types.types["DiscountApplicationEdge"] = DiscountApplicationEdge;
    Types.types["DiscountApplicationTargetSelection"] = DiscountApplicationTargetSelection;
    Types.types["DiscountApplicationTargetType"] = DiscountApplicationTargetType;
    Types.types["DiscountCodeApplication"] = DiscountCodeApplication;
    Types.types["Domain"] = Domain;
    Types.types["Float"] = Float;
    Types.types["HTML"] = HTML;
    Types.types["ID"] = ID;
    Types.types["Image"] = Image;
    Types.types["ImageConnection"] = ImageConnection;
    Types.types["ImageEdge"] = ImageEdge;
    Types.types["Int"] = Int;
    Types.types["MailingAddress"] = MailingAddress;
    Types.types["ManualDiscountApplication"] = ManualDiscountApplication;
    Types.types["Money"] = Money;
    Types.types["MoneyV2"] = MoneyV2;
    Types.types["Mutation"] = Mutation$1;
    Types.types["Node"] = Node;
    Types.types["Order"] = Order;
    Types.types["OrderLineItem"] = OrderLineItem;
    Types.types["OrderLineItemConnection"] = OrderLineItemConnection;
    Types.types["OrderLineItemEdge"] = OrderLineItemEdge;
    Types.types["PageInfo"] = PageInfo;
    Types.types["PaymentSettings"] = PaymentSettings;
    Types.types["PricingPercentageValue"] = PricingPercentageValue;
    Types.types["PricingValue"] = PricingValue;
    Types.types["Product"] = Product;
    Types.types["ProductConnection"] = ProductConnection;
    Types.types["ProductEdge"] = ProductEdge;
    Types.types["ProductOption"] = ProductOption;
    Types.types["ProductVariant"] = ProductVariant;
    Types.types["ProductVariantConnection"] = ProductVariantConnection;
    Types.types["ProductVariantEdge"] = ProductVariantEdge;
    Types.types["QueryRoot"] = QueryRoot;
    Types.types["ScriptDiscountApplication"] = ScriptDiscountApplication;
    Types.types["SelectedOption"] = SelectedOption;
    Types.types["ShippingRate"] = ShippingRate;
    Types.types["Shop"] = Shop;
    Types.types["ShopPolicy"] = ShopPolicy;
    Types.types["String"] = String$1;
    Types.types["URL"] = URL2;
    Types.types["UnitPriceMeasurement"] = UnitPriceMeasurement;
    Types.types["UnitPriceMeasurementMeasuredType"] = UnitPriceMeasurementMeasuredType;
    Types.types["UnitPriceMeasurementMeasuredUnit"] = UnitPriceMeasurementMeasuredUnit;
    Types.types["UserError"] = UserError;
    Types.queryType = "QueryRoot";
    Types.mutationType = "Mutation";
    Types.subscriptionType = null;
    function recursivelyFreezeObject(structure) {
      Object.getOwnPropertyNames(structure).forEach(function(key) {
        var value = structure[key];
        if (value && (typeof value === "undefined" ? "undefined" : _typeof(value)) === "object") {
          recursivelyFreezeObject(value);
        }
      });
      Object.freeze(structure);
      return structure;
    }
    var types3 = recursivelyFreezeObject(Types);
    var Client2 = function() {
      createClass$1(Client3, null, [{
        key: "buildClient",
        value: function buildClient(config, fetchFunction) {
          var newConfig = new Config(config);
          var client = new Client3(newConfig, Client$2, fetchFunction);
          client.config = newConfig;
          return client;
        }
      }]);
      function Client3(config) {
        var GraphQLClientClass = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Client$2;
        var fetchFunction = arguments[2];
        classCallCheck$1(this, Client3);
        var url = "https://" + config.domain + "/api/" + config.apiVersion + "/graphql";
        var headers = {
          "X-SDK-Variant": "javascript",
          "X-SDK-Version": version,
          "X-Shopify-Storefront-Access-Token": config.storefrontAccessToken
        };
        if (config.source) {
          headers["X-SDK-Variant-Source"] = config.source;
        }
        var languageHeader = config.language ? config.language : "*";
        headers["Accept-Language"] = languageHeader;
        if (fetchFunction) {
          headers["Content-Type"] = "application/json";
          headers.Accept = "application/json";
          this.graphQLClient = new GraphQLClientClass(types3, {
            fetcher: function fetcher(graphQLParams) {
              return fetchFunction(url, {
                body: JSON.stringify(graphQLParams),
                method: "POST",
                mode: "cors",
                headers
              }).then(function(response) {
                return response.json();
              });
            }
          });
        } else {
          this.graphQLClient = new GraphQLClientClass(types3, {
            url,
            fetcherOptions: { headers }
          });
        }
        this.product = new ProductResource(this.graphQLClient);
        this.collection = new CollectionResource(this.graphQLClient);
        this.shop = new ShopResource(this.graphQLClient);
        this.checkout = new CheckoutResource(this.graphQLClient);
        this.image = new ImageResource(this.graphQLClient);
      }
      createClass$1(Client3, [{
        key: "fetchNextPage",
        value: function fetchNextPage(models) {
          return this.graphQLClient.fetchNextPage(models);
        }
      }]);
      return Client3;
    }();
    module2.exports = Client2;
  }
});

// node_modules/web-streams-polyfill/dist/ponyfill.es2018.js
var require_ponyfill_es2018 = __commonJS({
  "node_modules/web-streams-polyfill/dist/ponyfill.es2018.js"(exports2, module2) {
    (function(global2, factory) {
      typeof exports2 === "object" && typeof module2 !== "undefined" ? factory(exports2) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, factory(global2.WebStreamsPolyfill = {}));
    })(exports2, function(exports3) {
      "use strict";
      const SymbolPolyfill = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol : (description) => `Symbol(${description})`;
      function noop2() {
        return void 0;
      }
      function getGlobals() {
        if (typeof self !== "undefined") {
          return self;
        } else if (typeof window !== "undefined") {
          return window;
        } else if (typeof global !== "undefined") {
          return global;
        }
        return void 0;
      }
      const globals = getGlobals();
      function typeIsObject(x2) {
        return typeof x2 === "object" && x2 !== null || typeof x2 === "function";
      }
      const rethrowAssertionErrorRejection = noop2;
      const originalPromise = Promise;
      const originalPromiseThen = Promise.prototype.then;
      const originalPromiseResolve = Promise.resolve.bind(originalPromise);
      const originalPromiseReject = Promise.reject.bind(originalPromise);
      function newPromise(executor) {
        return new originalPromise(executor);
      }
      function promiseResolvedWith(value) {
        return originalPromiseResolve(value);
      }
      function promiseRejectedWith(reason) {
        return originalPromiseReject(reason);
      }
      function PerformPromiseThen(promise, onFulfilled, onRejected) {
        return originalPromiseThen.call(promise, onFulfilled, onRejected);
      }
      function uponPromise(promise, onFulfilled, onRejected) {
        PerformPromiseThen(PerformPromiseThen(promise, onFulfilled, onRejected), void 0, rethrowAssertionErrorRejection);
      }
      function uponFulfillment(promise, onFulfilled) {
        uponPromise(promise, onFulfilled);
      }
      function uponRejection(promise, onRejected) {
        uponPromise(promise, void 0, onRejected);
      }
      function transformPromiseWith(promise, fulfillmentHandler, rejectionHandler) {
        return PerformPromiseThen(promise, fulfillmentHandler, rejectionHandler);
      }
      function setPromiseIsHandledToTrue(promise) {
        PerformPromiseThen(promise, void 0, rethrowAssertionErrorRejection);
      }
      const queueMicrotask = (() => {
        const globalQueueMicrotask = globals && globals.queueMicrotask;
        if (typeof globalQueueMicrotask === "function") {
          return globalQueueMicrotask;
        }
        const resolvedPromise = promiseResolvedWith(void 0);
        return (fn) => PerformPromiseThen(resolvedPromise, fn);
      })();
      function reflectCall(F2, V, args) {
        if (typeof F2 !== "function") {
          throw new TypeError("Argument is not a function");
        }
        return Function.prototype.apply.call(F2, V, args);
      }
      function promiseCall(F2, V, args) {
        try {
          return promiseResolvedWith(reflectCall(F2, V, args));
        } catch (value) {
          return promiseRejectedWith(value);
        }
      }
      const QUEUE_MAX_ARRAY_SIZE = 16384;
      class SimpleQueue {
        constructor() {
          this._cursor = 0;
          this._size = 0;
          this._front = {
            _elements: [],
            _next: void 0
          };
          this._back = this._front;
          this._cursor = 0;
          this._size = 0;
        }
        get length() {
          return this._size;
        }
        push(element) {
          const oldBack = this._back;
          let newBack = oldBack;
          if (oldBack._elements.length === QUEUE_MAX_ARRAY_SIZE - 1) {
            newBack = {
              _elements: [],
              _next: void 0
            };
          }
          oldBack._elements.push(element);
          if (newBack !== oldBack) {
            this._back = newBack;
            oldBack._next = newBack;
          }
          ++this._size;
        }
        shift() {
          const oldFront = this._front;
          let newFront = oldFront;
          const oldCursor = this._cursor;
          let newCursor = oldCursor + 1;
          const elements = oldFront._elements;
          const element = elements[oldCursor];
          if (newCursor === QUEUE_MAX_ARRAY_SIZE) {
            newFront = oldFront._next;
            newCursor = 0;
          }
          --this._size;
          this._cursor = newCursor;
          if (oldFront !== newFront) {
            this._front = newFront;
          }
          elements[oldCursor] = void 0;
          return element;
        }
        forEach(callback) {
          let i2 = this._cursor;
          let node = this._front;
          let elements = node._elements;
          while (i2 !== elements.length || node._next !== void 0) {
            if (i2 === elements.length) {
              node = node._next;
              elements = node._elements;
              i2 = 0;
              if (elements.length === 0) {
                break;
              }
            }
            callback(elements[i2]);
            ++i2;
          }
        }
        peek() {
          const front = this._front;
          const cursor = this._cursor;
          return front._elements[cursor];
        }
      }
      function ReadableStreamReaderGenericInitialize(reader, stream) {
        reader._ownerReadableStream = stream;
        stream._reader = reader;
        if (stream._state === "readable") {
          defaultReaderClosedPromiseInitialize(reader);
        } else if (stream._state === "closed") {
          defaultReaderClosedPromiseInitializeAsResolved(reader);
        } else {
          defaultReaderClosedPromiseInitializeAsRejected(reader, stream._storedError);
        }
      }
      function ReadableStreamReaderGenericCancel(reader, reason) {
        const stream = reader._ownerReadableStream;
        return ReadableStreamCancel(stream, reason);
      }
      function ReadableStreamReaderGenericRelease(reader) {
        if (reader._ownerReadableStream._state === "readable") {
          defaultReaderClosedPromiseReject(reader, new TypeError(`Reader was released and can no longer be used to monitor the stream's closedness`));
        } else {
          defaultReaderClosedPromiseResetToRejected(reader, new TypeError(`Reader was released and can no longer be used to monitor the stream's closedness`));
        }
        reader._ownerReadableStream._reader = void 0;
        reader._ownerReadableStream = void 0;
      }
      function readerLockException(name) {
        return new TypeError("Cannot " + name + " a stream using a released reader");
      }
      function defaultReaderClosedPromiseInitialize(reader) {
        reader._closedPromise = newPromise((resolve, reject) => {
          reader._closedPromise_resolve = resolve;
          reader._closedPromise_reject = reject;
        });
      }
      function defaultReaderClosedPromiseInitializeAsRejected(reader, reason) {
        defaultReaderClosedPromiseInitialize(reader);
        defaultReaderClosedPromiseReject(reader, reason);
      }
      function defaultReaderClosedPromiseInitializeAsResolved(reader) {
        defaultReaderClosedPromiseInitialize(reader);
        defaultReaderClosedPromiseResolve(reader);
      }
      function defaultReaderClosedPromiseReject(reader, reason) {
        if (reader._closedPromise_reject === void 0) {
          return;
        }
        setPromiseIsHandledToTrue(reader._closedPromise);
        reader._closedPromise_reject(reason);
        reader._closedPromise_resolve = void 0;
        reader._closedPromise_reject = void 0;
      }
      function defaultReaderClosedPromiseResetToRejected(reader, reason) {
        defaultReaderClosedPromiseInitializeAsRejected(reader, reason);
      }
      function defaultReaderClosedPromiseResolve(reader) {
        if (reader._closedPromise_resolve === void 0) {
          return;
        }
        reader._closedPromise_resolve(void 0);
        reader._closedPromise_resolve = void 0;
        reader._closedPromise_reject = void 0;
      }
      const AbortSteps = SymbolPolyfill("[[AbortSteps]]");
      const ErrorSteps = SymbolPolyfill("[[ErrorSteps]]");
      const CancelSteps = SymbolPolyfill("[[CancelSteps]]");
      const PullSteps = SymbolPolyfill("[[PullSteps]]");
      const NumberIsFinite = Number.isFinite || function(x2) {
        return typeof x2 === "number" && isFinite(x2);
      };
      const MathTrunc = Math.trunc || function(v) {
        return v < 0 ? Math.ceil(v) : Math.floor(v);
      };
      function isDictionary(x2) {
        return typeof x2 === "object" || typeof x2 === "function";
      }
      function assertDictionary(obj, context) {
        if (obj !== void 0 && !isDictionary(obj)) {
          throw new TypeError(`${context} is not an object.`);
        }
      }
      function assertFunction(x2, context) {
        if (typeof x2 !== "function") {
          throw new TypeError(`${context} is not a function.`);
        }
      }
      function isObject(x2) {
        return typeof x2 === "object" && x2 !== null || typeof x2 === "function";
      }
      function assertObject(x2, context) {
        if (!isObject(x2)) {
          throw new TypeError(`${context} is not an object.`);
        }
      }
      function assertRequiredArgument(x2, position, context) {
        if (x2 === void 0) {
          throw new TypeError(`Parameter ${position} is required in '${context}'.`);
        }
      }
      function assertRequiredField(x2, field, context) {
        if (x2 === void 0) {
          throw new TypeError(`${field} is required in '${context}'.`);
        }
      }
      function convertUnrestrictedDouble(value) {
        return Number(value);
      }
      function censorNegativeZero(x2) {
        return x2 === 0 ? 0 : x2;
      }
      function integerPart(x2) {
        return censorNegativeZero(MathTrunc(x2));
      }
      function convertUnsignedLongLongWithEnforceRange(value, context) {
        const lowerBound = 0;
        const upperBound = Number.MAX_SAFE_INTEGER;
        let x2 = Number(value);
        x2 = censorNegativeZero(x2);
        if (!NumberIsFinite(x2)) {
          throw new TypeError(`${context} is not a finite number`);
        }
        x2 = integerPart(x2);
        if (x2 < lowerBound || x2 > upperBound) {
          throw new TypeError(`${context} is outside the accepted range of ${lowerBound} to ${upperBound}, inclusive`);
        }
        if (!NumberIsFinite(x2) || x2 === 0) {
          return 0;
        }
        return x2;
      }
      function assertReadableStream(x2, context) {
        if (!IsReadableStream(x2)) {
          throw new TypeError(`${context} is not a ReadableStream.`);
        }
      }
      function AcquireReadableStreamDefaultReader(stream) {
        return new ReadableStreamDefaultReader(stream);
      }
      function ReadableStreamAddReadRequest(stream, readRequest) {
        stream._reader._readRequests.push(readRequest);
      }
      function ReadableStreamFulfillReadRequest(stream, chunk, done) {
        const reader = stream._reader;
        const readRequest = reader._readRequests.shift();
        if (done) {
          readRequest._closeSteps();
        } else {
          readRequest._chunkSteps(chunk);
        }
      }
      function ReadableStreamGetNumReadRequests(stream) {
        return stream._reader._readRequests.length;
      }
      function ReadableStreamHasDefaultReader(stream) {
        const reader = stream._reader;
        if (reader === void 0) {
          return false;
        }
        if (!IsReadableStreamDefaultReader(reader)) {
          return false;
        }
        return true;
      }
      class ReadableStreamDefaultReader {
        constructor(stream) {
          assertRequiredArgument(stream, 1, "ReadableStreamDefaultReader");
          assertReadableStream(stream, "First parameter");
          if (IsReadableStreamLocked(stream)) {
            throw new TypeError("This stream has already been locked for exclusive reading by another reader");
          }
          ReadableStreamReaderGenericInitialize(this, stream);
          this._readRequests = new SimpleQueue();
        }
        get closed() {
          if (!IsReadableStreamDefaultReader(this)) {
            return promiseRejectedWith(defaultReaderBrandCheckException("closed"));
          }
          return this._closedPromise;
        }
        cancel(reason = void 0) {
          if (!IsReadableStreamDefaultReader(this)) {
            return promiseRejectedWith(defaultReaderBrandCheckException("cancel"));
          }
          if (this._ownerReadableStream === void 0) {
            return promiseRejectedWith(readerLockException("cancel"));
          }
          return ReadableStreamReaderGenericCancel(this, reason);
        }
        read() {
          if (!IsReadableStreamDefaultReader(this)) {
            return promiseRejectedWith(defaultReaderBrandCheckException("read"));
          }
          if (this._ownerReadableStream === void 0) {
            return promiseRejectedWith(readerLockException("read from"));
          }
          let resolvePromise;
          let rejectPromise;
          const promise = newPromise((resolve, reject) => {
            resolvePromise = resolve;
            rejectPromise = reject;
          });
          const readRequest = {
            _chunkSteps: (chunk) => resolvePromise({ value: chunk, done: false }),
            _closeSteps: () => resolvePromise({ value: void 0, done: true }),
            _errorSteps: (e2) => rejectPromise(e2)
          };
          ReadableStreamDefaultReaderRead(this, readRequest);
          return promise;
        }
        releaseLock() {
          if (!IsReadableStreamDefaultReader(this)) {
            throw defaultReaderBrandCheckException("releaseLock");
          }
          if (this._ownerReadableStream === void 0) {
            return;
          }
          if (this._readRequests.length > 0) {
            throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled");
          }
          ReadableStreamReaderGenericRelease(this);
        }
      }
      Object.defineProperties(ReadableStreamDefaultReader.prototype, {
        cancel: { enumerable: true },
        read: { enumerable: true },
        releaseLock: { enumerable: true },
        closed: { enumerable: true }
      });
      if (typeof SymbolPolyfill.toStringTag === "symbol") {
        Object.defineProperty(ReadableStreamDefaultReader.prototype, SymbolPolyfill.toStringTag, {
          value: "ReadableStreamDefaultReader",
          configurable: true
        });
      }
      function IsReadableStreamDefaultReader(x2) {
        if (!typeIsObject(x2)) {
          return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x2, "_readRequests")) {
          return false;
        }
        return x2 instanceof ReadableStreamDefaultReader;
      }
      function ReadableStreamDefaultReaderRead(reader, readRequest) {
        const stream = reader._ownerReadableStream;
        stream._disturbed = true;
        if (stream._state === "closed") {
          readRequest._closeSteps();
        } else if (stream._state === "errored") {
          readRequest._errorSteps(stream._storedError);
        } else {
          stream._readableStreamController[PullSteps](readRequest);
        }
      }
      function defaultReaderBrandCheckException(name) {
        return new TypeError(`ReadableStreamDefaultReader.prototype.${name} can only be used on a ReadableStreamDefaultReader`);
      }
      const AsyncIteratorPrototype = Object.getPrototypeOf(Object.getPrototypeOf(async function* () {
      }).prototype);
      class ReadableStreamAsyncIteratorImpl {
        constructor(reader, preventCancel) {
          this._ongoingPromise = void 0;
          this._isFinished = false;
          this._reader = reader;
          this._preventCancel = preventCancel;
        }
        next() {
          const nextSteps = () => this._nextSteps();
          this._ongoingPromise = this._ongoingPromise ? transformPromiseWith(this._ongoingPromise, nextSteps, nextSteps) : nextSteps();
          return this._ongoingPromise;
        }
        return(value) {
          const returnSteps = () => this._returnSteps(value);
          return this._ongoingPromise ? transformPromiseWith(this._ongoingPromise, returnSteps, returnSteps) : returnSteps();
        }
        _nextSteps() {
          if (this._isFinished) {
            return Promise.resolve({ value: void 0, done: true });
          }
          const reader = this._reader;
          if (reader._ownerReadableStream === void 0) {
            return promiseRejectedWith(readerLockException("iterate"));
          }
          let resolvePromise;
          let rejectPromise;
          const promise = newPromise((resolve, reject) => {
            resolvePromise = resolve;
            rejectPromise = reject;
          });
          const readRequest = {
            _chunkSteps: (chunk) => {
              this._ongoingPromise = void 0;
              queueMicrotask(() => resolvePromise({ value: chunk, done: false }));
            },
            _closeSteps: () => {
              this._ongoingPromise = void 0;
              this._isFinished = true;
              ReadableStreamReaderGenericRelease(reader);
              resolvePromise({ value: void 0, done: true });
            },
            _errorSteps: (reason) => {
              this._ongoingPromise = void 0;
              this._isFinished = true;
              ReadableStreamReaderGenericRelease(reader);
              rejectPromise(reason);
            }
          };
          ReadableStreamDefaultReaderRead(reader, readRequest);
          return promise;
        }
        _returnSteps(value) {
          if (this._isFinished) {
            return Promise.resolve({ value, done: true });
          }
          this._isFinished = true;
          const reader = this._reader;
          if (reader._ownerReadableStream === void 0) {
            return promiseRejectedWith(readerLockException("finish iterating"));
          }
          if (!this._preventCancel) {
            const result = ReadableStreamReaderGenericCancel(reader, value);
            ReadableStreamReaderGenericRelease(reader);
            return transformPromiseWith(result, () => ({ value, done: true }));
          }
          ReadableStreamReaderGenericRelease(reader);
          return promiseResolvedWith({ value, done: true });
        }
      }
      const ReadableStreamAsyncIteratorPrototype = {
        next() {
          if (!IsReadableStreamAsyncIterator(this)) {
            return promiseRejectedWith(streamAsyncIteratorBrandCheckException("next"));
          }
          return this._asyncIteratorImpl.next();
        },
        return(value) {
          if (!IsReadableStreamAsyncIterator(this)) {
            return promiseRejectedWith(streamAsyncIteratorBrandCheckException("return"));
          }
          return this._asyncIteratorImpl.return(value);
        }
      };
      if (AsyncIteratorPrototype !== void 0) {
        Object.setPrototypeOf(ReadableStreamAsyncIteratorPrototype, AsyncIteratorPrototype);
      }
      function AcquireReadableStreamAsyncIterator(stream, preventCancel) {
        const reader = AcquireReadableStreamDefaultReader(stream);
        const impl = new ReadableStreamAsyncIteratorImpl(reader, preventCancel);
        const iterator = Object.create(ReadableStreamAsyncIteratorPrototype);
        iterator._asyncIteratorImpl = impl;
        return iterator;
      }
      function IsReadableStreamAsyncIterator(x2) {
        if (!typeIsObject(x2)) {
          return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x2, "_asyncIteratorImpl")) {
          return false;
        }
        try {
          return x2._asyncIteratorImpl instanceof ReadableStreamAsyncIteratorImpl;
        } catch (_a4) {
          return false;
        }
      }
      function streamAsyncIteratorBrandCheckException(name) {
        return new TypeError(`ReadableStreamAsyncIterator.${name} can only be used on a ReadableSteamAsyncIterator`);
      }
      const NumberIsNaN = Number.isNaN || function(x2) {
        return x2 !== x2;
      };
      function CreateArrayFromList(elements) {
        return elements.slice();
      }
      function CopyDataBlockBytes(dest, destOffset, src, srcOffset, n) {
        new Uint8Array(dest).set(new Uint8Array(src, srcOffset, n), destOffset);
      }
      function TransferArrayBuffer(O) {
        return O;
      }
      function IsDetachedBuffer(O) {
        return false;
      }
      function ArrayBufferSlice(buffer, begin, end) {
        if (buffer.slice) {
          return buffer.slice(begin, end);
        }
        const length = end - begin;
        const slice = new ArrayBuffer(length);
        CopyDataBlockBytes(slice, 0, buffer, begin, length);
        return slice;
      }
      function IsNonNegativeNumber(v) {
        if (typeof v !== "number") {
          return false;
        }
        if (NumberIsNaN(v)) {
          return false;
        }
        if (v < 0) {
          return false;
        }
        return true;
      }
      function CloneAsUint8Array(O) {
        const buffer = ArrayBufferSlice(O.buffer, O.byteOffset, O.byteOffset + O.byteLength);
        return new Uint8Array(buffer);
      }
      function DequeueValue(container) {
        const pair = container._queue.shift();
        container._queueTotalSize -= pair.size;
        if (container._queueTotalSize < 0) {
          container._queueTotalSize = 0;
        }
        return pair.value;
      }
      function EnqueueValueWithSize(container, value, size) {
        if (!IsNonNegativeNumber(size) || size === Infinity) {
          throw new RangeError("Size must be a finite, non-NaN, non-negative number.");
        }
        container._queue.push({ value, size });
        container._queueTotalSize += size;
      }
      function PeekQueueValue(container) {
        const pair = container._queue.peek();
        return pair.value;
      }
      function ResetQueue(container) {
        container._queue = new SimpleQueue();
        container._queueTotalSize = 0;
      }
      class ReadableStreamBYOBRequest {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        get view() {
          if (!IsReadableStreamBYOBRequest(this)) {
            throw byobRequestBrandCheckException("view");
          }
          return this._view;
        }
        respond(bytesWritten) {
          if (!IsReadableStreamBYOBRequest(this)) {
            throw byobRequestBrandCheckException("respond");
          }
          assertRequiredArgument(bytesWritten, 1, "respond");
          bytesWritten = convertUnsignedLongLongWithEnforceRange(bytesWritten, "First parameter");
          if (this._associatedReadableByteStreamController === void 0) {
            throw new TypeError("This BYOB request has been invalidated");
          }
          if (IsDetachedBuffer(this._view.buffer))
            ;
          ReadableByteStreamControllerRespond(this._associatedReadableByteStreamController, bytesWritten);
        }
        respondWithNewView(view) {
          if (!IsReadableStreamBYOBRequest(this)) {
            throw byobRequestBrandCheckException("respondWithNewView");
          }
          assertRequiredArgument(view, 1, "respondWithNewView");
          if (!ArrayBuffer.isView(view)) {
            throw new TypeError("You can only respond with array buffer views");
          }
          if (this._associatedReadableByteStreamController === void 0) {
            throw new TypeError("This BYOB request has been invalidated");
          }
          if (IsDetachedBuffer(view.buffer))
            ;
          ReadableByteStreamControllerRespondWithNewView(this._associatedReadableByteStreamController, view);
        }
      }
      Object.defineProperties(ReadableStreamBYOBRequest.prototype, {
        respond: { enumerable: true },
        respondWithNewView: { enumerable: true },
        view: { enumerable: true }
      });
      if (typeof SymbolPolyfill.toStringTag === "symbol") {
        Object.defineProperty(ReadableStreamBYOBRequest.prototype, SymbolPolyfill.toStringTag, {
          value: "ReadableStreamBYOBRequest",
          configurable: true
        });
      }
      class ReadableByteStreamController {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        get byobRequest() {
          if (!IsReadableByteStreamController(this)) {
            throw byteStreamControllerBrandCheckException("byobRequest");
          }
          return ReadableByteStreamControllerGetBYOBRequest(this);
        }
        get desiredSize() {
          if (!IsReadableByteStreamController(this)) {
            throw byteStreamControllerBrandCheckException("desiredSize");
          }
          return ReadableByteStreamControllerGetDesiredSize(this);
        }
        close() {
          if (!IsReadableByteStreamController(this)) {
            throw byteStreamControllerBrandCheckException("close");
          }
          if (this._closeRequested) {
            throw new TypeError("The stream has already been closed; do not close it again!");
          }
          const state = this._controlledReadableByteStream._state;
          if (state !== "readable") {
            throw new TypeError(`The stream (in ${state} state) is not in the readable state and cannot be closed`);
          }
          ReadableByteStreamControllerClose(this);
        }
        enqueue(chunk) {
          if (!IsReadableByteStreamController(this)) {
            throw byteStreamControllerBrandCheckException("enqueue");
          }
          assertRequiredArgument(chunk, 1, "enqueue");
          if (!ArrayBuffer.isView(chunk)) {
            throw new TypeError("chunk must be an array buffer view");
          }
          if (chunk.byteLength === 0) {
            throw new TypeError("chunk must have non-zero byteLength");
          }
          if (chunk.buffer.byteLength === 0) {
            throw new TypeError(`chunk's buffer must have non-zero byteLength`);
          }
          if (this._closeRequested) {
            throw new TypeError("stream is closed or draining");
          }
          const state = this._controlledReadableByteStream._state;
          if (state !== "readable") {
            throw new TypeError(`The stream (in ${state} state) is not in the readable state and cannot be enqueued to`);
          }
          ReadableByteStreamControllerEnqueue(this, chunk);
        }
        error(e2 = void 0) {
          if (!IsReadableByteStreamController(this)) {
            throw byteStreamControllerBrandCheckException("error");
          }
          ReadableByteStreamControllerError(this, e2);
        }
        [CancelSteps](reason) {
          ReadableByteStreamControllerClearPendingPullIntos(this);
          ResetQueue(this);
          const result = this._cancelAlgorithm(reason);
          ReadableByteStreamControllerClearAlgorithms(this);
          return result;
        }
        [PullSteps](readRequest) {
          const stream = this._controlledReadableByteStream;
          if (this._queueTotalSize > 0) {
            const entry = this._queue.shift();
            this._queueTotalSize -= entry.byteLength;
            ReadableByteStreamControllerHandleQueueDrain(this);
            const view = new Uint8Array(entry.buffer, entry.byteOffset, entry.byteLength);
            readRequest._chunkSteps(view);
            return;
          }
          const autoAllocateChunkSize = this._autoAllocateChunkSize;
          if (autoAllocateChunkSize !== void 0) {
            let buffer;
            try {
              buffer = new ArrayBuffer(autoAllocateChunkSize);
            } catch (bufferE) {
              readRequest._errorSteps(bufferE);
              return;
            }
            const pullIntoDescriptor = {
              buffer,
              bufferByteLength: autoAllocateChunkSize,
              byteOffset: 0,
              byteLength: autoAllocateChunkSize,
              bytesFilled: 0,
              elementSize: 1,
              viewConstructor: Uint8Array,
              readerType: "default"
            };
            this._pendingPullIntos.push(pullIntoDescriptor);
          }
          ReadableStreamAddReadRequest(stream, readRequest);
          ReadableByteStreamControllerCallPullIfNeeded(this);
        }
      }
      Object.defineProperties(ReadableByteStreamController.prototype, {
        close: { enumerable: true },
        enqueue: { enumerable: true },
        error: { enumerable: true },
        byobRequest: { enumerable: true },
        desiredSize: { enumerable: true }
      });
      if (typeof SymbolPolyfill.toStringTag === "symbol") {
        Object.defineProperty(ReadableByteStreamController.prototype, SymbolPolyfill.toStringTag, {
          value: "ReadableByteStreamController",
          configurable: true
        });
      }
      function IsReadableByteStreamController(x2) {
        if (!typeIsObject(x2)) {
          return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x2, "_controlledReadableByteStream")) {
          return false;
        }
        return x2 instanceof ReadableByteStreamController;
      }
      function IsReadableStreamBYOBRequest(x2) {
        if (!typeIsObject(x2)) {
          return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x2, "_associatedReadableByteStreamController")) {
          return false;
        }
        return x2 instanceof ReadableStreamBYOBRequest;
      }
      function ReadableByteStreamControllerCallPullIfNeeded(controller) {
        const shouldPull = ReadableByteStreamControllerShouldCallPull(controller);
        if (!shouldPull) {
          return;
        }
        if (controller._pulling) {
          controller._pullAgain = true;
          return;
        }
        controller._pulling = true;
        const pullPromise = controller._pullAlgorithm();
        uponPromise(pullPromise, () => {
          controller._pulling = false;
          if (controller._pullAgain) {
            controller._pullAgain = false;
            ReadableByteStreamControllerCallPullIfNeeded(controller);
          }
        }, (e2) => {
          ReadableByteStreamControllerError(controller, e2);
        });
      }
      function ReadableByteStreamControllerClearPendingPullIntos(controller) {
        ReadableByteStreamControllerInvalidateBYOBRequest(controller);
        controller._pendingPullIntos = new SimpleQueue();
      }
      function ReadableByteStreamControllerCommitPullIntoDescriptor(stream, pullIntoDescriptor) {
        let done = false;
        if (stream._state === "closed") {
          done = true;
        }
        const filledView = ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor);
        if (pullIntoDescriptor.readerType === "default") {
          ReadableStreamFulfillReadRequest(stream, filledView, done);
        } else {
          ReadableStreamFulfillReadIntoRequest(stream, filledView, done);
        }
      }
      function ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor) {
        const bytesFilled = pullIntoDescriptor.bytesFilled;
        const elementSize = pullIntoDescriptor.elementSize;
        return new pullIntoDescriptor.viewConstructor(pullIntoDescriptor.buffer, pullIntoDescriptor.byteOffset, bytesFilled / elementSize);
      }
      function ReadableByteStreamControllerEnqueueChunkToQueue(controller, buffer, byteOffset, byteLength) {
        controller._queue.push({ buffer, byteOffset, byteLength });
        controller._queueTotalSize += byteLength;
      }
      function ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor) {
        const elementSize = pullIntoDescriptor.elementSize;
        const currentAlignedBytes = pullIntoDescriptor.bytesFilled - pullIntoDescriptor.bytesFilled % elementSize;
        const maxBytesToCopy = Math.min(controller._queueTotalSize, pullIntoDescriptor.byteLength - pullIntoDescriptor.bytesFilled);
        const maxBytesFilled = pullIntoDescriptor.bytesFilled + maxBytesToCopy;
        const maxAlignedBytes = maxBytesFilled - maxBytesFilled % elementSize;
        let totalBytesToCopyRemaining = maxBytesToCopy;
        let ready = false;
        if (maxAlignedBytes > currentAlignedBytes) {
          totalBytesToCopyRemaining = maxAlignedBytes - pullIntoDescriptor.bytesFilled;
          ready = true;
        }
        const queue = controller._queue;
        while (totalBytesToCopyRemaining > 0) {
          const headOfQueue = queue.peek();
          const bytesToCopy = Math.min(totalBytesToCopyRemaining, headOfQueue.byteLength);
          const destStart = pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled;
          CopyDataBlockBytes(pullIntoDescriptor.buffer, destStart, headOfQueue.buffer, headOfQueue.byteOffset, bytesToCopy);
          if (headOfQueue.byteLength === bytesToCopy) {
            queue.shift();
          } else {
            headOfQueue.byteOffset += bytesToCopy;
            headOfQueue.byteLength -= bytesToCopy;
          }
          controller._queueTotalSize -= bytesToCopy;
          ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, bytesToCopy, pullIntoDescriptor);
          totalBytesToCopyRemaining -= bytesToCopy;
        }
        return ready;
      }
      function ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, size, pullIntoDescriptor) {
        pullIntoDescriptor.bytesFilled += size;
      }
      function ReadableByteStreamControllerHandleQueueDrain(controller) {
        if (controller._queueTotalSize === 0 && controller._closeRequested) {
          ReadableByteStreamControllerClearAlgorithms(controller);
          ReadableStreamClose(controller._controlledReadableByteStream);
        } else {
          ReadableByteStreamControllerCallPullIfNeeded(controller);
        }
      }
      function ReadableByteStreamControllerInvalidateBYOBRequest(controller) {
        if (controller._byobRequest === null) {
          return;
        }
        controller._byobRequest._associatedReadableByteStreamController = void 0;
        controller._byobRequest._view = null;
        controller._byobRequest = null;
      }
      function ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller) {
        while (controller._pendingPullIntos.length > 0) {
          if (controller._queueTotalSize === 0) {
            return;
          }
          const pullIntoDescriptor = controller._pendingPullIntos.peek();
          if (ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor)) {
            ReadableByteStreamControllerShiftPendingPullInto(controller);
            ReadableByteStreamControllerCommitPullIntoDescriptor(controller._controlledReadableByteStream, pullIntoDescriptor);
          }
        }
      }
      function ReadableByteStreamControllerPullInto(controller, view, readIntoRequest) {
        const stream = controller._controlledReadableByteStream;
        let elementSize = 1;
        if (view.constructor !== DataView) {
          elementSize = view.constructor.BYTES_PER_ELEMENT;
        }
        const ctor = view.constructor;
        const buffer = TransferArrayBuffer(view.buffer);
        const pullIntoDescriptor = {
          buffer,
          bufferByteLength: buffer.byteLength,
          byteOffset: view.byteOffset,
          byteLength: view.byteLength,
          bytesFilled: 0,
          elementSize,
          viewConstructor: ctor,
          readerType: "byob"
        };
        if (controller._pendingPullIntos.length > 0) {
          controller._pendingPullIntos.push(pullIntoDescriptor);
          ReadableStreamAddReadIntoRequest(stream, readIntoRequest);
          return;
        }
        if (stream._state === "closed") {
          const emptyView = new ctor(pullIntoDescriptor.buffer, pullIntoDescriptor.byteOffset, 0);
          readIntoRequest._closeSteps(emptyView);
          return;
        }
        if (controller._queueTotalSize > 0) {
          if (ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor)) {
            const filledView = ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor);
            ReadableByteStreamControllerHandleQueueDrain(controller);
            readIntoRequest._chunkSteps(filledView);
            return;
          }
          if (controller._closeRequested) {
            const e2 = new TypeError("Insufficient bytes to fill elements in the given buffer");
            ReadableByteStreamControllerError(controller, e2);
            readIntoRequest._errorSteps(e2);
            return;
          }
        }
        controller._pendingPullIntos.push(pullIntoDescriptor);
        ReadableStreamAddReadIntoRequest(stream, readIntoRequest);
        ReadableByteStreamControllerCallPullIfNeeded(controller);
      }
      function ReadableByteStreamControllerRespondInClosedState(controller, firstDescriptor) {
        const stream = controller._controlledReadableByteStream;
        if (ReadableStreamHasBYOBReader(stream)) {
          while (ReadableStreamGetNumReadIntoRequests(stream) > 0) {
            const pullIntoDescriptor = ReadableByteStreamControllerShiftPendingPullInto(controller);
            ReadableByteStreamControllerCommitPullIntoDescriptor(stream, pullIntoDescriptor);
          }
        }
      }
      function ReadableByteStreamControllerRespondInReadableState(controller, bytesWritten, pullIntoDescriptor) {
        ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, bytesWritten, pullIntoDescriptor);
        if (pullIntoDescriptor.bytesFilled < pullIntoDescriptor.elementSize) {
          return;
        }
        ReadableByteStreamControllerShiftPendingPullInto(controller);
        const remainderSize = pullIntoDescriptor.bytesFilled % pullIntoDescriptor.elementSize;
        if (remainderSize > 0) {
          const end = pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled;
          const remainder = ArrayBufferSlice(pullIntoDescriptor.buffer, end - remainderSize, end);
          ReadableByteStreamControllerEnqueueChunkToQueue(controller, remainder, 0, remainder.byteLength);
        }
        pullIntoDescriptor.bytesFilled -= remainderSize;
        ReadableByteStreamControllerCommitPullIntoDescriptor(controller._controlledReadableByteStream, pullIntoDescriptor);
        ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller);
      }
      function ReadableByteStreamControllerRespondInternal(controller, bytesWritten) {
        const firstDescriptor = controller._pendingPullIntos.peek();
        ReadableByteStreamControllerInvalidateBYOBRequest(controller);
        const state = controller._controlledReadableByteStream._state;
        if (state === "closed") {
          ReadableByteStreamControllerRespondInClosedState(controller);
        } else {
          ReadableByteStreamControllerRespondInReadableState(controller, bytesWritten, firstDescriptor);
        }
        ReadableByteStreamControllerCallPullIfNeeded(controller);
      }
      function ReadableByteStreamControllerShiftPendingPullInto(controller) {
        const descriptor = controller._pendingPullIntos.shift();
        return descriptor;
      }
      function ReadableByteStreamControllerShouldCallPull(controller) {
        const stream = controller._controlledReadableByteStream;
        if (stream._state !== "readable") {
          return false;
        }
        if (controller._closeRequested) {
          return false;
        }
        if (!controller._started) {
          return false;
        }
        if (ReadableStreamHasDefaultReader(stream) && ReadableStreamGetNumReadRequests(stream) > 0) {
          return true;
        }
        if (ReadableStreamHasBYOBReader(stream) && ReadableStreamGetNumReadIntoRequests(stream) > 0) {
          return true;
        }
        const desiredSize = ReadableByteStreamControllerGetDesiredSize(controller);
        if (desiredSize > 0) {
          return true;
        }
        return false;
      }
      function ReadableByteStreamControllerClearAlgorithms(controller) {
        controller._pullAlgorithm = void 0;
        controller._cancelAlgorithm = void 0;
      }
      function ReadableByteStreamControllerClose(controller) {
        const stream = controller._controlledReadableByteStream;
        if (controller._closeRequested || stream._state !== "readable") {
          return;
        }
        if (controller._queueTotalSize > 0) {
          controller._closeRequested = true;
          return;
        }
        if (controller._pendingPullIntos.length > 0) {
          const firstPendingPullInto = controller._pendingPullIntos.peek();
          if (firstPendingPullInto.bytesFilled > 0) {
            const e2 = new TypeError("Insufficient bytes to fill elements in the given buffer");
            ReadableByteStreamControllerError(controller, e2);
            throw e2;
          }
        }
        ReadableByteStreamControllerClearAlgorithms(controller);
        ReadableStreamClose(stream);
      }
      function ReadableByteStreamControllerEnqueue(controller, chunk) {
        const stream = controller._controlledReadableByteStream;
        if (controller._closeRequested || stream._state !== "readable") {
          return;
        }
        const buffer = chunk.buffer;
        const byteOffset = chunk.byteOffset;
        const byteLength = chunk.byteLength;
        const transferredBuffer = TransferArrayBuffer(buffer);
        if (controller._pendingPullIntos.length > 0) {
          const firstPendingPullInto = controller._pendingPullIntos.peek();
          if (IsDetachedBuffer(firstPendingPullInto.buffer))
            ;
          firstPendingPullInto.buffer = TransferArrayBuffer(firstPendingPullInto.buffer);
        }
        ReadableByteStreamControllerInvalidateBYOBRequest(controller);
        if (ReadableStreamHasDefaultReader(stream)) {
          if (ReadableStreamGetNumReadRequests(stream) === 0) {
            ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
          } else {
            if (controller._pendingPullIntos.length > 0) {
              ReadableByteStreamControllerShiftPendingPullInto(controller);
            }
            const transferredView = new Uint8Array(transferredBuffer, byteOffset, byteLength);
            ReadableStreamFulfillReadRequest(stream, transferredView, false);
          }
        } else if (ReadableStreamHasBYOBReader(stream)) {
          ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
          ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller);
        } else {
          ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
        }
        ReadableByteStreamControllerCallPullIfNeeded(controller);
      }
      function ReadableByteStreamControllerError(controller, e2) {
        const stream = controller._controlledReadableByteStream;
        if (stream._state !== "readable") {
          return;
        }
        ReadableByteStreamControllerClearPendingPullIntos(controller);
        ResetQueue(controller);
        ReadableByteStreamControllerClearAlgorithms(controller);
        ReadableStreamError(stream, e2);
      }
      function ReadableByteStreamControllerGetBYOBRequest(controller) {
        if (controller._byobRequest === null && controller._pendingPullIntos.length > 0) {
          const firstDescriptor = controller._pendingPullIntos.peek();
          const view = new Uint8Array(firstDescriptor.buffer, firstDescriptor.byteOffset + firstDescriptor.bytesFilled, firstDescriptor.byteLength - firstDescriptor.bytesFilled);
          const byobRequest = Object.create(ReadableStreamBYOBRequest.prototype);
          SetUpReadableStreamBYOBRequest(byobRequest, controller, view);
          controller._byobRequest = byobRequest;
        }
        return controller._byobRequest;
      }
      function ReadableByteStreamControllerGetDesiredSize(controller) {
        const state = controller._controlledReadableByteStream._state;
        if (state === "errored") {
          return null;
        }
        if (state === "closed") {
          return 0;
        }
        return controller._strategyHWM - controller._queueTotalSize;
      }
      function ReadableByteStreamControllerRespond(controller, bytesWritten) {
        const firstDescriptor = controller._pendingPullIntos.peek();
        const state = controller._controlledReadableByteStream._state;
        if (state === "closed") {
          if (bytesWritten !== 0) {
            throw new TypeError("bytesWritten must be 0 when calling respond() on a closed stream");
          }
        } else {
          if (bytesWritten === 0) {
            throw new TypeError("bytesWritten must be greater than 0 when calling respond() on a readable stream");
          }
          if (firstDescriptor.bytesFilled + bytesWritten > firstDescriptor.byteLength) {
            throw new RangeError("bytesWritten out of range");
          }
        }
        firstDescriptor.buffer = TransferArrayBuffer(firstDescriptor.buffer);
        ReadableByteStreamControllerRespondInternal(controller, bytesWritten);
      }
      function ReadableByteStreamControllerRespondWithNewView(controller, view) {
        const firstDescriptor = controller._pendingPullIntos.peek();
        const state = controller._controlledReadableByteStream._state;
        if (state === "closed") {
          if (view.byteLength !== 0) {
            throw new TypeError("The view's length must be 0 when calling respondWithNewView() on a closed stream");
          }
        } else {
          if (view.byteLength === 0) {
            throw new TypeError("The view's length must be greater than 0 when calling respondWithNewView() on a readable stream");
          }
        }
        if (firstDescriptor.byteOffset + firstDescriptor.bytesFilled !== view.byteOffset) {
          throw new RangeError("The region specified by view does not match byobRequest");
        }
        if (firstDescriptor.bufferByteLength !== view.buffer.byteLength) {
          throw new RangeError("The buffer of view has different capacity than byobRequest");
        }
        if (firstDescriptor.bytesFilled + view.byteLength > firstDescriptor.byteLength) {
          throw new RangeError("The region specified by view is larger than byobRequest");
        }
        const viewByteLength = view.byteLength;
        firstDescriptor.buffer = TransferArrayBuffer(view.buffer);
        ReadableByteStreamControllerRespondInternal(controller, viewByteLength);
      }
      function SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, autoAllocateChunkSize) {
        controller._controlledReadableByteStream = stream;
        controller._pullAgain = false;
        controller._pulling = false;
        controller._byobRequest = null;
        controller._queue = controller._queueTotalSize = void 0;
        ResetQueue(controller);
        controller._closeRequested = false;
        controller._started = false;
        controller._strategyHWM = highWaterMark;
        controller._pullAlgorithm = pullAlgorithm;
        controller._cancelAlgorithm = cancelAlgorithm;
        controller._autoAllocateChunkSize = autoAllocateChunkSize;
        controller._pendingPullIntos = new SimpleQueue();
        stream._readableStreamController = controller;
        const startResult = startAlgorithm();
        uponPromise(promiseResolvedWith(startResult), () => {
          controller._started = true;
          ReadableByteStreamControllerCallPullIfNeeded(controller);
        }, (r2) => {
          ReadableByteStreamControllerError(controller, r2);
        });
      }
      function SetUpReadableByteStreamControllerFromUnderlyingSource(stream, underlyingByteSource, highWaterMark) {
        const controller = Object.create(ReadableByteStreamController.prototype);
        let startAlgorithm = () => void 0;
        let pullAlgorithm = () => promiseResolvedWith(void 0);
        let cancelAlgorithm = () => promiseResolvedWith(void 0);
        if (underlyingByteSource.start !== void 0) {
          startAlgorithm = () => underlyingByteSource.start(controller);
        }
        if (underlyingByteSource.pull !== void 0) {
          pullAlgorithm = () => underlyingByteSource.pull(controller);
        }
        if (underlyingByteSource.cancel !== void 0) {
          cancelAlgorithm = (reason) => underlyingByteSource.cancel(reason);
        }
        const autoAllocateChunkSize = underlyingByteSource.autoAllocateChunkSize;
        if (autoAllocateChunkSize === 0) {
          throw new TypeError("autoAllocateChunkSize must be greater than 0");
        }
        SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, autoAllocateChunkSize);
      }
      function SetUpReadableStreamBYOBRequest(request, controller, view) {
        request._associatedReadableByteStreamController = controller;
        request._view = view;
      }
      function byobRequestBrandCheckException(name) {
        return new TypeError(`ReadableStreamBYOBRequest.prototype.${name} can only be used on a ReadableStreamBYOBRequest`);
      }
      function byteStreamControllerBrandCheckException(name) {
        return new TypeError(`ReadableByteStreamController.prototype.${name} can only be used on a ReadableByteStreamController`);
      }
      function AcquireReadableStreamBYOBReader(stream) {
        return new ReadableStreamBYOBReader(stream);
      }
      function ReadableStreamAddReadIntoRequest(stream, readIntoRequest) {
        stream._reader._readIntoRequests.push(readIntoRequest);
      }
      function ReadableStreamFulfillReadIntoRequest(stream, chunk, done) {
        const reader = stream._reader;
        const readIntoRequest = reader._readIntoRequests.shift();
        if (done) {
          readIntoRequest._closeSteps(chunk);
        } else {
          readIntoRequest._chunkSteps(chunk);
        }
      }
      function ReadableStreamGetNumReadIntoRequests(stream) {
        return stream._reader._readIntoRequests.length;
      }
      function ReadableStreamHasBYOBReader(stream) {
        const reader = stream._reader;
        if (reader === void 0) {
          return false;
        }
        if (!IsReadableStreamBYOBReader(reader)) {
          return false;
        }
        return true;
      }
      class ReadableStreamBYOBReader {
        constructor(stream) {
          assertRequiredArgument(stream, 1, "ReadableStreamBYOBReader");
          assertReadableStream(stream, "First parameter");
          if (IsReadableStreamLocked(stream)) {
            throw new TypeError("This stream has already been locked for exclusive reading by another reader");
          }
          if (!IsReadableByteStreamController(stream._readableStreamController)) {
            throw new TypeError("Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source");
          }
          ReadableStreamReaderGenericInitialize(this, stream);
          this._readIntoRequests = new SimpleQueue();
        }
        get closed() {
          if (!IsReadableStreamBYOBReader(this)) {
            return promiseRejectedWith(byobReaderBrandCheckException("closed"));
          }
          return this._closedPromise;
        }
        cancel(reason = void 0) {
          if (!IsReadableStreamBYOBReader(this)) {
            return promiseRejectedWith(byobReaderBrandCheckException("cancel"));
          }
          if (this._ownerReadableStream === void 0) {
            return promiseRejectedWith(readerLockException("cancel"));
          }
          return ReadableStreamReaderGenericCancel(this, reason);
        }
        read(view) {
          if (!IsReadableStreamBYOBReader(this)) {
            return promiseRejectedWith(byobReaderBrandCheckException("read"));
          }
          if (!ArrayBuffer.isView(view)) {
            return promiseRejectedWith(new TypeError("view must be an array buffer view"));
          }
          if (view.byteLength === 0) {
            return promiseRejectedWith(new TypeError("view must have non-zero byteLength"));
          }
          if (view.buffer.byteLength === 0) {
            return promiseRejectedWith(new TypeError(`view's buffer must have non-zero byteLength`));
          }
          if (IsDetachedBuffer(view.buffer))
            ;
          if (this._ownerReadableStream === void 0) {
            return promiseRejectedWith(readerLockException("read from"));
          }
          let resolvePromise;
          let rejectPromise;
          const promise = newPromise((resolve, reject) => {
            resolvePromise = resolve;
            rejectPromise = reject;
          });
          const readIntoRequest = {
            _chunkSteps: (chunk) => resolvePromise({ value: chunk, done: false }),
            _closeSteps: (chunk) => resolvePromise({ value: chunk, done: true }),
            _errorSteps: (e2) => rejectPromise(e2)
          };
          ReadableStreamBYOBReaderRead(this, view, readIntoRequest);
          return promise;
        }
        releaseLock() {
          if (!IsReadableStreamBYOBReader(this)) {
            throw byobReaderBrandCheckException("releaseLock");
          }
          if (this._ownerReadableStream === void 0) {
            return;
          }
          if (this._readIntoRequests.length > 0) {
            throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled");
          }
          ReadableStreamReaderGenericRelease(this);
        }
      }
      Object.defineProperties(ReadableStreamBYOBReader.prototype, {
        cancel: { enumerable: true },
        read: { enumerable: true },
        releaseLock: { enumerable: true },
        closed: { enumerable: true }
      });
      if (typeof SymbolPolyfill.toStringTag === "symbol") {
        Object.defineProperty(ReadableStreamBYOBReader.prototype, SymbolPolyfill.toStringTag, {
          value: "ReadableStreamBYOBReader",
          configurable: true
        });
      }
      function IsReadableStreamBYOBReader(x2) {
        if (!typeIsObject(x2)) {
          return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x2, "_readIntoRequests")) {
          return false;
        }
        return x2 instanceof ReadableStreamBYOBReader;
      }
      function ReadableStreamBYOBReaderRead(reader, view, readIntoRequest) {
        const stream = reader._ownerReadableStream;
        stream._disturbed = true;
        if (stream._state === "errored") {
          readIntoRequest._errorSteps(stream._storedError);
        } else {
          ReadableByteStreamControllerPullInto(stream._readableStreamController, view, readIntoRequest);
        }
      }
      function byobReaderBrandCheckException(name) {
        return new TypeError(`ReadableStreamBYOBReader.prototype.${name} can only be used on a ReadableStreamBYOBReader`);
      }
      function ExtractHighWaterMark(strategy, defaultHWM) {
        const { highWaterMark } = strategy;
        if (highWaterMark === void 0) {
          return defaultHWM;
        }
        if (NumberIsNaN(highWaterMark) || highWaterMark < 0) {
          throw new RangeError("Invalid highWaterMark");
        }
        return highWaterMark;
      }
      function ExtractSizeAlgorithm(strategy) {
        const { size } = strategy;
        if (!size) {
          return () => 1;
        }
        return size;
      }
      function convertQueuingStrategy(init, context) {
        assertDictionary(init, context);
        const highWaterMark = init === null || init === void 0 ? void 0 : init.highWaterMark;
        const size = init === null || init === void 0 ? void 0 : init.size;
        return {
          highWaterMark: highWaterMark === void 0 ? void 0 : convertUnrestrictedDouble(highWaterMark),
          size: size === void 0 ? void 0 : convertQueuingStrategySize(size, `${context} has member 'size' that`)
        };
      }
      function convertQueuingStrategySize(fn, context) {
        assertFunction(fn, context);
        return (chunk) => convertUnrestrictedDouble(fn(chunk));
      }
      function convertUnderlyingSink(original, context) {
        assertDictionary(original, context);
        const abort = original === null || original === void 0 ? void 0 : original.abort;
        const close = original === null || original === void 0 ? void 0 : original.close;
        const start = original === null || original === void 0 ? void 0 : original.start;
        const type = original === null || original === void 0 ? void 0 : original.type;
        const write = original === null || original === void 0 ? void 0 : original.write;
        return {
          abort: abort === void 0 ? void 0 : convertUnderlyingSinkAbortCallback(abort, original, `${context} has member 'abort' that`),
          close: close === void 0 ? void 0 : convertUnderlyingSinkCloseCallback(close, original, `${context} has member 'close' that`),
          start: start === void 0 ? void 0 : convertUnderlyingSinkStartCallback(start, original, `${context} has member 'start' that`),
          write: write === void 0 ? void 0 : convertUnderlyingSinkWriteCallback(write, original, `${context} has member 'write' that`),
          type
        };
      }
      function convertUnderlyingSinkAbortCallback(fn, original, context) {
        assertFunction(fn, context);
        return (reason) => promiseCall(fn, original, [reason]);
      }
      function convertUnderlyingSinkCloseCallback(fn, original, context) {
        assertFunction(fn, context);
        return () => promiseCall(fn, original, []);
      }
      function convertUnderlyingSinkStartCallback(fn, original, context) {
        assertFunction(fn, context);
        return (controller) => reflectCall(fn, original, [controller]);
      }
      function convertUnderlyingSinkWriteCallback(fn, original, context) {
        assertFunction(fn, context);
        return (chunk, controller) => promiseCall(fn, original, [chunk, controller]);
      }
      function assertWritableStream(x2, context) {
        if (!IsWritableStream(x2)) {
          throw new TypeError(`${context} is not a WritableStream.`);
        }
      }
      function isAbortSignal2(value) {
        if (typeof value !== "object" || value === null) {
          return false;
        }
        try {
          return typeof value.aborted === "boolean";
        } catch (_a4) {
          return false;
        }
      }
      const supportsAbortController = typeof AbortController === "function";
      function createAbortController() {
        if (supportsAbortController) {
          return new AbortController();
        }
        return void 0;
      }
      class WritableStream {
        constructor(rawUnderlyingSink = {}, rawStrategy = {}) {
          if (rawUnderlyingSink === void 0) {
            rawUnderlyingSink = null;
          } else {
            assertObject(rawUnderlyingSink, "First parameter");
          }
          const strategy = convertQueuingStrategy(rawStrategy, "Second parameter");
          const underlyingSink = convertUnderlyingSink(rawUnderlyingSink, "First parameter");
          InitializeWritableStream(this);
          const type = underlyingSink.type;
          if (type !== void 0) {
            throw new RangeError("Invalid type is specified");
          }
          const sizeAlgorithm = ExtractSizeAlgorithm(strategy);
          const highWaterMark = ExtractHighWaterMark(strategy, 1);
          SetUpWritableStreamDefaultControllerFromUnderlyingSink(this, underlyingSink, highWaterMark, sizeAlgorithm);
        }
        get locked() {
          if (!IsWritableStream(this)) {
            throw streamBrandCheckException$2("locked");
          }
          return IsWritableStreamLocked(this);
        }
        abort(reason = void 0) {
          if (!IsWritableStream(this)) {
            return promiseRejectedWith(streamBrandCheckException$2("abort"));
          }
          if (IsWritableStreamLocked(this)) {
            return promiseRejectedWith(new TypeError("Cannot abort a stream that already has a writer"));
          }
          return WritableStreamAbort(this, reason);
        }
        close() {
          if (!IsWritableStream(this)) {
            return promiseRejectedWith(streamBrandCheckException$2("close"));
          }
          if (IsWritableStreamLocked(this)) {
            return promiseRejectedWith(new TypeError("Cannot close a stream that already has a writer"));
          }
          if (WritableStreamCloseQueuedOrInFlight(this)) {
            return promiseRejectedWith(new TypeError("Cannot close an already-closing stream"));
          }
          return WritableStreamClose(this);
        }
        getWriter() {
          if (!IsWritableStream(this)) {
            throw streamBrandCheckException$2("getWriter");
          }
          return AcquireWritableStreamDefaultWriter(this);
        }
      }
      Object.defineProperties(WritableStream.prototype, {
        abort: { enumerable: true },
        close: { enumerable: true },
        getWriter: { enumerable: true },
        locked: { enumerable: true }
      });
      if (typeof SymbolPolyfill.toStringTag === "symbol") {
        Object.defineProperty(WritableStream.prototype, SymbolPolyfill.toStringTag, {
          value: "WritableStream",
          configurable: true
        });
      }
      function AcquireWritableStreamDefaultWriter(stream) {
        return new WritableStreamDefaultWriter(stream);
      }
      function CreateWritableStream(startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark = 1, sizeAlgorithm = () => 1) {
        const stream = Object.create(WritableStream.prototype);
        InitializeWritableStream(stream);
        const controller = Object.create(WritableStreamDefaultController.prototype);
        SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm);
        return stream;
      }
      function InitializeWritableStream(stream) {
        stream._state = "writable";
        stream._storedError = void 0;
        stream._writer = void 0;
        stream._writableStreamController = void 0;
        stream._writeRequests = new SimpleQueue();
        stream._inFlightWriteRequest = void 0;
        stream._closeRequest = void 0;
        stream._inFlightCloseRequest = void 0;
        stream._pendingAbortRequest = void 0;
        stream._backpressure = false;
      }
      function IsWritableStream(x2) {
        if (!typeIsObject(x2)) {
          return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x2, "_writableStreamController")) {
          return false;
        }
        return x2 instanceof WritableStream;
      }
      function IsWritableStreamLocked(stream) {
        if (stream._writer === void 0) {
          return false;
        }
        return true;
      }
      function WritableStreamAbort(stream, reason) {
        var _a4;
        if (stream._state === "closed" || stream._state === "errored") {
          return promiseResolvedWith(void 0);
        }
        stream._writableStreamController._abortReason = reason;
        (_a4 = stream._writableStreamController._abortController) === null || _a4 === void 0 ? void 0 : _a4.abort();
        const state = stream._state;
        if (state === "closed" || state === "errored") {
          return promiseResolvedWith(void 0);
        }
        if (stream._pendingAbortRequest !== void 0) {
          return stream._pendingAbortRequest._promise;
        }
        let wasAlreadyErroring = false;
        if (state === "erroring") {
          wasAlreadyErroring = true;
          reason = void 0;
        }
        const promise = newPromise((resolve, reject) => {
          stream._pendingAbortRequest = {
            _promise: void 0,
            _resolve: resolve,
            _reject: reject,
            _reason: reason,
            _wasAlreadyErroring: wasAlreadyErroring
          };
        });
        stream._pendingAbortRequest._promise = promise;
        if (!wasAlreadyErroring) {
          WritableStreamStartErroring(stream, reason);
        }
        return promise;
      }
      function WritableStreamClose(stream) {
        const state = stream._state;
        if (state === "closed" || state === "errored") {
          return promiseRejectedWith(new TypeError(`The stream (in ${state} state) is not in the writable state and cannot be closed`));
        }
        const promise = newPromise((resolve, reject) => {
          const closeRequest = {
            _resolve: resolve,
            _reject: reject
          };
          stream._closeRequest = closeRequest;
        });
        const writer = stream._writer;
        if (writer !== void 0 && stream._backpressure && state === "writable") {
          defaultWriterReadyPromiseResolve(writer);
        }
        WritableStreamDefaultControllerClose(stream._writableStreamController);
        return promise;
      }
      function WritableStreamAddWriteRequest(stream) {
        const promise = newPromise((resolve, reject) => {
          const writeRequest = {
            _resolve: resolve,
            _reject: reject
          };
          stream._writeRequests.push(writeRequest);
        });
        return promise;
      }
      function WritableStreamDealWithRejection(stream, error) {
        const state = stream._state;
        if (state === "writable") {
          WritableStreamStartErroring(stream, error);
          return;
        }
        WritableStreamFinishErroring(stream);
      }
      function WritableStreamStartErroring(stream, reason) {
        const controller = stream._writableStreamController;
        stream._state = "erroring";
        stream._storedError = reason;
        const writer = stream._writer;
        if (writer !== void 0) {
          WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, reason);
        }
        if (!WritableStreamHasOperationMarkedInFlight(stream) && controller._started) {
          WritableStreamFinishErroring(stream);
        }
      }
      function WritableStreamFinishErroring(stream) {
        stream._state = "errored";
        stream._writableStreamController[ErrorSteps]();
        const storedError = stream._storedError;
        stream._writeRequests.forEach((writeRequest) => {
          writeRequest._reject(storedError);
        });
        stream._writeRequests = new SimpleQueue();
        if (stream._pendingAbortRequest === void 0) {
          WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
          return;
        }
        const abortRequest = stream._pendingAbortRequest;
        stream._pendingAbortRequest = void 0;
        if (abortRequest._wasAlreadyErroring) {
          abortRequest._reject(storedError);
          WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
          return;
        }
        const promise = stream._writableStreamController[AbortSteps](abortRequest._reason);
        uponPromise(promise, () => {
          abortRequest._resolve();
          WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
        }, (reason) => {
          abortRequest._reject(reason);
          WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
        });
      }
      function WritableStreamFinishInFlightWrite(stream) {
        stream._inFlightWriteRequest._resolve(void 0);
        stream._inFlightWriteRequest = void 0;
      }
      function WritableStreamFinishInFlightWriteWithError(stream, error) {
        stream._inFlightWriteRequest._reject(error);
        stream._inFlightWriteRequest = void 0;
        WritableStreamDealWithRejection(stream, error);
      }
      function WritableStreamFinishInFlightClose(stream) {
        stream._inFlightCloseRequest._resolve(void 0);
        stream._inFlightCloseRequest = void 0;
        const state = stream._state;
        if (state === "erroring") {
          stream._storedError = void 0;
          if (stream._pendingAbortRequest !== void 0) {
            stream._pendingAbortRequest._resolve();
            stream._pendingAbortRequest = void 0;
          }
        }
        stream._state = "closed";
        const writer = stream._writer;
        if (writer !== void 0) {
          defaultWriterClosedPromiseResolve(writer);
        }
      }
      function WritableStreamFinishInFlightCloseWithError(stream, error) {
        stream._inFlightCloseRequest._reject(error);
        stream._inFlightCloseRequest = void 0;
        if (stream._pendingAbortRequest !== void 0) {
          stream._pendingAbortRequest._reject(error);
          stream._pendingAbortRequest = void 0;
        }
        WritableStreamDealWithRejection(stream, error);
      }
      function WritableStreamCloseQueuedOrInFlight(stream) {
        if (stream._closeRequest === void 0 && stream._inFlightCloseRequest === void 0) {
          return false;
        }
        return true;
      }
      function WritableStreamHasOperationMarkedInFlight(stream) {
        if (stream._inFlightWriteRequest === void 0 && stream._inFlightCloseRequest === void 0) {
          return false;
        }
        return true;
      }
      function WritableStreamMarkCloseRequestInFlight(stream) {
        stream._inFlightCloseRequest = stream._closeRequest;
        stream._closeRequest = void 0;
      }
      function WritableStreamMarkFirstWriteRequestInFlight(stream) {
        stream._inFlightWriteRequest = stream._writeRequests.shift();
      }
      function WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream) {
        if (stream._closeRequest !== void 0) {
          stream._closeRequest._reject(stream._storedError);
          stream._closeRequest = void 0;
        }
        const writer = stream._writer;
        if (writer !== void 0) {
          defaultWriterClosedPromiseReject(writer, stream._storedError);
        }
      }
      function WritableStreamUpdateBackpressure(stream, backpressure) {
        const writer = stream._writer;
        if (writer !== void 0 && backpressure !== stream._backpressure) {
          if (backpressure) {
            defaultWriterReadyPromiseReset(writer);
          } else {
            defaultWriterReadyPromiseResolve(writer);
          }
        }
        stream._backpressure = backpressure;
      }
      class WritableStreamDefaultWriter {
        constructor(stream) {
          assertRequiredArgument(stream, 1, "WritableStreamDefaultWriter");
          assertWritableStream(stream, "First parameter");
          if (IsWritableStreamLocked(stream)) {
            throw new TypeError("This stream has already been locked for exclusive writing by another writer");
          }
          this._ownerWritableStream = stream;
          stream._writer = this;
          const state = stream._state;
          if (state === "writable") {
            if (!WritableStreamCloseQueuedOrInFlight(stream) && stream._backpressure) {
              defaultWriterReadyPromiseInitialize(this);
            } else {
              defaultWriterReadyPromiseInitializeAsResolved(this);
            }
            defaultWriterClosedPromiseInitialize(this);
          } else if (state === "erroring") {
            defaultWriterReadyPromiseInitializeAsRejected(this, stream._storedError);
            defaultWriterClosedPromiseInitialize(this);
          } else if (state === "closed") {
            defaultWriterReadyPromiseInitializeAsResolved(this);
            defaultWriterClosedPromiseInitializeAsResolved(this);
          } else {
            const storedError = stream._storedError;
            defaultWriterReadyPromiseInitializeAsRejected(this, storedError);
            defaultWriterClosedPromiseInitializeAsRejected(this, storedError);
          }
        }
        get closed() {
          if (!IsWritableStreamDefaultWriter(this)) {
            return promiseRejectedWith(defaultWriterBrandCheckException("closed"));
          }
          return this._closedPromise;
        }
        get desiredSize() {
          if (!IsWritableStreamDefaultWriter(this)) {
            throw defaultWriterBrandCheckException("desiredSize");
          }
          if (this._ownerWritableStream === void 0) {
            throw defaultWriterLockException("desiredSize");
          }
          return WritableStreamDefaultWriterGetDesiredSize(this);
        }
        get ready() {
          if (!IsWritableStreamDefaultWriter(this)) {
            return promiseRejectedWith(defaultWriterBrandCheckException("ready"));
          }
          return this._readyPromise;
        }
        abort(reason = void 0) {
          if (!IsWritableStreamDefaultWriter(this)) {
            return promiseRejectedWith(defaultWriterBrandCheckException("abort"));
          }
          if (this._ownerWritableStream === void 0) {
            return promiseRejectedWith(defaultWriterLockException("abort"));
          }
          return WritableStreamDefaultWriterAbort(this, reason);
        }
        close() {
          if (!IsWritableStreamDefaultWriter(this)) {
            return promiseRejectedWith(defaultWriterBrandCheckException("close"));
          }
          const stream = this._ownerWritableStream;
          if (stream === void 0) {
            return promiseRejectedWith(defaultWriterLockException("close"));
          }
          if (WritableStreamCloseQueuedOrInFlight(stream)) {
            return promiseRejectedWith(new TypeError("Cannot close an already-closing stream"));
          }
          return WritableStreamDefaultWriterClose(this);
        }
        releaseLock() {
          if (!IsWritableStreamDefaultWriter(this)) {
            throw defaultWriterBrandCheckException("releaseLock");
          }
          const stream = this._ownerWritableStream;
          if (stream === void 0) {
            return;
          }
          WritableStreamDefaultWriterRelease(this);
        }
        write(chunk = void 0) {
          if (!IsWritableStreamDefaultWriter(this)) {
            return promiseRejectedWith(defaultWriterBrandCheckException("write"));
          }
          if (this._ownerWritableStream === void 0) {
            return promiseRejectedWith(defaultWriterLockException("write to"));
          }
          return WritableStreamDefaultWriterWrite(this, chunk);
        }
      }
      Object.defineProperties(WritableStreamDefaultWriter.prototype, {
        abort: { enumerable: true },
        close: { enumerable: true },
        releaseLock: { enumerable: true },
        write: { enumerable: true },
        closed: { enumerable: true },
        desiredSize: { enumerable: true },
        ready: { enumerable: true }
      });
      if (typeof SymbolPolyfill.toStringTag === "symbol") {
        Object.defineProperty(WritableStreamDefaultWriter.prototype, SymbolPolyfill.toStringTag, {
          value: "WritableStreamDefaultWriter",
          configurable: true
        });
      }
      function IsWritableStreamDefaultWriter(x2) {
        if (!typeIsObject(x2)) {
          return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x2, "_ownerWritableStream")) {
          return false;
        }
        return x2 instanceof WritableStreamDefaultWriter;
      }
      function WritableStreamDefaultWriterAbort(writer, reason) {
        const stream = writer._ownerWritableStream;
        return WritableStreamAbort(stream, reason);
      }
      function WritableStreamDefaultWriterClose(writer) {
        const stream = writer._ownerWritableStream;
        return WritableStreamClose(stream);
      }
      function WritableStreamDefaultWriterCloseWithErrorPropagation(writer) {
        const stream = writer._ownerWritableStream;
        const state = stream._state;
        if (WritableStreamCloseQueuedOrInFlight(stream) || state === "closed") {
          return promiseResolvedWith(void 0);
        }
        if (state === "errored") {
          return promiseRejectedWith(stream._storedError);
        }
        return WritableStreamDefaultWriterClose(writer);
      }
      function WritableStreamDefaultWriterEnsureClosedPromiseRejected(writer, error) {
        if (writer._closedPromiseState === "pending") {
          defaultWriterClosedPromiseReject(writer, error);
        } else {
          defaultWriterClosedPromiseResetToRejected(writer, error);
        }
      }
      function WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, error) {
        if (writer._readyPromiseState === "pending") {
          defaultWriterReadyPromiseReject(writer, error);
        } else {
          defaultWriterReadyPromiseResetToRejected(writer, error);
        }
      }
      function WritableStreamDefaultWriterGetDesiredSize(writer) {
        const stream = writer._ownerWritableStream;
        const state = stream._state;
        if (state === "errored" || state === "erroring") {
          return null;
        }
        if (state === "closed") {
          return 0;
        }
        return WritableStreamDefaultControllerGetDesiredSize(stream._writableStreamController);
      }
      function WritableStreamDefaultWriterRelease(writer) {
        const stream = writer._ownerWritableStream;
        const releasedError = new TypeError(`Writer was released and can no longer be used to monitor the stream's closedness`);
        WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, releasedError);
        WritableStreamDefaultWriterEnsureClosedPromiseRejected(writer, releasedError);
        stream._writer = void 0;
        writer._ownerWritableStream = void 0;
      }
      function WritableStreamDefaultWriterWrite(writer, chunk) {
        const stream = writer._ownerWritableStream;
        const controller = stream._writableStreamController;
        const chunkSize = WritableStreamDefaultControllerGetChunkSize(controller, chunk);
        if (stream !== writer._ownerWritableStream) {
          return promiseRejectedWith(defaultWriterLockException("write to"));
        }
        const state = stream._state;
        if (state === "errored") {
          return promiseRejectedWith(stream._storedError);
        }
        if (WritableStreamCloseQueuedOrInFlight(stream) || state === "closed") {
          return promiseRejectedWith(new TypeError("The stream is closing or closed and cannot be written to"));
        }
        if (state === "erroring") {
          return promiseRejectedWith(stream._storedError);
        }
        const promise = WritableStreamAddWriteRequest(stream);
        WritableStreamDefaultControllerWrite(controller, chunk, chunkSize);
        return promise;
      }
      const closeSentinel = {};
      class WritableStreamDefaultController {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        get abortReason() {
          if (!IsWritableStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException$2("abortReason");
          }
          return this._abortReason;
        }
        get signal() {
          if (!IsWritableStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException$2("signal");
          }
          if (this._abortController === void 0) {
            throw new TypeError("WritableStreamDefaultController.prototype.signal is not supported");
          }
          return this._abortController.signal;
        }
        error(e2 = void 0) {
          if (!IsWritableStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException$2("error");
          }
          const state = this._controlledWritableStream._state;
          if (state !== "writable") {
            return;
          }
          WritableStreamDefaultControllerError(this, e2);
        }
        [AbortSteps](reason) {
          const result = this._abortAlgorithm(reason);
          WritableStreamDefaultControllerClearAlgorithms(this);
          return result;
        }
        [ErrorSteps]() {
          ResetQueue(this);
        }
      }
      Object.defineProperties(WritableStreamDefaultController.prototype, {
        abortReason: { enumerable: true },
        signal: { enumerable: true },
        error: { enumerable: true }
      });
      if (typeof SymbolPolyfill.toStringTag === "symbol") {
        Object.defineProperty(WritableStreamDefaultController.prototype, SymbolPolyfill.toStringTag, {
          value: "WritableStreamDefaultController",
          configurable: true
        });
      }
      function IsWritableStreamDefaultController(x2) {
        if (!typeIsObject(x2)) {
          return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x2, "_controlledWritableStream")) {
          return false;
        }
        return x2 instanceof WritableStreamDefaultController;
      }
      function SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm) {
        controller._controlledWritableStream = stream;
        stream._writableStreamController = controller;
        controller._queue = void 0;
        controller._queueTotalSize = void 0;
        ResetQueue(controller);
        controller._abortReason = void 0;
        controller._abortController = createAbortController();
        controller._started = false;
        controller._strategySizeAlgorithm = sizeAlgorithm;
        controller._strategyHWM = highWaterMark;
        controller._writeAlgorithm = writeAlgorithm;
        controller._closeAlgorithm = closeAlgorithm;
        controller._abortAlgorithm = abortAlgorithm;
        const backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
        WritableStreamUpdateBackpressure(stream, backpressure);
        const startResult = startAlgorithm();
        const startPromise = promiseResolvedWith(startResult);
        uponPromise(startPromise, () => {
          controller._started = true;
          WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
        }, (r2) => {
          controller._started = true;
          WritableStreamDealWithRejection(stream, r2);
        });
      }
      function SetUpWritableStreamDefaultControllerFromUnderlyingSink(stream, underlyingSink, highWaterMark, sizeAlgorithm) {
        const controller = Object.create(WritableStreamDefaultController.prototype);
        let startAlgorithm = () => void 0;
        let writeAlgorithm = () => promiseResolvedWith(void 0);
        let closeAlgorithm = () => promiseResolvedWith(void 0);
        let abortAlgorithm = () => promiseResolvedWith(void 0);
        if (underlyingSink.start !== void 0) {
          startAlgorithm = () => underlyingSink.start(controller);
        }
        if (underlyingSink.write !== void 0) {
          writeAlgorithm = (chunk) => underlyingSink.write(chunk, controller);
        }
        if (underlyingSink.close !== void 0) {
          closeAlgorithm = () => underlyingSink.close();
        }
        if (underlyingSink.abort !== void 0) {
          abortAlgorithm = (reason) => underlyingSink.abort(reason);
        }
        SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm);
      }
      function WritableStreamDefaultControllerClearAlgorithms(controller) {
        controller._writeAlgorithm = void 0;
        controller._closeAlgorithm = void 0;
        controller._abortAlgorithm = void 0;
        controller._strategySizeAlgorithm = void 0;
      }
      function WritableStreamDefaultControllerClose(controller) {
        EnqueueValueWithSize(controller, closeSentinel, 0);
        WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
      }
      function WritableStreamDefaultControllerGetChunkSize(controller, chunk) {
        try {
          return controller._strategySizeAlgorithm(chunk);
        } catch (chunkSizeE) {
          WritableStreamDefaultControllerErrorIfNeeded(controller, chunkSizeE);
          return 1;
        }
      }
      function WritableStreamDefaultControllerGetDesiredSize(controller) {
        return controller._strategyHWM - controller._queueTotalSize;
      }
      function WritableStreamDefaultControllerWrite(controller, chunk, chunkSize) {
        try {
          EnqueueValueWithSize(controller, chunk, chunkSize);
        } catch (enqueueE) {
          WritableStreamDefaultControllerErrorIfNeeded(controller, enqueueE);
          return;
        }
        const stream = controller._controlledWritableStream;
        if (!WritableStreamCloseQueuedOrInFlight(stream) && stream._state === "writable") {
          const backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
          WritableStreamUpdateBackpressure(stream, backpressure);
        }
        WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
      }
      function WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller) {
        const stream = controller._controlledWritableStream;
        if (!controller._started) {
          return;
        }
        if (stream._inFlightWriteRequest !== void 0) {
          return;
        }
        const state = stream._state;
        if (state === "erroring") {
          WritableStreamFinishErroring(stream);
          return;
        }
        if (controller._queue.length === 0) {
          return;
        }
        const value = PeekQueueValue(controller);
        if (value === closeSentinel) {
          WritableStreamDefaultControllerProcessClose(controller);
        } else {
          WritableStreamDefaultControllerProcessWrite(controller, value);
        }
      }
      function WritableStreamDefaultControllerErrorIfNeeded(controller, error) {
        if (controller._controlledWritableStream._state === "writable") {
          WritableStreamDefaultControllerError(controller, error);
        }
      }
      function WritableStreamDefaultControllerProcessClose(controller) {
        const stream = controller._controlledWritableStream;
        WritableStreamMarkCloseRequestInFlight(stream);
        DequeueValue(controller);
        const sinkClosePromise = controller._closeAlgorithm();
        WritableStreamDefaultControllerClearAlgorithms(controller);
        uponPromise(sinkClosePromise, () => {
          WritableStreamFinishInFlightClose(stream);
        }, (reason) => {
          WritableStreamFinishInFlightCloseWithError(stream, reason);
        });
      }
      function WritableStreamDefaultControllerProcessWrite(controller, chunk) {
        const stream = controller._controlledWritableStream;
        WritableStreamMarkFirstWriteRequestInFlight(stream);
        const sinkWritePromise = controller._writeAlgorithm(chunk);
        uponPromise(sinkWritePromise, () => {
          WritableStreamFinishInFlightWrite(stream);
          const state = stream._state;
          DequeueValue(controller);
          if (!WritableStreamCloseQueuedOrInFlight(stream) && state === "writable") {
            const backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
            WritableStreamUpdateBackpressure(stream, backpressure);
          }
          WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
        }, (reason) => {
          if (stream._state === "writable") {
            WritableStreamDefaultControllerClearAlgorithms(controller);
          }
          WritableStreamFinishInFlightWriteWithError(stream, reason);
        });
      }
      function WritableStreamDefaultControllerGetBackpressure(controller) {
        const desiredSize = WritableStreamDefaultControllerGetDesiredSize(controller);
        return desiredSize <= 0;
      }
      function WritableStreamDefaultControllerError(controller, error) {
        const stream = controller._controlledWritableStream;
        WritableStreamDefaultControllerClearAlgorithms(controller);
        WritableStreamStartErroring(stream, error);
      }
      function streamBrandCheckException$2(name) {
        return new TypeError(`WritableStream.prototype.${name} can only be used on a WritableStream`);
      }
      function defaultControllerBrandCheckException$2(name) {
        return new TypeError(`WritableStreamDefaultController.prototype.${name} can only be used on a WritableStreamDefaultController`);
      }
      function defaultWriterBrandCheckException(name) {
        return new TypeError(`WritableStreamDefaultWriter.prototype.${name} can only be used on a WritableStreamDefaultWriter`);
      }
      function defaultWriterLockException(name) {
        return new TypeError("Cannot " + name + " a stream using a released writer");
      }
      function defaultWriterClosedPromiseInitialize(writer) {
        writer._closedPromise = newPromise((resolve, reject) => {
          writer._closedPromise_resolve = resolve;
          writer._closedPromise_reject = reject;
          writer._closedPromiseState = "pending";
        });
      }
      function defaultWriterClosedPromiseInitializeAsRejected(writer, reason) {
        defaultWriterClosedPromiseInitialize(writer);
        defaultWriterClosedPromiseReject(writer, reason);
      }
      function defaultWriterClosedPromiseInitializeAsResolved(writer) {
        defaultWriterClosedPromiseInitialize(writer);
        defaultWriterClosedPromiseResolve(writer);
      }
      function defaultWriterClosedPromiseReject(writer, reason) {
        if (writer._closedPromise_reject === void 0) {
          return;
        }
        setPromiseIsHandledToTrue(writer._closedPromise);
        writer._closedPromise_reject(reason);
        writer._closedPromise_resolve = void 0;
        writer._closedPromise_reject = void 0;
        writer._closedPromiseState = "rejected";
      }
      function defaultWriterClosedPromiseResetToRejected(writer, reason) {
        defaultWriterClosedPromiseInitializeAsRejected(writer, reason);
      }
      function defaultWriterClosedPromiseResolve(writer) {
        if (writer._closedPromise_resolve === void 0) {
          return;
        }
        writer._closedPromise_resolve(void 0);
        writer._closedPromise_resolve = void 0;
        writer._closedPromise_reject = void 0;
        writer._closedPromiseState = "resolved";
      }
      function defaultWriterReadyPromiseInitialize(writer) {
        writer._readyPromise = newPromise((resolve, reject) => {
          writer._readyPromise_resolve = resolve;
          writer._readyPromise_reject = reject;
        });
        writer._readyPromiseState = "pending";
      }
      function defaultWriterReadyPromiseInitializeAsRejected(writer, reason) {
        defaultWriterReadyPromiseInitialize(writer);
        defaultWriterReadyPromiseReject(writer, reason);
      }
      function defaultWriterReadyPromiseInitializeAsResolved(writer) {
        defaultWriterReadyPromiseInitialize(writer);
        defaultWriterReadyPromiseResolve(writer);
      }
      function defaultWriterReadyPromiseReject(writer, reason) {
        if (writer._readyPromise_reject === void 0) {
          return;
        }
        setPromiseIsHandledToTrue(writer._readyPromise);
        writer._readyPromise_reject(reason);
        writer._readyPromise_resolve = void 0;
        writer._readyPromise_reject = void 0;
        writer._readyPromiseState = "rejected";
      }
      function defaultWriterReadyPromiseReset(writer) {
        defaultWriterReadyPromiseInitialize(writer);
      }
      function defaultWriterReadyPromiseResetToRejected(writer, reason) {
        defaultWriterReadyPromiseInitializeAsRejected(writer, reason);
      }
      function defaultWriterReadyPromiseResolve(writer) {
        if (writer._readyPromise_resolve === void 0) {
          return;
        }
        writer._readyPromise_resolve(void 0);
        writer._readyPromise_resolve = void 0;
        writer._readyPromise_reject = void 0;
        writer._readyPromiseState = "fulfilled";
      }
      const NativeDOMException = typeof DOMException !== "undefined" ? DOMException : void 0;
      function isDOMExceptionConstructor(ctor) {
        if (!(typeof ctor === "function" || typeof ctor === "object")) {
          return false;
        }
        try {
          new ctor();
          return true;
        } catch (_a4) {
          return false;
        }
      }
      function createDOMExceptionPolyfill() {
        const ctor = function DOMException3(message, name) {
          this.message = message || "";
          this.name = name || "Error";
          if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
          }
        };
        ctor.prototype = Object.create(Error.prototype);
        Object.defineProperty(ctor.prototype, "constructor", { value: ctor, writable: true, configurable: true });
        return ctor;
      }
      const DOMException$1 = isDOMExceptionConstructor(NativeDOMException) ? NativeDOMException : createDOMExceptionPolyfill();
      function ReadableStreamPipeTo(source, dest, preventClose, preventAbort, preventCancel, signal) {
        const reader = AcquireReadableStreamDefaultReader(source);
        const writer = AcquireWritableStreamDefaultWriter(dest);
        source._disturbed = true;
        let shuttingDown = false;
        let currentWrite = promiseResolvedWith(void 0);
        return newPromise((resolve, reject) => {
          let abortAlgorithm;
          if (signal !== void 0) {
            abortAlgorithm = () => {
              const error = new DOMException$1("Aborted", "AbortError");
              const actions = [];
              if (!preventAbort) {
                actions.push(() => {
                  if (dest._state === "writable") {
                    return WritableStreamAbort(dest, error);
                  }
                  return promiseResolvedWith(void 0);
                });
              }
              if (!preventCancel) {
                actions.push(() => {
                  if (source._state === "readable") {
                    return ReadableStreamCancel(source, error);
                  }
                  return promiseResolvedWith(void 0);
                });
              }
              shutdownWithAction(() => Promise.all(actions.map((action) => action())), true, error);
            };
            if (signal.aborted) {
              abortAlgorithm();
              return;
            }
            signal.addEventListener("abort", abortAlgorithm);
          }
          function pipeLoop() {
            return newPromise((resolveLoop, rejectLoop) => {
              function next(done) {
                if (done) {
                  resolveLoop();
                } else {
                  PerformPromiseThen(pipeStep(), next, rejectLoop);
                }
              }
              next(false);
            });
          }
          function pipeStep() {
            if (shuttingDown) {
              return promiseResolvedWith(true);
            }
            return PerformPromiseThen(writer._readyPromise, () => {
              return newPromise((resolveRead, rejectRead) => {
                ReadableStreamDefaultReaderRead(reader, {
                  _chunkSteps: (chunk) => {
                    currentWrite = PerformPromiseThen(WritableStreamDefaultWriterWrite(writer, chunk), void 0, noop2);
                    resolveRead(false);
                  },
                  _closeSteps: () => resolveRead(true),
                  _errorSteps: rejectRead
                });
              });
            });
          }
          isOrBecomesErrored(source, reader._closedPromise, (storedError) => {
            if (!preventAbort) {
              shutdownWithAction(() => WritableStreamAbort(dest, storedError), true, storedError);
            } else {
              shutdown(true, storedError);
            }
          });
          isOrBecomesErrored(dest, writer._closedPromise, (storedError) => {
            if (!preventCancel) {
              shutdownWithAction(() => ReadableStreamCancel(source, storedError), true, storedError);
            } else {
              shutdown(true, storedError);
            }
          });
          isOrBecomesClosed(source, reader._closedPromise, () => {
            if (!preventClose) {
              shutdownWithAction(() => WritableStreamDefaultWriterCloseWithErrorPropagation(writer));
            } else {
              shutdown();
            }
          });
          if (WritableStreamCloseQueuedOrInFlight(dest) || dest._state === "closed") {
            const destClosed = new TypeError("the destination writable stream closed before all data could be piped to it");
            if (!preventCancel) {
              shutdownWithAction(() => ReadableStreamCancel(source, destClosed), true, destClosed);
            } else {
              shutdown(true, destClosed);
            }
          }
          setPromiseIsHandledToTrue(pipeLoop());
          function waitForWritesToFinish() {
            const oldCurrentWrite = currentWrite;
            return PerformPromiseThen(currentWrite, () => oldCurrentWrite !== currentWrite ? waitForWritesToFinish() : void 0);
          }
          function isOrBecomesErrored(stream, promise, action) {
            if (stream._state === "errored") {
              action(stream._storedError);
            } else {
              uponRejection(promise, action);
            }
          }
          function isOrBecomesClosed(stream, promise, action) {
            if (stream._state === "closed") {
              action();
            } else {
              uponFulfillment(promise, action);
            }
          }
          function shutdownWithAction(action, originalIsError, originalError) {
            if (shuttingDown) {
              return;
            }
            shuttingDown = true;
            if (dest._state === "writable" && !WritableStreamCloseQueuedOrInFlight(dest)) {
              uponFulfillment(waitForWritesToFinish(), doTheRest);
            } else {
              doTheRest();
            }
            function doTheRest() {
              uponPromise(action(), () => finalize(originalIsError, originalError), (newError) => finalize(true, newError));
            }
          }
          function shutdown(isError, error) {
            if (shuttingDown) {
              return;
            }
            shuttingDown = true;
            if (dest._state === "writable" && !WritableStreamCloseQueuedOrInFlight(dest)) {
              uponFulfillment(waitForWritesToFinish(), () => finalize(isError, error));
            } else {
              finalize(isError, error);
            }
          }
          function finalize(isError, error) {
            WritableStreamDefaultWriterRelease(writer);
            ReadableStreamReaderGenericRelease(reader);
            if (signal !== void 0) {
              signal.removeEventListener("abort", abortAlgorithm);
            }
            if (isError) {
              reject(error);
            } else {
              resolve(void 0);
            }
          }
        });
      }
      class ReadableStreamDefaultController {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        get desiredSize() {
          if (!IsReadableStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException$1("desiredSize");
          }
          return ReadableStreamDefaultControllerGetDesiredSize(this);
        }
        close() {
          if (!IsReadableStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException$1("close");
          }
          if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(this)) {
            throw new TypeError("The stream is not in a state that permits close");
          }
          ReadableStreamDefaultControllerClose(this);
        }
        enqueue(chunk = void 0) {
          if (!IsReadableStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException$1("enqueue");
          }
          if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(this)) {
            throw new TypeError("The stream is not in a state that permits enqueue");
          }
          return ReadableStreamDefaultControllerEnqueue(this, chunk);
        }
        error(e2 = void 0) {
          if (!IsReadableStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException$1("error");
          }
          ReadableStreamDefaultControllerError(this, e2);
        }
        [CancelSteps](reason) {
          ResetQueue(this);
          const result = this._cancelAlgorithm(reason);
          ReadableStreamDefaultControllerClearAlgorithms(this);
          return result;
        }
        [PullSteps](readRequest) {
          const stream = this._controlledReadableStream;
          if (this._queue.length > 0) {
            const chunk = DequeueValue(this);
            if (this._closeRequested && this._queue.length === 0) {
              ReadableStreamDefaultControllerClearAlgorithms(this);
              ReadableStreamClose(stream);
            } else {
              ReadableStreamDefaultControllerCallPullIfNeeded(this);
            }
            readRequest._chunkSteps(chunk);
          } else {
            ReadableStreamAddReadRequest(stream, readRequest);
            ReadableStreamDefaultControllerCallPullIfNeeded(this);
          }
        }
      }
      Object.defineProperties(ReadableStreamDefaultController.prototype, {
        close: { enumerable: true },
        enqueue: { enumerable: true },
        error: { enumerable: true },
        desiredSize: { enumerable: true }
      });
      if (typeof SymbolPolyfill.toStringTag === "symbol") {
        Object.defineProperty(ReadableStreamDefaultController.prototype, SymbolPolyfill.toStringTag, {
          value: "ReadableStreamDefaultController",
          configurable: true
        });
      }
      function IsReadableStreamDefaultController(x2) {
        if (!typeIsObject(x2)) {
          return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x2, "_controlledReadableStream")) {
          return false;
        }
        return x2 instanceof ReadableStreamDefaultController;
      }
      function ReadableStreamDefaultControllerCallPullIfNeeded(controller) {
        const shouldPull = ReadableStreamDefaultControllerShouldCallPull(controller);
        if (!shouldPull) {
          return;
        }
        if (controller._pulling) {
          controller._pullAgain = true;
          return;
        }
        controller._pulling = true;
        const pullPromise = controller._pullAlgorithm();
        uponPromise(pullPromise, () => {
          controller._pulling = false;
          if (controller._pullAgain) {
            controller._pullAgain = false;
            ReadableStreamDefaultControllerCallPullIfNeeded(controller);
          }
        }, (e2) => {
          ReadableStreamDefaultControllerError(controller, e2);
        });
      }
      function ReadableStreamDefaultControllerShouldCallPull(controller) {
        const stream = controller._controlledReadableStream;
        if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
          return false;
        }
        if (!controller._started) {
          return false;
        }
        if (IsReadableStreamLocked(stream) && ReadableStreamGetNumReadRequests(stream) > 0) {
          return true;
        }
        const desiredSize = ReadableStreamDefaultControllerGetDesiredSize(controller);
        if (desiredSize > 0) {
          return true;
        }
        return false;
      }
      function ReadableStreamDefaultControllerClearAlgorithms(controller) {
        controller._pullAlgorithm = void 0;
        controller._cancelAlgorithm = void 0;
        controller._strategySizeAlgorithm = void 0;
      }
      function ReadableStreamDefaultControllerClose(controller) {
        if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
          return;
        }
        const stream = controller._controlledReadableStream;
        controller._closeRequested = true;
        if (controller._queue.length === 0) {
          ReadableStreamDefaultControllerClearAlgorithms(controller);
          ReadableStreamClose(stream);
        }
      }
      function ReadableStreamDefaultControllerEnqueue(controller, chunk) {
        if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
          return;
        }
        const stream = controller._controlledReadableStream;
        if (IsReadableStreamLocked(stream) && ReadableStreamGetNumReadRequests(stream) > 0) {
          ReadableStreamFulfillReadRequest(stream, chunk, false);
        } else {
          let chunkSize;
          try {
            chunkSize = controller._strategySizeAlgorithm(chunk);
          } catch (chunkSizeE) {
            ReadableStreamDefaultControllerError(controller, chunkSizeE);
            throw chunkSizeE;
          }
          try {
            EnqueueValueWithSize(controller, chunk, chunkSize);
          } catch (enqueueE) {
            ReadableStreamDefaultControllerError(controller, enqueueE);
            throw enqueueE;
          }
        }
        ReadableStreamDefaultControllerCallPullIfNeeded(controller);
      }
      function ReadableStreamDefaultControllerError(controller, e2) {
        const stream = controller._controlledReadableStream;
        if (stream._state !== "readable") {
          return;
        }
        ResetQueue(controller);
        ReadableStreamDefaultControllerClearAlgorithms(controller);
        ReadableStreamError(stream, e2);
      }
      function ReadableStreamDefaultControllerGetDesiredSize(controller) {
        const state = controller._controlledReadableStream._state;
        if (state === "errored") {
          return null;
        }
        if (state === "closed") {
          return 0;
        }
        return controller._strategyHWM - controller._queueTotalSize;
      }
      function ReadableStreamDefaultControllerHasBackpressure(controller) {
        if (ReadableStreamDefaultControllerShouldCallPull(controller)) {
          return false;
        }
        return true;
      }
      function ReadableStreamDefaultControllerCanCloseOrEnqueue(controller) {
        const state = controller._controlledReadableStream._state;
        if (!controller._closeRequested && state === "readable") {
          return true;
        }
        return false;
      }
      function SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm) {
        controller._controlledReadableStream = stream;
        controller._queue = void 0;
        controller._queueTotalSize = void 0;
        ResetQueue(controller);
        controller._started = false;
        controller._closeRequested = false;
        controller._pullAgain = false;
        controller._pulling = false;
        controller._strategySizeAlgorithm = sizeAlgorithm;
        controller._strategyHWM = highWaterMark;
        controller._pullAlgorithm = pullAlgorithm;
        controller._cancelAlgorithm = cancelAlgorithm;
        stream._readableStreamController = controller;
        const startResult = startAlgorithm();
        uponPromise(promiseResolvedWith(startResult), () => {
          controller._started = true;
          ReadableStreamDefaultControllerCallPullIfNeeded(controller);
        }, (r2) => {
          ReadableStreamDefaultControllerError(controller, r2);
        });
      }
      function SetUpReadableStreamDefaultControllerFromUnderlyingSource(stream, underlyingSource, highWaterMark, sizeAlgorithm) {
        const controller = Object.create(ReadableStreamDefaultController.prototype);
        let startAlgorithm = () => void 0;
        let pullAlgorithm = () => promiseResolvedWith(void 0);
        let cancelAlgorithm = () => promiseResolvedWith(void 0);
        if (underlyingSource.start !== void 0) {
          startAlgorithm = () => underlyingSource.start(controller);
        }
        if (underlyingSource.pull !== void 0) {
          pullAlgorithm = () => underlyingSource.pull(controller);
        }
        if (underlyingSource.cancel !== void 0) {
          cancelAlgorithm = (reason) => underlyingSource.cancel(reason);
        }
        SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm);
      }
      function defaultControllerBrandCheckException$1(name) {
        return new TypeError(`ReadableStreamDefaultController.prototype.${name} can only be used on a ReadableStreamDefaultController`);
      }
      function ReadableStreamTee(stream, cloneForBranch2) {
        if (IsReadableByteStreamController(stream._readableStreamController)) {
          return ReadableByteStreamTee(stream);
        }
        return ReadableStreamDefaultTee(stream);
      }
      function ReadableStreamDefaultTee(stream, cloneForBranch2) {
        const reader = AcquireReadableStreamDefaultReader(stream);
        let reading = false;
        let readAgain = false;
        let canceled1 = false;
        let canceled2 = false;
        let reason1;
        let reason2;
        let branch1;
        let branch2;
        let resolveCancelPromise;
        const cancelPromise = newPromise((resolve) => {
          resolveCancelPromise = resolve;
        });
        function pullAlgorithm() {
          if (reading) {
            readAgain = true;
            return promiseResolvedWith(void 0);
          }
          reading = true;
          const readRequest = {
            _chunkSteps: (chunk) => {
              queueMicrotask(() => {
                readAgain = false;
                const chunk1 = chunk;
                const chunk2 = chunk;
                if (!canceled1) {
                  ReadableStreamDefaultControllerEnqueue(branch1._readableStreamController, chunk1);
                }
                if (!canceled2) {
                  ReadableStreamDefaultControllerEnqueue(branch2._readableStreamController, chunk2);
                }
                reading = false;
                if (readAgain) {
                  pullAlgorithm();
                }
              });
            },
            _closeSteps: () => {
              reading = false;
              if (!canceled1) {
                ReadableStreamDefaultControllerClose(branch1._readableStreamController);
              }
              if (!canceled2) {
                ReadableStreamDefaultControllerClose(branch2._readableStreamController);
              }
              if (!canceled1 || !canceled2) {
                resolveCancelPromise(void 0);
              }
            },
            _errorSteps: () => {
              reading = false;
            }
          };
          ReadableStreamDefaultReaderRead(reader, readRequest);
          return promiseResolvedWith(void 0);
        }
        function cancel1Algorithm(reason) {
          canceled1 = true;
          reason1 = reason;
          if (canceled2) {
            const compositeReason = CreateArrayFromList([reason1, reason2]);
            const cancelResult = ReadableStreamCancel(stream, compositeReason);
            resolveCancelPromise(cancelResult);
          }
          return cancelPromise;
        }
        function cancel2Algorithm(reason) {
          canceled2 = true;
          reason2 = reason;
          if (canceled1) {
            const compositeReason = CreateArrayFromList([reason1, reason2]);
            const cancelResult = ReadableStreamCancel(stream, compositeReason);
            resolveCancelPromise(cancelResult);
          }
          return cancelPromise;
        }
        function startAlgorithm() {
        }
        branch1 = CreateReadableStream(startAlgorithm, pullAlgorithm, cancel1Algorithm);
        branch2 = CreateReadableStream(startAlgorithm, pullAlgorithm, cancel2Algorithm);
        uponRejection(reader._closedPromise, (r2) => {
          ReadableStreamDefaultControllerError(branch1._readableStreamController, r2);
          ReadableStreamDefaultControllerError(branch2._readableStreamController, r2);
          if (!canceled1 || !canceled2) {
            resolveCancelPromise(void 0);
          }
        });
        return [branch1, branch2];
      }
      function ReadableByteStreamTee(stream) {
        let reader = AcquireReadableStreamDefaultReader(stream);
        let reading = false;
        let readAgainForBranch1 = false;
        let readAgainForBranch2 = false;
        let canceled1 = false;
        let canceled2 = false;
        let reason1;
        let reason2;
        let branch1;
        let branch2;
        let resolveCancelPromise;
        const cancelPromise = newPromise((resolve) => {
          resolveCancelPromise = resolve;
        });
        function forwardReaderError(thisReader) {
          uponRejection(thisReader._closedPromise, (r2) => {
            if (thisReader !== reader) {
              return;
            }
            ReadableByteStreamControllerError(branch1._readableStreamController, r2);
            ReadableByteStreamControllerError(branch2._readableStreamController, r2);
            if (!canceled1 || !canceled2) {
              resolveCancelPromise(void 0);
            }
          });
        }
        function pullWithDefaultReader() {
          if (IsReadableStreamBYOBReader(reader)) {
            ReadableStreamReaderGenericRelease(reader);
            reader = AcquireReadableStreamDefaultReader(stream);
            forwardReaderError(reader);
          }
          const readRequest = {
            _chunkSteps: (chunk) => {
              queueMicrotask(() => {
                readAgainForBranch1 = false;
                readAgainForBranch2 = false;
                const chunk1 = chunk;
                let chunk2 = chunk;
                if (!canceled1 && !canceled2) {
                  try {
                    chunk2 = CloneAsUint8Array(chunk);
                  } catch (cloneE) {
                    ReadableByteStreamControllerError(branch1._readableStreamController, cloneE);
                    ReadableByteStreamControllerError(branch2._readableStreamController, cloneE);
                    resolveCancelPromise(ReadableStreamCancel(stream, cloneE));
                    return;
                  }
                }
                if (!canceled1) {
                  ReadableByteStreamControllerEnqueue(branch1._readableStreamController, chunk1);
                }
                if (!canceled2) {
                  ReadableByteStreamControllerEnqueue(branch2._readableStreamController, chunk2);
                }
                reading = false;
                if (readAgainForBranch1) {
                  pull1Algorithm();
                } else if (readAgainForBranch2) {
                  pull2Algorithm();
                }
              });
            },
            _closeSteps: () => {
              reading = false;
              if (!canceled1) {
                ReadableByteStreamControllerClose(branch1._readableStreamController);
              }
              if (!canceled2) {
                ReadableByteStreamControllerClose(branch2._readableStreamController);
              }
              if (branch1._readableStreamController._pendingPullIntos.length > 0) {
                ReadableByteStreamControllerRespond(branch1._readableStreamController, 0);
              }
              if (branch2._readableStreamController._pendingPullIntos.length > 0) {
                ReadableByteStreamControllerRespond(branch2._readableStreamController, 0);
              }
              if (!canceled1 || !canceled2) {
                resolveCancelPromise(void 0);
              }
            },
            _errorSteps: () => {
              reading = false;
            }
          };
          ReadableStreamDefaultReaderRead(reader, readRequest);
        }
        function pullWithBYOBReader(view, forBranch2) {
          if (IsReadableStreamDefaultReader(reader)) {
            ReadableStreamReaderGenericRelease(reader);
            reader = AcquireReadableStreamBYOBReader(stream);
            forwardReaderError(reader);
          }
          const byobBranch = forBranch2 ? branch2 : branch1;
          const otherBranch = forBranch2 ? branch1 : branch2;
          const readIntoRequest = {
            _chunkSteps: (chunk) => {
              queueMicrotask(() => {
                readAgainForBranch1 = false;
                readAgainForBranch2 = false;
                const byobCanceled = forBranch2 ? canceled2 : canceled1;
                const otherCanceled = forBranch2 ? canceled1 : canceled2;
                if (!otherCanceled) {
                  let clonedChunk;
                  try {
                    clonedChunk = CloneAsUint8Array(chunk);
                  } catch (cloneE) {
                    ReadableByteStreamControllerError(byobBranch._readableStreamController, cloneE);
                    ReadableByteStreamControllerError(otherBranch._readableStreamController, cloneE);
                    resolveCancelPromise(ReadableStreamCancel(stream, cloneE));
                    return;
                  }
                  if (!byobCanceled) {
                    ReadableByteStreamControllerRespondWithNewView(byobBranch._readableStreamController, chunk);
                  }
                  ReadableByteStreamControllerEnqueue(otherBranch._readableStreamController, clonedChunk);
                } else if (!byobCanceled) {
                  ReadableByteStreamControllerRespondWithNewView(byobBranch._readableStreamController, chunk);
                }
                reading = false;
                if (readAgainForBranch1) {
                  pull1Algorithm();
                } else if (readAgainForBranch2) {
                  pull2Algorithm();
                }
              });
            },
            _closeSteps: (chunk) => {
              reading = false;
              const byobCanceled = forBranch2 ? canceled2 : canceled1;
              const otherCanceled = forBranch2 ? canceled1 : canceled2;
              if (!byobCanceled) {
                ReadableByteStreamControllerClose(byobBranch._readableStreamController);
              }
              if (!otherCanceled) {
                ReadableByteStreamControllerClose(otherBranch._readableStreamController);
              }
              if (chunk !== void 0) {
                if (!byobCanceled) {
                  ReadableByteStreamControllerRespondWithNewView(byobBranch._readableStreamController, chunk);
                }
                if (!otherCanceled && otherBranch._readableStreamController._pendingPullIntos.length > 0) {
                  ReadableByteStreamControllerRespond(otherBranch._readableStreamController, 0);
                }
              }
              if (!byobCanceled || !otherCanceled) {
                resolveCancelPromise(void 0);
              }
            },
            _errorSteps: () => {
              reading = false;
            }
          };
          ReadableStreamBYOBReaderRead(reader, view, readIntoRequest);
        }
        function pull1Algorithm() {
          if (reading) {
            readAgainForBranch1 = true;
            return promiseResolvedWith(void 0);
          }
          reading = true;
          const byobRequest = ReadableByteStreamControllerGetBYOBRequest(branch1._readableStreamController);
          if (byobRequest === null) {
            pullWithDefaultReader();
          } else {
            pullWithBYOBReader(byobRequest._view, false);
          }
          return promiseResolvedWith(void 0);
        }
        function pull2Algorithm() {
          if (reading) {
            readAgainForBranch2 = true;
            return promiseResolvedWith(void 0);
          }
          reading = true;
          const byobRequest = ReadableByteStreamControllerGetBYOBRequest(branch2._readableStreamController);
          if (byobRequest === null) {
            pullWithDefaultReader();
          } else {
            pullWithBYOBReader(byobRequest._view, true);
          }
          return promiseResolvedWith(void 0);
        }
        function cancel1Algorithm(reason) {
          canceled1 = true;
          reason1 = reason;
          if (canceled2) {
            const compositeReason = CreateArrayFromList([reason1, reason2]);
            const cancelResult = ReadableStreamCancel(stream, compositeReason);
            resolveCancelPromise(cancelResult);
          }
          return cancelPromise;
        }
        function cancel2Algorithm(reason) {
          canceled2 = true;
          reason2 = reason;
          if (canceled1) {
            const compositeReason = CreateArrayFromList([reason1, reason2]);
            const cancelResult = ReadableStreamCancel(stream, compositeReason);
            resolveCancelPromise(cancelResult);
          }
          return cancelPromise;
        }
        function startAlgorithm() {
          return;
        }
        branch1 = CreateReadableByteStream(startAlgorithm, pull1Algorithm, cancel1Algorithm);
        branch2 = CreateReadableByteStream(startAlgorithm, pull2Algorithm, cancel2Algorithm);
        forwardReaderError(reader);
        return [branch1, branch2];
      }
      function convertUnderlyingDefaultOrByteSource(source, context) {
        assertDictionary(source, context);
        const original = source;
        const autoAllocateChunkSize = original === null || original === void 0 ? void 0 : original.autoAllocateChunkSize;
        const cancel = original === null || original === void 0 ? void 0 : original.cancel;
        const pull = original === null || original === void 0 ? void 0 : original.pull;
        const start = original === null || original === void 0 ? void 0 : original.start;
        const type = original === null || original === void 0 ? void 0 : original.type;
        return {
          autoAllocateChunkSize: autoAllocateChunkSize === void 0 ? void 0 : convertUnsignedLongLongWithEnforceRange(autoAllocateChunkSize, `${context} has member 'autoAllocateChunkSize' that`),
          cancel: cancel === void 0 ? void 0 : convertUnderlyingSourceCancelCallback(cancel, original, `${context} has member 'cancel' that`),
          pull: pull === void 0 ? void 0 : convertUnderlyingSourcePullCallback(pull, original, `${context} has member 'pull' that`),
          start: start === void 0 ? void 0 : convertUnderlyingSourceStartCallback(start, original, `${context} has member 'start' that`),
          type: type === void 0 ? void 0 : convertReadableStreamType(type, `${context} has member 'type' that`)
        };
      }
      function convertUnderlyingSourceCancelCallback(fn, original, context) {
        assertFunction(fn, context);
        return (reason) => promiseCall(fn, original, [reason]);
      }
      function convertUnderlyingSourcePullCallback(fn, original, context) {
        assertFunction(fn, context);
        return (controller) => promiseCall(fn, original, [controller]);
      }
      function convertUnderlyingSourceStartCallback(fn, original, context) {
        assertFunction(fn, context);
        return (controller) => reflectCall(fn, original, [controller]);
      }
      function convertReadableStreamType(type, context) {
        type = `${type}`;
        if (type !== "bytes") {
          throw new TypeError(`${context} '${type}' is not a valid enumeration value for ReadableStreamType`);
        }
        return type;
      }
      function convertReaderOptions(options, context) {
        assertDictionary(options, context);
        const mode = options === null || options === void 0 ? void 0 : options.mode;
        return {
          mode: mode === void 0 ? void 0 : convertReadableStreamReaderMode(mode, `${context} has member 'mode' that`)
        };
      }
      function convertReadableStreamReaderMode(mode, context) {
        mode = `${mode}`;
        if (mode !== "byob") {
          throw new TypeError(`${context} '${mode}' is not a valid enumeration value for ReadableStreamReaderMode`);
        }
        return mode;
      }
      function convertIteratorOptions(options, context) {
        assertDictionary(options, context);
        const preventCancel = options === null || options === void 0 ? void 0 : options.preventCancel;
        return { preventCancel: Boolean(preventCancel) };
      }
      function convertPipeOptions(options, context) {
        assertDictionary(options, context);
        const preventAbort = options === null || options === void 0 ? void 0 : options.preventAbort;
        const preventCancel = options === null || options === void 0 ? void 0 : options.preventCancel;
        const preventClose = options === null || options === void 0 ? void 0 : options.preventClose;
        const signal = options === null || options === void 0 ? void 0 : options.signal;
        if (signal !== void 0) {
          assertAbortSignal(signal, `${context} has member 'signal' that`);
        }
        return {
          preventAbort: Boolean(preventAbort),
          preventCancel: Boolean(preventCancel),
          preventClose: Boolean(preventClose),
          signal
        };
      }
      function assertAbortSignal(signal, context) {
        if (!isAbortSignal2(signal)) {
          throw new TypeError(`${context} is not an AbortSignal.`);
        }
      }
      function convertReadableWritablePair(pair, context) {
        assertDictionary(pair, context);
        const readable = pair === null || pair === void 0 ? void 0 : pair.readable;
        assertRequiredField(readable, "readable", "ReadableWritablePair");
        assertReadableStream(readable, `${context} has member 'readable' that`);
        const writable = pair === null || pair === void 0 ? void 0 : pair.writable;
        assertRequiredField(writable, "writable", "ReadableWritablePair");
        assertWritableStream(writable, `${context} has member 'writable' that`);
        return { readable, writable };
      }
      class ReadableStream2 {
        constructor(rawUnderlyingSource = {}, rawStrategy = {}) {
          if (rawUnderlyingSource === void 0) {
            rawUnderlyingSource = null;
          } else {
            assertObject(rawUnderlyingSource, "First parameter");
          }
          const strategy = convertQueuingStrategy(rawStrategy, "Second parameter");
          const underlyingSource = convertUnderlyingDefaultOrByteSource(rawUnderlyingSource, "First parameter");
          InitializeReadableStream(this);
          if (underlyingSource.type === "bytes") {
            if (strategy.size !== void 0) {
              throw new RangeError("The strategy for a byte stream cannot have a size function");
            }
            const highWaterMark = ExtractHighWaterMark(strategy, 0);
            SetUpReadableByteStreamControllerFromUnderlyingSource(this, underlyingSource, highWaterMark);
          } else {
            const sizeAlgorithm = ExtractSizeAlgorithm(strategy);
            const highWaterMark = ExtractHighWaterMark(strategy, 1);
            SetUpReadableStreamDefaultControllerFromUnderlyingSource(this, underlyingSource, highWaterMark, sizeAlgorithm);
          }
        }
        get locked() {
          if (!IsReadableStream(this)) {
            throw streamBrandCheckException$1("locked");
          }
          return IsReadableStreamLocked(this);
        }
        cancel(reason = void 0) {
          if (!IsReadableStream(this)) {
            return promiseRejectedWith(streamBrandCheckException$1("cancel"));
          }
          if (IsReadableStreamLocked(this)) {
            return promiseRejectedWith(new TypeError("Cannot cancel a stream that already has a reader"));
          }
          return ReadableStreamCancel(this, reason);
        }
        getReader(rawOptions = void 0) {
          if (!IsReadableStream(this)) {
            throw streamBrandCheckException$1("getReader");
          }
          const options = convertReaderOptions(rawOptions, "First parameter");
          if (options.mode === void 0) {
            return AcquireReadableStreamDefaultReader(this);
          }
          return AcquireReadableStreamBYOBReader(this);
        }
        pipeThrough(rawTransform, rawOptions = {}) {
          if (!IsReadableStream(this)) {
            throw streamBrandCheckException$1("pipeThrough");
          }
          assertRequiredArgument(rawTransform, 1, "pipeThrough");
          const transform = convertReadableWritablePair(rawTransform, "First parameter");
          const options = convertPipeOptions(rawOptions, "Second parameter");
          if (IsReadableStreamLocked(this)) {
            throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream");
          }
          if (IsWritableStreamLocked(transform.writable)) {
            throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream");
          }
          const promise = ReadableStreamPipeTo(this, transform.writable, options.preventClose, options.preventAbort, options.preventCancel, options.signal);
          setPromiseIsHandledToTrue(promise);
          return transform.readable;
        }
        pipeTo(destination, rawOptions = {}) {
          if (!IsReadableStream(this)) {
            return promiseRejectedWith(streamBrandCheckException$1("pipeTo"));
          }
          if (destination === void 0) {
            return promiseRejectedWith(`Parameter 1 is required in 'pipeTo'.`);
          }
          if (!IsWritableStream(destination)) {
            return promiseRejectedWith(new TypeError(`ReadableStream.prototype.pipeTo's first argument must be a WritableStream`));
          }
          let options;
          try {
            options = convertPipeOptions(rawOptions, "Second parameter");
          } catch (e2) {
            return promiseRejectedWith(e2);
          }
          if (IsReadableStreamLocked(this)) {
            return promiseRejectedWith(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream"));
          }
          if (IsWritableStreamLocked(destination)) {
            return promiseRejectedWith(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream"));
          }
          return ReadableStreamPipeTo(this, destination, options.preventClose, options.preventAbort, options.preventCancel, options.signal);
        }
        tee() {
          if (!IsReadableStream(this)) {
            throw streamBrandCheckException$1("tee");
          }
          const branches = ReadableStreamTee(this);
          return CreateArrayFromList(branches);
        }
        values(rawOptions = void 0) {
          if (!IsReadableStream(this)) {
            throw streamBrandCheckException$1("values");
          }
          const options = convertIteratorOptions(rawOptions, "First parameter");
          return AcquireReadableStreamAsyncIterator(this, options.preventCancel);
        }
      }
      Object.defineProperties(ReadableStream2.prototype, {
        cancel: { enumerable: true },
        getReader: { enumerable: true },
        pipeThrough: { enumerable: true },
        pipeTo: { enumerable: true },
        tee: { enumerable: true },
        values: { enumerable: true },
        locked: { enumerable: true }
      });
      if (typeof SymbolPolyfill.toStringTag === "symbol") {
        Object.defineProperty(ReadableStream2.prototype, SymbolPolyfill.toStringTag, {
          value: "ReadableStream",
          configurable: true
        });
      }
      if (typeof SymbolPolyfill.asyncIterator === "symbol") {
        Object.defineProperty(ReadableStream2.prototype, SymbolPolyfill.asyncIterator, {
          value: ReadableStream2.prototype.values,
          writable: true,
          configurable: true
        });
      }
      function CreateReadableStream(startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark = 1, sizeAlgorithm = () => 1) {
        const stream = Object.create(ReadableStream2.prototype);
        InitializeReadableStream(stream);
        const controller = Object.create(ReadableStreamDefaultController.prototype);
        SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm);
        return stream;
      }
      function CreateReadableByteStream(startAlgorithm, pullAlgorithm, cancelAlgorithm) {
        const stream = Object.create(ReadableStream2.prototype);
        InitializeReadableStream(stream);
        const controller = Object.create(ReadableByteStreamController.prototype);
        SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, 0, void 0);
        return stream;
      }
      function InitializeReadableStream(stream) {
        stream._state = "readable";
        stream._reader = void 0;
        stream._storedError = void 0;
        stream._disturbed = false;
      }
      function IsReadableStream(x2) {
        if (!typeIsObject(x2)) {
          return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x2, "_readableStreamController")) {
          return false;
        }
        return x2 instanceof ReadableStream2;
      }
      function IsReadableStreamLocked(stream) {
        if (stream._reader === void 0) {
          return false;
        }
        return true;
      }
      function ReadableStreamCancel(stream, reason) {
        stream._disturbed = true;
        if (stream._state === "closed") {
          return promiseResolvedWith(void 0);
        }
        if (stream._state === "errored") {
          return promiseRejectedWith(stream._storedError);
        }
        ReadableStreamClose(stream);
        const reader = stream._reader;
        if (reader !== void 0 && IsReadableStreamBYOBReader(reader)) {
          reader._readIntoRequests.forEach((readIntoRequest) => {
            readIntoRequest._closeSteps(void 0);
          });
          reader._readIntoRequests = new SimpleQueue();
        }
        const sourceCancelPromise = stream._readableStreamController[CancelSteps](reason);
        return transformPromiseWith(sourceCancelPromise, noop2);
      }
      function ReadableStreamClose(stream) {
        stream._state = "closed";
        const reader = stream._reader;
        if (reader === void 0) {
          return;
        }
        defaultReaderClosedPromiseResolve(reader);
        if (IsReadableStreamDefaultReader(reader)) {
          reader._readRequests.forEach((readRequest) => {
            readRequest._closeSteps();
          });
          reader._readRequests = new SimpleQueue();
        }
      }
      function ReadableStreamError(stream, e2) {
        stream._state = "errored";
        stream._storedError = e2;
        const reader = stream._reader;
        if (reader === void 0) {
          return;
        }
        defaultReaderClosedPromiseReject(reader, e2);
        if (IsReadableStreamDefaultReader(reader)) {
          reader._readRequests.forEach((readRequest) => {
            readRequest._errorSteps(e2);
          });
          reader._readRequests = new SimpleQueue();
        } else {
          reader._readIntoRequests.forEach((readIntoRequest) => {
            readIntoRequest._errorSteps(e2);
          });
          reader._readIntoRequests = new SimpleQueue();
        }
      }
      function streamBrandCheckException$1(name) {
        return new TypeError(`ReadableStream.prototype.${name} can only be used on a ReadableStream`);
      }
      function convertQueuingStrategyInit(init, context) {
        assertDictionary(init, context);
        const highWaterMark = init === null || init === void 0 ? void 0 : init.highWaterMark;
        assertRequiredField(highWaterMark, "highWaterMark", "QueuingStrategyInit");
        return {
          highWaterMark: convertUnrestrictedDouble(highWaterMark)
        };
      }
      const byteLengthSizeFunction = (chunk) => {
        return chunk.byteLength;
      };
      Object.defineProperty(byteLengthSizeFunction, "name", {
        value: "size",
        configurable: true
      });
      class ByteLengthQueuingStrategy {
        constructor(options) {
          assertRequiredArgument(options, 1, "ByteLengthQueuingStrategy");
          options = convertQueuingStrategyInit(options, "First parameter");
          this._byteLengthQueuingStrategyHighWaterMark = options.highWaterMark;
        }
        get highWaterMark() {
          if (!IsByteLengthQueuingStrategy(this)) {
            throw byteLengthBrandCheckException("highWaterMark");
          }
          return this._byteLengthQueuingStrategyHighWaterMark;
        }
        get size() {
          if (!IsByteLengthQueuingStrategy(this)) {
            throw byteLengthBrandCheckException("size");
          }
          return byteLengthSizeFunction;
        }
      }
      Object.defineProperties(ByteLengthQueuingStrategy.prototype, {
        highWaterMark: { enumerable: true },
        size: { enumerable: true }
      });
      if (typeof SymbolPolyfill.toStringTag === "symbol") {
        Object.defineProperty(ByteLengthQueuingStrategy.prototype, SymbolPolyfill.toStringTag, {
          value: "ByteLengthQueuingStrategy",
          configurable: true
        });
      }
      function byteLengthBrandCheckException(name) {
        return new TypeError(`ByteLengthQueuingStrategy.prototype.${name} can only be used on a ByteLengthQueuingStrategy`);
      }
      function IsByteLengthQueuingStrategy(x2) {
        if (!typeIsObject(x2)) {
          return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x2, "_byteLengthQueuingStrategyHighWaterMark")) {
          return false;
        }
        return x2 instanceof ByteLengthQueuingStrategy;
      }
      const countSizeFunction = () => {
        return 1;
      };
      Object.defineProperty(countSizeFunction, "name", {
        value: "size",
        configurable: true
      });
      class CountQueuingStrategy {
        constructor(options) {
          assertRequiredArgument(options, 1, "CountQueuingStrategy");
          options = convertQueuingStrategyInit(options, "First parameter");
          this._countQueuingStrategyHighWaterMark = options.highWaterMark;
        }
        get highWaterMark() {
          if (!IsCountQueuingStrategy(this)) {
            throw countBrandCheckException("highWaterMark");
          }
          return this._countQueuingStrategyHighWaterMark;
        }
        get size() {
          if (!IsCountQueuingStrategy(this)) {
            throw countBrandCheckException("size");
          }
          return countSizeFunction;
        }
      }
      Object.defineProperties(CountQueuingStrategy.prototype, {
        highWaterMark: { enumerable: true },
        size: { enumerable: true }
      });
      if (typeof SymbolPolyfill.toStringTag === "symbol") {
        Object.defineProperty(CountQueuingStrategy.prototype, SymbolPolyfill.toStringTag, {
          value: "CountQueuingStrategy",
          configurable: true
        });
      }
      function countBrandCheckException(name) {
        return new TypeError(`CountQueuingStrategy.prototype.${name} can only be used on a CountQueuingStrategy`);
      }
      function IsCountQueuingStrategy(x2) {
        if (!typeIsObject(x2)) {
          return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x2, "_countQueuingStrategyHighWaterMark")) {
          return false;
        }
        return x2 instanceof CountQueuingStrategy;
      }
      function convertTransformer(original, context) {
        assertDictionary(original, context);
        const flush = original === null || original === void 0 ? void 0 : original.flush;
        const readableType = original === null || original === void 0 ? void 0 : original.readableType;
        const start = original === null || original === void 0 ? void 0 : original.start;
        const transform = original === null || original === void 0 ? void 0 : original.transform;
        const writableType = original === null || original === void 0 ? void 0 : original.writableType;
        return {
          flush: flush === void 0 ? void 0 : convertTransformerFlushCallback(flush, original, `${context} has member 'flush' that`),
          readableType,
          start: start === void 0 ? void 0 : convertTransformerStartCallback(start, original, `${context} has member 'start' that`),
          transform: transform === void 0 ? void 0 : convertTransformerTransformCallback(transform, original, `${context} has member 'transform' that`),
          writableType
        };
      }
      function convertTransformerFlushCallback(fn, original, context) {
        assertFunction(fn, context);
        return (controller) => promiseCall(fn, original, [controller]);
      }
      function convertTransformerStartCallback(fn, original, context) {
        assertFunction(fn, context);
        return (controller) => reflectCall(fn, original, [controller]);
      }
      function convertTransformerTransformCallback(fn, original, context) {
        assertFunction(fn, context);
        return (chunk, controller) => promiseCall(fn, original, [chunk, controller]);
      }
      class TransformStream {
        constructor(rawTransformer = {}, rawWritableStrategy = {}, rawReadableStrategy = {}) {
          if (rawTransformer === void 0) {
            rawTransformer = null;
          }
          const writableStrategy = convertQueuingStrategy(rawWritableStrategy, "Second parameter");
          const readableStrategy = convertQueuingStrategy(rawReadableStrategy, "Third parameter");
          const transformer = convertTransformer(rawTransformer, "First parameter");
          if (transformer.readableType !== void 0) {
            throw new RangeError("Invalid readableType specified");
          }
          if (transformer.writableType !== void 0) {
            throw new RangeError("Invalid writableType specified");
          }
          const readableHighWaterMark = ExtractHighWaterMark(readableStrategy, 0);
          const readableSizeAlgorithm = ExtractSizeAlgorithm(readableStrategy);
          const writableHighWaterMark = ExtractHighWaterMark(writableStrategy, 1);
          const writableSizeAlgorithm = ExtractSizeAlgorithm(writableStrategy);
          let startPromise_resolve;
          const startPromise = newPromise((resolve) => {
            startPromise_resolve = resolve;
          });
          InitializeTransformStream(this, startPromise, writableHighWaterMark, writableSizeAlgorithm, readableHighWaterMark, readableSizeAlgorithm);
          SetUpTransformStreamDefaultControllerFromTransformer(this, transformer);
          if (transformer.start !== void 0) {
            startPromise_resolve(transformer.start(this._transformStreamController));
          } else {
            startPromise_resolve(void 0);
          }
        }
        get readable() {
          if (!IsTransformStream(this)) {
            throw streamBrandCheckException("readable");
          }
          return this._readable;
        }
        get writable() {
          if (!IsTransformStream(this)) {
            throw streamBrandCheckException("writable");
          }
          return this._writable;
        }
      }
      Object.defineProperties(TransformStream.prototype, {
        readable: { enumerable: true },
        writable: { enumerable: true }
      });
      if (typeof SymbolPolyfill.toStringTag === "symbol") {
        Object.defineProperty(TransformStream.prototype, SymbolPolyfill.toStringTag, {
          value: "TransformStream",
          configurable: true
        });
      }
      function InitializeTransformStream(stream, startPromise, writableHighWaterMark, writableSizeAlgorithm, readableHighWaterMark, readableSizeAlgorithm) {
        function startAlgorithm() {
          return startPromise;
        }
        function writeAlgorithm(chunk) {
          return TransformStreamDefaultSinkWriteAlgorithm(stream, chunk);
        }
        function abortAlgorithm(reason) {
          return TransformStreamDefaultSinkAbortAlgorithm(stream, reason);
        }
        function closeAlgorithm() {
          return TransformStreamDefaultSinkCloseAlgorithm(stream);
        }
        stream._writable = CreateWritableStream(startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, writableHighWaterMark, writableSizeAlgorithm);
        function pullAlgorithm() {
          return TransformStreamDefaultSourcePullAlgorithm(stream);
        }
        function cancelAlgorithm(reason) {
          TransformStreamErrorWritableAndUnblockWrite(stream, reason);
          return promiseResolvedWith(void 0);
        }
        stream._readable = CreateReadableStream(startAlgorithm, pullAlgorithm, cancelAlgorithm, readableHighWaterMark, readableSizeAlgorithm);
        stream._backpressure = void 0;
        stream._backpressureChangePromise = void 0;
        stream._backpressureChangePromise_resolve = void 0;
        TransformStreamSetBackpressure(stream, true);
        stream._transformStreamController = void 0;
      }
      function IsTransformStream(x2) {
        if (!typeIsObject(x2)) {
          return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x2, "_transformStreamController")) {
          return false;
        }
        return x2 instanceof TransformStream;
      }
      function TransformStreamError(stream, e2) {
        ReadableStreamDefaultControllerError(stream._readable._readableStreamController, e2);
        TransformStreamErrorWritableAndUnblockWrite(stream, e2);
      }
      function TransformStreamErrorWritableAndUnblockWrite(stream, e2) {
        TransformStreamDefaultControllerClearAlgorithms(stream._transformStreamController);
        WritableStreamDefaultControllerErrorIfNeeded(stream._writable._writableStreamController, e2);
        if (stream._backpressure) {
          TransformStreamSetBackpressure(stream, false);
        }
      }
      function TransformStreamSetBackpressure(stream, backpressure) {
        if (stream._backpressureChangePromise !== void 0) {
          stream._backpressureChangePromise_resolve();
        }
        stream._backpressureChangePromise = newPromise((resolve) => {
          stream._backpressureChangePromise_resolve = resolve;
        });
        stream._backpressure = backpressure;
      }
      class TransformStreamDefaultController {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        get desiredSize() {
          if (!IsTransformStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException("desiredSize");
          }
          const readableController = this._controlledTransformStream._readable._readableStreamController;
          return ReadableStreamDefaultControllerGetDesiredSize(readableController);
        }
        enqueue(chunk = void 0) {
          if (!IsTransformStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException("enqueue");
          }
          TransformStreamDefaultControllerEnqueue(this, chunk);
        }
        error(reason = void 0) {
          if (!IsTransformStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException("error");
          }
          TransformStreamDefaultControllerError(this, reason);
        }
        terminate() {
          if (!IsTransformStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException("terminate");
          }
          TransformStreamDefaultControllerTerminate(this);
        }
      }
      Object.defineProperties(TransformStreamDefaultController.prototype, {
        enqueue: { enumerable: true },
        error: { enumerable: true },
        terminate: { enumerable: true },
        desiredSize: { enumerable: true }
      });
      if (typeof SymbolPolyfill.toStringTag === "symbol") {
        Object.defineProperty(TransformStreamDefaultController.prototype, SymbolPolyfill.toStringTag, {
          value: "TransformStreamDefaultController",
          configurable: true
        });
      }
      function IsTransformStreamDefaultController(x2) {
        if (!typeIsObject(x2)) {
          return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x2, "_controlledTransformStream")) {
          return false;
        }
        return x2 instanceof TransformStreamDefaultController;
      }
      function SetUpTransformStreamDefaultController(stream, controller, transformAlgorithm, flushAlgorithm) {
        controller._controlledTransformStream = stream;
        stream._transformStreamController = controller;
        controller._transformAlgorithm = transformAlgorithm;
        controller._flushAlgorithm = flushAlgorithm;
      }
      function SetUpTransformStreamDefaultControllerFromTransformer(stream, transformer) {
        const controller = Object.create(TransformStreamDefaultController.prototype);
        let transformAlgorithm = (chunk) => {
          try {
            TransformStreamDefaultControllerEnqueue(controller, chunk);
            return promiseResolvedWith(void 0);
          } catch (transformResultE) {
            return promiseRejectedWith(transformResultE);
          }
        };
        let flushAlgorithm = () => promiseResolvedWith(void 0);
        if (transformer.transform !== void 0) {
          transformAlgorithm = (chunk) => transformer.transform(chunk, controller);
        }
        if (transformer.flush !== void 0) {
          flushAlgorithm = () => transformer.flush(controller);
        }
        SetUpTransformStreamDefaultController(stream, controller, transformAlgorithm, flushAlgorithm);
      }
      function TransformStreamDefaultControllerClearAlgorithms(controller) {
        controller._transformAlgorithm = void 0;
        controller._flushAlgorithm = void 0;
      }
      function TransformStreamDefaultControllerEnqueue(controller, chunk) {
        const stream = controller._controlledTransformStream;
        const readableController = stream._readable._readableStreamController;
        if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(readableController)) {
          throw new TypeError("Readable side is not in a state that permits enqueue");
        }
        try {
          ReadableStreamDefaultControllerEnqueue(readableController, chunk);
        } catch (e2) {
          TransformStreamErrorWritableAndUnblockWrite(stream, e2);
          throw stream._readable._storedError;
        }
        const backpressure = ReadableStreamDefaultControllerHasBackpressure(readableController);
        if (backpressure !== stream._backpressure) {
          TransformStreamSetBackpressure(stream, true);
        }
      }
      function TransformStreamDefaultControllerError(controller, e2) {
        TransformStreamError(controller._controlledTransformStream, e2);
      }
      function TransformStreamDefaultControllerPerformTransform(controller, chunk) {
        const transformPromise = controller._transformAlgorithm(chunk);
        return transformPromiseWith(transformPromise, void 0, (r2) => {
          TransformStreamError(controller._controlledTransformStream, r2);
          throw r2;
        });
      }
      function TransformStreamDefaultControllerTerminate(controller) {
        const stream = controller._controlledTransformStream;
        const readableController = stream._readable._readableStreamController;
        ReadableStreamDefaultControllerClose(readableController);
        const error = new TypeError("TransformStream terminated");
        TransformStreamErrorWritableAndUnblockWrite(stream, error);
      }
      function TransformStreamDefaultSinkWriteAlgorithm(stream, chunk) {
        const controller = stream._transformStreamController;
        if (stream._backpressure) {
          const backpressureChangePromise = stream._backpressureChangePromise;
          return transformPromiseWith(backpressureChangePromise, () => {
            const writable = stream._writable;
            const state = writable._state;
            if (state === "erroring") {
              throw writable._storedError;
            }
            return TransformStreamDefaultControllerPerformTransform(controller, chunk);
          });
        }
        return TransformStreamDefaultControllerPerformTransform(controller, chunk);
      }
      function TransformStreamDefaultSinkAbortAlgorithm(stream, reason) {
        TransformStreamError(stream, reason);
        return promiseResolvedWith(void 0);
      }
      function TransformStreamDefaultSinkCloseAlgorithm(stream) {
        const readable = stream._readable;
        const controller = stream._transformStreamController;
        const flushPromise = controller._flushAlgorithm();
        TransformStreamDefaultControllerClearAlgorithms(controller);
        return transformPromiseWith(flushPromise, () => {
          if (readable._state === "errored") {
            throw readable._storedError;
          }
          ReadableStreamDefaultControllerClose(readable._readableStreamController);
        }, (r2) => {
          TransformStreamError(stream, r2);
          throw readable._storedError;
        });
      }
      function TransformStreamDefaultSourcePullAlgorithm(stream) {
        TransformStreamSetBackpressure(stream, false);
        return stream._backpressureChangePromise;
      }
      function defaultControllerBrandCheckException(name) {
        return new TypeError(`TransformStreamDefaultController.prototype.${name} can only be used on a TransformStreamDefaultController`);
      }
      function streamBrandCheckException(name) {
        return new TypeError(`TransformStream.prototype.${name} can only be used on a TransformStream`);
      }
      exports3.ByteLengthQueuingStrategy = ByteLengthQueuingStrategy;
      exports3.CountQueuingStrategy = CountQueuingStrategy;
      exports3.ReadableByteStreamController = ReadableByteStreamController;
      exports3.ReadableStream = ReadableStream2;
      exports3.ReadableStreamBYOBReader = ReadableStreamBYOBReader;
      exports3.ReadableStreamBYOBRequest = ReadableStreamBYOBRequest;
      exports3.ReadableStreamDefaultController = ReadableStreamDefaultController;
      exports3.ReadableStreamDefaultReader = ReadableStreamDefaultReader;
      exports3.TransformStream = TransformStream;
      exports3.TransformStreamDefaultController = TransformStreamDefaultController;
      exports3.WritableStream = WritableStream;
      exports3.WritableStreamDefaultController = WritableStreamDefaultController;
      exports3.WritableStreamDefaultWriter = WritableStreamDefaultWriter;
      Object.defineProperty(exports3, "__esModule", { value: true });
    });
  }
});

// node_modules/fetch-blob/streams.cjs
var require_streams = __commonJS({
  "node_modules/fetch-blob/streams.cjs"() {
    var POOL_SIZE2 = 65536;
    if (!globalThis.ReadableStream) {
      try {
        const process2 = require("process");
        const { emitWarning } = process2;
        try {
          process2.emitWarning = () => {
          };
          Object.assign(globalThis, require("stream/web"));
          process2.emitWarning = emitWarning;
        } catch (error) {
          process2.emitWarning = emitWarning;
          throw error;
        }
      } catch (error) {
        Object.assign(globalThis, require_ponyfill_es2018());
      }
    }
    try {
      const { Blob: Blob2 } = require("buffer");
      if (Blob2 && !Blob2.prototype.stream) {
        Blob2.prototype.stream = function name(params) {
          let position = 0;
          const blob = this;
          return new ReadableStream({
            type: "bytes",
            async pull(ctrl) {
              const chunk = blob.slice(position, Math.min(blob.size, position + POOL_SIZE2));
              const buffer = await chunk.arrayBuffer();
              position += buffer.byteLength;
              ctrl.enqueue(new Uint8Array(buffer));
              if (position === blob.size) {
                ctrl.close();
              }
            }
          });
        };
      }
    } catch (error) {
    }
  }
});

// node_modules/fetch-blob/index.js
async function* toIterator(parts, clone2 = true) {
  for (const part of parts) {
    if ("stream" in part) {
      yield* part.stream();
    } else if (ArrayBuffer.isView(part)) {
      if (clone2) {
        let position = part.byteOffset;
        const end = part.byteOffset + part.byteLength;
        while (position !== end) {
          const size = Math.min(end - position, POOL_SIZE);
          const chunk = part.buffer.slice(position, position + size);
          position += chunk.byteLength;
          yield new Uint8Array(chunk);
        }
      } else {
        yield part;
      }
    } else {
      let position = 0, b = part;
      while (position !== b.size) {
        const chunk = b.slice(position, Math.min(b.size, position + POOL_SIZE));
        const buffer = await chunk.arrayBuffer();
        position += buffer.byteLength;
        yield new Uint8Array(buffer);
      }
    }
  }
}
var import_streams, POOL_SIZE, _parts, _type, _size, _endings, _a, _Blob, Blob, fetch_blob_default;
var init_fetch_blob = __esm({
  "node_modules/fetch-blob/index.js"() {
    import_streams = __toModule(require_streams());
    POOL_SIZE = 65536;
    _Blob = (_a = class {
      constructor(blobParts = [], options = {}) {
        __privateAdd(this, _parts, []);
        __privateAdd(this, _type, "");
        __privateAdd(this, _size, 0);
        __privateAdd(this, _endings, "transparent");
        if (typeof blobParts !== "object" || blobParts === null) {
          throw new TypeError("Failed to construct 'Blob': The provided value cannot be converted to a sequence.");
        }
        if (typeof blobParts[Symbol.iterator] !== "function") {
          throw new TypeError("Failed to construct 'Blob': The object must have a callable @@iterator property.");
        }
        if (typeof options !== "object" && typeof options !== "function") {
          throw new TypeError("Failed to construct 'Blob': parameter 2 cannot convert to dictionary.");
        }
        if (options === null)
          options = {};
        const encoder = new TextEncoder();
        for (const element of blobParts) {
          let part;
          if (ArrayBuffer.isView(element)) {
            part = new Uint8Array(element.buffer.slice(element.byteOffset, element.byteOffset + element.byteLength));
          } else if (element instanceof ArrayBuffer) {
            part = new Uint8Array(element.slice(0));
          } else if (element instanceof _a) {
            part = element;
          } else {
            part = encoder.encode(`${element}`);
          }
          const size = ArrayBuffer.isView(part) ? part.byteLength : part.size;
          if (size) {
            __privateSet(this, _size, __privateGet(this, _size) + size);
            __privateGet(this, _parts).push(part);
          }
        }
        __privateSet(this, _endings, `${options.endings === void 0 ? "transparent" : options.endings}`);
        const type = options.type === void 0 ? "" : String(options.type);
        __privateSet(this, _type, /^[\x20-\x7E]*$/.test(type) ? type : "");
      }
      get size() {
        return __privateGet(this, _size);
      }
      get type() {
        return __privateGet(this, _type);
      }
      async text() {
        const decoder = new TextDecoder();
        let str = "";
        for await (const part of toIterator(__privateGet(this, _parts), false)) {
          str += decoder.decode(part, { stream: true });
        }
        str += decoder.decode();
        return str;
      }
      async arrayBuffer() {
        const data = new Uint8Array(this.size);
        let offset = 0;
        for await (const chunk of toIterator(__privateGet(this, _parts), false)) {
          data.set(chunk, offset);
          offset += chunk.length;
        }
        return data.buffer;
      }
      stream() {
        const it = toIterator(__privateGet(this, _parts), true);
        return new globalThis.ReadableStream({
          type: "bytes",
          async pull(ctrl) {
            const chunk = await it.next();
            chunk.done ? ctrl.close() : ctrl.enqueue(chunk.value);
          },
          async cancel() {
            await it.return();
          }
        });
      }
      slice(start = 0, end = this.size, type = "") {
        const { size } = this;
        let relativeStart = start < 0 ? Math.max(size + start, 0) : Math.min(start, size);
        let relativeEnd = end < 0 ? Math.max(size + end, 0) : Math.min(end, size);
        const span = Math.max(relativeEnd - relativeStart, 0);
        const parts = __privateGet(this, _parts);
        const blobParts = [];
        let added = 0;
        for (const part of parts) {
          if (added >= span) {
            break;
          }
          const size2 = ArrayBuffer.isView(part) ? part.byteLength : part.size;
          if (relativeStart && size2 <= relativeStart) {
            relativeStart -= size2;
            relativeEnd -= size2;
          } else {
            let chunk;
            if (ArrayBuffer.isView(part)) {
              chunk = part.subarray(relativeStart, Math.min(size2, relativeEnd));
              added += chunk.byteLength;
            } else {
              chunk = part.slice(relativeStart, Math.min(size2, relativeEnd));
              added += chunk.size;
            }
            relativeEnd -= size2;
            blobParts.push(chunk);
            relativeStart = 0;
          }
        }
        const blob = new _a([], { type: String(type).toLowerCase() });
        __privateSet(blob, _size, span);
        __privateSet(blob, _parts, blobParts);
        return blob;
      }
      get [Symbol.toStringTag]() {
        return "Blob";
      }
      static [Symbol.hasInstance](object2) {
        return object2 && typeof object2 === "object" && typeof object2.constructor === "function" && (typeof object2.stream === "function" || typeof object2.arrayBuffer === "function") && /^(Blob|File)$/.test(object2[Symbol.toStringTag]);
      }
    }, _parts = new WeakMap(), _type = new WeakMap(), _size = new WeakMap(), _endings = new WeakMap(), _a);
    Object.defineProperties(_Blob.prototype, {
      size: { enumerable: true },
      type: { enumerable: true },
      slice: { enumerable: true }
    });
    Blob = _Blob;
    fetch_blob_default = Blob;
  }
});

// node_modules/fetch-blob/file.js
var _lastModified, _name, _a2, _File, File, file_default;
var init_file = __esm({
  "node_modules/fetch-blob/file.js"() {
    init_fetch_blob();
    _File = (_a2 = class extends fetch_blob_default {
      constructor(fileBits, fileName, options = {}) {
        if (arguments.length < 2) {
          throw new TypeError(`Failed to construct 'File': 2 arguments required, but only ${arguments.length} present.`);
        }
        super(fileBits, options);
        __privateAdd(this, _lastModified, 0);
        __privateAdd(this, _name, "");
        if (options === null)
          options = {};
        const lastModified = options.lastModified === void 0 ? Date.now() : Number(options.lastModified);
        if (!Number.isNaN(lastModified)) {
          __privateSet(this, _lastModified, lastModified);
        }
        __privateSet(this, _name, String(fileName));
      }
      get name() {
        return __privateGet(this, _name);
      }
      get lastModified() {
        return __privateGet(this, _lastModified);
      }
      get [Symbol.toStringTag]() {
        return "File";
      }
      static [Symbol.hasInstance](object2) {
        return !!object2 && object2 instanceof fetch_blob_default && /^(File)$/.test(object2[Symbol.toStringTag]);
      }
    }, _lastModified = new WeakMap(), _name = new WeakMap(), _a2);
    File = _File;
    file_default = File;
  }
});

// node_modules/formdata-polyfill/esm.min.js
function formDataToBlob(F2, B = fetch_blob_default) {
  var b = `${r()}${r()}`.replace(/\./g, "").slice(-28).padStart(32, "-"), c = [], p = `--${b}\r
Content-Disposition: form-data; name="`;
  F2.forEach((v, n) => typeof v == "string" ? c.push(p + e(n) + `"\r
\r
${v.replace(/\r(?!\n)|(?<!\r)\n/g, "\r\n")}\r
`) : c.push(p + e(n) + `"; filename="${e(v.name, 1)}"\r
Content-Type: ${v.type || "application/octet-stream"}\r
\r
`, v, "\r\n"));
  c.push(`--${b}--`);
  return new B(c, { type: "multipart/form-data; boundary=" + b });
}
var t, i, h, r, m, f, e, x, _d, _a3, FormData;
var init_esm_min = __esm({
  "node_modules/formdata-polyfill/esm.min.js"() {
    init_fetch_blob();
    init_file();
    ({ toStringTag: t, iterator: i, hasInstance: h } = Symbol);
    r = Math.random;
    m = "append,set,get,getAll,delete,keys,values,entries,forEach,constructor".split(",");
    f = (a, b, c) => (a += "", /^(Blob|File)$/.test(b && b[t]) ? [(c = c !== void 0 ? c + "" : b[t] == "File" ? b.name : "blob", a), b.name !== c || b[t] == "blob" ? new file_default([b], c, b) : b] : [a, b + ""]);
    e = (c, f3) => (f3 ? c : c.replace(/\r?\n|\r/g, "\r\n")).replace(/\n/g, "%0A").replace(/\r/g, "%0D").replace(/"/g, "%22");
    x = (n, a, e2) => {
      if (a.length < e2) {
        throw new TypeError(`Failed to execute '${n}' on 'FormData': ${e2} arguments required, but only ${a.length} present.`);
      }
    };
    FormData = (_a3 = class {
      constructor(...a) {
        __privateAdd(this, _d, []);
        if (a.length)
          throw new TypeError(`Failed to construct 'FormData': parameter 1 is not of type 'HTMLFormElement'.`);
      }
      get [t]() {
        return "FormData";
      }
      [i]() {
        return this.entries();
      }
      static [h](o) {
        return o && typeof o === "object" && o[t] === "FormData" && !m.some((m2) => typeof o[m2] != "function");
      }
      append(...a) {
        x("append", arguments, 2);
        __privateGet(this, _d).push(f(...a));
      }
      delete(a) {
        x("delete", arguments, 1);
        a += "";
        __privateSet(this, _d, __privateGet(this, _d).filter(([b]) => b !== a));
      }
      get(a) {
        x("get", arguments, 1);
        a += "";
        for (var b = __privateGet(this, _d), l = b.length, c = 0; c < l; c++)
          if (b[c][0] === a)
            return b[c][1];
        return null;
      }
      getAll(a, b) {
        x("getAll", arguments, 1);
        b = [];
        a += "";
        __privateGet(this, _d).forEach((c) => c[0] === a && b.push(c[1]));
        return b;
      }
      has(a) {
        x("has", arguments, 1);
        a += "";
        return __privateGet(this, _d).some((b) => b[0] === a);
      }
      forEach(a, b) {
        x("forEach", arguments, 1);
        for (var [c, d] of this)
          a.call(b, d, c, this);
      }
      set(...a) {
        x("set", arguments, 2);
        var b = [], c = true;
        a = f(...a);
        __privateGet(this, _d).forEach((d) => {
          d[0] === a[0] ? c && (c = !b.push(a)) : b.push(d);
        });
        c && b.push(a);
        __privateSet(this, _d, b);
      }
      *entries() {
        yield* __privateGet(this, _d);
      }
      *keys() {
        for (var [a] of this)
          yield a;
      }
      *values() {
        for (var [, a] of this)
          yield a;
      }
    }, _d = new WeakMap(), _a3);
  }
});

// node_modules/node-domexception/index.js
var require_node_domexception = __commonJS({
  "node_modules/node-domexception/index.js"(exports2, module2) {
    if (!globalThis.DOMException) {
      try {
        const { MessageChannel } = require("worker_threads"), port = new MessageChannel().port1, ab = new ArrayBuffer();
        port.postMessage(ab, [ab, ab]);
      } catch (err) {
        err.constructor.name === "DOMException" && (globalThis.DOMException = err.constructor);
      }
    }
    module2.exports = globalThis.DOMException;
  }
});

// node_modules/fetch-blob/from.js
var import_node_fs, import_node_path, import_node_domexception, stat, _path, _start, _BlobDataItem, BlobDataItem;
var init_from = __esm({
  "node_modules/fetch-blob/from.js"() {
    import_node_fs = __toModule(require("fs"));
    import_node_path = __toModule(require("path"));
    import_node_domexception = __toModule(require_node_domexception());
    init_file();
    init_fetch_blob();
    ({ stat } = import_node_fs.promises);
    _BlobDataItem = class {
      constructor(options) {
        __privateAdd(this, _path, void 0);
        __privateAdd(this, _start, void 0);
        __privateSet(this, _path, options.path);
        __privateSet(this, _start, options.start);
        this.size = options.size;
        this.lastModified = options.lastModified;
        this.originalSize = options.originalSize === void 0 ? options.size : options.originalSize;
      }
      slice(start, end) {
        return new _BlobDataItem({
          path: __privateGet(this, _path),
          lastModified: this.lastModified,
          originalSize: this.originalSize,
          size: end - start,
          start: __privateGet(this, _start) + start
        });
      }
      async *stream() {
        const { mtimeMs, size } = await stat(__privateGet(this, _path));
        if (mtimeMs > this.lastModified || this.originalSize !== size) {
          throw new import_node_domexception.default("The requested file could not be read, typically due to permission problems that have occurred after a reference to a file was acquired.", "NotReadableError");
        }
        yield* (0, import_node_fs.createReadStream)(__privateGet(this, _path), {
          start: __privateGet(this, _start),
          end: __privateGet(this, _start) + this.size - 1
        });
      }
      get [Symbol.toStringTag]() {
        return "Blob";
      }
    };
    BlobDataItem = _BlobDataItem;
    _path = new WeakMap();
    _start = new WeakMap();
  }
});

// node_modules/node-fetch/src/utils/multipart-parser.js
var multipart_parser_exports = {};
__export(multipart_parser_exports, {
  toFormData: () => toFormData
});
function _fileName(headerValue) {
  const m2 = headerValue.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);
  if (!m2) {
    return;
  }
  const match = m2[2] || m2[3] || "";
  let filename = match.slice(match.lastIndexOf("\\") + 1);
  filename = filename.replace(/%22/g, '"');
  filename = filename.replace(/&#(\d{4});/g, (m3, code) => {
    return String.fromCharCode(code);
  });
  return filename;
}
async function toFormData(Body2, ct) {
  if (!/multipart/i.test(ct)) {
    throw new TypeError("Failed to fetch");
  }
  const m2 = ct.match(/boundary=(?:"([^"]+)"|([^;]+))/i);
  if (!m2) {
    throw new TypeError("no or bad content-type header, no multipart boundary");
  }
  const parser = new MultipartParser(m2[1] || m2[2]);
  let headerField;
  let headerValue;
  let entryValue;
  let entryName;
  let contentType;
  let filename;
  const entryChunks = [];
  const formData = new FormData();
  const onPartData = (ui8a) => {
    entryValue += decoder.decode(ui8a, { stream: true });
  };
  const appendToFile = (ui8a) => {
    entryChunks.push(ui8a);
  };
  const appendFileToFormData = () => {
    const file = new file_default(entryChunks, filename, { type: contentType });
    formData.append(entryName, file);
  };
  const appendEntryToFormData = () => {
    formData.append(entryName, entryValue);
  };
  const decoder = new TextDecoder("utf-8");
  decoder.decode();
  parser.onPartBegin = function() {
    parser.onPartData = onPartData;
    parser.onPartEnd = appendEntryToFormData;
    headerField = "";
    headerValue = "";
    entryValue = "";
    entryName = "";
    contentType = "";
    filename = null;
    entryChunks.length = 0;
  };
  parser.onHeaderField = function(ui8a) {
    headerField += decoder.decode(ui8a, { stream: true });
  };
  parser.onHeaderValue = function(ui8a) {
    headerValue += decoder.decode(ui8a, { stream: true });
  };
  parser.onHeaderEnd = function() {
    headerValue += decoder.decode();
    headerField = headerField.toLowerCase();
    if (headerField === "content-disposition") {
      const m3 = headerValue.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);
      if (m3) {
        entryName = m3[2] || m3[3] || "";
      }
      filename = _fileName(headerValue);
      if (filename) {
        parser.onPartData = appendToFile;
        parser.onPartEnd = appendFileToFormData;
      }
    } else if (headerField === "content-type") {
      contentType = headerValue;
    }
    headerValue = "";
    headerField = "";
  };
  for await (const chunk of Body2) {
    parser.write(chunk);
  }
  parser.end();
  return formData;
}
var s, S, f2, F, LF, CR, SPACE, HYPHEN, COLON, A, Z, lower, noop, MultipartParser;
var init_multipart_parser = __esm({
  "node_modules/node-fetch/src/utils/multipart-parser.js"() {
    init_from();
    init_esm_min();
    s = 0;
    S = {
      START_BOUNDARY: s++,
      HEADER_FIELD_START: s++,
      HEADER_FIELD: s++,
      HEADER_VALUE_START: s++,
      HEADER_VALUE: s++,
      HEADER_VALUE_ALMOST_DONE: s++,
      HEADERS_ALMOST_DONE: s++,
      PART_DATA_START: s++,
      PART_DATA: s++,
      END: s++
    };
    f2 = 1;
    F = {
      PART_BOUNDARY: f2,
      LAST_BOUNDARY: f2 *= 2
    };
    LF = 10;
    CR = 13;
    SPACE = 32;
    HYPHEN = 45;
    COLON = 58;
    A = 97;
    Z = 122;
    lower = (c) => c | 32;
    noop = () => {
    };
    MultipartParser = class {
      constructor(boundary) {
        this.index = 0;
        this.flags = 0;
        this.onHeaderEnd = noop;
        this.onHeaderField = noop;
        this.onHeadersEnd = noop;
        this.onHeaderValue = noop;
        this.onPartBegin = noop;
        this.onPartData = noop;
        this.onPartEnd = noop;
        this.boundaryChars = {};
        boundary = "\r\n--" + boundary;
        const ui8a = new Uint8Array(boundary.length);
        for (let i2 = 0; i2 < boundary.length; i2++) {
          ui8a[i2] = boundary.charCodeAt(i2);
          this.boundaryChars[ui8a[i2]] = true;
        }
        this.boundary = ui8a;
        this.lookbehind = new Uint8Array(this.boundary.length + 8);
        this.state = S.START_BOUNDARY;
      }
      write(data) {
        let i2 = 0;
        const length_ = data.length;
        let previousIndex = this.index;
        let { lookbehind, boundary, boundaryChars, index, state, flags } = this;
        const boundaryLength = this.boundary.length;
        const boundaryEnd = boundaryLength - 1;
        const bufferLength = data.length;
        let c;
        let cl;
        const mark = (name) => {
          this[name + "Mark"] = i2;
        };
        const clear = (name) => {
          delete this[name + "Mark"];
        };
        const callback = (callbackSymbol, start, end, ui8a) => {
          if (start === void 0 || start !== end) {
            this[callbackSymbol](ui8a && ui8a.subarray(start, end));
          }
        };
        const dataCallback = (name, clear2) => {
          const markSymbol = name + "Mark";
          if (!(markSymbol in this)) {
            return;
          }
          if (clear2) {
            callback(name, this[markSymbol], i2, data);
            delete this[markSymbol];
          } else {
            callback(name, this[markSymbol], data.length, data);
            this[markSymbol] = 0;
          }
        };
        for (i2 = 0; i2 < length_; i2++) {
          c = data[i2];
          switch (state) {
            case S.START_BOUNDARY:
              if (index === boundary.length - 2) {
                if (c === HYPHEN) {
                  flags |= F.LAST_BOUNDARY;
                } else if (c !== CR) {
                  return;
                }
                index++;
                break;
              } else if (index - 1 === boundary.length - 2) {
                if (flags & F.LAST_BOUNDARY && c === HYPHEN) {
                  state = S.END;
                  flags = 0;
                } else if (!(flags & F.LAST_BOUNDARY) && c === LF) {
                  index = 0;
                  callback("onPartBegin");
                  state = S.HEADER_FIELD_START;
                } else {
                  return;
                }
                break;
              }
              if (c !== boundary[index + 2]) {
                index = -2;
              }
              if (c === boundary[index + 2]) {
                index++;
              }
              break;
            case S.HEADER_FIELD_START:
              state = S.HEADER_FIELD;
              mark("onHeaderField");
              index = 0;
            case S.HEADER_FIELD:
              if (c === CR) {
                clear("onHeaderField");
                state = S.HEADERS_ALMOST_DONE;
                break;
              }
              index++;
              if (c === HYPHEN) {
                break;
              }
              if (c === COLON) {
                if (index === 1) {
                  return;
                }
                dataCallback("onHeaderField", true);
                state = S.HEADER_VALUE_START;
                break;
              }
              cl = lower(c);
              if (cl < A || cl > Z) {
                return;
              }
              break;
            case S.HEADER_VALUE_START:
              if (c === SPACE) {
                break;
              }
              mark("onHeaderValue");
              state = S.HEADER_VALUE;
            case S.HEADER_VALUE:
              if (c === CR) {
                dataCallback("onHeaderValue", true);
                callback("onHeaderEnd");
                state = S.HEADER_VALUE_ALMOST_DONE;
              }
              break;
            case S.HEADER_VALUE_ALMOST_DONE:
              if (c !== LF) {
                return;
              }
              state = S.HEADER_FIELD_START;
              break;
            case S.HEADERS_ALMOST_DONE:
              if (c !== LF) {
                return;
              }
              callback("onHeadersEnd");
              state = S.PART_DATA_START;
              break;
            case S.PART_DATA_START:
              state = S.PART_DATA;
              mark("onPartData");
            case S.PART_DATA:
              previousIndex = index;
              if (index === 0) {
                i2 += boundaryEnd;
                while (i2 < bufferLength && !(data[i2] in boundaryChars)) {
                  i2 += boundaryLength;
                }
                i2 -= boundaryEnd;
                c = data[i2];
              }
              if (index < boundary.length) {
                if (boundary[index] === c) {
                  if (index === 0) {
                    dataCallback("onPartData", true);
                  }
                  index++;
                } else {
                  index = 0;
                }
              } else if (index === boundary.length) {
                index++;
                if (c === CR) {
                  flags |= F.PART_BOUNDARY;
                } else if (c === HYPHEN) {
                  flags |= F.LAST_BOUNDARY;
                } else {
                  index = 0;
                }
              } else if (index - 1 === boundary.length) {
                if (flags & F.PART_BOUNDARY) {
                  index = 0;
                  if (c === LF) {
                    flags &= ~F.PART_BOUNDARY;
                    callback("onPartEnd");
                    callback("onPartBegin");
                    state = S.HEADER_FIELD_START;
                    break;
                  }
                } else if (flags & F.LAST_BOUNDARY) {
                  if (c === HYPHEN) {
                    callback("onPartEnd");
                    state = S.END;
                    flags = 0;
                  } else {
                    index = 0;
                  }
                } else {
                  index = 0;
                }
              }
              if (index > 0) {
                lookbehind[index - 1] = c;
              } else if (previousIndex > 0) {
                const _lookbehind = new Uint8Array(lookbehind.buffer, lookbehind.byteOffset, lookbehind.byteLength);
                callback("onPartData", 0, previousIndex, _lookbehind);
                previousIndex = 0;
                mark("onPartData");
                i2--;
              }
              break;
            case S.END:
              break;
            default:
              throw new Error(`Unexpected state entered: ${state}`);
          }
        }
        dataCallback("onHeaderField");
        dataCallback("onHeaderValue");
        dataCallback("onPartData");
        this.index = index;
        this.state = state;
        this.flags = flags;
      }
      end() {
        if (this.state === S.HEADER_FIELD_START && this.index === 0 || this.state === S.PART_DATA && this.index === this.boundary.length) {
          this.onPartEnd();
        } else if (this.state !== S.END) {
          throw new Error("MultipartParser.end(): stream ended unexpectedly");
        }
      }
    };
  }
});

// functions/add-item-to-checkout/add-item-to-checkout.mjs
var import_shopify_buy = __toModule(require_shopify_buy());

// node_modules/node-fetch/src/index.js
var import_node_http2 = __toModule(require("http"));
var import_node_https = __toModule(require("https"));
var import_node_zlib = __toModule(require("zlib"));
var import_node_stream2 = __toModule(require("stream"));
var import_node_buffer2 = __toModule(require("buffer"));

// node_modules/data-uri-to-buffer/dist/index.js
function dataUriToBuffer(uri) {
  if (!/^data:/i.test(uri)) {
    throw new TypeError('`uri` does not appear to be a Data URI (must begin with "data:")');
  }
  uri = uri.replace(/\r?\n/g, "");
  const firstComma = uri.indexOf(",");
  if (firstComma === -1 || firstComma <= 4) {
    throw new TypeError("malformed data: URI");
  }
  const meta = uri.substring(5, firstComma).split(";");
  let charset = "";
  let base64 = false;
  const type = meta[0] || "text/plain";
  let typeFull = type;
  for (let i2 = 1; i2 < meta.length; i2++) {
    if (meta[i2] === "base64") {
      base64 = true;
    } else {
      typeFull += `;${meta[i2]}`;
      if (meta[i2].indexOf("charset=") === 0) {
        charset = meta[i2].substring(8);
      }
    }
  }
  if (!meta[0] && !charset.length) {
    typeFull += ";charset=US-ASCII";
    charset = "US-ASCII";
  }
  const encoding = base64 ? "base64" : "ascii";
  const data = unescape(uri.substring(firstComma + 1));
  const buffer = Buffer.from(data, encoding);
  buffer.type = type;
  buffer.typeFull = typeFull;
  buffer.charset = charset;
  return buffer;
}
var dist_default = dataUriToBuffer;

// node_modules/node-fetch/src/body.js
var import_node_stream = __toModule(require("stream"));
var import_node_util = __toModule(require("util"));
var import_node_buffer = __toModule(require("buffer"));
init_fetch_blob();
init_esm_min();

// node_modules/node-fetch/src/errors/base.js
var FetchBaseError = class extends Error {
  constructor(message, type) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
    this.type = type;
  }
  get name() {
    return this.constructor.name;
  }
  get [Symbol.toStringTag]() {
    return this.constructor.name;
  }
};

// node_modules/node-fetch/src/errors/fetch-error.js
var FetchError = class extends FetchBaseError {
  constructor(message, type, systemError) {
    super(message, type);
    if (systemError) {
      this.code = this.errno = systemError.code;
      this.erroredSysCall = systemError.syscall;
    }
  }
};

// node_modules/node-fetch/src/utils/is.js
var NAME = Symbol.toStringTag;
var isURLSearchParameters = (object2) => {
  return typeof object2 === "object" && typeof object2.append === "function" && typeof object2.delete === "function" && typeof object2.get === "function" && typeof object2.getAll === "function" && typeof object2.has === "function" && typeof object2.set === "function" && typeof object2.sort === "function" && object2[NAME] === "URLSearchParams";
};
var isBlob = (object2) => {
  return object2 && typeof object2 === "object" && typeof object2.arrayBuffer === "function" && typeof object2.type === "string" && typeof object2.stream === "function" && typeof object2.constructor === "function" && /^(Blob|File)$/.test(object2[NAME]);
};
var isAbortSignal = (object2) => {
  return typeof object2 === "object" && (object2[NAME] === "AbortSignal" || object2[NAME] === "EventTarget");
};
var isDomainOrSubdomain = (destination, original) => {
  const orig = new URL(original).hostname;
  const dest = new URL(destination).hostname;
  return orig === dest || orig.endsWith(`.${dest}`);
};

// node_modules/node-fetch/src/body.js
var pipeline = (0, import_node_util.promisify)(import_node_stream.default.pipeline);
var INTERNALS = Symbol("Body internals");
var Body = class {
  constructor(body, {
    size = 0
  } = {}) {
    let boundary = null;
    if (body === null) {
      body = null;
    } else if (isURLSearchParameters(body)) {
      body = import_node_buffer.Buffer.from(body.toString());
    } else if (isBlob(body)) {
    } else if (import_node_buffer.Buffer.isBuffer(body)) {
    } else if (import_node_util.types.isAnyArrayBuffer(body)) {
      body = import_node_buffer.Buffer.from(body);
    } else if (ArrayBuffer.isView(body)) {
      body = import_node_buffer.Buffer.from(body.buffer, body.byteOffset, body.byteLength);
    } else if (body instanceof import_node_stream.default) {
    } else if (body instanceof FormData) {
      body = formDataToBlob(body);
      boundary = body.type.split("=")[1];
    } else {
      body = import_node_buffer.Buffer.from(String(body));
    }
    let stream = body;
    if (import_node_buffer.Buffer.isBuffer(body)) {
      stream = import_node_stream.default.Readable.from(body);
    } else if (isBlob(body)) {
      stream = import_node_stream.default.Readable.from(body.stream());
    }
    this[INTERNALS] = {
      body,
      stream,
      boundary,
      disturbed: false,
      error: null
    };
    this.size = size;
    if (body instanceof import_node_stream.default) {
      body.on("error", (error_) => {
        const error = error_ instanceof FetchBaseError ? error_ : new FetchError(`Invalid response body while trying to fetch ${this.url}: ${error_.message}`, "system", error_);
        this[INTERNALS].error = error;
      });
    }
  }
  get body() {
    return this[INTERNALS].stream;
  }
  get bodyUsed() {
    return this[INTERNALS].disturbed;
  }
  async arrayBuffer() {
    const { buffer, byteOffset, byteLength } = await consumeBody(this);
    return buffer.slice(byteOffset, byteOffset + byteLength);
  }
  async formData() {
    const ct = this.headers.get("content-type");
    if (ct.startsWith("application/x-www-form-urlencoded")) {
      const formData = new FormData();
      const parameters = new URLSearchParams(await this.text());
      for (const [name, value] of parameters) {
        formData.append(name, value);
      }
      return formData;
    }
    const { toFormData: toFormData2 } = await Promise.resolve().then(() => (init_multipart_parser(), multipart_parser_exports));
    return toFormData2(this.body, ct);
  }
  async blob() {
    const ct = this.headers && this.headers.get("content-type") || this[INTERNALS].body && this[INTERNALS].body.type || "";
    const buf = await this.arrayBuffer();
    return new fetch_blob_default([buf], {
      type: ct
    });
  }
  async json() {
    const text = await this.text();
    return JSON.parse(text);
  }
  async text() {
    const buffer = await consumeBody(this);
    return new TextDecoder().decode(buffer);
  }
  buffer() {
    return consumeBody(this);
  }
};
Body.prototype.buffer = (0, import_node_util.deprecate)(Body.prototype.buffer, "Please use 'response.arrayBuffer()' instead of 'response.buffer()'", "node-fetch#buffer");
Object.defineProperties(Body.prototype, {
  body: { enumerable: true },
  bodyUsed: { enumerable: true },
  arrayBuffer: { enumerable: true },
  blob: { enumerable: true },
  json: { enumerable: true },
  text: { enumerable: true },
  data: { get: (0, import_node_util.deprecate)(() => {
  }, "data doesn't exist, use json(), text(), arrayBuffer(), or body instead", "https://github.com/node-fetch/node-fetch/issues/1000 (response)") }
});
async function consumeBody(data) {
  if (data[INTERNALS].disturbed) {
    throw new TypeError(`body used already for: ${data.url}`);
  }
  data[INTERNALS].disturbed = true;
  if (data[INTERNALS].error) {
    throw data[INTERNALS].error;
  }
  const { body } = data;
  if (body === null) {
    return import_node_buffer.Buffer.alloc(0);
  }
  if (!(body instanceof import_node_stream.default)) {
    return import_node_buffer.Buffer.alloc(0);
  }
  const accum = [];
  let accumBytes = 0;
  try {
    for await (const chunk of body) {
      if (data.size > 0 && accumBytes + chunk.length > data.size) {
        const error = new FetchError(`content size at ${data.url} over limit: ${data.size}`, "max-size");
        body.destroy(error);
        throw error;
      }
      accumBytes += chunk.length;
      accum.push(chunk);
    }
  } catch (error) {
    const error_ = error instanceof FetchBaseError ? error : new FetchError(`Invalid response body while trying to fetch ${data.url}: ${error.message}`, "system", error);
    throw error_;
  }
  if (body.readableEnded === true || body._readableState.ended === true) {
    try {
      if (accum.every((c) => typeof c === "string")) {
        return import_node_buffer.Buffer.from(accum.join(""));
      }
      return import_node_buffer.Buffer.concat(accum, accumBytes);
    } catch (error) {
      throw new FetchError(`Could not create Buffer from response body for ${data.url}: ${error.message}`, "system", error);
    }
  } else {
    throw new FetchError(`Premature close of server response while trying to fetch ${data.url}`);
  }
}
var clone = (instance, highWaterMark) => {
  let p1;
  let p2;
  let { body } = instance[INTERNALS];
  if (instance.bodyUsed) {
    throw new Error("cannot clone body after it is used");
  }
  if (body instanceof import_node_stream.default && typeof body.getBoundary !== "function") {
    p1 = new import_node_stream.PassThrough({ highWaterMark });
    p2 = new import_node_stream.PassThrough({ highWaterMark });
    body.pipe(p1);
    body.pipe(p2);
    instance[INTERNALS].stream = p1;
    body = p2;
  }
  return body;
};
var getNonSpecFormDataBoundary = (0, import_node_util.deprecate)((body) => body.getBoundary(), "form-data doesn't follow the spec and requires special treatment. Use alternative package", "https://github.com/node-fetch/node-fetch/issues/1167");
var extractContentType = (body, request) => {
  if (body === null) {
    return null;
  }
  if (typeof body === "string") {
    return "text/plain;charset=UTF-8";
  }
  if (isURLSearchParameters(body)) {
    return "application/x-www-form-urlencoded;charset=UTF-8";
  }
  if (isBlob(body)) {
    return body.type || null;
  }
  if (import_node_buffer.Buffer.isBuffer(body) || import_node_util.types.isAnyArrayBuffer(body) || ArrayBuffer.isView(body)) {
    return null;
  }
  if (body instanceof FormData) {
    return `multipart/form-data; boundary=${request[INTERNALS].boundary}`;
  }
  if (body && typeof body.getBoundary === "function") {
    return `multipart/form-data;boundary=${getNonSpecFormDataBoundary(body)}`;
  }
  if (body instanceof import_node_stream.default) {
    return null;
  }
  return "text/plain;charset=UTF-8";
};
var getTotalBytes = (request) => {
  const { body } = request[INTERNALS];
  if (body === null) {
    return 0;
  }
  if (isBlob(body)) {
    return body.size;
  }
  if (import_node_buffer.Buffer.isBuffer(body)) {
    return body.length;
  }
  if (body && typeof body.getLengthSync === "function") {
    return body.hasKnownLength && body.hasKnownLength() ? body.getLengthSync() : null;
  }
  return null;
};
var writeToStream = async (dest, { body }) => {
  if (body === null) {
    dest.end();
  } else {
    await pipeline(body, dest);
  }
};

// node_modules/node-fetch/src/headers.js
var import_node_util2 = __toModule(require("util"));
var import_node_http = __toModule(require("http"));
var validateHeaderName = typeof import_node_http.default.validateHeaderName === "function" ? import_node_http.default.validateHeaderName : (name) => {
  if (!/^[\^`\-\w!#$%&'*+.|~]+$/.test(name)) {
    const error = new TypeError(`Header name must be a valid HTTP token [${name}]`);
    Object.defineProperty(error, "code", { value: "ERR_INVALID_HTTP_TOKEN" });
    throw error;
  }
};
var validateHeaderValue = typeof import_node_http.default.validateHeaderValue === "function" ? import_node_http.default.validateHeaderValue : (name, value) => {
  if (/[^\t\u0020-\u007E\u0080-\u00FF]/.test(value)) {
    const error = new TypeError(`Invalid character in header content ["${name}"]`);
    Object.defineProperty(error, "code", { value: "ERR_INVALID_CHAR" });
    throw error;
  }
};
var Headers = class extends URLSearchParams {
  constructor(init) {
    let result = [];
    if (init instanceof Headers) {
      const raw = init.raw();
      for (const [name, values] of Object.entries(raw)) {
        result.push(...values.map((value) => [name, value]));
      }
    } else if (init == null) {
    } else if (typeof init === "object" && !import_node_util2.types.isBoxedPrimitive(init)) {
      const method = init[Symbol.iterator];
      if (method == null) {
        result.push(...Object.entries(init));
      } else {
        if (typeof method !== "function") {
          throw new TypeError("Header pairs must be iterable");
        }
        result = [...init].map((pair) => {
          if (typeof pair !== "object" || import_node_util2.types.isBoxedPrimitive(pair)) {
            throw new TypeError("Each header pair must be an iterable object");
          }
          return [...pair];
        }).map((pair) => {
          if (pair.length !== 2) {
            throw new TypeError("Each header pair must be a name/value tuple");
          }
          return [...pair];
        });
      }
    } else {
      throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");
    }
    result = result.length > 0 ? result.map(([name, value]) => {
      validateHeaderName(name);
      validateHeaderValue(name, String(value));
      return [String(name).toLowerCase(), String(value)];
    }) : void 0;
    super(result);
    return new Proxy(this, {
      get(target, p, receiver) {
        switch (p) {
          case "append":
          case "set":
            return (name, value) => {
              validateHeaderName(name);
              validateHeaderValue(name, String(value));
              return URLSearchParams.prototype[p].call(target, String(name).toLowerCase(), String(value));
            };
          case "delete":
          case "has":
          case "getAll":
            return (name) => {
              validateHeaderName(name);
              return URLSearchParams.prototype[p].call(target, String(name).toLowerCase());
            };
          case "keys":
            return () => {
              target.sort();
              return new Set(URLSearchParams.prototype.keys.call(target)).keys();
            };
          default:
            return Reflect.get(target, p, receiver);
        }
      }
    });
  }
  get [Symbol.toStringTag]() {
    return this.constructor.name;
  }
  toString() {
    return Object.prototype.toString.call(this);
  }
  get(name) {
    const values = this.getAll(name);
    if (values.length === 0) {
      return null;
    }
    let value = values.join(", ");
    if (/^content-encoding$/i.test(name)) {
      value = value.toLowerCase();
    }
    return value;
  }
  forEach(callback, thisArg = void 0) {
    for (const name of this.keys()) {
      Reflect.apply(callback, thisArg, [this.get(name), name, this]);
    }
  }
  *values() {
    for (const name of this.keys()) {
      yield this.get(name);
    }
  }
  *entries() {
    for (const name of this.keys()) {
      yield [name, this.get(name)];
    }
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  raw() {
    return [...this.keys()].reduce((result, key) => {
      result[key] = this.getAll(key);
      return result;
    }, {});
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return [...this.keys()].reduce((result, key) => {
      const values = this.getAll(key);
      if (key === "host") {
        result[key] = values[0];
      } else {
        result[key] = values.length > 1 ? values : values[0];
      }
      return result;
    }, {});
  }
};
Object.defineProperties(Headers.prototype, ["get", "entries", "forEach", "values"].reduce((result, property) => {
  result[property] = { enumerable: true };
  return result;
}, {}));
function fromRawHeaders(headers = []) {
  return new Headers(headers.reduce((result, value, index, array) => {
    if (index % 2 === 0) {
      result.push(array.slice(index, index + 2));
    }
    return result;
  }, []).filter(([name, value]) => {
    try {
      validateHeaderName(name);
      validateHeaderValue(name, String(value));
      return true;
    } catch {
      return false;
    }
  }));
}

// node_modules/node-fetch/src/utils/is-redirect.js
var redirectStatus = new Set([301, 302, 303, 307, 308]);
var isRedirect = (code) => {
  return redirectStatus.has(code);
};

// node_modules/node-fetch/src/response.js
var INTERNALS2 = Symbol("Response internals");
var Response = class extends Body {
  constructor(body = null, options = {}) {
    super(body, options);
    const status = options.status != null ? options.status : 200;
    const headers = new Headers(options.headers);
    if (body !== null && !headers.has("Content-Type")) {
      const contentType = extractContentType(body, this);
      if (contentType) {
        headers.append("Content-Type", contentType);
      }
    }
    this[INTERNALS2] = {
      type: "default",
      url: options.url,
      status,
      statusText: options.statusText || "",
      headers,
      counter: options.counter,
      highWaterMark: options.highWaterMark
    };
  }
  get type() {
    return this[INTERNALS2].type;
  }
  get url() {
    return this[INTERNALS2].url || "";
  }
  get status() {
    return this[INTERNALS2].status;
  }
  get ok() {
    return this[INTERNALS2].status >= 200 && this[INTERNALS2].status < 300;
  }
  get redirected() {
    return this[INTERNALS2].counter > 0;
  }
  get statusText() {
    return this[INTERNALS2].statusText;
  }
  get headers() {
    return this[INTERNALS2].headers;
  }
  get highWaterMark() {
    return this[INTERNALS2].highWaterMark;
  }
  clone() {
    return new Response(clone(this, this.highWaterMark), {
      type: this.type,
      url: this.url,
      status: this.status,
      statusText: this.statusText,
      headers: this.headers,
      ok: this.ok,
      redirected: this.redirected,
      size: this.size,
      highWaterMark: this.highWaterMark
    });
  }
  static redirect(url, status = 302) {
    if (!isRedirect(status)) {
      throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
    }
    return new Response(null, {
      headers: {
        location: new URL(url).toString()
      },
      status
    });
  }
  static error() {
    const response = new Response(null, { status: 0, statusText: "" });
    response[INTERNALS2].type = "error";
    return response;
  }
  get [Symbol.toStringTag]() {
    return "Response";
  }
};
Object.defineProperties(Response.prototype, {
  type: { enumerable: true },
  url: { enumerable: true },
  status: { enumerable: true },
  ok: { enumerable: true },
  redirected: { enumerable: true },
  statusText: { enumerable: true },
  headers: { enumerable: true },
  clone: { enumerable: true }
});

// node_modules/node-fetch/src/request.js
var import_node_url = __toModule(require("url"));
var import_node_util3 = __toModule(require("util"));

// node_modules/node-fetch/src/utils/get-search.js
var getSearch = (parsedURL) => {
  if (parsedURL.search) {
    return parsedURL.search;
  }
  const lastOffset = parsedURL.href.length - 1;
  const hash = parsedURL.hash || (parsedURL.href[lastOffset] === "#" ? "#" : "");
  return parsedURL.href[lastOffset - hash.length] === "?" ? "?" : "";
};

// node_modules/node-fetch/src/utils/referrer.js
var import_node_net = __toModule(require("net"));
function stripURLForUseAsAReferrer(url, originOnly = false) {
  if (url == null) {
    return "no-referrer";
  }
  url = new URL(url);
  if (/^(about|blob|data):$/.test(url.protocol)) {
    return "no-referrer";
  }
  url.username = "";
  url.password = "";
  url.hash = "";
  if (originOnly) {
    url.pathname = "";
    url.search = "";
  }
  return url;
}
var ReferrerPolicy = new Set([
  "",
  "no-referrer",
  "no-referrer-when-downgrade",
  "same-origin",
  "origin",
  "strict-origin",
  "origin-when-cross-origin",
  "strict-origin-when-cross-origin",
  "unsafe-url"
]);
var DEFAULT_REFERRER_POLICY = "strict-origin-when-cross-origin";
function validateReferrerPolicy(referrerPolicy) {
  if (!ReferrerPolicy.has(referrerPolicy)) {
    throw new TypeError(`Invalid referrerPolicy: ${referrerPolicy}`);
  }
  return referrerPolicy;
}
function isOriginPotentiallyTrustworthy(url) {
  if (/^(http|ws)s:$/.test(url.protocol)) {
    return true;
  }
  const hostIp = url.host.replace(/(^\[)|(]$)/g, "");
  const hostIPVersion = (0, import_node_net.isIP)(hostIp);
  if (hostIPVersion === 4 && /^127\./.test(hostIp)) {
    return true;
  }
  if (hostIPVersion === 6 && /^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(hostIp)) {
    return true;
  }
  if (/^(.+\.)*localhost$/.test(url.host)) {
    return false;
  }
  if (url.protocol === "file:") {
    return true;
  }
  return false;
}
function isUrlPotentiallyTrustworthy(url) {
  if (/^about:(blank|srcdoc)$/.test(url)) {
    return true;
  }
  if (url.protocol === "data:") {
    return true;
  }
  if (/^(blob|filesystem):$/.test(url.protocol)) {
    return true;
  }
  return isOriginPotentiallyTrustworthy(url);
}
function determineRequestsReferrer(request, { referrerURLCallback, referrerOriginCallback } = {}) {
  if (request.referrer === "no-referrer" || request.referrerPolicy === "") {
    return null;
  }
  const policy = request.referrerPolicy;
  if (request.referrer === "about:client") {
    return "no-referrer";
  }
  const referrerSource = request.referrer;
  let referrerURL = stripURLForUseAsAReferrer(referrerSource);
  let referrerOrigin = stripURLForUseAsAReferrer(referrerSource, true);
  if (referrerURL.toString().length > 4096) {
    referrerURL = referrerOrigin;
  }
  if (referrerURLCallback) {
    referrerURL = referrerURLCallback(referrerURL);
  }
  if (referrerOriginCallback) {
    referrerOrigin = referrerOriginCallback(referrerOrigin);
  }
  const currentURL = new URL(request.url);
  switch (policy) {
    case "no-referrer":
      return "no-referrer";
    case "origin":
      return referrerOrigin;
    case "unsafe-url":
      return referrerURL;
    case "strict-origin":
      if (isUrlPotentiallyTrustworthy(referrerURL) && !isUrlPotentiallyTrustworthy(currentURL)) {
        return "no-referrer";
      }
      return referrerOrigin.toString();
    case "strict-origin-when-cross-origin":
      if (referrerURL.origin === currentURL.origin) {
        return referrerURL;
      }
      if (isUrlPotentiallyTrustworthy(referrerURL) && !isUrlPotentiallyTrustworthy(currentURL)) {
        return "no-referrer";
      }
      return referrerOrigin;
    case "same-origin":
      if (referrerURL.origin === currentURL.origin) {
        return referrerURL;
      }
      return "no-referrer";
    case "origin-when-cross-origin":
      if (referrerURL.origin === currentURL.origin) {
        return referrerURL;
      }
      return referrerOrigin;
    case "no-referrer-when-downgrade":
      if (isUrlPotentiallyTrustworthy(referrerURL) && !isUrlPotentiallyTrustworthy(currentURL)) {
        return "no-referrer";
      }
      return referrerURL;
    default:
      throw new TypeError(`Invalid referrerPolicy: ${policy}`);
  }
}
function parseReferrerPolicyFromHeader(headers) {
  const policyTokens = (headers.get("referrer-policy") || "").split(/[,\s]+/);
  let policy = "";
  for (const token of policyTokens) {
    if (token && ReferrerPolicy.has(token)) {
      policy = token;
    }
  }
  return policy;
}

// node_modules/node-fetch/src/request.js
var INTERNALS3 = Symbol("Request internals");
var isRequest = (object2) => {
  return typeof object2 === "object" && typeof object2[INTERNALS3] === "object";
};
var doBadDataWarn = (0, import_node_util3.deprecate)(() => {
}, ".data is not a valid RequestInit property, use .body instead", "https://github.com/node-fetch/node-fetch/issues/1000 (request)");
var Request = class extends Body {
  constructor(input, init = {}) {
    let parsedURL;
    if (isRequest(input)) {
      parsedURL = new URL(input.url);
    } else {
      parsedURL = new URL(input);
      input = {};
    }
    if (parsedURL.username !== "" || parsedURL.password !== "") {
      throw new TypeError(`${parsedURL} is an url with embedded credentials.`);
    }
    let method = init.method || input.method || "GET";
    method = method.toUpperCase();
    if ("data" in init) {
      doBadDataWarn();
    }
    if ((init.body != null || isRequest(input) && input.body !== null) && (method === "GET" || method === "HEAD")) {
      throw new TypeError("Request with GET/HEAD method cannot have body");
    }
    const inputBody = init.body ? init.body : isRequest(input) && input.body !== null ? clone(input) : null;
    super(inputBody, {
      size: init.size || input.size || 0
    });
    const headers = new Headers(init.headers || input.headers || {});
    if (inputBody !== null && !headers.has("Content-Type")) {
      const contentType = extractContentType(inputBody, this);
      if (contentType) {
        headers.set("Content-Type", contentType);
      }
    }
    let signal = isRequest(input) ? input.signal : null;
    if ("signal" in init) {
      signal = init.signal;
    }
    if (signal != null && !isAbortSignal(signal)) {
      throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");
    }
    let referrer = init.referrer == null ? input.referrer : init.referrer;
    if (referrer === "") {
      referrer = "no-referrer";
    } else if (referrer) {
      const parsedReferrer = new URL(referrer);
      referrer = /^about:(\/\/)?client$/.test(parsedReferrer) ? "client" : parsedReferrer;
    } else {
      referrer = void 0;
    }
    this[INTERNALS3] = {
      method,
      redirect: init.redirect || input.redirect || "follow",
      headers,
      parsedURL,
      signal,
      referrer
    };
    this.follow = init.follow === void 0 ? input.follow === void 0 ? 20 : input.follow : init.follow;
    this.compress = init.compress === void 0 ? input.compress === void 0 ? true : input.compress : init.compress;
    this.counter = init.counter || input.counter || 0;
    this.agent = init.agent || input.agent;
    this.highWaterMark = init.highWaterMark || input.highWaterMark || 16384;
    this.insecureHTTPParser = init.insecureHTTPParser || input.insecureHTTPParser || false;
    this.referrerPolicy = init.referrerPolicy || input.referrerPolicy || "";
  }
  get method() {
    return this[INTERNALS3].method;
  }
  get url() {
    return (0, import_node_url.format)(this[INTERNALS3].parsedURL);
  }
  get headers() {
    return this[INTERNALS3].headers;
  }
  get redirect() {
    return this[INTERNALS3].redirect;
  }
  get signal() {
    return this[INTERNALS3].signal;
  }
  get referrer() {
    if (this[INTERNALS3].referrer === "no-referrer") {
      return "";
    }
    if (this[INTERNALS3].referrer === "client") {
      return "about:client";
    }
    if (this[INTERNALS3].referrer) {
      return this[INTERNALS3].referrer.toString();
    }
    return void 0;
  }
  get referrerPolicy() {
    return this[INTERNALS3].referrerPolicy;
  }
  set referrerPolicy(referrerPolicy) {
    this[INTERNALS3].referrerPolicy = validateReferrerPolicy(referrerPolicy);
  }
  clone() {
    return new Request(this);
  }
  get [Symbol.toStringTag]() {
    return "Request";
  }
};
Object.defineProperties(Request.prototype, {
  method: { enumerable: true },
  url: { enumerable: true },
  headers: { enumerable: true },
  redirect: { enumerable: true },
  clone: { enumerable: true },
  signal: { enumerable: true },
  referrer: { enumerable: true },
  referrerPolicy: { enumerable: true }
});
var getNodeRequestOptions = (request) => {
  const { parsedURL } = request[INTERNALS3];
  const headers = new Headers(request[INTERNALS3].headers);
  if (!headers.has("Accept")) {
    headers.set("Accept", "*/*");
  }
  let contentLengthValue = null;
  if (request.body === null && /^(post|put)$/i.test(request.method)) {
    contentLengthValue = "0";
  }
  if (request.body !== null) {
    const totalBytes = getTotalBytes(request);
    if (typeof totalBytes === "number" && !Number.isNaN(totalBytes)) {
      contentLengthValue = String(totalBytes);
    }
  }
  if (contentLengthValue) {
    headers.set("Content-Length", contentLengthValue);
  }
  if (request.referrerPolicy === "") {
    request.referrerPolicy = DEFAULT_REFERRER_POLICY;
  }
  if (request.referrer && request.referrer !== "no-referrer") {
    request[INTERNALS3].referrer = determineRequestsReferrer(request);
  } else {
    request[INTERNALS3].referrer = "no-referrer";
  }
  if (request[INTERNALS3].referrer instanceof URL) {
    headers.set("Referer", request.referrer);
  }
  if (!headers.has("User-Agent")) {
    headers.set("User-Agent", "node-fetch");
  }
  if (request.compress && !headers.has("Accept-Encoding")) {
    headers.set("Accept-Encoding", "gzip,deflate,br");
  }
  let { agent } = request;
  if (typeof agent === "function") {
    agent = agent(parsedURL);
  }
  if (!headers.has("Connection") && !agent) {
    headers.set("Connection", "close");
  }
  const search = getSearch(parsedURL);
  const options = {
    path: parsedURL.pathname + search,
    method: request.method,
    headers: headers[Symbol.for("nodejs.util.inspect.custom")](),
    insecureHTTPParser: request.insecureHTTPParser,
    agent
  };
  return {
    parsedURL,
    options
  };
};

// node_modules/node-fetch/src/errors/abort-error.js
var AbortError = class extends FetchBaseError {
  constructor(message, type = "aborted") {
    super(message, type);
  }
};

// node_modules/node-fetch/src/index.js
init_esm_min();
init_from();
var supportedSchemas = new Set(["data:", "http:", "https:"]);
async function fetch2(url, options_) {
  return new Promise((resolve, reject) => {
    const request = new Request(url, options_);
    const { parsedURL, options } = getNodeRequestOptions(request);
    if (!supportedSchemas.has(parsedURL.protocol)) {
      throw new TypeError(`node-fetch cannot load ${url}. URL scheme "${parsedURL.protocol.replace(/:$/, "")}" is not supported.`);
    }
    if (parsedURL.protocol === "data:") {
      const data = dist_default(request.url);
      const response2 = new Response(data, { headers: { "Content-Type": data.typeFull } });
      resolve(response2);
      return;
    }
    const send = (parsedURL.protocol === "https:" ? import_node_https.default : import_node_http2.default).request;
    const { signal } = request;
    let response = null;
    const abort = () => {
      const error = new AbortError("The operation was aborted.");
      reject(error);
      if (request.body && request.body instanceof import_node_stream2.default.Readable) {
        request.body.destroy(error);
      }
      if (!response || !response.body) {
        return;
      }
      response.body.emit("error", error);
    };
    if (signal && signal.aborted) {
      abort();
      return;
    }
    const abortAndFinalize = () => {
      abort();
      finalize();
    };
    const request_ = send(parsedURL.toString(), options);
    if (signal) {
      signal.addEventListener("abort", abortAndFinalize);
    }
    const finalize = () => {
      request_.abort();
      if (signal) {
        signal.removeEventListener("abort", abortAndFinalize);
      }
    };
    request_.on("error", (error) => {
      reject(new FetchError(`request to ${request.url} failed, reason: ${error.message}`, "system", error));
      finalize();
    });
    fixResponseChunkedTransferBadEnding(request_, (error) => {
      response.body.destroy(error);
    });
    if (process.version < "v14") {
      request_.on("socket", (s2) => {
        let endedWithEventsCount;
        s2.prependListener("end", () => {
          endedWithEventsCount = s2._eventsCount;
        });
        s2.prependListener("close", (hadError) => {
          if (response && endedWithEventsCount < s2._eventsCount && !hadError) {
            const error = new Error("Premature close");
            error.code = "ERR_STREAM_PREMATURE_CLOSE";
            response.body.emit("error", error);
          }
        });
      });
    }
    request_.on("response", (response_) => {
      request_.setTimeout(0);
      const headers = fromRawHeaders(response_.rawHeaders);
      if (isRedirect(response_.statusCode)) {
        const location = headers.get("Location");
        let locationURL = null;
        try {
          locationURL = location === null ? null : new URL(location, request.url);
        } catch {
          if (request.redirect !== "manual") {
            reject(new FetchError(`uri requested responds with an invalid redirect URL: ${location}`, "invalid-redirect"));
            finalize();
            return;
          }
        }
        switch (request.redirect) {
          case "error":
            reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, "no-redirect"));
            finalize();
            return;
          case "manual":
            break;
          case "follow": {
            if (locationURL === null) {
              break;
            }
            if (request.counter >= request.follow) {
              reject(new FetchError(`maximum redirect reached at: ${request.url}`, "max-redirect"));
              finalize();
              return;
            }
            const requestOptions = {
              headers: new Headers(request.headers),
              follow: request.follow,
              counter: request.counter + 1,
              agent: request.agent,
              compress: request.compress,
              method: request.method,
              body: clone(request),
              signal: request.signal,
              size: request.size,
              referrer: request.referrer,
              referrerPolicy: request.referrerPolicy
            };
            if (!isDomainOrSubdomain(request.url, locationURL)) {
              for (const name of ["authorization", "www-authenticate", "cookie", "cookie2"]) {
                requestOptions.headers.delete(name);
              }
            }
            if (response_.statusCode !== 303 && request.body && options_.body instanceof import_node_stream2.default.Readable) {
              reject(new FetchError("Cannot follow redirect with body being a readable stream", "unsupported-redirect"));
              finalize();
              return;
            }
            if (response_.statusCode === 303 || (response_.statusCode === 301 || response_.statusCode === 302) && request.method === "POST") {
              requestOptions.method = "GET";
              requestOptions.body = void 0;
              requestOptions.headers.delete("content-length");
            }
            const responseReferrerPolicy = parseReferrerPolicyFromHeader(headers);
            if (responseReferrerPolicy) {
              requestOptions.referrerPolicy = responseReferrerPolicy;
            }
            resolve(fetch2(new Request(locationURL, requestOptions)));
            finalize();
            return;
          }
          default:
            return reject(new TypeError(`Redirect option '${request.redirect}' is not a valid value of RequestRedirect`));
        }
      }
      if (signal) {
        response_.once("end", () => {
          signal.removeEventListener("abort", abortAndFinalize);
        });
      }
      let body = (0, import_node_stream2.pipeline)(response_, new import_node_stream2.PassThrough(), (error) => {
        if (error) {
          reject(error);
        }
      });
      if (process.version < "v12.10") {
        response_.on("aborted", abortAndFinalize);
      }
      const responseOptions = {
        url: request.url,
        status: response_.statusCode,
        statusText: response_.statusMessage,
        headers,
        size: request.size,
        counter: request.counter,
        highWaterMark: request.highWaterMark
      };
      const codings = headers.get("Content-Encoding");
      if (!request.compress || request.method === "HEAD" || codings === null || response_.statusCode === 204 || response_.statusCode === 304) {
        response = new Response(body, responseOptions);
        resolve(response);
        return;
      }
      const zlibOptions = {
        flush: import_node_zlib.default.Z_SYNC_FLUSH,
        finishFlush: import_node_zlib.default.Z_SYNC_FLUSH
      };
      if (codings === "gzip" || codings === "x-gzip") {
        body = (0, import_node_stream2.pipeline)(body, import_node_zlib.default.createGunzip(zlibOptions), (error) => {
          if (error) {
            reject(error);
          }
        });
        response = new Response(body, responseOptions);
        resolve(response);
        return;
      }
      if (codings === "deflate" || codings === "x-deflate") {
        const raw = (0, import_node_stream2.pipeline)(response_, new import_node_stream2.PassThrough(), (error) => {
          if (error) {
            reject(error);
          }
        });
        raw.once("data", (chunk) => {
          if ((chunk[0] & 15) === 8) {
            body = (0, import_node_stream2.pipeline)(body, import_node_zlib.default.createInflate(), (error) => {
              if (error) {
                reject(error);
              }
            });
          } else {
            body = (0, import_node_stream2.pipeline)(body, import_node_zlib.default.createInflateRaw(), (error) => {
              if (error) {
                reject(error);
              }
            });
          }
          response = new Response(body, responseOptions);
          resolve(response);
        });
        raw.once("end", () => {
          if (!response) {
            response = new Response(body, responseOptions);
            resolve(response);
          }
        });
        return;
      }
      if (codings === "br") {
        body = (0, import_node_stream2.pipeline)(body, import_node_zlib.default.createBrotliDecompress(), (error) => {
          if (error) {
            reject(error);
          }
        });
        response = new Response(body, responseOptions);
        resolve(response);
        return;
      }
      response = new Response(body, responseOptions);
      resolve(response);
    });
    writeToStream(request_, request).catch(reject);
  });
}
function fixResponseChunkedTransferBadEnding(request, errorCallback) {
  const LAST_CHUNK = import_node_buffer2.Buffer.from("0\r\n\r\n");
  let isChunkedTransfer = false;
  let properLastChunkReceived = false;
  let previousChunk;
  request.on("response", (response) => {
    const { headers } = response;
    isChunkedTransfer = headers["transfer-encoding"] === "chunked" && !headers["content-length"];
  });
  request.on("socket", (socket) => {
    const onSocketClose = () => {
      if (isChunkedTransfer && !properLastChunkReceived) {
        const error = new Error("Premature close");
        error.code = "ERR_STREAM_PREMATURE_CLOSE";
        errorCallback(error);
      }
    };
    socket.prependListener("close", onSocketClose);
    request.on("abort", () => {
      socket.removeListener("close", onSocketClose);
    });
    socket.on("data", (buf) => {
      properLastChunkReceived = import_node_buffer2.Buffer.compare(buf.slice(-5), LAST_CHUNK) === 0;
      if (!properLastChunkReceived && previousChunk) {
        properLastChunkReceived = import_node_buffer2.Buffer.compare(previousChunk.slice(-3), LAST_CHUNK.slice(0, 3)) === 0 && import_node_buffer2.Buffer.compare(buf.slice(-2), LAST_CHUNK.slice(3)) === 0;
      }
      previousChunk = buf;
    });
  });
}

// functions/add-item-to-checkout/add-item-to-checkout.mjs
var object = {};
var addItemToCheckout = async (variantId, checkoutId, quantity) => {
  const client = import_shopify_buy.default.buildClient({
    storefrontAccessToken: process.env.REACT_APP_STORE_API_KEY,
    domain: process.env.REACT_APP_STORE_DOMAIN
  }, fetch2);
  const lineItemsToAdd = [
    {
      variantId,
      quantity: parseInt(quantity)
    }
  ];
  await client.checkout.addLineItems(checkoutId, lineItemsToAdd).then((checkout) => {
    object["checkout"] = checkout;
  }).catch((err) => console.log(err));
  return object;
};
exports.handler = async function(event, context) {
  const { quantity, variantid, checkoutid } = event.queryStringParameters;
  let variantId = variantid.replace(/equalssymbol/g, "=");
  let checkoutId = checkoutid.replace(/equalssymbol/g, "=");
  try {
    const checkout = await addItemToCheckout(variantId, checkoutId, quantity);
    return {
      statusCode: 200,
      body: JSON.stringify(checkout)
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};
/*
@license
The MIT License (MIT)

Copyright (c) 2016 Shopify Inc.

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/
/*! fetch-blob. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */
/*! formdata-polyfill. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */
/*! node-domexception. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */
//# sourceMappingURL=add-item-to-checkout.js.map
