import * as React from 'react';

import { DISPLAY_NAME_PREFIX } from '../../common/info';
import { useJSS } from '../../theme';
import storyStyles from './story.styles';
import { IStoryProps } from './props';

const displayName = `${DISPLAY_NAME_PREFIX}.Story`;

const story: React.FunctionComponent<IStoryProps> = (props) => {
  const {
    controller,
    children,
  } = props;

  const [classes] = useJSS(
    storyStyles(),
    [],
  );

  return (
    <div>
      <div className={classes.display}>
        {children}
      </div>
      <div className={classes.controller}>
        <h2 className={classes.text}>
          Props Controller
        </h2>
        {controller}
      </div>
    </div>
  );
};

story.displayName = displayName;

export {
  story as Story,
};
