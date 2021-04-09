const getWidth = (jsx) => {
  try {
    // try to get width from jsx openingElement attributes
    const defaultWidth = jsx.openingElement.attributes.find((x) => x.name.name === 'width').value.expression.value;

    // if width attribute is there but an empty string or 0, throw an error
    if (!defaultWidth) {
      throw new Error();
    }

    return defaultWidth;
  } catch {
    throw new Error('No width value found on svg');
  }
};

const getHeight = (jsx) => {
  try {
    // try to get height from jsx openingElement attributes
    const defaultHeight = jsx.openingElement.attributes.find((x) => x.name.name === 'height').value.expression.value;

    // if height attribute is there but an empty string or 0, throw an error
    if (!defaultHeight) {
      throw new Error();
    }

    return defaultHeight;
  } catch {
    throw new Error('No height value found on svg');
  }
};

function defaultTemplate({ template }, opts, { imports, interfaces, componentName, props, jsx, exports }) {
  const plugins = ['jsx'];
  if (opts.typescript) {
    plugins.push('typescript');
  }
  const typeScriptTpl = template.smart({ plugins });
  // NOTE: we have to modify the jsx element directly because the typeScriptTpl.ast
  // that gets returned at the end of this statement only accepts specific string literal variables

  const defaultWidth = getWidth(jsx);
  const defaultHeight = getHeight(jsx);

  // create template expression
  const width = template.ast(`props.width || ${defaultWidth}`).expression;
  // apply template expression tto jsx opening element attribute
  jsx.openingElement.attributes.push({
    type: 'JSXAttribute',
    name: { type: 'JSXIdentifier', name: 'width' },
    value: {
      type: 'JSXExpressionContainer',
      expression: width,
    },
  });
  // create template expression
  const height = template.ast(`props.height || ${defaultHeight}`).expression;
  // apply template expression tto jsx opening element attribute
  jsx.openingElement.attributes.push({
    type: 'JSXAttribute',
    name: { type: 'JSXIdentifier', name: 'height' },
    value: {
      type: 'JSXExpressionContainer',
      expression: height,
    },
  });

  // remove previous height and width attributes
  jsx.openingElement.attributes.splice(
    jsx.openingElement.attributes.findIndex(
      (x) => x.name.name === 'height' && x.value.expression.type === 'NumericLiteral'
    ),
    1
  );

  jsx.openingElement.attributes.splice(
    jsx.openingElement.attributes.findIndex(
      (x) => x.name.name === 'width' && x.value.expression.type === 'NumericLiteral'
    ),
    1
  );

  return typeScriptTpl.ast`${imports}
    ${interfaces}

    const ${componentName} = (${props}) => {
      return ${jsx};
    }
    ${exports}
  `;
}
module.exports = defaultTemplate;
