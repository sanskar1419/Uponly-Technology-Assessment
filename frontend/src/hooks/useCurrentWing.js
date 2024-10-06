/* Importing necessary files, module, method, hooks, context etc. */
import { useApartmentsContext } from "../context/ApartmentContext";
import { useCurrentApartmentsContext } from "../context/CurrentApartmentContext";

/* Creating Hook */
const useCurrentWing = () => {
  const { apartments } = useApartmentsContext();
  const { setCurrentWing } = useCurrentApartmentsContext();

  /* Setting initial value */
  const setInitialValue = () => {
    setCurrentWing(apartments[0]);
  };

  /* Function set current wing */
  const handleWingChange = (event, value) => {
    setCurrentWing(apartments[value - 1]);
  };

  return { handleWingChange, setInitialValue };
};

/* Default Export */
export default useCurrentWing;
