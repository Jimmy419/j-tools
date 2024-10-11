/* eslint-disable */
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


// export function deepClone<T>(obj: T): T {
//   if (typeof obj !== "object" || obj === null) {
//     return obj;
//   }

//   let rstObj: any;
//   if (Array.isArray(obj)) {
//     rstObj = [];
//   } else {
//     rstObj = {} as { [key: string]: any };
//   }

//   for (let key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//       rstObj[key] = deepClone(obj[key]);
//     }
//   }

//   return rstObj as T;
// }
