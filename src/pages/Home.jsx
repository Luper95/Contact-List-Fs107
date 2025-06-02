import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import ContactComponent from "../components/ContactComponent.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <div className="container-fluid ">
      <ContactComponent />
    </div>
  );
};
