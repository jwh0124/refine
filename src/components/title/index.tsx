import HomeIcon from "@mui/icons-material/Home";
import { Box, Typography } from "@mui/material";
import { useLink } from "@refinedev/core";
import { ColorModeContext } from "contexts/color-mode";
import { useContext } from "react";
import { Logo } from "./styled";

type TitleProps = {
  collapsed: boolean;
};

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const Link = useLink();
  const { mode } = useContext(ColorModeContext);
  const modeColor = mode === "dark" ? "white" : "black";

  return (
    <Logo>
      <Link to="/">
        {collapsed ? (
          <HomeIcon
            style={{
              fontSize: "32px",
              color: modeColor,
            }}
          />
        ) : (
          <Box display="flex" justifyItems="center" alignItems="center">
            <HomeIcon
              style={{
                color: modeColor,
                fontSize: "32px",
              }}
              sx={{ mr: 1 }}
            />
            <Typography
              style={{
                fontSize: "20px",
                color: modeColor,
              }}
            >
              Home
            </Typography>
          </Box>
        )}
      </Link>
    </Logo>
  );
};
