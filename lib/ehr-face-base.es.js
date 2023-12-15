var Ot = Object.defineProperty;
var Pt = (C, H, U) => H in C ? Ot(C, H, { enumerable: !0, configurable: !0, writable: !0, value: U }) : C[H] = U;
var ot = (C, H, U) => (Pt(C, typeof H != "symbol" ? H + "" : H, U), U);
import { Fragment, isVNode, Comment, Text, computed, inject, provide, ref, defineComponent, unref, shallowRef, getCurrentInstance, watch, watchEffect, onBeforeUnmount, isRef, reactive, createVNode, h as h$1, Transition, onBeforeMount, onMounted, onUpdated, nextTick, Teleport, render, onUnmounted, TransitionGroup, withDirectives, vShow, resolveComponent, openBlock, createElementBlock, normalizeClass, createCommentVNode, createBlock, normalizeStyle as normalizeStyle$1, withCtx, renderList, createTextVNode, toDisplayString } from "vue";
function bind$2(C, H) {
  return function() {
    return C.apply(H, arguments);
  };
}
const { toString: toString$1 } = Object.prototype, { getPrototypeOf } = Object, kindOf = /* @__PURE__ */ ((C) => (H) => {
  const U = toString$1.call(H);
  return C[U] || (C[U] = U.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), kindOfTest = (C) => (C = C.toLowerCase(), (H) => kindOf(H) === C), typeOfTest = (C) => (H) => typeof H === C, { isArray: isArray$8 } = Array, isUndefined$1 = typeOfTest("undefined");
function isBuffer$3(C) {
  return C !== null && !isUndefined$1(C) && C.constructor !== null && !isUndefined$1(C.constructor) && isFunction$2(C.constructor.isBuffer) && C.constructor.isBuffer(C);
}
const isArrayBuffer = kindOfTest("ArrayBuffer");
function isArrayBufferView(C) {
  let H;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? H = ArrayBuffer.isView(C) : H = C && C.buffer && isArrayBuffer(C.buffer), H;
}
const isString$3 = typeOfTest("string"), isFunction$2 = typeOfTest("function"), isNumber$2 = typeOfTest("number"), isObject$3 = (C) => C !== null && typeof C == "object", isBoolean$1 = (C) => C === !0 || C === !1, isPlainObject = (C) => {
  if (kindOf(C) !== "object")
    return !1;
  const H = getPrototypeOf(C);
  return (H === null || H === Object.prototype || Object.getPrototypeOf(H) === null) && !(Symbol.toStringTag in C) && !(Symbol.iterator in C);
}, isDate$2 = kindOfTest("Date"), isFile = kindOfTest("File"), isBlob = kindOfTest("Blob"), isFileList = kindOfTest("FileList"), isStream = (C) => isObject$3(C) && isFunction$2(C.pipe), isFormData = (C) => {
  let H;
  return C && (typeof FormData == "function" && C instanceof FormData || isFunction$2(C.append) && ((H = kindOf(C)) === "formdata" || // detect form-data instance
  H === "object" && isFunction$2(C.toString) && C.toString() === "[object FormData]"));
}, isURLSearchParams = kindOfTest("URLSearchParams"), trim$1 = (C) => C.trim ? C.trim() : C.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function forEach(C, H, { allOwnKeys: U = !1 } = {}) {
  if (C === null || typeof C > "u")
    return;
  let W, K;
  if (typeof C != "object" && (C = [C]), isArray$8(C))
    for (W = 0, K = C.length; W < K; W++)
      H.call(null, C[W], W, C);
  else {
    const G = U ? Object.getOwnPropertyNames(C) : Object.keys(C), X = G.length;
    let Z;
    for (W = 0; W < X; W++)
      Z = G[W], H.call(null, C[Z], Z, C);
  }
}
function findKey(C, H) {
  H = H.toLowerCase();
  const U = Object.keys(C);
  let W = U.length, K;
  for (; W-- > 0; )
    if (K = U[W], H === K.toLowerCase())
      return K;
  return null;
}
const _global = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, isContextDefined = (C) => !isUndefined$1(C) && C !== _global;
function merge$2() {
  const { caseless: C } = isContextDefined(this) && this || {}, H = {}, U = (W, K) => {
    const G = C && findKey(H, K) || K;
    isPlainObject(H[G]) && isPlainObject(W) ? H[G] = merge$2(H[G], W) : isPlainObject(W) ? H[G] = merge$2({}, W) : isArray$8(W) ? H[G] = W.slice() : H[G] = W;
  };
  for (let W = 0, K = arguments.length; W < K; W++)
    arguments[W] && forEach(arguments[W], U);
  return H;
}
const extend$1 = (C, H, U, { allOwnKeys: W } = {}) => (forEach(H, (K, G) => {
  U && isFunction$2(K) ? C[G] = bind$2(K, U) : C[G] = K;
}, { allOwnKeys: W }), C), stripBOM = (C) => (C.charCodeAt(0) === 65279 && (C = C.slice(1)), C), inherits = (C, H, U, W) => {
  C.prototype = Object.create(H.prototype, W), C.prototype.constructor = C, Object.defineProperty(C, "super", {
    value: H.prototype
  }), U && Object.assign(C.prototype, U);
}, toFlatObject = (C, H, U, W) => {
  let K, G, X;
  const Z = {};
  if (H = H || {}, C == null)
    return H;
  do {
    for (K = Object.getOwnPropertyNames(C), G = K.length; G-- > 0; )
      X = K[G], (!W || W(X, C, H)) && !Z[X] && (H[X] = C[X], Z[X] = !0);
    C = U !== !1 && getPrototypeOf(C);
  } while (C && (!U || U(C, H)) && C !== Object.prototype);
  return H;
}, endsWith = (C, H, U) => {
  C = String(C), (U === void 0 || U > C.length) && (U = C.length), U -= H.length;
  const W = C.indexOf(H, U);
  return W !== -1 && W === U;
}, toArray$1 = (C) => {
  if (!C)
    return null;
  if (isArray$8(C))
    return C;
  let H = C.length;
  if (!isNumber$2(H))
    return null;
  const U = new Array(H);
  for (; H-- > 0; )
    U[H] = C[H];
  return U;
}, isTypedArray$2 = /* @__PURE__ */ ((C) => (H) => C && H instanceof C)(typeof Uint8Array < "u" && getPrototypeOf(Uint8Array)), forEachEntry = (C, H) => {
  const W = (C && C[Symbol.iterator]).call(C);
  let K;
  for (; (K = W.next()) && !K.done; ) {
    const G = K.value;
    H.call(C, G[0], G[1]);
  }
}, matchAll = (C, H) => {
  let U;
  const W = [];
  for (; (U = C.exec(H)) !== null; )
    W.push(U);
  return W;
}, isHTMLForm = kindOfTest("HTMLFormElement"), toCamelCase = (C) => C.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(U, W, K) {
    return W.toUpperCase() + K;
  }
), hasOwnProperty$5 = (({ hasOwnProperty: C }) => (H, U) => C.call(H, U))(Object.prototype), isRegExp$2 = kindOfTest("RegExp"), reduceDescriptors = (C, H) => {
  const U = Object.getOwnPropertyDescriptors(C), W = {};
  forEach(U, (K, G) => {
    let X;
    (X = H(K, G, C)) !== !1 && (W[G] = X || K);
  }), Object.defineProperties(C, W);
}, freezeMethods = (C) => {
  reduceDescriptors(C, (H, U) => {
    if (isFunction$2(C) && ["arguments", "caller", "callee"].indexOf(U) !== -1)
      return !1;
    const W = C[U];
    if (isFunction$2(W)) {
      if (H.enumerable = !1, "writable" in H) {
        H.writable = !1;
        return;
      }
      H.set || (H.set = () => {
        throw Error("Can not rewrite read-only method '" + U + "'");
      });
    }
  });
}, toObjectSet = (C, H) => {
  const U = {}, W = (K) => {
    K.forEach((G) => {
      U[G] = !0;
    });
  };
  return isArray$8(C) ? W(C) : W(String(C).split(H)), U;
}, noop$2 = () => {
}, toFiniteNumber = (C, H) => (C = +C, Number.isFinite(C) ? C : H), ALPHA = "abcdefghijklmnopqrstuvwxyz", DIGIT = "0123456789", ALPHABET = {
  DIGIT,
  ALPHA,
  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
}, generateString = (C = 16, H = ALPHABET.ALPHA_DIGIT) => {
  let U = "";
  const { length: W } = H;
  for (; C--; )
    U += H[Math.random() * W | 0];
  return U;
};
function isSpecCompliantForm(C) {
  return !!(C && isFunction$2(C.append) && C[Symbol.toStringTag] === "FormData" && C[Symbol.iterator]);
}
const toJSONObject = (C) => {
  const H = new Array(10), U = (W, K) => {
    if (isObject$3(W)) {
      if (H.indexOf(W) >= 0)
        return;
      if (!("toJSON" in W)) {
        H[K] = W;
        const G = isArray$8(W) ? [] : {};
        return forEach(W, (X, Z) => {
          const Q = U(X, K + 1);
          !isUndefined$1(Q) && (G[Z] = Q);
        }), H[K] = void 0, G;
      }
    }
    return W;
  };
  return U(C, 0);
}, isAsyncFn = kindOfTest("AsyncFunction"), isThenable$1 = (C) => C && (isObject$3(C) || isFunction$2(C)) && isFunction$2(C.then) && isFunction$2(C.catch), utils$4 = {
  isArray: isArray$8,
  isArrayBuffer,
  isBuffer: isBuffer$3,
  isFormData,
  isArrayBufferView,
  isString: isString$3,
  isNumber: isNumber$2,
  isBoolean: isBoolean$1,
  isObject: isObject$3,
  isPlainObject,
  isUndefined: isUndefined$1,
  isDate: isDate$2,
  isFile,
  isBlob,
  isRegExp: isRegExp$2,
  isFunction: isFunction$2,
  isStream,
  isURLSearchParams,
  isTypedArray: isTypedArray$2,
  isFileList,
  forEach,
  merge: merge$2,
  extend: extend$1,
  trim: trim$1,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray: toArray$1,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty: hasOwnProperty$5,
  hasOwnProp: hasOwnProperty$5,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop: noop$2,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  ALPHABET,
  generateString,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable: isThenable$1
};
function AxiosError(C, H, U, W, K) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = C, this.name = "AxiosError", H && (this.code = H), U && (this.config = U), W && (this.request = W), K && (this.response = K);
}
utils$4.inherits(AxiosError, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: utils$4.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const prototype$1 = AxiosError.prototype, descriptors = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((C) => {
  descriptors[C] = { value: C };
});
Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype$1, "isAxiosError", { value: !0 });
AxiosError.from = (C, H, U, W, K, G) => {
  const X = Object.create(prototype$1);
  return utils$4.toFlatObject(C, X, function(Q) {
    return Q !== Error.prototype;
  }, (Z) => Z !== "isAxiosError"), AxiosError.call(X, C.message, H, U, W, K), X.cause = C, X.name = C.name, G && Object.assign(X, G), X;
};
const httpAdapter = null;
function isVisitable(C) {
  return utils$4.isPlainObject(C) || utils$4.isArray(C);
}
function removeBrackets(C) {
  return utils$4.endsWith(C, "[]") ? C.slice(0, -2) : C;
}
function renderKey(C, H, U) {
  return C ? C.concat(H).map(function(K, G) {
    return K = removeBrackets(K), !U && G ? "[" + K + "]" : K;
  }).join(U ? "." : "") : H;
}
function isFlatArray(C) {
  return utils$4.isArray(C) && !C.some(isVisitable);
}
const predicates = utils$4.toFlatObject(utils$4, {}, null, function(H) {
  return /^is[A-Z]/.test(H);
});
function toFormData(C, H, U) {
  if (!utils$4.isObject(C))
    throw new TypeError("target must be an object");
  H = H || new FormData(), U = utils$4.toFlatObject(U, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(ie, se) {
    return !utils$4.isUndefined(se[ie]);
  });
  const W = U.metaTokens, K = U.visitor || te, G = U.dots, X = U.indexes, Q = (U.Blob || typeof Blob < "u" && Blob) && utils$4.isSpecCompliantForm(H);
  if (!utils$4.isFunction(K))
    throw new TypeError("visitor must be a function");
  function ee(oe) {
    if (oe === null)
      return "";
    if (utils$4.isDate(oe))
      return oe.toISOString();
    if (!Q && utils$4.isBlob(oe))
      throw new AxiosError("Blob is not supported. Use a Buffer instead.");
    return utils$4.isArrayBuffer(oe) || utils$4.isTypedArray(oe) ? Q && typeof Blob == "function" ? new Blob([oe]) : Buffer.from(oe) : oe;
  }
  function te(oe, ie, se) {
    let ue = oe;
    if (oe && !se && typeof oe == "object") {
      if (utils$4.endsWith(ie, "{}"))
        ie = W ? ie : ie.slice(0, -2), oe = JSON.stringify(oe);
      else if (utils$4.isArray(oe) && isFlatArray(oe) || (utils$4.isFileList(oe) || utils$4.endsWith(ie, "[]")) && (ue = utils$4.toArray(oe)))
        return ie = removeBrackets(ie), ue.forEach(function(ce, fe) {
          !(utils$4.isUndefined(ce) || ce === null) && H.append(
            // eslint-disable-next-line no-nested-ternary
            X === !0 ? renderKey([ie], fe, G) : X === null ? ie : ie + "[]",
            ee(ce)
          );
        }), !1;
    }
    return isVisitable(oe) ? !0 : (H.append(renderKey(se, ie, G), ee(oe)), !1);
  }
  const re = [], ne = Object.assign(predicates, {
    defaultVisitor: te,
    convertValue: ee,
    isVisitable
  });
  function ae(oe, ie) {
    if (!utils$4.isUndefined(oe)) {
      if (re.indexOf(oe) !== -1)
        throw Error("Circular reference detected in " + ie.join("."));
      re.push(oe), utils$4.forEach(oe, function(ue, le) {
        (!(utils$4.isUndefined(ue) || ue === null) && K.call(
          H,
          ue,
          utils$4.isString(le) ? le.trim() : le,
          ie,
          ne
        )) === !0 && ae(ue, ie ? ie.concat(le) : [le]);
      }), re.pop();
    }
  }
  if (!utils$4.isObject(C))
    throw new TypeError("data must be an object");
  return ae(C), H;
}
function encode$2(C) {
  const H = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(C).replace(/[!'()~]|%20|%00/g, function(W) {
    return H[W];
  });
}
function AxiosURLSearchParams(C, H) {
  this._pairs = [], C && toFormData(C, this, H);
}
const prototype = AxiosURLSearchParams.prototype;
prototype.append = function(H, U) {
  this._pairs.push([H, U]);
};
prototype.toString = function(H) {
  const U = H ? function(W) {
    return H.call(this, W, encode$2);
  } : encode$2;
  return this._pairs.map(function(K) {
    return U(K[0]) + "=" + U(K[1]);
  }, "").join("&");
};
function encode$1(C) {
  return encodeURIComponent(C).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function buildURL(C, H, U) {
  if (!H)
    return C;
  const W = U && U.encode || encode$1, K = U && U.serialize;
  let G;
  if (K ? G = K(H, U) : G = utils$4.isURLSearchParams(H) ? H.toString() : new AxiosURLSearchParams(H, U).toString(W), G) {
    const X = C.indexOf("#");
    X !== -1 && (C = C.slice(0, X)), C += (C.indexOf("?") === -1 ? "?" : "&") + G;
  }
  return C;
}
class InterceptorManager {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(H, U, W) {
    return this.handlers.push({
      fulfilled: H,
      rejected: U,
      synchronous: W ? W.synchronous : !1,
      runWhen: W ? W.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(H) {
    this.handlers[H] && (this.handlers[H] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(H) {
    utils$4.forEach(this.handlers, function(W) {
      W !== null && H(W);
    });
  }
}
const InterceptorManager$1 = InterceptorManager, transitionalDefaults = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, URLSearchParams$1 = typeof URLSearchParams < "u" ? URLSearchParams : AxiosURLSearchParams, FormData$1 = typeof FormData < "u" ? FormData : null, Blob$1 = typeof Blob < "u" ? Blob : null, platform$1 = {
  isBrowser: !0,
  classes: {
    URLSearchParams: URLSearchParams$1,
    FormData: FormData$1,
    Blob: Blob$1
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, hasBrowserEnv = typeof window < "u" && typeof document < "u", hasStandardBrowserEnv = ((C) => hasBrowserEnv && ["ReactNative", "NativeScript", "NS"].indexOf(C) < 0)(typeof navigator < "u" && navigator.product), hasStandardBrowserWebWorkerEnv = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", utils$3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv,
  hasStandardBrowserEnv,
  hasStandardBrowserWebWorkerEnv
}, Symbol.toStringTag, { value: "Module" })), platform = {
  ...utils$3,
  ...platform$1
};
function toURLEncodedForm(C, H) {
  return toFormData(C, new platform.classes.URLSearchParams(), Object.assign({
    visitor: function(U, W, K, G) {
      return platform.isNode && utils$4.isBuffer(U) ? (this.append(W, U.toString("base64")), !1) : G.defaultVisitor.apply(this, arguments);
    }
  }, H));
}
function parsePropPath(C) {
  return utils$4.matchAll(/\w+|\[(\w*)]/g, C).map((H) => H[0] === "[]" ? "" : H[1] || H[0]);
}
function arrayToObject$1(C) {
  const H = {}, U = Object.keys(C);
  let W;
  const K = U.length;
  let G;
  for (W = 0; W < K; W++)
    G = U[W], H[G] = C[G];
  return H;
}
function formDataToJSON(C) {
  function H(U, W, K, G) {
    let X = U[G++];
    const Z = Number.isFinite(+X), Q = G >= U.length;
    return X = !X && utils$4.isArray(K) ? K.length : X, Q ? (utils$4.hasOwnProp(K, X) ? K[X] = [K[X], W] : K[X] = W, !Z) : ((!K[X] || !utils$4.isObject(K[X])) && (K[X] = []), H(U, W, K[X], G) && utils$4.isArray(K[X]) && (K[X] = arrayToObject$1(K[X])), !Z);
  }
  if (utils$4.isFormData(C) && utils$4.isFunction(C.entries)) {
    const U = {};
    return utils$4.forEachEntry(C, (W, K) => {
      H(parsePropPath(W), K, U, 0);
    }), U;
  }
  return null;
}
function stringifySafely(C, H, U) {
  if (utils$4.isString(C))
    try {
      return (H || JSON.parse)(C), utils$4.trim(C);
    } catch (W) {
      if (W.name !== "SyntaxError")
        throw W;
    }
  return (U || JSON.stringify)(C);
}
const defaults$3 = {
  transitional: transitionalDefaults,
  adapter: ["xhr", "http"],
  transformRequest: [function(H, U) {
    const W = U.getContentType() || "", K = W.indexOf("application/json") > -1, G = utils$4.isObject(H);
    if (G && utils$4.isHTMLForm(H) && (H = new FormData(H)), utils$4.isFormData(H))
      return K && K ? JSON.stringify(formDataToJSON(H)) : H;
    if (utils$4.isArrayBuffer(H) || utils$4.isBuffer(H) || utils$4.isStream(H) || utils$4.isFile(H) || utils$4.isBlob(H))
      return H;
    if (utils$4.isArrayBufferView(H))
      return H.buffer;
    if (utils$4.isURLSearchParams(H))
      return U.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), H.toString();
    let Z;
    if (G) {
      if (W.indexOf("application/x-www-form-urlencoded") > -1)
        return toURLEncodedForm(H, this.formSerializer).toString();
      if ((Z = utils$4.isFileList(H)) || W.indexOf("multipart/form-data") > -1) {
        const Q = this.env && this.env.FormData;
        return toFormData(
          Z ? { "files[]": H } : H,
          Q && new Q(),
          this.formSerializer
        );
      }
    }
    return G || K ? (U.setContentType("application/json", !1), stringifySafely(H)) : H;
  }],
  transformResponse: [function(H) {
    const U = this.transitional || defaults$3.transitional, W = U && U.forcedJSONParsing, K = this.responseType === "json";
    if (H && utils$4.isString(H) && (W && !this.responseType || K)) {
      const X = !(U && U.silentJSONParsing) && K;
      try {
        return JSON.parse(H);
      } catch (Z) {
        if (X)
          throw Z.name === "SyntaxError" ? AxiosError.from(Z, AxiosError.ERR_BAD_RESPONSE, this, null, this.response) : Z;
      }
    }
    return H;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: platform.classes.FormData,
    Blob: platform.classes.Blob
  },
  validateStatus: function(H) {
    return H >= 200 && H < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
utils$4.forEach(["delete", "get", "head", "post", "put", "patch"], (C) => {
  defaults$3.headers[C] = {};
});
const defaults$4 = defaults$3, ignoreDuplicateOf = utils$4.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), parseHeaders = (C) => {
  const H = {};
  let U, W, K;
  return C && C.split(`
`).forEach(function(X) {
    K = X.indexOf(":"), U = X.substring(0, K).trim().toLowerCase(), W = X.substring(K + 1).trim(), !(!U || H[U] && ignoreDuplicateOf[U]) && (U === "set-cookie" ? H[U] ? H[U].push(W) : H[U] = [W] : H[U] = H[U] ? H[U] + ", " + W : W);
  }), H;
}, $internals = Symbol("internals");
function normalizeHeader(C) {
  return C && String(C).trim().toLowerCase();
}
function normalizeValue(C) {
  return C === !1 || C == null ? C : utils$4.isArray(C) ? C.map(normalizeValue) : String(C);
}
function parseTokens(C) {
  const H = /* @__PURE__ */ Object.create(null), U = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let W;
  for (; W = U.exec(C); )
    H[W[1]] = W[2];
  return H;
}
const isValidHeaderName = (C) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(C.trim());
function matchHeaderValue(C, H, U, W, K) {
  if (utils$4.isFunction(W))
    return W.call(this, H, U);
  if (K && (H = U), !!utils$4.isString(H)) {
    if (utils$4.isString(W))
      return H.indexOf(W) !== -1;
    if (utils$4.isRegExp(W))
      return W.test(H);
  }
}
function formatHeader(C) {
  return C.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (H, U, W) => U.toUpperCase() + W);
}
function buildAccessors(C, H) {
  const U = utils$4.toCamelCase(" " + H);
  ["get", "set", "has"].forEach((W) => {
    Object.defineProperty(C, W + U, {
      value: function(K, G, X) {
        return this[W].call(this, H, K, G, X);
      },
      configurable: !0
    });
  });
}
class AxiosHeaders {
  constructor(H) {
    H && this.set(H);
  }
  set(H, U, W) {
    const K = this;
    function G(Z, Q, ee) {
      const te = normalizeHeader(Q);
      if (!te)
        throw new Error("header name must be a non-empty string");
      const re = utils$4.findKey(K, te);
      (!re || K[re] === void 0 || ee === !0 || ee === void 0 && K[re] !== !1) && (K[re || Q] = normalizeValue(Z));
    }
    const X = (Z, Q) => utils$4.forEach(Z, (ee, te) => G(ee, te, Q));
    return utils$4.isPlainObject(H) || H instanceof this.constructor ? X(H, U) : utils$4.isString(H) && (H = H.trim()) && !isValidHeaderName(H) ? X(parseHeaders(H), U) : H != null && G(U, H, W), this;
  }
  get(H, U) {
    if (H = normalizeHeader(H), H) {
      const W = utils$4.findKey(this, H);
      if (W) {
        const K = this[W];
        if (!U)
          return K;
        if (U === !0)
          return parseTokens(K);
        if (utils$4.isFunction(U))
          return U.call(this, K, W);
        if (utils$4.isRegExp(U))
          return U.exec(K);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(H, U) {
    if (H = normalizeHeader(H), H) {
      const W = utils$4.findKey(this, H);
      return !!(W && this[W] !== void 0 && (!U || matchHeaderValue(this, this[W], W, U)));
    }
    return !1;
  }
  delete(H, U) {
    const W = this;
    let K = !1;
    function G(X) {
      if (X = normalizeHeader(X), X) {
        const Z = utils$4.findKey(W, X);
        Z && (!U || matchHeaderValue(W, W[Z], Z, U)) && (delete W[Z], K = !0);
      }
    }
    return utils$4.isArray(H) ? H.forEach(G) : G(H), K;
  }
  clear(H) {
    const U = Object.keys(this);
    let W = U.length, K = !1;
    for (; W--; ) {
      const G = U[W];
      (!H || matchHeaderValue(this, this[G], G, H, !0)) && (delete this[G], K = !0);
    }
    return K;
  }
  normalize(H) {
    const U = this, W = {};
    return utils$4.forEach(this, (K, G) => {
      const X = utils$4.findKey(W, G);
      if (X) {
        U[X] = normalizeValue(K), delete U[G];
        return;
      }
      const Z = H ? formatHeader(G) : String(G).trim();
      Z !== G && delete U[G], U[Z] = normalizeValue(K), W[Z] = !0;
    }), this;
  }
  concat(...H) {
    return this.constructor.concat(this, ...H);
  }
  toJSON(H) {
    const U = /* @__PURE__ */ Object.create(null);
    return utils$4.forEach(this, (W, K) => {
      W != null && W !== !1 && (U[K] = H && utils$4.isArray(W) ? W.join(", ") : W);
    }), U;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([H, U]) => H + ": " + U).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(H) {
    return H instanceof this ? H : new this(H);
  }
  static concat(H, ...U) {
    const W = new this(H);
    return U.forEach((K) => W.set(K)), W;
  }
  static accessor(H) {
    const W = (this[$internals] = this[$internals] = {
      accessors: {}
    }).accessors, K = this.prototype;
    function G(X) {
      const Z = normalizeHeader(X);
      W[Z] || (buildAccessors(K, X), W[Z] = !0);
    }
    return utils$4.isArray(H) ? H.forEach(G) : G(H), this;
  }
}
AxiosHeaders.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
utils$4.reduceDescriptors(AxiosHeaders.prototype, ({ value: C }, H) => {
  let U = H[0].toUpperCase() + H.slice(1);
  return {
    get: () => C,
    set(W) {
      this[U] = W;
    }
  };
});
utils$4.freezeMethods(AxiosHeaders);
const AxiosHeaders$1 = AxiosHeaders;
function transformData(C, H) {
  const U = this || defaults$4, W = H || U, K = AxiosHeaders$1.from(W.headers);
  let G = W.data;
  return utils$4.forEach(C, function(Z) {
    G = Z.call(U, G, K.normalize(), H ? H.status : void 0);
  }), K.normalize(), G;
}
function isCancel(C) {
  return !!(C && C.__CANCEL__);
}
function CanceledError(C, H, U) {
  AxiosError.call(this, C ?? "canceled", AxiosError.ERR_CANCELED, H, U), this.name = "CanceledError";
}
utils$4.inherits(CanceledError, AxiosError, {
  __CANCEL__: !0
});
function settle(C, H, U) {
  const W = U.config.validateStatus;
  !U.status || !W || W(U.status) ? C(U) : H(new AxiosError(
    "Request failed with status code " + U.status,
    [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(U.status / 100) - 4],
    U.config,
    U.request,
    U
  ));
}
const cookies = platform.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(C, H, U, W, K, G) {
      const X = [C + "=" + encodeURIComponent(H)];
      utils$4.isNumber(U) && X.push("expires=" + new Date(U).toGMTString()), utils$4.isString(W) && X.push("path=" + W), utils$4.isString(K) && X.push("domain=" + K), G === !0 && X.push("secure"), document.cookie = X.join("; ");
    },
    read(C) {
      const H = document.cookie.match(new RegExp("(^|;\\s*)(" + C + ")=([^;]*)"));
      return H ? decodeURIComponent(H[3]) : null;
    },
    remove(C) {
      this.write(C, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function isAbsoluteURL(C) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(C);
}
function combineURLs(C, H) {
  return H ? C.replace(/\/+$/, "") + "/" + H.replace(/^\/+/, "") : C;
}
function buildFullPath(C, H) {
  return C && !isAbsoluteURL(H) ? combineURLs(C, H) : H;
}
const isURLSameOrigin = platform.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const H = /(msie|trident)/i.test(navigator.userAgent), U = document.createElement("a");
    let W;
    function K(G) {
      let X = G;
      return H && (U.setAttribute("href", X), X = U.href), U.setAttribute("href", X), {
        href: U.href,
        protocol: U.protocol ? U.protocol.replace(/:$/, "") : "",
        host: U.host,
        search: U.search ? U.search.replace(/^\?/, "") : "",
        hash: U.hash ? U.hash.replace(/^#/, "") : "",
        hostname: U.hostname,
        port: U.port,
        pathname: U.pathname.charAt(0) === "/" ? U.pathname : "/" + U.pathname
      };
    }
    return W = K(window.location.href), function(X) {
      const Z = utils$4.isString(X) ? K(X) : X;
      return Z.protocol === W.protocol && Z.host === W.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
);
function parseProtocol(C) {
  const H = /^([-+\w]{1,25})(:?\/\/|:)/.exec(C);
  return H && H[1] || "";
}
function speedometer(C, H) {
  C = C || 10;
  const U = new Array(C), W = new Array(C);
  let K = 0, G = 0, X;
  return H = H !== void 0 ? H : 1e3, function(Q) {
    const ee = Date.now(), te = W[G];
    X || (X = ee), U[K] = Q, W[K] = ee;
    let re = G, ne = 0;
    for (; re !== K; )
      ne += U[re++], re = re % C;
    if (K = (K + 1) % C, K === G && (G = (G + 1) % C), ee - X < H)
      return;
    const ae = te && ee - te;
    return ae ? Math.round(ne * 1e3 / ae) : void 0;
  };
}
function progressEventReducer(C, H) {
  let U = 0;
  const W = speedometer(50, 250);
  return (K) => {
    const G = K.loaded, X = K.lengthComputable ? K.total : void 0, Z = G - U, Q = W(Z), ee = G <= X;
    U = G;
    const te = {
      loaded: G,
      total: X,
      progress: X ? G / X : void 0,
      bytes: Z,
      rate: Q || void 0,
      estimated: Q && X && ee ? (X - G) / Q : void 0,
      event: K
    };
    te[H ? "download" : "upload"] = !0, C(te);
  };
}
const isXHRAdapterSupported = typeof XMLHttpRequest < "u", xhrAdapter = isXHRAdapterSupported && function(C) {
  return new Promise(function(U, W) {
    let K = C.data;
    const G = AxiosHeaders$1.from(C.headers).normalize();
    let { responseType: X, withXSRFToken: Z } = C, Q;
    function ee() {
      C.cancelToken && C.cancelToken.unsubscribe(Q), C.signal && C.signal.removeEventListener("abort", Q);
    }
    let te;
    if (utils$4.isFormData(K)) {
      if (platform.hasStandardBrowserEnv || platform.hasStandardBrowserWebWorkerEnv)
        G.setContentType(!1);
      else if ((te = G.getContentType()) !== !1) {
        const [ie, ...se] = te ? te.split(";").map((ue) => ue.trim()).filter(Boolean) : [];
        G.setContentType([ie || "multipart/form-data", ...se].join("; "));
      }
    }
    let re = new XMLHttpRequest();
    if (C.auth) {
      const ie = C.auth.username || "", se = C.auth.password ? unescape(encodeURIComponent(C.auth.password)) : "";
      G.set("Authorization", "Basic " + btoa(ie + ":" + se));
    }
    const ne = buildFullPath(C.baseURL, C.url);
    re.open(C.method.toUpperCase(), buildURL(ne, C.params, C.paramsSerializer), !0), re.timeout = C.timeout;
    function ae() {
      if (!re)
        return;
      const ie = AxiosHeaders$1.from(
        "getAllResponseHeaders" in re && re.getAllResponseHeaders()
      ), ue = {
        data: !X || X === "text" || X === "json" ? re.responseText : re.response,
        status: re.status,
        statusText: re.statusText,
        headers: ie,
        config: C,
        request: re
      };
      settle(function(ce) {
        U(ce), ee();
      }, function(ce) {
        W(ce), ee();
      }, ue), re = null;
    }
    if ("onloadend" in re ? re.onloadend = ae : re.onreadystatechange = function() {
      !re || re.readyState !== 4 || re.status === 0 && !(re.responseURL && re.responseURL.indexOf("file:") === 0) || setTimeout(ae);
    }, re.onabort = function() {
      re && (W(new AxiosError("Request aborted", AxiosError.ECONNABORTED, C, re)), re = null);
    }, re.onerror = function() {
      W(new AxiosError("Network Error", AxiosError.ERR_NETWORK, C, re)), re = null;
    }, re.ontimeout = function() {
      let se = C.timeout ? "timeout of " + C.timeout + "ms exceeded" : "timeout exceeded";
      const ue = C.transitional || transitionalDefaults;
      C.timeoutErrorMessage && (se = C.timeoutErrorMessage), W(new AxiosError(
        se,
        ue.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED,
        C,
        re
      )), re = null;
    }, platform.hasStandardBrowserEnv && (Z && utils$4.isFunction(Z) && (Z = Z(C)), Z || Z !== !1 && isURLSameOrigin(ne))) {
      const ie = C.xsrfHeaderName && C.xsrfCookieName && cookies.read(C.xsrfCookieName);
      ie && G.set(C.xsrfHeaderName, ie);
    }
    K === void 0 && G.setContentType(null), "setRequestHeader" in re && utils$4.forEach(G.toJSON(), function(se, ue) {
      re.setRequestHeader(ue, se);
    }), utils$4.isUndefined(C.withCredentials) || (re.withCredentials = !!C.withCredentials), X && X !== "json" && (re.responseType = C.responseType), typeof C.onDownloadProgress == "function" && re.addEventListener("progress", progressEventReducer(C.onDownloadProgress, !0)), typeof C.onUploadProgress == "function" && re.upload && re.upload.addEventListener("progress", progressEventReducer(C.onUploadProgress)), (C.cancelToken || C.signal) && (Q = (ie) => {
      re && (W(!ie || ie.type ? new CanceledError(null, C, re) : ie), re.abort(), re = null);
    }, C.cancelToken && C.cancelToken.subscribe(Q), C.signal && (C.signal.aborted ? Q() : C.signal.addEventListener("abort", Q)));
    const oe = parseProtocol(ne);
    if (oe && platform.protocols.indexOf(oe) === -1) {
      W(new AxiosError("Unsupported protocol " + oe + ":", AxiosError.ERR_BAD_REQUEST, C));
      return;
    }
    re.send(K || null);
  });
}, knownAdapters = {
  http: httpAdapter,
  xhr: xhrAdapter
};
utils$4.forEach(knownAdapters, (C, H) => {
  if (C) {
    try {
      Object.defineProperty(C, "name", { value: H });
    } catch {
    }
    Object.defineProperty(C, "adapterName", { value: H });
  }
});
const renderReason = (C) => `- ${C}`, isResolvedHandle = (C) => utils$4.isFunction(C) || C === null || C === !1, adapters = {
  getAdapter: (C) => {
    C = utils$4.isArray(C) ? C : [C];
    const { length: H } = C;
    let U, W;
    const K = {};
    for (let G = 0; G < H; G++) {
      U = C[G];
      let X;
      if (W = U, !isResolvedHandle(U) && (W = knownAdapters[(X = String(U)).toLowerCase()], W === void 0))
        throw new AxiosError(`Unknown adapter '${X}'`);
      if (W)
        break;
      K[X || "#" + G] = W;
    }
    if (!W) {
      const G = Object.entries(K).map(
        ([Z, Q]) => `adapter ${Z} ` + (Q === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let X = H ? G.length > 1 ? `since :
` + G.map(renderReason).join(`
`) : " " + renderReason(G[0]) : "as no adapter specified";
      throw new AxiosError(
        "There is no suitable adapter to dispatch the request " + X,
        "ERR_NOT_SUPPORT"
      );
    }
    return W;
  },
  adapters: knownAdapters
};
function throwIfCancellationRequested(C) {
  if (C.cancelToken && C.cancelToken.throwIfRequested(), C.signal && C.signal.aborted)
    throw new CanceledError(null, C);
}
function dispatchRequest(C) {
  return throwIfCancellationRequested(C), C.headers = AxiosHeaders$1.from(C.headers), C.data = transformData.call(
    C,
    C.transformRequest
  ), ["post", "put", "patch"].indexOf(C.method) !== -1 && C.headers.setContentType("application/x-www-form-urlencoded", !1), adapters.getAdapter(C.adapter || defaults$4.adapter)(C).then(function(W) {
    return throwIfCancellationRequested(C), W.data = transformData.call(
      C,
      C.transformResponse,
      W
    ), W.headers = AxiosHeaders$1.from(W.headers), W;
  }, function(W) {
    return isCancel(W) || (throwIfCancellationRequested(C), W && W.response && (W.response.data = transformData.call(
      C,
      C.transformResponse,
      W.response
    ), W.response.headers = AxiosHeaders$1.from(W.response.headers))), Promise.reject(W);
  });
}
const headersToObject = (C) => C instanceof AxiosHeaders$1 ? C.toJSON() : C;
function mergeConfig$1(C, H) {
  H = H || {};
  const U = {};
  function W(ee, te, re) {
    return utils$4.isPlainObject(ee) && utils$4.isPlainObject(te) ? utils$4.merge.call({ caseless: re }, ee, te) : utils$4.isPlainObject(te) ? utils$4.merge({}, te) : utils$4.isArray(te) ? te.slice() : te;
  }
  function K(ee, te, re) {
    if (utils$4.isUndefined(te)) {
      if (!utils$4.isUndefined(ee))
        return W(void 0, ee, re);
    } else
      return W(ee, te, re);
  }
  function G(ee, te) {
    if (!utils$4.isUndefined(te))
      return W(void 0, te);
  }
  function X(ee, te) {
    if (utils$4.isUndefined(te)) {
      if (!utils$4.isUndefined(ee))
        return W(void 0, ee);
    } else
      return W(void 0, te);
  }
  function Z(ee, te, re) {
    if (re in H)
      return W(ee, te);
    if (re in C)
      return W(void 0, ee);
  }
  const Q = {
    url: G,
    method: G,
    data: G,
    baseURL: X,
    transformRequest: X,
    transformResponse: X,
    paramsSerializer: X,
    timeout: X,
    timeoutMessage: X,
    withCredentials: X,
    withXSRFToken: X,
    adapter: X,
    responseType: X,
    xsrfCookieName: X,
    xsrfHeaderName: X,
    onUploadProgress: X,
    onDownloadProgress: X,
    decompress: X,
    maxContentLength: X,
    maxBodyLength: X,
    beforeRedirect: X,
    transport: X,
    httpAgent: X,
    httpsAgent: X,
    cancelToken: X,
    socketPath: X,
    responseEncoding: X,
    validateStatus: Z,
    headers: (ee, te) => K(headersToObject(ee), headersToObject(te), !0)
  };
  return utils$4.forEach(Object.keys(Object.assign({}, C, H)), function(te) {
    const re = Q[te] || K, ne = re(C[te], H[te], te);
    utils$4.isUndefined(ne) && re !== Z || (U[te] = ne);
  }), U;
}
const VERSION = "1.6.2", validators$1 = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((C, H) => {
  validators$1[C] = function(W) {
    return typeof W === C || "a" + (H < 1 ? "n " : " ") + C;
  };
});
const deprecatedWarnings = {};
validators$1.transitional = function(H, U, W) {
  function K(G, X) {
    return "[Axios v" + VERSION + "] Transitional option '" + G + "'" + X + (W ? ". " + W : "");
  }
  return (G, X, Z) => {
    if (H === !1)
      throw new AxiosError(
        K(X, " has been removed" + (U ? " in " + U : "")),
        AxiosError.ERR_DEPRECATED
      );
    return U && !deprecatedWarnings[X] && (deprecatedWarnings[X] = !0, console.warn(
      K(
        X,
        " has been deprecated since v" + U + " and will be removed in the near future"
      )
    )), H ? H(G, X, Z) : !0;
  };
};
function assertOptions(C, H, U) {
  if (typeof C != "object")
    throw new AxiosError("options must be an object", AxiosError.ERR_BAD_OPTION_VALUE);
  const W = Object.keys(C);
  let K = W.length;
  for (; K-- > 0; ) {
    const G = W[K], X = H[G];
    if (X) {
      const Z = C[G], Q = Z === void 0 || X(Z, G, C);
      if (Q !== !0)
        throw new AxiosError("option " + G + " must be " + Q, AxiosError.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (U !== !0)
      throw new AxiosError("Unknown option " + G, AxiosError.ERR_BAD_OPTION);
  }
}
const validator = {
  assertOptions,
  validators: validators$1
}, validators = validator.validators;
class Axios {
  constructor(H) {
    this.defaults = H, this.interceptors = {
      request: new InterceptorManager$1(),
      response: new InterceptorManager$1()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(H, U) {
    typeof H == "string" ? (U = U || {}, U.url = H) : U = H || {}, U = mergeConfig$1(this.defaults, U);
    const { transitional: W, paramsSerializer: K, headers: G } = U;
    W !== void 0 && validator.assertOptions(W, {
      silentJSONParsing: validators.transitional(validators.boolean),
      forcedJSONParsing: validators.transitional(validators.boolean),
      clarifyTimeoutError: validators.transitional(validators.boolean)
    }, !1), K != null && (utils$4.isFunction(K) ? U.paramsSerializer = {
      serialize: K
    } : validator.assertOptions(K, {
      encode: validators.function,
      serialize: validators.function
    }, !0)), U.method = (U.method || this.defaults.method || "get").toLowerCase();
    let X = G && utils$4.merge(
      G.common,
      G[U.method]
    );
    G && utils$4.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (oe) => {
        delete G[oe];
      }
    ), U.headers = AxiosHeaders$1.concat(X, G);
    const Z = [];
    let Q = !0;
    this.interceptors.request.forEach(function(ie) {
      typeof ie.runWhen == "function" && ie.runWhen(U) === !1 || (Q = Q && ie.synchronous, Z.unshift(ie.fulfilled, ie.rejected));
    });
    const ee = [];
    this.interceptors.response.forEach(function(ie) {
      ee.push(ie.fulfilled, ie.rejected);
    });
    let te, re = 0, ne;
    if (!Q) {
      const oe = [dispatchRequest.bind(this), void 0];
      for (oe.unshift.apply(oe, Z), oe.push.apply(oe, ee), ne = oe.length, te = Promise.resolve(U); re < ne; )
        te = te.then(oe[re++], oe[re++]);
      return te;
    }
    ne = Z.length;
    let ae = U;
    for (re = 0; re < ne; ) {
      const oe = Z[re++], ie = Z[re++];
      try {
        ae = oe(ae);
      } catch (se) {
        ie.call(this, se);
        break;
      }
    }
    try {
      te = dispatchRequest.call(this, ae);
    } catch (oe) {
      return Promise.reject(oe);
    }
    for (re = 0, ne = ee.length; re < ne; )
      te = te.then(ee[re++], ee[re++]);
    return te;
  }
  getUri(H) {
    H = mergeConfig$1(this.defaults, H);
    const U = buildFullPath(H.baseURL, H.url);
    return buildURL(U, H.params, H.paramsSerializer);
  }
}
utils$4.forEach(["delete", "get", "head", "options"], function(H) {
  Axios.prototype[H] = function(U, W) {
    return this.request(mergeConfig$1(W || {}, {
      method: H,
      url: U,
      data: (W || {}).data
    }));
  };
});
utils$4.forEach(["post", "put", "patch"], function(H) {
  function U(W) {
    return function(G, X, Z) {
      return this.request(mergeConfig$1(Z || {}, {
        method: H,
        headers: W ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: G,
        data: X
      }));
    };
  }
  Axios.prototype[H] = U(), Axios.prototype[H + "Form"] = U(!0);
});
const Axios$1 = Axios;
class CancelToken {
  constructor(H) {
    if (typeof H != "function")
      throw new TypeError("executor must be a function.");
    let U;
    this.promise = new Promise(function(G) {
      U = G;
    });
    const W = this;
    this.promise.then((K) => {
      if (!W._listeners)
        return;
      let G = W._listeners.length;
      for (; G-- > 0; )
        W._listeners[G](K);
      W._listeners = null;
    }), this.promise.then = (K) => {
      let G;
      const X = new Promise((Z) => {
        W.subscribe(Z), G = Z;
      }).then(K);
      return X.cancel = function() {
        W.unsubscribe(G);
      }, X;
    }, H(function(G, X, Z) {
      W.reason || (W.reason = new CanceledError(G, X, Z), U(W.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(H) {
    if (this.reason) {
      H(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(H) : this._listeners = [H];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(H) {
    if (!this._listeners)
      return;
    const U = this._listeners.indexOf(H);
    U !== -1 && this._listeners.splice(U, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let H;
    return {
      token: new CancelToken(function(K) {
        H = K;
      }),
      cancel: H
    };
  }
}
const CancelToken$1 = CancelToken;
function spread(C) {
  return function(U) {
    return C.apply(null, U);
  };
}
function isAxiosError(C) {
  return utils$4.isObject(C) && C.isAxiosError === !0;
}
const HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(HttpStatusCode).forEach(([C, H]) => {
  HttpStatusCode[H] = C;
});
const HttpStatusCode$1 = HttpStatusCode;
function createInstance(C) {
  const H = new Axios$1(C), U = bind$2(Axios$1.prototype.request, H);
  return utils$4.extend(U, Axios$1.prototype, H, { allOwnKeys: !0 }), utils$4.extend(U, H, null, { allOwnKeys: !0 }), U.create = function(K) {
    return createInstance(mergeConfig$1(C, K));
  }, U;
}
const axios = createInstance(defaults$4);
axios.Axios = Axios$1;
axios.CanceledError = CanceledError;
axios.CancelToken = CancelToken$1;
axios.isCancel = isCancel;
axios.VERSION = VERSION;
axios.toFormData = toFormData;
axios.AxiosError = AxiosError;
axios.Cancel = axios.CanceledError;
axios.all = function(H) {
  return Promise.all(H);
};
axios.spread = spread;
axios.isAxiosError = isAxiosError;
axios.mergeConfig = mergeConfig$1;
axios.AxiosHeaders = AxiosHeaders$1;
axios.formToJSON = (C) => formDataToJSON(utils$4.isHTMLForm(C) ? new FormData(C) : C);
axios.getAdapter = adapters.getAdapter;
axios.HttpStatusCode = HttpStatusCode$1;
axios.default = axios;
const axios$1 = axios;
function _typeof(C) {
  "@babel/helpers - typeof";
  return _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(H) {
    return typeof H;
  } : function(H) {
    return H && typeof Symbol == "function" && H.constructor === Symbol && H !== Symbol.prototype ? "symbol" : typeof H;
  }, _typeof(C);
}
function toPrimitive(C, H) {
  if (_typeof(C) != "object" || !C)
    return C;
  var U = C[Symbol.toPrimitive];
  if (U !== void 0) {
    var W = U.call(C, H || "default");
    if (_typeof(W) != "object")
      return W;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (H === "string" ? String : Number)(C);
}
function toPropertyKey(C) {
  var H = toPrimitive(C, "string");
  return _typeof(H) == "symbol" ? H : String(H);
}
function _defineProperty$d(C, H, U) {
  return H = toPropertyKey(H), H in C ? Object.defineProperty(C, H, {
    value: U,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : C[H] = U, C;
}
function ownKeys(C, H) {
  var U = Object.keys(C);
  if (Object.getOwnPropertySymbols) {
    var W = Object.getOwnPropertySymbols(C);
    H && (W = W.filter(function(K) {
      return Object.getOwnPropertyDescriptor(C, K).enumerable;
    })), U.push.apply(U, W);
  }
  return U;
}
function _objectSpread2(C) {
  for (var H = 1; H < arguments.length; H++) {
    var U = arguments[H] != null ? arguments[H] : {};
    H % 2 ? ownKeys(Object(U), !0).forEach(function(W) {
      _defineProperty$d(C, W, U[W]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(C, Object.getOwnPropertyDescriptors(U)) : ownKeys(Object(U)).forEach(function(W) {
      Object.defineProperty(C, W, Object.getOwnPropertyDescriptor(U, W));
    });
  }
  return C;
}
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(C) {
    for (var H = 1; H < arguments.length; H++) {
      var U = arguments[H];
      for (var W in U)
        Object.prototype.hasOwnProperty.call(U, W) && (C[W] = U[W]);
    }
    return C;
  }, _extends.apply(this, arguments);
}
const isArray$7 = Array.isArray, isString$2 = (C) => typeof C == "string", isObject$2 = (C) => C !== null && typeof C == "object";
function renderHelper(C) {
  let H = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, U = arguments.length > 2 ? arguments[2] : void 0;
  return typeof C == "function" ? C(H) : C ?? U;
}
function wrapPromiseFn(C) {
  let H;
  const U = new Promise((K) => {
    H = C(() => {
      K(!0);
    });
  }), W = () => {
    H == null || H();
  };
  return W.then = (K, G) => U.then(K, G), W.promise = U, W;
}
function classNames() {
  const C = [];
  for (let H = 0; H < arguments.length; H++) {
    const U = H < 0 || arguments.length <= H ? void 0 : arguments[H];
    if (U) {
      if (isString$2(U))
        C.push(U);
      else if (isArray$7(U))
        for (let W = 0; W < U.length; W++) {
          const K = classNames(U[W]);
          K && C.push(K);
        }
      else if (isObject$2(U))
        for (const W in U)
          U[W] && C.push(W);
    }
  }
  return C.join(" ");
}
const isValid$3 = (C) => C != null && C !== "", isValid$4 = isValid$3, initDefaultProps = (C, H) => {
  const U = _extends({}, C);
  return Object.keys(H).forEach((W) => {
    const K = U[W];
    if (K)
      K.type || K.default ? K.default = H[W] : K.def ? K.def(H[W]) : U[W] = {
        type: K,
        default: H[W]
      };
    else
      throw new Error(`not have ${W} prop`);
  }), U;
}, initDefaultProps$1 = initDefaultProps, skipFlattenKey = Symbol("skipFlatten"), flattenChildren = function() {
  let C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], H = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  const U = Array.isArray(C) ? C : [C], W = [];
  return U.forEach((K) => {
    Array.isArray(K) ? W.push(...flattenChildren(K, H)) : K && K.type === Fragment ? K.key === skipFlattenKey ? W.push(K) : W.push(...flattenChildren(K.children, H)) : K && isVNode(K) ? H && !isEmptyElement(K) ? W.push(K) : H || W.push(K) : isValid$4(K) && W.push(K);
  }), W;
}, findDOMNode = (C) => {
  var H;
  let U = ((H = C == null ? void 0 : C.vnode) === null || H === void 0 ? void 0 : H.el) || C && (C.$el || C);
  for (; U && !U.tagName; )
    U = U.nextSibling;
  return U;
};
function isEmptyElement(C) {
  return C && (C.type === Comment || C.type === Fragment && C.children.length === 0 || C.type === Text && C.children.trim() === "");
}
function filterEmpty() {
  let C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  const H = [];
  return C.forEach((U) => {
    Array.isArray(U) ? H.push(...U) : (U == null ? void 0 : U.type) === Fragment ? H.push(...filterEmpty(U.children)) : H.push(U);
  }), H.filter((U) => !isEmptyElement(U));
}
let raf = (C) => setTimeout(C, 16), caf = (C) => clearTimeout(C);
typeof window < "u" && "requestAnimationFrame" in window && (raf = (C) => window.requestAnimationFrame(C), caf = (C) => window.cancelAnimationFrame(C));
let rafUUID = 0;
const rafIds = /* @__PURE__ */ new Map();
function cleanup(C) {
  rafIds.delete(C);
}
function wrapperRaf(C) {
  let H = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  rafUUID += 1;
  const U = rafUUID;
  function W(K) {
    if (K === 0)
      cleanup(U), C();
    else {
      const G = raf(() => {
        W(K - 1);
      });
      rafIds.set(U, G);
    }
  }
  return W(H), U;
}
wrapperRaf.cancel = (C) => {
  const H = rafIds.get(C);
  return cleanup(H), caf(H);
};
const tuple = function() {
  for (var C = arguments.length, H = new Array(C), U = 0; U < C; U++)
    H[U] = arguments[U];
  return H;
}, withInstall = (C) => {
  const H = C;
  return H.install = function(U) {
    U.component(H.displayName || H.name, C);
  }, C;
};
function eventType() {
  return {
    type: [Function, Array]
  };
}
function objectType(C) {
  return {
    type: Object,
    default: C
  };
}
function booleanType(C) {
  return {
    type: Boolean,
    default: C
  };
}
function anyType(C, H) {
  const U = {
    validator: () => !0,
    default: C
  };
  return U;
}
function arrayType(C) {
  return {
    type: Array,
    default: C
  };
}
function stringType(C) {
  return {
    type: String,
    default: C
  };
}
function someType(C, H) {
  return C ? {
    type: C,
    default: H
  } : anyType(H);
}
let supportsPassive = !1;
try {
  const C = Object.defineProperty({}, "passive", {
    get() {
      supportsPassive = !0;
    }
  });
  window.addEventListener("testPassive", null, C), window.removeEventListener("testPassive", null, C);
} catch {
}
const supportsPassive$1 = supportsPassive;
function addEventListenerWrap(C, H, U, W) {
  if (C && C.addEventListener) {
    let K = W;
    K === void 0 && supportsPassive$1 && (H === "touchstart" || H === "touchmove" || H === "wheel") && (K = {
      passive: !1
    }), C.addEventListener(H, U, K);
  }
  return {
    remove: () => {
      C && C.removeEventListener && C.removeEventListener(H, U);
    }
  };
}
const defaultIconPrefixCls = "anticon", GlobalFormContextKey = Symbol("GlobalFormContextKey"), useProvideGlobalForm = (C) => {
  provide(GlobalFormContextKey, C);
}, configProviderProps = () => ({
  iconPrefixCls: String,
  getTargetContainer: {
    type: Function
  },
  getPopupContainer: {
    type: Function
  },
  prefixCls: String,
  getPrefixCls: {
    type: Function
  },
  renderEmpty: {
    type: Function
  },
  transformCellText: {
    type: Function
  },
  csp: objectType(),
  input: objectType(),
  autoInsertSpaceInButton: {
    type: Boolean,
    default: void 0
  },
  locale: objectType(),
  pageHeader: objectType(),
  componentSize: {
    type: String
  },
  componentDisabled: {
    type: Boolean,
    default: void 0
  },
  direction: {
    type: String,
    default: "ltr"
  },
  space: objectType(),
  virtual: {
    type: Boolean,
    default: void 0
  },
  dropdownMatchSelectWidth: {
    type: [Number, Boolean],
    default: !0
  },
  form: objectType(),
  pagination: objectType(),
  theme: objectType(),
  select: objectType(),
  wave: objectType()
}), configProviderKey = Symbol("configProvider"), defaultConfigProvider = {
  getPrefixCls: (C, H) => H || (C ? `ant-${C}` : "ant"),
  iconPrefixCls: computed(() => defaultIconPrefixCls),
  getPopupContainer: computed(() => () => document.body),
  direction: computed(() => "ltr")
}, useConfigContextInject = () => inject(configProviderKey, defaultConfigProvider), useConfigContextProvider = (C) => provide(configProviderKey, C), DisabledContextKey = Symbol("DisabledContextKey"), useInjectDisabled = () => inject(DisabledContextKey, ref(void 0)), useProviderDisabled = (C) => {
  const H = useInjectDisabled();
  return provide(DisabledContextKey, computed(() => {
    var U;
    return (U = C.value) !== null && U !== void 0 ? U : H.value;
  })), C;
}, enUS$1 = {
  // Options.jsx
  items_per_page: "/ page",
  jump_to: "Go to",
  jump_to_confirm: "confirm",
  page: "",
  // Pagination.jsx
  prev_page: "Previous Page",
  next_page: "Next Page",
  prev_5: "Previous 5 Pages",
  next_5: "Next 5 Pages",
  prev_3: "Previous 3 Pages",
  next_3: "Next 3 Pages"
}, locale$8 = {
  locale: "en_US",
  today: "Today",
  now: "Now",
  backToToday: "Back to today",
  ok: "Ok",
  clear: "Clear",
  month: "Month",
  year: "Year",
  timeSelect: "select time",
  dateSelect: "select date",
  weekSelect: "Choose a week",
  monthSelect: "Choose a month",
  yearSelect: "Choose a year",
  decadeSelect: "Choose a decade",
  yearFormat: "YYYY",
  dateFormat: "M/D/YYYY",
  dayFormat: "D",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Previous month (PageUp)",
  nextMonth: "Next month (PageDown)",
  previousYear: "Last year (Control + left)",
  nextYear: "Next year (Control + right)",
  previousDecade: "Last decade",
  nextDecade: "Next decade",
  previousCentury: "Last century",
  nextCentury: "Next century"
}, CalendarLocale$1 = locale$8, locale$7 = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, TimePicker = locale$7, locale$6 = {
  lang: _extends({
    placeholder: "Select date",
    yearPlaceholder: "Select year",
    quarterPlaceholder: "Select quarter",
    monthPlaceholder: "Select month",
    weekPlaceholder: "Select week",
    rangePlaceholder: ["Start date", "End date"],
    rangeYearPlaceholder: ["Start year", "End year"],
    rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
    rangeMonthPlaceholder: ["Start month", "End month"],
    rangeWeekPlaceholder: ["Start week", "End week"]
  }, CalendarLocale$1),
  timePickerLocale: _extends({}, TimePicker)
}, enUS = locale$6, typeTemplate = "${label} is not a valid ${type}", localeValues = {
  locale: "en",
  Pagination: enUS$1,
  DatePicker: enUS,
  TimePicker,
  Calendar: enUS,
  global: {
    placeholder: "Please select"
  },
  Table: {
    filterTitle: "Filter menu",
    filterConfirm: "OK",
    filterReset: "Reset",
    filterEmptyText: "No filters",
    filterCheckall: "Select all items",
    filterSearchPlaceholder: "Search in filters",
    emptyText: "No data",
    selectAll: "Select current page",
    selectInvert: "Invert current page",
    selectNone: "Clear all data",
    selectionAll: "Select all data",
    sortTitle: "Sort",
    expand: "Expand row",
    collapse: "Collapse row",
    triggerDesc: "Click to sort descending",
    triggerAsc: "Click to sort ascending",
    cancelSort: "Click to cancel sorting"
  },
  Tour: {
    Next: "Next",
    Previous: "Previous",
    Finish: "Finish"
  },
  Modal: {
    okText: "OK",
    cancelText: "Cancel",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Cancel"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Search here",
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Remove",
    selectCurrent: "Select current page",
    removeCurrent: "Remove current page",
    selectAll: "Select all data",
    removeAll: "Remove all data",
    selectInvert: "Invert current page"
  },
  Upload: {
    uploading: "Uploading...",
    removeFile: "Remove file",
    uploadError: "Upload error",
    previewFile: "Preview file",
    downloadFile: "Download file"
  },
  Empty: {
    description: "No data"
  },
  Icon: {
    icon: "icon"
  },
  Text: {
    edit: "Edit",
    copy: "Copy",
    copied: "Copied",
    expand: "Expand"
  },
  PageHeader: {
    back: "Back"
  },
  Form: {
    optional: "(optional)",
    defaultValidateMessages: {
      default: "Field validation error for ${label}",
      required: "Please enter ${label}",
      enum: "${label} must be one of [${enum}]",
      whitespace: "${label} cannot be a blank character",
      date: {
        format: "${label} date format is invalid",
        parse: "${label} cannot be converted to a date",
        invalid: "${label} is an invalid date"
      },
      types: {
        string: typeTemplate,
        method: typeTemplate,
        array: typeTemplate,
        object: typeTemplate,
        number: typeTemplate,
        date: typeTemplate,
        boolean: typeTemplate,
        integer: typeTemplate,
        float: typeTemplate,
        regexp: typeTemplate,
        email: typeTemplate,
        url: typeTemplate,
        hex: typeTemplate
      },
      string: {
        len: "${label} must be ${len} characters",
        min: "${label} must be at least ${min} characters",
        max: "${label} must be up to ${max} characters",
        range: "${label} must be between ${min}-${max} characters"
      },
      number: {
        len: "${label} must be equal to ${len}",
        min: "${label} must be minimum ${min}",
        max: "${label} must be maximum ${max}",
        range: "${label} must be between ${min}-${max}"
      },
      array: {
        len: "Must be ${len} ${label}",
        min: "At least ${min} ${label}",
        max: "At most ${max} ${label}",
        range: "The amount of ${label} must be between ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} does not match the pattern ${pattern}"
      }
    }
  },
  Image: {
    preview: "Preview"
  },
  QRCode: {
    expired: "QR code expired",
    refresh: "Refresh"
  }
}, defaultLocale = localeValues, LocaleReceiver = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "LocaleReceiver",
  props: {
    componentName: String,
    defaultLocale: {
      type: [Object, Function]
    },
    children: {
      type: Function
    }
  },
  setup(C, H) {
    let {
      slots: U
    } = H;
    const W = inject("localeData", {}), K = computed(() => {
      const {
        componentName: X = "global",
        defaultLocale: Z
      } = C, Q = Z || defaultLocale[X || "global"], {
        antLocale: ee
      } = W, te = X && ee ? ee[X] : {};
      return _extends(_extends({}, typeof Q == "function" ? Q() : Q), te || {});
    }), G = computed(() => {
      const {
        antLocale: X
      } = W, Z = X && X.locale;
      return X && X.exist && !Z ? defaultLocale.locale : Z;
    });
    return () => {
      const X = C.children || U.default, {
        antLocale: Z
      } = W;
      return X == null ? void 0 : X(K.value, G.value, Z);
    };
  }
});
function useLocaleReceiver(C, H, U) {
  const W = inject("localeData", {});
  return [computed(() => {
    const {
      antLocale: G
    } = W, X = unref(H) || defaultLocale[C || "global"], Z = C && G ? G[C] : {};
    return _extends(_extends(_extends({}, typeof X == "function" ? X() : X), Z || {}), unref(U) || {});
  })];
}
function murmur2(C) {
  for (var H = 0, U, W = 0, K = C.length; K >= 4; ++W, K -= 4)
    U = C.charCodeAt(W) & 255 | (C.charCodeAt(++W) & 255) << 8 | (C.charCodeAt(++W) & 255) << 16 | (C.charCodeAt(++W) & 255) << 24, U = /* Math.imul(k, m): */
    (U & 65535) * 1540483477 + ((U >>> 16) * 59797 << 16), U ^= /* k >>> r: */
    U >>> 24, H = /* Math.imul(k, m): */
    (U & 65535) * 1540483477 + ((U >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (H & 65535) * 1540483477 + ((H >>> 16) * 59797 << 16);
  switch (K) {
    case 3:
      H ^= (C.charCodeAt(W + 2) & 255) << 16;
    case 2:
      H ^= (C.charCodeAt(W + 1) & 255) << 8;
    case 1:
      H ^= C.charCodeAt(W) & 255, H = /* Math.imul(h, m): */
      (H & 65535) * 1540483477 + ((H >>> 16) * 59797 << 16);
  }
  return H ^= H >>> 13, H = /* Math.imul(h, m): */
  (H & 65535) * 1540483477 + ((H >>> 16) * 59797 << 16), ((H ^ H >>> 15) >>> 0).toString(36);
}
const SPLIT = "%";
class Entity {
  constructor(H) {
    this.cache = /* @__PURE__ */ new Map(), this.instanceId = H;
  }
  get(H) {
    return this.cache.get(Array.isArray(H) ? H.join(SPLIT) : H) || null;
  }
  update(H, U) {
    const W = Array.isArray(H) ? H.join(SPLIT) : H, K = this.cache.get(W), G = U(K);
    G === null ? this.cache.delete(W) : this.cache.set(W, G);
  }
}
const CacheEntity = Entity, ATTR_TOKEN = "data-token-hash", ATTR_MARK = "data-css-hash", ATTR_CACHE_PATH = "data-cache-path", CSS_IN_JS_INSTANCE = "__cssinjs_instance__";
function createCache() {
  const C = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    const H = document.body.querySelectorAll(`style[${ATTR_MARK}]`) || [], {
      firstChild: U
    } = document.head;
    Array.from(H).forEach((K) => {
      K[CSS_IN_JS_INSTANCE] = K[CSS_IN_JS_INSTANCE] || C, K[CSS_IN_JS_INSTANCE] === C && document.head.insertBefore(K, U);
    });
    const W = {};
    Array.from(document.querySelectorAll(`style[${ATTR_MARK}]`)).forEach((K) => {
      var G;
      const X = K.getAttribute(ATTR_MARK);
      W[X] ? K[CSS_IN_JS_INSTANCE] === C && ((G = K.parentNode) === null || G === void 0 || G.removeChild(K)) : W[X] = !0;
    });
  }
  return new CacheEntity(C);
}
const StyleContextKey = Symbol("StyleContextKey"), getCache = () => {
  var C, H, U;
  const W = getCurrentInstance();
  let K;
  if (W && W.appContext) {
    const G = (U = (H = (C = W.appContext) === null || C === void 0 ? void 0 : C.config) === null || H === void 0 ? void 0 : H.globalProperties) === null || U === void 0 ? void 0 : U.__ANTDV_CSSINJS_CACHE__;
    G ? K = G : (K = createCache(), W.appContext.config.globalProperties && (W.appContext.config.globalProperties.__ANTDV_CSSINJS_CACHE__ = K));
  } else
    K = createCache();
  return K;
}, defaultStyleContext = {
  cache: createCache(),
  defaultCache: !0,
  hashPriority: "low"
}, useStyleInject = () => {
  const C = getCache();
  return inject(StyleContextKey, shallowRef(_extends(_extends({}, defaultStyleContext), {
    cache: C
  })));
}, useStyleProvider = (C) => {
  const H = useStyleInject(), U = shallowRef(_extends(_extends({}, defaultStyleContext), {
    cache: createCache()
  }));
  return watch([() => unref(C), H], () => {
    const W = _extends({}, H.value), K = unref(C);
    Object.keys(K).forEach((X) => {
      const Z = K[X];
      K[X] !== void 0 && (W[X] = Z);
    });
    const {
      cache: G
    } = K;
    W.cache = W.cache || createCache(), W.defaultCache = !G && H.value.defaultCache, U.value = W;
  }, {
    immediate: !0
  }), provide(StyleContextKey, U), U;
}, styleProviderProps = () => ({
  autoClear: booleanType(),
  /** @private Test only. Not work in production. */
  mock: stringType(),
  /**
   * Only set when you need ssr to extract style on you own.
   * If not provided, it will auto create <style /> on the end of Provider in server side.
   */
  cache: objectType(),
  /** Tell children that this context is default generated context */
  defaultCache: booleanType(),
  /** Use `:where` selector to reduce hashId css selector priority */
  hashPriority: stringType(),
  /** Tell cssinjs where to inject style in */
  container: someType(),
  /** Component wil render inline  `<style />` for fallback in SSR. Not recommend. */
  ssrInline: booleanType(),
  /** Transform css before inject in document. Please note that `transformers` do not support dynamic update */
  transformers: arrayType(),
  /**
   * Linters to lint css before inject in document.
   * Styles will be linted after transforming.
   * Please note that `linters` do not support dynamic update.
   */
  linters: arrayType()
});
withInstall(defineComponent({
  name: "AStyleProvider",
  inheritAttrs: !1,
  props: styleProviderProps(),
  setup(C, H) {
    let {
      slots: U
    } = H;
    return useStyleProvider(C), () => {
      var W;
      return (W = U.default) === null || W === void 0 ? void 0 : W.call(U);
    };
  }
}));
function useProdHMR() {
  return !1;
}
let webpackHMR = !1;
function useDevHMR() {
  return webpackHMR;
}
const useHMR = process.env.NODE_ENV === "production" ? useProdHMR : useDevHMR;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  const C = window;
  if (typeof C.webpackHotUpdate == "function") {
    const H = C.webpackHotUpdate;
    C.webpackHotUpdate = function() {
      return webpackHMR = !0, setTimeout(() => {
        webpackHMR = !1;
      }, 0), H(...arguments);
    };
  }
}
function useClientCache(C, H, U, W) {
  const K = useStyleInject(), G = shallowRef(""), X = shallowRef();
  watchEffect(() => {
    G.value = [C, ...H.value].join("%");
  });
  const Z = useHMR(), Q = (ee) => {
    K.value.cache.update(ee, (te) => {
      const [re = 0, ne] = te || [];
      return re - 1 === 0 ? (W == null || W(ne, !1), null) : [re - 1, ne];
    });
  };
  return watch(G, (ee, te) => {
    te && Q(te), K.value.cache.update(ee, (re) => {
      const [ne = 0, ae] = re || [];
      let oe = ae;
      process.env.NODE_ENV !== "production" && ae && Z && (W == null || W(oe, Z), oe = null);
      const ie = oe || U();
      return [ne + 1, ie];
    }), X.value = K.value.cache.get(G.value)[1];
  }, {
    immediate: !0
  }), onBeforeUnmount(() => {
    Q(G.value);
  }), X;
}
function canUseDom$1() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function contains$1(C, H) {
  return C && C.contains ? C.contains(H) : !1;
}
const APPEND_ORDER$1 = "data-vc-order", MARK_KEY$1 = "vc-util-key", containerCache$1 = /* @__PURE__ */ new Map();
function getMark$1() {
  let {
    mark: C
  } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return C ? C.startsWith("data-") ? C : `data-${C}` : MARK_KEY$1;
}
function getContainer$2(C) {
  return C.attachTo ? C.attachTo : document.querySelector("head") || document.body;
}
function getOrder$1(C) {
  return C === "queue" ? "prependQueue" : C ? "prepend" : "append";
}
function findStyles$1(C) {
  return Array.from((containerCache$1.get(C) || C).children).filter((H) => H.tagName === "STYLE");
}
function injectCSS$1(C) {
  let H = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!canUseDom$1())
    return null;
  const {
    csp: U,
    prepend: W
  } = H, K = document.createElement("style");
  K.setAttribute(APPEND_ORDER$1, getOrder$1(W)), U != null && U.nonce && (K.nonce = U == null ? void 0 : U.nonce), K.innerHTML = C;
  const G = getContainer$2(H), {
    firstChild: X
  } = G;
  if (W) {
    if (W === "queue") {
      const Z = findStyles$1(G).filter((Q) => ["prepend", "prependQueue"].includes(Q.getAttribute(APPEND_ORDER$1)));
      if (Z.length)
        return G.insertBefore(K, Z[Z.length - 1].nextSibling), K;
    }
    G.insertBefore(K, X);
  } else
    G.appendChild(K);
  return K;
}
function findExistNode$1(C) {
  let H = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const U = getContainer$2(H);
  return findStyles$1(U).find((W) => W.getAttribute(getMark$1(H)) === C);
}
function removeCSS(C) {
  let H = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const U = findExistNode$1(C, H);
  U && getContainer$2(H).removeChild(U);
}
function syncRealContainer$1(C, H) {
  const U = containerCache$1.get(C);
  if (!U || !contains$1(document, U)) {
    const W = injectCSS$1("", H), {
      parentNode: K
    } = W;
    containerCache$1.set(C, K), C.removeChild(W);
  }
}
function updateCSS$1(C, H) {
  let U = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var W, K, G;
  const X = getContainer$2(U);
  syncRealContainer$1(X, U);
  const Z = findExistNode$1(H, U);
  if (Z)
    return !((W = U.csp) === null || W === void 0) && W.nonce && Z.nonce !== ((K = U.csp) === null || K === void 0 ? void 0 : K.nonce) && (Z.nonce = (G = U.csp) === null || G === void 0 ? void 0 : G.nonce), Z.innerHTML !== C && (Z.innerHTML = C), Z;
  const Q = injectCSS$1(C, U);
  return Q.setAttribute(getMark$1(U), H), Q;
}
function sameDerivativeOption(C, H) {
  if (C.length !== H.length)
    return !1;
  for (let U = 0; U < C.length; U++)
    if (C[U] !== H[U])
      return !1;
  return !0;
}
class ThemeCache {
  constructor() {
    this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  size() {
    return this.keys.length;
  }
  internalGet(H) {
    let U = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, W = {
      map: this.cache
    };
    return H.forEach((K) => {
      var G;
      W ? W = (G = W == null ? void 0 : W.map) === null || G === void 0 ? void 0 : G.get(K) : W = void 0;
    }), W != null && W.value && U && (W.value[1] = this.cacheCallTimes++), W == null ? void 0 : W.value;
  }
  get(H) {
    var U;
    return (U = this.internalGet(H, !0)) === null || U === void 0 ? void 0 : U[0];
  }
  has(H) {
    return !!this.internalGet(H);
  }
  set(H, U) {
    if (!this.has(H)) {
      if (this.size() + 1 > ThemeCache.MAX_CACHE_SIZE + ThemeCache.MAX_CACHE_OFFSET) {
        const [K] = this.keys.reduce((G, X) => {
          const [, Z] = G;
          return this.internalGet(X)[1] < Z ? [X, this.internalGet(X)[1]] : G;
        }, [this.keys[0], this.cacheCallTimes]);
        this.delete(K);
      }
      this.keys.push(H);
    }
    let W = this.cache;
    H.forEach((K, G) => {
      if (G === H.length - 1)
        W.set(K, {
          value: [U, this.cacheCallTimes++]
        });
      else {
        const X = W.get(K);
        X ? X.map || (X.map = /* @__PURE__ */ new Map()) : W.set(K, {
          map: /* @__PURE__ */ new Map()
        }), W = W.get(K).map;
      }
    });
  }
  deleteByPath(H, U) {
    var W;
    const K = H.get(U[0]);
    if (U.length === 1)
      return K.map ? H.set(U[0], {
        map: K.map
      }) : H.delete(U[0]), (W = K.value) === null || W === void 0 ? void 0 : W[0];
    const G = this.deleteByPath(K.map, U.slice(1));
    return (!K.map || K.map.size === 0) && !K.value && H.delete(U[0]), G;
  }
  delete(H) {
    if (this.has(H))
      return this.keys = this.keys.filter((U) => !sameDerivativeOption(U, H)), this.deleteByPath(this.cache, H);
  }
}
ThemeCache.MAX_CACHE_SIZE = 20;
ThemeCache.MAX_CACHE_OFFSET = 5;
let warned = {};
function warning$3(C, H) {
  process.env.NODE_ENV !== "production" && !C && console !== void 0 && console.error(`Warning: ${H}`);
}
function resetWarned() {
  warned = {};
}
function call$1(C, H, U) {
  !H && !warned[U] && (C(!1, U), warned[U] = !0);
}
function warningOnce(C, H) {
  call$1(warning$3, C, H);
}
function noop$1() {
}
let warning$1 = noop$1;
process.env.NODE_ENV !== "production" && (warning$1 = (C, H, U) => {
  warningOnce(C, `[ant-design-vue: ${H}] ${U}`), process.env.NODE_ENV === "test" && resetWarned();
});
const warning$2 = warning$1;
let uuid$4 = 0;
class Theme {
  constructor(H) {
    this.derivatives = Array.isArray(H) ? H : [H], this.id = uuid$4, H.length === 0 && warning$2(H.length > 0, "[Ant Design Vue CSS-in-JS] Theme should have at least one derivative function."), uuid$4 += 1;
  }
  getDerivativeToken(H) {
    return this.derivatives.reduce((U, W) => W(H, U), void 0);
  }
}
const cacheThemes = new ThemeCache();
function createTheme(C) {
  const H = Array.isArray(C) ? C : [C];
  return cacheThemes.has(H) || cacheThemes.set(H, new Theme(H)), cacheThemes.get(H);
}
const flattenTokenCache = /* @__PURE__ */ new WeakMap();
function flattenToken(C) {
  let H = flattenTokenCache.get(C) || "";
  return H || (Object.keys(C).forEach((U) => {
    const W = C[U];
    H += U, W instanceof Theme ? H += W.id : W && typeof W == "object" ? H += flattenToken(W) : H += W;
  }), flattenTokenCache.set(C, H)), H;
}
function token2key(C, H) {
  return murmur2(`${H}_${flattenToken(C)}`);
}
const randomSelectorKey = `random-${Date.now()}-${Math.random()}`.replace(/\./g, ""), checkContent = "_bAmBoO_";
function supportSelector(C, H, U) {
  var W, K;
  if (canUseDom$1()) {
    updateCSS$1(C, randomSelectorKey);
    const G = document.createElement("div");
    G.style.position = "fixed", G.style.left = "0", G.style.top = "0", H == null || H(G), document.body.appendChild(G), process.env.NODE_ENV !== "production" && (G.innerHTML = "Test", G.style.zIndex = "9999999");
    const X = U ? U(G) : (W = getComputedStyle(G).content) === null || W === void 0 ? void 0 : W.includes(checkContent);
    return (K = G.parentNode) === null || K === void 0 || K.removeChild(G), removeCSS(randomSelectorKey), X;
  }
  return !1;
}
let canLayer;
function supportLayer() {
  return canLayer === void 0 && (canLayer = supportSelector(`@layer ${randomSelectorKey} { .${randomSelectorKey} { content: "${checkContent}"!important; } }`, (C) => {
    C.className = randomSelectorKey;
  })), canLayer;
}
const EMPTY_OVERRIDE = {}, hashPrefix = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", tokenKeys = /* @__PURE__ */ new Map();
function recordCleanToken(C) {
  tokenKeys.set(C, (tokenKeys.get(C) || 0) + 1);
}
function removeStyleTags(C, H) {
  typeof document < "u" && document.querySelectorAll(`style[${ATTR_TOKEN}="${C}"]`).forEach((W) => {
    var K;
    W[CSS_IN_JS_INSTANCE] === H && ((K = W.parentNode) === null || K === void 0 || K.removeChild(W));
  });
}
const TOKEN_THRESHOLD = 0;
function cleanTokenStyle(C, H) {
  tokenKeys.set(C, (tokenKeys.get(C) || 0) - 1);
  const U = Array.from(tokenKeys.keys()), W = U.filter((K) => (tokenKeys.get(K) || 0) <= 0);
  U.length - W.length > TOKEN_THRESHOLD && W.forEach((K) => {
    removeStyleTags(K, H), tokenKeys.delete(K);
  });
}
const getComputedToken = (C, H, U, W) => {
  const K = U.getDerivativeToken(C);
  let G = _extends(_extends({}, K), H);
  return W && (G = W(G)), G;
};
function useCacheToken(C, H) {
  let U = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ref({});
  const W = useStyleInject(), K = computed(() => _extends({}, ...H.value)), G = computed(() => flattenToken(K.value)), X = computed(() => flattenToken(U.value.override || EMPTY_OVERRIDE));
  return useClientCache("token", computed(() => [U.value.salt || "", C.value.id, G.value, X.value]), () => {
    const {
      salt: Q = "",
      override: ee = EMPTY_OVERRIDE,
      formatToken: te,
      getComputedToken: re
    } = U.value, ne = re ? re(K.value, ee, C.value) : getComputedToken(K.value, ee, C.value, te), ae = token2key(ne, Q);
    ne._tokenKey = ae, recordCleanToken(ae);
    const oe = `${hashPrefix}-${murmur2(ae)}`;
    return ne._hashId = oe, [ne, oe];
  }, (Q) => {
    var ee;
    cleanTokenStyle(Q[0]._tokenKey, (ee = W.value) === null || ee === void 0 ? void 0 : ee.cache.instanceId);
  });
}
var unitlessKeys = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, COMMENT = "comm", RULESET = "rule", DECLARATION = "decl", IMPORT = "@import", KEYFRAMES = "@keyframes", LAYER = "@layer", abs$2 = Math.abs, from$1 = String.fromCharCode;
function trim(C) {
  return C.trim();
}
function replace$1(C, H, U) {
  return C.replace(H, U);
}
function indexof(C, H) {
  return C.indexOf(H);
}
function charat(C, H) {
  return C.charCodeAt(H) | 0;
}
function substr(C, H, U) {
  return C.slice(H, U);
}
function strlen(C) {
  return C.length;
}
function sizeof(C) {
  return C.length;
}
function append(C, H) {
  return H.push(C), C;
}
var line = 1, column = 1, length = 0, position = 0, character = 0, characters = "";
function node(C, H, U, W, K, G, X, Z) {
  return { value: C, root: H, parent: U, type: W, props: K, children: G, line, column, length: X, return: "", siblings: Z };
}
function char() {
  return character;
}
function prev() {
  return character = position > 0 ? charat(characters, --position) : 0, column--, character === 10 && (column = 1, line--), character;
}
function next() {
  return character = position < length ? charat(characters, position++) : 0, column++, character === 10 && (column = 1, line++), character;
}
function peek() {
  return charat(characters, position);
}
function caret() {
  return position;
}
function slice(C, H) {
  return substr(characters, C, H);
}
function token$1(C) {
  switch (C) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function alloc(C) {
  return line = column = 1, length = strlen(characters = C), position = 0, [];
}
function dealloc(C) {
  return characters = "", C;
}
function delimit(C) {
  return trim(slice(position - 1, delimiter(C === 91 ? C + 2 : C === 40 ? C + 1 : C)));
}
function whitespace(C) {
  for (; (character = peek()) && character < 33; )
    next();
  return token$1(C) > 2 || token$1(character) > 3 ? "" : " ";
}
function escaping(C, H) {
  for (; --H && next() && !(character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97); )
    ;
  return slice(C, caret() + (H < 6 && peek() == 32 && next() == 32));
}
function delimiter(C) {
  for (; next(); )
    switch (character) {
      case C:
        return position;
      case 34:
      case 39:
        C !== 34 && C !== 39 && delimiter(character);
        break;
      case 40:
        C === 41 && delimiter(C);
        break;
      case 92:
        next();
        break;
    }
  return position;
}
function commenter(C, H) {
  for (; next() && C + character !== 57; )
    if (C + character === 84 && peek() === 47)
      break;
  return "/*" + slice(H, position - 1) + "*" + from$1(C === 47 ? C : next());
}
function identifier(C) {
  for (; !token$1(peek()); )
    next();
  return slice(C, position);
}
function compile(C) {
  return dealloc(parse$2("", null, null, null, [""], C = alloc(C), 0, [0], C));
}
function parse$2(C, H, U, W, K, G, X, Z, Q) {
  for (var ee = 0, te = 0, re = X, ne = 0, ae = 0, oe = 0, ie = 1, se = 1, ue = 1, le = 0, ce = "", fe = K, pe = G, he = W, de = ce; se; )
    switch (oe = le, le = next()) {
      case 40:
        if (oe != 108 && charat(de, re - 1) == 58) {
          indexof(de += replace$1(delimit(le), "&", "&\f"), "&\f") != -1 && (ue = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        de += delimit(le);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        de += whitespace(oe);
        break;
      case 92:
        de += escaping(caret() - 1, 7);
        continue;
      case 47:
        switch (peek()) {
          case 42:
          case 47:
            append(comment(commenter(next(), caret()), H, U, Q), Q);
            break;
          default:
            de += "/";
        }
        break;
      case 123 * ie:
        Z[ee++] = strlen(de) * ue;
      case 125 * ie:
      case 59:
      case 0:
        switch (le) {
          case 0:
          case 125:
            se = 0;
          case 59 + te:
            ue == -1 && (de = replace$1(de, /\f/g, "")), ae > 0 && strlen(de) - re && append(ae > 32 ? declaration(de + ";", W, U, re - 1, Q) : declaration(replace$1(de, " ", "") + ";", W, U, re - 2, Q), Q);
            break;
          case 59:
            de += ";";
          default:
            if (append(he = ruleset(de, H, U, ee, te, K, Z, ce, fe = [], pe = [], re, G), G), le === 123)
              if (te === 0)
                parse$2(de, H, he, he, fe, G, re, Z, pe);
              else
                switch (ne === 99 && charat(de, 3) === 110 ? 100 : ne) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    parse$2(C, he, he, W && append(ruleset(C, he, he, 0, 0, K, Z, ce, K, fe = [], re, pe), pe), K, pe, re, Z, W ? fe : pe);
                    break;
                  default:
                    parse$2(de, he, he, he, [""], pe, 0, Z, pe);
                }
        }
        ee = te = ae = 0, ie = ue = 1, ce = de = "", re = X;
        break;
      case 58:
        re = 1 + strlen(de), ae = oe;
      default:
        if (ie < 1) {
          if (le == 123)
            --ie;
          else if (le == 125 && ie++ == 0 && prev() == 125)
            continue;
        }
        switch (de += from$1(le), le * ie) {
          case 38:
            ue = te > 0 ? 1 : (de += "\f", -1);
            break;
          case 44:
            Z[ee++] = (strlen(de) - 1) * ue, ue = 1;
            break;
          case 64:
            peek() === 45 && (de += delimit(next())), ne = peek(), te = re = strlen(ce = de += identifier(caret())), le++;
            break;
          case 45:
            oe === 45 && strlen(de) == 2 && (ie = 0);
        }
    }
  return G;
}
function ruleset(C, H, U, W, K, G, X, Z, Q, ee, te, re) {
  for (var ne = K - 1, ae = K === 0 ? G : [""], oe = sizeof(ae), ie = 0, se = 0, ue = 0; ie < W; ++ie)
    for (var le = 0, ce = substr(C, ne + 1, ne = abs$2(se = X[ie])), fe = C; le < oe; ++le)
      (fe = trim(se > 0 ? ae[le] + " " + ce : replace$1(ce, /&\f/g, ae[le]))) && (Q[ue++] = fe);
  return node(C, H, U, K === 0 ? RULESET : Z, Q, ee, te, re);
}
function comment(C, H, U, W) {
  return node(C, H, U, COMMENT, from$1(char()), substr(C, 2, -2), 0, W);
}
function declaration(C, H, U, W, K) {
  return node(C, H, U, DECLARATION, substr(C, 0, W), substr(C, W + 1, -1), W, K);
}
function serialize(C, H) {
  for (var U = "", W = 0; W < C.length; W++)
    U += H(C[W], W, C, H) || "";
  return U;
}
function stringify$2(C, H, U, W) {
  switch (C.type) {
    case LAYER:
      if (C.children.length)
        break;
    case IMPORT:
    case DECLARATION:
      return C.return = C.return || C.value;
    case COMMENT:
      return "";
    case KEYFRAMES:
      return C.return = C.value + "{" + serialize(C.children, W) + "}";
    case RULESET:
      if (!strlen(C.value = C.props.join(",")))
        return "";
  }
  return strlen(U = serialize(C.children, W)) ? C.return = C.value + "{" + U + "}" : "";
}
function lintWarning(C, H) {
  const {
    path: U,
    parentSelectors: W
  } = H;
  warningOnce(!1, `[Ant Design Vue CSS-in-JS] ${U ? `Error in '${U}': ` : ""}${C}${W.length ? ` Selector info: ${W.join(" -> ")}` : ""}`);
}
const linter$1 = (C, H, U) => {
  if (C === "content") {
    const W = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
    (typeof H != "string" || ["normal", "none", "initial", "inherit", "unset"].indexOf(H) === -1 && !W.test(H) && (H.charAt(0) !== H.charAt(H.length - 1) || H.charAt(0) !== '"' && H.charAt(0) !== "'")) && lintWarning(`You seem to be using a value for 'content' without quotes, try replacing it with \`content: '"${H}"'\`.`, U);
  }
}, contentQuotesLinter = linter$1, linter = (C, H, U) => {
  C === "animation" && U.hashId && H !== "none" && lintWarning(`You seem to be using hashed animation '${H}', in which case 'animationName' with Keyframe as value is recommended.`, U);
}, hashedAnimationLinter = linter, ATTR_CACHE_MAP = "data-ant-cssinjs-cache-path", CSS_FILE_STYLE = "_FILE_STYLE__";
let cachePathMap, fromCSSFile = !0;
function prepare() {
  var C;
  if (!cachePathMap && (cachePathMap = {}, canUseDom$1())) {
    const H = document.createElement("div");
    H.className = ATTR_CACHE_MAP, H.style.position = "fixed", H.style.visibility = "hidden", H.style.top = "-9999px", document.body.appendChild(H);
    let U = getComputedStyle(H).content || "";
    U = U.replace(/^"/, "").replace(/"$/, ""), U.split(";").forEach((K) => {
      const [G, X] = K.split(":");
      cachePathMap[G] = X;
    });
    const W = document.querySelector(`style[${ATTR_CACHE_MAP}]`);
    W && (fromCSSFile = !1, (C = W.parentNode) === null || C === void 0 || C.removeChild(W)), document.body.removeChild(H);
  }
}
function existPath(C) {
  return prepare(), !!cachePathMap[C];
}
function getStyleAndHash(C) {
  const H = cachePathMap[C];
  let U = null;
  if (H && canUseDom$1())
    if (fromCSSFile)
      U = CSS_FILE_STYLE;
    else {
      const W = document.querySelector(`style[${ATTR_MARK}="${cachePathMap[C]}"]`);
      W ? U = W.innerHTML : delete cachePathMap[C];
    }
  return [U, H];
}
const isClientSide = canUseDom$1(), SKIP_CHECK = "_skip_check_", MULTI_VALUE = "_multi_value_";
function normalizeStyle(C) {
  return serialize(compile(C), stringify$2).replace(/\{%%%\:[^;];}/g, ";");
}
function isCompoundCSSProperty(C) {
  return typeof C == "object" && C && (SKIP_CHECK in C || MULTI_VALUE in C);
}
function injectSelectorHash(C, H, U) {
  if (!H)
    return C;
  const W = `.${H}`, K = U === "low" ? `:where(${W})` : W;
  return C.split(",").map((X) => {
    var Z;
    const Q = X.trim().split(/\s+/);
    let ee = Q[0] || "";
    const te = ((Z = ee.match(/^\w+/)) === null || Z === void 0 ? void 0 : Z[0]) || "";
    return ee = `${te}${K}${ee.slice(te.length)}`, [ee, ...Q.slice(1)].join(" ");
  }).join(",");
}
const globalEffectStyleKeys = /* @__PURE__ */ new Set();
process.env.NODE_ENV;
const parseStyle = function(C) {
  let H = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    root: U,
    injectHash: W,
    parentSelectors: K
  } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  };
  const {
    hashId: G,
    layer: X,
    path: Z,
    hashPriority: Q,
    transformers: ee = [],
    linters: te = []
  } = H;
  let re = "", ne = {};
  function ae(se) {
    const ue = se.getName(G);
    if (!ne[ue]) {
      const [le] = parseStyle(se.style, H, {
        root: !1,
        parentSelectors: K
      });
      ne[ue] = `@keyframes ${se.getName(G)}${le}`;
    }
  }
  function oe(se) {
    let ue = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return se.forEach((le) => {
      Array.isArray(le) ? oe(le, ue) : le && ue.push(le);
    }), ue;
  }
  if (oe(Array.isArray(C) ? C : [C]).forEach((se) => {
    const ue = typeof se == "string" && !U ? {} : se;
    if (typeof ue == "string")
      re += `${ue}
`;
    else if (ue._keyframe)
      ae(ue);
    else {
      const le = ee.reduce((ce, fe) => {
        var pe;
        return ((pe = fe == null ? void 0 : fe.visit) === null || pe === void 0 ? void 0 : pe.call(fe, ce)) || ce;
      }, ue);
      Object.keys(le).forEach((ce) => {
        var fe;
        const pe = le[ce];
        if (typeof pe == "object" && pe && (ce !== "animationName" || !pe._keyframe) && !isCompoundCSSProperty(pe)) {
          let he = !1, de = ce.trim(), ge = !1;
          (U || W) && G ? de.startsWith("@") ? he = !0 : de = injectSelectorHash(ce, G, Q) : U && !G && (de === "&" || de === "") && (de = "", ge = !0);
          const [ve, me] = parseStyle(pe, H, {
            root: ge,
            injectHash: he,
            parentSelectors: [...K, de]
          });
          ne = _extends(_extends({}, ne), me), re += `${de}${ve}`;
        } else {
          let he = function(ge, ve) {
            process.env.NODE_ENV !== "production" && (typeof pe != "object" || !(pe != null && pe[SKIP_CHECK])) && [contentQuotesLinter, hashedAnimationLinter, ...te].forEach((be) => be(ge, ve, {
              path: Z,
              hashId: G,
              parentSelectors: K
            }));
            const me = ge.replace(/[A-Z]/g, (be) => `-${be.toLowerCase()}`);
            let ye = ve;
            !unitlessKeys[ge] && typeof ye == "number" && ye !== 0 && (ye = `${ye}px`), ge === "animationName" && (ve != null && ve._keyframe) && (ae(ve), ye = ve.getName(G)), re += `${me}:${ye};`;
          };
          const de = (fe = pe == null ? void 0 : pe.value) !== null && fe !== void 0 ? fe : pe;
          typeof pe == "object" && (pe != null && pe[MULTI_VALUE]) && Array.isArray(de) ? de.forEach((ge) => {
            he(ce, ge);
          }) : he(ce, de);
        }
      });
    }
  }), !U)
    re = `{${re}}`;
  else if (X && supportLayer()) {
    const se = X.split(",");
    re = `@layer ${se[se.length - 1].trim()} {${re}}`, se.length > 1 && (re = `@layer ${X}{%%%:%}${re}`);
  }
  return [re, ne];
};
function uniqueHash(C, H) {
  return murmur2(`${C.join("%")}${H}`);
}
function useStyleRegister(C, H) {
  const U = useStyleInject(), W = computed(() => C.value.token._tokenKey), K = computed(() => [W.value, ...C.value.path]);
  let G = isClientSide;
  return process.env.NODE_ENV !== "production" && U.value.mock !== void 0 && (G = U.value.mock === "client"), useClientCache(
    "style",
    K,
    // Create cache if needed
    () => {
      const {
        path: X,
        hashId: Z,
        layer: Q,
        nonce: ee,
        clientOnly: te,
        order: re = 0
      } = C.value, ne = K.value.join("|");
      if (existPath(ne)) {
        const [de, ge] = getStyleAndHash(ne);
        if (de)
          return [de, W.value, ge, {}, te, re];
      }
      const ae = H(), {
        hashPriority: oe,
        container: ie,
        transformers: se,
        linters: ue,
        cache: le
      } = U.value, [ce, fe] = parseStyle(ae, {
        hashId: Z,
        hashPriority: oe,
        layer: Q,
        path: X.join("-"),
        transformers: se,
        linters: ue
      }), pe = normalizeStyle(ce), he = uniqueHash(K.value, pe);
      if (G) {
        const de = {
          mark: ATTR_MARK,
          prepend: "queue",
          attachTo: ie,
          priority: re
        }, ge = typeof ee == "function" ? ee() : ee;
        ge && (de.csp = {
          nonce: ge
        });
        const ve = updateCSS$1(pe, he, de);
        ve[CSS_IN_JS_INSTANCE] = le.instanceId, ve.setAttribute(ATTR_TOKEN, W.value), process.env.NODE_ENV !== "production" && ve.setAttribute(ATTR_CACHE_PATH, K.value.join("|")), Object.keys(fe).forEach((me) => {
          globalEffectStyleKeys.has(me) || (globalEffectStyleKeys.add(me), updateCSS$1(normalizeStyle(fe[me]), `_effect-${me}`, {
            mark: ATTR_MARK,
            prepend: "queue",
            attachTo: ie
          }));
        });
      }
      return [pe, W.value, he, fe, te, re];
    },
    // Remove cache if no need
    (X, Z) => {
      let [, , Q] = X;
      (Z || U.value.autoClear) && isClientSide && removeCSS(Q, {
        mark: ATTR_MARK
      });
    }
  ), (X) => X;
}
class Keyframe {
  constructor(H, U) {
    this._keyframe = !0, this.name = H, this.style = U;
  }
  getName() {
    let H = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    return H ? `${H}-${this.name}` : this.name;
  }
}
const Keyframes = Keyframe, version$1 = "4.0.7";
function bound01(C, H) {
  isOnePointZero(C) && (C = "100%");
  var U = isPercentage(C);
  return C = H === 360 ? C : Math.min(H, Math.max(0, parseFloat(C))), U && (C = parseInt(String(C * H), 10) / 100), Math.abs(C - H) < 1e-6 ? 1 : (H === 360 ? C = (C < 0 ? C % H + H : C % H) / parseFloat(String(H)) : C = C % H / parseFloat(String(H)), C);
}
function clamp01(C) {
  return Math.min(1, Math.max(0, C));
}
function isOnePointZero(C) {
  return typeof C == "string" && C.indexOf(".") !== -1 && parseFloat(C) === 1;
}
function isPercentage(C) {
  return typeof C == "string" && C.indexOf("%") !== -1;
}
function boundAlpha(C) {
  return C = parseFloat(C), (isNaN(C) || C < 0 || C > 1) && (C = 1), C;
}
function convertToPercentage(C) {
  return C <= 1 ? "".concat(Number(C) * 100, "%") : C;
}
function pad2(C) {
  return C.length === 1 ? "0" + C : String(C);
}
function rgbToRgb(C, H, U) {
  return {
    r: bound01(C, 255) * 255,
    g: bound01(H, 255) * 255,
    b: bound01(U, 255) * 255
  };
}
function rgbToHsl(C, H, U) {
  C = bound01(C, 255), H = bound01(H, 255), U = bound01(U, 255);
  var W = Math.max(C, H, U), K = Math.min(C, H, U), G = 0, X = 0, Z = (W + K) / 2;
  if (W === K)
    X = 0, G = 0;
  else {
    var Q = W - K;
    switch (X = Z > 0.5 ? Q / (2 - W - K) : Q / (W + K), W) {
      case C:
        G = (H - U) / Q + (H < U ? 6 : 0);
        break;
      case H:
        G = (U - C) / Q + 2;
        break;
      case U:
        G = (C - H) / Q + 4;
        break;
    }
    G /= 6;
  }
  return { h: G, s: X, l: Z };
}
function hue2rgb(C, H, U) {
  return U < 0 && (U += 1), U > 1 && (U -= 1), U < 1 / 6 ? C + (H - C) * (6 * U) : U < 1 / 2 ? H : U < 2 / 3 ? C + (H - C) * (2 / 3 - U) * 6 : C;
}
function hslToRgb(C, H, U) {
  var W, K, G;
  if (C = bound01(C, 360), H = bound01(H, 100), U = bound01(U, 100), H === 0)
    K = U, G = U, W = U;
  else {
    var X = U < 0.5 ? U * (1 + H) : U + H - U * H, Z = 2 * U - X;
    W = hue2rgb(Z, X, C + 1 / 3), K = hue2rgb(Z, X, C), G = hue2rgb(Z, X, C - 1 / 3);
  }
  return { r: W * 255, g: K * 255, b: G * 255 };
}
function rgbToHsv(C, H, U) {
  C = bound01(C, 255), H = bound01(H, 255), U = bound01(U, 255);
  var W = Math.max(C, H, U), K = Math.min(C, H, U), G = 0, X = W, Z = W - K, Q = W === 0 ? 0 : Z / W;
  if (W === K)
    G = 0;
  else {
    switch (W) {
      case C:
        G = (H - U) / Z + (H < U ? 6 : 0);
        break;
      case H:
        G = (U - C) / Z + 2;
        break;
      case U:
        G = (C - H) / Z + 4;
        break;
    }
    G /= 6;
  }
  return { h: G, s: Q, v: X };
}
function hsvToRgb(C, H, U) {
  C = bound01(C, 360) * 6, H = bound01(H, 100), U = bound01(U, 100);
  var W = Math.floor(C), K = C - W, G = U * (1 - H), X = U * (1 - K * H), Z = U * (1 - (1 - K) * H), Q = W % 6, ee = [U, X, G, G, Z, U][Q], te = [Z, U, U, X, G, G][Q], re = [G, G, Z, U, U, X][Q];
  return { r: ee * 255, g: te * 255, b: re * 255 };
}
function rgbToHex(C, H, U, W) {
  var K = [
    pad2(Math.round(C).toString(16)),
    pad2(Math.round(H).toString(16)),
    pad2(Math.round(U).toString(16))
  ];
  return W && K[0].startsWith(K[0].charAt(1)) && K[1].startsWith(K[1].charAt(1)) && K[2].startsWith(K[2].charAt(1)) ? K[0].charAt(0) + K[1].charAt(0) + K[2].charAt(0) : K.join("");
}
function rgbaToHex(C, H, U, W, K) {
  var G = [
    pad2(Math.round(C).toString(16)),
    pad2(Math.round(H).toString(16)),
    pad2(Math.round(U).toString(16)),
    pad2(convertDecimalToHex(W))
  ];
  return K && G[0].startsWith(G[0].charAt(1)) && G[1].startsWith(G[1].charAt(1)) && G[2].startsWith(G[2].charAt(1)) && G[3].startsWith(G[3].charAt(1)) ? G[0].charAt(0) + G[1].charAt(0) + G[2].charAt(0) + G[3].charAt(0) : G.join("");
}
function convertDecimalToHex(C) {
  return Math.round(parseFloat(C) * 255).toString(16);
}
function convertHexToDecimal(C) {
  return parseIntFromHex(C) / 255;
}
function parseIntFromHex(C) {
  return parseInt(C, 16);
}
function numberInputToObject(C) {
  return {
    r: C >> 16,
    g: (C & 65280) >> 8,
    b: C & 255
  };
}
var names = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function inputToRGB(C) {
  var H = { r: 0, g: 0, b: 0 }, U = 1, W = null, K = null, G = null, X = !1, Z = !1;
  return typeof C == "string" && (C = stringInputToObject(C)), typeof C == "object" && (isValidCSSUnit(C.r) && isValidCSSUnit(C.g) && isValidCSSUnit(C.b) ? (H = rgbToRgb(C.r, C.g, C.b), X = !0, Z = String(C.r).substr(-1) === "%" ? "prgb" : "rgb") : isValidCSSUnit(C.h) && isValidCSSUnit(C.s) && isValidCSSUnit(C.v) ? (W = convertToPercentage(C.s), K = convertToPercentage(C.v), H = hsvToRgb(C.h, W, K), X = !0, Z = "hsv") : isValidCSSUnit(C.h) && isValidCSSUnit(C.s) && isValidCSSUnit(C.l) && (W = convertToPercentage(C.s), G = convertToPercentage(C.l), H = hslToRgb(C.h, W, G), X = !0, Z = "hsl"), Object.prototype.hasOwnProperty.call(C, "a") && (U = C.a)), U = boundAlpha(U), {
    ok: X,
    format: C.format || Z,
    r: Math.min(255, Math.max(H.r, 0)),
    g: Math.min(255, Math.max(H.g, 0)),
    b: Math.min(255, Math.max(H.b, 0)),
    a: U
  };
}
var CSS_INTEGER = "[-\\+]?\\d+%?", CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?", CSS_UNIT = "(?:".concat(CSS_NUMBER, ")|(?:").concat(CSS_INTEGER, ")"), PERMISSIVE_MATCH3 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?"), PERMISSIVE_MATCH4 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?"), matchers = {
  CSS_UNIT: new RegExp(CSS_UNIT),
  rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
  rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
  hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
  hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
  hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
  hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function stringInputToObject(C) {
  if (C = C.trim().toLowerCase(), C.length === 0)
    return !1;
  var H = !1;
  if (names[C])
    C = names[C], H = !0;
  else if (C === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var U = matchers.rgb.exec(C);
  return U ? { r: U[1], g: U[2], b: U[3] } : (U = matchers.rgba.exec(C), U ? { r: U[1], g: U[2], b: U[3], a: U[4] } : (U = matchers.hsl.exec(C), U ? { h: U[1], s: U[2], l: U[3] } : (U = matchers.hsla.exec(C), U ? { h: U[1], s: U[2], l: U[3], a: U[4] } : (U = matchers.hsv.exec(C), U ? { h: U[1], s: U[2], v: U[3] } : (U = matchers.hsva.exec(C), U ? { h: U[1], s: U[2], v: U[3], a: U[4] } : (U = matchers.hex8.exec(C), U ? {
    r: parseIntFromHex(U[1]),
    g: parseIntFromHex(U[2]),
    b: parseIntFromHex(U[3]),
    a: convertHexToDecimal(U[4]),
    format: H ? "name" : "hex8"
  } : (U = matchers.hex6.exec(C), U ? {
    r: parseIntFromHex(U[1]),
    g: parseIntFromHex(U[2]),
    b: parseIntFromHex(U[3]),
    format: H ? "name" : "hex"
  } : (U = matchers.hex4.exec(C), U ? {
    r: parseIntFromHex(U[1] + U[1]),
    g: parseIntFromHex(U[2] + U[2]),
    b: parseIntFromHex(U[3] + U[3]),
    a: convertHexToDecimal(U[4] + U[4]),
    format: H ? "name" : "hex8"
  } : (U = matchers.hex3.exec(C), U ? {
    r: parseIntFromHex(U[1] + U[1]),
    g: parseIntFromHex(U[2] + U[2]),
    b: parseIntFromHex(U[3] + U[3]),
    format: H ? "name" : "hex"
  } : !1)))))))));
}
function isValidCSSUnit(C) {
  return !!matchers.CSS_UNIT.exec(String(C));
}
var TinyColor = (
  /** @class */
  function() {
    function C(H, U) {
      H === void 0 && (H = ""), U === void 0 && (U = {});
      var W;
      if (H instanceof C)
        return H;
      typeof H == "number" && (H = numberInputToObject(H)), this.originalInput = H;
      var K = inputToRGB(H);
      this.originalInput = H, this.r = K.r, this.g = K.g, this.b = K.b, this.a = K.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (W = U.format) !== null && W !== void 0 ? W : K.format, this.gradientType = U.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = K.ok;
    }
    return C.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, C.prototype.isLight = function() {
      return !this.isDark();
    }, C.prototype.getBrightness = function() {
      var H = this.toRgb();
      return (H.r * 299 + H.g * 587 + H.b * 114) / 1e3;
    }, C.prototype.getLuminance = function() {
      var H = this.toRgb(), U, W, K, G = H.r / 255, X = H.g / 255, Z = H.b / 255;
      return G <= 0.03928 ? U = G / 12.92 : U = Math.pow((G + 0.055) / 1.055, 2.4), X <= 0.03928 ? W = X / 12.92 : W = Math.pow((X + 0.055) / 1.055, 2.4), Z <= 0.03928 ? K = Z / 12.92 : K = Math.pow((Z + 0.055) / 1.055, 2.4), 0.2126 * U + 0.7152 * W + 0.0722 * K;
    }, C.prototype.getAlpha = function() {
      return this.a;
    }, C.prototype.setAlpha = function(H) {
      return this.a = boundAlpha(H), this.roundA = Math.round(100 * this.a) / 100, this;
    }, C.prototype.isMonochrome = function() {
      var H = this.toHsl().s;
      return H === 0;
    }, C.prototype.toHsv = function() {
      var H = rgbToHsv(this.r, this.g, this.b);
      return { h: H.h * 360, s: H.s, v: H.v, a: this.a };
    }, C.prototype.toHsvString = function() {
      var H = rgbToHsv(this.r, this.g, this.b), U = Math.round(H.h * 360), W = Math.round(H.s * 100), K = Math.round(H.v * 100);
      return this.a === 1 ? "hsv(".concat(U, ", ").concat(W, "%, ").concat(K, "%)") : "hsva(".concat(U, ", ").concat(W, "%, ").concat(K, "%, ").concat(this.roundA, ")");
    }, C.prototype.toHsl = function() {
      var H = rgbToHsl(this.r, this.g, this.b);
      return { h: H.h * 360, s: H.s, l: H.l, a: this.a };
    }, C.prototype.toHslString = function() {
      var H = rgbToHsl(this.r, this.g, this.b), U = Math.round(H.h * 360), W = Math.round(H.s * 100), K = Math.round(H.l * 100);
      return this.a === 1 ? "hsl(".concat(U, ", ").concat(W, "%, ").concat(K, "%)") : "hsla(".concat(U, ", ").concat(W, "%, ").concat(K, "%, ").concat(this.roundA, ")");
    }, C.prototype.toHex = function(H) {
      return H === void 0 && (H = !1), rgbToHex(this.r, this.g, this.b, H);
    }, C.prototype.toHexString = function(H) {
      return H === void 0 && (H = !1), "#" + this.toHex(H);
    }, C.prototype.toHex8 = function(H) {
      return H === void 0 && (H = !1), rgbaToHex(this.r, this.g, this.b, this.a, H);
    }, C.prototype.toHex8String = function(H) {
      return H === void 0 && (H = !1), "#" + this.toHex8(H);
    }, C.prototype.toHexShortString = function(H) {
      return H === void 0 && (H = !1), this.a === 1 ? this.toHexString(H) : this.toHex8String(H);
    }, C.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    }, C.prototype.toRgbString = function() {
      var H = Math.round(this.r), U = Math.round(this.g), W = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(H, ", ").concat(U, ", ").concat(W, ")") : "rgba(".concat(H, ", ").concat(U, ", ").concat(W, ", ").concat(this.roundA, ")");
    }, C.prototype.toPercentageRgb = function() {
      var H = function(U) {
        return "".concat(Math.round(bound01(U, 255) * 100), "%");
      };
      return {
        r: H(this.r),
        g: H(this.g),
        b: H(this.b),
        a: this.a
      };
    }, C.prototype.toPercentageRgbString = function() {
      var H = function(U) {
        return Math.round(bound01(U, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(H(this.r), "%, ").concat(H(this.g), "%, ").concat(H(this.b), "%)") : "rgba(".concat(H(this.r), "%, ").concat(H(this.g), "%, ").concat(H(this.b), "%, ").concat(this.roundA, ")");
    }, C.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var H = "#" + rgbToHex(this.r, this.g, this.b, !1), U = 0, W = Object.entries(names); U < W.length; U++) {
        var K = W[U], G = K[0], X = K[1];
        if (H === X)
          return G;
      }
      return !1;
    }, C.prototype.toString = function(H) {
      var U = !!H;
      H = H ?? this.format;
      var W = !1, K = this.a < 1 && this.a >= 0, G = !U && K && (H.startsWith("hex") || H === "name");
      return G ? H === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (H === "rgb" && (W = this.toRgbString()), H === "prgb" && (W = this.toPercentageRgbString()), (H === "hex" || H === "hex6") && (W = this.toHexString()), H === "hex3" && (W = this.toHexString(!0)), H === "hex4" && (W = this.toHex8String(!0)), H === "hex8" && (W = this.toHex8String()), H === "name" && (W = this.toName()), H === "hsl" && (W = this.toHslString()), H === "hsv" && (W = this.toHsvString()), W || this.toHexString());
    }, C.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, C.prototype.clone = function() {
      return new C(this.toString());
    }, C.prototype.lighten = function(H) {
      H === void 0 && (H = 10);
      var U = this.toHsl();
      return U.l += H / 100, U.l = clamp01(U.l), new C(U);
    }, C.prototype.brighten = function(H) {
      H === void 0 && (H = 10);
      var U = this.toRgb();
      return U.r = Math.max(0, Math.min(255, U.r - Math.round(255 * -(H / 100)))), U.g = Math.max(0, Math.min(255, U.g - Math.round(255 * -(H / 100)))), U.b = Math.max(0, Math.min(255, U.b - Math.round(255 * -(H / 100)))), new C(U);
    }, C.prototype.darken = function(H) {
      H === void 0 && (H = 10);
      var U = this.toHsl();
      return U.l -= H / 100, U.l = clamp01(U.l), new C(U);
    }, C.prototype.tint = function(H) {
      return H === void 0 && (H = 10), this.mix("white", H);
    }, C.prototype.shade = function(H) {
      return H === void 0 && (H = 10), this.mix("black", H);
    }, C.prototype.desaturate = function(H) {
      H === void 0 && (H = 10);
      var U = this.toHsl();
      return U.s -= H / 100, U.s = clamp01(U.s), new C(U);
    }, C.prototype.saturate = function(H) {
      H === void 0 && (H = 10);
      var U = this.toHsl();
      return U.s += H / 100, U.s = clamp01(U.s), new C(U);
    }, C.prototype.greyscale = function() {
      return this.desaturate(100);
    }, C.prototype.spin = function(H) {
      var U = this.toHsl(), W = (U.h + H) % 360;
      return U.h = W < 0 ? 360 + W : W, new C(U);
    }, C.prototype.mix = function(H, U) {
      U === void 0 && (U = 50);
      var W = this.toRgb(), K = new C(H).toRgb(), G = U / 100, X = {
        r: (K.r - W.r) * G + W.r,
        g: (K.g - W.g) * G + W.g,
        b: (K.b - W.b) * G + W.b,
        a: (K.a - W.a) * G + W.a
      };
      return new C(X);
    }, C.prototype.analogous = function(H, U) {
      H === void 0 && (H = 6), U === void 0 && (U = 30);
      var W = this.toHsl(), K = 360 / U, G = [this];
      for (W.h = (W.h - (K * H >> 1) + 720) % 360; --H; )
        W.h = (W.h + K) % 360, G.push(new C(W));
      return G;
    }, C.prototype.complement = function() {
      var H = this.toHsl();
      return H.h = (H.h + 180) % 360, new C(H);
    }, C.prototype.monochromatic = function(H) {
      H === void 0 && (H = 6);
      for (var U = this.toHsv(), W = U.h, K = U.s, G = U.v, X = [], Z = 1 / H; H--; )
        X.push(new C({ h: W, s: K, v: G })), G = (G + Z) % 1;
      return X;
    }, C.prototype.splitcomplement = function() {
      var H = this.toHsl(), U = H.h;
      return [
        this,
        new C({ h: (U + 72) % 360, s: H.s, l: H.l }),
        new C({ h: (U + 216) % 360, s: H.s, l: H.l })
      ];
    }, C.prototype.onBackground = function(H) {
      var U = this.toRgb(), W = new C(H).toRgb(), K = U.a + W.a * (1 - U.a);
      return new C({
        r: (U.r * U.a + W.r * W.a * (1 - U.a)) / K,
        g: (U.g * U.a + W.g * W.a * (1 - U.a)) / K,
        b: (U.b * U.a + W.b * W.a * (1 - U.a)) / K,
        a: K
      });
    }, C.prototype.triad = function() {
      return this.polyad(3);
    }, C.prototype.tetrad = function() {
      return this.polyad(4);
    }, C.prototype.polyad = function(H) {
      for (var U = this.toHsl(), W = U.h, K = [this], G = 360 / H, X = 1; X < H; X++)
        K.push(new C({ h: (W + X * G) % 360, s: U.s, l: U.l }));
      return K;
    }, C.prototype.equals = function(H) {
      return this.toRgbString() === new C(H).toRgbString();
    }, C;
  }()
), hueStep = 2, saturationStep = 0.16, saturationStep2 = 0.05, brightnessStep1 = 0.05, brightnessStep2 = 0.15, lightColorCount = 5, darkColorCount = 4, darkColorMap = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}];
function toHsv(C) {
  var H = C.r, U = C.g, W = C.b, K = rgbToHsv(H, U, W);
  return {
    h: K.h * 360,
    s: K.s,
    v: K.v
  };
}
function toHex(C) {
  var H = C.r, U = C.g, W = C.b;
  return "#".concat(rgbToHex(H, U, W, !1));
}
function mix(C, H, U) {
  var W = U / 100, K = {
    r: (H.r - C.r) * W + C.r,
    g: (H.g - C.g) * W + C.g,
    b: (H.b - C.b) * W + C.b
  };
  return K;
}
function getHue(C, H, U) {
  var W;
  return Math.round(C.h) >= 60 && Math.round(C.h) <= 240 ? W = U ? Math.round(C.h) - hueStep * H : Math.round(C.h) + hueStep * H : W = U ? Math.round(C.h) + hueStep * H : Math.round(C.h) - hueStep * H, W < 0 ? W += 360 : W >= 360 && (W -= 360), W;
}
function getSaturation(C, H, U) {
  if (C.h === 0 && C.s === 0)
    return C.s;
  var W;
  return U ? W = C.s - saturationStep * H : H === darkColorCount ? W = C.s + saturationStep : W = C.s + saturationStep2 * H, W > 1 && (W = 1), U && H === lightColorCount && W > 0.1 && (W = 0.1), W < 0.06 && (W = 0.06), Number(W.toFixed(2));
}
function getValue$1(C, H, U) {
  var W;
  return U ? W = C.v + brightnessStep1 * H : W = C.v - brightnessStep2 * H, W > 1 && (W = 1), Number(W.toFixed(2));
}
function generate$1(C) {
  for (var H = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, U = [], W = inputToRGB(C), K = lightColorCount; K > 0; K -= 1) {
    var G = toHsv(W), X = toHex(inputToRGB({
      h: getHue(G, K, !0),
      s: getSaturation(G, K, !0),
      v: getValue$1(G, K, !0)
    }));
    U.push(X);
  }
  U.push(toHex(W));
  for (var Z = 1; Z <= darkColorCount; Z += 1) {
    var Q = toHsv(W), ee = toHex(inputToRGB({
      h: getHue(Q, Z),
      s: getSaturation(Q, Z),
      v: getValue$1(Q, Z)
    }));
    U.push(ee);
  }
  return H.theme === "dark" ? darkColorMap.map(function(te) {
    var re = te.index, ne = te.opacity, ae = toHex(mix(inputToRGB(H.backgroundColor || "#141414"), inputToRGB(U[re]), ne * 100));
    return ae;
  }) : U;
}
var presetPrimaryColors = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1890FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
}, presetPalettes = {}, presetDarkPalettes = {};
Object.keys(presetPrimaryColors).forEach(function(C) {
  presetPalettes[C] = generate$1(presetPrimaryColors[C]), presetPalettes[C].primary = presetPalettes[C][5], presetDarkPalettes[C] = generate$1(presetPrimaryColors[C], {
    theme: "dark",
    backgroundColor: "#141414"
  }), presetDarkPalettes[C].primary = presetDarkPalettes[C][5];
});
var blue = presetPalettes.blue;
const genControlHeight = (C) => {
  const {
    controlHeight: H
  } = C;
  return {
    controlHeightSM: H * 0.75,
    controlHeightXS: H * 0.5,
    controlHeightLG: H * 1.25
  };
}, genControlHeight$1 = genControlHeight;
function genSizeMapToken(C) {
  const {
    sizeUnit: H,
    sizeStep: U
  } = C;
  return {
    sizeXXL: H * (U + 8),
    sizeXL: H * (U + 4),
    sizeLG: H * (U + 2),
    sizeMD: H * (U + 1),
    sizeMS: H * U,
    size: H * U,
    sizeSM: H * (U - 1),
    sizeXS: H * (U - 2),
    sizeXXS: H * (U - 3)
    // 4
  };
}
const defaultPresetColors = {
  blue: "#1677ff",
  purple: "#722ED1",
  cyan: "#13C2C2",
  green: "#52C41A",
  magenta: "#EB2F96",
  pink: "#eb2f96",
  red: "#F5222D",
  orange: "#FA8C16",
  yellow: "#FADB14",
  volcano: "#FA541C",
  geekblue: "#2F54EB",
  gold: "#FAAD14",
  lime: "#A0D911"
}, seedToken = _extends(_extends({}, defaultPresetColors), {
  // Color
  colorPrimary: "#1677ff",
  colorSuccess: "#52c41a",
  colorWarning: "#faad14",
  colorError: "#ff4d4f",
  colorInfo: "#1677ff",
  colorTextBase: "",
  colorBgBase: "",
  // Font
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
  fontSize: 14,
  // Line
  lineWidth: 1,
  lineType: "solid",
  // Motion
  motionUnit: 0.1,
  motionBase: 0,
  motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
  motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
  motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
  motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
  motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
  motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
  // Radius
  borderRadius: 6,
  // Size
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,
  // Control Base
  controlHeight: 32,
  // zIndex
  zIndexBase: 0,
  zIndexPopupBase: 1e3,
  // Image
  opacityImage: 1,
  // Wireframe
  wireframe: !1
}), defaultSeedToken = seedToken;
function genColorMapToken(C, H) {
  let {
    generateColorPalettes: U,
    generateNeutralColorPalettes: W
  } = H;
  const {
    colorSuccess: K,
    colorWarning: G,
    colorError: X,
    colorInfo: Z,
    colorPrimary: Q,
    colorBgBase: ee,
    colorTextBase: te
  } = C, re = U(Q), ne = U(K), ae = U(G), oe = U(X), ie = U(Z), se = W(ee, te);
  return _extends(_extends({}, se), {
    colorPrimaryBg: re[1],
    colorPrimaryBgHover: re[2],
    colorPrimaryBorder: re[3],
    colorPrimaryBorderHover: re[4],
    colorPrimaryHover: re[5],
    colorPrimary: re[6],
    colorPrimaryActive: re[7],
    colorPrimaryTextHover: re[8],
    colorPrimaryText: re[9],
    colorPrimaryTextActive: re[10],
    colorSuccessBg: ne[1],
    colorSuccessBgHover: ne[2],
    colorSuccessBorder: ne[3],
    colorSuccessBorderHover: ne[4],
    colorSuccessHover: ne[4],
    colorSuccess: ne[6],
    colorSuccessActive: ne[7],
    colorSuccessTextHover: ne[8],
    colorSuccessText: ne[9],
    colorSuccessTextActive: ne[10],
    colorErrorBg: oe[1],
    colorErrorBgHover: oe[2],
    colorErrorBorder: oe[3],
    colorErrorBorderHover: oe[4],
    colorErrorHover: oe[5],
    colorError: oe[6],
    colorErrorActive: oe[7],
    colorErrorTextHover: oe[8],
    colorErrorText: oe[9],
    colorErrorTextActive: oe[10],
    colorWarningBg: ae[1],
    colorWarningBgHover: ae[2],
    colorWarningBorder: ae[3],
    colorWarningBorderHover: ae[4],
    colorWarningHover: ae[4],
    colorWarning: ae[6],
    colorWarningActive: ae[7],
    colorWarningTextHover: ae[8],
    colorWarningText: ae[9],
    colorWarningTextActive: ae[10],
    colorInfoBg: ie[1],
    colorInfoBgHover: ie[2],
    colorInfoBorder: ie[3],
    colorInfoBorderHover: ie[4],
    colorInfoHover: ie[4],
    colorInfo: ie[6],
    colorInfoActive: ie[7],
    colorInfoTextHover: ie[8],
    colorInfoText: ie[9],
    colorInfoTextActive: ie[10],
    colorBgMask: new TinyColor("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const genRadius = (C) => {
  let H = C, U = C, W = C, K = C;
  return C < 6 && C >= 5 ? H = C + 1 : C < 16 && C >= 6 ? H = C + 2 : C >= 16 && (H = 16), C < 7 && C >= 5 ? U = 4 : C < 8 && C >= 7 ? U = 5 : C < 14 && C >= 8 ? U = 6 : C < 16 && C >= 14 ? U = 7 : C >= 16 && (U = 8), C < 6 && C >= 2 ? W = 1 : C >= 6 && (W = 2), C > 4 && C < 8 ? K = 4 : C >= 8 && (K = 6), {
    borderRadius: C > 16 ? 16 : C,
    borderRadiusXS: W,
    borderRadiusSM: U,
    borderRadiusLG: H,
    borderRadiusOuter: K
  };
}, genRadius$1 = genRadius;
function genCommonMapToken(C) {
  const {
    motionUnit: H,
    motionBase: U,
    borderRadius: W,
    lineWidth: K
  } = C;
  return _extends({
    // motion
    motionDurationFast: `${(U + H).toFixed(1)}s`,
    motionDurationMid: `${(U + H * 2).toFixed(1)}s`,
    motionDurationSlow: `${(U + H * 3).toFixed(1)}s`,
    // line
    lineWidthBold: K + 1
  }, genRadius$1(W));
}
const getAlphaColor$1 = (C, H) => new TinyColor(C).setAlpha(H).toRgbString(), getSolidColor = (C, H) => new TinyColor(C).darken(H).toHexString(), generateColorPalettes = (C) => {
  const H = generate$1(C);
  return {
    1: H[0],
    2: H[1],
    3: H[2],
    4: H[3],
    5: H[4],
    6: H[5],
    7: H[6],
    8: H[4],
    9: H[5],
    10: H[6]
    // 8: colors[7],
    // 9: colors[8],
    // 10: colors[9],
  };
}, generateNeutralColorPalettes = (C, H) => {
  const U = C || "#fff", W = H || "#000";
  return {
    colorBgBase: U,
    colorTextBase: W,
    colorText: getAlphaColor$1(W, 0.88),
    colorTextSecondary: getAlphaColor$1(W, 0.65),
    colorTextTertiary: getAlphaColor$1(W, 0.45),
    colorTextQuaternary: getAlphaColor$1(W, 0.25),
    colorFill: getAlphaColor$1(W, 0.15),
    colorFillSecondary: getAlphaColor$1(W, 0.06),
    colorFillTertiary: getAlphaColor$1(W, 0.04),
    colorFillQuaternary: getAlphaColor$1(W, 0.02),
    colorBgLayout: getSolidColor(U, 4),
    colorBgContainer: getSolidColor(U, 0),
    colorBgElevated: getSolidColor(U, 0),
    colorBgSpotlight: getAlphaColor$1(W, 0.85),
    colorBorder: getSolidColor(U, 15),
    colorBorderSecondary: getSolidColor(U, 6)
  };
};
function getFontSizes(C) {
  const H = new Array(10).fill(null).map((U, W) => {
    const K = W - 1, G = C * Math.pow(2.71828, K / 5), X = W > 1 ? Math.floor(G) : Math.ceil(G);
    return Math.floor(X / 2) * 2;
  });
  return H[1] = C, H.map((U) => {
    const W = U + 8;
    return {
      size: U,
      lineHeight: W / U
    };
  });
}
const genFontMapToken = (C) => {
  const H = getFontSizes(C), U = H.map((K) => K.size), W = H.map((K) => K.lineHeight);
  return {
    fontSizeSM: U[0],
    fontSize: U[1],
    fontSizeLG: U[2],
    fontSizeXL: U[3],
    fontSizeHeading1: U[6],
    fontSizeHeading2: U[5],
    fontSizeHeading3: U[4],
    fontSizeHeading4: U[3],
    fontSizeHeading5: U[2],
    lineHeight: W[1],
    lineHeightLG: W[2],
    lineHeightSM: W[0],
    lineHeightHeading1: W[6],
    lineHeightHeading2: W[5],
    lineHeightHeading3: W[4],
    lineHeightHeading4: W[3],
    lineHeightHeading5: W[2]
  };
}, genFontMapToken$1 = genFontMapToken;
function derivative(C) {
  const H = Object.keys(defaultPresetColors).map((U) => {
    const W = generate$1(C[U]);
    return new Array(10).fill(1).reduce((K, G, X) => (K[`${U}-${X + 1}`] = W[X], K), {});
  }).reduce((U, W) => (U = _extends(_extends({}, U), W), U), {});
  return _extends(_extends(_extends(_extends(_extends(_extends(_extends({}, C), H), genColorMapToken(C, {
    generateColorPalettes,
    generateNeutralColorPalettes
  })), genFontMapToken$1(C.fontSize)), genSizeMapToken(C)), genControlHeight$1(C)), genCommonMapToken(C));
}
function isStableColor(C) {
  return C >= 0 && C <= 255;
}
function getAlphaColor(C, H) {
  const {
    r: U,
    g: W,
    b: K,
    a: G
  } = new TinyColor(C).toRgb();
  if (G < 1)
    return C;
  const {
    r: X,
    g: Z,
    b: Q
  } = new TinyColor(H).toRgb();
  for (let ee = 0.01; ee <= 1; ee += 0.01) {
    const te = Math.round((U - X * (1 - ee)) / ee), re = Math.round((W - Z * (1 - ee)) / ee), ne = Math.round((K - Q * (1 - ee)) / ee);
    if (isStableColor(te) && isStableColor(re) && isStableColor(ne))
      return new TinyColor({
        r: te,
        g: re,
        b: ne,
        a: Math.round(ee * 100) / 100
      }).toRgbString();
  }
  return new TinyColor({
    r: U,
    g: W,
    b: K,
    a: 1
  }).toRgbString();
}
var __rest$7 = function(C, H) {
  var U = {};
  for (var W in C)
    Object.prototype.hasOwnProperty.call(C, W) && H.indexOf(W) < 0 && (U[W] = C[W]);
  if (C != null && typeof Object.getOwnPropertySymbols == "function")
    for (var K = 0, W = Object.getOwnPropertySymbols(C); K < W.length; K++)
      H.indexOf(W[K]) < 0 && Object.prototype.propertyIsEnumerable.call(C, W[K]) && (U[W[K]] = C[W[K]]);
  return U;
};
function formatToken(C) {
  const {
    override: H
  } = C, U = __rest$7(C, ["override"]), W = _extends({}, H);
  Object.keys(defaultSeedToken).forEach((ae) => {
    delete W[ae];
  });
  const K = _extends(_extends({}, U), W), G = 480, X = 576, Z = 768, Q = 992, ee = 1200, te = 1600, re = 2e3;
  return _extends(_extends(_extends({}, K), {
    colorLink: K.colorInfoText,
    colorLinkHover: K.colorInfoHover,
    colorLinkActive: K.colorInfoActive,
    // ============== Background ============== //
    colorFillContent: K.colorFillSecondary,
    colorFillContentHover: K.colorFill,
    colorFillAlter: K.colorFillQuaternary,
    colorBgContainerDisabled: K.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: K.colorBgContainer,
    colorSplit: getAlphaColor(K.colorBorderSecondary, K.colorBgContainer),
    // ============== Text ============== //
    colorTextPlaceholder: K.colorTextQuaternary,
    colorTextDisabled: K.colorTextQuaternary,
    colorTextHeading: K.colorText,
    colorTextLabel: K.colorTextSecondary,
    colorTextDescription: K.colorTextTertiary,
    colorTextLightSolid: K.colorWhite,
    colorHighlight: K.colorError,
    colorBgTextHover: K.colorFillSecondary,
    colorBgTextActive: K.colorFill,
    colorIcon: K.colorTextTertiary,
    colorIconHover: K.colorText,
    colorErrorOutline: getAlphaColor(K.colorErrorBg, K.colorBgContainer),
    colorWarningOutline: getAlphaColor(K.colorWarningBg, K.colorBgContainer),
    // Font
    fontSizeIcon: K.fontSizeSM,
    // Control
    lineWidth: K.lineWidth,
    controlOutlineWidth: K.lineWidth * 2,
    // Checkbox size and expand icon size
    controlInteractiveSize: K.controlHeight / 2,
    controlItemBgHover: K.colorFillTertiary,
    controlItemBgActive: K.colorPrimaryBg,
    controlItemBgActiveHover: K.colorPrimaryBgHover,
    controlItemBgActiveDisabled: K.colorFill,
    controlTmpOutline: K.colorFillQuaternary,
    controlOutline: getAlphaColor(K.colorPrimaryBg, K.colorBgContainer),
    lineType: K.lineType,
    borderRadius: K.borderRadius,
    borderRadiusXS: K.borderRadiusXS,
    borderRadiusSM: K.borderRadiusSM,
    borderRadiusLG: K.borderRadiusLG,
    fontWeightStrong: 600,
    opacityLoading: 0.65,
    linkDecoration: "none",
    linkHoverDecoration: "none",
    linkFocusDecoration: "none",
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    paddingXXS: K.sizeXXS,
    paddingXS: K.sizeXS,
    paddingSM: K.sizeSM,
    padding: K.size,
    paddingMD: K.sizeMD,
    paddingLG: K.sizeLG,
    paddingXL: K.sizeXL,
    paddingContentHorizontalLG: K.sizeLG,
    paddingContentVerticalLG: K.sizeMS,
    paddingContentHorizontal: K.sizeMS,
    paddingContentVertical: K.sizeSM,
    paddingContentHorizontalSM: K.size,
    paddingContentVerticalSM: K.sizeXS,
    marginXXS: K.sizeXXS,
    marginXS: K.sizeXS,
    marginSM: K.sizeSM,
    margin: K.size,
    marginMD: K.sizeMD,
    marginLG: K.sizeLG,
    marginXL: K.sizeXL,
    marginXXL: K.sizeXXL,
    boxShadow: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    screenXS: G,
    screenXSMin: G,
    screenXSMax: X - 1,
    screenSM: X,
    screenSMMin: X,
    screenSMMax: Z - 1,
    screenMD: Z,
    screenMDMin: Z,
    screenMDMax: Q - 1,
    screenLG: Q,
    screenLGMin: Q,
    screenLGMax: ee - 1,
    screenXL: ee,
    screenXLMin: ee,
    screenXLMax: te - 1,
    screenXXL: te,
    screenXXLMin: te,
    screenXXLMax: re - 1,
    screenXXXL: re,
    screenXXXLMin: re,
    // FIXME: component box-shadow, should be removed
    boxShadowPopoverArrow: "3px 3px 7px rgba(0, 0, 0, 0.1)",
    boxShadowCard: `
      0 1px 2px -2px ${new TinyColor("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new TinyColor("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new TinyColor("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
    boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
  }), W);
}
const resetComponent = (C) => ({
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  color: C.colorText,
  fontSize: C.fontSize,
  // font-variant: @font-variant-base;
  lineHeight: C.lineHeight,
  listStyle: "none",
  // font-feature-settings: @font-feature-settings-base;
  fontFamily: C.fontFamily
}), resetIcon = () => ({
  display: "inline-flex",
  alignItems: "center",
  color: "inherit",
  fontStyle: "normal",
  lineHeight: 0,
  textAlign: "center",
  textTransform: "none",
  // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
  verticalAlign: "-0.125em",
  textRendering: "optimizeLegibility",
  "-webkit-font-smoothing": "antialiased",
  "-moz-osx-font-smoothing": "grayscale",
  "> *": {
    lineHeight: 1
  },
  svg: {
    display: "inline-block"
  }
}), clearFix = () => ({
  // https://github.com/ant-design/ant-design/issues/21301#issuecomment-583955229
  "&::before": {
    display: "table",
    content: '""'
  },
  "&::after": {
    // https://github.com/ant-design/ant-design/issues/21864
    display: "table",
    clear: "both",
    content: '""'
  }
}), genLinkStyle = (C) => ({
  a: {
    color: C.colorLink,
    textDecoration: C.linkDecoration,
    backgroundColor: "transparent",
    outline: "none",
    cursor: "pointer",
    transition: `color ${C.motionDurationSlow}`,
    "-webkit-text-decoration-skip": "objects",
    "&:hover": {
      color: C.colorLinkHover
    },
    "&:active": {
      color: C.colorLinkActive
    },
    "&:active,\n  &:hover": {
      textDecoration: C.linkHoverDecoration,
      outline: 0
    },
    // https://github.com/ant-design/ant-design/issues/22503
    "&:focus": {
      textDecoration: C.linkFocusDecoration,
      outline: 0
    },
    "&[disabled]": {
      color: C.colorTextDisabled,
      cursor: "not-allowed"
    }
  }
}), genCommonStyle = (C, H) => {
  const {
    fontFamily: U,
    fontSize: W
  } = C, K = `[class^="${H}"], [class*=" ${H}"]`;
  return {
    [K]: {
      fontFamily: U,
      fontSize: W,
      boxSizing: "border-box",
      "&::before, &::after": {
        boxSizing: "border-box"
      },
      [K]: {
        boxSizing: "border-box",
        "&::before, &::after": {
          boxSizing: "border-box"
        }
      }
    }
  };
}, genFocusOutline = (C) => ({
  outline: `${C.lineWidthBold}px solid ${C.colorPrimaryBorder}`,
  outlineOffset: 1,
  transition: "outline-offset 0s, outline 0s"
}), genFocusStyle = (C) => ({
  "&:focus-visible": _extends({}, genFocusOutline(C))
});
function genComponentStyleHook(C, H, U) {
  return (W) => {
    const K = computed(() => W == null ? void 0 : W.value), [G, X, Z] = useToken(), {
      getPrefixCls: Q,
      iconPrefixCls: ee
    } = useConfigContextInject(), te = computed(() => Q()), re = computed(() => ({
      theme: G.value,
      token: X.value,
      hashId: Z.value,
      path: ["Shared", te.value]
    }));
    useStyleRegister(re, () => [{
      // Link
      "&": genLinkStyle(X.value)
    }]);
    const ne = computed(() => ({
      theme: G.value,
      token: X.value,
      hashId: Z.value,
      path: [C, K.value, ee.value]
    }));
    return [useStyleRegister(ne, () => {
      const {
        token: ae,
        flush: oe
      } = statisticToken(X.value), ie = typeof U == "function" ? U(ae) : U, se = _extends(_extends({}, ie), X.value[C]), ue = `.${K.value}`, le = merge$1(ae, {
        componentCls: ue,
        prefixCls: K.value,
        iconCls: `.${ee.value}`,
        antCls: `.${te.value}`
      }, se), ce = H(le, {
        hashId: Z.value,
        prefixCls: K.value,
        rootPrefixCls: te.value,
        iconPrefixCls: ee.value,
        overrideComponentToken: X.value[C]
      });
      return oe(C, se), [genCommonStyle(X.value, K.value), ce];
    }), Z];
  };
}
const enableStatistic = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u";
let recording = !0;
function merge$1() {
  for (var C = arguments.length, H = new Array(C), U = 0; U < C; U++)
    H[U] = arguments[U];
  if (!enableStatistic)
    return _extends({}, ...H);
  recording = !1;
  const W = {};
  return H.forEach((K) => {
    Object.keys(K).forEach((X) => {
      Object.defineProperty(W, X, {
        configurable: !0,
        enumerable: !0,
        get: () => K[X]
      });
    });
  }), recording = !0, W;
}
function noop() {
}
function statisticToken(C) {
  let H, U = C, W = noop;
  return enableStatistic && (H = /* @__PURE__ */ new Set(), U = new Proxy(C, {
    get(K, G) {
      return recording && H.add(G), K[G];
    }
  }), W = (K, G) => {
    Array.from(H);
  }), {
    token: U,
    keys: H,
    flush: W
  };
}
function toReactive(C) {
  if (!isRef(C))
    return reactive(C);
  const H = new Proxy({}, {
    get(U, W, K) {
      return Reflect.get(C.value, W, K);
    },
    set(U, W, K) {
      return C.value[W] = K, !0;
    },
    deleteProperty(U, W) {
      return Reflect.deleteProperty(C.value, W);
    },
    has(U, W) {
      return Reflect.has(C.value, W);
    },
    ownKeys() {
      return Object.keys(C.value);
    },
    getOwnPropertyDescriptor() {
      return {
        enumerable: !0,
        configurable: !0
      };
    }
  });
  return reactive(H);
}
const defaultTheme = createTheme(derivative), defaultConfig = {
  token: defaultSeedToken,
  hashed: !0
}, DesignTokenContextKey = Symbol("DesignTokenContext"), globalDesignTokenApi = ref(), useDesignTokenProvider = (C) => {
  provide(DesignTokenContextKey, C), watchEffect(() => {
    globalDesignTokenApi.value = C;
  });
}, DesignTokenProvider = defineComponent({
  props: {
    value: objectType()
  },
  setup(C, H) {
    let {
      slots: U
    } = H;
    return useDesignTokenProvider(toReactive(computed(() => C.value))), () => {
      var W;
      return (W = U.default) === null || W === void 0 ? void 0 : W.call(U);
    };
  }
});
function useToken() {
  const C = inject(DesignTokenContextKey, globalDesignTokenApi.value || defaultConfig), H = computed(() => `${version$1}-${C.hashed || ""}`), U = computed(() => C.theme || defaultTheme), W = useCacheToken(U, computed(() => [defaultSeedToken, C.token]), computed(() => ({
    salt: H.value,
    override: _extends({
      override: C.token
    }, C.components),
    formatToken
  })));
  return [U, computed(() => W.value[0]), computed(() => C.hashed ? W.value[1] : "")];
}
const Empty$2 = defineComponent({
  compatConfig: {
    MODE: 3
  },
  setup() {
    const [, C] = useToken(), H = computed(() => new TinyColor(C.value.colorBgBase).toHsl().l < 0.5 ? {
      opacity: 0.65
    } : {});
    return () => createVNode("svg", {
      style: H.value,
      width: "184",
      height: "152",
      viewBox: "0 0 184 152",
      xmlns: "http://www.w3.org/2000/svg"
    }, [createVNode("g", {
      fill: "none",
      "fill-rule": "evenodd"
    }, [createVNode("g", {
      transform: "translate(24 31.67)"
    }, [createVNode("ellipse", {
      "fill-opacity": ".8",
      fill: "#F5F5F7",
      cx: "67.797",
      cy: "106.89",
      rx: "67.797",
      ry: "12.668"
    }, null), createVNode("path", {
      d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z",
      fill: "#AEB8C2"
    }, null), createVNode("path", {
      d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
      fill: "url(#linearGradient-1)",
      transform: "translate(13.56)"
    }, null), createVNode("path", {
      d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z",
      fill: "#F5F5F7"
    }, null), createVNode("path", {
      d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z",
      fill: "#DCE0E6"
    }, null)]), createVNode("path", {
      d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z",
      fill: "#DCE0E6"
    }, null), createVNode("g", {
      transform: "translate(149.65 15.383)",
      fill: "#FFF"
    }, [createVNode("ellipse", {
      cx: "20.654",
      cy: "3.167",
      rx: "2.849",
      ry: "2.815"
    }, null), createVNode("path", {
      d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
    }, null)])])]);
  }
});
Empty$2.PRESENTED_IMAGE_DEFAULT = !0;
const DefaultEmptyImg = Empty$2, Simple = defineComponent({
  compatConfig: {
    MODE: 3
  },
  setup() {
    const [, C] = useToken(), H = computed(() => {
      const {
        colorFill: U,
        colorFillTertiary: W,
        colorFillQuaternary: K,
        colorBgContainer: G
      } = C.value;
      return {
        borderColor: new TinyColor(U).onBackground(G).toHexString(),
        shadowColor: new TinyColor(W).onBackground(G).toHexString(),
        contentColor: new TinyColor(K).onBackground(G).toHexString()
      };
    });
    return () => createVNode("svg", {
      width: "64",
      height: "41",
      viewBox: "0 0 64 41",
      xmlns: "http://www.w3.org/2000/svg"
    }, [createVNode("g", {
      transform: "translate(0 1)",
      fill: "none",
      "fill-rule": "evenodd"
    }, [createVNode("ellipse", {
      fill: H.value.shadowColor,
      cx: "32",
      cy: "33",
      rx: "32",
      ry: "7"
    }, null), createVNode("g", {
      "fill-rule": "nonzero",
      stroke: H.value.borderColor
    }, [createVNode("path", {
      d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
    }, null), createVNode("path", {
      d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
      fill: H.value.contentColor
    }, null)])])]);
  }
});
Simple.PRESENTED_IMAGE_SIMPLE = !0;
const SimpleEmptyImg = Simple, genSharedEmptyStyle = (C) => {
  const {
    componentCls: H,
    margin: U,
    marginXS: W,
    marginXL: K,
    fontSize: G,
    lineHeight: X
  } = C;
  return {
    [H]: {
      marginInline: W,
      fontSize: G,
      lineHeight: X,
      textAlign: "center",
      // 原来 &-image 没有父子结构，现在为了外层承担我们的hashId，改成父子结果
      [`${H}-image`]: {
        height: C.emptyImgHeight,
        marginBottom: W,
        opacity: C.opacityImage,
        img: {
          height: "100%"
        },
        svg: {
          height: "100%",
          margin: "auto"
        }
      },
      // 原来 &-footer 没有父子结构，现在为了外层承担我们的hashId，改成父子结果
      [`${H}-footer`]: {
        marginTop: U
      },
      "&-normal": {
        marginBlock: K,
        color: C.colorTextDisabled,
        [`${H}-image`]: {
          height: C.emptyImgHeightMD
        }
      },
      "&-small": {
        marginBlock: W,
        color: C.colorTextDisabled,
        [`${H}-image`]: {
          height: C.emptyImgHeightSM
        }
      }
    }
  };
}, useStyle$8 = genComponentStyleHook("Empty", (C) => {
  const {
    componentCls: H,
    controlHeightLG: U
  } = C, W = merge$1(C, {
    emptyImgCls: `${H}-img`,
    emptyImgHeight: U * 2.5,
    emptyImgHeightMD: U,
    emptyImgHeightSM: U * 0.875
  });
  return [genSharedEmptyStyle(W)];
});
var __rest$6 = function(C, H) {
  var U = {};
  for (var W in C)
    Object.prototype.hasOwnProperty.call(C, W) && H.indexOf(W) < 0 && (U[W] = C[W]);
  if (C != null && typeof Object.getOwnPropertySymbols == "function")
    for (var K = 0, W = Object.getOwnPropertySymbols(C); K < W.length; K++)
      H.indexOf(W[K]) < 0 && Object.prototype.propertyIsEnumerable.call(C, W[K]) && (U[W[K]] = C[W[K]]);
  return U;
};
const defaultEmptyImg = createVNode(DefaultEmptyImg, null, null), simpleEmptyImg = createVNode(SimpleEmptyImg, null, null), emptyProps = () => ({
  prefixCls: String,
  imageStyle: objectType(),
  image: anyType(),
  description: anyType()
}), Empty = defineComponent({
  name: "AEmpty",
  compatConfig: {
    MODE: 3
  },
  inheritAttrs: !1,
  props: emptyProps(),
  setup(C, H) {
    let {
      slots: U = {},
      attrs: W
    } = H;
    const {
      direction: K,
      prefixCls: G
    } = useConfigInject("empty", C), [X, Z] = useStyle$8(G);
    return () => {
      var Q, ee;
      const te = G.value, re = _extends(_extends({}, C), W), {
        image: ne = ((Q = U.image) === null || Q === void 0 ? void 0 : Q.call(U)) || defaultEmptyImg,
        description: ae = ((ee = U.description) === null || ee === void 0 ? void 0 : ee.call(U)) || void 0,
        imageStyle: oe,
        class: ie = ""
      } = re, se = __rest$6(re, ["image", "description", "imageStyle", "class"]);
      return X(createVNode(LocaleReceiver, {
        componentName: "Empty",
        children: (ue) => {
          const le = typeof ae < "u" ? ae : ue.description, ce = typeof le == "string" ? le : "empty";
          let fe = null;
          return typeof ne == "string" ? fe = createVNode("img", {
            alt: ce,
            src: ne
          }, null) : fe = ne, createVNode("div", _objectSpread2({
            class: classNames(te, ie, Z.value, {
              [`${te}-normal`]: ne === simpleEmptyImg,
              [`${te}-rtl`]: K.value === "rtl"
            })
          }, se), [createVNode("div", {
            class: `${te}-image`,
            style: oe
          }, [fe]), le && createVNode("p", {
            class: `${te}-description`
          }, [le]), U.default && createVNode("div", {
            class: `${te}-footer`
          }, [filterEmpty(U.default())])]);
        }
      }, null));
    };
  }
});
Empty.PRESENTED_IMAGE_DEFAULT = defaultEmptyImg;
Empty.PRESENTED_IMAGE_SIMPLE = simpleEmptyImg;
const Empty$1 = withInstall(Empty), DefaultRenderEmpty = (C) => {
  const {
    prefixCls: H
  } = useConfigInject("empty", C);
  return ((W) => {
    switch (W) {
      case "Table":
      case "List":
        return createVNode(Empty$1, {
          image: Empty$1.PRESENTED_IMAGE_SIMPLE
        }, null);
      case "Select":
      case "TreeSelect":
      case "Cascader":
      case "Transfer":
      case "Mentions":
        return createVNode(Empty$1, {
          image: Empty$1.PRESENTED_IMAGE_SIMPLE,
          class: `${H.value}-small`
        }, null);
      default:
        return createVNode(Empty$1, null, null);
    }
  })(C.componentName);
};
function renderEmpty(C) {
  return createVNode(DefaultRenderEmpty, {
    componentName: C
  }, null);
}
const SizeContextKey = Symbol("SizeContextKey"), useInjectSize = () => inject(SizeContextKey, ref(void 0)), useProviderSize = (C) => {
  const H = useInjectSize();
  return provide(SizeContextKey, computed(() => C.value || H.value)), C;
}, useConfigInject = (C, H) => {
  const U = useInjectSize(), W = useInjectDisabled(), K = inject(configProviderKey, _extends(_extends({}, defaultConfigProvider), {
    renderEmpty: (de) => h$1(DefaultRenderEmpty, {
      componentName: de
    })
  })), G = computed(() => K.getPrefixCls(C, H.prefixCls)), X = computed(() => {
    var de, ge;
    return (de = H.direction) !== null && de !== void 0 ? de : (ge = K.direction) === null || ge === void 0 ? void 0 : ge.value;
  }), Z = computed(() => {
    var de;
    return (de = H.iconPrefixCls) !== null && de !== void 0 ? de : K.iconPrefixCls.value;
  }), Q = computed(() => K.getPrefixCls()), ee = computed(() => {
    var de;
    return (de = K.autoInsertSpaceInButton) === null || de === void 0 ? void 0 : de.value;
  }), te = K.renderEmpty, re = K.space, ne = K.pageHeader, ae = K.form, oe = computed(() => {
    var de, ge;
    return (de = H.getTargetContainer) !== null && de !== void 0 ? de : (ge = K.getTargetContainer) === null || ge === void 0 ? void 0 : ge.value;
  }), ie = computed(() => {
    var de, ge, ve;
    return (ge = (de = H.getContainer) !== null && de !== void 0 ? de : H.getPopupContainer) !== null && ge !== void 0 ? ge : (ve = K.getPopupContainer) === null || ve === void 0 ? void 0 : ve.value;
  }), se = computed(() => {
    var de, ge;
    return (de = H.dropdownMatchSelectWidth) !== null && de !== void 0 ? de : (ge = K.dropdownMatchSelectWidth) === null || ge === void 0 ? void 0 : ge.value;
  }), ue = computed(() => {
    var de;
    return (H.virtual === void 0 ? ((de = K.virtual) === null || de === void 0 ? void 0 : de.value) !== !1 : H.virtual !== !1) && se.value !== !1;
  }), le = computed(() => H.size || U.value), ce = computed(() => {
    var de, ge, ve;
    return (de = H.autocomplete) !== null && de !== void 0 ? de : (ve = (ge = K.input) === null || ge === void 0 ? void 0 : ge.value) === null || ve === void 0 ? void 0 : ve.autocomplete;
  }), fe = computed(() => {
    var de;
    return (de = H.disabled) !== null && de !== void 0 ? de : W.value;
  }), pe = computed(() => {
    var de;
    return (de = H.csp) !== null && de !== void 0 ? de : K.csp;
  }), he = computed(() => {
    var de;
    return (de = H.wave) !== null && de !== void 0 ? de : K.wave.value;
  });
  return {
    configProvider: K,
    prefixCls: G,
    direction: X,
    size: le,
    getTargetContainer: oe,
    getPopupContainer: ie,
    space: re,
    pageHeader: ne,
    form: ae,
    autoInsertSpaceInButton: ee,
    renderEmpty: te,
    virtual: ue,
    dropdownMatchSelectWidth: se,
    rootPrefixCls: Q,
    getPrefixCls: K.getPrefixCls,
    autocomplete: ce,
    csp: pe,
    iconPrefixCls: Z,
    disabled: fe,
    select: K.select,
    wave: he
  };
};
function omit(C, H) {
  const U = _extends({}, C);
  for (let W = 0; W < H.length; W += 1) {
    const K = H[W];
    delete U[K];
  }
  return U;
}
function e(C, H) {
  for (var U = 0; U < H.length; U++) {
    var W = H[U];
    W.enumerable = W.enumerable || !1, W.configurable = !0, "value" in W && (W.writable = !0), Object.defineProperty(C, W.key, W);
  }
}
function t$1(C, H, U) {
  return H && e(C.prototype, H), U && e(C, U), C;
}
function n() {
  return (n = Object.assign || function(C) {
    for (var H = 1; H < arguments.length; H++) {
      var U = arguments[H];
      for (var W in U)
        Object.prototype.hasOwnProperty.call(U, W) && (C[W] = U[W]);
    }
    return C;
  }).apply(this, arguments);
}
function r(C, H) {
  C.prototype = Object.create(H.prototype), C.prototype.constructor = C, C.__proto__ = H;
}
function i(C, H) {
  if (C == null)
    return {};
  var U, W, K = {}, G = Object.keys(C);
  for (W = 0; W < G.length; W++)
    H.indexOf(U = G[W]) >= 0 || (K[U] = C[U]);
  return K;
}
function o(C) {
  return ((H = C) != null && typeof H == "object" && Array.isArray(H) === !1) == 1 && Object.prototype.toString.call(C) === "[object Object]";
  var H;
}
var u = Object.prototype, a = u.toString, f = u.hasOwnProperty, c = /^\s*function (\w+)/;
function l(C) {
  var H, U = (H = C == null ? void 0 : C.type) !== null && H !== void 0 ? H : C;
  if (U) {
    var W = U.toString().match(c);
    return W ? W[1] : "";
  }
  return "";
}
var s = function(C) {
  var H, U;
  return o(C) !== !1 && typeof (H = C.constructor) == "function" && o(U = H.prototype) !== !1 && U.hasOwnProperty("isPrototypeOf") !== !1;
}, v = function(C) {
  return C;
}, y = v;
if (process.env.NODE_ENV !== "production") {
  var p = typeof console < "u";
  y = p ? function(C) {
    console.warn("[VueTypes warn]: " + C);
  } : v;
}
var d = function(C, H) {
  return f.call(C, H);
}, h = Number.isInteger || function(C) {
  return typeof C == "number" && isFinite(C) && Math.floor(C) === C;
}, b = Array.isArray || function(C) {
  return a.call(C) === "[object Array]";
}, O = function(C) {
  return a.call(C) === "[object Function]";
}, g = function(C) {
  return s(C) && d(C, "_vueTypes_name");
}, m = function(C) {
  return s(C) && (d(C, "type") || ["_vueTypes_name", "validator", "default", "required"].some(function(H) {
    return d(C, H);
  }));
};
function j(C, H) {
  return Object.defineProperty(C.bind(H), "__original", { value: C });
}
function _(C, H, U) {
  var W;
  U === void 0 && (U = !1);
  var K = !0, G = "";
  W = s(C) ? C : { type: C };
  var X = g(W) ? W._vueTypes_name + " - " : "";
  if (m(W) && W.type !== null) {
    if (W.type === void 0 || W.type === !0 || !W.required && H === void 0)
      return K;
    b(W.type) ? (K = W.type.some(function(re) {
      return _(re, H, !0) === !0;
    }), G = W.type.map(function(re) {
      return l(re);
    }).join(" or ")) : K = (G = l(W)) === "Array" ? b(H) : G === "Object" ? s(H) : G === "String" || G === "Number" || G === "Boolean" || G === "Function" ? function(re) {
      if (re == null)
        return "";
      var ne = re.constructor.toString().match(c);
      return ne ? ne[1] : "";
    }(H) === G : H instanceof W.type;
  }
  if (!K) {
    var Z = X + 'value "' + H + '" should be of type "' + G + '"';
    return U === !1 ? (y(Z), !1) : Z;
  }
  if (d(W, "validator") && O(W.validator)) {
    var Q = y, ee = [];
    if (y = function(re) {
      ee.push(re);
    }, K = W.validator(H), y = Q, !K) {
      var te = (ee.length > 1 ? "* " : "") + ee.join(`
* `);
      return ee.length = 0, U === !1 ? (y(te), K) : te;
    }
  }
  return K;
}
function T(C, H) {
  var U = Object.defineProperties(H, { _vueTypes_name: { value: C, writable: !0 }, isRequired: { get: function() {
    return this.required = !0, this;
  } }, def: { value: function(K) {
    return K !== void 0 || this.default ? O(K) || _(this, K, !0) === !0 ? (this.default = b(K) ? function() {
      return [].concat(K);
    } : s(K) ? function() {
      return Object.assign({}, K);
    } : K, this) : (y(this._vueTypes_name + ' - invalid default value: "' + K + '"'), this) : this;
  } } }), W = U.validator;
  return O(W) && (U.validator = j(W, U)), U;
}
function w(C, H) {
  var U = T(C, H);
  return Object.defineProperty(U, "validate", { value: function(W) {
    return O(this.validator) && y(this._vueTypes_name + ` - calling .validate() will overwrite the current custom validator function. Validator info:
` + JSON.stringify(this)), this.validator = j(W, this), this;
  } });
}
function k(C, H, U) {
  var W, K, G = (W = H, K = {}, Object.getOwnPropertyNames(W).forEach(function(re) {
    K[re] = Object.getOwnPropertyDescriptor(W, re);
  }), Object.defineProperties({}, K));
  if (G._vueTypes_name = C, !s(U))
    return G;
  var X, Z, Q = U.validator, ee = i(U, ["validator"]);
  if (O(Q)) {
    var te = G.validator;
    te && (te = (Z = (X = te).__original) !== null && Z !== void 0 ? Z : X), G.validator = j(te ? function(re) {
      return te.call(this, re) && Q.call(this, re);
    } : Q, G);
  }
  return Object.assign(G, ee);
}
function P(C) {
  return C.replace(/^(?!\s*$)/gm, "  ");
}
var x = function() {
  return w("any", {});
}, A = function() {
  return w("function", { type: Function });
}, E = function() {
  return w("boolean", { type: Boolean });
}, N = function() {
  return w("string", { type: String });
}, q = function() {
  return w("number", { type: Number });
}, S = function() {
  return w("array", { type: Array });
}, V = function() {
  return w("object", { type: Object });
}, F = function() {
  return T("integer", { type: Number, validator: function(C) {
    return h(C);
  } });
}, D = function() {
  return T("symbol", { validator: function(C) {
    return typeof C == "symbol";
  } });
};
function L(C, H) {
  if (H === void 0 && (H = "custom validation failed"), typeof C != "function")
    throw new TypeError("[VueTypes error]: You must provide a function as argument");
  return T(C.name || "<<anonymous function>>", { validator: function(U) {
    var W = C(U);
    return W || y(this._vueTypes_name + " - " + H), W;
  } });
}
function Y(C) {
  if (!b(C))
    throw new TypeError("[VueTypes error]: You must provide an array as argument.");
  var H = 'oneOf - value should be one of "' + C.join('", "') + '".', U = C.reduce(function(W, K) {
    if (K != null) {
      var G = K.constructor;
      W.indexOf(G) === -1 && W.push(G);
    }
    return W;
  }, []);
  return T("oneOf", { type: U.length > 0 ? U : void 0, validator: function(W) {
    var K = C.indexOf(W) !== -1;
    return K || y(H), K;
  } });
}
function B(C) {
  if (!b(C))
    throw new TypeError("[VueTypes error]: You must provide an array as argument");
  for (var H = !1, U = [], W = 0; W < C.length; W += 1) {
    var K = C[W];
    if (m(K)) {
      if (g(K) && K._vueTypes_name === "oneOf") {
        U = U.concat(K.type);
        continue;
      }
      if (O(K.validator) && (H = !0), K.type !== !0 && K.type) {
        U = U.concat(K.type);
        continue;
      }
    }
    U.push(K);
  }
  return U = U.filter(function(G, X) {
    return U.indexOf(G) === X;
  }), T("oneOfType", H ? { type: U, validator: function(G) {
    var X = [], Z = C.some(function(Q) {
      var ee = _(g(Q) && Q._vueTypes_name === "oneOf" ? Q.type || null : Q, G, !0);
      return typeof ee == "string" && X.push(ee), ee === !0;
    });
    return Z || y("oneOfType - provided value does not match any of the " + X.length + ` passed-in validators:
` + P(X.join(`
`))), Z;
  } } : { type: U });
}
function I(C) {
  return T("arrayOf", { type: Array, validator: function(H) {
    var U, W = H.every(function(K) {
      return (U = _(C, K, !0)) === !0;
    });
    return W || y(`arrayOf - value validation error:
` + P(U)), W;
  } });
}
function J(C) {
  return T("instanceOf", { type: C });
}
function M(C) {
  return T("objectOf", { type: Object, validator: function(H) {
    var U, W = Object.keys(H).every(function(K) {
      return (U = _(C, H[K], !0)) === !0;
    });
    return W || y(`objectOf - value validation error:
` + P(U)), W;
  } });
}
function R(C) {
  var H = Object.keys(C), U = H.filter(function(K) {
    var G;
    return !!(!((G = C[K]) === null || G === void 0) && G.required);
  }), W = T("shape", { type: Object, validator: function(K) {
    var G = this;
    if (!s(K))
      return !1;
    var X = Object.keys(K);
    if (U.length > 0 && U.some(function(Q) {
      return X.indexOf(Q) === -1;
    })) {
      var Z = U.filter(function(Q) {
        return X.indexOf(Q) === -1;
      });
      return y(Z.length === 1 ? 'shape - required property "' + Z[0] + '" is not defined.' : 'shape - required properties "' + Z.join('", "') + '" are not defined.'), !1;
    }
    return X.every(function(Q) {
      if (H.indexOf(Q) === -1)
        return G._vueTypes_isLoose === !0 || (y('shape - shape definition does not include a "' + Q + '" property. Allowed keys: "' + H.join('", "') + '".'), !1);
      var ee = _(C[Q], K[Q], !0);
      return typeof ee == "string" && y('shape - "' + Q + `" property validation error:
 ` + P(ee)), ee === !0;
    });
  } });
  return Object.defineProperty(W, "_vueTypes_isLoose", { writable: !0, value: !1 }), Object.defineProperty(W, "loose", { get: function() {
    return this._vueTypes_isLoose = !0, this;
  } }), W;
}
var $ = function() {
  function C() {
  }
  return C.extend = function(H) {
    var U = this;
    if (b(H))
      return H.forEach(function(re) {
        return U.extend(re);
      }), this;
    var W = H.name, K = H.validate, G = K !== void 0 && K, X = H.getter, Z = X !== void 0 && X, Q = i(H, ["name", "validate", "getter"]);
    if (d(this, W))
      throw new TypeError('[VueTypes error]: Type "' + W + '" already defined');
    var ee, te = Q.type;
    return g(te) ? (delete Q.type, Object.defineProperty(this, W, Z ? { get: function() {
      return k(W, te, Q);
    } } : { value: function() {
      var re, ne = k(W, te, Q);
      return ne.validator && (ne.validator = (re = ne.validator).bind.apply(re, [ne].concat([].slice.call(arguments)))), ne;
    } })) : (ee = Z ? { get: function() {
      var re = Object.assign({}, Q);
      return G ? w(W, re) : T(W, re);
    }, enumerable: !0 } : { value: function() {
      var re, ne, ae = Object.assign({}, Q);
      return re = G ? w(W, ae) : T(W, ae), ae.validator && (re.validator = (ne = ae.validator).bind.apply(ne, [re].concat([].slice.call(arguments)))), re;
    }, enumerable: !0 }, Object.defineProperty(this, W, ee));
  }, t$1(C, null, [{ key: "any", get: function() {
    return x();
  } }, { key: "func", get: function() {
    return A().def(this.defaults.func);
  } }, { key: "bool", get: function() {
    return E().def(this.defaults.bool);
  } }, { key: "string", get: function() {
    return N().def(this.defaults.string);
  } }, { key: "number", get: function() {
    return q().def(this.defaults.number);
  } }, { key: "array", get: function() {
    return S().def(this.defaults.array);
  } }, { key: "object", get: function() {
    return V().def(this.defaults.object);
  } }, { key: "integer", get: function() {
    return F().def(this.defaults.integer);
  } }, { key: "symbol", get: function() {
    return D();
  } }]), C;
}();
function z$1(C) {
  var H;
  return C === void 0 && (C = { func: function() {
  }, bool: !0, string: "", number: 0, array: function() {
    return [];
  }, object: function() {
    return {};
  }, integer: 0 }), (H = function(U) {
    function W() {
      return U.apply(this, arguments) || this;
    }
    return r(W, U), t$1(W, null, [{ key: "sensibleDefaults", get: function() {
      return n({}, this.defaults);
    }, set: function(K) {
      this.defaults = K !== !1 ? n({}, K !== !0 ? K : C) : {};
    } }]), W;
  }($)).defaults = n({}, C), H;
}
$.defaults = {}, $.custom = L, $.oneOf = Y, $.instanceOf = J, $.oneOfType = B, $.arrayOf = I, $.objectOf = M, $.shape = R, $.utils = { validate: function(C, H) {
  return _(H, C, !0) === !0;
}, toType: function(C, H, U) {
  return U === void 0 && (U = !1), U ? w(C, H) : T(C, H);
} };
(function(C) {
  function H() {
    return C.apply(this, arguments) || this;
  }
  return r(H, C), H;
})(z$1());
const PropTypes = z$1({
  func: void 0,
  bool: void 0,
  string: void 0,
  number: void 0,
  array: void 0,
  object: void 0,
  integer: void 0
});
PropTypes.extend([{
  name: "looseBool",
  getter: !0,
  type: Boolean,
  default: void 0
}, {
  name: "style",
  getter: !0,
  type: [String, Object],
  default: void 0
}, {
  name: "VueNode",
  getter: !0,
  type: null
}]);
const PropTypes$1 = PropTypes, devWarning = (C, H, U) => {
  warningOnce(C, `[ant-design-vue: ${H}] ${U}`);
};
function getMotion$1(C) {
  let {
    prefixCls: H,
    animation: U,
    transitionName: W
  } = C;
  return U ? {
    name: `${H}-${U}`
  } : W ? {
    name: W
  } : {};
}
const isVisible = (C) => {
  if (!C)
    return !1;
  if (C.offsetParent)
    return !0;
  if (C.getBBox) {
    const H = C.getBBox();
    if (H.width || H.height)
      return !0;
  }
  if (C.getBoundingClientRect) {
    const H = C.getBoundingClientRect();
    if (H.width || H.height)
      return !0;
  }
  return !1;
};
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
const freeGlobal$1 = freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self, root = freeGlobal$1 || freeSelf || Function("return this")();
const root$1 = root;
var Symbol$1 = root$1.Symbol;
const Symbol$2 = Symbol$1;
var objectProto$6 = Object.prototype, hasOwnProperty$4 = objectProto$6.hasOwnProperty, nativeObjectToString$1 = objectProto$6.toString, symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;
function getRawTag(C) {
  var H = hasOwnProperty$4.call(C, symToStringTag$1), U = C[symToStringTag$1];
  try {
    C[symToStringTag$1] = void 0;
    var W = !0;
  } catch {
  }
  var K = nativeObjectToString$1.call(C);
  return W && (H ? C[symToStringTag$1] = U : delete C[symToStringTag$1]), K;
}
var objectProto$5 = Object.prototype, nativeObjectToString = objectProto$5.toString;
function objectToString$1(C) {
  return nativeObjectToString.call(C);
}
var nullTag = "[object Null]", undefinedTag = "[object Undefined]", symToStringTag = Symbol$2 ? Symbol$2.toStringTag : void 0;
function baseGetTag(C) {
  return C == null ? C === void 0 ? undefinedTag : nullTag : symToStringTag && symToStringTag in Object(C) ? getRawTag(C) : objectToString$1(C);
}
function isObject$1(C) {
  var H = typeof C;
  return C != null && (H == "object" || H == "function");
}
var asyncTag = "[object AsyncFunction]", funcTag$1 = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction$1(C) {
  if (!isObject$1(C))
    return !1;
  var H = baseGetTag(C);
  return H == funcTag$1 || H == genTag || H == asyncTag || H == proxyTag;
}
var coreJsData = root$1["__core-js_shared__"];
const coreJsData$1 = coreJsData;
var maskSrcKey = function() {
  var C = /[^.]+$/.exec(coreJsData$1 && coreJsData$1.keys && coreJsData$1.keys.IE_PROTO || "");
  return C ? "Symbol(src)_1." + C : "";
}();
function isMasked(C) {
  return !!maskSrcKey && maskSrcKey in C;
}
var funcProto$1 = Function.prototype, funcToString$1 = funcProto$1.toString;
function toSource(C) {
  if (C != null) {
    try {
      return funcToString$1.call(C);
    } catch {
    }
    try {
      return C + "";
    } catch {
    }
  }
  return "";
}
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reIsHostCtor = /^\[object .+?Constructor\]$/, funcProto = Function.prototype, objectProto$4 = Object.prototype, funcToString = funcProto.toString, hasOwnProperty$3 = objectProto$4.hasOwnProperty, reIsNative = RegExp(
  "^" + funcToString.call(hasOwnProperty$3).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function baseIsNative(C) {
  if (!isObject$1(C) || isMasked(C))
    return !1;
  var H = isFunction$1(C) ? reIsNative : reIsHostCtor;
  return H.test(toSource(C));
}
function getValue(C, H) {
  return C == null ? void 0 : C[H];
}
function getNative(C, H) {
  var U = getValue(C, H);
  return baseIsNative(U) ? U : void 0;
}
var Map$1 = getNative(root$1, "Map");
const Map$2 = Map$1;
var isArray$5 = Array.isArray;
const isArray$6 = isArray$5;
function isObjectLike(C) {
  return C != null && typeof C == "object";
}
var argsTag$1 = "[object Arguments]";
function baseIsArguments(C) {
  return isObjectLike(C) && baseGetTag(C) == argsTag$1;
}
var objectProto$3 = Object.prototype, hasOwnProperty$2 = objectProto$3.hasOwnProperty, propertyIsEnumerable = objectProto$3.propertyIsEnumerable, isArguments = baseIsArguments(/* @__PURE__ */ function() {
  return arguments;
}()) ? baseIsArguments : function(C) {
  return isObjectLike(C) && hasOwnProperty$2.call(C, "callee") && !propertyIsEnumerable.call(C, "callee");
};
const isArguments$1 = isArguments;
function stubFalse() {
  return !1;
}
var freeExports$1 = typeof exports == "object" && exports && !exports.nodeType && exports, freeModule$1 = freeExports$1 && typeof module == "object" && module && !module.nodeType && module, moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1, Buffer$1 = moduleExports$1 ? root$1.Buffer : void 0, nativeIsBuffer = Buffer$1 ? Buffer$1.isBuffer : void 0, isBuffer$1 = nativeIsBuffer || stubFalse;
const isBuffer$2 = isBuffer$1;
var MAX_SAFE_INTEGER = 9007199254740991;
function isLength(C) {
  return typeof C == "number" && C > -1 && C % 1 == 0 && C <= MAX_SAFE_INTEGER;
}
var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", mapTag$2 = "[object Map]", numberTag = "[object Number]", objectTag$1 = "[object Object]", regexpTag = "[object RegExp]", setTag$2 = "[object Set]", stringTag = "[object String]", weakMapTag$1 = "[object WeakMap]", arrayBufferTag = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]", typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = !0;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag$1] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag$2] = typedArrayTags[numberTag] = typedArrayTags[objectTag$1] = typedArrayTags[regexpTag] = typedArrayTags[setTag$2] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag$1] = !1;
function baseIsTypedArray(C) {
  return isObjectLike(C) && isLength(C.length) && !!typedArrayTags[baseGetTag(C)];
}
function baseUnary(C) {
  return function(H) {
    return C(H);
  };
}
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports, freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module, moduleExports = freeModule && freeModule.exports === freeExports, freeProcess = moduleExports && freeGlobal$1.process, nodeUtil = function() {
  try {
    var C = freeModule && freeModule.require && freeModule.require("util").types;
    return C || freeProcess && freeProcess.binding && freeProcess.binding("util");
  } catch {
  }
}();
const nodeUtil$1 = nodeUtil;
var nodeIsTypedArray = nodeUtil$1 && nodeUtil$1.isTypedArray, isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
const isTypedArray$1 = isTypedArray;
var objectProto$2 = Object.prototype;
function isPrototype(C) {
  var H = C && C.constructor, U = typeof H == "function" && H.prototype || objectProto$2;
  return C === U;
}
function overArg(C, H) {
  return function(U) {
    return C(H(U));
  };
}
var nativeKeys = overArg(Object.keys, Object);
const nativeKeys$1 = nativeKeys;
var objectProto$1 = Object.prototype, hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function baseKeys(C) {
  if (!isPrototype(C))
    return nativeKeys$1(C);
  var H = [];
  for (var U in Object(C))
    hasOwnProperty$1.call(C, U) && U != "constructor" && H.push(U);
  return H;
}
function isArrayLike(C) {
  return C != null && isLength(C.length) && !isFunction$1(C);
}
var DataView$1 = getNative(root$1, "DataView");
const DataView$2 = DataView$1;
var Promise$1 = getNative(root$1, "Promise");
const Promise$2 = Promise$1;
var Set$1 = getNative(root$1, "Set");
const Set$2 = Set$1;
var WeakMap$1 = getNative(root$1, "WeakMap");
const WeakMap$2 = WeakMap$1;
var mapTag$1 = "[object Map]", objectTag = "[object Object]", promiseTag = "[object Promise]", setTag$1 = "[object Set]", weakMapTag = "[object WeakMap]", dataViewTag = "[object DataView]", dataViewCtorString = toSource(DataView$2), mapCtorString = toSource(Map$2), promiseCtorString = toSource(Promise$2), setCtorString = toSource(Set$2), weakMapCtorString = toSource(WeakMap$2), getTag = baseGetTag;
(DataView$2 && getTag(new DataView$2(new ArrayBuffer(1))) != dataViewTag || Map$2 && getTag(new Map$2()) != mapTag$1 || Promise$2 && getTag(Promise$2.resolve()) != promiseTag || Set$2 && getTag(new Set$2()) != setTag$1 || WeakMap$2 && getTag(new WeakMap$2()) != weakMapTag) && (getTag = function(C) {
  var H = baseGetTag(C), U = H == objectTag ? C.constructor : void 0, W = U ? toSource(U) : "";
  if (W)
    switch (W) {
      case dataViewCtorString:
        return dataViewTag;
      case mapCtorString:
        return mapTag$1;
      case promiseCtorString:
        return promiseTag;
      case setCtorString:
        return setTag$1;
      case weakMapCtorString:
        return weakMapTag;
    }
  return H;
});
const getTag$1 = getTag;
tuple("bottomLeft", "bottomRight", "topLeft", "topRight");
const getTransitionProps = function(C) {
  let H = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return _extends(C ? {
    name: C,
    appear: !0,
    // type: 'animation',
    // appearFromClass: `${transitionName}-appear ${transitionName}-appear-prepare`,
    // appearActiveClass: `antdv-base-transtion`,
    // appearToClass: `${transitionName}-appear ${transitionName}-appear-active`,
    enterFromClass: `${C}-enter ${C}-enter-prepare ${C}-enter-start`,
    enterActiveClass: `${C}-enter ${C}-enter-prepare`,
    enterToClass: `${C}-enter ${C}-enter-active`,
    leaveFromClass: ` ${C}-leave`,
    leaveActiveClass: `${C}-leave ${C}-leave-active`,
    leaveToClass: `${C}-leave ${C}-leave-active`
  } : {
    css: !1
  }, H);
}, getTransitionGroupProps = function(C) {
  let H = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return _extends(C ? {
    name: C,
    appear: !0,
    // appearFromClass: `${transitionName}-appear ${transitionName}-appear-prepare`,
    appearActiveClass: `${C}`,
    appearToClass: `${C}-appear ${C}-appear-active`,
    enterFromClass: `${C}-appear ${C}-enter ${C}-appear-prepare ${C}-enter-prepare`,
    enterActiveClass: `${C}`,
    enterToClass: `${C}-enter ${C}-appear ${C}-appear-active ${C}-enter-active`,
    leaveActiveClass: `${C} ${C}-leave`,
    leaveToClass: `${C}-leave-active`
  } : {
    css: !1
  }, H);
}, getTransitionName = (C, H, U) => U !== void 0 ? U : `${C}-${H}`, PortalContextKey = Symbol("PortalContextKey"), useProvidePortal = function(C) {
  let H = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    inTriggerContext: !0
  };
  provide(PortalContextKey, {
    inTriggerContext: H.inTriggerContext,
    shouldRender: computed(() => {
      const {
        sPopupVisible: U,
        popupRef: W,
        forceRender: K,
        autoDestroy: G
      } = C || {};
      let X = !1;
      return (U || W || K) && (X = !0), !U && G && (X = !1), X;
    })
  });
}, useInjectPortal = () => {
  useProvidePortal({}, {
    inTriggerContext: !1
  });
  const C = inject(PortalContextKey, {
    shouldRender: computed(() => !1),
    inTriggerContext: !1
  });
  return {
    shouldRender: computed(() => C.shouldRender.value || C.inTriggerContext === !1)
  };
}, Portal$1 = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "Portal",
  inheritAttrs: !1,
  props: {
    getContainer: PropTypes$1.func.isRequired,
    didUpdate: Function
  },
  setup(C, H) {
    let {
      slots: U
    } = H, W = !0, K;
    const {
      shouldRender: G
    } = useInjectPortal();
    function X() {
      G.value && (K = C.getContainer());
    }
    onBeforeMount(() => {
      W = !1, X();
    }), onMounted(() => {
      K || X();
    });
    const Z = watch(G, () => {
      G.value && !K && (K = C.getContainer()), K && Z();
    });
    return onUpdated(() => {
      nextTick(() => {
        var Q;
        G.value && ((Q = C.didUpdate) === null || Q === void 0 || Q.call(C, C));
      });
    }), () => {
      var Q;
      return G.value ? W ? (Q = U.default) === null || Q === void 0 ? void 0 : Q.call(U) : K ? createVNode(Teleport, {
        to: K
      }, U) : null : null;
    };
  }
});
let cached;
function getScrollBarSize(C) {
  if (typeof document > "u")
    return 0;
  if (C || cached === void 0) {
    const H = document.createElement("div");
    H.style.width = "100%", H.style.height = "200px";
    const U = document.createElement("div"), W = U.style;
    W.position = "absolute", W.top = "0", W.left = "0", W.pointerEvents = "none", W.visibility = "hidden", W.width = "200px", W.height = "150px", W.overflow = "hidden", U.appendChild(H), document.body.appendChild(U);
    const K = H.offsetWidth;
    U.style.overflow = "scroll";
    let G = H.offsetWidth;
    K === G && (G = U.clientWidth), document.body.removeChild(U), cached = K - G;
  }
  return cached;
}
const UNIQUE_ID = `vc-util-locker-${Date.now()}`;
let uuid$3 = 0;
function isBodyOverflowing() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
function useScrollLocker(C) {
  const H = computed(() => !!C && !!C.value);
  uuid$3 += 1;
  const U = `${UNIQUE_ID}_${uuid$3}`;
  watchEffect((W) => {
    if (canUseDom$1()) {
      if (H.value) {
        const K = getScrollBarSize(), G = isBodyOverflowing();
        updateCSS$1(`
html body {
  overflow-y: hidden;
  ${G ? `width: calc(100% - ${K}px);` : ""}
}`, U);
      } else
        removeCSS(U);
      W(() => {
        removeCSS(U);
      });
    }
  }, {
    flush: "post"
  });
}
let openCount = 0;
const supportDom = canUseDom$1(), getParent = (C) => {
  if (!supportDom)
    return null;
  if (C) {
    if (typeof C == "string")
      return document.querySelectorAll(C)[0];
    if (typeof C == "function")
      return C();
    if (typeof C == "object" && C instanceof window.HTMLElement)
      return C;
  }
  return document.body;
}, Portal = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "PortalWrapper",
  inheritAttrs: !1,
  props: {
    wrapperClassName: String,
    forceRender: {
      type: Boolean,
      default: void 0
    },
    getContainer: PropTypes$1.any,
    visible: {
      type: Boolean,
      default: void 0
    },
    autoLock: booleanType(),
    didUpdate: Function
  },
  setup(C, H) {
    let {
      slots: U
    } = H;
    const W = shallowRef(), K = shallowRef(), G = shallowRef(), X = canUseDom$1() && document.createElement("div"), Z = () => {
      var ae, oe;
      W.value === X && ((oe = (ae = W.value) === null || ae === void 0 ? void 0 : ae.parentNode) === null || oe === void 0 || oe.removeChild(W.value)), W.value = null;
    };
    let Q = null;
    const ee = function() {
      return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1) || W.value && !W.value.parentNode ? (Q = getParent(C.getContainer), Q ? (Q.appendChild(W.value), !0) : !1) : !0;
    }, te = () => supportDom ? (W.value || (W.value = X, ee(!0)), re(), W.value) : null, re = () => {
      const {
        wrapperClassName: ae
      } = C;
      W.value && ae && ae !== W.value.className && (W.value.className = ae);
    };
    onUpdated(() => {
      re(), ee();
    });
    const ne = getCurrentInstance();
    return useScrollLocker(computed(() => C.autoLock && C.visible && canUseDom$1() && (W.value === document.body || W.value === X))), onMounted(() => {
      let ae = !1;
      watch([() => C.visible, () => C.getContainer], (oe, ie) => {
        let [se, ue] = oe, [le, ce] = ie;
        supportDom && (Q = getParent(C.getContainer), Q === document.body && (se && !le ? openCount += 1 : ae && (openCount -= 1))), ae && (typeof ue == "function" && typeof ce == "function" ? ue.toString() !== ce.toString() : ue !== ce) && Z(), ae = !0;
      }, {
        immediate: !0,
        flush: "post"
      }), nextTick(() => {
        ee() || (G.value = wrapperRaf(() => {
          ne.update();
        }));
      });
    }), onBeforeUnmount(() => {
      const {
        visible: ae
      } = C;
      supportDom && Q === document.body && (openCount = ae && openCount ? openCount - 1 : openCount), Z(), wrapperRaf.cancel(G.value);
    }), () => {
      const {
        forceRender: ae,
        visible: oe
      } = C;
      let ie = null;
      const se = {
        getOpenCount: () => openCount,
        getContainer: te
      };
      return (ae || oe || K.value) && (ie = createVNode(Portal$1, {
        getContainer: te,
        ref: K,
        didUpdate: C.didUpdate
      }, {
        default: () => {
          var ue;
          return (ue = U.default) === null || ue === void 0 ? void 0 : ue.call(U, se);
        }
      })), ie;
    };
  }
}), KeyCode = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,
  /**
   * BACKSPACE
   */
  BACKSPACE: 8,
  /**
   * TAB
   */
  TAB: 9,
  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * SHIFT
   */
  SHIFT: 16,
  /**
   * CTRL
   */
  CTRL: 17,
  /**
   * ALT
   */
  ALT: 18,
  /**
   * PAUSE
   */
  PAUSE: 19,
  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,
  /**
   * ESC
   */
  ESC: 27,
  /**
   * SPACE
   */
  SPACE: 32,
  /**
   * PAGE_UP
   */
  PAGE_UP: 33,
  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,
  /**
   * END
   */
  END: 35,
  /**
   * HOME
   */
  HOME: 36,
  /**
   * LEFT
   */
  LEFT: 37,
  /**
   * UP
   */
  UP: 38,
  /**
   * RIGHT
   */
  RIGHT: 39,
  /**
   * DOWN
   */
  DOWN: 40,
  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,
  /**
   * INSERT
   */
  INSERT: 45,
  /**
   * DELETE
   */
  DELETE: 46,
  /**
   * ZERO
   */
  ZERO: 48,
  /**
   * ONE
   */
  ONE: 49,
  /**
   * TWO
   */
  TWO: 50,
  /**
   * THREE
   */
  THREE: 51,
  /**
   * FOUR
   */
  FOUR: 52,
  /**
   * FIVE
   */
  FIVE: 53,
  /**
   * SIX
   */
  SIX: 54,
  /**
   * SEVEN
   */
  SEVEN: 55,
  /**
   * EIGHT
   */
  EIGHT: 56,
  /**
   * NINE
   */
  NINE: 57,
  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,
  /**
   * A
   */
  A: 65,
  /**
   * B
   */
  B: 66,
  /**
   * C
   */
  C: 67,
  /**
   * D
   */
  D: 68,
  /**
   * E
   */
  E: 69,
  /**
   * F
   */
  F: 70,
  /**
   * G
   */
  G: 71,
  /**
   * H
   */
  H: 72,
  /**
   * I
   */
  I: 73,
  /**
   * J
   */
  J: 74,
  /**
   * K
   */
  K: 75,
  /**
   * L
   */
  L: 76,
  /**
   * M
   */
  M: 77,
  /**
   * N
   */
  N: 78,
  /**
   * O
   */
  O: 79,
  /**
   * P
   */
  P: 80,
  /**
   * Q
   */
  Q: 81,
  /**
   * R
   */
  R: 82,
  /**
   * S
   */
  S: 83,
  /**
   * T
   */
  T: 84,
  /**
   * U
   */
  U: 85,
  /**
   * V
   */
  V: 86,
  /**
   * W
   */
  W: 87,
  /**
   * X
   */
  X: 88,
  /**
   * Y
   */
  Y: 89,
  /**
   * Z
   */
  Z: 90,
  /**
   * META
   */
  META: 91,
  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,
  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,
  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,
  /**
   * NUM_ONE
   */
  NUM_ONE: 97,
  /**
   * NUM_TWO
   */
  NUM_TWO: 98,
  /**
   * NUM_THREE
   */
  NUM_THREE: 99,
  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,
  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,
  /**
   * NUM_SIX
   */
  NUM_SIX: 102,
  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,
  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,
  /**
   * NUM_NINE
   */
  NUM_NINE: 105,
  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,
  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,
  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,
  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,
  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,
  /**
   * F1
   */
  F1: 112,
  /**
   * F2
   */
  F2: 113,
  /**
   * F3
   */
  F3: 114,
  /**
   * F4
   */
  F4: 115,
  /**
   * F5
   */
  F5: 116,
  /**
   * F6
   */
  F6: 117,
  /**
   * F7
   */
  F7: 118,
  /**
   * F8
   */
  F8: 119,
  /**
   * F9
   */
  F9: 120,
  /**
   * F10
   */
  F10: 121,
  /**
   * F11
   */
  F11: 122,
  /**
   * F12
   */
  F12: 123,
  /**
   * NUMLOCK
   */
  NUMLOCK: 144,
  /**
   * SEMICOLON
   */
  SEMICOLON: 186,
  /**
   * DASH
   */
  DASH: 189,
  /**
   * EQUALS
   */
  EQUALS: 187,
  /**
   * COMMA
   */
  COMMA: 188,
  /**
   * PERIOD
   */
  PERIOD: 190,
  /**
   * SLASH
   */
  SLASH: 191,
  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,
  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,
  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,
  /**
   * BACKSLASH
   */
  BACKSLASH: 220,
  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,
  /**
   * WIN_KEY
   */
  WIN_KEY: 224,
  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,
  /**
   * WIN_IME
   */
  WIN_IME: 229,
  // ======================== Function ========================
  /**
   * whether text and modified key is entered at the same time.
   */
  isTextModifyingKeyEvent: function(H) {
    const {
      keyCode: U
    } = H;
    if (H.altKey && !H.ctrlKey || H.metaKey || // Function keys don't generate text
    U >= KeyCode.F1 && U <= KeyCode.F12)
      return !1;
    switch (U) {
      case KeyCode.ALT:
      case KeyCode.CAPS_LOCK:
      case KeyCode.CONTEXT_MENU:
      case KeyCode.CTRL:
      case KeyCode.DOWN:
      case KeyCode.END:
      case KeyCode.ESC:
      case KeyCode.HOME:
      case KeyCode.INSERT:
      case KeyCode.LEFT:
      case KeyCode.MAC_FF_META:
      case KeyCode.META:
      case KeyCode.NUMLOCK:
      case KeyCode.NUM_CENTER:
      case KeyCode.PAGE_DOWN:
      case KeyCode.PAGE_UP:
      case KeyCode.PAUSE:
      case KeyCode.PRINT_SCREEN:
      case KeyCode.RIGHT:
      case KeyCode.SHIFT:
      case KeyCode.UP:
      case KeyCode.WIN_KEY:
      case KeyCode.WIN_KEY_RIGHT:
        return !1;
      default:
        return !0;
    }
  },
  /**
   * whether character is entered.
   */
  isCharacterKey: function(H) {
    if (H >= KeyCode.ZERO && H <= KeyCode.NINE || H >= KeyCode.NUM_ZERO && H <= KeyCode.NUM_MULTIPLY || H >= KeyCode.A && H <= KeyCode.Z || window.navigator.userAgent.indexOf("WebKit") !== -1 && H === 0)
      return !0;
    switch (H) {
      case KeyCode.SPACE:
      case KeyCode.QUESTION_MARK:
      case KeyCode.NUM_PLUS:
      case KeyCode.NUM_MINUS:
      case KeyCode.NUM_PERIOD:
      case KeyCode.NUM_DIVISION:
      case KeyCode.SEMICOLON:
      case KeyCode.DASH:
      case KeyCode.EQUALS:
      case KeyCode.COMMA:
      case KeyCode.PERIOD:
      case KeyCode.SLASH:
      case KeyCode.APOSTROPHE:
      case KeyCode.SINGLE_QUOTE:
      case KeyCode.OPEN_SQUARE_BRACKET:
      case KeyCode.BACKSLASH:
      case KeyCode.CLOSE_SQUARE_BRACKET:
        return !0;
      default:
        return !1;
    }
  }
}, KeyCode$1 = KeyCode, attributes = `accept acceptcharset accesskey action allowfullscreen allowtransparency
alt async autocomplete autofocus autoplay capture cellpadding cellspacing challenge
charset checked classid classname colspan cols content contenteditable contextmenu
controls coords crossorigin data datetime default defer dir disabled download draggable
enctype form formaction formenctype formmethod formnovalidate formtarget frameborder
headers height hidden high href hreflang htmlfor for httpequiv icon id inputmode integrity
is keyparams keytype kind label lang list loop low manifest marginheight marginwidth max maxlength media
mediagroup method min minlength multiple muted name novalidate nonce open
optimum pattern placeholder poster preload radiogroup readonly rel required
reversed role rowspan rows sandbox scope scoped scrolling seamless selected
shape size sizes span spellcheck src srcdoc srclang srcset start step style
summary tabindex target title type usemap value width wmode wrap`, eventsName = `onCopy onCut onPaste onCompositionend onCompositionstart onCompositionupdate onKeydown
    onKeypress onKeyup onFocus onBlur onChange onInput onSubmit onClick onContextmenu onDoubleclick onDblclick
    onDrag onDragend onDragenter onDragexit onDragleave onDragover onDragstart onDrop onMousedown
    onMouseenter onMouseleave onMousemove onMouseout onMouseover onMouseup onSelect onTouchcancel
    onTouchend onTouchmove onTouchstart onTouchstartPassive onTouchmovePassive onScroll onWheel onAbort onCanplay onCanplaythrough
    onDurationchange onEmptied onEncrypted onEnded onError onLoadeddata onLoadedmetadata
    onLoadstart onPause onPlay onPlaying onProgress onRatechange onSeeked onSeeking onStalled onSuspend onTimeupdate onVolumechange onWaiting onLoad onError`, propList = `${attributes} ${eventsName}`.split(/[\s\n]+/), ariaPrefix = "aria-", dataPrefix = "data-";
function match(C, H) {
  return C.indexOf(H) === 0;
}
function pickAttrs(C) {
  let H = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, U;
  H === !1 ? U = {
    aria: !0,
    data: !0,
    attr: !0
  } : H === !0 ? U = {
    aria: !0
  } : U = _extends({}, H);
  const W = {};
  return Object.keys(C).forEach((K) => {
    // Aria
    (U.aria && (K === "role" || match(K, ariaPrefix)) || // Data
    U.data && match(K, dataPrefix) || // Attr
    U.attr && (propList.includes(K) || propList.includes(K.toLowerCase()))) && (W[K] = C[K]);
  }), W;
}
function useState(C) {
  const H = typeof C == "function" ? C() : C, U = ref(H);
  function W(K) {
    U.value = K;
  }
  return [U, W];
}
var contextKey = Symbol("iconContext"), useInjectIconContext = function() {
  return inject(contextKey, {
    prefixCls: ref("anticon"),
    rootClassName: ref(""),
    csp: ref()
  });
};
function canUseDom() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function contains(C, H) {
  return C && C.contains ? C.contains(H) : !1;
}
var APPEND_ORDER = "data-vc-order", MARK_KEY = "vc-icon-key", containerCache = /* @__PURE__ */ new Map();
function getMark() {
  var C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, H = C.mark;
  return H ? H.startsWith("data-") ? H : "data-".concat(H) : MARK_KEY;
}
function getContainer$1(C) {
  if (C.attachTo)
    return C.attachTo;
  var H = document.querySelector("head");
  return H || document.body;
}
function getOrder(C) {
  return C === "queue" ? "prependQueue" : C ? "prepend" : "append";
}
function findStyles(C) {
  return Array.from((containerCache.get(C) || C).children).filter(function(H) {
    return H.tagName === "STYLE";
  });
}
function injectCSS(C) {
  var H = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!canUseDom())
    return null;
  var U = H.csp, W = H.prepend, K = document.createElement("style");
  K.setAttribute(APPEND_ORDER, getOrder(W)), U && U.nonce && (K.nonce = U.nonce), K.innerHTML = C;
  var G = getContainer$1(H), X = G.firstChild;
  if (W) {
    if (W === "queue") {
      var Z = findStyles(G).filter(function(Q) {
        return ["prepend", "prependQueue"].includes(Q.getAttribute(APPEND_ORDER));
      });
      if (Z.length)
        return G.insertBefore(K, Z[Z.length - 1].nextSibling), K;
    }
    G.insertBefore(K, X);
  } else
    G.appendChild(K);
  return K;
}
function findExistNode(C) {
  var H = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, U = getContainer$1(H);
  return findStyles(U).find(function(W) {
    return W.getAttribute(getMark(H)) === C;
  });
}
function syncRealContainer(C, H) {
  var U = containerCache.get(C);
  if (!U || !contains(document, U)) {
    var W = injectCSS("", H), K = W.parentNode;
    containerCache.set(C, K), C.removeChild(W);
  }
}
function updateCSS(C, H) {
  var U = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, W = getContainer$1(U);
  syncRealContainer(W, U);
  var K = findExistNode(H, U);
  if (K)
    return U.csp && U.csp.nonce && K.nonce !== U.csp.nonce && (K.nonce = U.csp.nonce), K.innerHTML !== C && (K.innerHTML = C), K;
  var G = injectCSS(C, U);
  return G.setAttribute(getMark(U), H), G;
}
function _objectSpread$c(C) {
  for (var H = 1; H < arguments.length; H++) {
    var U = arguments[H] != null ? Object(arguments[H]) : {}, W = Object.keys(U);
    typeof Object.getOwnPropertySymbols == "function" && (W = W.concat(Object.getOwnPropertySymbols(U).filter(function(K) {
      return Object.getOwnPropertyDescriptor(U, K).enumerable;
    }))), W.forEach(function(K) {
      _defineProperty$c(C, K, U[K]);
    });
  }
  return C;
}
function _defineProperty$c(C, H, U) {
  return H in C ? Object.defineProperty(C, H, { value: U, enumerable: !0, configurable: !0, writable: !0 }) : C[H] = U, C;
}
function warn$1(C, H) {
  process.env.NODE_ENV !== "production" && !C && console !== void 0 && console.error("Warning: ".concat(H));
}
function warning(C, H) {
  warn$1(C, "[@ant-design/icons-vue] ".concat(H));
}
function isIconDefinition(C) {
  return typeof C == "object" && typeof C.name == "string" && typeof C.theme == "string" && (typeof C.icon == "object" || typeof C.icon == "function");
}
function generate(C, H, U) {
  return U ? h$1(C.tag, _objectSpread$c({
    key: H
  }, U, C.attrs), (C.children || []).map(function(W, K) {
    return generate(W, "".concat(H, "-").concat(C.tag, "-").concat(K));
  })) : h$1(C.tag, _objectSpread$c({
    key: H
  }, C.attrs), (C.children || []).map(function(W, K) {
    return generate(W, "".concat(H, "-").concat(C.tag, "-").concat(K));
  }));
}
function getSecondaryColor(C) {
  return generate$1(C)[0];
}
function normalizeTwoToneColors(C) {
  return C ? Array.isArray(C) ? C : [C] : [];
}
var iconStyles = `
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`;
function getRoot(C) {
  return C && C.getRootNode && C.getRootNode();
}
function inShadow(C) {
  return canUseDom() ? getRoot(C) instanceof ShadowRoot : !1;
}
function getShadowRoot(C) {
  return inShadow(C) ? getRoot(C) : null;
}
var useInsertStyles = function() {
  var H = useInjectIconContext(), U = H.prefixCls, W = H.csp, K = getCurrentInstance(), G = iconStyles;
  U && (G = G.replace(/anticon/g, U.value)), nextTick(function() {
    if (canUseDom()) {
      var X = K.vnode.el, Z = getShadowRoot(X);
      updateCSS(G, "@ant-design-vue-icons", {
        prepend: !0,
        csp: W.value,
        attachTo: Z
      });
    }
  });
}, _excluded$1 = ["icon", "primaryColor", "secondaryColor"];
function _objectWithoutProperties$1(C, H) {
  if (C == null)
    return {};
  var U = _objectWithoutPropertiesLoose$1(C, H), W, K;
  if (Object.getOwnPropertySymbols) {
    var G = Object.getOwnPropertySymbols(C);
    for (K = 0; K < G.length; K++)
      W = G[K], !(H.indexOf(W) >= 0) && Object.prototype.propertyIsEnumerable.call(C, W) && (U[W] = C[W]);
  }
  return U;
}
function _objectWithoutPropertiesLoose$1(C, H) {
  if (C == null)
    return {};
  var U = {}, W = Object.keys(C), K, G;
  for (G = 0; G < W.length; G++)
    K = W[G], !(H.indexOf(K) >= 0) && (U[K] = C[K]);
  return U;
}
function _objectSpread$b(C) {
  for (var H = 1; H < arguments.length; H++) {
    var U = arguments[H] != null ? Object(arguments[H]) : {}, W = Object.keys(U);
    typeof Object.getOwnPropertySymbols == "function" && (W = W.concat(Object.getOwnPropertySymbols(U).filter(function(K) {
      return Object.getOwnPropertyDescriptor(U, K).enumerable;
    }))), W.forEach(function(K) {
      _defineProperty$b(C, K, U[K]);
    });
  }
  return C;
}
function _defineProperty$b(C, H, U) {
  return H in C ? Object.defineProperty(C, H, { value: U, enumerable: !0, configurable: !0, writable: !0 }) : C[H] = U, C;
}
var twoToneColorPalette = reactive({
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
});
function setTwoToneColors(C) {
  var H = C.primaryColor, U = C.secondaryColor;
  twoToneColorPalette.primaryColor = H, twoToneColorPalette.secondaryColor = U || getSecondaryColor(H), twoToneColorPalette.calculated = !!U;
}
function getTwoToneColors() {
  return _objectSpread$b({}, twoToneColorPalette);
}
var IconBase = function(H, U) {
  var W = _objectSpread$b({}, H, U.attrs), K = W.icon, G = W.primaryColor, X = W.secondaryColor, Z = _objectWithoutProperties$1(W, _excluded$1), Q = twoToneColorPalette;
  if (G && (Q = {
    primaryColor: G,
    secondaryColor: X || getSecondaryColor(G)
  }), warning(isIconDefinition(K), "icon should be icon definiton, but got ".concat(K)), !isIconDefinition(K))
    return null;
  var ee = K;
  return ee && typeof ee.icon == "function" && (ee = _objectSpread$b({}, ee, {
    icon: ee.icon(Q.primaryColor, Q.secondaryColor)
  })), generate(ee.icon, "svg-".concat(ee.name), _objectSpread$b({}, Z, {
    "data-icon": ee.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }));
};
IconBase.props = {
  icon: Object,
  primaryColor: String,
  secondaryColor: String,
  focusable: String
};
IconBase.inheritAttrs = !1;
IconBase.displayName = "IconBase";
IconBase.getTwoToneColors = getTwoToneColors;
IconBase.setTwoToneColors = setTwoToneColors;
const VueIcon = IconBase;
function _slicedToArray$1(C, H) {
  return _arrayWithHoles$1(C) || _iterableToArrayLimit$1(C, H) || _unsupportedIterableToArray$1(C, H) || _nonIterableRest$1();
}
function _nonIterableRest$1() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _unsupportedIterableToArray$1(C, H) {
  if (C) {
    if (typeof C == "string")
      return _arrayLikeToArray$1(C, H);
    var U = Object.prototype.toString.call(C).slice(8, -1);
    if (U === "Object" && C.constructor && (U = C.constructor.name), U === "Map" || U === "Set")
      return Array.from(C);
    if (U === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(U))
      return _arrayLikeToArray$1(C, H);
  }
}
function _arrayLikeToArray$1(C, H) {
  (H == null || H > C.length) && (H = C.length);
  for (var U = 0, W = new Array(H); U < H; U++)
    W[U] = C[U];
  return W;
}
function _iterableToArrayLimit$1(C, H) {
  var U = C == null ? null : typeof Symbol < "u" && C[Symbol.iterator] || C["@@iterator"];
  if (U != null) {
    var W = [], K = !0, G = !1, X, Z;
    try {
      for (U = U.call(C); !(K = (X = U.next()).done) && (W.push(X.value), !(H && W.length === H)); K = !0)
        ;
    } catch (Q) {
      G = !0, Z = Q;
    } finally {
      try {
        !K && U.return != null && U.return();
      } finally {
        if (G)
          throw Z;
      }
    }
    return W;
  }
}
function _arrayWithHoles$1(C) {
  if (Array.isArray(C))
    return C;
}
function setTwoToneColor(C) {
  var H = normalizeTwoToneColors(C), U = _slicedToArray$1(H, 2), W = U[0], K = U[1];
  return VueIcon.setTwoToneColors({
    primaryColor: W,
    secondaryColor: K
  });
}
function getTwoToneColor() {
  var C = VueIcon.getTwoToneColors();
  return C.calculated ? [C.primaryColor, C.secondaryColor] : C.primaryColor;
}
var InsertStyles = defineComponent({
  name: "InsertStyles",
  setup: function() {
    return useInsertStyles(), function() {
      return null;
    };
  }
}), _excluded = ["class", "icon", "spin", "rotate", "tabindex", "twoToneColor", "onClick"];
function _slicedToArray(C, H) {
  return _arrayWithHoles(C) || _iterableToArrayLimit(C, H) || _unsupportedIterableToArray(C, H) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _unsupportedIterableToArray(C, H) {
  if (C) {
    if (typeof C == "string")
      return _arrayLikeToArray(C, H);
    var U = Object.prototype.toString.call(C).slice(8, -1);
    if (U === "Object" && C.constructor && (U = C.constructor.name), U === "Map" || U === "Set")
      return Array.from(C);
    if (U === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(U))
      return _arrayLikeToArray(C, H);
  }
}
function _arrayLikeToArray(C, H) {
  (H == null || H > C.length) && (H = C.length);
  for (var U = 0, W = new Array(H); U < H; U++)
    W[U] = C[U];
  return W;
}
function _iterableToArrayLimit(C, H) {
  var U = C == null ? null : typeof Symbol < "u" && C[Symbol.iterator] || C["@@iterator"];
  if (U != null) {
    var W = [], K = !0, G = !1, X, Z;
    try {
      for (U = U.call(C); !(K = (X = U.next()).done) && (W.push(X.value), !(H && W.length === H)); K = !0)
        ;
    } catch (Q) {
      G = !0, Z = Q;
    } finally {
      try {
        !K && U.return != null && U.return();
      } finally {
        if (G)
          throw Z;
      }
    }
    return W;
  }
}
function _arrayWithHoles(C) {
  if (Array.isArray(C))
    return C;
}
function _objectSpread$a(C) {
  for (var H = 1; H < arguments.length; H++) {
    var U = arguments[H] != null ? Object(arguments[H]) : {}, W = Object.keys(U);
    typeof Object.getOwnPropertySymbols == "function" && (W = W.concat(Object.getOwnPropertySymbols(U).filter(function(K) {
      return Object.getOwnPropertyDescriptor(U, K).enumerable;
    }))), W.forEach(function(K) {
      _defineProperty$a(C, K, U[K]);
    });
  }
  return C;
}
function _defineProperty$a(C, H, U) {
  return H in C ? Object.defineProperty(C, H, { value: U, enumerable: !0, configurable: !0, writable: !0 }) : C[H] = U, C;
}
function _objectWithoutProperties(C, H) {
  if (C == null)
    return {};
  var U = _objectWithoutPropertiesLoose(C, H), W, K;
  if (Object.getOwnPropertySymbols) {
    var G = Object.getOwnPropertySymbols(C);
    for (K = 0; K < G.length; K++)
      W = G[K], !(H.indexOf(W) >= 0) && Object.prototype.propertyIsEnumerable.call(C, W) && (U[W] = C[W]);
  }
  return U;
}
function _objectWithoutPropertiesLoose(C, H) {
  if (C == null)
    return {};
  var U = {}, W = Object.keys(C), K, G;
  for (G = 0; G < W.length; G++)
    K = W[G], !(H.indexOf(K) >= 0) && (U[K] = C[K]);
  return U;
}
setTwoToneColor(blue.primary);
var Icon = function(H, U) {
  var W, K = _objectSpread$a({}, H, U.attrs), G = K.class, X = K.icon, Z = K.spin, Q = K.rotate, ee = K.tabindex, te = K.twoToneColor, re = K.onClick, ne = _objectWithoutProperties(K, _excluded), ae = useInjectIconContext(), oe = ae.prefixCls, ie = ae.rootClassName, se = (W = {}, _defineProperty$a(W, ie.value, !!ie.value), _defineProperty$a(W, oe.value, !0), _defineProperty$a(W, "".concat(oe.value, "-").concat(X.name), !!X.name), _defineProperty$a(W, "".concat(oe.value, "-spin"), !!Z || X.name === "loading"), W), ue = ee;
  ue === void 0 && re && (ue = -1);
  var le = Q ? {
    msTransform: "rotate(".concat(Q, "deg)"),
    transform: "rotate(".concat(Q, "deg)")
  } : void 0, ce = normalizeTwoToneColors(te), fe = _slicedToArray(ce, 2), pe = fe[0], he = fe[1];
  return createVNode("span", _objectSpread$a({
    role: "img",
    "aria-label": X.name
  }, ne, {
    onClick: re,
    class: [se, G],
    tabindex: ue
  }), [createVNode(VueIcon, {
    icon: X,
    primaryColor: pe,
    secondaryColor: he,
    style: le
  }, null), createVNode(InsertStyles, null, null)]);
};
Icon.props = {
  spin: Boolean,
  rotate: Number,
  icon: Object,
  twoToneColor: [String, Array]
};
Icon.displayName = "AntdIcon";
Icon.inheritAttrs = !1;
Icon.getTwoToneColor = getTwoToneColor;
Icon.setTwoToneColor = setTwoToneColor;
const AntdIcon = Icon;
var LoadingOutlined$2 = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" };
const LoadingOutlinedSvg = LoadingOutlined$2;
function _objectSpread$9(C) {
  for (var H = 1; H < arguments.length; H++) {
    var U = arguments[H] != null ? Object(arguments[H]) : {}, W = Object.keys(U);
    typeof Object.getOwnPropertySymbols == "function" && (W = W.concat(Object.getOwnPropertySymbols(U).filter(function(K) {
      return Object.getOwnPropertyDescriptor(U, K).enumerable;
    }))), W.forEach(function(K) {
      _defineProperty$9(C, K, U[K]);
    });
  }
  return C;
}
function _defineProperty$9(C, H, U) {
  return H in C ? Object.defineProperty(C, H, { value: U, enumerable: !0, configurable: !0, writable: !0 }) : C[H] = U, C;
}
var LoadingOutlined = function(H, U) {
  var W = _objectSpread$9({}, H, U.attrs);
  return createVNode(AntdIcon, _objectSpread$9({}, W, {
    icon: LoadingOutlinedSvg
  }), null);
};
LoadingOutlined.displayName = "LoadingOutlined";
LoadingOutlined.inheritAttrs = !1;
const LoadingOutlined$1 = LoadingOutlined;
var CloseOutlined$2 = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" };
const CloseOutlinedSvg = CloseOutlined$2;
function _objectSpread$8(C) {
  for (var H = 1; H < arguments.length; H++) {
    var U = arguments[H] != null ? Object(arguments[H]) : {}, W = Object.keys(U);
    typeof Object.getOwnPropertySymbols == "function" && (W = W.concat(Object.getOwnPropertySymbols(U).filter(function(K) {
      return Object.getOwnPropertyDescriptor(U, K).enumerable;
    }))), W.forEach(function(K) {
      _defineProperty$8(C, K, U[K]);
    });
  }
  return C;
}
function _defineProperty$8(C, H, U) {
  return H in C ? Object.defineProperty(C, H, { value: U, enumerable: !0, configurable: !0, writable: !0 }) : C[H] = U, C;
}
var CloseOutlined = function(H, U) {
  var W = _objectSpread$8({}, H, U.attrs);
  return createVNode(AntdIcon, _objectSpread$8({}, W, {
    icon: CloseOutlinedSvg
  }), null);
};
CloseOutlined.displayName = "CloseOutlined";
CloseOutlined.inheritAttrs = !1;
const CloseOutlined$1 = CloseOutlined;
var CloseCircleFilled$2 = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" };
const CloseCircleFilledSvg = CloseCircleFilled$2;
function _objectSpread$7(C) {
  for (var H = 1; H < arguments.length; H++) {
    var U = arguments[H] != null ? Object(arguments[H]) : {}, W = Object.keys(U);
    typeof Object.getOwnPropertySymbols == "function" && (W = W.concat(Object.getOwnPropertySymbols(U).filter(function(K) {
      return Object.getOwnPropertyDescriptor(U, K).enumerable;
    }))), W.forEach(function(K) {
      _defineProperty$7(C, K, U[K]);
    });
  }
  return C;
}
function _defineProperty$7(C, H, U) {
  return H in C ? Object.defineProperty(C, H, { value: U, enumerable: !0, configurable: !0, writable: !0 }) : C[H] = U, C;
}
var CloseCircleFilled = function(H, U) {
  var W = _objectSpread$7({}, H, U.attrs);
  return createVNode(AntdIcon, _objectSpread$7({}, W, {
    icon: CloseCircleFilledSvg
  }), null);
};
CloseCircleFilled.displayName = "CloseCircleFilled";
CloseCircleFilled.inheritAttrs = !1;
const CloseCircleFilled$1 = CloseCircleFilled;
function createContext(C) {
  const H = Symbol("contextKey");
  return {
    useProvide: (K, G) => {
      const X = reactive({});
      return provide(H, X), watchEffect(() => {
        _extends(X, K, G || {});
      }), X;
    },
    useInject: () => inject(H, C) || {}
  };
}
const genSpaceCompactStyle = (C) => {
  const {
    componentCls: H
  } = C;
  return {
    [H]: {
      display: "inline-flex",
      "&-block": {
        display: "flex",
        width: "100%"
      },
      "&-vertical": {
        flexDirection: "column"
      }
    }
  };
}, genSpaceCompactStyle$1 = genSpaceCompactStyle, genSpaceStyle = (C) => {
  const {
    componentCls: H
  } = C;
  return {
    [H]: {
      display: "inline-flex",
      "&-rtl": {
        direction: "rtl"
      },
      "&-vertical": {
        flexDirection: "column"
      },
      "&-align": {
        flexDirection: "column",
        "&-center": {
          alignItems: "center"
        },
        "&-start": {
          alignItems: "flex-start"
        },
        "&-end": {
          alignItems: "flex-end"
        },
        "&-baseline": {
          alignItems: "baseline"
        }
      },
      [`${H}-space-item`]: {
        "&:empty": {
          display: "none"
        }
      }
    }
  };
}, useStyle$7 = genComponentStyleHook("Space", (C) => [genSpaceStyle(C), genSpaceCompactStyle$1(C)]);
var mapTag = "[object Map]", setTag = "[object Set]", objectProto = Object.prototype, hasOwnProperty = objectProto.hasOwnProperty;
function isEmpty(C) {
  if (C == null)
    return !0;
  if (isArrayLike(C) && (isArray$6(C) || typeof C == "string" || typeof C.splice == "function" || isBuffer$2(C) || isTypedArray$1(C) || isArguments$1(C)))
    return !C.length;
  var H = getTag$1(C);
  if (H == mapTag || H == setTag)
    return !C.size;
  if (isPrototype(C))
    return !baseKeys(C).length;
  for (var U in C)
    if (hasOwnProperty.call(C, U))
      return !1;
  return !0;
}
const spaceCompactItemProps = () => ({
  compactSize: String,
  compactDirection: PropTypes$1.oneOf(tuple("horizontal", "vertical")).def("horizontal"),
  isFirstItem: booleanType(),
  isLastItem: booleanType()
}), SpaceCompactItemContext = createContext(null), useCompactItemContext = (C, H) => {
  const U = SpaceCompactItemContext.useInject(), W = computed(() => {
    if (!U || isEmpty(U))
      return "";
    const {
      compactDirection: K,
      isFirstItem: G,
      isLastItem: X
    } = U, Z = K === "vertical" ? "-vertical-" : "-";
    return classNames({
      [`${C.value}-compact${Z}item`]: !0,
      [`${C.value}-compact${Z}first-item`]: G,
      [`${C.value}-compact${Z}last-item`]: X,
      [`${C.value}-compact${Z}item-rtl`]: H.value === "rtl"
    });
  });
  return {
    compactSize: computed(() => U == null ? void 0 : U.compactSize),
    compactDirection: computed(() => U == null ? void 0 : U.compactDirection),
    compactItemClassnames: W
  };
};
defineComponent({
  name: "NoCompactStyle",
  setup(C, H) {
    let {
      slots: U
    } = H;
    return SpaceCompactItemContext.useProvide(null), () => {
      var W;
      return (W = U.default) === null || W === void 0 ? void 0 : W.call(U);
    };
  }
});
const spaceCompactProps = () => ({
  prefixCls: String,
  size: {
    type: String
  },
  direction: PropTypes$1.oneOf(tuple("horizontal", "vertical")).def("horizontal"),
  align: PropTypes$1.oneOf(tuple("start", "end", "center", "baseline")),
  block: {
    type: Boolean,
    default: void 0
  }
}), CompactItem = defineComponent({
  name: "CompactItem",
  props: spaceCompactItemProps(),
  setup(C, H) {
    let {
      slots: U
    } = H;
    return SpaceCompactItemContext.useProvide(C), () => {
      var W;
      return (W = U.default) === null || W === void 0 ? void 0 : W.call(U);
    };
  }
});
defineComponent({
  name: "ASpaceCompact",
  inheritAttrs: !1,
  props: spaceCompactProps(),
  setup(C, H) {
    let {
      attrs: U,
      slots: W
    } = H;
    const {
      prefixCls: K,
      direction: G
    } = useConfigInject("space-compact", C), X = SpaceCompactItemContext.useInject(), [Z, Q] = useStyle$7(K), ee = computed(() => classNames(K.value, Q.value, {
      [`${K.value}-rtl`]: G.value === "rtl",
      [`${K.value}-block`]: C.block,
      [`${K.value}-vertical`]: C.direction === "vertical"
    }));
    return () => {
      var te;
      const re = flattenChildren(((te = W.default) === null || te === void 0 ? void 0 : te.call(W)) || []);
      return re.length === 0 ? null : Z(createVNode("div", _objectSpread2(_objectSpread2({}, U), {}, {
        class: [ee.value, U.class]
      }), [re.map((ne, ae) => {
        var oe;
        const ie = ne && ne.key || `${K.value}-item-${ae}`, se = !X || isEmpty(X);
        return createVNode(CompactItem, {
          key: ie,
          compactSize: (oe = C.size) !== null && oe !== void 0 ? oe : "middle",
          compactDirection: C.direction,
          isFirstItem: ae === 0 && (se || (X == null ? void 0 : X.isFirstItem)),
          isLastItem: ae === re.length - 1 && (se || (X == null ? void 0 : X.isLastItem))
        }, {
          default: () => [ne]
        });
      })]));
    };
  }
});
const initMotionCommon = (C) => ({
  animationDuration: C,
  animationFillMode: "both"
}), initMotionCommonLeave = (C) => ({
  animationDuration: C,
  animationFillMode: "both"
}), initMotion = function(C, H, U, W) {
  const G = (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1) ? "&" : "";
  return {
    [`
      ${G}${C}-enter,
      ${G}${C}-appear
    `]: _extends(_extends({}, initMotionCommon(W)), {
      animationPlayState: "paused"
    }),
    [`${G}${C}-leave`]: _extends(_extends({}, initMotionCommonLeave(W)), {
      animationPlayState: "paused"
    }),
    [`
      ${G}${C}-enter${C}-enter-active,
      ${G}${C}-appear${C}-appear-active
    `]: {
      animationName: H,
      animationPlayState: "running"
    },
    [`${G}${C}-leave${C}-leave-active`]: {
      animationName: U,
      animationPlayState: "running",
      pointerEvents: "none"
    }
  };
}, fadeIn = new Keyframes("antFadeIn", {
  "0%": {
    opacity: 0
  },
  "100%": {
    opacity: 1
  }
}), fadeOut = new Keyframes("antFadeOut", {
  "0%": {
    opacity: 1
  },
  "100%": {
    opacity: 0
  }
}), initFadeMotion = function(C) {
  let H = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  const {
    antCls: U
  } = C, W = `${U}-fade`, K = H ? "&" : "";
  return [initMotion(W, fadeIn, fadeOut, C.motionDurationMid, H), {
    [`
        ${K}${W}-enter,
        ${K}${W}-appear
      `]: {
      opacity: 0,
      animationTimingFunction: "linear"
    },
    [`${K}${W}-leave`]: {
      animationTimingFunction: "linear"
    }
  }];
}, zoomIn = new Keyframes("antZoomIn", {
  "0%": {
    transform: "scale(0.2)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), zoomOut = new Keyframes("antZoomOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.2)",
    opacity: 0
  }
}), zoomBigIn = new Keyframes("antZoomBigIn", {
  "0%": {
    transform: "scale(0.8)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), zoomBigOut = new Keyframes("antZoomBigOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.8)",
    opacity: 0
  }
}), zoomUpIn = new Keyframes("antZoomUpIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  }
}), zoomUpOut = new Keyframes("antZoomUpOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  }
}), zoomLeftIn = new Keyframes("antZoomLeftIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  }
}), zoomLeftOut = new Keyframes("antZoomLeftOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  }
}), zoomRightIn = new Keyframes("antZoomRightIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  }
}), zoomRightOut = new Keyframes("antZoomRightOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  }
}), zoomDownIn = new Keyframes("antZoomDownIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  }
}), zoomDownOut = new Keyframes("antZoomDownOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  }
}), zoomMotion = {
  zoom: {
    inKeyframes: zoomIn,
    outKeyframes: zoomOut
  },
  "zoom-big": {
    inKeyframes: zoomBigIn,
    outKeyframes: zoomBigOut
  },
  "zoom-big-fast": {
    inKeyframes: zoomBigIn,
    outKeyframes: zoomBigOut
  },
  "zoom-left": {
    inKeyframes: zoomLeftIn,
    outKeyframes: zoomLeftOut
  },
  "zoom-right": {
    inKeyframes: zoomRightIn,
    outKeyframes: zoomRightOut
  },
  "zoom-up": {
    inKeyframes: zoomUpIn,
    outKeyframes: zoomUpOut
  },
  "zoom-down": {
    inKeyframes: zoomDownIn,
    outKeyframes: zoomDownOut
  }
}, initZoomMotion = (C, H) => {
  const {
    antCls: U
  } = C, W = `${U}-${H}`, {
    inKeyframes: K,
    outKeyframes: G
  } = zoomMotion[H];
  return [initMotion(W, K, G, H === "zoom-big-fast" ? C.motionDurationFast : C.motionDurationMid), {
    [`
        ${W}-enter,
        ${W}-appear
      `]: {
      transform: "scale(0)",
      opacity: 0,
      animationTimingFunction: C.motionEaseOutCirc,
      "&-prepare": {
        transform: "none"
      }
    },
    [`${W}-leave`]: {
      animationTimingFunction: C.motionEaseInOutCirc
    }
  }];
};
function compactItemBorder(C, H, U) {
  const {
    focusElCls: W,
    focus: K,
    borderElCls: G
  } = U, X = G ? "> *" : "", Z = ["hover", K ? "focus" : null, "active"].filter(Boolean).map((Q) => `&:${Q} ${X}`).join(",");
  return {
    [`&-item:not(${H}-last-item)`]: {
      marginInlineEnd: -C.lineWidth
    },
    "&-item": _extends(_extends({
      [Z]: {
        zIndex: 2
      }
    }, W ? {
      [`&${W}`]: {
        zIndex: 2
      }
    } : {}), {
      [`&[disabled] ${X}`]: {
        zIndex: 0
      }
    })
  };
}
function compactItemBorderRadius(C, H, U) {
  const {
    borderElCls: W
  } = U, K = W ? `> ${W}` : "";
  return {
    [`&-item:not(${H}-first-item):not(${H}-last-item) ${K}`]: {
      borderRadius: 0
    },
    [`&-item:not(${H}-last-item)${H}-first-item`]: {
      [`& ${K}, &${C}-sm ${K}, &${C}-lg ${K}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`&-item:not(${H}-first-item)${H}-last-item`]: {
      [`& ${K}, &${C}-sm ${K}, &${C}-lg ${K}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    }
  };
}
function genCompactItemStyle(C) {
  let H = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    focus: !0
  };
  const {
    componentCls: U
  } = C, W = `${U}-compact`;
  return {
    [W]: _extends(_extends({}, compactItemBorder(C, W, H)), compactItemBorderRadius(U, W, H))
  };
}
var CheckCircleOutlined$2 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z" } }, { tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }] }, name: "check-circle", theme: "outlined" };
const CheckCircleOutlinedSvg = CheckCircleOutlined$2;
function _objectSpread$6(C) {
  for (var H = 1; H < arguments.length; H++) {
    var U = arguments[H] != null ? Object(arguments[H]) : {}, W = Object.keys(U);
    typeof Object.getOwnPropertySymbols == "function" && (W = W.concat(Object.getOwnPropertySymbols(U).filter(function(K) {
      return Object.getOwnPropertyDescriptor(U, K).enumerable;
    }))), W.forEach(function(K) {
      _defineProperty$6(C, K, U[K]);
    });
  }
  return C;
}
function _defineProperty$6(C, H, U) {
  return H in C ? Object.defineProperty(C, H, { value: U, enumerable: !0, configurable: !0, writable: !0 }) : C[H] = U, C;
}
var CheckCircleOutlined = function(H, U) {
  var W = _objectSpread$6({}, H, U.attrs);
  return createVNode(AntdIcon, _objectSpread$6({}, W, {
    icon: CheckCircleOutlinedSvg
  }), null);
};
CheckCircleOutlined.displayName = "CheckCircleOutlined";
CheckCircleOutlined.inheritAttrs = !1;
const CheckCircleOutlined$1 = CheckCircleOutlined;
var ExclamationCircleOutlined$2 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attrs: { d: "M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z" } }] }, name: "exclamation-circle", theme: "outlined" };
const ExclamationCircleOutlinedSvg = ExclamationCircleOutlined$2;
function _objectSpread$5(C) {
  for (var H = 1; H < arguments.length; H++) {
    var U = arguments[H] != null ? Object(arguments[H]) : {}, W = Object.keys(U);
    typeof Object.getOwnPropertySymbols == "function" && (W = W.concat(Object.getOwnPropertySymbols(U).filter(function(K) {
      return Object.getOwnPropertyDescriptor(U, K).enumerable;
    }))), W.forEach(function(K) {
      _defineProperty$5(C, K, U[K]);
    });
  }
  return C;
}
function _defineProperty$5(C, H, U) {
  return H in C ? Object.defineProperty(C, H, { value: U, enumerable: !0, configurable: !0, writable: !0 }) : C[H] = U, C;
}
var ExclamationCircleOutlined = function(H, U) {
  var W = _objectSpread$5({}, H, U.attrs);
  return createVNode(AntdIcon, _objectSpread$5({}, W, {
    icon: ExclamationCircleOutlinedSvg
  }), null);
};
ExclamationCircleOutlined.displayName = "ExclamationCircleOutlined";
ExclamationCircleOutlined.inheritAttrs = !1;
const ExclamationCircleOutlined$1 = ExclamationCircleOutlined;
var InfoCircleOutlined$2 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attrs: { d: "M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z" } }] }, name: "info-circle", theme: "outlined" };
const InfoCircleOutlinedSvg = InfoCircleOutlined$2;
function _objectSpread$4(C) {
  for (var H = 1; H < arguments.length; H++) {
    var U = arguments[H] != null ? Object(arguments[H]) : {}, W = Object.keys(U);
    typeof Object.getOwnPropertySymbols == "function" && (W = W.concat(Object.getOwnPropertySymbols(U).filter(function(K) {
      return Object.getOwnPropertyDescriptor(U, K).enumerable;
    }))), W.forEach(function(K) {
      _defineProperty$4(C, K, U[K]);
    });
  }
  return C;
}
function _defineProperty$4(C, H, U) {
  return H in C ? Object.defineProperty(C, H, { value: U, enumerable: !0, configurable: !0, writable: !0 }) : C[H] = U, C;
}
var InfoCircleOutlined = function(H, U) {
  var W = _objectSpread$4({}, H, U.attrs);
  return createVNode(AntdIcon, _objectSpread$4({}, W, {
    icon: InfoCircleOutlinedSvg
  }), null);
};
InfoCircleOutlined.displayName = "InfoCircleOutlined";
InfoCircleOutlined.inheritAttrs = !1;
const InfoCircleOutlined$1 = InfoCircleOutlined;
var CloseCircleOutlined$2 = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm0 76c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm128.01 198.83c.03 0 .05.01.09.06l45.02 45.01a.2.2 0 01.05.09.12.12 0 010 .07c0 .02-.01.04-.05.08L557.25 512l127.87 127.86a.27.27 0 01.05.06v.02a.12.12 0 010 .07c0 .03-.01.05-.05.09l-45.02 45.02a.2.2 0 01-.09.05.12.12 0 01-.07 0c-.02 0-.04-.01-.08-.05L512 557.25 384.14 685.12c-.04.04-.06.05-.08.05a.12.12 0 01-.07 0c-.03 0-.05-.01-.09-.05l-45.02-45.02a.2.2 0 01-.05-.09.12.12 0 010-.07c0-.02.01-.04.06-.08L466.75 512 338.88 384.14a.27.27 0 01-.05-.06l-.01-.02a.12.12 0 010-.07c0-.03.01-.05.05-.09l45.02-45.02a.2.2 0 01.09-.05.12.12 0 01.07 0c.02 0 .04.01.08.06L512 466.75l127.86-127.86c.04-.05.06-.06.08-.06a.12.12 0 01.07 0z" } }] }, name: "close-circle", theme: "outlined" };
const CloseCircleOutlinedSvg = CloseCircleOutlined$2;
function _objectSpread$3(C) {
  for (var H = 1; H < arguments.length; H++) {
    var U = arguments[H] != null ? Object(arguments[H]) : {}, W = Object.keys(U);
    typeof Object.getOwnPropertySymbols == "function" && (W = W.concat(Object.getOwnPropertySymbols(U).filter(function(K) {
      return Object.getOwnPropertyDescriptor(U, K).enumerable;
    }))), W.forEach(function(K) {
      _defineProperty$3(C, K, U[K]);
    });
  }
  return C;
}
function _defineProperty$3(C, H, U) {
  return H in C ? Object.defineProperty(C, H, { value: U, enumerable: !0, configurable: !0, writable: !0 }) : C[H] = U, C;
}
var CloseCircleOutlined = function(H, U) {
  var W = _objectSpread$3({}, H, U.attrs);
  return createVNode(AntdIcon, _objectSpread$3({}, W, {
    icon: CloseCircleOutlinedSvg
  }), null);
};
CloseCircleOutlined.displayName = "CloseCircleOutlined";
CloseCircleOutlined.inheritAttrs = !1;
const CloseCircleOutlined$1 = CloseCircleOutlined;
var CheckCircleFilled$2 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" };
const CheckCircleFilledSvg = CheckCircleFilled$2;
function _objectSpread$2(C) {
  for (var H = 1; H < arguments.length; H++) {
    var U = arguments[H] != null ? Object(arguments[H]) : {}, W = Object.keys(U);
    typeof Object.getOwnPropertySymbols == "function" && (W = W.concat(Object.getOwnPropertySymbols(U).filter(function(K) {
      return Object.getOwnPropertyDescriptor(U, K).enumerable;
    }))), W.forEach(function(K) {
      _defineProperty$2(C, K, U[K]);
    });
  }
  return C;
}
function _defineProperty$2(C, H, U) {
  return H in C ? Object.defineProperty(C, H, { value: U, enumerable: !0, configurable: !0, writable: !0 }) : C[H] = U, C;
}
var CheckCircleFilled = function(H, U) {
  var W = _objectSpread$2({}, H, U.attrs);
  return createVNode(AntdIcon, _objectSpread$2({}, W, {
    icon: CheckCircleFilledSvg
  }), null);
};
CheckCircleFilled.displayName = "CheckCircleFilled";
CheckCircleFilled.inheritAttrs = !1;
const CheckCircleFilled$1 = CheckCircleFilled;
var ExclamationCircleFilled$2 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" };
const ExclamationCircleFilledSvg = ExclamationCircleFilled$2;
function _objectSpread$1(C) {
  for (var H = 1; H < arguments.length; H++) {
    var U = arguments[H] != null ? Object(arguments[H]) : {}, W = Object.keys(U);
    typeof Object.getOwnPropertySymbols == "function" && (W = W.concat(Object.getOwnPropertySymbols(U).filter(function(K) {
      return Object.getOwnPropertyDescriptor(U, K).enumerable;
    }))), W.forEach(function(K) {
      _defineProperty$1(C, K, U[K]);
    });
  }
  return C;
}
function _defineProperty$1(C, H, U) {
  return H in C ? Object.defineProperty(C, H, { value: U, enumerable: !0, configurable: !0, writable: !0 }) : C[H] = U, C;
}
var ExclamationCircleFilled = function(H, U) {
  var W = _objectSpread$1({}, H, U.attrs);
  return createVNode(AntdIcon, _objectSpread$1({}, W, {
    icon: ExclamationCircleFilledSvg
  }), null);
};
ExclamationCircleFilled.displayName = "ExclamationCircleFilled";
ExclamationCircleFilled.inheritAttrs = !1;
const ExclamationCircleFilled$1 = ExclamationCircleFilled;
var InfoCircleFilled$2 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" };
const InfoCircleFilledSvg = InfoCircleFilled$2;
function _objectSpread(C) {
  for (var H = 1; H < arguments.length; H++) {
    var U = arguments[H] != null ? Object(arguments[H]) : {}, W = Object.keys(U);
    typeof Object.getOwnPropertySymbols == "function" && (W = W.concat(Object.getOwnPropertySymbols(U).filter(function(K) {
      return Object.getOwnPropertyDescriptor(U, K).enumerable;
    }))), W.forEach(function(K) {
      _defineProperty(C, K, U[K]);
    });
  }
  return C;
}
function _defineProperty(C, H, U) {
  return H in C ? Object.defineProperty(C, H, { value: U, enumerable: !0, configurable: !0, writable: !0 }) : C[H] = U, C;
}
var InfoCircleFilled = function(H, U) {
  var W = _objectSpread({}, H, U.attrs);
  return createVNode(AntdIcon, _objectSpread({}, W, {
    icon: InfoCircleFilledSvg
  }), null);
};
InfoCircleFilled.displayName = "InfoCircleFilled";
InfoCircleFilled.inheritAttrs = !1;
const InfoCircleFilled$1 = InfoCircleFilled, genWaveStyle = (C) => {
  const {
    componentCls: H,
    colorPrimary: U
  } = C;
  return {
    [H]: {
      position: "absolute",
      background: "transparent",
      pointerEvents: "none",
      boxSizing: "border-box",
      color: `var(--wave-color, ${U})`,
      boxShadow: "0 0 0 0 currentcolor",
      opacity: 0.2,
      // =================== Motion ===================
      "&.wave-motion-appear": {
        transition: [`box-shadow 0.4s ${C.motionEaseOutCirc}`, `opacity 2s ${C.motionEaseOutCirc}`].join(","),
        "&-active": {
          boxShadow: "0 0 0 6px currentcolor",
          opacity: 0
        }
      }
    }
  };
}, useStyle$6 = genComponentStyleHook("Wave", (C) => [genWaveStyle(C)]);
function isNotGrey(C) {
  const H = (C || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  return H && H[1] && H[2] && H[3] ? !(H[1] === H[2] && H[2] === H[3]) : !0;
}
function isValidWaveColor(C) {
  return C && C !== "#fff" && C !== "#ffffff" && C !== "rgb(255, 255, 255)" && C !== "rgba(255, 255, 255, 1)" && isNotGrey(C) && !/rgba\((?:\d*, ){3}0\)/.test(C) && // any transparent rgba color
  C !== "transparent";
}
function getTargetWaveColor(C) {
  const {
    borderTopColor: H,
    borderColor: U,
    backgroundColor: W
  } = getComputedStyle(C);
  return isValidWaveColor(H) ? H : isValidWaveColor(U) ? U : isValidWaveColor(W) ? W : null;
}
function validateNum(C) {
  return Number.isNaN(C) ? 0 : C;
}
const WaveEffect = defineComponent({
  props: {
    target: objectType(),
    className: String
  },
  setup(C) {
    const H = shallowRef(null), [U, W] = useState(null), [K, G] = useState([]), [X, Z] = useState(0), [Q, ee] = useState(0), [te, re] = useState(0), [ne, ae] = useState(0), [oe, ie] = useState(!1);
    function se() {
      const {
        target: de
      } = C, ge = getComputedStyle(de);
      W(getTargetWaveColor(de));
      const ve = ge.position === "static", {
        borderLeftWidth: me,
        borderTopWidth: ye
      } = ge;
      Z(ve ? de.offsetLeft : validateNum(-parseFloat(me))), ee(ve ? de.offsetTop : validateNum(-parseFloat(ye))), re(de.offsetWidth), ae(de.offsetHeight);
      const {
        borderTopLeftRadius: be,
        borderTopRightRadius: Ce,
        borderBottomLeftRadius: $e,
        borderBottomRightRadius: xe
      } = ge;
      G([be, Ce, xe, $e].map((_e) => validateNum(parseFloat(_e))));
    }
    let ue, le, ce;
    const fe = () => {
      clearTimeout(ce), wrapperRaf.cancel(le), ue == null || ue.disconnect();
    }, pe = () => {
      var de;
      const ge = (de = H.value) === null || de === void 0 ? void 0 : de.parentElement;
      ge && (render(null, ge), ge.parentElement && ge.parentElement.removeChild(ge));
    };
    onMounted(() => {
      fe(), ce = setTimeout(() => {
        pe();
      }, 5e3);
      const {
        target: de
      } = C;
      de && (le = wrapperRaf(() => {
        se(), ie(!0);
      }), typeof ResizeObserver < "u" && (ue = new ResizeObserver(se), ue.observe(de)));
    }), onBeforeUnmount(() => {
      fe();
    });
    const he = (de) => {
      de.propertyName === "opacity" && pe();
    };
    return () => {
      if (!oe.value)
        return null;
      const de = {
        left: `${X.value}px`,
        top: `${Q.value}px`,
        width: `${te.value}px`,
        height: `${ne.value}px`,
        borderRadius: K.value.map((ge) => `${ge}px`).join(" ")
      };
      return U && (de["--wave-color"] = U.value), createVNode(Transition, {
        appear: !0,
        name: "wave-motion",
        appearFromClass: "wave-motion-appear",
        appearActiveClass: "wave-motion-appear",
        appearToClass: "wave-motion-appear wave-motion-appear-active"
      }, {
        default: () => [createVNode("div", {
          ref: H,
          class: C.className,
          style: de,
          onTransitionend: he
        }, null)]
      });
    };
  }
});
function showWaveEffect(C, H) {
  const U = document.createElement("div");
  U.style.position = "absolute", U.style.left = "0px", U.style.top = "0px", C == null || C.insertBefore(U, C == null ? void 0 : C.firstChild), render(createVNode(WaveEffect, {
    target: C,
    className: H
  }, null), U);
}
function useWave(C, H, U) {
  function W() {
    var K;
    const G = findDOMNode(C);
    !((K = U.value) === null || K === void 0) && K.disabled || !G || showWaveEffect(G, H.value);
  }
  return W;
}
const Wave = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "Wave",
  props: {
    disabled: Boolean
  },
  setup(C, H) {
    let {
      slots: U
    } = H;
    const W = getCurrentInstance(), {
      prefixCls: K,
      wave: G
    } = useConfigInject("wave", C), [, X] = useStyle$6(K), Z = useWave(W, computed(() => classNames(K.value, X.value)), G);
    let Q;
    const ee = () => {
      findDOMNode(W).removeEventListener("click", Q, !0);
    };
    return onMounted(() => {
      watch(() => C.disabled, () => {
        ee(), nextTick(() => {
          const te = findDOMNode(W);
          te == null || te.removeEventListener("click", Q, !0), !(!te || te.nodeType !== 1 || C.disabled) && (Q = (re) => {
            re.target.tagName === "INPUT" || !isVisible(re.target) || // No need wave
            !te.getAttribute || te.getAttribute("disabled") || te.disabled || te.className.includes("disabled") || te.className.includes("-leave") || Z();
          }, te.addEventListener("click", Q, !0));
        });
      }, {
        immediate: !0,
        flush: "post"
      });
    }), onBeforeUnmount(() => {
      ee();
    }), () => {
      var te;
      return (te = U.default) === null || te === void 0 ? void 0 : te.call(U)[0];
    };
  }
});
function convertLegacyProps(C) {
  return C === "danger" ? {
    danger: !0
  } : {
    type: C
  };
}
const buttonProps = () => ({
  prefixCls: String,
  type: String,
  htmlType: {
    type: String,
    default: "button"
  },
  shape: {
    type: String
  },
  size: {
    type: String
  },
  loading: {
    type: [Boolean, Object],
    default: () => !1
  },
  disabled: {
    type: Boolean,
    default: void 0
  },
  ghost: {
    type: Boolean,
    default: void 0
  },
  block: {
    type: Boolean,
    default: void 0
  },
  danger: {
    type: Boolean,
    default: void 0
  },
  icon: PropTypes$1.any,
  href: String,
  target: String,
  title: String,
  onClick: eventType(),
  onMousedown: eventType()
}), buttonTypes = buttonProps, getCollapsedWidth = (C) => {
  C && (C.style.width = "0px", C.style.opacity = "0", C.style.transform = "scale(0)");
}, getRealWidth = (C) => {
  nextTick(() => {
    C && (C.style.width = `${C.scrollWidth}px`, C.style.opacity = "1", C.style.transform = "scale(1)");
  });
}, resetStyle = (C) => {
  C && C.style && (C.style.width = null, C.style.opacity = null, C.style.transform = null);
}, LoadingIcon = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "LoadingIcon",
  props: {
    prefixCls: String,
    loading: [Boolean, Object],
    existIcon: Boolean
  },
  setup(C) {
    return () => {
      const {
        existIcon: H,
        prefixCls: U,
        loading: W
      } = C;
      if (H)
        return createVNode("span", {
          class: `${U}-loading-icon`
        }, [createVNode(LoadingOutlined$1, null, null)]);
      const K = !!W;
      return createVNode(Transition, {
        name: `${U}-loading-icon-motion`,
        onBeforeEnter: getCollapsedWidth,
        onEnter: getRealWidth,
        onAfterEnter: resetStyle,
        onBeforeLeave: getRealWidth,
        onLeave: (G) => {
          setTimeout(() => {
            getCollapsedWidth(G);
          });
        },
        onAfterLeave: resetStyle
      }, {
        default: () => [K ? createVNode("span", {
          class: `${U}-loading-icon`
        }, [createVNode(LoadingOutlined$1, null, null)]) : null]
      });
    };
  }
}), genButtonBorderStyle = (C, H) => ({
  // Border
  [`> span, > ${C}`]: {
    "&:not(:last-child)": {
      [`&, & > ${C}`]: {
        "&:not(:disabled)": {
          borderInlineEndColor: H
        }
      }
    },
    "&:not(:first-child)": {
      [`&, & > ${C}`]: {
        "&:not(:disabled)": {
          borderInlineStartColor: H
        }
      }
    }
  }
}), genGroupStyle = (C) => {
  const {
    componentCls: H,
    fontSize: U,
    lineWidth: W,
    colorPrimaryHover: K,
    colorErrorHover: G
  } = C;
  return {
    [`${H}-group`]: [
      {
        position: "relative",
        display: "inline-flex",
        // Border
        [`> span, > ${H}`]: {
          "&:not(:last-child)": {
            [`&, & > ${H}`]: {
              borderStartEndRadius: 0,
              borderEndEndRadius: 0
            }
          },
          "&:not(:first-child)": {
            marginInlineStart: -W,
            [`&, & > ${H}`]: {
              borderStartStartRadius: 0,
              borderEndStartRadius: 0
            }
          }
        },
        [H]: {
          position: "relative",
          zIndex: 1,
          "&:hover,\n          &:focus,\n          &:active": {
            zIndex: 2
          },
          "&[disabled]": {
            zIndex: 0
          }
        },
        [`${H}-icon-only`]: {
          fontSize: U
        }
      },
      // Border Color
      genButtonBorderStyle(`${H}-primary`, K),
      genButtonBorderStyle(`${H}-danger`, G)
    ]
  };
}, genGroupStyle$1 = genGroupStyle;
function compactItemVerticalBorder(C, H) {
  return {
    // border collapse
    [`&-item:not(${H}-last-item)`]: {
      marginBottom: -C.lineWidth
    },
    "&-item": {
      "&:hover,&:focus,&:active": {
        zIndex: 2
      },
      "&[disabled]": {
        zIndex: 0
      }
    }
  };
}
function compactItemBorderVerticalRadius(C, H) {
  return {
    [`&-item:not(${H}-first-item):not(${H}-last-item)`]: {
      borderRadius: 0
    },
    [`&-item${H}-first-item:not(${H}-last-item)`]: {
      [`&, &${C}-sm, &${C}-lg`]: {
        borderEndEndRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&-item${H}-last-item:not(${H}-first-item)`]: {
      [`&, &${C}-sm, &${C}-lg`]: {
        borderStartStartRadius: 0,
        borderStartEndRadius: 0
      }
    }
  };
}
function genCompactItemVerticalStyle(C) {
  const H = `${C.componentCls}-compact-vertical`;
  return {
    [H]: _extends(_extends({}, compactItemVerticalBorder(C, H)), compactItemBorderVerticalRadius(C.componentCls, H))
  };
}
const genSharedButtonStyle = (C) => {
  const {
    componentCls: H,
    iconCls: U
  } = C;
  return {
    [H]: {
      outline: "none",
      position: "relative",
      display: "inline-block",
      fontWeight: 400,
      whiteSpace: "nowrap",
      textAlign: "center",
      backgroundImage: "none",
      backgroundColor: "transparent",
      border: `${C.lineWidth}px ${C.lineType} transparent`,
      cursor: "pointer",
      transition: `all ${C.motionDurationMid} ${C.motionEaseInOut}`,
      userSelect: "none",
      touchAction: "manipulation",
      lineHeight: C.lineHeight,
      color: C.colorText,
      "> span": {
        display: "inline-block"
      },
      // Leave a space between icon and text.
      [`> ${U} + span, > span + ${U}`]: {
        marginInlineStart: C.marginXS
      },
      "> a": {
        color: "currentColor"
      },
      "&:not(:disabled)": _extends({}, genFocusStyle(C)),
      // make `btn-icon-only` not too narrow
      [`&-icon-only${H}-compact-item`]: {
        flex: "none"
      },
      // Special styles for Primary Button
      [`&-compact-item${H}-primary`]: {
        [`&:not([disabled]) + ${H}-compact-item${H}-primary:not([disabled])`]: {
          position: "relative",
          "&:before": {
            position: "absolute",
            top: -C.lineWidth,
            insetInlineStart: -C.lineWidth,
            display: "inline-block",
            width: C.lineWidth,
            height: `calc(100% + ${C.lineWidth * 2}px)`,
            backgroundColor: C.colorPrimaryHover,
            content: '""'
          }
        }
      },
      // Special styles for Primary Button
      "&-compact-vertical-item": {
        [`&${H}-primary`]: {
          [`&:not([disabled]) + ${H}-compact-vertical-item${H}-primary:not([disabled])`]: {
            position: "relative",
            "&:before": {
              position: "absolute",
              top: -C.lineWidth,
              insetInlineStart: -C.lineWidth,
              display: "inline-block",
              width: `calc(100% + ${C.lineWidth * 2}px)`,
              height: C.lineWidth,
              backgroundColor: C.colorPrimaryHover,
              content: '""'
            }
          }
        }
      }
    }
  };
}, genHoverActiveButtonStyle = (C, H) => ({
  "&:not(:disabled)": {
    "&:hover": C,
    "&:active": H
  }
}), genCircleButtonStyle = (C) => ({
  minWidth: C.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: "50%"
}), genRoundButtonStyle = (C) => ({
  borderRadius: C.controlHeight,
  paddingInlineStart: C.controlHeight / 2,
  paddingInlineEnd: C.controlHeight / 2
}), genDisabledStyle = (C) => ({
  cursor: "not-allowed",
  borderColor: C.colorBorder,
  color: C.colorTextDisabled,
  backgroundColor: C.colorBgContainerDisabled,
  boxShadow: "none"
}), genGhostButtonStyle = (C, H, U, W, K, G, X) => ({
  [`&${C}-background-ghost`]: _extends(_extends({
    color: H || void 0,
    backgroundColor: "transparent",
    borderColor: U || void 0,
    boxShadow: "none"
  }, genHoverActiveButtonStyle(_extends({
    backgroundColor: "transparent"
  }, G), _extends({
    backgroundColor: "transparent"
  }, X))), {
    "&:disabled": {
      cursor: "not-allowed",
      color: W || void 0,
      borderColor: K || void 0
    }
  })
}), genSolidDisabledButtonStyle = (C) => ({
  "&:disabled": _extends({}, genDisabledStyle(C))
}), genSolidButtonStyle = (C) => _extends({}, genSolidDisabledButtonStyle(C)), genPureDisabledButtonStyle = (C) => ({
  "&:disabled": {
    cursor: "not-allowed",
    color: C.colorTextDisabled
  }
}), genDefaultButtonStyle = (C) => _extends(_extends(_extends(_extends(_extends({}, genSolidButtonStyle(C)), {
  backgroundColor: C.colorBgContainer,
  borderColor: C.colorBorder,
  boxShadow: `0 ${C.controlOutlineWidth}px 0 ${C.controlTmpOutline}`
}), genHoverActiveButtonStyle({
  color: C.colorPrimaryHover,
  borderColor: C.colorPrimaryHover
}, {
  color: C.colorPrimaryActive,
  borderColor: C.colorPrimaryActive
})), genGhostButtonStyle(C.componentCls, C.colorBgContainer, C.colorBgContainer, C.colorTextDisabled, C.colorBorder)), {
  [`&${C.componentCls}-dangerous`]: _extends(_extends(_extends({
    color: C.colorError,
    borderColor: C.colorError
  }, genHoverActiveButtonStyle({
    color: C.colorErrorHover,
    borderColor: C.colorErrorBorderHover
  }, {
    color: C.colorErrorActive,
    borderColor: C.colorErrorActive
  })), genGhostButtonStyle(C.componentCls, C.colorError, C.colorError, C.colorTextDisabled, C.colorBorder)), genSolidDisabledButtonStyle(C))
}), genPrimaryButtonStyle = (C) => _extends(_extends(_extends(_extends(_extends({}, genSolidButtonStyle(C)), {
  color: C.colorTextLightSolid,
  backgroundColor: C.colorPrimary,
  boxShadow: `0 ${C.controlOutlineWidth}px 0 ${C.controlOutline}`
}), genHoverActiveButtonStyle({
  color: C.colorTextLightSolid,
  backgroundColor: C.colorPrimaryHover
}, {
  color: C.colorTextLightSolid,
  backgroundColor: C.colorPrimaryActive
})), genGhostButtonStyle(C.componentCls, C.colorPrimary, C.colorPrimary, C.colorTextDisabled, C.colorBorder, {
  color: C.colorPrimaryHover,
  borderColor: C.colorPrimaryHover
}, {
  color: C.colorPrimaryActive,
  borderColor: C.colorPrimaryActive
})), {
  [`&${C.componentCls}-dangerous`]: _extends(_extends(_extends({
    backgroundColor: C.colorError,
    boxShadow: `0 ${C.controlOutlineWidth}px 0 ${C.colorErrorOutline}`
  }, genHoverActiveButtonStyle({
    backgroundColor: C.colorErrorHover
  }, {
    backgroundColor: C.colorErrorActive
  })), genGhostButtonStyle(C.componentCls, C.colorError, C.colorError, C.colorTextDisabled, C.colorBorder, {
    color: C.colorErrorHover,
    borderColor: C.colorErrorHover
  }, {
    color: C.colorErrorActive,
    borderColor: C.colorErrorActive
  })), genSolidDisabledButtonStyle(C))
}), genDashedButtonStyle = (C) => _extends(_extends({}, genDefaultButtonStyle(C)), {
  borderStyle: "dashed"
}), genLinkButtonStyle = (C) => _extends(_extends(_extends({
  color: C.colorLink
}, genHoverActiveButtonStyle({
  color: C.colorLinkHover
}, {
  color: C.colorLinkActive
})), genPureDisabledButtonStyle(C)), {
  [`&${C.componentCls}-dangerous`]: _extends(_extends({
    color: C.colorError
  }, genHoverActiveButtonStyle({
    color: C.colorErrorHover
  }, {
    color: C.colorErrorActive
  })), genPureDisabledButtonStyle(C))
}), genTextButtonStyle = (C) => _extends(_extends(_extends({}, genHoverActiveButtonStyle({
  color: C.colorText,
  backgroundColor: C.colorBgTextHover
}, {
  color: C.colorText,
  backgroundColor: C.colorBgTextActive
})), genPureDisabledButtonStyle(C)), {
  [`&${C.componentCls}-dangerous`]: _extends(_extends({
    color: C.colorError
  }, genPureDisabledButtonStyle(C)), genHoverActiveButtonStyle({
    color: C.colorErrorHover,
    backgroundColor: C.colorErrorBg
  }, {
    color: C.colorErrorHover,
    backgroundColor: C.colorErrorBg
  }))
}), genDisabledButtonStyle = (C) => _extends(_extends({}, genDisabledStyle(C)), {
  [`&${C.componentCls}:hover`]: _extends({}, genDisabledStyle(C))
}), genTypeButtonStyle = (C) => {
  const {
    componentCls: H
  } = C;
  return {
    [`${H}-default`]: genDefaultButtonStyle(C),
    [`${H}-primary`]: genPrimaryButtonStyle(C),
    [`${H}-dashed`]: genDashedButtonStyle(C),
    [`${H}-link`]: genLinkButtonStyle(C),
    [`${H}-text`]: genTextButtonStyle(C),
    [`${H}-disabled`]: genDisabledButtonStyle(C)
  };
}, genSizeButtonStyle = function(C) {
  let H = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  const {
    componentCls: U,
    iconCls: W,
    controlHeight: K,
    fontSize: G,
    lineHeight: X,
    lineWidth: Z,
    borderRadius: Q,
    buttonPaddingHorizontal: ee
  } = C, te = Math.max(0, (K - G * X) / 2 - Z), re = ee - Z, ne = `${U}-icon-only`;
  return [
    // Size
    {
      [`${U}${H}`]: {
        fontSize: G,
        height: K,
        padding: `${te}px ${re}px`,
        borderRadius: Q,
        [`&${ne}`]: {
          width: K,
          paddingInlineStart: 0,
          paddingInlineEnd: 0,
          [`&${U}-round`]: {
            width: "auto"
          },
          "> span": {
            transform: "scale(1.143)"
            // 14px -> 16px
          }
        },
        // Loading
        [`&${U}-loading`]: {
          opacity: C.opacityLoading,
          cursor: "default"
        },
        [`${U}-loading-icon`]: {
          transition: `width ${C.motionDurationSlow} ${C.motionEaseInOut}, opacity ${C.motionDurationSlow} ${C.motionEaseInOut}`
        },
        [`&:not(${ne}) ${U}-loading-icon > ${W}`]: {
          marginInlineEnd: C.marginXS
        }
      }
    },
    // Shape - patch prefixCls again to override solid border radius style
    {
      [`${U}${U}-circle${H}`]: genCircleButtonStyle(C)
    },
    {
      [`${U}${U}-round${H}`]: genRoundButtonStyle(C)
    }
  ];
}, genSizeBaseButtonStyle = (C) => genSizeButtonStyle(C), genSizeSmallButtonStyle = (C) => {
  const H = merge$1(C, {
    controlHeight: C.controlHeightSM,
    padding: C.paddingXS,
    buttonPaddingHorizontal: 8,
    borderRadius: C.borderRadiusSM
  });
  return genSizeButtonStyle(H, `${C.componentCls}-sm`);
}, genSizeLargeButtonStyle = (C) => {
  const H = merge$1(C, {
    controlHeight: C.controlHeightLG,
    fontSize: C.fontSizeLG,
    borderRadius: C.borderRadiusLG
  });
  return genSizeButtonStyle(H, `${C.componentCls}-lg`);
}, genBlockButtonStyle = (C) => {
  const {
    componentCls: H
  } = C;
  return {
    [H]: {
      [`&${H}-block`]: {
        width: "100%"
      }
    }
  };
}, useStyle$5 = genComponentStyleHook("Button", (C) => {
  const {
    controlTmpOutline: H,
    paddingContentHorizontal: U
  } = C, W = merge$1(C, {
    colorOutlineDefault: H,
    buttonPaddingHorizontal: U
  });
  return [
    // Shared
    genSharedButtonStyle(W),
    // Size
    genSizeSmallButtonStyle(W),
    genSizeBaseButtonStyle(W),
    genSizeLargeButtonStyle(W),
    // Block
    genBlockButtonStyle(W),
    // Group (type, ghost, danger, disabled, loading)
    genTypeButtonStyle(W),
    // Button Group
    genGroupStyle$1(W),
    // Space Compact
    genCompactItemStyle(C, {
      focus: !1
    }),
    genCompactItemVerticalStyle(C)
  ];
}), buttonGroupProps = () => ({
  prefixCls: String,
  size: {
    type: String
  }
}), GroupSizeContext = createContext(), ButtonGroup = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AButtonGroup",
  props: buttonGroupProps(),
  setup(C, H) {
    let {
      slots: U
    } = H;
    const {
      prefixCls: W,
      direction: K
    } = useConfigInject("btn-group", C), [, , G] = useToken();
    GroupSizeContext.useProvide(reactive({
      size: computed(() => C.size)
    }));
    const X = computed(() => {
      const {
        size: Z
      } = C;
      let Q = "";
      switch (Z) {
        case "large":
          Q = "lg";
          break;
        case "small":
          Q = "sm";
          break;
        case "middle":
        case void 0:
          break;
        default:
          devWarning(!Z, "Button.Group", "Invalid prop `size`.");
      }
      return {
        [`${W.value}`]: !0,
        [`${W.value}-${Q}`]: Q,
        [`${W.value}-rtl`]: K.value === "rtl",
        [G.value]: !0
      };
    });
    return () => {
      var Z;
      return createVNode("div", {
        class: X.value
      }, [flattenChildren((Z = U.default) === null || Z === void 0 ? void 0 : Z.call(U))]);
    };
  }
}), rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/, isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
function isUnBorderedButtonType(C) {
  return C === "text" || C === "link";
}
const Button = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AButton",
  inheritAttrs: !1,
  __ANT_BUTTON: !0,
  props: initDefaultProps$1(buttonTypes(), {
    type: "default"
  }),
  slots: Object,
  // emits: ['click', 'mousedown'],
  setup(C, H) {
    let {
      slots: U,
      attrs: W,
      emit: K,
      expose: G
    } = H;
    const {
      prefixCls: X,
      autoInsertSpaceInButton: Z,
      direction: Q,
      size: ee
    } = useConfigInject("btn", C), [te, re] = useStyle$5(X), ne = GroupSizeContext.useInject(), ae = useInjectDisabled(), oe = computed(() => {
      var xe;
      return (xe = C.disabled) !== null && xe !== void 0 ? xe : ae.value;
    }), ie = shallowRef(null), se = shallowRef(void 0);
    let ue = !1;
    const le = shallowRef(!1), ce = shallowRef(!1), fe = computed(() => Z.value !== !1), {
      compactSize: pe,
      compactItemClassnames: he
    } = useCompactItemContext(X, Q), de = computed(() => typeof C.loading == "object" && C.loading.delay ? C.loading.delay || !0 : !!C.loading);
    watch(de, (xe) => {
      clearTimeout(se.value), typeof de.value == "number" ? se.value = setTimeout(() => {
        le.value = xe;
      }, de.value) : le.value = xe;
    }, {
      immediate: !0
    });
    const ge = computed(() => {
      const {
        type: xe,
        shape: _e = "default",
        ghost: Ae,
        block: De,
        danger: Be
      } = C, Oe = X.value, Se = {
        large: "lg",
        small: "sm",
        middle: void 0
      }, Te = pe.value || (ne == null ? void 0 : ne.size) || ee.value, we = Te && Se[Te] || "";
      return [he.value, {
        [re.value]: !0,
        [`${Oe}`]: !0,
        [`${Oe}-${_e}`]: _e !== "default" && _e,
        [`${Oe}-${xe}`]: xe,
        [`${Oe}-${we}`]: we,
        [`${Oe}-loading`]: le.value,
        [`${Oe}-background-ghost`]: Ae && !isUnBorderedButtonType(xe),
        [`${Oe}-two-chinese-chars`]: ce.value && fe.value,
        [`${Oe}-block`]: De,
        [`${Oe}-dangerous`]: !!Be,
        [`${Oe}-rtl`]: Q.value === "rtl"
      }];
    }), ve = () => {
      const xe = ie.value;
      if (!xe || Z.value === !1)
        return;
      const _e = xe.textContent;
      ue && isTwoCNChar(_e) ? ce.value || (ce.value = !0) : ce.value && (ce.value = !1);
    }, me = (xe) => {
      if (le.value || oe.value) {
        xe.preventDefault();
        return;
      }
      K("click", xe);
    }, ye = (xe) => {
      K("mousedown", xe);
    }, be = (xe, _e) => {
      const Ae = _e ? " " : "";
      if (xe.type === Text) {
        let De = xe.children.trim();
        return isTwoCNChar(De) && (De = De.split("").join(Ae)), createVNode("span", null, [De]);
      }
      return xe;
    };
    return watchEffect(() => {
      devWarning(!(C.ghost && isUnBorderedButtonType(C.type)), "Button", "`link` or `text` button can't be a `ghost` button.");
    }), onMounted(ve), onUpdated(ve), onBeforeUnmount(() => {
      se.value && clearTimeout(se.value);
    }), G({
      focus: () => {
        var xe;
        (xe = ie.value) === null || xe === void 0 || xe.focus();
      },
      blur: () => {
        var xe;
        (xe = ie.value) === null || xe === void 0 || xe.blur();
      }
    }), () => {
      var xe, _e;
      const {
        icon: Ae = (xe = U.icon) === null || xe === void 0 ? void 0 : xe.call(U)
      } = C, De = flattenChildren((_e = U.default) === null || _e === void 0 ? void 0 : _e.call(U));
      ue = De.length === 1 && !Ae && !isUnBorderedButtonType(C.type);
      const {
        type: Be,
        htmlType: Oe,
        href: Se,
        title: Te,
        target: we
      } = C, Ee = le.value ? "loading" : Ae, Fe = _extends(_extends({}, W), {
        title: Te,
        disabled: oe.value,
        class: [ge.value, W.class, {
          [`${X.value}-icon-only`]: De.length === 0 && !!Ee
        }],
        onClick: me,
        onMousedown: ye
      });
      oe.value || delete Fe.disabled;
      const ke = Ae && !le.value ? Ae : createVNode(LoadingIcon, {
        existIcon: !!Ae,
        prefixCls: X.value,
        loading: !!le.value
      }, null), Re = De.map((He) => be(He, ue && fe.value));
      if (Se !== void 0)
        return te(createVNode("a", _objectSpread2(_objectSpread2({}, Fe), {}, {
          href: Se,
          target: we,
          ref: ie
        }), [ke, Re]));
      let Pe = createVNode("button", _objectSpread2(_objectSpread2({}, Fe), {}, {
        ref: ie,
        type: Oe
      }), [ke, Re]);
      if (!isUnBorderedButtonType(Be)) {
        const He = /* @__PURE__ */ function() {
          return Pe;
        }();
        Pe = createVNode(Wave, {
          ref: "wave",
          disabled: !!le.value
        }, {
          default: () => [He]
        });
      }
      return te(Pe);
    };
  }
});
Button.Group = ButtonGroup;
Button.install = function(C) {
  return C.component(Button.name, Button), C.component(ButtonGroup.name, ButtonGroup), C;
};
var commonjsGlobal = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function getDefaultExportFromCjs(C) {
  return C && C.__esModule && Object.prototype.hasOwnProperty.call(C, "default") ? C.default : C;
}
function getAugmentedNamespace(C) {
  if (C.__esModule)
    return C;
  var H = C.default;
  if (typeof H == "function") {
    var U = function W() {
      return this instanceof W ? Reflect.construct(H, arguments, this.constructor) : H.apply(this, arguments);
    };
    U.prototype = H.prototype;
  } else
    U = {};
  return Object.defineProperty(U, "__esModule", { value: !0 }), Object.keys(C).forEach(function(W) {
    var K = Object.getOwnPropertyDescriptor(C, W);
    Object.defineProperty(U, W, K.get ? K : {
      enumerable: !0,
      get: function() {
        return C[W];
      }
    });
  }), U;
}
const canUseDocElement = () => canUseDom$1() && window.document.documentElement;
let runtimeLocale = _extends({}, defaultLocale.Modal);
function changeConfirmLocale(C) {
  C ? runtimeLocale = _extends(_extends({}, runtimeLocale), C) : runtimeLocale = _extends({}, defaultLocale.Modal);
}
function getConfirmLocale() {
  return runtimeLocale;
}
const ANT_MARK = "internalMark", LocaleProvider = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ALocaleProvider",
  props: {
    locale: {
      type: Object
    },
    ANT_MARK__: String
  },
  setup(C, H) {
    let {
      slots: U
    } = H;
    warning$2(C.ANT_MARK__ === ANT_MARK, "LocaleProvider", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead");
    const W = reactive({
      antLocale: _extends(_extends({}, C.locale), {
        exist: !0
      }),
      ANT_MARK__: ANT_MARK
    });
    return provide("localeData", W), watch(() => C.locale, (K) => {
      changeConfirmLocale(K && K.Modal), W.antLocale = _extends(_extends({}, K), {
        exist: !0
      });
    }, {
      immediate: !0
    }), () => {
      var K;
      return (K = U.default) === null || K === void 0 ? void 0 : K.call(U);
    };
  }
});
LocaleProvider.install = function(C) {
  return C.component(LocaleProvider.name, LocaleProvider), C;
};
const locale$5 = withInstall(LocaleProvider), Notice = defineComponent({
  name: "Notice",
  inheritAttrs: !1,
  props: ["prefixCls", "duration", "updateMark", "noticeKey", "closeIcon", "closable", "props", "onClick", "onClose", "holder", "visible"],
  setup(C, H) {
    let {
      attrs: U,
      slots: W
    } = H, K, G = !1;
    const X = computed(() => C.duration === void 0 ? 4.5 : C.duration), Z = () => {
      X.value && !G && (K = setTimeout(() => {
        ee();
      }, X.value * 1e3));
    }, Q = () => {
      K && (clearTimeout(K), K = null);
    }, ee = (re) => {
      re && re.stopPropagation(), Q();
      const {
        onClose: ne,
        noticeKey: ae
      } = C;
      ne && ne(ae);
    }, te = () => {
      Q(), Z();
    };
    return onMounted(() => {
      Z();
    }), onUnmounted(() => {
      G = !0, Q();
    }), watch([X, () => C.updateMark, () => C.visible], (re, ne) => {
      let [ae, oe, ie] = re, [se, ue, le] = ne;
      (ae !== se || oe !== ue || ie !== le && le) && te();
    }, {
      flush: "post"
    }), () => {
      var re, ne;
      const {
        prefixCls: ae,
        closable: oe,
        closeIcon: ie = (re = W.closeIcon) === null || re === void 0 ? void 0 : re.call(W),
        onClick: se,
        holder: ue
      } = C, {
        class: le,
        style: ce
      } = U, fe = `${ae}-notice`, pe = Object.keys(U).reduce((de, ge) => ((ge.startsWith("data-") || ge.startsWith("aria-") || ge === "role") && (de[ge] = U[ge]), de), {}), he = createVNode("div", _objectSpread2({
        class: classNames(fe, le, {
          [`${fe}-closable`]: oe
        }),
        style: ce,
        onMouseenter: Q,
        onMouseleave: Z,
        onClick: se
      }, pe), [createVNode("div", {
        class: `${fe}-content`
      }, [(ne = W.default) === null || ne === void 0 ? void 0 : ne.call(W)]), oe ? createVNode("a", {
        tabindex: 0,
        onClick: ee,
        class: `${fe}-close`
      }, [ie || createVNode("span", {
        class: `${fe}-close-x`
      }, null)]) : null]);
      return ue ? createVNode(Teleport, {
        to: ue
      }, {
        default: () => he
      }) : he;
    };
  }
});
var __rest$5 = function(C, H) {
  var U = {};
  for (var W in C)
    Object.prototype.hasOwnProperty.call(C, W) && H.indexOf(W) < 0 && (U[W] = C[W]);
  if (C != null && typeof Object.getOwnPropertySymbols == "function")
    for (var K = 0, W = Object.getOwnPropertySymbols(C); K < W.length; K++)
      H.indexOf(W[K]) < 0 && Object.prototype.propertyIsEnumerable.call(C, W[K]) && (U[W[K]] = C[W[K]]);
  return U;
};
let seed$1 = 0;
const now$2 = Date.now();
function getUuid$1() {
  const C = seed$1;
  return seed$1 += 1, `rcNotification_${now$2}_${C}`;
}
const Notification$1 = defineComponent({
  name: "Notification",
  inheritAttrs: !1,
  props: ["prefixCls", "transitionName", "animation", "maxCount", "closeIcon", "hashId"],
  setup(C, H) {
    let {
      attrs: U,
      expose: W,
      slots: K
    } = H;
    const G = /* @__PURE__ */ new Map(), X = ref([]), Z = computed(() => {
      const {
        prefixCls: te,
        animation: re = "fade"
      } = C;
      let ne = C.transitionName;
      return !ne && re && (ne = `${te}-${re}`), getTransitionGroupProps(ne);
    }), Q = (te, re) => {
      const ne = te.key || getUuid$1(), ae = _extends(_extends({}, te), {
        key: ne
      }), {
        maxCount: oe
      } = C, ie = X.value.map((ue) => ue.notice.key).indexOf(ne), se = X.value.concat();
      ie !== -1 ? se.splice(ie, 1, {
        notice: ae,
        holderCallback: re
      }) : (oe && X.value.length >= oe && (ae.key = se[0].notice.key, ae.updateMark = getUuid$1(), ae.userPassKey = ne, se.shift()), se.push({
        notice: ae,
        holderCallback: re
      })), X.value = se;
    }, ee = (te) => {
      X.value = X.value.filter((re) => {
        let {
          notice: {
            key: ne,
            userPassKey: ae
          }
        } = re;
        return (ae || ne) !== te;
      });
    };
    return W({
      add: Q,
      remove: ee,
      notices: X
    }), () => {
      var te;
      const {
        prefixCls: re,
        closeIcon: ne = (te = K.closeIcon) === null || te === void 0 ? void 0 : te.call(K, {
          prefixCls: re
        })
      } = C, ae = X.value.map((ie, se) => {
        let {
          notice: ue,
          holderCallback: le
        } = ie;
        const ce = se === X.value.length - 1 ? ue.updateMark : void 0, {
          key: fe,
          userPassKey: pe
        } = ue, {
          content: he
        } = ue, de = _extends(_extends(_extends({
          prefixCls: re,
          closeIcon: typeof ne == "function" ? ne({
            prefixCls: re
          }) : ne
        }, ue), ue.props), {
          key: fe,
          noticeKey: pe || fe,
          updateMark: ce,
          onClose: (ge) => {
            var ve;
            ee(ge), (ve = ue.onClose) === null || ve === void 0 || ve.call(ue);
          },
          onClick: ue.onClick
        });
        return le ? createVNode("div", {
          key: fe,
          class: `${re}-hook-holder`,
          ref: (ge) => {
            typeof fe > "u" || (ge ? (G.set(fe, ge), le(ge, de)) : G.delete(fe));
          }
        }, null) : createVNode(Notice, _objectSpread2(_objectSpread2({}, de), {}, {
          class: classNames(de.class, C.hashId)
        }), {
          default: () => [typeof he == "function" ? he({
            prefixCls: re
          }) : he]
        });
      }), oe = {
        [re]: 1,
        [U.class]: !!U.class,
        [C.hashId]: !0
      };
      return createVNode("div", {
        class: oe,
        style: U.style || {
          top: "65px",
          left: "50%"
        }
      }, [createVNode(TransitionGroup, _objectSpread2({
        tag: "div"
      }, Z.value), {
        default: () => [ae]
      })]);
    };
  }
});
Notification$1.newInstance = function(H, U) {
  const W = H || {}, {
    name: K = "notification",
    getContainer: G,
    appContext: X,
    prefixCls: Z,
    rootPrefixCls: Q,
    transitionName: ee,
    hasTransitionName: te,
    useStyle: re
  } = W, ne = __rest$5(W, ["name", "getContainer", "appContext", "prefixCls", "rootPrefixCls", "transitionName", "hasTransitionName", "useStyle"]), ae = document.createElement("div");
  G ? G().appendChild(ae) : document.body.appendChild(ae);
  const oe = defineComponent({
    compatConfig: {
      MODE: 3
    },
    name: "NotificationWrapper",
    setup(se, ue) {
      let {
        attrs: le
      } = ue;
      const ce = shallowRef(), fe = computed(() => globalConfigForApi.getPrefixCls(K, Z)), [, pe] = re(fe);
      return onMounted(() => {
        U({
          notice(he) {
            var de;
            (de = ce.value) === null || de === void 0 || de.add(he);
          },
          removeNotice(he) {
            var de;
            (de = ce.value) === null || de === void 0 || de.remove(he);
          },
          destroy() {
            render(null, ae), ae.parentNode && ae.parentNode.removeChild(ae);
          },
          component: ce
        });
      }), () => {
        const he = globalConfigForApi, de = he.getRootPrefixCls(Q, fe.value), ge = te ? ee : `${fe.value}-${ee}`;
        return createVNode(ConfigProvider$1, _objectSpread2(_objectSpread2({}, he), {}, {
          prefixCls: de
        }), {
          default: () => [createVNode(Notification$1, _objectSpread2(_objectSpread2({
            ref: ce
          }, le), {}, {
            prefixCls: fe.value,
            transitionName: ge,
            hashId: pe.value
          }), null)]
        });
      };
    }
  }), ie = createVNode(oe, ne);
  ie.appContext = X || ie.appContext, render(ie, ae);
};
const Notification$2 = Notification$1;
let seed = 0;
const now$1 = Date.now();
function getUuid() {
  const C = seed;
  return seed += 1, `rcNotification_${now$1}_${C}`;
}
const Notification = defineComponent({
  name: "HookNotification",
  inheritAttrs: !1,
  props: ["prefixCls", "transitionName", "animation", "maxCount", "closeIcon", "hashId", "remove", "notices", "getStyles", "getClassName", "onAllRemoved", "getContainer"],
  setup(C, H) {
    let {
      attrs: U,
      slots: W
    } = H;
    const K = /* @__PURE__ */ new Map(), G = computed(() => C.notices), X = computed(() => {
      let te = C.transitionName;
      if (!te && C.animation)
        switch (typeof C.animation) {
          case "string":
            te = C.animation;
            break;
          case "function":
            te = C.animation().name;
            break;
          case "object":
            te = C.animation.name;
            break;
          default:
            te = `${C.prefixCls}-fade`;
            break;
        }
      return getTransitionGroupProps(te);
    }), Z = (te) => C.remove(te), Q = ref({});
    watch(G, () => {
      const te = {};
      Object.keys(Q.value).forEach((re) => {
        te[re] = [];
      }), C.notices.forEach((re) => {
        const {
          placement: ne = "topRight"
        } = re.notice;
        ne && (te[ne] = te[ne] || [], te[ne].push(re));
      }), Q.value = te;
    });
    const ee = computed(() => Object.keys(Q.value));
    return () => {
      var te;
      const {
        prefixCls: re,
        closeIcon: ne = (te = W.closeIcon) === null || te === void 0 ? void 0 : te.call(W, {
          prefixCls: re
        })
      } = C, ae = ee.value.map((oe) => {
        var ie, se;
        const ue = Q.value[oe], le = (ie = C.getClassName) === null || ie === void 0 ? void 0 : ie.call(C, oe), ce = (se = C.getStyles) === null || se === void 0 ? void 0 : se.call(C, oe), fe = ue.map((de, ge) => {
          let {
            notice: ve,
            holderCallback: me
          } = de;
          const ye = ge === G.value.length - 1 ? ve.updateMark : void 0, {
            key: be,
            userPassKey: Ce
          } = ve, {
            content: $e
          } = ve, xe = _extends(_extends(_extends({
            prefixCls: re,
            closeIcon: typeof ne == "function" ? ne({
              prefixCls: re
            }) : ne
          }, ve), ve.props), {
            key: be,
            noticeKey: Ce || be,
            updateMark: ye,
            onClose: (_e) => {
              var Ae;
              Z(_e), (Ae = ve.onClose) === null || Ae === void 0 || Ae.call(ve);
            },
            onClick: ve.onClick
          });
          return me ? createVNode("div", {
            key: be,
            class: `${re}-hook-holder`,
            ref: (_e) => {
              typeof be > "u" || (_e ? (K.set(be, _e), me(_e, xe)) : K.delete(be));
            }
          }, null) : createVNode(Notice, _objectSpread2(_objectSpread2({}, xe), {}, {
            class: classNames(xe.class, C.hashId)
          }), {
            default: () => [typeof $e == "function" ? $e({
              prefixCls: re
            }) : $e]
          });
        }), pe = {
          [re]: 1,
          [`${re}-${oe}`]: 1,
          [U.class]: !!U.class,
          [C.hashId]: !0,
          [le]: !!le
        };
        function he() {
          var de;
          ue.length > 0 || (Reflect.deleteProperty(Q.value, oe), (de = C.onAllRemoved) === null || de === void 0 || de.call(C));
        }
        return createVNode("div", {
          key: oe,
          class: pe,
          style: U.style || ce || {
            top: "65px",
            left: "50%"
          }
        }, [createVNode(TransitionGroup, _objectSpread2(_objectSpread2({
          tag: "div"
        }, X.value), {}, {
          onAfterLeave: he
        }), {
          default: () => [fe]
        })]);
      });
      return createVNode(Portal$1, {
        getContainer: C.getContainer
      }, {
        default: () => [ae]
      });
    };
  }
}), HookNotification = Notification;
var __rest$4 = function(C, H) {
  var U = {};
  for (var W in C)
    Object.prototype.hasOwnProperty.call(C, W) && H.indexOf(W) < 0 && (U[W] = C[W]);
  if (C != null && typeof Object.getOwnPropertySymbols == "function")
    for (var K = 0, W = Object.getOwnPropertySymbols(C); K < W.length; K++)
      H.indexOf(W[K]) < 0 && Object.prototype.propertyIsEnumerable.call(C, W[K]) && (U[W[K]] = C[W[K]]);
  return U;
};
const defaultGetContainer$1 = () => document.body;
let uniqueKey = 0;
function mergeConfig() {
  const C = {};
  for (var H = arguments.length, U = new Array(H), W = 0; W < H; W++)
    U[W] = arguments[W];
  return U.forEach((K) => {
    K && Object.keys(K).forEach((G) => {
      const X = K[G];
      X !== void 0 && (C[G] = X);
    });
  }), C;
}
function useNotification$1() {
  let C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    getContainer: H = defaultGetContainer$1,
    motion: U,
    prefixCls: W,
    maxCount: K,
    getClassName: G,
    getStyles: X,
    onAllRemoved: Z
  } = C, Q = __rest$4(C, ["getContainer", "motion", "prefixCls", "maxCount", "getClassName", "getStyles", "onAllRemoved"]), ee = shallowRef([]), te = shallowRef(), re = (ue, le) => {
    const ce = ue.key || getUuid(), fe = _extends(_extends({}, ue), {
      key: ce
    }), pe = ee.value.map((de) => de.notice.key).indexOf(ce), he = ee.value.concat();
    pe !== -1 ? he.splice(pe, 1, {
      notice: fe,
      holderCallback: le
    }) : (K && ee.value.length >= K && (fe.key = he[0].notice.key, fe.updateMark = getUuid(), fe.userPassKey = ce, he.shift()), he.push({
      notice: fe,
      holderCallback: le
    })), ee.value = he;
  }, ne = (ue) => {
    ee.value = ee.value.filter((le) => {
      let {
        notice: {
          key: ce,
          userPassKey: fe
        }
      } = le;
      return (fe || ce) !== ue;
    });
  }, ae = () => {
    ee.value = [];
  }, oe = computed(() => createVNode(HookNotification, {
    ref: te,
    prefixCls: W,
    maxCount: K,
    notices: ee.value,
    remove: ne,
    getClassName: G,
    getStyles: X,
    animation: U,
    hashId: C.hashId,
    onAllRemoved: Z,
    getContainer: H
  }, null)), ie = shallowRef([]), se = {
    open: (ue) => {
      const le = mergeConfig(Q, ue);
      (le.key === null || le.key === void 0) && (le.key = `vc-notification-${uniqueKey}`, uniqueKey += 1), ie.value = [...ie.value, {
        type: "open",
        config: le
      }];
    },
    close: (ue) => {
      ie.value = [...ie.value, {
        type: "close",
        key: ue
      }];
    },
    destroy: () => {
      ie.value = [...ie.value, {
        type: "destroy"
      }];
    }
  };
  return watch(ie, () => {
    ie.value.length && (ie.value.forEach((ue) => {
      switch (ue.type) {
        case "open":
          re(ue.config);
          break;
        case "close":
          ne(ue.key);
          break;
        case "destroy":
          ae();
          break;
      }
    }), ie.value = []);
  }), [se, () => oe.value];
}
const genMessageStyle = (C) => {
  const {
    componentCls: H,
    iconCls: U,
    boxShadowSecondary: W,
    colorBgElevated: K,
    colorSuccess: G,
    colorError: X,
    colorWarning: Z,
    colorInfo: Q,
    fontSizeLG: ee,
    motionEaseInOutCirc: te,
    motionDurationSlow: re,
    marginXS: ne,
    paddingXS: ae,
    borderRadiusLG: oe,
    zIndexPopup: ie,
    // Custom token
    messageNoticeContentPadding: se
  } = C, ue = new Keyframes("MessageMoveIn", {
    "0%": {
      padding: 0,
      transform: "translateY(-100%)",
      opacity: 0
    },
    "100%": {
      padding: ae,
      transform: "translateY(0)",
      opacity: 1
    }
  }), le = new Keyframes("MessageMoveOut", {
    "0%": {
      maxHeight: C.height,
      padding: ae,
      opacity: 1
    },
    "100%": {
      maxHeight: 0,
      padding: 0,
      opacity: 0
    }
  });
  return [
    // ============================ Holder ============================
    {
      [H]: _extends(_extends({}, resetComponent(C)), {
        position: "fixed",
        top: ne,
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        pointerEvents: "none",
        zIndex: ie,
        [`${H}-move-up`]: {
          animationFillMode: "forwards"
        },
        [`
        ${H}-move-up-appear,
        ${H}-move-up-enter
      `]: {
          animationName: ue,
          animationDuration: re,
          animationPlayState: "paused",
          animationTimingFunction: te
        },
        [`
        ${H}-move-up-appear${H}-move-up-appear-active,
        ${H}-move-up-enter${H}-move-up-enter-active
      `]: {
          animationPlayState: "running"
        },
        [`${H}-move-up-leave`]: {
          animationName: le,
          animationDuration: re,
          animationPlayState: "paused",
          animationTimingFunction: te
        },
        [`${H}-move-up-leave${H}-move-up-leave-active`]: {
          animationPlayState: "running"
        },
        "&-rtl": {
          direction: "rtl",
          span: {
            direction: "rtl"
          }
        }
      })
    },
    // ============================ Notice ============================
    {
      [`${H}-notice`]: {
        padding: ae,
        textAlign: "center",
        [U]: {
          verticalAlign: "text-bottom",
          marginInlineEnd: ne,
          fontSize: ee
        },
        [`${H}-notice-content`]: {
          display: "inline-block",
          padding: se,
          background: K,
          borderRadius: oe,
          boxShadow: W,
          pointerEvents: "all"
        },
        [`${H}-success ${U}`]: {
          color: G
        },
        [`${H}-error ${U}`]: {
          color: X
        },
        [`${H}-warning ${U}`]: {
          color: Z
        },
        [`
        ${H}-info ${U},
        ${H}-loading ${U}`]: {
          color: Q
        }
      }
    },
    // ============================= Pure =============================
    {
      [`${H}-notice-pure-panel`]: {
        padding: 0,
        textAlign: "start"
      }
    }
  ];
}, useStyle$4 = genComponentStyleHook("Message", (C) => {
  const H = merge$1(C, {
    messageNoticeContentPadding: `${(C.controlHeightLG - C.fontSize * C.lineHeight) / 2}px ${C.paddingSM}px`
  });
  return [genMessageStyle(H)];
}, (C) => ({
  height: 150,
  zIndexPopup: C.zIndexPopupBase + 10
})), TypeIcon = {
  info: createVNode(InfoCircleFilled$1, null, null),
  success: createVNode(CheckCircleFilled$1, null, null),
  error: createVNode(CloseCircleFilled$1, null, null),
  warning: createVNode(ExclamationCircleFilled$1, null, null),
  loading: createVNode(LoadingOutlined$1, null, null)
}, PureContent$1 = defineComponent({
  name: "PureContent",
  inheritAttrs: !1,
  props: ["prefixCls", "type", "icon"],
  setup(C, H) {
    let {
      slots: U
    } = H;
    return () => {
      var W;
      return createVNode("div", {
        class: classNames(`${C.prefixCls}-custom-content`, `${C.prefixCls}-${C.type}`)
      }, [C.icon || TypeIcon[C.type], createVNode("span", null, [(W = U.default) === null || W === void 0 ? void 0 : W.call(U)])]);
    };
  }
});
defineComponent({
  name: "PurePanel",
  inheritAttrs: !1,
  props: ["prefixCls", "class", "type", "icon", "content"],
  setup(C, H) {
    let {
      slots: U,
      attrs: W
    } = H;
    var K;
    const {
      getPrefixCls: G
    } = useConfigContextInject(), X = computed(() => C.prefixCls || G("message")), [, Z] = useStyle$4(X);
    return createVNode(Notice, _objectSpread2(_objectSpread2({}, W), {}, {
      prefixCls: X.value,
      class: classNames(Z.value, `${X.value}-notice-pure-panel`),
      noticeKey: "pure",
      duration: null
    }), {
      default: () => [createVNode(PureContent$1, {
        prefixCls: X.value,
        type: C.type,
        icon: C.icon
      }, {
        default: () => [(K = U.default) === null || K === void 0 ? void 0 : K.call(U)]
      })]
    });
  }
});
var __rest$3 = function(C, H) {
  var U = {};
  for (var W in C)
    Object.prototype.hasOwnProperty.call(C, W) && H.indexOf(W) < 0 && (U[W] = C[W]);
  if (C != null && typeof Object.getOwnPropertySymbols == "function")
    for (var K = 0, W = Object.getOwnPropertySymbols(C); K < W.length; K++)
      H.indexOf(W[K]) < 0 && Object.prototype.propertyIsEnumerable.call(C, W[K]) && (U[W[K]] = C[W[K]]);
  return U;
};
const DEFAULT_OFFSET$1 = 8, DEFAULT_DURATION$1 = 3, Holder$1 = defineComponent({
  name: "Holder",
  inheritAttrs: !1,
  props: ["top", "prefixCls", "getContainer", "maxCount", "duration", "rtl", "transitionName", "onAllRemoved"],
  setup(C, H) {
    let {
      expose: U
    } = H;
    var W, K;
    const {
      getPrefixCls: G,
      getPopupContainer: X
    } = useConfigInject("message", C), Z = computed(() => G("message", C.prefixCls)), [, Q] = useStyle$4(Z), ee = () => {
      var ie;
      const se = (ie = C.top) !== null && ie !== void 0 ? ie : DEFAULT_OFFSET$1;
      return {
        left: "50%",
        transform: "translateX(-50%)",
        top: typeof se == "number" ? `${se}px` : se
      };
    }, te = () => classNames(Q.value, C.rtl ? `${Z.value}-rtl` : ""), re = () => {
      var ie;
      return getMotion$1({
        prefixCls: Z.value,
        animation: (ie = C.animation) !== null && ie !== void 0 ? ie : "move-up",
        transitionName: C.transitionName
      });
    }, ne = createVNode("span", {
      class: `${Z.value}-close-x`
    }, [createVNode(CloseOutlined$1, {
      class: `${Z.value}-close-icon`
    }, null)]), [ae, oe] = useNotification$1({
      //@ts-ignore
      getStyles: ee,
      prefixCls: Z.value,
      getClassName: te,
      motion: re,
      closable: !1,
      closeIcon: ne,
      duration: (W = C.duration) !== null && W !== void 0 ? W : DEFAULT_DURATION$1,
      getContainer: (K = C.staticGetContainer) !== null && K !== void 0 ? K : X.value,
      maxCount: C.maxCount,
      onAllRemoved: C.onAllRemoved
    });
    return U(_extends(_extends({}, ae), {
      prefixCls: Z,
      hashId: Q
    })), oe;
  }
});
let keyIndex = 0;
function useInternalMessage(C) {
  const H = shallowRef(null), U = Symbol("messageHolderKey"), W = (Q) => {
    var ee;
    (ee = H.value) === null || ee === void 0 || ee.close(Q);
  }, K = (Q) => {
    if (!H.value) {
      const pe = () => {
      };
      return pe.then = () => {
      }, pe;
    }
    const {
      open: ee,
      prefixCls: te,
      hashId: re
    } = H.value, ne = `${te}-notice`, {
      content: ae,
      icon: oe,
      type: ie,
      key: se,
      class: ue,
      onClose: le
    } = Q, ce = __rest$3(Q, ["content", "icon", "type", "key", "class", "onClose"]);
    let fe = se;
    return fe == null && (keyIndex += 1, fe = `antd-message-${keyIndex}`), wrapPromiseFn((pe) => (ee(_extends(_extends({}, ce), {
      key: fe,
      content: () => createVNode(PureContent$1, {
        prefixCls: te,
        type: ie,
        icon: typeof oe == "function" ? oe() : oe
      }, {
        default: () => [typeof ae == "function" ? ae() : ae]
      }),
      placement: "top",
      // @ts-ignore
      class: classNames(ie && `${ne}-${ie}`, re, ue),
      onClose: () => {
        le == null || le(), pe();
      }
    })), () => {
      W(fe);
    }));
  }, X = {
    open: K,
    destroy: (Q) => {
      var ee;
      Q !== void 0 ? W(Q) : (ee = H.value) === null || ee === void 0 || ee.destroy();
    }
  };
  return ["info", "success", "warning", "error", "loading"].forEach((Q) => {
    const ee = (te, re, ne) => {
      let ae;
      te && typeof te == "object" && "content" in te ? ae = te : ae = {
        content: te
      };
      let oe, ie;
      typeof re == "function" ? ie = re : (oe = re, ie = ne);
      const se = _extends(_extends({
        onClose: ie,
        duration: oe
      }, ae), {
        type: Q
      });
      return K(se);
    };
    X[Q] = ee;
  }), [X, () => createVNode(Holder$1, _objectSpread2(_objectSpread2({
    key: U
  }, C), {}, {
    ref: H
  }), null)];
}
function useMessage(C) {
  return useInternalMessage(C);
}
let defaultDuration$1 = 3, defaultTop$1, messageInstance, key = 1, localPrefixCls = "", transitionName = "move-up", hasTransitionName = !1, getContainer = () => document.body, maxCount$1, rtl$1 = !1;
function getKeyThenIncreaseKey() {
  return key++;
}
function setMessageConfig(C) {
  C.top !== void 0 && (defaultTop$1 = C.top, messageInstance = null), C.duration !== void 0 && (defaultDuration$1 = C.duration), C.prefixCls !== void 0 && (localPrefixCls = C.prefixCls), C.getContainer !== void 0 && (getContainer = C.getContainer, messageInstance = null), C.transitionName !== void 0 && (transitionName = C.transitionName, messageInstance = null, hasTransitionName = !0), C.maxCount !== void 0 && (maxCount$1 = C.maxCount, messageInstance = null), C.rtl !== void 0 && (rtl$1 = C.rtl);
}
function getMessageInstance(C, H) {
  if (messageInstance) {
    H(messageInstance);
    return;
  }
  Notification$2.newInstance({
    appContext: C.appContext,
    prefixCls: C.prefixCls || localPrefixCls,
    rootPrefixCls: C.rootPrefixCls,
    transitionName,
    hasTransitionName,
    style: {
      top: defaultTop$1
    },
    getContainer: getContainer || C.getPopupContainer,
    maxCount: maxCount$1,
    name: "message",
    useStyle: useStyle$4
  }, (U) => {
    if (messageInstance) {
      H(messageInstance);
      return;
    }
    messageInstance = U, H(U);
  });
}
const typeToIcon$2 = {
  info: InfoCircleFilled$1,
  success: CheckCircleFilled$1,
  error: CloseCircleFilled$1,
  warning: ExclamationCircleFilled$1,
  loading: LoadingOutlined$1
}, typeList = Object.keys(typeToIcon$2);
function notice$1(C) {
  const H = C.duration !== void 0 ? C.duration : defaultDuration$1, U = C.key || getKeyThenIncreaseKey(), W = new Promise((G) => {
    const X = () => (typeof C.onClose == "function" && C.onClose(), G(!0));
    getMessageInstance(C, (Z) => {
      Z.notice({
        key: U,
        duration: H,
        style: C.style || {},
        class: C.class,
        content: (Q) => {
          let {
            prefixCls: ee
          } = Q;
          const te = typeToIcon$2[C.type], re = te ? createVNode(te, null, null) : "", ne = classNames(`${ee}-custom-content`, {
            [`${ee}-${C.type}`]: C.type,
            [`${ee}-rtl`]: rtl$1 === !0
          });
          return createVNode("div", {
            class: ne
          }, [typeof C.icon == "function" ? C.icon() : C.icon || re, createVNode("span", null, [typeof C.content == "function" ? C.content() : C.content])]);
        },
        onClose: X,
        onClick: C.onClick
      });
    });
  }), K = () => {
    messageInstance && messageInstance.removeNotice(U);
  };
  return K.then = (G, X) => W.then(G, X), K.promise = W, K;
}
function isArgsProps(C) {
  return Object.prototype.toString.call(C) === "[object Object]" && !!C.content;
}
const api$1 = {
  open: notice$1,
  config: setMessageConfig,
  destroy(C) {
    if (messageInstance)
      if (C) {
        const {
          removeNotice: H
        } = messageInstance;
        H(C);
      } else {
        const {
          destroy: H
        } = messageInstance;
        H(), messageInstance = null;
      }
  }
};
function attachTypeApi(C, H) {
  C[H] = (U, W, K) => isArgsProps(U) ? C.open(_extends(_extends({}, U), {
    type: H
  })) : (typeof W == "function" && (K = W, W = void 0), C.open({
    content: U,
    duration: W,
    type: H,
    onClose: K
  }));
}
typeList.forEach((C) => attachTypeApi(api$1, C));
api$1.warn = api$1.warning;
api$1.useMessage = useMessage;
const message = api$1, genNotificationPlacementStyle = (C) => {
  const {
    componentCls: H,
    width: U,
    notificationMarginEdge: W
  } = C, K = new Keyframes("antNotificationTopFadeIn", {
    "0%": {
      marginTop: "-100%",
      opacity: 0
    },
    "100%": {
      marginTop: 0,
      opacity: 1
    }
  }), G = new Keyframes("antNotificationBottomFadeIn", {
    "0%": {
      marginBottom: "-100%",
      opacity: 0
    },
    "100%": {
      marginBottom: 0,
      opacity: 1
    }
  }), X = new Keyframes("antNotificationLeftFadeIn", {
    "0%": {
      right: {
        _skip_check_: !0,
        value: U
      },
      opacity: 0
    },
    "100%": {
      right: {
        _skip_check_: !0,
        value: 0
      },
      opacity: 1
    }
  });
  return {
    [`&${H}-top, &${H}-bottom`]: {
      marginInline: 0
    },
    [`&${H}-top`]: {
      [`${H}-fade-enter${H}-fade-enter-active, ${H}-fade-appear${H}-fade-appear-active`]: {
        animationName: K
      }
    },
    [`&${H}-bottom`]: {
      [`${H}-fade-enter${H}-fade-enter-active, ${H}-fade-appear${H}-fade-appear-active`]: {
        animationName: G
      }
    },
    [`&${H}-topLeft, &${H}-bottomLeft`]: {
      marginInlineEnd: 0,
      marginInlineStart: W,
      [`${H}-fade-enter${H}-fade-enter-active, ${H}-fade-appear${H}-fade-appear-active`]: {
        animationName: X
      }
    }
  };
}, genNotificationPlacementStyle$1 = genNotificationPlacementStyle, genNotificationStyle = (C) => {
  const {
    iconCls: H,
    componentCls: U,
    // .ant-notification
    boxShadowSecondary: W,
    fontSizeLG: K,
    notificationMarginBottom: G,
    borderRadiusLG: X,
    colorSuccess: Z,
    colorInfo: Q,
    colorWarning: ee,
    colorError: te,
    colorTextHeading: re,
    notificationBg: ne,
    notificationPadding: ae,
    notificationMarginEdge: oe,
    motionDurationMid: ie,
    motionEaseInOut: se,
    fontSize: ue,
    lineHeight: le,
    width: ce,
    notificationIconSize: fe
  } = C, pe = `${U}-notice`, he = new Keyframes("antNotificationFadeIn", {
    "0%": {
      left: {
        _skip_check_: !0,
        value: ce
      },
      opacity: 0
    },
    "100%": {
      left: {
        _skip_check_: !0,
        value: 0
      },
      opacity: 1
    }
  }), de = new Keyframes("antNotificationFadeOut", {
    "0%": {
      maxHeight: C.animationMaxHeight,
      marginBottom: G,
      opacity: 1
    },
    "100%": {
      maxHeight: 0,
      marginBottom: 0,
      paddingTop: 0,
      paddingBottom: 0,
      opacity: 0
    }
  });
  return [
    // ============================ Holder ============================
    {
      [U]: _extends(_extends(_extends(_extends({}, resetComponent(C)), {
        position: "fixed",
        zIndex: C.zIndexPopup,
        marginInlineEnd: oe,
        [`${U}-hook-holder`]: {
          position: "relative"
        },
        [`&${U}-top, &${U}-bottom`]: {
          [`${U}-notice`]: {
            marginInline: "auto auto"
          }
        },
        [`&${U}-topLeft, &${U}-bottomLeft`]: {
          [`${U}-notice`]: {
            marginInlineEnd: "auto",
            marginInlineStart: 0
          }
        },
        //  animation
        [`${U}-fade-enter, ${U}-fade-appear`]: {
          animationDuration: C.motionDurationMid,
          animationTimingFunction: se,
          animationFillMode: "both",
          opacity: 0,
          animationPlayState: "paused"
        },
        [`${U}-fade-leave`]: {
          animationTimingFunction: se,
          animationFillMode: "both",
          animationDuration: ie,
          animationPlayState: "paused"
        },
        [`${U}-fade-enter${U}-fade-enter-active, ${U}-fade-appear${U}-fade-appear-active`]: {
          animationName: he,
          animationPlayState: "running"
        },
        [`${U}-fade-leave${U}-fade-leave-active`]: {
          animationName: de,
          animationPlayState: "running"
        }
      }), genNotificationPlacementStyle$1(C)), {
        // RTL
        "&-rtl": {
          direction: "rtl",
          [`${U}-notice-btn`]: {
            float: "left"
          }
        }
      })
    },
    // ============================ Notice ============================
    {
      [pe]: {
        position: "relative",
        width: ce,
        maxWidth: `calc(100vw - ${oe * 2}px)`,
        marginBottom: G,
        marginInlineStart: "auto",
        padding: ae,
        overflow: "hidden",
        lineHeight: le,
        wordWrap: "break-word",
        background: ne,
        borderRadius: X,
        boxShadow: W,
        [`${U}-close-icon`]: {
          fontSize: ue,
          cursor: "pointer"
        },
        [`${pe}-message`]: {
          marginBottom: C.marginXS,
          color: re,
          fontSize: K,
          lineHeight: C.lineHeightLG
        },
        [`${pe}-description`]: {
          fontSize: ue
        },
        [`&${pe}-closable ${pe}-message`]: {
          paddingInlineEnd: C.paddingLG
        },
        [`${pe}-with-icon ${pe}-message`]: {
          marginBottom: C.marginXS,
          marginInlineStart: C.marginSM + fe,
          fontSize: K
        },
        [`${pe}-with-icon ${pe}-description`]: {
          marginInlineStart: C.marginSM + fe,
          fontSize: ue
        },
        // Icon & color style in different selector level
        // https://github.com/ant-design/ant-design/issues/16503
        // https://github.com/ant-design/ant-design/issues/15512
        [`${pe}-icon`]: {
          position: "absolute",
          fontSize: fe,
          lineHeight: 0,
          // icon-font
          [`&-success${H}`]: {
            color: Z
          },
          [`&-info${H}`]: {
            color: Q
          },
          [`&-warning${H}`]: {
            color: ee
          },
          [`&-error${H}`]: {
            color: te
          }
        },
        [`${pe}-close`]: {
          position: "absolute",
          top: C.notificationPaddingVertical,
          insetInlineEnd: C.notificationPaddingHorizontal,
          color: C.colorIcon,
          outline: "none",
          width: C.notificationCloseButtonSize,
          height: C.notificationCloseButtonSize,
          borderRadius: C.borderRadiusSM,
          transition: `background-color ${C.motionDurationMid}, color ${C.motionDurationMid}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&:hover": {
            color: C.colorIconHover,
            backgroundColor: C.wireframe ? "transparent" : C.colorFillContent
          }
        },
        [`${pe}-btn`]: {
          float: "right",
          marginTop: C.marginSM
        }
      }
    },
    // ============================= Pure =============================
    {
      [`${pe}-pure-panel`]: {
        margin: 0
      }
    }
  ];
}, useStyle$3 = genComponentStyleHook("Notification", (C) => {
  const H = C.paddingMD, U = C.paddingLG, W = merge$1(C, {
    // default.less variables
    notificationBg: C.colorBgElevated,
    notificationPaddingVertical: H,
    notificationPaddingHorizontal: U,
    // index.less variables
    notificationPadding: `${C.paddingMD}px ${C.paddingContentHorizontalLG}px`,
    notificationMarginBottom: C.margin,
    notificationMarginEdge: C.marginLG,
    animationMaxHeight: 150,
    notificationIconSize: C.fontSizeLG * C.lineHeightLG,
    notificationCloseButtonSize: C.controlHeightLG * 0.55
  });
  return [genNotificationStyle(W)];
}, (C) => ({
  zIndexPopup: C.zIndexPopupBase + 50,
  width: 384
}));
function getCloseIcon(C, H) {
  return H || createVNode("span", {
    class: `${C}-close-x`
  }, [createVNode(CloseOutlined$1, {
    class: `${C}-close-icon`
  }, null)]);
}
createVNode(InfoCircleFilled$1, null, null), createVNode(CheckCircleFilled$1, null, null), createVNode(CloseCircleFilled$1, null, null), createVNode(ExclamationCircleFilled$1, null, null), createVNode(LoadingOutlined$1, null, null);
const typeToIcon$1 = {
  success: CheckCircleFilled$1,
  info: InfoCircleFilled$1,
  error: CloseCircleFilled$1,
  warning: ExclamationCircleFilled$1
};
function PureContent(C) {
  let {
    prefixCls: H,
    icon: U,
    type: W,
    message: K,
    description: G,
    btn: X
  } = C, Z = null;
  if (U)
    Z = createVNode("span", {
      class: `${H}-icon`
    }, [renderHelper(U)]);
  else if (W) {
    const Q = typeToIcon$1[W];
    Z = createVNode(Q, {
      class: `${H}-icon ${H}-icon-${W}`
    }, null);
  }
  return createVNode("div", {
    class: classNames({
      [`${H}-with-icon`]: Z
    }),
    role: "alert"
  }, [Z, createVNode("div", {
    class: `${H}-message`
  }, [K]), createVNode("div", {
    class: `${H}-description`
  }, [G]), X && createVNode("div", {
    class: `${H}-btn`
  }, [X])]);
}
defineComponent({
  name: "PurePanel",
  inheritAttrs: !1,
  props: ["prefixCls", "icon", "type", "message", "description", "btn", "closeIcon"],
  setup(C) {
    const {
      getPrefixCls: H
    } = useConfigInject("notification", C), U = computed(() => C.prefixCls || H("notification")), W = computed(() => `${U.value}-notice`), [, K] = useStyle$3(U);
    return () => createVNode(Notice, _objectSpread2(_objectSpread2({}, C), {}, {
      prefixCls: U.value,
      class: classNames(K.value, `${W.value}-pure-panel`),
      noticeKey: "pure",
      duration: null,
      closable: C.closable,
      closeIcon: getCloseIcon(U.value, C.closeIcon)
    }), {
      default: () => [createVNode(PureContent, {
        prefixCls: W.value,
        icon: C.icon,
        type: C.type,
        message: C.message,
        description: C.description,
        btn: C.btn
      }, null)]
    });
  }
});
function getPlacementStyle(C, H, U) {
  let W;
  switch (H = typeof H == "number" ? `${H}px` : H, U = typeof U == "number" ? `${U}px` : U, C) {
    case "top":
      W = {
        left: "50%",
        transform: "translateX(-50%)",
        right: "auto",
        top: H,
        bottom: "auto"
      };
      break;
    case "topLeft":
      W = {
        left: 0,
        top: H,
        bottom: "auto"
      };
      break;
    case "topRight":
      W = {
        right: 0,
        top: H,
        bottom: "auto"
      };
      break;
    case "bottom":
      W = {
        left: "50%",
        transform: "translateX(-50%)",
        right: "auto",
        top: "auto",
        bottom: U
      };
      break;
    case "bottomLeft":
      W = {
        left: 0,
        top: "auto",
        bottom: U
      };
      break;
    default:
      W = {
        right: 0,
        top: "auto",
        bottom: U
      };
      break;
  }
  return W;
}
function getMotion(C) {
  return {
    name: `${C}-fade`
  };
}
var __rest$2 = function(C, H) {
  var U = {};
  for (var W in C)
    Object.prototype.hasOwnProperty.call(C, W) && H.indexOf(W) < 0 && (U[W] = C[W]);
  if (C != null && typeof Object.getOwnPropertySymbols == "function")
    for (var K = 0, W = Object.getOwnPropertySymbols(C); K < W.length; K++)
      H.indexOf(W[K]) < 0 && Object.prototype.propertyIsEnumerable.call(C, W[K]) && (U[W[K]] = C[W[K]]);
  return U;
};
const DEFAULT_OFFSET = 24, DEFAULT_DURATION = 4.5, Holder = defineComponent({
  name: "Holder",
  inheritAttrs: !1,
  props: ["prefixCls", "class", "type", "icon", "content", "onAllRemoved"],
  setup(C, H) {
    let {
      expose: U
    } = H;
    const {
      getPrefixCls: W,
      getPopupContainer: K
    } = useConfigInject("notification", C), G = computed(() => C.prefixCls || W("notification")), X = (ne) => {
      var ae, oe;
      return getPlacementStyle(ne, (ae = C.top) !== null && ae !== void 0 ? ae : DEFAULT_OFFSET, (oe = C.bottom) !== null && oe !== void 0 ? oe : DEFAULT_OFFSET);
    }, [, Z] = useStyle$3(G), Q = () => classNames(Z.value, {
      [`${G.value}-rtl`]: C.rtl
    }), ee = () => getMotion(G.value), [te, re] = useNotification$1({
      prefixCls: G.value,
      getStyles: X,
      getClassName: Q,
      motion: ee,
      closable: !0,
      closeIcon: getCloseIcon(G.value),
      duration: DEFAULT_DURATION,
      getContainer: () => {
        var ne, ae;
        return ((ne = C.getPopupContainer) === null || ne === void 0 ? void 0 : ne.call(C)) || ((ae = K.value) === null || ae === void 0 ? void 0 : ae.call(K)) || document.body;
      },
      maxCount: C.maxCount,
      hashId: Z.value,
      onAllRemoved: C.onAllRemoved
    });
    return U(_extends(_extends({}, te), {
      prefixCls: G.value,
      hashId: Z
    })), re;
  }
});
function useInternalNotification(C) {
  const H = shallowRef(null), U = Symbol("notificationHolderKey"), W = (Z) => {
    if (!H.value)
      return;
    const {
      open: Q,
      prefixCls: ee,
      hashId: te
    } = H.value, re = `${ee}-notice`, {
      message: ne,
      description: ae,
      icon: oe,
      type: ie,
      btn: se,
      class: ue
    } = Z, le = __rest$2(Z, ["message", "description", "icon", "type", "btn", "class"]);
    return Q(_extends(_extends({
      placement: "topRight"
    }, le), {
      content: () => createVNode(PureContent, {
        prefixCls: re,
        icon: typeof oe == "function" ? oe() : oe,
        type: ie,
        message: typeof ne == "function" ? ne() : ne,
        description: typeof ae == "function" ? ae() : ae,
        btn: typeof se == "function" ? se() : se
      }, null),
      // @ts-ignore
      class: classNames(ie && `${re}-${ie}`, te, ue)
    }));
  }, G = {
    open: W,
    destroy: (Z) => {
      var Q, ee;
      Z !== void 0 ? (Q = H.value) === null || Q === void 0 || Q.close(Z) : (ee = H.value) === null || ee === void 0 || ee.destroy();
    }
  };
  return ["success", "info", "warning", "error"].forEach((Z) => {
    G[Z] = (Q) => W(_extends(_extends({}, Q), {
      type: Z
    }));
  }), [G, () => createVNode(Holder, _objectSpread2(_objectSpread2({
    key: U
  }, C), {}, {
    ref: H
  }), null)];
}
function useNotification(C) {
  return useInternalNotification(C);
}
const notificationInstance = {};
let defaultDuration = 4.5, defaultTop = "24px", defaultBottom = "24px", defaultPrefixCls$1 = "", defaultPlacement = "topRight", defaultGetContainer = () => document.body, defaultCloseIcon = null, rtl = !1, maxCount;
function setNotificationConfig(C) {
  const {
    duration: H,
    placement: U,
    bottom: W,
    top: K,
    getContainer: G,
    closeIcon: X,
    prefixCls: Z
  } = C;
  Z !== void 0 && (defaultPrefixCls$1 = Z), H !== void 0 && (defaultDuration = H), U !== void 0 && (defaultPlacement = U), W !== void 0 && (defaultBottom = typeof W == "number" ? `${W}px` : W), K !== void 0 && (defaultTop = typeof K == "number" ? `${K}px` : K), G !== void 0 && (defaultGetContainer = G), X !== void 0 && (defaultCloseIcon = X), C.rtl !== void 0 && (rtl = C.rtl), C.maxCount !== void 0 && (maxCount = C.maxCount);
}
function getNotificationInstance(C, H) {
  let {
    prefixCls: U,
    placement: W = defaultPlacement,
    getContainer: K = defaultGetContainer,
    top: G,
    bottom: X,
    closeIcon: Z = defaultCloseIcon,
    appContext: Q
  } = C;
  const {
    getPrefixCls: ee
  } = globalConfig(), te = ee("notification", U || defaultPrefixCls$1), re = `${te}-${W}-${rtl}`, ne = notificationInstance[re];
  if (ne) {
    Promise.resolve(ne).then((oe) => {
      H(oe);
    });
    return;
  }
  const ae = classNames(`${te}-${W}`, {
    [`${te}-rtl`]: rtl === !0
  });
  Notification$2.newInstance({
    name: "notification",
    prefixCls: U || defaultPrefixCls$1,
    useStyle: useStyle$3,
    class: ae,
    style: getPlacementStyle(W, G ?? defaultTop, X ?? defaultBottom),
    appContext: Q,
    getContainer: K,
    closeIcon: (oe) => {
      let {
        prefixCls: ie
      } = oe;
      return createVNode("span", {
        class: `${ie}-close-x`
      }, [renderHelper(Z, {}, createVNode(CloseOutlined$1, {
        class: `${ie}-close-icon`
      }, null))]);
    },
    maxCount,
    hasTransitionName: !0
  }, (oe) => {
    notificationInstance[re] = oe, H(oe);
  });
}
const typeToIcon = {
  success: CheckCircleOutlined$1,
  info: InfoCircleOutlined$1,
  error: CloseCircleOutlined$1,
  warning: ExclamationCircleOutlined$1
};
function notice(C) {
  const {
    icon: H,
    type: U,
    description: W,
    message: K,
    btn: G
  } = C, X = C.duration === void 0 ? defaultDuration : C.duration;
  getNotificationInstance(C, (Z) => {
    Z.notice({
      content: (Q) => {
        let {
          prefixCls: ee
        } = Q;
        const te = `${ee}-notice`;
        let re = null;
        if (H)
          re = () => createVNode("span", {
            class: `${te}-icon`
          }, [renderHelper(H)]);
        else if (U) {
          const ne = typeToIcon[U];
          re = () => createVNode(ne, {
            class: `${te}-icon ${te}-icon-${U}`
          }, null);
        }
        return createVNode("div", {
          class: re ? `${te}-with-icon` : ""
        }, [re && re(), createVNode("div", {
          class: `${te}-message`
        }, [!W && re ? createVNode("span", {
          class: `${te}-message-single-line-auto-margin`
        }, null) : null, renderHelper(K)]), createVNode("div", {
          class: `${te}-description`
        }, [renderHelper(W)]), G ? createVNode("span", {
          class: `${te}-btn`
        }, [renderHelper(G)]) : null]);
      },
      duration: X,
      closable: !0,
      onClose: C.onClose,
      onClick: C.onClick,
      key: C.key,
      style: C.style || {},
      class: C.class
    });
  });
}
const api = {
  open: notice,
  close(C) {
    Object.keys(notificationInstance).forEach((H) => Promise.resolve(notificationInstance[H]).then((U) => {
      U.removeNotice(C);
    }));
  },
  config: setNotificationConfig,
  destroy() {
    Object.keys(notificationInstance).forEach((C) => {
      Promise.resolve(notificationInstance[C]).then((H) => {
        H.destroy();
      }), delete notificationInstance[C];
    });
  }
}, iconTypes = ["success", "info", "warning", "error"];
iconTypes.forEach((C) => {
  api[C] = (H) => api.open(_extends(_extends({}, H), {
    type: C
  }));
});
api.warn = api.warning;
api.useNotification = useNotification;
const notification = api, dynamicStyleMark = `-ant-${Date.now()}-${Math.random()}`;
function getStyle(C, H) {
  const U = {}, W = (X, Z) => {
    let Q = X.clone();
    return Q = (Z == null ? void 0 : Z(Q)) || Q, Q.toRgbString();
  }, K = (X, Z) => {
    const Q = new TinyColor(X), ee = generate$1(Q.toRgbString());
    U[`${Z}-color`] = W(Q), U[`${Z}-color-disabled`] = ee[1], U[`${Z}-color-hover`] = ee[4], U[`${Z}-color-active`] = ee[6], U[`${Z}-color-outline`] = Q.clone().setAlpha(0.2).toRgbString(), U[`${Z}-color-deprecated-bg`] = ee[0], U[`${Z}-color-deprecated-border`] = ee[2];
  };
  if (H.primaryColor) {
    K(H.primaryColor, "primary");
    const X = new TinyColor(H.primaryColor), Z = generate$1(X.toRgbString());
    Z.forEach((ee, te) => {
      U[`primary-${te + 1}`] = ee;
    }), U["primary-color-deprecated-l-35"] = W(X, (ee) => ee.lighten(35)), U["primary-color-deprecated-l-20"] = W(X, (ee) => ee.lighten(20)), U["primary-color-deprecated-t-20"] = W(X, (ee) => ee.tint(20)), U["primary-color-deprecated-t-50"] = W(X, (ee) => ee.tint(50)), U["primary-color-deprecated-f-12"] = W(X, (ee) => ee.setAlpha(ee.getAlpha() * 0.12));
    const Q = new TinyColor(Z[0]);
    U["primary-color-active-deprecated-f-30"] = W(Q, (ee) => ee.setAlpha(ee.getAlpha() * 0.3)), U["primary-color-active-deprecated-d-02"] = W(Q, (ee) => ee.darken(2));
  }
  return H.successColor && K(H.successColor, "success"), H.warningColor && K(H.warningColor, "warning"), H.errorColor && K(H.errorColor, "error"), H.infoColor && K(H.infoColor, "info"), `
  :root {
    ${Object.keys(U).map((X) => `--${C}-${X}: ${U[X]};`).join(`
`)}
  }
  `.trim();
}
function registerTheme(C, H) {
  const U = getStyle(C, H);
  canUseDom$1() ? updateCSS$1(U, `${dynamicStyleMark}-dynamic-theme`) : warning$2(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const useStyle$1 = (C) => {
  const [H, U] = useToken();
  return useStyleRegister(computed(() => ({
    theme: H.value,
    token: U.value,
    hashId: "",
    path: ["ant-design-icons", C.value]
  })), () => [{
    [`.${C.value}`]: _extends(_extends({}, resetIcon()), {
      [`.${C.value} .${C.value}-icon`]: {
        display: "block"
      }
    })
  }]);
}, useStyle$2 = useStyle$1;
function useTheme(C, H) {
  const U = computed(() => (C == null ? void 0 : C.value) || {}), W = computed(() => U.value.inherit === !1 || !(H != null && H.value) ? defaultConfig : H.value);
  return computed(() => {
    if (!(C != null && C.value))
      return H == null ? void 0 : H.value;
    const G = _extends({}, W.value.components);
    return Object.keys(C.value.components || {}).forEach((X) => {
      G[X] = _extends(_extends({}, G[X]), C.value.components[X]);
    }), _extends(_extends(_extends({}, W.value), U.value), {
      token: _extends(_extends({}, W.value.token), U.value.token),
      components: G
    });
  });
}
var __rest$1 = function(C, H) {
  var U = {};
  for (var W in C)
    Object.prototype.hasOwnProperty.call(C, W) && H.indexOf(W) < 0 && (U[W] = C[W]);
  if (C != null && typeof Object.getOwnPropertySymbols == "function")
    for (var K = 0, W = Object.getOwnPropertySymbols(C); K < W.length; K++)
      H.indexOf(W[K]) < 0 && Object.prototype.propertyIsEnumerable.call(C, W[K]) && (U[W[K]] = C[W[K]]);
  return U;
};
const defaultPrefixCls = "ant";
function getGlobalPrefixCls() {
  return globalConfigForApi.prefixCls || defaultPrefixCls;
}
function getGlobalIconPrefixCls() {
  return globalConfigForApi.iconPrefixCls || defaultIconPrefixCls;
}
const globalConfigBySet = reactive({}), globalConfigForApi = reactive({});
watchEffect(() => {
  _extends(globalConfigForApi, globalConfigBySet), globalConfigForApi.prefixCls = getGlobalPrefixCls(), globalConfigForApi.iconPrefixCls = getGlobalIconPrefixCls(), globalConfigForApi.getPrefixCls = (C, H) => H || (C ? `${globalConfigForApi.prefixCls}-${C}` : globalConfigForApi.prefixCls), globalConfigForApi.getRootPrefixCls = () => globalConfigForApi.prefixCls ? globalConfigForApi.prefixCls : getGlobalPrefixCls();
});
let stopWatchEffect;
const setGlobalConfig = (C) => {
  stopWatchEffect && stopWatchEffect(), stopWatchEffect = watchEffect(() => {
    _extends(globalConfigBySet, reactive(C)), _extends(globalConfigForApi, reactive(C));
  }), C.theme && registerTheme(getGlobalPrefixCls(), C.theme);
}, globalConfig = () => ({
  getPrefixCls: (C, H) => H || (C ? `${getGlobalPrefixCls()}-${C}` : getGlobalPrefixCls()),
  getIconPrefixCls: getGlobalIconPrefixCls,
  getRootPrefixCls: () => globalConfigForApi.prefixCls ? globalConfigForApi.prefixCls : getGlobalPrefixCls()
}), ConfigProvider = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AConfigProvider",
  inheritAttrs: !1,
  props: configProviderProps(),
  setup(C, H) {
    let {
      slots: U
    } = H;
    const W = useConfigContextInject(), K = (xe, _e) => {
      const {
        prefixCls: Ae = "ant"
      } = C;
      if (_e)
        return _e;
      const De = Ae || W.getPrefixCls("");
      return xe ? `${De}-${xe}` : De;
    }, G = computed(() => C.iconPrefixCls || W.iconPrefixCls.value || defaultIconPrefixCls), X = computed(() => G.value !== W.iconPrefixCls.value), Z = computed(() => {
      var xe;
      return C.csp || ((xe = W.csp) === null || xe === void 0 ? void 0 : xe.value);
    }), Q = useStyle$2(G), ee = useTheme(computed(() => C.theme), computed(() => {
      var xe;
      return (xe = W.theme) === null || xe === void 0 ? void 0 : xe.value;
    })), te = (xe) => (C.renderEmpty || U.renderEmpty || W.renderEmpty || renderEmpty)(xe), re = computed(() => {
      var xe, _e;
      return (xe = C.autoInsertSpaceInButton) !== null && xe !== void 0 ? xe : (_e = W.autoInsertSpaceInButton) === null || _e === void 0 ? void 0 : _e.value;
    }), ne = computed(() => {
      var xe;
      return C.locale || ((xe = W.locale) === null || xe === void 0 ? void 0 : xe.value);
    });
    watch(ne, () => {
      globalConfigBySet.locale = ne.value;
    }, {
      immediate: !0
    });
    const ae = computed(() => {
      var xe;
      return C.direction || ((xe = W.direction) === null || xe === void 0 ? void 0 : xe.value);
    }), oe = computed(() => {
      var xe, _e;
      return (xe = C.space) !== null && xe !== void 0 ? xe : (_e = W.space) === null || _e === void 0 ? void 0 : _e.value;
    }), ie = computed(() => {
      var xe, _e;
      return (xe = C.virtual) !== null && xe !== void 0 ? xe : (_e = W.virtual) === null || _e === void 0 ? void 0 : _e.value;
    }), se = computed(() => {
      var xe, _e;
      return (xe = C.dropdownMatchSelectWidth) !== null && xe !== void 0 ? xe : (_e = W.dropdownMatchSelectWidth) === null || _e === void 0 ? void 0 : _e.value;
    }), ue = computed(() => {
      var xe;
      return C.getTargetContainer !== void 0 ? C.getTargetContainer : (xe = W.getTargetContainer) === null || xe === void 0 ? void 0 : xe.value;
    }), le = computed(() => {
      var xe;
      return C.getPopupContainer !== void 0 ? C.getPopupContainer : (xe = W.getPopupContainer) === null || xe === void 0 ? void 0 : xe.value;
    }), ce = computed(() => {
      var xe;
      return C.pageHeader !== void 0 ? C.pageHeader : (xe = W.pageHeader) === null || xe === void 0 ? void 0 : xe.value;
    }), fe = computed(() => {
      var xe;
      return C.input !== void 0 ? C.input : (xe = W.input) === null || xe === void 0 ? void 0 : xe.value;
    }), pe = computed(() => {
      var xe;
      return C.pagination !== void 0 ? C.pagination : (xe = W.pagination) === null || xe === void 0 ? void 0 : xe.value;
    }), he = computed(() => {
      var xe;
      return C.form !== void 0 ? C.form : (xe = W.form) === null || xe === void 0 ? void 0 : xe.value;
    }), de = computed(() => {
      var xe;
      return C.select !== void 0 ? C.select : (xe = W.select) === null || xe === void 0 ? void 0 : xe.value;
    }), ge = computed(() => C.componentSize), ve = computed(() => C.componentDisabled), me = computed(() => {
      var xe, _e;
      return (xe = C.wave) !== null && xe !== void 0 ? xe : (_e = W.wave) === null || _e === void 0 ? void 0 : _e.value;
    }), ye = {
      csp: Z,
      autoInsertSpaceInButton: re,
      locale: ne,
      direction: ae,
      space: oe,
      virtual: ie,
      dropdownMatchSelectWidth: se,
      getPrefixCls: K,
      iconPrefixCls: G,
      theme: computed(() => {
        var xe, _e;
        return (xe = ee.value) !== null && xe !== void 0 ? xe : (_e = W.theme) === null || _e === void 0 ? void 0 : _e.value;
      }),
      renderEmpty: te,
      getTargetContainer: ue,
      getPopupContainer: le,
      pageHeader: ce,
      input: fe,
      pagination: pe,
      form: he,
      select: de,
      componentSize: ge,
      componentDisabled: ve,
      transformCellText: computed(() => C.transformCellText),
      wave: me
    }, be = computed(() => {
      const xe = ee.value || {}, {
        algorithm: _e,
        token: Ae
      } = xe, De = __rest$1(xe, ["algorithm", "token"]), Be = _e && (!Array.isArray(_e) || _e.length > 0) ? createTheme(_e) : void 0;
      return _extends(_extends({}, De), {
        theme: Be,
        token: _extends(_extends({}, defaultSeedToken), Ae)
      });
    }), Ce = computed(() => {
      var xe, _e;
      let Ae = {};
      return ne.value && (Ae = ((xe = ne.value.Form) === null || xe === void 0 ? void 0 : xe.defaultValidateMessages) || ((_e = defaultLocale.Form) === null || _e === void 0 ? void 0 : _e.defaultValidateMessages) || {}), C.form && C.form.validateMessages && (Ae = _extends(_extends({}, Ae), C.form.validateMessages)), Ae;
    });
    useConfigContextProvider(ye), useProvideGlobalForm({
      validateMessages: Ce
    }), useProviderSize(ge), useProviderDisabled(ve);
    const $e = (xe) => {
      var _e, Ae;
      let De = X.value ? Q((_e = U.default) === null || _e === void 0 ? void 0 : _e.call(U)) : (Ae = U.default) === null || Ae === void 0 ? void 0 : Ae.call(U);
      if (C.theme) {
        const Be = /* @__PURE__ */ function() {
          return De;
        }();
        De = createVNode(DesignTokenProvider, {
          value: be.value
        }, {
          default: () => [Be]
        });
      }
      return createVNode(locale$5, {
        locale: ne.value || xe,
        ANT_MARK__: ANT_MARK
      }, {
        default: () => [De]
      });
    };
    return watchEffect(() => {
      ae.value && (message.config({
        rtl: ae.value === "rtl"
      }), notification.config({
        rtl: ae.value === "rtl"
      }));
    }), () => createVNode(LocaleReceiver, {
      children: (xe, _e, Ae) => $e(Ae)
    }, null);
  }
});
ConfigProvider.config = setGlobalConfig;
ConfigProvider.install = function(C) {
  C.component(ConfigProvider.name, ConfigProvider);
};
const ConfigProvider$1 = ConfigProvider;
function dialogPropTypes() {
  return {
    keyboard: {
      type: Boolean,
      default: void 0
    },
    mask: {
      type: Boolean,
      default: void 0
    },
    afterClose: Function,
    closable: {
      type: Boolean,
      default: void 0
    },
    maskClosable: {
      type: Boolean,
      default: void 0
    },
    visible: {
      type: Boolean,
      default: void 0
    },
    destroyOnClose: {
      type: Boolean,
      default: void 0
    },
    mousePosition: PropTypes$1.shape({
      x: Number,
      y: Number
    }).loose,
    title: PropTypes$1.any,
    footer: PropTypes$1.any,
    transitionName: String,
    maskTransitionName: String,
    animation: PropTypes$1.any,
    maskAnimation: PropTypes$1.any,
    wrapStyle: {
      type: Object,
      default: void 0
    },
    bodyStyle: {
      type: Object,
      default: void 0
    },
    maskStyle: {
      type: Object,
      default: void 0
    },
    prefixCls: String,
    wrapClassName: String,
    rootClassName: String,
    width: [String, Number],
    height: [String, Number],
    zIndex: Number,
    bodyProps: PropTypes$1.any,
    maskProps: PropTypes$1.any,
    wrapProps: PropTypes$1.any,
    getContainer: PropTypes$1.any,
    dialogStyle: {
      type: Object,
      default: void 0
    },
    dialogClass: String,
    closeIcon: PropTypes$1.any,
    forceRender: {
      type: Boolean,
      default: void 0
    },
    getOpenCount: Function,
    // https://github.com/ant-design/ant-design/issues/19771
    // https://github.com/react-component/dialog/issues/95
    focusTriggerAfterClose: {
      type: Boolean,
      default: void 0
    },
    onClose: Function,
    modalRender: Function
  };
}
function getMotionName(C, H, U) {
  let W = H;
  return !W && U && (W = `${C}-${U}`), W;
}
let uuid$2 = -1;
function getUUID() {
  return uuid$2 += 1, uuid$2;
}
function getScroll(C, H) {
  let U = C[`page${H ? "Y" : "X"}Offset`];
  const W = `scroll${H ? "Top" : "Left"}`;
  if (typeof U != "number") {
    const K = C.document;
    U = K.documentElement[W], typeof U != "number" && (U = K.body[W]);
  }
  return U;
}
function offset$1(C) {
  const H = C.getBoundingClientRect(), U = {
    left: H.left,
    top: H.top
  }, W = C.ownerDocument, K = W.defaultView || W.parentWindow;
  return U.left += getScroll(K), U.top += getScroll(K, !0), U;
}
const sentinelStyle = {
  width: 0,
  height: 0,
  overflow: "hidden",
  outline: "none"
}, Content = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "DialogContent",
  inheritAttrs: !1,
  props: _extends(_extends({}, dialogPropTypes()), {
    motionName: String,
    ariaId: String,
    onVisibleChanged: Function,
    onMousedown: Function,
    onMouseup: Function
  }),
  setup(C, H) {
    let {
      expose: U,
      slots: W,
      attrs: K
    } = H;
    const G = ref(), X = ref(), Z = ref();
    U({
      focus: () => {
        var ne;
        (ne = G.value) === null || ne === void 0 || ne.focus();
      },
      changeActive: (ne) => {
        const {
          activeElement: ae
        } = document;
        ne && ae === X.value ? G.value.focus() : !ne && ae === G.value && X.value.focus();
      }
    });
    const Q = ref(), ee = computed(() => {
      const {
        width: ne,
        height: ae
      } = C, oe = {};
      return ne !== void 0 && (oe.width = typeof ne == "number" ? `${ne}px` : ne), ae !== void 0 && (oe.height = typeof ae == "number" ? `${ae}px` : ae), Q.value && (oe.transformOrigin = Q.value), oe;
    }), te = () => {
      nextTick(() => {
        if (Z.value) {
          const ne = offset$1(Z.value);
          Q.value = C.mousePosition ? `${C.mousePosition.x - ne.left}px ${C.mousePosition.y - ne.top}px` : "";
        }
      });
    }, re = (ne) => {
      C.onVisibleChanged(ne);
    };
    return () => {
      var ne, ae, oe, ie;
      const {
        prefixCls: se,
        footer: ue = (ne = W.footer) === null || ne === void 0 ? void 0 : ne.call(W),
        title: le = (ae = W.title) === null || ae === void 0 ? void 0 : ae.call(W),
        ariaId: ce,
        closable: fe,
        closeIcon: pe = (oe = W.closeIcon) === null || oe === void 0 ? void 0 : oe.call(W),
        onClose: he,
        bodyStyle: de,
        bodyProps: ge,
        onMousedown: ve,
        onMouseup: me,
        visible: ye,
        modalRender: be = W.modalRender,
        destroyOnClose: Ce,
        motionName: $e
      } = C;
      let xe;
      ue && (xe = createVNode("div", {
        class: `${se}-footer`
      }, [ue]));
      let _e;
      le && (_e = createVNode("div", {
        class: `${se}-header`
      }, [createVNode("div", {
        class: `${se}-title`,
        id: ce
      }, [le])]));
      let Ae;
      fe && (Ae = createVNode("button", {
        type: "button",
        onClick: he,
        "aria-label": "Close",
        class: `${se}-close`
      }, [pe || createVNode("span", {
        class: `${se}-close-x`
      }, null)]));
      const De = createVNode("div", {
        class: `${se}-content`
      }, [Ae, _e, createVNode("div", _objectSpread2({
        class: `${se}-body`,
        style: de
      }, ge), [(ie = W.default) === null || ie === void 0 ? void 0 : ie.call(W)]), xe]), Be = getTransitionProps($e);
      return createVNode(Transition, _objectSpread2(_objectSpread2({}, Be), {}, {
        onBeforeEnter: te,
        onAfterEnter: () => re(!0),
        onAfterLeave: () => re(!1)
      }), {
        default: () => [ye || !Ce ? withDirectives(createVNode("div", _objectSpread2(_objectSpread2({}, K), {}, {
          ref: Z,
          key: "dialog-element",
          role: "document",
          style: [ee.value, K.style],
          class: [se, K.class],
          onMousedown: ve,
          onMouseup: me
        }), [createVNode("div", {
          tabindex: 0,
          ref: G,
          style: sentinelStyle,
          "aria-hidden": "true"
        }, null), be ? be({
          originVNode: De
        }) : De, createVNode("div", {
          tabindex: 0,
          ref: X,
          style: sentinelStyle,
          "aria-hidden": "true"
        }, null)]), [[vShow, ye]]) : null]
      });
    };
  }
}), Mask = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "DialogMask",
  props: {
    prefixCls: String,
    visible: Boolean,
    motionName: String,
    maskProps: Object
  },
  setup(C, H) {
    return () => {
      const {
        prefixCls: U,
        visible: W,
        maskProps: K,
        motionName: G
      } = C, X = getTransitionProps(G);
      return createVNode(Transition, X, {
        default: () => [withDirectives(createVNode("div", _objectSpread2({
          class: `${U}-mask`
        }, K), null), [[vShow, W]])]
      });
    };
  }
}), Dialog = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "VcDialog",
  inheritAttrs: !1,
  props: initDefaultProps$1(_extends(_extends({}, dialogPropTypes()), {
    getOpenCount: Function,
    scrollLocker: Object
  }), {
    mask: !0,
    visible: !1,
    keyboard: !0,
    closable: !0,
    maskClosable: !0,
    destroyOnClose: !1,
    prefixCls: "rc-dialog",
    getOpenCount: () => null,
    focusTriggerAfterClose: !0
  }),
  setup(C, H) {
    let {
      attrs: U,
      slots: W
    } = H;
    const K = shallowRef(), G = shallowRef(), X = shallowRef(), Z = shallowRef(C.visible), Q = shallowRef(`vcDialogTitle${getUUID()}`), ee = (ue) => {
      var le, ce;
      if (ue)
        contains$1(G.value, document.activeElement) || (K.value = document.activeElement, (le = X.value) === null || le === void 0 || le.focus());
      else {
        const fe = Z.value;
        if (Z.value = !1, C.mask && K.value && C.focusTriggerAfterClose) {
          try {
            K.value.focus({
              preventScroll: !0
            });
          } catch {
          }
          K.value = null;
        }
        fe && ((ce = C.afterClose) === null || ce === void 0 || ce.call(C));
      }
    }, te = (ue) => {
      var le;
      (le = C.onClose) === null || le === void 0 || le.call(C, ue);
    }, re = shallowRef(!1), ne = shallowRef(), ae = () => {
      clearTimeout(ne.value), re.value = !0;
    }, oe = () => {
      ne.value = setTimeout(() => {
        re.value = !1;
      });
    }, ie = (ue) => {
      if (!C.maskClosable)
        return null;
      re.value ? re.value = !1 : G.value === ue.target && te(ue);
    }, se = (ue) => {
      if (C.keyboard && ue.keyCode === KeyCode$1.ESC) {
        ue.stopPropagation(), te(ue);
        return;
      }
      C.visible && ue.keyCode === KeyCode$1.TAB && X.value.changeActive(!ue.shiftKey);
    };
    return watch(() => C.visible, () => {
      C.visible && (Z.value = !0);
    }, {
      flush: "post"
    }), onBeforeUnmount(() => {
      var ue;
      clearTimeout(ne.value), (ue = C.scrollLocker) === null || ue === void 0 || ue.unLock();
    }), watchEffect(() => {
      var ue, le;
      (ue = C.scrollLocker) === null || ue === void 0 || ue.unLock(), Z.value && ((le = C.scrollLocker) === null || le === void 0 || le.lock());
    }), () => {
      const {
        prefixCls: ue,
        mask: le,
        visible: ce,
        maskTransitionName: fe,
        maskAnimation: pe,
        zIndex: he,
        wrapClassName: de,
        rootClassName: ge,
        wrapStyle: ve,
        closable: me,
        maskProps: ye,
        maskStyle: be,
        transitionName: Ce,
        animation: $e,
        wrapProps: xe,
        title: _e = W.title
      } = C, {
        style: Ae,
        class: De
      } = U;
      return createVNode("div", _objectSpread2({
        class: [`${ue}-root`, ge]
      }, pickAttrs(C, {
        data: !0
      })), [createVNode(Mask, {
        prefixCls: ue,
        visible: le && ce,
        motionName: getMotionName(ue, fe, pe),
        style: _extends({
          zIndex: he
        }, be),
        maskProps: ye
      }, null), createVNode("div", _objectSpread2({
        tabIndex: -1,
        onKeydown: se,
        class: classNames(`${ue}-wrap`, de),
        ref: G,
        onClick: ie,
        role: "dialog",
        "aria-labelledby": _e ? Q.value : null,
        style: _extends(_extends({
          zIndex: he
        }, ve), {
          display: Z.value ? null : "none"
        })
      }, xe), [createVNode(Content, _objectSpread2(_objectSpread2({}, omit(C, ["scrollLocker"])), {}, {
        style: Ae,
        class: De,
        onMousedown: ae,
        onMouseup: oe,
        ref: X,
        closable: me,
        ariaId: Q.value,
        prefixCls: ue,
        visible: ce,
        onClose: te,
        onVisibleChanged: ee,
        motionName: getMotionName(ue, Ce, $e)
      }), W)])]);
    };
  }
}), IDialogPropTypes = dialogPropTypes(), DialogWrap = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "DialogWrap",
  inheritAttrs: !1,
  props: initDefaultProps$1(IDialogPropTypes, {
    visible: !1
  }),
  setup(C, H) {
    let {
      attrs: U,
      slots: W
    } = H;
    const K = ref(C.visible);
    return useProvidePortal({}, {
      inTriggerContext: !1
    }), watch(() => C.visible, () => {
      C.visible && (K.value = !0);
    }, {
      flush: "post"
    }), () => {
      const {
        visible: G,
        getContainer: X,
        forceRender: Z,
        destroyOnClose: Q = !1,
        afterClose: ee
      } = C;
      let te = _extends(_extends(_extends({}, C), U), {
        ref: "_component",
        key: "dialog"
      });
      return X === !1 ? createVNode(Dialog, _objectSpread2(_objectSpread2({}, te), {}, {
        getOpenCount: () => 2
      }), W) : !Z && Q && !K.value ? null : createVNode(Portal, {
        autoLock: !0,
        visible: G,
        forceRender: Z,
        getContainer: X
      }, {
        default: (re) => (te = _extends(_extends(_extends({}, te), re), {
          afterClose: () => {
            ee == null || ee(), K.value = !1;
          }
        }), createVNode(Dialog, te, W))
      });
    };
  }
}), DialogWrap$1 = DialogWrap;
function box(C) {
  return {
    position: C,
    top: 0,
    insetInlineEnd: 0,
    bottom: 0,
    insetInlineStart: 0
  };
}
const genModalMaskStyle = (C) => {
  const {
    componentCls: H
  } = C;
  return [{
    [`${H}-root`]: {
      [`${H}${C.antCls}-zoom-enter, ${H}${C.antCls}-zoom-appear`]: {
        // reset scale avoid mousePosition bug
        transform: "none",
        opacity: 0,
        animationDuration: C.motionDurationSlow,
        // https://github.com/ant-design/ant-design/issues/11777
        userSelect: "none"
      },
      [`${H}${C.antCls}-zoom-leave ${H}-content`]: {
        pointerEvents: "none"
      },
      [`${H}-mask`]: _extends(_extends({}, box("fixed")), {
        zIndex: C.zIndexPopupBase,
        height: "100%",
        backgroundColor: C.colorBgMask,
        [`${H}-hidden`]: {
          display: "none"
        }
      }),
      [`${H}-wrap`]: _extends(_extends({}, box("fixed")), {
        overflow: "auto",
        outline: 0,
        WebkitOverflowScrolling: "touch"
      })
    }
  }, {
    [`${H}-root`]: initFadeMotion(C)
  }];
}, genModalStyle = (C) => {
  const {
    componentCls: H
  } = C;
  return [
    // ======================== Root =========================
    {
      [`${H}-root`]: {
        [`${H}-wrap`]: {
          zIndex: C.zIndexPopupBase,
          position: "fixed",
          inset: 0,
          overflow: "auto",
          outline: 0,
          WebkitOverflowScrolling: "touch"
        },
        [`${H}-wrap-rtl`]: {
          direction: "rtl"
        },
        [`${H}-centered`]: {
          textAlign: "center",
          "&::before": {
            display: "inline-block",
            width: 0,
            height: "100%",
            verticalAlign: "middle",
            content: '""'
          },
          [H]: {
            top: 0,
            display: "inline-block",
            paddingBottom: 0,
            textAlign: "start",
            verticalAlign: "middle"
          }
        },
        [`@media (max-width: ${C.screenSMMax})`]: {
          [H]: {
            maxWidth: "calc(100vw - 16px)",
            margin: `${C.marginXS} auto`
          },
          [`${H}-centered`]: {
            [H]: {
              flex: 1
            }
          }
        }
      }
    },
    // ======================== Modal ========================
    {
      [H]: _extends(_extends({}, resetComponent(C)), {
        pointerEvents: "none",
        position: "relative",
        top: 100,
        width: "auto",
        maxWidth: `calc(100vw - ${C.margin * 2}px)`,
        margin: "0 auto",
        paddingBottom: C.paddingLG,
        [`${H}-title`]: {
          margin: 0,
          color: C.modalHeadingColor,
          fontWeight: C.fontWeightStrong,
          fontSize: C.modalHeaderTitleFontSize,
          lineHeight: C.modalHeaderTitleLineHeight,
          wordWrap: "break-word"
        },
        [`${H}-content`]: {
          position: "relative",
          backgroundColor: C.modalContentBg,
          backgroundClip: "padding-box",
          border: 0,
          borderRadius: C.borderRadiusLG,
          boxShadow: C.boxShadowSecondary,
          pointerEvents: "auto",
          padding: `${C.paddingMD}px ${C.paddingContentHorizontalLG}px`
        },
        [`${H}-close`]: _extends({
          position: "absolute",
          top: (C.modalHeaderCloseSize - C.modalCloseBtnSize) / 2,
          insetInlineEnd: (C.modalHeaderCloseSize - C.modalCloseBtnSize) / 2,
          zIndex: C.zIndexPopupBase + 10,
          padding: 0,
          color: C.modalCloseColor,
          fontWeight: C.fontWeightStrong,
          lineHeight: 1,
          textDecoration: "none",
          background: "transparent",
          borderRadius: C.borderRadiusSM,
          width: C.modalConfirmIconSize,
          height: C.modalConfirmIconSize,
          border: 0,
          outline: 0,
          cursor: "pointer",
          transition: `color ${C.motionDurationMid}, background-color ${C.motionDurationMid}`,
          "&-x": {
            display: "block",
            fontSize: C.fontSizeLG,
            fontStyle: "normal",
            lineHeight: `${C.modalCloseBtnSize}px`,
            textAlign: "center",
            textTransform: "none",
            textRendering: "auto"
          },
          "&:hover": {
            color: C.modalIconHoverColor,
            backgroundColor: C.wireframe ? "transparent" : C.colorFillContent,
            textDecoration: "none"
          },
          "&:active": {
            backgroundColor: C.wireframe ? "transparent" : C.colorFillContentHover
          }
        }, genFocusStyle(C)),
        [`${H}-header`]: {
          color: C.colorText,
          background: C.modalHeaderBg,
          borderRadius: `${C.borderRadiusLG}px ${C.borderRadiusLG}px 0 0`,
          marginBottom: C.marginXS
        },
        [`${H}-body`]: {
          fontSize: C.fontSize,
          lineHeight: C.lineHeight,
          wordWrap: "break-word"
        },
        [`${H}-footer`]: {
          textAlign: "end",
          background: C.modalFooterBg,
          marginTop: C.marginSM,
          [`${C.antCls}-btn + ${C.antCls}-btn:not(${C.antCls}-dropdown-trigger)`]: {
            marginBottom: 0,
            marginInlineStart: C.marginXS
          }
        },
        [`${H}-open`]: {
          overflow: "hidden"
        }
      })
    },
    // ======================== Pure =========================
    {
      [`${H}-pure-panel`]: {
        top: "auto",
        padding: 0,
        display: "flex",
        flexDirection: "column",
        [`${H}-content,
          ${H}-body,
          ${H}-confirm-body-wrapper`]: {
          display: "flex",
          flexDirection: "column",
          flex: "auto"
        },
        [`${H}-confirm-body`]: {
          marginBottom: "auto"
        }
      }
    }
  ];
}, genModalConfirmStyle = (C) => {
  const {
    componentCls: H
  } = C, U = `${H}-confirm`;
  return {
    [U]: {
      "&-rtl": {
        direction: "rtl"
      },
      [`${C.antCls}-modal-header`]: {
        display: "none"
      },
      [`${U}-body-wrapper`]: _extends({}, clearFix()),
      [`${U}-body`]: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        [`${U}-title`]: {
          flex: "0 0 100%",
          display: "block",
          // create BFC to avoid
          // https://user-images.githubusercontent.com/507615/37702510-ba844e06-2d2d-11e8-9b67-8e19be57f445.png
          overflow: "hidden",
          color: C.colorTextHeading,
          fontWeight: C.fontWeightStrong,
          fontSize: C.modalHeaderTitleFontSize,
          lineHeight: C.modalHeaderTitleLineHeight,
          [`+ ${U}-content`]: {
            marginBlockStart: C.marginXS,
            flexBasis: "100%",
            maxWidth: `calc(100% - ${C.modalConfirmIconSize + C.marginSM}px)`
          }
        },
        [`${U}-content`]: {
          color: C.colorText,
          fontSize: C.fontSize
        },
        [`> ${C.iconCls}`]: {
          flex: "none",
          marginInlineEnd: C.marginSM,
          fontSize: C.modalConfirmIconSize,
          [`+ ${U}-title`]: {
            flex: 1
          },
          // `content` after `icon` should set marginLeft
          [`+ ${U}-title + ${U}-content`]: {
            marginInlineStart: C.modalConfirmIconSize + C.marginSM
          }
        }
      },
      [`${U}-btns`]: {
        textAlign: "end",
        marginTop: C.marginSM,
        [`${C.antCls}-btn + ${C.antCls}-btn`]: {
          marginBottom: 0,
          marginInlineStart: C.marginXS
        }
      }
    },
    [`${U}-error ${U}-body > ${C.iconCls}`]: {
      color: C.colorError
    },
    [`${U}-warning ${U}-body > ${C.iconCls},
        ${U}-confirm ${U}-body > ${C.iconCls}`]: {
      color: C.colorWarning
    },
    [`${U}-info ${U}-body > ${C.iconCls}`]: {
      color: C.colorInfo
    },
    [`${U}-success ${U}-body > ${C.iconCls}`]: {
      color: C.colorSuccess
    },
    // https://github.com/ant-design/ant-design/issues/37329
    [`${H}-zoom-leave ${H}-btns`]: {
      pointerEvents: "none"
    }
  };
}, genRTLStyle = (C) => {
  const {
    componentCls: H
  } = C;
  return {
    [`${H}-root`]: {
      [`${H}-wrap-rtl`]: {
        direction: "rtl",
        [`${H}-confirm-body`]: {
          direction: "rtl"
        }
      }
    }
  };
}, genWireframeStyle = (C) => {
  const {
    componentCls: H,
    antCls: U
  } = C, W = `${H}-confirm`;
  return {
    [H]: {
      [`${H}-content`]: {
        padding: 0
      },
      [`${H}-header`]: {
        padding: C.modalHeaderPadding,
        borderBottom: `${C.modalHeaderBorderWidth}px ${C.modalHeaderBorderStyle} ${C.modalHeaderBorderColorSplit}`,
        marginBottom: 0
      },
      [`${H}-body`]: {
        padding: C.modalBodyPadding
      },
      [`${H}-footer`]: {
        padding: `${C.modalFooterPaddingVertical}px ${C.modalFooterPaddingHorizontal}px`,
        borderTop: `${C.modalFooterBorderWidth}px ${C.modalFooterBorderStyle} ${C.modalFooterBorderColorSplit}`,
        borderRadius: `0 0 ${C.borderRadiusLG}px ${C.borderRadiusLG}px`,
        marginTop: 0
      }
    },
    [W]: {
      [`${U}-modal-body`]: {
        padding: `${C.padding * 2}px ${C.padding * 2}px ${C.paddingLG}px`
      },
      [`${W}-body`]: {
        [`> ${C.iconCls}`]: {
          marginInlineEnd: C.margin,
          // `content` after `icon` should set marginLeft
          [`+ ${W}-title + ${W}-content`]: {
            marginInlineStart: C.modalConfirmIconSize + C.margin
          }
        }
      },
      [`${W}-btns`]: {
        marginTop: C.marginLG
      }
    }
  };
}, useStyle = genComponentStyleHook("Modal", (C) => {
  const H = C.padding, U = C.fontSizeHeading5, W = C.lineHeightHeading5, K = merge$1(C, {
    modalBodyPadding: C.paddingLG,
    modalHeaderBg: C.colorBgElevated,
    modalHeaderPadding: `${H}px ${C.paddingLG}px`,
    modalHeaderBorderWidth: C.lineWidth,
    modalHeaderBorderStyle: C.lineType,
    modalHeaderTitleLineHeight: W,
    modalHeaderTitleFontSize: U,
    modalHeaderBorderColorSplit: C.colorSplit,
    modalHeaderCloseSize: W * U + H * 2,
    modalContentBg: C.colorBgElevated,
    modalHeadingColor: C.colorTextHeading,
    modalCloseColor: C.colorTextDescription,
    modalFooterBg: "transparent",
    modalFooterBorderColorSplit: C.colorSplit,
    modalFooterBorderStyle: C.lineType,
    modalFooterPaddingVertical: C.paddingXS,
    modalFooterPaddingHorizontal: C.padding,
    modalFooterBorderWidth: C.lineWidth,
    modalConfirmTitleFontSize: C.fontSizeLG,
    modalIconHoverColor: C.colorIconHover,
    modalConfirmIconSize: C.fontSize * C.lineHeight,
    modalCloseBtnSize: C.controlHeightLG * 0.55
  });
  return [genModalStyle(K), genModalConfirmStyle(K), genRTLStyle(K), genModalMaskStyle(K), C.wireframe && genWireframeStyle(K), initZoomMotion(K, "zoom")];
});
var __rest = function(C, H) {
  var U = {};
  for (var W in C)
    Object.prototype.hasOwnProperty.call(C, W) && H.indexOf(W) < 0 && (U[W] = C[W]);
  if (C != null && typeof Object.getOwnPropertySymbols == "function")
    for (var K = 0, W = Object.getOwnPropertySymbols(C); K < W.length; K++)
      H.indexOf(W[K]) < 0 && Object.prototype.propertyIsEnumerable.call(C, W[K]) && (U[W[K]] = C[W[K]]);
  return U;
};
let mousePosition;
const getClickPosition = (C) => {
  mousePosition = {
    x: C.pageX,
    y: C.pageY
  }, setTimeout(() => mousePosition = null, 100);
};
canUseDocElement() && addEventListenerWrap(document.documentElement, "click", getClickPosition, !0);
const modalProps = () => ({
  prefixCls: String,
  /** @deprecated Please use `open` instead. */
  visible: {
    type: Boolean,
    default: void 0
  },
  open: {
    type: Boolean,
    default: void 0
  },
  confirmLoading: {
    type: Boolean,
    default: void 0
  },
  title: PropTypes$1.any,
  closable: {
    type: Boolean,
    default: void 0
  },
  closeIcon: PropTypes$1.any,
  onOk: Function,
  onCancel: Function,
  "onUpdate:visible": Function,
  "onUpdate:open": Function,
  onChange: Function,
  afterClose: Function,
  centered: {
    type: Boolean,
    default: void 0
  },
  width: [String, Number],
  footer: PropTypes$1.any,
  okText: PropTypes$1.any,
  okType: String,
  cancelText: PropTypes$1.any,
  icon: PropTypes$1.any,
  maskClosable: {
    type: Boolean,
    default: void 0
  },
  forceRender: {
    type: Boolean,
    default: void 0
  },
  okButtonProps: objectType(),
  cancelButtonProps: objectType(),
  destroyOnClose: {
    type: Boolean,
    default: void 0
  },
  wrapClassName: String,
  maskTransitionName: String,
  transitionName: String,
  getContainer: {
    type: [String, Function, Boolean, Object],
    default: void 0
  },
  zIndex: Number,
  bodyStyle: objectType(),
  maskStyle: objectType(),
  mask: {
    type: Boolean,
    default: void 0
  },
  keyboard: {
    type: Boolean,
    default: void 0
  },
  wrapProps: Object,
  focusTriggerAfterClose: {
    type: Boolean,
    default: void 0
  },
  modalRender: Function,
  mousePosition: objectType()
}), Modal = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AModal",
  inheritAttrs: !1,
  props: initDefaultProps$1(modalProps(), {
    width: 520,
    confirmLoading: !1,
    okType: "primary"
  }),
  setup(C, H) {
    let {
      emit: U,
      slots: W,
      attrs: K
    } = H;
    const [G] = useLocaleReceiver("Modal"), {
      prefixCls: X,
      rootPrefixCls: Z,
      direction: Q,
      getPopupContainer: ee
    } = useConfigInject("modal", C), [te, re] = useStyle(X);
    warning$2(C.visible === void 0, "Modal", "`visible` will be removed in next major version, please use `open` instead.");
    const ne = (ie) => {
      U("update:visible", !1), U("update:open", !1), U("cancel", ie), U("change", !1);
    }, ae = (ie) => {
      U("ok", ie);
    }, oe = () => {
      var ie, se;
      const {
        okText: ue = (ie = W.okText) === null || ie === void 0 ? void 0 : ie.call(W),
        okType: le,
        cancelText: ce = (se = W.cancelText) === null || se === void 0 ? void 0 : se.call(W),
        confirmLoading: fe
      } = C;
      return createVNode(Fragment, null, [createVNode(Button, _objectSpread2({
        onClick: ne
      }, C.cancelButtonProps), {
        default: () => [ce || G.value.cancelText]
      }), createVNode(Button, _objectSpread2(_objectSpread2({}, convertLegacyProps(le)), {}, {
        loading: fe,
        onClick: ae
      }, C.okButtonProps), {
        default: () => [ue || G.value.okText]
      })]);
    };
    return () => {
      var ie, se;
      const {
        prefixCls: ue,
        visible: le,
        open: ce,
        wrapClassName: fe,
        centered: pe,
        getContainer: he,
        closeIcon: de = (ie = W.closeIcon) === null || ie === void 0 ? void 0 : ie.call(W),
        focusTriggerAfterClose: ge = !0
      } = C, ve = __rest(C, ["prefixCls", "visible", "open", "wrapClassName", "centered", "getContainer", "closeIcon", "focusTriggerAfterClose"]), me = classNames(fe, {
        [`${X.value}-centered`]: !!pe,
        [`${X.value}-wrap-rtl`]: Q.value === "rtl"
      });
      return te(createVNode(DialogWrap$1, _objectSpread2(_objectSpread2(_objectSpread2({}, ve), K), {}, {
        rootClassName: re.value,
        class: classNames(re.value, K.class),
        getContainer: he || (ee == null ? void 0 : ee.value),
        prefixCls: X.value,
        wrapClassName: me,
        visible: ce ?? le,
        onClose: ne,
        focusTriggerAfterClose: ge,
        transitionName: getTransitionName(Z.value, "zoom", C.transitionName),
        maskTransitionName: getTransitionName(Z.value, "fade", C.maskTransitionName),
        mousePosition: (se = ve.mousePosition) !== null && se !== void 0 ? se : mousePosition
      }), _extends(_extends({}, W), {
        footer: W.footer || oe,
        closeIcon: () => createVNode("span", {
          class: `${X.value}-close-x`
        }, [de || createVNode(CloseOutlined$1, {
          class: `${X.value}-close-icon`
        }, null)])
      })));
    };
  }
}), useDestroyed = () => {
  const C = shallowRef(!1);
  return onBeforeUnmount(() => {
    C.value = !0;
  }), C;
}, useDestroyed$1 = useDestroyed, actionButtonProps = {
  type: {
    type: String
  },
  actionFn: Function,
  close: Function,
  autofocus: Boolean,
  prefixCls: String,
  buttonProps: objectType(),
  emitEvent: Boolean,
  quitOnNullishReturnValue: Boolean
};
function isThenable(C) {
  return !!(C && C.then);
}
const ActionButton = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ActionButton",
  props: actionButtonProps,
  setup(C, H) {
    let {
      slots: U
    } = H;
    const W = shallowRef(!1), K = shallowRef(), G = shallowRef(!1);
    let X;
    const Z = useDestroyed$1();
    onMounted(() => {
      C.autofocus && (X = setTimeout(() => {
        var re, ne;
        return (ne = (re = findDOMNode(K.value)) === null || re === void 0 ? void 0 : re.focus) === null || ne === void 0 ? void 0 : ne.call(re);
      }));
    }), onBeforeUnmount(() => {
      clearTimeout(X);
    });
    const Q = function() {
      for (var re, ne = arguments.length, ae = new Array(ne), oe = 0; oe < ne; oe++)
        ae[oe] = arguments[oe];
      (re = C.close) === null || re === void 0 || re.call(C, ...ae);
    }, ee = (re) => {
      isThenable(re) && (G.value = !0, re.then(function() {
        Z.value || (G.value = !1), Q(...arguments), W.value = !1;
      }, (ne) => (Z.value || (G.value = !1), W.value = !1, Promise.reject(ne))));
    }, te = (re) => {
      const {
        actionFn: ne
      } = C;
      if (W.value)
        return;
      if (W.value = !0, !ne) {
        Q();
        return;
      }
      let ae;
      if (C.emitEvent) {
        if (ae = ne(re), C.quitOnNullishReturnValue && !isThenable(ae)) {
          W.value = !1, Q(re);
          return;
        }
      } else if (ne.length)
        ae = ne(C.close), W.value = !1;
      else if (ae = ne(), !ae) {
        Q();
        return;
      }
      ee(ae);
    };
    return () => {
      const {
        type: re,
        prefixCls: ne,
        buttonProps: ae
      } = C;
      return createVNode(Button, _objectSpread2(_objectSpread2(_objectSpread2({}, convertLegacyProps(re)), {}, {
        onClick: te,
        loading: G.value,
        prefixCls: ne
      }, ae), {}, {
        ref: K
      }), U);
    };
  }
});
function renderSomeContent(C) {
  return typeof C == "function" ? C() : C;
}
const ConfirmDialog = defineComponent({
  name: "ConfirmDialog",
  inheritAttrs: !1,
  props: ["icon", "onCancel", "onOk", "close", "closable", "zIndex", "afterClose", "visible", "open", "keyboard", "centered", "getContainer", "maskStyle", "okButtonProps", "cancelButtonProps", "okType", "prefixCls", "okCancel", "width", "mask", "maskClosable", "okText", "cancelText", "autoFocusButton", "transitionName", "maskTransitionName", "type", "title", "content", "direction", "rootPrefixCls", "bodyStyle", "closeIcon", "modalRender", "focusTriggerAfterClose", "wrapClassName", "confirmPrefixCls", "footer"],
  setup(C, H) {
    let {
      attrs: U
    } = H;
    const [W] = useLocaleReceiver("Modal");
    return process.env.NODE_ENV !== "production" && warning$2(C.visible === void 0, "Modal", "`visible` is deprecated, please use `open` instead."), () => {
      const {
        icon: K,
        onCancel: G,
        onOk: X,
        close: Z,
        okText: Q,
        closable: ee = !1,
        zIndex: te,
        afterClose: re,
        keyboard: ne,
        centered: ae,
        getContainer: oe,
        maskStyle: ie,
        okButtonProps: se,
        cancelButtonProps: ue,
        okCancel: le,
        width: ce = 416,
        mask: fe = !0,
        maskClosable: pe = !1,
        type: he,
        open: de,
        title: ge,
        content: ve,
        direction: me,
        closeIcon: ye,
        modalRender: be,
        focusTriggerAfterClose: Ce,
        rootPrefixCls: $e,
        bodyStyle: xe,
        wrapClassName: _e,
        footer: Ae
      } = C;
      let De = K;
      if (!K && K !== null)
        switch (he) {
          case "info":
            De = createVNode(InfoCircleFilled$1, null, null);
            break;
          case "success":
            De = createVNode(CheckCircleFilled$1, null, null);
            break;
          case "error":
            De = createVNode(CloseCircleFilled$1, null, null);
            break;
          default:
            De = createVNode(ExclamationCircleFilled$1, null, null);
        }
      const Be = C.okType || "primary", Oe = C.prefixCls || "ant-modal", Se = `${Oe}-confirm`, Te = U.style || {}, we = le ?? he === "confirm", Ee = C.autoFocusButton === null ? !1 : C.autoFocusButton || "ok", Fe = `${Oe}-confirm`, ke = classNames(Fe, `${Fe}-${C.type}`, {
        [`${Fe}-rtl`]: me === "rtl"
      }, U.class), Re = W.value, Pe = we && createVNode(ActionButton, {
        actionFn: G,
        close: Z,
        autofocus: Ee === "cancel",
        buttonProps: ue,
        prefixCls: `${$e}-btn`
      }, {
        default: () => [renderSomeContent(C.cancelText) || Re.cancelText]
      });
      return createVNode(Modal, {
        prefixCls: Oe,
        class: ke,
        wrapClassName: classNames({
          [`${Fe}-centered`]: !!ae
        }, _e),
        onCancel: (He) => Z == null ? void 0 : Z({
          triggerCancel: !0
        }, He),
        open: de,
        title: "",
        footer: "",
        transitionName: getTransitionName($e, "zoom", C.transitionName),
        maskTransitionName: getTransitionName($e, "fade", C.maskTransitionName),
        mask: fe,
        maskClosable: pe,
        maskStyle: ie,
        style: Te,
        bodyStyle: xe,
        width: ce,
        zIndex: te,
        afterClose: re,
        keyboard: ne,
        centered: ae,
        getContainer: oe,
        closable: ee,
        closeIcon: ye,
        modalRender: be,
        focusTriggerAfterClose: Ce
      }, {
        default: () => [createVNode("div", {
          class: `${Se}-body-wrapper`
        }, [createVNode("div", {
          class: `${Se}-body`
        }, [renderSomeContent(De), ge === void 0 ? null : createVNode("span", {
          class: `${Se}-title`
        }, [renderSomeContent(ge)]), createVNode("div", {
          class: `${Se}-content`
        }, [renderSomeContent(ve)])]), Ae !== void 0 ? renderSomeContent(Ae) : createVNode("div", {
          class: `${Se}-btns`
        }, [Pe, createVNode(ActionButton, {
          type: Be,
          actionFn: X,
          close: Z,
          autofocus: Ee === "ok",
          buttonProps: se,
          prefixCls: `${$e}-btn`
        }, {
          default: () => [renderSomeContent(Q) || (we ? Re.okText : Re.justOkText)]
        })])])]
      });
    };
  }
}), destroyFns = [], destroyFns$1 = destroyFns, confirm = (C) => {
  const H = document.createDocumentFragment();
  let U = _extends(_extends({}, omit(C, ["parentContext", "appContext"])), {
    close: G,
    open: !0
  }), W = null;
  function K() {
    W && (render(null, H), W.component.update(), W = null);
    for (var ee = arguments.length, te = new Array(ee), re = 0; re < ee; re++)
      te[re] = arguments[re];
    const ne = te.some((ae) => ae && ae.triggerCancel);
    C.onCancel && ne && C.onCancel(() => {
    }, ...te.slice(1));
    for (let ae = 0; ae < destroyFns$1.length; ae++)
      if (destroyFns$1[ae] === G) {
        destroyFns$1.splice(ae, 1);
        break;
      }
  }
  function G() {
    for (var ee = arguments.length, te = new Array(ee), re = 0; re < ee; re++)
      te[re] = arguments[re];
    U = _extends(_extends({}, U), {
      open: !1,
      afterClose: () => {
        typeof C.afterClose == "function" && C.afterClose(), K.apply(this, te);
      }
    }), U.visible && delete U.visible, X(U);
  }
  function X(ee) {
    typeof ee == "function" ? U = ee(U) : U = _extends(_extends({}, U), ee), W && (_extends(W.component.props, U), W.component.update());
  }
  const Z = (ee) => {
    const te = globalConfigForApi, re = te.prefixCls, ne = ee.prefixCls || `${re}-modal`, ae = te.iconPrefixCls, oe = getConfirmLocale();
    return createVNode(ConfigProvider$1, _objectSpread2(_objectSpread2({}, te), {}, {
      prefixCls: re
    }), {
      default: () => [createVNode(ConfirmDialog, _objectSpread2(_objectSpread2({}, ee), {}, {
        rootPrefixCls: re,
        prefixCls: ne,
        iconPrefixCls: ae,
        locale: oe,
        cancelText: ee.cancelText || oe.cancelText
      }), null)]
    });
  };
  function Q(ee) {
    const te = createVNode(Z, _extends({}, ee));
    return te.appContext = C.parentContext || C.appContext || te.appContext, render(te, H), te;
  }
  return W = Q(U), destroyFns$1.push(G), {
    destroy: G,
    update: X
  };
}, confirm$1 = confirm;
function withWarn(C) {
  return _extends(_extends({}, C), {
    type: "warning"
  });
}
function withInfo(C) {
  return _extends(_extends({}, C), {
    type: "info"
  });
}
function withSuccess(C) {
  return _extends(_extends({}, C), {
    type: "success"
  });
}
function withError(C) {
  return _extends(_extends({}, C), {
    type: "error"
  });
}
function withConfirm(C) {
  return _extends(_extends({}, C), {
    type: "confirm"
  });
}
const comfirmFuncProps = () => ({
  config: Object,
  afterClose: Function,
  destroyAction: Function,
  open: Boolean
}), HookModal = defineComponent({
  name: "HookModal",
  inheritAttrs: !1,
  props: initDefaultProps$1(comfirmFuncProps(), {
    config: {
      width: 520,
      okType: "primary"
    }
  }),
  setup(C, H) {
    let {
      expose: U
    } = H;
    var W;
    const K = computed(() => C.open), G = computed(() => C.config), {
      direction: X,
      getPrefixCls: Z
    } = useConfigContextInject(), Q = Z("modal"), ee = Z(), te = () => {
      var oe, ie;
      C == null || C.afterClose(), (ie = (oe = G.value).afterClose) === null || ie === void 0 || ie.call(oe);
    }, re = function() {
      C.destroyAction(...arguments);
    };
    U({
      destroy: re
    });
    const ne = (W = G.value.okCancel) !== null && W !== void 0 ? W : G.value.type === "confirm", [ae] = useLocaleReceiver("Modal", defaultLocale.Modal);
    return () => createVNode(ConfirmDialog, _objectSpread2(_objectSpread2({
      prefixCls: Q,
      rootPrefixCls: ee
    }, G.value), {}, {
      close: re,
      open: K.value,
      afterClose: te,
      okText: G.value.okText || (ne ? ae == null ? void 0 : ae.value.okText : ae == null ? void 0 : ae.value.justOkText),
      direction: G.value.direction || X.value,
      cancelText: G.value.cancelText || (ae == null ? void 0 : ae.value.cancelText)
    }), null);
  }
});
let uuid$1 = 0;
const ElementsHolder = defineComponent({
  name: "ElementsHolder",
  inheritAttrs: !1,
  setup(C, H) {
    let {
      expose: U
    } = H;
    const W = shallowRef([]);
    return U({
      addModal: (G) => (W.value.push(G), W.value = W.value.slice(), () => {
        W.value = W.value.filter((X) => X !== G);
      })
    }), () => W.value.map((G) => G());
  }
});
function useModal() {
  const C = shallowRef(null), H = shallowRef([]);
  watch(H, () => {
    H.value.length && ([...H.value].forEach((X) => {
      X();
    }), H.value = []);
  }, {
    immediate: !0
  });
  const U = (G) => function(Z) {
    var Q;
    uuid$1 += 1;
    const ee = shallowRef(!0), te = shallowRef(null), re = shallowRef(unref(Z)), ne = shallowRef({});
    watch(() => Z, (ce) => {
      se(_extends(_extends({}, isRef(ce) ? ce.value : ce), ne.value));
    });
    const ae = function() {
      ee.value = !1;
      for (var ce = arguments.length, fe = new Array(ce), pe = 0; pe < ce; pe++)
        fe[pe] = arguments[pe];
      const he = fe.some((de) => de && de.triggerCancel);
      re.value.onCancel && he && re.value.onCancel(() => {
      }, ...fe.slice(1));
    };
    let oe;
    const ie = () => createVNode(HookModal, {
      key: `modal-${uuid$1}`,
      config: G(re.value),
      ref: te,
      open: ee.value,
      destroyAction: ae,
      afterClose: () => {
        oe == null || oe();
      }
    }, null);
    oe = (Q = C.value) === null || Q === void 0 ? void 0 : Q.addModal(ie), oe && destroyFns$1.push(oe);
    const se = (ce) => {
      re.value = _extends(_extends({}, re.value), ce);
    };
    return {
      destroy: () => {
        te.value ? ae() : H.value = [...H.value, ae];
      },
      update: (ce) => {
        ne.value = ce, te.value ? se(ce) : H.value = [...H.value, () => se(ce)];
      }
    };
  }, W = computed(() => ({
    info: U(withInfo),
    success: U(withSuccess),
    error: U(withError),
    warning: U(withWarn),
    confirm: U(withConfirm)
  })), K = Symbol("modalHolderKey");
  return [W.value, () => createVNode(ElementsHolder, {
    key: K,
    ref: C
  }, null)];
}
function modalWarn(C) {
  return confirm$1(withWarn(C));
}
Modal.useModal = useModal;
Modal.info = function(H) {
  return confirm$1(withInfo(H));
};
Modal.success = function(H) {
  return confirm$1(withSuccess(H));
};
Modal.error = function(H) {
  return confirm$1(withError(H));
};
Modal.warning = modalWarn;
Modal.warn = modalWarn;
Modal.confirm = function(H) {
  return confirm$1(withConfirm(H));
};
Modal.destroyAll = function() {
  for (; destroyFns$1.length; ) {
    const H = destroyFns$1.pop();
    H && H();
  }
};
Modal.install = function(C) {
  return C.component(Modal.name, Modal), C;
};
let basePath$1 = "https://ehr.scwjxx.cn/ehrcfis", ehrPath = "https://ehr.scwjxx.cn/ehrc";
const paretUrl = document.location.href;
if (paretUrl.indexOf("localhost") > -1)
  basePath$1 = "http://11.0.32.112:99/ehrcfis";
else {
  basePath$1 = "/ehrcfis";
  let C = document.location;
  ehrPath = C.protocol + "//" + C.host + "/ehrc";
}
const faceConfig = {
  basePath: basePath$1,
  ehrPath
};
var _cryptoJs_4_2_0_cryptoJs = { exports: {} };
function commonjsRequire(C) {
  throw new Error('Could not dynamically require "' + C + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var core = { exports: {} };
const __viteBrowserExternal = {}, __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __viteBrowserExternal
}, Symbol.toStringTag, { value: "Module" })), require$$0 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
var hasRequiredCore;
function requireCore() {
  return hasRequiredCore || (hasRequiredCore = 1, function(C, H) {
    (function(U, W) {
      C.exports = W();
    })(commonjsGlobal, function() {
      var U = U || function(W, K) {
        var G;
        if (typeof window < "u" && window.crypto && (G = window.crypto), typeof self < "u" && self.crypto && (G = self.crypto), typeof globalThis < "u" && globalThis.crypto && (G = globalThis.crypto), !G && typeof window < "u" && window.msCrypto && (G = window.msCrypto), !G && typeof commonjsGlobal < "u" && commonjsGlobal.crypto && (G = commonjsGlobal.crypto), !G && typeof commonjsRequire == "function")
          try {
            G = require$$0;
          } catch {
          }
        var X = function() {
          if (G) {
            if (typeof G.getRandomValues == "function")
              try {
                return G.getRandomValues(new Uint32Array(1))[0];
              } catch {
              }
            if (typeof G.randomBytes == "function")
              try {
                return G.randomBytes(4).readInt32LE();
              } catch {
              }
          }
          throw new Error("Native crypto module could not be used to get secure random number.");
        }, Z = Object.create || /* @__PURE__ */ function() {
          function le() {
          }
          return function(ce) {
            var fe;
            return le.prototype = ce, fe = new le(), le.prototype = null, fe;
          };
        }(), Q = {}, ee = Q.lib = {}, te = ee.Base = /* @__PURE__ */ function() {
          return {
            /**
             * Creates a new object that inherits from this object.
             *
             * @param {Object} overrides Properties to copy into the new object.
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         field: 'value',
             *
             *         method: function () {
             *         }
             *     });
             */
            extend: function(le) {
              var ce = Z(this);
              return le && ce.mixIn(le), (!ce.hasOwnProperty("init") || this.init === ce.init) && (ce.init = function() {
                ce.$super.init.apply(this, arguments);
              }), ce.init.prototype = ce, ce.$super = this, ce;
            },
            /**
             * Extends this object and runs the init method.
             * Arguments to create() will be passed to init().
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var instance = MyType.create();
             */
            create: function() {
              var le = this.extend();
              return le.init.apply(le, arguments), le;
            },
            /**
             * Initializes a newly created object.
             * Override this method to add some logic when your objects are created.
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         init: function () {
             *             // ...
             *         }
             *     });
             */
            init: function() {
            },
            /**
             * Copies properties into this object.
             *
             * @param {Object} properties The properties to mix in.
             *
             * @example
             *
             *     MyType.mixIn({
             *         field: 'value'
             *     });
             */
            mixIn: function(le) {
              for (var ce in le)
                le.hasOwnProperty(ce) && (this[ce] = le[ce]);
              le.hasOwnProperty("toString") && (this.toString = le.toString);
            },
            /**
             * Creates a copy of this object.
             *
             * @return {Object} The clone.
             *
             * @example
             *
             *     var clone = instance.clone();
             */
            clone: function() {
              return this.init.prototype.extend(this);
            }
          };
        }(), re = ee.WordArray = te.extend({
          /**
           * Initializes a newly created word array.
           *
           * @param {Array} words (Optional) An array of 32-bit words.
           * @param {number} sigBytes (Optional) The number of significant bytes in the words.
           *
           * @example
           *
           *     var wordArray = CryptoJS.lib.WordArray.create();
           *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
           *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
           */
          init: function(le, ce) {
            le = this.words = le || [], ce != K ? this.sigBytes = ce : this.sigBytes = le.length * 4;
          },
          /**
           * Converts this word array to a string.
           *
           * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
           *
           * @return {string} The stringified word array.
           *
           * @example
           *
           *     var string = wordArray + '';
           *     var string = wordArray.toString();
           *     var string = wordArray.toString(CryptoJS.enc.Utf8);
           */
          toString: function(le) {
            return (le || ae).stringify(this);
          },
          /**
           * Concatenates a word array to this word array.
           *
           * @param {WordArray} wordArray The word array to append.
           *
           * @return {WordArray} This word array.
           *
           * @example
           *
           *     wordArray1.concat(wordArray2);
           */
          concat: function(le) {
            var ce = this.words, fe = le.words, pe = this.sigBytes, he = le.sigBytes;
            if (this.clamp(), pe % 4)
              for (var de = 0; de < he; de++) {
                var ge = fe[de >>> 2] >>> 24 - de % 4 * 8 & 255;
                ce[pe + de >>> 2] |= ge << 24 - (pe + de) % 4 * 8;
              }
            else
              for (var ve = 0; ve < he; ve += 4)
                ce[pe + ve >>> 2] = fe[ve >>> 2];
            return this.sigBytes += he, this;
          },
          /**
           * Removes insignificant bits.
           *
           * @example
           *
           *     wordArray.clamp();
           */
          clamp: function() {
            var le = this.words, ce = this.sigBytes;
            le[ce >>> 2] &= 4294967295 << 32 - ce % 4 * 8, le.length = W.ceil(ce / 4);
          },
          /**
           * Creates a copy of this word array.
           *
           * @return {WordArray} The clone.
           *
           * @example
           *
           *     var clone = wordArray.clone();
           */
          clone: function() {
            var le = te.clone.call(this);
            return le.words = this.words.slice(0), le;
          },
          /**
           * Creates a word array filled with random bytes.
           *
           * @param {number} nBytes The number of random bytes to generate.
           *
           * @return {WordArray} The random word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.lib.WordArray.random(16);
           */
          random: function(le) {
            for (var ce = [], fe = 0; fe < le; fe += 4)
              ce.push(X());
            return new re.init(ce, le);
          }
        }), ne = Q.enc = {}, ae = ne.Hex = {
          /**
           * Converts a word array to a hex string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The hex string.
           *
           * @static
           *
           * @example
           *
           *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
           */
          stringify: function(le) {
            for (var ce = le.words, fe = le.sigBytes, pe = [], he = 0; he < fe; he++) {
              var de = ce[he >>> 2] >>> 24 - he % 4 * 8 & 255;
              pe.push((de >>> 4).toString(16)), pe.push((de & 15).toString(16));
            }
            return pe.join("");
          },
          /**
           * Converts a hex string to a word array.
           *
           * @param {string} hexStr The hex string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
           */
          parse: function(le) {
            for (var ce = le.length, fe = [], pe = 0; pe < ce; pe += 2)
              fe[pe >>> 3] |= parseInt(le.substr(pe, 2), 16) << 24 - pe % 8 * 4;
            return new re.init(fe, ce / 2);
          }
        }, oe = ne.Latin1 = {
          /**
           * Converts a word array to a Latin1 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The Latin1 string.
           *
           * @static
           *
           * @example
           *
           *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
           */
          stringify: function(le) {
            for (var ce = le.words, fe = le.sigBytes, pe = [], he = 0; he < fe; he++) {
              var de = ce[he >>> 2] >>> 24 - he % 4 * 8 & 255;
              pe.push(String.fromCharCode(de));
            }
            return pe.join("");
          },
          /**
           * Converts a Latin1 string to a word array.
           *
           * @param {string} latin1Str The Latin1 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
           */
          parse: function(le) {
            for (var ce = le.length, fe = [], pe = 0; pe < ce; pe++)
              fe[pe >>> 2] |= (le.charCodeAt(pe) & 255) << 24 - pe % 4 * 8;
            return new re.init(fe, ce);
          }
        }, ie = ne.Utf8 = {
          /**
           * Converts a word array to a UTF-8 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-8 string.
           *
           * @static
           *
           * @example
           *
           *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
           */
          stringify: function(le) {
            try {
              return decodeURIComponent(escape(oe.stringify(le)));
            } catch {
              throw new Error("Malformed UTF-8 data");
            }
          },
          /**
           * Converts a UTF-8 string to a word array.
           *
           * @param {string} utf8Str The UTF-8 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
           */
          parse: function(le) {
            return oe.parse(unescape(encodeURIComponent(le)));
          }
        }, se = ee.BufferedBlockAlgorithm = te.extend({
          /**
           * Resets this block algorithm's data buffer to its initial state.
           *
           * @example
           *
           *     bufferedBlockAlgorithm.reset();
           */
          reset: function() {
            this._data = new re.init(), this._nDataBytes = 0;
          },
          /**
           * Adds new data to this block algorithm's buffer.
           *
           * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
           *
           * @example
           *
           *     bufferedBlockAlgorithm._append('data');
           *     bufferedBlockAlgorithm._append(wordArray);
           */
          _append: function(le) {
            typeof le == "string" && (le = ie.parse(le)), this._data.concat(le), this._nDataBytes += le.sigBytes;
          },
          /**
           * Processes available data blocks.
           *
           * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
           *
           * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
           *
           * @return {WordArray} The processed data.
           *
           * @example
           *
           *     var processedData = bufferedBlockAlgorithm._process();
           *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
           */
          _process: function(le) {
            var ce, fe = this._data, pe = fe.words, he = fe.sigBytes, de = this.blockSize, ge = de * 4, ve = he / ge;
            le ? ve = W.ceil(ve) : ve = W.max((ve | 0) - this._minBufferSize, 0);
            var me = ve * de, ye = W.min(me * 4, he);
            if (me) {
              for (var be = 0; be < me; be += de)
                this._doProcessBlock(pe, be);
              ce = pe.splice(0, me), fe.sigBytes -= ye;
            }
            return new re.init(ce, ye);
          },
          /**
           * Creates a copy of this object.
           *
           * @return {Object} The clone.
           *
           * @example
           *
           *     var clone = bufferedBlockAlgorithm.clone();
           */
          clone: function() {
            var le = te.clone.call(this);
            return le._data = this._data.clone(), le;
          },
          _minBufferSize: 0
        });
        ee.Hasher = se.extend({
          /**
           * Configuration options.
           */
          cfg: te.extend(),
          /**
           * Initializes a newly created hasher.
           *
           * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
           *
           * @example
           *
           *     var hasher = CryptoJS.algo.SHA256.create();
           */
          init: function(le) {
            this.cfg = this.cfg.extend(le), this.reset();
          },
          /**
           * Resets this hasher to its initial state.
           *
           * @example
           *
           *     hasher.reset();
           */
          reset: function() {
            se.reset.call(this), this._doReset();
          },
          /**
           * Updates this hasher with a message.
           *
           * @param {WordArray|string} messageUpdate The message to append.
           *
           * @return {Hasher} This hasher.
           *
           * @example
           *
           *     hasher.update('message');
           *     hasher.update(wordArray);
           */
          update: function(le) {
            return this._append(le), this._process(), this;
          },
          /**
           * Finalizes the hash computation.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} messageUpdate (Optional) A final message update.
           *
           * @return {WordArray} The hash.
           *
           * @example
           *
           *     var hash = hasher.finalize();
           *     var hash = hasher.finalize('message');
           *     var hash = hasher.finalize(wordArray);
           */
          finalize: function(le) {
            le && this._append(le);
            var ce = this._doFinalize();
            return ce;
          },
          blockSize: 16,
          /**
           * Creates a shortcut function to a hasher's object interface.
           *
           * @param {Hasher} hasher The hasher to create a helper for.
           *
           * @return {Function} The shortcut function.
           *
           * @static
           *
           * @example
           *
           *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
           */
          _createHelper: function(le) {
            return function(ce, fe) {
              return new le.init(fe).finalize(ce);
            };
          },
          /**
           * Creates a shortcut function to the HMAC's object interface.
           *
           * @param {Hasher} hasher The hasher to use in this HMAC helper.
           *
           * @return {Function} The shortcut function.
           *
           * @static
           *
           * @example
           *
           *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
           */
          _createHmacHelper: function(le) {
            return function(ce, fe) {
              return new ue.HMAC.init(le, fe).finalize(ce);
            };
          }
        });
        var ue = Q.algo = {};
        return Q;
      }(Math);
      return U;
    });
  }(core)), core.exports;
}
var x64Core = { exports: {} }, hasRequiredX64Core;
function requireX64Core() {
  return hasRequiredX64Core || (hasRequiredX64Core = 1, function(C, H) {
    (function(U, W) {
      C.exports = W(requireCore());
    })(commonjsGlobal, function(U) {
      return function(W) {
        var K = U, G = K.lib, X = G.Base, Z = G.WordArray, Q = K.x64 = {};
        Q.Word = X.extend({
          /**
           * Initializes a newly created 64-bit word.
           *
           * @param {number} high The high 32 bits.
           * @param {number} low The low 32 bits.
           *
           * @example
           *
           *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
           */
          init: function(ee, te) {
            this.high = ee, this.low = te;
          }
          /**
           * Bitwise NOTs this word.
           *
           * @return {X64Word} A new x64-Word object after negating.
           *
           * @example
           *
           *     var negated = x64Word.not();
           */
          // not: function () {
          // var high = ~this.high;
          // var low = ~this.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Bitwise ANDs this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to AND with this word.
           *
           * @return {X64Word} A new x64-Word object after ANDing.
           *
           * @example
           *
           *     var anded = x64Word.and(anotherX64Word);
           */
          // and: function (word) {
          // var high = this.high & word.high;
          // var low = this.low & word.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Bitwise ORs this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to OR with this word.
           *
           * @return {X64Word} A new x64-Word object after ORing.
           *
           * @example
           *
           *     var ored = x64Word.or(anotherX64Word);
           */
          // or: function (word) {
          // var high = this.high | word.high;
          // var low = this.low | word.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Bitwise XORs this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to XOR with this word.
           *
           * @return {X64Word} A new x64-Word object after XORing.
           *
           * @example
           *
           *     var xored = x64Word.xor(anotherX64Word);
           */
          // xor: function (word) {
          // var high = this.high ^ word.high;
          // var low = this.low ^ word.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Shifts this word n bits to the left.
           *
           * @param {number} n The number of bits to shift.
           *
           * @return {X64Word} A new x64-Word object after shifting.
           *
           * @example
           *
           *     var shifted = x64Word.shiftL(25);
           */
          // shiftL: function (n) {
          // if (n < 32) {
          // var high = (this.high << n) | (this.low >>> (32 - n));
          // var low = this.low << n;
          // } else {
          // var high = this.low << (n - 32);
          // var low = 0;
          // }
          // return X64Word.create(high, low);
          // },
          /**
           * Shifts this word n bits to the right.
           *
           * @param {number} n The number of bits to shift.
           *
           * @return {X64Word} A new x64-Word object after shifting.
           *
           * @example
           *
           *     var shifted = x64Word.shiftR(7);
           */
          // shiftR: function (n) {
          // if (n < 32) {
          // var low = (this.low >>> n) | (this.high << (32 - n));
          // var high = this.high >>> n;
          // } else {
          // var low = this.high >>> (n - 32);
          // var high = 0;
          // }
          // return X64Word.create(high, low);
          // },
          /**
           * Rotates this word n bits to the left.
           *
           * @param {number} n The number of bits to rotate.
           *
           * @return {X64Word} A new x64-Word object after rotating.
           *
           * @example
           *
           *     var rotated = x64Word.rotL(25);
           */
          // rotL: function (n) {
          // return this.shiftL(n).or(this.shiftR(64 - n));
          // },
          /**
           * Rotates this word n bits to the right.
           *
           * @param {number} n The number of bits to rotate.
           *
           * @return {X64Word} A new x64-Word object after rotating.
           *
           * @example
           *
           *     var rotated = x64Word.rotR(7);
           */
          // rotR: function (n) {
          // return this.shiftR(n).or(this.shiftL(64 - n));
          // },
          /**
           * Adds this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to add with this word.
           *
           * @return {X64Word} A new x64-Word object after adding.
           *
           * @example
           *
           *     var added = x64Word.add(anotherX64Word);
           */
          // add: function (word) {
          // var low = (this.low + word.low) | 0;
          // var carry = (low >>> 0) < (this.low >>> 0) ? 1 : 0;
          // var high = (this.high + word.high + carry) | 0;
          // return X64Word.create(high, low);
          // }
        }), Q.WordArray = X.extend({
          /**
           * Initializes a newly created word array.
           *
           * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
           * @param {number} sigBytes (Optional) The number of significant bytes in the words.
           *
           * @example
           *
           *     var wordArray = CryptoJS.x64.WordArray.create();
           *
           *     var wordArray = CryptoJS.x64.WordArray.create([
           *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
           *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
           *     ]);
           *
           *     var wordArray = CryptoJS.x64.WordArray.create([
           *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
           *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
           *     ], 10);
           */
          init: function(ee, te) {
            ee = this.words = ee || [], te != W ? this.sigBytes = te : this.sigBytes = ee.length * 8;
          },
          /**
           * Converts this 64-bit word array to a 32-bit word array.
           *
           * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
           *
           * @example
           *
           *     var x32WordArray = x64WordArray.toX32();
           */
          toX32: function() {
            for (var ee = this.words, te = ee.length, re = [], ne = 0; ne < te; ne++) {
              var ae = ee[ne];
              re.push(ae.high), re.push(ae.low);
            }
            return Z.create(re, this.sigBytes);
          },
          /**
           * Creates a copy of this word array.
           *
           * @return {X64WordArray} The clone.
           *
           * @example
           *
           *     var clone = x64WordArray.clone();
           */
          clone: function() {
            for (var ee = X.clone.call(this), te = ee.words = this.words.slice(0), re = te.length, ne = 0; ne < re; ne++)
              te[ne] = te[ne].clone();
            return ee;
          }
        });
      }(), U;
    });
  }(x64Core)), x64Core.exports;
}
var libTypedarrays = { exports: {} }, hasRequiredLibTypedarrays;
function requireLibTypedarrays() {
  return hasRequiredLibTypedarrays || (hasRequiredLibTypedarrays = 1, function(C, H) {
    (function(U, W) {
      C.exports = W(requireCore());
    })(commonjsGlobal, function(U) {
      return function() {
        if (typeof ArrayBuffer == "function") {
          var W = U, K = W.lib, G = K.WordArray, X = G.init, Z = G.init = function(Q) {
            if (Q instanceof ArrayBuffer && (Q = new Uint8Array(Q)), (Q instanceof Int8Array || typeof Uint8ClampedArray < "u" && Q instanceof Uint8ClampedArray || Q instanceof Int16Array || Q instanceof Uint16Array || Q instanceof Int32Array || Q instanceof Uint32Array || Q instanceof Float32Array || Q instanceof Float64Array) && (Q = new Uint8Array(Q.buffer, Q.byteOffset, Q.byteLength)), Q instanceof Uint8Array) {
              for (var ee = Q.byteLength, te = [], re = 0; re < ee; re++)
                te[re >>> 2] |= Q[re] << 24 - re % 4 * 8;
              X.call(this, te, ee);
            } else
              X.apply(this, arguments);
          };
          Z.prototype = G;
        }
      }(), U.lib.WordArray;
    });
  }(libTypedarrays)), libTypedarrays.exports;
}
var encUtf16 = { exports: {} }, hasRequiredEncUtf16;
function requireEncUtf16() {
  return hasRequiredEncUtf16 || (hasRequiredEncUtf16 = 1, function(C, H) {
    (function(U, W) {
      C.exports = W(requireCore());
    })(commonjsGlobal, function(U) {
      return function() {
        var W = U, K = W.lib, G = K.WordArray, X = W.enc;
        X.Utf16 = X.Utf16BE = {
          /**
           * Converts a word array to a UTF-16 BE string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-16 BE string.
           *
           * @static
           *
           * @example
           *
           *     var utf16String = CryptoJS.enc.Utf16.stringify(wordArray);
           */
          stringify: function(Q) {
            for (var ee = Q.words, te = Q.sigBytes, re = [], ne = 0; ne < te; ne += 2) {
              var ae = ee[ne >>> 2] >>> 16 - ne % 4 * 8 & 65535;
              re.push(String.fromCharCode(ae));
            }
            return re.join("");
          },
          /**
           * Converts a UTF-16 BE string to a word array.
           *
           * @param {string} utf16Str The UTF-16 BE string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf16.parse(utf16String);
           */
          parse: function(Q) {
            for (var ee = Q.length, te = [], re = 0; re < ee; re++)
              te[re >>> 1] |= Q.charCodeAt(re) << 16 - re % 2 * 16;
            return G.create(te, ee * 2);
          }
        }, X.Utf16LE = {
          /**
           * Converts a word array to a UTF-16 LE string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-16 LE string.
           *
           * @static
           *
           * @example
           *
           *     var utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);
           */
          stringify: function(Q) {
            for (var ee = Q.words, te = Q.sigBytes, re = [], ne = 0; ne < te; ne += 2) {
              var ae = Z(ee[ne >>> 2] >>> 16 - ne % 4 * 8 & 65535);
              re.push(String.fromCharCode(ae));
            }
            return re.join("");
          },
          /**
           * Converts a UTF-16 LE string to a word array.
           *
           * @param {string} utf16Str The UTF-16 LE string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);
           */
          parse: function(Q) {
            for (var ee = Q.length, te = [], re = 0; re < ee; re++)
              te[re >>> 1] |= Z(Q.charCodeAt(re) << 16 - re % 2 * 16);
            return G.create(te, ee * 2);
          }
        };
        function Z(Q) {
          return Q << 8 & 4278255360 | Q >>> 8 & 16711935;
        }
      }(), U.enc.Utf16;
    });
  }(encUtf16)), encUtf16.exports;
}
var encBase64 = { exports: {} }, hasRequiredEncBase64;
function requireEncBase64() {
  return hasRequiredEncBase64 || (hasRequiredEncBase64 = 1, function(C, H) {
    (function(U, W) {
      C.exports = W(requireCore());
    })(commonjsGlobal, function(U) {
      return function() {
        var W = U, K = W.lib, G = K.WordArray, X = W.enc;
        X.Base64 = {
          /**
           * Converts a word array to a Base64 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The Base64 string.
           *
           * @static
           *
           * @example
           *
           *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
           */
          stringify: function(Q) {
            var ee = Q.words, te = Q.sigBytes, re = this._map;
            Q.clamp();
            for (var ne = [], ae = 0; ae < te; ae += 3)
              for (var oe = ee[ae >>> 2] >>> 24 - ae % 4 * 8 & 255, ie = ee[ae + 1 >>> 2] >>> 24 - (ae + 1) % 4 * 8 & 255, se = ee[ae + 2 >>> 2] >>> 24 - (ae + 2) % 4 * 8 & 255, ue = oe << 16 | ie << 8 | se, le = 0; le < 4 && ae + le * 0.75 < te; le++)
                ne.push(re.charAt(ue >>> 6 * (3 - le) & 63));
            var ce = re.charAt(64);
            if (ce)
              for (; ne.length % 4; )
                ne.push(ce);
            return ne.join("");
          },
          /**
           * Converts a Base64 string to a word array.
           *
           * @param {string} base64Str The Base64 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
           */
          parse: function(Q) {
            var ee = Q.length, te = this._map, re = this._reverseMap;
            if (!re) {
              re = this._reverseMap = [];
              for (var ne = 0; ne < te.length; ne++)
                re[te.charCodeAt(ne)] = ne;
            }
            var ae = te.charAt(64);
            if (ae) {
              var oe = Q.indexOf(ae);
              oe !== -1 && (ee = oe);
            }
            return Z(Q, ee, re);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        };
        function Z(Q, ee, te) {
          for (var re = [], ne = 0, ae = 0; ae < ee; ae++)
            if (ae % 4) {
              var oe = te[Q.charCodeAt(ae - 1)] << ae % 4 * 2, ie = te[Q.charCodeAt(ae)] >>> 6 - ae % 4 * 2, se = oe | ie;
              re[ne >>> 2] |= se << 24 - ne % 4 * 8, ne++;
            }
          return G.create(re, ne);
        }
      }(), U.enc.Base64;
    });
  }(encBase64)), encBase64.exports;
}
var encBase64url = { exports: {} }, hasRequiredEncBase64url;
function requireEncBase64url() {
  return hasRequiredEncBase64url || (hasRequiredEncBase64url = 1, function(C, H) {
    (function(U, W) {
      C.exports = W(requireCore());
    })(commonjsGlobal, function(U) {
      return function() {
        var W = U, K = W.lib, G = K.WordArray, X = W.enc;
        X.Base64url = {
          /**
           * Converts a word array to a Base64url string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @param {boolean} urlSafe Whether to use url safe
           *
           * @return {string} The Base64url string.
           *
           * @static
           *
           * @example
           *
           *     var base64String = CryptoJS.enc.Base64url.stringify(wordArray);
           */
          stringify: function(Q, ee) {
            ee === void 0 && (ee = !0);
            var te = Q.words, re = Q.sigBytes, ne = ee ? this._safe_map : this._map;
            Q.clamp();
            for (var ae = [], oe = 0; oe < re; oe += 3)
              for (var ie = te[oe >>> 2] >>> 24 - oe % 4 * 8 & 255, se = te[oe + 1 >>> 2] >>> 24 - (oe + 1) % 4 * 8 & 255, ue = te[oe + 2 >>> 2] >>> 24 - (oe + 2) % 4 * 8 & 255, le = ie << 16 | se << 8 | ue, ce = 0; ce < 4 && oe + ce * 0.75 < re; ce++)
                ae.push(ne.charAt(le >>> 6 * (3 - ce) & 63));
            var fe = ne.charAt(64);
            if (fe)
              for (; ae.length % 4; )
                ae.push(fe);
            return ae.join("");
          },
          /**
           * Converts a Base64url string to a word array.
           *
           * @param {string} base64Str The Base64url string.
           *
           * @param {boolean} urlSafe Whether to use url safe
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Base64url.parse(base64String);
           */
          parse: function(Q, ee) {
            ee === void 0 && (ee = !0);
            var te = Q.length, re = ee ? this._safe_map : this._map, ne = this._reverseMap;
            if (!ne) {
              ne = this._reverseMap = [];
              for (var ae = 0; ae < re.length; ae++)
                ne[re.charCodeAt(ae)] = ae;
            }
            var oe = re.charAt(64);
            if (oe) {
              var ie = Q.indexOf(oe);
              ie !== -1 && (te = ie);
            }
            return Z(Q, te, ne);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
        };
        function Z(Q, ee, te) {
          for (var re = [], ne = 0, ae = 0; ae < ee; ae++)
            if (ae % 4) {
              var oe = te[Q.charCodeAt(ae - 1)] << ae % 4 * 2, ie = te[Q.charCodeAt(ae)] >>> 6 - ae % 4 * 2, se = oe | ie;
              re[ne >>> 2] |= se << 24 - ne % 4 * 8, ne++;
            }
          return G.create(re, ne);
        }
      }(), U.enc.Base64url;
    });
  }(encBase64url)), encBase64url.exports;
}
var md5 = { exports: {} }, hasRequiredMd5;
function requireMd5() {
  return hasRequiredMd5 || (hasRequiredMd5 = 1, function(C, H) {
    (function(U, W) {
      C.exports = W(requireCore());
    })(commonjsGlobal, function(U) {
      return function(W) {
        var K = U, G = K.lib, X = G.WordArray, Z = G.Hasher, Q = K.algo, ee = [];
        (function() {
          for (var ie = 0; ie < 64; ie++)
            ee[ie] = W.abs(W.sin(ie + 1)) * 4294967296 | 0;
        })();
        var te = Q.MD5 = Z.extend({
          _doReset: function() {
            this._hash = new X.init([
              1732584193,
              4023233417,
              2562383102,
              271733878
            ]);
          },
          _doProcessBlock: function(ie, se) {
            for (var ue = 0; ue < 16; ue++) {
              var le = se + ue, ce = ie[le];
              ie[le] = (ce << 8 | ce >>> 24) & 16711935 | (ce << 24 | ce >>> 8) & 4278255360;
            }
            var fe = this._hash.words, pe = ie[se + 0], he = ie[se + 1], de = ie[se + 2], ge = ie[se + 3], ve = ie[se + 4], me = ie[se + 5], ye = ie[se + 6], be = ie[se + 7], Ce = ie[se + 8], $e = ie[se + 9], xe = ie[se + 10], _e = ie[se + 11], Ae = ie[se + 12], De = ie[se + 13], Be = ie[se + 14], Oe = ie[se + 15], Se = fe[0], Te = fe[1], we = fe[2], Ee = fe[3];
            Se = re(Se, Te, we, Ee, pe, 7, ee[0]), Ee = re(Ee, Se, Te, we, he, 12, ee[1]), we = re(we, Ee, Se, Te, de, 17, ee[2]), Te = re(Te, we, Ee, Se, ge, 22, ee[3]), Se = re(Se, Te, we, Ee, ve, 7, ee[4]), Ee = re(Ee, Se, Te, we, me, 12, ee[5]), we = re(we, Ee, Se, Te, ye, 17, ee[6]), Te = re(Te, we, Ee, Se, be, 22, ee[7]), Se = re(Se, Te, we, Ee, Ce, 7, ee[8]), Ee = re(Ee, Se, Te, we, $e, 12, ee[9]), we = re(we, Ee, Se, Te, xe, 17, ee[10]), Te = re(Te, we, Ee, Se, _e, 22, ee[11]), Se = re(Se, Te, we, Ee, Ae, 7, ee[12]), Ee = re(Ee, Se, Te, we, De, 12, ee[13]), we = re(we, Ee, Se, Te, Be, 17, ee[14]), Te = re(Te, we, Ee, Se, Oe, 22, ee[15]), Se = ne(Se, Te, we, Ee, he, 5, ee[16]), Ee = ne(Ee, Se, Te, we, ye, 9, ee[17]), we = ne(we, Ee, Se, Te, _e, 14, ee[18]), Te = ne(Te, we, Ee, Se, pe, 20, ee[19]), Se = ne(Se, Te, we, Ee, me, 5, ee[20]), Ee = ne(Ee, Se, Te, we, xe, 9, ee[21]), we = ne(we, Ee, Se, Te, Oe, 14, ee[22]), Te = ne(Te, we, Ee, Se, ve, 20, ee[23]), Se = ne(Se, Te, we, Ee, $e, 5, ee[24]), Ee = ne(Ee, Se, Te, we, Be, 9, ee[25]), we = ne(we, Ee, Se, Te, ge, 14, ee[26]), Te = ne(Te, we, Ee, Se, Ce, 20, ee[27]), Se = ne(Se, Te, we, Ee, De, 5, ee[28]), Ee = ne(Ee, Se, Te, we, de, 9, ee[29]), we = ne(we, Ee, Se, Te, be, 14, ee[30]), Te = ne(Te, we, Ee, Se, Ae, 20, ee[31]), Se = ae(Se, Te, we, Ee, me, 4, ee[32]), Ee = ae(Ee, Se, Te, we, Ce, 11, ee[33]), we = ae(we, Ee, Se, Te, _e, 16, ee[34]), Te = ae(Te, we, Ee, Se, Be, 23, ee[35]), Se = ae(Se, Te, we, Ee, he, 4, ee[36]), Ee = ae(Ee, Se, Te, we, ve, 11, ee[37]), we = ae(we, Ee, Se, Te, be, 16, ee[38]), Te = ae(Te, we, Ee, Se, xe, 23, ee[39]), Se = ae(Se, Te, we, Ee, De, 4, ee[40]), Ee = ae(Ee, Se, Te, we, pe, 11, ee[41]), we = ae(we, Ee, Se, Te, ge, 16, ee[42]), Te = ae(Te, we, Ee, Se, ye, 23, ee[43]), Se = ae(Se, Te, we, Ee, $e, 4, ee[44]), Ee = ae(Ee, Se, Te, we, Ae, 11, ee[45]), we = ae(we, Ee, Se, Te, Oe, 16, ee[46]), Te = ae(Te, we, Ee, Se, de, 23, ee[47]), Se = oe(Se, Te, we, Ee, pe, 6, ee[48]), Ee = oe(Ee, Se, Te, we, be, 10, ee[49]), we = oe(we, Ee, Se, Te, Be, 15, ee[50]), Te = oe(Te, we, Ee, Se, me, 21, ee[51]), Se = oe(Se, Te, we, Ee, Ae, 6, ee[52]), Ee = oe(Ee, Se, Te, we, ge, 10, ee[53]), we = oe(we, Ee, Se, Te, xe, 15, ee[54]), Te = oe(Te, we, Ee, Se, he, 21, ee[55]), Se = oe(Se, Te, we, Ee, Ce, 6, ee[56]), Ee = oe(Ee, Se, Te, we, Oe, 10, ee[57]), we = oe(we, Ee, Se, Te, ye, 15, ee[58]), Te = oe(Te, we, Ee, Se, De, 21, ee[59]), Se = oe(Se, Te, we, Ee, ve, 6, ee[60]), Ee = oe(Ee, Se, Te, we, _e, 10, ee[61]), we = oe(we, Ee, Se, Te, de, 15, ee[62]), Te = oe(Te, we, Ee, Se, $e, 21, ee[63]), fe[0] = fe[0] + Se | 0, fe[1] = fe[1] + Te | 0, fe[2] = fe[2] + we | 0, fe[3] = fe[3] + Ee | 0;
          },
          _doFinalize: function() {
            var ie = this._data, se = ie.words, ue = this._nDataBytes * 8, le = ie.sigBytes * 8;
            se[le >>> 5] |= 128 << 24 - le % 32;
            var ce = W.floor(ue / 4294967296), fe = ue;
            se[(le + 64 >>> 9 << 4) + 15] = (ce << 8 | ce >>> 24) & 16711935 | (ce << 24 | ce >>> 8) & 4278255360, se[(le + 64 >>> 9 << 4) + 14] = (fe << 8 | fe >>> 24) & 16711935 | (fe << 24 | fe >>> 8) & 4278255360, ie.sigBytes = (se.length + 1) * 4, this._process();
            for (var pe = this._hash, he = pe.words, de = 0; de < 4; de++) {
              var ge = he[de];
              he[de] = (ge << 8 | ge >>> 24) & 16711935 | (ge << 24 | ge >>> 8) & 4278255360;
            }
            return pe;
          },
          clone: function() {
            var ie = Z.clone.call(this);
            return ie._hash = this._hash.clone(), ie;
          }
        });
        function re(ie, se, ue, le, ce, fe, pe) {
          var he = ie + (se & ue | ~se & le) + ce + pe;
          return (he << fe | he >>> 32 - fe) + se;
        }
        function ne(ie, se, ue, le, ce, fe, pe) {
          var he = ie + (se & le | ue & ~le) + ce + pe;
          return (he << fe | he >>> 32 - fe) + se;
        }
        function ae(ie, se, ue, le, ce, fe, pe) {
          var he = ie + (se ^ ue ^ le) + ce + pe;
          return (he << fe | he >>> 32 - fe) + se;
        }
        function oe(ie, se, ue, le, ce, fe, pe) {
          var he = ie + (ue ^ (se | ~le)) + ce + pe;
          return (he << fe | he >>> 32 - fe) + se;
        }
        K.MD5 = Z._createHelper(te), K.HmacMD5 = Z._createHmacHelper(te);
      }(Math), U.MD5;
    });
  }(md5)), md5.exports;
}
var sha1 = { exports: {} }, hasRequiredSha1;
function requireSha1() {
  return hasRequiredSha1 || (hasRequiredSha1 = 1, function(C, H) {
    (function(U, W) {
      C.exports = W(requireCore());
    })(commonjsGlobal, function(U) {
      return function() {
        var W = U, K = W.lib, G = K.WordArray, X = K.Hasher, Z = W.algo, Q = [], ee = Z.SHA1 = X.extend({
          _doReset: function() {
            this._hash = new G.init([
              1732584193,
              4023233417,
              2562383102,
              271733878,
              3285377520
            ]);
          },
          _doProcessBlock: function(te, re) {
            for (var ne = this._hash.words, ae = ne[0], oe = ne[1], ie = ne[2], se = ne[3], ue = ne[4], le = 0; le < 80; le++) {
              if (le < 16)
                Q[le] = te[re + le] | 0;
              else {
                var ce = Q[le - 3] ^ Q[le - 8] ^ Q[le - 14] ^ Q[le - 16];
                Q[le] = ce << 1 | ce >>> 31;
              }
              var fe = (ae << 5 | ae >>> 27) + ue + Q[le];
              le < 20 ? fe += (oe & ie | ~oe & se) + 1518500249 : le < 40 ? fe += (oe ^ ie ^ se) + 1859775393 : le < 60 ? fe += (oe & ie | oe & se | ie & se) - 1894007588 : fe += (oe ^ ie ^ se) - 899497514, ue = se, se = ie, ie = oe << 30 | oe >>> 2, oe = ae, ae = fe;
            }
            ne[0] = ne[0] + ae | 0, ne[1] = ne[1] + oe | 0, ne[2] = ne[2] + ie | 0, ne[3] = ne[3] + se | 0, ne[4] = ne[4] + ue | 0;
          },
          _doFinalize: function() {
            var te = this._data, re = te.words, ne = this._nDataBytes * 8, ae = te.sigBytes * 8;
            return re[ae >>> 5] |= 128 << 24 - ae % 32, re[(ae + 64 >>> 9 << 4) + 14] = Math.floor(ne / 4294967296), re[(ae + 64 >>> 9 << 4) + 15] = ne, te.sigBytes = re.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var te = X.clone.call(this);
            return te._hash = this._hash.clone(), te;
          }
        });
        W.SHA1 = X._createHelper(ee), W.HmacSHA1 = X._createHmacHelper(ee);
      }(), U.SHA1;
    });
  }(sha1)), sha1.exports;
}
var sha256 = { exports: {} }, hasRequiredSha256;
function requireSha256() {
  return hasRequiredSha256 || (hasRequiredSha256 = 1, function(C, H) {
    (function(U, W) {
      C.exports = W(requireCore());
    })(commonjsGlobal, function(U) {
      return function(W) {
        var K = U, G = K.lib, X = G.WordArray, Z = G.Hasher, Q = K.algo, ee = [], te = [];
        (function() {
          function ae(ue) {
            for (var le = W.sqrt(ue), ce = 2; ce <= le; ce++)
              if (!(ue % ce))
                return !1;
            return !0;
          }
          function oe(ue) {
            return (ue - (ue | 0)) * 4294967296 | 0;
          }
          for (var ie = 2, se = 0; se < 64; )
            ae(ie) && (se < 8 && (ee[se] = oe(W.pow(ie, 1 / 2))), te[se] = oe(W.pow(ie, 1 / 3)), se++), ie++;
        })();
        var re = [], ne = Q.SHA256 = Z.extend({
          _doReset: function() {
            this._hash = new X.init(ee.slice(0));
          },
          _doProcessBlock: function(ae, oe) {
            for (var ie = this._hash.words, se = ie[0], ue = ie[1], le = ie[2], ce = ie[3], fe = ie[4], pe = ie[5], he = ie[6], de = ie[7], ge = 0; ge < 64; ge++) {
              if (ge < 16)
                re[ge] = ae[oe + ge] | 0;
              else {
                var ve = re[ge - 15], me = (ve << 25 | ve >>> 7) ^ (ve << 14 | ve >>> 18) ^ ve >>> 3, ye = re[ge - 2], be = (ye << 15 | ye >>> 17) ^ (ye << 13 | ye >>> 19) ^ ye >>> 10;
                re[ge] = me + re[ge - 7] + be + re[ge - 16];
              }
              var Ce = fe & pe ^ ~fe & he, $e = se & ue ^ se & le ^ ue & le, xe = (se << 30 | se >>> 2) ^ (se << 19 | se >>> 13) ^ (se << 10 | se >>> 22), _e = (fe << 26 | fe >>> 6) ^ (fe << 21 | fe >>> 11) ^ (fe << 7 | fe >>> 25), Ae = de + _e + Ce + te[ge] + re[ge], De = xe + $e;
              de = he, he = pe, pe = fe, fe = ce + Ae | 0, ce = le, le = ue, ue = se, se = Ae + De | 0;
            }
            ie[0] = ie[0] + se | 0, ie[1] = ie[1] + ue | 0, ie[2] = ie[2] + le | 0, ie[3] = ie[3] + ce | 0, ie[4] = ie[4] + fe | 0, ie[5] = ie[5] + pe | 0, ie[6] = ie[6] + he | 0, ie[7] = ie[7] + de | 0;
          },
          _doFinalize: function() {
            var ae = this._data, oe = ae.words, ie = this._nDataBytes * 8, se = ae.sigBytes * 8;
            return oe[se >>> 5] |= 128 << 24 - se % 32, oe[(se + 64 >>> 9 << 4) + 14] = W.floor(ie / 4294967296), oe[(se + 64 >>> 9 << 4) + 15] = ie, ae.sigBytes = oe.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var ae = Z.clone.call(this);
            return ae._hash = this._hash.clone(), ae;
          }
        });
        K.SHA256 = Z._createHelper(ne), K.HmacSHA256 = Z._createHmacHelper(ne);
      }(Math), U.SHA256;
    });
  }(sha256)), sha256.exports;
}
var sha224 = { exports: {} }, hasRequiredSha224;
function requireSha224() {
  return hasRequiredSha224 || (hasRequiredSha224 = 1, function(C, H) {
    (function(U, W, K) {
      C.exports = W(requireCore(), requireSha256());
    })(commonjsGlobal, function(U) {
      return function() {
        var W = U, K = W.lib, G = K.WordArray, X = W.algo, Z = X.SHA256, Q = X.SHA224 = Z.extend({
          _doReset: function() {
            this._hash = new G.init([
              3238371032,
              914150663,
              812702999,
              4144912697,
              4290775857,
              1750603025,
              1694076839,
              3204075428
            ]);
          },
          _doFinalize: function() {
            var ee = Z._doFinalize.call(this);
            return ee.sigBytes -= 4, ee;
          }
        });
        W.SHA224 = Z._createHelper(Q), W.HmacSHA224 = Z._createHmacHelper(Q);
      }(), U.SHA224;
    });
  }(sha224)), sha224.exports;
}
var sha512 = { exports: {} }, hasRequiredSha512;
function requireSha512() {
  return hasRequiredSha512 || (hasRequiredSha512 = 1, function(C, H) {
    (function(U, W, K) {
      C.exports = W(requireCore(), requireX64Core());
    })(commonjsGlobal, function(U) {
      return function() {
        var W = U, K = W.lib, G = K.Hasher, X = W.x64, Z = X.Word, Q = X.WordArray, ee = W.algo;
        function te() {
          return Z.create.apply(Z, arguments);
        }
        var re = [
          te(1116352408, 3609767458),
          te(1899447441, 602891725),
          te(3049323471, 3964484399),
          te(3921009573, 2173295548),
          te(961987163, 4081628472),
          te(1508970993, 3053834265),
          te(2453635748, 2937671579),
          te(2870763221, 3664609560),
          te(3624381080, 2734883394),
          te(310598401, 1164996542),
          te(607225278, 1323610764),
          te(1426881987, 3590304994),
          te(1925078388, 4068182383),
          te(2162078206, 991336113),
          te(2614888103, 633803317),
          te(3248222580, 3479774868),
          te(3835390401, 2666613458),
          te(4022224774, 944711139),
          te(264347078, 2341262773),
          te(604807628, 2007800933),
          te(770255983, 1495990901),
          te(1249150122, 1856431235),
          te(1555081692, 3175218132),
          te(1996064986, 2198950837),
          te(2554220882, 3999719339),
          te(2821834349, 766784016),
          te(2952996808, 2566594879),
          te(3210313671, 3203337956),
          te(3336571891, 1034457026),
          te(3584528711, 2466948901),
          te(113926993, 3758326383),
          te(338241895, 168717936),
          te(666307205, 1188179964),
          te(773529912, 1546045734),
          te(1294757372, 1522805485),
          te(1396182291, 2643833823),
          te(1695183700, 2343527390),
          te(1986661051, 1014477480),
          te(2177026350, 1206759142),
          te(2456956037, 344077627),
          te(2730485921, 1290863460),
          te(2820302411, 3158454273),
          te(3259730800, 3505952657),
          te(3345764771, 106217008),
          te(3516065817, 3606008344),
          te(3600352804, 1432725776),
          te(4094571909, 1467031594),
          te(275423344, 851169720),
          te(430227734, 3100823752),
          te(506948616, 1363258195),
          te(659060556, 3750685593),
          te(883997877, 3785050280),
          te(958139571, 3318307427),
          te(1322822218, 3812723403),
          te(1537002063, 2003034995),
          te(1747873779, 3602036899),
          te(1955562222, 1575990012),
          te(2024104815, 1125592928),
          te(2227730452, 2716904306),
          te(2361852424, 442776044),
          te(2428436474, 593698344),
          te(2756734187, 3733110249),
          te(3204031479, 2999351573),
          te(3329325298, 3815920427),
          te(3391569614, 3928383900),
          te(3515267271, 566280711),
          te(3940187606, 3454069534),
          te(4118630271, 4000239992),
          te(116418474, 1914138554),
          te(174292421, 2731055270),
          te(289380356, 3203993006),
          te(460393269, 320620315),
          te(685471733, 587496836),
          te(852142971, 1086792851),
          te(1017036298, 365543100),
          te(1126000580, 2618297676),
          te(1288033470, 3409855158),
          te(1501505948, 4234509866),
          te(1607167915, 987167468),
          te(1816402316, 1246189591)
        ], ne = [];
        (function() {
          for (var oe = 0; oe < 80; oe++)
            ne[oe] = te();
        })();
        var ae = ee.SHA512 = G.extend({
          _doReset: function() {
            this._hash = new Q.init([
              new Z.init(1779033703, 4089235720),
              new Z.init(3144134277, 2227873595),
              new Z.init(1013904242, 4271175723),
              new Z.init(2773480762, 1595750129),
              new Z.init(1359893119, 2917565137),
              new Z.init(2600822924, 725511199),
              new Z.init(528734635, 4215389547),
              new Z.init(1541459225, 327033209)
            ]);
          },
          _doProcessBlock: function(oe, ie) {
            for (var se = this._hash.words, ue = se[0], le = se[1], ce = se[2], fe = se[3], pe = se[4], he = se[5], de = se[6], ge = se[7], ve = ue.high, me = ue.low, ye = le.high, be = le.low, Ce = ce.high, $e = ce.low, xe = fe.high, _e = fe.low, Ae = pe.high, De = pe.low, Be = he.high, Oe = he.low, Se = de.high, Te = de.low, we = ge.high, Ee = ge.low, Fe = ve, ke = me, Re = ye, Pe = be, He = Ce, Ve = $e, rt = xe, Ye = _e, Le = Ae, Ie = De, Qe = Be, Ke = Oe, et = Se, Ge = Te, nt = we, Je = Ee, je = 0; je < 80; je++) {
              var Ne, Ue, tt = ne[je];
              if (je < 16)
                Ue = tt.high = oe[ie + je * 2] | 0, Ne = tt.low = oe[ie + je * 2 + 1] | 0;
              else {
                var at = ne[je - 15], We = at.high, Xe = at.low, xt = (We >>> 1 | Xe << 31) ^ (We >>> 8 | Xe << 24) ^ We >>> 7, it = (Xe >>> 1 | We << 31) ^ (Xe >>> 8 | We << 24) ^ (Xe >>> 7 | We << 25), st = ne[je - 2], qe = st.high, Ze = st.low, yt = (qe >>> 19 | Ze << 13) ^ (qe << 3 | Ze >>> 29) ^ qe >>> 6, lt = (Ze >>> 19 | qe << 13) ^ (Ze << 3 | qe >>> 29) ^ (Ze >>> 6 | qe << 26), ct = ne[je - 7], vt = ct.high, bt = ct.low, ut = ne[je - 16], Ct = ut.high, ft = ut.low;
                Ne = it + bt, Ue = xt + vt + (Ne >>> 0 < it >>> 0 ? 1 : 0), Ne = Ne + lt, Ue = Ue + yt + (Ne >>> 0 < lt >>> 0 ? 1 : 0), Ne = Ne + ft, Ue = Ue + Ct + (Ne >>> 0 < ft >>> 0 ? 1 : 0), tt.high = Ue, tt.low = Ne;
              }
              var St = Le & Qe ^ ~Le & et, dt = Ie & Ke ^ ~Ie & Ge, _t = Fe & Re ^ Fe & He ^ Re & He, Et = ke & Pe ^ ke & Ve ^ Pe & Ve, Tt = (Fe >>> 28 | ke << 4) ^ (Fe << 30 | ke >>> 2) ^ (Fe << 25 | ke >>> 7), ht = (ke >>> 28 | Fe << 4) ^ (ke << 30 | Fe >>> 2) ^ (ke << 25 | Fe >>> 7), wt = (Le >>> 14 | Ie << 18) ^ (Le >>> 18 | Ie << 14) ^ (Le << 23 | Ie >>> 9), $t = (Ie >>> 14 | Le << 18) ^ (Ie >>> 18 | Le << 14) ^ (Ie << 23 | Le >>> 9), pt = re[je], At = pt.high, gt = pt.low, Me = Je + $t, ze = nt + wt + (Me >>> 0 < Je >>> 0 ? 1 : 0), Me = Me + dt, ze = ze + St + (Me >>> 0 < dt >>> 0 ? 1 : 0), Me = Me + gt, ze = ze + At + (Me >>> 0 < gt >>> 0 ? 1 : 0), Me = Me + Ne, ze = ze + Ue + (Me >>> 0 < Ne >>> 0 ? 1 : 0), mt = ht + Et, Dt = Tt + _t + (mt >>> 0 < ht >>> 0 ? 1 : 0);
              nt = et, Je = Ge, et = Qe, Ge = Ke, Qe = Le, Ke = Ie, Ie = Ye + Me | 0, Le = rt + ze + (Ie >>> 0 < Ye >>> 0 ? 1 : 0) | 0, rt = He, Ye = Ve, He = Re, Ve = Pe, Re = Fe, Pe = ke, ke = Me + mt | 0, Fe = ze + Dt + (ke >>> 0 < Me >>> 0 ? 1 : 0) | 0;
            }
            me = ue.low = me + ke, ue.high = ve + Fe + (me >>> 0 < ke >>> 0 ? 1 : 0), be = le.low = be + Pe, le.high = ye + Re + (be >>> 0 < Pe >>> 0 ? 1 : 0), $e = ce.low = $e + Ve, ce.high = Ce + He + ($e >>> 0 < Ve >>> 0 ? 1 : 0), _e = fe.low = _e + Ye, fe.high = xe + rt + (_e >>> 0 < Ye >>> 0 ? 1 : 0), De = pe.low = De + Ie, pe.high = Ae + Le + (De >>> 0 < Ie >>> 0 ? 1 : 0), Oe = he.low = Oe + Ke, he.high = Be + Qe + (Oe >>> 0 < Ke >>> 0 ? 1 : 0), Te = de.low = Te + Ge, de.high = Se + et + (Te >>> 0 < Ge >>> 0 ? 1 : 0), Ee = ge.low = Ee + Je, ge.high = we + nt + (Ee >>> 0 < Je >>> 0 ? 1 : 0);
          },
          _doFinalize: function() {
            var oe = this._data, ie = oe.words, se = this._nDataBytes * 8, ue = oe.sigBytes * 8;
            ie[ue >>> 5] |= 128 << 24 - ue % 32, ie[(ue + 128 >>> 10 << 5) + 30] = Math.floor(se / 4294967296), ie[(ue + 128 >>> 10 << 5) + 31] = se, oe.sigBytes = ie.length * 4, this._process();
            var le = this._hash.toX32();
            return le;
          },
          clone: function() {
            var oe = G.clone.call(this);
            return oe._hash = this._hash.clone(), oe;
          },
          blockSize: 1024 / 32
        });
        W.SHA512 = G._createHelper(ae), W.HmacSHA512 = G._createHmacHelper(ae);
      }(), U.SHA512;
    });
  }(sha512)), sha512.exports;
}
var sha384 = { exports: {} }, hasRequiredSha384;
function requireSha384() {
  return hasRequiredSha384 || (hasRequiredSha384 = 1, function(C, H) {
    (function(U, W, K) {
      C.exports = W(requireCore(), requireX64Core(), requireSha512());
    })(commonjsGlobal, function(U) {
      return function() {
        var W = U, K = W.x64, G = K.Word, X = K.WordArray, Z = W.algo, Q = Z.SHA512, ee = Z.SHA384 = Q.extend({
          _doReset: function() {
            this._hash = new X.init([
              new G.init(3418070365, 3238371032),
              new G.init(1654270250, 914150663),
              new G.init(2438529370, 812702999),
              new G.init(355462360, 4144912697),
              new G.init(1731405415, 4290775857),
              new G.init(2394180231, 1750603025),
              new G.init(3675008525, 1694076839),
              new G.init(1203062813, 3204075428)
            ]);
          },
          _doFinalize: function() {
            var te = Q._doFinalize.call(this);
            return te.sigBytes -= 16, te;
          }
        });
        W.SHA384 = Q._createHelper(ee), W.HmacSHA384 = Q._createHmacHelper(ee);
      }(), U.SHA384;
    });
  }(sha384)), sha384.exports;
}
var sha3 = { exports: {} }, hasRequiredSha3;
function requireSha3() {
  return hasRequiredSha3 || (hasRequiredSha3 = 1, function(C, H) {
    (function(U, W, K) {
      C.exports = W(requireCore(), requireX64Core());
    })(commonjsGlobal, function(U) {
      return function(W) {
        var K = U, G = K.lib, X = G.WordArray, Z = G.Hasher, Q = K.x64, ee = Q.Word, te = K.algo, re = [], ne = [], ae = [];
        (function() {
          for (var se = 1, ue = 0, le = 0; le < 24; le++) {
            re[se + 5 * ue] = (le + 1) * (le + 2) / 2 % 64;
            var ce = ue % 5, fe = (2 * se + 3 * ue) % 5;
            se = ce, ue = fe;
          }
          for (var se = 0; se < 5; se++)
            for (var ue = 0; ue < 5; ue++)
              ne[se + 5 * ue] = ue + (2 * se + 3 * ue) % 5 * 5;
          for (var pe = 1, he = 0; he < 24; he++) {
            for (var de = 0, ge = 0, ve = 0; ve < 7; ve++) {
              if (pe & 1) {
                var me = (1 << ve) - 1;
                me < 32 ? ge ^= 1 << me : de ^= 1 << me - 32;
              }
              pe & 128 ? pe = pe << 1 ^ 113 : pe <<= 1;
            }
            ae[he] = ee.create(de, ge);
          }
        })();
        var oe = [];
        (function() {
          for (var se = 0; se < 25; se++)
            oe[se] = ee.create();
        })();
        var ie = te.SHA3 = Z.extend({
          /**
           * Configuration options.
           *
           * @property {number} outputLength
           *   The desired number of bits in the output hash.
           *   Only values permitted are: 224, 256, 384, 512.
           *   Default: 512
           */
          cfg: Z.cfg.extend({
            outputLength: 512
          }),
          _doReset: function() {
            for (var se = this._state = [], ue = 0; ue < 25; ue++)
              se[ue] = new ee.init();
            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
          },
          _doProcessBlock: function(se, ue) {
            for (var le = this._state, ce = this.blockSize / 2, fe = 0; fe < ce; fe++) {
              var pe = se[ue + 2 * fe], he = se[ue + 2 * fe + 1];
              pe = (pe << 8 | pe >>> 24) & 16711935 | (pe << 24 | pe >>> 8) & 4278255360, he = (he << 8 | he >>> 24) & 16711935 | (he << 24 | he >>> 8) & 4278255360;
              var de = le[fe];
              de.high ^= he, de.low ^= pe;
            }
            for (var ge = 0; ge < 24; ge++) {
              for (var ve = 0; ve < 5; ve++) {
                for (var me = 0, ye = 0, be = 0; be < 5; be++) {
                  var de = le[ve + 5 * be];
                  me ^= de.high, ye ^= de.low;
                }
                var Ce = oe[ve];
                Ce.high = me, Ce.low = ye;
              }
              for (var ve = 0; ve < 5; ve++)
                for (var $e = oe[(ve + 4) % 5], xe = oe[(ve + 1) % 5], _e = xe.high, Ae = xe.low, me = $e.high ^ (_e << 1 | Ae >>> 31), ye = $e.low ^ (Ae << 1 | _e >>> 31), be = 0; be < 5; be++) {
                  var de = le[ve + 5 * be];
                  de.high ^= me, de.low ^= ye;
                }
              for (var De = 1; De < 25; De++) {
                var me, ye, de = le[De], Be = de.high, Oe = de.low, Se = re[De];
                Se < 32 ? (me = Be << Se | Oe >>> 32 - Se, ye = Oe << Se | Be >>> 32 - Se) : (me = Oe << Se - 32 | Be >>> 64 - Se, ye = Be << Se - 32 | Oe >>> 64 - Se);
                var Te = oe[ne[De]];
                Te.high = me, Te.low = ye;
              }
              var we = oe[0], Ee = le[0];
              we.high = Ee.high, we.low = Ee.low;
              for (var ve = 0; ve < 5; ve++)
                for (var be = 0; be < 5; be++) {
                  var De = ve + 5 * be, de = le[De], Fe = oe[De], ke = oe[(ve + 1) % 5 + 5 * be], Re = oe[(ve + 2) % 5 + 5 * be];
                  de.high = Fe.high ^ ~ke.high & Re.high, de.low = Fe.low ^ ~ke.low & Re.low;
                }
              var de = le[0], Pe = ae[ge];
              de.high ^= Pe.high, de.low ^= Pe.low;
            }
          },
          _doFinalize: function() {
            var se = this._data, ue = se.words;
            this._nDataBytes * 8;
            var le = se.sigBytes * 8, ce = this.blockSize * 32;
            ue[le >>> 5] |= 1 << 24 - le % 32, ue[(W.ceil((le + 1) / ce) * ce >>> 5) - 1] |= 128, se.sigBytes = ue.length * 4, this._process();
            for (var fe = this._state, pe = this.cfg.outputLength / 8, he = pe / 8, de = [], ge = 0; ge < he; ge++) {
              var ve = fe[ge], me = ve.high, ye = ve.low;
              me = (me << 8 | me >>> 24) & 16711935 | (me << 24 | me >>> 8) & 4278255360, ye = (ye << 8 | ye >>> 24) & 16711935 | (ye << 24 | ye >>> 8) & 4278255360, de.push(ye), de.push(me);
            }
            return new X.init(de, pe);
          },
          clone: function() {
            for (var se = Z.clone.call(this), ue = se._state = this._state.slice(0), le = 0; le < 25; le++)
              ue[le] = ue[le].clone();
            return se;
          }
        });
        K.SHA3 = Z._createHelper(ie), K.HmacSHA3 = Z._createHmacHelper(ie);
      }(Math), U.SHA3;
    });
  }(sha3)), sha3.exports;
}
var ripemd160 = { exports: {} }, hasRequiredRipemd160;
function requireRipemd160() {
  return hasRequiredRipemd160 || (hasRequiredRipemd160 = 1, function(C, H) {
    (function(U, W) {
      C.exports = W(requireCore());
    })(commonjsGlobal, function(U) {
      /** @preserve
      			(c) 2012 by Cédric Mesnil. All rights reserved.
      
      			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
      
      			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      
      			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
      			*/
      return function(W) {
        var K = U, G = K.lib, X = G.WordArray, Z = G.Hasher, Q = K.algo, ee = X.create([
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          7,
          4,
          13,
          1,
          10,
          6,
          15,
          3,
          12,
          0,
          9,
          5,
          2,
          14,
          11,
          8,
          3,
          10,
          14,
          4,
          9,
          15,
          8,
          1,
          2,
          7,
          0,
          6,
          13,
          11,
          5,
          12,
          1,
          9,
          11,
          10,
          0,
          8,
          12,
          4,
          13,
          3,
          7,
          15,
          14,
          5,
          6,
          2,
          4,
          0,
          5,
          9,
          7,
          12,
          2,
          10,
          14,
          1,
          3,
          8,
          11,
          6,
          15,
          13
        ]), te = X.create([
          5,
          14,
          7,
          0,
          9,
          2,
          11,
          4,
          13,
          6,
          15,
          8,
          1,
          10,
          3,
          12,
          6,
          11,
          3,
          7,
          0,
          13,
          5,
          10,
          14,
          15,
          8,
          12,
          4,
          9,
          1,
          2,
          15,
          5,
          1,
          3,
          7,
          14,
          6,
          9,
          11,
          8,
          12,
          2,
          10,
          0,
          4,
          13,
          8,
          6,
          4,
          1,
          3,
          11,
          15,
          0,
          5,
          12,
          2,
          13,
          9,
          7,
          10,
          14,
          12,
          15,
          10,
          4,
          1,
          5,
          8,
          7,
          6,
          2,
          13,
          14,
          0,
          3,
          9,
          11
        ]), re = X.create([
          11,
          14,
          15,
          12,
          5,
          8,
          7,
          9,
          11,
          13,
          14,
          15,
          6,
          7,
          9,
          8,
          7,
          6,
          8,
          13,
          11,
          9,
          7,
          15,
          7,
          12,
          15,
          9,
          11,
          7,
          13,
          12,
          11,
          13,
          6,
          7,
          14,
          9,
          13,
          15,
          14,
          8,
          13,
          6,
          5,
          12,
          7,
          5,
          11,
          12,
          14,
          15,
          14,
          15,
          9,
          8,
          9,
          14,
          5,
          6,
          8,
          6,
          5,
          12,
          9,
          15,
          5,
          11,
          6,
          8,
          13,
          12,
          5,
          12,
          13,
          14,
          11,
          8,
          5,
          6
        ]), ne = X.create([
          8,
          9,
          9,
          11,
          13,
          15,
          15,
          5,
          7,
          7,
          8,
          11,
          14,
          14,
          12,
          6,
          9,
          13,
          15,
          7,
          12,
          8,
          9,
          11,
          7,
          7,
          12,
          7,
          6,
          15,
          13,
          11,
          9,
          7,
          15,
          11,
          8,
          6,
          6,
          14,
          12,
          13,
          5,
          14,
          13,
          13,
          7,
          5,
          15,
          5,
          8,
          11,
          14,
          14,
          6,
          14,
          6,
          9,
          12,
          9,
          12,
          5,
          15,
          8,
          8,
          5,
          12,
          9,
          12,
          5,
          14,
          6,
          8,
          13,
          6,
          5,
          15,
          13,
          11,
          11
        ]), ae = X.create([0, 1518500249, 1859775393, 2400959708, 2840853838]), oe = X.create([1352829926, 1548603684, 1836072691, 2053994217, 0]), ie = Q.RIPEMD160 = Z.extend({
          _doReset: function() {
            this._hash = X.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
          },
          _doProcessBlock: function(he, de) {
            for (var ge = 0; ge < 16; ge++) {
              var ve = de + ge, me = he[ve];
              he[ve] = (me << 8 | me >>> 24) & 16711935 | (me << 24 | me >>> 8) & 4278255360;
            }
            var ye = this._hash.words, be = ae.words, Ce = oe.words, $e = ee.words, xe = te.words, _e = re.words, Ae = ne.words, De, Be, Oe, Se, Te, we, Ee, Fe, ke, Re;
            we = De = ye[0], Ee = Be = ye[1], Fe = Oe = ye[2], ke = Se = ye[3], Re = Te = ye[4];
            for (var Pe, ge = 0; ge < 80; ge += 1)
              Pe = De + he[de + $e[ge]] | 0, ge < 16 ? Pe += se(Be, Oe, Se) + be[0] : ge < 32 ? Pe += ue(Be, Oe, Se) + be[1] : ge < 48 ? Pe += le(Be, Oe, Se) + be[2] : ge < 64 ? Pe += ce(Be, Oe, Se) + be[3] : Pe += fe(Be, Oe, Se) + be[4], Pe = Pe | 0, Pe = pe(Pe, _e[ge]), Pe = Pe + Te | 0, De = Te, Te = Se, Se = pe(Oe, 10), Oe = Be, Be = Pe, Pe = we + he[de + xe[ge]] | 0, ge < 16 ? Pe += fe(Ee, Fe, ke) + Ce[0] : ge < 32 ? Pe += ce(Ee, Fe, ke) + Ce[1] : ge < 48 ? Pe += le(Ee, Fe, ke) + Ce[2] : ge < 64 ? Pe += ue(Ee, Fe, ke) + Ce[3] : Pe += se(Ee, Fe, ke) + Ce[4], Pe = Pe | 0, Pe = pe(Pe, Ae[ge]), Pe = Pe + Re | 0, we = Re, Re = ke, ke = pe(Fe, 10), Fe = Ee, Ee = Pe;
            Pe = ye[1] + Oe + ke | 0, ye[1] = ye[2] + Se + Re | 0, ye[2] = ye[3] + Te + we | 0, ye[3] = ye[4] + De + Ee | 0, ye[4] = ye[0] + Be + Fe | 0, ye[0] = Pe;
          },
          _doFinalize: function() {
            var he = this._data, de = he.words, ge = this._nDataBytes * 8, ve = he.sigBytes * 8;
            de[ve >>> 5] |= 128 << 24 - ve % 32, de[(ve + 64 >>> 9 << 4) + 14] = (ge << 8 | ge >>> 24) & 16711935 | (ge << 24 | ge >>> 8) & 4278255360, he.sigBytes = (de.length + 1) * 4, this._process();
            for (var me = this._hash, ye = me.words, be = 0; be < 5; be++) {
              var Ce = ye[be];
              ye[be] = (Ce << 8 | Ce >>> 24) & 16711935 | (Ce << 24 | Ce >>> 8) & 4278255360;
            }
            return me;
          },
          clone: function() {
            var he = Z.clone.call(this);
            return he._hash = this._hash.clone(), he;
          }
        });
        function se(he, de, ge) {
          return he ^ de ^ ge;
        }
        function ue(he, de, ge) {
          return he & de | ~he & ge;
        }
        function le(he, de, ge) {
          return (he | ~de) ^ ge;
        }
        function ce(he, de, ge) {
          return he & ge | de & ~ge;
        }
        function fe(he, de, ge) {
          return he ^ (de | ~ge);
        }
        function pe(he, de) {
          return he << de | he >>> 32 - de;
        }
        K.RIPEMD160 = Z._createHelper(ie), K.HmacRIPEMD160 = Z._createHmacHelper(ie);
      }(), U.RIPEMD160;
    });
  }(ripemd160)), ripemd160.exports;
}
var hmac = { exports: {} }, hasRequiredHmac;
function requireHmac() {
  return hasRequiredHmac || (hasRequiredHmac = 1, function(C, H) {
    (function(U, W) {
      C.exports = W(requireCore());
    })(commonjsGlobal, function(U) {
      (function() {
        var W = U, K = W.lib, G = K.Base, X = W.enc, Z = X.Utf8, Q = W.algo;
        Q.HMAC = G.extend({
          /**
           * Initializes a newly created HMAC.
           *
           * @param {Hasher} hasher The hash algorithm to use.
           * @param {WordArray|string} key The secret key.
           *
           * @example
           *
           *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
           */
          init: function(ee, te) {
            ee = this._hasher = new ee.init(), typeof te == "string" && (te = Z.parse(te));
            var re = ee.blockSize, ne = re * 4;
            te.sigBytes > ne && (te = ee.finalize(te)), te.clamp();
            for (var ae = this._oKey = te.clone(), oe = this._iKey = te.clone(), ie = ae.words, se = oe.words, ue = 0; ue < re; ue++)
              ie[ue] ^= 1549556828, se[ue] ^= 909522486;
            ae.sigBytes = oe.sigBytes = ne, this.reset();
          },
          /**
           * Resets this HMAC to its initial state.
           *
           * @example
           *
           *     hmacHasher.reset();
           */
          reset: function() {
            var ee = this._hasher;
            ee.reset(), ee.update(this._iKey);
          },
          /**
           * Updates this HMAC with a message.
           *
           * @param {WordArray|string} messageUpdate The message to append.
           *
           * @return {HMAC} This HMAC instance.
           *
           * @example
           *
           *     hmacHasher.update('message');
           *     hmacHasher.update(wordArray);
           */
          update: function(ee) {
            return this._hasher.update(ee), this;
          },
          /**
           * Finalizes the HMAC computation.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} messageUpdate (Optional) A final message update.
           *
           * @return {WordArray} The HMAC.
           *
           * @example
           *
           *     var hmac = hmacHasher.finalize();
           *     var hmac = hmacHasher.finalize('message');
           *     var hmac = hmacHasher.finalize(wordArray);
           */
          finalize: function(ee) {
            var te = this._hasher, re = te.finalize(ee);
            te.reset();
            var ne = te.finalize(this._oKey.clone().concat(re));
            return ne;
          }
        });
      })();
    });
  }(hmac)), hmac.exports;
}
var pbkdf2 = { exports: {} }, hasRequiredPbkdf2;
function requirePbkdf2() {
  return hasRequiredPbkdf2 || (hasRequiredPbkdf2 = 1, function(C, H) {
    (function(U, W, K) {
      C.exports = W(requireCore(), requireSha256(), requireHmac());
    })(commonjsGlobal, function(U) {
      return function() {
        var W = U, K = W.lib, G = K.Base, X = K.WordArray, Z = W.algo, Q = Z.SHA256, ee = Z.HMAC, te = Z.PBKDF2 = G.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hasher to use. Default: SHA256
           * @property {number} iterations The number of iterations to perform. Default: 250000
           */
          cfg: G.extend({
            keySize: 128 / 32,
            hasher: Q,
            iterations: 25e4
          }),
          /**
           * Initializes a newly created key derivation function.
           *
           * @param {Object} cfg (Optional) The configuration options to use for the derivation.
           *
           * @example
           *
           *     var kdf = CryptoJS.algo.PBKDF2.create();
           *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });
           *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });
           */
          init: function(re) {
            this.cfg = this.cfg.extend(re);
          },
          /**
           * Computes the Password-Based Key Derivation Function 2.
           *
           * @param {WordArray|string} password The password.
           * @param {WordArray|string} salt A salt.
           *
           * @return {WordArray} The derived key.
           *
           * @example
           *
           *     var key = kdf.compute(password, salt);
           */
          compute: function(re, ne) {
            for (var ae = this.cfg, oe = ee.create(ae.hasher, re), ie = X.create(), se = X.create([1]), ue = ie.words, le = se.words, ce = ae.keySize, fe = ae.iterations; ue.length < ce; ) {
              var pe = oe.update(ne).finalize(se);
              oe.reset();
              for (var he = pe.words, de = he.length, ge = pe, ve = 1; ve < fe; ve++) {
                ge = oe.finalize(ge), oe.reset();
                for (var me = ge.words, ye = 0; ye < de; ye++)
                  he[ye] ^= me[ye];
              }
              ie.concat(pe), le[0]++;
            }
            return ie.sigBytes = ce * 4, ie;
          }
        });
        W.PBKDF2 = function(re, ne, ae) {
          return te.create(ae).compute(re, ne);
        };
      }(), U.PBKDF2;
    });
  }(pbkdf2)), pbkdf2.exports;
}
var evpkdf = { exports: {} }, hasRequiredEvpkdf;
function requireEvpkdf() {
  return hasRequiredEvpkdf || (hasRequiredEvpkdf = 1, function(C, H) {
    (function(U, W, K) {
      C.exports = W(requireCore(), requireSha1(), requireHmac());
    })(commonjsGlobal, function(U) {
      return function() {
        var W = U, K = W.lib, G = K.Base, X = K.WordArray, Z = W.algo, Q = Z.MD5, ee = Z.EvpKDF = G.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hash algorithm to use. Default: MD5
           * @property {number} iterations The number of iterations to perform. Default: 1
           */
          cfg: G.extend({
            keySize: 128 / 32,
            hasher: Q,
            iterations: 1
          }),
          /**
           * Initializes a newly created key derivation function.
           *
           * @param {Object} cfg (Optional) The configuration options to use for the derivation.
           *
           * @example
           *
           *     var kdf = CryptoJS.algo.EvpKDF.create();
           *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
           *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
           */
          init: function(te) {
            this.cfg = this.cfg.extend(te);
          },
          /**
           * Derives a key from a password.
           *
           * @param {WordArray|string} password The password.
           * @param {WordArray|string} salt A salt.
           *
           * @return {WordArray} The derived key.
           *
           * @example
           *
           *     var key = kdf.compute(password, salt);
           */
          compute: function(te, re) {
            for (var ne, ae = this.cfg, oe = ae.hasher.create(), ie = X.create(), se = ie.words, ue = ae.keySize, le = ae.iterations; se.length < ue; ) {
              ne && oe.update(ne), ne = oe.update(te).finalize(re), oe.reset();
              for (var ce = 1; ce < le; ce++)
                ne = oe.finalize(ne), oe.reset();
              ie.concat(ne);
            }
            return ie.sigBytes = ue * 4, ie;
          }
        });
        W.EvpKDF = function(te, re, ne) {
          return ee.create(ne).compute(te, re);
        };
      }(), U.EvpKDF;
    });
  }(evpkdf)), evpkdf.exports;
}
var cipherCore = { exports: {} }, hasRequiredCipherCore;
function requireCipherCore() {
  return hasRequiredCipherCore || (hasRequiredCipherCore = 1, function(C, H) {
    (function(U, W, K) {
      C.exports = W(requireCore(), requireEvpkdf());
    })(commonjsGlobal, function(U) {
      U.lib.Cipher || function(W) {
        var K = U, G = K.lib, X = G.Base, Z = G.WordArray, Q = G.BufferedBlockAlgorithm, ee = K.enc;
        ee.Utf8;
        var te = ee.Base64, re = K.algo, ne = re.EvpKDF, ae = G.Cipher = Q.extend({
          /**
           * Configuration options.
           *
           * @property {WordArray} iv The IV to use for this operation.
           */
          cfg: X.extend(),
          /**
           * Creates this cipher in encryption mode.
           *
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {Cipher} A cipher instance.
           *
           * @static
           *
           * @example
           *
           *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
           */
          createEncryptor: function(me, ye) {
            return this.create(this._ENC_XFORM_MODE, me, ye);
          },
          /**
           * Creates this cipher in decryption mode.
           *
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {Cipher} A cipher instance.
           *
           * @static
           *
           * @example
           *
           *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
           */
          createDecryptor: function(me, ye) {
            return this.create(this._DEC_XFORM_MODE, me, ye);
          },
          /**
           * Initializes a newly created cipher.
           *
           * @param {number} xformMode Either the encryption or decryption transormation mode constant.
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @example
           *
           *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
           */
          init: function(me, ye, be) {
            this.cfg = this.cfg.extend(be), this._xformMode = me, this._key = ye, this.reset();
          },
          /**
           * Resets this cipher to its initial state.
           *
           * @example
           *
           *     cipher.reset();
           */
          reset: function() {
            Q.reset.call(this), this._doReset();
          },
          /**
           * Adds data to be encrypted or decrypted.
           *
           * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
           *
           * @return {WordArray} The data after processing.
           *
           * @example
           *
           *     var encrypted = cipher.process('data');
           *     var encrypted = cipher.process(wordArray);
           */
          process: function(me) {
            return this._append(me), this._process();
          },
          /**
           * Finalizes the encryption or decryption process.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
           *
           * @return {WordArray} The data after final processing.
           *
           * @example
           *
           *     var encrypted = cipher.finalize();
           *     var encrypted = cipher.finalize('data');
           *     var encrypted = cipher.finalize(wordArray);
           */
          finalize: function(me) {
            me && this._append(me);
            var ye = this._doFinalize();
            return ye;
          },
          keySize: 128 / 32,
          ivSize: 128 / 32,
          _ENC_XFORM_MODE: 1,
          _DEC_XFORM_MODE: 2,
          /**
           * Creates shortcut functions to a cipher's object interface.
           *
           * @param {Cipher} cipher The cipher to create a helper for.
           *
           * @return {Object} An object with encrypt and decrypt shortcut functions.
           *
           * @static
           *
           * @example
           *
           *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
           */
          _createHelper: /* @__PURE__ */ function() {
            function me(ye) {
              return typeof ye == "string" ? ve : he;
            }
            return function(ye) {
              return {
                encrypt: function(be, Ce, $e) {
                  return me(Ce).encrypt(ye, be, Ce, $e);
                },
                decrypt: function(be, Ce, $e) {
                  return me(Ce).decrypt(ye, be, Ce, $e);
                }
              };
            };
          }()
        });
        G.StreamCipher = ae.extend({
          _doFinalize: function() {
            var me = this._process(!0);
            return me;
          },
          blockSize: 1
        });
        var oe = K.mode = {}, ie = G.BlockCipherMode = X.extend({
          /**
           * Creates this mode for encryption.
           *
           * @param {Cipher} cipher A block cipher instance.
           * @param {Array} iv The IV words.
           *
           * @static
           *
           * @example
           *
           *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
           */
          createEncryptor: function(me, ye) {
            return this.Encryptor.create(me, ye);
          },
          /**
           * Creates this mode for decryption.
           *
           * @param {Cipher} cipher A block cipher instance.
           * @param {Array} iv The IV words.
           *
           * @static
           *
           * @example
           *
           *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
           */
          createDecryptor: function(me, ye) {
            return this.Decryptor.create(me, ye);
          },
          /**
           * Initializes a newly created mode.
           *
           * @param {Cipher} cipher A block cipher instance.
           * @param {Array} iv The IV words.
           *
           * @example
           *
           *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
           */
          init: function(me, ye) {
            this._cipher = me, this._iv = ye;
          }
        }), se = oe.CBC = function() {
          var me = ie.extend();
          me.Encryptor = me.extend({
            /**
             * Processes the data block at offset.
             *
             * @param {Array} words The data words to operate on.
             * @param {number} offset The offset where the block starts.
             *
             * @example
             *
             *     mode.processBlock(data.words, offset);
             */
            processBlock: function(be, Ce) {
              var $e = this._cipher, xe = $e.blockSize;
              ye.call(this, be, Ce, xe), $e.encryptBlock(be, Ce), this._prevBlock = be.slice(Ce, Ce + xe);
            }
          }), me.Decryptor = me.extend({
            /**
             * Processes the data block at offset.
             *
             * @param {Array} words The data words to operate on.
             * @param {number} offset The offset where the block starts.
             *
             * @example
             *
             *     mode.processBlock(data.words, offset);
             */
            processBlock: function(be, Ce) {
              var $e = this._cipher, xe = $e.blockSize, _e = be.slice(Ce, Ce + xe);
              $e.decryptBlock(be, Ce), ye.call(this, be, Ce, xe), this._prevBlock = _e;
            }
          });
          function ye(be, Ce, $e) {
            var xe, _e = this._iv;
            _e ? (xe = _e, this._iv = W) : xe = this._prevBlock;
            for (var Ae = 0; Ae < $e; Ae++)
              be[Ce + Ae] ^= xe[Ae];
          }
          return me;
        }(), ue = K.pad = {}, le = ue.Pkcs7 = {
          /**
           * Pads data using the algorithm defined in PKCS #5/7.
           *
           * @param {WordArray} data The data to pad.
           * @param {number} blockSize The multiple that the data should be padded to.
           *
           * @static
           *
           * @example
           *
           *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
           */
          pad: function(me, ye) {
            for (var be = ye * 4, Ce = be - me.sigBytes % be, $e = Ce << 24 | Ce << 16 | Ce << 8 | Ce, xe = [], _e = 0; _e < Ce; _e += 4)
              xe.push($e);
            var Ae = Z.create(xe, Ce);
            me.concat(Ae);
          },
          /**
           * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
           *
           * @param {WordArray} data The data to unpad.
           *
           * @static
           *
           * @example
           *
           *     CryptoJS.pad.Pkcs7.unpad(wordArray);
           */
          unpad: function(me) {
            var ye = me.words[me.sigBytes - 1 >>> 2] & 255;
            me.sigBytes -= ye;
          }
        };
        G.BlockCipher = ae.extend({
          /**
           * Configuration options.
           *
           * @property {Mode} mode The block mode to use. Default: CBC
           * @property {Padding} padding The padding strategy to use. Default: Pkcs7
           */
          cfg: ae.cfg.extend({
            mode: se,
            padding: le
          }),
          reset: function() {
            var me;
            ae.reset.call(this);
            var ye = this.cfg, be = ye.iv, Ce = ye.mode;
            this._xformMode == this._ENC_XFORM_MODE ? me = Ce.createEncryptor : (me = Ce.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == me ? this._mode.init(this, be && be.words) : (this._mode = me.call(Ce, this, be && be.words), this._mode.__creator = me);
          },
          _doProcessBlock: function(me, ye) {
            this._mode.processBlock(me, ye);
          },
          _doFinalize: function() {
            var me, ye = this.cfg.padding;
            return this._xformMode == this._ENC_XFORM_MODE ? (ye.pad(this._data, this.blockSize), me = this._process(!0)) : (me = this._process(!0), ye.unpad(me)), me;
          },
          blockSize: 128 / 32
        });
        var ce = G.CipherParams = X.extend({
          /**
           * Initializes a newly created cipher params object.
           *
           * @param {Object} cipherParams An object with any of the possible cipher parameters.
           *
           * @example
           *
           *     var cipherParams = CryptoJS.lib.CipherParams.create({
           *         ciphertext: ciphertextWordArray,
           *         key: keyWordArray,
           *         iv: ivWordArray,
           *         salt: saltWordArray,
           *         algorithm: CryptoJS.algo.AES,
           *         mode: CryptoJS.mode.CBC,
           *         padding: CryptoJS.pad.PKCS7,
           *         blockSize: 4,
           *         formatter: CryptoJS.format.OpenSSL
           *     });
           */
          init: function(me) {
            this.mixIn(me);
          },
          /**
           * Converts this cipher params object to a string.
           *
           * @param {Format} formatter (Optional) The formatting strategy to use.
           *
           * @return {string} The stringified cipher params.
           *
           * @throws Error If neither the formatter nor the default formatter is set.
           *
           * @example
           *
           *     var string = cipherParams + '';
           *     var string = cipherParams.toString();
           *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
           */
          toString: function(me) {
            return (me || this.formatter).stringify(this);
          }
        }), fe = K.format = {}, pe = fe.OpenSSL = {
          /**
           * Converts a cipher params object to an OpenSSL-compatible string.
           *
           * @param {CipherParams} cipherParams The cipher params object.
           *
           * @return {string} The OpenSSL-compatible string.
           *
           * @static
           *
           * @example
           *
           *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
           */
          stringify: function(me) {
            var ye, be = me.ciphertext, Ce = me.salt;
            return Ce ? ye = Z.create([1398893684, 1701076831]).concat(Ce).concat(be) : ye = be, ye.toString(te);
          },
          /**
           * Converts an OpenSSL-compatible string to a cipher params object.
           *
           * @param {string} openSSLStr The OpenSSL-compatible string.
           *
           * @return {CipherParams} The cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
           */
          parse: function(me) {
            var ye, be = te.parse(me), Ce = be.words;
            return Ce[0] == 1398893684 && Ce[1] == 1701076831 && (ye = Z.create(Ce.slice(2, 4)), Ce.splice(0, 4), be.sigBytes -= 16), ce.create({ ciphertext: be, salt: ye });
          }
        }, he = G.SerializableCipher = X.extend({
          /**
           * Configuration options.
           *
           * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
           */
          cfg: X.extend({
            format: pe
          }),
          /**
           * Encrypts a message.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {WordArray|string} message The message to encrypt.
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {CipherParams} A cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
           */
          encrypt: function(me, ye, be, Ce) {
            Ce = this.cfg.extend(Ce);
            var $e = me.createEncryptor(be, Ce), xe = $e.finalize(ye), _e = $e.cfg;
            return ce.create({
              ciphertext: xe,
              key: be,
              iv: _e.iv,
              algorithm: me,
              mode: _e.mode,
              padding: _e.padding,
              blockSize: me.blockSize,
              formatter: Ce.format
            });
          },
          /**
           * Decrypts serialized ciphertext.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {WordArray} The plaintext.
           *
           * @static
           *
           * @example
           *
           *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
           *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
           */
          decrypt: function(me, ye, be, Ce) {
            Ce = this.cfg.extend(Ce), ye = this._parse(ye, Ce.format);
            var $e = me.createDecryptor(be, Ce).finalize(ye.ciphertext);
            return $e;
          },
          /**
           * Converts serialized ciphertext to CipherParams,
           * else assumed CipherParams already and returns ciphertext unchanged.
           *
           * @param {CipherParams|string} ciphertext The ciphertext.
           * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
           *
           * @return {CipherParams} The unserialized ciphertext.
           *
           * @static
           *
           * @example
           *
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
           */
          _parse: function(me, ye) {
            return typeof me == "string" ? ye.parse(me, this) : me;
          }
        }), de = K.kdf = {}, ge = de.OpenSSL = {
          /**
           * Derives a key and IV from a password.
           *
           * @param {string} password The password to derive from.
           * @param {number} keySize The size in words of the key to generate.
           * @param {number} ivSize The size in words of the IV to generate.
           * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
           *
           * @return {CipherParams} A cipher params object with the key, IV, and salt.
           *
           * @static
           *
           * @example
           *
           *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
           *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
           */
          execute: function(me, ye, be, Ce, $e) {
            if (Ce || (Ce = Z.random(64 / 8)), $e)
              var xe = ne.create({ keySize: ye + be, hasher: $e }).compute(me, Ce);
            else
              var xe = ne.create({ keySize: ye + be }).compute(me, Ce);
            var _e = Z.create(xe.words.slice(ye), be * 4);
            return xe.sigBytes = ye * 4, ce.create({ key: xe, iv: _e, salt: Ce });
          }
        }, ve = G.PasswordBasedCipher = he.extend({
          /**
           * Configuration options.
           *
           * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
           */
          cfg: he.cfg.extend({
            kdf: ge
          }),
          /**
           * Encrypts a message using a password.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {WordArray|string} message The message to encrypt.
           * @param {string} password The password.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {CipherParams} A cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
           *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
           */
          encrypt: function(me, ye, be, Ce) {
            Ce = this.cfg.extend(Ce);
            var $e = Ce.kdf.execute(be, me.keySize, me.ivSize, Ce.salt, Ce.hasher);
            Ce.iv = $e.iv;
            var xe = he.encrypt.call(this, me, ye, $e.key, Ce);
            return xe.mixIn($e), xe;
          },
          /**
           * Decrypts serialized ciphertext using a password.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
           * @param {string} password The password.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {WordArray} The plaintext.
           *
           * @static
           *
           * @example
           *
           *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
           *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
           */
          decrypt: function(me, ye, be, Ce) {
            Ce = this.cfg.extend(Ce), ye = this._parse(ye, Ce.format);
            var $e = Ce.kdf.execute(be, me.keySize, me.ivSize, ye.salt, Ce.hasher);
            Ce.iv = $e.iv;
            var xe = he.decrypt.call(this, me, ye, $e.key, Ce);
            return xe;
          }
        });
      }();
    });
  }(cipherCore)), cipherCore.exports;
}
var modeCfb = { exports: {} }, hasRequiredModeCfb;
function requireModeCfb() {
  return hasRequiredModeCfb || (hasRequiredModeCfb = 1, function(C, H) {
    (function(U, W, K) {
      C.exports = W(requireCore(), requireCipherCore());
    })(commonjsGlobal, function(U) {
      return U.mode.CFB = function() {
        var W = U.lib.BlockCipherMode.extend();
        W.Encryptor = W.extend({
          processBlock: function(G, X) {
            var Z = this._cipher, Q = Z.blockSize;
            K.call(this, G, X, Q, Z), this._prevBlock = G.slice(X, X + Q);
          }
        }), W.Decryptor = W.extend({
          processBlock: function(G, X) {
            var Z = this._cipher, Q = Z.blockSize, ee = G.slice(X, X + Q);
            K.call(this, G, X, Q, Z), this._prevBlock = ee;
          }
        });
        function K(G, X, Z, Q) {
          var ee, te = this._iv;
          te ? (ee = te.slice(0), this._iv = void 0) : ee = this._prevBlock, Q.encryptBlock(ee, 0);
          for (var re = 0; re < Z; re++)
            G[X + re] ^= ee[re];
        }
        return W;
      }(), U.mode.CFB;
    });
  }(modeCfb)), modeCfb.exports;
}
var modeCtr = { exports: {} }, hasRequiredModeCtr;
function requireModeCtr() {
  return hasRequiredModeCtr || (hasRequiredModeCtr = 1, function(C, H) {
    (function(U, W, K) {
      C.exports = W(requireCore(), requireCipherCore());
    })(commonjsGlobal, function(U) {
      return U.mode.CTR = function() {
        var W = U.lib.BlockCipherMode.extend(), K = W.Encryptor = W.extend({
          processBlock: function(G, X) {
            var Z = this._cipher, Q = Z.blockSize, ee = this._iv, te = this._counter;
            ee && (te = this._counter = ee.slice(0), this._iv = void 0);
            var re = te.slice(0);
            Z.encryptBlock(re, 0), te[Q - 1] = te[Q - 1] + 1 | 0;
            for (var ne = 0; ne < Q; ne++)
              G[X + ne] ^= re[ne];
          }
        });
        return W.Decryptor = K, W;
      }(), U.mode.CTR;
    });
  }(modeCtr)), modeCtr.exports;
}
var modeCtrGladman = { exports: {} }, hasRequiredModeCtrGladman;
function requireModeCtrGladman() {
  return hasRequiredModeCtrGladman || (hasRequiredModeCtrGladman = 1, function(C, H) {
    (function(U, W, K) {
      C.exports = W(requireCore(), requireCipherCore());
    })(commonjsGlobal, function(U) {
      /** @preserve
       * Counter block mode compatible with  Dr Brian Gladman fileenc.c
       * derived from CryptoJS.mode.CTR
       * Jan Hruby jhruby.web@gmail.com
       */
      return U.mode.CTRGladman = function() {
        var W = U.lib.BlockCipherMode.extend();
        function K(Z) {
          if ((Z >> 24 & 255) === 255) {
            var Q = Z >> 16 & 255, ee = Z >> 8 & 255, te = Z & 255;
            Q === 255 ? (Q = 0, ee === 255 ? (ee = 0, te === 255 ? te = 0 : ++te) : ++ee) : ++Q, Z = 0, Z += Q << 16, Z += ee << 8, Z += te;
          } else
            Z += 1 << 24;
          return Z;
        }
        function G(Z) {
          return (Z[0] = K(Z[0])) === 0 && (Z[1] = K(Z[1])), Z;
        }
        var X = W.Encryptor = W.extend({
          processBlock: function(Z, Q) {
            var ee = this._cipher, te = ee.blockSize, re = this._iv, ne = this._counter;
            re && (ne = this._counter = re.slice(0), this._iv = void 0), G(ne);
            var ae = ne.slice(0);
            ee.encryptBlock(ae, 0);
            for (var oe = 0; oe < te; oe++)
              Z[Q + oe] ^= ae[oe];
          }
        });
        return W.Decryptor = X, W;
      }(), U.mode.CTRGladman;
    });
  }(modeCtrGladman)), modeCtrGladman.exports;
}
var modeOfb = { exports: {} }, hasRequiredModeOfb;
function requireModeOfb() {
  return hasRequiredModeOfb || (hasRequiredModeOfb = 1, function(C, H) {
    (function(U, W, K) {
      C.exports = W(requireCore(), requireCipherCore());
    })(commonjsGlobal, function(U) {
      return U.mode.OFB = function() {
        var W = U.lib.BlockCipherMode.extend(), K = W.Encryptor = W.extend({
          processBlock: function(G, X) {
            var Z = this._cipher, Q = Z.blockSize, ee = this._iv, te = this._keystream;
            ee && (te = this._keystream = ee.slice(0), this._iv = void 0), Z.encryptBlock(te, 0);
            for (var re = 0; re < Q; re++)
              G[X + re] ^= te[re];
          }
        });
        return W.Decryptor = K, W;
      }(), U.mode.OFB;
    });
  }(modeOfb)), modeOfb.exports;
}
var modeEcb = { exports: {} }, hasRequiredModeEcb;
function requireModeEcb() {
  return hasRequiredModeEcb || (hasRequiredModeEcb = 1, function(C, H) {
    (function(U, W, K) {
      C.exports = W(requireCore(), requireCipherCore());
    })(commonjsGlobal, function(U) {
      return U.mode.ECB = function() {
        var W = U.lib.BlockCipherMode.extend();
        return W.Encryptor = W.extend({
          processBlock: function(K, G) {
            this._cipher.encryptBlock(K, G);
          }
        }), W.Decryptor = W.extend({
          processBlock: function(K, G) {
            this._cipher.decryptBlock(K, G);
          }
        }), W;
      }(), U.mode.ECB;
    });
  }(modeEcb)), modeEcb.exports;
}
var padAnsix923 = { exports: {} }, hasRequiredPadAnsix923;
function requirePadAnsix923() {
  return hasRequiredPadAnsix923 || (hasRequiredPadAnsix923 = 1, function(C, H) {
    (function(U, W, K) {
      C.exports = W(requireCore(), requireCipherCore());
    })(commonjsGlobal, function(U) {
      return U.pad.AnsiX923 = {
        pad: function(W, K) {
          var G = W.sigBytes, X = K * 4, Z = X - G % X, Q = G + Z - 1;
          W.clamp(), W.words[Q >>> 2] |= Z << 24 - Q % 4 * 8, W.sigBytes += Z;
        },
        unpad: function(W) {
          var K = W.words[W.sigBytes - 1 >>> 2] & 255;
          W.sigBytes -= K;
        }
      }, U.pad.Ansix923;
    });
  }(padAnsix923)), padAnsix923.exports;
}
var padIso10126 = { exports: {} }, hasRequiredPadIso10126;
function requirePadIso10126() {
  return hasRequiredPadIso10126 || (hasRequiredPadIso10126 = 1, function(C, H) {
    (function(U, W, K) {
      C.exports = W(requireCore(), requireCipherCore());
    })(commonjsGlobal, function(U) {
      return U.pad.Iso10126 = {
        pad: function(W, K) {
          var G = K * 4, X = G - W.sigBytes % G;
          W.concat(U.lib.WordArray.random(X - 1)).concat(U.lib.WordArray.create([X << 24], 1));
        },
        unpad: function(W) {
          var K = W.words[W.sigBytes - 1 >>> 2] & 255;
          W.sigBytes -= K;
        }
      }, U.pad.Iso10126;
    });
  }(padIso10126)), padIso10126.exports;
}
var padIso97971 = { exports: {} }, hasRequiredPadIso97971;
function requirePadIso97971() {
  return hasRequiredPadIso97971 || (hasRequiredPadIso97971 = 1, function(C, H) {
    (function(U, W, K) {
      C.exports = W(requireCore(), requireCipherCore());
    })(commonjsGlobal, function(U) {
      return U.pad.Iso97971 = {
        pad: function(W, K) {
          W.concat(U.lib.WordArray.create([2147483648], 1)), U.pad.ZeroPadding.pad(W, K);
        },
        unpad: function(W) {
          U.pad.ZeroPadding.unpad(W), W.sigBytes--;
        }
      }, U.pad.Iso97971;
    });
  }(padIso97971)), padIso97971.exports;
}
var padZeropadding = { exports: {} }, hasRequiredPadZeropadding;
function requirePadZeropadding() {
  return hasRequiredPadZeropadding || (hasRequiredPadZeropadding = 1, function(C, H) {
    (function(U, W, K) {
      C.exports = W(requireCore(), requireCipherCore());
    })(commonjsGlobal, function(U) {
      return U.pad.ZeroPadding = {
        pad: function(W, K) {
          var G = K * 4;
          W.clamp(), W.sigBytes += G - (W.sigBytes % G || G);
        },
        unpad: function(W) {
          for (var K = W.words, G = W.sigBytes - 1, G = W.sigBytes - 1; G >= 0; G--)
            if (K[G >>> 2] >>> 24 - G % 4 * 8 & 255) {
              W.sigBytes = G + 1;
              break;
            }
        }
      }, U.pad.ZeroPadding;
    });
  }(padZeropadding)), padZeropadding.exports;
}
var padNopadding = { exports: {} }, hasRequiredPadNopadding;
function requirePadNopadding() {
  return hasRequiredPadNopadding || (hasRequiredPadNopadding = 1, function(C, H) {
    (function(U, W, K) {
      C.exports = W(requireCore(), requireCipherCore());
    })(commonjsGlobal, function(U) {
      return U.pad.NoPadding = {
        pad: function() {
        },
        unpad: function() {
        }
      }, U.pad.NoPadding;
    });
  }(padNopadding)), padNopadding.exports;
}
var formatHex = { exports: {} }, hasRequiredFormatHex;
function requireFormatHex() {
  return hasRequiredFormatHex || (hasRequiredFormatHex = 1, function(C, H) {
    (function(U, W, K) {
      C.exports = W(requireCore(), requireCipherCore());
    })(commonjsGlobal, function(U) {
      return function(W) {
        var K = U, G = K.lib, X = G.CipherParams, Z = K.enc, Q = Z.Hex, ee = K.format;
        ee.Hex = {
          /**
           * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
           *
           * @param {CipherParams} cipherParams The cipher params object.
           *
           * @return {string} The hexadecimally encoded string.
           *
           * @static
           *
           * @example
           *
           *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
           */
          stringify: function(te) {
            return te.ciphertext.toString(Q);
          },
          /**
           * Converts a hexadecimally encoded ciphertext string to a cipher params object.
           *
           * @param {string} input The hexadecimally encoded string.
           *
           * @return {CipherParams} The cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
           */
          parse: function(te) {
            var re = Q.parse(te);
            return X.create({ ciphertext: re });
          }
        };
      }(), U.format.Hex;
    });
  }(formatHex)), formatHex.exports;
}
var aes = { exports: {} }, hasRequiredAes;
function requireAes() {
  return hasRequiredAes || (hasRequiredAes = 1, function(C, H) {
    (function(U, W, K) {
      C.exports = W(requireCore(), requireEncBase64(), requireMd5(), requireEvpkdf(), requireCipherCore());
    })(commonjsGlobal, function(U) {
      return function() {
        var W = U, K = W.lib, G = K.BlockCipher, X = W.algo, Z = [], Q = [], ee = [], te = [], re = [], ne = [], ae = [], oe = [], ie = [], se = [];
        (function() {
          for (var ce = [], fe = 0; fe < 256; fe++)
            fe < 128 ? ce[fe] = fe << 1 : ce[fe] = fe << 1 ^ 283;
          for (var pe = 0, he = 0, fe = 0; fe < 256; fe++) {
            var de = he ^ he << 1 ^ he << 2 ^ he << 3 ^ he << 4;
            de = de >>> 8 ^ de & 255 ^ 99, Z[pe] = de, Q[de] = pe;
            var ge = ce[pe], ve = ce[ge], me = ce[ve], ye = ce[de] * 257 ^ de * 16843008;
            ee[pe] = ye << 24 | ye >>> 8, te[pe] = ye << 16 | ye >>> 16, re[pe] = ye << 8 | ye >>> 24, ne[pe] = ye;
            var ye = me * 16843009 ^ ve * 65537 ^ ge * 257 ^ pe * 16843008;
            ae[de] = ye << 24 | ye >>> 8, oe[de] = ye << 16 | ye >>> 16, ie[de] = ye << 8 | ye >>> 24, se[de] = ye, pe ? (pe = ge ^ ce[ce[ce[me ^ ge]]], he ^= ce[ce[he]]) : pe = he = 1;
          }
        })();
        var ue = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], le = X.AES = G.extend({
          _doReset: function() {
            var ce;
            if (!(this._nRounds && this._keyPriorReset === this._key)) {
              for (var fe = this._keyPriorReset = this._key, pe = fe.words, he = fe.sigBytes / 4, de = this._nRounds = he + 6, ge = (de + 1) * 4, ve = this._keySchedule = [], me = 0; me < ge; me++)
                me < he ? ve[me] = pe[me] : (ce = ve[me - 1], me % he ? he > 6 && me % he == 4 && (ce = Z[ce >>> 24] << 24 | Z[ce >>> 16 & 255] << 16 | Z[ce >>> 8 & 255] << 8 | Z[ce & 255]) : (ce = ce << 8 | ce >>> 24, ce = Z[ce >>> 24] << 24 | Z[ce >>> 16 & 255] << 16 | Z[ce >>> 8 & 255] << 8 | Z[ce & 255], ce ^= ue[me / he | 0] << 24), ve[me] = ve[me - he] ^ ce);
              for (var ye = this._invKeySchedule = [], be = 0; be < ge; be++) {
                var me = ge - be;
                if (be % 4)
                  var ce = ve[me];
                else
                  var ce = ve[me - 4];
                be < 4 || me <= 4 ? ye[be] = ce : ye[be] = ae[Z[ce >>> 24]] ^ oe[Z[ce >>> 16 & 255]] ^ ie[Z[ce >>> 8 & 255]] ^ se[Z[ce & 255]];
              }
            }
          },
          encryptBlock: function(ce, fe) {
            this._doCryptBlock(ce, fe, this._keySchedule, ee, te, re, ne, Z);
          },
          decryptBlock: function(ce, fe) {
            var pe = ce[fe + 1];
            ce[fe + 1] = ce[fe + 3], ce[fe + 3] = pe, this._doCryptBlock(ce, fe, this._invKeySchedule, ae, oe, ie, se, Q);
            var pe = ce[fe + 1];
            ce[fe + 1] = ce[fe + 3], ce[fe + 3] = pe;
          },
          _doCryptBlock: function(ce, fe, pe, he, de, ge, ve, me) {
            for (var ye = this._nRounds, be = ce[fe] ^ pe[0], Ce = ce[fe + 1] ^ pe[1], $e = ce[fe + 2] ^ pe[2], xe = ce[fe + 3] ^ pe[3], _e = 4, Ae = 1; Ae < ye; Ae++) {
              var De = he[be >>> 24] ^ de[Ce >>> 16 & 255] ^ ge[$e >>> 8 & 255] ^ ve[xe & 255] ^ pe[_e++], Be = he[Ce >>> 24] ^ de[$e >>> 16 & 255] ^ ge[xe >>> 8 & 255] ^ ve[be & 255] ^ pe[_e++], Oe = he[$e >>> 24] ^ de[xe >>> 16 & 255] ^ ge[be >>> 8 & 255] ^ ve[Ce & 255] ^ pe[_e++], Se = he[xe >>> 24] ^ de[be >>> 16 & 255] ^ ge[Ce >>> 8 & 255] ^ ve[$e & 255] ^ pe[_e++];
              be = De, Ce = Be, $e = Oe, xe = Se;
            }
            var De = (me[be >>> 24] << 24 | me[Ce >>> 16 & 255] << 16 | me[$e >>> 8 & 255] << 8 | me[xe & 255]) ^ pe[_e++], Be = (me[Ce >>> 24] << 24 | me[$e >>> 16 & 255] << 16 | me[xe >>> 8 & 255] << 8 | me[be & 255]) ^ pe[_e++], Oe = (me[$e >>> 24] << 24 | me[xe >>> 16 & 255] << 16 | me[be >>> 8 & 255] << 8 | me[Ce & 255]) ^ pe[_e++], Se = (me[xe >>> 24] << 24 | me[be >>> 16 & 255] << 16 | me[Ce >>> 8 & 255] << 8 | me[$e & 255]) ^ pe[_e++];
            ce[fe] = De, ce[fe + 1] = Be, ce[fe + 2] = Oe, ce[fe + 3] = Se;
          },
          keySize: 256 / 32
        });
        W.AES = G._createHelper(le);
      }(), U.AES;
    });
  }(aes)), aes.exports;
}
var tripledes = { exports: {} }, hasRequiredTripledes;
function requireTripledes() {
  return hasRequiredTripledes || (hasRequiredTripledes = 1, function(C, H) {
    (function(U, W, K) {
      C.exports = W(requireCore(), requireEncBase64(), requireMd5(), requireEvpkdf(), requireCipherCore());
    })(commonjsGlobal, function(U) {
      return function() {
        var W = U, K = W.lib, G = K.WordArray, X = K.BlockCipher, Z = W.algo, Q = [
          57,
          49,
          41,
          33,
          25,
          17,
          9,
          1,
          58,
          50,
          42,
          34,
          26,
          18,
          10,
          2,
          59,
          51,
          43,
          35,
          27,
          19,
          11,
          3,
          60,
          52,
          44,
          36,
          63,
          55,
          47,
          39,
          31,
          23,
          15,
          7,
          62,
          54,
          46,
          38,
          30,
          22,
          14,
          6,
          61,
          53,
          45,
          37,
          29,
          21,
          13,
          5,
          28,
          20,
          12,
          4
        ], ee = [
          14,
          17,
          11,
          24,
          1,
          5,
          3,
          28,
          15,
          6,
          21,
          10,
          23,
          19,
          12,
          4,
          26,
          8,
          16,
          7,
          27,
          20,
          13,
          2,
          41,
          52,
          31,
          37,
          47,
          55,
          30,
          40,
          51,
          45,
          33,
          48,
          44,
          49,
          39,
          56,
          34,
          53,
          46,
          42,
          50,
          36,
          29,
          32
        ], te = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28], re = [
          {
            0: 8421888,
            268435456: 32768,
            536870912: 8421378,
            805306368: 2,
            1073741824: 512,
            1342177280: 8421890,
            1610612736: 8389122,
            1879048192: 8388608,
            2147483648: 514,
            2415919104: 8389120,
            2684354560: 33280,
            2952790016: 8421376,
            3221225472: 32770,
            3489660928: 8388610,
            3758096384: 0,
            4026531840: 33282,
            134217728: 0,
            402653184: 8421890,
            671088640: 33282,
            939524096: 32768,
            1207959552: 8421888,
            1476395008: 512,
            1744830464: 8421378,
            2013265920: 2,
            2281701376: 8389120,
            2550136832: 33280,
            2818572288: 8421376,
            3087007744: 8389122,
            3355443200: 8388610,
            3623878656: 32770,
            3892314112: 514,
            4160749568: 8388608,
            1: 32768,
            268435457: 2,
            536870913: 8421888,
            805306369: 8388608,
            1073741825: 8421378,
            1342177281: 33280,
            1610612737: 512,
            1879048193: 8389122,
            2147483649: 8421890,
            2415919105: 8421376,
            2684354561: 8388610,
            2952790017: 33282,
            3221225473: 514,
            3489660929: 8389120,
            3758096385: 32770,
            4026531841: 0,
            134217729: 8421890,
            402653185: 8421376,
            671088641: 8388608,
            939524097: 512,
            1207959553: 32768,
            1476395009: 8388610,
            1744830465: 2,
            2013265921: 33282,
            2281701377: 32770,
            2550136833: 8389122,
            2818572289: 514,
            3087007745: 8421888,
            3355443201: 8389120,
            3623878657: 0,
            3892314113: 33280,
            4160749569: 8421378
          },
          {
            0: 1074282512,
            16777216: 16384,
            33554432: 524288,
            50331648: 1074266128,
            67108864: 1073741840,
            83886080: 1074282496,
            100663296: 1073758208,
            117440512: 16,
            134217728: 540672,
            150994944: 1073758224,
            167772160: 1073741824,
            184549376: 540688,
            201326592: 524304,
            218103808: 0,
            234881024: 16400,
            251658240: 1074266112,
            8388608: 1073758208,
            25165824: 540688,
            41943040: 16,
            58720256: 1073758224,
            75497472: 1074282512,
            92274688: 1073741824,
            109051904: 524288,
            125829120: 1074266128,
            142606336: 524304,
            159383552: 0,
            176160768: 16384,
            192937984: 1074266112,
            209715200: 1073741840,
            226492416: 540672,
            243269632: 1074282496,
            260046848: 16400,
            268435456: 0,
            285212672: 1074266128,
            301989888: 1073758224,
            318767104: 1074282496,
            335544320: 1074266112,
            352321536: 16,
            369098752: 540688,
            385875968: 16384,
            402653184: 16400,
            419430400: 524288,
            436207616: 524304,
            452984832: 1073741840,
            469762048: 540672,
            486539264: 1073758208,
            503316480: 1073741824,
            520093696: 1074282512,
            276824064: 540688,
            293601280: 524288,
            310378496: 1074266112,
            327155712: 16384,
            343932928: 1073758208,
            360710144: 1074282512,
            377487360: 16,
            394264576: 1073741824,
            411041792: 1074282496,
            427819008: 1073741840,
            444596224: 1073758224,
            461373440: 524304,
            478150656: 0,
            494927872: 16400,
            511705088: 1074266128,
            528482304: 540672
          },
          {
            0: 260,
            1048576: 0,
            2097152: 67109120,
            3145728: 65796,
            4194304: 65540,
            5242880: 67108868,
            6291456: 67174660,
            7340032: 67174400,
            8388608: 67108864,
            9437184: 67174656,
            10485760: 65792,
            11534336: 67174404,
            12582912: 67109124,
            13631488: 65536,
            14680064: 4,
            15728640: 256,
            524288: 67174656,
            1572864: 67174404,
            2621440: 0,
            3670016: 67109120,
            4718592: 67108868,
            5767168: 65536,
            6815744: 65540,
            7864320: 260,
            8912896: 4,
            9961472: 256,
            11010048: 67174400,
            12058624: 65796,
            13107200: 65792,
            14155776: 67109124,
            15204352: 67174660,
            16252928: 67108864,
            16777216: 67174656,
            17825792: 65540,
            18874368: 65536,
            19922944: 67109120,
            20971520: 256,
            22020096: 67174660,
            23068672: 67108868,
            24117248: 0,
            25165824: 67109124,
            26214400: 67108864,
            27262976: 4,
            28311552: 65792,
            29360128: 67174400,
            30408704: 260,
            31457280: 65796,
            32505856: 67174404,
            17301504: 67108864,
            18350080: 260,
            19398656: 67174656,
            20447232: 0,
            21495808: 65540,
            22544384: 67109120,
            23592960: 256,
            24641536: 67174404,
            25690112: 65536,
            26738688: 67174660,
            27787264: 65796,
            28835840: 67108868,
            29884416: 67109124,
            30932992: 67174400,
            31981568: 4,
            33030144: 65792
          },
          {
            0: 2151682048,
            65536: 2147487808,
            131072: 4198464,
            196608: 2151677952,
            262144: 0,
            327680: 4198400,
            393216: 2147483712,
            458752: 4194368,
            524288: 2147483648,
            589824: 4194304,
            655360: 64,
            720896: 2147487744,
            786432: 2151678016,
            851968: 4160,
            917504: 4096,
            983040: 2151682112,
            32768: 2147487808,
            98304: 64,
            163840: 2151678016,
            229376: 2147487744,
            294912: 4198400,
            360448: 2151682112,
            425984: 0,
            491520: 2151677952,
            557056: 4096,
            622592: 2151682048,
            688128: 4194304,
            753664: 4160,
            819200: 2147483648,
            884736: 4194368,
            950272: 4198464,
            1015808: 2147483712,
            1048576: 4194368,
            1114112: 4198400,
            1179648: 2147483712,
            1245184: 0,
            1310720: 4160,
            1376256: 2151678016,
            1441792: 2151682048,
            1507328: 2147487808,
            1572864: 2151682112,
            1638400: 2147483648,
            1703936: 2151677952,
            1769472: 4198464,
            1835008: 2147487744,
            1900544: 4194304,
            1966080: 64,
            2031616: 4096,
            1081344: 2151677952,
            1146880: 2151682112,
            1212416: 0,
            1277952: 4198400,
            1343488: 4194368,
            1409024: 2147483648,
            1474560: 2147487808,
            1540096: 64,
            1605632: 2147483712,
            1671168: 4096,
            1736704: 2147487744,
            1802240: 2151678016,
            1867776: 4160,
            1933312: 2151682048,
            1998848: 4194304,
            2064384: 4198464
          },
          {
            0: 128,
            4096: 17039360,
            8192: 262144,
            12288: 536870912,
            16384: 537133184,
            20480: 16777344,
            24576: 553648256,
            28672: 262272,
            32768: 16777216,
            36864: 537133056,
            40960: 536871040,
            45056: 553910400,
            49152: 553910272,
            53248: 0,
            57344: 17039488,
            61440: 553648128,
            2048: 17039488,
            6144: 553648256,
            10240: 128,
            14336: 17039360,
            18432: 262144,
            22528: 537133184,
            26624: 553910272,
            30720: 536870912,
            34816: 537133056,
            38912: 0,
            43008: 553910400,
            47104: 16777344,
            51200: 536871040,
            55296: 553648128,
            59392: 16777216,
            63488: 262272,
            65536: 262144,
            69632: 128,
            73728: 536870912,
            77824: 553648256,
            81920: 16777344,
            86016: 553910272,
            90112: 537133184,
            94208: 16777216,
            98304: 553910400,
            102400: 553648128,
            106496: 17039360,
            110592: 537133056,
            114688: 262272,
            118784: 536871040,
            122880: 0,
            126976: 17039488,
            67584: 553648256,
            71680: 16777216,
            75776: 17039360,
            79872: 537133184,
            83968: 536870912,
            88064: 17039488,
            92160: 128,
            96256: 553910272,
            100352: 262272,
            104448: 553910400,
            108544: 0,
            112640: 553648128,
            116736: 16777344,
            120832: 262144,
            124928: 537133056,
            129024: 536871040
          },
          {
            0: 268435464,
            256: 8192,
            512: 270532608,
            768: 270540808,
            1024: 268443648,
            1280: 2097152,
            1536: 2097160,
            1792: 268435456,
            2048: 0,
            2304: 268443656,
            2560: 2105344,
            2816: 8,
            3072: 270532616,
            3328: 2105352,
            3584: 8200,
            3840: 270540800,
            128: 270532608,
            384: 270540808,
            640: 8,
            896: 2097152,
            1152: 2105352,
            1408: 268435464,
            1664: 268443648,
            1920: 8200,
            2176: 2097160,
            2432: 8192,
            2688: 268443656,
            2944: 270532616,
            3200: 0,
            3456: 270540800,
            3712: 2105344,
            3968: 268435456,
            4096: 268443648,
            4352: 270532616,
            4608: 270540808,
            4864: 8200,
            5120: 2097152,
            5376: 268435456,
            5632: 268435464,
            5888: 2105344,
            6144: 2105352,
            6400: 0,
            6656: 8,
            6912: 270532608,
            7168: 8192,
            7424: 268443656,
            7680: 270540800,
            7936: 2097160,
            4224: 8,
            4480: 2105344,
            4736: 2097152,
            4992: 268435464,
            5248: 268443648,
            5504: 8200,
            5760: 270540808,
            6016: 270532608,
            6272: 270540800,
            6528: 270532616,
            6784: 8192,
            7040: 2105352,
            7296: 2097160,
            7552: 0,
            7808: 268435456,
            8064: 268443656
          },
          {
            0: 1048576,
            16: 33555457,
            32: 1024,
            48: 1049601,
            64: 34604033,
            80: 0,
            96: 1,
            112: 34603009,
            128: 33555456,
            144: 1048577,
            160: 33554433,
            176: 34604032,
            192: 34603008,
            208: 1025,
            224: 1049600,
            240: 33554432,
            8: 34603009,
            24: 0,
            40: 33555457,
            56: 34604032,
            72: 1048576,
            88: 33554433,
            104: 33554432,
            120: 1025,
            136: 1049601,
            152: 33555456,
            168: 34603008,
            184: 1048577,
            200: 1024,
            216: 34604033,
            232: 1,
            248: 1049600,
            256: 33554432,
            272: 1048576,
            288: 33555457,
            304: 34603009,
            320: 1048577,
            336: 33555456,
            352: 34604032,
            368: 1049601,
            384: 1025,
            400: 34604033,
            416: 1049600,
            432: 1,
            448: 0,
            464: 34603008,
            480: 33554433,
            496: 1024,
            264: 1049600,
            280: 33555457,
            296: 34603009,
            312: 1,
            328: 33554432,
            344: 1048576,
            360: 1025,
            376: 34604032,
            392: 33554433,
            408: 34603008,
            424: 0,
            440: 34604033,
            456: 1049601,
            472: 1024,
            488: 33555456,
            504: 1048577
          },
          {
            0: 134219808,
            1: 131072,
            2: 134217728,
            3: 32,
            4: 131104,
            5: 134350880,
            6: 134350848,
            7: 2048,
            8: 134348800,
            9: 134219776,
            10: 133120,
            11: 134348832,
            12: 2080,
            13: 0,
            14: 134217760,
            15: 133152,
            2147483648: 2048,
            2147483649: 134350880,
            2147483650: 134219808,
            2147483651: 134217728,
            2147483652: 134348800,
            2147483653: 133120,
            2147483654: 133152,
            2147483655: 32,
            2147483656: 134217760,
            2147483657: 2080,
            2147483658: 131104,
            2147483659: 134350848,
            2147483660: 0,
            2147483661: 134348832,
            2147483662: 134219776,
            2147483663: 131072,
            16: 133152,
            17: 134350848,
            18: 32,
            19: 2048,
            20: 134219776,
            21: 134217760,
            22: 134348832,
            23: 131072,
            24: 0,
            25: 131104,
            26: 134348800,
            27: 134219808,
            28: 134350880,
            29: 133120,
            30: 2080,
            31: 134217728,
            2147483664: 131072,
            2147483665: 2048,
            2147483666: 134348832,
            2147483667: 133152,
            2147483668: 32,
            2147483669: 134348800,
            2147483670: 134217728,
            2147483671: 134219808,
            2147483672: 134350880,
            2147483673: 134217760,
            2147483674: 134219776,
            2147483675: 0,
            2147483676: 133120,
            2147483677: 2080,
            2147483678: 131104,
            2147483679: 134350848
          }
        ], ne = [
          4160749569,
          528482304,
          33030144,
          2064384,
          129024,
          8064,
          504,
          2147483679
        ], ae = Z.DES = X.extend({
          _doReset: function() {
            for (var ue = this._key, le = ue.words, ce = [], fe = 0; fe < 56; fe++) {
              var pe = Q[fe] - 1;
              ce[fe] = le[pe >>> 5] >>> 31 - pe % 32 & 1;
            }
            for (var he = this._subKeys = [], de = 0; de < 16; de++) {
              for (var ge = he[de] = [], ve = te[de], fe = 0; fe < 24; fe++)
                ge[fe / 6 | 0] |= ce[(ee[fe] - 1 + ve) % 28] << 31 - fe % 6, ge[4 + (fe / 6 | 0)] |= ce[28 + (ee[fe + 24] - 1 + ve) % 28] << 31 - fe % 6;
              ge[0] = ge[0] << 1 | ge[0] >>> 31;
              for (var fe = 1; fe < 7; fe++)
                ge[fe] = ge[fe] >>> (fe - 1) * 4 + 3;
              ge[7] = ge[7] << 5 | ge[7] >>> 27;
            }
            for (var me = this._invSubKeys = [], fe = 0; fe < 16; fe++)
              me[fe] = he[15 - fe];
          },
          encryptBlock: function(ue, le) {
            this._doCryptBlock(ue, le, this._subKeys);
          },
          decryptBlock: function(ue, le) {
            this._doCryptBlock(ue, le, this._invSubKeys);
          },
          _doCryptBlock: function(ue, le, ce) {
            this._lBlock = ue[le], this._rBlock = ue[le + 1], oe.call(this, 4, 252645135), oe.call(this, 16, 65535), ie.call(this, 2, 858993459), ie.call(this, 8, 16711935), oe.call(this, 1, 1431655765);
            for (var fe = 0; fe < 16; fe++) {
              for (var pe = ce[fe], he = this._lBlock, de = this._rBlock, ge = 0, ve = 0; ve < 8; ve++)
                ge |= re[ve][((de ^ pe[ve]) & ne[ve]) >>> 0];
              this._lBlock = de, this._rBlock = he ^ ge;
            }
            var me = this._lBlock;
            this._lBlock = this._rBlock, this._rBlock = me, oe.call(this, 1, 1431655765), ie.call(this, 8, 16711935), ie.call(this, 2, 858993459), oe.call(this, 16, 65535), oe.call(this, 4, 252645135), ue[le] = this._lBlock, ue[le + 1] = this._rBlock;
          },
          keySize: 64 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        function oe(ue, le) {
          var ce = (this._lBlock >>> ue ^ this._rBlock) & le;
          this._rBlock ^= ce, this._lBlock ^= ce << ue;
        }
        function ie(ue, le) {
          var ce = (this._rBlock >>> ue ^ this._lBlock) & le;
          this._lBlock ^= ce, this._rBlock ^= ce << ue;
        }
        W.DES = X._createHelper(ae);
        var se = Z.TripleDES = X.extend({
          _doReset: function() {
            var ue = this._key, le = ue.words;
            if (le.length !== 2 && le.length !== 4 && le.length < 6)
              throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
            var ce = le.slice(0, 2), fe = le.length < 4 ? le.slice(0, 2) : le.slice(2, 4), pe = le.length < 6 ? le.slice(0, 2) : le.slice(4, 6);
            this._des1 = ae.createEncryptor(G.create(ce)), this._des2 = ae.createEncryptor(G.create(fe)), this._des3 = ae.createEncryptor(G.create(pe));
          },
          encryptBlock: function(ue, le) {
            this._des1.encryptBlock(ue, le), this._des2.decryptBlock(ue, le), this._des3.encryptBlock(ue, le);
          },
          decryptBlock: function(ue, le) {
            this._des3.decryptBlock(ue, le), this._des2.encryptBlock(ue, le), this._des1.decryptBlock(ue, le);
          },
          keySize: 192 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        W.TripleDES = X._createHelper(se);
      }(), U.TripleDES;
    });
  }(tripledes)), tripledes.exports;
}
var rc4 = { exports: {} }, hasRequiredRc4;
function requireRc4() {
  return hasRequiredRc4 || (hasRequiredRc4 = 1, function(C, H) {
    (function(U, W, K) {
      C.exports = W(requireCore(), requireEncBase64(), requireMd5(), requireEvpkdf(), requireCipherCore());
    })(commonjsGlobal, function(U) {
      return function() {
        var W = U, K = W.lib, G = K.StreamCipher, X = W.algo, Z = X.RC4 = G.extend({
          _doReset: function() {
            for (var te = this._key, re = te.words, ne = te.sigBytes, ae = this._S = [], oe = 0; oe < 256; oe++)
              ae[oe] = oe;
            for (var oe = 0, ie = 0; oe < 256; oe++) {
              var se = oe % ne, ue = re[se >>> 2] >>> 24 - se % 4 * 8 & 255;
              ie = (ie + ae[oe] + ue) % 256;
              var le = ae[oe];
              ae[oe] = ae[ie], ae[ie] = le;
            }
            this._i = this._j = 0;
          },
          _doProcessBlock: function(te, re) {
            te[re] ^= Q.call(this);
          },
          keySize: 256 / 32,
          ivSize: 0
        });
        function Q() {
          for (var te = this._S, re = this._i, ne = this._j, ae = 0, oe = 0; oe < 4; oe++) {
            re = (re + 1) % 256, ne = (ne + te[re]) % 256;
            var ie = te[re];
            te[re] = te[ne], te[ne] = ie, ae |= te[(te[re] + te[ne]) % 256] << 24 - oe * 8;
          }
          return this._i = re, this._j = ne, ae;
        }
        W.RC4 = G._createHelper(Z);
        var ee = X.RC4Drop = Z.extend({
          /**
           * Configuration options.
           *
           * @property {number} drop The number of keystream words to drop. Default 192
           */
          cfg: Z.cfg.extend({
            drop: 192
          }),
          _doReset: function() {
            Z._doReset.call(this);
            for (var te = this.cfg.drop; te > 0; te--)
              Q.call(this);
          }
        });
        W.RC4Drop = G._createHelper(ee);
      }(), U.RC4;
    });
  }(rc4)), rc4.exports;
}
var rabbit = { exports: {} }, hasRequiredRabbit;
function requireRabbit() {
  return hasRequiredRabbit || (hasRequiredRabbit = 1, function(C, H) {
    (function(U, W, K) {
      C.exports = W(requireCore(), requireEncBase64(), requireMd5(), requireEvpkdf(), requireCipherCore());
    })(commonjsGlobal, function(U) {
      return function() {
        var W = U, K = W.lib, G = K.StreamCipher, X = W.algo, Z = [], Q = [], ee = [], te = X.Rabbit = G.extend({
          _doReset: function() {
            for (var ne = this._key.words, ae = this.cfg.iv, oe = 0; oe < 4; oe++)
              ne[oe] = (ne[oe] << 8 | ne[oe] >>> 24) & 16711935 | (ne[oe] << 24 | ne[oe] >>> 8) & 4278255360;
            var ie = this._X = [
              ne[0],
              ne[3] << 16 | ne[2] >>> 16,
              ne[1],
              ne[0] << 16 | ne[3] >>> 16,
              ne[2],
              ne[1] << 16 | ne[0] >>> 16,
              ne[3],
              ne[2] << 16 | ne[1] >>> 16
            ], se = this._C = [
              ne[2] << 16 | ne[2] >>> 16,
              ne[0] & 4294901760 | ne[1] & 65535,
              ne[3] << 16 | ne[3] >>> 16,
              ne[1] & 4294901760 | ne[2] & 65535,
              ne[0] << 16 | ne[0] >>> 16,
              ne[2] & 4294901760 | ne[3] & 65535,
              ne[1] << 16 | ne[1] >>> 16,
              ne[3] & 4294901760 | ne[0] & 65535
            ];
            this._b = 0;
            for (var oe = 0; oe < 4; oe++)
              re.call(this);
            for (var oe = 0; oe < 8; oe++)
              se[oe] ^= ie[oe + 4 & 7];
            if (ae) {
              var ue = ae.words, le = ue[0], ce = ue[1], fe = (le << 8 | le >>> 24) & 16711935 | (le << 24 | le >>> 8) & 4278255360, pe = (ce << 8 | ce >>> 24) & 16711935 | (ce << 24 | ce >>> 8) & 4278255360, he = fe >>> 16 | pe & 4294901760, de = pe << 16 | fe & 65535;
              se[0] ^= fe, se[1] ^= he, se[2] ^= pe, se[3] ^= de, se[4] ^= fe, se[5] ^= he, se[6] ^= pe, se[7] ^= de;
              for (var oe = 0; oe < 4; oe++)
                re.call(this);
            }
          },
          _doProcessBlock: function(ne, ae) {
            var oe = this._X;
            re.call(this), Z[0] = oe[0] ^ oe[5] >>> 16 ^ oe[3] << 16, Z[1] = oe[2] ^ oe[7] >>> 16 ^ oe[5] << 16, Z[2] = oe[4] ^ oe[1] >>> 16 ^ oe[7] << 16, Z[3] = oe[6] ^ oe[3] >>> 16 ^ oe[1] << 16;
            for (var ie = 0; ie < 4; ie++)
              Z[ie] = (Z[ie] << 8 | Z[ie] >>> 24) & 16711935 | (Z[ie] << 24 | Z[ie] >>> 8) & 4278255360, ne[ae + ie] ^= Z[ie];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function re() {
          for (var ne = this._X, ae = this._C, oe = 0; oe < 8; oe++)
            Q[oe] = ae[oe];
          ae[0] = ae[0] + 1295307597 + this._b | 0, ae[1] = ae[1] + 3545052371 + (ae[0] >>> 0 < Q[0] >>> 0 ? 1 : 0) | 0, ae[2] = ae[2] + 886263092 + (ae[1] >>> 0 < Q[1] >>> 0 ? 1 : 0) | 0, ae[3] = ae[3] + 1295307597 + (ae[2] >>> 0 < Q[2] >>> 0 ? 1 : 0) | 0, ae[4] = ae[4] + 3545052371 + (ae[3] >>> 0 < Q[3] >>> 0 ? 1 : 0) | 0, ae[5] = ae[5] + 886263092 + (ae[4] >>> 0 < Q[4] >>> 0 ? 1 : 0) | 0, ae[6] = ae[6] + 1295307597 + (ae[5] >>> 0 < Q[5] >>> 0 ? 1 : 0) | 0, ae[7] = ae[7] + 3545052371 + (ae[6] >>> 0 < Q[6] >>> 0 ? 1 : 0) | 0, this._b = ae[7] >>> 0 < Q[7] >>> 0 ? 1 : 0;
          for (var oe = 0; oe < 8; oe++) {
            var ie = ne[oe] + ae[oe], se = ie & 65535, ue = ie >>> 16, le = ((se * se >>> 17) + se * ue >>> 15) + ue * ue, ce = ((ie & 4294901760) * ie | 0) + ((ie & 65535) * ie | 0);
            ee[oe] = le ^ ce;
          }
          ne[0] = ee[0] + (ee[7] << 16 | ee[7] >>> 16) + (ee[6] << 16 | ee[6] >>> 16) | 0, ne[1] = ee[1] + (ee[0] << 8 | ee[0] >>> 24) + ee[7] | 0, ne[2] = ee[2] + (ee[1] << 16 | ee[1] >>> 16) + (ee[0] << 16 | ee[0] >>> 16) | 0, ne[3] = ee[3] + (ee[2] << 8 | ee[2] >>> 24) + ee[1] | 0, ne[4] = ee[4] + (ee[3] << 16 | ee[3] >>> 16) + (ee[2] << 16 | ee[2] >>> 16) | 0, ne[5] = ee[5] + (ee[4] << 8 | ee[4] >>> 24) + ee[3] | 0, ne[6] = ee[6] + (ee[5] << 16 | ee[5] >>> 16) + (ee[4] << 16 | ee[4] >>> 16) | 0, ne[7] = ee[7] + (ee[6] << 8 | ee[6] >>> 24) + ee[5] | 0;
        }
        W.Rabbit = G._createHelper(te);
      }(), U.Rabbit;
    });
  }(rabbit)), rabbit.exports;
}
var rabbitLegacy = { exports: {} }, hasRequiredRabbitLegacy;
function requireRabbitLegacy() {
  return hasRequiredRabbitLegacy || (hasRequiredRabbitLegacy = 1, function(C, H) {
    (function(U, W, K) {
      C.exports = W(requireCore(), requireEncBase64(), requireMd5(), requireEvpkdf(), requireCipherCore());
    })(commonjsGlobal, function(U) {
      return function() {
        var W = U, K = W.lib, G = K.StreamCipher, X = W.algo, Z = [], Q = [], ee = [], te = X.RabbitLegacy = G.extend({
          _doReset: function() {
            var ne = this._key.words, ae = this.cfg.iv, oe = this._X = [
              ne[0],
              ne[3] << 16 | ne[2] >>> 16,
              ne[1],
              ne[0] << 16 | ne[3] >>> 16,
              ne[2],
              ne[1] << 16 | ne[0] >>> 16,
              ne[3],
              ne[2] << 16 | ne[1] >>> 16
            ], ie = this._C = [
              ne[2] << 16 | ne[2] >>> 16,
              ne[0] & 4294901760 | ne[1] & 65535,
              ne[3] << 16 | ne[3] >>> 16,
              ne[1] & 4294901760 | ne[2] & 65535,
              ne[0] << 16 | ne[0] >>> 16,
              ne[2] & 4294901760 | ne[3] & 65535,
              ne[1] << 16 | ne[1] >>> 16,
              ne[3] & 4294901760 | ne[0] & 65535
            ];
            this._b = 0;
            for (var se = 0; se < 4; se++)
              re.call(this);
            for (var se = 0; se < 8; se++)
              ie[se] ^= oe[se + 4 & 7];
            if (ae) {
              var ue = ae.words, le = ue[0], ce = ue[1], fe = (le << 8 | le >>> 24) & 16711935 | (le << 24 | le >>> 8) & 4278255360, pe = (ce << 8 | ce >>> 24) & 16711935 | (ce << 24 | ce >>> 8) & 4278255360, he = fe >>> 16 | pe & 4294901760, de = pe << 16 | fe & 65535;
              ie[0] ^= fe, ie[1] ^= he, ie[2] ^= pe, ie[3] ^= de, ie[4] ^= fe, ie[5] ^= he, ie[6] ^= pe, ie[7] ^= de;
              for (var se = 0; se < 4; se++)
                re.call(this);
            }
          },
          _doProcessBlock: function(ne, ae) {
            var oe = this._X;
            re.call(this), Z[0] = oe[0] ^ oe[5] >>> 16 ^ oe[3] << 16, Z[1] = oe[2] ^ oe[7] >>> 16 ^ oe[5] << 16, Z[2] = oe[4] ^ oe[1] >>> 16 ^ oe[7] << 16, Z[3] = oe[6] ^ oe[3] >>> 16 ^ oe[1] << 16;
            for (var ie = 0; ie < 4; ie++)
              Z[ie] = (Z[ie] << 8 | Z[ie] >>> 24) & 16711935 | (Z[ie] << 24 | Z[ie] >>> 8) & 4278255360, ne[ae + ie] ^= Z[ie];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function re() {
          for (var ne = this._X, ae = this._C, oe = 0; oe < 8; oe++)
            Q[oe] = ae[oe];
          ae[0] = ae[0] + 1295307597 + this._b | 0, ae[1] = ae[1] + 3545052371 + (ae[0] >>> 0 < Q[0] >>> 0 ? 1 : 0) | 0, ae[2] = ae[2] + 886263092 + (ae[1] >>> 0 < Q[1] >>> 0 ? 1 : 0) | 0, ae[3] = ae[3] + 1295307597 + (ae[2] >>> 0 < Q[2] >>> 0 ? 1 : 0) | 0, ae[4] = ae[4] + 3545052371 + (ae[3] >>> 0 < Q[3] >>> 0 ? 1 : 0) | 0, ae[5] = ae[5] + 886263092 + (ae[4] >>> 0 < Q[4] >>> 0 ? 1 : 0) | 0, ae[6] = ae[6] + 1295307597 + (ae[5] >>> 0 < Q[5] >>> 0 ? 1 : 0) | 0, ae[7] = ae[7] + 3545052371 + (ae[6] >>> 0 < Q[6] >>> 0 ? 1 : 0) | 0, this._b = ae[7] >>> 0 < Q[7] >>> 0 ? 1 : 0;
          for (var oe = 0; oe < 8; oe++) {
            var ie = ne[oe] + ae[oe], se = ie & 65535, ue = ie >>> 16, le = ((se * se >>> 17) + se * ue >>> 15) + ue * ue, ce = ((ie & 4294901760) * ie | 0) + ((ie & 65535) * ie | 0);
            ee[oe] = le ^ ce;
          }
          ne[0] = ee[0] + (ee[7] << 16 | ee[7] >>> 16) + (ee[6] << 16 | ee[6] >>> 16) | 0, ne[1] = ee[1] + (ee[0] << 8 | ee[0] >>> 24) + ee[7] | 0, ne[2] = ee[2] + (ee[1] << 16 | ee[1] >>> 16) + (ee[0] << 16 | ee[0] >>> 16) | 0, ne[3] = ee[3] + (ee[2] << 8 | ee[2] >>> 24) + ee[1] | 0, ne[4] = ee[4] + (ee[3] << 16 | ee[3] >>> 16) + (ee[2] << 16 | ee[2] >>> 16) | 0, ne[5] = ee[5] + (ee[4] << 8 | ee[4] >>> 24) + ee[3] | 0, ne[6] = ee[6] + (ee[5] << 16 | ee[5] >>> 16) + (ee[4] << 16 | ee[4] >>> 16) | 0, ne[7] = ee[7] + (ee[6] << 8 | ee[6] >>> 24) + ee[5] | 0;
        }
        W.RabbitLegacy = G._createHelper(te);
      }(), U.RabbitLegacy;
    });
  }(rabbitLegacy)), rabbitLegacy.exports;
}
var blowfish = { exports: {} }, hasRequiredBlowfish;
function requireBlowfish() {
  return hasRequiredBlowfish || (hasRequiredBlowfish = 1, function(C, H) {
    (function(U, W, K) {
      C.exports = W(requireCore(), requireEncBase64(), requireMd5(), requireEvpkdf(), requireCipherCore());
    })(commonjsGlobal, function(U) {
      return function() {
        var W = U, K = W.lib, G = K.BlockCipher, X = W.algo;
        const Z = 16, Q = [
          608135816,
          2242054355,
          320440878,
          57701188,
          2752067618,
          698298832,
          137296536,
          3964562569,
          1160258022,
          953160567,
          3193202383,
          887688300,
          3232508343,
          3380367581,
          1065670069,
          3041331479,
          2450970073,
          2306472731
        ], ee = [
          [
            3509652390,
            2564797868,
            805139163,
            3491422135,
            3101798381,
            1780907670,
            3128725573,
            4046225305,
            614570311,
            3012652279,
            134345442,
            2240740374,
            1667834072,
            1901547113,
            2757295779,
            4103290238,
            227898511,
            1921955416,
            1904987480,
            2182433518,
            2069144605,
            3260701109,
            2620446009,
            720527379,
            3318853667,
            677414384,
            3393288472,
            3101374703,
            2390351024,
            1614419982,
            1822297739,
            2954791486,
            3608508353,
            3174124327,
            2024746970,
            1432378464,
            3864339955,
            2857741204,
            1464375394,
            1676153920,
            1439316330,
            715854006,
            3033291828,
            289532110,
            2706671279,
            2087905683,
            3018724369,
            1668267050,
            732546397,
            1947742710,
            3462151702,
            2609353502,
            2950085171,
            1814351708,
            2050118529,
            680887927,
            999245976,
            1800124847,
            3300911131,
            1713906067,
            1641548236,
            4213287313,
            1216130144,
            1575780402,
            4018429277,
            3917837745,
            3693486850,
            3949271944,
            596196993,
            3549867205,
            258830323,
            2213823033,
            772490370,
            2760122372,
            1774776394,
            2652871518,
            566650946,
            4142492826,
            1728879713,
            2882767088,
            1783734482,
            3629395816,
            2517608232,
            2874225571,
            1861159788,
            326777828,
            3124490320,
            2130389656,
            2716951837,
            967770486,
            1724537150,
            2185432712,
            2364442137,
            1164943284,
            2105845187,
            998989502,
            3765401048,
            2244026483,
            1075463327,
            1455516326,
            1322494562,
            910128902,
            469688178,
            1117454909,
            936433444,
            3490320968,
            3675253459,
            1240580251,
            122909385,
            2157517691,
            634681816,
            4142456567,
            3825094682,
            3061402683,
            2540495037,
            79693498,
            3249098678,
            1084186820,
            1583128258,
            426386531,
            1761308591,
            1047286709,
            322548459,
            995290223,
            1845252383,
            2603652396,
            3431023940,
            2942221577,
            3202600964,
            3727903485,
            1712269319,
            422464435,
            3234572375,
            1170764815,
            3523960633,
            3117677531,
            1434042557,
            442511882,
            3600875718,
            1076654713,
            1738483198,
            4213154764,
            2393238008,
            3677496056,
            1014306527,
            4251020053,
            793779912,
            2902807211,
            842905082,
            4246964064,
            1395751752,
            1040244610,
            2656851899,
            3396308128,
            445077038,
            3742853595,
            3577915638,
            679411651,
            2892444358,
            2354009459,
            1767581616,
            3150600392,
            3791627101,
            3102740896,
            284835224,
            4246832056,
            1258075500,
            768725851,
            2589189241,
            3069724005,
            3532540348,
            1274779536,
            3789419226,
            2764799539,
            1660621633,
            3471099624,
            4011903706,
            913787905,
            3497959166,
            737222580,
            2514213453,
            2928710040,
            3937242737,
            1804850592,
            3499020752,
            2949064160,
            2386320175,
            2390070455,
            2415321851,
            4061277028,
            2290661394,
            2416832540,
            1336762016,
            1754252060,
            3520065937,
            3014181293,
            791618072,
            3188594551,
            3933548030,
            2332172193,
            3852520463,
            3043980520,
            413987798,
            3465142937,
            3030929376,
            4245938359,
            2093235073,
            3534596313,
            375366246,
            2157278981,
            2479649556,
            555357303,
            3870105701,
            2008414854,
            3344188149,
            4221384143,
            3956125452,
            2067696032,
            3594591187,
            2921233993,
            2428461,
            544322398,
            577241275,
            1471733935,
            610547355,
            4027169054,
            1432588573,
            1507829418,
            2025931657,
            3646575487,
            545086370,
            48609733,
            2200306550,
            1653985193,
            298326376,
            1316178497,
            3007786442,
            2064951626,
            458293330,
            2589141269,
            3591329599,
            3164325604,
            727753846,
            2179363840,
            146436021,
            1461446943,
            4069977195,
            705550613,
            3059967265,
            3887724982,
            4281599278,
            3313849956,
            1404054877,
            2845806497,
            146425753,
            1854211946
          ],
          [
            1266315497,
            3048417604,
            3681880366,
            3289982499,
            290971e4,
            1235738493,
            2632868024,
            2414719590,
            3970600049,
            1771706367,
            1449415276,
            3266420449,
            422970021,
            1963543593,
            2690192192,
            3826793022,
            1062508698,
            1531092325,
            1804592342,
            2583117782,
            2714934279,
            4024971509,
            1294809318,
            4028980673,
            1289560198,
            2221992742,
            1669523910,
            35572830,
            157838143,
            1052438473,
            1016535060,
            1802137761,
            1753167236,
            1386275462,
            3080475397,
            2857371447,
            1040679964,
            2145300060,
            2390574316,
            1461121720,
            2956646967,
            4031777805,
            4028374788,
            33600511,
            2920084762,
            1018524850,
            629373528,
            3691585981,
            3515945977,
            2091462646,
            2486323059,
            586499841,
            988145025,
            935516892,
            3367335476,
            2599673255,
            2839830854,
            265290510,
            3972581182,
            2759138881,
            3795373465,
            1005194799,
            847297441,
            406762289,
            1314163512,
            1332590856,
            1866599683,
            4127851711,
            750260880,
            613907577,
            1450815602,
            3165620655,
            3734664991,
            3650291728,
            3012275730,
            3704569646,
            1427272223,
            778793252,
            1343938022,
            2676280711,
            2052605720,
            1946737175,
            3164576444,
            3914038668,
            3967478842,
            3682934266,
            1661551462,
            3294938066,
            4011595847,
            840292616,
            3712170807,
            616741398,
            312560963,
            711312465,
            1351876610,
            322626781,
            1910503582,
            271666773,
            2175563734,
            1594956187,
            70604529,
            3617834859,
            1007753275,
            1495573769,
            4069517037,
            2549218298,
            2663038764,
            504708206,
            2263041392,
            3941167025,
            2249088522,
            1514023603,
            1998579484,
            1312622330,
            694541497,
            2582060303,
            2151582166,
            1382467621,
            776784248,
            2618340202,
            3323268794,
            2497899128,
            2784771155,
            503983604,
            4076293799,
            907881277,
            423175695,
            432175456,
            1378068232,
            4145222326,
            3954048622,
            3938656102,
            3820766613,
            2793130115,
            2977904593,
            26017576,
            3274890735,
            3194772133,
            1700274565,
            1756076034,
            4006520079,
            3677328699,
            720338349,
            1533947780,
            354530856,
            688349552,
            3973924725,
            1637815568,
            332179504,
            3949051286,
            53804574,
            2852348879,
            3044236432,
            1282449977,
            3583942155,
            3416972820,
            4006381244,
            1617046695,
            2628476075,
            3002303598,
            1686838959,
            431878346,
            2686675385,
            1700445008,
            1080580658,
            1009431731,
            832498133,
            3223435511,
            2605976345,
            2271191193,
            2516031870,
            1648197032,
            4164389018,
            2548247927,
            300782431,
            375919233,
            238389289,
            3353747414,
            2531188641,
            2019080857,
            1475708069,
            455242339,
            2609103871,
            448939670,
            3451063019,
            1395535956,
            2413381860,
            1841049896,
            1491858159,
            885456874,
            4264095073,
            4001119347,
            1565136089,
            3898914787,
            1108368660,
            540939232,
            1173283510,
            2745871338,
            3681308437,
            4207628240,
            3343053890,
            4016749493,
            1699691293,
            1103962373,
            3625875870,
            2256883143,
            3830138730,
            1031889488,
            3479347698,
            1535977030,
            4236805024,
            3251091107,
            2132092099,
            1774941330,
            1199868427,
            1452454533,
            157007616,
            2904115357,
            342012276,
            595725824,
            1480756522,
            206960106,
            497939518,
            591360097,
            863170706,
            2375253569,
            3596610801,
            1814182875,
            2094937945,
            3421402208,
            1082520231,
            3463918190,
            2785509508,
            435703966,
            3908032597,
            1641649973,
            2842273706,
            3305899714,
            1510255612,
            2148256476,
            2655287854,
            3276092548,
            4258621189,
            236887753,
            3681803219,
            274041037,
            1734335097,
            3815195456,
            3317970021,
            1899903192,
            1026095262,
            4050517792,
            356393447,
            2410691914,
            3873677099,
            3682840055
          ],
          [
            3913112168,
            2491498743,
            4132185628,
            2489919796,
            1091903735,
            1979897079,
            3170134830,
            3567386728,
            3557303409,
            857797738,
            1136121015,
            1342202287,
            507115054,
            2535736646,
            337727348,
            3213592640,
            1301675037,
            2528481711,
            1895095763,
            1721773893,
            3216771564,
            62756741,
            2142006736,
            835421444,
            2531993523,
            1442658625,
            3659876326,
            2882144922,
            676362277,
            1392781812,
            170690266,
            3921047035,
            1759253602,
            3611846912,
            1745797284,
            664899054,
            1329594018,
            3901205900,
            3045908486,
            2062866102,
            2865634940,
            3543621612,
            3464012697,
            1080764994,
            553557557,
            3656615353,
            3996768171,
            991055499,
            499776247,
            1265440854,
            648242737,
            3940784050,
            980351604,
            3713745714,
            1749149687,
            3396870395,
            4211799374,
            3640570775,
            1161844396,
            3125318951,
            1431517754,
            545492359,
            4268468663,
            3499529547,
            1437099964,
            2702547544,
            3433638243,
            2581715763,
            2787789398,
            1060185593,
            1593081372,
            2418618748,
            4260947970,
            69676912,
            2159744348,
            86519011,
            2512459080,
            3838209314,
            1220612927,
            3339683548,
            133810670,
            1090789135,
            1078426020,
            1569222167,
            845107691,
            3583754449,
            4072456591,
            1091646820,
            628848692,
            1613405280,
            3757631651,
            526609435,
            236106946,
            48312990,
            2942717905,
            3402727701,
            1797494240,
            859738849,
            992217954,
            4005476642,
            2243076622,
            3870952857,
            3732016268,
            765654824,
            3490871365,
            2511836413,
            1685915746,
            3888969200,
            1414112111,
            2273134842,
            3281911079,
            4080962846,
            172450625,
            2569994100,
            980381355,
            4109958455,
            2819808352,
            2716589560,
            2568741196,
            3681446669,
            3329971472,
            1835478071,
            660984891,
            3704678404,
            4045999559,
            3422617507,
            3040415634,
            1762651403,
            1719377915,
            3470491036,
            2693910283,
            3642056355,
            3138596744,
            1364962596,
            2073328063,
            1983633131,
            926494387,
            3423689081,
            2150032023,
            4096667949,
            1749200295,
            3328846651,
            309677260,
            2016342300,
            1779581495,
            3079819751,
            111262694,
            1274766160,
            443224088,
            298511866,
            1025883608,
            3806446537,
            1145181785,
            168956806,
            3641502830,
            3584813610,
            1689216846,
            3666258015,
            3200248200,
            1692713982,
            2646376535,
            4042768518,
            1618508792,
            1610833997,
            3523052358,
            4130873264,
            2001055236,
            3610705100,
            2202168115,
            4028541809,
            2961195399,
            1006657119,
            2006996926,
            3186142756,
            1430667929,
            3210227297,
            1314452623,
            4074634658,
            4101304120,
            2273951170,
            1399257539,
            3367210612,
            3027628629,
            1190975929,
            2062231137,
            2333990788,
            2221543033,
            2438960610,
            1181637006,
            548689776,
            2362791313,
            3372408396,
            3104550113,
            3145860560,
            296247880,
            1970579870,
            3078560182,
            3769228297,
            1714227617,
            3291629107,
            3898220290,
            166772364,
            1251581989,
            493813264,
            448347421,
            195405023,
            2709975567,
            677966185,
            3703036547,
            1463355134,
            2715995803,
            1338867538,
            1343315457,
            2802222074,
            2684532164,
            233230375,
            2599980071,
            2000651841,
            3277868038,
            1638401717,
            4028070440,
            3237316320,
            6314154,
            819756386,
            300326615,
            590932579,
            1405279636,
            3267499572,
            3150704214,
            2428286686,
            3959192993,
            3461946742,
            1862657033,
            1266418056,
            963775037,
            2089974820,
            2263052895,
            1917689273,
            448879540,
            3550394620,
            3981727096,
            150775221,
            3627908307,
            1303187396,
            508620638,
            2975983352,
            2726630617,
            1817252668,
            1876281319,
            1457606340,
            908771278,
            3720792119,
            3617206836,
            2455994898,
            1729034894,
            1080033504
          ],
          [
            976866871,
            3556439503,
            2881648439,
            1522871579,
            1555064734,
            1336096578,
            3548522304,
            2579274686,
            3574697629,
            3205460757,
            3593280638,
            3338716283,
            3079412587,
            564236357,
            2993598910,
            1781952180,
            1464380207,
            3163844217,
            3332601554,
            1699332808,
            1393555694,
            1183702653,
            3581086237,
            1288719814,
            691649499,
            2847557200,
            2895455976,
            3193889540,
            2717570544,
            1781354906,
            1676643554,
            2592534050,
            3230253752,
            1126444790,
            2770207658,
            2633158820,
            2210423226,
            2615765581,
            2414155088,
            3127139286,
            673620729,
            2805611233,
            1269405062,
            4015350505,
            3341807571,
            4149409754,
            1057255273,
            2012875353,
            2162469141,
            2276492801,
            2601117357,
            993977747,
            3918593370,
            2654263191,
            753973209,
            36408145,
            2530585658,
            25011837,
            3520020182,
            2088578344,
            530523599,
            2918365339,
            1524020338,
            1518925132,
            3760827505,
            3759777254,
            1202760957,
            3985898139,
            3906192525,
            674977740,
            4174734889,
            2031300136,
            2019492241,
            3983892565,
            4153806404,
            3822280332,
            352677332,
            2297720250,
            60907813,
            90501309,
            3286998549,
            1016092578,
            2535922412,
            2839152426,
            457141659,
            509813237,
            4120667899,
            652014361,
            1966332200,
            2975202805,
            55981186,
            2327461051,
            676427537,
            3255491064,
            2882294119,
            3433927263,
            1307055953,
            942726286,
            933058658,
            2468411793,
            3933900994,
            4215176142,
            1361170020,
            2001714738,
            2830558078,
            3274259782,
            1222529897,
            1679025792,
            2729314320,
            3714953764,
            1770335741,
            151462246,
            3013232138,
            1682292957,
            1483529935,
            471910574,
            1539241949,
            458788160,
            3436315007,
            1807016891,
            3718408830,
            978976581,
            1043663428,
            3165965781,
            1927990952,
            4200891579,
            2372276910,
            3208408903,
            3533431907,
            1412390302,
            2931980059,
            4132332400,
            1947078029,
            3881505623,
            4168226417,
            2941484381,
            1077988104,
            1320477388,
            886195818,
            18198404,
            3786409e3,
            2509781533,
            112762804,
            3463356488,
            1866414978,
            891333506,
            18488651,
            661792760,
            1628790961,
            3885187036,
            3141171499,
            876946877,
            2693282273,
            1372485963,
            791857591,
            2686433993,
            3759982718,
            3167212022,
            3472953795,
            2716379847,
            445679433,
            3561995674,
            3504004811,
            3574258232,
            54117162,
            3331405415,
            2381918588,
            3769707343,
            4154350007,
            1140177722,
            4074052095,
            668550556,
            3214352940,
            367459370,
            261225585,
            2610173221,
            4209349473,
            3468074219,
            3265815641,
            314222801,
            3066103646,
            3808782860,
            282218597,
            3406013506,
            3773591054,
            379116347,
            1285071038,
            846784868,
            2669647154,
            3771962079,
            3550491691,
            2305946142,
            453669953,
            1268987020,
            3317592352,
            3279303384,
            3744833421,
            2610507566,
            3859509063,
            266596637,
            3847019092,
            517658769,
            3462560207,
            3443424879,
            370717030,
            4247526661,
            2224018117,
            4143653529,
            4112773975,
            2788324899,
            2477274417,
            1456262402,
            2901442914,
            1517677493,
            1846949527,
            2295493580,
            3734397586,
            2176403920,
            1280348187,
            1908823572,
            3871786941,
            846861322,
            1172426758,
            3287448474,
            3383383037,
            1655181056,
            3139813346,
            901632758,
            1897031941,
            2986607138,
            3066810236,
            3447102507,
            1393639104,
            373351379,
            950779232,
            625454576,
            3124240540,
            4148612726,
            2007998917,
            544563296,
            2244738638,
            2330496472,
            2058025392,
            1291430526,
            424198748,
            50039436,
            29584100,
            3605783033,
            2429876329,
            2791104160,
            1057563949,
            3255363231,
            3075367218,
            3463963227,
            1469046755,
            985887462
          ]
        ];
        var te = {
          pbox: [],
          sbox: []
        };
        function re(se, ue) {
          let le = ue >> 24 & 255, ce = ue >> 16 & 255, fe = ue >> 8 & 255, pe = ue & 255, he = se.sbox[0][le] + se.sbox[1][ce];
          return he = he ^ se.sbox[2][fe], he = he + se.sbox[3][pe], he;
        }
        function ne(se, ue, le) {
          let ce = ue, fe = le, pe;
          for (let he = 0; he < Z; ++he)
            ce = ce ^ se.pbox[he], fe = re(se, ce) ^ fe, pe = ce, ce = fe, fe = pe;
          return pe = ce, ce = fe, fe = pe, fe = fe ^ se.pbox[Z], ce = ce ^ se.pbox[Z + 1], { left: ce, right: fe };
        }
        function ae(se, ue, le) {
          let ce = ue, fe = le, pe;
          for (let he = Z + 1; he > 1; --he)
            ce = ce ^ se.pbox[he], fe = re(se, ce) ^ fe, pe = ce, ce = fe, fe = pe;
          return pe = ce, ce = fe, fe = pe, fe = fe ^ se.pbox[1], ce = ce ^ se.pbox[0], { left: ce, right: fe };
        }
        function oe(se, ue, le) {
          for (let de = 0; de < 4; de++) {
            se.sbox[de] = [];
            for (let ge = 0; ge < 256; ge++)
              se.sbox[de][ge] = ee[de][ge];
          }
          let ce = 0;
          for (let de = 0; de < Z + 2; de++)
            se.pbox[de] = Q[de] ^ ue[ce], ce++, ce >= le && (ce = 0);
          let fe = 0, pe = 0, he = 0;
          for (let de = 0; de < Z + 2; de += 2)
            he = ne(se, fe, pe), fe = he.left, pe = he.right, se.pbox[de] = fe, se.pbox[de + 1] = pe;
          for (let de = 0; de < 4; de++)
            for (let ge = 0; ge < 256; ge += 2)
              he = ne(se, fe, pe), fe = he.left, pe = he.right, se.sbox[de][ge] = fe, se.sbox[de][ge + 1] = pe;
          return !0;
        }
        var ie = X.Blowfish = G.extend({
          _doReset: function() {
            if (this._keyPriorReset !== this._key) {
              var se = this._keyPriorReset = this._key, ue = se.words, le = se.sigBytes / 4;
              oe(te, ue, le);
            }
          },
          encryptBlock: function(se, ue) {
            var le = ne(te, se[ue], se[ue + 1]);
            se[ue] = le.left, se[ue + 1] = le.right;
          },
          decryptBlock: function(se, ue) {
            var le = ae(te, se[ue], se[ue + 1]);
            se[ue] = le.left, se[ue + 1] = le.right;
          },
          blockSize: 64 / 32,
          keySize: 128 / 32,
          ivSize: 64 / 32
        });
        W.Blowfish = G._createHelper(ie);
      }(), U.Blowfish;
    });
  }(blowfish)), blowfish.exports;
}
(function(C, H) {
  (function(U, W, K) {
    C.exports = W(requireCore(), requireX64Core(), requireLibTypedarrays(), requireEncUtf16(), requireEncBase64(), requireEncBase64url(), requireMd5(), requireSha1(), requireSha256(), requireSha224(), requireSha512(), requireSha384(), requireSha3(), requireRipemd160(), requireHmac(), requirePbkdf2(), requireEvpkdf(), requireCipherCore(), requireModeCfb(), requireModeCtr(), requireModeCtrGladman(), requireModeOfb(), requireModeEcb(), requirePadAnsix923(), requirePadIso10126(), requirePadIso97971(), requirePadZeropadding(), requirePadNopadding(), requireFormatHex(), requireAes(), requireTripledes(), requireRc4(), requireRabbit(), requireRabbitLegacy(), requireBlowfish());
  })(commonjsGlobal, function(U) {
    return U;
  });
})(_cryptoJs_4_2_0_cryptoJs);
var _cryptoJs_4_2_0_cryptoJsExports = _cryptoJs_4_2_0_cryptoJs.exports;
const _0x44e9e3 = /* @__PURE__ */ getDefaultExportFromCjs(_cryptoJs_4_2_0_cryptoJsExports);
var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
function int2char(C) {
  return BI_RM.charAt(C);
}
function op_and(C, H) {
  return C & H;
}
function op_or(C, H) {
  return C | H;
}
function op_xor(C, H) {
  return C ^ H;
}
function op_andnot(C, H) {
  return C & ~H;
}
function lbit(C) {
  if (C == 0)
    return -1;
  var H = 0;
  return C & 65535 || (C >>= 16, H += 16), C & 255 || (C >>= 8, H += 8), C & 15 || (C >>= 4, H += 4), C & 3 || (C >>= 2, H += 2), C & 1 || ++H, H;
}
function cbit(C) {
  for (var H = 0; C != 0; )
    C &= C - 1, ++H;
  return H;
}
var b64map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", b64pad = "=";
function hex2b64(C) {
  var H, U, W = "";
  for (H = 0; H + 3 <= C.length; H += 3)
    U = parseInt(C.substring(H, H + 3), 16), W += b64map.charAt(U >> 6) + b64map.charAt(U & 63);
  for (H + 1 == C.length ? (U = parseInt(C.substring(H, H + 1), 16), W += b64map.charAt(U << 2)) : H + 2 == C.length && (U = parseInt(C.substring(H, H + 2), 16), W += b64map.charAt(U >> 2) + b64map.charAt((U & 3) << 4)); (W.length & 3) > 0; )
    W += b64pad;
  return W;
}
function b64tohex(C) {
  var H = "", U, W = 0, K = 0;
  for (U = 0; U < C.length && C.charAt(U) != b64pad; ++U) {
    var G = b64map.indexOf(C.charAt(U));
    G < 0 || (W == 0 ? (H += int2char(G >> 2), K = G & 3, W = 1) : W == 1 ? (H += int2char(K << 2 | G >> 4), K = G & 15, W = 2) : W == 2 ? (H += int2char(K), H += int2char(G >> 2), K = G & 3, W = 3) : (H += int2char(K << 2 | G >> 4), H += int2char(G & 15), W = 0));
  }
  return W == 1 && (H += int2char(K << 2)), H;
}
var decoder$1, Hex = {
  decode: function(C) {
    var H;
    if (decoder$1 === void 0) {
      var U = "0123456789ABCDEF", W = ` \f
\r	 \u2028\u2029`;
      for (decoder$1 = {}, H = 0; H < 16; ++H)
        decoder$1[U.charAt(H)] = H;
      for (U = U.toLowerCase(), H = 10; H < 16; ++H)
        decoder$1[U.charAt(H)] = H;
      for (H = 0; H < W.length; ++H)
        decoder$1[W.charAt(H)] = -1;
    }
    var K = [], G = 0, X = 0;
    for (H = 0; H < C.length; ++H) {
      var Z = C.charAt(H);
      if (Z == "=")
        break;
      if (Z = decoder$1[Z], Z != -1) {
        if (Z === void 0)
          throw new Error("Illegal character at offset " + H);
        G |= Z, ++X >= 2 ? (K[K.length] = G, G = 0, X = 0) : G <<= 4;
      }
    }
    if (X)
      throw new Error("Hex encoding incomplete: 4 bits missing");
    return K;
  }
}, decoder, Base64 = {
  decode: function(C) {
    var H;
    if (decoder === void 0) {
      var U = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", W = `= \f
\r	 \u2028\u2029`;
      for (decoder = /* @__PURE__ */ Object.create(null), H = 0; H < 64; ++H)
        decoder[U.charAt(H)] = H;
      for (decoder["-"] = 62, decoder._ = 63, H = 0; H < W.length; ++H)
        decoder[W.charAt(H)] = -1;
    }
    var K = [], G = 0, X = 0;
    for (H = 0; H < C.length; ++H) {
      var Z = C.charAt(H);
      if (Z == "=")
        break;
      if (Z = decoder[Z], Z != -1) {
        if (Z === void 0)
          throw new Error("Illegal character at offset " + H);
        G |= Z, ++X >= 4 ? (K[K.length] = G >> 16, K[K.length] = G >> 8 & 255, K[K.length] = G & 255, G = 0, X = 0) : G <<= 6;
      }
    }
    switch (X) {
      case 1:
        throw new Error("Base64 encoding incomplete: at least 2 bits missing");
      case 2:
        K[K.length] = G >> 10;
        break;
      case 3:
        K[K.length] = G >> 16, K[K.length] = G >> 8 & 255;
        break;
    }
    return K;
  },
  re: /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/,
  unarmor: function(C) {
    var H = Base64.re.exec(C);
    if (H)
      if (H[1])
        C = H[1];
      else if (H[2])
        C = H[2];
      else
        throw new Error("RegExp out of sync");
    return Base64.decode(C);
  }
}, max$2 = 1e13, Int10 = (
  /** @class */
  function() {
    function C(H) {
      this.buf = [+H || 0];
    }
    return C.prototype.mulAdd = function(H, U) {
      var W = this.buf, K = W.length, G, X;
      for (G = 0; G < K; ++G)
        X = W[G] * H + U, X < max$2 ? U = 0 : (U = 0 | X / max$2, X -= U * max$2), W[G] = X;
      U > 0 && (W[G] = U);
    }, C.prototype.sub = function(H) {
      var U = this.buf, W = U.length, K, G;
      for (K = 0; K < W; ++K)
        G = U[K] - H, G < 0 ? (G += max$2, H = 1) : H = 0, U[K] = G;
      for (; U[U.length - 1] === 0; )
        U.pop();
    }, C.prototype.toString = function(H) {
      if ((H || 10) != 10)
        throw new Error("only base 10 is supported");
      for (var U = this.buf, W = U[U.length - 1].toString(), K = U.length - 2; K >= 0; --K)
        W += (max$2 + U[K]).toString().substring(1);
      return W;
    }, C.prototype.valueOf = function() {
      for (var H = this.buf, U = 0, W = H.length - 1; W >= 0; --W)
        U = U * max$2 + H[W];
      return U;
    }, C.prototype.simplify = function() {
      var H = this.buf;
      return H.length == 1 ? H[0] : this;
    }, C;
  }()
), ellipsis = "…", reTimeS = /^(\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/, reTimeL = /^(\d\d\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;
function stringCut(C, H) {
  return C.length > H && (C = C.substring(0, H) + ellipsis), C;
}
var Stream = (
  /** @class */
  function() {
    function C(H, U) {
      this.hexDigits = "0123456789ABCDEF", H instanceof C ? (this.enc = H.enc, this.pos = H.pos) : (this.enc = H, this.pos = U);
    }
    return C.prototype.get = function(H) {
      if (H === void 0 && (H = this.pos++), H >= this.enc.length)
        throw new Error("Requesting byte offset ".concat(H, " on a stream of length ").concat(this.enc.length));
      return typeof this.enc == "string" ? this.enc.charCodeAt(H) : this.enc[H];
    }, C.prototype.hexByte = function(H) {
      return this.hexDigits.charAt(H >> 4 & 15) + this.hexDigits.charAt(H & 15);
    }, C.prototype.hexDump = function(H, U, W) {
      for (var K = "", G = H; G < U; ++G)
        if (K += this.hexByte(this.get(G)), W !== !0)
          switch (G & 15) {
            case 7:
              K += "  ";
              break;
            case 15:
              K += `
`;
              break;
            default:
              K += " ";
          }
      return K;
    }, C.prototype.isASCII = function(H, U) {
      for (var W = H; W < U; ++W) {
        var K = this.get(W);
        if (K < 32 || K > 176)
          return !1;
      }
      return !0;
    }, C.prototype.parseStringISO = function(H, U) {
      for (var W = "", K = H; K < U; ++K)
        W += String.fromCharCode(this.get(K));
      return W;
    }, C.prototype.parseStringUTF = function(H, U) {
      for (var W = "", K = H; K < U; ) {
        var G = this.get(K++);
        G < 128 ? W += String.fromCharCode(G) : G > 191 && G < 224 ? W += String.fromCharCode((G & 31) << 6 | this.get(K++) & 63) : W += String.fromCharCode((G & 15) << 12 | (this.get(K++) & 63) << 6 | this.get(K++) & 63);
      }
      return W;
    }, C.prototype.parseStringBMP = function(H, U) {
      for (var W = "", K, G, X = H; X < U; )
        K = this.get(X++), G = this.get(X++), W += String.fromCharCode(K << 8 | G);
      return W;
    }, C.prototype.parseTime = function(H, U, W) {
      var K = this.parseStringISO(H, U), G = (W ? reTimeS : reTimeL).exec(K);
      return G ? (W && (G[1] = +G[1], G[1] += +G[1] < 70 ? 2e3 : 1900), K = G[1] + "-" + G[2] + "-" + G[3] + " " + G[4], G[5] && (K += ":" + G[5], G[6] && (K += ":" + G[6], G[7] && (K += "." + G[7]))), G[8] && (K += " UTC", G[8] != "Z" && (K += G[8], G[9] && (K += ":" + G[9]))), K) : "Unrecognized time: " + K;
    }, C.prototype.parseInteger = function(H, U) {
      for (var W = this.get(H), K = W > 127, G = K ? 255 : 0, X, Z = ""; W == G && ++H < U; )
        W = this.get(H);
      if (X = U - H, X === 0)
        return K ? -1 : 0;
      if (X > 4) {
        for (Z = W, X <<= 3; !((+Z ^ G) & 128); )
          Z = +Z << 1, --X;
        Z = "(" + X + ` bit)
`;
      }
      K && (W = W - 256);
      for (var Q = new Int10(W), ee = H + 1; ee < U; ++ee)
        Q.mulAdd(256, this.get(ee));
      return Z + Q.toString();
    }, C.prototype.parseBitString = function(H, U, W) {
      for (var K = this.get(H), G = (U - H - 1 << 3) - K, X = "(" + G + ` bit)
`, Z = "", Q = H + 1; Q < U; ++Q) {
        for (var ee = this.get(Q), te = Q == U - 1 ? K : 0, re = 7; re >= te; --re)
          Z += ee >> re & 1 ? "1" : "0";
        if (Z.length > W)
          return X + stringCut(Z, W);
      }
      return X + Z;
    }, C.prototype.parseOctetString = function(H, U, W) {
      if (this.isASCII(H, U))
        return stringCut(this.parseStringISO(H, U), W);
      var K = U - H, G = "(" + K + ` byte)
`;
      W /= 2, K > W && (U = H + W);
      for (var X = H; X < U; ++X)
        G += this.hexByte(this.get(X));
      return K > W && (G += ellipsis), G;
    }, C.prototype.parseOID = function(H, U, W) {
      for (var K = "", G = new Int10(), X = 0, Z = H; Z < U; ++Z) {
        var Q = this.get(Z);
        if (G.mulAdd(128, Q & 127), X += 7, !(Q & 128)) {
          if (K === "")
            if (G = G.simplify(), G instanceof Int10)
              G.sub(80), K = "2." + G.toString();
            else {
              var ee = G < 80 ? G < 40 ? 0 : 1 : 2;
              K = ee + "." + (G - ee * 40);
            }
          else
            K += "." + G.toString();
          if (K.length > W)
            return stringCut(K, W);
          G = new Int10(), X = 0;
        }
      }
      return X > 0 && (K += ".incomplete"), K;
    }, C;
  }()
), ASN1 = (
  /** @class */
  function() {
    function C(H, U, W, K, G) {
      if (!(K instanceof ASN1Tag))
        throw new Error("Invalid tag value.");
      this.stream = H, this.header = U, this.length = W, this.tag = K, this.sub = G;
    }
    return C.prototype.typeName = function() {
      switch (this.tag.tagClass) {
        case 0:
          switch (this.tag.tagNumber) {
            case 0:
              return "EOC";
            case 1:
              return "BOOLEAN";
            case 2:
              return "INTEGER";
            case 3:
              return "BIT_STRING";
            case 4:
              return "OCTET_STRING";
            case 5:
              return "NULL";
            case 6:
              return "OBJECT_IDENTIFIER";
            case 7:
              return "ObjectDescriptor";
            case 8:
              return "EXTERNAL";
            case 9:
              return "REAL";
            case 10:
              return "ENUMERATED";
            case 11:
              return "EMBEDDED_PDV";
            case 12:
              return "UTF8String";
            case 16:
              return "SEQUENCE";
            case 17:
              return "SET";
            case 18:
              return "NumericString";
            case 19:
              return "PrintableString";
            case 20:
              return "TeletexString";
            case 21:
              return "VideotexString";
            case 22:
              return "IA5String";
            case 23:
              return "UTCTime";
            case 24:
              return "GeneralizedTime";
            case 25:
              return "GraphicString";
            case 26:
              return "VisibleString";
            case 27:
              return "GeneralString";
            case 28:
              return "UniversalString";
            case 30:
              return "BMPString";
          }
          return "Universal_" + this.tag.tagNumber.toString();
        case 1:
          return "Application_" + this.tag.tagNumber.toString();
        case 2:
          return "[" + this.tag.tagNumber.toString() + "]";
        case 3:
          return "Private_" + this.tag.tagNumber.toString();
      }
    }, C.prototype.content = function(H) {
      if (this.tag === void 0)
        return null;
      H === void 0 && (H = 1 / 0);
      var U = this.posContent(), W = Math.abs(this.length);
      if (!this.tag.isUniversal())
        return this.sub !== null ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(U, U + W, H);
      switch (this.tag.tagNumber) {
        case 1:
          return this.stream.get(U) === 0 ? "false" : "true";
        case 2:
          return this.stream.parseInteger(U, U + W);
        case 3:
          return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseBitString(U, U + W, H);
        case 4:
          return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(U, U + W, H);
        case 6:
          return this.stream.parseOID(U, U + W, H);
        case 16:
        case 17:
          return this.sub !== null ? "(" + this.sub.length + " elem)" : "(no elem)";
        case 12:
          return stringCut(this.stream.parseStringUTF(U, U + W), H);
        case 18:
        case 19:
        case 20:
        case 21:
        case 22:
        case 26:
          return stringCut(this.stream.parseStringISO(U, U + W), H);
        case 30:
          return stringCut(this.stream.parseStringBMP(U, U + W), H);
        case 23:
        case 24:
          return this.stream.parseTime(U, U + W, this.tag.tagNumber == 23);
      }
      return null;
    }, C.prototype.toString = function() {
      return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + (this.sub === null ? "null" : this.sub.length) + "]";
    }, C.prototype.toPrettyString = function(H) {
      H === void 0 && (H = "");
      var U = H + this.typeName() + " @" + this.stream.pos;
      if (this.length >= 0 && (U += "+"), U += this.length, this.tag.tagConstructed ? U += " (constructed)" : this.tag.isUniversal() && (this.tag.tagNumber == 3 || this.tag.tagNumber == 4) && this.sub !== null && (U += " (encapsulates)"), U += `
`, this.sub !== null) {
        H += "  ";
        for (var W = 0, K = this.sub.length; W < K; ++W)
          U += this.sub[W].toPrettyString(H);
      }
      return U;
    }, C.prototype.posStart = function() {
      return this.stream.pos;
    }, C.prototype.posContent = function() {
      return this.stream.pos + this.header;
    }, C.prototype.posEnd = function() {
      return this.stream.pos + this.header + Math.abs(this.length);
    }, C.prototype.toHexString = function() {
      return this.stream.hexDump(this.posStart(), this.posEnd(), !0);
    }, C.decodeLength = function(H) {
      var U = H.get(), W = U & 127;
      if (W == U)
        return W;
      if (W > 6)
        throw new Error("Length over 48 bits not supported at position " + (H.pos - 1));
      if (W === 0)
        return null;
      U = 0;
      for (var K = 0; K < W; ++K)
        U = U * 256 + H.get();
      return U;
    }, C.prototype.getHexStringValue = function() {
      var H = this.toHexString(), U = this.header * 2, W = this.length * 2;
      return H.substr(U, W);
    }, C.decode = function(H) {
      var U;
      H instanceof Stream ? U = H : U = new Stream(H, 0);
      var W = new Stream(U), K = new ASN1Tag(U), G = C.decodeLength(U), X = U.pos, Z = X - W.pos, Q = null, ee = function() {
        var re = [];
        if (G !== null) {
          for (var ne = X + G; U.pos < ne; )
            re[re.length] = C.decode(U);
          if (U.pos != ne)
            throw new Error("Content size is not correct for container starting at offset " + X);
        } else
          try {
            for (; ; ) {
              var ae = C.decode(U);
              if (ae.tag.isEOC())
                break;
              re[re.length] = ae;
            }
            G = X - U.pos;
          } catch (oe) {
            throw new Error("Exception while decoding undefined length content: " + oe);
          }
        return re;
      };
      if (K.tagConstructed)
        Q = ee();
      else if (K.isUniversal() && (K.tagNumber == 3 || K.tagNumber == 4))
        try {
          if (K.tagNumber == 3 && U.get() != 0)
            throw new Error("BIT STRINGs with unused bits cannot encapsulate.");
          Q = ee();
          for (var te = 0; te < Q.length; ++te)
            if (Q[te].tag.isEOC())
              throw new Error("EOC is not supposed to be actual content.");
        } catch {
          Q = null;
        }
      if (Q === null) {
        if (G === null)
          throw new Error("We can't skip over an invalid tag with undefined length at offset " + X);
        U.pos = X + Math.abs(G);
      }
      return new C(W, Z, G, K, Q);
    }, C;
  }()
), ASN1Tag = (
  /** @class */
  function() {
    function C(H) {
      var U = H.get();
      if (this.tagClass = U >> 6, this.tagConstructed = (U & 32) !== 0, this.tagNumber = U & 31, this.tagNumber == 31) {
        var W = new Int10();
        do
          U = H.get(), W.mulAdd(128, U & 127);
        while (U & 128);
        this.tagNumber = W.simplify();
      }
    }
    return C.prototype.isUniversal = function() {
      return this.tagClass === 0;
    }, C.prototype.isEOC = function() {
      return this.tagClass === 0 && this.tagNumber === 0;
    }, C;
  }()
), dbits, canary = 244837814094590, j_lm = (canary & 16777215) == 15715070, lowprimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997], lplim = (1 << 26) / lowprimes[lowprimes.length - 1], BigInteger = (
  /** @class */
  function() {
    function C(H, U, W) {
      H != null && (typeof H == "number" ? this.fromNumber(H, U, W) : U == null && typeof H != "string" ? this.fromString(H, 256) : this.fromString(H, U));
    }
    return C.prototype.toString = function(H) {
      if (this.s < 0)
        return "-" + this.negate().toString(H);
      var U;
      if (H == 16)
        U = 4;
      else if (H == 8)
        U = 3;
      else if (H == 2)
        U = 1;
      else if (H == 32)
        U = 5;
      else if (H == 4)
        U = 2;
      else
        return this.toRadix(H);
      var W = (1 << U) - 1, K, G = !1, X = "", Z = this.t, Q = this.DB - Z * this.DB % U;
      if (Z-- > 0)
        for (Q < this.DB && (K = this[Z] >> Q) > 0 && (G = !0, X = int2char(K)); Z >= 0; )
          Q < U ? (K = (this[Z] & (1 << Q) - 1) << U - Q, K |= this[--Z] >> (Q += this.DB - U)) : (K = this[Z] >> (Q -= U) & W, Q <= 0 && (Q += this.DB, --Z)), K > 0 && (G = !0), G && (X += int2char(K));
      return G ? X : "0";
    }, C.prototype.negate = function() {
      var H = nbi();
      return C.ZERO.subTo(this, H), H;
    }, C.prototype.abs = function() {
      return this.s < 0 ? this.negate() : this;
    }, C.prototype.compareTo = function(H) {
      var U = this.s - H.s;
      if (U != 0)
        return U;
      var W = this.t;
      if (U = W - H.t, U != 0)
        return this.s < 0 ? -U : U;
      for (; --W >= 0; )
        if ((U = this[W] - H[W]) != 0)
          return U;
      return 0;
    }, C.prototype.bitLength = function() {
      return this.t <= 0 ? 0 : this.DB * (this.t - 1) + nbits(this[this.t - 1] ^ this.s & this.DM);
    }, C.prototype.mod = function(H) {
      var U = nbi();
      return this.abs().divRemTo(H, null, U), this.s < 0 && U.compareTo(C.ZERO) > 0 && H.subTo(U, U), U;
    }, C.prototype.modPowInt = function(H, U) {
      var W;
      return H < 256 || U.isEven() ? W = new Classic(U) : W = new Montgomery(U), this.exp(H, W);
    }, C.prototype.clone = function() {
      var H = nbi();
      return this.copyTo(H), H;
    }, C.prototype.intValue = function() {
      if (this.s < 0) {
        if (this.t == 1)
          return this[0] - this.DV;
        if (this.t == 0)
          return -1;
      } else {
        if (this.t == 1)
          return this[0];
        if (this.t == 0)
          return 0;
      }
      return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0];
    }, C.prototype.byteValue = function() {
      return this.t == 0 ? this.s : this[0] << 24 >> 24;
    }, C.prototype.shortValue = function() {
      return this.t == 0 ? this.s : this[0] << 16 >> 16;
    }, C.prototype.signum = function() {
      return this.s < 0 ? -1 : this.t <= 0 || this.t == 1 && this[0] <= 0 ? 0 : 1;
    }, C.prototype.toByteArray = function() {
      var H = this.t, U = [];
      U[0] = this.s;
      var W = this.DB - H * this.DB % 8, K, G = 0;
      if (H-- > 0)
        for (W < this.DB && (K = this[H] >> W) != (this.s & this.DM) >> W && (U[G++] = K | this.s << this.DB - W); H >= 0; )
          W < 8 ? (K = (this[H] & (1 << W) - 1) << 8 - W, K |= this[--H] >> (W += this.DB - 8)) : (K = this[H] >> (W -= 8) & 255, W <= 0 && (W += this.DB, --H)), K & 128 && (K |= -256), G == 0 && (this.s & 128) != (K & 128) && ++G, (G > 0 || K != this.s) && (U[G++] = K);
      return U;
    }, C.prototype.equals = function(H) {
      return this.compareTo(H) == 0;
    }, C.prototype.min = function(H) {
      return this.compareTo(H) < 0 ? this : H;
    }, C.prototype.max = function(H) {
      return this.compareTo(H) > 0 ? this : H;
    }, C.prototype.and = function(H) {
      var U = nbi();
      return this.bitwiseTo(H, op_and, U), U;
    }, C.prototype.or = function(H) {
      var U = nbi();
      return this.bitwiseTo(H, op_or, U), U;
    }, C.prototype.xor = function(H) {
      var U = nbi();
      return this.bitwiseTo(H, op_xor, U), U;
    }, C.prototype.andNot = function(H) {
      var U = nbi();
      return this.bitwiseTo(H, op_andnot, U), U;
    }, C.prototype.not = function() {
      for (var H = nbi(), U = 0; U < this.t; ++U)
        H[U] = this.DM & ~this[U];
      return H.t = this.t, H.s = ~this.s, H;
    }, C.prototype.shiftLeft = function(H) {
      var U = nbi();
      return H < 0 ? this.rShiftTo(-H, U) : this.lShiftTo(H, U), U;
    }, C.prototype.shiftRight = function(H) {
      var U = nbi();
      return H < 0 ? this.lShiftTo(-H, U) : this.rShiftTo(H, U), U;
    }, C.prototype.getLowestSetBit = function() {
      for (var H = 0; H < this.t; ++H)
        if (this[H] != 0)
          return H * this.DB + lbit(this[H]);
      return this.s < 0 ? this.t * this.DB : -1;
    }, C.prototype.bitCount = function() {
      for (var H = 0, U = this.s & this.DM, W = 0; W < this.t; ++W)
        H += cbit(this[W] ^ U);
      return H;
    }, C.prototype.testBit = function(H) {
      var U = Math.floor(H / this.DB);
      return U >= this.t ? this.s != 0 : (this[U] & 1 << H % this.DB) != 0;
    }, C.prototype.setBit = function(H) {
      return this.changeBit(H, op_or);
    }, C.prototype.clearBit = function(H) {
      return this.changeBit(H, op_andnot);
    }, C.prototype.flipBit = function(H) {
      return this.changeBit(H, op_xor);
    }, C.prototype.add = function(H) {
      var U = nbi();
      return this.addTo(H, U), U;
    }, C.prototype.subtract = function(H) {
      var U = nbi();
      return this.subTo(H, U), U;
    }, C.prototype.multiply = function(H) {
      var U = nbi();
      return this.multiplyTo(H, U), U;
    }, C.prototype.divide = function(H) {
      var U = nbi();
      return this.divRemTo(H, U, null), U;
    }, C.prototype.remainder = function(H) {
      var U = nbi();
      return this.divRemTo(H, null, U), U;
    }, C.prototype.divideAndRemainder = function(H) {
      var U = nbi(), W = nbi();
      return this.divRemTo(H, U, W), [U, W];
    }, C.prototype.modPow = function(H, U) {
      var W = H.bitLength(), K, G = nbv(1), X;
      if (W <= 0)
        return G;
      W < 18 ? K = 1 : W < 48 ? K = 3 : W < 144 ? K = 4 : W < 768 ? K = 5 : K = 6, W < 8 ? X = new Classic(U) : U.isEven() ? X = new Barrett(U) : X = new Montgomery(U);
      var Z = [], Q = 3, ee = K - 1, te = (1 << K) - 1;
      if (Z[1] = X.convert(this), K > 1) {
        var re = nbi();
        for (X.sqrTo(Z[1], re); Q <= te; )
          Z[Q] = nbi(), X.mulTo(re, Z[Q - 2], Z[Q]), Q += 2;
      }
      var ne = H.t - 1, ae, oe = !0, ie = nbi(), se;
      for (W = nbits(H[ne]) - 1; ne >= 0; ) {
        for (W >= ee ? ae = H[ne] >> W - ee & te : (ae = (H[ne] & (1 << W + 1) - 1) << ee - W, ne > 0 && (ae |= H[ne - 1] >> this.DB + W - ee)), Q = K; !(ae & 1); )
          ae >>= 1, --Q;
        if ((W -= Q) < 0 && (W += this.DB, --ne), oe)
          Z[ae].copyTo(G), oe = !1;
        else {
          for (; Q > 1; )
            X.sqrTo(G, ie), X.sqrTo(ie, G), Q -= 2;
          Q > 0 ? X.sqrTo(G, ie) : (se = G, G = ie, ie = se), X.mulTo(ie, Z[ae], G);
        }
        for (; ne >= 0 && !(H[ne] & 1 << W); )
          X.sqrTo(G, ie), se = G, G = ie, ie = se, --W < 0 && (W = this.DB - 1, --ne);
      }
      return X.revert(G);
    }, C.prototype.modInverse = function(H) {
      var U = H.isEven();
      if (this.isEven() && U || H.signum() == 0)
        return C.ZERO;
      for (var W = H.clone(), K = this.clone(), G = nbv(1), X = nbv(0), Z = nbv(0), Q = nbv(1); W.signum() != 0; ) {
        for (; W.isEven(); )
          W.rShiftTo(1, W), U ? ((!G.isEven() || !X.isEven()) && (G.addTo(this, G), X.subTo(H, X)), G.rShiftTo(1, G)) : X.isEven() || X.subTo(H, X), X.rShiftTo(1, X);
        for (; K.isEven(); )
          K.rShiftTo(1, K), U ? ((!Z.isEven() || !Q.isEven()) && (Z.addTo(this, Z), Q.subTo(H, Q)), Z.rShiftTo(1, Z)) : Q.isEven() || Q.subTo(H, Q), Q.rShiftTo(1, Q);
        W.compareTo(K) >= 0 ? (W.subTo(K, W), U && G.subTo(Z, G), X.subTo(Q, X)) : (K.subTo(W, K), U && Z.subTo(G, Z), Q.subTo(X, Q));
      }
      if (K.compareTo(C.ONE) != 0)
        return C.ZERO;
      if (Q.compareTo(H) >= 0)
        return Q.subtract(H);
      if (Q.signum() < 0)
        Q.addTo(H, Q);
      else
        return Q;
      return Q.signum() < 0 ? Q.add(H) : Q;
    }, C.prototype.pow = function(H) {
      return this.exp(H, new NullExp());
    }, C.prototype.gcd = function(H) {
      var U = this.s < 0 ? this.negate() : this.clone(), W = H.s < 0 ? H.negate() : H.clone();
      if (U.compareTo(W) < 0) {
        var K = U;
        U = W, W = K;
      }
      var G = U.getLowestSetBit(), X = W.getLowestSetBit();
      if (X < 0)
        return U;
      for (G < X && (X = G), X > 0 && (U.rShiftTo(X, U), W.rShiftTo(X, W)); U.signum() > 0; )
        (G = U.getLowestSetBit()) > 0 && U.rShiftTo(G, U), (G = W.getLowestSetBit()) > 0 && W.rShiftTo(G, W), U.compareTo(W) >= 0 ? (U.subTo(W, U), U.rShiftTo(1, U)) : (W.subTo(U, W), W.rShiftTo(1, W));
      return X > 0 && W.lShiftTo(X, W), W;
    }, C.prototype.isProbablePrime = function(H) {
      var U, W = this.abs();
      if (W.t == 1 && W[0] <= lowprimes[lowprimes.length - 1]) {
        for (U = 0; U < lowprimes.length; ++U)
          if (W[0] == lowprimes[U])
            return !0;
        return !1;
      }
      if (W.isEven())
        return !1;
      for (U = 1; U < lowprimes.length; ) {
        for (var K = lowprimes[U], G = U + 1; G < lowprimes.length && K < lplim; )
          K *= lowprimes[G++];
        for (K = W.modInt(K); U < G; )
          if (K % lowprimes[U++] == 0)
            return !1;
      }
      return W.millerRabin(H);
    }, C.prototype.copyTo = function(H) {
      for (var U = this.t - 1; U >= 0; --U)
        H[U] = this[U];
      H.t = this.t, H.s = this.s;
    }, C.prototype.fromInt = function(H) {
      this.t = 1, this.s = H < 0 ? -1 : 0, H > 0 ? this[0] = H : H < -1 ? this[0] = H + this.DV : this.t = 0;
    }, C.prototype.fromString = function(H, U) {
      var W;
      if (U == 16)
        W = 4;
      else if (U == 8)
        W = 3;
      else if (U == 256)
        W = 8;
      else if (U == 2)
        W = 1;
      else if (U == 32)
        W = 5;
      else if (U == 4)
        W = 2;
      else {
        this.fromRadix(H, U);
        return;
      }
      this.t = 0, this.s = 0;
      for (var K = H.length, G = !1, X = 0; --K >= 0; ) {
        var Z = W == 8 ? +H[K] & 255 : intAt(H, K);
        if (Z < 0) {
          H.charAt(K) == "-" && (G = !0);
          continue;
        }
        G = !1, X == 0 ? this[this.t++] = Z : X + W > this.DB ? (this[this.t - 1] |= (Z & (1 << this.DB - X) - 1) << X, this[this.t++] = Z >> this.DB - X) : this[this.t - 1] |= Z << X, X += W, X >= this.DB && (X -= this.DB);
      }
      W == 8 && +H[0] & 128 && (this.s = -1, X > 0 && (this[this.t - 1] |= (1 << this.DB - X) - 1 << X)), this.clamp(), G && C.ZERO.subTo(this, this);
    }, C.prototype.clamp = function() {
      for (var H = this.s & this.DM; this.t > 0 && this[this.t - 1] == H; )
        --this.t;
    }, C.prototype.dlShiftTo = function(H, U) {
      var W;
      for (W = this.t - 1; W >= 0; --W)
        U[W + H] = this[W];
      for (W = H - 1; W >= 0; --W)
        U[W] = 0;
      U.t = this.t + H, U.s = this.s;
    }, C.prototype.drShiftTo = function(H, U) {
      for (var W = H; W < this.t; ++W)
        U[W - H] = this[W];
      U.t = Math.max(this.t - H, 0), U.s = this.s;
    }, C.prototype.lShiftTo = function(H, U) {
      for (var W = H % this.DB, K = this.DB - W, G = (1 << K) - 1, X = Math.floor(H / this.DB), Z = this.s << W & this.DM, Q = this.t - 1; Q >= 0; --Q)
        U[Q + X + 1] = this[Q] >> K | Z, Z = (this[Q] & G) << W;
      for (var Q = X - 1; Q >= 0; --Q)
        U[Q] = 0;
      U[X] = Z, U.t = this.t + X + 1, U.s = this.s, U.clamp();
    }, C.prototype.rShiftTo = function(H, U) {
      U.s = this.s;
      var W = Math.floor(H / this.DB);
      if (W >= this.t) {
        U.t = 0;
        return;
      }
      var K = H % this.DB, G = this.DB - K, X = (1 << K) - 1;
      U[0] = this[W] >> K;
      for (var Z = W + 1; Z < this.t; ++Z)
        U[Z - W - 1] |= (this[Z] & X) << G, U[Z - W] = this[Z] >> K;
      K > 0 && (U[this.t - W - 1] |= (this.s & X) << G), U.t = this.t - W, U.clamp();
    }, C.prototype.subTo = function(H, U) {
      for (var W = 0, K = 0, G = Math.min(H.t, this.t); W < G; )
        K += this[W] - H[W], U[W++] = K & this.DM, K >>= this.DB;
      if (H.t < this.t) {
        for (K -= H.s; W < this.t; )
          K += this[W], U[W++] = K & this.DM, K >>= this.DB;
        K += this.s;
      } else {
        for (K += this.s; W < H.t; )
          K -= H[W], U[W++] = K & this.DM, K >>= this.DB;
        K -= H.s;
      }
      U.s = K < 0 ? -1 : 0, K < -1 ? U[W++] = this.DV + K : K > 0 && (U[W++] = K), U.t = W, U.clamp();
    }, C.prototype.multiplyTo = function(H, U) {
      var W = this.abs(), K = H.abs(), G = W.t;
      for (U.t = G + K.t; --G >= 0; )
        U[G] = 0;
      for (G = 0; G < K.t; ++G)
        U[G + W.t] = W.am(0, K[G], U, G, 0, W.t);
      U.s = 0, U.clamp(), this.s != H.s && C.ZERO.subTo(U, U);
    }, C.prototype.squareTo = function(H) {
      for (var U = this.abs(), W = H.t = 2 * U.t; --W >= 0; )
        H[W] = 0;
      for (W = 0; W < U.t - 1; ++W) {
        var K = U.am(W, U[W], H, 2 * W, 0, 1);
        (H[W + U.t] += U.am(W + 1, 2 * U[W], H, 2 * W + 1, K, U.t - W - 1)) >= U.DV && (H[W + U.t] -= U.DV, H[W + U.t + 1] = 1);
      }
      H.t > 0 && (H[H.t - 1] += U.am(W, U[W], H, 2 * W, 0, 1)), H.s = 0, H.clamp();
    }, C.prototype.divRemTo = function(H, U, W) {
      var K = H.abs();
      if (!(K.t <= 0)) {
        var G = this.abs();
        if (G.t < K.t) {
          U != null && U.fromInt(0), W != null && this.copyTo(W);
          return;
        }
        W == null && (W = nbi());
        var X = nbi(), Z = this.s, Q = H.s, ee = this.DB - nbits(K[K.t - 1]);
        ee > 0 ? (K.lShiftTo(ee, X), G.lShiftTo(ee, W)) : (K.copyTo(X), G.copyTo(W));
        var te = X.t, re = X[te - 1];
        if (re != 0) {
          var ne = re * (1 << this.F1) + (te > 1 ? X[te - 2] >> this.F2 : 0), ae = this.FV / ne, oe = (1 << this.F1) / ne, ie = 1 << this.F2, se = W.t, ue = se - te, le = U ?? nbi();
          for (X.dlShiftTo(ue, le), W.compareTo(le) >= 0 && (W[W.t++] = 1, W.subTo(le, W)), C.ONE.dlShiftTo(te, le), le.subTo(X, X); X.t < te; )
            X[X.t++] = 0;
          for (; --ue >= 0; ) {
            var ce = W[--se] == re ? this.DM : Math.floor(W[se] * ae + (W[se - 1] + ie) * oe);
            if ((W[se] += X.am(0, ce, W, ue, 0, te)) < ce)
              for (X.dlShiftTo(ue, le), W.subTo(le, W); W[se] < --ce; )
                W.subTo(le, W);
          }
          U != null && (W.drShiftTo(te, U), Z != Q && C.ZERO.subTo(U, U)), W.t = te, W.clamp(), ee > 0 && W.rShiftTo(ee, W), Z < 0 && C.ZERO.subTo(W, W);
        }
      }
    }, C.prototype.invDigit = function() {
      if (this.t < 1)
        return 0;
      var H = this[0];
      if (!(H & 1))
        return 0;
      var U = H & 3;
      return U = U * (2 - (H & 15) * U) & 15, U = U * (2 - (H & 255) * U) & 255, U = U * (2 - ((H & 65535) * U & 65535)) & 65535, U = U * (2 - H * U % this.DV) % this.DV, U > 0 ? this.DV - U : -U;
    }, C.prototype.isEven = function() {
      return (this.t > 0 ? this[0] & 1 : this.s) == 0;
    }, C.prototype.exp = function(H, U) {
      if (H > 4294967295 || H < 1)
        return C.ONE;
      var W = nbi(), K = nbi(), G = U.convert(this), X = nbits(H) - 1;
      for (G.copyTo(W); --X >= 0; )
        if (U.sqrTo(W, K), (H & 1 << X) > 0)
          U.mulTo(K, G, W);
        else {
          var Z = W;
          W = K, K = Z;
        }
      return U.revert(W);
    }, C.prototype.chunkSize = function(H) {
      return Math.floor(Math.LN2 * this.DB / Math.log(H));
    }, C.prototype.toRadix = function(H) {
      if (H == null && (H = 10), this.signum() == 0 || H < 2 || H > 36)
        return "0";
      var U = this.chunkSize(H), W = Math.pow(H, U), K = nbv(W), G = nbi(), X = nbi(), Z = "";
      for (this.divRemTo(K, G, X); G.signum() > 0; )
        Z = (W + X.intValue()).toString(H).substr(1) + Z, G.divRemTo(K, G, X);
      return X.intValue().toString(H) + Z;
    }, C.prototype.fromRadix = function(H, U) {
      this.fromInt(0), U == null && (U = 10);
      for (var W = this.chunkSize(U), K = Math.pow(U, W), G = !1, X = 0, Z = 0, Q = 0; Q < H.length; ++Q) {
        var ee = intAt(H, Q);
        if (ee < 0) {
          H.charAt(Q) == "-" && this.signum() == 0 && (G = !0);
          continue;
        }
        Z = U * Z + ee, ++X >= W && (this.dMultiply(K), this.dAddOffset(Z, 0), X = 0, Z = 0);
      }
      X > 0 && (this.dMultiply(Math.pow(U, X)), this.dAddOffset(Z, 0)), G && C.ZERO.subTo(this, this);
    }, C.prototype.fromNumber = function(H, U, W) {
      if (typeof U == "number")
        if (H < 2)
          this.fromInt(1);
        else
          for (this.fromNumber(H, W), this.testBit(H - 1) || this.bitwiseTo(C.ONE.shiftLeft(H - 1), op_or, this), this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(U); )
            this.dAddOffset(2, 0), this.bitLength() > H && this.subTo(C.ONE.shiftLeft(H - 1), this);
      else {
        var K = [], G = H & 7;
        K.length = (H >> 3) + 1, U.nextBytes(K), G > 0 ? K[0] &= (1 << G) - 1 : K[0] = 0, this.fromString(K, 256);
      }
    }, C.prototype.bitwiseTo = function(H, U, W) {
      var K, G, X = Math.min(H.t, this.t);
      for (K = 0; K < X; ++K)
        W[K] = U(this[K], H[K]);
      if (H.t < this.t) {
        for (G = H.s & this.DM, K = X; K < this.t; ++K)
          W[K] = U(this[K], G);
        W.t = this.t;
      } else {
        for (G = this.s & this.DM, K = X; K < H.t; ++K)
          W[K] = U(G, H[K]);
        W.t = H.t;
      }
      W.s = U(this.s, H.s), W.clamp();
    }, C.prototype.changeBit = function(H, U) {
      var W = C.ONE.shiftLeft(H);
      return this.bitwiseTo(W, U, W), W;
    }, C.prototype.addTo = function(H, U) {
      for (var W = 0, K = 0, G = Math.min(H.t, this.t); W < G; )
        K += this[W] + H[W], U[W++] = K & this.DM, K >>= this.DB;
      if (H.t < this.t) {
        for (K += H.s; W < this.t; )
          K += this[W], U[W++] = K & this.DM, K >>= this.DB;
        K += this.s;
      } else {
        for (K += this.s; W < H.t; )
          K += H[W], U[W++] = K & this.DM, K >>= this.DB;
        K += H.s;
      }
      U.s = K < 0 ? -1 : 0, K > 0 ? U[W++] = K : K < -1 && (U[W++] = this.DV + K), U.t = W, U.clamp();
    }, C.prototype.dMultiply = function(H) {
      this[this.t] = this.am(0, H - 1, this, 0, 0, this.t), ++this.t, this.clamp();
    }, C.prototype.dAddOffset = function(H, U) {
      if (H != 0) {
        for (; this.t <= U; )
          this[this.t++] = 0;
        for (this[U] += H; this[U] >= this.DV; )
          this[U] -= this.DV, ++U >= this.t && (this[this.t++] = 0), ++this[U];
      }
    }, C.prototype.multiplyLowerTo = function(H, U, W) {
      var K = Math.min(this.t + H.t, U);
      for (W.s = 0, W.t = K; K > 0; )
        W[--K] = 0;
      for (var G = W.t - this.t; K < G; ++K)
        W[K + this.t] = this.am(0, H[K], W, K, 0, this.t);
      for (var G = Math.min(H.t, U); K < G; ++K)
        this.am(0, H[K], W, K, 0, U - K);
      W.clamp();
    }, C.prototype.multiplyUpperTo = function(H, U, W) {
      --U;
      var K = W.t = this.t + H.t - U;
      for (W.s = 0; --K >= 0; )
        W[K] = 0;
      for (K = Math.max(U - this.t, 0); K < H.t; ++K)
        W[this.t + K - U] = this.am(U - K, H[K], W, 0, 0, this.t + K - U);
      W.clamp(), W.drShiftTo(1, W);
    }, C.prototype.modInt = function(H) {
      if (H <= 0)
        return 0;
      var U = this.DV % H, W = this.s < 0 ? H - 1 : 0;
      if (this.t > 0)
        if (U == 0)
          W = this[0] % H;
        else
          for (var K = this.t - 1; K >= 0; --K)
            W = (U * W + this[K]) % H;
      return W;
    }, C.prototype.millerRabin = function(H) {
      var U = this.subtract(C.ONE), W = U.getLowestSetBit();
      if (W <= 0)
        return !1;
      var K = U.shiftRight(W);
      H = H + 1 >> 1, H > lowprimes.length && (H = lowprimes.length);
      for (var G = nbi(), X = 0; X < H; ++X) {
        G.fromInt(lowprimes[Math.floor(Math.random() * lowprimes.length)]);
        var Z = G.modPow(K, this);
        if (Z.compareTo(C.ONE) != 0 && Z.compareTo(U) != 0) {
          for (var Q = 1; Q++ < W && Z.compareTo(U) != 0; )
            if (Z = Z.modPowInt(2, this), Z.compareTo(C.ONE) == 0)
              return !1;
          if (Z.compareTo(U) != 0)
            return !1;
        }
      }
      return !0;
    }, C.prototype.square = function() {
      var H = nbi();
      return this.squareTo(H), H;
    }, C.prototype.gcda = function(H, U) {
      var W = this.s < 0 ? this.negate() : this.clone(), K = H.s < 0 ? H.negate() : H.clone();
      if (W.compareTo(K) < 0) {
        var G = W;
        W = K, K = G;
      }
      var X = W.getLowestSetBit(), Z = K.getLowestSetBit();
      if (Z < 0) {
        U(W);
        return;
      }
      X < Z && (Z = X), Z > 0 && (W.rShiftTo(Z, W), K.rShiftTo(Z, K));
      var Q = function() {
        (X = W.getLowestSetBit()) > 0 && W.rShiftTo(X, W), (X = K.getLowestSetBit()) > 0 && K.rShiftTo(X, K), W.compareTo(K) >= 0 ? (W.subTo(K, W), W.rShiftTo(1, W)) : (K.subTo(W, K), K.rShiftTo(1, K)), W.signum() > 0 ? setTimeout(Q, 0) : (Z > 0 && K.lShiftTo(Z, K), setTimeout(function() {
          U(K);
        }, 0));
      };
      setTimeout(Q, 10);
    }, C.prototype.fromNumberAsync = function(H, U, W, K) {
      if (typeof U == "number")
        if (H < 2)
          this.fromInt(1);
        else {
          this.fromNumber(H, W), this.testBit(H - 1) || this.bitwiseTo(C.ONE.shiftLeft(H - 1), op_or, this), this.isEven() && this.dAddOffset(1, 0);
          var G = this, X = function() {
            G.dAddOffset(2, 0), G.bitLength() > H && G.subTo(C.ONE.shiftLeft(H - 1), G), G.isProbablePrime(U) ? setTimeout(function() {
              K();
            }, 0) : setTimeout(X, 0);
          };
          setTimeout(X, 0);
        }
      else {
        var Z = [], Q = H & 7;
        Z.length = (H >> 3) + 1, U.nextBytes(Z), Q > 0 ? Z[0] &= (1 << Q) - 1 : Z[0] = 0, this.fromString(Z, 256);
      }
    }, C;
  }()
), NullExp = (
  /** @class */
  function() {
    function C() {
    }
    return C.prototype.convert = function(H) {
      return H;
    }, C.prototype.revert = function(H) {
      return H;
    }, C.prototype.mulTo = function(H, U, W) {
      H.multiplyTo(U, W);
    }, C.prototype.sqrTo = function(H, U) {
      H.squareTo(U);
    }, C;
  }()
), Classic = (
  /** @class */
  function() {
    function C(H) {
      this.m = H;
    }
    return C.prototype.convert = function(H) {
      return H.s < 0 || H.compareTo(this.m) >= 0 ? H.mod(this.m) : H;
    }, C.prototype.revert = function(H) {
      return H;
    }, C.prototype.reduce = function(H) {
      H.divRemTo(this.m, null, H);
    }, C.prototype.mulTo = function(H, U, W) {
      H.multiplyTo(U, W), this.reduce(W);
    }, C.prototype.sqrTo = function(H, U) {
      H.squareTo(U), this.reduce(U);
    }, C;
  }()
), Montgomery = (
  /** @class */
  function() {
    function C(H) {
      this.m = H, this.mp = H.invDigit(), this.mpl = this.mp & 32767, this.mph = this.mp >> 15, this.um = (1 << H.DB - 15) - 1, this.mt2 = 2 * H.t;
    }
    return C.prototype.convert = function(H) {
      var U = nbi();
      return H.abs().dlShiftTo(this.m.t, U), U.divRemTo(this.m, null, U), H.s < 0 && U.compareTo(BigInteger.ZERO) > 0 && this.m.subTo(U, U), U;
    }, C.prototype.revert = function(H) {
      var U = nbi();
      return H.copyTo(U), this.reduce(U), U;
    }, C.prototype.reduce = function(H) {
      for (; H.t <= this.mt2; )
        H[H.t++] = 0;
      for (var U = 0; U < this.m.t; ++U) {
        var W = H[U] & 32767, K = W * this.mpl + ((W * this.mph + (H[U] >> 15) * this.mpl & this.um) << 15) & H.DM;
        for (W = U + this.m.t, H[W] += this.m.am(0, K, H, U, 0, this.m.t); H[W] >= H.DV; )
          H[W] -= H.DV, H[++W]++;
      }
      H.clamp(), H.drShiftTo(this.m.t, H), H.compareTo(this.m) >= 0 && H.subTo(this.m, H);
    }, C.prototype.mulTo = function(H, U, W) {
      H.multiplyTo(U, W), this.reduce(W);
    }, C.prototype.sqrTo = function(H, U) {
      H.squareTo(U), this.reduce(U);
    }, C;
  }()
), Barrett = (
  /** @class */
  function() {
    function C(H) {
      this.m = H, this.r2 = nbi(), this.q3 = nbi(), BigInteger.ONE.dlShiftTo(2 * H.t, this.r2), this.mu = this.r2.divide(H);
    }
    return C.prototype.convert = function(H) {
      if (H.s < 0 || H.t > 2 * this.m.t)
        return H.mod(this.m);
      if (H.compareTo(this.m) < 0)
        return H;
      var U = nbi();
      return H.copyTo(U), this.reduce(U), U;
    }, C.prototype.revert = function(H) {
      return H;
    }, C.prototype.reduce = function(H) {
      for (H.drShiftTo(this.m.t - 1, this.r2), H.t > this.m.t + 1 && (H.t = this.m.t + 1, H.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); H.compareTo(this.r2) < 0; )
        H.dAddOffset(1, this.m.t + 1);
      for (H.subTo(this.r2, H); H.compareTo(this.m) >= 0; )
        H.subTo(this.m, H);
    }, C.prototype.mulTo = function(H, U, W) {
      H.multiplyTo(U, W), this.reduce(W);
    }, C.prototype.sqrTo = function(H, U) {
      H.squareTo(U), this.reduce(U);
    }, C;
  }()
);
function nbi() {
  return new BigInteger(null);
}
function parseBigInt(C, H) {
  return new BigInteger(C, H);
}
var inBrowser = typeof navigator < "u";
inBrowser && j_lm && navigator.appName == "Microsoft Internet Explorer" ? (BigInteger.prototype.am = function(H, U, W, K, G, X) {
  for (var Z = U & 32767, Q = U >> 15; --X >= 0; ) {
    var ee = this[H] & 32767, te = this[H++] >> 15, re = Q * ee + te * Z;
    ee = Z * ee + ((re & 32767) << 15) + W[K] + (G & 1073741823), G = (ee >>> 30) + (re >>> 15) + Q * te + (G >>> 30), W[K++] = ee & 1073741823;
  }
  return G;
}, dbits = 30) : inBrowser && j_lm && navigator.appName != "Netscape" ? (BigInteger.prototype.am = function(H, U, W, K, G, X) {
  for (; --X >= 0; ) {
    var Z = U * this[H++] + W[K] + G;
    G = Math.floor(Z / 67108864), W[K++] = Z & 67108863;
  }
  return G;
}, dbits = 26) : (BigInteger.prototype.am = function(H, U, W, K, G, X) {
  for (var Z = U & 16383, Q = U >> 14; --X >= 0; ) {
    var ee = this[H] & 16383, te = this[H++] >> 14, re = Q * ee + te * Z;
    ee = Z * ee + ((re & 16383) << 14) + W[K] + G, G = (ee >> 28) + (re >> 14) + Q * te, W[K++] = ee & 268435455;
  }
  return G;
}, dbits = 28);
BigInteger.prototype.DB = dbits;
BigInteger.prototype.DM = (1 << dbits) - 1;
BigInteger.prototype.DV = 1 << dbits;
var BI_FP = 52;
BigInteger.prototype.FV = Math.pow(2, BI_FP);
BigInteger.prototype.F1 = BI_FP - dbits;
BigInteger.prototype.F2 = 2 * dbits - BI_FP;
var BI_RC = [], rr, vv;
rr = 48;
for (vv = 0; vv <= 9; ++vv)
  BI_RC[rr++] = vv;
rr = 97;
for (vv = 10; vv < 36; ++vv)
  BI_RC[rr++] = vv;
rr = 65;
for (vv = 10; vv < 36; ++vv)
  BI_RC[rr++] = vv;
function intAt(C, H) {
  var U = BI_RC[C.charCodeAt(H)];
  return U ?? -1;
}
function nbv(C) {
  var H = nbi();
  return H.fromInt(C), H;
}
function nbits(C) {
  var H = 1, U;
  return (U = C >>> 16) != 0 && (C = U, H += 16), (U = C >> 8) != 0 && (C = U, H += 8), (U = C >> 4) != 0 && (C = U, H += 4), (U = C >> 2) != 0 && (C = U, H += 2), (U = C >> 1) != 0 && (C = U, H += 1), H;
}
BigInteger.ZERO = nbv(0);
BigInteger.ONE = nbv(1);
var Arcfour = (
  /** @class */
  function() {
    function C() {
      this.i = 0, this.j = 0, this.S = [];
    }
    return C.prototype.init = function(H) {
      var U, W, K;
      for (U = 0; U < 256; ++U)
        this.S[U] = U;
      for (W = 0, U = 0; U < 256; ++U)
        W = W + this.S[U] + H[U % H.length] & 255, K = this.S[U], this.S[U] = this.S[W], this.S[W] = K;
      this.i = 0, this.j = 0;
    }, C.prototype.next = function() {
      var H;
      return this.i = this.i + 1 & 255, this.j = this.j + this.S[this.i] & 255, H = this.S[this.i], this.S[this.i] = this.S[this.j], this.S[this.j] = H, this.S[H + this.S[this.i] & 255];
    }, C;
  }()
);
function prng_newstate() {
  return new Arcfour();
}
var rng_psize = 256, rng_state, rng_pool = null, rng_pptr;
if (rng_pool == null) {
  rng_pool = [], rng_pptr = 0;
  var t = void 0;
  if (typeof window < "u" && window.crypto && window.crypto.getRandomValues) {
    var z = new Uint32Array(256);
    for (window.crypto.getRandomValues(z), t = 0; t < z.length; ++t)
      rng_pool[rng_pptr++] = z[t] & 255;
  }
  var count = 0, onMouseMoveListener_1 = function(C) {
    if (count = count || 0, count >= 256 || rng_pptr >= rng_psize) {
      window.removeEventListener ? window.removeEventListener("mousemove", onMouseMoveListener_1, !1) : window.detachEvent && window.detachEvent("onmousemove", onMouseMoveListener_1);
      return;
    }
    try {
      var H = C.x + C.y;
      rng_pool[rng_pptr++] = H & 255, count += 1;
    } catch {
    }
  };
  typeof window < "u" && (window.addEventListener ? window.addEventListener("mousemove", onMouseMoveListener_1, !1) : window.attachEvent && window.attachEvent("onmousemove", onMouseMoveListener_1));
}
function rng_get_byte() {
  if (rng_state == null) {
    for (rng_state = prng_newstate(); rng_pptr < rng_psize; ) {
      var C = Math.floor(65536 * Math.random());
      rng_pool[rng_pptr++] = C & 255;
    }
    for (rng_state.init(rng_pool), rng_pptr = 0; rng_pptr < rng_pool.length; ++rng_pptr)
      rng_pool[rng_pptr] = 0;
    rng_pptr = 0;
  }
  return rng_state.next();
}
var SecureRandom = (
  /** @class */
  function() {
    function C() {
    }
    return C.prototype.nextBytes = function(H) {
      for (var U = 0; U < H.length; ++U)
        H[U] = rng_get_byte();
    }, C;
  }()
);
function pkcs1pad1(C, H) {
  if (H < C.length + 22)
    return console.error("Message too long for RSA"), null;
  for (var U = H - C.length - 6, W = "", K = 0; K < U; K += 2)
    W += "ff";
  var G = "0001" + W + "00" + C;
  return parseBigInt(G, 16);
}
function pkcs1pad2(C, H) {
  if (H < C.length + 11)
    return console.error("Message too long for RSA"), null;
  for (var U = [], W = C.length - 1; W >= 0 && H > 0; ) {
    var K = C.charCodeAt(W--);
    K < 128 ? U[--H] = K : K > 127 && K < 2048 ? (U[--H] = K & 63 | 128, U[--H] = K >> 6 | 192) : (U[--H] = K & 63 | 128, U[--H] = K >> 6 & 63 | 128, U[--H] = K >> 12 | 224);
  }
  U[--H] = 0;
  for (var G = new SecureRandom(), X = []; H > 2; ) {
    for (X[0] = 0; X[0] == 0; )
      G.nextBytes(X);
    U[--H] = X[0];
  }
  return U[--H] = 2, U[--H] = 0, new BigInteger(U);
}
var RSAKey = (
  /** @class */
  function() {
    function C() {
      this.n = null, this.e = 0, this.d = null, this.p = null, this.q = null, this.dmp1 = null, this.dmq1 = null, this.coeff = null;
    }
    return C.prototype.doPublic = function(H) {
      return H.modPowInt(this.e, this.n);
    }, C.prototype.doPrivate = function(H) {
      if (this.p == null || this.q == null)
        return H.modPow(this.d, this.n);
      for (var U = H.mod(this.p).modPow(this.dmp1, this.p), W = H.mod(this.q).modPow(this.dmq1, this.q); U.compareTo(W) < 0; )
        U = U.add(this.p);
      return U.subtract(W).multiply(this.coeff).mod(this.p).multiply(this.q).add(W);
    }, C.prototype.setPublic = function(H, U) {
      H != null && U != null && H.length > 0 && U.length > 0 ? (this.n = parseBigInt(H, 16), this.e = parseInt(U, 16)) : console.error("Invalid RSA public key");
    }, C.prototype.encrypt = function(H) {
      var U = this.n.bitLength() + 7 >> 3, W = pkcs1pad2(H, U);
      if (W == null)
        return null;
      var K = this.doPublic(W);
      if (K == null)
        return null;
      for (var G = K.toString(16), X = G.length, Z = 0; Z < U * 2 - X; Z++)
        G = "0" + G;
      return G;
    }, C.prototype.setPrivate = function(H, U, W) {
      H != null && U != null && H.length > 0 && U.length > 0 ? (this.n = parseBigInt(H, 16), this.e = parseInt(U, 16), this.d = parseBigInt(W, 16)) : console.error("Invalid RSA private key");
    }, C.prototype.setPrivateEx = function(H, U, W, K, G, X, Z, Q) {
      H != null && U != null && H.length > 0 && U.length > 0 ? (this.n = parseBigInt(H, 16), this.e = parseInt(U, 16), this.d = parseBigInt(W, 16), this.p = parseBigInt(K, 16), this.q = parseBigInt(G, 16), this.dmp1 = parseBigInt(X, 16), this.dmq1 = parseBigInt(Z, 16), this.coeff = parseBigInt(Q, 16)) : console.error("Invalid RSA private key");
    }, C.prototype.generate = function(H, U) {
      var W = new SecureRandom(), K = H >> 1;
      this.e = parseInt(U, 16);
      for (var G = new BigInteger(U, 16); ; ) {
        for (; this.p = new BigInteger(H - K, 1, W), !(this.p.subtract(BigInteger.ONE).gcd(G).compareTo(BigInteger.ONE) == 0 && this.p.isProbablePrime(10)); )
          ;
        for (; this.q = new BigInteger(K, 1, W), !(this.q.subtract(BigInteger.ONE).gcd(G).compareTo(BigInteger.ONE) == 0 && this.q.isProbablePrime(10)); )
          ;
        if (this.p.compareTo(this.q) <= 0) {
          var X = this.p;
          this.p = this.q, this.q = X;
        }
        var Z = this.p.subtract(BigInteger.ONE), Q = this.q.subtract(BigInteger.ONE), ee = Z.multiply(Q);
        if (ee.gcd(G).compareTo(BigInteger.ONE) == 0) {
          this.n = this.p.multiply(this.q), this.d = G.modInverse(ee), this.dmp1 = this.d.mod(Z), this.dmq1 = this.d.mod(Q), this.coeff = this.q.modInverse(this.p);
          break;
        }
      }
    }, C.prototype.decrypt = function(H) {
      var U = parseBigInt(H, 16), W = this.doPrivate(U);
      return W == null ? null : pkcs1unpad2(W, this.n.bitLength() + 7 >> 3);
    }, C.prototype.generateAsync = function(H, U, W) {
      var K = new SecureRandom(), G = H >> 1;
      this.e = parseInt(U, 16);
      var X = new BigInteger(U, 16), Z = this, Q = function() {
        var ee = function() {
          if (Z.p.compareTo(Z.q) <= 0) {
            var ne = Z.p;
            Z.p = Z.q, Z.q = ne;
          }
          var ae = Z.p.subtract(BigInteger.ONE), oe = Z.q.subtract(BigInteger.ONE), ie = ae.multiply(oe);
          ie.gcd(X).compareTo(BigInteger.ONE) == 0 ? (Z.n = Z.p.multiply(Z.q), Z.d = X.modInverse(ie), Z.dmp1 = Z.d.mod(ae), Z.dmq1 = Z.d.mod(oe), Z.coeff = Z.q.modInverse(Z.p), setTimeout(function() {
            W();
          }, 0)) : setTimeout(Q, 0);
        }, te = function() {
          Z.q = nbi(), Z.q.fromNumberAsync(G, 1, K, function() {
            Z.q.subtract(BigInteger.ONE).gcda(X, function(ne) {
              ne.compareTo(BigInteger.ONE) == 0 && Z.q.isProbablePrime(10) ? setTimeout(ee, 0) : setTimeout(te, 0);
            });
          });
        }, re = function() {
          Z.p = nbi(), Z.p.fromNumberAsync(H - G, 1, K, function() {
            Z.p.subtract(BigInteger.ONE).gcda(X, function(ne) {
              ne.compareTo(BigInteger.ONE) == 0 && Z.p.isProbablePrime(10) ? setTimeout(te, 0) : setTimeout(re, 0);
            });
          });
        };
        setTimeout(re, 0);
      };
      setTimeout(Q, 0);
    }, C.prototype.sign = function(H, U, W) {
      var K = getDigestHeader(W), G = K + U(H).toString(), X = pkcs1pad1(G, this.n.bitLength() / 4);
      if (X == null)
        return null;
      var Z = this.doPrivate(X);
      if (Z == null)
        return null;
      var Q = Z.toString(16);
      return Q.length & 1 ? "0" + Q : Q;
    }, C.prototype.verify = function(H, U, W) {
      var K = parseBigInt(U, 16), G = this.doPublic(K);
      if (G == null)
        return null;
      var X = G.toString(16).replace(/^1f+00/, ""), Z = removeDigestHeader(X);
      return Z == W(H).toString();
    }, C;
  }()
);
function pkcs1unpad2(C, H) {
  for (var U = C.toByteArray(), W = 0; W < U.length && U[W] == 0; )
    ++W;
  if (U.length - W != H - 1 || U[W] != 2)
    return null;
  for (++W; U[W] != 0; )
    if (++W >= U.length)
      return null;
  for (var K = ""; ++W < U.length; ) {
    var G = U[W] & 255;
    G < 128 ? K += String.fromCharCode(G) : G > 191 && G < 224 ? (K += String.fromCharCode((G & 31) << 6 | U[W + 1] & 63), ++W) : (K += String.fromCharCode((G & 15) << 12 | (U[W + 1] & 63) << 6 | U[W + 2] & 63), W += 2);
  }
  return K;
}
var DIGEST_HEADERS = {
  md2: "3020300c06082a864886f70d020205000410",
  md5: "3020300c06082a864886f70d020505000410",
  sha1: "3021300906052b0e03021a05000414",
  sha224: "302d300d06096086480165030402040500041c",
  sha256: "3031300d060960864801650304020105000420",
  sha384: "3041300d060960864801650304020205000430",
  sha512: "3051300d060960864801650304020305000440",
  ripemd160: "3021300906052b2403020105000414"
};
function getDigestHeader(C) {
  return DIGEST_HEADERS[C] || "";
}
function removeDigestHeader(C) {
  for (var H in DIGEST_HEADERS)
    if (DIGEST_HEADERS.hasOwnProperty(H)) {
      var U = DIGEST_HEADERS[H], W = U.length;
      if (C.substr(0, W) == U)
        return C.substr(W);
    }
  return C;
}
/*!
Copyright (c) 2011, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 2.9.0
*/
var YAHOO = {};
YAHOO.lang = {
  /**
   * Utility to set up the prototype, constructor and superclass properties to
   * support an inheritance strategy that can chain constructors and methods.
   * Static members will not be inherited.
   *
   * @method extend
   * @static
   * @param {Function} subc   the object to modify
   * @param {Function} superc the object to inherit
   * @param {Object} overrides  additional properties/methods to add to the
   *                              subclass prototype.  These will override the
   *                              matching items obtained from the superclass
   *                              if present.
   */
  extend: function(C, H, U) {
    if (!H || !C)
      throw new Error("YAHOO.lang.extend failed, please check that all dependencies are included.");
    var W = function() {
    };
    if (W.prototype = H.prototype, C.prototype = new W(), C.prototype.constructor = C, C.superclass = H.prototype, H.prototype.constructor == Object.prototype.constructor && (H.prototype.constructor = H), U) {
      var K;
      for (K in U)
        C.prototype[K] = U[K];
      var G = function() {
      }, X = ["toString", "valueOf"];
      try {
        /MSIE/.test(navigator.userAgent) && (G = function(Z, Q) {
          for (K = 0; K < X.length; K = K + 1) {
            var ee = X[K], te = Q[ee];
            typeof te == "function" && te != Object.prototype[ee] && (Z[ee] = te);
          }
        });
      } catch {
      }
      G(C.prototype, U);
    }
  }
};
/**
 * @fileOverview
 * @name asn1-1.0.js
 * @author Kenji Urushima kenji.urushima@gmail.com
 * @version asn1 1.0.13 (2017-Jun-02)
 * @since jsrsasign 2.1
 * @license <a href="https://kjur.github.io/jsrsasign/license/">MIT License</a>
 */
var KJUR = {};
(typeof KJUR.asn1 > "u" || !KJUR.asn1) && (KJUR.asn1 = {});
KJUR.asn1.ASN1Util = new function() {
  this.integerToByteHex = function(C) {
    var H = C.toString(16);
    return H.length % 2 == 1 && (H = "0" + H), H;
  }, this.bigIntToMinTwosComplementsHex = function(C) {
    var H = C.toString(16);
    if (H.substr(0, 1) != "-")
      H.length % 2 == 1 ? H = "0" + H : H.match(/^[0-7]/) || (H = "00" + H);
    else {
      var U = H.substr(1), W = U.length;
      W % 2 == 1 ? W += 1 : H.match(/^[0-7]/) || (W += 2);
      for (var K = "", G = 0; G < W; G++)
        K += "f";
      var X = new BigInteger(K, 16), Z = X.xor(C).add(BigInteger.ONE);
      H = Z.toString(16).replace(/^-/, "");
    }
    return H;
  }, this.getPEMStringFromHex = function(C, H) {
    return hextopem(C, H);
  }, this.newObject = function(C) {
    var H = KJUR, U = H.asn1, W = U.DERBoolean, K = U.DERInteger, G = U.DERBitString, X = U.DEROctetString, Z = U.DERNull, Q = U.DERObjectIdentifier, ee = U.DEREnumerated, te = U.DERUTF8String, re = U.DERNumericString, ne = U.DERPrintableString, ae = U.DERTeletexString, oe = U.DERIA5String, ie = U.DERUTCTime, se = U.DERGeneralizedTime, ue = U.DERSequence, le = U.DERSet, ce = U.DERTaggedObject, fe = U.ASN1Util.newObject, pe = Object.keys(C);
    if (pe.length != 1)
      throw "key of param shall be only one.";
    var he = pe[0];
    if (":bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:seq:set:tag:".indexOf(":" + he + ":") == -1)
      throw "undefined key: " + he;
    if (he == "bool")
      return new W(C[he]);
    if (he == "int")
      return new K(C[he]);
    if (he == "bitstr")
      return new G(C[he]);
    if (he == "octstr")
      return new X(C[he]);
    if (he == "null")
      return new Z(C[he]);
    if (he == "oid")
      return new Q(C[he]);
    if (he == "enum")
      return new ee(C[he]);
    if (he == "utf8str")
      return new te(C[he]);
    if (he == "numstr")
      return new re(C[he]);
    if (he == "prnstr")
      return new ne(C[he]);
    if (he == "telstr")
      return new ae(C[he]);
    if (he == "ia5str")
      return new oe(C[he]);
    if (he == "utctime")
      return new ie(C[he]);
    if (he == "gentime")
      return new se(C[he]);
    if (he == "seq") {
      for (var de = C[he], ge = [], ve = 0; ve < de.length; ve++) {
        var me = fe(de[ve]);
        ge.push(me);
      }
      return new ue({ array: ge });
    }
    if (he == "set") {
      for (var de = C[he], ge = [], ve = 0; ve < de.length; ve++) {
        var me = fe(de[ve]);
        ge.push(me);
      }
      return new le({ array: ge });
    }
    if (he == "tag") {
      var ye = C[he];
      if (Object.prototype.toString.call(ye) === "[object Array]" && ye.length == 3) {
        var be = fe(ye[2]);
        return new ce({
          tag: ye[0],
          explicit: ye[1],
          obj: be
        });
      } else {
        var Ce = {};
        if (ye.explicit !== void 0 && (Ce.explicit = ye.explicit), ye.tag !== void 0 && (Ce.tag = ye.tag), ye.obj === void 0)
          throw "obj shall be specified for 'tag'.";
        return Ce.obj = fe(ye.obj), new ce(Ce);
      }
    }
  }, this.jsonToASN1HEX = function(C) {
    var H = this.newObject(C);
    return H.getEncodedHex();
  };
}();
KJUR.asn1.ASN1Util.oidHexToInt = function(C) {
  for (var K = "", H = parseInt(C.substr(0, 2), 16), U = Math.floor(H / 40), W = H % 40, K = U + "." + W, G = "", X = 2; X < C.length; X += 2) {
    var Z = parseInt(C.substr(X, 2), 16), Q = ("00000000" + Z.toString(2)).slice(-8);
    if (G = G + Q.substr(1, 7), Q.substr(0, 1) == "0") {
      var ee = new BigInteger(G, 2);
      K = K + "." + ee.toString(10), G = "";
    }
  }
  return K;
};
KJUR.asn1.ASN1Util.oidIntToHex = function(C) {
  var H = function(Z) {
    var Q = Z.toString(16);
    return Q.length == 1 && (Q = "0" + Q), Q;
  }, U = function(Z) {
    var Q = "", ee = new BigInteger(Z, 10), te = ee.toString(2), re = 7 - te.length % 7;
    re == 7 && (re = 0);
    for (var ne = "", ae = 0; ae < re; ae++)
      ne += "0";
    te = ne + te;
    for (var ae = 0; ae < te.length - 1; ae += 7) {
      var oe = te.substr(ae, 7);
      ae != te.length - 7 && (oe = "1" + oe), Q += H(parseInt(oe, 2));
    }
    return Q;
  };
  if (!C.match(/^[0-9.]+$/))
    throw "malformed oid string: " + C;
  var W = "", K = C.split("."), G = parseInt(K[0]) * 40 + parseInt(K[1]);
  W += H(G), K.splice(0, 2);
  for (var X = 0; X < K.length; X++)
    W += U(K[X]);
  return W;
};
KJUR.asn1.ASN1Object = function() {
  var C = "";
  this.getLengthHexFromValue = function() {
    if (typeof this.hV > "u" || this.hV == null)
      throw "this.hV is null or undefined.";
    if (this.hV.length % 2 == 1)
      throw "value hex must be even length: n=" + C.length + ",v=" + this.hV;
    var H = this.hV.length / 2, U = H.toString(16);
    if (U.length % 2 == 1 && (U = "0" + U), H < 128)
      return U;
    var W = U.length / 2;
    if (W > 15)
      throw "ASN.1 length too long to represent by 8x: n = " + H.toString(16);
    var K = 128 + W;
    return K.toString(16) + U;
  }, this.getEncodedHex = function() {
    return (this.hTLV == null || this.isModified) && (this.hV = this.getFreshValueHex(), this.hL = this.getLengthHexFromValue(), this.hTLV = this.hT + this.hL + this.hV, this.isModified = !1), this.hTLV;
  }, this.getValueHex = function() {
    return this.getEncodedHex(), this.hV;
  }, this.getFreshValueHex = function() {
    return "";
  };
};
KJUR.asn1.DERAbstractString = function(C) {
  KJUR.asn1.DERAbstractString.superclass.constructor.call(this), this.getString = function() {
    return this.s;
  }, this.setString = function(H) {
    this.hTLV = null, this.isModified = !0, this.s = H, this.hV = stohex(this.s);
  }, this.setStringHex = function(H) {
    this.hTLV = null, this.isModified = !0, this.s = null, this.hV = H;
  }, this.getFreshValueHex = function() {
    return this.hV;
  }, typeof C < "u" && (typeof C == "string" ? this.setString(C) : typeof C.str < "u" ? this.setString(C.str) : typeof C.hex < "u" && this.setStringHex(C.hex));
};
YAHOO.lang.extend(KJUR.asn1.DERAbstractString, KJUR.asn1.ASN1Object);
KJUR.asn1.DERAbstractTime = function(C) {
  KJUR.asn1.DERAbstractTime.superclass.constructor.call(this), this.localDateToUTC = function(H) {
    utc = H.getTime() + H.getTimezoneOffset() * 6e4;
    var U = new Date(utc);
    return U;
  }, this.formatDate = function(H, U, W) {
    var K = this.zeroPadding, G = this.localDateToUTC(H), X = String(G.getFullYear());
    U == "utc" && (X = X.substr(2, 2));
    var Z = K(String(G.getMonth() + 1), 2), Q = K(String(G.getDate()), 2), ee = K(String(G.getHours()), 2), te = K(String(G.getMinutes()), 2), re = K(String(G.getSeconds()), 2), ne = X + Z + Q + ee + te + re;
    if (W === !0) {
      var ae = G.getMilliseconds();
      if (ae != 0) {
        var oe = K(String(ae), 3);
        oe = oe.replace(/[0]+$/, ""), ne = ne + "." + oe;
      }
    }
    return ne + "Z";
  }, this.zeroPadding = function(H, U) {
    return H.length >= U ? H : new Array(U - H.length + 1).join("0") + H;
  }, this.getString = function() {
    return this.s;
  }, this.setString = function(H) {
    this.hTLV = null, this.isModified = !0, this.s = H, this.hV = stohex(H);
  }, this.setByDateValue = function(H, U, W, K, G, X) {
    var Z = new Date(Date.UTC(H, U - 1, W, K, G, X, 0));
    this.setByDate(Z);
  }, this.getFreshValueHex = function() {
    return this.hV;
  };
};
YAHOO.lang.extend(KJUR.asn1.DERAbstractTime, KJUR.asn1.ASN1Object);
KJUR.asn1.DERAbstractStructured = function(C) {
  KJUR.asn1.DERAbstractString.superclass.constructor.call(this), this.setByASN1ObjectArray = function(H) {
    this.hTLV = null, this.isModified = !0, this.asn1Array = H;
  }, this.appendASN1Object = function(H) {
    this.hTLV = null, this.isModified = !0, this.asn1Array.push(H);
  }, this.asn1Array = new Array(), typeof C < "u" && typeof C.array < "u" && (this.asn1Array = C.array);
};
YAHOO.lang.extend(KJUR.asn1.DERAbstractStructured, KJUR.asn1.ASN1Object);
KJUR.asn1.DERBoolean = function() {
  KJUR.asn1.DERBoolean.superclass.constructor.call(this), this.hT = "01", this.hTLV = "0101ff";
};
YAHOO.lang.extend(KJUR.asn1.DERBoolean, KJUR.asn1.ASN1Object);
KJUR.asn1.DERInteger = function(C) {
  KJUR.asn1.DERInteger.superclass.constructor.call(this), this.hT = "02", this.setByBigInteger = function(H) {
    this.hTLV = null, this.isModified = !0, this.hV = KJUR.asn1.ASN1Util.bigIntToMinTwosComplementsHex(H);
  }, this.setByInteger = function(H) {
    var U = new BigInteger(String(H), 10);
    this.setByBigInteger(U);
  }, this.setValueHex = function(H) {
    this.hV = H;
  }, this.getFreshValueHex = function() {
    return this.hV;
  }, typeof C < "u" && (typeof C.bigint < "u" ? this.setByBigInteger(C.bigint) : typeof C.int < "u" ? this.setByInteger(C.int) : typeof C == "number" ? this.setByInteger(C) : typeof C.hex < "u" && this.setValueHex(C.hex));
};
YAHOO.lang.extend(KJUR.asn1.DERInteger, KJUR.asn1.ASN1Object);
KJUR.asn1.DERBitString = function(C) {
  if (C !== void 0 && typeof C.obj < "u") {
    var H = KJUR.asn1.ASN1Util.newObject(C.obj);
    C.hex = "00" + H.getEncodedHex();
  }
  KJUR.asn1.DERBitString.superclass.constructor.call(this), this.hT = "03", this.setHexValueIncludingUnusedBits = function(U) {
    this.hTLV = null, this.isModified = !0, this.hV = U;
  }, this.setUnusedBitsAndHexValue = function(U, W) {
    if (U < 0 || 7 < U)
      throw "unused bits shall be from 0 to 7: u = " + U;
    var K = "0" + U;
    this.hTLV = null, this.isModified = !0, this.hV = K + W;
  }, this.setByBinaryString = function(U) {
    U = U.replace(/0+$/, "");
    var W = 8 - U.length % 8;
    W == 8 && (W = 0);
    for (var K = 0; K <= W; K++)
      U += "0";
    for (var G = "", K = 0; K < U.length - 1; K += 8) {
      var X = U.substr(K, 8), Z = parseInt(X, 2).toString(16);
      Z.length == 1 && (Z = "0" + Z), G += Z;
    }
    this.hTLV = null, this.isModified = !0, this.hV = "0" + W + G;
  }, this.setByBooleanArray = function(U) {
    for (var W = "", K = 0; K < U.length; K++)
      U[K] == !0 ? W += "1" : W += "0";
    this.setByBinaryString(W);
  }, this.newFalseArray = function(U) {
    for (var W = new Array(U), K = 0; K < U; K++)
      W[K] = !1;
    return W;
  }, this.getFreshValueHex = function() {
    return this.hV;
  }, typeof C < "u" && (typeof C == "string" && C.toLowerCase().match(/^[0-9a-f]+$/) ? this.setHexValueIncludingUnusedBits(C) : typeof C.hex < "u" ? this.setHexValueIncludingUnusedBits(C.hex) : typeof C.bin < "u" ? this.setByBinaryString(C.bin) : typeof C.array < "u" && this.setByBooleanArray(C.array));
};
YAHOO.lang.extend(KJUR.asn1.DERBitString, KJUR.asn1.ASN1Object);
KJUR.asn1.DEROctetString = function(C) {
  if (C !== void 0 && typeof C.obj < "u") {
    var H = KJUR.asn1.ASN1Util.newObject(C.obj);
    C.hex = H.getEncodedHex();
  }
  KJUR.asn1.DEROctetString.superclass.constructor.call(this, C), this.hT = "04";
};
YAHOO.lang.extend(KJUR.asn1.DEROctetString, KJUR.asn1.DERAbstractString);
KJUR.asn1.DERNull = function() {
  KJUR.asn1.DERNull.superclass.constructor.call(this), this.hT = "05", this.hTLV = "0500";
};
YAHOO.lang.extend(KJUR.asn1.DERNull, KJUR.asn1.ASN1Object);
KJUR.asn1.DERObjectIdentifier = function(C) {
  var H = function(W) {
    var K = W.toString(16);
    return K.length == 1 && (K = "0" + K), K;
  }, U = function(W) {
    var K = "", G = new BigInteger(W, 10), X = G.toString(2), Z = 7 - X.length % 7;
    Z == 7 && (Z = 0);
    for (var Q = "", ee = 0; ee < Z; ee++)
      Q += "0";
    X = Q + X;
    for (var ee = 0; ee < X.length - 1; ee += 7) {
      var te = X.substr(ee, 7);
      ee != X.length - 7 && (te = "1" + te), K += H(parseInt(te, 2));
    }
    return K;
  };
  KJUR.asn1.DERObjectIdentifier.superclass.constructor.call(this), this.hT = "06", this.setValueHex = function(W) {
    this.hTLV = null, this.isModified = !0, this.s = null, this.hV = W;
  }, this.setValueOidString = function(W) {
    if (!W.match(/^[0-9.]+$/))
      throw "malformed oid string: " + W;
    var K = "", G = W.split("."), X = parseInt(G[0]) * 40 + parseInt(G[1]);
    K += H(X), G.splice(0, 2);
    for (var Z = 0; Z < G.length; Z++)
      K += U(G[Z]);
    this.hTLV = null, this.isModified = !0, this.s = null, this.hV = K;
  }, this.setValueName = function(W) {
    var K = KJUR.asn1.x509.OID.name2oid(W);
    if (K !== "")
      this.setValueOidString(K);
    else
      throw "DERObjectIdentifier oidName undefined: " + W;
  }, this.getFreshValueHex = function() {
    return this.hV;
  }, C !== void 0 && (typeof C == "string" ? C.match(/^[0-2].[0-9.]+$/) ? this.setValueOidString(C) : this.setValueName(C) : C.oid !== void 0 ? this.setValueOidString(C.oid) : C.hex !== void 0 ? this.setValueHex(C.hex) : C.name !== void 0 && this.setValueName(C.name));
};
YAHOO.lang.extend(KJUR.asn1.DERObjectIdentifier, KJUR.asn1.ASN1Object);
KJUR.asn1.DEREnumerated = function(C) {
  KJUR.asn1.DEREnumerated.superclass.constructor.call(this), this.hT = "0a", this.setByBigInteger = function(H) {
    this.hTLV = null, this.isModified = !0, this.hV = KJUR.asn1.ASN1Util.bigIntToMinTwosComplementsHex(H);
  }, this.setByInteger = function(H) {
    var U = new BigInteger(String(H), 10);
    this.setByBigInteger(U);
  }, this.setValueHex = function(H) {
    this.hV = H;
  }, this.getFreshValueHex = function() {
    return this.hV;
  }, typeof C < "u" && (typeof C.int < "u" ? this.setByInteger(C.int) : typeof C == "number" ? this.setByInteger(C) : typeof C.hex < "u" && this.setValueHex(C.hex));
};
YAHOO.lang.extend(KJUR.asn1.DEREnumerated, KJUR.asn1.ASN1Object);
KJUR.asn1.DERUTF8String = function(C) {
  KJUR.asn1.DERUTF8String.superclass.constructor.call(this, C), this.hT = "0c";
};
YAHOO.lang.extend(KJUR.asn1.DERUTF8String, KJUR.asn1.DERAbstractString);
KJUR.asn1.DERNumericString = function(C) {
  KJUR.asn1.DERNumericString.superclass.constructor.call(this, C), this.hT = "12";
};
YAHOO.lang.extend(KJUR.asn1.DERNumericString, KJUR.asn1.DERAbstractString);
KJUR.asn1.DERPrintableString = function(C) {
  KJUR.asn1.DERPrintableString.superclass.constructor.call(this, C), this.hT = "13";
};
YAHOO.lang.extend(KJUR.asn1.DERPrintableString, KJUR.asn1.DERAbstractString);
KJUR.asn1.DERTeletexString = function(C) {
  KJUR.asn1.DERTeletexString.superclass.constructor.call(this, C), this.hT = "14";
};
YAHOO.lang.extend(KJUR.asn1.DERTeletexString, KJUR.asn1.DERAbstractString);
KJUR.asn1.DERIA5String = function(C) {
  KJUR.asn1.DERIA5String.superclass.constructor.call(this, C), this.hT = "16";
};
YAHOO.lang.extend(KJUR.asn1.DERIA5String, KJUR.asn1.DERAbstractString);
KJUR.asn1.DERUTCTime = function(C) {
  KJUR.asn1.DERUTCTime.superclass.constructor.call(this, C), this.hT = "17", this.setByDate = function(H) {
    this.hTLV = null, this.isModified = !0, this.date = H, this.s = this.formatDate(this.date, "utc"), this.hV = stohex(this.s);
  }, this.getFreshValueHex = function() {
    return typeof this.date > "u" && typeof this.s > "u" && (this.date = /* @__PURE__ */ new Date(), this.s = this.formatDate(this.date, "utc"), this.hV = stohex(this.s)), this.hV;
  }, C !== void 0 && (C.str !== void 0 ? this.setString(C.str) : typeof C == "string" && C.match(/^[0-9]{12}Z$/) ? this.setString(C) : C.hex !== void 0 ? this.setStringHex(C.hex) : C.date !== void 0 && this.setByDate(C.date));
};
YAHOO.lang.extend(KJUR.asn1.DERUTCTime, KJUR.asn1.DERAbstractTime);
KJUR.asn1.DERGeneralizedTime = function(C) {
  KJUR.asn1.DERGeneralizedTime.superclass.constructor.call(this, C), this.hT = "18", this.withMillis = !1, this.setByDate = function(H) {
    this.hTLV = null, this.isModified = !0, this.date = H, this.s = this.formatDate(this.date, "gen", this.withMillis), this.hV = stohex(this.s);
  }, this.getFreshValueHex = function() {
    return this.date === void 0 && this.s === void 0 && (this.date = /* @__PURE__ */ new Date(), this.s = this.formatDate(this.date, "gen", this.withMillis), this.hV = stohex(this.s)), this.hV;
  }, C !== void 0 && (C.str !== void 0 ? this.setString(C.str) : typeof C == "string" && C.match(/^[0-9]{14}Z$/) ? this.setString(C) : C.hex !== void 0 ? this.setStringHex(C.hex) : C.date !== void 0 && this.setByDate(C.date), C.millis === !0 && (this.withMillis = !0));
};
YAHOO.lang.extend(KJUR.asn1.DERGeneralizedTime, KJUR.asn1.DERAbstractTime);
KJUR.asn1.DERSequence = function(C) {
  KJUR.asn1.DERSequence.superclass.constructor.call(this, C), this.hT = "30", this.getFreshValueHex = function() {
    for (var H = "", U = 0; U < this.asn1Array.length; U++) {
      var W = this.asn1Array[U];
      H += W.getEncodedHex();
    }
    return this.hV = H, this.hV;
  };
};
YAHOO.lang.extend(KJUR.asn1.DERSequence, KJUR.asn1.DERAbstractStructured);
KJUR.asn1.DERSet = function(C) {
  KJUR.asn1.DERSet.superclass.constructor.call(this, C), this.hT = "31", this.sortFlag = !0, this.getFreshValueHex = function() {
    for (var H = new Array(), U = 0; U < this.asn1Array.length; U++) {
      var W = this.asn1Array[U];
      H.push(W.getEncodedHex());
    }
    return this.sortFlag == !0 && H.sort(), this.hV = H.join(""), this.hV;
  }, typeof C < "u" && typeof C.sortflag < "u" && C.sortflag == !1 && (this.sortFlag = !1);
};
YAHOO.lang.extend(KJUR.asn1.DERSet, KJUR.asn1.DERAbstractStructured);
KJUR.asn1.DERTaggedObject = function(C) {
  KJUR.asn1.DERTaggedObject.superclass.constructor.call(this), this.hT = "a0", this.hV = "", this.isExplicit = !0, this.asn1Object = null, this.setASN1Object = function(H, U, W) {
    this.hT = U, this.isExplicit = H, this.asn1Object = W, this.isExplicit ? (this.hV = this.asn1Object.getEncodedHex(), this.hTLV = null, this.isModified = !0) : (this.hV = null, this.hTLV = W.getEncodedHex(), this.hTLV = this.hTLV.replace(/^../, U), this.isModified = !1);
  }, this.getFreshValueHex = function() {
    return this.hV;
  }, typeof C < "u" && (typeof C.tag < "u" && (this.hT = C.tag), typeof C.explicit < "u" && (this.isExplicit = C.explicit), typeof C.obj < "u" && (this.asn1Object = C.obj, this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)));
};
YAHOO.lang.extend(KJUR.asn1.DERTaggedObject, KJUR.asn1.ASN1Object);
var __extends = /* @__PURE__ */ function() {
  var C = function(H, U) {
    return C = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(W, K) {
      W.__proto__ = K;
    } || function(W, K) {
      for (var G in K)
        Object.prototype.hasOwnProperty.call(K, G) && (W[G] = K[G]);
    }, C(H, U);
  };
  return function(H, U) {
    if (typeof U != "function" && U !== null)
      throw new TypeError("Class extends value " + String(U) + " is not a constructor or null");
    C(H, U);
    function W() {
      this.constructor = H;
    }
    H.prototype = U === null ? Object.create(U) : (W.prototype = U.prototype, new W());
  };
}(), JSEncryptRSAKey = (
  /** @class */
  function(C) {
    __extends(H, C);
    function H(U) {
      var W = C.call(this) || this;
      return U && (typeof U == "string" ? W.parseKey(U) : (H.hasPrivateKeyProperty(U) || H.hasPublicKeyProperty(U)) && W.parsePropertiesFrom(U)), W;
    }
    return H.prototype.parseKey = function(U) {
      try {
        var W = 0, K = 0, G = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/, X = G.test(U) ? Hex.decode(U) : Base64.unarmor(U), Z = ASN1.decode(X);
        if (Z.sub.length === 3 && (Z = Z.sub[2].sub[0]), Z.sub.length === 9) {
          W = Z.sub[1].getHexStringValue(), this.n = parseBigInt(W, 16), K = Z.sub[2].getHexStringValue(), this.e = parseInt(K, 16);
          var Q = Z.sub[3].getHexStringValue();
          this.d = parseBigInt(Q, 16);
          var ee = Z.sub[4].getHexStringValue();
          this.p = parseBigInt(ee, 16);
          var te = Z.sub[5].getHexStringValue();
          this.q = parseBigInt(te, 16);
          var re = Z.sub[6].getHexStringValue();
          this.dmp1 = parseBigInt(re, 16);
          var ne = Z.sub[7].getHexStringValue();
          this.dmq1 = parseBigInt(ne, 16);
          var ae = Z.sub[8].getHexStringValue();
          this.coeff = parseBigInt(ae, 16);
        } else if (Z.sub.length === 2)
          if (Z.sub[0].sub) {
            var oe = Z.sub[1], ie = oe.sub[0];
            W = ie.sub[0].getHexStringValue(), this.n = parseBigInt(W, 16), K = ie.sub[1].getHexStringValue(), this.e = parseInt(K, 16);
          } else
            W = Z.sub[0].getHexStringValue(), this.n = parseBigInt(W, 16), K = Z.sub[1].getHexStringValue(), this.e = parseInt(K, 16);
        else
          return !1;
        return !0;
      } catch {
        return !1;
      }
    }, H.prototype.getPrivateBaseKey = function() {
      var U = {
        array: [
          new KJUR.asn1.DERInteger({ int: 0 }),
          new KJUR.asn1.DERInteger({ bigint: this.n }),
          new KJUR.asn1.DERInteger({ int: this.e }),
          new KJUR.asn1.DERInteger({ bigint: this.d }),
          new KJUR.asn1.DERInteger({ bigint: this.p }),
          new KJUR.asn1.DERInteger({ bigint: this.q }),
          new KJUR.asn1.DERInteger({ bigint: this.dmp1 }),
          new KJUR.asn1.DERInteger({ bigint: this.dmq1 }),
          new KJUR.asn1.DERInteger({ bigint: this.coeff })
        ]
      }, W = new KJUR.asn1.DERSequence(U);
      return W.getEncodedHex();
    }, H.prototype.getPrivateBaseKeyB64 = function() {
      return hex2b64(this.getPrivateBaseKey());
    }, H.prototype.getPublicBaseKey = function() {
      var U = new KJUR.asn1.DERSequence({
        array: [
          new KJUR.asn1.DERObjectIdentifier({ oid: "1.2.840.113549.1.1.1" }),
          new KJUR.asn1.DERNull()
        ]
      }), W = new KJUR.asn1.DERSequence({
        array: [
          new KJUR.asn1.DERInteger({ bigint: this.n }),
          new KJUR.asn1.DERInteger({ int: this.e })
        ]
      }), K = new KJUR.asn1.DERBitString({
        hex: "00" + W.getEncodedHex()
      }), G = new KJUR.asn1.DERSequence({
        array: [U, K]
      });
      return G.getEncodedHex();
    }, H.prototype.getPublicBaseKeyB64 = function() {
      return hex2b64(this.getPublicBaseKey());
    }, H.wordwrap = function(U, W) {
      if (W = W || 64, !U)
        return U;
      var K = "(.{1," + W + `})( +|$
?)|(.{1,` + W + "})";
      return U.match(RegExp(K, "g")).join(`
`);
    }, H.prototype.getPrivateKey = function() {
      var U = `-----BEGIN RSA PRIVATE KEY-----
`;
      return U += H.wordwrap(this.getPrivateBaseKeyB64()) + `
`, U += "-----END RSA PRIVATE KEY-----", U;
    }, H.prototype.getPublicKey = function() {
      var U = `-----BEGIN PUBLIC KEY-----
`;
      return U += H.wordwrap(this.getPublicBaseKeyB64()) + `
`, U += "-----END PUBLIC KEY-----", U;
    }, H.hasPublicKeyProperty = function(U) {
      return U = U || {}, U.hasOwnProperty("n") && U.hasOwnProperty("e");
    }, H.hasPrivateKeyProperty = function(U) {
      return U = U || {}, U.hasOwnProperty("n") && U.hasOwnProperty("e") && U.hasOwnProperty("d") && U.hasOwnProperty("p") && U.hasOwnProperty("q") && U.hasOwnProperty("dmp1") && U.hasOwnProperty("dmq1") && U.hasOwnProperty("coeff");
    }, H.prototype.parsePropertiesFrom = function(U) {
      this.n = U.n, this.e = U.e, U.hasOwnProperty("d") && (this.d = U.d, this.p = U.p, this.q = U.q, this.dmp1 = U.dmp1, this.dmq1 = U.dmq1, this.coeff = U.coeff);
    }, H;
  }(RSAKey)
), _a, version = typeof process < "u" ? (_a = process.env) === null || _a === void 0 ? void 0 : _a.npm_package_version : void 0, JSEncrypt = (
  /** @class */
  function() {
    function C(H) {
      H === void 0 && (H = {}), H = H || {}, this.default_key_size = H.default_key_size ? parseInt(H.default_key_size, 10) : 1024, this.default_public_exponent = H.default_public_exponent || "010001", this.log = H.log || !1, this.key = null;
    }
    return C.prototype.setKey = function(H) {
      this.log && this.key && console.warn("A key was already set, overriding existing."), this.key = new JSEncryptRSAKey(H);
    }, C.prototype.setPrivateKey = function(H) {
      this.setKey(H);
    }, C.prototype.setPublicKey = function(H) {
      this.setKey(H);
    }, C.prototype.decrypt = function(H) {
      try {
        return this.getKey().decrypt(b64tohex(H));
      } catch {
        return !1;
      }
    }, C.prototype.encrypt = function(H) {
      try {
        return hex2b64(this.getKey().encrypt(H));
      } catch {
        return !1;
      }
    }, C.prototype.sign = function(H, U, W) {
      try {
        return hex2b64(this.getKey().sign(H, U, W));
      } catch {
        return !1;
      }
    }, C.prototype.verify = function(H, U, W) {
      try {
        return this.getKey().verify(H, b64tohex(U), W);
      } catch {
        return !1;
      }
    }, C.prototype.getKey = function(H) {
      if (!this.key) {
        if (this.key = new JSEncryptRSAKey(), H && {}.toString.call(H) === "[object Function]") {
          this.key.generateAsync(this.default_key_size, this.default_public_exponent, H);
          return;
        }
        this.key.generate(this.default_key_size, this.default_public_exponent);
      }
      return this.key;
    }, C.prototype.getPrivateKey = function() {
      return this.getKey().getPrivateKey();
    }, C.prototype.getPrivateKeyB64 = function() {
      return this.getKey().getPrivateBaseKeyB64();
    }, C.prototype.getPublicKey = function() {
      return this.getKey().getPublicKey();
    }, C.prototype.getPublicKeyB64 = function() {
      return this.getKey().getPublicBaseKeyB64();
    }, C.version = version, C;
  }()
);
const CacheManager = { data: {}, model: "localStorage" };
CacheManager.getCache = function(C) {
  return new Cache(this, C);
};
CacheManager.get = function(group, key) {
  let items = "";
  const id = group + "##" + key;
  return this.model == "localStorage" ? (items = localStorage.getItem(id) || "", items = items ? eval("(" + items + ")") : null) : items = this.data[id], items;
};
CacheManager.put = function(C, H, U) {
  const W = C + "##" + H;
  this.model == "localStorage" ? localStorage.setItem(W, JSON.stringify(U)) : this.data[W] = U;
};
CacheManager.clear = function(C, H) {
  if (C) {
    const U = C + "##";
    if (this.model == "localStorage") {
      if (H) {
        localStorage.removeItem(U + H);
        return;
      }
      for (const W in localStorage)
        W.startsWith(U) && localStorage.removeItem(W);
    } else
      for (const W in this.data)
        W.startsWith(U) && (this.data[W] = void 0);
  } else {
    for (const U in localStorage)
      U.indexOf("##") >= 0 && localStorage.removeItem(U);
    this.data = {};
  }
};
class Cache {
  constructor(H, U) {
    ot(this, "group");
    ot(this, "manager");
    return this.group = U, this.manager = H, this;
  }
  get(H) {
    return this.manager.get(this.group, H);
  }
  put(H, U) {
    this.manager.put(this.group, H, U);
  }
  /** 清除缓存 不传值 所有 ##； 传一个值，所有值##; 传两个值，具体的字典 */
  clear(H, U) {
    this.manager.clear(H || this.group, U);
  }
}
let config = {
  async getBiz(C) {
    let H = CacheManager.getCache("config"), U = H.get("BIZ");
    if (U == null) {
      let W = http.ajax("post", "/api/config/get", {}, !1, !0);
      W.code == 200 && (U = W.data.config || {}, H.put("BIZ", U));
    }
    return U[C];
  },
  getValue(C, H) {
    let U = CacheManager.getCache("config"), W = U.get(C);
    if (W == null) {
      let K = http.ajax("post", "/api/config/get", { code: C }, !1, !0);
      K.code == 200 && (W = K.data.config, U.put(C, W));
    }
    return W ? W.configValue : H;
  }
};
//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var hookCallback;
function hooks() {
  return hookCallback.apply(null, arguments);
}
function setHookCallback(C) {
  hookCallback = C;
}
function isArray$4(C) {
  return C instanceof Array || Object.prototype.toString.call(C) === "[object Array]";
}
function isObject(C) {
  return C != null && Object.prototype.toString.call(C) === "[object Object]";
}
function hasOwnProp(C, H) {
  return Object.prototype.hasOwnProperty.call(C, H);
}
function isObjectEmpty(C) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(C).length === 0;
  var H;
  for (H in C)
    if (hasOwnProp(C, H))
      return !1;
  return !0;
}
function isUndefined(C) {
  return C === void 0;
}
function isNumber$1(C) {
  return typeof C == "number" || Object.prototype.toString.call(C) === "[object Number]";
}
function isDate$1(C) {
  return C instanceof Date || Object.prototype.toString.call(C) === "[object Date]";
}
function map(C, H) {
  var U = [], W, K = C.length;
  for (W = 0; W < K; ++W)
    U.push(H(C[W], W));
  return U;
}
function extend(C, H) {
  for (var U in H)
    hasOwnProp(H, U) && (C[U] = H[U]);
  return hasOwnProp(H, "toString") && (C.toString = H.toString), hasOwnProp(H, "valueOf") && (C.valueOf = H.valueOf), C;
}
function createUTC(C, H, U, W) {
  return createLocalOrUTC(C, H, U, W, !0).utc();
}
function defaultParsingFlags() {
  return {
    empty: !1,
    unusedTokens: [],
    unusedInput: [],
    overflow: -2,
    charsLeftOver: 0,
    nullInput: !1,
    invalidEra: null,
    invalidMonth: null,
    invalidFormat: !1,
    userInvalidated: !1,
    iso: !1,
    parsedDateParts: [],
    era: null,
    meridiem: null,
    rfc2822: !1,
    weekdayMismatch: !1
  };
}
function getParsingFlags(C) {
  return C._pf == null && (C._pf = defaultParsingFlags()), C._pf;
}
var some;
Array.prototype.some ? some = Array.prototype.some : some = function(C) {
  var H = Object(this), U = H.length >>> 0, W;
  for (W = 0; W < U; W++)
    if (W in H && C.call(this, H[W], W, H))
      return !0;
  return !1;
};
function isValid(C) {
  if (C._isValid == null) {
    var H = getParsingFlags(C), U = some.call(H.parsedDateParts, function(K) {
      return K != null;
    }), W = !isNaN(C._d.getTime()) && H.overflow < 0 && !H.empty && !H.invalidEra && !H.invalidMonth && !H.invalidWeekday && !H.weekdayMismatch && !H.nullInput && !H.invalidFormat && !H.userInvalidated && (!H.meridiem || H.meridiem && U);
    if (C._strict && (W = W && H.charsLeftOver === 0 && H.unusedTokens.length === 0 && H.bigHour === void 0), Object.isFrozen == null || !Object.isFrozen(C))
      C._isValid = W;
    else
      return W;
  }
  return C._isValid;
}
function createInvalid(C) {
  var H = createUTC(NaN);
  return C != null ? extend(getParsingFlags(H), C) : getParsingFlags(H).userInvalidated = !0, H;
}
var momentProperties = hooks.momentProperties = [], updateInProgress = !1;
function copyConfig(C, H) {
  var U, W, K, G = momentProperties.length;
  if (isUndefined(H._isAMomentObject) || (C._isAMomentObject = H._isAMomentObject), isUndefined(H._i) || (C._i = H._i), isUndefined(H._f) || (C._f = H._f), isUndefined(H._l) || (C._l = H._l), isUndefined(H._strict) || (C._strict = H._strict), isUndefined(H._tzm) || (C._tzm = H._tzm), isUndefined(H._isUTC) || (C._isUTC = H._isUTC), isUndefined(H._offset) || (C._offset = H._offset), isUndefined(H._pf) || (C._pf = getParsingFlags(H)), isUndefined(H._locale) || (C._locale = H._locale), G > 0)
    for (U = 0; U < G; U++)
      W = momentProperties[U], K = H[W], isUndefined(K) || (C[W] = K);
  return C;
}
function Moment(C) {
  copyConfig(this, C), this._d = new Date(C._d != null ? C._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), updateInProgress === !1 && (updateInProgress = !0, hooks.updateOffset(this), updateInProgress = !1);
}
function isMoment(C) {
  return C instanceof Moment || C != null && C._isAMomentObject != null;
}
function warn(C) {
  hooks.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + C);
}
function deprecate(C, H) {
  var U = !0;
  return extend(function() {
    if (hooks.deprecationHandler != null && hooks.deprecationHandler(null, C), U) {
      var W = [], K, G, X, Z = arguments.length;
      for (G = 0; G < Z; G++) {
        if (K = "", typeof arguments[G] == "object") {
          K += `
[` + G + "] ";
          for (X in arguments[0])
            hasOwnProp(arguments[0], X) && (K += X + ": " + arguments[0][X] + ", ");
          K = K.slice(0, -2);
        } else
          K = arguments[G];
        W.push(K);
      }
      warn(
        C + `
Arguments: ` + Array.prototype.slice.call(W).join("") + `
` + new Error().stack
      ), U = !1;
    }
    return H.apply(this, arguments);
  }, H);
}
var deprecations = {};
function deprecateSimple(C, H) {
  hooks.deprecationHandler != null && hooks.deprecationHandler(C, H), deprecations[C] || (warn(H), deprecations[C] = !0);
}
hooks.suppressDeprecationWarnings = !1;
hooks.deprecationHandler = null;
function isFunction(C) {
  return typeof Function < "u" && C instanceof Function || Object.prototype.toString.call(C) === "[object Function]";
}
function set(C) {
  var H, U;
  for (U in C)
    hasOwnProp(C, U) && (H = C[U], isFunction(H) ? this[U] = H : this["_" + U] = H);
  this._config = C, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function mergeConfigs(C, H) {
  var U = extend({}, C), W;
  for (W in H)
    hasOwnProp(H, W) && (isObject(C[W]) && isObject(H[W]) ? (U[W] = {}, extend(U[W], C[W]), extend(U[W], H[W])) : H[W] != null ? U[W] = H[W] : delete U[W]);
  for (W in C)
    hasOwnProp(C, W) && !hasOwnProp(H, W) && isObject(C[W]) && (U[W] = extend({}, U[W]));
  return U;
}
function Locale(C) {
  C != null && this.set(C);
}
var keys;
Object.keys ? keys = Object.keys : keys = function(C) {
  var H, U = [];
  for (H in C)
    hasOwnProp(C, H) && U.push(H);
  return U;
};
var defaultCalendar = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function calendar(C, H, U) {
  var W = this._calendar[C] || this._calendar.sameElse;
  return isFunction(W) ? W.call(H, U) : W;
}
function zeroFill(C, H, U) {
  var W = "" + Math.abs(C), K = H - W.length, G = C >= 0;
  return (G ? U ? "+" : "" : "-") + Math.pow(10, Math.max(0, K)).toString().substr(1) + W;
}
var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, formatFunctions = {}, formatTokenFunctions = {};
function addFormatToken(C, H, U, W) {
  var K = W;
  typeof W == "string" && (K = function() {
    return this[W]();
  }), C && (formatTokenFunctions[C] = K), H && (formatTokenFunctions[H[0]] = function() {
    return zeroFill(K.apply(this, arguments), H[1], H[2]);
  }), U && (formatTokenFunctions[U] = function() {
    return this.localeData().ordinal(
      K.apply(this, arguments),
      C
    );
  });
}
function removeFormattingTokens(C) {
  return C.match(/\[[\s\S]/) ? C.replace(/^\[|\]$/g, "") : C.replace(/\\/g, "");
}
function makeFormatFunction(C) {
  var H = C.match(formattingTokens), U, W;
  for (U = 0, W = H.length; U < W; U++)
    formatTokenFunctions[H[U]] ? H[U] = formatTokenFunctions[H[U]] : H[U] = removeFormattingTokens(H[U]);
  return function(K) {
    var G = "", X;
    for (X = 0; X < W; X++)
      G += isFunction(H[X]) ? H[X].call(K, C) : H[X];
    return G;
  };
}
function formatMoment(C, H) {
  return C.isValid() ? (H = expandFormat(H, C.localeData()), formatFunctions[H] = formatFunctions[H] || makeFormatFunction(H), formatFunctions[H](C)) : C.localeData().invalidDate();
}
function expandFormat(C, H) {
  var U = 5;
  function W(K) {
    return H.longDateFormat(K) || K;
  }
  for (localFormattingTokens.lastIndex = 0; U >= 0 && localFormattingTokens.test(C); )
    C = C.replace(
      localFormattingTokens,
      W
    ), localFormattingTokens.lastIndex = 0, U -= 1;
  return C;
}
var defaultLongDateFormat = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function longDateFormat(C) {
  var H = this._longDateFormat[C], U = this._longDateFormat[C.toUpperCase()];
  return H || !U ? H : (this._longDateFormat[C] = U.match(formattingTokens).map(function(W) {
    return W === "MMMM" || W === "MM" || W === "DD" || W === "dddd" ? W.slice(1) : W;
  }).join(""), this._longDateFormat[C]);
}
var defaultInvalidDate = "Invalid date";
function invalidDate() {
  return this._invalidDate;
}
var defaultOrdinal = "%d", defaultDayOfMonthOrdinalParse = /\d{1,2}/;
function ordinal(C) {
  return this._ordinal.replace("%d", C);
}
var defaultRelativeTime = {
  future: "in %s",
  past: "%s ago",
  s: "a few seconds",
  ss: "%d seconds",
  m: "a minute",
  mm: "%d minutes",
  h: "an hour",
  hh: "%d hours",
  d: "a day",
  dd: "%d days",
  w: "a week",
  ww: "%d weeks",
  M: "a month",
  MM: "%d months",
  y: "a year",
  yy: "%d years"
};
function relativeTime(C, H, U, W) {
  var K = this._relativeTime[U];
  return isFunction(K) ? K(C, H, U, W) : K.replace(/%d/i, C);
}
function pastFuture(C, H) {
  var U = this._relativeTime[C > 0 ? "future" : "past"];
  return isFunction(U) ? U(H) : U.replace(/%s/i, H);
}
var aliases = {};
function addUnitAlias(C, H) {
  var U = C.toLowerCase();
  aliases[U] = aliases[U + "s"] = aliases[H] = C;
}
function normalizeUnits(C) {
  return typeof C == "string" ? aliases[C] || aliases[C.toLowerCase()] : void 0;
}
function normalizeObjectUnits(C) {
  var H = {}, U, W;
  for (W in C)
    hasOwnProp(C, W) && (U = normalizeUnits(W), U && (H[U] = C[W]));
  return H;
}
var priorities = {};
function addUnitPriority(C, H) {
  priorities[C] = H;
}
function getPrioritizedUnits(C) {
  var H = [], U;
  for (U in C)
    hasOwnProp(C, U) && H.push({ unit: U, priority: priorities[U] });
  return H.sort(function(W, K) {
    return W.priority - K.priority;
  }), H;
}
function isLeapYear(C) {
  return C % 4 === 0 && C % 100 !== 0 || C % 400 === 0;
}
function absFloor(C) {
  return C < 0 ? Math.ceil(C) || 0 : Math.floor(C);
}
function toInt(C) {
  var H = +C, U = 0;
  return H !== 0 && isFinite(H) && (U = absFloor(H)), U;
}
function makeGetSet(C, H) {
  return function(U) {
    return U != null ? (set$1(this, C, U), hooks.updateOffset(this, H), this) : get(this, C);
  };
}
function get(C, H) {
  return C.isValid() ? C._d["get" + (C._isUTC ? "UTC" : "") + H]() : NaN;
}
function set$1(C, H, U) {
  C.isValid() && !isNaN(U) && (H === "FullYear" && isLeapYear(C.year()) && C.month() === 1 && C.date() === 29 ? (U = toInt(U), C._d["set" + (C._isUTC ? "UTC" : "") + H](
    U,
    C.month(),
    daysInMonth(U, C.month())
  )) : C._d["set" + (C._isUTC ? "UTC" : "") + H](U));
}
function stringGet(C) {
  return C = normalizeUnits(C), isFunction(this[C]) ? this[C]() : this;
}
function stringSet(C, H) {
  if (typeof C == "object") {
    C = normalizeObjectUnits(C);
    var U = getPrioritizedUnits(C), W, K = U.length;
    for (W = 0; W < K; W++)
      this[U[W].unit](C[U[W].unit]);
  } else if (C = normalizeUnits(C), isFunction(this[C]))
    return this[C](H);
  return this;
}
var match1 = /\d/, match2 = /\d\d/, match3 = /\d{3}/, match4 = /\d{4}/, match6 = /[+-]?\d{6}/, match1to2 = /\d\d?/, match3to4 = /\d\d\d\d?/, match5to6 = /\d\d\d\d\d\d?/, match1to3 = /\d{1,3}/, match1to4 = /\d{1,4}/, match1to6 = /[+-]?\d{1,6}/, matchUnsigned = /\d+/, matchSigned = /[+-]?\d+/, matchOffset = /Z|[+-]\d\d:?\d\d/gi, matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, regexes;
regexes = {};
function addRegexToken(C, H, U) {
  regexes[C] = isFunction(H) ? H : function(W, K) {
    return W && U ? U : H;
  };
}
function getParseRegexForToken(C, H) {
  return hasOwnProp(regexes, C) ? regexes[C](H._strict, H._locale) : new RegExp(unescapeFormat(C));
}
function unescapeFormat(C) {
  return regexEscape(
    C.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(H, U, W, K, G) {
        return U || W || K || G;
      }
    )
  );
}
function regexEscape(C) {
  return C.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
var tokens = {};
function addParseToken(C, H) {
  var U, W = H, K;
  for (typeof C == "string" && (C = [C]), isNumber$1(H) && (W = function(G, X) {
    X[H] = toInt(G);
  }), K = C.length, U = 0; U < K; U++)
    tokens[C[U]] = W;
}
function addWeekParseToken(C, H) {
  addParseToken(C, function(U, W, K, G) {
    K._w = K._w || {}, H(U, K._w, K, G);
  });
}
function addTimeToArrayFromToken(C, H, U) {
  H != null && hasOwnProp(tokens, C) && tokens[C](H, U._a, U, C);
}
var YEAR = 0, MONTH = 1, DATE = 2, HOUR = 3, MINUTE = 4, SECOND = 5, MILLISECOND = 6, WEEK = 7, WEEKDAY = 8;
function mod(C, H) {
  return (C % H + H) % H;
}
var indexOf$1;
Array.prototype.indexOf ? indexOf$1 = Array.prototype.indexOf : indexOf$1 = function(C) {
  var H;
  for (H = 0; H < this.length; ++H)
    if (this[H] === C)
      return H;
  return -1;
};
function daysInMonth(C, H) {
  if (isNaN(C) || isNaN(H))
    return NaN;
  var U = mod(H, 12);
  return C += (H - U) / 12, U === 1 ? isLeapYear(C) ? 29 : 28 : 31 - U % 7 % 2;
}
addFormatToken("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
addFormatToken("MMM", 0, 0, function(C) {
  return this.localeData().monthsShort(this, C);
});
addFormatToken("MMMM", 0, 0, function(C) {
  return this.localeData().months(this, C);
});
addUnitAlias("month", "M");
addUnitPriority("month", 8);
addRegexToken("M", match1to2);
addRegexToken("MM", match1to2, match2);
addRegexToken("MMM", function(C, H) {
  return H.monthsShortRegex(C);
});
addRegexToken("MMMM", function(C, H) {
  return H.monthsRegex(C);
});
addParseToken(["M", "MM"], function(C, H) {
  H[MONTH] = toInt(C) - 1;
});
addParseToken(["MMM", "MMMM"], function(C, H, U, W) {
  var K = U._locale.monthsParse(C, W, U._strict);
  K != null ? H[MONTH] = K : getParsingFlags(U).invalidMonth = C;
});
var defaultLocaleMonths = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), defaultLocaleMonthsShort = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, defaultMonthsShortRegex = matchWord, defaultMonthsRegex = matchWord;
function localeMonths(C, H) {
  return C ? isArray$4(this._months) ? this._months[C.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(H) ? "format" : "standalone"][C.month()] : isArray$4(this._months) ? this._months : this._months.standalone;
}
function localeMonthsShort(C, H) {
  return C ? isArray$4(this._monthsShort) ? this._monthsShort[C.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(H) ? "format" : "standalone"][C.month()] : isArray$4(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function handleStrictParse(C, H, U) {
  var W, K, G, X = C.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], W = 0; W < 12; ++W)
      G = createUTC([2e3, W]), this._shortMonthsParse[W] = this.monthsShort(
        G,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[W] = this.months(G, "").toLocaleLowerCase();
  return U ? H === "MMM" ? (K = indexOf$1.call(this._shortMonthsParse, X), K !== -1 ? K : null) : (K = indexOf$1.call(this._longMonthsParse, X), K !== -1 ? K : null) : H === "MMM" ? (K = indexOf$1.call(this._shortMonthsParse, X), K !== -1 ? K : (K = indexOf$1.call(this._longMonthsParse, X), K !== -1 ? K : null)) : (K = indexOf$1.call(this._longMonthsParse, X), K !== -1 ? K : (K = indexOf$1.call(this._shortMonthsParse, X), K !== -1 ? K : null));
}
function localeMonthsParse(C, H, U) {
  var W, K, G;
  if (this._monthsParseExact)
    return handleStrictParse.call(this, C, H, U);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), W = 0; W < 12; W++) {
    if (K = createUTC([2e3, W]), U && !this._longMonthsParse[W] && (this._longMonthsParse[W] = new RegExp(
      "^" + this.months(K, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[W] = new RegExp(
      "^" + this.monthsShort(K, "").replace(".", "") + "$",
      "i"
    )), !U && !this._monthsParse[W] && (G = "^" + this.months(K, "") + "|^" + this.monthsShort(K, ""), this._monthsParse[W] = new RegExp(G.replace(".", ""), "i")), U && H === "MMMM" && this._longMonthsParse[W].test(C))
      return W;
    if (U && H === "MMM" && this._shortMonthsParse[W].test(C))
      return W;
    if (!U && this._monthsParse[W].test(C))
      return W;
  }
}
function setMonth(C, H) {
  var U;
  if (!C.isValid())
    return C;
  if (typeof H == "string") {
    if (/^\d+$/.test(H))
      H = toInt(H);
    else if (H = C.localeData().monthsParse(H), !isNumber$1(H))
      return C;
  }
  return U = Math.min(C.date(), daysInMonth(C.year(), H)), C._d["set" + (C._isUTC ? "UTC" : "") + "Month"](H, U), C;
}
function getSetMonth(C) {
  return C != null ? (setMonth(this, C), hooks.updateOffset(this, !0), this) : get(this, "Month");
}
function getDaysInMonth() {
  return daysInMonth(this.year(), this.month());
}
function monthsShortRegex(C) {
  return this._monthsParseExact ? (hasOwnProp(this, "_monthsRegex") || computeMonthsParse.call(this), C ? this._monthsShortStrictRegex : this._monthsShortRegex) : (hasOwnProp(this, "_monthsShortRegex") || (this._monthsShortRegex = defaultMonthsShortRegex), this._monthsShortStrictRegex && C ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function monthsRegex(C) {
  return this._monthsParseExact ? (hasOwnProp(this, "_monthsRegex") || computeMonthsParse.call(this), C ? this._monthsStrictRegex : this._monthsRegex) : (hasOwnProp(this, "_monthsRegex") || (this._monthsRegex = defaultMonthsRegex), this._monthsStrictRegex && C ? this._monthsStrictRegex : this._monthsRegex);
}
function computeMonthsParse() {
  function C(X, Z) {
    return Z.length - X.length;
  }
  var H = [], U = [], W = [], K, G;
  for (K = 0; K < 12; K++)
    G = createUTC([2e3, K]), H.push(this.monthsShort(G, "")), U.push(this.months(G, "")), W.push(this.months(G, "")), W.push(this.monthsShort(G, ""));
  for (H.sort(C), U.sort(C), W.sort(C), K = 0; K < 12; K++)
    H[K] = regexEscape(H[K]), U[K] = regexEscape(U[K]);
  for (K = 0; K < 24; K++)
    W[K] = regexEscape(W[K]);
  this._monthsRegex = new RegExp("^(" + W.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + U.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + H.join("|") + ")",
    "i"
  );
}
addFormatToken("Y", 0, 0, function() {
  var C = this.year();
  return C <= 9999 ? zeroFill(C, 4) : "+" + C;
});
addFormatToken(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
addFormatToken(0, ["YYYY", 4], 0, "year");
addFormatToken(0, ["YYYYY", 5], 0, "year");
addFormatToken(0, ["YYYYYY", 6, !0], 0, "year");
addUnitAlias("year", "y");
addUnitPriority("year", 1);
addRegexToken("Y", matchSigned);
addRegexToken("YY", match1to2, match2);
addRegexToken("YYYY", match1to4, match4);
addRegexToken("YYYYY", match1to6, match6);
addRegexToken("YYYYYY", match1to6, match6);
addParseToken(["YYYYY", "YYYYYY"], YEAR);
addParseToken("YYYY", function(C, H) {
  H[YEAR] = C.length === 2 ? hooks.parseTwoDigitYear(C) : toInt(C);
});
addParseToken("YY", function(C, H) {
  H[YEAR] = hooks.parseTwoDigitYear(C);
});
addParseToken("Y", function(C, H) {
  H[YEAR] = parseInt(C, 10);
});
function daysInYear(C) {
  return isLeapYear(C) ? 366 : 365;
}
hooks.parseTwoDigitYear = function(C) {
  return toInt(C) + (toInt(C) > 68 ? 1900 : 2e3);
};
var getSetYear = makeGetSet("FullYear", !0);
function getIsLeapYear() {
  return isLeapYear(this.year());
}
function createDate(C, H, U, W, K, G, X) {
  var Z;
  return C < 100 && C >= 0 ? (Z = new Date(C + 400, H, U, W, K, G, X), isFinite(Z.getFullYear()) && Z.setFullYear(C)) : Z = new Date(C, H, U, W, K, G, X), Z;
}
function createUTCDate(C) {
  var H, U;
  return C < 100 && C >= 0 ? (U = Array.prototype.slice.call(arguments), U[0] = C + 400, H = new Date(Date.UTC.apply(null, U)), isFinite(H.getUTCFullYear()) && H.setUTCFullYear(C)) : H = new Date(Date.UTC.apply(null, arguments)), H;
}
function firstWeekOffset(C, H, U) {
  var W = 7 + H - U, K = (7 + createUTCDate(C, 0, W).getUTCDay() - H) % 7;
  return -K + W - 1;
}
function dayOfYearFromWeeks(C, H, U, W, K) {
  var G = (7 + U - W) % 7, X = firstWeekOffset(C, W, K), Z = 1 + 7 * (H - 1) + G + X, Q, ee;
  return Z <= 0 ? (Q = C - 1, ee = daysInYear(Q) + Z) : Z > daysInYear(C) ? (Q = C + 1, ee = Z - daysInYear(C)) : (Q = C, ee = Z), {
    year: Q,
    dayOfYear: ee
  };
}
function weekOfYear(C, H, U) {
  var W = firstWeekOffset(C.year(), H, U), K = Math.floor((C.dayOfYear() - W - 1) / 7) + 1, G, X;
  return K < 1 ? (X = C.year() - 1, G = K + weeksInYear(X, H, U)) : K > weeksInYear(C.year(), H, U) ? (G = K - weeksInYear(C.year(), H, U), X = C.year() + 1) : (X = C.year(), G = K), {
    week: G,
    year: X
  };
}
function weeksInYear(C, H, U) {
  var W = firstWeekOffset(C, H, U), K = firstWeekOffset(C + 1, H, U);
  return (daysInYear(C) - W + K) / 7;
}
addFormatToken("w", ["ww", 2], "wo", "week");
addFormatToken("W", ["WW", 2], "Wo", "isoWeek");
addUnitAlias("week", "w");
addUnitAlias("isoWeek", "W");
addUnitPriority("week", 5);
addUnitPriority("isoWeek", 5);
addRegexToken("w", match1to2);
addRegexToken("ww", match1to2, match2);
addRegexToken("W", match1to2);
addRegexToken("WW", match1to2, match2);
addWeekParseToken(
  ["w", "ww", "W", "WW"],
  function(C, H, U, W) {
    H[W.substr(0, 1)] = toInt(C);
  }
);
function localeWeek(C) {
  return weekOfYear(C, this._week.dow, this._week.doy).week;
}
var defaultLocaleWeek = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function localeFirstDayOfWeek() {
  return this._week.dow;
}
function localeFirstDayOfYear() {
  return this._week.doy;
}
function getSetWeek(C) {
  var H = this.localeData().week(this);
  return C == null ? H : this.add((C - H) * 7, "d");
}
function getSetISOWeek(C) {
  var H = weekOfYear(this, 1, 4).week;
  return C == null ? H : this.add((C - H) * 7, "d");
}
addFormatToken("d", 0, "do", "day");
addFormatToken("dd", 0, 0, function(C) {
  return this.localeData().weekdaysMin(this, C);
});
addFormatToken("ddd", 0, 0, function(C) {
  return this.localeData().weekdaysShort(this, C);
});
addFormatToken("dddd", 0, 0, function(C) {
  return this.localeData().weekdays(this, C);
});
addFormatToken("e", 0, 0, "weekday");
addFormatToken("E", 0, 0, "isoWeekday");
addUnitAlias("day", "d");
addUnitAlias("weekday", "e");
addUnitAlias("isoWeekday", "E");
addUnitPriority("day", 11);
addUnitPriority("weekday", 11);
addUnitPriority("isoWeekday", 11);
addRegexToken("d", match1to2);
addRegexToken("e", match1to2);
addRegexToken("E", match1to2);
addRegexToken("dd", function(C, H) {
  return H.weekdaysMinRegex(C);
});
addRegexToken("ddd", function(C, H) {
  return H.weekdaysShortRegex(C);
});
addRegexToken("dddd", function(C, H) {
  return H.weekdaysRegex(C);
});
addWeekParseToken(["dd", "ddd", "dddd"], function(C, H, U, W) {
  var K = U._locale.weekdaysParse(C, W, U._strict);
  K != null ? H.d = K : getParsingFlags(U).invalidWeekday = C;
});
addWeekParseToken(["d", "e", "E"], function(C, H, U, W) {
  H[W] = toInt(C);
});
function parseWeekday(C, H) {
  return typeof C != "string" ? C : isNaN(C) ? (C = H.weekdaysParse(C), typeof C == "number" ? C : null) : parseInt(C, 10);
}
function parseIsoWeekday(C, H) {
  return typeof C == "string" ? H.weekdaysParse(C) % 7 || 7 : isNaN(C) ? null : C;
}
function shiftWeekdays(C, H) {
  return C.slice(H, 7).concat(C.slice(0, H));
}
var defaultLocaleWeekdays = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), defaultLocaleWeekdaysShort = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), defaultLocaleWeekdaysMin = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), defaultWeekdaysRegex = matchWord, defaultWeekdaysShortRegex = matchWord, defaultWeekdaysMinRegex = matchWord;
function localeWeekdays(C, H) {
  var U = isArray$4(this._weekdays) ? this._weekdays : this._weekdays[C && C !== !0 && this._weekdays.isFormat.test(H) ? "format" : "standalone"];
  return C === !0 ? shiftWeekdays(U, this._week.dow) : C ? U[C.day()] : U;
}
function localeWeekdaysShort(C) {
  return C === !0 ? shiftWeekdays(this._weekdaysShort, this._week.dow) : C ? this._weekdaysShort[C.day()] : this._weekdaysShort;
}
function localeWeekdaysMin(C) {
  return C === !0 ? shiftWeekdays(this._weekdaysMin, this._week.dow) : C ? this._weekdaysMin[C.day()] : this._weekdaysMin;
}
function handleStrictParse$1(C, H, U) {
  var W, K, G, X = C.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], W = 0; W < 7; ++W)
      G = createUTC([2e3, 1]).day(W), this._minWeekdaysParse[W] = this.weekdaysMin(
        G,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[W] = this.weekdaysShort(
        G,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[W] = this.weekdays(G, "").toLocaleLowerCase();
  return U ? H === "dddd" ? (K = indexOf$1.call(this._weekdaysParse, X), K !== -1 ? K : null) : H === "ddd" ? (K = indexOf$1.call(this._shortWeekdaysParse, X), K !== -1 ? K : null) : (K = indexOf$1.call(this._minWeekdaysParse, X), K !== -1 ? K : null) : H === "dddd" ? (K = indexOf$1.call(this._weekdaysParse, X), K !== -1 || (K = indexOf$1.call(this._shortWeekdaysParse, X), K !== -1) ? K : (K = indexOf$1.call(this._minWeekdaysParse, X), K !== -1 ? K : null)) : H === "ddd" ? (K = indexOf$1.call(this._shortWeekdaysParse, X), K !== -1 || (K = indexOf$1.call(this._weekdaysParse, X), K !== -1) ? K : (K = indexOf$1.call(this._minWeekdaysParse, X), K !== -1 ? K : null)) : (K = indexOf$1.call(this._minWeekdaysParse, X), K !== -1 || (K = indexOf$1.call(this._weekdaysParse, X), K !== -1) ? K : (K = indexOf$1.call(this._shortWeekdaysParse, X), K !== -1 ? K : null));
}
function localeWeekdaysParse(C, H, U) {
  var W, K, G;
  if (this._weekdaysParseExact)
    return handleStrictParse$1.call(this, C, H, U);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), W = 0; W < 7; W++) {
    if (K = createUTC([2e3, 1]).day(W), U && !this._fullWeekdaysParse[W] && (this._fullWeekdaysParse[W] = new RegExp(
      "^" + this.weekdays(K, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[W] = new RegExp(
      "^" + this.weekdaysShort(K, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[W] = new RegExp(
      "^" + this.weekdaysMin(K, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[W] || (G = "^" + this.weekdays(K, "") + "|^" + this.weekdaysShort(K, "") + "|^" + this.weekdaysMin(K, ""), this._weekdaysParse[W] = new RegExp(G.replace(".", ""), "i")), U && H === "dddd" && this._fullWeekdaysParse[W].test(C))
      return W;
    if (U && H === "ddd" && this._shortWeekdaysParse[W].test(C))
      return W;
    if (U && H === "dd" && this._minWeekdaysParse[W].test(C))
      return W;
    if (!U && this._weekdaysParse[W].test(C))
      return W;
  }
}
function getSetDayOfWeek(C) {
  if (!this.isValid())
    return C != null ? this : NaN;
  var H = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
  return C != null ? (C = parseWeekday(C, this.localeData()), this.add(C - H, "d")) : H;
}
function getSetLocaleDayOfWeek(C) {
  if (!this.isValid())
    return C != null ? this : NaN;
  var H = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return C == null ? H : this.add(C - H, "d");
}
function getSetISODayOfWeek(C) {
  if (!this.isValid())
    return C != null ? this : NaN;
  if (C != null) {
    var H = parseIsoWeekday(C, this.localeData());
    return this.day(this.day() % 7 ? H : H - 7);
  } else
    return this.day() || 7;
}
function weekdaysRegex(C) {
  return this._weekdaysParseExact ? (hasOwnProp(this, "_weekdaysRegex") || computeWeekdaysParse.call(this), C ? this._weekdaysStrictRegex : this._weekdaysRegex) : (hasOwnProp(this, "_weekdaysRegex") || (this._weekdaysRegex = defaultWeekdaysRegex), this._weekdaysStrictRegex && C ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function weekdaysShortRegex(C) {
  return this._weekdaysParseExact ? (hasOwnProp(this, "_weekdaysRegex") || computeWeekdaysParse.call(this), C ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (hasOwnProp(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = defaultWeekdaysShortRegex), this._weekdaysShortStrictRegex && C ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function weekdaysMinRegex(C) {
  return this._weekdaysParseExact ? (hasOwnProp(this, "_weekdaysRegex") || computeWeekdaysParse.call(this), C ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (hasOwnProp(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = defaultWeekdaysMinRegex), this._weekdaysMinStrictRegex && C ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function computeWeekdaysParse() {
  function C(te, re) {
    return re.length - te.length;
  }
  var H = [], U = [], W = [], K = [], G, X, Z, Q, ee;
  for (G = 0; G < 7; G++)
    X = createUTC([2e3, 1]).day(G), Z = regexEscape(this.weekdaysMin(X, "")), Q = regexEscape(this.weekdaysShort(X, "")), ee = regexEscape(this.weekdays(X, "")), H.push(Z), U.push(Q), W.push(ee), K.push(Z), K.push(Q), K.push(ee);
  H.sort(C), U.sort(C), W.sort(C), K.sort(C), this._weekdaysRegex = new RegExp("^(" + K.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
    "^(" + W.join("|") + ")",
    "i"
  ), this._weekdaysShortStrictRegex = new RegExp(
    "^(" + U.join("|") + ")",
    "i"
  ), this._weekdaysMinStrictRegex = new RegExp(
    "^(" + H.join("|") + ")",
    "i"
  );
}
function hFormat() {
  return this.hours() % 12 || 12;
}
function kFormat() {
  return this.hours() || 24;
}
addFormatToken("H", ["HH", 2], 0, "hour");
addFormatToken("h", ["hh", 2], 0, hFormat);
addFormatToken("k", ["kk", 2], 0, kFormat);
addFormatToken("hmm", 0, 0, function() {
  return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2);
});
addFormatToken("hmmss", 0, 0, function() {
  return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
});
addFormatToken("Hmm", 0, 0, function() {
  return "" + this.hours() + zeroFill(this.minutes(), 2);
});
addFormatToken("Hmmss", 0, 0, function() {
  return "" + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
});
function meridiem(C, H) {
  addFormatToken(C, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      H
    );
  });
}
meridiem("a", !0);
meridiem("A", !1);
addUnitAlias("hour", "h");
addUnitPriority("hour", 13);
function matchMeridiem(C, H) {
  return H._meridiemParse;
}
addRegexToken("a", matchMeridiem);
addRegexToken("A", matchMeridiem);
addRegexToken("H", match1to2);
addRegexToken("h", match1to2);
addRegexToken("k", match1to2);
addRegexToken("HH", match1to2, match2);
addRegexToken("hh", match1to2, match2);
addRegexToken("kk", match1to2, match2);
addRegexToken("hmm", match3to4);
addRegexToken("hmmss", match5to6);
addRegexToken("Hmm", match3to4);
addRegexToken("Hmmss", match5to6);
addParseToken(["H", "HH"], HOUR);
addParseToken(["k", "kk"], function(C, H, U) {
  var W = toInt(C);
  H[HOUR] = W === 24 ? 0 : W;
});
addParseToken(["a", "A"], function(C, H, U) {
  U._isPm = U._locale.isPM(C), U._meridiem = C;
});
addParseToken(["h", "hh"], function(C, H, U) {
  H[HOUR] = toInt(C), getParsingFlags(U).bigHour = !0;
});
addParseToken("hmm", function(C, H, U) {
  var W = C.length - 2;
  H[HOUR] = toInt(C.substr(0, W)), H[MINUTE] = toInt(C.substr(W)), getParsingFlags(U).bigHour = !0;
});
addParseToken("hmmss", function(C, H, U) {
  var W = C.length - 4, K = C.length - 2;
  H[HOUR] = toInt(C.substr(0, W)), H[MINUTE] = toInt(C.substr(W, 2)), H[SECOND] = toInt(C.substr(K)), getParsingFlags(U).bigHour = !0;
});
addParseToken("Hmm", function(C, H, U) {
  var W = C.length - 2;
  H[HOUR] = toInt(C.substr(0, W)), H[MINUTE] = toInt(C.substr(W));
});
addParseToken("Hmmss", function(C, H, U) {
  var W = C.length - 4, K = C.length - 2;
  H[HOUR] = toInt(C.substr(0, W)), H[MINUTE] = toInt(C.substr(W, 2)), H[SECOND] = toInt(C.substr(K));
});
function localeIsPM(C) {
  return (C + "").toLowerCase().charAt(0) === "p";
}
var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i, getSetHour = makeGetSet("Hours", !0);
function localeMeridiem(C, H, U) {
  return C > 11 ? U ? "pm" : "PM" : U ? "am" : "AM";
}
var baseConfig = {
  calendar: defaultCalendar,
  longDateFormat: defaultLongDateFormat,
  invalidDate: defaultInvalidDate,
  ordinal: defaultOrdinal,
  dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
  relativeTime: defaultRelativeTime,
  months: defaultLocaleMonths,
  monthsShort: defaultLocaleMonthsShort,
  week: defaultLocaleWeek,
  weekdays: defaultLocaleWeekdays,
  weekdaysMin: defaultLocaleWeekdaysMin,
  weekdaysShort: defaultLocaleWeekdaysShort,
  meridiemParse: defaultLocaleMeridiemParse
}, locales = {}, localeFamilies = {}, globalLocale;
function commonPrefix(C, H) {
  var U, W = Math.min(C.length, H.length);
  for (U = 0; U < W; U += 1)
    if (C[U] !== H[U])
      return U;
  return W;
}
function normalizeLocale(C) {
  return C && C.toLowerCase().replace("_", "-");
}
function chooseLocale(C) {
  for (var H = 0, U, W, K, G; H < C.length; ) {
    for (G = normalizeLocale(C[H]).split("-"), U = G.length, W = normalizeLocale(C[H + 1]), W = W ? W.split("-") : null; U > 0; ) {
      if (K = loadLocale(G.slice(0, U).join("-")), K)
        return K;
      if (W && W.length >= U && commonPrefix(G, W) >= U - 1)
        break;
      U--;
    }
    H++;
  }
  return globalLocale;
}
function isLocaleNameSane(C) {
  return C.match("^[^/\\\\]*$") != null;
}
function loadLocale(C) {
  var H = null, U;
  if (locales[C] === void 0 && typeof module < "u" && module && module.exports && isLocaleNameSane(C))
    try {
      H = globalLocale._abbr, U = require, U("./locale/" + C), getSetGlobalLocale(H);
    } catch {
      locales[C] = null;
    }
  return locales[C];
}
function getSetGlobalLocale(C, H) {
  var U;
  return C && (isUndefined(H) ? U = getLocale(C) : U = defineLocale(C, H), U ? globalLocale = U : typeof console < "u" && console.warn && console.warn(
    "Locale " + C + " not found. Did you forget to load it?"
  )), globalLocale._abbr;
}
function defineLocale(C, H) {
  if (H !== null) {
    var U, W = baseConfig;
    if (H.abbr = C, locales[C] != null)
      deprecateSimple(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), W = locales[C]._config;
    else if (H.parentLocale != null)
      if (locales[H.parentLocale] != null)
        W = locales[H.parentLocale]._config;
      else if (U = loadLocale(H.parentLocale), U != null)
        W = U._config;
      else
        return localeFamilies[H.parentLocale] || (localeFamilies[H.parentLocale] = []), localeFamilies[H.parentLocale].push({
          name: C,
          config: H
        }), null;
    return locales[C] = new Locale(mergeConfigs(W, H)), localeFamilies[C] && localeFamilies[C].forEach(function(K) {
      defineLocale(K.name, K.config);
    }), getSetGlobalLocale(C), locales[C];
  } else
    return delete locales[C], null;
}
function updateLocale(C, H) {
  if (H != null) {
    var U, W, K = baseConfig;
    locales[C] != null && locales[C].parentLocale != null ? locales[C].set(mergeConfigs(locales[C]._config, H)) : (W = loadLocale(C), W != null && (K = W._config), H = mergeConfigs(K, H), W == null && (H.abbr = C), U = new Locale(H), U.parentLocale = locales[C], locales[C] = U), getSetGlobalLocale(C);
  } else
    locales[C] != null && (locales[C].parentLocale != null ? (locales[C] = locales[C].parentLocale, C === getSetGlobalLocale() && getSetGlobalLocale(C)) : locales[C] != null && delete locales[C]);
  return locales[C];
}
function getLocale(C) {
  var H;
  if (C && C._locale && C._locale._abbr && (C = C._locale._abbr), !C)
    return globalLocale;
  if (!isArray$4(C)) {
    if (H = loadLocale(C), H)
      return H;
    C = [C];
  }
  return chooseLocale(C);
}
function listLocales() {
  return keys(locales);
}
function checkOverflow(C) {
  var H, U = C._a;
  return U && getParsingFlags(C).overflow === -2 && (H = U[MONTH] < 0 || U[MONTH] > 11 ? MONTH : U[DATE] < 1 || U[DATE] > daysInMonth(U[YEAR], U[MONTH]) ? DATE : U[HOUR] < 0 || U[HOUR] > 24 || U[HOUR] === 24 && (U[MINUTE] !== 0 || U[SECOND] !== 0 || U[MILLISECOND] !== 0) ? HOUR : U[MINUTE] < 0 || U[MINUTE] > 59 ? MINUTE : U[SECOND] < 0 || U[SECOND] > 59 ? SECOND : U[MILLISECOND] < 0 || U[MILLISECOND] > 999 ? MILLISECOND : -1, getParsingFlags(C)._overflowDayOfYear && (H < YEAR || H > DATE) && (H = DATE), getParsingFlags(C)._overflowWeeks && H === -1 && (H = WEEK), getParsingFlags(C)._overflowWeekday && H === -1 && (H = WEEKDAY), getParsingFlags(C).overflow = H), C;
}
var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, tzRegex = /Z|[+-]\d\d(?::?\d\d)?/, isoDates = [
  ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
  ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
  ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
  ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
  ["YYYY-DDD", /\d{4}-\d{3}/],
  ["YYYY-MM", /\d{4}-\d\d/, !1],
  ["YYYYYYMMDD", /[+-]\d{10}/],
  ["YYYYMMDD", /\d{8}/],
  ["GGGG[W]WWE", /\d{4}W\d{3}/],
  ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
  ["YYYYDDD", /\d{7}/],
  ["YYYYMM", /\d{6}/, !1],
  ["YYYY", /\d{4}/, !1]
], isoTimes = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], aspNetJsonRegex = /^\/?Date\((-?\d+)/i, rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, obsOffsets = {
  UT: 0,
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function configFromISO(C) {
  var H, U, W = C._i, K = extendedIsoRegex.exec(W) || basicIsoRegex.exec(W), G, X, Z, Q, ee = isoDates.length, te = isoTimes.length;
  if (K) {
    for (getParsingFlags(C).iso = !0, H = 0, U = ee; H < U; H++)
      if (isoDates[H][1].exec(K[1])) {
        X = isoDates[H][0], G = isoDates[H][2] !== !1;
        break;
      }
    if (X == null) {
      C._isValid = !1;
      return;
    }
    if (K[3]) {
      for (H = 0, U = te; H < U; H++)
        if (isoTimes[H][1].exec(K[3])) {
          Z = (K[2] || " ") + isoTimes[H][0];
          break;
        }
      if (Z == null) {
        C._isValid = !1;
        return;
      }
    }
    if (!G && Z != null) {
      C._isValid = !1;
      return;
    }
    if (K[4])
      if (tzRegex.exec(K[4]))
        Q = "Z";
      else {
        C._isValid = !1;
        return;
      }
    C._f = X + (Z || "") + (Q || ""), configFromStringAndFormat(C);
  } else
    C._isValid = !1;
}
function extractFromRFC2822Strings(C, H, U, W, K, G) {
  var X = [
    untruncateYear(C),
    defaultLocaleMonthsShort.indexOf(H),
    parseInt(U, 10),
    parseInt(W, 10),
    parseInt(K, 10)
  ];
  return G && X.push(parseInt(G, 10)), X;
}
function untruncateYear(C) {
  var H = parseInt(C, 10);
  return H <= 49 ? 2e3 + H : H <= 999 ? 1900 + H : H;
}
function preprocessRFC2822(C) {
  return C.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function checkWeekday(C, H, U) {
  if (C) {
    var W = defaultLocaleWeekdaysShort.indexOf(C), K = new Date(
      H[0],
      H[1],
      H[2]
    ).getDay();
    if (W !== K)
      return getParsingFlags(U).weekdayMismatch = !0, U._isValid = !1, !1;
  }
  return !0;
}
function calculateOffset(C, H, U) {
  if (C)
    return obsOffsets[C];
  if (H)
    return 0;
  var W = parseInt(U, 10), K = W % 100, G = (W - K) / 100;
  return G * 60 + K;
}
function configFromRFC2822(C) {
  var H = rfc2822.exec(preprocessRFC2822(C._i)), U;
  if (H) {
    if (U = extractFromRFC2822Strings(
      H[4],
      H[3],
      H[2],
      H[5],
      H[6],
      H[7]
    ), !checkWeekday(H[1], U, C))
      return;
    C._a = U, C._tzm = calculateOffset(H[8], H[9], H[10]), C._d = createUTCDate.apply(null, C._a), C._d.setUTCMinutes(C._d.getUTCMinutes() - C._tzm), getParsingFlags(C).rfc2822 = !0;
  } else
    C._isValid = !1;
}
function configFromString(C) {
  var H = aspNetJsonRegex.exec(C._i);
  if (H !== null) {
    C._d = /* @__PURE__ */ new Date(+H[1]);
    return;
  }
  if (configFromISO(C), C._isValid === !1)
    delete C._isValid;
  else
    return;
  if (configFromRFC2822(C), C._isValid === !1)
    delete C._isValid;
  else
    return;
  C._strict ? C._isValid = !1 : hooks.createFromInputFallback(C);
}
hooks.createFromInputFallback = deprecate(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(C) {
    C._d = /* @__PURE__ */ new Date(C._i + (C._useUTC ? " UTC" : ""));
  }
);
function defaults$2(C, H, U) {
  return C ?? H ?? U;
}
function currentDateArray(C) {
  var H = new Date(hooks.now());
  return C._useUTC ? [
    H.getUTCFullYear(),
    H.getUTCMonth(),
    H.getUTCDate()
  ] : [H.getFullYear(), H.getMonth(), H.getDate()];
}
function configFromArray(C) {
  var H, U, W = [], K, G, X;
  if (!C._d) {
    for (K = currentDateArray(C), C._w && C._a[DATE] == null && C._a[MONTH] == null && dayOfYearFromWeekInfo(C), C._dayOfYear != null && (X = defaults$2(C._a[YEAR], K[YEAR]), (C._dayOfYear > daysInYear(X) || C._dayOfYear === 0) && (getParsingFlags(C)._overflowDayOfYear = !0), U = createUTCDate(X, 0, C._dayOfYear), C._a[MONTH] = U.getUTCMonth(), C._a[DATE] = U.getUTCDate()), H = 0; H < 3 && C._a[H] == null; ++H)
      C._a[H] = W[H] = K[H];
    for (; H < 7; H++)
      C._a[H] = W[H] = C._a[H] == null ? H === 2 ? 1 : 0 : C._a[H];
    C._a[HOUR] === 24 && C._a[MINUTE] === 0 && C._a[SECOND] === 0 && C._a[MILLISECOND] === 0 && (C._nextDay = !0, C._a[HOUR] = 0), C._d = (C._useUTC ? createUTCDate : createDate).apply(
      null,
      W
    ), G = C._useUTC ? C._d.getUTCDay() : C._d.getDay(), C._tzm != null && C._d.setUTCMinutes(C._d.getUTCMinutes() - C._tzm), C._nextDay && (C._a[HOUR] = 24), C._w && typeof C._w.d < "u" && C._w.d !== G && (getParsingFlags(C).weekdayMismatch = !0);
  }
}
function dayOfYearFromWeekInfo(C) {
  var H, U, W, K, G, X, Z, Q, ee;
  H = C._w, H.GG != null || H.W != null || H.E != null ? (G = 1, X = 4, U = defaults$2(
    H.GG,
    C._a[YEAR],
    weekOfYear(createLocal(), 1, 4).year
  ), W = defaults$2(H.W, 1), K = defaults$2(H.E, 1), (K < 1 || K > 7) && (Q = !0)) : (G = C._locale._week.dow, X = C._locale._week.doy, ee = weekOfYear(createLocal(), G, X), U = defaults$2(H.gg, C._a[YEAR], ee.year), W = defaults$2(H.w, ee.week), H.d != null ? (K = H.d, (K < 0 || K > 6) && (Q = !0)) : H.e != null ? (K = H.e + G, (H.e < 0 || H.e > 6) && (Q = !0)) : K = G), W < 1 || W > weeksInYear(U, G, X) ? getParsingFlags(C)._overflowWeeks = !0 : Q != null ? getParsingFlags(C)._overflowWeekday = !0 : (Z = dayOfYearFromWeeks(U, W, K, G, X), C._a[YEAR] = Z.year, C._dayOfYear = Z.dayOfYear);
}
hooks.ISO_8601 = function() {
};
hooks.RFC_2822 = function() {
};
function configFromStringAndFormat(C) {
  if (C._f === hooks.ISO_8601) {
    configFromISO(C);
    return;
  }
  if (C._f === hooks.RFC_2822) {
    configFromRFC2822(C);
    return;
  }
  C._a = [], getParsingFlags(C).empty = !0;
  var H = "" + C._i, U, W, K, G, X, Z = H.length, Q = 0, ee, te;
  for (K = expandFormat(C._f, C._locale).match(formattingTokens) || [], te = K.length, U = 0; U < te; U++)
    G = K[U], W = (H.match(getParseRegexForToken(G, C)) || [])[0], W && (X = H.substr(0, H.indexOf(W)), X.length > 0 && getParsingFlags(C).unusedInput.push(X), H = H.slice(
      H.indexOf(W) + W.length
    ), Q += W.length), formatTokenFunctions[G] ? (W ? getParsingFlags(C).empty = !1 : getParsingFlags(C).unusedTokens.push(G), addTimeToArrayFromToken(G, W, C)) : C._strict && !W && getParsingFlags(C).unusedTokens.push(G);
  getParsingFlags(C).charsLeftOver = Z - Q, H.length > 0 && getParsingFlags(C).unusedInput.push(H), C._a[HOUR] <= 12 && getParsingFlags(C).bigHour === !0 && C._a[HOUR] > 0 && (getParsingFlags(C).bigHour = void 0), getParsingFlags(C).parsedDateParts = C._a.slice(0), getParsingFlags(C).meridiem = C._meridiem, C._a[HOUR] = meridiemFixWrap(
    C._locale,
    C._a[HOUR],
    C._meridiem
  ), ee = getParsingFlags(C).era, ee !== null && (C._a[YEAR] = C._locale.erasConvertYear(ee, C._a[YEAR])), configFromArray(C), checkOverflow(C);
}
function meridiemFixWrap(C, H, U) {
  var W;
  return U == null ? H : C.meridiemHour != null ? C.meridiemHour(H, U) : (C.isPM != null && (W = C.isPM(U), W && H < 12 && (H += 12), !W && H === 12 && (H = 0)), H);
}
function configFromStringAndArray(C) {
  var H, U, W, K, G, X, Z = !1, Q = C._f.length;
  if (Q === 0) {
    getParsingFlags(C).invalidFormat = !0, C._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (K = 0; K < Q; K++)
    G = 0, X = !1, H = copyConfig({}, C), C._useUTC != null && (H._useUTC = C._useUTC), H._f = C._f[K], configFromStringAndFormat(H), isValid(H) && (X = !0), G += getParsingFlags(H).charsLeftOver, G += getParsingFlags(H).unusedTokens.length * 10, getParsingFlags(H).score = G, Z ? G < W && (W = G, U = H) : (W == null || G < W || X) && (W = G, U = H, X && (Z = !0));
  extend(C, U || H);
}
function configFromObject(C) {
  if (!C._d) {
    var H = normalizeObjectUnits(C._i), U = H.day === void 0 ? H.date : H.day;
    C._a = map(
      [H.year, H.month, U, H.hour, H.minute, H.second, H.millisecond],
      function(W) {
        return W && parseInt(W, 10);
      }
    ), configFromArray(C);
  }
}
function createFromConfig(C) {
  var H = new Moment(checkOverflow(prepareConfig(C)));
  return H._nextDay && (H.add(1, "d"), H._nextDay = void 0), H;
}
function prepareConfig(C) {
  var H = C._i, U = C._f;
  return C._locale = C._locale || getLocale(C._l), H === null || U === void 0 && H === "" ? createInvalid({ nullInput: !0 }) : (typeof H == "string" && (C._i = H = C._locale.preparse(H)), isMoment(H) ? new Moment(checkOverflow(H)) : (isDate$1(H) ? C._d = H : isArray$4(U) ? configFromStringAndArray(C) : U ? configFromStringAndFormat(C) : configFromInput(C), isValid(C) || (C._d = null), C));
}
function configFromInput(C) {
  var H = C._i;
  isUndefined(H) ? C._d = new Date(hooks.now()) : isDate$1(H) ? C._d = new Date(H.valueOf()) : typeof H == "string" ? configFromString(C) : isArray$4(H) ? (C._a = map(H.slice(0), function(U) {
    return parseInt(U, 10);
  }), configFromArray(C)) : isObject(H) ? configFromObject(C) : isNumber$1(H) ? C._d = new Date(H) : hooks.createFromInputFallback(C);
}
function createLocalOrUTC(C, H, U, W, K) {
  var G = {};
  return (H === !0 || H === !1) && (W = H, H = void 0), (U === !0 || U === !1) && (W = U, U = void 0), (isObject(C) && isObjectEmpty(C) || isArray$4(C) && C.length === 0) && (C = void 0), G._isAMomentObject = !0, G._useUTC = G._isUTC = K, G._l = U, G._i = C, G._f = H, G._strict = W, createFromConfig(G);
}
function createLocal(C, H, U, W) {
  return createLocalOrUTC(C, H, U, W, !1);
}
var prototypeMin = deprecate(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var C = createLocal.apply(null, arguments);
    return this.isValid() && C.isValid() ? C < this ? this : C : createInvalid();
  }
), prototypeMax = deprecate(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var C = createLocal.apply(null, arguments);
    return this.isValid() && C.isValid() ? C > this ? this : C : createInvalid();
  }
);
function pickBy(C, H) {
  var U, W;
  if (H.length === 1 && isArray$4(H[0]) && (H = H[0]), !H.length)
    return createLocal();
  for (U = H[0], W = 1; W < H.length; ++W)
    (!H[W].isValid() || H[W][C](U)) && (U = H[W]);
  return U;
}
function min() {
  var C = [].slice.call(arguments, 0);
  return pickBy("isBefore", C);
}
function max$1() {
  var C = [].slice.call(arguments, 0);
  return pickBy("isAfter", C);
}
var now = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, ordering = [
  "year",
  "quarter",
  "month",
  "week",
  "day",
  "hour",
  "minute",
  "second",
  "millisecond"
];
function isDurationValid(C) {
  var H, U = !1, W, K = ordering.length;
  for (H in C)
    if (hasOwnProp(C, H) && !(indexOf$1.call(ordering, H) !== -1 && (C[H] == null || !isNaN(C[H]))))
      return !1;
  for (W = 0; W < K; ++W)
    if (C[ordering[W]]) {
      if (U)
        return !1;
      parseFloat(C[ordering[W]]) !== toInt(C[ordering[W]]) && (U = !0);
    }
  return !0;
}
function isValid$1() {
  return this._isValid;
}
function createInvalid$1() {
  return createDuration(NaN);
}
function Duration(C) {
  var H = normalizeObjectUnits(C), U = H.year || 0, W = H.quarter || 0, K = H.month || 0, G = H.week || H.isoWeek || 0, X = H.day || 0, Z = H.hour || 0, Q = H.minute || 0, ee = H.second || 0, te = H.millisecond || 0;
  this._isValid = isDurationValid(H), this._milliseconds = +te + ee * 1e3 + // 1000
  Q * 6e4 + // 1000 * 60
  Z * 1e3 * 60 * 60, this._days = +X + G * 7, this._months = +K + W * 3 + U * 12, this._data = {}, this._locale = getLocale(), this._bubble();
}
function isDuration(C) {
  return C instanceof Duration;
}
function absRound(C) {
  return C < 0 ? Math.round(-1 * C) * -1 : Math.round(C);
}
function compareArrays(C, H, U) {
  var W = Math.min(C.length, H.length), K = Math.abs(C.length - H.length), G = 0, X;
  for (X = 0; X < W; X++)
    (U && C[X] !== H[X] || !U && toInt(C[X]) !== toInt(H[X])) && G++;
  return G + K;
}
function offset(C, H) {
  addFormatToken(C, 0, 0, function() {
    var U = this.utcOffset(), W = "+";
    return U < 0 && (U = -U, W = "-"), W + zeroFill(~~(U / 60), 2) + H + zeroFill(~~U % 60, 2);
  });
}
offset("Z", ":");
offset("ZZ", "");
addRegexToken("Z", matchShortOffset);
addRegexToken("ZZ", matchShortOffset);
addParseToken(["Z", "ZZ"], function(C, H, U) {
  U._useUTC = !0, U._tzm = offsetFromString(matchShortOffset, C);
});
var chunkOffset = /([\+\-]|\d\d)/gi;
function offsetFromString(C, H) {
  var U = (H || "").match(C), W, K, G;
  return U === null ? null : (W = U[U.length - 1] || [], K = (W + "").match(chunkOffset) || ["-", 0, 0], G = +(K[1] * 60) + toInt(K[2]), G === 0 ? 0 : K[0] === "+" ? G : -G);
}
function cloneWithOffset(C, H) {
  var U, W;
  return H._isUTC ? (U = H.clone(), W = (isMoment(C) || isDate$1(C) ? C.valueOf() : createLocal(C).valueOf()) - U.valueOf(), U._d.setTime(U._d.valueOf() + W), hooks.updateOffset(U, !1), U) : createLocal(C).local();
}
function getDateOffset(C) {
  return -Math.round(C._d.getTimezoneOffset());
}
hooks.updateOffset = function() {
};
function getSetOffset(C, H, U) {
  var W = this._offset || 0, K;
  if (!this.isValid())
    return C != null ? this : NaN;
  if (C != null) {
    if (typeof C == "string") {
      if (C = offsetFromString(matchShortOffset, C), C === null)
        return this;
    } else
      Math.abs(C) < 16 && !U && (C = C * 60);
    return !this._isUTC && H && (K = getDateOffset(this)), this._offset = C, this._isUTC = !0, K != null && this.add(K, "m"), W !== C && (!H || this._changeInProgress ? addSubtract(
      this,
      createDuration(C - W, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, hooks.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? W : getDateOffset(this);
}
function getSetZone(C, H) {
  return C != null ? (typeof C != "string" && (C = -C), this.utcOffset(C, H), this) : -this.utcOffset();
}
function setOffsetToUTC(C) {
  return this.utcOffset(0, C);
}
function setOffsetToLocal(C) {
  return this._isUTC && (this.utcOffset(0, C), this._isUTC = !1, C && this.subtract(getDateOffset(this), "m")), this;
}
function setOffsetToParsedOffset() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var C = offsetFromString(matchOffset, this._i);
    C != null ? this.utcOffset(C) : this.utcOffset(0, !0);
  }
  return this;
}
function hasAlignedHourOffset(C) {
  return this.isValid() ? (C = C ? createLocal(C).utcOffset() : 0, (this.utcOffset() - C) % 60 === 0) : !1;
}
function isDaylightSavingTime() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function isDaylightSavingTimeShifted() {
  if (!isUndefined(this._isDSTShifted))
    return this._isDSTShifted;
  var C = {}, H;
  return copyConfig(C, this), C = prepareConfig(C), C._a ? (H = C._isUTC ? createUTC(C._a) : createLocal(C._a), this._isDSTShifted = this.isValid() && compareArrays(C._a, H.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function isLocal() {
  return this.isValid() ? !this._isUTC : !1;
}
function isUtcOffset() {
  return this.isValid() ? this._isUTC : !1;
}
function isUtc() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function createDuration(C, H) {
  var U = C, W = null, K, G, X;
  return isDuration(C) ? U = {
    ms: C._milliseconds,
    d: C._days,
    M: C._months
  } : isNumber$1(C) || !isNaN(+C) ? (U = {}, H ? U[H] = +C : U.milliseconds = +C) : (W = aspNetRegex.exec(C)) ? (K = W[1] === "-" ? -1 : 1, U = {
    y: 0,
    d: toInt(W[DATE]) * K,
    h: toInt(W[HOUR]) * K,
    m: toInt(W[MINUTE]) * K,
    s: toInt(W[SECOND]) * K,
    ms: toInt(absRound(W[MILLISECOND] * 1e3)) * K
    // the millisecond decimal point is included in the match
  }) : (W = isoRegex.exec(C)) ? (K = W[1] === "-" ? -1 : 1, U = {
    y: parseIso(W[2], K),
    M: parseIso(W[3], K),
    w: parseIso(W[4], K),
    d: parseIso(W[5], K),
    h: parseIso(W[6], K),
    m: parseIso(W[7], K),
    s: parseIso(W[8], K)
  }) : U == null ? U = {} : typeof U == "object" && ("from" in U || "to" in U) && (X = momentsDifference(
    createLocal(U.from),
    createLocal(U.to)
  ), U = {}, U.ms = X.milliseconds, U.M = X.months), G = new Duration(U), isDuration(C) && hasOwnProp(C, "_locale") && (G._locale = C._locale), isDuration(C) && hasOwnProp(C, "_isValid") && (G._isValid = C._isValid), G;
}
createDuration.fn = Duration.prototype;
createDuration.invalid = createInvalid$1;
function parseIso(C, H) {
  var U = C && parseFloat(C.replace(",", "."));
  return (isNaN(U) ? 0 : U) * H;
}
function positiveMomentsDifference(C, H) {
  var U = {};
  return U.months = H.month() - C.month() + (H.year() - C.year()) * 12, C.clone().add(U.months, "M").isAfter(H) && --U.months, U.milliseconds = +H - +C.clone().add(U.months, "M"), U;
}
function momentsDifference(C, H) {
  var U;
  return C.isValid() && H.isValid() ? (H = cloneWithOffset(H, C), C.isBefore(H) ? U = positiveMomentsDifference(C, H) : (U = positiveMomentsDifference(H, C), U.milliseconds = -U.milliseconds, U.months = -U.months), U) : { milliseconds: 0, months: 0 };
}
function createAdder(C, H) {
  return function(U, W) {
    var K, G;
    return W !== null && !isNaN(+W) && (deprecateSimple(
      H,
      "moment()." + H + "(period, number) is deprecated. Please use moment()." + H + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), G = U, U = W, W = G), K = createDuration(U, W), addSubtract(this, K, C), this;
  };
}
function addSubtract(C, H, U, W) {
  var K = H._milliseconds, G = absRound(H._days), X = absRound(H._months);
  C.isValid() && (W = W ?? !0, X && setMonth(C, get(C, "Month") + X * U), G && set$1(C, "Date", get(C, "Date") + G * U), K && C._d.setTime(C._d.valueOf() + K * U), W && hooks.updateOffset(C, G || X));
}
var add = createAdder(1, "add"), subtract = createAdder(-1, "subtract");
function isString$1(C) {
  return typeof C == "string" || C instanceof String;
}
function isMomentInput(C) {
  return isMoment(C) || isDate$1(C) || isString$1(C) || isNumber$1(C) || isNumberOrStringArray(C) || isMomentInputObject(C) || C === null || C === void 0;
}
function isMomentInputObject(C) {
  var H = isObject(C) && !isObjectEmpty(C), U = !1, W = [
    "years",
    "year",
    "y",
    "months",
    "month",
    "M",
    "days",
    "day",
    "d",
    "dates",
    "date",
    "D",
    "hours",
    "hour",
    "h",
    "minutes",
    "minute",
    "m",
    "seconds",
    "second",
    "s",
    "milliseconds",
    "millisecond",
    "ms"
  ], K, G, X = W.length;
  for (K = 0; K < X; K += 1)
    G = W[K], U = U || hasOwnProp(C, G);
  return H && U;
}
function isNumberOrStringArray(C) {
  var H = isArray$4(C), U = !1;
  return H && (U = C.filter(function(W) {
    return !isNumber$1(W) && isString$1(C);
  }).length === 0), H && U;
}
function isCalendarSpec(C) {
  var H = isObject(C) && !isObjectEmpty(C), U = !1, W = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], K, G;
  for (K = 0; K < W.length; K += 1)
    G = W[K], U = U || hasOwnProp(C, G);
  return H && U;
}
function getCalendarFormat(C, H) {
  var U = C.diff(H, "days", !0);
  return U < -6 ? "sameElse" : U < -1 ? "lastWeek" : U < 0 ? "lastDay" : U < 1 ? "sameDay" : U < 2 ? "nextDay" : U < 7 ? "nextWeek" : "sameElse";
}
function calendar$1(C, H) {
  arguments.length === 1 && (arguments[0] ? isMomentInput(arguments[0]) ? (C = arguments[0], H = void 0) : isCalendarSpec(arguments[0]) && (H = arguments[0], C = void 0) : (C = void 0, H = void 0));
  var U = C || createLocal(), W = cloneWithOffset(U, this).startOf("day"), K = hooks.calendarFormat(this, W) || "sameElse", G = H && (isFunction(H[K]) ? H[K].call(this, U) : H[K]);
  return this.format(
    G || this.localeData().calendar(K, this, createLocal(U))
  );
}
function clone() {
  return new Moment(this);
}
function isAfter(C, H) {
  var U = isMoment(C) ? C : createLocal(C);
  return this.isValid() && U.isValid() ? (H = normalizeUnits(H) || "millisecond", H === "millisecond" ? this.valueOf() > U.valueOf() : U.valueOf() < this.clone().startOf(H).valueOf()) : !1;
}
function isBefore(C, H) {
  var U = isMoment(C) ? C : createLocal(C);
  return this.isValid() && U.isValid() ? (H = normalizeUnits(H) || "millisecond", H === "millisecond" ? this.valueOf() < U.valueOf() : this.clone().endOf(H).valueOf() < U.valueOf()) : !1;
}
function isBetween(C, H, U, W) {
  var K = isMoment(C) ? C : createLocal(C), G = isMoment(H) ? H : createLocal(H);
  return this.isValid() && K.isValid() && G.isValid() ? (W = W || "()", (W[0] === "(" ? this.isAfter(K, U) : !this.isBefore(K, U)) && (W[1] === ")" ? this.isBefore(G, U) : !this.isAfter(G, U))) : !1;
}
function isSame(C, H) {
  var U = isMoment(C) ? C : createLocal(C), W;
  return this.isValid() && U.isValid() ? (H = normalizeUnits(H) || "millisecond", H === "millisecond" ? this.valueOf() === U.valueOf() : (W = U.valueOf(), this.clone().startOf(H).valueOf() <= W && W <= this.clone().endOf(H).valueOf())) : !1;
}
function isSameOrAfter(C, H) {
  return this.isSame(C, H) || this.isAfter(C, H);
}
function isSameOrBefore(C, H) {
  return this.isSame(C, H) || this.isBefore(C, H);
}
function diff(C, H, U) {
  var W, K, G;
  if (!this.isValid())
    return NaN;
  if (W = cloneWithOffset(C, this), !W.isValid())
    return NaN;
  switch (K = (W.utcOffset() - this.utcOffset()) * 6e4, H = normalizeUnits(H), H) {
    case "year":
      G = monthDiff(this, W) / 12;
      break;
    case "month":
      G = monthDiff(this, W);
      break;
    case "quarter":
      G = monthDiff(this, W) / 3;
      break;
    case "second":
      G = (this - W) / 1e3;
      break;
    case "minute":
      G = (this - W) / 6e4;
      break;
    case "hour":
      G = (this - W) / 36e5;
      break;
    case "day":
      G = (this - W - K) / 864e5;
      break;
    case "week":
      G = (this - W - K) / 6048e5;
      break;
    default:
      G = this - W;
  }
  return U ? G : absFloor(G);
}
function monthDiff(C, H) {
  if (C.date() < H.date())
    return -monthDiff(H, C);
  var U = (H.year() - C.year()) * 12 + (H.month() - C.month()), W = C.clone().add(U, "months"), K, G;
  return H - W < 0 ? (K = C.clone().add(U - 1, "months"), G = (H - W) / (W - K)) : (K = C.clone().add(U + 1, "months"), G = (H - W) / (K - W)), -(U + G) || 0;
}
hooks.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
hooks.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function toString() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function toISOString(C) {
  if (!this.isValid())
    return null;
  var H = C !== !0, U = H ? this.clone().utc() : this;
  return U.year() < 0 || U.year() > 9999 ? formatMoment(
    U,
    H ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : isFunction(Date.prototype.toISOString) ? H ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", formatMoment(U, "Z")) : formatMoment(
    U,
    H ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function inspect$1() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var C = "moment", H = "", U, W, K, G;
  return this.isLocal() || (C = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", H = "Z"), U = "[" + C + '("]', W = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", K = "-MM-DD[T]HH:mm:ss.SSS", G = H + '[")]', this.format(U + W + K + G);
}
function format(C) {
  C || (C = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat);
  var H = formatMoment(this, C);
  return this.localeData().postformat(H);
}
function from(C, H) {
  return this.isValid() && (isMoment(C) && C.isValid() || createLocal(C).isValid()) ? createDuration({ to: this, from: C }).locale(this.locale()).humanize(!H) : this.localeData().invalidDate();
}
function fromNow(C) {
  return this.from(createLocal(), C);
}
function to(C, H) {
  return this.isValid() && (isMoment(C) && C.isValid() || createLocal(C).isValid()) ? createDuration({ from: this, to: C }).locale(this.locale()).humanize(!H) : this.localeData().invalidDate();
}
function toNow(C) {
  return this.to(createLocal(), C);
}
function locale$4(C) {
  var H;
  return C === void 0 ? this._locale._abbr : (H = getLocale(C), H != null && (this._locale = H), this);
}
var lang = deprecate(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(C) {
    return C === void 0 ? this.localeData() : this.locale(C);
  }
);
function localeData() {
  return this._locale;
}
var MS_PER_SECOND = 1e3, MS_PER_MINUTE = 60 * MS_PER_SECOND, MS_PER_HOUR = 60 * MS_PER_MINUTE, MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;
function mod$1(C, H) {
  return (C % H + H) % H;
}
function localStartOfDate(C, H, U) {
  return C < 100 && C >= 0 ? new Date(C + 400, H, U) - MS_PER_400_YEARS : new Date(C, H, U).valueOf();
}
function utcStartOfDate(C, H, U) {
  return C < 100 && C >= 0 ? Date.UTC(C + 400, H, U) - MS_PER_400_YEARS : Date.UTC(C, H, U);
}
function startOf(C) {
  var H, U;
  if (C = normalizeUnits(C), C === void 0 || C === "millisecond" || !this.isValid())
    return this;
  switch (U = this._isUTC ? utcStartOfDate : localStartOfDate, C) {
    case "year":
      H = U(this.year(), 0, 1);
      break;
    case "quarter":
      H = U(
        this.year(),
        this.month() - this.month() % 3,
        1
      );
      break;
    case "month":
      H = U(this.year(), this.month(), 1);
      break;
    case "week":
      H = U(
        this.year(),
        this.month(),
        this.date() - this.weekday()
      );
      break;
    case "isoWeek":
      H = U(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1)
      );
      break;
    case "day":
    case "date":
      H = U(this.year(), this.month(), this.date());
      break;
    case "hour":
      H = this._d.valueOf(), H -= mod$1(
        H + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
        MS_PER_HOUR
      );
      break;
    case "minute":
      H = this._d.valueOf(), H -= mod$1(H, MS_PER_MINUTE);
      break;
    case "second":
      H = this._d.valueOf(), H -= mod$1(H, MS_PER_SECOND);
      break;
  }
  return this._d.setTime(H), hooks.updateOffset(this, !0), this;
}
function endOf(C) {
  var H, U;
  if (C = normalizeUnits(C), C === void 0 || C === "millisecond" || !this.isValid())
    return this;
  switch (U = this._isUTC ? utcStartOfDate : localStartOfDate, C) {
    case "year":
      H = U(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      H = U(
        this.year(),
        this.month() - this.month() % 3 + 3,
        1
      ) - 1;
      break;
    case "month":
      H = U(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      H = U(
        this.year(),
        this.month(),
        this.date() - this.weekday() + 7
      ) - 1;
      break;
    case "isoWeek":
      H = U(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1) + 7
      ) - 1;
      break;
    case "day":
    case "date":
      H = U(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      H = this._d.valueOf(), H += MS_PER_HOUR - mod$1(
        H + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
        MS_PER_HOUR
      ) - 1;
      break;
    case "minute":
      H = this._d.valueOf(), H += MS_PER_MINUTE - mod$1(H, MS_PER_MINUTE) - 1;
      break;
    case "second":
      H = this._d.valueOf(), H += MS_PER_SECOND - mod$1(H, MS_PER_SECOND) - 1;
      break;
  }
  return this._d.setTime(H), hooks.updateOffset(this, !0), this;
}
function valueOf() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function unix() {
  return Math.floor(this.valueOf() / 1e3);
}
function toDate() {
  return new Date(this.valueOf());
}
function toArray() {
  var C = this;
  return [
    C.year(),
    C.month(),
    C.date(),
    C.hour(),
    C.minute(),
    C.second(),
    C.millisecond()
  ];
}
function toObject() {
  var C = this;
  return {
    years: C.year(),
    months: C.month(),
    date: C.date(),
    hours: C.hours(),
    minutes: C.minutes(),
    seconds: C.seconds(),
    milliseconds: C.milliseconds()
  };
}
function toJSON() {
  return this.isValid() ? this.toISOString() : null;
}
function isValid$2() {
  return isValid(this);
}
function parsingFlags() {
  return extend({}, getParsingFlags(this));
}
function invalidAt() {
  return getParsingFlags(this).overflow;
}
function creationData() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
addFormatToken("N", 0, 0, "eraAbbr");
addFormatToken("NN", 0, 0, "eraAbbr");
addFormatToken("NNN", 0, 0, "eraAbbr");
addFormatToken("NNNN", 0, 0, "eraName");
addFormatToken("NNNNN", 0, 0, "eraNarrow");
addFormatToken("y", ["y", 1], "yo", "eraYear");
addFormatToken("y", ["yy", 2], 0, "eraYear");
addFormatToken("y", ["yyy", 3], 0, "eraYear");
addFormatToken("y", ["yyyy", 4], 0, "eraYear");
addRegexToken("N", matchEraAbbr);
addRegexToken("NN", matchEraAbbr);
addRegexToken("NNN", matchEraAbbr);
addRegexToken("NNNN", matchEraName);
addRegexToken("NNNNN", matchEraNarrow);
addParseToken(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(C, H, U, W) {
    var K = U._locale.erasParse(C, W, U._strict);
    K ? getParsingFlags(U).era = K : getParsingFlags(U).invalidEra = C;
  }
);
addRegexToken("y", matchUnsigned);
addRegexToken("yy", matchUnsigned);
addRegexToken("yyy", matchUnsigned);
addRegexToken("yyyy", matchUnsigned);
addRegexToken("yo", matchEraYearOrdinal);
addParseToken(["y", "yy", "yyy", "yyyy"], YEAR);
addParseToken(["yo"], function(C, H, U, W) {
  var K;
  U._locale._eraYearOrdinalRegex && (K = C.match(U._locale._eraYearOrdinalRegex)), U._locale.eraYearOrdinalParse ? H[YEAR] = U._locale.eraYearOrdinalParse(C, K) : H[YEAR] = parseInt(C, 10);
});
function localeEras(C, H) {
  var U, W, K, G = this._eras || getLocale("en")._eras;
  for (U = 0, W = G.length; U < W; ++U) {
    switch (typeof G[U].since) {
      case "string":
        K = hooks(G[U].since).startOf("day"), G[U].since = K.valueOf();
        break;
    }
    switch (typeof G[U].until) {
      case "undefined":
        G[U].until = 1 / 0;
        break;
      case "string":
        K = hooks(G[U].until).startOf("day").valueOf(), G[U].until = K.valueOf();
        break;
    }
  }
  return G;
}
function localeErasParse(C, H, U) {
  var W, K, G = this.eras(), X, Z, Q;
  for (C = C.toUpperCase(), W = 0, K = G.length; W < K; ++W)
    if (X = G[W].name.toUpperCase(), Z = G[W].abbr.toUpperCase(), Q = G[W].narrow.toUpperCase(), U)
      switch (H) {
        case "N":
        case "NN":
        case "NNN":
          if (Z === C)
            return G[W];
          break;
        case "NNNN":
          if (X === C)
            return G[W];
          break;
        case "NNNNN":
          if (Q === C)
            return G[W];
          break;
      }
    else if ([X, Z, Q].indexOf(C) >= 0)
      return G[W];
}
function localeErasConvertYear(C, H) {
  var U = C.since <= C.until ? 1 : -1;
  return H === void 0 ? hooks(C.since).year() : hooks(C.since).year() + (H - C.offset) * U;
}
function getEraName() {
  var C, H, U, W = this.localeData().eras();
  for (C = 0, H = W.length; C < H; ++C)
    if (U = this.clone().startOf("day").valueOf(), W[C].since <= U && U <= W[C].until || W[C].until <= U && U <= W[C].since)
      return W[C].name;
  return "";
}
function getEraNarrow() {
  var C, H, U, W = this.localeData().eras();
  for (C = 0, H = W.length; C < H; ++C)
    if (U = this.clone().startOf("day").valueOf(), W[C].since <= U && U <= W[C].until || W[C].until <= U && U <= W[C].since)
      return W[C].narrow;
  return "";
}
function getEraAbbr() {
  var C, H, U, W = this.localeData().eras();
  for (C = 0, H = W.length; C < H; ++C)
    if (U = this.clone().startOf("day").valueOf(), W[C].since <= U && U <= W[C].until || W[C].until <= U && U <= W[C].since)
      return W[C].abbr;
  return "";
}
function getEraYear() {
  var C, H, U, W, K = this.localeData().eras();
  for (C = 0, H = K.length; C < H; ++C)
    if (U = K[C].since <= K[C].until ? 1 : -1, W = this.clone().startOf("day").valueOf(), K[C].since <= W && W <= K[C].until || K[C].until <= W && W <= K[C].since)
      return (this.year() - hooks(K[C].since).year()) * U + K[C].offset;
  return this.year();
}
function erasNameRegex(C) {
  return hasOwnProp(this, "_erasNameRegex") || computeErasParse.call(this), C ? this._erasNameRegex : this._erasRegex;
}
function erasAbbrRegex(C) {
  return hasOwnProp(this, "_erasAbbrRegex") || computeErasParse.call(this), C ? this._erasAbbrRegex : this._erasRegex;
}
function erasNarrowRegex(C) {
  return hasOwnProp(this, "_erasNarrowRegex") || computeErasParse.call(this), C ? this._erasNarrowRegex : this._erasRegex;
}
function matchEraAbbr(C, H) {
  return H.erasAbbrRegex(C);
}
function matchEraName(C, H) {
  return H.erasNameRegex(C);
}
function matchEraNarrow(C, H) {
  return H.erasNarrowRegex(C);
}
function matchEraYearOrdinal(C, H) {
  return H._eraYearOrdinalRegex || matchUnsigned;
}
function computeErasParse() {
  var C = [], H = [], U = [], W = [], K, G, X = this.eras();
  for (K = 0, G = X.length; K < G; ++K)
    H.push(regexEscape(X[K].name)), C.push(regexEscape(X[K].abbr)), U.push(regexEscape(X[K].narrow)), W.push(regexEscape(X[K].name)), W.push(regexEscape(X[K].abbr)), W.push(regexEscape(X[K].narrow));
  this._erasRegex = new RegExp("^(" + W.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + H.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + C.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + U.join("|") + ")",
    "i"
  );
}
addFormatToken(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
addFormatToken(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function addWeekYearFormatToken(C, H) {
  addFormatToken(0, [C, C.length], 0, H);
}
addWeekYearFormatToken("gggg", "weekYear");
addWeekYearFormatToken("ggggg", "weekYear");
addWeekYearFormatToken("GGGG", "isoWeekYear");
addWeekYearFormatToken("GGGGG", "isoWeekYear");
addUnitAlias("weekYear", "gg");
addUnitAlias("isoWeekYear", "GG");
addUnitPriority("weekYear", 1);
addUnitPriority("isoWeekYear", 1);
addRegexToken("G", matchSigned);
addRegexToken("g", matchSigned);
addRegexToken("GG", match1to2, match2);
addRegexToken("gg", match1to2, match2);
addRegexToken("GGGG", match1to4, match4);
addRegexToken("gggg", match1to4, match4);
addRegexToken("GGGGG", match1to6, match6);
addRegexToken("ggggg", match1to6, match6);
addWeekParseToken(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(C, H, U, W) {
    H[W.substr(0, 2)] = toInt(C);
  }
);
addWeekParseToken(["gg", "GG"], function(C, H, U, W) {
  H[W] = hooks.parseTwoDigitYear(C);
});
function getSetWeekYear(C) {
  return getSetWeekYearHelper.call(
    this,
    C,
    this.week(),
    this.weekday(),
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function getSetISOWeekYear(C) {
  return getSetWeekYearHelper.call(
    this,
    C,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function getISOWeeksInYear() {
  return weeksInYear(this.year(), 1, 4);
}
function getISOWeeksInISOWeekYear() {
  return weeksInYear(this.isoWeekYear(), 1, 4);
}
function getWeeksInYear() {
  var C = this.localeData()._week;
  return weeksInYear(this.year(), C.dow, C.doy);
}
function getWeeksInWeekYear() {
  var C = this.localeData()._week;
  return weeksInYear(this.weekYear(), C.dow, C.doy);
}
function getSetWeekYearHelper(C, H, U, W, K) {
  var G;
  return C == null ? weekOfYear(this, W, K).year : (G = weeksInYear(C, W, K), H > G && (H = G), setWeekAll.call(this, C, H, U, W, K));
}
function setWeekAll(C, H, U, W, K) {
  var G = dayOfYearFromWeeks(C, H, U, W, K), X = createUTCDate(G.year, 0, G.dayOfYear);
  return this.year(X.getUTCFullYear()), this.month(X.getUTCMonth()), this.date(X.getUTCDate()), this;
}
addFormatToken("Q", 0, "Qo", "quarter");
addUnitAlias("quarter", "Q");
addUnitPriority("quarter", 7);
addRegexToken("Q", match1);
addParseToken("Q", function(C, H) {
  H[MONTH] = (toInt(C) - 1) * 3;
});
function getSetQuarter(C) {
  return C == null ? Math.ceil((this.month() + 1) / 3) : this.month((C - 1) * 3 + this.month() % 3);
}
addFormatToken("D", ["DD", 2], "Do", "date");
addUnitAlias("date", "D");
addUnitPriority("date", 9);
addRegexToken("D", match1to2);
addRegexToken("DD", match1to2, match2);
addRegexToken("Do", function(C, H) {
  return C ? H._dayOfMonthOrdinalParse || H._ordinalParse : H._dayOfMonthOrdinalParseLenient;
});
addParseToken(["D", "DD"], DATE);
addParseToken("Do", function(C, H) {
  H[DATE] = toInt(C.match(match1to2)[0]);
});
var getSetDayOfMonth = makeGetSet("Date", !0);
addFormatToken("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
addUnitAlias("dayOfYear", "DDD");
addUnitPriority("dayOfYear", 4);
addRegexToken("DDD", match1to3);
addRegexToken("DDDD", match3);
addParseToken(["DDD", "DDDD"], function(C, H, U) {
  U._dayOfYear = toInt(C);
});
function getSetDayOfYear(C) {
  var H = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return C == null ? H : this.add(C - H, "d");
}
addFormatToken("m", ["mm", 2], 0, "minute");
addUnitAlias("minute", "m");
addUnitPriority("minute", 14);
addRegexToken("m", match1to2);
addRegexToken("mm", match1to2, match2);
addParseToken(["m", "mm"], MINUTE);
var getSetMinute = makeGetSet("Minutes", !1);
addFormatToken("s", ["ss", 2], 0, "second");
addUnitAlias("second", "s");
addUnitPriority("second", 15);
addRegexToken("s", match1to2);
addRegexToken("ss", match1to2, match2);
addParseToken(["s", "ss"], SECOND);
var getSetSecond = makeGetSet("Seconds", !1);
addFormatToken("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
addFormatToken(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
addFormatToken(0, ["SSS", 3], 0, "millisecond");
addFormatToken(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
addFormatToken(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
addFormatToken(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
addFormatToken(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
addFormatToken(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
addFormatToken(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
addUnitAlias("millisecond", "ms");
addUnitPriority("millisecond", 16);
addRegexToken("S", match1to3, match1);
addRegexToken("SS", match1to3, match2);
addRegexToken("SSS", match1to3, match3);
var token, getSetMillisecond;
for (token = "SSSS"; token.length <= 9; token += "S")
  addRegexToken(token, matchUnsigned);
function parseMs(C, H) {
  H[MILLISECOND] = toInt(("0." + C) * 1e3);
}
for (token = "S"; token.length <= 9; token += "S")
  addParseToken(token, parseMs);
getSetMillisecond = makeGetSet("Milliseconds", !1);
addFormatToken("z", 0, 0, "zoneAbbr");
addFormatToken("zz", 0, 0, "zoneName");
function getZoneAbbr() {
  return this._isUTC ? "UTC" : "";
}
function getZoneName() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var proto = Moment.prototype;
proto.add = add;
proto.calendar = calendar$1;
proto.clone = clone;
proto.diff = diff;
proto.endOf = endOf;
proto.format = format;
proto.from = from;
proto.fromNow = fromNow;
proto.to = to;
proto.toNow = toNow;
proto.get = stringGet;
proto.invalidAt = invalidAt;
proto.isAfter = isAfter;
proto.isBefore = isBefore;
proto.isBetween = isBetween;
proto.isSame = isSame;
proto.isSameOrAfter = isSameOrAfter;
proto.isSameOrBefore = isSameOrBefore;
proto.isValid = isValid$2;
proto.lang = lang;
proto.locale = locale$4;
proto.localeData = localeData;
proto.max = prototypeMax;
proto.min = prototypeMin;
proto.parsingFlags = parsingFlags;
proto.set = stringSet;
proto.startOf = startOf;
proto.subtract = subtract;
proto.toArray = toArray;
proto.toObject = toObject;
proto.toDate = toDate;
proto.toISOString = toISOString;
proto.inspect = inspect$1;
typeof Symbol < "u" && Symbol.for != null && (proto[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
proto.toJSON = toJSON;
proto.toString = toString;
proto.unix = unix;
proto.valueOf = valueOf;
proto.creationData = creationData;
proto.eraName = getEraName;
proto.eraNarrow = getEraNarrow;
proto.eraAbbr = getEraAbbr;
proto.eraYear = getEraYear;
proto.year = getSetYear;
proto.isLeapYear = getIsLeapYear;
proto.weekYear = getSetWeekYear;
proto.isoWeekYear = getSetISOWeekYear;
proto.quarter = proto.quarters = getSetQuarter;
proto.month = getSetMonth;
proto.daysInMonth = getDaysInMonth;
proto.week = proto.weeks = getSetWeek;
proto.isoWeek = proto.isoWeeks = getSetISOWeek;
proto.weeksInYear = getWeeksInYear;
proto.weeksInWeekYear = getWeeksInWeekYear;
proto.isoWeeksInYear = getISOWeeksInYear;
proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
proto.date = getSetDayOfMonth;
proto.day = proto.days = getSetDayOfWeek;
proto.weekday = getSetLocaleDayOfWeek;
proto.isoWeekday = getSetISODayOfWeek;
proto.dayOfYear = getSetDayOfYear;
proto.hour = proto.hours = getSetHour;
proto.minute = proto.minutes = getSetMinute;
proto.second = proto.seconds = getSetSecond;
proto.millisecond = proto.milliseconds = getSetMillisecond;
proto.utcOffset = getSetOffset;
proto.utc = setOffsetToUTC;
proto.local = setOffsetToLocal;
proto.parseZone = setOffsetToParsedOffset;
proto.hasAlignedHourOffset = hasAlignedHourOffset;
proto.isDST = isDaylightSavingTime;
proto.isLocal = isLocal;
proto.isUtcOffset = isUtcOffset;
proto.isUtc = isUtc;
proto.isUTC = isUtc;
proto.zoneAbbr = getZoneAbbr;
proto.zoneName = getZoneName;
proto.dates = deprecate(
  "dates accessor is deprecated. Use date instead.",
  getSetDayOfMonth
);
proto.months = deprecate(
  "months accessor is deprecated. Use month instead",
  getSetMonth
);
proto.years = deprecate(
  "years accessor is deprecated. Use year instead",
  getSetYear
);
proto.zone = deprecate(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  getSetZone
);
proto.isDSTShifted = deprecate(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  isDaylightSavingTimeShifted
);
function createUnix(C) {
  return createLocal(C * 1e3);
}
function createInZone() {
  return createLocal.apply(null, arguments).parseZone();
}
function preParsePostFormat(C) {
  return C;
}
var proto$1 = Locale.prototype;
proto$1.calendar = calendar;
proto$1.longDateFormat = longDateFormat;
proto$1.invalidDate = invalidDate;
proto$1.ordinal = ordinal;
proto$1.preparse = preParsePostFormat;
proto$1.postformat = preParsePostFormat;
proto$1.relativeTime = relativeTime;
proto$1.pastFuture = pastFuture;
proto$1.set = set;
proto$1.eras = localeEras;
proto$1.erasParse = localeErasParse;
proto$1.erasConvertYear = localeErasConvertYear;
proto$1.erasAbbrRegex = erasAbbrRegex;
proto$1.erasNameRegex = erasNameRegex;
proto$1.erasNarrowRegex = erasNarrowRegex;
proto$1.months = localeMonths;
proto$1.monthsShort = localeMonthsShort;
proto$1.monthsParse = localeMonthsParse;
proto$1.monthsRegex = monthsRegex;
proto$1.monthsShortRegex = monthsShortRegex;
proto$1.week = localeWeek;
proto$1.firstDayOfYear = localeFirstDayOfYear;
proto$1.firstDayOfWeek = localeFirstDayOfWeek;
proto$1.weekdays = localeWeekdays;
proto$1.weekdaysMin = localeWeekdaysMin;
proto$1.weekdaysShort = localeWeekdaysShort;
proto$1.weekdaysParse = localeWeekdaysParse;
proto$1.weekdaysRegex = weekdaysRegex;
proto$1.weekdaysShortRegex = weekdaysShortRegex;
proto$1.weekdaysMinRegex = weekdaysMinRegex;
proto$1.isPM = localeIsPM;
proto$1.meridiem = localeMeridiem;
function get$1(C, H, U, W) {
  var K = getLocale(), G = createUTC().set(W, H);
  return K[U](G, C);
}
function listMonthsImpl(C, H, U) {
  if (isNumber$1(C) && (H = C, C = void 0), C = C || "", H != null)
    return get$1(C, H, U, "month");
  var W, K = [];
  for (W = 0; W < 12; W++)
    K[W] = get$1(C, W, U, "month");
  return K;
}
function listWeekdaysImpl(C, H, U, W) {
  typeof C == "boolean" ? (isNumber$1(H) && (U = H, H = void 0), H = H || "") : (H = C, U = H, C = !1, isNumber$1(H) && (U = H, H = void 0), H = H || "");
  var K = getLocale(), G = C ? K._week.dow : 0, X, Z = [];
  if (U != null)
    return get$1(H, (U + G) % 7, W, "day");
  for (X = 0; X < 7; X++)
    Z[X] = get$1(H, (X + G) % 7, W, "day");
  return Z;
}
function listMonths(C, H) {
  return listMonthsImpl(C, H, "months");
}
function listMonthsShort(C, H) {
  return listMonthsImpl(C, H, "monthsShort");
}
function listWeekdays(C, H, U) {
  return listWeekdaysImpl(C, H, U, "weekdays");
}
function listWeekdaysShort(C, H, U) {
  return listWeekdaysImpl(C, H, U, "weekdaysShort");
}
function listWeekdaysMin(C, H, U) {
  return listWeekdaysImpl(C, H, U, "weekdaysMin");
}
getSetGlobalLocale("en", {
  eras: [
    {
      since: "0001-01-01",
      until: 1 / 0,
      offset: 1,
      name: "Anno Domini",
      narrow: "AD",
      abbr: "AD"
    },
    {
      since: "0000-12-31",
      until: -1 / 0,
      offset: 1,
      name: "Before Christ",
      narrow: "BC",
      abbr: "BC"
    }
  ],
  dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
  ordinal: function(C) {
    var H = C % 10, U = toInt(C % 100 / 10) === 1 ? "th" : H === 1 ? "st" : H === 2 ? "nd" : H === 3 ? "rd" : "th";
    return C + U;
  }
});
hooks.lang = deprecate(
  "moment.lang is deprecated. Use moment.locale instead.",
  getSetGlobalLocale
);
hooks.langData = deprecate(
  "moment.langData is deprecated. Use moment.localeData instead.",
  getLocale
);
var mathAbs = Math.abs;
function abs() {
  var C = this._data;
  return this._milliseconds = mathAbs(this._milliseconds), this._days = mathAbs(this._days), this._months = mathAbs(this._months), C.milliseconds = mathAbs(C.milliseconds), C.seconds = mathAbs(C.seconds), C.minutes = mathAbs(C.minutes), C.hours = mathAbs(C.hours), C.months = mathAbs(C.months), C.years = mathAbs(C.years), this;
}
function addSubtract$1(C, H, U, W) {
  var K = createDuration(H, U);
  return C._milliseconds += W * K._milliseconds, C._days += W * K._days, C._months += W * K._months, C._bubble();
}
function add$1(C, H) {
  return addSubtract$1(this, C, H, 1);
}
function subtract$1(C, H) {
  return addSubtract$1(this, C, H, -1);
}
function absCeil(C) {
  return C < 0 ? Math.floor(C) : Math.ceil(C);
}
function bubble() {
  var C = this._milliseconds, H = this._days, U = this._months, W = this._data, K, G, X, Z, Q;
  return C >= 0 && H >= 0 && U >= 0 || C <= 0 && H <= 0 && U <= 0 || (C += absCeil(monthsToDays(U) + H) * 864e5, H = 0, U = 0), W.milliseconds = C % 1e3, K = absFloor(C / 1e3), W.seconds = K % 60, G = absFloor(K / 60), W.minutes = G % 60, X = absFloor(G / 60), W.hours = X % 24, H += absFloor(X / 24), Q = absFloor(daysToMonths(H)), U += Q, H -= absCeil(monthsToDays(Q)), Z = absFloor(U / 12), U %= 12, W.days = H, W.months = U, W.years = Z, this;
}
function daysToMonths(C) {
  return C * 4800 / 146097;
}
function monthsToDays(C) {
  return C * 146097 / 4800;
}
function as(C) {
  if (!this.isValid())
    return NaN;
  var H, U, W = this._milliseconds;
  if (C = normalizeUnits(C), C === "month" || C === "quarter" || C === "year")
    switch (H = this._days + W / 864e5, U = this._months + daysToMonths(H), C) {
      case "month":
        return U;
      case "quarter":
        return U / 3;
      case "year":
        return U / 12;
    }
  else
    switch (H = this._days + Math.round(monthsToDays(this._months)), C) {
      case "week":
        return H / 7 + W / 6048e5;
      case "day":
        return H + W / 864e5;
      case "hour":
        return H * 24 + W / 36e5;
      case "minute":
        return H * 1440 + W / 6e4;
      case "second":
        return H * 86400 + W / 1e3;
      case "millisecond":
        return Math.floor(H * 864e5) + W;
      default:
        throw new Error("Unknown unit " + C);
    }
}
function valueOf$1() {
  return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + toInt(this._months / 12) * 31536e6 : NaN;
}
function makeAs(C) {
  return function() {
    return this.as(C);
  };
}
var asMilliseconds = makeAs("ms"), asSeconds = makeAs("s"), asMinutes = makeAs("m"), asHours = makeAs("h"), asDays = makeAs("d"), asWeeks = makeAs("w"), asMonths = makeAs("M"), asQuarters = makeAs("Q"), asYears = makeAs("y");
function clone$1() {
  return createDuration(this);
}
function get$2(C) {
  return C = normalizeUnits(C), this.isValid() ? this[C + "s"]() : NaN;
}
function makeGetter(C) {
  return function() {
    return this.isValid() ? this._data[C] : NaN;
  };
}
var milliseconds = makeGetter("milliseconds"), seconds = makeGetter("seconds"), minutes = makeGetter("minutes"), hours = makeGetter("hours"), days = makeGetter("days"), months = makeGetter("months"), years = makeGetter("years");
function weeks() {
  return absFloor(this.days() / 7);
}
var round = Math.round, thresholds = {
  ss: 44,
  // a few seconds to seconds
  s: 45,
  // seconds to minute
  m: 45,
  // minutes to hour
  h: 22,
  // hours to day
  d: 26,
  // days to month/week
  w: null,
  // weeks to month
  M: 11
  // months to year
};
function substituteTimeAgo(C, H, U, W, K) {
  return K.relativeTime(H || 1, !!U, C, W);
}
function relativeTime$1(C, H, U, W) {
  var K = createDuration(C).abs(), G = round(K.as("s")), X = round(K.as("m")), Z = round(K.as("h")), Q = round(K.as("d")), ee = round(K.as("M")), te = round(K.as("w")), re = round(K.as("y")), ne = G <= U.ss && ["s", G] || G < U.s && ["ss", G] || X <= 1 && ["m"] || X < U.m && ["mm", X] || Z <= 1 && ["h"] || Z < U.h && ["hh", Z] || Q <= 1 && ["d"] || Q < U.d && ["dd", Q];
  return U.w != null && (ne = ne || te <= 1 && ["w"] || te < U.w && ["ww", te]), ne = ne || ee <= 1 && ["M"] || ee < U.M && ["MM", ee] || re <= 1 && ["y"] || ["yy", re], ne[2] = H, ne[3] = +C > 0, ne[4] = W, substituteTimeAgo.apply(null, ne);
}
function getSetRelativeTimeRounding(C) {
  return C === void 0 ? round : typeof C == "function" ? (round = C, !0) : !1;
}
function getSetRelativeTimeThreshold(C, H) {
  return thresholds[C] === void 0 ? !1 : H === void 0 ? thresholds[C] : (thresholds[C] = H, C === "s" && (thresholds.ss = H - 1), !0);
}
function humanize(C, H) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var U = !1, W = thresholds, K, G;
  return typeof C == "object" && (H = C, C = !1), typeof C == "boolean" && (U = C), typeof H == "object" && (W = Object.assign({}, thresholds, H), H.s != null && H.ss == null && (W.ss = H.s - 1)), K = this.localeData(), G = relativeTime$1(this, !U, W, K), U && (G = K.pastFuture(+this, G)), K.postformat(G);
}
var abs$1 = Math.abs;
function sign(C) {
  return (C > 0) - (C < 0) || +C;
}
function toISOString$1() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var C = abs$1(this._milliseconds) / 1e3, H = abs$1(this._days), U = abs$1(this._months), W, K, G, X, Z = this.asSeconds(), Q, ee, te, re;
  return Z ? (W = absFloor(C / 60), K = absFloor(W / 60), C %= 60, W %= 60, G = absFloor(U / 12), U %= 12, X = C ? C.toFixed(3).replace(/\.?0+$/, "") : "", Q = Z < 0 ? "-" : "", ee = sign(this._months) !== sign(Z) ? "-" : "", te = sign(this._days) !== sign(Z) ? "-" : "", re = sign(this._milliseconds) !== sign(Z) ? "-" : "", Q + "P" + (G ? ee + G + "Y" : "") + (U ? ee + U + "M" : "") + (H ? te + H + "D" : "") + (K || W || C ? "T" : "") + (K ? re + K + "H" : "") + (W ? re + W + "M" : "") + (C ? re + X + "S" : "")) : "P0D";
}
var proto$2 = Duration.prototype;
proto$2.isValid = isValid$1;
proto$2.abs = abs;
proto$2.add = add$1;
proto$2.subtract = subtract$1;
proto$2.as = as;
proto$2.asMilliseconds = asMilliseconds;
proto$2.asSeconds = asSeconds;
proto$2.asMinutes = asMinutes;
proto$2.asHours = asHours;
proto$2.asDays = asDays;
proto$2.asWeeks = asWeeks;
proto$2.asMonths = asMonths;
proto$2.asQuarters = asQuarters;
proto$2.asYears = asYears;
proto$2.valueOf = valueOf$1;
proto$2._bubble = bubble;
proto$2.clone = clone$1;
proto$2.get = get$2;
proto$2.milliseconds = milliseconds;
proto$2.seconds = seconds;
proto$2.minutes = minutes;
proto$2.hours = hours;
proto$2.days = days;
proto$2.weeks = weeks;
proto$2.months = months;
proto$2.years = years;
proto$2.humanize = humanize;
proto$2.toISOString = toISOString$1;
proto$2.toString = toISOString$1;
proto$2.toJSON = toISOString$1;
proto$2.locale = locale$4;
proto$2.localeData = localeData;
proto$2.toIsoString = deprecate(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  toISOString$1
);
proto$2.lang = lang;
addFormatToken("X", 0, 0, "unix");
addFormatToken("x", 0, 0, "valueOf");
addRegexToken("x", matchSigned);
addRegexToken("X", matchTimestamp);
addParseToken("X", function(C, H, U) {
  U._d = new Date(parseFloat(C) * 1e3);
});
addParseToken("x", function(C, H, U) {
  U._d = new Date(toInt(C));
});
//! moment.js
hooks.version = "2.29.4";
setHookCallback(createLocal);
hooks.fn = proto;
hooks.min = min;
hooks.max = max$1;
hooks.now = now;
hooks.utc = createUTC;
hooks.unix = createUnix;
hooks.months = listMonths;
hooks.isDate = isDate$1;
hooks.locale = getSetGlobalLocale;
hooks.invalid = createInvalid;
hooks.duration = createDuration;
hooks.isMoment = isMoment;
hooks.weekdays = listWeekdays;
hooks.parseZone = createInZone;
hooks.localeData = getLocale;
hooks.isDuration = isDuration;
hooks.monthsShort = listMonthsShort;
hooks.weekdaysMin = listWeekdaysMin;
hooks.defineLocale = defineLocale;
hooks.updateLocale = updateLocale;
hooks.locales = listLocales;
hooks.weekdaysShort = listWeekdaysShort;
hooks.normalizeUnits = normalizeUnits;
hooks.relativeTimeRounding = getSetRelativeTimeRounding;
hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
hooks.calendarFormat = getCalendarFormat;
hooks.prototype = proto;
hooks.HTML5_FMT = {
  DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
  // <input type="datetime-local" />
  DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
  // <input type="datetime-local" step="1" />
  DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
  // <input type="datetime-local" step="0.001" />
  DATE: "YYYY-MM-DD",
  // <input type="date" />
  TIME: "HH:mm",
  // <input type="time" />
  TIME_SECONDS: "HH:mm:ss",
  // <input type="time" step="1" />
  TIME_MS: "HH:mm:ss.SSS",
  // <input type="time" step="0.001" />
  WEEK: "GGGG-[W]WW",
  // <input type="week" />
  MONTH: "YYYY-MM"
  // <input type="month" />
};
let Dict = {};
Dict.getText = function(C, H) {
  let U = H != null ? H + "" : "";
  if (U.indexOf(",") != -1) {
    let W = [];
    return U.split(/,/g).forEach(function(G) {
      let X = Dict.getItem(C, G) || {};
      W.push(X.label || "");
    }), W.join(",");
  } else
    return (Dict.getItem(C, H) || {}).label || "";
};
Dict.getItem = function(C, H) {
  let U = Dict.getItems(C);
  for (let W = 0; W < U.length; W++)
    if (U[W].value == H)
      return U[W];
  return null;
};
Dict.getItems = function(C, H, U) {
  H = H || [];
  let W = CacheManager.getCache("dict"), K = W.get(C);
  if (!K) {
    let X = http.ajax("get", "/ehr/dict/items/getlist", { type: C }, !1, !0);
    X.data && (K = X.data, K.sort(function(Z, Q) {
      return (Z.sort || 0) - (Q.sort || 0);
    }), W.put(C, K));
  }
  let G = K;
  return H && H.length && (G = K.filter((X) => !H.includes(X.value))), U && (G = G.filter((X) => X.field01 && X.field01.includes(U))), G;
};
Dict.clear = function() {
  CacheManager.getCache("dict").clear();
};
Dict.render = function(C) {
  return function(H) {
    return Dict.getText(C, H);
  };
};
const util = {
  checkQuery(C, H, U = 4, W = !1) {
    return H && (H = H.trim()), message.config({
      top: "100px",
      duration: 2,
      maxCount: 3
    }), H && H.length > 50 ? (message.info("搜索字符长度不能超过50个！"), !1) : W && H && H.length > 5 || Array.isArray(C) ? !0 : util.checkArea(H, C, U);
  },
  checkArea(C, H, U) {
    if (H.length > U)
      return !0;
    if (H.length <= 2) {
      if (!C || C.length != 18)
        return message.info("区县级以上，请输入18位身份证号进行精确查询"), !1;
    } else if (H.length <= 4 && U >= 4) {
      if (C && C == "undefined")
        return message.info("请选择市级以下区域"), !1;
      if (!C || C.length != 18)
        return message.info("区县级以上，请输入18位身份证号进行精确查询"), !1;
    } else if (H.length <= 6 && U >= 6) {
      if (C && C == "undefined")
        return message.info("请选择县级以下区域"), !1;
      if (C && C.length != 18 && U >= 6)
        return message.info("区县级，请输入18位身份证号进行精确查询"), !1;
      if (!C)
        return message.info("区县级数据，请输入姓名或身份号查询"), !1;
    }
    return !0;
  },
  getDictItems(C, H, U) {
    return Dict.getItems(C, H, U);
  },
  /** 解析url */
  getUrlParams(C) {
    let H = C.split("?")[1], U = {};
    if (H) {
      let W = H.split("&");
      for (let K = 0; K < W.length; K++) {
        let G = W[K].split("="), X = G[0], Z = G.length > 1 ? G[1] : null;
        U[decodeURIComponent(X)] = decodeURIComponent(decodeURIComponent(Z));
      }
    }
    return U;
  },
  isEqualData(C, H) {
    const U = JSON.stringify(this.delNull(C)), W = JSON.stringify(this.delNull(JSON.parse(JSON.stringify(H))));
    return U === W;
  },
  dealTrimFrom(C) {
    if (C instanceof Object) {
      let H = Object.assign({}, C);
      for (let U in H)
        Array.isArray(H[U]) ? H[U] = H[U].join(",") : C && typeof C == "string" && (H[U] = H[U].trim());
      return H;
    } else
      return C && typeof C == "string" ? C.trim() : C;
  },
  trimForm(C) {
    if (C instanceof Object) {
      let H = Object.assign({}, C);
      return util.dealForm(H);
    } else
      return C && typeof C == "string" ? C.trim() : C;
  },
  dealForm(C) {
    if (Array.isArray(C))
      return C.forEach((H) => util.trimForm(H));
    if (C instanceof Object) {
      for (let H in C)
        C[H] = util.trimForm(C[H]);
      return C;
    } else
      return C.trim();
  },
  delNull(C) {
    for (const H in C)
      C[H] === "" || C[H] === null || C[H] === void 0 ? delete C[H] : (C[H] instanceof Array || C[H] instanceof Object) && this.delNull(C[H]);
    return C;
  },
  getFormData(C, H = "YYYY-MM-DD") {
    for (const U in C) {
      const W = C[U];
      W && W._isAMomentObject && (C[U] = W._i || W.format(H));
    }
    return C;
  },
  attrs(C, H) {
    let U = [];
    for (let W = 0; W < C.length; W++)
      U.push(C[W][H]);
    return U;
  },
  /**
   * 部分属性通过位运算传给后端
   * @param data form对象
   * @param val 位运算的字段可以是字符串，可以是数组-字符串
  */
  setBitData(C, H) {
    if (typeof H == "string") {
      let U = C[H] ? C[H].split(",") : [];
      U.length > 0 && (C[H] = U.reduce((W, K) => parseInt(W) | parseInt(K)));
    } else
      H.forEach((U) => {
        let W = C[U] ? C[U].split(",") : [];
        W.length > 0 && (C[U] = W.reduce((K, G) => parseInt(K) | parseInt(G)));
      });
    return C;
  },
  /**
   * 把后端位运算值转化为字符串
   * @param data form对象
   * @param val 位运算的字段可以是字符串，可以是数组-字符串
  */
  parsingBit(C, H) {
    if (typeof H == "string") {
      let U = C[H], W = util.bitForArry(U);
      C[H] = W.join(",");
    } else
      H.forEach((U) => {
        let W = C[U], K = util.bitForArry(W);
        C[U] = K.join(",");
      });
    return C;
  },
  bitForArry(C, H = [], U = 0) {
    let W = Math.pow(2, U);
    return W <= C && (W & C && H.push(W), util.bitForArry(C, H, U + 1)), H.length > 1 ? H : [C];
  },
  idcard(C) {
    const H = { idcard: C };
    if (C.length == 18) {
      const W = C.substring(0, 6), K = C.substring(6, 10), G = C.substring(10, 12), X = C.substring(12, 14), Z = C.substring(16, 17);
      H.birthday = K + "-" + G + "-" + X, H.sex = parseInt(Z) % 2 == 1 ? "1" : "2", H.year = parseInt(K), H.month = parseInt(G), H.day = parseInt(X), H.region = W, H.age = this.getAge(H.birthday);
    } else if (C.length == 15) {
      const W = C.substring(0, 6), K = "19" + C.substring(6, 8), G = C.substring(8, 10), X = C.substring(10, 12), Z = C.substring(14, 15);
      H.birthday = K + "-" + G + "-" + X, H.sex = parseInt(Z) % 2 == 1 ? "1" : "2", H.year = parseInt(K), H.month = parseInt(G), H.day = parseInt(X), H.region = W, H.age = this.getAge(H.birthday);
    }
    const U = this.idcardCheck(C);
    return H.success = U.success, H.message = U.message, H;
  },
  idcardCheck(C) {
    const H = [];
    H.push({ success: !0, message: "身份证校验正确！" }), H.push({ success: !1, message: "该身份证号码无效！" });
    const U = {
      11: "北京",
      12: "天津",
      13: "河北",
      14: "山西",
      15: "内蒙古",
      21: "辽宁",
      22: "吉林",
      23: "黑龙江",
      31: "上海",
      32: "江苏",
      33: "浙江",
      34: "安徽",
      35: "福建",
      36: "江西",
      37: "山东",
      41: "河南",
      42: "湖北",
      43: "湖南",
      44: "广东",
      45: "广西",
      46: "海南",
      50: "重庆",
      51: "四川",
      52: "贵州",
      53: "云南",
      54: "西藏",
      61: "陕西",
      62: "甘肃",
      63: "青海",
      64: "宁夏",
      65: "新疆",
      71: "台湾",
      81: "香港",
      82: "澳门",
      91: "国外"
    };
    let W, K, G, X, Z = [];
    Z = C.split("");
    let Q = "";
    if (U[parseInt(C.substr(0, 2))] == null)
      return H[1];
    switch (C.length) {
      case 15:
        return (parseInt(C.substr(6, 2)) + 1900) % 4 == 0 || (parseInt(C.substr(6, 2)) + 1900) % 100 == 0 && (parseInt(C.substr(6, 2)) + 1900) % 4 == 0 ? Q = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/ : Q = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/, Q.test(C) ? H[0] : H[1];
      case 18:
        return parseInt(C.substr(6, 4)) % 4 == 0 || parseInt(C.substr(6, 4)) % 100 == 0 && parseInt(C.substr(6, 4)) % 4 == 0 ? Q = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/ : Q = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/, Q.test(C) ? (G = (parseInt(Z[0]) + parseInt(Z[10])) * 7 + (parseInt(Z[1]) + parseInt(Z[11])) * 9 + (parseInt(Z[2]) + parseInt(Z[12])) * 10 + (parseInt(Z[3]) + parseInt(Z[13])) * 5 + (parseInt(Z[4]) + parseInt(Z[14])) * 8 + (parseInt(Z[5]) + parseInt(Z[15])) * 4 + (parseInt(Z[6]) + parseInt(Z[16])) * 2 + parseInt(Z[7]) * 1 + parseInt(Z[8]) * 6 + parseInt(Z[9]) * 3, W = G % 11, X = "F", K = "10X98765432", X = K.substr(W, 1), X == Z[17].toUpperCase() ? H[0] : H[1]) : H[1];
      default:
        return H[1];
    }
  },
  getAge(C, H = !1) {
    if (!C)
      return {};
    const U = hooks();
    let W = hooks(C);
    H && (W = hooks(hooks(C).year() + "-01-01"));
    const { _data: K } = hooks.duration(U.diff(W));
    return {
      year: K.years,
      month: K.months,
      day: K.days
    };
  },
  getTreeNode(C, H) {
    let U = null;
    const W = (K) => {
      for (let G = 0; G < K.length; G++)
        if (K[G].key == H) {
          U = K[G];
          return;
        } else
          W(K[G].children || []);
    };
    return W(C), U;
  },
  exportExecll(C, H, U, W, K) {
    http.submit(C, H, void 0, { ...W, responseType: "blob" }, K).then((G) => {
      if (G.type == "application/json") {
        util.excellError(G);
        return;
      }
      if (window.navigator && window.navigator.msSaveOrOpenBlob)
        navigator.msSaveBlob(G, U || "导出报表.xls");
      else {
        let X = document.createElement("a");
        X.download = U || "导出报表.xls", X.href = window.URL.createObjectURL(G), X.click(), window.URL.revokeObjectURL(X.href);
      }
    });
  },
  excellError(C) {
    const H = new FileReader();
    H.readAsText(C, "utf-8"), H.onloadend = (U) => {
      const W = JSON.parse(U.target.result);
      message.warn(W.message || "出现一点小意外，请稍后再试！");
    };
  }
};
util.checkQuery;
util.trimForm;
util.dealTrimFrom;
const getDictItems = util.getDictItems, signature = { encryptDate(_0x16b9d2) {
  let _0x39b793 = this.getUrl(_0x16b9d2), _0xec5d8b = localStorage.getItem("online##user"), _0x184c7c = "";
  _0xec5d8b && _0xec5d8b != "undefined" && _0xec5d8b != "null" && (_0x184c7c = JSON.parse(_0xec5d8b).userId);
  let _0x221c50 = (/* @__PURE__ */ new Date()).getTime() + "+" + _0x39b793 + "+" + _0x184c7c, _0x5b926b = eval("(" + config.getValue("VALID_ASSTOKEN") + ")") || {}, _0x350344 = "";
  switch (_0x5b926b.use) {
    case "0":
      _0x350344 = "";
      break;
    case "1":
      _0x350344 = this.encryptDES(_0x221c50, this.getParam(_0x5b926b), _0x5b926b);
      break;
    case "2":
      _0x350344 = this.encryptAES(_0x221c50, this.getParam(_0x5b926b), _0x5b926b.key3, _0x5b926b);
      break;
    case "3":
      _0x350344 = this.encryptTDES(_0x221c50, this.getParam(_0x5b926b), _0x5b926b.key5, _0x5b926b);
      break;
    case "4":
      _0x350344 = this.encryptRSA(_0x221c50, this.getParam(_0x5b926b), _0x5b926b);
      break;
    case "10":
      _0x221c50 = this.encryptTDES(_0x221c50, _0x5b926b.key4, _0x5b926b.key5), _0x350344 = util.encryptedRsa(_0x221c50);
  }
  return _0x350344;
}, getUrl(C) {
  let U = C.split("?")[0].split(/ehrc\/|ehrcfis\//), W = U.length == 2 ? U[1] : U[0];
  if (W.length > 60) {
    let K = W.split("/"), G = 0;
    return K.some((Z, Q) => {
      if (Z.length > 25)
        return G = Q, !0;
    }), G === 0 && (G = K.length - 2), K.slice(0, G).join("/");
  } else
    return W;
}, encryptRSA(C, H, U) {
  let W = new JSEncrypt();
  return W.setPublicKey(H), U && (C = this.encryptAES(C, U.key2, U.key3)), W.encrypt(C);
}, encryptRabbit(C, H) {
  const U = _0x44e9e3.enc.Utf8.parse(H);
  return _0x44e9e3.Rabbit.encrypt(C, U).toString();
}, decryprRabbit(C, H) {
  const U = _0x44e9e3.enc.Utf8.parse(H);
  return _0x44e9e3.Rabbit.decrypt(C, U).toString(_0x44e9e3.enc.Utf8);
}, decryptByDES(C, H) {
  const U = _0x44e9e3.enc.Utf8.parse(H);
  return _0x44e9e3.TripleDES.decrypt(C, U, { mode: _0x44e9e3.mode.ECB, padding: _0x44e9e3.pad.Pkcs7 }).toString(_0x44e9e3.enc.Utf8);
}, encryptDES(C, H, U) {
  const W = _0x44e9e3.enc.Utf8.parse(H);
  return U && (C = this.encryptRSA(C, U.key6)), _0x44e9e3.DES.encrypt(C, W, { mode: _0x44e9e3.mode.ECB, padding: _0x44e9e3.pad.Pkcs7 }).toString();
}, encryptTDES(C, H, U, W) {
  const K = _0x44e9e3.enc.Utf8.parse(H);
  let G = _0x44e9e3.enc.Utf8.parse(U);
  return W && (C = util.encryptedRsa(C)), _0x44e9e3.TripleDES.encrypt(C, K, { iv: G, mode: _0x44e9e3.mode.CBC, padding: _0x44e9e3.pad.Pkcs7 }).toString();
}, encryptAES(C, H, U, W) {
  let K = _0x44e9e3.enc.Utf8.parse(H), G = _0x44e9e3.enc.Utf8.parse(U), X = JSON.stringify(C);
  return W && (X = this.encryptRSA(C, W.key6)), _0x44e9e3.AES.encrypt(X, K, { iv: G, mode: _0x44e9e3.mode.CBC, padding: _0x44e9e3.pad.Pkcs7 }).ciphertext.toString();
}, decryptByAES(C, H, U) {
  let W = _0x44e9e3.enc.Utf8.parse(H), K = _0x44e9e3.enc.Utf8.parse(U), G = _0x44e9e3.AES.decrypt(_0x44e9e3.format.Hex.parse(C), W, { iv: K, mode: _0x44e9e3.mode.CBC, padding: _0x44e9e3.pad.Pkcs7 });
  return _0x44e9e3.enc.Utf8.stringify(G);
}, encryptAESEBC(C, H) {
  let U = _0x44e9e3.enc.Utf8.parse(H), W = _0x44e9e3.enc.Utf8.parse(C);
  return _0x44e9e3.AES.encrypt(W, U, { mode: _0x44e9e3.mode.ECB, padding: _0x44e9e3.pad.Pkcs7 }).toString();
}, getParam(C) {
  let H = "";
  switch (C.use) {
    case "1":
      H = C.key;
      break;
    case "2":
      H = C.key2;
      break;
    case "3":
      H = C.key4;
      break;
    case "4":
      H = C.key6;
      break;
  }
  return H;
} }, uuid = {
  created() {
    let C = this.getCookie("uuid");
    if (C)
      return C;
    let H = [], U = "0123456789abcdef";
    for (let W = 0; W < 32; W++)
      H[W] = U.substr(Math.floor(Math.random() * 16), 1);
    return H[14] = "4", H[19] = U.substr(H[19] & 3 | 8, 1), H[8] = H[13] = H[18] = H[23], C = H.join(""), this.setCookie("uuid", C), C;
  },
  /**
   * 读取cookie
   */
  getCookie(C) {
    let H = null;
    if (document.cookie.length > 0) {
      let U = document.cookie.split("; ");
      for (let W = 0; W < U.length; W++) {
        let K = U[W].split("=");
        K[0] == C && (H = K[1]);
      }
    }
    return H ? unescape(H) : "";
  },
  setCookie(C, H) {
    let U = /* @__PURE__ */ new Date(), W = U.getMonth(), K = U.getFullYear(), G = K + "-10-03 00:00:00";
    W >= 9 && (G = K + 1 + "-10-03 00:00:00");
    let X = new Date(G);
    document.cookie = C + "=" + escape(H) + ";expires=" + X.toUTCString();
  }
};
var shams = function C() {
  if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
    return !1;
  if (typeof Symbol.iterator == "symbol")
    return !0;
  var H = {}, U = Symbol("test"), W = Object(U);
  if (typeof U == "string" || Object.prototype.toString.call(U) !== "[object Symbol]" || Object.prototype.toString.call(W) !== "[object Symbol]")
    return !1;
  var K = 42;
  H[U] = K;
  for (U in H)
    return !1;
  if (typeof Object.keys == "function" && Object.keys(H).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(H).length !== 0)
    return !1;
  var G = Object.getOwnPropertySymbols(H);
  if (G.length !== 1 || G[0] !== U || !Object.prototype.propertyIsEnumerable.call(H, U))
    return !1;
  if (typeof Object.getOwnPropertyDescriptor == "function") {
    var X = Object.getOwnPropertyDescriptor(H, U);
    if (X.value !== K || X.enumerable !== !0)
      return !1;
  }
  return !0;
}, origSymbol = typeof Symbol < "u" && Symbol, hasSymbolSham = shams, _hasSymbols_1_0_3_hasSymbols = function C() {
  return typeof origSymbol != "function" || typeof Symbol != "function" || typeof origSymbol("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : hasSymbolSham();
}, test = {
  foo: {}
}, $Object = Object, _hasProto_1_0_1_hasProto = function C() {
  return { __proto__: test }.foo === test.foo && !({ __proto__: null } instanceof $Object);
}, ERROR_MESSAGE = "Function.prototype.bind called on incompatible ", toStr$1 = Object.prototype.toString, max = Math.max, funcType = "[object Function]", concatty = function C(H, U) {
  for (var W = [], K = 0; K < H.length; K += 1)
    W[K] = H[K];
  for (var G = 0; G < U.length; G += 1)
    W[G + H.length] = U[G];
  return W;
}, slicy = function C(H, U) {
  for (var W = [], K = U || 0, G = 0; K < H.length; K += 1, G += 1)
    W[G] = H[K];
  return W;
}, joiny = function(C, H) {
  for (var U = "", W = 0; W < C.length; W += 1)
    U += C[W], W + 1 < C.length && (U += H);
  return U;
}, implementation$1 = function C(H) {
  var U = this;
  if (typeof U != "function" || toStr$1.apply(U) !== funcType)
    throw new TypeError(ERROR_MESSAGE + U);
  for (var W = slicy(arguments, 1), K, G = function() {
    if (this instanceof K) {
      var te = U.apply(
        this,
        concatty(W, arguments)
      );
      return Object(te) === te ? te : this;
    }
    return U.apply(
      H,
      concatty(W, arguments)
    );
  }, X = max(0, U.length - W.length), Z = [], Q = 0; Q < X; Q++)
    Z[Q] = "$" + Q;
  if (K = Function("binder", "return function (" + joiny(Z, ",") + "){ return binder.apply(this,arguments); }")(G), U.prototype) {
    var ee = function() {
    };
    ee.prototype = U.prototype, K.prototype = new ee(), ee.prototype = null;
  }
  return K;
}, implementation = implementation$1, _functionBind_1_1_2_functionBind = Function.prototype.bind || implementation, call = Function.prototype.call, $hasOwn = Object.prototype.hasOwnProperty, bind$1 = _functionBind_1_1_2_functionBind, _hasown_2_0_0_hasown = bind$1.call(call, $hasOwn), undefined$1, $SyntaxError$1 = SyntaxError, $Function = Function, $TypeError$3 = TypeError, getEvalledConstructor = function(C) {
  try {
    return $Function('"use strict"; return (' + C + ").constructor;")();
  } catch {
  }
}, $gOPD$1 = Object.getOwnPropertyDescriptor;
if ($gOPD$1)
  try {
    $gOPD$1({}, "");
  } catch {
    $gOPD$1 = null;
  }
var throwTypeError = function() {
  throw new $TypeError$3();
}, ThrowTypeError = $gOPD$1 ? function() {
  try {
    return arguments.callee, throwTypeError;
  } catch {
    try {
      return $gOPD$1(arguments, "callee").get;
    } catch {
      return throwTypeError;
    }
  }
}() : throwTypeError, hasSymbols = _hasSymbols_1_0_3_hasSymbols(), hasProto = _hasProto_1_0_1_hasProto(), getProto = Object.getPrototypeOf || (hasProto ? function(C) {
  return C.__proto__;
} : null), needsEval = {}, TypedArray = typeof Uint8Array > "u" || !getProto ? undefined$1 : getProto(Uint8Array), INTRINSICS = {
  "%AggregateError%": typeof AggregateError > "u" ? undefined$1 : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? undefined$1 : ArrayBuffer,
  "%ArrayIteratorPrototype%": hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined$1,
  "%AsyncFromSyncIteratorPrototype%": undefined$1,
  "%AsyncFunction%": needsEval,
  "%AsyncGenerator%": needsEval,
  "%AsyncGeneratorFunction%": needsEval,
  "%AsyncIteratorPrototype%": needsEval,
  "%Atomics%": typeof Atomics > "u" ? undefined$1 : Atomics,
  "%BigInt%": typeof BigInt > "u" ? undefined$1 : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? undefined$1 : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? undefined$1 : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? undefined$1 : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Error,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": EvalError,
  "%Float32Array%": typeof Float32Array > "u" ? undefined$1 : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? undefined$1 : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? undefined$1 : FinalizationRegistry,
  "%Function%": $Function,
  "%GeneratorFunction%": needsEval,
  "%Int8Array%": typeof Int8Array > "u" ? undefined$1 : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? undefined$1 : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? undefined$1 : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined$1,
  "%JSON%": typeof JSON == "object" ? JSON : undefined$1,
  "%Map%": typeof Map > "u" ? undefined$1 : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !hasSymbols || !getProto ? undefined$1 : getProto((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? undefined$1 : Promise,
  "%Proxy%": typeof Proxy > "u" ? undefined$1 : Proxy,
  "%RangeError%": RangeError,
  "%ReferenceError%": ReferenceError,
  "%Reflect%": typeof Reflect > "u" ? undefined$1 : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? undefined$1 : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !hasSymbols || !getProto ? undefined$1 : getProto((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? undefined$1 : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": hasSymbols && getProto ? getProto(""[Symbol.iterator]()) : undefined$1,
  "%Symbol%": hasSymbols ? Symbol : undefined$1,
  "%SyntaxError%": $SyntaxError$1,
  "%ThrowTypeError%": ThrowTypeError,
  "%TypedArray%": TypedArray,
  "%TypeError%": $TypeError$3,
  "%Uint8Array%": typeof Uint8Array > "u" ? undefined$1 : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? undefined$1 : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? undefined$1 : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? undefined$1 : Uint32Array,
  "%URIError%": URIError,
  "%WeakMap%": typeof WeakMap > "u" ? undefined$1 : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? undefined$1 : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? undefined$1 : WeakSet
};
if (getProto)
  try {
    null.error;
  } catch (C) {
    var errorProto = getProto(getProto(C));
    INTRINSICS["%Error.prototype%"] = errorProto;
  }
var doEval = function C(H) {
  var U;
  if (H === "%AsyncFunction%")
    U = getEvalledConstructor("async function () {}");
  else if (H === "%GeneratorFunction%")
    U = getEvalledConstructor("function* () {}");
  else if (H === "%AsyncGeneratorFunction%")
    U = getEvalledConstructor("async function* () {}");
  else if (H === "%AsyncGenerator%") {
    var W = C("%AsyncGeneratorFunction%");
    W && (U = W.prototype);
  } else if (H === "%AsyncIteratorPrototype%") {
    var K = C("%AsyncGenerator%");
    K && getProto && (U = getProto(K.prototype));
  }
  return INTRINSICS[H] = U, U;
}, LEGACY_ALIASES = {
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
}, bind = _functionBind_1_1_2_functionBind, hasOwn$1 = _hasown_2_0_0_hasown, $concat$1 = bind.call(Function.call, Array.prototype.concat), $spliceApply = bind.call(Function.apply, Array.prototype.splice), $replace$1 = bind.call(Function.call, String.prototype.replace), $strSlice = bind.call(Function.call, String.prototype.slice), $exec = bind.call(Function.call, RegExp.prototype.exec), rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, reEscapeChar = /\\(\\)?/g, stringToPath = function C(H) {
  var U = $strSlice(H, 0, 1), W = $strSlice(H, -1);
  if (U === "%" && W !== "%")
    throw new $SyntaxError$1("invalid intrinsic syntax, expected closing `%`");
  if (W === "%" && U !== "%")
    throw new $SyntaxError$1("invalid intrinsic syntax, expected opening `%`");
  var K = [];
  return $replace$1(H, rePropName, function(G, X, Z, Q) {
    K[K.length] = Z ? $replace$1(Q, reEscapeChar, "$1") : X || G;
  }), K;
}, getBaseIntrinsic = function C(H, U) {
  var W = H, K;
  if (hasOwn$1(LEGACY_ALIASES, W) && (K = LEGACY_ALIASES[W], W = "%" + K[0] + "%"), hasOwn$1(INTRINSICS, W)) {
    var G = INTRINSICS[W];
    if (G === needsEval && (G = doEval(W)), typeof G > "u" && !U)
      throw new $TypeError$3("intrinsic " + H + " exists, but is not available. Please file an issue!");
    return {
      alias: K,
      name: W,
      value: G
    };
  }
  throw new $SyntaxError$1("intrinsic " + H + " does not exist!");
}, _getIntrinsic_1_2_2_getIntrinsic = function C(H, U) {
  if (typeof H != "string" || H.length === 0)
    throw new $TypeError$3("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof U != "boolean")
    throw new $TypeError$3('"allowMissing" argument must be a boolean');
  if ($exec(/^%?[^%]*%?$/, H) === null)
    throw new $SyntaxError$1("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var W = stringToPath(H), K = W.length > 0 ? W[0] : "", G = getBaseIntrinsic("%" + K + "%", U), X = G.name, Z = G.value, Q = !1, ee = G.alias;
  ee && (K = ee[0], $spliceApply(W, $concat$1([0, 1], ee)));
  for (var te = 1, re = !0; te < W.length; te += 1) {
    var ne = W[te], ae = $strSlice(ne, 0, 1), oe = $strSlice(ne, -1);
    if ((ae === '"' || ae === "'" || ae === "`" || oe === '"' || oe === "'" || oe === "`") && ae !== oe)
      throw new $SyntaxError$1("property names with quotes must have matching quotes");
    if ((ne === "constructor" || !re) && (Q = !0), K += "." + ne, X = "%" + K + "%", hasOwn$1(INTRINSICS, X))
      Z = INTRINSICS[X];
    else if (Z != null) {
      if (!(ne in Z)) {
        if (!U)
          throw new $TypeError$3("base intrinsic for " + H + " exists, but the property is not available.");
        return;
      }
      if ($gOPD$1 && te + 1 >= W.length) {
        var ie = $gOPD$1(Z, ne);
        re = !!ie, re && "get" in ie && !("originalValue" in ie.get) ? Z = ie.get : Z = Z[ne];
      } else
        re = hasOwn$1(Z, ne), Z = Z[ne];
      re && !Q && (INTRINSICS[X] = Z);
    }
  }
  return Z;
}, _callBind_1_0_5_callBind = { exports: {} }, GetIntrinsic$5 = _getIntrinsic_1_2_2_getIntrinsic, $defineProperty$1 = GetIntrinsic$5("%Object.defineProperty%", !0), hasPropertyDescriptors$1 = function C() {
  if ($defineProperty$1)
    try {
      return $defineProperty$1({}, "a", { value: 1 }), !0;
    } catch {
      return !1;
    }
  return !1;
};
hasPropertyDescriptors$1.hasArrayLengthDefineBug = function C() {
  if (!hasPropertyDescriptors$1())
    return null;
  try {
    return $defineProperty$1([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var _hasPropertyDescriptors_1_0_1_hasPropertyDescriptors = hasPropertyDescriptors$1, GetIntrinsic$4 = _getIntrinsic_1_2_2_getIntrinsic, $gOPD = GetIntrinsic$4("%Object.getOwnPropertyDescriptor%", !0);
if ($gOPD)
  try {
    $gOPD([], "length");
  } catch {
    $gOPD = null;
  }
var _gopd_1_0_1_gopd = $gOPD, hasPropertyDescriptors = _hasPropertyDescriptors_1_0_1_hasPropertyDescriptors(), GetIntrinsic$3 = _getIntrinsic_1_2_2_getIntrinsic, $defineProperty = hasPropertyDescriptors && GetIntrinsic$3("%Object.defineProperty%", !0);
if ($defineProperty)
  try {
    $defineProperty({}, "a", { value: 1 });
  } catch {
    $defineProperty = !1;
  }
var $SyntaxError = GetIntrinsic$3("%SyntaxError%"), $TypeError$2 = GetIntrinsic$3("%TypeError%"), gopd = _gopd_1_0_1_gopd, _defineDataProperty_1_1_1_defineDataProperty = function C(H, U, W) {
  if (!H || typeof H != "object" && typeof H != "function")
    throw new $TypeError$2("`obj` must be an object or a function`");
  if (typeof U != "string" && typeof U != "symbol")
    throw new $TypeError$2("`property` must be a string or a symbol`");
  if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
    throw new $TypeError$2("`nonEnumerable`, if provided, must be a boolean or null");
  if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
    throw new $TypeError$2("`nonWritable`, if provided, must be a boolean or null");
  if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
    throw new $TypeError$2("`nonConfigurable`, if provided, must be a boolean or null");
  if (arguments.length > 6 && typeof arguments[6] != "boolean")
    throw new $TypeError$2("`loose`, if provided, must be a boolean");
  var K = arguments.length > 3 ? arguments[3] : null, G = arguments.length > 4 ? arguments[4] : null, X = arguments.length > 5 ? arguments[5] : null, Z = arguments.length > 6 ? arguments[6] : !1, Q = !!gopd && gopd(H, U);
  if ($defineProperty)
    $defineProperty(H, U, {
      configurable: X === null && Q ? Q.configurable : !X,
      enumerable: K === null && Q ? Q.enumerable : !K,
      value: W,
      writable: G === null && Q ? Q.writable : !G
    });
  else if (Z || !K && !G && !X)
    H[U] = W;
  else
    throw new $SyntaxError("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
}, GetIntrinsic$2 = _getIntrinsic_1_2_2_getIntrinsic, define = _defineDataProperty_1_1_1_defineDataProperty, hasDescriptors = _hasPropertyDescriptors_1_0_1_hasPropertyDescriptors(), gOPD = _gopd_1_0_1_gopd, $TypeError$1 = GetIntrinsic$2("%TypeError%"), $floor$1 = GetIntrinsic$2("%Math.floor%"), _setFunctionLength_1_1_1_setFunctionLength = function C(H, U) {
  if (typeof H != "function")
    throw new $TypeError$1("`fn` is not a function");
  if (typeof U != "number" || U < 0 || U > 4294967295 || $floor$1(U) !== U)
    throw new $TypeError$1("`length` must be a positive 32-bit integer");
  var W = arguments.length > 2 && !!arguments[2], K = !0, G = !0;
  if ("length" in H && gOPD) {
    var X = gOPD(H, "length");
    X && !X.configurable && (K = !1), X && !X.writable && (G = !1);
  }
  return (K || G || !W) && (hasDescriptors ? define(H, "length", U, !0, !0) : define(H, "length", U)), H;
};
(function(C) {
  var H = _functionBind_1_1_2_functionBind, U = _getIntrinsic_1_2_2_getIntrinsic, W = _setFunctionLength_1_1_1_setFunctionLength, K = U("%TypeError%"), G = U("%Function.prototype.apply%"), X = U("%Function.prototype.call%"), Z = U("%Reflect.apply%", !0) || H.call(X, G), Q = U("%Object.defineProperty%", !0), ee = U("%Math.max%");
  if (Q)
    try {
      Q({}, "a", { value: 1 });
    } catch {
      Q = null;
    }
  C.exports = function(ne) {
    if (typeof ne != "function")
      throw new K("a function is required");
    var ae = Z(H, X, arguments);
    return W(
      ae,
      1 + ee(0, ne.length - (arguments.length - 1)),
      !0
    );
  };
  var te = function() {
    return Z(H, G, arguments);
  };
  Q ? Q(C.exports, "apply", { value: te }) : C.exports.apply = te;
})(_callBind_1_0_5_callBind);
var _callBind_1_0_5_callBindExports = _callBind_1_0_5_callBind.exports, GetIntrinsic$1 = _getIntrinsic_1_2_2_getIntrinsic, callBind = _callBind_1_0_5_callBindExports, $indexOf = callBind(GetIntrinsic$1("String.prototype.indexOf")), callBound$1 = function C(H, U) {
  var W = GetIntrinsic$1(H, !!U);
  return typeof W == "function" && $indexOf(H, ".prototype.") > -1 ? callBind(W) : W;
}, hasMap = typeof Map == "function" && Map.prototype, mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get == "function" ? mapSizeDescriptor.get : null, mapForEach = hasMap && Map.prototype.forEach, hasSet = typeof Set == "function" && Set.prototype, setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get == "function" ? setSizeDescriptor.get : null, setForEach = hasSet && Set.prototype.forEach, hasWeakMap = typeof WeakMap == "function" && WeakMap.prototype, weakMapHas = hasWeakMap ? WeakMap.prototype.has : null, hasWeakSet = typeof WeakSet == "function" && WeakSet.prototype, weakSetHas = hasWeakSet ? WeakSet.prototype.has : null, hasWeakRef = typeof WeakRef == "function" && WeakRef.prototype, weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null, booleanValueOf = Boolean.prototype.valueOf, objectToString = Object.prototype.toString, functionToString = Function.prototype.toString, $match = String.prototype.match, $slice = String.prototype.slice, $replace = String.prototype.replace, $toUpperCase = String.prototype.toUpperCase, $toLowerCase = String.prototype.toLowerCase, $test = RegExp.prototype.test, $concat = Array.prototype.concat, $join = Array.prototype.join, $arrSlice = Array.prototype.slice, $floor = Math.floor, bigIntValueOf = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, gOPS = Object.getOwnPropertySymbols, symToString = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, hasShammedSymbols = typeof Symbol == "function" && typeof Symbol.iterator == "object", toStringTag = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols || !0) ? Symbol.toStringTag : null, isEnumerable = Object.prototype.propertyIsEnumerable, gPO = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(C) {
  return C.__proto__;
} : null);
function addNumericSeparator(C, H) {
  if (C === 1 / 0 || C === -1 / 0 || C !== C || C && C > -1e3 && C < 1e3 || $test.call(/e/, H))
    return H;
  var U = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof C == "number") {
    var W = C < 0 ? -$floor(-C) : $floor(C);
    if (W !== C) {
      var K = String(W), G = $slice.call(H, K.length + 1);
      return $replace.call(K, U, "$&_") + "." + $replace.call($replace.call(G, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return $replace.call(H, U, "$&_");
}
var utilInspect = require$$0, inspectCustom = utilInspect.custom, inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null, _objectInspect_1_13_1_objectInspect = function C(H, U, W, K) {
  var G = U || {};
  if (has$3(G, "quoteStyle") && G.quoteStyle !== "single" && G.quoteStyle !== "double")
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (has$3(G, "maxStringLength") && (typeof G.maxStringLength == "number" ? G.maxStringLength < 0 && G.maxStringLength !== 1 / 0 : G.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var X = has$3(G, "customInspect") ? G.customInspect : !0;
  if (typeof X != "boolean" && X !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (has$3(G, "indent") && G.indent !== null && G.indent !== "	" && !(parseInt(G.indent, 10) === G.indent && G.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (has$3(G, "numericSeparator") && typeof G.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var Z = G.numericSeparator;
  if (typeof H > "u")
    return "undefined";
  if (H === null)
    return "null";
  if (typeof H == "boolean")
    return H ? "true" : "false";
  if (typeof H == "string")
    return inspectString(H, G);
  if (typeof H == "number") {
    if (H === 0)
      return 1 / 0 / H > 0 ? "0" : "-0";
    var Q = String(H);
    return Z ? addNumericSeparator(H, Q) : Q;
  }
  if (typeof H == "bigint") {
    var ee = String(H) + "n";
    return Z ? addNumericSeparator(H, ee) : ee;
  }
  var te = typeof G.depth > "u" ? 5 : G.depth;
  if (typeof W > "u" && (W = 0), W >= te && te > 0 && typeof H == "object")
    return isArray$3(H) ? "[Array]" : "[Object]";
  var re = getIndent(G, W);
  if (typeof K > "u")
    K = [];
  else if (indexOf(K, H) >= 0)
    return "[Circular]";
  function ne(Ce, $e, xe) {
    if ($e && (K = $arrSlice.call(K), K.push($e)), xe) {
      var _e = {
        depth: G.depth
      };
      return has$3(G, "quoteStyle") && (_e.quoteStyle = G.quoteStyle), C(Ce, _e, W + 1, K);
    }
    return C(Ce, G, W + 1, K);
  }
  if (typeof H == "function" && !isRegExp$1(H)) {
    var ae = nameOf(H), oe = arrObjKeys(H, ne);
    return "[Function" + (ae ? ": " + ae : " (anonymous)") + "]" + (oe.length > 0 ? " { " + $join.call(oe, ", ") + " }" : "");
  }
  if (isSymbol(H)) {
    var ie = hasShammedSymbols ? $replace.call(String(H), /^(Symbol\(.*\))_[^)]*$/, "$1") : symToString.call(H);
    return typeof H == "object" && !hasShammedSymbols ? markBoxed(ie) : ie;
  }
  if (isElement(H)) {
    for (var se = "<" + $toLowerCase.call(String(H.nodeName)), ue = H.attributes || [], le = 0; le < ue.length; le++)
      se += " " + ue[le].name + "=" + wrapQuotes(quote(ue[le].value), "double", G);
    return se += ">", H.childNodes && H.childNodes.length && (se += "..."), se += "</" + $toLowerCase.call(String(H.nodeName)) + ">", se;
  }
  if (isArray$3(H)) {
    if (H.length === 0)
      return "[]";
    var ce = arrObjKeys(H, ne);
    return re && !singleLineValues(ce) ? "[" + indentedJoin(ce, re) + "]" : "[ " + $join.call(ce, ", ") + " ]";
  }
  if (isError(H)) {
    var fe = arrObjKeys(H, ne);
    return !("cause" in Error.prototype) && "cause" in H && !isEnumerable.call(H, "cause") ? "{ [" + String(H) + "] " + $join.call($concat.call("[cause]: " + ne(H.cause), fe), ", ") + " }" : fe.length === 0 ? "[" + String(H) + "]" : "{ [" + String(H) + "] " + $join.call(fe, ", ") + " }";
  }
  if (typeof H == "object" && X) {
    if (inspectSymbol && typeof H[inspectSymbol] == "function" && utilInspect)
      return utilInspect(H, { depth: te - W });
    if (X !== "symbol" && typeof H.inspect == "function")
      return H.inspect();
  }
  if (isMap(H)) {
    var pe = [];
    return mapForEach && mapForEach.call(H, function(Ce, $e) {
      pe.push(ne($e, H, !0) + " => " + ne(Ce, H));
    }), collectionOf("Map", mapSize.call(H), pe, re);
  }
  if (isSet(H)) {
    var he = [];
    return setForEach && setForEach.call(H, function(Ce) {
      he.push(ne(Ce, H));
    }), collectionOf("Set", setSize.call(H), he, re);
  }
  if (isWeakMap(H))
    return weakCollectionOf("WeakMap");
  if (isWeakSet(H))
    return weakCollectionOf("WeakSet");
  if (isWeakRef(H))
    return weakCollectionOf("WeakRef");
  if (isNumber(H))
    return markBoxed(ne(Number(H)));
  if (isBigInt(H))
    return markBoxed(ne(bigIntValueOf.call(H)));
  if (isBoolean(H))
    return markBoxed(booleanValueOf.call(H));
  if (isString(H))
    return markBoxed(ne(String(H)));
  if (typeof window < "u" && H === window)
    return "{ [object Window] }";
  if (H === commonjsGlobal)
    return "{ [object globalThis] }";
  if (!isDate(H) && !isRegExp$1(H)) {
    var de = arrObjKeys(H, ne), ge = gPO ? gPO(H) === Object.prototype : H instanceof Object || H.constructor === Object, ve = H instanceof Object ? "" : "null prototype", me = !ge && toStringTag && Object(H) === H && toStringTag in H ? $slice.call(toStr(H), 8, -1) : ve ? "Object" : "", ye = ge || typeof H.constructor != "function" ? "" : H.constructor.name ? H.constructor.name + " " : "", be = ye + (me || ve ? "[" + $join.call($concat.call([], me || [], ve || []), ": ") + "] " : "");
    return de.length === 0 ? be + "{}" : re ? be + "{" + indentedJoin(de, re) + "}" : be + "{ " + $join.call(de, ", ") + " }";
  }
  return String(H);
};
function wrapQuotes(C, H, U) {
  var W = (U.quoteStyle || H) === "double" ? '"' : "'";
  return W + C + W;
}
function quote(C) {
  return $replace.call(String(C), /"/g, "&quot;");
}
function isArray$3(C) {
  return toStr(C) === "[object Array]" && (!toStringTag || !(typeof C == "object" && toStringTag in C));
}
function isDate(C) {
  return toStr(C) === "[object Date]" && (!toStringTag || !(typeof C == "object" && toStringTag in C));
}
function isRegExp$1(C) {
  return toStr(C) === "[object RegExp]" && (!toStringTag || !(typeof C == "object" && toStringTag in C));
}
function isError(C) {
  return toStr(C) === "[object Error]" && (!toStringTag || !(typeof C == "object" && toStringTag in C));
}
function isString(C) {
  return toStr(C) === "[object String]" && (!toStringTag || !(typeof C == "object" && toStringTag in C));
}
function isNumber(C) {
  return toStr(C) === "[object Number]" && (!toStringTag || !(typeof C == "object" && toStringTag in C));
}
function isBoolean(C) {
  return toStr(C) === "[object Boolean]" && (!toStringTag || !(typeof C == "object" && toStringTag in C));
}
function isSymbol(C) {
  if (hasShammedSymbols)
    return C && typeof C == "object" && C instanceof Symbol;
  if (typeof C == "symbol")
    return !0;
  if (!C || typeof C != "object" || !symToString)
    return !1;
  try {
    return symToString.call(C), !0;
  } catch {
  }
  return !1;
}
function isBigInt(C) {
  if (!C || typeof C != "object" || !bigIntValueOf)
    return !1;
  try {
    return bigIntValueOf.call(C), !0;
  } catch {
  }
  return !1;
}
var hasOwn = Object.prototype.hasOwnProperty || function(C) {
  return C in this;
};
function has$3(C, H) {
  return hasOwn.call(C, H);
}
function toStr(C) {
  return objectToString.call(C);
}
function nameOf(C) {
  if (C.name)
    return C.name;
  var H = $match.call(functionToString.call(C), /^function\s*([\w$]+)/);
  return H ? H[1] : null;
}
function indexOf(C, H) {
  if (C.indexOf)
    return C.indexOf(H);
  for (var U = 0, W = C.length; U < W; U++)
    if (C[U] === H)
      return U;
  return -1;
}
function isMap(C) {
  if (!mapSize || !C || typeof C != "object")
    return !1;
  try {
    mapSize.call(C);
    try {
      setSize.call(C);
    } catch {
      return !0;
    }
    return C instanceof Map;
  } catch {
  }
  return !1;
}
function isWeakMap(C) {
  if (!weakMapHas || !C || typeof C != "object")
    return !1;
  try {
    weakMapHas.call(C, weakMapHas);
    try {
      weakSetHas.call(C, weakSetHas);
    } catch {
      return !0;
    }
    return C instanceof WeakMap;
  } catch {
  }
  return !1;
}
function isWeakRef(C) {
  if (!weakRefDeref || !C || typeof C != "object")
    return !1;
  try {
    return weakRefDeref.call(C), !0;
  } catch {
  }
  return !1;
}
function isSet(C) {
  if (!setSize || !C || typeof C != "object")
    return !1;
  try {
    setSize.call(C);
    try {
      mapSize.call(C);
    } catch {
      return !0;
    }
    return C instanceof Set;
  } catch {
  }
  return !1;
}
function isWeakSet(C) {
  if (!weakSetHas || !C || typeof C != "object")
    return !1;
  try {
    weakSetHas.call(C, weakSetHas);
    try {
      weakMapHas.call(C, weakMapHas);
    } catch {
      return !0;
    }
    return C instanceof WeakSet;
  } catch {
  }
  return !1;
}
function isElement(C) {
  return !C || typeof C != "object" ? !1 : typeof HTMLElement < "u" && C instanceof HTMLElement ? !0 : typeof C.nodeName == "string" && typeof C.getAttribute == "function";
}
function inspectString(C, H) {
  if (C.length > H.maxStringLength) {
    var U = C.length - H.maxStringLength, W = "... " + U + " more character" + (U > 1 ? "s" : "");
    return inspectString($slice.call(C, 0, H.maxStringLength), H) + W;
  }
  var K = $replace.call($replace.call(C, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, lowbyte);
  return wrapQuotes(K, "single", H);
}
function lowbyte(C) {
  var H = C.charCodeAt(0), U = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[H];
  return U ? "\\" + U : "\\x" + (H < 16 ? "0" : "") + $toUpperCase.call(H.toString(16));
}
function markBoxed(C) {
  return "Object(" + C + ")";
}
function weakCollectionOf(C) {
  return C + " { ? }";
}
function collectionOf(C, H, U, W) {
  var K = W ? indentedJoin(U, W) : $join.call(U, ", ");
  return C + " (" + H + ") {" + K + "}";
}
function singleLineValues(C) {
  for (var H = 0; H < C.length; H++)
    if (indexOf(C[H], `
`) >= 0)
      return !1;
  return !0;
}
function getIndent(C, H) {
  var U;
  if (C.indent === "	")
    U = "	";
  else if (typeof C.indent == "number" && C.indent > 0)
    U = $join.call(Array(C.indent + 1), " ");
  else
    return null;
  return {
    base: U,
    prev: $join.call(Array(H + 1), U)
  };
}
function indentedJoin(C, H) {
  if (C.length === 0)
    return "";
  var U = `
` + H.prev + H.base;
  return U + $join.call(C, "," + U) + `
` + H.prev;
}
function arrObjKeys(C, H) {
  var U = isArray$3(C), W = [];
  if (U) {
    W.length = C.length;
    for (var K = 0; K < C.length; K++)
      W[K] = has$3(C, K) ? H(C[K], C) : "";
  }
  var G = typeof gOPS == "function" ? gOPS(C) : [], X;
  if (hasShammedSymbols) {
    X = {};
    for (var Z = 0; Z < G.length; Z++)
      X["$" + G[Z]] = G[Z];
  }
  for (var Q in C)
    has$3(C, Q) && (U && String(Number(Q)) === Q && Q < C.length || hasShammedSymbols && X["$" + Q] instanceof Symbol || ($test.call(/[^\w$]/, Q) ? W.push(H(Q, C) + ": " + H(C[Q], C)) : W.push(Q + ": " + H(C[Q], C))));
  if (typeof gOPS == "function")
    for (var ee = 0; ee < G.length; ee++)
      isEnumerable.call(C, G[ee]) && W.push("[" + H(G[ee]) + "]: " + H(C[G[ee]], C));
  return W;
}
var GetIntrinsic = _getIntrinsic_1_2_2_getIntrinsic, callBound = callBound$1, inspect = _objectInspect_1_13_1_objectInspect, $TypeError = GetIntrinsic("%TypeError%"), $WeakMap = GetIntrinsic("%WeakMap%", !0), $Map = GetIntrinsic("%Map%", !0), $weakMapGet = callBound("WeakMap.prototype.get", !0), $weakMapSet = callBound("WeakMap.prototype.set", !0), $weakMapHas = callBound("WeakMap.prototype.has", !0), $mapGet = callBound("Map.prototype.get", !0), $mapSet = callBound("Map.prototype.set", !0), $mapHas = callBound("Map.prototype.has", !0), listGetNode = function(C, H) {
  for (var U = C, W; (W = U.next) !== null; U = W)
    if (W.key === H)
      return U.next = W.next, W.next = C.next, C.next = W, W;
}, listGet = function(C, H) {
  var U = listGetNode(C, H);
  return U && U.value;
}, listSet = function(C, H, U) {
  var W = listGetNode(C, H);
  W ? W.value = U : C.next = {
    // eslint-disable-line no-param-reassign
    key: H,
    next: C.next,
    value: U
  };
}, listHas = function(C, H) {
  return !!listGetNode(C, H);
}, _sideChannel_1_0_4_sideChannel = function C() {
  var H, U, W, K = {
    assert: function(G) {
      if (!K.has(G))
        throw new $TypeError("Side channel does not contain " + inspect(G));
    },
    get: function(G) {
      if ($WeakMap && G && (typeof G == "object" || typeof G == "function")) {
        if (H)
          return $weakMapGet(H, G);
      } else if ($Map) {
        if (U)
          return $mapGet(U, G);
      } else if (W)
        return listGet(W, G);
    },
    has: function(G) {
      if ($WeakMap && G && (typeof G == "object" || typeof G == "function")) {
        if (H)
          return $weakMapHas(H, G);
      } else if ($Map) {
        if (U)
          return $mapHas(U, G);
      } else if (W)
        return listHas(W, G);
      return !1;
    },
    set: function(G, X) {
      $WeakMap && G && (typeof G == "object" || typeof G == "function") ? (H || (H = new $WeakMap()), $weakMapSet(H, G, X)) : $Map ? (U || (U = new $Map()), $mapSet(U, G, X)) : (W || (W = { key: {}, next: null }), listSet(W, G, X));
    }
  };
  return K;
}, replace = String.prototype.replace, percentTwenties = /%20/g, Format = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, formats$3 = {
  default: Format.RFC3986,
  formatters: {
    RFC1738: function(C) {
      return replace.call(C, percentTwenties, "+");
    },
    RFC3986: function(C) {
      return String(C);
    }
  },
  RFC1738: Format.RFC1738,
  RFC3986: Format.RFC3986
}, formats$2 = formats$3, has$2 = Object.prototype.hasOwnProperty, isArray$2 = Array.isArray, hexTable = function() {
  for (var C = [], H = 0; H < 256; ++H)
    C.push("%" + ((H < 16 ? "0" : "") + H.toString(16)).toUpperCase());
  return C;
}(), compactQueue = function C(H) {
  for (; H.length > 1; ) {
    var U = H.pop(), W = U.obj[U.prop];
    if (isArray$2(W)) {
      for (var K = [], G = 0; G < W.length; ++G)
        typeof W[G] < "u" && K.push(W[G]);
      U.obj[U.prop] = K;
    }
  }
}, arrayToObject = function C(H, U) {
  for (var W = U && U.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, K = 0; K < H.length; ++K)
    typeof H[K] < "u" && (W[K] = H[K]);
  return W;
}, merge = function C(H, U, W) {
  if (!U)
    return H;
  if (typeof U != "object") {
    if (isArray$2(H))
      H.push(U);
    else if (H && typeof H == "object")
      (W && (W.plainObjects || W.allowPrototypes) || !has$2.call(Object.prototype, U)) && (H[U] = !0);
    else
      return [H, U];
    return H;
  }
  if (!H || typeof H != "object")
    return [H].concat(U);
  var K = H;
  return isArray$2(H) && !isArray$2(U) && (K = arrayToObject(H, W)), isArray$2(H) && isArray$2(U) ? (U.forEach(function(G, X) {
    if (has$2.call(H, X)) {
      var Z = H[X];
      Z && typeof Z == "object" && G && typeof G == "object" ? H[X] = C(Z, G, W) : H.push(G);
    } else
      H[X] = G;
  }), H) : Object.keys(U).reduce(function(G, X) {
    var Z = U[X];
    return has$2.call(G, X) ? G[X] = C(G[X], Z, W) : G[X] = Z, G;
  }, K);
}, assign = function C(H, U) {
  return Object.keys(U).reduce(function(W, K) {
    return W[K] = U[K], W;
  }, H);
}, decode = function(C, H, U) {
  var W = C.replace(/\+/g, " ");
  if (U === "iso-8859-1")
    return W.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(W);
  } catch {
    return W;
  }
}, encode = function C(H, U, W, K, G) {
  if (H.length === 0)
    return H;
  var X = H;
  if (typeof H == "symbol" ? X = Symbol.prototype.toString.call(H) : typeof H != "string" && (X = String(H)), W === "iso-8859-1")
    return escape(X).replace(/%u[0-9a-f]{4}/gi, function(te) {
      return "%26%23" + parseInt(te.slice(2), 16) + "%3B";
    });
  for (var Z = "", Q = 0; Q < X.length; ++Q) {
    var ee = X.charCodeAt(Q);
    if (ee === 45 || ee === 46 || ee === 95 || ee === 126 || ee >= 48 && ee <= 57 || ee >= 65 && ee <= 90 || ee >= 97 && ee <= 122 || G === formats$2.RFC1738 && (ee === 40 || ee === 41)) {
      Z += X.charAt(Q);
      continue;
    }
    if (ee < 128) {
      Z = Z + hexTable[ee];
      continue;
    }
    if (ee < 2048) {
      Z = Z + (hexTable[192 | ee >> 6] + hexTable[128 | ee & 63]);
      continue;
    }
    if (ee < 55296 || ee >= 57344) {
      Z = Z + (hexTable[224 | ee >> 12] + hexTable[128 | ee >> 6 & 63] + hexTable[128 | ee & 63]);
      continue;
    }
    Q += 1, ee = 65536 + ((ee & 1023) << 10 | X.charCodeAt(Q) & 1023), Z += hexTable[240 | ee >> 18] + hexTable[128 | ee >> 12 & 63] + hexTable[128 | ee >> 6 & 63] + hexTable[128 | ee & 63];
  }
  return Z;
}, compact = function C(H) {
  for (var U = [{ obj: { o: H }, prop: "o" }], W = [], K = 0; K < U.length; ++K)
    for (var G = U[K], X = G.obj[G.prop], Z = Object.keys(X), Q = 0; Q < Z.length; ++Q) {
      var ee = Z[Q], te = X[ee];
      typeof te == "object" && te !== null && W.indexOf(te) === -1 && (U.push({ obj: X, prop: ee }), W.push(te));
    }
  return compactQueue(U), H;
}, isRegExp = function C(H) {
  return Object.prototype.toString.call(H) === "[object RegExp]";
}, isBuffer = function C(H) {
  return !H || typeof H != "object" ? !1 : !!(H.constructor && H.constructor.isBuffer && H.constructor.isBuffer(H));
}, combine = function C(H, U) {
  return [].concat(H, U);
}, maybeMap = function C(H, U) {
  if (isArray$2(H)) {
    for (var W = [], K = 0; K < H.length; K += 1)
      W.push(U(H[K]));
    return W;
  }
  return U(H);
}, utils$2 = {
  arrayToObject,
  assign,
  combine,
  compact,
  decode,
  encode,
  isBuffer,
  isRegExp,
  maybeMap,
  merge
}, getSideChannel = _sideChannel_1_0_4_sideChannel, utils$1 = utils$2, formats$1 = formats$3, has$1 = Object.prototype.hasOwnProperty, arrayPrefixGenerators = {
  brackets: function C(H) {
    return H + "[]";
  },
  comma: "comma",
  indices: function C(H, U) {
    return H + "[" + U + "]";
  },
  repeat: function C(H) {
    return H;
  }
}, isArray$1 = Array.isArray, push = Array.prototype.push, pushToArray = function(C, H) {
  push.apply(C, isArray$1(H) ? H : [H]);
}, toISO = Date.prototype.toISOString, defaultFormat = formats$1.default, defaults$1 = {
  addQueryPrefix: !1,
  allowDots: !1,
  charset: "utf-8",
  charsetSentinel: !1,
  delimiter: "&",
  encode: !0,
  encoder: utils$1.encode,
  encodeValuesOnly: !1,
  format: defaultFormat,
  formatter: formats$1.formatters[defaultFormat],
  // deprecated
  indices: !1,
  serializeDate: function C(H) {
    return toISO.call(H);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, isNonNullishPrimitive = function C(H) {
  return typeof H == "string" || typeof H == "number" || typeof H == "boolean" || typeof H == "symbol" || typeof H == "bigint";
}, sentinel = {}, stringify$1 = function C(H, U, W, K, G, X, Z, Q, ee, te, re, ne, ae, oe, ie, se) {
  for (var ue = H, le = se, ce = 0, fe = !1; (le = le.get(sentinel)) !== void 0 && !fe; ) {
    var pe = le.get(H);
    if (ce += 1, typeof pe < "u") {
      if (pe === ce)
        throw new RangeError("Cyclic object value");
      fe = !0;
    }
    typeof le.get(sentinel) > "u" && (ce = 0);
  }
  if (typeof Q == "function" ? ue = Q(U, ue) : ue instanceof Date ? ue = re(ue) : W === "comma" && isArray$1(ue) && (ue = utils$1.maybeMap(ue, function(_e) {
    return _e instanceof Date ? re(_e) : _e;
  })), ue === null) {
    if (G)
      return Z && !oe ? Z(U, defaults$1.encoder, ie, "key", ne) : U;
    ue = "";
  }
  if (isNonNullishPrimitive(ue) || utils$1.isBuffer(ue)) {
    if (Z) {
      var he = oe ? U : Z(U, defaults$1.encoder, ie, "key", ne);
      return [ae(he) + "=" + ae(Z(ue, defaults$1.encoder, ie, "value", ne))];
    }
    return [ae(U) + "=" + ae(String(ue))];
  }
  var de = [];
  if (typeof ue > "u")
    return de;
  var ge;
  if (W === "comma" && isArray$1(ue))
    oe && Z && (ue = utils$1.maybeMap(ue, Z)), ge = [{ value: ue.length > 0 ? ue.join(",") || null : void 0 }];
  else if (isArray$1(Q))
    ge = Q;
  else {
    var ve = Object.keys(ue);
    ge = ee ? ve.sort(ee) : ve;
  }
  for (var me = K && isArray$1(ue) && ue.length === 1 ? U + "[]" : U, ye = 0; ye < ge.length; ++ye) {
    var be = ge[ye], Ce = typeof be == "object" && typeof be.value < "u" ? be.value : ue[be];
    if (!(X && Ce === null)) {
      var $e = isArray$1(ue) ? typeof W == "function" ? W(me, be) : me : me + (te ? "." + be : "[" + be + "]");
      se.set(H, ce);
      var xe = getSideChannel();
      xe.set(sentinel, se), pushToArray(de, C(
        Ce,
        $e,
        W,
        K,
        G,
        X,
        W === "comma" && oe && isArray$1(ue) ? null : Z,
        Q,
        ee,
        te,
        re,
        ne,
        ae,
        oe,
        ie,
        xe
      ));
    }
  }
  return de;
}, normalizeStringifyOptions = function C(H) {
  if (!H)
    return defaults$1;
  if (H.encoder !== null && typeof H.encoder < "u" && typeof H.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var U = H.charset || defaults$1.charset;
  if (typeof H.charset < "u" && H.charset !== "utf-8" && H.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var W = formats$1.default;
  if (typeof H.format < "u") {
    if (!has$1.call(formats$1.formatters, H.format))
      throw new TypeError("Unknown format option provided.");
    W = H.format;
  }
  var K = formats$1.formatters[W], G = defaults$1.filter;
  return (typeof H.filter == "function" || isArray$1(H.filter)) && (G = H.filter), {
    addQueryPrefix: typeof H.addQueryPrefix == "boolean" ? H.addQueryPrefix : defaults$1.addQueryPrefix,
    allowDots: typeof H.allowDots > "u" ? defaults$1.allowDots : !!H.allowDots,
    charset: U,
    charsetSentinel: typeof H.charsetSentinel == "boolean" ? H.charsetSentinel : defaults$1.charsetSentinel,
    delimiter: typeof H.delimiter > "u" ? defaults$1.delimiter : H.delimiter,
    encode: typeof H.encode == "boolean" ? H.encode : defaults$1.encode,
    encoder: typeof H.encoder == "function" ? H.encoder : defaults$1.encoder,
    encodeValuesOnly: typeof H.encodeValuesOnly == "boolean" ? H.encodeValuesOnly : defaults$1.encodeValuesOnly,
    filter: G,
    format: W,
    formatter: K,
    serializeDate: typeof H.serializeDate == "function" ? H.serializeDate : defaults$1.serializeDate,
    skipNulls: typeof H.skipNulls == "boolean" ? H.skipNulls : defaults$1.skipNulls,
    sort: typeof H.sort == "function" ? H.sort : null,
    strictNullHandling: typeof H.strictNullHandling == "boolean" ? H.strictNullHandling : defaults$1.strictNullHandling
  };
}, stringify_1 = function(C, H) {
  var U = C, W = normalizeStringifyOptions(H), K, G;
  typeof W.filter == "function" ? (G = W.filter, U = G("", U)) : isArray$1(W.filter) && (G = W.filter, K = G);
  var X = [];
  if (typeof U != "object" || U === null)
    return "";
  var Z;
  H && H.arrayFormat in arrayPrefixGenerators ? Z = H.arrayFormat : H && "indices" in H ? Z = H.indices ? "indices" : "repeat" : Z = "indices";
  var Q = arrayPrefixGenerators[Z];
  if (H && "commaRoundTrip" in H && typeof H.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var ee = Q === "comma" && H && H.commaRoundTrip;
  K || (K = Object.keys(U)), W.sort && K.sort(W.sort);
  for (var te = getSideChannel(), re = 0; re < K.length; ++re) {
    var ne = K[re];
    W.skipNulls && U[ne] === null || pushToArray(X, stringify$1(
      U[ne],
      ne,
      Q,
      ee,
      W.strictNullHandling,
      W.skipNulls,
      W.encode ? W.encoder : null,
      W.filter,
      W.sort,
      W.allowDots,
      W.serializeDate,
      W.format,
      W.formatter,
      W.encodeValuesOnly,
      W.charset,
      te
    ));
  }
  var ae = X.join(W.delimiter), oe = W.addQueryPrefix === !0 ? "?" : "";
  return W.charsetSentinel && (W.charset === "iso-8859-1" ? oe += "utf8=%26%2310003%3B&" : oe += "utf8=%E2%9C%93&"), ae.length > 0 ? oe + ae : "";
}, utils = utils$2, has = Object.prototype.hasOwnProperty, isArray = Array.isArray, defaults = {
  allowDots: !1,
  allowPrototypes: !1,
  allowSparse: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decoder: utils.decode,
  delimiter: "&",
  depth: 5,
  ignoreQueryPrefix: !1,
  interpretNumericEntities: !1,
  parameterLimit: 1e3,
  parseArrays: !0,
  plainObjects: !1,
  strictNullHandling: !1
}, interpretNumericEntities = function(C) {
  return C.replace(/&#(\d+);/g, function(H, U) {
    return String.fromCharCode(parseInt(U, 10));
  });
}, parseArrayValue = function(C, H) {
  return C && typeof C == "string" && H.comma && C.indexOf(",") > -1 ? C.split(",") : C;
}, isoSentinel = "utf8=%26%2310003%3B", charsetSentinel = "utf8=%E2%9C%93", parseValues = function C(H, U) {
  var W = { __proto__: null }, K = U.ignoreQueryPrefix ? H.replace(/^\?/, "") : H, G = U.parameterLimit === 1 / 0 ? void 0 : U.parameterLimit, X = K.split(U.delimiter, G), Z = -1, Q, ee = U.charset;
  if (U.charsetSentinel)
    for (Q = 0; Q < X.length; ++Q)
      X[Q].indexOf("utf8=") === 0 && (X[Q] === charsetSentinel ? ee = "utf-8" : X[Q] === isoSentinel && (ee = "iso-8859-1"), Z = Q, Q = X.length);
  for (Q = 0; Q < X.length; ++Q)
    if (Q !== Z) {
      var te = X[Q], re = te.indexOf("]="), ne = re === -1 ? te.indexOf("=") : re + 1, ae, oe;
      ne === -1 ? (ae = U.decoder(te, defaults.decoder, ee, "key"), oe = U.strictNullHandling ? null : "") : (ae = U.decoder(te.slice(0, ne), defaults.decoder, ee, "key"), oe = utils.maybeMap(
        parseArrayValue(te.slice(ne + 1), U),
        function(ie) {
          return U.decoder(ie, defaults.decoder, ee, "value");
        }
      )), oe && U.interpretNumericEntities && ee === "iso-8859-1" && (oe = interpretNumericEntities(oe)), te.indexOf("[]=") > -1 && (oe = isArray(oe) ? [oe] : oe), has.call(W, ae) ? W[ae] = utils.combine(W[ae], oe) : W[ae] = oe;
    }
  return W;
}, parseObject = function(C, H, U, W) {
  for (var K = W ? H : parseArrayValue(H, U), G = C.length - 1; G >= 0; --G) {
    var X, Z = C[G];
    if (Z === "[]" && U.parseArrays)
      X = [].concat(K);
    else {
      X = U.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var Q = Z.charAt(0) === "[" && Z.charAt(Z.length - 1) === "]" ? Z.slice(1, -1) : Z, ee = parseInt(Q, 10);
      !U.parseArrays && Q === "" ? X = { 0: K } : !isNaN(ee) && Z !== Q && String(ee) === Q && ee >= 0 && U.parseArrays && ee <= U.arrayLimit ? (X = [], X[ee] = K) : Q !== "__proto__" && (X[Q] = K);
    }
    K = X;
  }
  return K;
}, parseKeys = function C(H, U, W, K) {
  if (H) {
    var G = W.allowDots ? H.replace(/\.([^.[]+)/g, "[$1]") : H, X = /(\[[^[\]]*])/, Z = /(\[[^[\]]*])/g, Q = W.depth > 0 && X.exec(G), ee = Q ? G.slice(0, Q.index) : G, te = [];
    if (ee) {
      if (!W.plainObjects && has.call(Object.prototype, ee) && !W.allowPrototypes)
        return;
      te.push(ee);
    }
    for (var re = 0; W.depth > 0 && (Q = Z.exec(G)) !== null && re < W.depth; ) {
      if (re += 1, !W.plainObjects && has.call(Object.prototype, Q[1].slice(1, -1)) && !W.allowPrototypes)
        return;
      te.push(Q[1]);
    }
    return Q && te.push("[" + G.slice(Q.index) + "]"), parseObject(te, U, W, K);
  }
}, normalizeParseOptions = function C(H) {
  if (!H)
    return defaults;
  if (H.decoder !== null && H.decoder !== void 0 && typeof H.decoder != "function")
    throw new TypeError("Decoder has to be a function.");
  if (typeof H.charset < "u" && H.charset !== "utf-8" && H.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var U = typeof H.charset > "u" ? defaults.charset : H.charset;
  return {
    allowDots: typeof H.allowDots > "u" ? defaults.allowDots : !!H.allowDots,
    allowPrototypes: typeof H.allowPrototypes == "boolean" ? H.allowPrototypes : defaults.allowPrototypes,
    allowSparse: typeof H.allowSparse == "boolean" ? H.allowSparse : defaults.allowSparse,
    arrayLimit: typeof H.arrayLimit == "number" ? H.arrayLimit : defaults.arrayLimit,
    charset: U,
    charsetSentinel: typeof H.charsetSentinel == "boolean" ? H.charsetSentinel : defaults.charsetSentinel,
    comma: typeof H.comma == "boolean" ? H.comma : defaults.comma,
    decoder: typeof H.decoder == "function" ? H.decoder : defaults.decoder,
    delimiter: typeof H.delimiter == "string" || utils.isRegExp(H.delimiter) ? H.delimiter : defaults.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof H.depth == "number" || H.depth === !1 ? +H.depth : defaults.depth,
    ignoreQueryPrefix: H.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof H.interpretNumericEntities == "boolean" ? H.interpretNumericEntities : defaults.interpretNumericEntities,
    parameterLimit: typeof H.parameterLimit == "number" ? H.parameterLimit : defaults.parameterLimit,
    parseArrays: H.parseArrays !== !1,
    plainObjects: typeof H.plainObjects == "boolean" ? H.plainObjects : defaults.plainObjects,
    strictNullHandling: typeof H.strictNullHandling == "boolean" ? H.strictNullHandling : defaults.strictNullHandling
  };
}, parse$1 = function(C, H) {
  var U = normalizeParseOptions(H);
  if (C === "" || C === null || typeof C > "u")
    return U.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var W = typeof C == "string" ? parseValues(C, U) : C, K = U.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, G = Object.keys(W), X = 0; X < G.length; ++X) {
    var Z = G[X], Q = parseKeys(Z, W[Z], U, typeof C == "string");
    K = utils.merge(K, Q, U);
  }
  return U.allowSparse === !0 ? K : utils.compact(K);
}, stringify = stringify_1, parse = parse$1, formats = formats$3, lib = {
  formats,
  parse,
  stringify
};
const Qs = /* @__PURE__ */ getDefaultExportFromCjs(lib), refrsh = {
  getCookie(C = "token") {
    if (process.env.NODE_ENV != "development" && document.cookie !== void 0 && document.cookie !== null) {
      const H = document.cookie.match(new RegExp("(^| )" + C + "=([^;]*)(;|$)"));
      return H != null ? H[2] : "";
    } else {
      let H = localStorage.getItem("login"), U = H ? JSON.parse(H) : "";
      return U ? U.accessToken : "";
    }
  },
  getLogin(C = "token") {
    let H = "";
    if (process.env.NODE_ENV != "development" && document.cookie !== void 0 && document.cookie !== null) {
      const U = document.cookie.match(new RegExp("(^| )" + C + "=([^;]*)(;|$)"));
      U != null && (H = U[2]);
    } else
      H = "development";
    return H ? localStorage.getItem("login") : "";
  },
  remove(C) {
    let H = /* @__PURE__ */ new Date();
    H.setTime(H.getTime() + -1 * 1e3);
    let U = "expires=" + H.toUTCString();
    CacheManager.clear("user"), CacheManager.clear("org"), CacheManager.clear("area"), document.cookie = "token=; " + U + "; path=/", localStorage.removeItem("login"), this.outLogin(C);
  },
  outLogin(C = "登录过期") {
    if (sessionStorage.getItem("ecount"))
      return;
    sessionStorage.setItem("ecount", "1");
    let U = (/* @__PURE__ */ new Date()).getTime(), W = sessionStorage.getItem("outTime");
    sessionStorage.setItem("outTime", U + "");
    let K = top.window;
    !W || U - Number(W) > 3e4 ? (message.warning(C), setTimeout(() => {
      sessionStorage.removeItem("ecount"), K.location.href = K.location.origin + "/login.html";
    }, 800)) : Modal.warning({
      title: C,
      content: "确认跳转认证",
      okText: "确定",
      onOk: () => {
        sessionStorage.removeItem("ecount"), K.location.href = K.location.origin + "/login.html";
      }
    });
  },
  validTokenTime(C) {
    let H = localStorage.getItem("login"), U = H ? JSON.parse(H) : "";
    if (!U || !U.timestamp)
      return;
    let W = U.accessExpiresIn, K = U.refreshExpiresIn, G = Math.min(W, K);
    G = G < 0 ? 600 : G;
    let X = U.timestamp, Z = (/* @__PURE__ */ new Date()).getTime();
    if (G * 1e3 - (Z - X) < 8e3 && C.indexOf("/oauth/refreshToken") == -1) {
      let ee = { refreshToken: U.refreshToken }, te = http.ajax("post", "/oauth/refreshToken", ee, !1);
      te.code == "200" && te.data && (delete te.data.ticket, delete te.data.userVO, this.setLogin(Object.assign({}, U, te.data)), this.setCookie(te.data.accessToken), setTimeout(() => {
        this.countRefresfTime();
      }, 10));
    }
  },
  countRefresfTime() {
    let C = localStorage.getItem("login"), H = C ? JSON.parse(C) : "";
    if (!H)
      return;
    let U = H.accessExpiresIn, W = H.refreshExpiresIn, K = H.timestamp, G = Math.min(U, W);
    if (G <= 0) {
      this.remove();
      return;
    }
    let Z = (/* @__PURE__ */ new Date()).getTime() - K;
    G > 300 && (G -= 300);
    let Q = G * 1e3;
    Q -= Z, window.refresh && clearTimeout(window.refresh), window.refresh = setTimeout(() => {
      this.refreshTokens();
    }, Q);
  },
  refreshTokens() {
    let C = localStorage.getItem("login"), H = C ? JSON.parse(C) : "", W = { refreshToken: H.refreshToken };
    http.post("/oauth/refreshToken", W).then((K) => {
      K.code == "200" && K.data && (delete K.data.ticket, delete K.data.userVO, this.setLogin(Object.assign({}, H, K.data)), this.setCookie(K.data.accessToken), setTimeout(() => {
        this.countRefresfTime();
      }, 10));
    });
  },
  /** 保存token */
  setCookie(C) {
    document.cookie !== void 0 && document.cookie !== null && (document.cookie = "token=" + C + "; path=/");
  },
  /** 保存login */
  setLogin(C) {
    C.timestamp = (/* @__PURE__ */ new Date()).getTime(), localStorage.setItem("login", JSON.stringify(C));
  }
};
axios$1.defaults.timeout = 3 * 60 * 1e3;
let basePath = faceConfig.basePath;
axios$1.defaults.baseURL = faceConfig.basePath;
axios$1.interceptors.request.use(
  (C) => {
    let H = refrsh.getCookie();
    if (!C.headers.accessToken && H && (C.headers.accessToken = H), H && C.url != "/api/config/get" && C.url.indexOf("/oauth/refreshToken") == -1) {
      let U = signature.encryptDate(C.url);
      U && (C.headers.accessToken2 = U);
      let W = uuid.created();
      W && (C.headers.imei = W);
    }
    return C;
  },
  (C) => Promise.reject(C)
);
axios$1.interceptors.response.use(
  (C) => Promise.resolve(C),
  (C) => Promise.reject(C)
);
const http = {
  /** 第一个参数在data中，第二个参数在url后面 */
  submit(C, H, U, W, K) {
    return sendhttp(C, H, W, K ? Qs.stringify(U) : U, K);
  },
  /** 第一个参数在data中，第二个参数在url后面 */
  submit2(C, H, U, W, K) {
    return sendhttp(C, H, W, U, K);
  },
  postFile(C, H, U, W) {
    return sendhttp("post", C, U, H, W);
  },
  ajax(C, H, U, W = !1, K = !1) {
    return sendAjax(H, C, U, W, K);
  },
  get(C, H) {
    return sendhttp("get", C, H, void 0);
  },
  del(C, H, U = {}) {
    return sendhttp("delete", C, H, U);
  },
  post(C, H = {}) {
    return sendhttp("post", C, void 0, H);
  },
  /** params参数在data中，data参数在url后面 */
  put(C, H = {}, U) {
    return sendhttp("put", C, U, H);
  },
  //返回Promise对象,复杂json对象,例如包含数组
  cpost(C, H = {}) {
    return axios$1({
      method: "post",
      url: C,
      data: H,
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      }
    }).then((U) => checkStatus(U.data)).catch((U) => checkCode(U));
  }
}, sendhttp = (C, H, U, W, K) => {
  !K && H.indexOf("/file/uploadFile") == -1 && (K = { roletype: "fis" });
  let G = "json";
  W && W.responseType && (G = W.responseType, delete W.responseType), U && U.responseType && (G = U.responseType, delete U.responseType), refrsh.validTokenTime(H);
  const X = {
    method: C,
    url: H,
    params: U,
    // get请求，参数
    data: W,
    headers: K,
    responseType: G,
    // 默认的
    withCredentials: !0,
    // 默认的
    isFormData: !1
  }, Z = axios$1(X);
  return window.Base.showMask(!0), new Promise((Q, ee) => Z.then((te) => (window.Base.showMask(!1), Q(checkStatus(te.data, X))), (te) => (window.Base.showMask(!1), ee(checkCode(te)))));
};
function checkStatus(C, H) {
  if (H && H.responseType == "blob")
    return C;
  if (C && C.errors && C.errors instanceof Array)
    if (C.errors[0].errorCode == "302" && C.errors[0].msg == "session失效" || C.errors[0].errorCode == "403" && C.errors[0].msg == "token失效" || (C.errors[0].errorCode == "403" || C.errors[0].errorCode == "304") && C.errors[0].msg == "未登录")
      LogOuts(C.message || C.errors[0].msg);
    else
      return message.error(C.errors[0].msg), C.code = 404, C;
  else
    return C && (C.code === 401 || C.code === 403 || C.code === 302 || C.code === 200 && C.errors && C.errors && C.errors.errorCode === 403) ? (LogOuts(C.message || C.errors[0].msg), { code: 403 }) : (C && (C.code === 200 || C.code === 304) || message.warning(C.message), C);
}
function checkCode(C) {
  let H = {
    errorStatus: "",
    errorMessage: ""
  };
  const U = C.response;
  if (U)
    switch (U.status) {
      case 404:
        H = {
          errorStatus: 404,
          errorMessage: "找不到请求的地址"
        };
        break;
      case 401:
        H = {
          errorStatus: 401,
          errorMessage: "当前用户没有权限"
        }, LogOuts();
        break;
      case 403:
        H = {
          errorStatus: 403,
          errorMessage: "访问被拒绝"
        };
        break;
      case 500:
        H = {
          errorStatus: 500,
          errorMessage: "服务器出现问题"
        };
        break;
      case 400:
        H = {
          errorStatus: 400,
          errorMessage: "请求参数错误"
        };
        break;
      case 405:
        H = {
          errorStatus: 405,
          errorMessage: "请求方法错误"
        };
        break;
      case 412:
        H = {
          errorStatus: 412,
          errorMessage: U.data.issue[0].diagnostics
        };
        break;
      default:
        H = {
          errorStatus: -2,
          errorMessage: U.data.issue ? U.data.issue[0].diagnostics : "未知错误"
        };
        break;
    }
  else
    H = {
      errorStatus: -3,
      errorMessage: "网络链接错误"
    };
  return message.warning(H.errorMessage), H.errorMessage;
}
function sendAjax(C, H, U, W = !0, K = !1) {
  if (!window.XMLHttpRequest)
    return { code: 500, data: "请求创建失败！" };
  const G = new XMLHttpRequest();
  U && (U.frontUrl = document.location.href), H.toLowerCase() === "get" && U !== void 0 && (C += "?" + formatGetUrl(U)), refrsh.validTokenTime(C), G.open(H, basePath + C, W);
  let X = refrsh.getCookie();
  if (X && C != "/api/config/get" && C.indexOf("/oauth/refreshToken") == -1) {
    let Q = signature.encryptDate(C);
    G.setRequestHeader("accessToken2", Q);
    let ee = uuid.created();
    G.setRequestHeader("imei", ee);
  }
  if (G.setRequestHeader("accessToken", X), G.setRequestHeader("Access-Control-Max-Age", "1000"), G.setRequestHeader("Access-Control-Allow-Credentials", "true"), C == "/api/area/get" && G.setRequestHeader("roletype", "fis"), G.setRequestHeader("Content-Type", "application/json; charset=UTF-8"), H.toLowerCase() === "post" && U !== void 0)
    if (K)
      G.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), G.send(Qs.stringify(U));
    else {
      if (typeof U == "object")
        try {
          U = JSON.stringify(U);
        } catch {
        }
      G.send(U);
    }
  else
    G.send(null);
  G.ontimeout = function() {
    message.warning("请求超时！");
  };
  let Z = G.responseText;
  try {
    Z = JSON.parse(Z);
  } catch {
  }
  return checkStatus(Z);
}
function formatGetUrl(C) {
  let H = "";
  for (const U in C)
    C.hasOwnProperty(U) && (H = H.length > 0 ? H + "&" : H, H = H + U + "=" + C[U]);
  return H;
}
function LogOuts(C) {
  refrsh.remove(C || "登录过期");
}
const locale$3 = {
  locale: "zh_CN",
  today: "今天",
  now: "此刻",
  backToToday: "返回今天",
  ok: "确定",
  timeSelect: "选择时间",
  dateSelect: "选择日期",
  weekSelect: "选择周",
  clear: "清除",
  month: "月",
  year: "年",
  previousMonth: "上个月 (翻页上键)",
  nextMonth: "下个月 (翻页下键)",
  monthSelect: "选择月份",
  yearSelect: "选择年份",
  decadeSelect: "选择年代",
  yearFormat: "YYYY年",
  dayFormat: "D日",
  dateFormat: "YYYY年M月D日",
  dateTimeFormat: "YYYY年M月D日 HH时mm分ss秒",
  previousYear: "上一年 (Control键加左方向键)",
  nextYear: "下一年 (Control键加右方向键)",
  previousDecade: "上一年代",
  nextDecade: "下一年代",
  previousCentury: "上一世纪",
  nextCentury: "下一世纪"
}, CalendarLocale = locale$3, locale$2 = {
  placeholder: "请选择时间",
  rangePlaceholder: ["开始时间", "结束时间"]
}, TimePickerLocale = locale$2, locale = {
  lang: _extends({
    placeholder: "请选择日期",
    yearPlaceholder: "请选择年份",
    quarterPlaceholder: "请选择季度",
    monthPlaceholder: "请选择月份",
    weekPlaceholder: "请选择周",
    rangePlaceholder: ["开始日期", "结束日期"],
    rangeYearPlaceholder: ["开始年份", "结束年份"],
    rangeMonthPlaceholder: ["开始月份", "结束月份"],
    rangeQuarterPlaceholder: ["开始季度", "结束季度"],
    rangeWeekPlaceholder: ["开始周", "结束周"]
  }, CalendarLocale),
  timePickerLocale: _extends({}, TimePickerLocale)
};
locale.lang.ok = "确定";
const locale$1 = locale, _hoisted_1$1 = {
  key: 0,
  class: "date-center"
}, _sfc_main$1 = /* @__PURE__ */ defineComponent({
  name: "ehrDate",
  __name: "index",
  props: {
    // 选值为 date、daterange、datetime、datetimerange、year、month
    type: { type: String, default: "date" },
    format: { type: String, default: "YYYY-MM-DD" },
    value: { type: String, default: "" },
    end: { type: String, default: "" },
    disabledDate: {},
    clearable: { type: Boolean, default: !0 },
    readonly: { type: Boolean, default: !1 },
    placeholder: { type: String, default: "请输入日期" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["change", "update:value", "update:end"],
  setup(C, { emit: H }) {
    const U = C;
    let W = ref("date"), K = ref(!1), G = ref(!1), X = ref(""), Z = ref("");
    const Q = H;
    U.type.indexOf("range") > -1 ? (K.value = !0, W.value = U.type.indexOf("timerange") > -1 ? U.type.slice(0, -9) : U.type.slice(0, -5)) : W.value = U.type, G.value = U.type.indexOf("datetime") > -1;
    const ee = (ie, se) => {
      U.type.indexOf("year") > -1 || U.type.indexOf("month") > -1, ie === 1 ? X.value = se : Z.value = se;
    };
    U.value && ee(1, U.value), U.end && ee(2, U.end), watch(
      () => U.value,
      (ie) => {
        ie ? ee(1, ie) : X.value = "";
      },
      { immediate: !0, deep: !0 }
    ), watch(
      () => U.end,
      (ie) => {
        ie ? ee(2, ie) : Z.value = "";
      },
      { immediate: !0, deep: !0 }
    );
    const te = (ie) => {
      ne(ie, 1);
    }, re = (ie) => {
      ne(ie, 2);
    }, ne = (ie, se) => {
      let ue = [];
      K.value ? (ue.push(ie), se == 1 ? (ue.push(Z.value), Q("update:value", ie || "")) : (ue.unshift(X.value), Q("update:end", ie || ""))) : (ue = ie, Q("update:value", ue || "")), Q("change", ue);
    }, ae = (ie) => {
      let se = !1;
      return typeof U.disabledDate == "function" && (se = U.disabledDate(hooks(ie.format(U.format)))), K.value && ie && Z.value && hooks(ie.format(U.format)) > hooks(Z.value) || se;
    }, oe = (ie) => {
      let se = !1;
      return typeof U.disabledDate == "function" && (se = U.disabledDate(hooks(ie.format(U.format)))), K.value && ie && X.value && hooks(ie.format(U.format)) < hooks(X.value) || se;
    };
    return (ie, se) => {
      const ue = resolveComponent("a-date-picker");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([{ "ehr-range": unref(K) }, "ehr-date"])
      }, [
        createVNode(ue, {
          picker: unref(W),
          class: normalizeClass({ "ehr-picker": !unref(K) }),
          showTime: unref(G),
          placeholder: C.placeholder,
          value: unref(X),
          "onUpdate:value": se[0] || (se[0] = (le) => isRef(X) ? X.value = le : X = le),
          valueFormat: C.format,
          format: C.format,
          disabledDate: ae,
          allowClear: C.clearable,
          "read-only": C.readonly,
          disabled: C.disabled,
          locale: unref(locale$1),
          onChange: te
        }, null, 8, ["picker", "class", "showTime", "placeholder", "value", "valueFormat", "format", "allowClear", "read-only", "disabled", "locale"]),
        unref(K) ? (openBlock(), createElementBlock("span", _hoisted_1$1, "-")) : createCommentVNode("", !0),
        unref(K) ? (openBlock(), createBlock(ue, {
          key: 1,
          picker: unref(W),
          locale: unref(locale$1),
          showTime: unref(G),
          placeholder: C.placeholder,
          value: unref(Z),
          "onUpdate:value": se[1] || (se[1] = (le) => isRef(Z) ? Z.value = le : Z = le),
          valueFormat: C.format,
          format: C.format,
          disabledDate: oe,
          allowClear: C.clearable,
          "read-only": C.readonly,
          disabled: C.disabled,
          onChange: re
        }, null, 8, ["picker", "locale", "showTime", "placeholder", "value", "valueFormat", "format", "allowClear", "read-only", "disabled"])) : createCommentVNode("", !0)
      ], 2);
    };
  }
}), _hoisted_1 = { class: "ehrSelect" }, _sfc_main = /* @__PURE__ */ defineComponent({
  name: "ehrSelect",
  __name: "index",
  props: {
    placeholder: {
      type: String,
      default: "请选择"
    },
    value: { type: [String, Number] },
    url: { type: String, default: "" },
    postInfo: {
      type: Object,
      default: () => ({ key: "name" })
    },
    groupType: { type: Boolean, default: !1 },
    allowClear: { type: Boolean, default: !0 },
    selectWidth: { type: String },
    collectionType: { type: String },
    mode: { type: String },
    textBl: { type: Boolean, default: !1 },
    isWrite: { type: Boolean, default: !1 },
    showValue: { type: Boolean, default: !1 },
    sys: { type: String, default: "" },
    isrest: { type: Boolean, default: !0 },
    unArry: { type: Array, default: () => [] },
    // 添加一个数组到开始位置
    endArry: { type: Array, default: () => [] },
    // 添加一个数组到结束位置
    disabled: { type: Boolean, default: !1 },
    excludes: { type: Array, default: () => [] }
    // 排除数据形如 :excludes="['本人'、'小集体户主'，'户主']"
  },
  emits: ["change", "update:value"],
  setup(C, { emit: H }) {
    const U = C;
    let W = ref(U.value), K = ref([]), G = null, X = ref([]);
    const Z = H, Q = (oe) => {
      U.textBl && (K.value.length > 0 ? K.value : X.value).some((se) => {
        if (se.value == oe)
          return oe = se.label, !0;
      }), Z("change", oe || ""), Z("update:value", oe || "");
    }, ee = () => {
      if (!U.collectionType)
        return null;
      let oe = getDictItems(U.collectionType);
      return U.excludes.length > 0 && (oe = oe.filter((ie) => !U.excludes.includes(ie.label))), U.sys.length > 0 && (oe = oe.filter((ie) => ie.field01 && ie.field01.includes(U.sys))), U.unArry.length > 0 && oe.unshift(...U.unArry), U.endArry.length > 0 && oe.push(...U.endArry), X.value = oe, U.groupType ? te(oe) : oe;
    }, te = (oe) => {
      let ie = [], se = [];
      return oe.forEach((ue, le) => {
        if (ue.cssStyle == "group") {
          if (ie.push(ue), le != 0) {
            let ce = ie.pop();
            ce.list = se, ie.push(ce);
          }
          se = [];
        } else if (ie.length == 0)
          ie.push(ue);
        else if (se.push(ue), le == oe.length - 1) {
          let ce = ie.pop();
          ce.list = se, ie.push(ce);
        }
      }), ie;
    }, re = (oe) => {
      G && clearTimeout(G), U.url && (G = setTimeout(() => {
        let ie = U.postInfo;
        ie[U.postInfo.key] = oe, http.get(U.url, ie).then((se) => {
          se.code == 200 && se.data ? K.value = se.data : message.warning(se.message);
        });
      }, 200));
    }, ne = () => {
      U.url && re();
    }, ae = computed(() => K.value.length > 0 ? K.value : ee());
    return watch(
      () => U.value,
      (oe, ie) => {
        if (U.isWrite) {
          W.value = oe || "";
          return;
        }
        let se = K.value.length > 0 ? K.value : X.value, ue = se.some((le) => {
          if (le.value == oe)
            return !0;
        });
        W.value = ue ? oe : "", U.isrest && !ue && oe !== "" && oe !== void 0 && oe !== null && se.length > 0 && Q(W.value);
      },
      {
        deep: !0
        // 深度监听
      }
    ), watch(
      () => X.value,
      (oe, ie) => {
        if (U.isWrite)
          return;
        let se = oe.some((ue) => {
          if (ue.value == U.value)
            return !0;
        });
        W.value = se ? U.value : "", U.isrest && !se && U.value !== "" && U.value !== void 0 && U.value !== null && oe.length > 0 && Q(W.value);
      },
      {
        deep: !0
        // 深度监听
      }
    ), watch(
      () => U.postInfo,
      (oe, ie) => {
        ne();
      },
      {
        immediate: !0,
        // 立即执行
        deep: !0
        // 深度监听
      }
    ), (oe, ie) => {
      const se = resolveComponent("a-select-option"), ue = resolveComponent("a-select-opt-group"), le = resolveComponent("a-select");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(le, {
          showSearch: C.mode !== "combobox",
          placeholder: C.placeholder,
          onChange: Q,
          value: unref(W),
          "onUpdate:value": ie[0] || (ie[0] = (ce) => isRef(W) ? W.value = ce : W = ce),
          optionFilterProp: "label",
          mode: C.mode,
          optionLabelProp: "children",
          dropdownMatchSelectWidth: !1,
          disabled: C.disabled,
          style: normalizeStyle$1({ width: C.selectWidth }),
          allowClear: C.allowClear
        }, {
          default: withCtx(() => [
            C.groupType ? (openBlock(!0), createElementBlock(Fragment, { key: 1 }, renderList(ae.value, (ce) => (openBlock(), createElementBlock(Fragment, null, [
              ce.list ? (openBlock(), createBlock(ue, {
                key: ce.value
              }, {
                default: withCtx(() => [
                  (openBlock(!0), createElementBlock(Fragment, null, renderList(ce.list, (fe) => (openBlock(), createBlock(se, {
                    key: fe.value,
                    value: fe.value
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(C.showValue ? fe.value + " " : "") + toDisplayString(fe.label), 1)
                    ]),
                    _: 2
                  }, 1032, ["value"]))), 128))
                ]),
                _: 2
              }, 1024)) : (openBlock(), createBlock(se, {
                key: ce.value,
                value: ce.value
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(C.showValue ? ce.value + " " : "") + toDisplayString(ce.label), 1)
                ]),
                _: 2
              }, 1032, ["value"]))
            ], 64))), 256)) : (openBlock(!0), createElementBlock(Fragment, { key: 0 }, renderList(ae.value, (ce) => (openBlock(), createBlock(se, {
              key: ce.value,
              value: ce.value,
              label: ce.label
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(C.showValue ? ce.value + " " : "") + toDisplayString(ce.label), 1)
              ]),
              _: 2
            }, 1032, ["value", "label"]))), 128))
          ]),
          _: 1
        }, 8, ["showSearch", "placeholder", "value", "mode", "disabled", "style", "allowClear"])
      ]);
    };
  }
}), _export_sfc = (C, H) => {
  const U = C.__vccOpts || C;
  for (const [W, K] of H)
    U[W] = K;
  return U;
}, ehrSelect = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-119aad1c"]]);
let file = {
  // 上传文件
  upload(C, H, U, W, K) {
    let G = config.getValue("MAX_FILE_SIZE"), X = G * 1024 * 1024, Z = ["image/png", "image/jpeg", "image/gif"];
    if (C.size / 1024 > 500 && C.type && Z.includes(C.type))
      photoCompress(C, 0.8, (Q) => {
        if (Q.size && Q.size > X) {
          message.error(`上传文件不能大于${G}M`, 3), window.Base.showMask(!1);
          return;
        }
        this.setUpload(Q, H, U, W, K);
      });
    else {
      if (C.size && C.size > X) {
        message.error(`上传文件不能大于${G}M`, 3), window.Base.showMask(!1);
        return;
      }
      this.setUpload(C, H, U, W, K);
    }
  },
  setUpload(C, H, U, W, K) {
    let G = new FormData();
    G.append("file", C), G.append("dirCode", H), G.append("resId", U), G.append("resType", W), http.submit("post", faceConfig.ehrPath + "/api/file/uploadFile", G, void 0).then((X) => {
      K(X);
    });
  },
  // 下载文件
  view(C) {
    let H = this.getUrl(C);
    window.open(H);
  },
  // 取得文件路径
  getUrl(fid) {
    let server = eval("(" + config.getValue("FILE_SERVER") + ")"), url = server.url + "/api/file/view?fid=" + fid;
    return url;
  }
};
function dataURLtoFile(C, H, U) {
  let W = C.split(","), K = W[0].match(/:(.*?);/)[1], G = atob(W[1]), X = G.length, Z = new Uint8Array(X);
  for (; X--; )
    Z[X] = G.charCodeAt(X);
  let Q = U.name;
  return new File([Z], Q, { type: K });
}
async function photoCompress(C, H, U) {
  const W = await filetoDataURL(C), K = { quality: H };
  let G = W.split(",")[0].match(/:(.*?);/)[1], X = "image/jpeg";
  const Z = await dataURLtoImage(W), ee = imagetoCanvas(Z, Object.assign({}, K)).toDataURL(X, K.quality), te = dataURLtoFile(ee, G, C);
  te.size < C.size && te.size / 1024 > 500 ? photoCompress(te, 0.6, U) : te.size > C.size ? U(C) : U(te);
}
function filetoDataURL(C) {
  return new Promise((H, U) => {
    const W = new FileReader();
    W.onloadend = (K) => H(K.target.result), W.onerror = () => U(new Error("dataURLtoImage(): dataURL is illegal")), W.readAsDataURL(C);
  });
}
function dataURLtoImage(C) {
  return new Promise((H, U) => {
    const W = new Image();
    W.onload = () => H(W), W.onerror = () => U(new Error("dataURLtoImage(): dataURL is illegal")), W.src = C;
  });
}
function imagetoCanvas(C, H = {}) {
  const U = { ...H }, W = document.createElement("canvas"), K = W.getContext("2d");
  let G, X;
  for (const Z in U)
    Object.prototype.hasOwnProperty.call(U, Z) && (U[Z] = Number(U[Z]));
  if (!U.scale)
    X = U.width || U.height * C.width / C.height || C.width, G = U.height || U.width * C.height / C.width || C.height;
  else {
    const Z = U.scale > 0 && U.scale < 10 ? U.scale : 1;
    X = C.width * Z, G = C.height * Z;
  }
  switch ([5, 6, 7, 8].some((Z) => Z === U.orientation) ? (W.height = X, W.width = G) : (W.height = G, W.width = X), U.orientation) {
    case 3:
      K.rotate(180 * Math.PI / 180), K.drawImage(C, -W.width, -W.height, W.width, W.height);
      break;
    case 6:
      K.rotate(90 * Math.PI / 180), K.drawImage(C, 0, -W.width, W.height, W.width);
      break;
    case 8:
      K.rotate(270 * Math.PI / 180), K.drawImage(C, -W.height, 0, W.height, W.width);
      break;
    case 2:
      K.translate(W.width, 0), K.scale(-1, 1), K.drawImage(C, 0, 0, W.width, W.height);
      break;
    case 4:
      K.translate(W.width, 0), K.scale(-1, 1), K.rotate(180 * Math.PI / 180), K.drawImage(C, -W.width, -W.height, W.width, W.height);
      break;
    case 5:
      K.translate(W.width, 0), K.scale(-1, 1), K.rotate(90 * Math.PI / 180), K.drawImage(C, 0, -W.width, W.height, W.width);
      break;
    case 7:
      K.translate(W.width, 0), K.scale(-1, 1), K.rotate(270 * Math.PI / 180), K.drawImage(C, -W.height, 0, W.height, W.width);
      break;
    default:
      K.drawImage(C, 0, 0, W.width, W.height);
  }
  return W;
}
const valid = {
  validateCode(C, H, U) {
    const W = /^[0-9_#a-zA-Z]+$/;
    return H === "" || H === null || H === void 0 || W.test(H) ? Promise.resolve() : Promise.reject("只能由数字 英文 下划线 #组成！");
  },
  validateName(C, H, U) {
    const W = /^[\u4e00-\u9fa5(（）)0-9_#a-zA-Z]+$/;
    return H === "" || H === null || H === void 0 || W.test(H) ? Promise.resolve() : Promise.reject("只能由中英文 数字 下划线 # 括号组成！");
  },
  // 公安户号校验
  validateGahhMinNumber(C, H, U) {
    return H ? H.length < 6 ? Promise.reject("输入长度必须大于等于6") : H.length > 10 ? Promise.reject("输入长度必须小于等于10") : Promise.resolve() : Promise.resolve();
  },
  validPhone(C, H, U) {
    const W = /^((0\d{2}(-)?\d{8})|(0\d{3}(-)?\d{7})|([1-9]{1}\d{6,7})|(1([1-9][0-9])[0-9]{8}))$/;
    if (H) {
      if (H == "无" || H == "不详")
        return Promise.resolve();
      if (W.test(H))
        return Promise.resolve();
    } else
      return Promise.resolve();
    return Promise.reject("请输入正确的电话号码！");
  },
  number(C, H, U) {
    return (W, K, G) => typeof K == "string" && K === "" || K === null ? Promise.resolve() : U ? K < H ? Promise.reject(C + " 应大于等于 " + H) : K > U ? Promise.reject(C + " 应小于等于" + U) : Promise.resolve() : K < H ? Promise.reject(C + " 应大于等于 " + H) : Promise.resolve();
  },
  validNumLen(C = 2) {
    return (H, U, W) => {
      if (U) {
        let K = U.toString().split(".");
        return K.length == 2 && K[1].length > C ? Promise.reject(`最多保留${C}位小数`) : Promise.resolve();
      } else
        return Promise.resolve();
    };
  },
  validateInt(C, H, U) {
    const W = /^[0-9]+$/;
    return H === "" || H === null || H === void 0 || W.test(H) ? Promise.resolve() : Promise.reject("只能输入数字！");
  },
  /*
  * end 为相比较的那个组件fieldDecoratorId
  * this.valid.compare(other, '>', 'nlEnd', '开始值必须小于结束值')}
  */
  compare(C, H, U) {
    return U = U || "关系值错误", (W, K, G) => K != 0 && !K ? Promise.resolve() : H ? C.indexOf(">") ? K < H ? Promise.reject(U) : Promise.resolve() : C.indexOf("<") ? K > H ? Promise.reject(U) : Promise.resolve() : C == "=" && K != H ? Promise.reject(U) : Promise.resolve() : Promise.resolve();
  },
  /**
   * 姓名判断是否是中文英文和空格
   */
  isName(C = 50, H = 2, U = "无") {
    let W = /^((?![\u3000-\u303F])[\u2E80-\uFE4F\s_\-·a-zA-Z])*$/;
    return (K, G, X) => {
      let Z = /^((?![\u3000-\u303F])[\u2E80-\uFE4F])*$/, Q = 0;
      if (!G || U && U == G)
        return Promise.resolve();
      for (let te = 0; te < G.length; te++)
        Z.test(G[te]) ? Q += 2 : Q++;
      return G.length < H ? Promise.reject("不能低于2个字符!") : Q > C ? Promise.reject(`不能超过${C / 2}个字符!`) : /^\S.*\S$|(^\S{0,1}\S$)/.test(G) ? W.test(G) ? Promise.resolve() : Promise.reject("只能由中文和英文组成！") : Promise.reject("前后不能有空格！");
    };
  },
  /** 区域限制，必须选择到村 */
  validCun(C, H, U) {
    return H && H.length != 12 ? Promise.reject("请选择到村居级别") : Promise.resolve();
  },
  // 身份证校验
  idcard(C) {
    return (H, U, W) => {
      if (C != null && C === !1)
        return Promise.resolve();
      if (U) {
        if (U.length != 18)
          return Promise.reject("身份证号码长度18位");
        {
          const K = util.idcardCheck(U);
          return K.success ? Promise.resolve() : Promise.reject(K.message);
        }
      } else
        return Promise.resolve();
    };
  },
  // 身份证校验 支持临时身份证号码
  idcardWithLs(C) {
    return (H, U, W) => {
      if (C != null && C() == !1)
        return Promise.resolve();
      if (U) {
        if (U.length != 18)
          return Promise.reject("身份证号码长度18位");
        {
          if (U.startsWith("SY") || U.startsWith("LS"))
            return Promise.resolve();
          const K = util.idcardCheck(U);
          return K.success ? Promise.resolve() : Promise.reject(K.message);
        }
      } else
        return Promise.resolve();
    };
  }
}, arry = [
  { view: _sfc_main$1, name: "ehrDate" },
  { view: ehrSelect, name: "ehrSelect" }
], install = function(C) {
  arry.forEach((H) => {
    C.component(H.name, H.view);
  }), C.config.globalProperties.$http = http, C.config.globalProperties.$util = util, C.config.globalProperties.$valid = valid, C.config.globalProperties.$flie = file;
};
typeof window < "u" && window.Vue && install(window.Vue);
const index = { install };
export {
  index as default
};