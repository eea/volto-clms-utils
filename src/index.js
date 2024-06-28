import loadable from '@loadable/component';

import reducers from './reducers';

const applyConfig = (config) => {
  config.addonReducers = {
    ...config.addonReducers,
    ...reducers,
  };

  // some complain from prettier
  // eslint-disable-next-line
  config.settings.loadables = {
    'react-json-schema-form-builder': loadable.lib(() =>
      import('@ginkgo-bioworks/react-json-schema-form-builder/dist/index'),
    ),
    fontAwesome: loadable.lib(() => import('@fortawesome/react-fontawesome')),
    fontAwesomeLibrary: loadable.lib(() =>
      import('@fortawesome/fontawesome-svg-core'),
    ),
    fontAwesomeSolid: loadable.lib(() =>
      import('@fortawesome/free-solid-svg-icons'),
    ),
    fontAwesomeRegular: loadable.lib(() =>
      import('@fortawesome/free-regular-svg-icons'),
    ),

    ...config.settings.loadables,
  };
  return config;
};

export default applyConfig;
