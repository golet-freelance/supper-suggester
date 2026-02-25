export interface Menu {
    mainDish: {
        name: string;
        description: string;
        emoji: string;
    };
    sideDish: {
        name: string;
        description: string;
        emoji: string;
    };
    drink: {
        name: string;
        description: string;
        emoji: string;
    };
    cuisine: 'Turkish' | 'Kurdish';
    id: string;
}

export const dinnerMenus: Menu[] = [
    // Turkish Menus
    {
        mainDish: { name: "Kuru Fasulye", description: "Pilav üstü nefis kuru fasulye", emoji: "🫘" },
        sideDish: { name: "Pirinç Pilavı", description: "Tereyağlı, tel şehriyeli pilav", emoji: "🍚" },
        drink: { name: "Ayran", description: "Serinletici, tuzlu yoğurt içeceği", emoji: "🥛" },
        cuisine: "Turkish",
        id: "kuru-fasulye"
    },
    {
        mainDish: { name: "Köfte Izgara", description: "Izgara köfte, közlenmiş biber ve domatesle", emoji: "🧆" },
        sideDish: { name: "Bulgur Pilavı", description: "Domatesli, biberli bulgur pilavı", emoji: "🍚" },
        drink: { name: "Şalgam Suyu", description: "Fermente şalgam suyu", emoji: "🥤" },
        cuisine: "Turkish",
        id: "kofte-izgara"
    },
    {
        mainDish: { name: "Mantı", description: "Yoğurt ve tereyağ soslu ev mantısı", emoji: "🥟" },
        sideDish: { name: "Cacık", description: "Salatalıklı, naneli yoğurt mezesi", emoji: "🥒" },
        drink: { name: "Ayran", description: "Serinletici, tuzlu yoğurt içeceği", emoji: "🥛" },
        cuisine: "Turkish",
        id: "manti"
    },
    {
        mainDish: { name: "Tavuk Sote", description: "Sebzelerle pişmiş lezzetli tavuk sote", emoji: "🍗" },
        sideDish: { name: "Pirinç Pilavı", description: "Tereyağlı, tel şehriyeli pilav", emoji: "🍚" },
        drink: { name: "Limonata", description: "Ev yapımı taze limonata", emoji: "🍋" },
        cuisine: "Turkish",
        id: "tavuk-sote"
    },
    {
        mainDish: { name: "Patlıcan Musakka", description: "Kıymalı, fırında patlıcan musakka", emoji: "🍆" },
        sideDish: { name: "Çoban Salata", description: "Domates, salatalık, biber ve peynirli", emoji: "🥗" },
        drink: { name: "Ayran", description: "Serinletici, tuzlu yoğurt içeceği", emoji: "🥛" },
        cuisine: "Turkish",
        id: "patlican-musakka"
    },
    {
        mainDish: { name: "Karnıyarık", description: "Kıymalı patlıcan karnıyarık", emoji: "🍆" },
        sideDish: { name: "Pirinç Pilavı", description: "Tereyağlı, tel şehriyeli pilav", emoji: "🍚" },
        drink: { name: "Turşu Suyu", description: "Ev yapımı turşu suyu", emoji: "🥒" },
        cuisine: "Turkish",
        id: "karniyarik"
    },
    {
        mainDish: { name: "Lahana Sarması", description: "Kıymalı lahana sarması", emoji: "🥬" },
        sideDish: { name: "Yoğurt", description: "Sarımsaklı, naneli yoğurt", emoji: "🥣" },
        drink: { name: "Ayran", description: "Serinletici, tuzlu yoğurt içeceği", emoji: "🥛" },
        cuisine: "Turkish",
        id: "lahana-sarmasi"
    },
    {
        mainDish: { name: "Fırında Tavuk", description: "Fırında patatesli, nefis tavuk", emoji: "🍗" },
        sideDish: { name: "Bulgur Pilavı", description: "Domatesli, biberli bulgur pilavı", emoji: "🍚" },
        drink: { name: "Şalgam Suyu", description: "Fermente şalgam suyu", emoji: "🥤" },
        cuisine: "Turkish",
        id: "firinda-tavuk"
    },
    {
        mainDish: { name: "İmam Bayıldı", description: "Zeytinyağlı, soğanlı patlıcan", emoji: "🍆" },
        sideDish: { name: "Pirinç Pilavı", description: "Tereyağlı, tel şehriyeli pilav", emoji: "🍚" },
        drink: { name: "Ayran", description: "Serinletici, tuzlu yoğurt içeceği", emoji: "🥛" },
        cuisine: "Turkish",
        id: "imam-bayildi"
    },
    {
        mainDish: { name: "Taze Fasulye", description: "Zeytinyağlı taze fasulye", emoji: "🫛" },
        sideDish: { name: "Bulgur Pilavı", description: "Domatesli, biberli bulgur pilavı", emoji: "🍚" },
        drink: { name: "Limonata", description: "Ev yapımı taze limonata", emoji: "🍋" },
        cuisine: "Turkish",
        id: "taze-fasulye"
    },
    {
        mainDish: { name: "Mercimek Çorbası", description: "Sıcacık, besleyici mercimek çorbası", emoji: "🍲" },
        sideDish: { name: "Ekmek", description: "Taze, sıcak ekmek", emoji: "🍞" },
        drink: { name: "Ayran", description: "Serinletici, tuzlu yoğurt içeceği", emoji: "🥛" },
        cuisine: "Turkish",
        id: "mercimek-corbasi"
    },
    {
        mainDish: { name: "Tavuklu Pilav", description: "Tavuklu, tereyağlı nefis pilav", emoji: "🍚" },
        sideDish: { name: "Çoban Salata", description: "Domates, salatalık, biber ve peynirli", emoji: "🥗" },
        drink: { name: "Ayran", description: "Serinletici, tuzlu yoğurt içeceği", emoji: "🥛" },
        cuisine: "Turkish",
        id: "tavuklu-pilav"
    },
    {
        mainDish: { name: "Peynirli Börek", description: "Ev yapımı peynirli börek", emoji: "🥧" },
        sideDish: { name: "Domates Salata", description: "Taze domates ve soğan salatası", emoji: "🍅" },
        drink: { name: "Çay", description: "Türk çayı", emoji: "🍵" },
        cuisine: "Turkish",
        id: "peynirli-borek"
    },
    {
        mainDish: { name: "Zeytinyağlı Yaprak Sarma", description: "Zeytinyağlı nefis yaprak sarması", emoji: "🍃" },
        sideDish: { name: "Cacık", description: "Salatalıklı, naneli yoğurt mezesi", emoji: "🥒" },
        drink: { name: "Ayran", description: "Serinletici, tuzlu yoğurt içeceği", emoji: "🥛" },
        cuisine: "Turkish",
        id: "zeytinyagli-yaprak-sarma"
    },
    {
        mainDish: { name: "Kısır", description: "Nar ekşili, bol yeşillikli kısır", emoji: "🥗" },
        sideDish: { name: "Havuç Tarator", description: "Yoğurtlu havuç mezesi", emoji: "🥕" },
        drink: { name: "Çay", description: "Türk çayı", emoji: "🍵" },
        cuisine: "Turkish",
        id: "kisir"
    },
    {
        mainDish: { name: "Etli Nohut", description: "Etli, nefis nohut yemeği", emoji: "🫘" },
        sideDish: { name: "Pirinç Pilavı", description: "Tereyağlı, tel şehriyeli pilav", emoji: "🍚" },
        drink: { name: "Ayran", description: "Serinletici, tuzlu yoğurt içeceği", emoji: "🥛" },
        cuisine: "Turkish",
        id: "etli-nohut"
    },
    {
        mainDish: { name: "Fırında Köfte Patates", description: "Fırında köfte ve patates", emoji: "🥔" },
        sideDish: { name: "Ezme Salata", description: "Acılı, domatesli ezme salata", emoji: "🌶️" },
        drink: { name: "Şalgam Suyu", description: "Fermente şalgam suyu", emoji: "🥤" },
        cuisine: "Turkish",
        id: "firinda-kofte-patates"
    },
    {
        mainDish: { name: "Pırasa Yemeği", description: "Zeytinyağlı pırasa yemeği", emoji: "🥬" },
        sideDish: { name: "Bulgur Pilavı", description: "Domatesli, biberli bulgur pilavı", emoji: "🍚" },
        drink: { name: "Ayran", description: "Serinletici, tuzlu yoğurt içeceği", emoji: "🥛" },
        cuisine: "Turkish",
        id: "pirasa-yemegi"
    },
    {
        mainDish: { name: "Kabak Mücver", description: "Fırında veya kızarmış kabak mücver", emoji: "🥒" },
        sideDish: { name: "Yoğurt", description: "Sarımsaklı yoğurt", emoji: "🥣" },
        drink: { name: "Ayran", description: "Serinletici, tuzlu yoğurt içeceği", emoji: "🥛" },
        cuisine: "Turkish",
        id: "kabak-mucver"
    },
    {
        mainDish: { name: "Tavuk Çorbası", description: "Şehriyeli, nefis tavuk çorbası", emoji: "🍲" },
        sideDish: { name: "Ekmek", description: "Taze, sıcak ekmek", emoji: "🍞" },
        drink: { name: "Limonata", description: "Ev yapımı taze limonata", emoji: "🍋" },
        cuisine: "Turkish",
        id: "tavuk-corbasi"
    },
    // Kurdish Menus
    {
        mainDish: { name: "Dolma", description: "Etli, pirinçli dolma (biber, patlıcan, lahana)", emoji: "🫑" },
        sideDish: { name: "Pilav", description: "Kürt pilavı", emoji: "🍚" },
        drink: { name: "Mastaw", description: "Tuzlu yoğurt içeceği (Ava Mast)", emoji: "🥛" },
        cuisine: "Kurdish",
        id: "dolma"
    },
    {
        mainDish: { name: "Biryanî", description: "Kürt biryani - etli, baharatlı pilav", emoji: "🍛" },
        sideDish: { name: "Salata", description: "Domates, salatalık, nane salatası", emoji: "🥗" },
        drink: { name: "Çay", description: "Kürt çayı (çok şekerli)", emoji: "🍵" },
        cuisine: "Kurdish",
        id: "biryani"
    },
    {
        mainDish: { name: "Kofta", description: "Baharatlı köfte", emoji: "🧆" },
        sideDish: { name: "Pilav", description: "Kürt pilavı", emoji: "🍚" },
        drink: { name: "Dô", description: "Fermente yoğurt içeceği (Doogh)", emoji: "🥛" },
        cuisine: "Kurdish",
        id: "kofta"
    },
    {
        mainDish: { name: "Kibbeh", description: "Kızarmış bulgur ve et köftesi", emoji: "🧆" },
        sideDish: { name: "Tepsî", description: "Patlıcan, biber, kabak ve patates", emoji: "🍆" },
        drink: { name: "Mastaw", description: "Tuzlu yoğurt içeceği", emoji: "🥛" },
        cuisine: "Kurdish",
        id: "kibbeh"
    },
    {
        mainDish: { name: "Shifta", description: "Kızarmış et ve sebze köftesi", emoji: "🥩" },
        sideDish: { name: "Salata", description: "Domates, salatalık, maydanoz salatası", emoji: "🥗" },
        drink: { name: "Çay", description: "Kürt çayı (çok şekerli)", emoji: "🍵" },
        cuisine: "Kurdish",
        id: "shifta"
    },
    {
        mainDish: { name: "Kulaneh Pottage", description: "Buğdaylı, nohutlu, mercimekli çorba", emoji: "🍲" },
        sideDish: { name: "Ekmek", description: "Taze Kürt ekmeği (nan)", emoji: "🍞" },
        drink: { name: "Mastaw", description: "Tuzlu yoğurt içeceği", emoji: "🥛" },
        cuisine: "Kurdish",
        id: "kulaneh-pottage"
    },
    {
        mainDish: { name: "Dokliw", description: "Geleneksel Kürt yemeği", emoji: "🥘" },
        sideDish: { name: "Bulgur", description: "Bulgur pilavı", emoji: "🍚" },
        drink: { name: "Çay", description: "Kürt çayı (çok şekerli)", emoji: "🍵" },
        cuisine: "Kurdish",
        id: "dokliw"
    },
    {
        mainDish: { name: "Kube", description: "Etli bulgur köftesi", emoji: "🧆" },
        sideDish: { name: "Salata", description: "Taze sebze salatası", emoji: "🥗" },
        drink: { name: "Dô", description: "Fermente yoğurt içeceği", emoji: "🥛" },
        cuisine: "Kurdish",
        id: "kube"
    },
    {
        mainDish: { name: "Kelane", description: "Geleneksel Kürt ekmeği yemeği", emoji: "🥘" },
        sideDish: { name: "Yoğurt", description: "Taze yoğurt", emoji: "🥣" },
        drink: { name: "Çay", description: "Kürt çayı (çok şekerli)", emoji: "🍵" },
        cuisine: "Kurdish",
        id: "kelane"
    },
    {
        mainDish: { name: "Makluba", description: "Ters çevrilmiş sebze ve pilav yemeği", emoji: "🍛" },
        sideDish: { name: "Salata", description: "Domates, salatalık salatası", emoji: "🥗" },
        drink: { name: "Mastaw", description: "Tuzlu yoğurt içeceği", emoji: "🥛" },
        cuisine: "Kurdish",
        id: "makluba"
    },
    {
        mainDish: { name: "Gilakhe Stew", description: "Yabani ot yemeği (Gilakhe)", emoji: "🥘" },
        sideDish: { name: "Pilav", description: "Kürt pilavı", emoji: "🍚" },
        drink: { name: "Çay", description: "Kürt çayı (çok şekerli)", emoji: "🍵" },
        cuisine: "Kurdish",
        id: "gilakhe-stew"
    },
    {
        mainDish: { name: "Niskene", description: "Mercimekli, bulgurlu yemek", emoji: "🍲" },
        sideDish: { name: "Ekmek", description: "Taze Kürt ekmeği", emoji: "🍞" },
        drink: { name: "Dô", description: "Fermente yoğurt içeceği", emoji: "🥛" },
        cuisine: "Kurdish",
        id: "niskene"
    },
    {
        mainDish: { name: "Kurdish Pilau", description: "Kürt pilavı - etli, bademli", emoji: "🍛" },
        sideDish: { name: "Salata", description: "Kürt salatası", emoji: "🥗" },
        drink: { name: "Mastaw", description: "Tuzlu yoğurt içeceği", emoji: "🥛" },
        cuisine: "Kurdish",
        id: "kurdish-pilau"
    },
    {
        mainDish: { name: "Teşrîb", description: "Ekmekli, sebzeli yemek", emoji: "🥘" },
        sideDish: { name: "Yoğurt", description: "Taze yoğurt", emoji: "🥣" },
        drink: { name: "Çay", description: "Kürt çayı (çok şekerli)", emoji: "🍵" },
        cuisine: "Kurdish",
        id: "tesrib"
    },
    {
        mainDish: { name: "Parêv Tobûlî", description: "Geleneksel Kürt yemeği", emoji: "🥘" },
        sideDish: { name: "Bulgur", description: "Bulgur pilavı", emoji: "🍚" },
        drink: { name: "Mastaw", description: "Tuzlu yoğurt içeceği", emoji: "🥛" },
        cuisine: "Kurdish",
        id: "parev-tobuli"
    },
    {
        mainDish: { name: "Lentil Pottage", description: "Mercimekli, patatesli çorba", emoji: "🍲" },
        sideDish: { name: "Ekmek", description: "Taze Kürt ekmeği", emoji: "🍞" },
        drink: { name: "Dô", description: "Fermente yoğurt içeceği", emoji: "🥛" },
        cuisine: "Kurdish",
        id: "lentil-pottage"
    },
    {
        mainDish: { name: "Shilah/Maraga", description: "Kürt etli yahni", emoji: "🥘" },
        sideDish: { name: "Pilav", description: "Kürt pilavı", emoji: "🍚" },
        drink: { name: "Çay", description: "Kürt çayı (çok şekerli)", emoji: "🍵" },
        cuisine: "Kurdish",
        id: "shilah-maraga"
    },
    {
        mainDish: { name: "Kuki", description: "Etli veya sebzeli Kürt böreği", emoji: "🥧" },
        sideDish: { name: "Salata", description: "Taze sebze salatası", emoji: "🥗" },
        drink: { name: "Mastaw", description: "Tuzlu yoğurt içeceği", emoji: "🥛" },
        cuisine: "Kurdish",
        id: "kuki"
    },
    {
        mainDish: { name: "Tahdig", description: "Pilav tası - çıtır pilav", emoji: "🍚" },
        sideDish: { name: "Stew", description: "Etli yahni", emoji: "🥘" },
        drink: { name: "Çay", description: "Kürt çayı (çok şekerli)", emoji: "🍵" },
        cuisine: "Kurdish",
        id: "tahdig"
    },
    {
        mainDish: { name: "Birinç", description: "Beyaz pilav - etli veya sebzeli", emoji: "🍛" },
        sideDish: { name: "Salata", description: "Kürt salatası", emoji: "🥗" },
        drink: { name: "Dô", description: "Fermente yoğurt içeceği", emoji: "🥛" },
        cuisine: "Kurdish",
        id: "birinc"
    },
];