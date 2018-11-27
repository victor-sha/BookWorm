import history from "../history";

export const redirectOnClick = (_, { id }, __) =>
  history.push(`${history.location.pathname}/${id}`);
