import Link from "next/link";
import { ticketsPath } from "@/app/paths";
import Empty from "@/components/empty";
import { Button } from "@/components/ui/button";
import { initialTickets } from "@/data";
import TicketItem from "@/features/ticket/components/ticket-item";

const TicketPage = async ({
  params,
}: {
  params: Promise<{ ticketId: string }>;
}) => {
  const { ticketId } = await params;
  const ticket = initialTickets.find((ticket) => ticket.id === ticketId);

  if (!ticket) {
    return (
      <Empty
        message={"Ticket not found"}
        button={
          <Button asChild={true} variant={"outline"}>
            <Link href={ticketsPath()}>Go to Tickets</Link>
          </Button>
        }
      />
    );
  }

  return (
    <div className="flex justify-center animate-fade-from-top">
      <TicketItem ticket={ticket} isDetail />
    </div>
  );
};

export default TicketPage;
