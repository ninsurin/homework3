export let Workbench = [
    {
        title: "Command Palette: History",
        detail: "ContrControls the number of recently used commands to keep in history for the command palette. Set to 0 to disable command history.",
        value: 50
    },
    {
        title: "Hover: Delay",
        detail: "Controls the delay in milliseconds after which the hover is shown for workbench items (ex. some extension provided tree view items). Already visible items may require a refresh before reflecting this setting change.",
        value: 500
    },
    {
        title: "List: Keyboard Navigation",
        detail: "Controls the keyboard navigation style for lists and trees in the workbench. Can be simple, highlight and filter.",
        value: "highlight"
    },
    {
        title: "List: Multi Select Modifier",
        detail: "The modifier to be used to add an item in trees and lists to a multi-selection with the mouse (for example in the explorer, open editors and scm view). The 'Open to Side' mouse gestures - if supported - will adapt such that they do not conflict with the multiselect modifier.",
        value:"ctrlCmd"
    },
    {
        title: "Panel: Default Location",
        detail: "Controls the default location of the panel (terminal, debug console, output, problems). It can either show at the bottom, right, or left of the workbench.",
        value:"bottom"
    },
    {
        title: "Panel: Opens Maximized",
        detail: "Controls whether the panel opens maximized. It can either always open maximized, never open maximized, or open to the last state it was in before being closed.",
        value:"presserve"
    },
    {
        title: "Product Icon Theme",
        detail: "Specifies the product icon theme used.",
        value:"Default"
    },
    {
        title: "Sash: Hover Delay",
        detail: "Controls the hover feedback delay in milliseconds of the dragging area in between views/editors.",
        value:300
    },
]