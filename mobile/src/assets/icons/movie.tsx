import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

import { IconProps } from '.'

const IconMovie = ({ color, size, ...rest }: IconProps) => (
   <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-movie"
      {...rest}
   >
      <Path
         d="M0 0h24v24H0z"
         stroke="none"
      />
      <Path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm4-2v16m8-16v16M4 8h4m-4 8h4m-4-4h16m-4-4h4m-4 8h4" />
   </Svg>
)
export default IconMovie
