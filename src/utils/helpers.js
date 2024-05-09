const defaultNotFoundImage = "/images/gemnote-no-image_updated.png";

const defaultNoTrendingImage = "/images/noun_image_trending.svg";
const defaultImageUploadPlaceholder = "/assets/upload-placeholder.png";
const noBackground = "/images/redemmption-bg.png";
const brokenImage = "/images/broken-image.svg";

function scrollPageToTop() {
  window.scrollTo(0, 0);
}

const navLinks = [
  { navName: "Home", navLink: "/", link: 'index' },
  { navName: "Services", navLink: "/services", link: 'login' },
  { navName: "Testimonials", navLink: "/testimonials", link: 'login' },
  { navName: "Blog", navLink: "/blog", link: 'blog' },
  { navName: "Contact us", navLink: "/contact", link: 'contact' },
];

export {
  defaultNotFoundImage,
  defaultNoTrendingImage,
  defaultImageUploadPlaceholder,
  noBackground,
  brokenImage,
  scrollPageToTop,
  navLinks
}