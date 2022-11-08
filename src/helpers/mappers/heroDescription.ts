import type { CardElementProps, TextCardProps } from '@atoms/TextCard';

import { camelCaseToText } from '@/helpers/camelCaseToText';
import type { Data } from '@/types/heroPage.types';

export const mapCardElements = (elements: string[]): CardElementProps[] => {
  const cardElems: CardElementProps[] = [];

  for (const property in elements) {
    cardElems.push({
      property: camelCaseToText(property),
      description: elements[property as keyof {}],
    });
  }
  return cardElems.filter(Boolean);
};

export const mapHeroAttributes = (data: Data): TextCardProps[] | null => {
  const excludedFields = ['id', 'name', 'slug', 'images'];
  const keys = Object.keys(data).filter(key => !excludedFields.includes(key));

  return keys.map(key => ({
    title: key,
    elements: mapCardElements(data[key as keyof {}]),
  }));
};
