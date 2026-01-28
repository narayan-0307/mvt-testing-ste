import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import "./ConnectWithUsWhatsapp.css";

// WhatsApp Icon Component
const WhatsAppIcon = ({ size = 22 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export default function ConnectWithUs() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false); // keep mounted for close animation
  const panelRef = useRef(null);
  const buttonRef = useRef(null);

  const openWidget = () => {
    setMounted(true);
    // allow mount then open to trigger animation
    requestAnimationFrame(() => setIsOpen(true));
  };

  const closeWidget = () => {
    setIsOpen(false);
    // wait for animation then unmount
    setTimeout(() => setMounted(false), 260);
  };

  const toggleWidget = () => {
    if (isOpen) closeWidget();
    else openWidget();
  };

  // Multiple WhatsApp contacts for different countries
  const whatsappContacts = [
    { country: "India", number: "+91 98331 66697" },
    { country: "UAE", number: "+971 50 954 8452" },
    { country: "Oman", number: "+968 98882797" },
    // { country: "Bangladesh", number: "+8801314968067" },
    // { country: "UK", number: "+447557070702" },
  ];

  // We only display per-country WhatsApp contacts now

  const handleContactClick = (option) => {
    if (option.type === "whatsapp") {
      const cleanNumber = option.number.replace(/[^\d]/g, "");
      window.open(`https://wa.me/${cleanNumber}`, "_blank");
    } else if (option.type === "whatsapp-group") {
      // noop for group header, handled by per-country buttons
      return;
    } else if (option.type === "phone") {
      window.location.href = `tel:${option.number}`;
    } else if (option.type === "email") {
      window.location.href = `mailto:${option.email}`;
    }
  };

  // close when clicking outside panel/button
  useEffect(() => {
    function onDocClick(e) {
      if (!mounted) return;
      const panel = panelRef.current;
      const btn = buttonRef.current;
      if (
        panel &&
        !panel.contains(e.target) &&
        btn &&
        !btn.contains(e.target)
      ) {
        closeWidget();
      }
    }

    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [mounted, isOpen]);

  return (
    <>
      {/* Floating Button */}
      <div className="connect-widget-container">
        {!isOpen && (
          <div className="connect-widget-prompt">Need Help? Chat with us</div>
        )}

        <button
          ref={buttonRef}
          className={`connect-widget-button ${isOpen ? "open" : ""}`}
          onClick={toggleWidget}
          aria-label="Get in touch"
        >
          {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
        </button>
      </div>

      {/* Contact Options Panel */}
      {mounted && (
        <div
          className={`connect-widget-panel ${isOpen ? "open" : "closed"}`}
          ref={panelRef}
        >
          <div className="connect-widget-header">
            <MessageCircle size={24} />
            <div>
              <h3>Start a Conversation</h3>
              <p>Hi! Click one of our members below</p>
            </div>
          </div>

          <div className="connect-widget-options">
            <div className="whatsapp-country-list">
              {whatsappContacts.map((c, ci) => (
                <button
                  key={ci}
                  className="connect-option-item whatsapp-country"
                  onClick={() =>
                    handleContactClick({ type: "whatsapp", number: c.number })
                  }
                >
                  <div className="option-icon small">
                    <WhatsAppIcon size={18} />
                  </div>
                  <div className="option-label">
                    {c.country}
                    <span className="option-detail">{c.number}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
