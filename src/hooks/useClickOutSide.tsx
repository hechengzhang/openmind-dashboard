import { RefObject, useEffect } from 'react';

/**
 * useClickOutSide hook
 * Calls the handler function when a click is detected outside the specified element.
 *
 * @param {object} ref - The ref object attached to the element.
 * @param {function} handler - Function to call on click outside.
 */
const useClickOutSide = (ref: RefObject<HTMLElement>, handler: () => void) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, handler]);
};

export default useClickOutSide;
