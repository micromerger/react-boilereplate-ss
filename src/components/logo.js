/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "components/link";
import LogoSvg from "components/icons/logo";

export default function Logo({ isSticky, footer, ...props }) {
  return (
    <Link path="/" sx={[styles.logo, {marginTop:-20}]} {...props}>
      <h5>LOGO</h5>
    </Link>
  );
}
const styles = {
  logo: {
    alignItems: "center",
    cursor: "pointer",
    display: "inline-flex",
    svg: {
      height: "auto",
      width: [128, null, "100%"],
    },
  },
};
