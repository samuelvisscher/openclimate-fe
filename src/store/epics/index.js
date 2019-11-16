import { combineEpics } from "redux-observable";
import { fetchUserAccountEpic } from "../../components/Auth/store/epics";
import { fetchActorsEpic } from "../../pages/Explore/store/epics";

export const rootEpic = combineEpics(
  fetchUserAccountEpic,
  fetchActorsEpic
);
