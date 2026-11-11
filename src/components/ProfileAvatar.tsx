import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function ProfileAvatar() {
  return (
    <div>
      <Avatar>
        <AvatarImage
          src="https://github.com/shadcn.png"
          alt="@shadcn"
          className="grayscale"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
}
