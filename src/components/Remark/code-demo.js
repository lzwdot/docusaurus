const visit = require('unist-util-visit');

const isImport = node => node.type === 'import'
const isParent = node => Array.isArray(node.children);
const matchNode = (node, metas = []) => node.type === 'code' && metas.includes((node.meta || '').toLowerCase());
const nodeForImport = compName => ({
  type: 'import',
  value: `import ${compName} from '@site/src/components/${compName}';`,
});
const compNames = ['JsDemo', 'HtmlDemo']
const compNameLowers = compNames.toString().toLowerCase().split(',')

const plugin = (options) => {
  return (root) => {
    const transformed = new Set();
    const alreadyImported = new Set();
    visit(root, node => {
      const nodeVal = (node.value || '').toLowerCase()
      if (isImport(node) && nodeVal.includes('demo')) {
        if (nodeVal.includes(compNameLowers[0])) alreadyImported.add(compNames[0])
        if (nodeVal.includes(compNameLowers[1])) alreadyImported.add(compNames[0])
      }
      if (isParent(node)) {
        let index = 0;
        while (index < node.children.length) {
          const child = node.children[index];
          if (matchNode(child, compNameLowers)) {
            const nodeMeta = (child.meta || '').toLowerCase()
            const compName = compNames[compNameLowers.indexOf(nodeMeta)]           
            const result = [
              {
                type: 'jsx',
                value: `<${compName}>`,
              },
              child,
              {
                type: 'jsx',
                value: `</${compName}>`,
              }
            ]
            node.children.splice(index, 1, ...result);
            index += result.length;
            transformed.add(compName);
          } else {
            index += 1;
          }
        }
      }
    });

    if (transformed.size > alreadyImported.size) {
      const diffComp = new Set([...transformed].filter(v => !alreadyImported.has(v)))
      diffComp.forEach(comp => {
        root.children.unshift(nodeForImport(comp));
      })     
    }
  };
};

module.exports = plugin;