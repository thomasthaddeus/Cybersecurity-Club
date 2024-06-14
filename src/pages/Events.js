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

const Events = ({ events }) => {
  return (
    <EventsContainer>
      <h2>Upcoming Events</h2>
      <Table>
        <Thead>
          <tr>
            <Th>Event Name</Th>
            <Th>Date</Th>
            <Th>Time</Th>
            <Th>Venue</Th>
          </tr>
        </Thead>
        <Tbody>
          {events.map((event, index) => (
            <tr key={index}>
              <Td>{event.name}</Td>
              <Td>{event.date}</Td>
              <Td>{event.time}</Td>
              <Td>{event.venue}</Td>
            </tr>
          ))}
        </Tbody>
      </Table>
    </EventsContainer>
  );
};

export default Events;
