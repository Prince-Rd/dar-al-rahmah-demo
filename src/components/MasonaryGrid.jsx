import React from "react";
import { useNavigate } from "react-router-dom";

export const projects = [
  {
    id: 1,
    image: "/src/assets/img/galary/01.jpg",
    title: "  ادارة الحشود ",
    description: "  مكة المكرمة",
    date: "1300 م٢",
    categories: [
      " خدمات هندسية",
      " تصميم وتخطيط حركة الحشود"], 

    // Full project details
    detailImages: [
      "/src/assets/img/galary/project1-img1.jpg",
      "/src/assets/img/galary/project1-img2.jpg",
      "/src/assets/img/galary/project1-img3.jpg",
      "/src/assets/img/galary/project1-img4.jpg",
      "/src/assets/img/galary/project1-img5.jpg",
   
     
    ],
    fullDescription:
    " تقديم الخدمات الاستشارية (الدراسات والخدمات والتصاميم والتحليل والدعم الفني) من خلال فريق عمل متخصص في مجال إدارة الحشود حيث تم إعداد ومتابعة تنفيذ خطط إدارة الحشود وبرامج تفويج مجموعات الحجاج في جميع المشاعر المقدسة،والتي تشمل على مراحل التحضير الأولية والتجهيز وإدارة موسمي حج 1440هـ و 1441هـ.يهدف المشروع إلى تحقيق هدف استراتيجي هام من خلال المساهمة في دعم استراتيجية وأهداف الهيئة الملكية لمدينة مكة المكرمة من خلال تأسيس ضوابط وآليات عمل (تصميم وتخطيـط - تطــوير –إشراف و متابعــة ومراقبــة - تشغيل) لإدارة حركة الحشود والنقل بالمشاعر المقدسة.",
    location: "المدينة المنورة",
    area: "1300 م٢",
    completionDate: "2023",

    partner: "/src/assets/img/logos/logo3.svg",
    statistics:"المشروع في ارقام:",
    budget:"أكثر من 7000 موظف - تنظيم و ادارة 9 محطات قطار",
  },
  {
    id: 2,
    image: "/src/assets/img/galary/04.png",
    title: "  مبنى اداري سراكو",
    description: "     الدمام",
    date: "3600 م",
    categories: ["تصميم معماري"],

      // Full project details
      detailImages: [
        "/src/assets/img/galary/project2-img1.png",
        "/src/assets/img/galary/project2-img2.png",
        "/src/assets/img/galary/project2-img3.png",
       
       
      ],
      fullDescription:
      "مبنــى ســراكو – هــو أول مشــروع مــن نوعــه يقــام فــي مدينــة الدمــام,مبنـى إداري تجـاري مسـتقل، وكانـت الفكـرة الاساسية لأقامة هـذا المشـروع وتخطيطــه هــي احتيــاج العديــد مــن الشــركات المتوســطة والكبيــرة لامتــاك مقــر خــاص بالشــركة يحمــل اســمها ويضــم جميــع موظفــي الشــركة ويجمــع كافــة الأنشطة والادارات والاقسام الخاصـة بهـا، ممـا يسـاهم بشـكل أساسـي فـي خلـق صــورة ذهنيــة عــن حجــم الشــركة، وكذلــك لمــا لــه مــن فائــدة اســتثمارية تعــود عليهـم ) ضمـن الاصول الثابتـة للشـركة والتـي تتزايـد قيمتهـا مـع الوقـت ( ولحريـة وســهولة التقســيم الداخلــي وتوزيــع الانشطة والادارات. المشــروع يقــع فــي قلــب الدمــام ويتوســط أكبــر التجمعــات التجاريــة والادارية والتعليميــة بالدمــام، ويســهل الوصــول إليــه مــن كافــة المحــاور الرئيســة المحيطــة بالدمــام. يمتــاز موقــع المشــروع بارتفــاع المســتوى الاجتماعي والمالــي فــي المنطقــة المحيطـة بـه، حيـث أكبـر وأفخـم التجمعـات السـكنية الراقيـة والمشـروعات الكبـرى، إضافـة إلـى وجـود كافـة الخدمـات الاساسية والترفيهيـة والسـياحية حـول الموقـع.",
      location: "المدينة المنورة",
      area: "1300 م٢",
      completionDate: "2023",
      partner: "/src/assets/img/logos/logo7.svg",
      statistics:"المشروع في ارقام:",
      budget:"اكثر من 100مكتب إداري – 15 محل تجاري – عدد مستفيد 1800",
  },
  {
    id: 3,
    image: "/src/assets/img/galary/02.png",
    title: "  مركز الترحيب",
    description: " المدينة المنورة",
    date: "30000 م",
    categories: [" الخبرة النوعية", "تصميم الواجهات التاريخية "],

      // Full project details
      detailImages: [
        "/src/assets/img/galary/project5-img-1.png",
        "/src/assets/img/galary/project5-img-2.png",
        "/src/assets/img/galary/project5-img-3.png",
        "/src/assets/img/galary/project5-img-4.png",
        "/src/assets/img/galary/project5-img-5.jpg",
        "/src/assets/img/galary/project5-img-6.jpg",
        "/src/assets/img/galary/project5-img-7.jpg",
    
       
      ],
      fullDescription:
      " يتكــون المبنــى مــن مجموعــة أقســام تظهــر روعــة الاسلام عــن طريــق لوحــات بانوراميــة، وتــم دراســة حركــة الــزوار لجــذب المشــاهد بشــكل انسـيابي لاسـتكمال جميـع الاقسام، والقسـم الاول يـروي مكانـة يثـرب قبـل الاسلام فــي جزيــرة العــرب، والقســم الثانــي يركــز علــى الميــراث النبــوي وجهـاد الصحابـة فـي نشـر الاسلام الصحيـح، والقسـم الثالـث يعـرض أسـاليب نشـر الوعـي الاسلامي الصحيـح فـي العالـم، وتضمـن المركـز قاعـات عـرض وصالونـات واسـتراحات ومحـلات هدايـا وسـاحات أنشـطة، كمـا تضمـن المركـز خدمـات تقنيـة المعلومـات والصيانـة وغـرف الكهربـاء، وتـم تسـهيل حركـة الزائــر ليتمتــع بالرؤيــة المميــزة لاقسـام المعـرض.",
      location: "المدينة المنورة",
      area: "1300 م٢",
      completionDate: "2023",
      partner: "/src/assets/img/logos/logo7.svg",
      statistics:"المشروع في ارقام:",
      budget:"تصميم ثلاث اقسام مختلفة للزوار – تصميم اكثر من 8 مناطق خدمات مختلفة",
  },
  {
    id: 4,
    image: "/src/assets/img/galary/05.png",
    title: "  وادي عرنه",
    description: "    مكة المكرمة",
    date: "9 م",
    categories: [" الخبرة النوعية   ", "تطوير مرافق ضيوف الرحمن "],

      // Full project details
      detailImages: [
        "/src/assets/img/galary/project8-img1.png",
        "/src/assets/img/galary/project8-img2.png",
        "/src/assets/img/galary/project8-img3.png",
        "/src/assets/img/galary/project8-img4.jpg",
       
      ],
      fullDescription:
      "هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع. هذا نص تمثيلي يستخدم لتعبئة الفراغات في التصاميم والمشاريع",
      location: " ",
      area: "9 م",
      completionDate: "2023",
      partner: "/src/assets/img/logos/logo3.svg",
      statistics:"المشروع في ارقام:",
      budget:"نواع مختلفة من المباني الخدمية - + 5 انواع مختلفة من المباني المخصصة للترفيه – 3 مناطق استثمارية لاستقبال الزوار",
  },
  {
    id: 5,
    image: "/src/assets/img/galary/07.jpg",
    title: "  تشغيل وصيانة التشجير للشوارع والحدائق",
    description: "    مكة المكرمة",
    date: "1300 م٢",
    categories: ["التصميم والاشراف للمشاريع ", " تشغيل وصيانة", "الخدمات الهندسية"],

      // Full project details
      detailImages: [
        "/src/assets/img/galary/project10-img1.jpg",
        "/src/assets/img/galary/project10-img2.jpg",
        "/src/assets/img/galary/project10-img3.jpg",
        "/src/assets/img/galary/project10-img4.jpg",
        "/src/assets/img/galary/project10-img5.jpg",
       
      ],
      fullDescription:
      "يهدف المشروع إلى تقديم خدمات استشارية للإشراف على مشروعات تشغيل وصيانة التشجير للشوارع والحدائق العامة بمكة المكرمة؛ بما يحافظ على مكانتها، ويرتقي بالمستوى الحضاري اللائق بها",
      location: "المدينة المنورة",
      area: "1300 م٢",
      completionDate: "2023",
      partner: "/src/assets/img/logos/logo7.svg",
      statistics:"المشروع في ارقام:",
      budget:"عمل المشروع في 5 نطاقات في منطقة مكة المكرمة - الاشراف على أكثر 200 ألف شجرة - الاشراف على أكثر من 160 بئر - تهيئة أكثر من 1,500,000 متر مربع من المسطحات الخضراء -إضافة 5000 عنصر معماري يضفي لمسة جمالية - انشاء أكثر من 8 حدائق جديدة - الاشراف على مساحة تتجاوز 350كم2 - الاشراف على أكثر من 100 شارع رئيسي",
  },
  {
    id: 6,
    image: "/src/assets/img/galary/03.png",
    title: "  مجمعات الخدمات الحكومية",
    description: "   الجموم",
    date: "50000 م٢",
    categories: ["تصميم عمراني", " تصميم معماري"],

      // Full project details
      detailImages: [
        "/src/assets/img/galary/project3-img1.png",
        "/src/assets/img/galary/project3-img2.png",
        "/src/assets/img/galary/project3-img3.png",
        "/src/assets/img/galary/project3-img4.jpg",
        "/src/assets/img/galary/project3-img5.png",
        "/src/assets/img/galary/project3-img6.png",
     
       
      ],
      fullDescription:
      "يهـدف المشـروع إلى تحسـين أسـلوب إدارة التنمية العمرانيــة بمنطقــة مكــة المكرمــة، مــن خلال تحقيــق المركزيــة فــي توزيــع وإقامــة مراكــز الخدمـات الحكوميـة، فـي صـورة مجمعـات خدميـة موحــدة بمراكــز التنميــة القرويــة بمحافظــة الجمـوم، والبالـغ عددهـا ( 8 مراكـز قرويـة )، بحيـث تبلـغ مسـاحة المجمـع الواحـد نحـو (50 الف متـر مربــع) ، ليحــوي كل مجمــع بداخلــه مبنــي للامارة، ومبنــى للبلديــة، و مراكــز للشــرطة، والدفــاع المدنــي، والمــرور، وفــروع للجــوازات، والاحوال المدنيــة، والمحكمــة الشــرعية، إلــى جانــب مركــز صحــي، ومــدارس ثانويــة بنيــن وبنــات، ومســجد جامـع، ومكتـب للتوعيـة والارشاد ، ومكتبـة عامـة، وقاعــة مؤتمــرات، وجمعيــة زراعيــة، وأنشــطة حرفيــة ونســائية، بالاضافة إلــى مبنــى أنشــطة اســتثمارية إداريــة تجاريــة مكتبيــة.",
      location: "المدينة المنورة",
      area: "50000 م٢",
      completionDate: "2023",
      partner: "/src/assets/img/logos/logo7.svg",
      statistics:"المشروع في ارقام:",
      budget:"30 دراسة بيئية و مرورية – يخدم 7 مناطق رئيسية - + 7 الاف مستفيد - + 30 الف مسطحات مبينة",
  },
  {
    id: 7,
    image: "/src/assets/img/galary/06.png",
    title: "  مشروع استشاري للجنة التنفيذية",
    description: "    مكة المكرمة",
    date: "70 م",
    categories: [ "التخطيط الحضري","التوجيه الإستراتيجي للمناطق"],

      // Full project details
      detailImages: [
        "/src/assets/img/galary/project6-img1.png",
        "/src/assets/img/galary/project6-img2.png",
        "/src/assets/img/galary/project6-img3.jpg",
        "/src/assets/img/galary/project6-img4.jpg",
        "/src/assets/img/galary/project6-img5.jpg",
        "/src/assets/img/galary/project6-img6.png",
        "/src/assets/img/galary/project6-img7.jpg",
        "/src/assets/img/galary/project6-img8.jpg",
       
       
      ],
      fullDescription:
      "يهدف المشروع إلى تطوير المخطط الحضري والبنية التحتية لجميع منطقة مكة المكرمة من خلال تقديم خدمات هندسية استشارية للجنة التنفيذية للمخططات الخاصة والاستثمارية. يشمل المشروع اعتماد وتقييم أكثر من 60 مخططًا بمساحة تتجاوز 70 كم2، ومتابعة تنفيذ مشاريع الطرق والشوارع، ودراسة واعتماد التصاميم الهندسية، وإعداد التقارير الفنية اللازمة. كما يساهم المشروع في تحسين كفاءة الإجراءات وسرعة إنجاز المعاملات، من خلال إنشاء قاعدة بيانات متكاملة وتطبيق أحدث التقنيات في مجال نظم المعلومات الجغرافية",
      location: "المدينة المنورة",
      area: "1300 م٢",
      completionDate: "2023",
      partner: "/src/assets/img/logos/logo7.svg",
      statistics:"المشروع في ارقام:",
      budget:"اعتماد والإشراف على اكثر من 60 مخطط خاص واستثماري من التصاميم التنفيذية و التقارير الفنية، أعمال الرفع المساحي، وتدقيق واعتماد التصاميم، ومتابعة تنفيذ مشاريع الطرق والشوارع.",
  },
  {
    id: 8,
    image: "/src/assets/img/galary/08.jpg",
    title: "  روضة أطفال نوذجية",
    description: "  مكة المكرمة",
    date: "1500 م٢",
    categories: [" تصميم عمراني  ", "تصميم معماري "],

      // Full project details
      detailImages: [
        "/src/assets/img/galary/project7-img1.jpg",
        "/src/assets/img/galary/project7-img2.jpg",
        "/src/assets/img/galary/project7-img3.jpg",
        "/src/assets/img/galary/project7-img4.jpg",

       
      ],
      fullDescription:
      "روضة كهاتين – هي روضة اطفال نموذجية تقع بمدينة مكة المكرمة صممت علي معايير عالية حيث تم مراعاة الشكل و الوظيفة داخل و خارج المبني من حيث الخامات المستخدمة و الالوان المتنوعة لجذب انظار الاطفال و مستخدمين المبنى",
      location: "المدينة المنورة",
      area: "1300 م٢",
      completionDate: "2023",
      partner: "/src/assets/img/logos/logo10.png",
      statistics:"المشروع في ارقام:",
      budget:"290 طالب",
  },
  {
    id: 9,
    image: "/src/assets/img/galary/09.jpg",
    title: "   دار المدينة ",
    description: " المدينة المنورة",
    date: "611 م",
    categories: [" تصميم عمراني  ", "تصميم معماري "],

      // Full project details
      detailImages: [
        "/src/assets/img/galary/project9-img1.jpg",
        "/src/assets/img/galary/project9-img2.jpg",
        "/src/assets/img/galary/project9-img3.jpg",
       
      ],
      fullDescription:
      "دار المدينة – هو مبني سكني – اداري – تجاري يقع بالمدينة المنورة بالمملكة العربية السعودية , تم تصميم المبني علي الطراز الحديث بحيث يتماشي الشكل العام للمبني مع تنوع استخداماته , كما تم استخدام المسطحات الزجاجية الكبيرة نسبيا في واجاهات المبني لتضيف له الاتصال البصري و الاضاءة الطبيعية و الرحابة في الاستخدام و التصميم .",
      location: "المدينة المنورة",
      area: "1300 م٢",
      completionDate: "2023",
      partner: "/src/assets/img/logos/logo7.svg",
      statistics:"المشروع في ارقام:",
      budget:"55 عدد المستفيدين - عدد الشقق - عدد الأدوا",
  },
  {
    id: 10,
    image: "/src/assets/img/galary/010.jpg",
    title: "      عمارة سكنية",
    description: "    مكة المكرمة",
    date: "750 م",
    categories: ["تصميم عمراني", "تصميم معماري"],

      // Full project details
      detailImages: [
        "/src/assets/img/galary/project11-img1.jpg",
        "/src/assets/img/galary/project11-img2.jpg",
        "/src/assets/img/galary/project11-img3.jpg",
        "/src/assets/img/galary/project11-img4.jpg",
        "/src/assets/img/galary/project11-img5.jpg",
        "/src/assets/img/galary/project11-img6.jpg",
       
      ],
      fullDescription:
      "عمارة حي ام الكتاد – هو مبني سكني خاص يقع بمدينة مكة المكرمة حي الملك فهد , تم تصميم المبني علي الطراز الحديث بحيث تم استخدام كتل معمارة متداخلة في تصميم المبني كما تم استخدام خامات ذات جمالية بصرية و استدامة في التصميم الخارجي للمبني .",
      location: "المدينة المنورة",
      area: "1300 م٢",
      completionDate: "2023",
      partner: "/src/assets/img/logos/logo7.svg",
      statistics:"المشروع في ارقام:",
      budget:"فرد 50",
  },
  {
    id: 11,
    image: "/src/assets/img/galary/4.png",
    title: "      جامع العباس",
    description: "    مكة المكرمة",
    date: "920 م",
    categories: ["تصميم عمراني", "تصميم معماري"],

      // Full project details
      detailImages: [
        "/src/assets/img/galary/project4-img1.jpg",
        "/src/assets/img/galary/project4-img2.jpg",
        "/src/assets/img/galary/project4-img3.jpg",
        "/src/assets/img/galary/project4-img4.jpg",
        
       
      ],
      fullDescription:
      "جامع العباس هو مسجد جامع يقع بحي التنعيم بمكة المكرمة – تم تصميمه علي الطراز الاسلامي الحديث حيث تم تبسيط المفردات المعمارية الاسلامية و استخدامها في واجهات المسجد بالكامل",
      location: "المدينة المنورة",
      area: "1300 م٢",
      completionDate: "2023",
      partner: "/src/assets/img/logos/logo8.png",
      statistics:"المشروع في ارقام:",
      budget:" 650 مصلي",
  },
  {
    id: 12,
    image: "/src/assets/img/galary/012.jpg",
    title: "       مسجد قباء",
    description: "     المدينة المنورة",
    date: "5100 م",
    categories: ["الخبرة النوعية ", "تطوير مرافق ضيوف الرحمن ", "الاشراف والتنفيذ "],

      // Full project details
      detailImages: [
        "/src/assets/img/galary/project12-img1.jpg",
        "/src/assets/img/galary/project12-img2.jpg",
        "/src/assets/img/galary/project12-img3.png",
        "/src/assets/img/galary/project12-img4.png",
        "/src/assets/img/galary/project12-img5.jpg",
        "/src/assets/img/galary/project12-img6.jpg",
     
       
      ],
      fullDescription:
      "استهدف المشروع إعادة تأهيل حالة مسجد قباء والمباني المرافقة له، وتأهيل الأنظمة الحالية الخاصة به، من خلال تقييم الوضع الراهن وعمل المقترحات والتوصيات اللازمة، وإعداد التصميمات والمخططات الخاصة بعملية التطوير، ومن ثم الرسومات التفصيلية ومستندات الطرح اللازمة للتنفيذ",
      location: "المدينة المنورة",
      area: "1300 م٢",
      completionDate: "2023",
      partner: "/src/assets/img/logos/logo7.svg",
      statistics:"المشروع في ارقام:",
      budget:" +50تقرير فني ونوعي، +150 مخطط مساحي (AS built) ، +30 زيارة ميدانية لتقييم الوضع القائم للمسجد،+ 50 مخطط هندسي للحلول المقترحة والمعتمدة ، + 20 اجتماع مع الجهات ذات العلاقة بالمسجد – 3 ورش عمل، + 50 اجتماع دوري مع شركاء الأعمال والشركات المنفذة",
  },
  {
    id: 13,
    image: "/src/assets/img/galary/011.jpg",
    title: "       مجمع الطوارئ",
    description: "      مكة المكرمة بالمشاعر المقدسة ",
    date: "260000 م",
    categories: [" الخبرة النوعية", " تطوير مرافق ضيوف الرحمن"],

      // Full project details
      detailImages: [
        "/src/assets/img/galary/project8-img1.jpg",
        "/src/assets/img/galary/project8-img2.jpg",
        "/src/assets/img/galary/project8-img3.jpg",
    
       
      ],
      fullDescription:
      "يقع مشروع مجمع الطوارئ بمنطقة المشاعر المقدسة – مكة المكرمة حيث يعتبر مشروع مجمع الطوارئ من المشروعات الهامة والاستراتيجية؛ حيث يشتمل على ثلاث مناطق رئيسية لإدارة الازمات وقت الطوارئ وتشغل مساحة المجمع نحو 185 ألف م 2 حيث تم عمل : دراسات الوضع الراهن للمشروع. دراسات المخطط العام وبدائل الفكرة التصميمية للمخطط. إعداد التصميمات المعمارية والإنشائيةإعداد الرسومات التنفيذية للمخطط العام والمباني وإعداد كراسات الطرح على المقاولين.",
      location: "المدينة المنورة",
      area: "1300 م٢",
      completionDate: "2023",
      partner: "/src/assets/img/logos/logo9.png",
      statistics:"المشروع في ارقام:",
      budget:" + 16 مبني خدمي - 5 الاف ثلاجة موتى - + 200 موظف - + 50 مكتب اداري - 3000 مقبرة - + 15 الاف مستفيد مباشر",
  },

];

