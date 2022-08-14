import useSvgSize from 'hooks/useSvgSize';
import * as React from 'react';
import Svg, {G, Circle, Path} from 'react-native-svg';
import {TSvgProps} from '..';

const WIDTH = 40;
const HEIGHT = 40;
const RATIO_TO_WIDTH = HEIGHT / WIDTH;

function SvgComponent({size, ...props}: TSvgProps) {
  const computedSize = useSvgSize(size, RATIO_TO_WIDTH);
  return (
    <Svg {...computedSize} viewBox="0 0 40 40" {...props}>
      <G data-name="Group 752" transform="translate(-315 -57)">
        <Circle
          data-name="Ellipse 102"
          cx={20}
          cy={20}
          r={20}
          transform="translate(315 57)"
          fill="#f2f2f2"
        />
        <Path
          d="M11.094 0v11.094H8.906V0zm5.365 2.4A9.575 9.575 0 0120 10a9.644 9.644 0 01-2.917 7.083A9.644 9.644 0 0110 20a9.644 9.644 0 01-7.083-2.917A9.645 9.645 0 010 10a9.575 9.575 0 013.542-7.6L5.1 3.958A7.452 7.452 0 002.24 10a7.483 7.483 0 002.266 5.5A7.482 7.482 0 0010 17.761a7.484 7.484 0 005.5-2.261 7.48 7.48 0 002.261-5.5A7.306 7.306 0 0014.9 4.011z"
          transform="translate(325 67)"
          fill="#1c1c1c"
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;
