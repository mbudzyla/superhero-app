export const camelCaseToText = (text: string): string =>
  text.replace(/([A-Z]+)/g, ' $1').replace(/([A-Z][a-z])/g, ' $1');
