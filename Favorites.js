import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Favorites = () => {
  const navigation = useNavigation();

  const [favoriteRoutes, setFavoriteRoutes] = useState([
    {
      id: 1,
      localAtual: "BRASIL ",
      localDesejado: "ALEMANHA",
      horario: "09:15 AM",
    },
    {
      id: 2,
      localAtual: "FRANÇA",
      localDesejado: "PORTUGAL",
      horario: "11:45 AM",
    },
    {
      id: 2,
      localAtual: "HOLANDA",
      localDesejado: "EQUADOR",
      horario: "12:45 AM",
    },
    {
      id: 2,
      localAtual: "ARGENTINA",
      localDesejado: "CROACIA",
      horario: "14:45 AM",
    },
    {
      id: 2,
      localAtual: "AUSTRALIA",
      localDesejado: "COLOMBIA",
      horario: "17:45 AM",
    },
    {
      id: 2,
      localAtual: "BELGICA",
      localDesejado: "MARROCOS",
      horario: "19:45 AM",
    },
  ]);

  const addFavoriteRoute = (route) => {
    setFavoriteRoutes([...favoriteRoutes, route]);
  };

  const startRoute = (item) => {
    //Implementar depois a logica
  };

  const combinedList = [...favoriteRoutes];

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.header}>Favoritos</Text>
      </View>

      {combinedList.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}></Text>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={styles.backToMapButton}
          >
            <Text style={styles.backToMapButtonText}></Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={combinedList}
          keyExtractor={(item) =>
            item.localAtual + item.localDesejado + item.horario
          }
          renderItem={({ item }) => (
            <View style={styles.routeItem}>
              <View style={styles.routeInfo}>
                <Text style={styles.routeName}>
                  {item.localAtual} - {item.localDesejado}
                </Text>

                <Text style={styles.horario}>Horário: {item.horario}</Text>
              </View>
              
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topBar: {
    height: 100,
    backgroundColor: "#7289DA",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  emptyContainer: {
    flex: 1,
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyText: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  routeItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 8,
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 16,
    backgroundColor: "#f0f0f0",
  },
  routeInfo: {
    flex: 1,
  },
  routeName: {
    fontSize: 18,
  },
  horario: {
    fontSize: 14,
    color: "#666",
  },
  routeButton: {
    backgroundColor: "#7289DA",
    padding: 8,
    borderRadius: 4,
    marginTop: 8,
    width: 115,
    alignItems: "center",
  },
  routeButtonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
});

export default Favorites;
