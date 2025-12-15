'use client';

import { useState } from 'react';
import styles from './FlightSearchForm.module.css';

interface FlightSearchFormProps {
    onSearch: (flightNumber: string) => void;
    isLoading: boolean;
}

export default function FlightSearchForm({ onSearch, isLoading }: FlightSearchFormProps) {
    const [flightNumber, setFlightNumber] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (flightNumber.trim()) {
            onSearch(flightNumber);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.formContainer}>
            <div className={styles.inputGroup}>
                <input
                    type="text"
                    value={flightNumber}
                    onChange={(e) => setFlightNumber(e.target.value)}
                    placeholder="Enter Flight Number (e.g., AA123)"
                    className={styles.input}
                    disabled={isLoading}
                />
            </div>
            <button type="submit" className={styles.button} disabled={isLoading}>
                {isLoading ? 'Searching...' : 'Track Flight'}
            </button>
        </form>
    );
}
