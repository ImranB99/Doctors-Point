import React, { useEffect, useState } from 'react';
import Blog from './Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
    return (
       <div className="pb-8 pt-5">
      <h1 className="sm:text-3xl shadow-md text-center font-semibold bg-white p-4 rounded-2xl sm:mx-[20%]">
        Patient Help Center: Your Top 12 Questions Answered
      </h1>
      <div className="mt-5">
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
    );
};

export default Blogs;