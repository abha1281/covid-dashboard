import Image from 'next/image'
import React from 'react'
import InformationCard from '../global/molecules/InformationCard';
import Icon from '../icons/Icon';
import SideTemplate from '../layout/template/SideTemplate';

type Props = {}

const SidePanel = (props: Props) => {
  return (
    <SideTemplate>
      <div className=" p-9 flex flex-col gap-y-[30px]">
        <div className="bg-[#FC86B0] flex gap-x-4 items-center rounded-[20px] p-4">
          <div className="relative w-[90px] h-[105px]">
            <Image
              layout="fill"
              alt="National Emergency Help Line"
              src="/HelpLine.svg"
            />
          </div>
          <div>
            <p className="font-medium text-[22px] leading-[29px] text-white">
              National{" "}
            </p>
            <p className="font-bold text-[22px] leading-[29px] text-white">
              Emergency
            </p>
            <p className="font-medium text-[22px] leading-[29px] text-white">
              Help Line
            </p>
          </div>
          <p className="font-extrabold text-[57px] leading-[85.5px] text-white">
            999
          </p>
        </div>

        <div className="p-10 flex flex-col gap-y-3 bg-white rounded-[20px]">
          <InformationCard
            color="#3EB1DD"
            icon={<Icon name="Donate" />}
            text={"COVID-19 Response Fund"}
            title={"Donate to Help"}
          />
          <InformationCard
            color="#7B5AF1"
            icon={<Icon name="StickMan" />}
            text={"Become volunteer to help "}
            title={"Become Hero"}
          />
        </div>

        <div className="bg-white rounded-[20px]">
          <p className="text-[20px] text-[#6B5FA1] font-medium leading-[30px] text-center">Fatility rate by age</p>
        </div>
      </div>
    </SideTemplate>
  );
}

export default SidePanel