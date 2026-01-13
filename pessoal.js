        // Sistema avançado de scroll reveal com timing personalizado
        function revealOnScroll() {
            const reveals = document.querySelectorAll('.reveal');
            
            reveals.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.classList.add('revealed');
                }
            });
        }

        // Sistema de hover premium para package cards
        function initPackageCards() {
            const packageCards = document.querySelectorAll('.package-card');
            
            packageCards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    // Efeito especial para o featured
                    if (this.classList.contains('featured')) {
                        this.style.transform = 'translateY(-20px) scale(1.05)';
                        this.style.boxShadow = '0 40px 80px var(--shadow-gold)';
                    } else {
                        this.style.transform = 'translateY(-15px)';
                    }
                });
                
                card.addEventListener('mouseleave', function() {
                    if (this.classList.contains('featured')) {
                        this.style.transform = 'translateY(-10px) scale(1)';
                        this.style.boxShadow = '0 20px 40px var(--shadow-gold)';
                    } else {
                        this.style.transform = 'translateY(0)';
                    }
                });
            });
        }

        // Animação especial para stats no hero
        function animateHeroStats() {
            const statNumbers = document.querySelectorAll('.stat-number');
            
            statNumbers.forEach(stat => {
                const finalValue = stat.textContent;
                let currentValue = 0;
                const increment = finalValue.includes('%') ? 1 : 0.1;
                const isPercentage = finalValue.includes('%');
                const isMultiplier = finalValue.includes('x');
                
                const timer = setInterval(() => {
                    currentValue += increment;
                    
                    if (isPercentage) {
                        stat.textContent = Math.floor(currentValue) + '%';
                        if (currentValue >= parseInt(finalValue)) {
                            stat.textContent = finalValue;
                            clearInterval(timer);
                        }
                    } else if (isMultiplier) {
                        stat.textContent = Math.floor(currentValue) + 'x';
                        if (currentValue >= parseInt(finalValue)) {
                            stat.textContent = finalValue;
                            clearInterval(timer);
                        }
                    } else {
                        stat.textContent = Math.floor(currentValue) + '%';
                        if (currentValue >= 100) {
                            stat.textContent = finalValue;
                            clearInterval(timer);
                        }
                    }
                }, 50);
            });
        }

        // Sistema de comparação visual entre problemas e soluções
        function initProblemsComparison() {
            const problemItems = document.querySelectorAll('.problem-item');
            const solutionItems = document.querySelectorAll('.solution-item');
            
            problemItems.forEach((problem, index) => {
                problem.addEventListener('mouseenter', function() {
                    // Destaca a solução correspondente
                    if (solutionItems[index]) {
                        solutionItems[index].style.transform = 'translateY(-5px)';
                        solutionItems[index].style.borderColor = 'var(--primary-gold)';
                    }
                });
                
                problem.addEventListener('mouseleave', function() {
                    if (solutionItems[index]) {
                        solutionItems[index].style.transform = 'translateY(0)';
                        solutionItems[index].style.borderColor = 'var(--glass-border)';
                    }
                });
            });
        }

        // Efeito de partículas flutuantes para o hero VIP
        function createFloatingParticles() {
            const hero = document.querySelector('.hero');
            
            for (let i = 0; i < 10; i++) {
                const particle = document.createElement('div');
                particle.style.cssText = `
                    position: absolute;
                    width: 4px;
                    height: 4px;
                    background: var(--primary-gold);
                    border-radius: 50%;
                    opacity: 0.3;
                    animation: float${i} ${8 + Math.random() * 4}s infinite ease-in-out;
                    left: ${Math.random() * 100}%;
                    top: ${Math.random() * 100}%;
                `;
                
                // Cria animação única para cada partícula
                const style = document.createElement('style');
                style.textContent = `
                    @keyframes float${i} {
                        0%, 100% { transform: translateY(0px) translateX(0px); }
                        25% { transform: translateY(-20px) translateX(10px); }
                        50% { transform: translateY(-10px) translateX(-15px); }
                        75% { transform: translateY(-30px) translateX(5px); }
                    }
                `;
                document.head.appendChild(style);
                hero.appendChild(particle);
            }
        }

        // Sistema de tracking avançado para analytics VIP
        function initVIPTracking() {
            let engagementScore = 0;
            const interactions = [];
            
            // Track package card interests
            document.querySelectorAll('.package-card').forEach((card, index) => {
                card.addEventListener('mouseenter', () => {
                    interactions.push({
                        type: 'package_interest',
                        package: index,
                        timestamp: Date.now()
                    });
                    engagementScore += 5;
                });
            });
            
            // Track case study engagement
            document.querySelectorAll('.case-card').forEach((card, index) => {
                card.addEventListener('mouseenter', () => {
                    interactions.push({
                        type: 'case_study_view',
                        case: index,
                        timestamp: Date.now()
                    });
                    engagementScore += 3;
                });
            });
            
            // Track scroll depth milestones
            window.addEventListener('scroll', () => {
                const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
                
                if (scrollPercent > 25 && !window.milestone25) {
                    window.milestone25 = true;
                    engagementScore += 10;
                }
                if (scrollPercent > 50 && !window.milestone50) {
                    window.milestone50 = true;
                    engagementScore += 15;
                }
                if (scrollPercent > 75 && !window.milestone75) {
                    window.milestone75 = true;
                    engagementScore += 20;
                }
                if (scrollPercent > 90 && !window.milestone90) {
                    window.milestone90 = true;
                    engagementScore += 25;
                }
            });
            
            // High-intent actions
            document.querySelectorAll('.package-cta, .vip-cta').forEach(cta => {
                cta.addEventListener('click', () => {
                    interactions.push({
                        type: 'high_intent_click',
                        element: cta.textContent,
                        timestamp: Date.now(),
                        engagement_score: engagementScore
                    });
                });
            });
        }

        // Efeito especial para o CTA VIP final
        function initVIPCTA() {
            const vipCTA = document.querySelector('.vip-cta');
            
            vipCTA.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px) scale(1.05)';
                
                // Efeito de onda dourada
                const wave = document.createElement('div');
                wave.style.cssText = `
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 0;
                    height: 0;
                    background: radial-gradient(circle, rgba(212, 175, 55, 0.3) 0%, transparent 70%);
                    border-radius: 50%;
                    transform: translate(-50%, -50%);
                    animation: waveExpand 1s ease-out;
                    pointer-events: none;
                    z-index: -1;
                `;
                
                this.style.position = 'relative';
                this.appendChild(wave);
                
                // Remove a onda após a animação
                setTimeout(() => {
                    if (wave.parentNode) {
                        wave.remove();
                    }
                }, 1000);
            });
            
            vipCTA.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
            
            // Adiciona a animação CSS
            const style = document.createElement('style');
            style.textContent = `
                @keyframes waveExpand {
                    0% { width: 0; height: 0; opacity: 1; }
                    100% { width: 200px; height: 200px; opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }

        // Inicialização completa
        document.addEventListener('DOMContentLoaded', function() {
            revealOnScroll();
            initPackageCards();
            initProblemsComparison();
            initVIPTracking();
            initVIPCTA();
            initFAQSystem();
            initGuaranteeCards();
            createFloatingParticles();
            createUrgencyEffect();
            initSmartScroll();
            
            // Anima stats após um delay
            setTimeout(animateHeroStats, 1000);
            
            // Animação inicial dos guarantee cards
            document.querySelectorAll('.guarantee-card').forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                card.style.transition = 'all 0.6s ease-out';
            });
        });

        // Scroll listeners
        window.addEventListener('scroll', revealOnScroll);

        // Smooth scroll para links internos
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });