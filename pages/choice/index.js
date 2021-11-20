import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import shield from "../../public/shield.png";

const Dropdown = dynamic(
  async () => {
    const module = await import("reactjs-dropdown-component");
    const DD = module.Dropdown;

    return ({ forwardedRef, ...props }) => <DD ref={forwardedRef} {...props} />;
  },
  { ssr: false }
);

/* const DropdownMultiple = dynamic(
  async () => {
    const module = await import("reactjs-dropdown-component");
    const DDM = module.DropdownMultiple;

    return ({ forwardedRef, ...props }) => (
      <DDM ref={forwardedRef} {...props} />
    );
  },
  { ssr: false }
); */

const locations = [
  {
    label: "New York",
    value: "newYork",
  },
  {
    label: "Oslo",
    value: "oslo",
  },
  {
    label: "Istanbul",
    value: "istanbul",
  },
];

export default function choice() {
  const [city, setCity] = useState(null);
  const [path, setPath] = useState("");
  const onChange = ({ label, value }) => {
    //console.log(name);
    setCity(label);
  };

  useEffect(() => {
    const p = location.search;
    console.log(p);
    setPath(p);
  }, [path]);
  return (
    <div className="wrapper">
      <div style={{ marginLeft: "5rem" }}>
        <p>Dropdown menu examples</p>
        <div className="shield">
          <Image src={shield} alt="shield" width={100} height={100} />
        </div>
        <Dropdown
          name="location"
          title="Select location"
          list={locations}
          onChange={onChange}
          styles={{
            wrapper: { width: "18rem" },
            header: { borderRadius: "15px" },
            headerTitle: { fontSize: "20px" },
          }}
        />
        <p>{city}</p>
        <p>{path}</p>
        <button className="btn btn-one">Click Me!</button>
      </div>
      <style jsx>{`
        .wrapper {
          background: #333;
          height: 100vh;
        }
        .btn {
          padding: 1em 3em;
          border-radius: 3em;
          background: white;
          border: 1px solid salmon;
          color: salmon;
          box-shadow: 0 0 25px -1px salmon;
          transition: transform 125ms ease-in;
        }
        .btn:hover {
          transform: scale(1.1);
        }
        .btn:focus-visible {
          outline-offset: 1.5rem;
          outline: 5px dashed blue;
        }
        .shield {
          margin-bottom: 5rem;
        }
        p {
          color: red;
        }
      `}</style>
    </div>
  );
}
