import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">Welcome to Remix</h1>
      <ul className="list-disc mt-4 pl-6 space-y-2">
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/start/quickstart"
            rel="noreferrer"
          >
            5m Quick Start
          </a>
        </li>
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/start/tutorial"
            rel="noreferrer"
          >
            30m Tutorial
          </a>
        </li>
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/docs"
            rel="noreferrer"
          >
            Remix Docs
          </a>
        </li>
      </ul>
      <hr className="m-4"/>
      <h1 className="text-3xl">Welcome to Remix</h1>
      <ul className="list-disc mt-4 pl-6 space-y-2">
      <li>Name: Pimpika lntutsing</li>
      <li>Class: Information Technology</li>
      <li>Email: phimpika.int@rmutto.ac.th</li>
      </ul>
      <img src="https://scontent-bkk1-1.xx.fbcdn.net/v/t39.30808-6/305518974_1669702570068024_9062132912916325505_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=zMdl2kQgCUoQ7kNvgGoV7Rk&_nc_ht=scontent-bkk1-1.xx&oh=00_AYAIrg2xTZcIDNposzbT-t9mYg13Jt4WDzAqInyDdIBZVw&oe=668C3D13"style={{ width: '20%', height: '20%' }}/>
    </div>
  );
}
