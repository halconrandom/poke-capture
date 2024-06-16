import React from "react";


export const Types = ({ types }) => {
  const typeColors = {
    normal: "#B3B3B3",
    fire: "#FF9900",
    grass: "#70DF00",
    ice: "#6AD2FF",
    fighting: "#E40000",
    steel: "#2A4950",
    rock: "#E1B237",
    water: "#00A0E4",
    ghost: "#5A1E64",
    electric: "#FFE600",
    dark: "#1C1C1C",
    poison: "#AB00AE",
    flying: "#B5DFE8",
    psychic: "#FF81F2",
    ground: "#965A00",
    fairy: "#FFC2F9",
    dragon: "#00458A",
    bug: "#3BB900",
  };

  return (
    <div>
      {types.map((type, index) => (
        <div
          key={index}
          style={{
            backgroundColor: typeColors[type.type.name],
            display: "flex",
            textTransform: "uppercase",
            fontFamily: "Roboto",
            width: "120px",
            height: "35px",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "5px",
            color: "#fff",
          }}
        >
          <span>{type.type.name}</span>
        </div>
      ))}
    </div>
  );
};
