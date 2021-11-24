import React from "react";

const ContentCard = ({ blogData }) => {
  console.log(blogData);
  return (
    <>
      {blogData.map((curElem) => {
        return (
          <>
            <div className="content-card" key={curElem.id}>
              <h2>{curElem.day}</h2>
              <p>{curElem.description}</p>
            </div>
          </>
        );
      })}
    </>
  );
};

export default ContentCard;
