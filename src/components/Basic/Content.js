import React , {useState} from 'react'
import ContentCard from './ContentCard';
import BlogData from './ContentData';

const Content = () => {
    const [blogData, setblogData] = useState(BlogData);
    return (
      <>
      <section className="content-body">
        <ContentCard blogData={blogData} />
        </section>
      </>
    );
}

export default Content
