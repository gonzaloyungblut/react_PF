import { CartWidget } from "./CartWidget";

export const NavBar = () => (
<header>
    <div> Indumentaria S.A. </div>
    <nav>
        <a href='#'>Hombres</a>
        <a href='#'>Mujeres</a>
        <a href='#'>Niños</a>
    </nav>
    <CartWidget/>
</header>
);