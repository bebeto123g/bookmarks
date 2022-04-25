class Display {
    static SMALL_MOBILE = 'small-mobile';
    static MOBILE = 'mobile';
    static TABLET = 'tablet';
    static SMALL_DESKTOP = 'small-desktop';
    static DESKTOP = 'desktop';

    static BREAKPOINT = {
        [Display.MOBILE]: 500,
        [Display.TABLET]: 640,
        [Display.SMALL_DESKTOP]: 992,
        [Display.DESKTOP]: 1200,
    };

    static isMobile() {
        return window.innerWidth < Display.BREAKPOINT[Display.MOBILE];
    }

    static isSmallTablet() {
        return (
            window.innerWidth > Display.BREAKPOINT[Display.MOBILE] &&
            window.innerWidth < Display.BREAKPOINT[Display.TABLET]
        );
    }

    static isTablet() {
        return (
            window.innerWidth > Display.BREAKPOINT[Display.TABLET] &&
            window.innerWidth < Display.BREAKPOINT[Display.SMALL_DESKTOP]
        );
    }

    static isSmallDesktop() {
        return (
            window.innerWidth > Display.BREAKPOINT[Display.SMALL_DESKTOP] &&
            window.innerWidth < Display.BREAKPOINT[Display.DESKTOP]
        );
    }

    static isDesktop() {
        return window.innerWidth > Display.BREAKPOINT[Display.DESKTOP];
    }

    static getTypeDisplayWidth() {
        switch (true) {
            case Display.isMobile():
                return Display.SMALL_MOBILE;
            case Display.isSmallTablet():
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
