import Image from "next/image";
import React from "react";
import avatarPlaceholder from "@/assets/avatar-placeholder.png";
import { cn } from "@/lib/utils";

type Props = {
  avatarUrl: string | null | undefined;
  size?: number;
  className?: string;
};

const UserAvatar = ({ avatarUrl, size, className }: Props) => {
  return (
    <Image
      src={avatarUrl || avatarPlaceholder}
      alt="user avatar"
      width={size ?? 48}
      height={size ?? 48}
      className={cn(
        "aspect-square h-fit flex-none rounded-full bg-secondary object-cover",
        className,
      )}
    />
  );
};

export default UserAvatar;
