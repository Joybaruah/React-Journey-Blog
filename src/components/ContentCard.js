import React from 'react'

const ContentCard = ({ blogData }) => {
    console.log(blogData);
  return (
    <>
    {blogData.map((curElem)=>{
        return (
          <>
              <div className="content-card">
                <h2>{curElem.day}</h2>
              </div>
          </>
        );        
    })}
    </>
  );
};

export default ContentCard
