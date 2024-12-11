import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

import { IconProps } from '.'

const IconMapPin = ({ color, size, ...rest }: IconProps) => (
   <Svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill={color}
      {...rest}
   >
      <Path
         fillRule="evenodd"
         clipRule="evenodd"
         d="M16 5.334a9.334 9.334 0 0 0-6.6 15.932l5.658 5.657a1.333 1.333 0 0 0 1.885 0l5.657-5.656A9.333 9.333 0 0 0 16 5.334m-6.667-.645a12 12 0 0 1 15.152 18.463l-5.657 5.657a4 4 0 0 1-5.654 0l-5.66-5.657A12 12 0 0 1 9.335 4.69m2.896 6.206a5.333 5.333 0 1 1 7.542 7.543 5.333 5.333 0 0 1-7.542-7.543M16 12a2.667 2.667 0 1 0 0 5.334A2.667 2.667 0 0 0 16 12"
      />
   </Svg>
)
export default IconMapPin
