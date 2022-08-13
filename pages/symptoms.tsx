import { ArrowRightIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CustomLink from "../components/global/atoms/CustomLink";
import InformationCard from "../components/symptoms/molecules/InformationCard";
import SidePanel from "../components/symptoms/SidePanel";
import useChangeLayout from "../hooks/useChangeLayout";
import SymptomData from "./api/symtomsData";

type Props = {};

interface SymptomType {
  id: string;
  name: string;
  desc: string;
  subDesc: string;
  color: string;
}

const Symptoms = () => {
  const { handleChangeLayout, handleBackgroundColor } = useChangeLayout();
  const [symptoms, setSymptoms] = useState<SymptomType[]>([]);

  useEffect(() => {
    setSymptoms([...SymptomData, ...SymptomData]);
    handleChangeLayout(true);
    handleBackgroundColor(`#FFFFFF`)
  }, []);

  return (
    <div className="flex w-full">
      <div className="flex flex-col gap-y-[58px]">
        <p className="font-black text-[27px] leading-[40.5px] text-[#261D56]">
          Symptoms
        </p>
        <div className="grid grid-cols-2 xl:grid-cols-3 gap-x-[30px] gap-y-36">
          {symptoms.map((symptom, index) => (
            <InformationCard symptom={symptom} key={index + symptom.id} />
          ))}
        </div>
        <div className="mt-20 flex items-center bg-[#E9F0FA] rounded-[30px]">
          <div className="w-60 h-32 relative -mr-10 px-1">
            <Image
              alt="Covid Screening"
              layout="fill"
              objectFit="contain"
              src="/symptoms/covid_screening.svg"
            />
          </div>
          <div className="p-6 border-4 border-gray-100 rounded-[30px] bg-white flex-1 flex justify-center">
            <div>
            <p className="text-[#4B4279] font-bold text-2xl">
              COVID-19 Screening Tool
            </p>
            <p className="text-[#4B4279] max-w-lg">
              Normally able to stay up into the small hours, they are hitting
              the pillow at 10 o&apos;clock now. Many are wondering how this can
              be when we are all doing less.
            </p>
            <CustomLink
              className="flex gap-x-3 items-center text-[#F66DA5]"
              link="/test_yourself"
            >
              <p className="font-bold">Sceening Yourself</p>
              <ArrowRightIcon className="w-5 h-5" />
            </CustomLink>
          </div>
          </div>
        </div>
      </div>
      <SidePanel />
    </div>
  );
};

export default Symptoms;
