import React from "react";
import ReactMarkdown from "react-markdown";

import Color from "./styles/Color";
import Space from "./styles/Space";

interface IProps {
  texts: string;
}

const styles = {
  container: {
    backgroundColor: Color.WHITE,
    flex: 1,
    overflowY: "scroll" as "scroll",
    padding: Space.LG
  }
};

const Preview = ({ texts }: IProps) => (
  <div style={styles.container}>
    <ReactMarkdown className="markdown-container" source={texts} />
  </div>
);

export default Preview;
