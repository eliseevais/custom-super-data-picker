import s from "./CustomContent.module.css";

export const CustomContent = () => {
  return (
    <div className={s.content}>
      <h4 className={s.sectionTitle}>Custom content</h4>
      <div className={s.text}>Hello world!</div>
    </div>
  );
};
