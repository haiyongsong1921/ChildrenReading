'use client';

import { useState } from 'react';
import styles from './page.module.css';
import FlightSearchForm from '@/components/FlightSearchForm';
import FlightCard from '@/components/FlightCard';
import { searchFlights, Flight } from '@/lib/mockData';

export default function Home() {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (flightNumber: string) => {
    setIsLoading(true);
    setHasSearched(false);
    try {
      const results = await searchFlights(flightNumber);
      setFlights(results);
      setHasSearched(true);
    } catch (error) {
      console.error('Error searching flights:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Flight Tracker</h1>
      <p className={styles.subtitle}>
        Real-time flight status and tracking information at your fingertips.
        Enter your flight number to get started.
      </p>

      <FlightSearchForm onSearch={handleSearch} isLoading={isLoading} />

      <div className={styles.resultsContainer}>
        {flights.map((flight) => (
          <FlightCard key={flight.flightNumber} flight={flight} />
        ))}

        {hasSearched && flights.length === 0 && (
          <div className={styles.noResults}>
            No flights found with that number. Please try again.
          </div>
        )}
      </div>
    </main>
  );
}
