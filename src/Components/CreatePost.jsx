import { useState } from "react";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [textArea, setTextArea] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("title", title, "subtitle", subTitle, "textarea", textArea);
  }
  return (
    <div className="create-post">
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit} className="create-post_from">
        <div className="title">
          <label htmlFor="">Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
          />
        </div>

        <div className="sub-title">
          <label htmlFor="">SubTitle</label>
          <input
            value={subTitle}
            onChange={(e) => setSubTitle(e.target.value)}
            type="text"
          />
        </div>

        <div className="feedback">
          <label htmlFor="">Comment</label>
          <textarea
            value={textArea}
            onChange={(e) => setTextArea(e.target.value)}
            rows={10}
          ></textarea>
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}
