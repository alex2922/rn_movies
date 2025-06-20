import { View,Image, TextInput } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'


interface props {
  onPress: () => void;
  placeholder: string;
}


const SearchBar = ({onPress, placeholder}:props) => {
  return (
    <View className='flex-row items-center bg-dark-200 rounded-full px-5 py-4'>
      <Image source={icons.search} className='size-5 ' resizeMode='contain' tintColor={"#ab8bff"}/>
      <TextInput
      onPress={onPress}
      placeholder={placeholder}
      value=''
      onChangeText={()=>{}}
      placeholderTextColor={"#a8b5db"}
      className='ml-2 flex-1 text-white'
      />
    </View>
  )
}

export default SearchBar