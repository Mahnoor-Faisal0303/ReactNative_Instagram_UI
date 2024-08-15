import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    nav: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10
    },
    icon: {
        display: 'flex',
        flexDirection: 'row',
        marginRight: 8,
        gap: 18,
    },
    image: {
        height: 40,
        width: 120,
    },
    imageheart: {
        marginTop: 10,
        height: 25,
        width: 25
    },
    imagemessage: {
        marginTop: 11,
        height: 22,
        width: 22
    },
    story_container: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        margin: 15,
    },
    story_image: {
        width: 80,
        height: 80,
        borderRadius: 50,
        borderWidth: 4,
        borderColor: 'white',
    },
    border: {
        width: 85,
        height: 85,
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },
    my_story: {
        width: 80,
        height: 90,
        borderRadius: 50,
        zIndex: 0
    },
    story_image_plus: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 24,
        width: 24,
        backgroundColor: '#5479d1',
        borderRadius: 50,
        zIndex: 1,
        marginTop: -22,
        marginLeft: 50,
        borderWidth: 2,
        borderColor: 'white',
    },
    story_text1: {
        marginTop: 4,
        color: '#000000'
    },
    story_text: {
        color: '#000000'
    },
    feeds_nav: {
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: 15,
        paddingRight: 15,
        padding: 5,
    },
    dp_image: {
        width: 40,
        height: 40,
        borderRadius: 50
    },
    name: {
        display: 'flex',
        alignSelf: 'center',
        marginLeft: 10,
        color: '#000000',
    },
    dots: {
        width: 25,
        height: 25,
        marginLeft: 160,
        marginTop: 8
    },
    feed_image: {
        width: 360,
        height: 360,
    },
    feeds_footer: {
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: 15,
        paddingRight: 15,
        padding: 5, 
    },
    imagelike: {
        height:30,
        width:30,
        marginTop:8
    },
    imagecomment: {
        height:28,
        width:28,
        margin:10,
    },
    imagesend: {
        width:34,
        height:34,
        marginTop:6,
    },
    imagebookmark: {
        width:30,
        height:30,
        marginTop:7,
        marginLeft:186
    }
});