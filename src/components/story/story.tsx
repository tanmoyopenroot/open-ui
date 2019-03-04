import * as React from 'react';

import { DISPLAY_NAME_PREFIX } from 'common/info';

import storyStyles from './story.styles';
import { IStoryProps } from './props';

const story: React.FunctionComponent<IStoryProps> = (props) => {
  const {
    controller,
    children,
  } = props;

  const [classes, setClasses] = React.useState(() => {
    const { createSheet } = storyStyles();
    return createSheet();
  });

  React.useEffect(
    () => {
      const {
        createSheet,
        removeSheet,
      } = storyStyles();

      setClasses(createSheet());
      return () => {
        removeSheet();
      };
    },
    [props],
  );

  return (
    <div
      className={classes.story}
    >
      <div
        className={classes.display}
      >
        {children}
      </div>
      <div
        className={classes.controller}
      >
        <h2
          className={classes.text}
        >
          Props Controller
        </h2>
        {controller}
      </div>
    </div>
  );
};

story.displayName = `${DISPLAY_NAME_PREFIX}.Story`;

export {
  story as Story,
};
