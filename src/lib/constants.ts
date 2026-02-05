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
            title: "Welcome to Stolon!",
            description: "We are a company that offers web hosting, cloud, and support services to help your business grow. Whether you need a new website, a reliable cloud solution, or support for your existing services, we're here to help. Explore our services and see how we can help you grow your business today!"
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
            submit: "Send Message",
            title: "Contact Us",
            description: "Have questions or want to work with us? Reach out and let's connect!"
        },
        blog: {
            filter: "Filter by Tags:",
            clear_filters: "Clear Filters",
            no_posts: "💡 No posts found!",
            read_more: "Read More →",
            previous: "← Previous",
            next: "Next →",
            title: "Blog",
            description: "Welcome to the Stolon Blog! Here we share insights, tips, and stories about how Stolon can help you grow your business. Whether you're looking for advice on how to use our services or want to learn more about the latest trends in business growth, you've come to the right place. Dive in and discover how Stolon can be your partner in success!"
        }
    },
    el: {
        general: {
            name: "Stolon Ε.Ε.",
            back: "← Πίσω",
            go_home: "Πήγαινε στην Αρχική",
            title: "Καλώς ήρθατε στην Stolon!",
            description: "Είμαστε μια εταιρεία που προσφέρει υπηρεσίες φιλοξενίας ιστοσελίδων, cloud και υποστήριξης για να βοηθήσουμε την επιχείρησή σας να αναπτυχθεί. Είτε χρειάζεστε ένα νέο website, μια αξιόπιστη λύση cloud ή υποστήριξη για τις υπάρχουσες υπηρεσίες σας, είμαστε εδώ για να σας βοηθήσουμε. Εξερευνήστε τις υπηρεσίες μας και δείτε πώς μπορούμε να σας βοηθήσουμε να αναπτύξετε την επιχείρησή σας σήμερα!"
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
            submit: "Αποστολή Μηνύματος",
            title: "Επικοινωνήστε μαζί μας",
            description: "Έχετε ερωτήσεις ή θέλετε να συνεργαστείτε μαζί μας; Επικοινωνήστε μαζί μας και ελάτε να επικοινωνήσουμε!"
        },
        blog: {
            filter: "Φιλτράρισμα με ετικέτες:",
            clear_filters: "Απαλοιφή φίλτρου",
            no_posts: "💡 Δεν βρέθηκαν άρθρα!",
            read_more: "Διαβάστε Περισσότερα →",
            previous: "← Προηγούμενη",
            next: "Επόμενη →",
            title: "Blog",
            description: "Καλώς ήρθατε στο Blog του Stolon! Εδώ μοιραζόμαστε ιδέες, συμβουλές και ιστορίες για το πώς το Stolon μπορεί να σας βοηθήσει να αναπτύξετε την επιχείρησή σας. Είτε ψάχνετε για συμβουλές σχετικά με το πώς να χρησιμοποιήσετε τις υπηρεσίες μας είτε θέλετε να μάθετε περισσότερα για τις τελευταίες τάσεις στην ανάπτυξη επιχειρήσεων, είστε στο σωστό μέρος. Βουτήξτε μέσα και ανακαλύψτε πώς το Stolon μπορεί να είναι ο συνεργάτης σας στην επιτυχία!"
        }
    }
};