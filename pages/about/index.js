import React, { useState } from "react";

export default function about() {
  const [car, setCar] = useState(null);
  return (
    <>
      <div className="container">
        <h2>About Page</h2>
        <div>
          <details className="sum">
            <summary>Heading</summary>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              culpa velit a doloribus! Quo, aperiam ad quaerat dolorem obcaecati
              magni in voluptates quod, possimus totam minima autem veritatis
              asperiores. Explicabo!
            </p>
          </details>
        </div>
        <div>
          <input
            type="text"
            list="suggestions"
            size="50px"
            placeholder="search"
            id="search"
            onChange={(e) => setCar(e.target.value)}
          />
          <datalist id="suggestions">
            <option>Mercedes</option>
            <option>BMW</option>
            <option>Ferrari</option>
            <option>Lamborghini</option>
            <option>Audi</option>
          </datalist>
        </div>
        <style jsx>{`
        .container {
            display: flex;
            flex: 1;
            margin: 4rem 0;
            flex-direction: column;
            place-items: center;  
        }
        h2 {
            color: #521b49;
            margin-bottom: 5rem;
          }
        p {
          max-width: 25rem;
          text-indent: 40px;
          line-height: 1.5;
          word-spacing: 4px;
        }
        .sum {
            margin-left: 1rem;
          }
        #search {
          margin-top: 6rem;
        }
        
        }
      `}</style>
        <h3>{car}</h3>
      </div>
    </>
  );
}
