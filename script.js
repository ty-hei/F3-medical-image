document.addEventListener('DOMContentLoaded', function() {
    
    // Fisher-Yates Shuffle 算法，用于随机排序数组
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    const modules = [...new Set(allCases.map(c => c.module))];
    const moduleSelection = document.getElementById('module-selection');
    const caseContainer = document.getElementById('case-container');
    const modal = document.getElementById('case-modal');
    const modalBody = document.getElementById('modal-body');
    const closeModalBtn = modal.querySelector('.close-btn');

    // 创建模块按钮和刷题模式按钮
    modules.forEach(moduleName => {
        const wrapper = document.createElement('div');
        wrapper.className = 'module-btn-group';

        const btn = document.createElement('button');
        btn.className = 'module-btn';
        btn.textContent = moduleName;
        btn.dataset.module = moduleName;
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.module-btn-group .module-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            displayCases(moduleName);
        });

        const quizBtn = document.createElement('a');
        quizBtn.className = 'quiz-mode-btn';
        quizBtn.textContent = '刷题模式';
        quizBtn.href = `quiz.html?module=${encodeURIComponent(moduleName)}`;
        
        wrapper.appendChild(btn);
        wrapper.appendChild(quizBtn);
        moduleSelection.appendChild(wrapper);
    });

    // 为样式添加 module-btn-group 的定义
    const style = document.createElement('style');
    style.innerHTML = `
        .module-btn-group { display: flex; border: 1px solid var(--primary-color); border-radius: 20px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
        .module-btn-group .module-btn { border: none; border-radius: 0; }
        .module-btn-group .quiz-mode-btn { 
            display: inline-block;
            padding: 10px 15px;
            background-color: #e7f3ff;
            color: var(--primary-color);
            text-decoration: none;
            font-size: 0.9em;
            transition: background-color 0.3s;
            border-left: 1px solid var(--primary-color);
        }
        .module-btn-group .quiz-mode-btn:hover { background-color: #d0e8ff; }
    `;
    document.head.appendChild(style);


    function displayCases(moduleName) {
        caseContainer.innerHTML = '';
        let filteredCases = allCases.filter(c => c.module === moduleName);
        shuffleArray(filteredCases); //  随机排序病例卡片！
        
        filteredCases.forEach(caseData => {
            const card = document.createElement('div');
            card.className = 'case-card';
            card.innerHTML = `
                <h3>${caseData.title}</h3>
                <p>${caseData.clinicalInfo}</p>
                <div class="case-card-footer">${caseData.module}</div>
            `;
            card.addEventListener('click', () => showCaseDetail(caseData));
            caseContainer.appendChild(card);
        });
    }

    function showCaseDetail(caseData) {
        // *** 修正点：随机化选项顺序 ***
        let shuffledOptions = [...caseData.options]; // 创建选项数组的副本
        shuffleArray(shuffledOptions); // 打乱副本的顺序

        modalBody.innerHTML = `
            <h2>${caseData.title}</h2>
            <div class="case-detail-layout">
                <div class="left-panel">
                    <div class="image-gallery">
                        ${caseData.images.map(img => `<img src="${img}" alt="病例影像">`).join('')}
                    </div>
                </div>
                <div class="right-panel">
                    <div class="info-section">
                        <h4>病史与体查</h4>
                        <p>${caseData.clinicalInfo}</p>
                    </div>
                    <div class="quiz-section">
                        <h4>${caseData.question}</h4>
                        <div class="options-grid">
                            ${shuffledOptions.map(opt => `<button class="option-btn">${opt}</button>`).join('')}
                        </div>
                    </div>
                    <div class="analysis-section">
                        <h4>影像学分析与诊断</h4>
                        <p><strong>影像学表现:</strong> ${caseData.analysis.findings}</p>
                        <p><strong>诊断:</strong> ${caseData.analysis.diagnosis}</p>
                        <p><strong>鉴别诊断:</strong> ${caseData.analysis.differential}</p>
                    </div>
                </div>
            </div>
        `;
        modal.style.display = 'block';

        const optionButtons = modalBody.querySelectorAll('.option-btn');
        const analysisSection = modalBody.querySelector('.analysis-section');

        optionButtons.forEach(button => {
            button.addEventListener('click', function() {
                optionButtons.forEach(btn => btn.disabled = true);
                if (this.textContent === caseData.correctAnswer) {
                    this.classList.add('correct');
                } else {
                    this.classList.add('incorrect');
                    optionButtons.forEach(btn => {
                        if (btn.textContent === caseData.correctAnswer) btn.classList.add('correct');
                    });
                }
                analysisSection.style.display = 'block';
            });
        });
        
        modal.querySelectorAll('.image-gallery img').forEach(img => {
            img.onclick = () => showZoomModal(img.src);
        });
    }

    moduleSelection.addEventListener('click', function(e) {
        const targetButton = e.target.closest('.module-btn');
        if (targetButton) {
            document.querySelectorAll('.module-btn').forEach(btn => btn.classList.remove('active'));
            targetButton.classList.add('active');
            displayCases(targetButton.dataset.module);
        }
    });

    closeModalBtn.onclick = () => modal.style.display = 'none';
    window.onclick = (event) => {
        if (event.target === modal) modal.style.display = 'none';
    }
    
    function showZoomModal(src) {
        const zoomModal = document.getElementById('zoom-modal');
        const modalImg = document.getElementById("zoomed-img");
        const zoomCloseBtn = zoomModal.querySelector('.zoom-close');

        zoomModal.style.display = "block";
        modalImg.src = src;

        zoomCloseBtn.onclick = () => zoomModal.style.display = "none";
        zoomModal.onclick = (e) => {
             if(e.target === zoomModal) zoomModal.style.display = "none";
        }
    }

    if (modules.length > 0) {
        const firstModuleButton = moduleSelection.querySelector('.module-btn');
        if (firstModuleButton) {
            firstModuleButton.classList.add('active');
            displayCases(modules[0]);
        }
    }
});