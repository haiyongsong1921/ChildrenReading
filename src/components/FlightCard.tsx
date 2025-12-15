import { Flight } from '@/lib/mockData';
import styles from './FlightCard.module.css';

interface FlightCardProps {
    flight: Flight;
}

export default function FlightCard({ flight }: FlightCardProps) {
    const getStatusClass = (status: string) => {
        switch (status) {
            case 'On Time': return styles.statusOnTime;
            case 'Delayed': return styles.statusDelayed;
            case 'Cancelled': return styles.statusCancelled;
            case 'Arrived': return styles.statusArrived;
            default: return '';
        }
    };

    const formatTime = (isoString: string) => {
        return new Date(isoString).toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        });
    };

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <div className={styles.flightInfo}>
                    <h2>{flight.flightNumber}</h2>
                    <div className={styles.airline}>{flight.airline}</div>
                </div>
                <div className={`${styles.status} ${getStatusClass(flight.status)}`}>
                    {flight.status}
                </div>
            </div>

            <div className={styles.route}>
                <div className={styles.location}>
                    <span className={styles.code}>{flight.origin.code}</span>
                    <span className={styles.city}>{flight.origin.city}</span>
                    <span className={styles.time}>
                        {formatTime(flight.origin.time)} {flight.origin.timezone}
                    </span>
                </div>

                <div className={styles.divider} />

                <div className={styles.location}>
                    <span className={styles.code}>{flight.destination.code}</span>
                    <span className={styles.city}>{flight.destination.city}</span>
                    <span className={styles.time}>
                        {formatTime(flight.destination.time)} {flight.destination.timezone}
                    </span>
                </div>
            </div>
        </div>
    );
}
