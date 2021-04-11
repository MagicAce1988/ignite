import { useEffect } from 'react';

export const useOutsideClick = (ref, onClickOutside) => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, onClickOutside]);
};

export const stickyBody = (state) => {
  const body = document.querySelector('body');
  body.style.overflow = state ? 'hidden' : 'auto';
};

export const useKeyboardBehaviour = (key, effect, event) => {
  const keyCodeMap = {
    backspace: 8,
    tab: 9,
    enter: 13,
    shift: 16,
    ctrl: 17,
    alt: 18,
    pause: 19,
    capsLock: 20,
    escape: 27,
    pageUp: 33,
    space: 32,
    pageDown: 34,
    end: 35,
    home: 36,
    arrowLeft: 37,
    arrowUp: 38,
    arrowRight: 39,
    arrowDown: 40,
    printScreen: 44,
    insert: 45,
    delete: 46,
    0: 48,
    1: 49,
    2: 50,
    3: 51,
    4: 52,
    5: 53,
    6: 54,
    7: 55,
    8: 56,
    9: 57,
    a: 65,
    b: 66,
    c: 67,
    d: 68,
    e: 69,
    f: 70,
    g: 71,
    h: 72,
    i: 73,
    j: 74,
    k: 75,
    l: 76,
    m: 77,
    n: 78,
    o: 79,
    p: 80,
    q: 81,
    r: 82,
    s: 83,
    t: 84,
    u: 85,
    v: 86,
    w: 87,
    x: 88,
    y: 89,
    z: 90,
    numpad0: 96,
    numpad1: 97,
    numpad2: 98,
    numpad3: 99,
    numpad4: 100,
    numpad5: 101,
    numpad6: 102,
    numpad7: 103,
    numpad8: 104,
    numpad9: 105,
    multiply: 106,
    add: 107,
    subtract: 109,
    decimalPoint: 110,
    divide: 111,
    f1: 112,
    f2: 113,
    f3: 114,
    f4: 115,
    f5: 116,
    f6: 117,
    f7: 118,
    f8: 119,
    f9: 120,
    f10: 121,
    f11: 122,
    f12: 123,
    numLock: 144,
    scrollLock: 145,
    semiColon: 186,
    equalSign: 187,
    comma: 188,
    dash: 189,
    period: 190,
    forwardSlash: 191,
    openBracket: 219,
    backSlash: 220,
    closeBracket: 221,
    singleQuote: 222,
  };
  useEffect(() => {
    const action = (e) => {
      if (e.keyCode === keyCodeMap[key]) effect();
    };
    document.addEventListener(event || 'keydown', action);

    return () => {
      document.removeEventListener(event || 'keydown', action);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export const minimizeImageFromApi = (imagePath, size) => {
  const image =
    imagePath &&
    (imagePath.match(/media\/screenshots/)
      ? imagePath.replace(
          'media/screenshots',
          `media/resize/${size}/-/screenshots`
        )
      : imagePath.replace('/media/games/', `/media/resize/${size}/-/games/`));
  return image;
};

export const getValueAtAddress = (obj = {}, address) => {
  const addressArray = address.split('.');
  return addressArray.reduce((acc, curr) => acc[curr], obj);
};

export const removeSameStartDuplicates = (
  array,
  numberOfChars,
  addressInObject
) => {
  return array.reduce((acc, val) => {
    if (
      acc.findIndex((element) =>
        addressInObject
          ? getValueAtAddress(element, addressInObject).startsWith(
              getValueAtAddress(val, addressInObject).slice(0, numberOfChars)
            )
          : element.startsWith(val.slice(0, numberOfChars))
      ) === -1
    ) {
      acc = [...acc, val];
    }
    return acc;
  }, []);
};
