import React from "react";
import ReactDOM from "react-dom/client";

const InnerComponent = () => {
  return <div> Hello Aishu</div>;
};

const HeadingComponent = () => {
  return (
    <div>
      {InnerComponent()}
      <InnerComponent />
      <div> Hello World</div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
