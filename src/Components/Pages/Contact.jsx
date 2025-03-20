import React from "react";

const Contact = () => {
  return (
    <div className="w-full min-h-screen bg-[#0f0f0f] flex justify-center items-center px-5 py-10">
      <div className="bg-[#181818] p-6 rounded-xl shadow-lg w-full max-w-md text-white">
        <h1 className="text-3xl font-bold mb-3 text-[#6556CD]">Contact Us</h1>
        <p className="text-sm text-zinc-400 mb-6">
          Got questions or feedback? Drop us a message.
        </p>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 rounded bg-[#2a2a2a] text-white text-sm focus:ring-1 focus:ring-[#6556CD] outline-none"
          />
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full p-2 rounded bg-[#2a2a2a] text-white text-sm focus:ring-1 focus:ring-[#6556CD] outline-none"
          />
          <textarea
            rows="3"
            placeholder="Message"
            className="w-full p-2 rounded bg-[#2a2a2a] text-white text-sm focus:ring-1 focus:ring-[#6556CD] outline-none resize-none"
          ></textarea>
          <button
            type="submit"
            className="w-full py-2 rounded bg-[#6556CD] hover:bg-[#5543b7] text-sm font-medium"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
