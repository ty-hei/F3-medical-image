document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const moduleName = params.get('module');

    if (!moduleName) {
        document.getElementById('quiz-area').innerHTML = '<h1>错误：未选择模块。请返回主页重新选择。</h1>';
        return;
    }

    document.getElementById('quiz-header').textContent = `${moduleName} - 刷题模式`;

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    let quizCases = allCases.filter(c => c.module === moduleName);
    shuffleArray(quizCases);

    let currentQuestionIndex = 0;
    const quizArea = document.getElementById('quiz-area');
    const nextBtn = document.getElementById('next-question-btn');
    const progressText = document.getElementById('quiz-progress');

    function displayCurrentQuestion() {
        nextBtn.style.display = 'none';

        if (currentQuestionIndex >= quizCases.length) {
            quizArea.innerHTML = `<h1>🎉 恭喜！您已完成本模块所有题目！</h1>`;
            progressText.textContent = `总题数: ${quizCases.length} | 已完成`;
            return;
        }

        const caseData = quizCases[currentQuestionIndex];
        progressText.textContent = `进度: ${currentQuestionIndex + 1} / ${quizCases.length}`;
        
        // *** 修正点：随机化选项顺序 ***
        let shuffledOptions = [...caseData.options]; // 创建选项数组的副本
        shuffleArray(shuffledOptions); // 打乱副本的顺序

        quizArea.innerHTML = `
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
            </div>`;

        const optionButtons = quizArea.querySelectorAll('.option-btn');
        const analysisSection = quizArea.querySelector('.analysis-section');

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
                nextBtn.style.display = 'inline-block';
            });
        });
        
        quizArea.querySelectorAll('.image-gallery img').forEach(img => {
            img.onclick = () => showZoomModal(img.src);
        });
    }

    nextBtn.addEventListener('click', () => {
        currentQuestionIndex++;
        displayCurrentQuestion();
    });

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

    displayCurrentQuestion();
});