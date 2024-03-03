import { useState } from "react";

import MainComponent from "./components/MainComponent/MainComponent";
import { img, logo } from "./images";

function App() {
  const [allData, setAllData] = useState({
    fontFamily: "'Public Sans', sans-serif",
    logo: logo,
    img: img,

    primaryColor: "#FFEFCB",
    secondaryColor: "#000",
    accentColor: "#fff",
    heading: "We <br/> are <br/> hiring",
    postName: "Sales Manager",
    responsibilities: [
      "Leading the team is client engagement",
      "Established and maintain client relationship",
      "Develope and implement strategic business plans",
    ],
    sendYourCv: {
      label: "Send your cv via email",
      email: "hello@rellygreatsite.com",
    },
  });

  return (
    <>
      <div
        style={{
          "--primaryColor": allData.primaryColor,
          "--secondaryColor": allData.secondaryColor,
          "--accentColor": allData.accentColor,

          fontFamily: allData.fontFamily,
        }}
      >
        <MainComponent {...allData} />
      </div>
    </>
  );
}

export default App;
