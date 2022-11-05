import styled from 'styled-components';

export const CardWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.palette.primary.grey};
  border-radius: 5px;
  max-width: 600px;
  padding: 10px;
  width: fit-content;

  @media ${({ theme }) => theme.media.desktop} {
    padding: 20px 30px;
  }
`;

export const CardTitle = styled.h3`
  font-size: 16px;
  margin: 0;
`;

export const InfoList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-block: 5px;
  }
`;

export const Property = styled.span`
  font-weight: 600;

  &:after {
    content: ':';
  }
`;
