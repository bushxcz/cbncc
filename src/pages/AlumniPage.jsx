import { useEffect } from "react";
import AlumniSection from "../components/Alumni/AlumniSection";

export default function AlumniPage() {
  useEffect(() => {
    document.title = "Alumni | CBNCC";
  }, []);

  return <AlumniSection />;
}
