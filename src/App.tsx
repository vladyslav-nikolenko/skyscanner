import "./scss/styles.scss";
import { Header } from "./components/Header/Header";
import { PageContent } from "./components/PageContent/PageContent";

export const App = () => {
  return (
    <div>
      <Header />
      <PageContent />
    </div>
  );
};
