import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatproj1.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="GPT-3 (Generative Pre-trained Transformer 3) is a state-of-the-art language processing AI model developed by OpenAI with 175 billion parameters, capable of generating human-like text and completing a wide range of language tasks with high accuracy." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p >Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="We’ve trained a model called ChatGPT which interacts in a conversational way. The dialogue format makes it possible for ChatGPT to answer followup questions, admit its mistakes, challenge incorrect premises, and reject inappropriate requests. " />
      <Feature title="Knowledge base" text="GPT-3 was trained on hundreds of billions of words and is also capable of coding in CSS, JSX, and Python, among others. Since GPT-3's training data was all-encompassing, it does not require further training for distinct language tasks." />
      <Feature title="Education" text="GPT-3 can be used to help students write better essays, reports, speeches and stories. The AI-based tool is capable of analyzing more than a hundred thousand sentences per second to ensure that the content being produced is grammatically correct. " />
    </div>
  </div>
);

export default WhatGPT3;
