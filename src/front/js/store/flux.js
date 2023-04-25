const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      allStates: [
        { name: "ALABAMA", abbreviation: "AL" },
        { name: "ALASKA", abbreviation: "AK" },
        { name: "ARIZONA", abbreviation: "AZ" },
        { name: "ARKANSAS", abbreviation: "AR" },
        { name: "CALIFORNIA", abbreviation: "CA" },
        { name: "COLORADO", abbreviation: "CO" },
        { name: "CONNECTICUT", abbreviation: "CT" },
        { name: "DELAWARE", abbreviation: "DE" },
        { name: "DISTRICT OF COLUMBIA", abbreviation: "DC" },
        { name: "FLORIDA", abbreviation: "FL" },
        { name: "GEORGIA", abbreviation: "GA" },
        { name: "HAWAII", abbreviation: "HI" },
        { name: "IDAHO", abbreviation: "ID" },
        { name: "ILLINOIS", abbreviation: "IL" },
        { name: "INDIANA", abbreviation: "IN" },
        { name: "IOWA", abbreviation: "IA" },
        { name: "KANSAS", abbreviation: "KS" },
        { name: "KENTUCKY", abbreviation: "KY" },
        { name: "LOUISIANA", abbreviation: "LA" },
        { name: "MAINE", abbreviation: "ME" },
        { name: "MARYLAND", abbreviation: "MD" },
        { name: "MASSACHUSETTS", abbreviation: "MA" },
        { name: "MICHIGAN", abbreviation: "MI" },
        { name: "MINNESOTA", abbreviation: "MN" },
        { name: "MISSISSIPPI", abbreviation: "MS" },
        { name: "MISSOURI", abbreviation: "MO" },
        { name: "MONTANA", abbreviation: "MT" },
        { name: "NEBRASKA", abbreviation: "NE" },
        { name: "NEVADA", abbreviation: "NV" },
        { name: "NEW HAMPSHIRE", abbreviation: "NH" },
        { name: "NEW JERSEY", abbreviation: "NJ" },
        { name: "NEW MEXICO", abbreviation: "NM" },
        { name: "NEW YORK", abbreviation: "NY" },
        { name: "NORTH CAROLINA", abbreviation: "NC" },
        { name: "NORTH DAKOTA", abbreviation: "ND" },
        { name: "OHIO", abbreviation: "OH" },
        { name: "OKLAHOMA", abbreviation: "OK" },
        { name: "OREGON", abbreviation: "OR" },
        { name: "PENNSYLVANIA", abbreviation: "PA" },
        { name: "RHODE ISLAND", abbreviation: "RI" },
        { name: "SOUTH CAROLINA", abbreviation: "SC" },
        { name: "SOUTH DAKOTA", abbreviation: "SD" },
        { name: "TENNESSEE", abbreviation: "TN" },
        { name: "TEXAS", abbreviation: "TX" },
        { name: "UTAH", abbreviation: "UT" },
        { name: "VERMONT", abbreviation: "VT" },
        { name: "VIRGINIA", abbreviation: "VA" },
        { name: "WASHINGTON", abbreviation: "WA" },
        { name: "WEST VIRGINIA", abbreviation: "WV" },
        { name: "WISCONSIN", abbreviation: "WI" },
        { name: "WYOMING", abbreviation: "WY" },
      ],

      stateData: [],
      accessToken: "",
    },

    actions: {
      getStateData: (url_state) => {
        if (url_state) {
          return fetch(
            `${process.env.BACKEND_URL}/api/highlights/${url_state}`
          ).then((resp) => resp.json());
        }
      },

      getStateBatch: (count = 5) => {
        const allStates = getStore().allStates;
        let stateData = getStore().stateData;
        if (stateData.length >= 51) {
          return;
        }
        const reqPromise = [];
        for (let i = stateData.length; i < stateData.length + count; i++) {
          reqPromise.push(
            getActions().getStateData(allStates[i]?.abbreviation)
          );
        }

        Promise.all(reqPromise)
          .then((values) => {
            for (let state of values) {
              stateData = getStore().stateData;
              if (
                !stateData.map((i) => i.stateName).includes(state.stateName)
              ) {
                setStore({ stateData: [...stateData, state] });
              }
            }
          })
          .catch(() =>
            setStore({
              stateData: [
                ...stateData,
                {
                  stateName: null,
                  population: null,
                  medIncome: null,
                },
              ],
            })
          );
      },

      handle_Login_Click: (email, password) => {
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        };
        return fetch(`${process.env.BACKEND_URL}/api/login`, options)
          .then((resp) => {
            if (resp.status === 200) return resp.json();
            else alert("An error has occurred!");
          })
          .then((data) => {
            setStore({ accessToken: data.access_token });
          })
          .catch((error) => {
            console.error("There was an error", error);
          });
      },
    },
  };
};

export default getState;
