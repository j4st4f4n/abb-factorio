import { HttpResponse, http } from "msw";

// Mock Data
export const posts = [
  {
    userId: 1,
    id: 1,
    title: "first post title",
    body: "first post body",
  },
  {
    userId: 2,
    id: 5,
    title: "second post title",
    body: "second post body",
  },
  {
    userId: 3,
    id: 6,
    title: "third post title",
    body: "third post body",
  },
];

// Define handlers that catch the corresponding requests and returns the mock data.
export const handlers = [
  http.get("http://localhost:8080/socket.io/", ({ request, params }) => {
    console.log("GET:");
    console.log("request.body:", request.body);
    console.log("params:", params);
    return HttpResponse.json(posts, { status: 200 });
  }),
  http.post("http://localhost:8080/socket.io/", ({ request, params }) => {
    console.log("POST:");
    console.log("request.body:", request.body);
    console.log("params:", params);
    return HttpResponse.json(posts, { status: 200 });
  }),
];
