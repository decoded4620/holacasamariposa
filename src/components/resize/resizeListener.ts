import { RenderFunction } from "../core/types";

export type ResizeHandler = () => void;

/**
 * Enables handling window resize. Example:
 *
 * ```
 * export default function MyComponent {
 *   // save current window width in the state object
 *   let [width, setWidth] = useState(getWindowWidth());
 *
 *  // in this case useEffect will execute only once because
 *  // it does not have any dependencies.
 *  useEffect(() => {
 *    return windowResizeEffect(() => setWidth(getWindowWidth()));
 *  }, []);
 * }
  ```
 * @param handler
 * @param timeout
 * @returns a render function for  use by a component
 */
export const windowResizeEffect = (handler: ResizeHandler, timeout = 50): RenderFunction => {
    // timeoutId for debounce mechanism
    let timeoutId: string | number | NodeJS.Timeout | undefined;
    const resizeListener = () => {
        // prevent execution of previous setTimeout
        clearTimeout(timeoutId);
        // change width from the state object after 50 milliseconds
        timeoutId = setTimeout(handler, timeout);
    };
    // set resize listener
    window.addEventListener('resize', resizeListener);

    // clean up function
    return () => {
        // remove resize listener
        window.removeEventListener('resize', resizeListener);
    }
}


export const getWindowWidth = () => window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;


export const getWindowHeight = () => window.innerHeight
  || document.documentElement.clientHeight
  || document.body.clientHeight;