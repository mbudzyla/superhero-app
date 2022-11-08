import styled from 'styled-components';

export const CardWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.palette.primary.grey};
  border-radius: 5px;
  padding: 10px;
  width: fit-content;

  @media ${({ theme }) => theme.media.desktop} {
    padding: 20px 30px;
    min-width: 200px;
  }
`;

export const CardTitle = styled.h3`
  font-size: 16px;
  margin: 0;
  text-transform: capitalize;
`;

export const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  width: 180px;

  li {
    margin-block: 5px;
    text-transform: capitalize;
    white-space: break-spaces;
  }
`;

export const Property = styled.span`
  font-weight: 600;

  &:after {
    content: ':';
  }
`;
