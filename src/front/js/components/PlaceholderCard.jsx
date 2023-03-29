import React, {useState} from "react";

const PlaceholderCard = () =>{
    return(
        <div className="card" aria-hidden="true">
      <img
        src="https://place-hold.it/500x500/09c"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title placeholder-glow">
          <span className="placeholder col-6"></span>
        </h5>
        <p className="card-text placeholder-glow">
          <span className="placeholder col-7"></span>
          <span className="placeholder col-4"></span>
          <span className="placeholder col-4"></span>
          <span className="placeholder col-6"></span>
          <span className="placeholder col-8"></span>
        </p>
        <a
          href="#"
          tabIndex="-1"
          className="btn btn-primary disabled placeholder col-6"
        ></a>
      </div>
    </div>
  );
};

const DataCard = () => {
  return (
    <div className="card">
      <img src="http://placekitten.com/500" class="card-img-top" alt="..." />

      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export const Card = () => {
  const [ready, setReady] = useState(false);

  return (
    <div style={{ width: "15rem", margin: "1rem auto 0 auto" }}>
      {ready ? <DataCard /> : <PlaceholderCard />}
      <br />
      <button className="btn btn-primary" onClick={() => setReady(!ready)}>
        Toggle Placeholder
      </button>
    </div>
    );
}