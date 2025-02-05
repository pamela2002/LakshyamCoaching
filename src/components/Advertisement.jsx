import React from "react";
import "./Advertisement.css";

const Advertisement = () => {
  return (
    <>
      <div class="Adcontainer">
        <div style={{ float: "left", marginTop: 30, marginBottom: 30 }}>
          <div class="advertisementBox" style={{ marginBottom: 45 }}>
            <h3
              className="adH"
              style={{
                fontSize: 45,
                fontWeight: "bolder",
                textAlign: "center",
              }}
            >
              India's Most Loved Educational Platform!
            </h3>
            <p
              className="adP"
              style={{
                fontSize: 30,
                lineHeight: 1.5,
                paddingBottom: 15,
                textAlign: "center",
              }}
            >
              With Lakshyam Coaching, Begin your journey to success.
            </p>
            <div style={{ textAlign: "center" }} className="adFeatures">
              <div>
                <div
                  className="subAdFeatures"
                  style={{ float: "left", fontSize: 22, fontWeight: "bolder" }}
                >
                  Happy Students
                  <br />
                  <div style={{ textAlign: "center", paddingTop: 15 }}>
                  20000+
                  </div>
                </div>
                <div
                  className="subAdFeatures"
                  style={{ float: "left", fontSize: 22, fontWeight: "bolder" }}
                >
                  Video lectures
                  <br />
                  <div style={{ textAlign: "center", paddingTop: 15 }}>
                  1000+
                  </div>
                </div>
                <div
                  style={{ float: "left", fontSize: 22, fontWeight: "bolder" }}
                  className="subAdFeatures"
                >
                  Mock Test
                  <br />
                  <div style={{ textAlign: "center", paddingTop: 15 }}>
                  1000+
                  </div>
                </div>
                <div
                  style={{ float: "left", fontSize: 22, fontWeight: "bolder" }}
                  className="subAdFeatures"
                >
                  Study Materials
                  <br />
                  <div style={{ textAlign: "center", paddingTop: 15 }}>
                  1000+
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Advertisement;
