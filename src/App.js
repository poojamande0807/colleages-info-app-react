import React, { useReducer } from "react";

const initialState = {
  name: "",

  establishmentYear: "",

  address: {
    building: "",

    street: "",

    city: "",

    state: "",

    pincode: "",

    landmark: "",
  },

  coursesOffered: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload };

    case "establishmentYear":
      return { ...state, establishmentYear: action.payload };

    case "address":
      return {
        ...state,

        address: { ...state.address, [action.field]: action.payload },
      };

    case "coursesOffered":
      return { ...state, coursesOffered: action.payload };

    case "reset":
      return initialState;

    default:
      throw new Error("invalid action type");
  }
};

function CollegeForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [error, setError] = React.useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    setError(null);

    try {
      console.log("College Data:", state);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleReset = () => {
    dispatch({ type: "reset" });
  };

  return (
    <div>
      {error && <div style={{ color: "red" }}>{error}</div>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>College Name:</label>

          <input
            type="text"
            value={state.name}
            onChange={(e) =>
              dispatch({ type: "name", payload: e.target.value })
            }
          />
        </div>

        <div>
          <label>Establishment Year:</label>

          <input
            type="text"
            value={state.establishmentYear}
            onChange={(e) =>
              dispatch({ type: "establishmentYear", payload: e.target.value })
            }
          />
        </div>

        <div>
          <h3>Address Details</h3>

          <div>
            <label>Building:</label>

            <input
              type="text"
              value={state.address.building}
              onChange={(e) =>
                dispatch({
                  type: "address",
                  field: "building",
                  payload: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label>Street:</label>

            <input
              type="text"
              value={state.address.street}
              onChange={(e) =>
                dispatch({
                  type: "address",
                  field: "street",
                  payload: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label>City:</label>

            <input
              type="text"
              value={state.address.city}
              onChange={(e) =>
                dispatch({
                  type: "address",
                  field: "city",
                  payload: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label>State:</label>

            <input
              type="text"
              value={state.address.state}
              onChange={(e) =>
                dispatch({
                  type: "address",
                  field: "state",
                  payload: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label>Pincode:</label>

            <input
              type="text"
              value={state.address.pincode}
              onChange={(e) =>
                dispatch({
                  type: "address",
                  field: "pincode",
                  payload: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label>Landmark:</label>

            <input
              type="text"
              value={state.address.landmark}
              onChange={(e) =>
                dispatch({
                  type: "address",
                  field: "landmark",
                  payload: e.target.value,
                })
              }
            />
          </div>
        </div>

        <div>
          <label>Courses Offered:</label>

          <input
            type="text"
            value={state.coursesOffered}
            onChange={(e) =>
              dispatch({ type: "coursesOffered", payload: e.target.value })
            }
          />
        </div>

        <button type="submit">Submit</button>

        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>

      <div>
        <h2>College Details</h2>

        {state.name && (
          <div>
            <div>College Name: {state.name}</div>

            <div>Establishment Year: {state.establishmentYear}</div>

            <div>Address:</div>

            <div>Building: {state.address.building}</div>

            <div>Street: {state.address.street}</div>

            <div>City: {state.address.city}</div>

            <div>State: {state.address.state}</div>

            <div>Pincode: {state.address.pincode}</div>

            <div>Landmark: {state.address.landmark}</div>

            <div>Courses Offered: {state.coursesOffered}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CollegeForm;
