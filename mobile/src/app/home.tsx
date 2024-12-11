import { useCallback, useState } from 'react'
import { Alert, Text, View } from 'react-native'
import { router, useFocusEffect } from 'expo-router'
import MapView, { Callout, Marker } from 'react-native-maps'

import { colors, fontFamily } from '@/styles/theme'
import { api } from '@/services/api'

import { PlaceProps } from '@/components/place'
import { Categories, CategoriesProps } from '@/components/categories'
import { Places } from '@/components/places'

type MarketsProps = {
   latitude: number
   longitude: number
} & PlaceProps

const currentLocation = {
   latitude: -23.561187293883442,
   longitude: -46.656451388116494,
}

export default function Home() {
   const [categories, setCategories] = useState<CategoriesProps>([])
   const [category, setCategory] = useState('')
   const [markets, setMarkets] = useState<MarketsProps[]>([])

   async function fetchCategories() {
      try {
         const { data } = await api.get('/categories')

         setCategories(data)
         setCategory(data[0].id)
      } catch (error) {
         Alert.alert('Categorias', 'Não foi possível carregar as categorias.')
      }
   }

   async function fetchMarkets() {
      try {
         if (!category) {
            return
         }

         const { data } = await api.get('/markets/category/' + category)
         setMarkets(data)
      } catch (error) {
         Alert.alert('Locais', 'Não foi possível carregar os locais.')
      }
   }

   useFocusEffect(
      useCallback(() => {
         fetchCategories()
      }, []),
   )

   useFocusEffect(
      useCallback(() => {
         fetchMarkets()
      }, [category]),
   )

   return (
      <View style={{ flex: 1 }}>
         <Categories
            data={categories}
            selected={category}
            onSelect={setCategory}
         />

         <MapView
            style={{ flex: 1 }}
            initialRegion={{
               latitude: currentLocation.latitude,
               longitude: currentLocation.longitude,
               latitudeDelta: 0.01,
               longitudeDelta: 0.01,
            }}
         >
            <Marker
               identifier="current"
               coordinate={{
                  latitude: currentLocation.latitude,
                  longitude: currentLocation.longitude,
               }}
               image={require('@/assets/location.png')}
            />

            {markets.map((item) => (
               <Marker
                  key={item.id}
                  identifier={item.id}
                  coordinate={{
                     latitude: item.latitude,
                     longitude: item.longitude,
                  }}
                  image={require('@/assets/pin.png')}
               >
                  <Callout
                     onPress={() => router.navigate(`/market/${item.id}`)}
                  >
                     <View style={{ backgroundColor: 'blue' }}>
                        <Text
                           style={{
                              fontSize: 14,
                              color: colors.gray[600],
                              fontFamily: fontFamily.medium,
                           }}
                        >
                           Hello World!{'\n'}
                           {item.name}
                        </Text>

                        <Text
                           style={{
                              fontSize: 12,
                              color: colors.gray[600],
                              fontFamily: fontFamily.regular,
                           }}
                        >
                           {item.address}
                        </Text>
                     </View>
                  </Callout>
               </Marker>
            ))}
         </MapView>

         <Places data={markets} />
      </View>
   )
}
