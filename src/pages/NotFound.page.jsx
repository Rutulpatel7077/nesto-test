import { Typography } from "src/components/Typography";
import { useNavigate } from "react-router-dom";
import { Button } from "src/components/Button";
import Box from "src/components/styles/Box";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box mt={10}>
      <Typography fontSize={40}>
        Opps! Looks like you landed some where else.
      </Typography>
      <Box mt={2}>
        <Button onClick={() => navigate("/")}>Take me back to Home Page</Button>
      </Box>
    </Box>
  );
};

export default NotFound;
