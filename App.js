import React, { useState } from "react";

import { AppLoading } from "expo";
import { AppNavigator } from "./src/navigation/AppNavigation";
import bootstrap from "./src/bootstrap";

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={bootstrap}
        onError={err => console.log(err)}
        onFinish={() => setIsReady(true)}
      />
    );
  }

  return <AppNavigator />;
}
