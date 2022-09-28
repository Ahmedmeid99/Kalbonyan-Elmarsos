import Link from "next/link";
const News = () => {
  return (
    <>
      <h3>News Page</h3>
      <ol>
        <li>
          {/* <a href="/news/next-js-page">Next Js Page</a> */}
          <Link href="/news/next-js-page">Next Js Page</Link>
        </li>
        <li>
          <Link href="/news/react-js-page">Reat Js Page</Link>
        </li>
        <li>
          <Link href="/news/js-page"> Js Page</Link>
        </li>
        <li>
          <Link href="/news/css-page">Css Page</Link>
        </li>
      </ol>
    </>
  );
};
export default News;
