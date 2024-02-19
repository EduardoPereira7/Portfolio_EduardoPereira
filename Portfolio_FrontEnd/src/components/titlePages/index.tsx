import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

interface TitlePagesProps {
  title: string;
}

const TitlePages: React.FC<TitlePagesProps> = ({ title }) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const [textWidth, setTextWidth] = useState<number>(0);

  useEffect(() => {
    if (textRef.current) {
      const width = textRef.current.getBoundingClientRect().width;
      setTextWidth(width);
    }
  }, [title]);

  return (
    <>
      <span ref={textRef} className="title_pages_text">
        {title}
      </span>
      <div className="title_pages_row" style={{ width: textWidth + 20 }} />
    </>
  );
};

export default TitlePages;
