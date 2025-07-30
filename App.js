import "./global.css";
import { useFonts } from "expo-font";

import RootNavigation from "./src/navigation/rootNavigation";

export default function App() {
  const [loaded] = useFonts({
    Bitcount: require("./assets/fonts/bitcountfont.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <>
      <RootNavigation />
    </>
  );
}
