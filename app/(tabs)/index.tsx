import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";

import SearchBar from "./../../components/SearchBar";
import { useRouter } from "expo-router";

import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import MovieCard from './../../components/MovieCard';

export default function Index() {
  const router = useRouter();
  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() => fetchMovies({ query: "avengers" }));

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="w-full absolute z-0" />
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />

        {moviesLoading ? (
          <ActivityIndicator
            size={"large"}
            color={"#000ff"}
            className="mt-10 self-center"
          />
        ) : moviesError ? (
          <Text>Error: {moviesError?.message}</Text>
        ) : (
          <View className="flex-1 mt-5">
            <SearchBar
              onPress={() => router.push("/search")}
              placeholder="Seach for a movie"
            />

          <>
          <Text className="text-lg text-white font-bold mt-5 mb-3">
                Latest Movies
              </Text>
              <FlatList
               data={movies}
               renderItem={({item}) =>(
                <MovieCard  {...item} />
               )} 
               
               keyExtractor={(item) => item.id.toString()}
               numColumns={3}
               columnWrapperStyle= {{
                justifyContent :'flex-start',
                gap:20,
                paddingRight:5,
                marginBottom:10,

               }}
               className="mt-2 pb-32"
               scrollEnabled={false}

               
               />
          </>
              
        
          </View>
        )}
      </ScrollView>
    </View>
  );
}
