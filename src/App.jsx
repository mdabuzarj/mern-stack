import React from "react";
import { Bookmark } from "lucide-react";

const App = () => {
  return (
    <div className="parent">
      <div className="card">
        <div className="top">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="Amazon"
          />

          <button>
            Save <Bookmark size={10}   />
          </button>
        </div>

        <div className="center">
          <h3>Amazon <span>5 days ago </span></h3>
          <h2>Senior UI/UX Designer</h2></div>
        <div>
          <h4>Part Time</h4>
          <h4>Senior Level</h4>
        </div>
        <div className="bottom">
              <h3>$120/hr</h3>
              <p>Mumbai,india </p>
            <button>Apply now </button>
        </div>
      </div>
    </div>
  );
};

export default App;