import cryptoReducer, { initialState } from "../redux/cryptoData.redux";

describe("crypto reducer", () => {
  test("should return the initial state", () => {
    expect(cryptoReducer(undefined, {})).toEqual(initialState);
  });

  test("should fetch cryptodata", () => {
    const action = {
      type: "crypto-metrics-webapp/cryptoData.redux/FETCH_DATA/fulfilled",
      payload: [
        {
          id: "bitcoin",
          name: "Bitcoin",
          symbol: "BTC",
          rank: "1",
        },
        {
          id: "ethereum",
          name: "Ethereum",
          symbol: "ETH",
          rank: "2",
        },
        {
          id: "ripple",
          name: "Ripple",
          symbol: "XRP",
          rank: "3",
        },
      ],
    };
    expect(cryptoReducer(initialState, action)).toEqual([
      {
        id: "bitcoin",
        name: "Bitcoin",
        symbol: "BTC",
        rank: "1",
      },
      {
        id: "ethereum",
        name: "Ethereum",
        symbol: "ETH",
        rank: "2",
      },
      {
        id: "ripple",
        name: "Ripple",
        symbol: "XRP",
        rank: "3",
      },
    ]);
  });
});
