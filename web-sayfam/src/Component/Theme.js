import * as React from "react";
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { ToggleContext } from "./Context";
import ToggleButton from "@mui/material/ToggleButton";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

function Theme() {
  const { handleClick, toggle, language, setLanguage } =
    React.useContext(ToggleContext);

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            "#FCE570"
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#8796A5" : "#FDB813",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
      width: 32,
      height: 32,
      "&:before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      borderRadius: 20 / 2,
    },
  }));
  const theme = createTheme({
    palette: {
      secondary: {
        main: "#FFD300",
      },
    },
    spacing: 20,
  });

  return (
    <div className="h-[36px] w-[100%] flex justify-between fixed mb-[55px] dark:text-yellow-300 border-yellow-400 dark:bg-[#484242] bg-[#7b7878]">
      <FormControlLabel
        control={<MaterialUISwitch sx={{ m: 0.1 }} checked={toggle} />}
        label="Dark & Light"
        onClick={handleClick}
        aria-label="Platform"
        className=" pl-4"
      />
      <ThemeProvider theme={theme}>
        <ToggleButtonGroup
          className="dark:bg-[#7e753b] mr-4 bg-yellow-100  "
          exclusive
          color="secondary"
          value={language}
          size="small"
        >
          <ToggleButton
            checked={language === "tr"}
            onClick={() => setLanguage("tr")}
            value="tr"
          >
            Türkçe
          </ToggleButton>
          <ToggleButton
            checked={language === "en"}
            onClick={() => setLanguage("en")}
            value="en"
          >
            English
          </ToggleButton>
        </ToggleButtonGroup>
      </ThemeProvider>
    </div>
  );
}
export default Theme;
