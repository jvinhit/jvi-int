import Theme from "./styles/theme";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";
import { Layout } from "./layout/Layout";
import Hobbies from "./components/Hobbies";
function App() {
  return (
    <Theme>
      <Layout>
        <Header />
        <Experiences />
        <Skills />
        <Hobbies />
      </Layout>
        
    </Theme>
  );
}

export default App;
