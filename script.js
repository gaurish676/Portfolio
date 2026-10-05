/**
 * Gaurish Bangera Portfolio Scripts
 * Interactive Terminal, Project Filter, Scroll Spy & Mail Integration
 */

document.addEventListener('DOMContentLoaded', () => {
  initProjectFiltering();
  initTerminal();
  initCopyEmail();
  initMobileNav();
  initScrollSpy();
});

/* ==========================================================================
   Project Category Filtering
   ========================================================================== */
function initProjectFiltering() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category') || '';
        if (filter === 'all' || categories.includes(filter)) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
            card.style.opacity = '1';
          }, 10);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   Interactive Terminal & Parser Demo
   ========================================================================== */
const terminalCommands = {
  help: () => `
    Available commands:<br>
    &nbsp;&nbsp;• <span class="term-cmd">skills</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Print full technical stack & languages<br>
    &nbsp;&nbsp;• <span class="term-cmd">parser</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Simulate SLR(1) Compiler state machine execution<br>
    &nbsp;&nbsp;• <span class="term-cmd">projects</span> &nbsp;&nbsp;&nbsp;&nbsp;- List featured architectures & systems<br>
    &nbsp;&nbsp;• <span class="term-cmd">experience</span> &nbsp;&nbsp;- Academic research (NITK) & industry history<br>
    &nbsp;&nbsp;• <span class="term-cmd">contact</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Get email, phone, LinkedIn & GitHub<br>
    &nbsp;&nbsp;• <span class="term-cmd">resume</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Open / download official resume PDF<br>
    &nbsp;&nbsp;• <span class="term-cmd">clear</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Clear the console output
  `,

  skills: () => `
    <span class="term-highlight">Languages:</span> C++, Python, Go (Golang), Java, C, TypeScript, JavaScript, SQL<br>
    <span class="term-highlight">Web & Backend:</span> React, Node.js, Clean Architecture, REST APIs, HTML5/CSS3<br>
    <span class="term-highlight">Databases & Tools:</span> PostgreSQL, MySQL, Git/GitHub, Linux/Bash, XAMPP<br>
    <span class="term-highlight">Core CS:</span> Data Structures & Algorithms, Compiler Design (SLR/LR), Machine Learning
  `,

  parser: () => `
    <span style="color:#818cf8;">[SLR(1) Execution Engine Simulator]</span><br>
    1. Lexical Tokenizer &nbsp;&nbsp;&nbsp;→ [Tokens: 'IF', '(', 'x', '>', '0', ')', '{', 'y', '=', 'x', '*', '2', '}']<br>
    2. Grammar Context &nbsp;&nbsp;&nbsp;&nbsp;→ Computing FIRST() & FOLLOW() closures... OK (No conflicts)<br>
    3. LR(0) State Machine&nbsp;&nbsp;→ Generated 18 States. Constructed ACTION & GOTO parsing tables.<br>
    4. Shift/Reduce Engine&nbsp;&nbsp;→ Shift state 4, Shift state 7, Reduce by E -> E * T... Accept!<br>
    <span style="color:#10b981;">✓ Syntax parsed deterministically with 0 shift/reduce conflicts. Abstract Syntax Tree built.</span>
  `,

  projects: () => `
    1. <span class="term-highlight">Intelligent Contact Management System</span> (Go, React, TypeScript, PostgreSQL)<br>
    2. <span class="term-highlight">SLR(1) Compiler for Hypothetical Language</span> (Python, LR Parser, Grammar)<br>
    3. <span class="term-highlight">RGB-T Thermal-Visible Vision Portal</span> (NITK Research Platform)<br>
    4. <span class="term-highlight">Smart Insurance Cost Prediction</span> (Python, Scikit-Learn Regression Pipeline)<br>
    5. <span class="term-highlight">Interactive Quiz & Assessment System</span> (JavaScript, MySQL, Admin Analytics)
  `,

  experience: () => `
    • <span class="term-highlight">NITK Research Intern (2026):</span> RGB-T Vision Portal for multi-modal thermal/visible datasets.<br>
    • <span class="term-highlight">NativeSoftTech Web Dev Intern (2025):</span> Client-facing UI components, modern HTML5/CSS3/JS.<br>
    • <span class="term-highlight">CodSoft Data Science Intern (2025):</span> Exploratory data analysis & predictive ML modeling.
  `,

  contact: () => `
    Email: <a href="mailto:gaurishbangera8970@gmail.com" style="color:#38bdf8;">gaurishbangera8970@gmail.com</a><br>
    Phone: +91 7204348970 | Location: Mangalore, Karnataka, India<br>
    GitHub: <a href="https://github.com/gaurish676" target="_blank" style="color:#818cf8;">github.com/gaurish676</a><br>
    LinkedIn: <a href="https://linkedin.com/in/gaurish-bangera191a8831b" target="_blank" style="color:#818cf8;">linkedin.com/in/gaurish-bangera191a8831b</a>
  `,

  resume: () => {
    window.open('Gaurish_Bangera_NNM23CS078.pdf', '_blank');
    return 'Opening resume PDF in a new tab...';
  },

  welcome: () => `
    Welcome to Gaurish Bangera's portfolio console. Type <span class="term-cmd">help</span> to begin.
  `
};

