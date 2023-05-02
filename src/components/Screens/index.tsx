import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Daily from "../Daily";
import Month from "../Month";
import CreateTask from "../CreateTask";
import { Theme } from "../../config/theme";
import { ShouldUpdateDataProvider } from "../../contexts/shouldUpdateData/shouldUpdateData";

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: Theme().primary,
        },
        tabBarLabelStyle: {
          color: "#fff",
          fontWeight: "500",
          fontSize: 14,
          fontFamily: "Josefin-Sans-medium",
        },
        tabBarIndicatorStyle: {
          backgroundColor: Theme().secondary,
          height: 5,
        },
      }}
    >
      <Tab.Screen name="Daily" component={Daily} />
      <Tab.Screen name="Month" component={Month} />
    </Tab.Navigator>
  );
}

const Screens = () => {
  return (
    <ShouldUpdateDataProvider>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateTask"
          component={CreateTask}
          options={{
            headerStyle: {
              backgroundColor: Theme().primary,
            },
            headerTitle: () => null,
            headerTintColor: "#fff",
          }}
        />
      </Stack.Navigator>
    </ShouldUpdateDataProvider>
  );
};

export default Screens;
