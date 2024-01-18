import React, { useState } from "react";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import { SafeArea } from "../../../utility/safe-area.components";
import { List } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;

  const [breakfastExpanded, setBreakfastExpanded] = React.useState(false);
  const [lunchExpanded, setLunchExpanded] = React.useState(false);
  const [dinnerExpanded, setDinnerExpanded] = React.useState(false);
  const [drinksExpanded, setDrinksExpanded] = React.useState(false);

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Section>
          <List.Accordion
            title="Breakfast"
            expanded={breakfastExpanded}
            left={(props) => <List.Icon {...props} icon="egg-easter" />}
            onPress={() => setBreakfastExpanded(!breakfastExpanded)}
          >
            <List.Item title="Eggs Benedict" />
            <List.Item title="Classic Breakfast" />
          </List.Accordion>

          <List.Accordion
            title="Lunch"
            expanded={lunchExpanded}
            left={(props) => <List.Icon {...props} icon="food" />}
            onPress={() => setLunchExpanded(!lunchExpanded)}
          >
            <List.Item title="Burger w/ Fries" />
            <List.Item title="Steak Sandwich" />
            <List.Item title="Mushroom Soup" />
          </List.Accordion>

          <List.Accordion
            title="Dinner"
            expanded={dinnerExpanded}
            left={(props) => <List.Icon {...props} icon="hamburger" />}
            onPress={() => setDinnerExpanded(!dinnerExpanded)}
          >
            <List.Item title="Spaghetti Bolognese" />
            <List.Item title="Veal Cutlet with Chicken Muchroom Rotini" />
          </List.Accordion>

          <List.Accordion
            title="Drinks"
            expanded={drinksExpanded}
            left={(props) => <List.Icon {...props} icon="hamburger" />}
            onPress={() => setDrinksExpanded(!drinksExpanded)}
          >
            <List.Item title="Coffee" />
            <List.Item title="Latte" />
            <List.Item title="Mocha" />
          </List.Accordion>
        </List.Section>
      </ScrollView>
    </SafeArea>
  );
};
