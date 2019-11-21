import React, {Fragment} from "react";
import Lead from "./Lead";
import LatestArticles from "./LatestArticles";

export default function Home() {
  return (
    <Fragment>
      <Lead />
      <LatestArticles />
    </Fragment>
  );
}
