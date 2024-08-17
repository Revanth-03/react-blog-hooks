import { useState } from "react";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [subtitle, setSubTitle] = useState("");
  const [textare, setTextArea] = useState("");

  function handleSubmit(e) {}
  return (
    <div className="create-post">
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit} className="create-post_from">
        <div className="title">
          <label htmlFor="">Title</label>
          <input type="text" />
        </div>

        <div className="sub-title">
          <label htmlFor="">SubTitle</label>
          <input type="text" />
        </div>

        <div className="feedback">
          <label htmlFor="">Comment</label>
          <textarea rows={10}></textarea>
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}
