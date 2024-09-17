type NavLinksProps = {
    isPhone: boolean;
};

const NavLinks: React.FC<NavLinksProps> = ({ isPhone }) => {
    const baseClass = "hover:underline px-3 py-2 rounded-md text-base font-medium";
    const blockClass = isPhone ? "block" : "inline";

    return (
        <>
            <a href="#" className={`${baseClass} ${blockClass}`}>Our Vision</a>
            <a href="#" className={`${baseClass} ${blockClass}`}>Safety</a>
            <a href="#" className={`${baseClass} ${blockClass}`}>FAQ</a>
            <a href="#" className={`${baseClass} ${blockClass}`}>Examples</a>
            {/* <a href="#" className={`${baseClass} ${blockClass}`}>Donate</a> */}
            <a href="#" className={`${baseClass} ${blockClass}`}>Request a Feature</a>
        </>
    );
};

export { NavLinks };
