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

  return <IconComponent {...clean} />;
}

export default withFontAwesomeLibs(FontAwesomeIcon);
