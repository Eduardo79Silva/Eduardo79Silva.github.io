import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-800 text-white text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold">Contact Me</h2>
        <p className="text-gray-400 mt-2">Feel free to reach out for collaborations or inquiries.</p>
        <div className="mt-6 p-6 bg-gray-900 rounded-lg shadow-lg text-left inline-block">
          <p className="text-lg"><strong>Email:</strong> <a href="mailto:eduardo4silva@gmail.com" className="text-yellow-500 hover:underline">eduardo4silva@gmail.com</a></p>
          <p className="text-lg"><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/eduardo79silva/" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:underline">linkedin.com/in/eduardo79silva</a></p>
          <p className="text-lg"><strong>GitHub:</strong> <a href="https://github.com/eduardo79silva" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:underline">github.com/eduardo79silva</a></p>
        </div>
      </div>
    </section>
  );
}

