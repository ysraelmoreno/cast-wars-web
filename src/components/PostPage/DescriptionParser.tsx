import { useEffect, useRef } from "react";
import { DescriptionContainer } from "./styles";

interface IDescriptionParser {
  html: string;
}

function DescriptionParser({ html }: IDescriptionParser) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.innerHTML = html;
    }
  }, [html]);

  return (
    <>
      <DescriptionContainer ref={contentRef}></DescriptionContainer>
    </>
  );
}

export default DescriptionParser;
