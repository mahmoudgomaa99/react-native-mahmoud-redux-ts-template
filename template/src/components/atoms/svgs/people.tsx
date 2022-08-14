import useSvgSize from 'hooks/useSvgSize';
import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {TSvgProps} from '..';

const WIDTH = 70;
const HEIGHT = 51;
const RATIO_TO_WIDTH = HEIGHT / WIDTH;

function SvgComponent({size, ...props}: TSvgProps) {
  const computedSize = useSvgSize(size, RATIO_TO_WIDTH);

  return (
    <Svg {...computedSize} viewBox="0 0 70 51" {...props}>
      <G fill="#fff">
        <Path
          data-name="Path 4801"
          d="M29.778 31.166a11.143 11.143 0 01-8.128-3.75 14.489 14.489 0 01-3.773-8.852 12.124 12.124 0 013.067-9.252 11.846 11.846 0 018.833-3.686 11.854 11.854 0 018.809 3.7 12.1 12.1 0 013.086 9.234 14.528 14.528 0 01-3.772 8.854 11.115 11.115 0 01-8.122 3.752zm9.578-12.772z"
          transform="translate(-1.125 -5.625) translate(18.043)"
        />
        <Path
          data-name="Path 4802"
          d="M54.726 41.147H16.465a4.02 4.02 0 01-3.193-1.547 4.386 4.386 0 01-.764-3.742 19.129 19.129 0 018.753-11.766A27.53 27.53 0 0135.6 20.25a27.279 27.279 0 0114.326 3.781 19.019 19.019 0 018.761 11.834 4.392 4.392 0 01-.772 3.742 4.016 4.016 0 01-3.185 1.54z"
          transform="translate(-1.125 -5.625) translate(12.31 15.478)"
        />
        <Path
          data-name="Path 4803"
          d="M15.513 29.352c-5.106 0-9.6-4.749-10.014-10.584a10.231 10.231 0 012.613-7.781 9.966 9.966 0 017.4-3.112 9.93 9.93 0 017.388 3.131 10.157 10.157 0 012.613 7.766c-.417 5.835-4.906 10.58-10 10.58z"
          transform="translate(-1.125 -5.625) translate(4.623 2.394)"
        />
        <Path
          data-name="Path 4804"
          d="M29.665 21.458a22.016 22.016 0 00-9.527-1.872 22.451 22.451 0 00-11.692 3.137 15.749 15.749 0 00-7.2 9.682 3.975 3.975 0 00.7 3.391 3.674 3.674 0 002.911 1.414h16.108a1.162 1.162 0 001.141-.954c.017-.091.037-.184.06-.272a21.019 21.019 0 018.375-12.165 1.162 1.162 0 00-.091-1.942 11.356 11.356 0 00-.786-.419z"
          transform="translate(-1.125 -5.625) translate(0 14.772)"
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;
