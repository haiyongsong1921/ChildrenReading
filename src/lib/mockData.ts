export interface Flight {
  flightNumber: string;
  airline: string;
  origin: {
    code: string;
    city: string;
    time: string; // ISO string for simplicity
    timezone: string;
  };
  destination: {
    code: string;
    city: string;
    time: string; // ISO string
    timezone: string;
  };
  status: 'On Time' | 'Delayed' | 'Cancelled' | 'Arrived';
}

const MOCK_FLIGHTS: Flight[] = [
  {
    flightNumber: 'AA123',
    airline: 'American Airlines',
    origin: {
      code: 'JFK',
      city: 'New York',
      time: '2023-10-27T08:00:00',
      timezone: 'EST',
    },
    destination: {
      code: 'LHR',
      city: 'London',
      time: '2023-10-27T20:00:00',
      timezone: 'GMT',
    },
    status: 'On Time',
  },
  {
    flightNumber: 'BA456',
    airline: 'British Airways',
    origin: {
      code: 'LHR',
      city: 'London',
      time: '2023-10-28T10:00:00',
      timezone: 'GMT',
    },
    destination: {
      code: 'HND',
      city: 'Tokyo',
      time: '2023-10-29T07:00:00',
      timezone: 'JST',
    },
    status: 'Delayed',
  },
  {
    flightNumber: 'JL789',
    airline: 'Japan Airlines',
    origin: {
      code: 'HND',
      city: 'Tokyo',
      time: '2023-10-30T12:00:00',
      timezone: 'JST',
    },
    destination: {
      code: 'SFO',
      city: 'San Francisco',
      time: '2023-10-30T05:30:00',
      timezone: 'PST',
    },
    status: 'On Time',
  },
    {
    flightNumber: 'UA101',
    airline: 'United Airlines',
    origin: {
      code: 'SFO',
      city: 'San Francisco',
      time: '2023-11-01T09:00:00',
      timezone: 'PST',
    },
    destination: {
      code: 'JFK',
      city: 'New York',
      time: '2023-11-01T17:30:00',
      timezone: 'EST',
    },
    status: 'Arrived',
  },
];

export const searchFlights = async (query: string): Promise<Flight[]> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  if (!query) return [];

  const normalizedQuery = query.toUpperCase().trim();
  return MOCK_FLIGHTS.filter((flight) =>
    flight.flightNumber.includes(normalizedQuery)
  );
};
