export const ReactChopper = (target, componentReference) => {
  const preproxy = new WeakMap();

  const makeHandler = path => {
    return {
      set(target, key, value, receiver) {
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

  const proxify = (obj, path) => {
    for (let key of Object.keys(obj)) {
      if (typeof obj[key] === "object") {
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
