document.addEventListener("DOMContentLoaded", () => {
  // Animate chess pieces
  const pieces = document.querySelectorAll(".piece")
  pieces.forEach((piece) => {
    setInterval(() => {
      const x = Math.random() * 250
      const y = Math.random() * 250
      piece.style.transform = `translate(${x}px, ${y}px)`
    }, 3000)
  })

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('nav a[href^="#"]')
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const target = document.querySelector(link.getAttribute("href"))
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 60,
          behavior: "smooth",
        })
      }
    })
  })

  // Animate course cards on scroll
  const courseCards = document.querySelectorAll(".course-card")
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

  courseCards.forEach((card) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(50px)"
    card.style.transition = "opacity 0.5s ease, transform 0.5s ease"
    observer.observe(card)
  })

  // Testimonial carousel
  const testimonialCarousel = document.querySelector(".testimonial-carousel")
  let isDown = false
  let startX
  let scrollLeft

  testimonialCarousel.addEventListener("mousedown", (e) => {
    isDown = true
    startX = e.pageX - testimonialCarousel.offsetLeft
    scrollLeft = testimonialCarousel.scrollLeft
  })

  testimonialCarousel.addEventListener("mouseleave", () => {
    isDown = false
  })

  testimonialCarousel.addEventListener("mouseup", () => {
    isDown = false
  })

  testimonialCarousel.addEventListener("mousemove", (e) => {
    if (!isDown) return
    e.preventDefault()
    const x = e.pageX - testimonialCarousel.offsetLeft
    const walk = (x - startX) * 2
    testimonialCarousel.scrollLeft = scrollLeft - walk
  })
})

