import { Http } from "../../../services/Http";
import { catchError, map, mergeMap } from "rxjs/operators";
import { ofType } from "redux-observable";
import { of } from "rxjs";
import {
  EXPLORE_REVIEW,
  fetchExploreReviewSuccess,
  fetchExploreReviewFailure
} from "./actions";

export const fetchActorsEpic = action$ =>
  action$.pipe(
    ofType(EXPLORE_REVIEW),
    mergeMap(() =>
      Http.getActors().pipe(
        map(response => fetchExploreReviewSuccess(response)),
        catchError(error => of(fetchExploreReviewFailure(error.message)))
      )
    )
  );
