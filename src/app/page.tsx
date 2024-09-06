'use client'
import Image from "next/image";
import Header from '../components/Header'
import CategoryBtn from '../components/CategoryBtn'
import Winners from '../components/Winners'
import Participants from '../components/Participants'
import { useState } from "react";

export default function Home() {
  const [isOrganisation, setOrganisation] = useState(true);
  const handleOrganisation = (value: boolean) => {
    setOrganisation(value)
  }

  const [winners, setWinners] = useState(["Max Verstappen", "Charles Leclerc", "Lewis Hamilton"]);
  const [winnerPoints, setWinnerPoints] = useState([1000, 999, 888]);

  const [participants, setParticipants] = useState(["Ashif", "Eren Yeager", "Mikasa", "Armin", "Levi"]);
  const [participantPoints, setParticipantPoints] = useState([69, 500, 96, 300, 30]);
  const [isNetPositive, setIsNetPositive] = useState([false, true, false, true, false]);

  return (
    <div className='bg-[#E7F0FE] h-screen'>
      <Header />
      <CategoryBtn isOrganisation={isOrganisation} handleOrganisation={handleOrganisation} />
      <div className="flex flex-col lg:flex-row mt-10 md:p-6 justify-center items-center gap-10 md:gap-20 ">
        <Winners winners={winners} winnerPoints={winnerPoints} />
        <Participants participants={participants} participantPoints={participantPoints} isNetPositive={isNetPositive} />
      </div>

    </div>
  );
}
