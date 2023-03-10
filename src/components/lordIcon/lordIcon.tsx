
import lottie from "lottie-web";
import { defineElement } from 'lord-icon-element';

// register lottie and define custom element
defineElement(lottie.loadAnimation);

export type LordIconTrigger =
  | "hover"
  | "click"
  | "loop"
  | "loop-on-hover"
  | "morph"
  | "morph-two-way";

export type LordIconColors = {
  primary?: string;
  secondary?: string;
};

export type LordIconProps = {
  src?: string;
  trigger?: LordIconTrigger;
  colors?: LordIconColors;
  delay?: number;
  size?: number;
  stroke?: number|string|undefined;
};

export const LordIcon = ({
  colors,
  src,
  size,
  trigger,
  delay,
  stroke,
}: LordIconProps) => {
  return (
    //@ts-ignore: Unreachable error
    <lord-icon
      colors={`primary:${colors?.primary},secondary:${colors?.secondary}`}
      src={src}
      trigger={trigger}
      delay={delay}
      stroke={stroke}
      style={{
        width: size,
        height: size,
      }}
    />
  );
};
