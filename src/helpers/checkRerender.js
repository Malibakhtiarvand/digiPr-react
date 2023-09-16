function checkRerender(ComponentName) {
  if (process.env.NODE_ENV === "development") {
    console.log(ComponentName);
  }
}

export default checkRerender
