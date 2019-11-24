import React, {Fragment} from "react";
import Lead from "./Lead";
import LatestArticles from "./LatestArticles";
import OpenSourceProjects from "./OpenSourceProjects";

export default function Home() {
  return (
    <Fragment>
      <Lead />
      <LatestArticles />
      <OpenSourceProjects />
    </Fragment>
  );
}
