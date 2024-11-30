import { clsx } from "clsx";
import { LucideSquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { ticketPath } from "@/app/paths";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TICKET_ICONS } from "@/features/ticket/constants";
import type { Ticket } from "@/features/ticket/types";

type TicketItemProps = {
  ticket: Ticket;
  isDetail?: boolean;
};

const TicketItem = ({ ticket, isDetail }: TicketItemProps) => {
  const { id, title, status, content } = ticket;

  const detailButton = (
    <Button variant={"outline"} asChild={true} size={"icon"}>
      <Link href={ticketPath(id)}>
        <LucideSquareArrowOutUpRight className={"h-4 w-4"} />
      </Link>
    </Button>
  );

  return (
    <div
      className={clsx("w-full flex gap-x-1", {
        "max-w-[580px]": isDetail,
        "max-w-[420px]": !isDetail,
      })}
    >
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex gap-x-2">
            <span>{TICKET_ICONS[status]}</span>
            <span className="truncate">{title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <span
            className={clsx("whitespace-break-spaces", {
              "line-clamp-3": !isDetail,
            })}
          >
            {content}
          </span>
        </CardContent>
      </Card>

      {isDetail ? null : (
        <div className="flex flex-col gap-y-1">{detailButton}</div>
      )}
    </div>
  );
};

export default TicketItem;
