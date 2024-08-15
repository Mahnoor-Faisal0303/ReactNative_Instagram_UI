import {
    SafeAreaView,
    ScrollView,
    Text,
    View,
    Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './page1Style';

const Page1 = () => {
    return (
        <SafeAreaView>
            <ScrollView showsHorizontalScrollIndicator={false}>
                <View style={styles.nav}>
                    <Image source={require('../../image/insta_image.png')} style={styles.image} />
                    <View style={styles.icon}>
                        <Image source={require('../../image/heart.png')} style={styles.imageheart} />
                        <Image source={require('../../image/messenger.png')} style={styles.imagemessage} />
                    </View>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.story_container}>
                        <View style={styles.my_story}>
                            <Image source={require('../../image/story1.png')} style={styles.story_image} />
                            <View style={styles.story_image_plus}>
                                <Image source={require('../../image/add.png')} style={{ width: 15, height: 15 }} />
                            </View>
                            <Text style={styles.story_text1}>Your Story</Text>
                        </View>
                        <View>
                            <LinearGradient
                                colors={['orange', 'purple', 'red', 'yellow']}
                                style={styles.border}
                            >
                                <Image source={require('../../image/story1.png')} style={styles.story_image} />
                            </LinearGradient>
                            <Text style={styles.story_text}>Story one</Text>
                        </View>
                        <View>
                            <LinearGradient
                                colors={['orange', 'purple', 'red', 'yellow']}
                                style={styles.border}
                            >
                                <Image source={require('../../image/story1.png')} style={styles.story_image} />
                            </LinearGradient>
                            <Text style={styles.story_text}>Story Two</Text>
                        </View>
                        <View>
                            <LinearGradient
                                colors={['orange', 'purple', 'red', 'yellow']}
                                style={styles.border}
                            >
                                <Image source={require('../../image/story1.png')} style={styles.story_image} />
                            </LinearGradient>
                            <Text style={styles.story_text}>Story Three</Text>
                        </View>
                        <View>
                            <LinearGradient
                                colors={['orange', 'purple', 'red', 'yellow']}
                                style={styles.border}
                            >
                                <Image source={require('../../image/story1.png')} style={styles.story_image} />
                            </LinearGradient>
                            <Text style={styles.story_text}>Story Four</Text>
                        </View>
                        <View>
                            <LinearGradient
                                colors={['orange', 'purple', 'red', 'yellow']}
                                style={styles.border}
                            >
                                <Image source={require('../../image/story1.png')} style={styles.story_image} />
                            </LinearGradient>
                            <Text style={styles.story_text}>Story Five</Text>
                        </View>
                    </View>
                </ScrollView>
                <View>
                    <View style={styles.feeds_nav}>
                        <Image source={require('../../image/story1.png')} style={styles.dp_image} />
                        <Text style={styles.name}>shuglistanpk</Text>
                        <Image source={require('../../image/dots.png')} style={styles.dots} />
                    </View>
                    <Image source={require('../../image/story1.png')} style={styles.feed_image} />
                    <View style={styles.feeds_footer}>
                        <Image source={require('../../image/heart.png')} style={styles.imagelike} />
                        <Image source={require('../../image/comments.png')} style={styles.imagecomment} />
                        <Image source={require('../../image/send.png')} style={styles.imagesend} />
                        <Image source={require('../../image/bookmark.png')} style={styles.imagebookmark} />
                    </View>
                </View>
                <View>
                    <View style={styles.feeds_nav}>
                        <Image source={require('../../image/story1.png')} style={styles.dp_image} />
                        <Text style={styles.name}>shuglistanpk</Text>
                        <Image source={require('../../image/dots.png')} style={styles.dots} />
                    </View>
                    <Image source={require('../../image/story1.png')} style={styles.feed_image} />
                    <View style={styles.feeds_footer}>
                        <Image source={require('../../image/heart.png')} style={styles.imagelike} />
                        <Image source={require('../../image/comments.png')} style={styles.imagecomment} />
                        <Image source={require('../../image/send.png')} style={styles.imagesend} />
                        <Image source={require('../../image/bookmark.png')} style={styles.imagebookmark} />
                    </View>
                </View>
                <View>
                    <View style={styles.feeds_nav}>
                        <Image source={require('../../image/story1.png')} style={styles.dp_image} />
                        <Text style={styles.name}>shuglistanpk</Text>
                        <Image source={require('../../image/dots.png')} style={styles.dots} />
                    </View>
                    <Image source={require('../../image/story1.png')} style={styles.feed_image} />
                    <View style={styles.feeds_footer}>
                        <Image source={require('../../image/heart.png')} style={styles.imagelike} />
                        <Image source={require('../../image/comments.png')} style={styles.imagecomment} />
                        <Image source={require('../../image/send.png')} style={styles.imagesend} />
                        <Image source={require('../../image/bookmark.png')} style={styles.imagebookmark} />
                    </View>
                </View>
                <View>
                    <View style={styles.feeds_nav}>
                        <Image source={require('../../image/story1.png')} style={styles.dp_image} />
                        <Text style={styles.name}>shuglistanpk</Text>
                        <Image source={require('../../image/dots.png')} style={styles.dots} />
                    </View>
                    <Image source={require('../../image/story1.png')} style={styles.feed_image} />
                    <View style={styles.feeds_footer}>
                        <Image source={require('../../image/heart.png')} style={styles.imagelike} />
                        <Image source={require('../../image/comments.png')} style={styles.imagecomment} />
                        <Image source={require('../../image/send.png')} style={styles.imagesend} />
                        <Image source={require('../../image/bookmark.png')} style={styles.imagebookmark} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Page1;