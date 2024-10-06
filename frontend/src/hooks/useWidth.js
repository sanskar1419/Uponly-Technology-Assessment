/* Importing necessary files, module, method, hooks, context etc. */
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

/* Creating Hook */
const useWidth = () => {
  const theme = useTheme();
  const keys = [...theme.breakpoints.keys].reverse();
  return (
    keys.reduce((output, key) => {
      const matches = useMediaQuery(theme.breakpoints.up(key));
      return !output && matches ? key : output;
    }, null) || "xs"
  );
};

/* Default Export */
export default useWidth;
