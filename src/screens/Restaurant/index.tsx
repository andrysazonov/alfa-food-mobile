import React, { useEffect } from "react"
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
import { FontAwesome } from '@expo/vector-icons';
import DishCard from "./components/DishCard";



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



const RestaurantScreen: React.FC<Props> = ({navigation, route}) => {
    const { title, restaurantId } = route.params;


    useEffect(() => {
        console.log('id is - ', restaurantId)
    }, [restaurantId])

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
            <Text>Hello</Text>

            <Text> Param itemId : {title}</Text>
            <Button
                title={'Забронировать'}
                onPress={() => navigation.goBack()}
            />
            <View
                style={styles.goBack}
            >
                <TouchableWithoutFeedback
                    onPress={() => navigation.goBack()}

                >
                    <FontAwesome name="close" size={30} color="black" />
                    {/*<Button*/}
                    {/*    title={'Go back '}*/}
                    {/*    onPress={() => navigation.goBack()}*/}
                    {/*/>*/}
                </TouchableWithoutFeedback>

            </View>

            <ScrollView style={styles.dishContent} keyboardShouldPersistTaps={'handled'}>
                <View>
                    <Text style={styles.dishTitle}> Салаты и закуски </Text>
                    <View>
                        <FlatList
                            data={fakeDataDishes.salats}
                            renderItem={DishCard}
                        />
                        {/*{fakeDataDishes.salats.map((item) => (*/}
                        {/*    <DishCard*/}
                        {/*        item={item}*/}
                        {/*    />*/}
                        {/*))}*/}
                    </View>
                </View>
                <View>
                    <Text style={styles.dishTitle}>Супы</Text>
                    <View>
                        <FlatList
                            data={fakeDataDishes.salats}
                            renderItem={DishCard}
                        />
                        {/*{fakeDataDishes.soups.map((item) => (*/}
                        {/*    <DishCard*/}
                        {/*        item={item}*/}
                        {/*    />*/}
                        {/*))}*/}
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
      paddingVertical: 30
    },
    banner: {
        marginTop:  Platform.OS === 'ios' ? 25 : StatusBar.currentHeight
    },
    goBack: {
      position: 'absolute',
      left: 10,
      top: 30,
    },
    dishTitle: {
        fontSize: 22,
        fontWeight: 'bold'
    }
})


export default RestaurantScreen