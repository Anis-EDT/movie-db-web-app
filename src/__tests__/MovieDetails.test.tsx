import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import MovieDetails  from "../components/elements/MovieDetails";


let container: any = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

it("displays movie details", async () => {
    let movieMock = { 
        adult: false,
        backdrop_path: "/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
        id: 531241,
        name: "Spider-Man (Avengers) Collection",
        poster_path: "/nogV4th2P5QWYvQIMiWHj4CFLU9.jpg",
        budget: 200000000,
        homepage: "https://www.spidermannowayhome.movie",
        imdb_id: "tt10872600",
        original_language: "en",
        original_title: "Spider-Man: No Way Home",
        overview: "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
        popularity: 5792.421,
        release_date: "2021-12-15",
        revenue: 1888000000,
        runtime: 148,
        status: "Released",
        tagline: "The Multiverse unleashed.",
        title: "Spider-Man: No Way Home",
        video: false,
        vote_average: 8.2,
        vote_count: 11406
    }
  
  
    await act(async () => {
      render(<MovieDetails  />, container);
    });
  
    expect(container.querySelector("h1").textContent).toBe(movieMock.title);
    expect(container.querySelector("p").textContent).toBe(movieMock.overview);

  
  });