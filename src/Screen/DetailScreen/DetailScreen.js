import React from "react";
import { View, Text, Image, Dimensions } from "react-native";

export default function DetailScreen(route, navigation) {
  const { width, height } = Dimensions.get("window");
  const item = route.route.params.data;

  return (
    <>
      {console.log(route.route.params.data)}

      <View style={{ flex: 1 }}>
        <View>
          <Image
            style={{ width: width, height: width }}
            source={{ uri: route.route.params.data.urlToImage }}
          ></Image>
        </View>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            margin: 5,
          }}
        >
          {route.route.params.data.content}
        </Text>
        <Text
          style={{
            fontSize: 10,
            fontWeight: "bold",
            margin: 2,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {route.route.params.data.author}
        </Text>
        <Text
          style={{
            fontSize: 10,
            fontWeight: "bold",
            margin: 2,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {route.route.params.data.publishedAt}
        </Text>
      </View>
    </>
  );
}

//cara pake usenavigation
