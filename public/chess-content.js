document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav a")
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        if (link.getAttribute("href").startsWith("#")) {
          e.preventDefault()
          const target = document.querySelector(link.getAttribute("href"))
          if (target) {
            window.scrollTo({
              top: target.offsetTop - 80,
              behavior: "smooth",
            })
          }
        }
      })
    })
  
    // Add animation to content sections
    const contentSections = document.querySelectorAll(".content > *")
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in")
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)
  
    contentSections.forEach((section) => {
      section.classList.add("hidden")
      observer.observe(section)
    })
  })
  
  