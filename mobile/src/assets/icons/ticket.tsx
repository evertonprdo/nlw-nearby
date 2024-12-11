import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

import { IconProps } from '.'

const IconTicket = ({ color, size, ...rest }: IconProps) => (
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
         d="M6.667 8a1.333 1.333 0 0 0-1.334 1.333v2.896a4 4 0 0 1 0 7.542v2.896A1.333 1.333 0 0 0 6.667 24h12v-1.333a1.333 1.333 0 0 1 2.666 0V24h4a1.333 1.333 0 0 0 1.334-1.333V19.77a4 4 0 0 1 0-7.542V9.333A1.334 1.334 0 0 0 25.333 8h-4v1.333a1.333 1.333 0 0 1-2.666 0V8zm0-2.667a4 4 0 0 0-4 4v4c0 .737.597 1.334 1.333 1.334a1.333 1.333 0 0 1 0 2.666c-.736 0-1.333.597-1.333 1.334v4a4 4 0 0 0 4 4h18.666a4 4 0 0 0 4-4v-4c0-.737-.597-1.334-1.333-1.334a1.334 1.334 0 0 1 0-2.666c.736 0 1.333-.597 1.333-1.334v-4a4 4 0 0 0-4-4zm13.333 8c.736 0 1.333.597 1.333 1.334v2.666a1.333 1.333 0 0 1-2.666 0v-2.666c0-.737.597-1.334 1.333-1.334"
      />
   </Svg>
)
export default IconTicket
