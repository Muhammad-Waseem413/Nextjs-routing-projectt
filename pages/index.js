import Head from "next/head";
import Image from "next/image";
import { getAllEvents } from "../dummy-data";
import EventList from "../components/events/EventList";

function HomePage() {
  const events = getAllEvents();

  return (
    <div>
      <EventList items={events} />
    </div>
  );
}

export default HomePage;
