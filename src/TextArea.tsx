import React from "react";

import Color from "./styles/Color";
import Space from "./styles/Space";

const styles = {
  textarea: {
    backgroundColor: Color.WHITE,
    borderColor: Color.LIGHT_GRAY,
    borderRadius: 3,
    borderWidth: 1,
    color: Color.DARK_GRAY,
    flex: 1,
    fontSize: "1rem",
    padding: Space.lg
  }
};

const TextArea = () => <textarea style={styles.textarea} />;

export default TextArea;
