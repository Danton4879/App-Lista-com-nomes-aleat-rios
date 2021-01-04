import React from "react";
import Initial from "./screens/Initial";
import PeopleDetails from "./screens/PeopleDetailPage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerStyle: {
						backgroundColor: "#34a1eb",
					},
					headerTintColor: "#fff",
					headerTitleAlign: {
						alignSelf: "center",
						title: "Center Title",
					},
				}}
			>
				<Stack.Screen name="Home" component={Initial} />
				<Stack.Screen name="PeopleDetails" component={PeopleDetails} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
