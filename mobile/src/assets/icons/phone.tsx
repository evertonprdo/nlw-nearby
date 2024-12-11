import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IconProps } from '.'

const IconPhone = ({ color, size, ...rest }: IconProps) => (
   <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-phone"
      {...rest}
   >
      <Path
         d="M0 0h24v24H0z"
         stroke="none"
      />
      <Path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
   </Svg>
)
export default IconPhone
