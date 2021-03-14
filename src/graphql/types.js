export const GET_CATEGORIES = `
  query GetCategories {
    allCategories {
      name
      priceFrom
      image {
        publicUrl
      }
    }
  }
`;
