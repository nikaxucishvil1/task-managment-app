"use client"
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.location.href = "/pages/login"
  },[])
  return (
    <div>

    </div>
  );
}
