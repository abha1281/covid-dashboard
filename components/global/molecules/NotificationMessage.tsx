import Image from "next/image";
import React, { useState } from "react";
import { XIcon } from "@heroicons/react/outline";
import Button from "../atoms/Button";
import Fade from "../atoms/Fade";

type Props = {
  title: string;
  titleFocusText?: string;
  imageName?: string;
  widthOfImage?: number;
  heightOfImage?: number;
};

const NotificationMessage = ({
  title,
  titleFocusText,
  imageName,
  widthOfImage,
  heightOfImage,
}: Props) => {
  const [show, setShow] = useState(true);

  return (
    <>
      <Fade show={show}>
        <div className="relative">
          <div className="absolute -right-2 -top-2">
            <Button
              icon={<XIcon className="h-3 w-3 text-[#FFBDBD]" />}
              onClick={() => setShow(false)}
              className="bg-white rounded-full shadow-sm p-1"
            />
          </div>
          <div className="flex bg-white rounded-[20px] items-center justify-center">
            <div className="ml-[44px] max-w-md">
              <p className="font-bold text-2xl text-[#261D56]">
                {title}
                {titleFocusText ? (
                  <span className="text-[#E02020]">{titleFocusText}</span>
                ) : null}
              </p>
              <p className="text-[#6D6889]">
                This infographic explains how to minimise the spread of
                COVID-19. It describes personal protective, environmental and
                social distancing measures.
              </p>
            </div>
            {imageName ? (
              <div
                className="relative -mt-[38px]"
                style={{
                  width: widthOfImage ? widthOfImage : "0px",
                  height: heightOfImage ? heightOfImage : "0px",
                }}
              >
                <Image
                  layout="fill"
                  alt={imageName}
                  src={`/${imageName}.svg`}
                />
              </div>
            ) : null}
          </div>
        </div>
      </Fade>
    </>
  );
};

export default NotificationMessage;
