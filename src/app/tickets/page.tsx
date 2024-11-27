import Link from "next/link";
import { initialTickets } from "@/data";
import { ticketPath } from "../paths";

const TICKET_ICONS = {
  OPEN: 'O',
  DONE: 'X',
  IN_PROGRESS: '>',
};

const TicketsPage = () => {
  return (
    <div>
      <div>
        {initialTickets.map(({ id, title, status }) => (
          <div key={id}>
            <div>{TICKET_ICONS[status]}</div>
            <h2 className="text-lg">{title}</h2>
            <Link href={ticketPath(id)} className="text-sm underline">
              View
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketsPage;
