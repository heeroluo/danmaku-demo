let getTranslateX;
const DOMMatrix = global.WebKitCSSMatrix || global.DOMMatrix || global.MSCSSMatrix;
if (global.getComputedStyle && DOMMatrix) {
  getTranslateX = (node) => {
    const transform = global.getComputedStyle(node, null).getPropertyValue('transform');
    return Number(new DOMMatrix(transform).m41);
  };
} else {
  getTranslateX = (node) => {
    // matrix(1, 0, 0, 1, -100, 0)
    const transform = global.getComputedStyle(node, null).getPropertyValue('transform');
    return Number(transform.match(/[+-]?\d+/g)[4]);
  };
}

export { getTranslateX };

let hiddenProp, visibilityChangeEvent;
if (typeof document.hidden !== 'undefined') {
  hiddenProp = 'hidden';
  visibilityChangeEvent = 'visibilitychange';
} else if (typeof document.msHidden !== 'undefined') {
  hiddenProp = 'msHidden';
  visibilityChangeEvent = 'msvisibilitychange';
} else if (typeof document.webkitHidden !== 'undefined') {
  hiddenProp = 'webkitHidden';
  visibilityChangeEvent = 'webkitvisibilitychange';
}

export { hiddenProp, visibilityChangeEvent };
