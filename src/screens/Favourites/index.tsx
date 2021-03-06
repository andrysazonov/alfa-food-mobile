import React from "react"
import {View, FlatList, Text, StyleSheet, Button } from "react-native"

import FavouriteItem from "./components/FavouriteItem";
import {RootState} from "../../redux/store";
import { connect } from "react-redux";


interface Props {
    navigation: any
}

const FakeData = [
    {
        id: 'erer',
        title: 'Delmar',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci facilisi ultrices rhoncus, nunc nulla sit at semper a.',
        rating: 10
    },
    {
        id: 'erw',
        title: 'Delmarrrr',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci facilisi ultrices rhoncus, nunc nulla sit at semper a.',
        rating: 7
    },
    {
        id: 'erer',
        title: 'Crasen',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci facilisi ultrices rhoncus, nunc nulla sit at semper a.',
        rating: 4
    },
    {
        id: 'wer',
        title: 'Rasc',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci facilisi ultrices rhoncus, nunc nulla sit at semper a.',
        rating: 5
    },
    {
        id: 'racver',
        title: 'Pract',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci facilisi ultrices rhoncus, nunc nulla sit at semper a.',
        rating: 1
    },
    {
        id: 'potremb',
        title: 'Typo1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci facilisi ultrices rhoncus, nunc nulla sit at semper a.',
        rating: 7
    },
    {
        id: 'rewrwerw',
        title: 'Typo2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci facilisi ultrices rhoncus, nunc nulla sit at semper a.',
        rating: 7
    },
    {
        id: 'padenie',
        title: 'Typo3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci facilisi ultrices rhoncus, nunc nulla sit at semper a.',
        rating: 7
    },
    {
        id: 'ecge',
        title: 'Typo4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci facilisi ultrices rhoncus, nunc nulla sit at semper a.',
        rating: 7
    },
    {
        id: 'chroo',
        title: 'Typo5',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci facilisi ultrices rhoncus, nunc nulla sit at semper a.',
        rating: 7
    },
    {
        id: 'oooo',
        title: 'Typo6',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci facilisi ultrices rhoncus, nunc nulla sit at semper a.',
        rating: 7
    },
]

const FavouritesScreen: React.FC<any> = ({navigation, favourites}) => {
    return (
        <View style={styles.container}>
            {
                favourites.length == 0 ? (
                    <>
                        <Text style={styles.emptyTitle}>
                            ???????????????????? ?????????????? ?????????????????? ?? ??????????????????
                        </Text>
                        <Button
                            color="green"
                            title={'?????????? ??????????????????'}
                            onPress={() => navigation.navigate('search')}
                        />
                    </>
                ) : (
                    <>
                        <Text>
                            ?????????????????? ??????????????????
                        </Text>
                        <FlatList
                            contentContainerStyle={{paddingBottom:15}}
                            data={favourites}
                            //@ts-ignore
                            keyExtractor={(item) => item.id}
                            renderItem={FavouriteItem}
                        />
                    </>
                )
            }

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column'

    },
    emptyTitle: {
        alignSelf: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        alignContent: 'center'
    },
    emptyBtn: {
        borderWidth: 2,
        backgroundColor: 'green',
        paddingVertical: 8,
        paddingHorizontal: 14
    }
})


const mapStateToProps = (state: RootState) => ({
    favourites: state.favourites.favourites
})

export default connect(mapStateToProps)(FavouritesScreen)

