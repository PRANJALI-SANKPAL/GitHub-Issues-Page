import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 10px;
  margin-bottom: 10px;
  background-color: #f0f0f0;
  border-radius: 4px;
`;

const IssueList = ({ issues }) => {
  return (
    <List>
      {issues.map((issue) => (
        <ListItem key={issue.id}>{issue.title}</ListItem>
      ))}
    </List>
  );
};

export default IssueList;