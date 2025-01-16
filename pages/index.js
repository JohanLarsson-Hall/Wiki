import fs from 'fs';
import path from 'path';

export default function Home({ pages }) {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Welcome to the Cordonia wiki</h1>
      <ul>
        {pages.map((page) => (
          <li key={page}>
            <a href={`/${page}`}>{page.replace("-", " ")}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);

  const pages = filenames.map((filename) => filename.replace(".md", ""));
  return { props: { pages } };
}