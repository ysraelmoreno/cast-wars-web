import { CSS } from "../../styles/Theme.provider";
import { ChipContainer } from "./styles";

interface IChipProps {
  children: React.ReactNode;
  css?: CSS;
  color?: "primary" | "secondary";
}

function Chip({ children, color = "primary", css, ...props }: IChipProps) {
  return (
    <>
      <ChipContainer color={color} css={css} {...props}>
        {children}
      </ChipContainer>
    </>
  );
}

export default Chip;
