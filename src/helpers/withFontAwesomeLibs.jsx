import React from 'react';
import { injectLazyLibs } from '@plone/volto/helpers/Loadable';

let _flag = false;

export function withFontAwesomeLibs(WrappedComponent) {
  const WithFontAwesomeLibsComponent = (props) => {
    const {
      fontAwesomeLibrary,
      fontAwesomeSolid,
      fontAwesomeRegular,
      fontAwesomeBrands,
    } = props;
    if (!_flag) {
      fontAwesomeLibrary.library.add(
        fontAwesomeSolid.fas,
        fontAwesomeRegular.far,
        fontAwesomeBrands.fab,
      );
      _flag = true;
    }

    return <WrappedComponent {...props} />;
  };
  return injectLazyLibs([
    'fontAwesome',
    'fontAwesomeLibrary',
    'fontAwesomeSolid',
    'fontAwesomeRegular',
    'fontAwesomeBrands',
  ])(WithFontAwesomeLibsComponent);
}
