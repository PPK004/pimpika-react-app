import { useLocation } from "react-router-dom";
import { cards } from "./data";
import { useParams } from "@remix-run/react";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function IsMember({ id, act }: { id: number; act: boolean }) {
  return (
    <span key={id}>
      {act ? "🥳 Hi, VIP Member." : "😎 Member Only!"}
    </span>
  );
}

function Profiles({
  id,
  nam,
  bio,
  bgp,
  imgu,
  usrn,
  cdat,
  act,
}: {
  id: number;
  nam: string;
  bio: string;
  bgp: string;
  imgu: string;
  usrn: string;
  cdat: string;
  act: boolean;
}) {
  return (
    <div className="flex flex-col items-center max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div
        className="w-full h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgp})` }}
        title={nam}
      ></div>
      <div className="p-6">
        <div className="text-center mb-4">
          <p className="text-sm text-gray-600">
            <IsMember id={id} act={act} />
          </p>
          <h2 className="text-gray-900 font-bold text-2xl mt-2">{nam}</h2>
          <p className="text-gray-700 text-lg mt-2">{bio}</p>
        </div>
        <div className="flex items-center justify-center mt-4">
          <img
            className="w-16 h-16 rounded-full"
            src={imgu}
            alt={nam}
            title={nam}
          />
          <div className="ml-4 text-center">
            <p className="text-gray-900 font-semibold">{usrn}</p>
            <p className="text-gray-600 text-sm">{cdat}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function View() {
  const { id } = useParams();
  const query = useQuery();
  const cardId = Number(id);
  const card = cards.find((card) => card.id === cardId);

  if (!card) {
    return <div className="m-10 text-center text-xl">Card not found</div>;
  }

  return (
    <div className="m-10">
      <div className="mb-6">
        <a
          href="/cards/MyCards"
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Back
        </a>
      </div>
      <Profiles
        id={card.id}
        nam={card.name}
        bio={card.biog}
        bgp={card.bgProf}
        imgu={card.userIcon}
        usrn={card.userName}
        cdat={card.createdAt}
        act={card.active}
      />
    </div>
  );
}
