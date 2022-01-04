// The navigation routes where keys are the name of the route and values are the URLs
export const routes = [
  {
    name: "Home",
    url: "/"
  },
  {
    name: "Our Portfolio",
    url: "/portfolio"
  },
  {
    name: "Suppliers",
    url: "/suppliers"
  },
  {
    name: "Careers",
    url: "/careers"
  },
  {
    name: "Our Causes",
    url: "/causes"
  },
  {
    name: "News",
    url: "/news"
  },
  {
    name: "About Us",
    url: "/about"
  }
];

export const isCurrentRoute = (route) => {
  return window.location.pathname === route.url
}