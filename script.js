document.addEventListener("DOMContentLoaded", () => {
    console.log("Hello, World! Theme Loaded Successfully");

    // Cursor effect
    const cursor = document.querySelector(".cursor");

    document.addEventListener("mousemove", (e) => {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });
});
