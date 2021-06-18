export let Newwindow = [
    {
        title: "New Window Dimensions",
        detail: "Controls the dimensions of opening a new window when at least one window is already opened. Note that this setting does not have an impact on the first window that is opened. The first window will always restore the size and location as you left it before closing.",
        value: "default"
    },
    {
        title: "Open Files In New Window",
        detail: "Controls whether files should open in a new window. Note that there can still be cases where this setting is ignored (e.g. when using the --new-window or --reuse-window command line option).",
        value: "off"
    },
    {
        title: "Open Folders In New Window",
        detail: "Controls whether folders should open in a new window or replace the last active window. Note that there can still be cases where this setting is ignored (e.g. when using the --new-window or --reuse-window command line option).",
        value: "default"
    },
    {
        title: "Open Without Arguments In New Window",
        detail: "Controls whether a new empty window should open when starting a second instance without arguments or if the last running instance should get focus. Note that there can still be cases where this setting is ignored (e.g. when using the --new-window or --reuse-window command line option).",
        value: "on"
    },
]