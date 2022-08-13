import Image from 'next/image'
import React from 'react'
import SideTemplate from '../layout/template/SideTemplate'
import Legend from './atoms/Legend'

type Props = {}

const SidePanel = (props: Props) => {
  return (
    <SideTemplate>
        <div className="mt-28 mb-20 mx-20 flex flex-col gap-y-10">
            <p className="max-w-lg text-center text-[#4B4279]">Some infected people do not show any symptoms, while for others the symptoms can be severe, even fatal.</p>
            <div className="flex gap-x-14 justify-center">
                <Legend color='#FD4E71' text='Symptoms' />
                <Legend color='#19BF9A' text='Infection, complications' />
            </div>
            <div className="relative h-[520px] w-[350px] mx-auto">
                <Image objectFit='contain' src="/symptoms/BodyStructure.png" layout='fill' alt="Body Structure" />
            </div>
            <p className="max-w-[464px] text-[#4B4279]">
                Children under two years old and people aged over 65, or with weak immune systems are particularly susceptible to developing severe complications such as pneumonia.
            </p>
        </div>
    </SideTemplate>
  )
}

export default SidePanel