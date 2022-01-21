import React, { Component } from "react";
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Switch,
  TextInput,
  ScrollView,
  StyleSheet,
  Button,
  FlatList,
  ToastAndroid,
  Alert,
  BackHandler,
  PermissionsAndroid,
  ActivityIndicator,
  Dimensions,
  Linking,
  RefreshControl,
  ImageBackground,
} from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: "Home",
      value: true,
      username: "",
      refresh: false,
      data: [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7],
      dataPembayaran: [
        {
          namaBarang: "apel",
          harga: 100000,
        },
        {
          namaBarang: "cuka",
          harga: 200000,
        },
        {
          namaBarang: "pupuk",
          harga: 25000,
        },
        {
          namaBarang: "susu mama",
          harga: 26000,
        },
        {
          namaBarang: "lecek",
          harga: 30000,
        },
        {
          namaBarang: "tuna",
          harga: 56000,
        },
      ],
    };
  }

  backAction = () => {
    Alert.alert("isi ya", "biar lebih yakin tutup aplikasi", [
      //untuk menutup aplikasi
      {
        text: "cancel",
        onPress: () => null,
        style: "cancel",
      },
      {
        text: "yes",
        onPress: () => BackHandler.exitApp(),
      },
    ]);
    return true;
  };
  requestCameraPermission = async () => {};
  componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      this.backAction
    );
  }
  componentWillUnmount() {
    this.backHandler.remove();
  }
  render() {
    return (
      // <Vi style={{ flex: 0.5, backgroundColor: "yellow" }}>//cari warna di materialpalette.com
      <View style={style.container}>
        <StatusBar barStyle="light-content" backgroundColor="purple" />
        <View
          style={{
            backgroundColor: "gold",
            paddingVertical: 20,
            justifyContent: "center", //Untuk memasukkan gambar bCKGROUND OFFLINE  pake unsplash.com //Activitiy indicator untuk loading
            alignItems: "center",
            elevation: 50, //shadow
          }}
        >
          <Text style={{ color: "black", fontWeight: "bold", fontSize: 18 }}>
            {this.state.header}
          </Text>
        </View>

        <ActivityIndicator size="small" color="black" />
        <ActivityIndicator animating={false} size="large" color="black" />

        <TouchableOpacity
          // style={style.imageContainer}
          style={{
            flex: 1,
          }}
          onPress={() => Linking.openURL("https://google.com")} //cara menyambungkan source ke internet/google
        >
          <ImageBackground
            source={{
              uri: "https://images.unsplash.com/photo-1639475377520-b256a5d204b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDU4fE94eW50Sm9CREZZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            }}
            style={{
              flex: 1,
              resizeMode: "cover",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white" }}>Hello World</Text>
          </ImageBackground>
          {/* <Image
            source={require("./src/Assets/Images/blok.jpg")}
            resizeMode="contain"
            source={{
              uri: "https://images.unsplash.com/photo-1639475377520-b256a5d204b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDU4fE94eW50Sm9CREZZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            }}
            style={style.image}
            resizeMode="cover"
          ></Image> */}
        </TouchableOpacity>

        <FlatList
          style={{ flex: 1, marginTop: 10, backgroundColor: "black" }}
          data={this.state.dataPembayaran}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refresh}
              onRefresh={() => {
                ////loading ketika di scroll
                Linking.openURL("https://google.com");
                this.setState({ refresh: false });
              }}
            />
          }
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={style.textInput}
              onPress={() =>
                ToastAndroid.show(
                  item.namaBarang + "anda klik sesuatu",

                  ToastAndroid.LONG
                )
              }
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 20,
                  paddingHorizontal: 10,
                }}
              >
                {item.namaBarang}
              </Text>
              <Text style={{ color: "white", paddingHorizontal: 10 }}>
                {item.harga}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.namaBarang}
        />

        {/* <View style={style.switch}>
          <Switch
            value={this.state.value}
            onValueChange={() => this.setState({ value: !this.state.value })}
          />
          <TextInput
            value={this.state.username}
            style={style.textInput}
            onChangeText={(value) => this.setState({ username: value })}
          />
        </View>
        <View>
          <Button
            title="press me"
            color="brown"
            onPress={() => console.log("button")}
          />
        </View>
        <TouchableOpacity style={style.button}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Press Me</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Press Me</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Press Me</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Press Me</Text>
        // </TouchableOpacity> */}
      </View>
    );
  }
}
const style = StyleSheet.create({
  button: {
    backgroundColor: "purple",
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 50,
    elevation: 3,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    marginHorizontal: 20,
    paddingHorizontal: 10,
    borderRadius: 3,
    marginTop: 10,
    backgroundColor: "black",
    color: "black",
  },
  switch: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 300,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
  },
  image: {
    width: width,
    height: height / 2,
  },
});
export default App;
