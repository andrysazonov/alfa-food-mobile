import React from "react"
import { FlatList, View, TextInput } from "react-native"

import RestaurantCard from "../../components/RestaurantCard"




interface Props {}

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


const Search: React.FC<Props> = () => {
    return (
        <View>
            <TextInput value={'oil'} onChange={() => console.log('change')} label={'Введите название ресторана'} />
            <FlatList
                contentContainerStyle={{paddingBottom:15}}
                data={FakeData}
                keyExtractor={(item) => item.id}
                renderItem={RestaurantCard}
            />
        </View>
    )
}


export default Search