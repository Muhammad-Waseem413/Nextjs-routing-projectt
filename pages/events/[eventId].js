import { useRouter } from "next/dist/client/router";
import { getEventById } from "../../dummy-data";
import Image from "next/image";

function EventsDetailPage() {
  const router = useRouter();
  const eventID = router.query.eventId;
  const event = getEventById(eventID);

  if (!event) {
    return <p>No event found!</p>;
  }

  return (
    <ul>
      <Image
        src={"/" + event.image}
        alt={event.title}
        height="600"
        width="600"
      />
      <li>{event.title}</li>
      <li>{event.date}</li>
      <li>{event.location}</li>
      <p>{event.description}</p>
    </ul>
  );
}

export default EventsDetailPage;
