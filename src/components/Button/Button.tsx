import {
  forwardRef,
  ButtonHTMLAttributes,
  useRef,
  useImperativeHandle,
} from "react";
import { CSS } from "../../styles/Theme.provider";
import { ButtonContainer } from "./styles";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
  children: React.ReactNode;
  css?: CSS;
}

const Button = forwardRef(
  ({ children, variant = "primary", ...props }: IButtonProps, ref) => {
    const buttonRef = useRef(null);

    useImperativeHandle(ref, () => buttonRef);

    return (
      <ButtonContainer
        isDisabled={props.disabled}
        variant={variant}
        ref={buttonRef}
        {...props}
      >
        {children}
      </ButtonContainer>
    );
  }
);

Button.displayName = "CW-Button";

export default Button;
