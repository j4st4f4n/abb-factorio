import { io } from "socket.io-client";
import { useEffect, useState } from "react";

import { Part } from "@/components";
import { PartI } from "@/model";

const serverURL = import.meta.env.VITE_SERVER_URL || "http://localhost:8000";
const socket = io(serverURL);

export const App = () => {
  const [activePart, setActivePart] = useState<PartI | null>(null);

  useEffect(() => {
    socket.on("new-part", (data: PartI) => {
      console.log(data);
      setActivePart(data);
    });

    return () => {
      socket.off("connection");
      socket.off("new-part");
    };
  }, []);

  return activePart ? (
    <Part {...activePart} />
  ) : (
    <div data-testid="loading">Loading...</div>
  );
};
