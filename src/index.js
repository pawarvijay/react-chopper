export const ReactChopper = (target, componentReference) => {

  const preproxy = new WeakMap();

  /**
   * function `makeHandler`.
   *
   * Returns an object with assigned handler for proxified object.
   */
  const makeHandler = path => {
    return {
      set(target, key, value) {
        if (typeof value === "object") {
          value = proxify(value, [...path, key]);
        }
        if (!Object.prototype.hasOwnProperty.call(target, key)) {
          console.warn("You are trying to set a new property \"" + key + "\" to your proxified object which was not present in the beginning. This will not work in polyfilled browsers as properties need to be sealed.");
        }
        target[key] = value;
        componentReference.setState({ [key]: value });
        return true;
      }
    };
  };

  /**
   * function `isObject`.
   *
   * Returns true if `data` is a plain-old JS object, false otherwise.
   */
  const isObject = (data) => Object.prototype.toString.call(data) === '[object Object]';

  /**
   * function `isNotAnEmptyObject`.
   *
   * Returns true if `data` is a plain-old JS object but not at empty object, false otherwise.
   */
  const isNotAnEmptyObject = (data) => isObject(data) && Object.keys(data).length > 0;

  /**
   * function `isProxifiable`.
   *
   * Returns true if `data` can be isProxifiable, false otherwise.
   */
  const isProxifiable = (data) => ((data instanceof Array) || data instanceof Object && isNotAnEmptyObject(data)) ? true : false;

  /**
   * function `proxify`.
   *
   * Returns proxified object.
   */
  const proxify = (obj, path) => {
    for (let key of Object.keys(obj)) {
      if (isProxifiable(obj[key])) {
        obj[key] = proxify(obj[key], [...path, key]);
      }
    }
    let p = new Proxy(obj, makeHandler(path));
    if (typeof Object.seal === "function") {
      Object.seal(obj);
      Object.seal(p);
    }
    preproxy.set(p, obj);
    return p;
  };

  return proxify(target, []);
};

export default ReactChopper;
