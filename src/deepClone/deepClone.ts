export function deepClone(obj: any) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  let rstObj;
  if (obj instanceof Array) {
    rstObj = [];
  } else {
    rstObj = {};
  }

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      rstObj[key] = deepClone(obj[key]);
    }
  }
  return rstObj;
}
