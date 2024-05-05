import React from "react";
import { StyleSheet, Image, Dimensions, Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Swiper from "react-native-swiper";
// import AppLoading from "expo-app-loading";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

const w = Dimensions.get("window").width;
const h = Dimensions.get("window").height;
const styles = StyleSheet.create({
  slide: {
    flex: 1, // 使用彈性布局，讓這個元素填滿父元素剩餘的空間
    paddingTop: 80, // 元素內部的上邊距設為80
    // marginHorizontal: 30, // 左右的外邊距設為30
    paddingHorizontal:30,
  },
  img: {
    alignSelf: "center", // 將圖片自身對齊到中心
    borderTopRightRadius: 80, // 圖片右上角的邊框半徑為80，產生圓角效果
    borderBottomLeftRadius: 80, // 圖片左下角的邊框半徑為80，產生圓角效果
    height: h * 0.5, // 圖片高度為屏幕高度的50%
    width: w * 0.9, // 圖片寬度為屏幕寬度的90%
  },
  title: {
    fontFamily: "Montserrat_700Bold", // 設置字體為Montserrat且為粗體
    marginTop: 60, // 標題上方的外邊距為60
    marginHorizontal: 10, // 標題左右的外邊距為10
    fontSize: 32, // 字體大小為32
  },
  text: {
    color: "#767676", // 文本顏色為淺灰色
    fontFamily: "Montserrat_400Regular", // 設置字體為Montserrat且為常規體
    marginTop: 20, // 文本上方的外邊距為20
    fontSize: 16, // 字體大小為16
    lineHeight: 25, // 行高為25
    marginLeft: 10, // 文本左側的外邊距為10
  },
});


const App = () => {

  if (typeof setImmediate === 'undefined') {
    var setImmediate = (fn) => setTimeout(fn, 0);
  }
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });
  if (!fontsLoaded) {
    return null; // Consider adding a loading component here
  }

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // } else {
  return (
      <Swiper
        buttonWrapperStyle={{
          backgroundColor: "transparent", // 設置按鈕包裹層的背景色為透明
          flexDirection: "row", // 內部元素水平排列
          position: "absolute", // 使用絕對定位
          bottom: 0, // 定位於容器的底部
          left: 0, // 定位於容器的左邊
          flex: 1, // 彈性布局，使元素填充可用空間
          paddingHorizontal: 30, // 水平方向的內邊距為30
          paddingVertical: 20, // 垂直方向的內邊距為20
          justifyContent: "flex-end", // 子元素對齊容器的右側   左右
          alignItems: "flex-end", // 子元素在交叉軸的末端對齊   上下
        }}
        style={styles.wrapper} // 指定Swiper的樣式
        showsButtons={true} // 顯示前進和後退按鈕
        showsPagination={true}
        paginationStyle={{
          marginRight: w * 0.7, // 分頁指示器的右邊距為螢幕寬度的70%
          marginBottom: h * 0.02, // 分頁指示器的下邊距為螢幕高度的2%
        }}
        activeDotColor="#8A56AC" // 當前活動點的顏色
        dotColor="#998FA2" // 其他點的顏色
        nextButton={ // 自定義下一頁按鈕
          <View
            style={{
              height: 60, // 按鈕高度為60
              borderRadius: 30, // 按鈕邊緣半徑為30，使其呈圓形
              alignItems: "center", // 內部元素水平居中
              justifyContent: "center", // 內部元素垂直居中
              width: 60, // 按鈕寬度為60
              backgroundColor: "#8A56AC", // 按鈕背景色
            }}
          >
            <AntDesign name="arrowright" size={22} color="#FFF" /> 
          </View>
        }
        prevButton={ // 自定義上一頁按鈕
          <View
            style={{
              height: 60, // 同上
              borderRadius: 30, // 同上
              alignItems: "center", // 同上
              justifyContent: "center", // 同上
              width: 60, // 同上
              backgroundColor: "#8A56AC", // 同上
              marginHorizontal: 20, // 左右邊距為20
            }}
          >
            <AntDesign name="arrowleft" size={22} color="#FFF" /> 
          </View>
        }
      >

        <View style={styles.slide}>
          <Image source={require("./images/img.png")} style={styles.img} />
          <Text style={styles.title}>Meet Up UI-Kit</Text>
          <Text style={styles.text}>
            When I was 5 years old, my mother always told me that happiness was
            the key to life. When I went to school, they asked me what I wanted
            to be when I grew up.
          </Text>
        </View>
        <View style={styles.slide}>
          <Image source={require("./images/img2.png")} style={styles.img} />
          <Text style={styles.title}>Discover</Text>
          <Text style={styles.text}>
            When I was 5 years old, my mother always told me that happiness was
            the key to life. When I went to school, they asked me what I wanted
            to be when I grew up.
          </Text>
        </View>

        <View style={styles.slide}>
          <Image source={require("./images/img3.png")} style={styles.img} />
          <Text style={styles.title}>Get Started</Text>
          <Text style={styles.text}>
            When I was 5 years old, my mother always told me that happiness was
            the key to life. When I went to school, they asked me what I wanted
            to be when I grew up.
          </Text>
        </View>
        <View style={styles.slide}>
          <Image source={require("./images/img4.png")} style={styles.img} />
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.text}>
            When I was 5 years old, my mother always told me that happiness was
            the key to life. When I went to school, they asked me what I wanted
            to be when I grew up.
          </Text>
        </View>
      </Swiper>
  );
  // }
};

export default App;
