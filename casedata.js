    const allCases = [
        {
            id: 'ms1_case1', module: '骨关节(1)', title: '病例1: 男，7岁，左髋关节疼痛肿胀',
            images: ['images/影像见习题_slide_2_img_1.jpg'],
            clinicalInfo: '男，7岁。病史：脓毒血症患者，左髋关节疼痛肿胀20天。体查：体温39.8度，WBC 24000/mm^3，左髋肿胀压痛明显。',
            question: '影像学诊断最可能的是？',
            options: ['左股骨急性化脓性骨髓炎并病理性脱位', '左股骨骨结核', '左股骨尤文氏肉瘤', '股骨头无菌性坏死'],
            correctAnswer: '左股骨急性化脓性骨髓炎并病理性脱位',
            analysis: {
                findings: '影像表现：左股骨上段较广泛的骨质破坏，尤以大粗隆下方处较明显，其外侧有少许层状骨膜增生。左股骨头完全脱离髋臼，向外上方移位。',
                diagnosis: '左股骨急性化脓性骨髓炎并髋关节病理性脱位',
                differential: '骨结核（起病隐匿，骨质破坏范围小，死骨细小，邻近骨质疏松，骨膜新生骨不明显，容易越过骨骺线）'
            }
        },
        {
            id: 'ms1_case2', module: '骨关节(1)', title: '病例2: 患儿，5岁，左小腿外伤后发热',
            images: ['images/影像见习题_slide_4_img_1.jpg'],
            clinicalInfo: '患儿，5岁，左小腿外伤后发热、疼痛、肿胀十余天。',
            question: '影像学诊断最可能的是？',
            options: ['左胫骨急性化脓性骨髓炎', '左胫骨骨结核', '左胫骨骨肉瘤', '疲劳性骨折'],
            correctAnswer: '左胫骨急性化脓性骨髓炎',
            analysis: {
                findings: '典型X线：左胫骨骨松质、骨皮质呈边缘模糊的斑点状骨质破坏，广泛骨膜增生，周围软组织明显肿胀。',
                diagnosis: '左胫骨急性化脓性骨髓炎',
                differential: '骨结核（起病隐匿，骨质破坏范围小，死骨细小，临近骨质疏松，骨膜新生骨不明显，容易越过骨骺线）'
            }
        },
        {
            id: 'ms1_case3', module: '骨关节(1)', title: '病例3: 男，8岁，左股骨外伤后流脓',
            images: ['images/影像见习题_slide_6_img_1.jpg'],
            clinicalInfo: '男，8岁；病史：左股骨2年前被人踢破，以后肿痛，行切开排脓后迄今未愈，经常流白黄色脓液。体查：左大腿肿胀，其下段后方穿破流脓。',
            question: '影像学诊断最可能的是？',
            options: ['左股骨慢性骨髓炎', '硬化性骨肉瘤', '骨纤维异常增殖症', '骨巨细胞瘤'],
            correctAnswer: '左股骨慢性骨髓炎',
            analysis: {
                findings: '典型影像学表现：左股骨全部骨干增粗（骨质增生）、密度增高、不规则，其内有多个密度减低区（骨质破坏），在下段后方透光区内（死腔），有条状游离骨片（死骨）。',
                diagnosis: '左股骨慢性骨髓炎，有死骨形成。',
                differential: '硬化性骨肉瘤（进展快，云絮状、斑片状、针状瘤骨，无死骨，骨膜新生骨不成熟且可被破坏，周围软组织肿块、内可有瘤骨）'
            }
        },
        {
            id: 'ms1_case4', module: '骨关节(1)', title: '病例4: 患儿，9岁，右前臂感染后流脓',
            images: ['images/影像见习题_slide_8_img_1.jpg'],
            clinicalInfo: '患儿，男，9岁。病史：1年前右前臂感染后，局部时有疼痛、流脓。',
            question: '影像学诊断最可能的是？',
            options: ['右侧桡骨慢性化脓性骨髓炎', '硬化性骨肉瘤', '骨样骨瘤', '急性化脓性骨髓炎'],
            correctAnswer: '右侧桡骨慢性化脓性骨髓炎',
            analysis: {
                findings: '典型X线：右侧桡骨不规则增粗，为骨内外膜增生形成的骨包壳，其内有大块死骨（↑）和骨质破坏。',
                diagnosis: '右侧桡骨慢性化脓性骨髓炎',
                differential: '硬化性骨肉瘤'
            }
        },
        {
            id: 'ms1_case5', module: '骨关节(1)', title: '病例5: 男性，15岁，右髋关节肿痛',
            images: ['images/影像见习题_slide_10_img_1.jpg', 'images/影像见习题_slide_10_img_2.jpg'],
            clinicalInfo: '男性，15岁，右髋关节肿痛一个月，白细胞升高，体温38°。',
            question: '影像学诊断最可能的是？',
            options: ['右髋关节化脓性关节炎', '右髋关节结核', '类风湿性关节炎', '强直性脊柱炎'],
            correctAnswer: '右髋关节化脓性关节炎',
            analysis: {
                findings: '典型X线：右髋关节骨性关节面模糊，承重面见骨质破坏，关节间隙变窄。',
                diagnosis: '右髋关节化脓性关节炎',
                differential: '关节结核'
            }
        },
        {
            id: 'ms1_case6', module: '骨关节(1)', title: '病例6: 女性，25岁，左大腿肿痛',
            images: ['images/影像见习题_slide_12_img_1.jpg', 'images/影像见习题_slide_12_img_2.jpg'],
            clinicalInfo: '女性，25岁。病史：左大腿周围明显肿痛一个月、周围有波动感，体温38.3°',
            question: '影像学诊断最可能的是？',
            options: ['左侧骶髂关节化脓性关节炎并脓肿形成', '左侧骶髂关节结核', '骶骨骨巨细胞瘤', '强直性脊柱炎早期'],
            correctAnswer: '左侧骶髂关节化脓性关节炎并脓肿形成',
            analysis: {
                findings: '典型CT表现：左侧骶髂关节中份可见多发骨质破坏，左侧髂窝及臀肌区域可见多发囊状低密度影（脓肿），肌间隙消失。',
                diagnosis: '左侧骶髂关节化脓性关节炎并周围多发脓肿形成。',
                differential: '关节结核'
            }
        },
        {
            id: 'ms1_case8', module: '骨关节(1)', title: '病例8: 女性，32岁，右膝关节疼痛',
            images: ['images/影像见习题_slide_15_img_1.jpg'],
            clinicalInfo: '女性，32岁。右膝关节疼痛伴活动障碍6月。',
            question: '影像学诊断最可能的是？',
            options: ['右膝关节结核', '右膝关节化脓性关节炎', '色素沉着绒毛结节性滑膜炎', '退行性骨关节病'],
            correctAnswer: '右膝关节结核',
            analysis: {
                findings: '典型X线：右膝关节上、下骨性关节面有骨质破坏，以非负重面为甚，股骨外髁破坏较明显，右膝关节外侧间隙明显变窄，膝关节周围软组织肿胀。',
                diagnosis: '右膝关节结核',
                differential: '化脓性关节炎'
            }
        },
        {
            id: 'ms1_case9', module: '骨关节(1)', title: '病例9: 女，51岁，腰痛一年半',
            images: ['images/影像见习题_slide_17_img_1.png'],
            clinicalInfo: '女,51岁；病史:腰痛一年半，既往肺结核病史。体查:L2及L3棘突压痛,棘旁压痛,拾物试验(+)。',
            question: '影像学诊断最可能的是？',
            options: ['L2、3、5椎体结核', '椎体转移瘤', '化脓性脊柱炎', '外伤性压缩骨折'],
            correctAnswer: 'L2、3、5椎体结核',
            analysis: {
                findings: '典型X线：L3、5椎体楔形改变,密度不均,L2、3椎体相对缘及L5椎体下缘可见骨质破坏，L2/3椎间隙变窄。',
                diagnosis: 'L2、3、5椎体结核。',
                differential: '椎体转移瘤，外伤性压缩骨折'
            }
        },
        {
            id: 'ms1_case10', module: '骨关节(1)', title: '病例10: 男，39岁，右膝肿块3年',
            images: ['images/影像见习题_slide_19_img_2.jpg'],
            clinicalInfo: '男，39岁，右膝肿块3年;体查：右膝关节外上方稍肿大，无压痛，膝关节活动可。',
            question: '影像学诊断最可能的是？',
            options: ['右股骨远端骨巨细胞瘤', '右股骨远端骨囊肿', '动脉瘤样骨囊肿', '软骨母细胞瘤'],
            correctAnswer: '右股骨远端骨巨细胞瘤',
            analysis: {
                findings: '典型X线：右股骨远端可见膨胀性骨质破坏区，其内见小梁状分隔，呈多房样改变（皂泡样），病变达关节面下，骨性关节面构成部分骨壳，骨壳菲薄，外侧骨皮质完整，与正常骨分界清，无硬化边及骨膜反应。',
                diagnosis: '右股骨远端骨巨细胞瘤。',
                differential: '骨囊肿 、软骨母细胞、动脉瘤样骨囊肿、棕色瘤'
            }
        },
        {
            id: 'ms1_case12', module: '骨关节(1)', title: '病例12: 18岁，男，右上臂疼痛1周',
            images: ['images/影像见习题_slide_23_img_1.jpg'],
            clinicalInfo: '18岁，男。病史：右上臂疼痛1周。',
            question: '影像学诊断最可能的是？',
            options: ['骨囊肿并病理性骨折', '骨巨细胞瘤', '动脉瘤样骨囊肿', '骨纤维异常增殖症'],
            correctAnswer: '骨囊肿并病理性骨折',
            analysis: {
                findings: '典型X线：右肱骨上段可见卵圆形膨胀性骨质破坏区，边界清晰，周围未见骨质增生，边缘部分变薄的骨皮质断裂。',
                diagnosis: '骨囊肿并病理性骨折',
                differential: '骨巨细胞瘤、软骨母细胞、动脉瘤样骨囊肿、棕色瘤'
            }
        },
        {
            id: 'ms1_case13', module: '骨关节(1)', title: '病例13: 男，11岁，右股骨肿块',
            images: ['images/影像见习题_slide_27_img_1.jpg', 'images/影像见习题_slide_27_img_2.jpg'],
            clinicalInfo: '男，11岁；病史：2月前右股骨内上方长一肿块，约红枣大小，不能活动，近20天来逐渐长大，极易出血。体查：明显消瘦，恶病质，右大腿下端近膝关节处内侧可见一肿块，明显菜花样外观，皮肤血管扩张，局部明显肿胀。',
            question: '影像学诊断最可能的是？',
            options: ['骨肉瘤 (Osteosarcoma)', '化脓性骨髓炎', '尤文氏肉瘤 (Ewing\'s sarcoma)', '骨巨细胞瘤恶变'],
            correctAnswer: '骨肉瘤 (Osteosarcoma)',
            analysis: {
                findings: '典型X线：右股骨下段1/3处见大片云状骨质破坏和肿瘤骨形成，股骨下段可见层状骨膜增生，以内侧缘及前缘较明显，部分渐起破坏，形成骨膜三角（Codman三角），股骨内侧软组织肿胀，其内可见多发斑片状肿瘤骨。',
                diagnosis: '骨肉瘤 (Osteosarcoma)',
                differential: '化脓性骨髓炎、Ewing氏肉瘤、疲劳骨折'
            }
        },
        {
            id: 'ms1_case15', module: '骨关节(1)', title: '病例15: 男，86岁，前列腺癌患者',
            images: ['images/影像见习题_slide_31_img_1.jpg'],
            clinicalInfo: '男，86岁。病史：证实为前列腺癌患者，近日来头痛、全身骨痛，体重减轻。体查：有前列腺癌体征。',
            question: '影像学诊断最可能的是？',
            options: ['前列腺癌骨转移', '多发性骨髓瘤', '骨嗜酸性肉芽肿', '大理石骨病'],
            correctAnswer: '前列腺癌骨转移',
            analysis: {
                findings: '典型X线：双肩胛骨、肱骨、锁骨及颈椎骨质密度不均匀增高（成骨性改变），双侧肩胛骨、肱骨及锁骨另可见多数、大小不等点状及片状骨质破坏区（溶骨性改变）。为混合型骨转移。',
                diagnosis: '前列腺癌广泛转移至骨骼',
                differential: '骨髓瘤、骨嗜酸性肉芽肿'
            }
        },
        {
            id: 'resp2_case1', module: '呼吸(2)', title: '病例1: 女性，50岁，反复感染咯血',
            images: ['images/4._CC呼吸（二）见习(2)_slide_25_img_2.jpg', 'images/4._CC呼吸（二）见习(2)_slide_25_img_3.jpg'],
            clinicalInfo: '女性，50岁，反复发作肺部感染、咯血，患者从儿时至今有反复咯血病史。无结核病史。T-spot、PPD（-）。无明显发热。',
            question: '最可能的诊断是什么？',
            options: ['右下肺囊状支气管扩张', '慢性纤维空洞型肺结核', '多发性肺脓肿', '肺癌并阻塞性肺炎'],
            correctAnswer: '右下肺囊状支气管扩张',
            analysis: {
                findings: 'X线：右中下肺野见多发大小不等囊状透光区，周围见斑片状渗出。CT：右肺下叶见多个薄壁空腔，呈“葡萄串”样排列。',
                diagnosis: '右下肺囊状支气管扩张',
                differential: '1）多发含气肺囊肿 2）肺结核（结合临床病史鉴别）'
            }
        },
        {
            id: 'resp2_case2', module: '呼吸(2)', title: '病例2: 女性，8岁，突发右侧胸痛',
            images: ['images/4._CC呼吸（二）见习(2)_slide_29_img_3.jpg', 'images/4._CC呼吸（二）见习(2)_slide_30_img_2.jpg'],
            clinicalInfo: '病史：女性，8岁。反复咳嗽咳痰1周，突发右侧胸痛1天。无结核病史。体查：T38.5℃，P112次/分，双肺呼吸音低，未闻及干湿啰音。WBC 15×10^9/L。',
            question: '最可能的诊断是什么？',
            options: ['右下肺大叶性肺炎（实变期）', '右下肺不张', '右下肺干酪性肺炎', '右下肺肺梗死'],
            correctAnswer: '右下肺大叶性肺炎（实变期）',
            analysis: {
                findings: 'X线表现：右中下肺野见大片密度增高灶，边界较清晰，以斜裂为界。',
                diagnosis: '右下肺大叶性肺炎（实变期）',
                differential: '1）肺不张 2）阻塞性肺炎 3）大叶性干酪样肺炎'
            }
        },
        {
            id: 'resp2_case4', module: '呼吸(2)', title: '病例4: 男性，34岁，发热咳嗽一周',
            images: ['images/4._CC呼吸（二）见习(2)_slide_38_img_2.jpg'],
            clinicalInfo: '男性，34岁，发热、咳嗽一周，无结核病史。体查：左下肺呼吸音减低。T-spot、PPD（-）。WBC 18×10^9/L。',
            question: '最可能的诊断是什么？',
            options: ['急性肺脓肿', '空洞型肺结核', '癌性空洞', '肺囊肿继发感染'],
            correctAnswer: '急性肺脓肿',
            analysis: {
                findings: 'X线：左中肺野见大片密度增高影，边缘模糊，病变内见一厚壁空洞（箭头所指），内壁光整，并有一液平。',
                diagnosis: '急性肺脓肿',
                differential: '1）结核空洞 2）癌性空洞'
            }
        },
        {
            id: 'resp2_case5', module: '呼吸(2)', title: '病例5: 女，17岁，咳嗽半年',
            images: ['images/4._CC呼吸（二）见习(2)_slide_46_img_2.jpg'],
            clinicalInfo: '女，17岁。病史：咳嗽半年，有低汗、盗热。体查：颈淋巴结肿大。T-spot、PPD（+）。',
            question: '最可能的诊断是什么？',
            options: ['原发综合征', '中央型肺癌', '肺门淋巴瘤', '肺结节病'],
            correctAnswer: '原发综合征',
            analysis: {
                findings: 'X线：右上肺野可见斑片状、结节状密度增高，边界欠清，为结核性原发病灶；右肺门增大、密度增高，为肺门淋巴结肿大，代表结核性淋巴结炎；原发灶与淋巴结炎之间有索条状阴影相连代表淋巴管炎。',
                diagnosis: '原发综合征',
                differential: '1）肺癌：肺癌多为分叶状肿块，周围可见毛刺征，钙化及“卫星灶”少见，可有胸膜凹陷征。2）淋巴瘤。3）肺结节病。'
            }
        },
        {
            id: 'resp2_case7', module: '呼吸(2)', title: '病例7: 男，40岁，发烧咳嗽半月',
            images: ['images/4._CC呼吸（二）见习(2)_slide_51_img_2.png'],
            clinicalInfo: '病史：男，40岁，发烧、咳嗽半月余。体查：T38.3℃，重病容、思睡，两肺呼吸音减低。T-spot、PPD（+）。',
            question: '最可能的诊断是什么？',
            options: ['急性血行播散型肺结核', '慢性血行播散型肺结核', '矽肺', '双肺多发转移瘤'],
            correctAnswer: '急性血行播散型肺结核',
            analysis: {
                findings: 'X线表现：两肺野自肺尖到肺底，从肺门到肺外带满布大小相等，密度相同，分布均匀的粟粒状结节影，边缘大多清楚，肺纹理绝大部分不能分辨。',
                diagnosis: '急性血行播散型肺结核。',
                differential: '1）矽肺（职业病史）2）双肺多发转移灶（原发肿瘤病史）'
            }
        },
        {
            id: 'resp2_case8', module: '呼吸(2)', title: '病例8: 男性，50岁，干咳5个月',
            images: ['images/4._CC呼吸（二）见习(2)_slide_54_img_2.jpg'],
            clinicalInfo: '病史：男性，50岁，疲倦无力，干咳5个月。体查：无特殊发现。T-spot、PPD（+）。',
            question: '最可能的诊断是什么？',
            options: ['双肺浸润性肺结核', '双肺支气管肺炎', '双肺多发肺脓肿', '双肺癌性空洞'],
            correctAnswer: '双肺浸润性肺结核',
            analysis: {
                findings: 'X线表现：左中上肺野、右上肺野见片状、斑片状模糊高密度影，周围有条索状高密度影，左上肺野见空洞（红色箭头）',
                diagnosis: '双肺浸润性肺结核。',
                differential: '1）肺脓肿 2）癌性空洞'
            }
        },
        {
            id: 'resp2_case9', module: '呼吸(2)', title: '病例9: 男性，56岁，咳嗽咳痰9个月',
            images: ['images/4._CC呼吸（二）见习(2)_slide_60_img_2.png'],
            clinicalInfo: '男性，56岁，疲倦无力，咳嗽咳痰9个月。体查：双肺呼吸音低。T-spot、PPD（+）。',
            question: '最可能的诊断是什么？',
            options: ['双上肺结核（慢性纤维空洞型）并双下肺播散', '双肺癌伴多发转移', '双肺多发性肺脓肿', '特发性肺纤维化'],
            correctAnswer: '双上肺结核（慢性纤维空洞型）并双下肺播散',
            analysis: {
                findings: 'X线表现：双肺野见密集纤维化病变，纤维化病变中可见由空洞；肺门上移，下肺野纹理呈垂柳状改变（垂柳征）。气管右移及胸廓变形为肺组织纤维化所致；双下肺见沿支气管纹理分布的播散灶。',
                diagnosis: '双上肺结核（慢性纤维空洞型）并双下肺播散。',
                differential: '1）肺癌 2）肺脓肿'
            }
        },
        {
            id: 'resp2_case11', module: '呼吸(2)', title: '病例11: 男性，65岁，干咳4个月',
            images: ['images/4._CC呼吸（二）见习(2)_slide_68_img_2.png'],
            clinicalInfo: '病史：男性，65岁，干咳4个月，咳嗽咳痰、痰中带血半月。吸烟史20余年。体查：右肺呼吸音稍低。T-spot、PPD（-）。',
            question: '最可能的诊断是什么？',
            options: ['右肺周围型肺癌', '炎性肌纤维母细胞瘤', '肺结核球', '肺错构瘤'],
            correctAnswer: '右肺周围型肺癌',
            analysis: {
                findings: 'X线表现：右中肺野见一肿块影，呈分叶状，周围见毛刺，大小约。',
                diagnosis: '右肺周围型肺癌。',
                differential: '1）炎性肌纤维母细胞瘤（边缘光滑，无或偶有分叶）2）结核球（边缘清楚，内部可有钙化，周围常伴“卫星灶”）3）肺错构瘤（边缘光滑，无毛刺，“爆米花”样钙化）'
            }
        },
        {
            id: 'resp2_case12', module: '呼吸(2)', title: '病例12: 男,61岁，胃癌术后',
            images: ['images/4._CC呼吸（二）见习(2)_slide_72_img_2.jpg'],
            clinicalInfo: '男,61岁。咳嗽咳痰、全身不适、无力半年。6年前曾行胃癌切除术。体查：双肺呼吸音低。T-spot、PPD（-）。',
            question: '最可能的诊断是什么？',
            options: ['双肺多发转移瘤', '弥漫性肺癌', '血行播散型肺结核', '多发性肺脓肿'],
            correctAnswer: '双肺多发转移瘤',
            analysis: {
                findings: 'X线表现：双肺野可见多枚圆形致密影，以下肺野为重，大小不等，部分病灶边缘清楚，部分病灶不清楚，但密度均匀',
                diagnosis: '双肺多发转移瘤。',
                differential: '弥漫性肺癌（弥漫性肺癌为双肺广泛分布的细小结节，该患者有原发肿瘤病史）'
            }
        },
        {
            id: 'cv_case1', module: '循环系统', title: '病例1: 47岁男性，心悸气促',
            images: ['images/5._CC循环系统见习(1)_slide_75_img_2.jpg', 'images/5._CC循环系统见习(1)_slide_75_img_3.jpg'],
            clinicalInfo: '47岁，男性，心悸、气促2年。体查：双肺呼吸音清无啰音，心率120次/分，律齐，二尖瓣区闻及舒张期杂音。',
            question: '根据影像表现和病史，最可能的诊断是？',
            options: ['二尖瓣狭窄', '高血压性心脏病', '房间隔缺损', '法洛氏四联症'],
            correctAnswer: '二尖瓣狭窄',
            analysis: {
                findings: 'X线表现：肺动脉段饱满，右心缘双房影，侧位心前间隙变窄，心后缘上段向后膨隆，双上肺静脉增粗。提示左房右室大，肺淤血。心脏增大呈二尖瓣型。',
                diagnosis: '左房、右室大，肺淤血（二尖瓣狭窄）',
                differential: '无'
            }
        },
        {
            id: 'cv_case2', module: '循环系统', title: '病例2: 66岁男性，高血压病史',
            images: ['images/5._CC循环系统见习(1)_slide_77_img_2.jpg'],
            clinicalInfo: '男,66岁。高血压病史10余年，现感心悸、气促。',
            question: '最可能的诊断是？',
            options: ['高血压性心脏病', '二尖瓣狭窄', '肺源性心脏病', '心包积液'],
            correctAnswer: '高血压性心脏病',
            analysis: {
                findings: 'X线表现：心脏呈靴形，心腰凹陷，左室段向左突出并向下延长，心后间隙变窄。提示左室增大。属主动脉型心。',
                diagnosis: '高心病。',
                differential: '无'
            }
        },
        {
            id: 'cv_case3', module: '循环系统', title: '病例3: 47岁女性，咳嗽胸闷',
            images: ['images/5._CC循环系统见习(1)_slide_79_img_2.png'],
            clinicalInfo: '女，47岁。病史：咳嗽、胸闷20天。',
            question: '最可能的诊断是？',
            options: ['心包积液', '扩张型心肌病', '二尖瓣病变', '肺源性心脏病'],
            correctAnswer: '心包积液',
            analysis: {
                findings: 'X线表现：（A）示心脏普遍明显增大似 “球形”，心缘正常弧度消失，呈“普大型心”，侧位片（B）示食道明显受压向后移位、变形（↑）。',
                diagnosis: '心包积液 。',
                differential: '无'
            }
        },
        {
            id: 'cv_case6', module: '循环系统', title: '病例6: 14岁女性，阵发性胸痛',
            images: ['images/5._CC循环系统见习(1)_slide_85_img_2.jpg', 'images/5._CC循环系统见习(1)_slide_85_img_3.jpg'],
            clinicalInfo: '女，14岁，阵发性胸痛1周。',
            question: '最可能的诊断是？',
            options: ['房间隔缺损', '室间隔缺损', '动脉导管未闭', '二尖瓣狭窄'],
            correctAnswer: '房间隔缺损',
            analysis: {
                findings: 'X线表现：心脏增大，心尖圆钝、上翘，主动脉结缩小；侧位示心前间隙变窄，心前缘与胸骨接触面增加；右房心高比>1/2；右房右室增大；二尖瓣心型；肺充血，肺纹理边缘清晰；肺动脉段膨隆。',
                diagnosis: '右房右室增大，肺充血，房间隔缺损。',
                differential: '无'
            }
        },
        {
            id: 'cv_case7', module: '循环系统', title: '病例7: 2月男婴，发绀',
            images: ['images/5._CC循环系统见习(1)_slide_87_img_2.png'],
            clinicalInfo: '男，2月，嘴唇发绀数天，发育迟缓，胸骨左缘2-4肋间可闻及较响亮的收缩期杂音。',
            question: '最可能的诊断是？',
            options: ['法洛氏四联症', '完全性大动脉转位', '房间隔缺损', '室间隔缺损'],
            correctAnswer: '法洛氏四联症',
            analysis: {
                findings: 'X线表现：心影呈靴型，心尖圆钝上翘，心腰凹陷；主动脉影增宽；肺血减少。',
                diagnosis: '先天性心脏病（法洛氏四联症）',
                differential: '无'
            }
        },
        {
            id: 'abd1_case1', module: '腹部(1)', title: '病例1: 男，27岁，吞咽障碍',
            images: ['images/6._CC腹部（一）见习(1)_slide_39_img_1.png'],
            clinicalInfo: '男，27岁；病史：腹部肿物7年，20天前突然大量呕血，吞咽障碍。',
            question: '最可能的诊断是？',
            options: ['食道静脉曲张', '食管癌', '食管憩室', '食管平滑肌瘤'],
            correctAnswer: '食道静脉曲张',
            analysis: {
                findings: '典型X线：食管全长轮廓不规则，边缘锯齿状，粘膜皱襞失去正常纵行形态，增宽且迂曲，多数大小不等蚯蚓状充盈缺损。（透视下钡剂通过顺利，无受阻，全长有蠕动。）',
                diagnosis: '食道静脉曲张',
                differential: '食管癌（恶病质，粘膜皱襞破坏，不规则充盈缺损，管壁僵硬）；唾液和气泡（会下移、消失）'
            }
        },
        {
            id: 'abd1_case2', module: '腹部(1)', title: '病例2: 男，46岁，吞咽困难',
            images: ['images/6._CC腹部（一）见习(1)_slide_42_img_1.jpg'],
            clinicalInfo: '男，46岁；病史：一个多月来吞咽困难，近一周来只能吃流汁。体查：心肺无异常。',
            question: '最可能的诊断是？',
            options: ['食管癌', '食管静脉曲张', '腐蚀性食管炎狭窄', '食管良性溃疡'],
            correctAnswer: '食管癌',
            analysis: {
                findings: '典型X线：食管胸中段有一长段狭窄，边缘不规则，该段粘膜皱襞破坏，其上方食管扩张。透视下该段食管无蠕动波通过，管壁僵硬，收缩力减弱。',
                diagnosis: '食管癌',
                differential: '溃疡（小，粘膜皱襞无破坏，管腔可扩）；腐蚀性食管炎狭窄（长段向心性狭窄）；食管静脉曲张（肝硬化，串珠状，柔软）'
            }
        },
        {
            id: 'abd1_case3', module: '腹部(1)', title: '病例3: 男，28岁，上腹隐痛呕血',
            images: ['images/6._CC腹部（一）见习(1)_slide_49_img_1.jpg'],
            clinicalInfo: '男，28岁；病史：上腹部间歇性隐痛2年，突然大呕血1小时入院，经半月治疗后症状消失。体查：一般可，心肺（—），腹软，上腹部轻压痛。',
            question: '最可能的诊断是？',
            options: ['良性胃溃疡', '胃癌（溃疡型）', '胃平滑肌瘤', '胃憩室'],
            correctAnswer: '良性胃溃疡',
            analysis: {
                findings: 'X线表现：胃体小弯侧可见一乳头状突出之浓钡斑影（龛影），约0.5*1.0CM大小，周边轻度水肿，周围见项圈征。',
                diagnosis: '良性胃溃疡。',
                differential: '胃癌（环堤征、半月征、指压征、裂隙征、粘膜皱襞中断破坏）'
            }
        },
        {
            id: 'abd1_case4', module: '腹部(1)', title: '病例4: 女，33岁，腹痛消瘦',
            images: ['images/6._CC腹部（一）见习(1)_slide_56_img_2.jpg', 'images/6._CC腹部（一）见习(1)_slide_56_img_3.jpg'],
            clinicalInfo: '女，33岁；病史：一年前起有腹痛，食欲不佳，消瘦约10公斤。体查：右中上腹部扪及肿块。',
            question: '最可能的诊断是？',
            options: ['胃癌', '胃腺瘤样息肉', '胃淋巴瘤', '慢性胃炎'],
            correctAnswer: '胃癌',
            analysis: {
                findings: '典型X线：胃体大弯部及胃窦可见团块状突向胃体的充盈缺损，局部黏膜皱襞中断消失。',
                diagnosis: '胃癌。',
                differential: '腺瘤样息肉（边缘光整）；淋巴瘤（舒张伸展性）。'
            }
        },
        {
            id: 'abd1_case5', module: '腹部(1)', title: '病例5: 男，43岁，间歇性上腹痛20年',
            images: ['images/6._CC腹部（一）见习(1)_slide_67_img_1.jpg'],
            clinicalInfo: '男，43岁；病史：间歇性上腹部疼痛20年。体查：右上腹部有压痛。',
            question: '最可能的诊断是？',
            options: ['十二指肠球部溃疡', '十二指肠癌', '十二指肠憩室', '胰头癌压迫'],
            correctAnswer: '十二指肠球部溃疡',
            analysis: {
                findings: '典型X线：胃的形态和大小均正常；十二指肠球部失去正常形态而呈分叶状。',
                diagnosis: '十二指肠球部溃疡。',
                differential: '恶性肿瘤（粘膜中断、破坏，软组织肿块）'
            }
        },
        {
            id: 'abd1_case6', module: '腹部(1)', title: '病例6: 女，54岁，下腹胀便血',
            images: ['images/6._CC腹部（一）见习(1)_slide_71_img_1.jpg'],
            clinicalInfo: '女，54岁；病史：四月来下腹胀，大便次数增多，且有粘膜和血。体查：大便检查未发现阿米巴。',
            question: '最可能的诊断是？',
            options: ['乙状结肠癌', '肠结核', '良性息肉', '溃疡性结肠炎'],
            correctAnswer: '乙状结肠癌',
            analysis: {
                findings: '典型X线：钡灌肠示乙状结肠下端肠腔变窄，轮廓不规则，有不规则形充盈缺损，代表肠腔突出之肿块，该处粘膜破坏消失，范围为5cm长，与正常组织分界明显。透视下该段肠道不能扩大或缩小，代表肠壁无伸缩性。',
                diagnosis: '乙状结肠癌。',
                differential: '良性肿瘤及息肉（光滑，粘膜规则，蠕动可）；肠结核（回盲部多见，盲肠挛缩向上）；转移（原发瘤）。'
            }
        },
        {
            id: 'abd1_case8', module: '腹部(1)', title: '病例8: 女，41岁，黄疸、腹痛1月',
            images: ['images/6._CC腹部（一）见习(1)_slide_89_img_1.jpg'],
            clinicalInfo: '女，41岁；病史：黄疸、腹痛1月。体查：腹平软，未扪及包块，无压痛 。',
            question: '最可能的诊断是？',
            options: ['胆总管下段结石并胆道梗阻', '胆管癌', '胰头癌', '胆道蛔虫'],
            correctAnswer: '胆总管下段结石并胆道梗阻',
            analysis: {
                findings: 'ERCP表现：经十二指肠镜注入造影剂后摄片，胆总管宽约2.5CM，下端见多处充盈缺损负影，其以上水平肝内、外胆管扩张。',
                diagnosis: '胆总管下段结石并胆道梗阻 。',
                differential: '气泡（可移动）；胆管癌（管腔不规则，CT或MRI软组织密度，有强化，胆管壁受累）。'
            }
        },
        {
            id: 'abd2_case1', module: '腹部(2)', title: '病例1: 女，23岁，腹胀腹痛5天',
            images: ['images/7._CC腹部（二）_slide_32_img_1.png'],
            clinicalInfo: '女，23岁。腹胀腹痛及肛门停止排气5天。',
            question: '最可能的诊断是？',
            options: ['机械性小肠梗阻', '麻痹性肠梗阻', '结肠梗阻', '绞窄性肠梗阻'],
            correctAnswer: '机械性小肠梗阻',
            analysis: {
                findings: '中上腹部可见多个大小不一、高低不等的气-液平面，呈阶梯状排列，这是由于小肠梗阻，梗阻以上肠腔内容物通过障碍、滞留，导致该肠管积气积液并扩张。',
                diagnosis: '机械性小肠梗阻。',
                differential: '麻痹性肠梗阻（通常全肠道扩张，液平少）。'
            }
        },
        {
            id: 'abd2_case2', module: '腹部(2)', title: '病例2: 右腰痛10余年',
            images: ['images/7._CC腹部（二）_slide_55_img_1.jpg'],
            clinicalInfo: '病史：右侧腰痛间歇发作10余年。体查：右肾区叩痛。',
            question: '最可能的诊断是？',
            options: ['右肾铸型结石', '右肾结核钙化', '胆囊结石', '肾细胞癌钙化'],
            correctAnswer: '右肾铸型结石',
            analysis: {
                findings: 'KUB示：右肾区见鹿角形高密度影，边缘光滑锐利，其形态与肾盂肾盏分布形态相似，因此又叫铸型结石。',
                diagnosis: '右肾铸型结石',
                differential: '胆囊不透X线结石（可通过侧位片鉴别，肾结石与脊柱重叠，胆囊结石位于脊柱前方）。'
            }
        },
        {
            id: 'abd2_case5', module: '腹部(2)', title: '病例5: 女，55岁，无痛性肉眼血尿',
            images: ['images/7._CC腹部（二）_slide_70_img_2.png', 'images/7._CC腹部（二）_slide_70_img_3.png'],
            clinicalInfo: '女，55岁。病史：无痛性肉眼血尿半年。体查：（—）。',
            question: '最可能的诊断是？',
            options: ['左肾占位性病变（肾癌可能）', '左肾囊肿', '左肾盂积水', '左肾结核'],
            correctAnswer: '左肾占位性病变（肾癌可能）',
            analysis: {
                findings: '常规经静脉注入造影剂后，双侧肾盂、肾盏显影，左肾上盏明显受压变形，呈弧形抱球样改变，边缘尚光滑，未见明显破坏征象。双侧输尿管、膀胱未见异常。',
                diagnosis: '考虑左肾占位性病变（左肾癌？），建议CT扫描明确。',
                differential: '无'
            }
        },
        {
            id: 'abd2_case6', module: '腹部(2)', title: '病例6: 女性，34岁，体检发现肝脏占位',
            images: ['images/7._CC腹部（二）_slide_87_img_1.jpg'],
            clinicalInfo: '女性，34岁，体检时彩超发现肝脏不均匀回声灶，实验室检查无特殊。',
            question: '最可能的诊断是？',
            options: ['肝海绵状血管瘤', '原发性肝癌', '肝转移瘤', '肝囊肿'],
            correctAnswer: '肝海绵状血管瘤',
            analysis: {
                findings: '平扫时肝右叶可见一椭圆形均匀性低密度灶，边界清楚；增强扫描呈“快进慢出”的典型强化：早期边缘呈结节样强化，随着时间的推移，强化区域呈进行性、向心性扩散，延迟扫描病灶呈高等密度填充较大病灶，其中心低密度区（纤维瘢痕组织）无明显强化。',
                diagnosis: '肝海绵状血管瘤。',
                differential: '1.原发性肝癌 2.肝转移瘤。'
            }
        },
        {
            id: 'neuro_case1', module: '神经系统', title: '病例1: 男，33岁，外伤后头皮血肿',
            images: ['images/8._2025神经系统见习_slide_39_img_1.jpg'],
            clinicalInfo: '男，33岁。10分钟前从楼梯上跌下，头部先着地。体查：左额部头皮血肿。',
            question: '最可能的诊断是？',
            options: ['左额部硬膜外血肿(急性)', '左额部硬膜下血肿(急性)', '脑挫裂伤', '蛛网膜下腔出血'],
            correctAnswer: '左额部硬膜外血肿(急性)',
            analysis: {
                findings: '典型CT表现：左额部颅骨内板下见一梭形高密度灶,邻近脑实质受压,脑沟变浅。',
                diagnosis: '左额部硬膜外血肿(急性)',
                differential: '硬膜下血肿（颅骨内板下新月形、广泛的均匀高密度区, 范围广泛,可跨越颅缝）'
            }
        },
        {
            id: 'neuro_case2', module: '神经系统', title: '病例2: 男，47岁，外伤后昏迷',
            images: ['images/8._2025神经系统见习_slide_42_img_1.png'],
            clinicalInfo: '男，47岁；病史：头部外伤4小时。体查：BP139/79mmHg，神志不清，昏迷，双侧瞳孔散大，口吐白沬。',
            question: '最可能的诊断是？',
            options: ['左侧额顶部硬膜下血肿(急性)', '左侧额顶部硬膜外血肿(急性)', '大面积脑梗死', '弥漫性轴索损伤'],
            correctAnswer: '左侧额顶部硬膜下血肿(急性)',
            analysis: {
                findings: '典型CT：左侧额顶部颅骨内板下可见新月形高密度出血灶，左侧额顶叶脑实质密度普遍减低，灰白质分界模糊，左侧脑室受压变窄并向右侧移位，脑中线结构向右移位。',
                diagnosis: '左侧额顶部硬膜下血肿(急性)。',
                differential: '硬膜外血肿'
            }
        },
        {
            id: 'neuro_case4', module: '神经系统', title: '病例4: 女，86岁，头晕头痛',
            images: ['images/8._2025神经系统见习_slide_49_img_1.jpg'],
            clinicalInfo: '女，86岁。头晕、头痛1小时。',
            question: '最可能的诊断是？',
            options: ['蛛网膜下腔出血', '脑室内出血', '硬膜下血肿', '脑梗死'],
            correctAnswer: '蛛网膜下腔出血',
            analysis: {
                findings: '典型CT：纵裂池及外侧裂池增宽,密度增高。',
                diagnosis: '蛛网膜下腔出血。',
                differential: '无'
            }
        },
        {
            id: 'neuro_case7', module: '神经系统', title: '病例7: 男，38岁，头痛20分钟',
            images: ['images/8._2025神经系统见习_slide_56_img_1.jpg'],
            clinicalInfo: '男，38岁。头痛20分钟。体查：BP160/80mmHg，神志清楚，瞳孔等大等圆。',
            question: '最可能的诊断是？',
            options: ['高血压性脑出血', '外伤性脑内血肿', '动脉瘤破裂出血', '动静脉畸形破裂出血'],
            correctAnswer: '高血压性脑出血',
            analysis: {
                findings: '典型CT：右侧基底节区见片状高密度灶，脑中线结构居中。',
                diagnosis: '高血压性脑出血',
                differential: '外伤性脑内血肿（外伤着力点相关，表浅）；动脉瘤破裂后血肿（明显强化，破裂后蛛网膜下腔出血）；动静脉畸形破裂后血肿（增强后引流静脉及增粗供血动脉）'
            }
        },
        {
            id: 'neuro_case8', module: '神经系统', title: '病例8: 女，70岁，左侧肢体乏力',
            images: ['images/8._2025神经系统见习_slide_62_img_1.png'],
            clinicalInfo: '女，70岁。左侧肢体乏力一天半。体查：左侧肢力3~4级。',
            question: '最可能的诊断是？',
            options: ['右额颞叶脑梗塞', '右额颞叶肿瘤', '右额颞叶脑炎', '陈旧性脑梗塞'],
            correctAnswer: '右额颞叶脑梗塞',
            analysis: {
                findings: '典型CT：右额颞叶见片状低密度灶，边界欠清，占位效应不明显。',
                diagnosis: '右额颞叶脑梗塞。',
                differential: '肿瘤（占位效应，肌力可）。'
            }
        },
        {
            id: 'neuro_case10', module: '神经系统', title: '病例10: 男，45岁，头痛呕吐',
            images: ['images/8._2025神经系统见习_slide_68_img_1.jpg', 'images/8._2025神经系统见习_slide_69_img_1.jpg'],
            clinicalInfo: '男，45岁。头痛半年，呕吐3月。',
            question: '最可能的诊断是？',
            options: ['左顶枕叶胶质瘤', '脑脓肿', '单发脑转移瘤', '脑梗死'],
            correctAnswer: '左顶枕叶胶质瘤',
            analysis: {
                findings: '典型CT：CT平扫（A、B）左侧顶、枕叶见环形略高密度影（↑）、见占位效应，周围见大片状低密度水肿区，同侧侧脑室受压、变形；增强扫描（C、D）病灶呈环形不均匀强化。',
                diagnosis: '左顶枕叶胶质瘤。',
                differential: '脑梗死（符合血管分布，脑回状强化）、脑脓肿（环形厚壁强化，内壁光滑）、单发脑转移瘤（原发瘤病史）、淋巴瘤（常多发）。'
            }
        },
        {
            id: 'neuro_case11', module: '神经系统', title: '病例11: 女，52岁，偏头痛数年',
            images: ['images/8._2025神经系统见习_slide_70_img_1.jpg', 'images/8._2025神经系统见习_slide_71_img_1.jpg'],
            clinicalInfo: '女，52岁，偏头痛数年',
            question: '最可能的诊断是？',
            options: ['左侧顶枕部脑膜瘤', '左侧顶枕部胶质瘤', '颅骨骨瘤', '脑转移瘤'],
            correctAnswer: '左侧顶枕部脑膜瘤',
            analysis: {
                findings: '典型CT：左侧顶枕部见一类圆形高密度影，边缘清楚，以宽基底与颅骨内板接触，占位征象不明显，周围脑组织水肿不明显。明显均匀强化。',
                diagnosis: '左侧顶枕部脑膜瘤。',
                differential: '胶质瘤（不均匀强化，瘤周水肿）。'
            }
        },
        {
            id: 'neuro_case12', module: '神经系统', title: '病例12: 男，58岁，头痛半月 (肺癌史)',
            images: ['images/8._2025神经系统见习_slide_72_img_1.png', 'images/8._2025神经系统见习_slide_72_img_2.png'],
            clinicalInfo: '男，58岁。头痛半月。半年前查出肺癌。',
            question: '最可能的诊断是？',
            options: ['脑多发转移瘤', '脑脓肿', '脑结核', '多中心性胶质瘤'],
            correctAnswer: '脑多发转移瘤',
            analysis: {
                findings: '典型CT：左侧额顶叶多个环形略高密度影，周围伴片状低密度水肿，环形强化。',
                diagnosis: '脑多发转移瘤。',
                differential: '脑脓肿（发热、白细胞高，脑表面脑回状强化）；脑结核（结核病史，脑底池钙化斑）；多中心性胶质瘤（无原发肿瘤）。'
            }
        },
        {
            id: 'neuro_case13', module: '神经系统', title: '病例13: 女性，22岁，闭经、泌乳',
            images: ['images/8._2025神经系统见习_slide_86_img_1.jpg', 'images/8._2025神经系统见习_slide_86_img_2.png'],
            clinicalInfo: '女性，22岁，闭经、泌乳查因；',
            question: '最可能的诊断是？',
            options: ['垂体巨腺瘤', '颅咽管瘤', '鞍区脑膜瘤', '鞍内动脉瘤'],
            correctAnswer: '垂体巨腺瘤',
            analysis: {
                findings: '典型MRI：垂体窝占位性病变。T1WI（A、B）呈不均匀等信号；增强扫描（C、D）呈明显强化，可见典型“束腰征”（↑）。',
                diagnosis: '垂体巨腺瘤。',
                differential: '颅咽管瘤（鞍上为主，无束腰征，壳样钙化，垂体可见）；脑膜瘤（无束腰征，均匀信号，脑膜尾征，垂体可见）；动脉瘤（垂体可见，明显强化）。'
            }
        },
        {
            id: 'neuro_case14', module: '神经系统', title: '病例14: 男，45岁，头痛1年',
            images: ['images/8._2025神经系统见习_slide_88_img_1.jpg', 'images/8._2025神经系统见习_slide_89_img_1.jpg'],
            clinicalInfo: '男，45岁，头痛1年。',
            question: '最可能的诊断是？',
            options: ['左侧桥脑小脑角区听神经瘤', '脑膜瘤', '表皮样瘤', '三叉神经鞘瘤'],
            correctAnswer: '左侧桥脑小脑角区听神经瘤',
            analysis: {
                findings: '典型MRI：左侧桥脑小脑角区一类圆形占位。T1WI不均匀低信号，T2WI不均匀高信号，以左侧内听道为中心，界清；不均匀强化，左侧面听神经束增粗强化（↑）。',
                diagnosis: '左侧桥脑小脑角区听神经瘤。',
                differential: '脑膜瘤（内听道无扩大，密度均匀，多见钙化，明显均匀强化）；表皮样瘤（内听道无扩大，水样或脂肪样，无明显强化）。'
            }
        }
    ];