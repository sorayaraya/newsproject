import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

function Home(props) {
  const [data, setData] = useState();
  const getData = async () => {
    try {
      const res = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2660a3b5bfda44108cf90d1eedeea987",
        {
          params: {
            country: "us",
            category: "business",
            apiKey: "2660a3b5bfda44108cf90d1eedeea987",
          },
        }
      );
      setData(res.data.articles);
      // console.log(res);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {/* {console.log(data)} */}
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          {data &&
            data.map((item, i) => {
              return (
                <View>
                  <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={
                      () =>
                        props.navigation.navigate("DetailScreen", {
                          data: item,
                        }) //ini bisa diganti item
                    }
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        marginVertical: 10,
                        marginHorizontal: 5,
                        backgroundColor: "white",
                        flex: 1,
                      }}
                    >
                      <Image
                        style={{ width: 100, height: 100 }}
                        source={{ uri: item.urlToImage }}
                      ></Image>
                      <View style={{ justifyContent: "space-between" }}>
                        <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
                        <Text>{item.author}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            })}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
export default Home;
