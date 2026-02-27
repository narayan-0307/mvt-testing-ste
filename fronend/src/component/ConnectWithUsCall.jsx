import React, { useState, useRef, useEffect } from "react";
import { Phone, X } from "lucide-react";
import "./ConnectWithUsCall.css";

export default function ConnectWithUsCall() {
  const [open, setOpen] = useState(false);

  const contacts = [
    { country: "India", number: "+91 98331 66697" },
    { country: "UAE", number: "+971 50 954 8452" },
    { country: "Oman", number: "+968 98882797" },
    // { country: "Bangladesh", number: "+8801314968067" },
    // { country: "UK", number: "+44 1234 567 890" },
  ];

  const dial = (num) => {
    window.location.href = `tel:${num}`;
  };

  const panelRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    function onDocClick(e) {
      if (!open) return;
      const panel = panelRef.current;
      const btn = buttonRef.current;
      if (
        panel &&
        !panel.contains(e.target) &&
        btn &&
        !btn.contains(e.target)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open]);

  return (
    <div className={`call-widget ${open ? "open" : ""}`}>
      <div className="call-panel" aria-hidden={!open} ref={panelRef}>
        <div className="call-header">
          <div className="call-header-text">
            <h4>Need Assistance?</h4>
            <p className="call-sub">Call our support team directly</p>
          </div>
          <button
            className="call-close"
            onClick={() => setOpen(false)}
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        <div className="call-list">
          {contacts.map((c, i) => (
            <button
              key={i}
              className="call-item"
              onClick={() => dial(c.number)}
            >
              <div className="call-icon">
                <Phone size={18} />
              </div>
              <div className="call-text">
                <div className="call-country">{c.country}</div>
                <div className="call-number">{c.number}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <button
        ref={buttonRef}
        className="call-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Call us"
      >
        {open ? <X size={22} /> : <Phone size={22} />}
      </button>
    </div>
  );
}
