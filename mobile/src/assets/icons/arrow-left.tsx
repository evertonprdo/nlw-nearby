import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

import { IconProps } from '.'

const IconArrowLeft = ({ color, size, ...rest }: IconProps) => (
   <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left"
      {...rest}
   >
      <Path
         d="M0 0h24v24H0z"
         stroke="none"
      />
      <Path d="M5 12h14M5 12l6 6m-6-6 6-6" />
   </Svg>
)
export default IconArrowLeft
