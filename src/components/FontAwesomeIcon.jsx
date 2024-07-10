import React from 'react';
import { withFontAwesomeLibs } from '@eeacms/volto-clms-utils/helpers';

const blacklist = [
  'fontAwesome',
  'fontAwesomeLibrary',
  'fontAwesomeSolid',
  'fontAwesomeRegular',
];

function FontAwesomeIcon(props) {
  const IconComponent = props.fontAwesome.FontAwesomeIcon;

  const clean = Object.assign(
    {},
    ...Object.entries(props).map(([k, v]) =>
      !blacklist.includes(k) ? { [k]: v } : {},
    ),
  );

  if (!props.icon) {
    // eslint-disable-next-line no-console
    console.warn('FontAwesomeIcon component without proper icon props');
  }

  return props.icon ? <IconComponent {...clean} /> : null;
}

export default withFontAwesomeLibs(FontAwesomeIcon);
