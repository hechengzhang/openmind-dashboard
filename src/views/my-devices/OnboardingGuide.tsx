import React, { useState, useLayoutEffect, useEffect } from "react";
import CloseSvg from "@/assets/images/common/close.svg?react";

const steps = [
  {
    selector: ".link-device-btn",
    title: "Quick Guide",
    content:
      "Everyday spaces change constantly. Your phone can capture the signals and landmarks that teach robots how to navigate and search places safely. Explore with the app, earn points, and help build a living map for machines.",
    position: "bottom-left",
  },
  {
    selector: ".device-list",
    title: "Quick Guide",
    content: "2",
    position: "bottom-left",
  },
  {
    selector: ".sidebar",
    title: "Quick Guide",
    content: "3",
    position: "bottom-left",
  },
];

function getPopupPosition(
  rect: DOMRect,
  position: string,
  popupWidth = 440,
  popupHeight = 120
) {
  const scrollX = window.scrollX;
  const scrollY = window.scrollY;

  switch (position) {
    case "top-center":
      return {
        top: rect.top + scrollY - popupHeight - 20,
        left: rect.left + scrollX + rect.width / 2 - popupWidth / 2,
      };
    case "bottom-center":
      return {
        top: rect.bottom + scrollY + 20,
        left: rect.left + scrollX + rect.width / 2 - popupWidth / 2,
      };
    case "bottom-left":
      return {
        top: rect.bottom + scrollY + 20,
        left: rect.left + scrollX + rect.width / 2 - 360,
      };
    case "right-center":
      return {
        top: rect.top + scrollY + rect.height / 2 - popupHeight / 2,
        left: rect.right + scrollX + 20,
      };
    case "left-center":
      return {
        top: rect.top + scrollY + rect.height / 2 - popupHeight / 2,
        left: rect.left + scrollX - popupWidth - 20,
      };
    default:
      return {
        top: rect.bottom + scrollY + 10,
        left: rect.left + scrollX + rect.width / 2 - popupWidth / 2,
      };
  }
}

export default function OnboardingGuide() {
  const [stepIndex, setStepIndex] = useState(0);
  const [targetRect, setTargetRect] = useState<DOMRect | null>(null);
  const [showGuide, setShowGuide] = useState(false);
  const current = steps[stepIndex];

  useEffect(() => {
    //?resetOnboarding 
    if (window.location.search.includes("resetOnboarding")) {
      localStorage.removeItem("hasSeenOnboarding");
    }
    const hasSeen = localStorage.getItem("hasSeenOnboarding");
    if (!hasSeen) {
      setShowGuide(true);
    }
  }, []);

  useLayoutEffect(() => {
    if (!showGuide || !current?.selector) return;

    const updateRect = () => {
      const el = document.querySelector(current.selector);
      if (el) setTargetRect(el.getBoundingClientRect());
    };
    updateRect();

    const el = document.querySelector(current.selector);
    if (!el) return;

    window.addEventListener("resize", updateRect);
    window.addEventListener("scroll", updateRect, true);

    const ro = new ResizeObserver(updateRect);
    ro.observe(el);

    return () => {
      window.removeEventListener("resize", updateRect);
      window.removeEventListener("scroll", updateRect, true);
      ro.disconnect();
    };
  }, [stepIndex, current?.selector, showGuide]);

  if (stepIndex < 0 || stepIndex >= steps.length) return null;

  const { top, left } = targetRect
    ? getPopupPosition(targetRect, current.position || "bottom-center")
    : { top: 0, left: 0 };

  const closeGuide = () => {
    localStorage.setItem("hasSeenOnboarding", "true");
    setShowGuide(false);
  };

  const nextStep = () => {
    if (stepIndex < steps.length - 1) {
      setStepIndex(stepIndex + 1);
    } else {
      closeGuide();
    }
  };

  return showGuide && targetRect ? (
    <>
      <div className="fixed inset-0 z-[990]" />
      <div
        className="fixed rounded-[100px] z-[10]"
        style={{
          top: targetRect.top - 9 + window.scrollY,
          left: targetRect.left - 9 + window.scrollX,
          width: targetRect.width + 18,
          height: targetRect.height + 18,
          boxShadow: "0 0 0 9999px rgba(0, 0, 0, 0.4)",
        }}
      />
      <div
        className="fixed w-[440px] bg-white px-[20px] py-[12px] rounded-[20px] shadow-lg z-[999]"
        style={{ top, left }}
      >
        <div className="flex justify-between items-start">
          <h4 className="font-primary font-[700] text-[16px] text-primary">
            {current.title}
          </h4>
          <div onClick={closeGuide} className="cursor-pointer">
            <CloseSvg />
          </div>
        </div>
        <p className="my-[10px] text-[12px] text-secondary leading-[150%]">
          {current.content}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-[14px] leading-[20px] font-[500] text-[#747779]">
            {stepIndex + 1} / {steps.length}
          </span>
          <div
            onClick={nextStep}
            className="font-primary bg-primary text-white rounded-[100px] px-[24px] py-[10px] text-[14px] leading-[16px] cursor-pointer"
          >
            {stepIndex < steps.length - 1 ? "Next" : "Finish"}
          </div>
        </div>
      </div>
    </>
  ) : null;
}

