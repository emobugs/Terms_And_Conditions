//https://loripsum.net/api/15/short/headers
import "./Document.css";

export default function Document({ title, content , handleScroll}) {
  return (
    <div>
      <h1 className="title">{title}</h1>
      <p className="content"
        onScroll={(e) => {handleScroll(e.target)}}>
        {content}
      </p>
    </div>
  );
}
