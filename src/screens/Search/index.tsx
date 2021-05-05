import React, {useEffect} from "react"
import {StyleSheet, View, TextInput, ScrollView} from "react-native"

import { connect } from "react-redux";

import RestaurantCard from "../../components/RestaurantCard"
import {RootState} from "../../redux/store";
import { actions } from "../../redux/redurers/searchReducer"



interface Props {}

const FakeData = [
    {
        id: 'myid',
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


const Search: React.FC<any> = (props) => {
    const { search, setSearchString } = props


    useEffect(() => {
        if (search && search.length > 3) {
            console.log('I do query')
        }
    }, [search])

    return (
        <View>
            <TextInput
                style={styles.searchInput}
                value={search}
                onChangeText={(text: string) => setSearchString(text)}
                placeholder={'Введите название ресторана'}
            />
            <ScrollView style={styles.scrollBox}>
                {FakeData.map(data => (
                    <RestaurantCard item={data}/>
                ))}
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    searchInput: {
        marginHorizontal: 20,
        height: 40,
        borderColor: "#000000",
        borderBottomWidth: 1,
        marginBottom: 5
    },
    scrollBox: {
        marginBottom: 40,
        paddingBottom: 40
    }
})


const mapStateToProps = (state: RootState) => ({
    search: state.search.search
})

export default connect(mapStateToProps, {...actions})(Search)