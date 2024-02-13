export const Textarea = ({ className, value, onChange }) => {
  return (
    <>
      <textarea
        name="text"
        id="comment"
        className={`${className}`}
        placeholder={`Description`}
        value={value}
        onChange={onChange}
      ></textarea>
    </>
  );
};
