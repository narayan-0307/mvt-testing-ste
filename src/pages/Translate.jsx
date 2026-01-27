import React, { useEffect } from "react";

const Translate = () => {
  useEffect(() => {
    // Load Google Translate Script
    const script = document.createElement("script");
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    // Inject CSS to hide Google Translate top banner and related branding
    const styleEl = document.createElement("style");
    styleEl.type = "text/css";
    styleEl.appendChild(
      document.createTextNode(`
        .goog-te-banner-frame, .goog-te-banner-frame.skiptranslate, #goog-gt-tt, .goog-te-menu-frame, .goog-te-balloon-frame { display: none !important; }
        .goog-logo-link, .goog-te-gadget-icon, .goog-te-gadget { display: none !important; }
        body { top: 0px !important; }
        html { top: 0px !important; }
        iframe[src*="translate"] { display: none !important; }
      `),
    );
    document.head.appendChild(styleEl);

    // Observe DOM changes to hide the translate banner if it's injected later
    const hideTranslateElements = () => {
      try {
        const selectors = [
          ".goog-te-banner-frame",
          ".goog-te-banner-frame.skiptranslate",
          "#goog-gt-tt",
          ".goog-te-menu-frame",
          ".goog-te-balloon-frame",
          ".goog-logo-link",
          ".goog-te-gadget-icon",
          ".goog-te-gadget",
        ];
        selectors.forEach((s) => {
          document.querySelectorAll(s).forEach((el) => {
            el.style.display = "none";
          });
        });

        // hide any iframes that come from google translate
        document.querySelectorAll("iframe").forEach((ifr) => {
          try {
            if (
              ifr.src &&
              (ifr.src.indexOf("translate") !== -1 ||
                ifr.src.indexOf("translate.googleusercontent") !== -1)
            ) {
              ifr.style.display = "none";
            }
          } catch (e) {}
        });

        // ensure page offset reset
        document.documentElement.style.top = "0px";
        document.body.style.top = "0px";
      } catch (e) {}
    };

    // run initially
    hideTranslateElements();

    const observer = new MutationObserver(() => hideTranslateElements());
    observer.observe(document.body, { childList: true, subtree: true });
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false,
        },
        "google_translate_element",
      );
    };

    // cleanup
    return () => {
      try {
        if (script && script.parentNode) script.parentNode.removeChild(script);
      } catch (e) {}
      try {
        if (styleEl && styleEl.parentNode)
          styleEl.parentNode.removeChild(styleEl);
      } catch (e) {}
      try {
        if (observer) observer.disconnect();
      } catch (e) {}
      try {
        delete window.googleTranslateElementInit;
      } catch (e) {}
    };
  }, []);

  // Trigger language change
  const changeLanguage = (lang) => {
    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event("change"));
    }
  };

  return (
    <div style={styles.page}>
      {/* Hidden Google Element */}
      <div id="google_translate_element" style={{ display: "none" }}></div>

      {/* Custom Dropdown */}
      <div style={styles.languageBox}>
        <select onChange={(e) => changeLanguage(e.target.value)}>
          <option value="">Select Language</option>
          <option value="en">English</option>
          <option value="mr">Marathi</option>
          <option value="hi">Hindi</option>
          <option value="ur">Urdu</option>
          <option value="fr">French</option>
          <option value="es">Spanish</option>
        </select>
      </div>

      {/* Dummy Content */}
      <div style={styles.content}>
        <h1>Welcome to Our Website</h1>
        <p>This is a demo website where you can translate content.</p>

        <h2>About Us</h2>
        <p>
          We provide technology solutions including web development, AI, and
          cybersecurity services.
        </p>

        <h2>Services</h2>
        <ul>
          <li>Web Development</li>
          <li>Machine Learning</li>
          <li>Cyber Security</li>
          <li>Cloud Computing</li>
        </ul>

        <h2>Contact</h2>
        <p>Email: info@example.com</p>
      </div>
    </div>
  );
};

const styles = {
  page: {
    padding: "30px",
    fontFamily: "Arial",
  },
  languageBox: {
    marginBottom: "20px",
  },
  content: {
    background: "#f5f5f5",
    padding: "20px",
    borderRadius: "10px",
  },
};

export default Translate;
