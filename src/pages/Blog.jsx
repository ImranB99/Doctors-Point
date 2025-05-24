import React from 'react';
import { FaCaretDown } from 'react-icons/fa';

const Blog = ({blog}) => {
    const{question,answer}=blog
    return (
        <div>
            <div className="collapse bg-base-100 border-base-300 border ">
        <input type="checkbox" />
        <div className="collapse-title flex justify-between font-semibold">
          {question} 
          <FaCaretDown />
        </div>
        <div className="collapse-content text-sm">
        <p className="font-semibold"> Ans:</p> {answer}
        </div>
      </div>
        </div>
    );
};

export default Blog;