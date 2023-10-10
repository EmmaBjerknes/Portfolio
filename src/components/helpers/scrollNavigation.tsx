export const scrollToSection =( sectionId: string)=>{
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

export const setupScrollListeners = () =>{
  const sections = [
    {linkId: "portfolio-link", sectionId: "portfolio"},
    {linkId: "contact-link", sectionId: "contact"},
    {linkId: "home-link", sectionId: "home"}
  ]
  
  const removeListeners: (()=> void)[]=[];

  sections.forEach(({ linkId, sectionId }) => {
    const link = document.getElementById(linkId);
    const scrollTo = () => scrollToSection(sectionId);

    if (link) {
      link.addEventListener("click", scrollTo);
      removeListeners.push(() => link.removeEventListener("click", scrollTo));
    }
  });

  return () => {
    removeListeners.forEach((removeListener) => removeListener());
  };
}
