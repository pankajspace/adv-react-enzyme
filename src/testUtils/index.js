export const findElement = (wrapper, attrValue) =>
  wrapper.find(`[data-test='${attrValue}']`);
