import React, { memo } from "react";

//memo works in a way that the component is being memorized in order to not change along with the state, this is useful to not renderized again the component when is not need it.
export const Small = memo(({ value }) => {
  return <small>{value}</small>;
});
