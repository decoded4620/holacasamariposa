import { RenderFunction } from "../core/types";

export type ScrollHandler = () => void;

/**
 * Enables handling window resize. Example:
 * 
 * ```
 * export default function MyComponent {
 *   // save current window width in the state object
 *   let [scroll, setScroll] = useState(getWindowScroll());
 *
 *  // in this case useEffect will execute only once because
 *  // it does not have any dependencies.
 *  useEffect(() => {
 *    return windowScrollEffect(() => setScroll(getWindowScroll()));
 *  }, []);
 * }
  ```
 * @param handler 
 * @param timeout 
 * @returns a render function for  use by a component
 */
export const windowScrollEffect = (handler: ScrollHandler, timeout = 50): RenderFunction => {
    // timeoutId for debounce mechanism
    let timeoutId: string | number | NodeJS.Timeout | undefined;
    const scrollListener = () => {
        handler();
    };
    // set resize listener
    window.addEventListener('scroll', scrollListener);

    // clean up function
    return () => {
        // remove resize listener
        window.removeEventListener('scroll', scrollListener);
    }
}
    
export const getWindowScrollY = () => window.scrollY;
export const getWindowScrollX = () => window.scrollX;