class Display {
    static SMALL_MOBILE = 'small-mobile';
    static MOBILE = 'mobile';
    static TABLET = 'tablet';
    static SMALL_DESKTOP = 'small-desktop';
    static DESKTOP = 'desktop';

    static BREAKPOINT = {
        [Display.MOBILE]: 576,
        [Display.TABLET]: 768,
        [Display.SMALL_DESKTOP]: 992,
        [Display.DESKTOP]: 1200,
    };

    static isSmallMobile() {
        return window.innerWidth < Display.BREAKPOINT[Display.MOBILE];
    }

    static isMobile() {
        return (
            window.innerWidth >= Display.BREAKPOINT[Display.MOBILE] &&
            window.innerWidth < Display.BREAKPOINT[Display.TABLET]
        );
    }

    static isTablet() {
        return (
            window.innerWidth >= Display.BREAKPOINT[Display.TABLET] &&
            window.innerWidth < Display.BREAKPOINT[Display.SMALL_DESKTOP]
        );
    }

    static isSmallDesktop() {
        return (
            window.innerWidth >= Display.BREAKPOINT[Display.SMALL_DESKTOP] &&
            window.innerWidth < Display.BREAKPOINT[Display.DESKTOP]
        );
    }

    static isDesktop() {
        return window.innerWidth >= Display.BREAKPOINT[Display.DESKTOP];
    }

    static getTypeDisplayWidth() {
        switch (true) {
            case Display.isSmallMobile():
                return Display.SMALL_MOBILE;
            case Display.isMobile():
                return Display.MOBILE;
            case Display.isTablet():
                return Display.TABLET;
            case Display.isSmallDesktop():
                return Display.SMALL_DESKTOP;
            case Display.isDesktop():
                return Display.DESKTOP;
            default:
                return false;
        }
    }

    static isMinWidthBreakpoint(display) {
        return window.innerWidth < Display.BREAKPOINT[display];
    }

    static isMaxWidthBreakpoint(display) {
        return window.innerWidth > Display.BREAKPOINT[display];
    }
}
