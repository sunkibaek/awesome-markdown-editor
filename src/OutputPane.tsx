import React from "react";

import Preview from "./Preview";

interface IProps {
  texts: string;
}

const OutputPane = ({ texts }: IProps) => <Preview texts={texts} />;

export default OutputPane;
