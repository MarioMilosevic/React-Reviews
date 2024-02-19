import React from "react";

const SurpriseMeButton = React.memo((props) => {
  return (
    <button
      onClick={props.randomCount}
      className="px-4 py-2 border bg-blue-500 rounded-3xl text-slate-50 hover:bg-blue-600 text-white"
    >
      Surprise Me
    </button>
  );
});

SurpriseMeButton.displayName = "SurpriseMeButton"

export default SurpriseMeButton;
