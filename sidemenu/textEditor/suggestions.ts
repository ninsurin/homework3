export let Suggest = [
    {
        title: "Accept Suggestion On Enter",
        detail: "Controls whether suggestions should be accepted on Enter, in addition to Tab. Helps to avoid ambiguity between inserting new lines or accepting suggestions.width of the minimap to render at most a certain number of columns.",
        value: "On"
    },
    {
        title: "Quick Suggestions Delay",
        detail: "Controls the delay in milliseconds after which quick suggestions will show up.",
        value: 10
    },
    {
        title: "Snippet Suggestions",
        detail: "Controls whether snippets are shown with other suggestions and how they are sorted.",
        value: "inline"
    },
    {
        title: "Suggest Font Size",
        detail: "Font size for the suggest widget. When set to 0, the value of Editor: Font Size is used.",
        value: 0
    },
    {
        title: "Suggest: Insert Mode",
        detail: "Controls whether words are overwritten when accepting completions. Note that this depends on extensions opting into this feature.",
        value: "insert"
    },
    {
        title: "Suggest Line Height",
        detail: "Line height for the suggest widget. When set to 0, the value of Editor: Line Height is used. The minimum value is 8.",
        value: 0
    },
]