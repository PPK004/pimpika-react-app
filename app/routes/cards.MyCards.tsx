import { cards } from "./data";
import { useState } from "react";

function IsMember({ id,act } : {id : number,act: boolean}){
  if(act)
    return <span key={id}> 🥳 Hi,Vip Member.</span>
  else
    return <span key={id}> 😎 Member Only!</span>
} 

function Profiles({id, nam, bio, bgp, imgu, usrn, cdat, act} : {id:number, nam:string, bio:any, bgp:string, imgu:string, usrn:string, cdat:string, act:boolean} ){
  console.log("ID:",id);  
  return(
        <div className="max-w-sm w-full lg:max-w-full lg:flex">
  <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: `url(${bgp})`,color: "blue"}} title={nam}>
  </div>
  <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div className="mb-8">
      <p className="text-sm text-gray-600 flex items-center">
        <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        </svg>
        <IsMember id={id} act={act} />
      </p>
      <div className="text-gray-900 font-bold text-xl mb-2">{nam}</div>
      <p className="text-gray-700 text-base">
        {bio}
      </p>
    </div>
    <div className="flex items-center">
      <img className="w-10 h-10 rounded-full mr-4" src={imgu} alt={nam}/>
      <div className="text-sm">
        <p className="text-gray-900 leading-none">{usrn}</p>
        <p className="text-gray-600">{cdat}</p>
      </div>
    </div>
    <div className="mt-4">
    <a href={`/viewcards/${id}`} className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"> View</a>
    </div>
  </div>
  </div>
    );
}

export default function MyCards(){ 
  const [active,setActive] = useState(true);
  //let/var/comst
    const name = "Pimpika lntutsing";
    const note = "#Webprogramming";
    const note2 = "#softwareengineering";
    const chk = true;

    const items = cards.filter(cardItems => 
      cardItems.active === active
    );

    const cardItems = items.map(cardItem => 
      <Profiles 
      id={cardItem.id}
      nam={cardItem.name}
      bio={cardItem.biog}
      bgp={cardItem.bgProf}
      imgu={cardItem.userIcon}
      usrn={cardItem.userName}
      cdat={cardItem.createdAt}
      act={cardItem.active}
      />
    );

   function handleClickActive(){
    // alert("Before, handleClickActive -->"+active);
    setActive(true);
    // alert("After, handleClickActive -->"+active);
   } 

   function handleClickNonAct(){
    // alert("Before, handleClickNonAct -->"+active);
    setActive(false);
    // alert("After, handleClickNonAct -->"+active);
   }
    return (
      <div className="m-3 bg-red-400 p-10">
        <h1 className="text-3xl font-bold">My Cards: Pimpika lntutsing </h1>
        <div className="flex flex-row">
        <div className="m-2 p-3 bg-cyan-400 rounded-3xl text-Slate-950 flex items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6Z" />
</svg>{note}</div>
        <div className="m-2 p-3 bg-cyan-300 rounded-3xl flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6Z" />
</svg>{note2}</div></div>
        <hr />
        {/* <Profiles /> */}
        {cardItems}
        <hr />
        <button className="h-14 w-1/2 bg-teal-400 text-slate-950 rounded-3xl" onClick={handleClickActive}>Active</button>
        <button className="h-14 w-1/2  bg-teal-400 text-slate-950 rounded-3xl" onClick={handleClickNonAct}>Non-Active</button>
        </div>  
    );

}