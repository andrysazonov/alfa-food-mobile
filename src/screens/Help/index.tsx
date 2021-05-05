import React from "react"
import { View, Text, StyleSheet } from "react-native"


interface Props {

}

const Help: React.FC<Props> = ()  => {

    return (
        <View
            style={styles.container}
        >
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam aut, consequatur debitis eligendi enim et expedita maiores nemo nesciunt nulla, officiis optio provident quidem quo rerum vel! Distinctio dolores ea ex maiores vitae? A ab accusantium ad aspernatur corporis dolor est et eveniet excepturi illo ipsam iusto laborum maiores modi neque nesciunt odio officiis quaerat quam quia quis reiciendis reprehenderit, saepe, sapiente temporibus ut vitae voluptatum! A at, aut doloribus fuga, illum ipsa natus nemo non nostrum placeat quas quisquam ratione saepe ut veniam. Aliquid cum doloribus ducimus error ex excepturi fugiat harum illo illum ipsa ipsam laborum molestiae necessitatibus nihil obcaecati, odit pariatur perferendis placeat quia quo ratione sapiente ut voluptates! Accusantium aliquid asperiores, aspernatur deleniti dolor exercitationem explicabo iste labore, natus obcaecati officia optio pariatur possimus quam quas quasi quis reprehenderit sed similique voluptatum? A alias assumenda beatae cum deleniti distinctio eius in incidunt, itaque maiores maxime natus neque, recusandae sint velit voluptas, voluptate? Ad assumenda consequatur dicta exercitationem in modi voluptatem? Asperiores consequatur dolores facilis modi quia sed sunt tempore tenetur velit. Accusantium adipisci alias consequatur deleniti dolore, ducimus ea error excepturi, illum iusto laudantium maxime nulla officia placeat provident quam quibusdam, temporibus veritatis! Aspernatur, sapiente?
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 40,
        marginVertical: 40
    }
})


export default Help