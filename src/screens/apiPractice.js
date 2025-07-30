import { View, Text, FlatList, Image } from "react-native";
import React, { useEffect } from "react";
import axiosInstance from "../services/api/axios";

export default function ApiPractice() {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await axiosInstance.get("users");
    setData(response.data);
    console.log(response.data[0]);
  }

  const renderItem = ({ item }) => {
    return (
      <View className="flex items-center  flex-row gap-10 my-5 bg-white p-5 rounded-lg">
        <Image
          source={{ uri: item.avatar_url }}
          style={{ width: 90, height: 90 }}
          className="rounded-full"
        />
        <Text>{item.login}</Text>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
