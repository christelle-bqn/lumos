import * as React from "react";
import { theme } from "../../styles/theme";

export const LightningSvg = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    width={14}
    height={29}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.109 12.483a.41.41 0 0 1-.36-.207.394.394 0 0 1 .006-.414L14 0 1.32 14.94h5.789c.15 0 .285.074.36.201.075.127.082.28.007.407L0 29l12.945-16.517H7.11Z"
      fill={theme.colors.beige}
    />
  </svg>
);
