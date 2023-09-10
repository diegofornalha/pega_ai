import Image from "next/image"
import { useEffect, useState } from "react"
import { NameService } from "../lib/utils";
import { useRecoilState } from "recoil"
import { nameServiceState } from "../lib/atoms";

export default function Footer() {
  const [nameService, setNameService] = useRecoilState(nameServiceState)

  useEffect(() => {
    const _nameService = localStorage.getItem('PreferredNameService')
    if (_nameService) {
      setNameService(_nameService)
    } else {
      setNameService(NameService.find)
    }
  }, [])

  useEffect(() => {
    if (nameService != null) {
      localStorage.setItem('PreferredNameService', nameService);
    }
  }, [nameService]);

  return (
    <footer className="m-auto mt-60 max-w-[920px] flex flex-1 justify-center items-center py-8 border-t border-solid box-border">
      <div className="flex flex-col gap-y-2 items-center">
        <div
          className="flex gap-x-2 items-center font-flow text-sm mb-5 -mt-3"
        >
        </div>
      </div>

    </footer>
  )
}