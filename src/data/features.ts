export const cloudFiles = [
    {
        name: "GitHub",
        icon: "folder",
        status: "success"
    },
    {
        name: "electron-v1.4.13-win32-ia32.zip",
        icon: "zip",
        status: "sync"
    },
    {
        name: "start.js",
        icon: "note",
        status: "success"
    },
    {
        name: "2021-08-05 15.03.05.mp4",
        icon: "video",
        status: "success"
    },
    {
        name: "christmas-card-2017.png",
        icon: "picture",
        status: "success"
    },
    {
        name: "install.bat",
        icon: "exe",
        status: "success"
    },
    {
        name: "dQw4w9WgXcQ.mp3",
        icon: "music",
        status: "success"
    },
];
export const previewFiles = [
    {
        name: "June 2018",
        icon: "/ui/folder.png",
        items: 3,
        added: "Thursday, June 21, 2018 11:24 AM",
        modified: "Sunday, November 15, 2020 6:50 PM",
        path: "C:\\Users\\Austin\\Desktop\\June 2018"
    },
    {
        name: "waves",
        extension: "png",
        icon: "/preview-samples/waves.png",
        bitDepth: 24,
        dimensions: {
            horizontal: 1496,
            vertical: 960
        },
        dpi: {
            horizontal: 72,
            vertical: 72
        },
        added: "Sunday, August 1, 2021 12:34 AM",
        modified: "Monday, August 9, 2021 12:34 AM",
        path: "C:\\Users\\Austin\\Pictures\\waves.png"
    },
    {
        name: "index",
        extension: "html",
        icon: "/ui/note.png",
        added: "Wednesday, July 14, 2021 8:47 PM",
        modified: "Monday, July 31, 2021 4:32 AM",
        path: "C:\\Users\\Austin\\Documents\\index.html"
    },
    {
        name: "main",
        extension: "cpp",
        icon: "/ui/cpp.svg",
        added: "Monday, June 28, 2021 8:20 AM",
        modified: "Monday, July 12, 2021 1:30 PM",
        lineCount: 8,

        // Yep, this is a very ugly way to do this, but
        // PrismJS and shiki both have extremely poor
        // documentation and support for SvelteKit, and
        // I don't want to add another highlighter
        // just for something completely decorative.
        code: `<span class="macro property"><span class="directive-hash">#</span><span class="directive keyword">include</span> <span class="string">&lt;iostream&gt;</span></span>

<span class="keyword">using</span> <span class="keyword">namespace</span> std<span class="punctuation">;</span>

<span class="keyword">int</span> <span class="function">main</span><span class="punctuation">(</span><span class="punctuation">)</span>
<span class="punctuation">{</span>
cout <span class="operator">&lt;&lt;</span> <span class="string">"Hello World"</span> <span class="operator">&lt;&lt;</span> endl<span class="punctuation">;</span>
<span class="keyword">return</span> <span class="number">0</span><span class="punctuation">;</span>
<span class="punctuation">}</span>`,
        path: "C:\\Users\\Austin\\Documents\\GitHub\\\\waves.png"
    }
];
export const tags = [
    {
        name: "Blue",
        color: "#0072bd"
    },
    {
        name: "Orange",
        color: "#d95319"
    },
    {
        name: "Yellow",
        color: "#edb120"
    },
    {
        name: "Green",
        color: "#77ac30"
    },
    {
        name: "Azure",
        color: "#4dbeee"
    },
    {
        name: "Gray",
        color: "#9ea3a1"
    }
];