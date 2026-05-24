/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';

const EventsContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Thead = styled.thead`
  background-color: #333;
  color: white;
`;

const Th = styled.th`
  padding: 10px;
  text-align: left;
`;

const Tbody = styled.tbody`
  tr:nth-of-type(odd) {
    background-color: #f2f2f2;
  }
`;

const Td = styled.td`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

const EmptyState = styled.p`
  margin-top: 20px;
`;

const EventType = styled.span`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: #e8f0fe;
  color: #1a4f8b;
  font-size: 0.9em;
`;

const Events = ({ events = [] }) => {
  return (
    <EventsContainer>
      <h2>Upcoming Events</h2>
      {events.length === 0 ? (
        <EmptyState>No events have been added yet. Add events in content/events.json.</EmptyState>
      ) : (
      <Table>
        <Thead>
          <tr>
            <Th>Event Name</Th>
            <Th>Type</Th>
            <Th>Date</Th>
            <Th>Time</Th>
            <Th>Location</Th>
          </tr>
        </Thead>
        <Tbody>
          {events.map((event, index) => (
            <tr key={`${event.name}-${event.date}-${index}`}>
              <Td>{event.name}</Td>
              <Td><EventType>{event.type}</EventType></Td>
              <Td>{event.date}</Td>
              <Td>{event.time}</Td>
              <Td>{event.location}</Td>
            </tr>
          ))}
        </Tbody>
      </Table>
      )}
    </EventsContainer>
  );
};

export default Events;
