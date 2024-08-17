import { useState } from "react";
import useFormInfo from "./hooks";
import { firestore } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export default function CreatePost() {
  const title = useFormInfo("");
  const subTitle = useFormInfo("");
  const textArea = useFormInfo("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await addDoc(collection(firestore, "posts"), {
        title: title.value,
        subTitle: subTitle.value,
        textArea: textArea.value,
        createdAt: new Date(),
      });
      title.reset();
      subTitle.reset();
      textArea.reset();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  return (
    <div className="create-post">
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit} className="create-post_from">
        <div className="title">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            value={title.value}
            onChange={title.onChange}
            type="text"
          />
        </div>

        <div className="sub-title">
          <label htmlFor="subtitle">SubTitle</label>
          <input
            id="subtitle"
            value={subTitle.value}
            onChange={subTitle.onChange}
            type="text"
          />
        </div>

        <div className="feedback">
          <label htmlFor="commnet">Comment</label>
          <textarea
            id="comment"
            value={textArea.value}
            onChange={textArea.onChange}
            rows={10}
          ></textarea>
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}
