export let Editormanage =[
    {
        title: "Label Format",
        detail: "Controls the format of the label for an editor.",
        value: "default"
    },
    {
        title: "Limit: Value",
        detail: "Controls the maximum number of opened editors. Use the Workbench › Editor › Limit: Per Editor Group setting to control this limit per editor group or across all groups.",
        value: 10
    },
    {
        title: "Open Positioning",
        detail: "Controls where editors open. Select left or right to open editors to the left or right of the currently active one. Select first or last to open editors independently from the currently active one.",
        value: "right"
    },
    {
        title: "Open Side By Side Direction",
        detail: "Controls the default direction of editors that are opened side by side (for example, from the Explorer). By default, editors will open on the right hand side of the currently active one. If changed to down, the editors will open below the currently active one.",
        value: "right"
    },
    {
        title: "Pinned Tab Sizing",
        detail: "Controls the sizing of pinned editor tabs. Pinned tabs are sorted to the beginning of all opened tabs and typically do not close until unpinned. This value is ignored when Workbench › Editor: Show Tabs is disabled.",
        value: "normal"
    },
    {
        title: "Tab Close Button",
        detail: "Controls the position of the editor's tabs close buttons, or disables them when set to 'off'. This value is ignored when Workbench › Editor: Show Tabs is disabled.",
        value: "right"
    },
    {
        title: "Tab Sizing",
        detail: "Controls the sizing of editor tabs. This value is ignored when Workbench › Editor: Show Tabs is disabled.",
        value: "fit"
    },
]