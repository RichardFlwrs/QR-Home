import React from 'react'
import StackNavigator from "navigator/StackNavigator";
import { AppProvider } from 'context/createDataContext';

export default function App() {
  return (
    <AppProvider>
      <StackNavigator />
    </AppProvider>
  )


  // return <RootStack />;
}