import reducers from './reducers';
import CustomMatomoAppExtra from './matomo/customMatomoAppExtra';
const applyConfig = (config) => {
  config.addonReducers = {
    ...config.addonReducers,
    ...reducers,
  };
  config.settings.appExtras = [
    ...(config.settings.appExtras || []),
    {
      match: '',
      component: CustomMatomoAppExtra,
    },
  ];
  return config;
};

export default applyConfig;
