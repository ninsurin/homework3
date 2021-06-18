export let TextEditor = [
    {
        title: "Accessibility Page Size",
        detail: "Controls the number of lines in the editor that can be read out by a screen reader at once. When we detect a screen reader we automatically set the default to be 500. Warning: this has a performance implication for numbers larger than the default.",
        value: 10
    },
    {
        title: "Accessibility Support",
        detail: "Controls whether the editor should run in a mode where it is optimized for screen readers. Setting to on will disable word wrapping.",
        value: "auto"
    },
    {
        title: "Auto Closing Brackets",
        detail: "Controls whether the editor should automatically close brackets after the user adds an opening bracket.",
        value: "languageDefind"
    },
    {
        title: "Auto Closing Delete",
        detail: "Controls whether the editor should remove adjacent closing quotes or brackets when deleting.",
        value: "auto"
    },
    {
        title: "Auto Closing Overtype",
        detail: "Controls whether the editor should type over closing quotes or brackets.",
        value: "auto"
    },
]