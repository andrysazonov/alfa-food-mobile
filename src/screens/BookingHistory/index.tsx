import React from "react"
import { View,  Text, ScrollView } from "react-native"
import { connect } from "react-redux"
import { RootState } from "../../redux/store"


interface Props {}

const BookingHistory: React.FC<Props> = () => {


    return (
        <View>
            <Text>
                Booking History

            </Text>
        </View>
    )
}

const mapStateToProps = (state: RootState) => ({

}
)

export default BookingHistory