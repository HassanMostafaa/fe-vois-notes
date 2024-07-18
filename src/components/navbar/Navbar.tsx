"use client";
import { SNav } from "./styles/Navbar.styles";
import useSearchModalStore from "@/src/store/useSearchModal";
import useAddNoteModalStore from "@/src/store/useAddNoteModal";
// import logo from "../../../public/VOIS_LOGO_POWERING_VODAFONE_black.png";
// import Image from "next/image";

export default function Navbar() {
  const { isOpen, openSearchModal } = useSearchModalStore();
  const { openAddNoteModal } = useAddNoteModalStore();
  return (
    <SNav>
      <div className="logo">
        {/* <Image src={logo.src} width={150} height={80} alt="_VOIS_LOGO" /> */}
        <p style={{ fontSize: 25 }}>
          _VO<span style={{ fontWeight: "bolder" }}>IS</span> _NOTES
        </p>
      </div>
      <ul>
        {/* <li>
          <Link href="/">Home</Link>
        </li> */}
        <li style={{ cursor: "pointer" }} onClick={() => openAddNoteModal()}>
          Add note
        </li>
        <li style={{ cursor: "pointer" }} onClick={() => openSearchModal()}>
          Search
        </li>
      </ul>
    </SNav>
  );
}
