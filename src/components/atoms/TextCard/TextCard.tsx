import { CardTitle, CardWrapper, InfoList, Property } from './TextCard.styled';
import type { TextCardType } from './TextCard.types';

export const TextCard: TextCardType = ({ title, elements }) => (
  <CardWrapper>
    <CardTitle>{title}</CardTitle>
    <InfoList>
      {elements.map(({ description, property }) => (
        <li key={property}>
          <Property>{property}</Property>
          {description}
        </li>
      ))}
    </InfoList>
  </CardWrapper>
);
