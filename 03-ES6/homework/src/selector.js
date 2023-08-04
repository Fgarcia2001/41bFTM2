var traverseDomAndCollectElements = function (
  matchFunc,
  startEl,
  resultSet = []
) {
  //var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }
  if (matchFunc(startEl)) {
    resultSet.push(startEl);
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  for (let i = 0; i < startEl.children.length; i++) {
    const element = startEl.children[i];
    traverseDomAndCollectElements(matchFunc, element, resultSet);
  }
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function (selector) {
  // tu código aquí
  if (selector[0] === "#") return "id";
  if (selector[0] === ".") return "class";
  if (selector.split(".").length > 1) return "tag.class";
  return "tag";
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") {
    matchFunction = (elem) => `#${elem.id}` === selector;
  } else if (selectorType === "class") {
    matchFunction = function (element) {
      let clases = element.classList;
      return clases.contains(selector.slice(1));
    };
  } else if (selectorType === "tag.class") {
    matchFunction = function (element) {
      const [tag, clase] = selector.split(".");
      //recursion
      return (
        matchFunctionMaker(tag)(element) &&
        matchFunctionMaker(`.${clase}`)(element)
      );
    };
  } else if (selectorType === "tag") {
    matchFunction = function (element) {
      /* if (element.tagName.toLowerCase() === selector) {
        return true
      } */
      return element.tagName.toLowerCase() === selector;
    };
  }

  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
