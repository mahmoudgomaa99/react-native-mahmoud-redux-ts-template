import useSvgSize from 'hooks/useSvgSize';
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {TSvgProps} from '..';

const WIDTH = 70;
const HEIGHT = 51;
const RATIO_TO_WIDTH = HEIGHT / WIDTH;

function SvgComponent({size, ...props}: TSvgProps) {
  const computedSize = useSvgSize(size, RATIO_TO_WIDTH);

  return (
    <Svg {...computedSize} viewBox="0 0 44.625 51" {...props}>
      <Path
        d="M41.455 51H3.2a3.063 3.063 0 01-2.241-.946 3.063 3.063 0 01-.946-2.241V6.375a3.164 3.164 0 01.925-2.291A3.039 3.039 0 013.2 3.138h6.38v6.375a3.041 3.041 0 00.946 2.267 3.1 3.1 0 002.241.921h19.125a3.145 3.145 0 003.188-3.188V3.138h6.375a3.041 3.041 0 012.267.946 3.157 3.157 0 01.921 2.291v41.438a3.105 3.105 0 01-.921 2.241 3.039 3.039 0 01-2.267.946zM28.7 9.563H15.955a3.063 3.063 0 01-2.241-.946 3.063 3.063 0 01-.946-2.241 3.041 3.041 0 01.946-2.267 3.1 3.1 0 012.241-.921A3.041 3.041 0 0116.9.921 3.1 3.1 0 0119.142 0h6.375a3.084 3.084 0 012.267.921 3.073 3.073 0 01.916 2.267 3.145 3.145 0 013.188 3.188 3.105 3.105 0 01-.921 2.241 3.039 3.039 0 01-2.267.946z"
        transform="translate(-.017)"
        fill="#fff"
      />
    </Svg>
  );
}

export default SvgComponent;
