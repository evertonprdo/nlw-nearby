import { Image, Text, TouchableOpacity, View } from 'react-native'

import s from './styles'
import { colors } from '@/styles/colors'
import { IconTicket } from '@/assets/icons'
import { TouchableOpacityProps } from 'react-native'

export type PlaceProps = {
   id: string
   name: string
   description: string
   coupons: number
   cover: string
   address: string
}

type Props = {
   data: PlaceProps
} & TouchableOpacityProps

export function Place({ data, ...rest }: Props) {
   return (
      <TouchableOpacity
         style={s.container}
         {...rest}
      >
         <Image
            style={s.image}
            source={{ uri: data.cover }}
         />

         <View style={s.content}>
            <Text style={s.name}>{data.name}</Text>
            <Text
               style={s.description}
               numberOfLines={2}
            >
               {data.description}
            </Text>

            <View style={s.footer}>
               <IconTicket
                  size={16}
                  color={colors.red.base}
               />
               <Text style={s.tickets}>{data.coupons} cupons disponíveis</Text>
            </View>
         </View>
      </TouchableOpacity>
   )
}
