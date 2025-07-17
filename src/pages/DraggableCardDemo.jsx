import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "../components/ui/draggable-card";

const DraggableCardDemo = () => {
  const items = [
    {
      title: "Mountain View",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=3000&auto=format&fit=crop",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "City Lights",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=3000&auto=format&fit=crop",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Forest Trail",
      image:
        "https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=3000&auto=format&fit=crop",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "Desert Dunes",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=3000&auto=format&fit=crop",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "Ocean Cliff",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=3000&auto=format&fit=crop",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "Northern Lights",
      image:
        "https://images.unsplash.com/photo-1516110833967-5784ffcb302a?q=80&w=3000&auto=format&fit=crop",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      title: "Snowy Peaks",
      image:
        "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=3000&auto=format&fit=crop",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
  ];

  return (
    <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
      <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
        If it's your first day at Fight Club, you have to fight.
      </p>
      {items.map((item, index) => (
        <DraggableCardBody key={index} className={item.className}>
          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-80 w-80 object-cover"
          />
          <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
};

export default DraggableCardDemo;
