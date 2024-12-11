import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

import { IconProps } from '.'

const IconBed = ({ color, size, ...rest }: IconProps) => (
   <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-bed"
      {...rest}
   >
      <Path
         d="M0 0h24v24H0z"
         stroke="none"
      />
      <Path d="M5 9a2 2 0 1 0 4 0 2 2 0 1 0-4 0m17 8v-3H2m0-6v9m10-3h10v-2a3 3 0 0 0-3-3h-7z" />
   </Svg>
)
export default IconBed
