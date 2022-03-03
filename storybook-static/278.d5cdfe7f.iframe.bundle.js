/*! For license information please see 278.d5cdfe7f.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkfrontend = self.webpackChunkfrontend || []).push([
  [278],
  {
    "./node_modules/@storybook/components/dist/esm/syntaxhighlighter/syntaxhighlighter.js":
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            SyntaxHighlighter: () => syntaxhighlighter_SyntaxHighlighter,
            createCopyToClipboardFunction: () => createCopyToClipboardFunction,
            default: () => syntaxhighlighter,
          });
        __webpack_require__("./node_modules/regenerator-runtime/runtime.js"),
          __webpack_require__(
            "./node_modules/core-js/modules/es.object.entries.js"
          ),
          __webpack_require__(
            "./node_modules/core-js/modules/es.object.assign.js"
          ),
          __webpack_require__(
            "./node_modules/core-js/modules/es.string.trim.js"
          ),
          __webpack_require__(
            "./node_modules/core-js/modules/es.object.to-string.js"
          ),
          __webpack_require__(
            "./node_modules/core-js/modules/es.regexp.to-string.js"
          ),
          __webpack_require__("./node_modules/core-js/modules/es.symbol.js"),
          __webpack_require__(
            "./node_modules/core-js/modules/es.symbol.description.js"
          ),
          __webpack_require__(
            "./node_modules/core-js/modules/es.symbol.iterator.js"
          ),
          __webpack_require__(
            "./node_modules/core-js/modules/es.string.iterator.js"
          ),
          __webpack_require__(
            "./node_modules/core-js/modules/es.array.iterator.js"
          ),
          __webpack_require__(
            "./node_modules/core-js/modules/web.dom-collections.iterator.js"
          ),
          __webpack_require__(
            "./node_modules/core-js/modules/es.array.slice.js"
          ),
          __webpack_require__(
            "./node_modules/core-js/modules/es.function.name.js"
          ),
          __webpack_require__(
            "./node_modules/core-js/modules/es.array.from.js"
          ),
          __webpack_require__("./node_modules/core-js/modules/es.promise.js"),
          __webpack_require__(
            "./node_modules/core-js/modules/es.object.keys.js"
          );
        var react = __webpack_require__("./node_modules/react/index.js"),
          esm = __webpack_require__(
            "./node_modules/@storybook/client-logger/dist/esm/index.js"
          ),
          dist_esm = __webpack_require__(
            "./node_modules/@storybook/theming/dist/esm/index.js"
          ),
          global_window = __webpack_require__(
            "./node_modules/global/window.js"
          ),
          window_default = __webpack_require__.n(global_window),
          memoizerific = __webpack_require__(
            "./node_modules/memoizerific/memoizerific.js"
          ),
          memoizerific_default = __webpack_require__.n(memoizerific),
          jsx = __webpack_require__("./node_modules/refractor/lang/jsx.js");
        const prism_jsx = __webpack_require__.n(jsx)();
        var bash = __webpack_require__("./node_modules/refractor/lang/bash.js");
        const prism_bash = __webpack_require__.n(bash)();
        var css = __webpack_require__("./node_modules/refractor/lang/css.js");
        const prism_css = __webpack_require__.n(css)();
        var js_extras = __webpack_require__(
          "./node_modules/refractor/lang/js-extras.js"
        );
        const prism_js_extras = __webpack_require__.n(js_extras)();
        var json = __webpack_require__("./node_modules/refractor/lang/json.js");
        const prism_json = __webpack_require__.n(json)();
        var graphql = __webpack_require__(
          "./node_modules/refractor/lang/graphql.js"
        );
        const prism_graphql = __webpack_require__.n(graphql)();
        var markup = __webpack_require__(
          "./node_modules/refractor/lang/markup.js"
        );
        const prism_markup = __webpack_require__.n(markup)();
        var markdown = __webpack_require__(
          "./node_modules/refractor/lang/markdown.js"
        );
        const prism_markdown = __webpack_require__.n(markdown)();
        var yaml = __webpack_require__("./node_modules/refractor/lang/yaml.js");
        const prism_yaml = __webpack_require__.n(yaml)();
        var tsx = __webpack_require__("./node_modules/refractor/lang/tsx.js");
        const prism_tsx = __webpack_require__.n(tsx)();
        var typescript = __webpack_require__(
          "./node_modules/refractor/lang/typescript.js"
        );
        const prism_typescript = __webpack_require__.n(typescript)();
        var objectWithoutPropertiesLoose = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"
        );
        var defineProperty = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/defineProperty.js"
        );
        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = null != arguments[i] ? Object(arguments[i]) : {},
              ownKeys = Object.keys(source);
            "function" == typeof Object.getOwnPropertySymbols &&
              ownKeys.push.apply(
                ownKeys,
                Object.getOwnPropertySymbols(source).filter(function (sym) {
                  return Object.getOwnPropertyDescriptor(
                    source,
                    sym
                  ).enumerable;
                })
              ),
              ownKeys.forEach(function (key) {
                (0, defineProperty.Z)(target, key, source[key]);
              });
          }
          return target;
        }
        var esm_extends = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/extends.js"
        );
        function createStyleObject(classNames) {
          var elementStyle =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            stylesheet = arguments.length > 2 ? arguments[2] : void 0;
          return classNames.reduce(function (styleObject, className) {
            return _objectSpread({}, styleObject, stylesheet[className]);
          }, elementStyle);
        }
        function createClassNameString(classNames) {
          return classNames.join(" ");
        }
        function createElement(_ref) {
          var node = _ref.node,
            stylesheet = _ref.stylesheet,
            _ref$style = _ref.style,
            style = void 0 === _ref$style ? {} : _ref$style,
            useInlineStyles = _ref.useInlineStyles,
            key = _ref.key,
            properties = node.properties,
            type = node.type,
            TagName = node.tagName,
            value = node.value;
          if ("text" === type) return value;
          if (TagName) {
            var childrenCreator = (function createChildren(
                stylesheet,
                useInlineStyles
              ) {
                var childrenCount = 0;
                return function (children) {
                  return (
                    (childrenCount += 1),
                    children.map(function (child, i) {
                      return createElement({
                        node: child,
                        stylesheet,
                        useInlineStyles,
                        key: "code-segment-"
                          .concat(childrenCount, "-")
                          .concat(i),
                      });
                    })
                  );
                };
              })(stylesheet, useInlineStyles),
              nonStylesheetClassNames =
                useInlineStyles &&
                properties.className &&
                properties.className.filter(function (className) {
                  return !stylesheet[className];
                }),
              className =
                nonStylesheetClassNames && nonStylesheetClassNames.length
                  ? nonStylesheetClassNames
                  : void 0,
              props = useInlineStyles
                ? _objectSpread(
                    {},
                    properties,
                    {
                      className: className && createClassNameString(className),
                    },
                    {
                      style: createStyleObject(
                        properties.className,
                        Object.assign({}, properties.style, style),
                        stylesheet
                      ),
                    }
                  )
                : _objectSpread({}, properties, {
                    className: createClassNameString(properties.className),
                  }),
              children = childrenCreator(node.children);
            return react.createElement(
              TagName,
              (0, esm_extends.Z)({ key }, props),
              children
            );
          }
        }
        var newLineRegex = /\n/g;
        function AllLineNumbers(_ref2) {
          var codeString = _ref2.codeString,
            codeStyle = _ref2.codeStyle,
            _ref2$containerStyle = _ref2.containerStyle,
            containerStyle =
              void 0 === _ref2$containerStyle
                ? { float: "left", paddingRight: "10px" }
                : _ref2$containerStyle,
            _ref2$numberStyle = _ref2.numberStyle,
            numberStyle = void 0 === _ref2$numberStyle ? {} : _ref2$numberStyle,
            startingLineNumber = _ref2.startingLineNumber;
          return react.createElement(
            "code",
            { style: Object.assign({}, codeStyle, containerStyle) },
            (function getAllLineNumbers(_ref) {
              var lines = _ref.lines,
                startingLineNumber = _ref.startingLineNumber,
                style = _ref.style;
              return lines.map(function (_, i) {
                var number = i + startingLineNumber;
                return react.createElement(
                  "span",
                  {
                    key: "line-".concat(i),
                    className: "react-syntax-highlighter-line-number",
                    style: "function" == typeof style ? style(number) : style,
                  },
                  "".concat(number, "\n")
                );
              });
            })({
              lines: codeString.replace(/\n$/, "").split("\n"),
              style: numberStyle,
              startingLineNumber,
            })
          );
        }
        function getInlineLineNumber(lineNumber, inlineLineNumberStyle) {
          return {
            type: "element",
            tagName: "span",
            properties: {
              key: "line-number--".concat(lineNumber),
              className: [
                "comment",
                "linenumber",
                "react-syntax-highlighter-line-number",
              ],
              style: inlineLineNumberStyle,
            },
            children: [{ type: "text", value: lineNumber }],
          };
        }
        function assembleLineNumberStyles(
          lineNumberStyle,
          lineNumber,
          largestLineNumber
        ) {
          var num, len;
          return _objectSpread(
            {},
            {
              display: "inline-block",
              minWidth:
                ((num = largestLineNumber),
                (len = num.toString().length),
                "".concat(len, "em")),
              paddingRight: "1em",
              textAlign: "right",
              userSelect: "none",
            },
            "function" == typeof lineNumberStyle
              ? lineNumberStyle(lineNumber)
              : lineNumberStyle
          );
        }
        function createLineElement(_ref3) {
          var children = _ref3.children,
            lineNumber = _ref3.lineNumber,
            lineNumberStyle = _ref3.lineNumberStyle,
            largestLineNumber = _ref3.largestLineNumber,
            showInlineLineNumbers = _ref3.showInlineLineNumbers,
            _ref3$lineProps = _ref3.lineProps,
            lineProps = void 0 === _ref3$lineProps ? {} : _ref3$lineProps,
            _ref3$className = _ref3.className,
            className = void 0 === _ref3$className ? [] : _ref3$className,
            properties =
              "function" == typeof lineProps
                ? lineProps(lineNumber)
                : lineProps;
          if (
            ((properties.className = className),
            lineNumber && showInlineLineNumbers)
          ) {
            var inlineLineNumberStyle = assembleLineNumberStyles(
              lineNumberStyle,
              lineNumber,
              largestLineNumber
            );
            children.unshift(
              getInlineLineNumber(lineNumber, inlineLineNumberStyle)
            );
          }
          return { type: "element", tagName: "span", properties, children };
        }
        function flattenCodeTree(tree) {
          for (
            var className =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : [],
              newTree =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : [],
              i = 0;
            i < tree.length;
            i++
          ) {
            var node = tree[i];
            if ("text" === node.type)
              newTree.push(createLineElement({ children: [node], className }));
            else if (node.children) {
              var classNames = className.concat(node.properties.className);
              newTree = newTree.concat(
                flattenCodeTree(node.children, classNames)
              );
            }
          }
          return newTree;
        }
        function processLines(
          codeTree,
          wrapLines,
          lineProps,
          showLineNumbers,
          showInlineLineNumbers,
          startingLineNumber,
          largestLineNumber,
          lineNumberStyle
        ) {
          var _ref4,
            tree = flattenCodeTree(codeTree.value),
            newTree = [],
            lastLineBreakIndex = -1,
            index = 0;
          function createWrappedLine(children, lineNumber) {
            var className =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : [];
            return createLineElement({
              children,
              lineNumber,
              lineNumberStyle,
              largestLineNumber,
              showInlineLineNumbers,
              lineProps,
              className,
            });
          }
          function createUnwrappedLine(children, lineNumber) {
            if (lineNumber && showInlineLineNumbers) {
              var inlineLineNumberStyle = assembleLineNumberStyles(
                lineNumberStyle,
                lineNumber,
                largestLineNumber
              );
              children.unshift(
                getInlineLineNumber(lineNumber, inlineLineNumberStyle)
              );
            }
            return children;
          }
          function createLine(children, lineNumber) {
            var className =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : [];
            return wrapLines || className.length > 0
              ? createWrappedLine(children, lineNumber, className)
              : createUnwrappedLine(children, lineNumber);
          }
          for (
            var _loop = function _loop() {
              var node = tree[index],
                value = node.children[0].value;
              if (
                (function getNewLines(str) {
                  return str.match(newLineRegex);
                })(value)
              ) {
                var splitValue = value.split("\n");
                splitValue.forEach(function (text, i) {
                  var lineNumber =
                      showLineNumbers && newTree.length + startingLineNumber,
                    newChild = { type: "text", value: "".concat(text, "\n") };
                  if (0 === i) {
                    var _line = createLine(
                      tree
                        .slice(lastLineBreakIndex + 1, index)
                        .concat(
                          createLineElement({
                            children: [newChild],
                            className: node.properties.className,
                          })
                        ),
                      lineNumber
                    );
                    newTree.push(_line);
                  } else if (i === splitValue.length - 1) {
                    if (
                      tree[index + 1] &&
                      tree[index + 1].children &&
                      tree[index + 1].children[0]
                    ) {
                      var newElem = createLineElement({
                        children: [{ type: "text", value: "".concat(text) }],
                        className: node.properties.className,
                      });
                      tree.splice(index + 1, 0, newElem);
                    } else {
                      var _line2 = createLine(
                        [newChild],
                        lineNumber,
                        node.properties.className
                      );
                      newTree.push(_line2);
                    }
                  } else {
                    var _line3 = createLine(
                      [newChild],
                      lineNumber,
                      node.properties.className
                    );
                    newTree.push(_line3);
                  }
                }),
                  (lastLineBreakIndex = index);
              }
              index++;
            };
            index < tree.length;

          )
            _loop();
          if (lastLineBreakIndex !== tree.length - 1) {
            var children = tree.slice(lastLineBreakIndex + 1, tree.length);
            if (children && children.length) {
              var line = createLine(
                children,
                newTree.length + startingLineNumber
              );
              newTree.push(line);
            }
          }
          return wrapLines
            ? newTree
            : (_ref4 = []).concat.apply(_ref4, newTree);
        }
        function defaultRenderer(_ref5) {
          var rows = _ref5.rows,
            stylesheet = _ref5.stylesheet,
            useInlineStyles = _ref5.useInlineStyles;
          return rows.map(function (node, i) {
            return createElement({
              node,
              stylesheet,
              useInlineStyles,
              key: "code-segement".concat(i),
            });
          });
        }
        function isHighlightJs(astGenerator) {
          return astGenerator && void 0 !== astGenerator.highlightAuto;
        }
        var core = __webpack_require__("./node_modules/refractor/core.js"),
          core_default = __webpack_require__.n(core),
          SyntaxHighlighter = (function highlight(
            defaultAstGenerator,
            defaultStyle
          ) {
            return function SyntaxHighlighter(_ref7) {
              var language = _ref7.language,
                children = _ref7.children,
                _ref7$style = _ref7.style,
                style = void 0 === _ref7$style ? defaultStyle : _ref7$style,
                _ref7$customStyle = _ref7.customStyle,
                customStyle =
                  void 0 === _ref7$customStyle ? {} : _ref7$customStyle,
                _ref7$codeTagProps = _ref7.codeTagProps,
                codeTagProps =
                  void 0 === _ref7$codeTagProps
                    ? {
                        className: language
                          ? "language-".concat(language)
                          : void 0,
                        style: style['code[class*="language-"]'],
                      }
                    : _ref7$codeTagProps,
                _ref7$useInlineStyles = _ref7.useInlineStyles,
                useInlineStyles =
                  void 0 === _ref7$useInlineStyles || _ref7$useInlineStyles,
                _ref7$showLineNumbers = _ref7.showLineNumbers,
                showLineNumbers =
                  void 0 !== _ref7$showLineNumbers && _ref7$showLineNumbers,
                _ref7$showInlineLineN = _ref7.showInlineLineNumbers,
                showInlineLineNumbers =
                  void 0 !== _ref7$showInlineLineN && _ref7$showInlineLineN,
                _ref7$startingLineNum = _ref7.startingLineNumber,
                startingLineNumber =
                  void 0 === _ref7$startingLineNum ? 1 : _ref7$startingLineNum,
                lineNumberContainerStyle = _ref7.lineNumberContainerStyle,
                _ref7$lineNumberStyle = _ref7.lineNumberStyle,
                lineNumberStyle =
                  void 0 === _ref7$lineNumberStyle ? {} : _ref7$lineNumberStyle,
                wrapLines = _ref7.wrapLines,
                _ref7$lineProps = _ref7.lineProps,
                lineProps = void 0 === _ref7$lineProps ? {} : _ref7$lineProps,
                renderer = _ref7.renderer,
                _ref7$PreTag = _ref7.PreTag,
                PreTag = void 0 === _ref7$PreTag ? "pre" : _ref7$PreTag,
                _ref7$CodeTag = _ref7.CodeTag,
                CodeTag = void 0 === _ref7$CodeTag ? "code" : _ref7$CodeTag,
                _ref7$code = _ref7.code,
                code =
                  void 0 === _ref7$code
                    ? Array.isArray(children)
                      ? children[0]
                      : children
                    : _ref7$code,
                astGenerator = _ref7.astGenerator,
                rest = (function _objectWithoutProperties(source, excluded) {
                  if (null == source) return {};
                  var key,
                    i,
                    target = (0, objectWithoutPropertiesLoose.Z)(
                      source,
                      excluded
                    );
                  if (Object.getOwnPropertySymbols) {
                    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
                    for (i = 0; i < sourceSymbolKeys.length; i++)
                      (key = sourceSymbolKeys[i]),
                        excluded.indexOf(key) >= 0 ||
                          (Object.prototype.propertyIsEnumerable.call(
                            source,
                            key
                          ) &&
                            (target[key] = source[key]));
                  }
                  return target;
                })(_ref7, [
                  "language",
                  "children",
                  "style",
                  "customStyle",
                  "codeTagProps",
                  "useInlineStyles",
                  "showLineNumbers",
                  "showInlineLineNumbers",
                  "startingLineNumber",
                  "lineNumberContainerStyle",
                  "lineNumberStyle",
                  "wrapLines",
                  "lineProps",
                  "renderer",
                  "PreTag",
                  "CodeTag",
                  "code",
                  "astGenerator",
                ]);
              astGenerator = astGenerator || defaultAstGenerator;
              var allLineNumbers = showLineNumbers
                  ? react.createElement(AllLineNumbers, {
                      containerStyle: lineNumberContainerStyle,
                      codeStyle: codeTagProps.style || {},
                      numberStyle: lineNumberStyle,
                      startingLineNumber,
                      codeString: code,
                    })
                  : null,
                defaultPreStyle = style.hljs ||
                  style['pre[class*="language-"]'] || {
                    backgroundColor: "#fff",
                  },
                generatorClassName = isHighlightJs(astGenerator)
                  ? "hljs"
                  : "prismjs",
                preProps = useInlineStyles
                  ? Object.assign({}, rest, {
                      style: Object.assign({}, defaultPreStyle, customStyle),
                    })
                  : Object.assign({}, rest, {
                      className: rest.className
                        ? ""
                            .concat(generatorClassName, " ")
                            .concat(rest.className)
                        : generatorClassName,
                      style: Object.assign({}, customStyle),
                    });
              if (!astGenerator)
                return react.createElement(
                  PreTag,
                  preProps,
                  allLineNumbers,
                  react.createElement(CodeTag, codeTagProps, code)
                );
              (wrapLines = !(!renderer || void 0 !== wrapLines) || wrapLines),
                (renderer = renderer || defaultRenderer);
              var defaultCodeValue = [{ type: "text", value: code }],
                codeTree = (function getCodeTree(_ref6) {
                  var astGenerator = _ref6.astGenerator,
                    language = _ref6.language,
                    code = _ref6.code,
                    defaultCodeValue = _ref6.defaultCodeValue;
                  if (isHighlightJs(astGenerator)) {
                    var hasLanguage = (function (astGenerator, language) {
                      return (
                        -1 !== astGenerator.listLanguages().indexOf(language)
                      );
                    })(astGenerator, language);
                    return "text" === language
                      ? { value: defaultCodeValue, language: "text" }
                      : hasLanguage
                      ? astGenerator.highlight(language, code)
                      : astGenerator.highlightAuto(code);
                  }
                  try {
                    return language && "text" !== language
                      ? { value: astGenerator.highlight(code, language) }
                      : { value: defaultCodeValue };
                  } catch (e) {
                    return { value: defaultCodeValue };
                  }
                })({ astGenerator, language, code, defaultCodeValue });
              null === codeTree.language && (codeTree.value = defaultCodeValue);
              var rows = processLines(
                codeTree,
                wrapLines,
                lineProps,
                showLineNumbers,
                showInlineLineNumbers,
                startingLineNumber,
                codeTree.value.length + startingLineNumber,
                lineNumberStyle
              );
              return react.createElement(
                PreTag,
                preProps,
                react.createElement(
                  CodeTag,
                  codeTagProps,
                  !showInlineLineNumbers && allLineNumbers,
                  renderer({ rows, stylesheet: style, useInlineStyles })
                )
              );
            };
          })(core_default(), {});
        SyntaxHighlighter.registerLanguage = function (_, language) {
          return core_default().register(language);
        };
        const prism_light = SyntaxHighlighter;
        var ActionBar = __webpack_require__(
            "./node_modules/@storybook/components/dist/esm/ActionBar/ActionBar.js"
          ),
          ScrollArea = __webpack_require__(
            "./node_modules/@storybook/components/dist/esm/ScrollArea/ScrollArea.js"
          ),
          ts_dedent_esm = __webpack_require__(
            "./node_modules/ts-dedent/esm/index.js"
          ),
          formatter = memoizerific_default()(2)(function (code) {
            return (0, ts_dedent_esm.C)(code);
          });
        function _extends() {
          return (
            (_extends =
              Object.assign ||
              function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) &&
                      (target[key] = source[key]);
                }
                return target;
              }),
            _extends.apply(this, arguments)
          );
        }
        function syntaxhighlighter_objectWithoutProperties(source, excluded) {
          if (null == source) return {};
          var key,
            i,
            target = (function _objectWithoutPropertiesLoose(source, excluded) {
              if (null == source) return {};
              var key,
                i,
                target = {},
                sourceKeys = Object.keys(source);
              for (i = 0; i < sourceKeys.length; i++)
                (key = sourceKeys[i]),
                  excluded.indexOf(key) >= 0 || (target[key] = source[key]);
              return target;
            })(source, excluded);
          if (Object.getOwnPropertySymbols) {
            var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
            for (i = 0; i < sourceSymbolKeys.length; i++)
              (key = sourceSymbolKeys[i]),
                excluded.indexOf(key) >= 0 ||
                  (Object.prototype.propertyIsEnumerable.call(source, key) &&
                    (target[key] = source[key]));
          }
          return target;
        }
        function asyncGeneratorStep(
          gen,
          resolve,
          reject,
          _next,
          _throw,
          key,
          arg
        ) {
          try {
            var info = gen[key](arg),
              value = info.value;
          } catch (error) {
            return void reject(error);
          }
          info.done
            ? resolve(value)
            : Promise.resolve(value).then(_next, _throw);
        }
        function _slicedToArray(arr, i) {
          return (
            (function _arrayWithHoles(arr) {
              if (Array.isArray(arr)) return arr;
            })(arr) ||
            (function _iterableToArrayLimit(arr, i) {
              if (
                "undefined" == typeof Symbol ||
                !(Symbol.iterator in Object(arr))
              )
                return;
              var _arr = [],
                _n = !0,
                _d = !1,
                _e = void 0;
              try {
                for (
                  var _s, _i = arr[Symbol.iterator]();
                  !(_n = (_s = _i.next()).done) &&
                  (_arr.push(_s.value), !i || _arr.length !== i);
                  _n = !0
                );
              } catch (err) {
                (_d = !0), (_e = err);
              } finally {
                try {
                  _n || null == _i.return || _i.return();
                } finally {
                  if (_d) throw _e;
                }
              }
              return _arr;
            })(arr, i) ||
            (function _unsupportedIterableToArray(o, minLen) {
              if (!o) return;
              if ("string" == typeof o) return _arrayLikeToArray(o, minLen);
              var n = Object.prototype.toString.call(o).slice(8, -1);
              "Object" === n && o.constructor && (n = o.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(o);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return _arrayLikeToArray(o, minLen);
            })(arr, i) ||
            (function _nonIterableRest() {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function _arrayLikeToArray(arr, len) {
          (null == len || len > arr.length) && (len = arr.length);
          for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
          return arr2;
        }
        var syntaxhighlighter_navigator = window_default().navigator,
          syntaxhighlighter_document = window_default().document,
          globalWindow = window_default().window;
        prism_light.registerLanguage("jsextra", prism_js_extras),
          prism_light.registerLanguage("jsx", prism_jsx),
          prism_light.registerLanguage("json", prism_json),
          prism_light.registerLanguage("yml", prism_yaml),
          prism_light.registerLanguage("md", prism_markdown),
          prism_light.registerLanguage("bash", prism_bash),
          prism_light.registerLanguage("css", prism_css),
          prism_light.registerLanguage("html", prism_markup),
          prism_light.registerLanguage("tsx", prism_tsx),
          prism_light.registerLanguage("typescript", prism_typescript),
          prism_light.registerLanguage("graphql", prism_graphql);
        var themedSyntax = memoizerific_default()(2)(function (theme) {
            return Object.entries(theme.code || {}).reduce(function (
              acc,
              _ref
            ) {
              var _ref2 = _slicedToArray(_ref, 2),
                key = _ref2[0],
                val = _ref2[1];
              return Object.assign(
                {},
                acc,
                (function _defineProperty(obj, key, value) {
                  return (
                    key in obj
                      ? Object.defineProperty(obj, key, {
                          value,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (obj[key] = value),
                    obj
                  );
                })({}, "* .".concat(key), val)
              );
            },
            {});
          }),
          copyToClipboard = createCopyToClipboardFunction();
        function createCopyToClipboardFunction() {
          return null != syntaxhighlighter_navigator &&
            syntaxhighlighter_navigator.clipboard
            ? function (text) {
                return syntaxhighlighter_navigator.clipboard.writeText(text);
              }
            : (function () {
                var _ref3 = (function _asyncToGenerator(fn) {
                  return function () {
                    var self = this,
                      args = arguments;
                    return new Promise(function (resolve, reject) {
                      var gen = fn.apply(self, args);
                      function _next(value) {
                        asyncGeneratorStep(
                          gen,
                          resolve,
                          reject,
                          _next,
                          _throw,
                          "next",
                          value
                        );
                      }
                      function _throw(err) {
                        asyncGeneratorStep(
                          gen,
                          resolve,
                          reject,
                          _next,
                          _throw,
                          "throw",
                          err
                        );
                      }
                      _next(void 0);
                    });
                  };
                })(
                  regeneratorRuntime.mark(function _callee(text) {
                    var tmp, focus;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      for (;;)
                        switch ((_context.prev = _context.next)) {
                          case 0:
                            (tmp =
                              syntaxhighlighter_document.createElement(
                                "TEXTAREA"
                              )),
                              (focus =
                                syntaxhighlighter_document.activeElement),
                              (tmp.value = text),
                              syntaxhighlighter_document.body.appendChild(tmp),
                              tmp.select(),
                              syntaxhighlighter_document.execCommand("copy"),
                              syntaxhighlighter_document.body.removeChild(tmp),
                              focus.focus();
                          case 8:
                          case "end":
                            return _context.stop();
                        }
                    }, _callee);
                  })
                );
                return function (_x) {
                  return _ref3.apply(this, arguments);
                };
              })();
        }
        var Wrapper = dist_esm.styled.div(
            function (_ref4) {
              return {
                position: "relative",
                overflow: "hidden",
                color: _ref4.theme.color.defaultText,
              };
            },
            function (_ref5) {
              var theme = _ref5.theme;
              return _ref5.bordered
                ? {
                    border: "1px solid ".concat(theme.appBorderColor),
                    borderRadius: theme.borderRadius,
                    background: theme.background.content,
                  }
                : {};
            }
          ),
          Scroller = (0, dist_esm.styled)(function (_ref6) {
            var children = _ref6.children,
              className = _ref6.className;
            return react.createElement(
              ScrollArea.x,
              { horizontal: !0, vertical: !0, className },
              children
            );
          })(
            { position: "relative" },
            function (_ref7) {
              return { "& code": { paddingRight: _ref7.theme.layoutMargin } };
            },
            function (_ref8) {
              var theme = _ref8.theme;
              return themedSyntax(theme);
            }
          ),
          Pre = dist_esm.styled.pre(function (_ref9) {
            var theme = _ref9.theme;
            return {
              display: "flex",
              justifyContent: "flex-start",
              margin: 0,
              padding: _ref9.padded ? theme.layoutMargin : 0,
            };
          }),
          Code = dist_esm.styled.code({ flex: 1, paddingRight: 0, opacity: 1 }),
          syntaxhighlighter_SyntaxHighlighter = function SyntaxHighlighter(
            _ref10
          ) {
            var children = _ref10.children,
              _ref10$language = _ref10.language,
              language = void 0 === _ref10$language ? "jsx" : _ref10$language,
              _ref10$copyable = _ref10.copyable,
              copyable = void 0 !== _ref10$copyable && _ref10$copyable,
              _ref10$bordered = _ref10.bordered,
              bordered = void 0 !== _ref10$bordered && _ref10$bordered,
              _ref10$padded = _ref10.padded,
              padded = void 0 !== _ref10$padded && _ref10$padded,
              _ref10$format = _ref10.format,
              format = void 0 === _ref10$format || _ref10$format,
              _ref10$className = _ref10.className,
              className = void 0 === _ref10$className ? null : _ref10$className,
              _ref10$showLineNumber = _ref10.showLineNumbers,
              showLineNumbers =
                void 0 !== _ref10$showLineNumber && _ref10$showLineNumber,
              rest = syntaxhighlighter_objectWithoutProperties(_ref10, [
                "children",
                "language",
                "copyable",
                "bordered",
                "padded",
                "format",
                "className",
                "showLineNumbers",
              ]);
            if ("string" != typeof children || !children.trim()) return null;
            var highlightableCode = format
                ? formatter(children)
                : children.trim(),
              _useState2 = _slicedToArray((0, react.useState)(!1), 2),
              copied = _useState2[0],
              setCopied = _useState2[1],
              onClick = function onClick(e) {
                e.preventDefault();
                var selectedText = globalWindow.getSelection().toString(),
                  textToCopy =
                    "click" !== e.type && selectedText
                      ? selectedText
                      : highlightableCode;
                copyToClipboard(textToCopy)
                  .then(function () {
                    setCopied(!0),
                      globalWindow.setTimeout(function () {
                        return setCopied(!1);
                      }, 1500);
                  })
                  .catch(esm.kg.error);
              };
            return react.createElement(
              Wrapper,
              { bordered, padded, className, onCopyCapture: onClick },
              react.createElement(
                Scroller,
                null,
                react.createElement(
                  prism_light,
                  _extends(
                    {
                      padded: padded || bordered,
                      language,
                      showLineNumbers,
                      showInlineLineNumbers: showLineNumbers,
                      useInlineStyles: !1,
                      PreTag: Pre,
                      CodeTag: Code,
                      lineNumberContainerStyle: {},
                    },
                    rest
                  ),
                  highlightableCode
                )
              ),
              copyable
                ? react.createElement(ActionBar.o, {
                    actionItems: [
                      { title: copied ? "Copied" : "Copy", onClick },
                    ],
                  })
                : null
            );
          };
        syntaxhighlighter_SyntaxHighlighter.displayName = "SyntaxHighlighter";
        const syntaxhighlighter = syntaxhighlighter_SyntaxHighlighter;
      },
    "./node_modules/comma-separated-tokens/index.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      exports.Q = function parse(value) {
        var val,
          values = [],
          input = String(value || ""),
          index = input.indexOf(","),
          lastIndex = 0,
          end = !1;
        for (; !end; )
          -1 === index && ((index = input.length), (end = !0)),
            (!(val = input.slice(lastIndex, index).trim()) && end) ||
              values.push(val),
            (lastIndex = index + 1),
            (index = input.indexOf(",", lastIndex));
        return values;
      };
    },
    "./node_modules/hast-util-parse-selector/index.js": (module) => {
      "use strict";
      module.exports = function parse(selector, defaultTagName) {
        var subvalue,
          previous,
          match,
          value = selector || "",
          name = defaultTagName || "div",
          props = {},
          start = 0;
        for (; start < value.length; )
          (search.lastIndex = start),
            (match = search.exec(value)),
            (subvalue = value.slice(
              start,
              match ? match.index : value.length
            )) &&
              (previous
                ? "#" === previous
                  ? (props.id = subvalue)
                  : props.className
                  ? props.className.push(subvalue)
                  : (props.className = [subvalue])
                : (name = subvalue),
              (start += subvalue.length)),
            match && ((previous = match[0]), start++);
        return {
          type: "element",
          tagName: name,
          properties: props,
          children: [],
        };
      };
      var search = /[#.]/g;
    },
    "./node_modules/hastscript/factory.js": (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      "use strict";
      var find = __webpack_require__(
          "./node_modules/property-information/find.js"
        ),
        normalize = __webpack_require__(
          "./node_modules/property-information/normalize.js"
        ),
        parseSelector = __webpack_require__(
          "./node_modules/hast-util-parse-selector/index.js"
        ),
        spaces = __webpack_require__(
          "./node_modules/space-separated-tokens/index.js"
        ).Q,
        commas = __webpack_require__(
          "./node_modules/comma-separated-tokens/index.js"
        ).Q;
      module.exports = function factory(schema, defaultTagName, caseSensitive) {
        var adjust = caseSensitive
          ? (function createAdjustMap(values) {
              var value,
                length = values.length,
                index = -1,
                result = {};
              for (; ++index < length; )
                result[(value = values[index]).toLowerCase()] = value;
              return result;
            })(caseSensitive)
          : null;
        return function h(selector, properties) {
          var property,
            node = parseSelector(selector, defaultTagName),
            children = Array.prototype.slice.call(arguments, 2),
            name = node.tagName.toLowerCase();
          (node.tagName =
            adjust && own.call(adjust, name) ? adjust[name] : name),
            properties &&
              isChildren(properties, node) &&
              (children.unshift(properties), (properties = null));
          if (properties)
            for (property in properties)
              addProperty(node.properties, property, properties[property]);
          addChild(node.children, children),
            "template" === node.tagName &&
              ((node.content = { type: "root", children: node.children }),
              (node.children = []));
          return node;
        };
        function addProperty(properties, key, value) {
          var info, property, result;
          null != value &&
            value == value &&
            ((property = (info = find(schema, key)).property),
            "string" == typeof (result = value) &&
              (info.spaceSeparated
                ? (result = spaces(result))
                : info.commaSeparated
                ? (result = commas(result))
                : info.commaOrSpaceSeparated &&
                  (result = spaces(commas(result).join(" ")))),
            "style" === property &&
              "string" != typeof value &&
              (result = (function style(value) {
                var key,
                  result = [];
                for (key in value) result.push([key, value[key]].join(": "));
                return result.join("; ");
              })(result)),
            "className" === property &&
              properties.className &&
              (result = properties.className.concat(result)),
            (properties[property] = (function parsePrimitives(
              info,
              name,
              value
            ) {
              var index, length, result;
              if ("object" != typeof value || !("length" in value))
                return parsePrimitive(info, name, value);
              (length = value.length), (index = -1), (result = []);
              for (; ++index < length; )
                result[index] = parsePrimitive(info, name, value[index]);
              return result;
            })(info, property, result)));
        }
      };
      var own = {}.hasOwnProperty;
      function isChildren(value, node) {
        return (
          "string" == typeof value ||
          "length" in value ||
          (function isNode(tagName, value) {
            var type = value.type;
            if ("input" === tagName || !type || "string" != typeof type)
              return !1;
            if ("object" == typeof value.children && "length" in value.children)
              return !0;
            if (((type = type.toLowerCase()), "button" === tagName))
              return (
                "menu" !== type &&
                "submit" !== type &&
                "reset" !== type &&
                "button" !== type
              );
            return "value" in value;
          })(node.tagName, value)
        );
      }
      function addChild(nodes, value) {
        var index, length;
        if ("string" != typeof value && "number" != typeof value)
          if ("object" == typeof value && "length" in value)
            for (index = -1, length = value.length; ++index < length; )
              addChild(nodes, value[index]);
          else {
            if ("object" != typeof value || !("type" in value))
              throw new Error(
                "Expected node, nodes, or string, got `" + value + "`"
              );
            nodes.push(value);
          }
        else nodes.push({ type: "text", value: String(value) });
      }
      function parsePrimitive(info, name, value) {
        var result = value;
        return (
          info.number || info.positiveNumber
            ? isNaN(result) || "" === result || (result = Number(result))
            : (info.boolean || info.overloadedBoolean) &&
              ("string" != typeof result ||
                ("" !== result && normalize(value) !== normalize(name)) ||
                (result = !0)),
          result
        );
      }
    },
    "./node_modules/hastscript/html.js": (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      "use strict";
      var schema = __webpack_require__(
          "./node_modules/property-information/html.js"
        ),
        html = __webpack_require__("./node_modules/hastscript/factory.js")(
          schema,
          "div"
        );
      (html.displayName = "html"), (module.exports = html);
    },
    "./node_modules/hastscript/index.js": (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      "use strict";
      module.exports = __webpack_require__("./node_modules/hastscript/html.js");
    },
    "./node_modules/is-alphabetical/index.js": (module) => {
      "use strict";
      module.exports = function alphabetical(character) {
        var code =
          "string" == typeof character ? character.charCodeAt(0) : character;
        return (code >= 97 && code <= 122) || (code >= 65 && code <= 90);
      };
    },
    "./node_modules/is-alphanumerical/index.js": (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      "use strict";
      var alphabetical = __webpack_require__(
          "./node_modules/is-alphabetical/index.js"
        ),
        decimal = __webpack_require__("./node_modules/is-decimal/index.js");
      module.exports = function alphanumerical(character) {
        return alphabetical(character) || decimal(character);
      };
    },
    "./node_modules/is-decimal/index.js": (module) => {
      "use strict";
      module.exports = function decimal(character) {
        var code =
          "string" == typeof character ? character.charCodeAt(0) : character;
        return code >= 48 && code <= 57;
      };
    },
    "./node_modules/is-hexadecimal/index.js": (module) => {
      "use strict";
      module.exports = function hexadecimal(character) {
        var code =
          "string" == typeof character ? character.charCodeAt(0) : character;
        return (
          (code >= 97 && code <= 102) ||
          (code >= 65 && code <= 70) ||
          (code >= 48 && code <= 57)
        );
      };
    },
    "./node_modules/parse-entities/decode-entity.browser.js": (module) => {
      "use strict";
      var el;
      module.exports = function decodeEntity(characters) {
        var char,
          entity = "&" + characters + ";";
        if (
          (((el = el || document.createElement("i")).innerHTML = entity),
          59 === (char = el.textContent).charCodeAt(char.length - 1) &&
            "semi" !== characters)
        )
          return !1;
        return char !== entity && char;
      };
    },
    "./node_modules/parse-entities/index.js": (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      "use strict";
      var legacy = __webpack_require__(
          "./node_modules/character-entities-legacy/index.json"
        ),
        invalid = __webpack_require__(
          "./node_modules/character-reference-invalid/index.json"
        ),
        decimal = __webpack_require__("./node_modules/is-decimal/index.js"),
        hexadecimal = __webpack_require__(
          "./node_modules/is-hexadecimal/index.js"
        ),
        alphanumerical = __webpack_require__(
          "./node_modules/is-alphanumerical/index.js"
        ),
        decodeEntity = __webpack_require__(
          "./node_modules/parse-entities/decode-entity.browser.js"
        );
      module.exports = function parseEntities(value, options) {
        var option,
          key,
          settings = {};
        options || (options = {});
        for (key in defaults)
          (option = options[key]),
            (settings[key] = null == option ? defaults[key] : option);
        (settings.position.indent || settings.position.start) &&
          ((settings.indent = settings.position.indent || []),
          (settings.position = settings.position.start));
        return (function parse(value, settings) {
          var entityCharacters,
            namedEntity,
            terminated,
            characters,
            character,
            reference,
            following,
            warning,
            reason,
            output,
            entity,
            begin,
            start,
            type,
            test,
            prev,
            next,
            diff,
            end,
            additional = settings.additional,
            nonTerminated = settings.nonTerminated,
            handleText = settings.text,
            handleReference = settings.reference,
            handleWarning = settings.warning,
            textContext = settings.textContext,
            referenceContext = settings.referenceContext,
            warningContext = settings.warningContext,
            pos = settings.position,
            indent = settings.indent || [],
            length = value.length,
            index = 0,
            lines = -1,
            column = pos.column || 1,
            line = pos.line || 1,
            queue = "",
            result = [];
          "string" == typeof additional &&
            (additional = additional.charCodeAt(0));
          (prev = now()),
            (warning = handleWarning ? parseError : noop),
            index--,
            length++;
          for (; ++index < length; )
            if (
              (10 === character && (column = indent[lines] || 1),
              38 === (character = value.charCodeAt(index)))
            ) {
              if (
                9 === (following = value.charCodeAt(index + 1)) ||
                10 === following ||
                12 === following ||
                32 === following ||
                38 === following ||
                60 === following ||
                following != following ||
                (additional && following === additional)
              ) {
                (queue += fromCharCode(character)), column++;
                continue;
              }
              for (
                begin = start = index + 1,
                  end = start,
                  35 === following
                    ? ((end = ++begin),
                      88 === (following = value.charCodeAt(end)) ||
                      120 === following
                        ? ((type = hexa), (end = ++begin))
                        : (type = deci))
                    : (type = name),
                  entityCharacters = "",
                  entity = "",
                  characters = "",
                  test = tests[type],
                  end--;
                ++end < length && test((following = value.charCodeAt(end)));

              )
                (characters += fromCharCode(following)),
                  type === name &&
                    own.call(legacy, characters) &&
                    ((entityCharacters = characters),
                    (entity = legacy[characters]));
              (terminated = 59 === value.charCodeAt(end)) &&
                (end++,
                (namedEntity = type === name && decodeEntity(characters)) &&
                  ((entityCharacters = characters), (entity = namedEntity))),
                (diff = 1 + end - start),
                (terminated || nonTerminated) &&
                  (characters
                    ? type === name
                      ? (terminated && !entity
                          ? warning(5, 1)
                          : (entityCharacters !== characters &&
                              ((diff =
                                1 +
                                (end = begin + entityCharacters.length) -
                                begin),
                              (terminated = !1)),
                            terminated ||
                              ((reason = entityCharacters ? 1 : 3),
                              settings.attribute
                                ? 61 === (following = value.charCodeAt(end))
                                  ? (warning(reason, diff), (entity = null))
                                  : alphanumerical(following)
                                  ? (entity = null)
                                  : warning(reason, diff)
                                : warning(reason, diff))),
                        (reference = entity))
                      : (terminated || warning(2, diff),
                        prohibited(
                          (reference = parseInt(characters, bases[type]))
                        )
                          ? (warning(7, diff),
                            (reference = fromCharCode(65533)))
                          : reference in invalid
                          ? (warning(6, diff), (reference = invalid[reference]))
                          : ((output = ""),
                            disallowed(reference) && warning(6, diff),
                            reference > 65535 &&
                              ((output += fromCharCode(
                                ((reference -= 65536) >>> 10) | 55296
                              )),
                              (reference = 56320 | (1023 & reference))),
                            (reference = output + fromCharCode(reference))))
                    : type !== name && warning(4, diff)),
                reference
                  ? (flush(),
                    (prev = now()),
                    (index = end - 1),
                    (column += end - start + 1),
                    result.push(reference),
                    (next = now()).offset++,
                    handleReference &&
                      handleReference.call(
                        referenceContext,
                        reference,
                        { start: prev, end: next },
                        value.slice(start - 1, end)
                      ),
                    (prev = next))
                  : ((characters = value.slice(start - 1, end)),
                    (queue += characters),
                    (column += characters.length),
                    (index = end - 1));
            } else
              10 === character && (line++, lines++, (column = 0)),
                character == character
                  ? ((queue += fromCharCode(character)), column++)
                  : flush();
          return result.join("");
          function now() {
            return { line, column, offset: index + (pos.offset || 0) };
          }
          function parseError(code, offset) {
            var position = now();
            (position.column += offset),
              (position.offset += offset),
              handleWarning.call(
                warningContext,
                messages[code],
                position,
                code
              );
          }
          function flush() {
            queue &&
              (result.push(queue),
              handleText &&
                handleText.call(textContext, queue, {
                  start: prev,
                  end: now(),
                }),
              (queue = ""));
          }
        })(value, settings);
      };
      var own = {}.hasOwnProperty,
        fromCharCode = String.fromCharCode,
        noop = Function.prototype,
        defaults = {
          warning: null,
          reference: null,
          text: null,
          warningContext: null,
          referenceContext: null,
          textContext: null,
          position: {},
          additional: null,
          attribute: !1,
          nonTerminated: !0,
        },
        name = "named",
        hexa = "hexadecimal",
        deci = "decimal",
        bases = { hexadecimal: 16, decimal: 10 },
        tests = {};
      (tests.named = alphanumerical),
        (tests[deci] = decimal),
        (tests[hexa] = hexadecimal);
      var messages = {};
      function prohibited(code) {
        return (code >= 55296 && code <= 57343) || code > 1114111;
      }
      function disallowed(code) {
        return (
          (code >= 1 && code <= 8) ||
          11 === code ||
          (code >= 13 && code <= 31) ||
          (code >= 127 && code <= 159) ||
          (code >= 64976 && code <= 65007) ||
          65535 == (65535 & code) ||
          65534 == (65535 & code)
        );
      }
      (messages[1] =
        "Named character references must be terminated by a semicolon"),
        (messages[2] =
          "Numeric character references must be terminated by a semicolon"),
        (messages[3] = "Named character references cannot be empty"),
        (messages[4] = "Numeric character references cannot be empty"),
        (messages[5] = "Named character references must be known"),
        (messages[6] = "Numeric character references cannot be disallowed"),
        (messages[7] =
          "Numeric character references cannot be outside the permissible Unicode range");
    },
    "./node_modules/prismjs/components/prism-core.js": (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var Prism = (function (_self) {
        var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
          uniqueId = 0,
          plainTextGrammar = {},
          _ = {
            manual: _self.Prism && _self.Prism.manual,
            disableWorkerMessageHandler:
              _self.Prism && _self.Prism.disableWorkerMessageHandler,
            util: {
              encode: function encode(tokens) {
                return tokens instanceof Token
                  ? new Token(tokens.type, encode(tokens.content), tokens.alias)
                  : Array.isArray(tokens)
                  ? tokens.map(encode)
                  : tokens
                      .replace(/&/g, "&amp;")
                      .replace(/</g, "&lt;")
                      .replace(/\u00a0/g, " ");
              },
              type: function (o) {
                return Object.prototype.toString.call(o).slice(8, -1);
              },
              objId: function (obj) {
                return (
                  obj.__id ||
                    Object.defineProperty(obj, "__id", { value: ++uniqueId }),
                  obj.__id
                );
              },
              clone: function deepClone(o, visited) {
                var clone, id;
                switch (((visited = visited || {}), _.util.type(o))) {
                  case "Object":
                    if (((id = _.util.objId(o)), visited[id]))
                      return visited[id];
                    for (var key in ((clone = {}), (visited[id] = clone), o))
                      o.hasOwnProperty(key) &&
                        (clone[key] = deepClone(o[key], visited));
                    return clone;
                  case "Array":
                    return (
                      (id = _.util.objId(o)),
                      visited[id]
                        ? visited[id]
                        : ((clone = []),
                          (visited[id] = clone),
                          o.forEach(function (v, i) {
                            clone[i] = deepClone(v, visited);
                          }),
                          clone)
                    );
                  default:
                    return o;
                }
              },
              getLanguage: function (element) {
                for (; element; ) {
                  var m = lang.exec(element.className);
                  if (m) return m[1].toLowerCase();
                  element = element.parentElement;
                }
                return "none";
              },
              setLanguage: function (element, language) {
                (element.className = element.className.replace(
                  RegExp(lang, "gi"),
                  ""
                )),
                  element.classList.add("language-" + language);
              },
              currentScript: function () {
                if ("undefined" == typeof document) return null;
                if ("currentScript" in document) return document.currentScript;
                try {
                  throw new Error();
                } catch (err) {
                  var src = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(
                    err.stack
                  ) || [])[1];
                  if (src) {
                    var scripts = document.getElementsByTagName("script");
                    for (var i in scripts)
                      if (scripts[i].src == src) return scripts[i];
                  }
                  return null;
                }
              },
              isActive: function (element, className, defaultActivation) {
                for (var no = "no-" + className; element; ) {
                  var classList = element.classList;
                  if (classList.contains(className)) return !0;
                  if (classList.contains(no)) return !1;
                  element = element.parentElement;
                }
                return !!defaultActivation;
              },
            },
            languages: {
              plain: plainTextGrammar,
              plaintext: plainTextGrammar,
              text: plainTextGrammar,
              txt: plainTextGrammar,
              extend: function (id, redef) {
                var lang = _.util.clone(_.languages[id]);
                for (var key in redef) lang[key] = redef[key];
                return lang;
              },
              insertBefore: function (inside, before, insert, root) {
                var grammar = (root = root || _.languages)[inside],
                  ret = {};
                for (var token in grammar)
                  if (grammar.hasOwnProperty(token)) {
                    if (token == before)
                      for (var newToken in insert)
                        insert.hasOwnProperty(newToken) &&
                          (ret[newToken] = insert[newToken]);
                    insert.hasOwnProperty(token) ||
                      (ret[token] = grammar[token]);
                  }
                var old = root[inside];
                return (
                  (root[inside] = ret),
                  _.languages.DFS(_.languages, function (key, value) {
                    value === old && key != inside && (this[key] = ret);
                  }),
                  ret
                );
              },
              DFS: function DFS(o, callback, type, visited) {
                visited = visited || {};
                var objId = _.util.objId;
                for (var i in o)
                  if (o.hasOwnProperty(i)) {
                    callback.call(o, i, o[i], type || i);
                    var property = o[i],
                      propertyType = _.util.type(property);
                    "Object" !== propertyType || visited[objId(property)]
                      ? "Array" !== propertyType ||
                        visited[objId(property)] ||
                        ((visited[objId(property)] = !0),
                        DFS(property, callback, i, visited))
                      : ((visited[objId(property)] = !0),
                        DFS(property, callback, null, visited));
                  }
              },
            },
            plugins: {},
            highlightAll: function (async, callback) {
              _.highlightAllUnder(document, async, callback);
            },
            highlightAllUnder: function (container, async, callback) {
              var env = {
                callback,
                container,
                selector:
                  'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
              };
              _.hooks.run("before-highlightall", env),
                (env.elements = Array.prototype.slice.apply(
                  env.container.querySelectorAll(env.selector)
                )),
                _.hooks.run("before-all-elements-highlight", env);
              for (var element, i = 0; (element = env.elements[i++]); )
                _.highlightElement(element, !0 === async, env.callback);
            },
            highlightElement: function (element, async, callback) {
              var language = _.util.getLanguage(element),
                grammar = _.languages[language];
              _.util.setLanguage(element, language);
              var parent = element.parentElement;
              parent &&
                "pre" === parent.nodeName.toLowerCase() &&
                _.util.setLanguage(parent, language);
              var env = {
                element,
                language,
                grammar,
                code: element.textContent,
              };
              function insertHighlightedCode(highlightedCode) {
                (env.highlightedCode = highlightedCode),
                  _.hooks.run("before-insert", env),
                  (env.element.innerHTML = env.highlightedCode),
                  _.hooks.run("after-highlight", env),
                  _.hooks.run("complete", env),
                  callback && callback.call(env.element);
              }
              if (
                (_.hooks.run("before-sanity-check", env),
                (parent = env.element.parentElement) &&
                  "pre" === parent.nodeName.toLowerCase() &&
                  !parent.hasAttribute("tabindex") &&
                  parent.setAttribute("tabindex", "0"),
                !env.code)
              )
                return (
                  _.hooks.run("complete", env),
                  void (callback && callback.call(env.element))
                );
              if ((_.hooks.run("before-highlight", env), env.grammar))
                if (async && _self.Worker) {
                  var worker = new Worker(_.filename);
                  (worker.onmessage = function (evt) {
                    insertHighlightedCode(evt.data);
                  }),
                    worker.postMessage(
                      JSON.stringify({
                        language: env.language,
                        code: env.code,
                        immediateClose: !0,
                      })
                    );
                } else
                  insertHighlightedCode(
                    _.highlight(env.code, env.grammar, env.language)
                  );
              else insertHighlightedCode(_.util.encode(env.code));
            },
            highlight: function (text, grammar, language) {
              var env = { code: text, grammar, language };
              if ((_.hooks.run("before-tokenize", env), !env.grammar))
                throw new Error(
                  'The language "' + env.language + '" has no grammar.'
                );
              return (
                (env.tokens = _.tokenize(env.code, env.grammar)),
                _.hooks.run("after-tokenize", env),
                Token.stringify(_.util.encode(env.tokens), env.language)
              );
            },
            tokenize: function (text, grammar) {
              var rest = grammar.rest;
              if (rest) {
                for (var token in rest) grammar[token] = rest[token];
                delete grammar.rest;
              }
              var tokenList = new LinkedList();
              return (
                addAfter(tokenList, tokenList.head, text),
                matchGrammar(text, tokenList, grammar, tokenList.head, 0),
                (function toArray(list) {
                  var array = [],
                    node = list.head.next;
                  for (; node !== list.tail; )
                    array.push(node.value), (node = node.next);
                  return array;
                })(tokenList)
              );
            },
            hooks: {
              all: {},
              add: function (name, callback) {
                var hooks = _.hooks.all;
                (hooks[name] = hooks[name] || []), hooks[name].push(callback);
              },
              run: function (name, env) {
                var callbacks = _.hooks.all[name];
                if (callbacks && callbacks.length)
                  for (var callback, i = 0; (callback = callbacks[i++]); )
                    callback(env);
              },
            },
            Token,
          };
        function Token(type, content, alias, matchedStr) {
          (this.type = type),
            (this.content = content),
            (this.alias = alias),
            (this.length = 0 | (matchedStr || "").length);
        }
        function matchPattern(pattern, pos, text, lookbehind) {
          pattern.lastIndex = pos;
          var match = pattern.exec(text);
          if (match && lookbehind && match[1]) {
            var lookbehindLength = match[1].length;
            (match.index += lookbehindLength),
              (match[0] = match[0].slice(lookbehindLength));
          }
          return match;
        }
        function matchGrammar(
          text,
          tokenList,
          grammar,
          startNode,
          startPos,
          rematch
        ) {
          for (var token in grammar)
            if (grammar.hasOwnProperty(token) && grammar[token]) {
              var patterns = grammar[token];
              patterns = Array.isArray(patterns) ? patterns : [patterns];
              for (var j = 0; j < patterns.length; ++j) {
                if (rematch && rematch.cause == token + "," + j) return;
                var patternObj = patterns[j],
                  inside = patternObj.inside,
                  lookbehind = !!patternObj.lookbehind,
                  greedy = !!patternObj.greedy,
                  alias = patternObj.alias;
                if (greedy && !patternObj.pattern.global) {
                  var flags = patternObj.pattern
                    .toString()
                    .match(/[imsuy]*$/)[0];
                  patternObj.pattern = RegExp(
                    patternObj.pattern.source,
                    flags + "g"
                  );
                }
                for (
                  var pattern = patternObj.pattern || patternObj,
                    currentNode = startNode.next,
                    pos = startPos;
                  currentNode !== tokenList.tail &&
                  !(rematch && pos >= rematch.reach);
                  pos += currentNode.value.length,
                    currentNode = currentNode.next
                ) {
                  var str = currentNode.value;
                  if (tokenList.length > text.length) return;
                  if (!(str instanceof Token)) {
                    var match,
                      removeCount = 1;
                    if (greedy) {
                      if (
                        !(match = matchPattern(
                          pattern,
                          pos,
                          text,
                          lookbehind
                        )) ||
                        match.index >= text.length
                      )
                        break;
                      var from = match.index,
                        to = match.index + match[0].length,
                        p = pos;
                      for (p += currentNode.value.length; from >= p; )
                        p += (currentNode = currentNode.next).value.length;
                      if (
                        ((pos = p -= currentNode.value.length),
                        currentNode.value instanceof Token)
                      )
                        continue;
                      for (
                        var k = currentNode;
                        k !== tokenList.tail &&
                        (p < to || "string" == typeof k.value);
                        k = k.next
                      )
                        removeCount++, (p += k.value.length);
                      removeCount--,
                        (str = text.slice(pos, p)),
                        (match.index -= pos);
                    } else if (
                      !(match = matchPattern(pattern, 0, str, lookbehind))
                    )
                      continue;
                    from = match.index;
                    var matchStr = match[0],
                      before = str.slice(0, from),
                      after = str.slice(from + matchStr.length),
                      reach = pos + str.length;
                    rematch && reach > rematch.reach && (rematch.reach = reach);
                    var removeFrom = currentNode.prev;
                    if (
                      (before &&
                        ((removeFrom = addAfter(tokenList, removeFrom, before)),
                        (pos += before.length)),
                      removeRange(tokenList, removeFrom, removeCount),
                      (currentNode = addAfter(
                        tokenList,
                        removeFrom,
                        new Token(
                          token,
                          inside ? _.tokenize(matchStr, inside) : matchStr,
                          alias,
                          matchStr
                        )
                      )),
                      after && addAfter(tokenList, currentNode, after),
                      removeCount > 1)
                    ) {
                      var nestedRematch = { cause: token + "," + j, reach };
                      matchGrammar(
                        text,
                        tokenList,
                        grammar,
                        currentNode.prev,
                        pos,
                        nestedRematch
                      ),
                        rematch &&
                          nestedRematch.reach > rematch.reach &&
                          (rematch.reach = nestedRematch.reach);
                    }
                  }
                }
              }
            }
        }
        function LinkedList() {
          var head = { value: null, prev: null, next: null },
            tail = { value: null, prev: head, next: null };
          (head.next = tail),
            (this.head = head),
            (this.tail = tail),
            (this.length = 0);
        }
        function addAfter(list, node, value) {
          var next = node.next,
            newNode = { value, prev: node, next };
          return (
            (node.next = newNode), (next.prev = newNode), list.length++, newNode
          );
        }
        function removeRange(list, node, count) {
          for (
            var next = node.next, i = 0;
            i < count && next !== list.tail;
            i++
          )
            next = next.next;
          (node.next = next), (next.prev = node), (list.length -= i);
        }
        if (
          ((_self.Prism = _),
          (Token.stringify = function stringify(o, language) {
            if ("string" == typeof o) return o;
            if (Array.isArray(o)) {
              var s = "";
              return (
                o.forEach(function (e) {
                  s += stringify(e, language);
                }),
                s
              );
            }
            var env = {
                type: o.type,
                content: stringify(o.content, language),
                tag: "span",
                classes: ["token", o.type],
                attributes: {},
                language,
              },
              aliases = o.alias;
            aliases &&
              (Array.isArray(aliases)
                ? Array.prototype.push.apply(env.classes, aliases)
                : env.classes.push(aliases)),
              _.hooks.run("wrap", env);
            var attributes = "";
            for (var name in env.attributes)
              attributes +=
                " " +
                name +
                '="' +
                (env.attributes[name] || "").replace(/"/g, "&quot;") +
                '"';
            return (
              "<" +
              env.tag +
              ' class="' +
              env.classes.join(" ") +
              '"' +
              attributes +
              ">" +
              env.content +
              "</" +
              env.tag +
              ">"
            );
          }),
          !_self.document)
        )
          return _self.addEventListener
            ? (_.disableWorkerMessageHandler ||
                _self.addEventListener(
                  "message",
                  function (evt) {
                    var message = JSON.parse(evt.data),
                      lang = message.language,
                      code = message.code,
                      immediateClose = message.immediateClose;
                    _self.postMessage(
                      _.highlight(code, _.languages[lang], lang)
                    ),
                      immediateClose && _self.close();
                  },
                  !1
                ),
              _)
            : _;
        var script = _.util.currentScript();
        function highlightAutomaticallyCallback() {
          _.manual || _.highlightAll();
        }
        if (
          (script &&
            ((_.filename = script.src),
            script.hasAttribute("data-manual") && (_.manual = !0)),
          !_.manual)
        ) {
          var readyState = document.readyState;
          "loading" === readyState ||
          ("interactive" === readyState && script && script.defer)
            ? document.addEventListener(
                "DOMContentLoaded",
                highlightAutomaticallyCallback
              )
            : window.requestAnimationFrame
            ? window.requestAnimationFrame(highlightAutomaticallyCallback)
            : window.setTimeout(highlightAutomaticallyCallback, 16);
        }
        return _;
      })(
        "undefined" != typeof window
          ? window
          : "undefined" != typeof WorkerGlobalScope &&
            self instanceof WorkerGlobalScope
          ? self
          : {}
      );
      module.exports && (module.exports = Prism),
        void 0 !== __webpack_require__.g &&
          (__webpack_require__.g.Prism = Prism);
    },
    "./node_modules/property-information/find.js": (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      "use strict";
      var normalize = __webpack_require__(
          "./node_modules/property-information/normalize.js"
        ),
        DefinedInfo = __webpack_require__(
          "./node_modules/property-information/lib/util/defined-info.js"
        ),
        Info = __webpack_require__(
          "./node_modules/property-information/lib/util/info.js"
        );
      module.exports = function find(schema, value) {
        var normal = normalize(value),
          prop = value,
          Type = Info;
        if (normal in schema.normal)
          return schema.property[schema.normal[normal]];
        normal.length > 4 &&
          "data" === normal.slice(0, 4) &&
          valid.test(value) &&
          ("-" === value.charAt(4)
            ? (prop = (function datasetToProperty(attribute) {
                var value = attribute.slice(5).replace(dash, camelcase);
                return "data" + value.charAt(0).toUpperCase() + value.slice(1);
              })(value))
            : (value = (function datasetToAttribute(property) {
                var value = property.slice(4);
                if (dash.test(value)) return property;
                "-" !== (value = value.replace(cap, kebab)).charAt(0) &&
                  (value = "-" + value);
                return "data" + value;
              })(value)),
          (Type = DefinedInfo));
        return new Type(prop, value);
      };
      var valid = /^data[-\w.:]+$/i,
        dash = /-[a-z]/g,
        cap = /[A-Z]/g;
      function kebab($0) {
        return "-" + $0.toLowerCase();
      }
      function camelcase($0) {
        return $0.charAt(1).toUpperCase();
      }
    },
    "./node_modules/property-information/html.js": (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      "use strict";
      var merge = __webpack_require__(
          "./node_modules/property-information/lib/util/merge.js"
        ),
        xlink = __webpack_require__(
          "./node_modules/property-information/lib/xlink.js"
        ),
        xml = __webpack_require__(
          "./node_modules/property-information/lib/xml.js"
        ),
        xmlns = __webpack_require__(
          "./node_modules/property-information/lib/xmlns.js"
        ),
        aria = __webpack_require__(
          "./node_modules/property-information/lib/aria.js"
        ),
        html = __webpack_require__(
          "./node_modules/property-information/lib/html.js"
        );
      module.exports = merge([xml, xlink, xmlns, aria, html]);
    },
    "./node_modules/property-information/lib/aria.js": (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      "use strict";
      var types = __webpack_require__(
          "./node_modules/property-information/lib/util/types.js"
        ),
        create = __webpack_require__(
          "./node_modules/property-information/lib/util/create.js"
        ),
        booleanish = types.booleanish,
        number = types.number,
        spaceSeparated = types.spaceSeparated;
      module.exports = create({
        transform: function ariaTransform(_, prop) {
          return "role" === prop ? prop : "aria-" + prop.slice(4).toLowerCase();
        },
        properties: {
          ariaActiveDescendant: null,
          ariaAtomic: booleanish,
          ariaAutoComplete: null,
          ariaBusy: booleanish,
          ariaChecked: booleanish,
          ariaColCount: number,
          ariaColIndex: number,
          ariaColSpan: number,
          ariaControls: spaceSeparated,
          ariaCurrent: null,
          ariaDescribedBy: spaceSeparated,
          ariaDetails: null,
          ariaDisabled: booleanish,
          ariaDropEffect: spaceSeparated,
          ariaErrorMessage: null,
          ariaExpanded: booleanish,
          ariaFlowTo: spaceSeparated,
          ariaGrabbed: booleanish,
          ariaHasPopup: null,
          ariaHidden: booleanish,
          ariaInvalid: null,
          ariaKeyShortcuts: null,
          ariaLabel: null,
          ariaLabelledBy: spaceSeparated,
          ariaLevel: number,
          ariaLive: null,
          ariaModal: booleanish,
          ariaMultiLine: booleanish,
          ariaMultiSelectable: booleanish,
          ariaOrientation: null,
          ariaOwns: spaceSeparated,
          ariaPlaceholder: null,
          ariaPosInSet: number,
          ariaPressed: booleanish,
          ariaReadOnly: booleanish,
          ariaRelevant: null,
          ariaRequired: booleanish,
          ariaRoleDescription: spaceSeparated,
          ariaRowCount: number,
          ariaRowIndex: number,
          ariaRowSpan: number,
          ariaSelected: booleanish,
          ariaSetSize: number,
          ariaSort: null,
          ariaValueMax: number,
          ariaValueMin: number,
          ariaValueNow: number,
          ariaValueText: null,
          role: null,
        },
      });
    },
    "./node_modules/property-information/lib/html.js": (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      "use strict";
      var types = __webpack_require__(
          "./node_modules/property-information/lib/util/types.js"
        ),
        create = __webpack_require__(
          "./node_modules/property-information/lib/util/create.js"
        ),
        caseInsensitiveTransform = __webpack_require__(
          "./node_modules/property-information/lib/util/case-insensitive-transform.js"
        ),
        boolean = types.boolean,
        overloadedBoolean = types.overloadedBoolean,
        booleanish = types.booleanish,
        number = types.number,
        spaceSeparated = types.spaceSeparated,
        commaSeparated = types.commaSeparated;
      module.exports = create({
        space: "html",
        attributes: {
          acceptcharset: "accept-charset",
          classname: "class",
          htmlfor: "for",
          httpequiv: "http-equiv",
        },
        transform: caseInsensitiveTransform,
        mustUseProperty: ["checked", "multiple", "muted", "selected"],
        properties: {
          abbr: null,
          accept: commaSeparated,
          acceptCharset: spaceSeparated,
          accessKey: spaceSeparated,
          action: null,
          allow: null,
          allowFullScreen: boolean,
          allowPaymentRequest: boolean,
          allowUserMedia: boolean,
          alt: null,
          as: null,
          async: boolean,
          autoCapitalize: null,
          autoComplete: spaceSeparated,
          autoFocus: boolean,
          autoPlay: boolean,
          capture: boolean,
          charSet: null,
          checked: boolean,
          cite: null,
          className: spaceSeparated,
          cols: number,
          colSpan: null,
          content: null,
          contentEditable: booleanish,
          controls: boolean,
          controlsList: spaceSeparated,
          coords: number | commaSeparated,
          crossOrigin: null,
          data: null,
          dateTime: null,
          decoding: null,
          default: boolean,
          defer: boolean,
          dir: null,
          dirName: null,
          disabled: boolean,
          download: overloadedBoolean,
          draggable: booleanish,
          encType: null,
          enterKeyHint: null,
          form: null,
          formAction: null,
          formEncType: null,
          formMethod: null,
          formNoValidate: boolean,
          formTarget: null,
          headers: spaceSeparated,
          height: number,
          hidden: boolean,
          high: number,
          href: null,
          hrefLang: null,
          htmlFor: spaceSeparated,
          httpEquiv: spaceSeparated,
          id: null,
          imageSizes: null,
          imageSrcSet: commaSeparated,
          inputMode: null,
          integrity: null,
          is: null,
          isMap: boolean,
          itemId: null,
          itemProp: spaceSeparated,
          itemRef: spaceSeparated,
          itemScope: boolean,
          itemType: spaceSeparated,
          kind: null,
          label: null,
          lang: null,
          language: null,
          list: null,
          loading: null,
          loop: boolean,
          low: number,
          manifest: null,
          max: null,
          maxLength: number,
          media: null,
          method: null,
          min: null,
          minLength: number,
          multiple: boolean,
          muted: boolean,
          name: null,
          nonce: null,
          noModule: boolean,
          noValidate: boolean,
          onAbort: null,
          onAfterPrint: null,
          onAuxClick: null,
          onBeforePrint: null,
          onBeforeUnload: null,
          onBlur: null,
          onCancel: null,
          onCanPlay: null,
          onCanPlayThrough: null,
          onChange: null,
          onClick: null,
          onClose: null,
          onContextMenu: null,
          onCopy: null,
          onCueChange: null,
          onCut: null,
          onDblClick: null,
          onDrag: null,
          onDragEnd: null,
          onDragEnter: null,
          onDragExit: null,
          onDragLeave: null,
          onDragOver: null,
          onDragStart: null,
          onDrop: null,
          onDurationChange: null,
          onEmptied: null,
          onEnded: null,
          onError: null,
          onFocus: null,
          onFormData: null,
          onHashChange: null,
          onInput: null,
          onInvalid: null,
          onKeyDown: null,
          onKeyPress: null,
          onKeyUp: null,
          onLanguageChange: null,
          onLoad: null,
          onLoadedData: null,
          onLoadedMetadata: null,
          onLoadEnd: null,
          onLoadStart: null,
          onMessage: null,
          onMessageError: null,
          onMouseDown: null,
          onMouseEnter: null,
          onMouseLeave: null,
          onMouseMove: null,
          onMouseOut: null,
          onMouseOver: null,
          onMouseUp: null,
          onOffline: null,
          onOnline: null,
          onPageHide: null,
          onPageShow: null,
          onPaste: null,
          onPause: null,
          onPlay: null,
          onPlaying: null,
          onPopState: null,
          onProgress: null,
          onRateChange: null,
          onRejectionHandled: null,
          onReset: null,
          onResize: null,
          onScroll: null,
          onSecurityPolicyViolation: null,
          onSeeked: null,
          onSeeking: null,
          onSelect: null,
          onSlotChange: null,
          onStalled: null,
          onStorage: null,
          onSubmit: null,
          onSuspend: null,
          onTimeUpdate: null,
          onToggle: null,
          onUnhandledRejection: null,
          onUnload: null,
          onVolumeChange: null,
          onWaiting: null,
          onWheel: null,
          open: boolean,
          optimum: number,
          pattern: null,
          ping: spaceSeparated,
          placeholder: null,
          playsInline: boolean,
          poster: null,
          preload: null,
          readOnly: boolean,
          referrerPolicy: null,
          rel: spaceSeparated,
          required: boolean,
          reversed: boolean,
          rows: number,
          rowSpan: number,
          sandbox: spaceSeparated,
          scope: null,
          scoped: boolean,
          seamless: boolean,
          selected: boolean,
          shape: null,
          size: number,
          sizes: null,
          slot: null,
          span: number,
          spellCheck: booleanish,
          src: null,
          srcDoc: null,
          srcLang: null,
          srcSet: commaSeparated,
          start: number,
          step: null,
          style: null,
          tabIndex: number,
          target: null,
          title: null,
          translate: null,
          type: null,
          typeMustMatch: boolean,
          useMap: null,
          value: booleanish,
          width: number,
          wrap: null,
          align: null,
          aLink: null,
          archive: spaceSeparated,
          axis: null,
          background: null,
          bgColor: null,
          border: number,
          borderColor: null,
          bottomMargin: number,
          cellPadding: null,
          cellSpacing: null,
          char: null,
          charOff: null,
          classId: null,
          clear: null,
          code: null,
          codeBase: null,
          codeType: null,
          color: null,
          compact: boolean,
          declare: boolean,
          event: null,
          face: null,
          frame: null,
          frameBorder: null,
          hSpace: number,
          leftMargin: number,
          link: null,
          longDesc: null,
          lowSrc: null,
          marginHeight: number,
          marginWidth: number,
          noResize: boolean,
          noHref: boolean,
          noShade: boolean,
          noWrap: boolean,
          object: null,
          profile: null,
          prompt: null,
          rev: null,
          rightMargin: number,
          rules: null,
          scheme: null,
          scrolling: booleanish,
          standby: null,
          summary: null,
          text: null,
          topMargin: number,
          valueType: null,
          version: null,
          vAlign: null,
          vLink: null,
          vSpace: number,
          allowTransparency: null,
          autoCorrect: null,
          autoSave: null,
          disablePictureInPicture: boolean,
          disableRemotePlayback: boolean,
          prefix: null,
          property: null,
          results: number,
          security: null,
          unselectable: null,
        },
      });
    },
    "./node_modules/property-information/lib/util/case-insensitive-transform.js":
      (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var caseSensitiveTransform = __webpack_require__(
          "./node_modules/property-information/lib/util/case-sensitive-transform.js"
        );
        module.exports = function caseInsensitiveTransform(
          attributes,
          property
        ) {
          return caseSensitiveTransform(attributes, property.toLowerCase());
        };
      },
    "./node_modules/property-information/lib/util/case-sensitive-transform.js":
      (module) => {
        "use strict";
        module.exports = function caseSensitiveTransform(
          attributes,
          attribute
        ) {
          return attribute in attributes ? attributes[attribute] : attribute;
        };
      },
    "./node_modules/property-information/lib/util/create.js": (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      "use strict";
      var normalize = __webpack_require__(
          "./node_modules/property-information/normalize.js"
        ),
        Schema = __webpack_require__(
          "./node_modules/property-information/lib/util/schema.js"
        ),
        DefinedInfo = __webpack_require__(
          "./node_modules/property-information/lib/util/defined-info.js"
        );
      module.exports = function create(definition) {
        var prop,
          info,
          space = definition.space,
          mustUseProperty = definition.mustUseProperty || [],
          attributes = definition.attributes || {},
          props = definition.properties,
          transform = definition.transform,
          property = {},
          normal = {};
        for (prop in props)
          (info = new DefinedInfo(
            prop,
            transform(attributes, prop),
            props[prop],
            space
          )),
            -1 !== mustUseProperty.indexOf(prop) && (info.mustUseProperty = !0),
            (property[prop] = info),
            (normal[normalize(prop)] = prop),
            (normal[normalize(info.attribute)] = prop);
        return new Schema(property, normal, space);
      };
    },
    "./node_modules/property-information/lib/util/defined-info.js": (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      "use strict";
      var Info = __webpack_require__(
          "./node_modules/property-information/lib/util/info.js"
        ),
        types = __webpack_require__(
          "./node_modules/property-information/lib/util/types.js"
        );
      (module.exports = DefinedInfo),
        (DefinedInfo.prototype = new Info()),
        (DefinedInfo.prototype.defined = !0);
      var checks = [
          "boolean",
          "booleanish",
          "overloadedBoolean",
          "number",
          "commaSeparated",
          "spaceSeparated",
          "commaOrSpaceSeparated",
        ],
        checksLength = checks.length;
      function DefinedInfo(property, attribute, mask, space) {
        var check,
          index = -1;
        for (
          mark(this, "space", space), Info.call(this, property, attribute);
          ++index < checksLength;

        )
          mark(
            this,
            (check = checks[index]),
            (mask & types[check]) === types[check]
          );
      }
      function mark(values, key, value) {
        value && (values[key] = value);
      }
    },
    "./node_modules/property-information/lib/util/info.js": (module) => {
      "use strict";
      module.exports = Info;
      var proto = Info.prototype;
      function Info(property, attribute) {
        (this.property = property), (this.attribute = attribute);
      }
      (proto.space = null),
        (proto.attribute = null),
        (proto.property = null),
        (proto.boolean = !1),
        (proto.booleanish = !1),
        (proto.overloadedBoolean = !1),
        (proto.number = !1),
        (proto.commaSeparated = !1),
        (proto.spaceSeparated = !1),
        (proto.commaOrSpaceSeparated = !1),
        (proto.mustUseProperty = !1),
        (proto.defined = !1);
    },
    "./node_modules/property-information/lib/util/merge.js": (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      "use strict";
      var xtend = __webpack_require__("./node_modules/xtend/immutable.js"),
        Schema = __webpack_require__(
          "./node_modules/property-information/lib/util/schema.js"
        );
      module.exports = function merge(definitions) {
        var info,
          space,
          length = definitions.length,
          property = [],
          normal = [],
          index = -1;
        for (; ++index < length; )
          (info = definitions[index]),
            property.push(info.property),
            normal.push(info.normal),
            (space = info.space);
        return new Schema(
          xtend.apply(null, property),
          xtend.apply(null, normal),
          space
        );
      };
    },
    "./node_modules/property-information/lib/util/schema.js": (module) => {
      "use strict";
      module.exports = Schema;
      var proto = Schema.prototype;
      function Schema(property, normal, space) {
        (this.property = property),
          (this.normal = normal),
          space && (this.space = space);
      }
      (proto.space = null), (proto.normal = {}), (proto.property = {});
    },
    "./node_modules/property-information/lib/util/types.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      var powers = 0;
      function increment() {
        return Math.pow(2, ++powers);
      }
      (exports.boolean = increment()),
        (exports.booleanish = increment()),
        (exports.overloadedBoolean = increment()),
        (exports.number = increment()),
        (exports.spaceSeparated = increment()),
        (exports.commaSeparated = increment()),
        (exports.commaOrSpaceSeparated = increment());
    },
    "./node_modules/property-information/lib/xlink.js": (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      "use strict";
      var create = __webpack_require__(
        "./node_modules/property-information/lib/util/create.js"
      );
      module.exports = create({
        space: "xlink",
        transform: function xlinkTransform(_, prop) {
          return "xlink:" + prop.slice(5).toLowerCase();
        },
        properties: {
          xLinkActuate: null,
          xLinkArcRole: null,
          xLinkHref: null,
          xLinkRole: null,
          xLinkShow: null,
          xLinkTitle: null,
          xLinkType: null,
        },
      });
    },
    "./node_modules/property-information/lib/xml.js": (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      "use strict";
      var create = __webpack_require__(
        "./node_modules/property-information/lib/util/create.js"
      );
      module.exports = create({
        space: "xml",
        transform: function xmlTransform(_, prop) {
          return "xml:" + prop.slice(3).toLowerCase();
        },
        properties: { xmlLang: null, xmlBase: null, xmlSpace: null },
      });
    },
    "./node_modules/property-information/lib/xmlns.js": (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      "use strict";
      var create = __webpack_require__(
          "./node_modules/property-information/lib/util/create.js"
        ),
        caseInsensitiveTransform = __webpack_require__(
          "./node_modules/property-information/lib/util/case-insensitive-transform.js"
        );
      module.exports = create({
        space: "xmlns",
        attributes: { xmlnsxlink: "xmlns:xlink" },
        transform: caseInsensitiveTransform,
        properties: { xmlns: null, xmlnsXLink: null },
      });
    },
    "./node_modules/property-information/normalize.js": (module) => {
      "use strict";
      module.exports = function normalize(value) {
        return value.toLowerCase();
      };
    },
    "./node_modules/refractor/core.js": (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      "use strict";
      var ctx =
          "object" == typeof globalThis
            ? globalThis
            : "object" == typeof self
            ? self
            : "object" == typeof window
            ? window
            : "object" == typeof __webpack_require__.g
            ? __webpack_require__.g
            : {},
        restore = (function capture() {
          var defined = "Prism" in ctx,
            current = defined ? ctx.Prism : void 0;
          return function restore() {
            defined ? (ctx.Prism = current) : delete ctx.Prism;
            (defined = void 0), (current = void 0);
          };
        })();
      ctx.Prism = { manual: !0, disableWorkerMessageHandler: !0 };
      var h = __webpack_require__("./node_modules/hastscript/index.js"),
        decode = __webpack_require__("./node_modules/parse-entities/index.js"),
        Prism = __webpack_require__(
          "./node_modules/prismjs/components/prism-core.js"
        ),
        markup = __webpack_require__("./node_modules/refractor/lang/markup.js"),
        css = __webpack_require__("./node_modules/refractor/lang/css.js"),
        clike = __webpack_require__("./node_modules/refractor/lang/clike.js"),
        js = __webpack_require__("./node_modules/refractor/lang/javascript.js");
      restore();
      var own = {}.hasOwnProperty;
      function Refractor() {}
      Refractor.prototype = Prism;
      var refract = new Refractor();
      function register(grammar) {
        if ("function" != typeof grammar || !grammar.displayName)
          throw new Error(
            "Expected `function` for `grammar`, got `" + grammar + "`"
          );
        void 0 === refract.languages[grammar.displayName] && grammar(refract);
      }
      (module.exports = refract),
        (refract.highlight = function highlight(value, name) {
          var grammar,
            sup = Prism.highlight;
          if ("string" != typeof value)
            throw new Error(
              "Expected `string` for `value`, got `" + value + "`"
            );
          if ("Object" === refract.util.type(name))
            (grammar = name), (name = null);
          else {
            if ("string" != typeof name)
              throw new Error(
                "Expected `string` for `name`, got `" + name + "`"
              );
            if (!own.call(refract.languages, name))
              throw new Error(
                "Unknown language: `" + name + "` is not registered"
              );
            grammar = refract.languages[name];
          }
          return sup.call(this, value, grammar, name);
        }),
        (refract.register = register),
        (refract.alias = function alias(name, alias) {
          var key,
            list,
            length,
            index,
            languages = refract.languages,
            map = name;
          alias && ((map = {})[name] = alias);
          for (key in map)
            for (
              list = map[key],
                length = (list = "string" == typeof list ? [list] : list)
                  .length,
                index = -1;
              ++index < length;

            )
              languages[list[index]] = languages[key];
        }),
        (refract.registered = function registered(language) {
          if ("string" != typeof language)
            throw new Error(
              "Expected `string` for `language`, got `" + language + "`"
            );
          return own.call(refract.languages, language);
        }),
        (refract.listLanguages = function listLanguages() {
          var language,
            languages = refract.languages,
            list = [];
          for (language in languages)
            own.call(languages, language) &&
              "object" == typeof languages[language] &&
              list.push(language);
          return list;
        }),
        register(markup),
        register(css),
        register(clike),
        register(js),
        (refract.util.encode = function encode(tokens) {
          return tokens;
        }),
        (refract.Token.stringify = function stringify(value, language, parent) {
          var env;
          if ("string" == typeof value) return { type: "text", value };
          if ("Array" === refract.util.type(value))
            return (function stringifyAll(values, language) {
              var value,
                result = [],
                length = values.length,
                index = -1;
              for (; ++index < length; )
                "" !== (value = values[index]) &&
                  null != value &&
                  result.push(value);
              (index = -1), (length = result.length);
              for (; ++index < length; )
                (value = result[index]),
                  (result[index] = refract.Token.stringify(
                    value,
                    language,
                    result
                  ));
              return result;
            })(value, language);
          (env = {
            type: value.type,
            content: refract.Token.stringify(value.content, language, parent),
            tag: "span",
            classes: ["token", value.type],
            attributes: {},
            language,
            parent,
          }),
            value.alias && (env.classes = env.classes.concat(value.alias));
          return (
            refract.hooks.run("wrap", env),
            h(
              env.tag + "." + env.classes.join("."),
              (function attributes(attrs) {
                var key;
                for (key in attrs) attrs[key] = decode(attrs[key]);
                return attrs;
              })(env.attributes),
              env.content
            )
          );
        });
    },
    "./node_modules/refractor/lang/bash.js": (module) => {
      "use strict";
      function bash(Prism) {
        !(function (Prism) {
          var envVars =
              "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",
            commandAfterHeredoc = {
              pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
              lookbehind: !0,
              alias: "punctuation",
              inside: null,
            },
            insideString = {
              bash: commandAfterHeredoc,
              environment: {
                pattern: RegExp("\\$" + envVars),
                alias: "constant",
              },
              variable: [
                {
                  pattern: /\$?\(\([\s\S]+?\)\)/,
                  greedy: !0,
                  inside: {
                    variable: [
                      { pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0 },
                      /^\$\(\(/,
                    ],
                    number:
                      /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
                    operator:
                      /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
                    punctuation: /\(\(?|\)\)?|,|;/,
                  },
                },
                {
                  pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
                  greedy: !0,
                  inside: { variable: /^\$\(|^`|\)$|`$/ },
                },
                {
                  pattern: /\$\{[^}]+\}/,
                  greedy: !0,
                  inside: {
                    operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
                    punctuation: /[\[\]]/,
                    environment: {
                      pattern: RegExp("(\\{)" + envVars),
                      lookbehind: !0,
                      alias: "constant",
                    },
                  },
                },
                /\$(?:\w+|[#?*!@$])/,
              ],
              entity:
                /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/,
            };
          (Prism.languages.bash = {
            shebang: { pattern: /^#!\s*\/.*/, alias: "important" },
            comment: { pattern: /(^|[^"{\\$])#.*/, lookbehind: !0 },
            "function-name": [
              {
                pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
                lookbehind: !0,
                alias: "function",
              },
              { pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/, alias: "function" },
            ],
            "for-or-select": {
              pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
              alias: "variable",
              lookbehind: !0,
            },
            "assign-left": {
              pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
              inside: {
                environment: {
                  pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + envVars),
                  lookbehind: !0,
                  alias: "constant",
                },
              },
              alias: "variable",
              lookbehind: !0,
            },
            string: [
              {
                pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
                lookbehind: !0,
                greedy: !0,
                inside: insideString,
              },
              {
                pattern:
                  /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
                lookbehind: !0,
                greedy: !0,
                inside: { bash: commandAfterHeredoc },
              },
              {
                pattern:
                  /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
                lookbehind: !0,
                greedy: !0,
                inside: insideString,
              },
              { pattern: /(^|[^$\\])'[^']*'/, lookbehind: !0, greedy: !0 },
              {
                pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
                greedy: !0,
                inside: { entity: insideString.entity },
              },
            ],
            environment: {
              pattern: RegExp("\\$?" + envVars),
              alias: "constant",
            },
            variable: insideString.variable,
            function: {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            keyword: {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            builtin: {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
              lookbehind: !0,
              alias: "class-name",
            },
            boolean: {
              pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            "file-descriptor": { pattern: /\B&\d\b/, alias: "important" },
            operator: {
              pattern:
                /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
              inside: {
                "file-descriptor": { pattern: /^\d/, alias: "important" },
              },
            },
            punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
            number: {
              pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
              lookbehind: !0,
            },
          }),
            (commandAfterHeredoc.inside = Prism.languages.bash);
          for (
            var toBeCopied = [
                "comment",
                "function-name",
                "for-or-select",
                "assign-left",
                "string",
                "environment",
                "function",
                "keyword",
                "builtin",
                "boolean",
                "file-descriptor",
                "operator",
                "punctuation",
                "number",
              ],
              inside = insideString.variable[1].inside,
              i = 0;
            i < toBeCopied.length;
            i++
          )
            inside[toBeCopied[i]] = Prism.languages.bash[toBeCopied[i]];
          Prism.languages.shell = Prism.languages.bash;
        })(Prism);
      }
      (module.exports = bash),
        (bash.displayName = "bash"),
        (bash.aliases = ["shell"]);
    },
    "./node_modules/refractor/lang/clike.js": (module) => {
      "use strict";
      function clike(Prism) {
        Prism.languages.clike = {
          comment: [
            {
              pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
              lookbehind: !0,
              greedy: !0,
            },
            { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
          ],
          string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0,
          },
          "class-name": {
            pattern:
              /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
            lookbehind: !0,
            inside: { punctuation: /[.\\]/ },
          },
          keyword:
            /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
          boolean: /\b(?:false|true)\b/,
          function: /\b\w+(?=\()/,
          number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
          operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
          punctuation: /[{}[\];(),.:]/,
        };
      }
      (module.exports = clike),
        (clike.displayName = "clike"),
        (clike.aliases = []);
    },
    "./node_modules/refractor/lang/css.js": (module) => {
      "use strict";
      function css(Prism) {
        !(function (Prism) {
          var string =
            /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
          (Prism.languages.css = {
            comment: /\/\*[\s\S]*?\*\//,
            atrule: {
              pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
              inside: {
                rule: /^@[\w-]+/,
                "selector-function-argument": {
                  pattern:
                    /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                  lookbehind: !0,
                  alias: "selector",
                },
                keyword: {
                  pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                  lookbehind: !0,
                },
              },
            },
            url: {
              pattern: RegExp(
                "\\burl\\((?:" +
                  string.source +
                  "|" +
                  /(?:[^\\\r\n()"']|\\[\s\S])*/.source +
                  ")\\)",
                "i"
              ),
              greedy: !0,
              inside: {
                function: /^url/i,
                punctuation: /^\(|\)$/,
                string: {
                  pattern: RegExp("^" + string.source + "$"),
                  alias: "url",
                },
              },
            },
            selector: {
              pattern: RegExp(
                "(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" +
                  string.source +
                  ")*(?=\\s*\\{)"
              ),
              lookbehind: !0,
            },
            string: { pattern: string, greedy: !0 },
            property: {
              pattern:
                /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
              lookbehind: !0,
            },
            important: /!important\b/i,
            function: {
              pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
              lookbehind: !0,
            },
            punctuation: /[(){};:,]/,
          }),
            (Prism.languages.css.atrule.inside.rest = Prism.languages.css);
          var markup = Prism.languages.markup;
          markup &&
            (markup.tag.addInlined("style", "css"),
            markup.tag.addAttribute("style", "css"));
        })(Prism);
      }
      (module.exports = css), (css.displayName = "css"), (css.aliases = []);
    },
    "./node_modules/refractor/lang/graphql.js": (module) => {
      "use strict";
      function graphql(Prism) {
        (Prism.languages.graphql = {
          comment: /#.*/,
          description: {
            pattern:
              /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
            greedy: !0,
            alias: "string",
            inside: {
              "language-markdown": {
                pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
                lookbehind: !0,
                inside: Prism.languages.markdown,
              },
            },
          },
          string: {
            pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
            greedy: !0,
          },
          number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
          boolean: /\b(?:false|true)\b/,
          variable: /\$[a-z_]\w*/i,
          directive: { pattern: /@[a-z_]\w*/i, alias: "function" },
          "attr-name": {
            pattern:
              /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
            greedy: !0,
          },
          "atom-input": { pattern: /\b[A-Z]\w*Input\b/, alias: "class-name" },
          scalar: /\b(?:Boolean|Float|ID|Int|String)\b/,
          constant: /\b[A-Z][A-Z_\d]*\b/,
          "class-name": {
            pattern:
              /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
            lookbehind: !0,
          },
          fragment: {
            pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
            lookbehind: !0,
            alias: "function",
          },
          "definition-mutation": {
            pattern: /(\bmutation\s+)[a-zA-Z_]\w*/,
            lookbehind: !0,
            alias: "function",
          },
          "definition-query": {
            pattern: /(\bquery\s+)[a-zA-Z_]\w*/,
            lookbehind: !0,
            alias: "function",
          },
          keyword:
            /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
          operator: /[!=|&]|\.{3}/,
          "property-query": /\w+(?=\s*\()/,
          object: /\w+(?=\s*\{)/,
          punctuation: /[!(){}\[\]:=,]/,
          property: /\w+/,
        }),
          Prism.hooks.add("after-tokenize", function afterTokenizeGraphql(env) {
            if ("graphql" === env.language)
              for (
                var validTokens = env.tokens.filter(function (token) {
                    return (
                      "string" != typeof token &&
                      "comment" !== token.type &&
                      "scalar" !== token.type
                    );
                  }),
                  currentIndex = 0;
                currentIndex < validTokens.length;

              ) {
                var startToken = validTokens[currentIndex++];
                if (
                  "keyword" === startToken.type &&
                  "mutation" === startToken.content
                ) {
                  var inputVariables = [];
                  if (
                    isTokenType(["definition-mutation", "punctuation"]) &&
                    "(" === getToken(1).content
                  ) {
                    currentIndex += 2;
                    var definitionEnd = findClosingBracket(/^\($/, /^\)$/);
                    if (-1 === definitionEnd) continue;
                    for (; currentIndex < definitionEnd; currentIndex++) {
                      var t = getToken(0);
                      "variable" === t.type &&
                        (addAlias(t, "variable-input"),
                        inputVariables.push(t.content));
                    }
                    currentIndex = definitionEnd + 1;
                  }
                  if (
                    isTokenType(["punctuation", "property-query"]) &&
                    "{" === getToken(0).content &&
                    (currentIndex++,
                    addAlias(getToken(0), "property-mutation"),
                    inputVariables.length > 0)
                  ) {
                    var mutationEnd = findClosingBracket(/^\{$/, /^\}$/);
                    if (-1 === mutationEnd) continue;
                    for (var i = currentIndex; i < mutationEnd; i++) {
                      var varToken = validTokens[i];
                      "variable" === varToken.type &&
                        inputVariables.indexOf(varToken.content) >= 0 &&
                        addAlias(varToken, "variable-input");
                    }
                  }
                }
              }
            function getToken(offset) {
              return validTokens[currentIndex + offset];
            }
            function isTokenType(types, offset) {
              offset = offset || 0;
              for (var i = 0; i < types.length; i++) {
                var token = getToken(i + offset);
                if (!token || token.type !== types[i]) return !1;
              }
              return !0;
            }
            function findClosingBracket(open, close) {
              for (
                var stackHeight = 1, i = currentIndex;
                i < validTokens.length;
                i++
              ) {
                var token = validTokens[i],
                  content = token.content;
                if ("punctuation" === token.type && "string" == typeof content)
                  if (open.test(content)) stackHeight++;
                  else if (close.test(content) && 0 === --stackHeight) return i;
              }
              return -1;
            }
            function addAlias(token, alias) {
              var aliases = token.alias;
              aliases
                ? Array.isArray(aliases) || (token.alias = aliases = [aliases])
                : (token.alias = aliases = []),
                aliases.push(alias);
            }
          });
      }
      (module.exports = graphql),
        (graphql.displayName = "graphql"),
        (graphql.aliases = []);
    },
    "./node_modules/refractor/lang/javascript.js": (module) => {
      "use strict";
      function javascript(Prism) {
        (Prism.languages.javascript = Prism.languages.extend("clike", {
          "class-name": [
            Prism.languages.clike["class-name"],
            {
              pattern:
                /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
              lookbehind: !0,
            },
          ],
          keyword: [
            { pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
            {
              pattern:
                /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
              lookbehind: !0,
            },
          ],
          function:
            /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
          number: {
            pattern: RegExp(
              /(^|[^\w$])/.source +
                "(?:" +
                /NaN|Infinity/.source +
                "|" +
                /0[bB][01]+(?:_[01]+)*n?/.source +
                "|" +
                /0[oO][0-7]+(?:_[0-7]+)*n?/.source +
                "|" +
                /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
                "|" +
                /\d+(?:_\d+)*n/.source +
                "|" +
                /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/
                  .source +
                ")" +
                /(?![\w$])/.source
            ),
            lookbehind: !0,
          },
          operator:
            /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
        })),
          (Prism.languages.javascript["class-name"][0].pattern =
            /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/),
          Prism.languages.insertBefore("javascript", "keyword", {
            regex: {
              pattern:
                /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
              lookbehind: !0,
              greedy: !0,
              inside: {
                "regex-source": {
                  pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                  lookbehind: !0,
                  alias: "language-regex",
                  inside: Prism.languages.regex,
                },
                "regex-delimiter": /^\/|\/$/,
                "regex-flags": /^[a-z]+$/,
              },
            },
            "function-variable": {
              pattern:
                /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
              alias: "function",
            },
            parameter: [
              {
                pattern:
                  /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
                lookbehind: !0,
                inside: Prism.languages.javascript,
              },
              {
                pattern:
                  /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
                lookbehind: !0,
                inside: Prism.languages.javascript,
              },
              {
                pattern:
                  /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
                lookbehind: !0,
                inside: Prism.languages.javascript,
              },
              {
                pattern:
                  /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
                lookbehind: !0,
                inside: Prism.languages.javascript,
              },
            ],
            constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
          }),
          Prism.languages.insertBefore("javascript", "string", {
            hashbang: { pattern: /^#!.*/, greedy: !0, alias: "comment" },
            "template-string": {
              pattern:
                /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
              greedy: !0,
              inside: {
                "template-punctuation": { pattern: /^`|`$/, alias: "string" },
                interpolation: {
                  pattern:
                    /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                  lookbehind: !0,
                  inside: {
                    "interpolation-punctuation": {
                      pattern: /^\$\{|\}$/,
                      alias: "punctuation",
                    },
                    rest: Prism.languages.javascript,
                  },
                },
                string: /[\s\S]+/,
              },
            },
            "string-property": {
              pattern:
                /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
              lookbehind: !0,
              greedy: !0,
              alias: "property",
            },
          }),
          Prism.languages.insertBefore("javascript", "operator", {
            "literal-property": {
              pattern:
                /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
              lookbehind: !0,
              alias: "property",
            },
          }),
          Prism.languages.markup &&
            (Prism.languages.markup.tag.addInlined("script", "javascript"),
            Prism.languages.markup.tag.addAttribute(
              /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/
                .source,
              "javascript"
            )),
          (Prism.languages.js = Prism.languages.javascript);
      }
      (module.exports = javascript),
        (javascript.displayName = "javascript"),
        (javascript.aliases = ["js"]);
    },
    "./node_modules/refractor/lang/js-extras.js": (module) => {
      "use strict";
      function jsExtras(Prism) {
        !(function (Prism) {
          function withId(source, flags) {
            return RegExp(
              source.replace(/<ID>/g, function () {
                return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/
                  .source;
              }),
              flags
            );
          }
          Prism.languages.insertBefore("javascript", "function-variable", {
            "method-variable": {
              pattern: RegExp(
                "(\\.\\s*)" +
                  Prism.languages.javascript["function-variable"].pattern.source
              ),
              lookbehind: !0,
              alias: [
                "function-variable",
                "method",
                "function",
                "property-access",
              ],
            },
          }),
            Prism.languages.insertBefore("javascript", "function", {
              method: {
                pattern: RegExp(
                  "(\\.\\s*)" + Prism.languages.javascript.function.source
                ),
                lookbehind: !0,
                alias: ["function", "property-access"],
              },
            }),
            Prism.languages.insertBefore("javascript", "constant", {
              "known-class-name": [
                {
                  pattern:
                    /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
                  alias: "class-name",
                },
                { pattern: /\b(?:[A-Z]\w*)Error\b/, alias: "class-name" },
              ],
            }),
            Prism.languages.insertBefore("javascript", "keyword", {
              imports: {
                pattern: withId(
                  /(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/
                    .source
                ),
                lookbehind: !0,
                inside: Prism.languages.javascript,
              },
              exports: {
                pattern: withId(
                  /(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/
                    .source
                ),
                lookbehind: !0,
                inside: Prism.languages.javascript,
              },
            }),
            Prism.languages.javascript.keyword.unshift(
              {
                pattern: /\b(?:as|default|export|from|import)\b/,
                alias: "module",
              },
              {
                pattern:
                  /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
                alias: "control-flow",
              },
              { pattern: /\bnull\b/, alias: ["null", "nil"] },
              { pattern: /\bundefined\b/, alias: "nil" }
            ),
            Prism.languages.insertBefore("javascript", "operator", {
              spread: { pattern: /\.{3}/, alias: "operator" },
              arrow: { pattern: /=>/, alias: "operator" },
            }),
            Prism.languages.insertBefore("javascript", "punctuation", {
              "property-access": {
                pattern: withId(/(\.\s*)#?<ID>/.source),
                lookbehind: !0,
              },
              "maybe-class-name": {
                pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
                lookbehind: !0,
              },
              dom: {
                pattern:
                  /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
                alias: "variable",
              },
              console: { pattern: /\bconsole(?=\s*\.)/, alias: "class-name" },
            });
          for (
            var maybeClassNameTokens = [
                "function",
                "function-variable",
                "method",
                "method-variable",
                "property-access",
              ],
              i = 0;
            i < maybeClassNameTokens.length;
            i++
          ) {
            var token = maybeClassNameTokens[i],
              value = Prism.languages.javascript[token];
            "RegExp" === Prism.util.type(value) &&
              (value = Prism.languages.javascript[token] = { pattern: value });
            var inside = value.inside || {};
            (value.inside = inside),
              (inside["maybe-class-name"] = /^[A-Z][\s\S]*/);
          }
        })(Prism);
      }
      (module.exports = jsExtras),
        (jsExtras.displayName = "jsExtras"),
        (jsExtras.aliases = []);
    },
    "./node_modules/refractor/lang/json.js": (module) => {
      "use strict";
      function json(Prism) {
        (Prism.languages.json = {
          property: {
            pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
            lookbehind: !0,
            greedy: !0,
          },
          string: {
            pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
            lookbehind: !0,
            greedy: !0,
          },
          comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 },
          number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
          punctuation: /[{}[\],]/,
          operator: /:/,
          boolean: /\b(?:false|true)\b/,
          null: { pattern: /\bnull\b/, alias: "keyword" },
        }),
          (Prism.languages.webmanifest = Prism.languages.json);
      }
      (module.exports = json),
        (json.displayName = "json"),
        (json.aliases = ["webmanifest"]);
    },
    "./node_modules/refractor/lang/jsx.js": (module) => {
      "use strict";
      function jsx(Prism) {
        !(function (Prism) {
          var javascript = Prism.util.clone(Prism.languages.javascript),
            space = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,
            braces = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,
            spread = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
          function re(source, flags) {
            return (
              (source = source
                .replace(/<S>/g, function () {
                  return space;
                })
                .replace(/<BRACES>/g, function () {
                  return braces;
                })
                .replace(/<SPREAD>/g, function () {
                  return spread;
                })),
              RegExp(source, flags)
            );
          }
          (spread = re(spread).source),
            (Prism.languages.jsx = Prism.languages.extend(
              "markup",
              javascript
            )),
            (Prism.languages.jsx.tag.pattern = re(
              /<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/
                .source
            )),
            (Prism.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/),
            (Prism.languages.jsx.tag.inside["attr-value"].pattern =
              /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/),
            (Prism.languages.jsx.tag.inside.tag.inside["class-name"] =
              /^[A-Z]\w*(?:\.[A-Z]\w*)*$/),
            (Prism.languages.jsx.tag.inside.comment = javascript.comment),
            Prism.languages.insertBefore(
              "inside",
              "attr-name",
              {
                spread: {
                  pattern: re(/<SPREAD>/.source),
                  inside: Prism.languages.jsx,
                },
              },
              Prism.languages.jsx.tag
            ),
            Prism.languages.insertBefore(
              "inside",
              "special-attr",
              {
                script: {
                  pattern: re(/=<BRACES>/.source),
                  alias: "language-javascript",
                  inside: {
                    "script-punctuation": {
                      pattern: /^=(?=\{)/,
                      alias: "punctuation",
                    },
                    rest: Prism.languages.jsx,
                  },
                },
              },
              Prism.languages.jsx.tag
            );
          var stringifyToken = function (token) {
              return token
                ? "string" == typeof token
                  ? token
                  : "string" == typeof token.content
                  ? token.content
                  : token.content.map(stringifyToken).join("")
                : "";
            },
            walkTokens = function (tokens) {
              for (var openedTags = [], i = 0; i < tokens.length; i++) {
                var token = tokens[i],
                  notTagNorBrace = !1;
                if (
                  ("string" != typeof token &&
                    ("tag" === token.type &&
                    token.content[0] &&
                    "tag" === token.content[0].type
                      ? "</" === token.content[0].content[0].content
                        ? openedTags.length > 0 &&
                          openedTags[openedTags.length - 1].tagName ===
                            stringifyToken(token.content[0].content[1]) &&
                          openedTags.pop()
                        : "/>" ===
                            token.content[token.content.length - 1].content ||
                          openedTags.push({
                            tagName: stringifyToken(
                              token.content[0].content[1]
                            ),
                            openedBraces: 0,
                          })
                      : openedTags.length > 0 &&
                        "punctuation" === token.type &&
                        "{" === token.content
                      ? openedTags[openedTags.length - 1].openedBraces++
                      : openedTags.length > 0 &&
                        openedTags[openedTags.length - 1].openedBraces > 0 &&
                        "punctuation" === token.type &&
                        "}" === token.content
                      ? openedTags[openedTags.length - 1].openedBraces--
                      : (notTagNorBrace = !0)),
                  (notTagNorBrace || "string" == typeof token) &&
                    openedTags.length > 0 &&
                    0 === openedTags[openedTags.length - 1].openedBraces)
                ) {
                  var plainText = stringifyToken(token);
                  i < tokens.length - 1 &&
                    ("string" == typeof tokens[i + 1] ||
                      "plain-text" === tokens[i + 1].type) &&
                    ((plainText += stringifyToken(tokens[i + 1])),
                    tokens.splice(i + 1, 1)),
                    i > 0 &&
                      ("string" == typeof tokens[i - 1] ||
                        "plain-text" === tokens[i - 1].type) &&
                      ((plainText = stringifyToken(tokens[i - 1]) + plainText),
                      tokens.splice(i - 1, 1),
                      i--),
                    (tokens[i] = new Prism.Token(
                      "plain-text",
                      plainText,
                      null,
                      plainText
                    ));
                }
                token.content &&
                  "string" != typeof token.content &&
                  walkTokens(token.content);
              }
            };
          Prism.hooks.add("after-tokenize", function (env) {
            ("jsx" !== env.language && "tsx" !== env.language) ||
              walkTokens(env.tokens);
          });
        })(Prism);
      }
      (module.exports = jsx), (jsx.displayName = "jsx"), (jsx.aliases = []);
    },
    "./node_modules/refractor/lang/markdown.js": (module) => {
      "use strict";
      function markdown(Prism) {
        !(function (Prism) {
          var inner = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
          function createInline(pattern) {
            return (
              (pattern = pattern.replace(/<inner>/g, function () {
                return inner;
              })),
              RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + pattern + ")")
            );
          }
          var tableCell =
              /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/
                .source,
            tableRow =
              /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(
                /__/g,
                function () {
                  return tableCell;
                }
              ),
            tableLine =
              /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/
                .source;
          (Prism.languages.markdown = Prism.languages.extend("markup", {})),
            Prism.languages.insertBefore("markdown", "prolog", {
              "front-matter-block": {
                pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
                lookbehind: !0,
                greedy: !0,
                inside: {
                  punctuation: /^---|---$/,
                  "front-matter": {
                    pattern: /\S+(?:\s+\S+)*/,
                    alias: ["yaml", "language-yaml"],
                    inside: Prism.languages.yaml,
                  },
                },
              },
              blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: "punctuation" },
              table: {
                pattern: RegExp(
                  "^" + tableRow + tableLine + "(?:" + tableRow + ")*",
                  "m"
                ),
                inside: {
                  "table-data-rows": {
                    pattern: RegExp(
                      "^(" + tableRow + tableLine + ")(?:" + tableRow + ")*$"
                    ),
                    lookbehind: !0,
                    inside: {
                      "table-data": {
                        pattern: RegExp(tableCell),
                        inside: Prism.languages.markdown,
                      },
                      punctuation: /\|/,
                    },
                  },
                  "table-line": {
                    pattern: RegExp("^(" + tableRow + ")" + tableLine + "$"),
                    lookbehind: !0,
                    inside: { punctuation: /\||:?-{3,}:?/ },
                  },
                  "table-header-row": {
                    pattern: RegExp("^" + tableRow + "$"),
                    inside: {
                      "table-header": {
                        pattern: RegExp(tableCell),
                        alias: "important",
                        inside: Prism.languages.markdown,
                      },
                      punctuation: /\|/,
                    },
                  },
                },
              },
              code: [
                {
                  pattern:
                    /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
                  lookbehind: !0,
                  alias: "keyword",
                },
                {
                  pattern: /^```[\s\S]*?^```$/m,
                  greedy: !0,
                  inside: {
                    "code-block": {
                      pattern:
                        /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
                      lookbehind: !0,
                    },
                    "code-language": { pattern: /^(```).+/, lookbehind: !0 },
                    punctuation: /```/,
                  },
                },
              ],
              title: [
                {
                  pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
                  alias: "important",
                  inside: { punctuation: /==+$|--+$/ },
                },
                {
                  pattern: /(^\s*)#.+/m,
                  lookbehind: !0,
                  alias: "important",
                  inside: { punctuation: /^#+|#+$/ },
                },
              ],
              hr: {
                pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
                lookbehind: !0,
                alias: "punctuation",
              },
              list: {
                pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
                lookbehind: !0,
                alias: "punctuation",
              },
              "url-reference": {
                pattern:
                  /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
                inside: {
                  variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 },
                  string:
                    /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
                  punctuation: /^[\[\]!:]|[<>]/,
                },
                alias: "url",
              },
              bold: {
                pattern: createInline(
                  /\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/
                    .source
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^..)[\s\S]+(?=..$)/,
                    lookbehind: !0,
                    inside: {},
                  },
                  punctuation: /\*\*|__/,
                },
              },
              italic: {
                pattern: createInline(
                  /\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/
                    .source
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^.)[\s\S]+(?=.$)/,
                    lookbehind: !0,
                    inside: {},
                  },
                  punctuation: /[*_]/,
                },
              },
              strike: {
                pattern: createInline(/(~~?)(?:(?!~)<inner>)+\2/.source),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^~~?)[\s\S]+(?=\1$)/,
                    lookbehind: !0,
                    inside: {},
                  },
                  punctuation: /~~?/,
                },
              },
              "code-snippet": {
                pattern:
                  /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
                lookbehind: !0,
                greedy: !0,
                alias: ["code", "keyword"],
              },
              url: {
                pattern: createInline(
                  /!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/
                    .source
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  operator: /^!/,
                  content: {
                    pattern: /(^\[)[^\]]+(?=\])/,
                    lookbehind: !0,
                    inside: {},
                  },
                  variable: {
                    pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
                    lookbehind: !0,
                  },
                  url: { pattern: /(^\]\()[^\s)]+/, lookbehind: !0 },
                  string: {
                    pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
                    lookbehind: !0,
                  },
                },
              },
            }),
            ["url", "bold", "italic", "strike"].forEach(function (token) {
              ["url", "bold", "italic", "strike", "code-snippet"].forEach(
                function (inside) {
                  token !== inside &&
                    (Prism.languages.markdown[token].inside.content.inside[
                      inside
                    ] = Prism.languages.markdown[inside]);
                }
              );
            }),
            Prism.hooks.add("after-tokenize", function (env) {
              ("markdown" !== env.language && "md" !== env.language) ||
                (function walkTokens(tokens) {
                  if (tokens && "string" != typeof tokens)
                    for (var i = 0, l = tokens.length; i < l; i++) {
                      var token = tokens[i];
                      if ("code" === token.type) {
                        var codeLang = token.content[1],
                          codeBlock = token.content[3];
                        if (
                          codeLang &&
                          codeBlock &&
                          "code-language" === codeLang.type &&
                          "code-block" === codeBlock.type &&
                          "string" == typeof codeLang.content
                        ) {
                          var lang = codeLang.content
                              .replace(/\b#/g, "sharp")
                              .replace(/\b\+\+/g, "pp"),
                            alias =
                              "language-" +
                              (lang = (/[a-z][\w-]*/i.exec(lang) || [
                                "",
                              ])[0].toLowerCase());
                          codeBlock.alias
                            ? "string" == typeof codeBlock.alias
                              ? (codeBlock.alias = [codeBlock.alias, alias])
                              : codeBlock.alias.push(alias)
                            : (codeBlock.alias = [alias]);
                        }
                      } else walkTokens(token.content);
                    }
                })(env.tokens);
            }),
            Prism.hooks.add("wrap", function (env) {
              if ("code-block" === env.type) {
                for (
                  var codeLang = "", i = 0, l = env.classes.length;
                  i < l;
                  i++
                ) {
                  var cls = env.classes[i],
                    match = /language-(.+)/.exec(cls);
                  if (match) {
                    codeLang = match[1];
                    break;
                  }
                }
                var grammar = Prism.languages[codeLang];
                if (grammar)
                  env.content = Prism.highlight(
                    (function textContent(html) {
                      var text = html.replace(tagPattern, "");
                      return (text = text.replace(
                        /&(\w{1,8}|#x?[\da-f]{1,8});/gi,
                        function (m, code) {
                          var value;
                          if ("#" === (code = code.toLowerCase())[0])
                            return (
                              (value =
                                "x" === code[1]
                                  ? parseInt(code.slice(2), 16)
                                  : Number(code.slice(1))),
                              fromCodePoint(value)
                            );
                          var known = KNOWN_ENTITY_NAMES[code];
                          return known || m;
                        }
                      ));
                    })(env.content.value),
                    grammar,
                    codeLang
                  );
                else if (
                  codeLang &&
                  "none" !== codeLang &&
                  Prism.plugins.autoloader
                ) {
                  var id =
                    "md-" +
                    new Date().valueOf() +
                    "-" +
                    Math.floor(1e16 * Math.random());
                  (env.attributes.id = id),
                    Prism.plugins.autoloader.loadLanguages(
                      codeLang,
                      function () {
                        var ele = document.getElementById(id);
                        ele &&
                          (ele.innerHTML = Prism.highlight(
                            ele.textContent,
                            Prism.languages[codeLang],
                            codeLang
                          ));
                      }
                    );
                }
              }
            });
          var tagPattern = RegExp(
              Prism.languages.markup.tag.pattern.source,
              "gi"
            ),
            KNOWN_ENTITY_NAMES = { amp: "&", lt: "<", gt: ">", quot: '"' },
            fromCodePoint = String.fromCodePoint || String.fromCharCode;
          Prism.languages.md = Prism.languages.markdown;
        })(Prism);
      }
      (module.exports = markdown),
        (markdown.displayName = "markdown"),
        (markdown.aliases = ["md"]);
    },
    "./node_modules/refractor/lang/markup.js": (module) => {
      "use strict";
      function markup(Prism) {
        (Prism.languages.markup = {
          comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 },
          prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 },
          doctype: {
            pattern:
              /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
            greedy: !0,
            inside: {
              "internal-subset": {
                pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                lookbehind: !0,
                greedy: !0,
                inside: null,
              },
              string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
              punctuation: /^<!|>$|[[\]]/,
              "doctype-tag": /^DOCTYPE/i,
              name: /[^\s<>'"]+/,
            },
          },
          cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 },
          tag: {
            pattern:
              /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
            greedy: !0,
            inside: {
              tag: {
                pattern: /^<\/?[^\s>\/]+/,
                inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
              },
              "special-attr": [],
              "attr-value": {
                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                inside: {
                  punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/],
                },
              },
              punctuation: /\/?>/,
              "attr-name": {
                pattern: /[^\s>\/]+/,
                inside: { namespace: /^[^\s>\/:]+:/ },
              },
            },
          },
          entity: [
            { pattern: /&[\da-z]{1,8};/i, alias: "named-entity" },
            /&#x?[\da-f]{1,8};/i,
          ],
        }),
          (Prism.languages.markup.tag.inside["attr-value"].inside.entity =
            Prism.languages.markup.entity),
          (Prism.languages.markup.doctype.inside["internal-subset"].inside =
            Prism.languages.markup),
          Prism.hooks.add("wrap", function (env) {
            "entity" === env.type &&
              (env.attributes.title = env.content.value.replace(/&amp;/, "&"));
          }),
          Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
            value: function addInlined(tagName, lang) {
              var includedCdataInside = {};
              (includedCdataInside["language-" + lang] = {
                pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                lookbehind: !0,
                inside: Prism.languages[lang],
              }),
                (includedCdataInside.cdata = /^<!\[CDATA\[|\]\]>$/i);
              var inside = {
                "included-cdata": {
                  pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                  inside: includedCdataInside,
                },
              };
              inside["language-" + lang] = {
                pattern: /[\s\S]+/,
                inside: Prism.languages[lang],
              };
              var def = {};
              (def[tagName] = {
                pattern: RegExp(
                  /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
                    /__/g,
                    function () {
                      return tagName;
                    }
                  ),
                  "i"
                ),
                lookbehind: !0,
                greedy: !0,
                inside,
              }),
                Prism.languages.insertBefore("markup", "cdata", def);
            },
          }),
          Object.defineProperty(Prism.languages.markup.tag, "addAttribute", {
            value: function (attrName, lang) {
              Prism.languages.markup.tag.inside["special-attr"].push({
                pattern: RegExp(
                  /(^|["'\s])/.source +
                    "(?:" +
                    attrName +
                    ")" +
                    /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
                  "i"
                ),
                lookbehind: !0,
                inside: {
                  "attr-name": /^[^\s=]+/,
                  "attr-value": {
                    pattern: /=[\s\S]+/,
                    inside: {
                      value: {
                        pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                        lookbehind: !0,
                        alias: [lang, "language-" + lang],
                        inside: Prism.languages[lang],
                      },
                      punctuation: [
                        { pattern: /^=/, alias: "attr-equals" },
                        /"|'/,
                      ],
                    },
                  },
                },
              });
            },
          }),
          (Prism.languages.html = Prism.languages.markup),
          (Prism.languages.mathml = Prism.languages.markup),
          (Prism.languages.svg = Prism.languages.markup),
          (Prism.languages.xml = Prism.languages.extend("markup", {})),
          (Prism.languages.ssml = Prism.languages.xml),
          (Prism.languages.atom = Prism.languages.xml),
          (Prism.languages.rss = Prism.languages.xml);
      }
      (module.exports = markup),
        (markup.displayName = "markup"),
        (markup.aliases = [
          "html",
          "mathml",
          "svg",
          "xml",
          "ssml",
          "atom",
          "rss",
        ]);
    },
    "./node_modules/refractor/lang/tsx.js": (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      "use strict";
      var refractorJsx = __webpack_require__(
          "./node_modules/refractor/lang/jsx.js"
        ),
        refractorTypescript = __webpack_require__(
          "./node_modules/refractor/lang/typescript.js"
        );
      function tsx(Prism) {
        Prism.register(refractorJsx),
          Prism.register(refractorTypescript),
          (function (Prism) {
            var typescript = Prism.util.clone(Prism.languages.typescript);
            (Prism.languages.tsx = Prism.languages.extend("jsx", typescript)),
              delete Prism.languages.tsx.parameter,
              delete Prism.languages.tsx["literal-property"];
            var tag = Prism.languages.tsx.tag;
            (tag.pattern = RegExp(
              /(^|[^\w$]|(?=<\/))/.source + "(?:" + tag.pattern.source + ")",
              tag.pattern.flags
            )),
              (tag.lookbehind = !0);
          })(Prism);
      }
      (module.exports = tsx), (tsx.displayName = "tsx"), (tsx.aliases = []);
    },
    "./node_modules/refractor/lang/typescript.js": (module) => {
      "use strict";
      function typescript(Prism) {
        !(function (Prism) {
          (Prism.languages.typescript = Prism.languages.extend("javascript", {
            "class-name": {
              pattern:
                /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
              lookbehind: !0,
              greedy: !0,
              inside: null,
            },
            builtin:
              /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/,
          })),
            Prism.languages.typescript.keyword.push(
              /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
              /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
              /\btype\b(?=\s*(?:[\{*]|$))/
            ),
            delete Prism.languages.typescript.parameter,
            delete Prism.languages.typescript["literal-property"];
          var typeInside = Prism.languages.extend("typescript", {});
          delete typeInside["class-name"],
            (Prism.languages.typescript["class-name"].inside = typeInside),
            Prism.languages.insertBefore("typescript", "function", {
              decorator: {
                pattern: /@[$\w\xA0-\uFFFF]+/,
                inside: {
                  at: { pattern: /^@/, alias: "operator" },
                  function: /^[\s\S]+/,
                },
              },
              "generic-function": {
                pattern:
                  /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
                greedy: !0,
                inside: {
                  function:
                    /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
                  generic: {
                    pattern: /<[\s\S]+/,
                    alias: "class-name",
                    inside: typeInside,
                  },
                },
              },
            }),
            (Prism.languages.ts = Prism.languages.typescript);
        })(Prism);
      }
      (module.exports = typescript),
        (typescript.displayName = "typescript"),
        (typescript.aliases = ["ts"]);
    },
    "./node_modules/refractor/lang/yaml.js": (module) => {
      "use strict";
      function yaml(Prism) {
        !(function (Prism) {
          var anchorOrAlias = /[*&][^\s[\]{},]+/,
            tag =
              /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
            properties =
              "(?:" +
              tag.source +
              "(?:[ \t]+" +
              anchorOrAlias.source +
              ")?|" +
              anchorOrAlias.source +
              "(?:[ \t]+" +
              tag.source +
              ")?)",
            plainKey =
              /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(
                /<PLAIN>/g,
                function () {
                  return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/
                    .source;
                }
              ),
            string = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
          function createValuePattern(value, flags) {
            flags = (flags || "").replace(/m/g, "") + "m";
            var pattern =
              /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source
                .replace(/<<prop>>/g, function () {
                  return properties;
                })
                .replace(/<<value>>/g, function () {
                  return value;
                });
            return RegExp(pattern, flags);
          }
          (Prism.languages.yaml = {
            scalar: {
              pattern: RegExp(
                /([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(
                  /<<prop>>/g,
                  function () {
                    return properties;
                  }
                )
              ),
              lookbehind: !0,
              alias: "string",
            },
            comment: /#.*/,
            key: {
              pattern: RegExp(
                /((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source
                  .replace(/<<prop>>/g, function () {
                    return properties;
                  })
                  .replace(/<<key>>/g, function () {
                    return "(?:" + plainKey + "|" + string + ")";
                  })
              ),
              lookbehind: !0,
              greedy: !0,
              alias: "atrule",
            },
            directive: {
              pattern: /(^[ \t]*)%.+/m,
              lookbehind: !0,
              alias: "important",
            },
            datetime: {
              pattern: createValuePattern(
                /\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/
                  .source
              ),
              lookbehind: !0,
              alias: "number",
            },
            boolean: {
              pattern: createValuePattern(/false|true/.source, "i"),
              lookbehind: !0,
              alias: "important",
            },
            null: {
              pattern: createValuePattern(/null|~/.source, "i"),
              lookbehind: !0,
              alias: "important",
            },
            string: {
              pattern: createValuePattern(string),
              lookbehind: !0,
              greedy: !0,
            },
            number: {
              pattern: createValuePattern(
                /[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/
                  .source,
                "i"
              ),
              lookbehind: !0,
            },
            tag,
            important: anchorOrAlias,
            punctuation: /---|[:[\]{}\-,|>?]|\.\.\./,
          }),
            (Prism.languages.yml = Prism.languages.yaml);
        })(Prism);
      }
      (module.exports = yaml),
        (yaml.displayName = "yaml"),
        (yaml.aliases = ["yml"]);
    },
    "./node_modules/space-separated-tokens/index.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      exports.Q = function parse(value) {
        var input = String(value || "").trim();
        return "" === input ? [] : input.split(whiteSpace);
      };
      var whiteSpace = /[ \t\n\r\f]+/g;
    },
    "./node_modules/xtend/immutable.js": (module) => {
      module.exports = function extend() {
        for (var target = {}, i = 0; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source)
            hasOwnProperty.call(source, key) && (target[key] = source[key]);
        }
        return target;
      };
      var hasOwnProperty = Object.prototype.hasOwnProperty;
    },
    "./node_modules/character-entities-legacy/index.json": (module) => {
      "use strict";
      module.exports = JSON.parse(
        '{"AElig":"Æ","AMP":"&","Aacute":"Á","Acirc":"Â","Agrave":"À","Aring":"Å","Atilde":"Ã","Auml":"Ä","COPY":"©","Ccedil":"Ç","ETH":"Ð","Eacute":"É","Ecirc":"Ê","Egrave":"È","Euml":"Ë","GT":">","Iacute":"Í","Icirc":"Î","Igrave":"Ì","Iuml":"Ï","LT":"<","Ntilde":"Ñ","Oacute":"Ó","Ocirc":"Ô","Ograve":"Ò","Oslash":"Ø","Otilde":"Õ","Ouml":"Ö","QUOT":"\\"","REG":"®","THORN":"Þ","Uacute":"Ú","Ucirc":"Û","Ugrave":"Ù","Uuml":"Ü","Yacute":"Ý","aacute":"á","acirc":"â","acute":"´","aelig":"æ","agrave":"à","amp":"&","aring":"å","atilde":"ã","auml":"ä","brvbar":"¦","ccedil":"ç","cedil":"¸","cent":"¢","copy":"©","curren":"¤","deg":"°","divide":"÷","eacute":"é","ecirc":"ê","egrave":"è","eth":"ð","euml":"ë","frac12":"½","frac14":"¼","frac34":"¾","gt":">","iacute":"í","icirc":"î","iexcl":"¡","igrave":"ì","iquest":"¿","iuml":"ï","laquo":"«","lt":"<","macr":"¯","micro":"µ","middot":"·","nbsp":" ","not":"¬","ntilde":"ñ","oacute":"ó","ocirc":"ô","ograve":"ò","ordf":"ª","ordm":"º","oslash":"ø","otilde":"õ","ouml":"ö","para":"¶","plusmn":"±","pound":"£","quot":"\\"","raquo":"»","reg":"®","sect":"§","shy":"­","sup1":"¹","sup2":"²","sup3":"³","szlig":"ß","thorn":"þ","times":"×","uacute":"ú","ucirc":"û","ugrave":"ù","uml":"¨","uuml":"ü","yacute":"ý","yen":"¥","yuml":"ÿ"}'
      );
    },
    "./node_modules/character-reference-invalid/index.json": (module) => {
      "use strict";
      module.exports = JSON.parse(
        '{"0":"�","128":"€","130":"‚","131":"ƒ","132":"„","133":"…","134":"†","135":"‡","136":"ˆ","137":"‰","138":"Š","139":"‹","140":"Œ","142":"Ž","145":"‘","146":"’","147":"“","148":"”","149":"•","150":"–","151":"—","152":"˜","153":"™","154":"š","155":"›","156":"œ","158":"ž","159":"Ÿ"}'
      );
    },
  },
]);
