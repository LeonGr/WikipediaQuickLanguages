// All language list items
const languageLinks = Array.from(document.querySelectorAll('.interlanguage-link'));

// Languages to matching flags.
// Note: based on country codes. These country codes may not reflect the proper language code.
// For example: Great Britain is GB, while the code used by Wikipedia is EN.
// This has to be fixed manually.
const codeToFlags = {
    // English Wikipedia; English Wikipedia; English; Latn; en; 7,179,409; 274,480; 15 January 2001;
    "en": "🇬🇧",
    // Spanish Wikipedia; Wikipedia en español; Spanish; Latn; es; 2,111,563; 43,869; 20 May 2001;
    "es": "🇪🇸",
    // French Wikipedia; Wikipédia en français; French; Latn; fr; 2,756,788; 38,984; 23 March 2001;
    "fr": "🇫🇷",
    // German Wikipedia; Deutschsprachige Wikipedia; German; Latn; de; 3,120,060; 37,343; 16 March 2001;
    "de": "🇩🇪",
    // Italian Wikipedia; Wikipedia in italiano; Italian; Latn; it; 1,968,538; 30,135; 11 May 2001;
    "it": "🇮🇹",
    // Japanese Wikipedia; ウィキペディア日本語版 (Wikipedia nihongo-ban); Japanese; Jpan; ja; 1,501,224; 24,728; 20 May 2001;
    "ja": "🇯🇵",
    // Russian Wikipedia; Русская Википедия (Russkaja Vikipedija); Russian; Cyrl; ru; 2,099,311; 19,533; 20 May 2001;
    "ru": "🇷🇺",
    // Chinese Wikipedia; Traditional Chinese: 中文維基百科, simplified Chinese: 中文维基百科 (pinyin: Zhōngwén wéijī bǎikē); Chinese (written vernacular Chinese); Hans/Hant; zh; 1,534,700; 14,190; 24 October 2002;
    "zh": "🇨🇳",
    // Indonesian Wikipedia; Wikipedia bahasa Indonesia; Indonesian; Latn; id; 771,299; 10,444; 30 March 2003;
    "id": "🇮🇩",
    // Polish Wikipedia; Polskojęzyczna Wikipedia; Polish; Latn; pl; 1,694,086; 9,720; 26 June 2001;
    "pl": "🇵🇱",
    // Dutch Wikipedia; Nederlandstalige Wikipedia; Dutch; Latn; nl; 2,218,629; 8,218; 19 June 2001;
    "nl": "🇳🇱",
    // Hebrew Wikipedia; ויקיפדיה העברית (Vikipedya ha-ivrit); Hebrew; Hebr; he; 396,495; 7,903; 8 July 2003;
    "he": "🇮🇱",
    // Portuguese Wikipedia; Wikipédia em português; Portuguese; Latn; pt; 1,171,282; 7,619; 11 May 2001;
    "pt": "🇵🇹",
    // Korean Wikipedia; 한국어 위키백과 (Hangugeo wikibaekgwa); Korean; Hang; ko; 745,455; 6,343; 11 October 2002;
    "ko": "🇰🇷",
    // Arabic Wikipedia; ويكيبيديا العربية (Wīkībīdiyā al-ʿarabiyya); Arabic; Arab; ar; 1,311,720; 6,258; 8 July 2003;
    "ar": "png:https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Flag_of_the_Arab_League.svg/120px-Flag_of_the_Arab_League.svg.png",
    // Ukrainian Wikipedia; Українська Вікіпедія (Ukrajinska Vikipedija); Ukrainian; Cyrl; uk; 1,420,293; 5,859; 30 January 2004;
    "uk": "🇺🇦",
    // Turkish Wikipedia; Türkçe Vikipedi; Turkish; Latn; tr; 680,971; 5,195; 5 December 2002;
    "tr": "🇹🇷",
    // Czech Wikipedia; Česká Wikipedie; Czech; Latn; cs; 591,369; 5,008; 3 May 2002;
    "cs": "🇨🇿",
    // Vietnamese Wikipedia; Wikipedia tiếng Việt; Vietnamese; Latn; vi; 1,300,552; 4,546; November 2002 (unknown day);
    "vi": "🇻🇳",
    // Swedish Wikipedia; Svenskspråkiga Wikipedia; Swedish; Latn; sv; 2,624,826; 4,375; 23 May 2001;
    "sv": "🇸🇪",
    // Simple English Wikipedia; Simple English Wikipedia; Simple English; Latn; simple; 281,189; 3,777; 18 September 2001;
    "simple": "🇺🇸",
    // Finnish Wikipedia; Suomenkielinen Wikipedia; Finnish; Latn; fi; 617,909; 3,677; 21 February 2002;
    "fi": "🇫🇮",
    // Hungarian Wikipedia; Magyar Wikipédia; Hungarian; Latn; hu; 568,686; 3,247; 8 July 2003;
    "hu": "🇭🇺",
    // Thai Wikipedia; วิกิพีเดียภาษาไทย (Wi-ki-phi-dia pha-sa thai); Thai; Thai; th; 182,372; 2,821; December 2003 (unknown day);
    "th": "🇹🇭",
    // Greek Wikipedia; Ελληνική Βικιπαίδεια (Ellinikí Vikipaídeia); Greek; Grek; el; 268,653; 2,472; 1 December 2002;
    "el": "🇬🇷",
    // Norwegian Wikipedia (Bokmål); Norsk Wikipedia; Norwegian (Bokmål); Latn; no; 683,456; 2,443; 26 November 2001;
    "no": "🇳🇴",
    // Catalan Wikipedia; Viquipèdia en català; Catalan; Latn; ca; 793,256; 2,398; 16 March 2001;
    "ca": "png:https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Catalonia.svg/120px-Flag_of_Catalonia.svg.png",
    // Malay Wikipedia; Wikipedia Bahasa Melayu (ويکيڤيديا بهاس ملايو); Malay; Latn; ms; 438,535; 2,169; 26 October 2002;
    "ms": "🇲🇾",
    // Romanian Wikipedia; Wikipedia în limba română; Romanian; Latn; ro; 543,200; 2,151; 12 July 2003;
    "ro": "🇷🇴",
    // Bengali Wikipedia; বাংলা উইকিপিডিয়া (Bāṅlā uikipiḍiẏa); Bengali; Beng; bn; 187,177; 2,006; 27 January 2004;
    "bn": "🇧🇩",
    // Bulgarian Wikipedia; Българоезична Уикипедия (Bǎlgaroezična Uikipedija); Bulgarian; Cyrl; bg; 309,717; 1,967; 6 December 2003;
    "bg": "🇧🇬",
    // Serbian Wikipedia; Википедија на српском језику (Vikipedija na srpskom jeziku); Serbian; Cyrl/Latn; sr; 705,127; 1,842; 16 February 2003;
    "sr": "🇷🇸",
    // Danish Wikipedia; Dansk Wikipedia; Danish; Latn; da; 313,972; 1,660; 1 February 2002;
    "da": "🇩🇰",
    // Slovak Wikipedia; Slovenská Wikipedia; Slovak; Latn; sk; 259,634; 1,314; August 2003 (unknown day);
    "sk": "🇸🇰",
    // Estonian Wikipedia; Eestikeelne Vikipeedia; Estonian; Latn; et; 259,449; 1,235; 24 August 2002;
    "et": "🇪🇪",
    // Persian Wikipedia; ویکی‌پدیای فارسی (Vikipediā-ye Fārsi); Persian; Arab; fa; 1,074,113; 1,125; 19 December 2003;
    "fa": "🇮🇷",
    // Basque Wikipedia; Euskarazko Wikipedia; Basque; Latn; eu; 487,848; 1,044; 6 December 2001;
    "eu": "png:https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Flag_of_the_Basque_Country.svg/120px-Flag_of_the_Basque_Country.svg.png",
    // Croatian Wikipedia; Hrvatska Wikipedija; Croatian; Latn; hr; 232,890; 1,042; 16 February 2003;
    "hr": "🇭🇷",
    // Hindi Wikipedia; हिन्दी विकिपीडिया (Hindī vikipīḍiyā); Hindi; Deva; hi; 169,239; 1,034; 11 July 2003;
    "hi": "🇮🇳*",
    // Azerbaijani Wikipedia; Azərbaycanca Vikipediya; Azerbaijani; Latn; az; 214,129; 947; January 2004 (unknown day);
    "az": "🇦🇿",
    // Cantonese Wikipedia; Traditional Chinese: 粵文維基百科 (Jyutping: Jyut6 man4 wai4 gei1 baak3 fo1); Cantonese; Hant; zh-yue; 150,104; 856; 25 March 2006;
    "zh": "-yue🇭🇰",
    // Uzbek Wikipedia; Oʻzbekcha Vikipediya (Ўзбекча Википедия); Uzbek; Latn/Cyrl; uz; 340,749; 823; 21 December 2003;
    "uz": "🇺🇿",
    // Slovene Wikipedia; Slovenska Wikipedija; Slovene; Latn; sl; 197,574; 764; 26 February 2002;
    "sl": "🇸🇮",
    // Lithuanian Wikipedia; Lietuviškoji Vikipedija; Lithuanian; Latn; lt; 225,604; 733; 20 February 2003;
    "lt": "🇱🇹",
    // Armenian Wikipedia; Հայերեն Վիքիպեդիա (Hayeren Vikʿipedia); Armenian; Armn; hy; 326,218; 699; July 2004 (unknown day);
    "hy": "🇦🇲",
    // Latvian Wikipedia; Vikipēdija latviešu valodā; Latvian; Latn; lv; 143,043; 572; 3 March 2003;
    "lv": "🇱🇻",
    // Kazakh Wikipedia; Қазақша Уикипедия (Qazaqşa Wïkïpedïya) (قازاقشا ۋىيكىيپەدىييا); Kazakh; Cyrl; kk; 243,633; 550; 3 June 2002;
    "kk": "🇰🇿",
    // Galician Wikipedia; Galipedia or Wikipedia en galego; Galician; Latn; gl; 231,296; 491; 8 March 2003;
    "gl": "png:https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Flag_of_Galicia.svg/120px-Flag_of_Galicia.svg.png",
    // Tamil Wikipedia; தமிழ் விக்கிபீடியா (Tamiḻ vikkippīṭiyā); Tamil; Taml; ta; 183,525; 471; September 2003 (unknown day);
    "ta": "png:https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Seal_of_Tamil_Nadu.svg/120px-Seal_of_Tamil_Nadu.svg.png",
    // Georgian Wikipedia; ქართული ვიკიპედია (Kartuli vik’ip’edia); Georgian; Geor; ka; 194,699; 469; November 2003 (unknown day);
    "ka": "🇬🇪",
    // Belarusian Wikipedia; Беларуская Вікіпедыя (Bielaruskaja Vikipiedyja); Belarusian (official Narkamaŭka orthography); Cyrl; be; 263,329; 411; 12 August 2004 (original) 27 March 2007 (clean version);
    "be": "🇧🇾",
    // Esperanto Wikipedia; Vikipedio en Esperanto; Esperanto; Latn; eo; 384,846; 404; 6 November 2001;
    "eo": "png:https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Flag_of_Esperanto.svg/120px-Flag_of_Esperanto.svg.png",
    // Malayalam Wikipedia; മലയാളം വിക്കിപീഡിയ (Malayāḷaṃ vikkipīḍiya); Malayalam; Mlym; ml; 88,043; 402; 21 December 2002;
    "ml": "🇮🇳*",
    // Albanian Wikipedia; Wikipedia shqip; Albanian; Latn; sq; 105,681; 393; 12 October 2003;
    "sq": "🇦🇱",
    // Urdu Wikipedia; اردو ویکیپیڈیا (Urdū vikipīḍiyā); Urdu; Arab; ur; 388,029; 388; 24 January 2004;
    "ur": "🇵🇰",
    // Macedonian Wikipedia; Македонска Википедија (Makedonska Vikipedija); Macedonian; Cyrl; mk; 161,436; 386; September 2003 (unknown day);
    "mk": "🇲🇰",
    // Marathi Wikipedia; मराठी विकिपीडिया (Marāṭhī vikipīḍiyā); Marathi; Deva; mr; 101,897; 361; 1 May 2003;
    "mr": "🇮🇳*",
    // Telugu Wikipedia; తెలుగు వికీపీడియా (Telugu vikīpīḍiyā); Telugu; Telu; te; 123,204; 335; 10 December 2003;
    "te": "🇮🇳*",
    // Bosnian Wikipedia; Wikipedia na bosanskom jeziku; Bosnian; Latn; bs; 97,911; 323; 12 December 2002;
    "bs": "🇧🇦",
    // Serbo-Croatian Wikipedia; Wikipedija na srpskohrvatskom jeziku (Википедија на српскохрватском језику); Serbo-Croatian; Latn/Cyrl; sh; 461,589; 321; 16 January 2002 – 20 February 2005 (original) 23 June 2005 (relaunch);
    "sh": "png:https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/HR-BA-ME-RS_flag.svg/120px-HR-BA-ME-RS_flag.svg.png",
    // Icelandic Wikipedia; Íslenska Wikipedia; Icelandic; Latn; is; 60,967; 314; 5 December 2003;
    "is": "🇮🇸",
    // Egyptian Arabic Wikipedia; ويكيپيديا مصرى (Wīkībīdiyā maṣri); Egyptian Arabic; Arab; arz; 1,631,519; 297; 24 November 2008;
    "arz": "🇪🇬",
    // Burmese Wikipedia; မြန်မာဝီကီပီးဒီးယား (Mranma wikipi:di:ya:); Burmese; Mymr; my; 110,654; 291; July 2004 (unknown day);
    "my": "🇲🇲",
    // Cebuano Wikipedia; Wikipedya sa Sinugboanon; Cebuano; Latn; ceb; 6,115,227; 287; 22 June 2005;
    "ceb": "png:https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Cebu_%28province%29.svg/120px-Flag_of_Cebu_%28province%29.svg.png",
    // Afrikaans Wikipedia; Afrikaanse Wikipedia; Afrikaans; Latn; af; 128,896; 285; 16 November 2001;
    "af": "🇿🇦",
    // Belarusian Wikipedia (Classical); Беларуская Вікіпэдыя (Bielaruskaja Vikipiedyja); Belarusian (Taraškievica orthography); Cyrl; be-tarask; 90,892; 275; 27 March 2007;
    "be": "-tarask🇧🇾*",
    // Hausa Wikipedia; Wikipedia Hausa; Hausa; Latn; ha; 97,084; 260; Unknown date, 2020;
    "ha": "png:https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Flag_of_the_Hausa_people.svg/120px-Flag_of_the_Hausa_people.svg.png",
    // Tagalog Wikipedia; Wikipediang Tagalog; Tagalog; Latn; tl; 49,048; 247; 1 December 2003;
    "tl": "🇵🇭",
    // Mongolian Wikipedia; Монгол Википедиа (Mongol Vikipyedia); Mongolian; Cyrl; mn; 27,437; 240; 28 February 2004;
    "mn": "🇲🇳",
    // Latin Wikipedia; Vicipaedia Latina; Latin; Latn; la; 141,598; 230; May 2002 (unknown day);
    "la": "png:https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Flag_of_Rome.svg/120px-Flag_of_Rome.svg.png",
    // Norwegian Wikipedia (Nynorsk); Norsk (Nynorsk) Wikipedia; Norwegian (Nynorsk); Latn; nn; 177,896; 203; 31 July 2004;
    "nn": "🇳🇴",
    // Sorani Kurdish Wikipedia; ویکیپیدیای کوردیی سۆرانی (Wîkîpîdiyay Kurdî Soranî); Kurdish (Sorani); Arab; ckb; 81,468; 185; 13 August 2009;
    "ckb": "png:https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Flag_of_Kurdistan.svg/120px-Flag_of_Kurdistan.svg.png",
    // Swahili Wikipedia; Wikipedia ya Kiswahili; Swahili; Latn; sw; 113,813; 181; 8 March 2003;
    "sw": "🇰🇪",
    // Asturian Wikipedia; Wikipedia n'asturianu; Asturian; Latn; ast; 139,065; 161; 20 July 2004;
    "ast": "png:https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_Asturias.svg/120px-Flag_of_Asturias.svg.png",
    // Nepali Wikipedia; नेपाली विकिपिडिया (Nepālī vikipiḍiyā); Nepali; Deva; ne; 29,714; 155; 3 June 2002;
    "ne": "🇳🇵",
    // Punjabi Wikipedia; ਪੰਜਾਬੀ ਵਿਕੀਪੀਡੀਆ (Pañjābī vikīpīḍīā); Punjabi; Guru; pa; 59,560; 155; 3 June 2002;
    "pa": "png:https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Punjab_%28Paired%29.png/120px-Flag_of_Punjab_%28Paired%29.png",
    // Javanese Wikipedia; Wikipedia basa Jawa (ꦮꦶꦏꦶꦥꦺꦝꦶꦪꦃꦧꦱꦗꦮ); Javanese; Latn/Java; jv; 75,186; 154; 8 March 2004;
    "jv": "png:https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_Mataram_Sultanate.svg/120px-Flag_of_the_Mataram_Sultanate.svg.png",
    // Welsh Wikipedia; Wicipedia Cymraeg; Welsh; Latn; cy; 284,111; 148; July 2003 (unknown day);
    "cy": "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
    // Assamese Wikipedia; অসমীয়া ৱিকিপিডিয়া (Ôxômiya wikipidiya); Assamese; Beng; as; 24,064; 145; 2 June 2002;
    "as": "🇮🇳*",
    // Kyrgyz Wikipedia; Кыргыз Википедиясы (Kyrgyz Wikipediyasy); Kyrgyz; Cyrl; ky; 76,379; 144; 3 June 2002;
    "ky": "🇰🇬",
    // Khmer Wikipedia; វិគីភីឌាភាសាខ្មែរ (Vikiiphiidiaa phiăsaa khmae); Khmer; Khmr; km; 12,027; 143; 15 January 2005;
    "km": "🇰🇭",
    // Luxembourgish Wikipedia; Wikipedia op Lëtzebuergesch; Luxembourgish; Latn; lb; 67,243; 143; 21 July 2004;
    "lb": "🇱🇺",
    // Tajik Wikipedia; Википедияи Тоҷикӣ (Vikipedijai Toçikī); Tajik; Cyrl/Latn; tg; 117,888; 139; 27 January 2004;
    "tg": "🇹🇯",
    // Kurdish Wikipedia; Wîkîpediya kurdî (ویکیپەدیا کوردی); Kurdish (Kurmanji); Latn/Arab; ku; 91,314; 136; 4 January 2004;
    "ku": "png:https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Flag_of_Kurdistan.svg/120px-Flag_of_Kurdistan.svg.png",
    // Irish Wikipedia; Vicipéid na Gaeilge; Irish; Latn; ga; 63,909; 135; October 2003 (unknown day);
    "ga": "🇮🇪",
    // Amharic Wikipedia; አማርኛ ዊኪፔዲያ (Amarəñña wikipediya); Amharic; Ethi; am; 15,676; 134; December 2002 (unknown day);
    "am": "🇪🇹",
    // Breton Wikipedia; Wikipedia e brezhoneg; Breton; Latn; br; 91,123; 132; June 2004 (unknown day);
    "br": "png:https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Flag_of_Brittany.svg/120px-Flag_of_Brittany.svg.png",
    // Sinhala Wikipedia; සිංහල විකිපීඩියා (Siṁhala wikipīḍiyā); Sinhala; Sinh; si; 25,139; 131; Unknown date;
    "si": "🇱🇰",
    // Tatar Wikipedia; Татар Википедиясе (Tatar Wikipediäse); Tatar; Cyrl; tt; 706,302; 129; 15 September 2003;
    "tt": "png:https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Flag_of_Tatarstan.svg/120px-Flag_of_Tatarstan.svg.png",
    // Scots Wikipedia; Scots Wikipædia; Scots; Latn; sco; 34,196; 128; 23 June 2005;
    "sco": "🏴󠁧󠁢󠁳󠁣",
    // Igbo Wikipedia; Wikipedia Igbo; Igbo; Latn; ig; 45,813; 126; Unknown date;
    "ig": "png:https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Flag_of_Biafra.svg/120px-Flag_of_Biafra.svg.png",
    // Occitan Wikipedia; Wikipèdia en occitan; Occitan; Latn; oc; 90,749; 123; 20 October 2003;
    "oc": "png:https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Flag_of_Occitania_%28with_star%29.svg/120px-Flag_of_Occitania_%28with_star%29.svg.png",
    // Balinese Wikipedia; Wikipédia Basa Bali (ᬯᬶᬓᬶᬧᬾᬤᬶᬬ ᬩᬲᬩᬮᬶ); Balinese; Latn; ban; 36,805; 120; 14 October 2019;
    "ban": "png:https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Historical_Flag_of_Bali.png/120px-Historical_Flag_of_Bali.png",
    // Somali Wikipedia; Soomaali Wikipedia; Somali; Latn; so; 10,469; 119; Unknown date;
    "so": "🇸🇴",
    // Alemannic Wikipedia; Alemannische Wikipedia; Alemannic German; Latn; als; 31,667; 117; 13 November 2003;
    "als": "🇨🇭",
    // Toki Pona Wikipedia; lipu Wikipesija pi toki pona; Toki Pona; Latn; tok; 3,916; 114; 4 April 2004 – 16 November 2004 (closure, original), 24 March 2009 (deletion, original), 26 November 2025 (relaunch);
    "tok": "svg:https://upload.wikimedia.org/wikipedia/commons/8/8a/Toki_pona.svg",
    // West Frisian Wikipedia; Frysktalige Wikipedy; West Frisian; Latn; fy; 59,946; 106; 2 September 2002;
    "fy": "png:https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Frisian_flag.svg/120px-Frisian_flag.svg.png",
    // Southern Min Wikipedia; Traditional Chinese: 閩南語維基百科 Pe̍h-ōe-jī: Holopedia or Wikipedia Bân-lâm-gú; Southern Min; Latn/Hant; zh-min-nan; 434,068; 106; 28 May 2004;
    "zh": "-min-nan🇹🇼",
    // Moroccan Arabic Wikipedia; ويكيبيديا المغربية (Wīkībīdiyā maḡribiyy); Moroccan Arabic; Arab; ary; 13,823; 102; 20 July 2020;
    "ary": "🇲🇦",
    // Wu Wikipedia; Traditional Chinese: 吳語維基百科, simplified Chinese: 吴语维基百科 (Romanized: Wu-nyu Vi-ci-pah-khu); Wu Chinese; Hans/Hant; wuu; 48,167; 101; 1 October 2006;
    "wuu": "🇨🇳*",
    // Gujarati Wikipedia; ગુજરાતી વિકિપીડિયા (Gujrātī vikipīḍiyā); Gujarati; Gujr; gu; 30,827; 93; July 2004 (unknown day);
    "gu": "🇮🇳*",
    // South Azerbaijani Wikipedia; تورکجه ویکی‌پدیا (Azərbaycanca Vikipediya); South Azerbaijani; Arab; azb; 244,609; 87; 22 July 2015;
    "azb": "🇦🇿",
    // Classical Chinese Wikipedia; 文言維基大典 (Wényán wéijī dàdiǎn); Classical Chinese; Hant; zh-classical; 14,032; 84; 31 July 2006;
    "zh": "-classical🇨🇳*",
    // Malagasy Wikipedia; Wikipedia amin'ny teny malagasy; Malagasy; Latn; mg; 102,823; 84; April 2004 (unknown day);
    "mg": "🇲🇬",
    // Kinyarwanda Wikipedia ; Wikipediya mu Ikinyarwanda; Kinyarwanda; Latn; rw; 9,644; 76; Unknown date;
    "rw": "🇷🇼",
    // Fiji Hindi Wikipedia; Fiji Baat Wikipedia; Fiji Hindi; Latn; hif; 12,325; 75; 12 November 2008;
    "hif": "🇫🇯",
    // Yoruba Wikipedia; Wikipéédíà Yorùbá; Yoruba; Latn; yo; 37,198; 74; 2008 (unknown date);
    "yo": "🇳🇬",
    // Sundanese Wikipedia; Wikipédia basa Sunda; Sundanese; Latn; su; 62,741; 69; 15 March 2004;
    "su": "🇸🇩",
    // Faroese Wikipedia; Føroysk Wikipedia; Faroese; Latn; fo; 14,210; 65; 30 May 2004;
    "fo": "🇫🇴",
    // Haitian Creole Wikipedia; Wikipedya kreyòl ayisyen; Haitian Creole; Latn; ht; 71,907; 65; August 2005 (unknown day);
    "ht": "🇭🇹",
    // Tswana Wikipedia; Wikipedia Setswana; Tswana; Latn; tn; 4,141; 62; Unknown date;
    "tn": "🇧🇼",
    // Low German Wikipedia; Plattdüütsche Wikipedia; Low German; Latn; nds; 85,856; 61; April 2006 (unknown day);
    "nds": "🇩🇪*",
    // Pashto Wikipedia; پښتو ويکيپېډيا (Pax̌tó wīkīpeḍyā); Pashto; Arab; ps; 21,295; 61; 2003 (unknown date);
    "ps": "png:https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Pashto_Banner_flag_%28Neutral%29.png/120px-Pashto_Banner_flag_%28Neutral%29.png",
    // Western Punjabi Wikipedia; پنجابی وکیپیڈیا (Pañjābī vikīpīḍīā); Western Punjabi; Arab; pnb; 75,479; 61; 24 October 2008;
    "pnb": "png:https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Punjab_%28Paired%29.png/120px-Flag_of_Punjab_%28Paired%29.png",
    // Maltese Wikipedia; Wikipedija Malti; Maltese; Latn; mt; 7,827; 60; 10 September 2004;
    "mt": "🇲🇹",
    // Old English Wikipedia; Engliscan Ƿikipǣdia; Old English; Latn; ang; 5,198; 58; Unknown date;
    "ang": "🏴󠁧󠁢󠁥",
    // Tibetan Wikipedia; བོད་ཡིག་གི་ཝེ་ཁེ་རིག་མཛོད (Wylie: Bod yig gi we khe rig mdzod); Central Tibetan (Lhasa Tibetan); Tibt; bo; 8,070; 58; Unknown date;
    "bo": "png:https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flag_of_Tibet.svg/120px-Flag_of_Tibet.svg.png",
    // Western Armenian Wikipedia; Արեւմտահայերէն Ուիքիփետիա (Arevmdahayerēn Uikʿipʿetia); Western Armenian; Armn; hyw; 13,616; 57; 1 April 2019;
    "hyw": "🇦🇲",
    // Yiddish Wikipedia; יידישע וויקיפעדיע (Yidishe vikipedye); Yiddish; Hebr; yi; 15,666; 57; 4 March 2004;
    "yi": "png:https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Proposed_Yiddish_flag.svg/120px-Proposed_Yiddish_flag.svg.png",
    // Turkmen Wikipedia; Türkmençe Wikipediýa; Turkmen; Latn; tk; 7,103; 53; 16 February 2004;
    "tk": "🇹🇲",
    // Dagbani Wikipedia; Wikipidia Dagbani; Dagbani; Latn; dag; 13,735; 52; 30 June 2021;
    "dag": "🇬🇭",
    // Luganda Wikipedia; Wikipediya Luganda; Luganda; Latn; lg; 5,074; 52; Unknown date;
    "lg": "🇺🇬",
    // Lao Wikipedia; ວິກິພີເດຍ ພາສາລາວ (Wi ki phī dīa phasa lao); Lao; Laoo; lo; 5,520; 50; Unknown date;
    "lo": "🇱🇦",
    // Moroccan Amazigh Wikipedia; ⵡⵉⴽⵉⴱⵉⴷⵢⴰ ⵜⴰⵎⴰⵣⵉⵖⵜ ⵜⴰⵏⴰⵡⴰⵢⵜ (Wikibidya tamaziɣt tanawayt); Standard Moroccan Amazigh; Tfng; zgh; 12,223; 49; 6 November 2023;
    "zgh": "🇲🇦*",
};

