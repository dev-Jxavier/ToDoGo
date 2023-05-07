import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Daily from "../Daily";
import Month from "../Month";
import FormTask from "../FormTask";
import { Theme } from "../../config/theme";
import { ShouldUpdateDataProvider } from "../../contexts/shouldUpdateData/shouldUpdateData";
import ModalInfos from "../ModalInfos";
import FloatButton from "../FloatButton";
import { ModalInfosVisibleProvider } from "../../contexts/modalInfosVisible/modalInfosVisible";
import { DAILY, FORM_TASK, MONTH } from "../../config/constants";

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

function HomeTabs() {
  return (
    <ModalInfosVisibleProvider>
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
        <Tab.Screen name={DAILY} component={Daily} />
        <Tab.Screen name={MONTH} component={Month} />
      </Tab.Navigator>
      <FloatButton />
      <ModalInfos />
    </ModalInfosVisibleProvider>
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
          name={FORM_TASK}
          component={FormTask}
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
