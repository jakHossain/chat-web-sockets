import { readable, type Readable } from "svelte/store";

export const createMatchMediaState = (
  matchMediaQuery: string
): Readable<boolean> => {
  return readable(false, (set) => {
    //check that window object exists
    if (!!!window) {
      console.log("No browser window object exists!");
      return; //else return
    }

    const media = window.matchMedia(matchMediaQuery);

    const updateMatch = (event: MediaQueryListEvent) => {
      set(event.matches);
    };
    media.addEventListener("change", updateMatch);

    return () => {
      media.removeEventListener("change", updateMatch);
    };
  });
};
