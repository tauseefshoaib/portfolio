import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSendEmail = () => {
    const subject = "Let's Collaborate";
    const to = "tauseefshoaib@gmail.com";

    const mailtoLink = `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(`Hey! I am ${name},\n${message}`)}`;

    window.location.href = mailtoLink;
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            {`// Submit the form below or send me an email - tauseefshoaib@gmail.com`}
          </p>
        </div>
        <input
          id="name"
          className="my-4 p-2 bg-[#fcfdff]"
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          id="message"
          className="bg-[#fcfdff] p-2"
          name="message"
          rows="10"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button
          onClick={handleSendEmail}
          className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center"
        >
          {`Let's Collaborate`}
        </button>
      </form>
    </div>
  );
};

export default Contact;
