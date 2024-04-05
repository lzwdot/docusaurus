import {normalizeUrl} from '@docusaurus/utils';

/**
 * @param {import('@docusaurus/types').LoadContext} context
 * @returns {import('@docusaurus/types').Plugin}
 */
export default function Index(context) {
  return {
    name: 'feedback-plugin',
    async contentLoaded({actions}) {
      const basePath = normalizeUrl([context.baseUrl, '/feedback']);
      const paths = await actions.createData(
        'paths.json',
        JSON.stringify(basePath),
      );
      actions.addRoute({
        path: basePath,
        exact: false,
        component: '@site/src/plugins/Feedback/page',
        modules: {
          basePath: paths,
        },
      });
    },
  };
}
