import React from "react";
import ReactMarkdown from "react-markdown";

import Space from "./styles/Space";

interface IProps {
  texts: string;
}

const styles = {
  container: {
    flex: 1,
    overflowY: "scroll" as "scroll",
    padding: Space.lg
  }
};

const Preview = ({ texts }: IProps) => (
  <div style={styles.container}>
    <ReactMarkdown className="markdown-container" source={texts} />
  </div>
);

export default Preview;
