/** @jsxImportSource @emotion/react */
import { RadioGroup, Radio, FormControlLabel } from "@mui/material";
import {
  BrowserRouter,
  Routes,
  Route,
  PathRouteProps,
  useLocation,
  useNavigate,
  Outlet,
  Navigate,
} from "react-router-dom";
import SVGRotateSVGStroke from "./demos/1.svg_rotate_svg_stroke";
import HTMLRotateHTMLArc from "./demos/2.html_rotate_html_arc";
import HTMLRotateSVGArc from "./demos/3.html_rotate_svg_arc";
import HTMLRotateSVGKeyframe from "./demos/4.html_rotate_svg_keyframe";
import HTMLRotate from "./demos/5.html_rotate";
import HTMLRotateSVGStroke from "./demos/6.html_rotate_svg_stroke";

const routes: PathRouteProps[] = [
  {
    path: "/svg_rotate_svg_stroke",
    element: <SVGRotateSVGStroke />,
  },
  {
    path: "/html_rotate_html_arc",
    element: <HTMLRotateHTMLArc />,
  },
  {
    path: "/html_rotate_svg_arc",
    element: <HTMLRotateSVGArc />,
  },
  {
    path: "/html_rotate_svg_keyframe",
    element: <HTMLRotateSVGKeyframe />,
  },
  {
    path: "/html_rotate",
    element: <HTMLRotate />,
  },
  {
    path: "/html_rotate_svg_stroke",
    element: <HTMLRotateSVGStroke />,
  },
];

const Page = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div
      css={{
        display: "flex",
      }}
    >
      <RadioGroup
        value={location.pathname}
        onChange={(ev, value) => {
          navigate(value);
        }}
      >
        {routes.map((route) => (
          <FormControlLabel
            key={route.path}
            value={route.path}
            control={<Radio value={route.path}></Radio>}
            label={route.path}
          />
        ))}
      </RadioGroup>
      <div
        css={{
          display: "flex",
          border: "1px solid black",
          padding: 16,
          flex: 1,
        }}
      >
        <div
          css={{
            margin: "auto",
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Page />}>
          {routes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
          <Route path="*" element={<Navigate to={routes[0].path} replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
