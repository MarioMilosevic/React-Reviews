import React, {useContext} from "react";
import { AppContext } from "../App";
const SurpriseMeButton = React.memo(() => {
  const appCtx = useContext(AppContext);
  return (
    <button
      onClick={appCtx.randomCount}
      className="px-4 py-2 border bg-blue-500 rounded-3xl text-slate-50 hover:bg-blue-600 hover:text-white"
    >
      Surprise Me
    </button>
  );
});

SurpriseMeButton.displayName = "SurpriseMeButton";

export default SurpriseMeButton;
