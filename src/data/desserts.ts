export interface Dessert {
    name: string;
    description: string;
    emoji: string;
    cuisine: 'Turkish' | 'Kurdish';
    id: string;
}

export const desserts: Dessert[] = [
    // Turkish Desserts
    {
        name: "Baklava",
        description: "Cevizli, şerbetli geleneksel tatlı",
        emoji: "🥮",
        cuisine: "Turkish",
        id: "baklava"
    },
    {
        name: "Kadayıf",
        description: "Tel kadayıf, fıstıklı, şerbetli",
        emoji: "🍬",
        cuisine: "Turkish",
        id: "kadayıf"
    },
    {
        name: "Sütlaç",
        description: "Fırında pişmiş pirinçli süt tatlısı",
        emoji: "🍚",
        cuisine: "Turkish",
        id: "sutlac"
    },
    {
        name: "Kazandibi",
        description: "Kazanda pişmiş, yanmış süt tatlısı",
        emoji: "🍮",
        cuisine: "Turkish",
        id: "kazandibi"
    },
    {
        name: "Revani",
        description: "İrmikli, şerbetli semolina tatlısı",
        emoji: "🍰",
        cuisine: "Turkish",
        id: "revani"
    },
    {
        name: "Lokma",
        description: "Şerbetli, kızarmış hamur tatlısı",
        emoji: "🍩",
        cuisine: "Turkish",
        id: "lokma"
    },
    {
        name: "Halva",
        description: "Susamlı, şekerli geleneksel tatlı",
        emoji: "🍬",
        cuisine: "Turkish",
        id: "halva"
    },
    {
        name: "Kemalpaşa",
        description: "Fıstıklı, şerbetli tatlı",
        emoji: "🥧",
        cuisine: "Turkish",
        id: "kemalpasa"
    },
    {
        name: "Tulumba",
        description: "Şerbetli, kızarmış hamur tatlısı",
        emoji: "🍩",
        cuisine: "Turkish",
        id: "tulumba"
    },
    {
        name: "Şekerpare",
        description: "İrmikli, şerbetli kurabiye",
        emoji: "🍪",
        cuisine: "Turkish",
        id: "sekerpare"
    },
    {
        name: "Künefe",
        description: "Peynirli, şerbetli kadayıf tatlısı",
        emoji: "🥮",
        cuisine: "Turkish",
        id: "kunefe"
    },
    {
        name: "Aşure",
        description: "Nuh'un gemisinden kalan tatlı",
        emoji: "🥣",
        cuisine: "Turkish",
        id: "asure"
    },
    {
        name: "Tavuk Göğsü",
        description: "Şerbetli, tavuk göğsü tatlısı",
        emoji: "🍗",
        cuisine: "Turkish",
        id: "tavuk-gogsu"
    },
    {
        name: "Kabak Tatlısı",
        description: "Şerbetli, fırın kabak tatlısı",
        emoji: "🎃",
        cuisine: "Turkish",
        id: "kabak-tatlisi"
    },
    {
        name: "Dondurma",
        description: "Maraş usulü, salep dondurması",
        emoji: "🍦",
        cuisine: "Turkish",
        id: "dondurma"
    },
    {
        name: "Burma Kadayıf",
        description: "Sarılmış kadayıf, fıstıklı tatlı",
        emoji: "🥮",
        cuisine: "Turkish",
        id: "burma-kadayif"
    },
    {
        name: "Fıstık Ezmesi",
        description: "Öğütülmüş fıstık ezmesi",
        emoji: "🥜",
        cuisine: "Turkish",
        id: "fistik-ezmesi"
    },
    {
        name: "Pekmez",
        description: "Üzüm pekmezi, tahin ile",
        emoji: "🍯",
        cuisine: "Turkish",
        id: "pekmez"
    },
    {
        name: "Cezerye",
        description: "Şerbetli, cevizli meyve tatlısı",
        emoji: "🍬",
        cuisine: "Turkish",
        id: "cezerye"
    },
    {
        name: "Hoşaf",
        description: "Kuru meyveli komposto",
        emoji: "🍇",
        cuisine: "Turkish",
        id: "hosaf"
    },
    // Kurdish Desserts
    {
        name: "Halva",
        description: "Kürt usulü susam helvası",
        emoji: "🍬",
        cuisine: "Kurdish",
        id: "kurdish-halva"
    },
    {
        name: "Chak-Chak",
        description: "Kızarmış hamur, bal ile tatlı",
        emoji: "🍯",
        cuisine: "Kurdish",
        id: "chak-chak"
    },
    {
        name: "Baklava",
        description: "Kürt baklavası, fıstıklı",
        emoji: "🥮",
        cuisine: "Kurdish",
        id: "kurdish-baklava"
    },
    {
        name: "Chak-Chak Halva",
        description: "Chak-Chak ile karıştırılmış helva",
        emoji: "🍬",
        cuisine: "Kurdish",
        id: "chak-chak-halva"
    },
    {
        name: "Kürt Helvası",
        description: "Geleneksel Kürt helva tarifi",
        emoji: "🍬",
        cuisine: "Kurdish",
        id: "kurt-helvasi"
    },
    {
        name: "Bal Halvası",
        description: "Ballı Kürt helvası",
        emoji: "🍯",
        cuisine: "Kurdish",
        id: "bal-halvasi"
    },
    {
        name: "Fıstık Helvası",
        description: "Fıstıklı Kürt helvası",
        emoji: "🥜",
        cuisine: "Kurdish",
        id: "fistik-halvasi"
    },
    {
        name: "Kürt Baklavası",
        description: "Geleneksel Kürt baklava tarifi",
        emoji: "🥮",
        cuisine: "Kurdish",
        id: "kurt-baklavasi"
    },
    {
        name: "Chak-Chak Tatlısı",
        description: "Kürt chak-chak tatlısı",
        emoji: "🍯",
        cuisine: "Kurdish",
        id: "chak-chak-tatlisi"
    },
    {
        name: "Kürt Kadayıfı",
        description: "Kürt usulü kadayıf tatlısı",
        emoji: "🍬",
        cuisine: "Kurdish",
        id: "kurt-kadayifi"
    },
    {
        name: "Bal Tatlısı",
        description: "Ballı Kürt tatlısı",
        emoji: "🍯",
        cuisine: "Kurdish",
        id: "bal-tatlisi"
    },
    {
        name: "Fıstık Tatlısı",
        description: "Fıstıklı Kürt tatlısı",
        emoji: "🥜",
        cuisine: "Kurdish",
        id: "fistik-tatlisi"
    },
    {
        name: "Kürt Sütlacı",
        description: "Kürt usulü sütlaç",
        emoji: "🍚",
        cuisine: "Kurdish",
        id: "kurt-sutlaci"
    },
    {
        name: "Chak-Chak Ezmesi",
        description: "Chak-Chak ezmesi",
        emoji: "🍯",
        cuisine: "Kurdish",
        id: "chak-chak-ezmesi"
    },
    {
        name: "Kürt Lokumu",
        description: "Geleneksel Kürt lokumu",
        emoji: "🍬",
        cuisine: "Kurdish",
        id: "kurt-lokumu"
    },
    {
        name: "Bal Şerbeti",
        description: "Ballı Kürt şerbeti",
        emoji: "🍯",
        cuisine: "Kurdish",
        id: "bal-serbeti"
    },
    {
        name: "Fıstık Şerbeti",
        description: "Fıstıklı Kürt şerbeti",
        emoji: "🥜",
        cuisine: "Kurdish",
        id: "fistik-serbeti"
    },
    {
        name: "Kürt Revani",
        description: "Kürt usulü revani",
        emoji: "🍰",
        cuisine: "Kurdish",
        id: "kurt-revani"
    },
    {
        name: "Chak-Chak Şerbeti",
        description: "Chak-Chak şerbeti",
        emoji: "🍯",
        cuisine: "Kurdish",
        id: "chak-chak-serbeti"
    },
    {
        name: "Kürt Dondurması",
        description: "Geleneksel Kürt dondurması",
        emoji: "🍦",
        cuisine: "Kurdish",
        id: "kurt-dondurmasi"
    },
];