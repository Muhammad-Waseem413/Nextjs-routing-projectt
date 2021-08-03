import Link from "next/link";
import Image from "next/image";
import styles from "./EventItem.module.css";

function EventItem(props) {
  const { title, image, date, location, id } = props;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");

  const exploreLink = `events/${id}`;

  return (
    <li className={styles.item}>
      <Image src={"/" + image} alt={title} height="600" width="600" />
      <div>
        <div>
          <h2>{title}</h2>
          <div className={styles.date}>
            <time>{formattedDate}</time>
          </div>
          <div className={styles.address}>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Link href={exploreLink}>Explore Events</Link>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
