export let Files = [
    {
        title: "Auto Save",
        detail: "Controls auto save of dirty editors. Read more about autosave here.",
        value: "off"
    },
    {
        title: "Auto Save Delay",
        detail: "Controls the delay in ms after which a dirty editor is saved automatically. Only applies when Files: Auto Save is set to afterDelay.",
        value: 1000
    },
    {
        title: "Default Language",
        detail: "The default language mode that is assigned to new files. If configured to ${activeEditorLanguage}, will use the language mode of the currently active text editor if any.",
        value: " "
    },
    {
        title: "Encodingln",
        detail: "The default character set encoding to use when reading and writing files. This setting can also be configured per language.",
        value: "UTF-8"
    },
    {
        title: "Hot Exit",
        detail: "Controls whether unsaved files are remembered between sessions, allowing the save prompt when exiting the editor to be skipped.",
        value: "onExit"
    },
    {
        title: "Max Memory For Large Files MB",
        detail: "Controls the memory available to VS Code after restart when trying to open large files. Same effect as specifying --max-memory=NEWSIZE on the command line.",
        value: "4096"
    },
    {
        title: "Participants: Timeout",
        detail: "Timeout in milliseconds after which file participants for create, rename, and delete are cancelled. Use 0 to disable participants.",
        value: 60000
    },
]