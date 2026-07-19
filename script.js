const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

function closeMenu() {
  navLinks.classList.remove("show");
  menuBtn.setAttribute("aria-expanded", "false");
  menuBtn.innerHTML = "☰";
}

function openMenu() {
  navLinks.classList.add("show");
  menuBtn.setAttribute("aria-expanded", "true");
  menuBtn.innerHTML = "✕";
}

menuBtn.addEventListener("click", () => {
  const expanded = menuBtn.getAttribute("aria-expanded") === "true";
  if (expanded) {
    closeMenu();
  } else {
    openMenu();
  }
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});

document.addEventListener("click", (e) => {
  if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
    closeMenu();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 760) {
    closeMenu();
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll(".role-card form");

  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const inputs = form.querySelectorAll("input");
      const empty = [...inputs].some((input) => input.value.trim() === "");

      if (empty) {
        alert("Please fill in both fields.");
        return;
      }

      alert("Login submitted successfully.");
      form.reset();
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const parentBtn = document.getElementById("parentLoginBtn");
  const studentBtn = document.getElementById("studentLoginBtn");
  const teacherBtn = document.getElementById("teacherLoginBtn");

  if (parentBtn) {
    parentBtn.addEventListener("click", () => {
      window.location.href = "parent-dashboard.html";
    });
  }

  if (studentBtn) {
    studentBtn.addEventListener("click", () => {
      alert("Student dashboard coming soon.");
    });
  }

  if (teacherBtn) {
    teacherBtn.addEventListener("click", () => {
      alert("Teacher dashboard coming soon.");
    });
  }
});
document.getElementById("linkForm").addEventListener("submit", function (e) {
  e.preventDefault();
  window.location.href = "attendance.html";
});
<form id="linkForm">
  ...
  <button type="submit">Link Child</button>
</form>

<script>
  document.getElementById("linkForm").addEventListener("submit", function(e) {
    e.preventDefault();
    window.location.href = "attendance.html";
  });
</script>
