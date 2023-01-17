import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Aug 16, 2022" text="Can AI-powered virtual assistants replace human customer service representatives?" />
        <Article imgUrl={blog03} date=" Mar 24, 2022" text="How is OpenAI's technology being used in the gaming industry?" />
        <Article imgUrl={blog04} date="Jan 04, 2022" text="What are the most promising developments in OpenAI's robotics research?" />
        <Article imgUrl={blog05} date="Oct 20, 2022" text="What are the implications of OpenAI's language models for the future of content creation?" />
      </div>
    </div>
  </div>
);

export default Blog;
