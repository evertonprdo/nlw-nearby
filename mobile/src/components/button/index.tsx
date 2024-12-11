import {
   Text,
   TextProps,
   TouchableOpacity,
   TouchableOpacityProps,
   ActivityIndicator,
} from 'react-native'

import s from './styles'
import { colors } from '@/styles/colors'
import { IconProps as AssetsIconProps } from '@/assets/icons'

type Props = {
   isLoading?: boolean
} & TouchableOpacityProps

function Button({ children, style, isLoading, ...rest }: Props) {
   return (
      <TouchableOpacity
         style={[s.container, style]}
         activeOpacity={0.8}
         disabled={isLoading}
         {...rest}
      >
         {isLoading ? (
            <ActivityIndicator
               size={'small'}
               color={colors.gray[100]}
            />
         ) : (
            children
         )}
      </TouchableOpacity>
   )
}

function Title({ children }: TextProps) {
   return <Text style={s.title}>{children}</Text>
}

type IconProps = {
   icon: React.ComponentType<AssetsIconProps>
}

function Icon({ icon: Icon }: IconProps) {
   return (
      <Icon
         size={24}
         color={colors.gray[100]}
      />
   )
}

Button.Title = Title
Button.Icon = Icon

export { Button }
