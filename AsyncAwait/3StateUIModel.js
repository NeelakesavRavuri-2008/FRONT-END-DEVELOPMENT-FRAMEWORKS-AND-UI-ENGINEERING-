let state = {
  data: null,
  loading: true,
  error: null
};

function setState(newState) {
  state = { ...state, ...newState };
  console.log("STATE:", state);
}

function fakeAPI() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("User Data"), 1500);
  });
}

async function loadData() {
  setState({ loading: true, error: null });

  try {
    const data = await fakeAPI();
    setState({ data, loading: false });
  } catch (err) {
    setState({ error: err, loading: false });
  }
}

loadData();