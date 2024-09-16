import { infoWords } from "@/constants"
import { Navbar, CenterText  } from "@/components/index"
export default function Home() {

  return (
    <>
      <Navbar/>
      <CenterText words ={infoWords}/>
    </>
  );
}