let cmdHistory = [];
let historyIndex = -1;

function initTerminal() {
  const terminalInput = document.getElementById('terminalInput');
  const terminalOutput = document.getElementById('terminalOutput');
  const terminalSubmit = document.getElementById('terminalSubmit');
  const terminalClearBtn = document.getElementById('terminalClearBtn');

  if (!terminalInput) return;

  function runInput() {
    const rawVal = terminalInput.value.trim();
    if (!rawVal) return;
    executeCmd(rawVal);
    terminalInput.value = '';
  }

  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      runInput();
    } else if (e.key === 'ArrowUp') {
      if (cmdHistory.length > 0 && historyIndex < cmdHistory.length - 1) {
        historyIndex++;
        terminalInput.value = cmdHistory[cmdHistory.length - 1 - historyIndex];
      }
    } else if (e.key === 'ArrowDown') {
      if (historyIndex > 0) {
        historyIndex--;
        terminalInput.value = cmdHistory[cmdHistory.length - 1 - historyIndex];
      } else if (historyIndex === 0) {
        historyIndex = -1;
        terminalInput.value = '';
      }
    }
  });

  if (terminalSubmit) {
    terminalSubmit.addEventListener('click', runInput);
  }

  if (terminalClearBtn) {
    terminalClearBtn.addEventListener('click', () => {
      terminalOutput.innerHTML = '';
    });
  }
}

function executeCmd(cmdText) {
  const terminalOutput = document.getElementById('terminalOutput');
  const cleanCmd = cmdText.trim().toLowerCase();

  cmdHistory.push(cleanCmd);
  historyIndex = -1;

  // Append user command line
  const cmdLine = document.createElement('div');
  cmdLine.className = 'term-line';
  cmdLine.innerHTML = `<span class="term-prompt">gaurish@nmamit:~$</span> <span class="term-highlight">${escapeHTML(cmdText)}</span>`;
  terminalOutput.appendChild(cmdLine);

  // Check command
  if (cleanCmd === 'clear') {
    terminalOutput.innerHTML = '';
    return;
  }

  const responseLine = document.createElement('div');
  responseLine.className = 'term-line term-response';

  if (terminalCommands[cleanCmd]) {
    const result = terminalCommands[cleanCmd]();
    responseLine.innerHTML = result;
  } else {
    responseLine.innerHTML = `Command not recognized: <span style="color:#ef4444;">${escapeHTML(cleanCmd)}</span>. Type <span class="term-cmd">help</span> for a list of commands.`;
  }

  terminalOutput.appendChild(responseLine);
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

window.runCompilerDemo = function() {
  const terminalSection = document.getElementById('terminal');
  if (terminalSection) {
    terminalSection.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      executeCmd('parser');
    }, 600);
  }
};

/* ==========================================================================
   Email Copy & Notification
   ========================================================================== */
function initCopyEmail() {
  const copyBtn = document.getElementById('copyEmailBtn');
  const copyText = document.getElementById('copyText');
  const toast = document.getElementById('toastNotification');

  if (!copyBtn) return;

  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText('gaurishbangera8970@gmail.com').then(() => {
      copyText.textContent = 'Copied!';
      showToast('Email address copied to clipboard!');
      setTimeout(() => {
        copyText.textContent = 'Copy';
      }, 2000);
    }).catch(() => {
      showToast('Failed to copy. Please manually copy email.');
    });
  });
}

function showToast(msg) {
  const toast = document.getElementById('toastNotification');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

/* ==========================================================================
   Contact Form Submission (Mailto)
   ========================================================================== */
window.handleFormSubmit = function(e) {
  e.preventDefault();
  const name = document.getElementById('senderName').value;
  const email = document.getElementById('senderEmail').value;
  const subject = document.getElementById('messageSubject').value;
  const body = document.getElementById('messageBody').value;

  const mailtoUri = `mailto:gaurishbangera8970@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${body}`)}`;
  window.location.href = mailtoUri;
};

/* ==========================================================================
   Mobile Nav Toggle & Scroll Spy
   ========================================================================== */
function initMobileNav() {
  const toggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (!toggle || !navMenu) return;

  toggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });

  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
    });
  });
}

function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}
