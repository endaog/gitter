export function keyMirror<T extends {}>(keys: T, namespace?: string): {[K in keyof T]: string} {
  const mirror = {};

  Object.keys(keys).forEach((key) => {
    mirror[key] = namespace ? `${namespace}@${key}` : key;
  });

  return mirror as {[K in keyof T]: string};
}