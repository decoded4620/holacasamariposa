import { IconButton } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';

/**
 * Component Properties
 */
export interface HamburgerProps {
    clickHandler: () => void
    className: string | undefined;
};

/**
 * Material based Menu Icon "Hamburger" React Component
 */
export default function Hamburger(props: HamburgerProps) {
    return <IconButton
        size="large"
        edge="start"
        aria-label="menu"
        className={props.className}
        onClick={props.clickHandler}
    >
        <MenuIcon />
    </IconButton>

}