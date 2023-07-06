export const scrollToTop = () => {
  console.log('scrollToTop');
  window.scrollTo({
    behavior: 'smooth',
    top: 0,
  });
};

export const scrollToId = (id: string) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
  });
};

export const addHashToUrl = (id: string) => {
  window.location.hash = id;
};
