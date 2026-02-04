export const languages=[
    {key:"af",name:"Afrikaans"},
    {key:"ar",name:"Arabic"},
    {key:"be",name:"Belarusian"},
    {key:"bg",name:"Bulgarian"},
    {key:"bs",name:"Bosnian"},
    {key:"ca",name:"Catalan"},
    {key:"cs",name:"Czech"},
    {key:"cy",name:"Welsh"},
    {key:"da",name:"Danish"},
    {key:"de",name:"German"},
    {key:"el",name:"Ελληνικά"},
    {key:"en",name:"English"},
    {key:"fa",name:"Persian"},
    {key:"fi",name:"Finnish"},
    {key:"fr",name:"French"},
    {key:"he",name:"Hebrew"},
    {key:"hi",name:"Hindi"},
    {key:"hu",name:"Hungarian"},
    {key:"hy-am",name:"Armenian"},
    {key:"id",name:"Indonesian"},
    {key:"is",name:"Icelandic"},
    {key:"it",name:"Italian"},
    {key:"ja",name:"Japanese"},
    {key:"ka",name:"Georgian"},
    {key:"kk",name:"Kazakh"},
    {key:"km",name:"Cambodian"},
    {key:"ko",name:"Korean"},
    {key:"lo",name:"Lao"},
    {key:"lt",name:"Lithuanian"},
    {key:"lv",name:"Latvian"},
    {key:"mk",name:"Macedonian"},
    {key:"mn",name:"Mongolian"},
    {key:"ms",name:"Malay"},
    {key:"my",name:"Burmese"},
    {key:"ne",name:"Nepalese"},
    {key:"nl",name:"Dutch"},
    {key:"pl",name:"Polish"},
    {key:"pt",name:"Portuguese"},
    {key:"ro",name:"Romanian"},
    {key:"ru",name:"Russian"},
    {key:"sk",name:"Slovak"},
    {key:"sl",name:"Slovenian"},
    {key:"sq",name:"Albanian"},
    {key:"sv",name:"Swedish"},
    {key:"th",name:"Thai"},
    {key:"tl-ph",name:"Tagalog (Philippines)"},
    {key:"tr",name:"Turkish"},
    {key:"uk",name:"Ukrainian"},
    {key:"ur",name:"Urdu"},
    {key:"uz",name:"Uzbek"},
    {key:"vi",name:"Vietnamese"},
    {key:"zh",name:"Chinese"},
    {key:"es",name:"Spanish"},
    {key:"et",name:"Estonian"}
];

type Translations = {
    [language: string]: {
        [category: string]: {
            [key: string]: string;
        }
    }
}

export const translations: Translations = {
    en: {
        general: {
            name: "Stolon L.P.",
            back: "← Back",
            go_home: "Go Home",
        },
        sidebar: {
            theme_light: "Dark mode",
            theme_dark: "Light mode"
        },
        cards: {
            title: "Offers",
            website_title: "Build your own site",
            website_price_label: "Only for",
            nextcloud_title: "Still on Microsoft 365?",
            nextcloud_price_label: "Join now for",
            per_month: "/month"
        },
        chat: {
            greeting: "My name is Stolonas, which is a horizontal sprout that helps other plants grow. I can help you grow your business in many amazing ways!",
            placeholder: "Ask me what I can do!",
            placeholder2: "What else do you need?",
            new_chat: "New Chat / Clear History",
            dictate: "Dictate",
            voice: "Use voice",
            ai_name: "Stolonas",
            user_name: "Me",
        },
        contact: {
            logo_area: "Get in Touch",
            subtitle: "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
            name: "Name *",
            email: "Email *",
            subject:"Subject",
            message: "Message *",
            submit: "Send Message"
        },
        blog: {
            filter: "Filter by Tags:",
            clear_filters: "Clear Filters",
            no_posts: "💡 No posts found!",
            read_more: "Read More →",
            previous: "← Previous",
            next: "Next →"
        }
    },
    el: {
        general: {
            name: "Stolon Ε.Ε.",
            back: "← Πίσω",
            go_home: "Πήγαινε στην Αρχική",
        },
        sidebar: {
            theme_light: "Σκούρο θέμα",
            theme_dark: "Φωτεινό θέμα"
        },
        cards: {
            title: "Προσφορές",
            website_title: "Φτιάξε το δικό σου site",
            website_price_label: "Μόνο με",
            nextcloud_title: "Άκομα είσαι στην Microsoft 365;",
            nextcloud_price_label: "Μπες τώρα με",
            per_month: "/μήνα"
        },
        chat: {
            greeting: "Είμαι ο Στόλωνας, ένας οριζόντιος βλαστός που βοηθά άλλα φυτά να αναπτυχθούν. Μπορώ να σας βοηθήσω να αναπτύξετε την επιχείρηση σας με πολλούς απίστευτους τρόπους!",
            placeholder: "Ρώτα με τι μπορώ να κάνω!",
            placeholder2: "Tι άλλο χρειάζεσαι;",
            new_chat: "Νέα Συνομιλία / Καθαρισμός Ιστορικού",
            dictate: "Υπαγόρευση",
            voice: "Χρήση φωνής",
            ai_name: "Στόλωνας",
            user_name: "Εγώ",
        },
        contact:{
            logo_area: "Επικοινωνήστε μαζί μας",
            subtitle: "Θα χαρούμε να σας ακούσουμε. Στείλτε μας ένα μήνυμα και θα σας απαντήσουμε το συντομότερο δυνατό.",
            name: "Όνομα *",
            email: "Email *",
            subject:"Θέμα",
            message: "Μήνυμα *",
            submit: "Αποστολή Μηνύματος"
        },
        blog: {
            filter: "Φιλτράρισμα με ετικέτες:",
            clear_filters: "Απαλοιφή φίλτρου",
            no_posts: "💡 Δεν βρέθηκαν άρθρα!",
            read_more: "Διαβάστε Περισσότερα →",
            previous: "← Προηγούμενη",
            next: "Επόμενη →"
        }
    }
};