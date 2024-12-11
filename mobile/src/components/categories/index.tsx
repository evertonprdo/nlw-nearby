import { FlatList } from 'react-native'

import s from './styles'
import { Category } from '../category'

export type CategoriesProps = {
   id: string
   name: string
}[]

type Props = {
   data: CategoriesProps
   selected: string
   onSelect: (id: string) => void
}

export function Categories({ data, selected, onSelect }: Props) {
   return (
      <FlatList
         data={data}
         keyExtractor={(item) => item.id}
         renderItem={({ item }) => (
            <Category
               iconId={item.id}
               name={item.name}
               isSelected={item.id === selected}
               onPress={() => onSelect(item.id)}
            />
         )}
         style={s.container}
         contentContainerStyle={s.content}
         horizontal
         showsHorizontalScrollIndicator={false}
      />
   )
}
