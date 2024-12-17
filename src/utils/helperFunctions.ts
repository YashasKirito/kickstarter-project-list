export const pick = (obj: any, keys: string[]) => {
  let returnObj: any = {};
  keys.forEach((key) => {
    returnObj[key] = obj[key];
  });
  return returnObj;
};

