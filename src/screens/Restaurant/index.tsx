import React, { useState, useEffect } from "react"
import {
    View,
    Text,
    Button,
    Image,
    Dimensions,
    StatusBar,
    StyleSheet,
    Platform,
    ScrollView,
    FlatList, TouchableWithoutFeedback
} from "react-native"
import { connect } from "react-redux"
import { FontAwesome, Ionicons } from '@expo/vector-icons';



import DishCard from "./components/DishCard";
import {RootState} from "../../redux/store";
import { actions } from "../../redux/redurers/favouritesReducer";
import { getCurrentRestaurant } from "../../redux/redurers/restaurantReducer";

interface Props {
    navigation: any,
    route: any
}


const fakeDataDishes = {
    salats: [
        {
            id: '123',
            title: 'Салат греческий классический',
            description: 'Креветки, некреветки, ну точно не креветки',
            price: '222руб',
            weight: '120гр'
        },
        {
            id: '123',
            title: 'Салат греческий классический',
            description: 'Креветки, некреветки, ну точно не креветки',
            price: '222руб',
            weight: '120гр'
        },
        {
            id: '123',
            title: 'Салат греческий классический',
            description: 'Креветки, некреветки, ну точно не креветки',
            price: '222руб',
            weight: '120гр'
        },
    ],
    soups: [
        {
            id: '123',
            title: 'Салат греческий классический',
            description: 'Креветки, некреветки, ну точно не креветки',
            price: '222руб',
            weight: '120гр'
        },
        {
            id: '123',
            title: 'Салат греческий классический',
            description: 'Креветки, некреветки, ну точно не креветки',
            price: '222руб',
            weight: '120гр'
        },
        {
            id: '123',
            title: 'Салат греческий классический',
            description: 'Креветки, некреветки, ну точно не креветки',
            price: '222руб',
            weight: '120гр'
        },
    ]
}



const RestaurantScreen = ({navigation, route, favourites, getCurrentRestaurant, addRestaurant, deleteRestaurant, restaurant, favouritesRed}: any) => {
    const { title, restaurantId } = route.params;

    const [isFavourite, setIsFavourite] = useState(favourites[0] && favourites.find((fav: any) => fav.id == restaurantId).length !== 0)


    useEffect(() => {
        console.log('id is - ', restaurantId)
        console.log('rest current : ', restaurant)
        // getCurrentRestaurant(restaurantId)
    }, [restaurantId])

    const handleLike = () => {
        if (favourites[0] && favourites.find((fav: any) => fav.id == restaurantId).length !== 0) {
            deleteRestaurant(restaurantId)
            console.log('delete')
            setIsFavourite(false)
        } else {
            console.log('add and favourites[0] is ', favourites)
            addRestaurant(restaurant)
            setIsFavourite(true)
        }
    }


    return (
        <View>
            <Image
                style={styles.banner}
                source={{
                    uri: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                    width: Dimensions.get("screen").width,
                    height: 250,
                }}
            />
            <View style={styles.descBlock}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>some descr</Text>
            </View>

            <Button
                title={'Забронировать'}
                onPress={() => navigation.navigate('Restaurant', {
                    screen: 'RestaurantBookingTable',
                    params: {
                        title: title,
                        restaurantId: restaurantId,
                    }
                })}
            />
            <View
                style={styles.goBack}
            >
                <TouchableWithoutFeedback
                    onPress={() => navigation.goBack()}

                >
                    <FontAwesome name="close" size={30} color="black" />
                </TouchableWithoutFeedback>

            </View>

            <View
                style={styles.heart}
            >
                <TouchableWithoutFeedback
                    onPress={handleLike}
                >
                    <Ionicons name="heart" size={32} color={isFavourite ? "red" : "gray"} />

                </TouchableWithoutFeedback>

            </View>

            <ScrollView
                style={styles.dishContent}
                keyboardShouldPersistTaps={'handled'}
                showsVerticalScrollIndicator={false}
            >
                <View>
                    <Text style={styles.dishTitle}> Салаты и закуски </Text>
                    <View>
                        <FlatList

                            data={fakeDataDishes.salats}
                            renderItem={DishCard}
                        />
                    </View>
                </View>
                <View>
                    <Text style={styles.dishTitle}>Супы</Text>
                    <View>
                        <FlatList
                            data={fakeDataDishes.salats}
                            renderItem={DishCard}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {},
    dishContent: {
      marginHorizontal: 20,
      marginBottom: 50
      // paddingVertical: 30

    },
    banner: {
        marginTop:  Platform.OS === 'ios' ? 25 : StatusBar.currentHeight
    },
    goBack: {
      position: 'absolute',
      left: 10,
      top: 30,
    },
    heart: {
      position: 'absolute',
      right: 10,
      top: 30,
    },
    dishTitle: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    title: {
        fontSize: 18,
        fontWeight: '500'
    },
    description: {
        fontSize: 14,
        opacity: 0.8
    },
    descBlock: {
        marginHorizontal: 50,
        marginVertical: 10
    }
})


const mapStateToProps = (state: RootState) => ({
  favourites: state.favourites.favourites,
  favouritesRed: state.favourites,
  restaurant: state.restaurant.restaurant
})

export default connect(mapStateToProps, {...actions, getCurrentRestaurant })(RestaurantScreen)