import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

import { IconProps } from '.'

const IconCoffee = ({ color, size, ...rest }: IconProps) => (
   <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-coffee"
      {...rest}
   >
      <Path
         d="M0 0h24v24H0z"
         stroke="none"
      />
      <Path d="M3 14c.83.642 2.077 1.017 3.5 1 1.423.017 2.67-.358 3.5-1s2.077-1.017 3.5-1c1.423-.017 2.67.358 3.5 1M8 3a2.4 2.4 0 0 0-1 2 2.4 2.4 0 0 0 1 2m4-4a2.4 2.4 0 0 0-1 2 2.4 2.4 0 0 0 1 2" />
      <Path d="M3 10h14v5a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6z" />
      <Path d="M16.746 16.726a3 3 0 1 0 .252-5.555" />
   </Svg>
)
export default IconCoffee
