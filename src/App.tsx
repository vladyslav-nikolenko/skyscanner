import "./scss/styles.scss";
import { Header } from "./components/Header";
import { PageContent } from "./components/PageContent";

export const App = () => {
  return (
    <div className='page'>
      <Header />
      <PageContent />
    </div>
  );
};