function MasonaryGrid({
  limit,
  showMoreButton = false,
  selectedProjectIds = [],
  isProjectPage = false, // New prop to determine if this is the full projects page
}) {
  const navigate = useNavigate();

  // Add IDs to your projects array (if not already added)
  const projectsWithIds = projects.map((project, index) => ({
    ...project,
    id: index + 1,
  }));

  // Filter and limit projects
  const filteredProjects =
    selectedProjectIds.length > 0
      ? projectsWithIds.filter((project) =>
          selectedProjectIds.includes(project.id)
        )
      : projectsWithIds;

  const displayedProjects = limit
    ? filteredProjects.slice(0, limit)
    : filteredProjects;

  // Handle "See More" button click
  const handleSeeMore = () => {
    navigate("/projects");
  };

  // Handle project card click (only on the project page)
  const handleProjectClick = (projectId) => {
    if (isProjectPage) {
      navigate(`/projects/${projectId}`); // Navigate to the project detail page
    }
  };

  return (
    <div className="columns-2 sm:columns-2 md:columns-3 pt-10  px-4 md:px-[4rem] bg-accent gap-4 w-full mx-auto font-camel hover:cursor-pointer">
  {displayedProjects.map((project, index) => (
    <div
      key={project.id}
      className={`relative break-inside-avoid group mb-4  rounded-xl overflow-hidden  border-yellow- ${
        showMoreButton && index === displayedProjects.length - 1 ? "relative rounded-bl-none" : ""
      }`}
      onClick={() => handleProjectClick(project.id)}
    >
      {/* Project Card Content */}
      <div
        className={`relative ${
          isProjectPage ? "cursor-pointer hover:scale-105 transition-transform" : ""
        }`}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 sm:h-80 object-cover"
          loading=""
        />

        {/* Semi-Transparent Layer */}
        <div className="absolute inset-0 rounded- bg-black/30 transition-opacity duration-300 group-hover:bg-black/40" />

        {/* Project Overlay Content */}
        <div className="absolute inset-0 p-4 sm:p-6 flex flex-col rounded- justify-between text-white">
          <div className="text-right">
            <h1 className="text-2xl sm:text- md:text-4xl font-bold mb-2">
              {project.title}
            </h1>
            <p className="text-sm sm:text-base opacity-90 line-clamp-2 mb-4">
              {project.description}
            </p>
            <p className="text-sm sm:text-base">{project.date}</p>
          </div>

          {/* Category Buttons */}
          <div
            className={`flex flex-wrap gap-2 justify-start ${
              showMoreButton && index === displayedProjects.length - 1
                ? "mb-20 md:mb-0" // Reduce width of category buttons for the last card
                : "w-" // Full width for other cards
            }`}
          >
            {project.categories.map((category, catIndex) => (
              <button
                key={catIndex}
                className={`px-2 py-1 text-xs text-wrap sm:text-sm bg-transparent md:text-nowrap border border-accent rounded-lg hover:bg-[#6a4a2d] transition-all backdrop-blur-sm ${
                  showMoreButton && index === displayedProjects.length - 1
                    ? "w-" // Set a smaller width for buttons in the last card
                    : "" // Default width for other cards
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Show More Button Overlay - Only on last element */}
      {showMoreButton && index === displayedProjects.length - 1 && (


        <div className=" reletive  inset-0 flex rounded-bl-none  items-end justify-end ">

          <div className=' btn-header'>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleSeeMore();
              }}
              className=" px-8 py- sm:px-6 sm:py-3 bg-accent   absolute left-0 bottom-0 flex items- pt-3 justify-center gap- 1 text-black h-20 sm:h-28 w-20 sm:w-36 md:w-44 lg:w-48 rounded-tr-xl rounded-bl-none   transition-all font-semibold"
            >
              <img src="/src/assets/img/MoreIcon.svg" alt="" className="w-8  sm:w-12" />
              <span className="md:text-3xl text-lg  text-wrap ">تصفح المزيد</span>
            </button>



          </div>
          


        </div>



      )}
    </div>
  ))}
</div>
  );
}

export default MasonaryGrid;
