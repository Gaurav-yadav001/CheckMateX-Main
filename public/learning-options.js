document.addEventListener("DOMContentLoaded", () => {
    // Animate option cards on scroll
    const optionCards = document.querySelectorAll(".option-card")
    const observerOptions = {
      threshold: 0.5,
      rootMargin: "0px 0px -100px 0px",
    }
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
        }
      })
    }, observerOptions)
  
    optionCards.forEach((card) => {
      card.style.opacity = "0"
      card.style.transform = "translateY(50px)"
      card.style.transition = "opacity 0.5s ease, transform 0.5s ease"
      observer.observe(card)
    })
  
    // Add hover effect to option cards
    optionCards.forEach((card) => {
      card.addEventListener("mouseover", () => {
        card.style.transform = "translateY(-10px) scale(1.05)"
      })
  
      card.addEventListener("mouseout", () => {
        card.style.transform = "translateY(0) scale(1)"
      })
    })
  
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
  })
  
  