// Searches the language dropdown for the list item containing the select language
function getLanguageUrl(dataCode) {
    let link = languageLinks.find(languageLink => {
        return languageLink.firstChild.attributes["lang"].value.toLowerCase() == dataCode.toLowerCase();
    });

    if (link) {
        return link.firstChild;
    }
}

// Logs an error when we could not retrieve the stored selected languages.
function onError(error) {
  console.error(`Error: ${error}`);
}

function showFlagsCommon(languageButton, selectedLanguages, margin) {
    for (const selectedLanguage of selectedLanguages) {
        let urlElement = getLanguageUrl(selectedLanguage);

        if (urlElement) {
            // If no flag is found for the selected language, use a white one
            let flag = codeToFlags[selectedLanguage.toLowerCase()] || "🏳️";

            let languageSelectionFlag = document.createElement('a');

            let title = `WikiQuickLang: ${urlElement.innerText}`;

            languageSelectionFlag.href = urlElement.href;
            languageSelectionFlag.style.cssText = `margin: ${margin}; display: flex;`
            languageSelectionFlag.title = title;
            languageSelectionFlag.className = "wiki-quick-lang-flag";

            if (flag.startsWith("png:") || flag.startsWith("svg:")) {
                console.log("image")
                let flagImageUrl = flag.replace("svg:", "").replace("png:", "");

                let flagImage = document.createElement('img');
                flagImage.src = flagImageUrl;
                flagImage.title = title;
                flagImage.style.cssText = "width: 1.5em;";
                console.log(flagImage)
                languageSelectionFlag.appendChild(flagImage);
            } else {
                languageSelectionFlag.innerText = flag;
            }

            languageButton.parentNode.appendChild(languageSelectionFlag);
        }
    }
}

