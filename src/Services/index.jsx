import request, { gql } from "graphql-request";

const URL =
  "https://api-ca-central-1.hygraph.com/v2/cls70ecnl0st501w3r982abdp/master";

export const getSliderList = async () => {
  const query = gql`
    query FoodSliders {
      foodSliders {
        id
        hero
        foodinfo
        image {
          url
        }
      }
    }
  `;
  const result = await request(URL, query);
  return result;
};

export const bannerFood = async () => {
  const query = gql`
    query bannerFood {
      bannerFoods {
        id
        topTitle
        heroTitle
        image {
          url
        }
        bgImage {
          url
        }
        hoverImage {
          url
        }
      }
    }
  `;
  const result = await request(URL, query);
  return result;
};

export const PopularFood = async () => {
  const query = gql`
    query PopularFood {
      popularFoods {
        id
        popularHeroTitle
        subPopular
        image {
          url
        }
        price
      }
    }
  `;
  const result = await request(URL, query);
  return result;
};
