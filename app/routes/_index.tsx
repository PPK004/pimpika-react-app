import type { MetaFunction } from "@remix-run/node";
import MyCards from "./cards.MyCards";
import AbbMenu from "./templat/menu";
import AppMenu from "./templat/menu";
import GetProfiles from "./chapter06.getProfiles";

export const meta: MetaFunction = () => {
  return [
    { title: "PimPika" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-4">
      {/* <AppMenu/> */}
      <GetProfiles/>
      {/* <MyCards />
      <hr className="m-4"/>
      <h1 className="text-3xl">Welcome to Remix</h1>
      <ul className="list-disc mt-4 pl-6 space-y-2">
      <li>Name: Pimpika lntutsing</li>
      <li>Class: Information Technology</li>
      <li>Email: phimpika.int@rmutto.ac.th</li>
      </ul>
      <img src="/images/3.jpg"style={{ width: '20%', height: '20%' }}/> */}
    </div>
  );
}
