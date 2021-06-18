export let Terminal = [
    {
        title: "Explorer Kind",
        detail: "Customizes what kind of terminal to launch.",
        value: "intergrated"
    },
    {
        title: "External: Linux Exec",
        detail: "Customizes which terminal to run on Linux.",
        value: "xterm"
    },
    {
        title: "External: Osx Exec",
        detail: "Customizes which terminal application to run on macOS.",
        value: "Terminal.app"
    },
    {
        title: "Integrated: Bell Duration",
        detail: "The number of milliseconds to show the bell within a terminal tab when triggered.",
        value: 1000
    },
    {
        title: "Integrated: Cursor Style",
        detail: "Controls the style of terminal cursor.",
        value: "block"
    },
    {
        title: "Integrated: Cursor Width",
        detail: "Controls the width of the cursor when Terminal › Integrated: Cursor Style is set to line.",
        value: 1
    },
    {
        title: "Integrated › Default Profile: Windows",
        detail: "The default profile used on Windows. This setting will currently be ignored if either Terminal › Integrated › Shell: Windows or Terminal › Integrated › Shell Args: Windows are set.",
        value: "PowerShell"
    },
    {
        title: "Integrated: Detect Locale",
        detail: "Controls whether to detect and set the $LANG environment variable to a UTF-8 compliant option since VS Code's terminal only supports UTF-8 encoded data coming from the shell.",
        value: "auto"
    },
]