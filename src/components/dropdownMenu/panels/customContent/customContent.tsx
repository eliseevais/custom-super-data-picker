import { useState } from "react";
import s from "./customContent.module.css";

export const CustomContent = () => {
  const [text, setText] = useState("");

  return (
    <div className={s.content}>
      <h4 className={s.sectionTitle}>Custom content</h4>
      <textarea
        className={s.text}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your text here"
        rows={4}
      />
    </div>
  );
};