function showFlagsDesktop(selectedLanguages) {
    // The button which opens the default language dropdown
    const languageButton = document.querySelector("#p-lang-btn");

    const margin = "4px";
    showFlagsCommon(languageButton, selectedLanguages, margin);
}

function showFlagsMobile(selectedLanguages) {
    // The button which opens the default language dropdown
    const languageButton = document.querySelector("#language-selector").firstChild;

    const margin = "8px";
    showFlagsCommon(languageButton, selectedLanguages, margin);
}

// Show the flags of the selected languages
function showFlags(stored) {
    if (!stored.selectedLanguages || stored.selectedLanguages.length == 0) {
        return;
    }

    let selectedLanguages = stored.selectedLanguages.sort();

    for (const existingFlag of document.querySelectorAll(".wiki-quick-lang-flag")) {
        existingFlag.remove();
    }

    let isMobileVersion = window.location.toString().includes(".m.") || !document.querySelector("#p-lang-btn");

    // Check if we are on the mobile version of Wikipedia
    if (isMobileVersion) {
        showFlagsMobile(selectedLanguages)
    } else {
        showFlagsDesktop(selectedLanguages)
    }
}

// Retrieve the stored settings
const getting = browser.storage.sync.get("selectedLanguages");
getting.then(showFlags, onError);
